const { onDocumentCreated } = require('firebase-functions/v2/firestore');
const { onRequest } = require('firebase-functions/v2/https');
const { onSchedule } = require('firebase-functions/v2/scheduler');
const { defineSecret } = require('firebase-functions/params');
const { initializeApp } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const { getStorage } = require('firebase-admin/storage');
const { getMessaging } = require('firebase-admin/messaging');
const { getAuth } = require('firebase-admin/auth');
const nodemailer = require('nodemailer');

const GMAIL_PASS = defineSecret('GMAIL_APP_PASSWORD');
const CALLMEBOT_APIKEY = defineSecret('CALLMEBOT_APIKEY');
const CALLMEBOT_PHONE = '573043372383';

initializeApp();

// ─── Rate limiting: máximo N llamadas por usuario por hora ───
async function checkRateLimit(uid, action, maxPerHour) {
    const db = getFirestore();
    const key = `${uid}_${action}`;
    const ref = db.collection('rateLimits').doc(key);
    const now = Date.now();
    const windowMs = 60 * 60 * 1000; // 1 hora

    const doc = await ref.get();
    if (doc.exists) {
        const { count, windowStart } = doc.data();
        if (now - windowStart < windowMs) {
            if (count >= maxPerHour) return false;
            await ref.update({ count: count + 1 });
        } else {
            await ref.set({ count: 1, windowStart: now });
        }
    } else {
        await ref.set({ count: 1, windowStart: now });
    }
    return true;
}

// ─── Validar token y retornar UID ───
async function verifyAuth(req, res) {
    const authHeader = req.headers.authorization || '';
    const idToken = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
    if (!idToken) { res.status(401).send('Unauthorized'); return null; }
    try {
        const decoded = await getAuth().verifyIdToken(idToken);
        return decoded;
    } catch {
        res.status(401).send('Unauthorized');
        return null;
    }
}

// ─── Enviar correo de aprobación al solicitante (HTTP) ───
exports.sendApprovalEmail = onRequest(
    { region: 'us-central1', cors: true, secrets: [GMAIL_PASS] },
    async (req, res) => {
        if (req.method !== 'POST') { res.status(405).send('Method Not Allowed'); return; }

        const decoded = await verifyAuth(req, res);
        if (!decoded) return;

        const allowed = await checkRateLimit(decoded.uid, 'email', 20);
        if (!allowed) { res.status(429).send('Too Many Requests'); return; }

        const { to, subject, message } = req.body;
        if (!to || !subject) { res.status(400).send('Faltan campos to o subject'); return; }

        // Validar que el destinatario tenga formato de email válido
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to)) {
            res.status(400).send('Email destinatario inválido');
            return;
        }

        try {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: { user: 'pipe@theodoro.edu.co', pass: GMAIL_PASS.value() }
            });
            await transporter.sendMail({
                from: '"Contabilidad UIB" <pipe@theodoro.edu.co>',
                to,
                subject,
                text: message
            });
            console.log('✅ Correo enviado a', to);
            res.status(200).send('OK');
        } catch (err) {
            console.error('❌ Error enviando correo:', err.message);
            res.status(500).send(err.message);
        }
    }
);

// ─── Enviar correo con PDF adjunto automáticamente ───
exports.sendOrderEmail = onRequest(
    { region: 'us-central1', cors: true, secrets: [GMAIL_PASS] },
    async (req, res) => {
        if (req.method !== 'POST') { res.status(405).send('Method Not Allowed'); return; }

        const decoded = await verifyAuth(req, res);
        if (!decoded) return;

        const allowed = await checkRateLimit(decoded.uid, 'sendOrderEmail', 30);
        if (!allowed) { res.status(429).send('Too Many Requests'); return; }

        const { to, cc, subject, body, pdfBase64, pdfFilename, senderEmail } = req.body;
        if (!to || !subject || !body) { res.status(400).send('Faltan campos requeridos'); return; }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to)) { res.status(400).send('Email destinatario inválido'); return; }

        try {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: { user: 'pipe@theodoro.edu.co', pass: GMAIL_PASS.value() }
            });

            const fromDisplay = senderEmail
                ? `"Contabilidad UIB (${senderEmail})" <pipe@theodoro.edu.co>`
                : '"Contabilidad UIB" <pipe@theodoro.edu.co>';

            const mailOptions = {
                from: fromDisplay,
                replyTo: senderEmail || 'pipe@theodoro.edu.co',
                to,
                cc: cc || '',
                subject,
                text: body,
            };

            if (pdfBase64 && pdfFilename) {
                const ext = pdfFilename.split('.').pop().toLowerCase();
                const mimeMap = { pdf: 'application/pdf', png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', webp: 'image/webp' };
                mailOptions.attachments = [{
                    filename: pdfFilename,
                    content: pdfBase64,
                    encoding: 'base64',
                    contentType: mimeMap[ext] || 'application/octet-stream'
                }];
            }

            await transporter.sendMail(mailOptions);
            console.log('✅ Correo enviado a', to, pdfFilename ? `con adjunto: ${pdfFilename}` : 'sin adjunto');
            res.status(200).json({ ok: true });
        } catch (err) {
            console.error('❌ Error enviando correo con PDF:', err.message);
            res.status(500).send(err.message);
        }
    }
);

// ─── Enviar WhatsApp via CallMeBot (HTTP) ───
exports.sendWhatsApp = onRequest(
    { region: 'us-central1', cors: true, secrets: [CALLMEBOT_APIKEY] },
    async (req, res) => {
        if (req.method !== 'POST') { res.status(405).send('Method Not Allowed'); return; }

        const decoded = await verifyAuth(req, res);
        if (!decoded) return;

        const allowed = await checkRateLimit(decoded.uid, 'whatsapp', 10);
        if (!allowed) { res.status(429).send('Too Many Requests'); return; }

        const { message } = req.body;
        if (!message) { res.status(400).send('Falta campo message'); return; }

        try {
            const encoded = encodeURIComponent(message);
            const url = `https://api.callmebot.com/whatsapp.php?phone=${CALLMEBOT_PHONE}&text=${encoded}&apikey=${CALLMEBOT_APIKEY.value()}`;
            const response = await fetch(url);
            console.log('✅ WhatsApp enviado, status:', response.status);
            res.status(200).send('OK');
        } catch (err) {
            console.error('❌ Error enviando WhatsApp:', err.message);
            res.status(500).send(err.message);
        }
    }
);

// Se dispara cuando app.js escribe en notifications/{notifId}
exports.sendApprovalNotification = onDocumentCreated(
    { document: 'notifications/{notifId}', region: 'us-central1' },
    async (event) => {
        const data = event.data?.data();
        if (!data) return;

        const { recipientEmail, orderId, provider } = data;
        if (!recipientEmail || !orderId) return;

        try {
            // Buscar token FCM del solicitante
            const tokenDoc = await getFirestore()
                .collection('fcmTokens')
                .doc(recipientEmail)
                .get();

            if (!tokenDoc.exists) {
                console.log('Sin token FCM para:', recipientEmail);
                await event.data.ref.delete();
                return;
            }

            const { token } = tokenDoc.data();
            if (!token) {
                await event.data.ref.delete();
                return;
            }

            // Enviar notificación push
            await getMessaging().send({
                token,
                notification: {
                    title: '✅ Orden aprobada',
                    body: `Tu orden ${orderId} (${provider || 'proveedor'}) fue aprobada y firmada`
                },
                data: { orderId },
                webpush: {
                    notification: {
                        icon: 'https://comprasuib.netlify.app/assets/logo-uib.png',
                        badge: 'https://comprasuib.netlify.app/assets/logo-uib.png'
                    },
                    fcmOptions: { link: 'https://comprasuib.netlify.app' }
                }
            });

            console.log(`Notificación enviada a ${recipientEmail} para orden ${orderId}`);
        } catch (err) {
            console.error('Error enviando notificación:', err.message);
        }

        // Borrar el documento de notificación una vez procesado
        await event.data.ref.delete();
    }
);

// ─── Backup semanal automático a Cloud Storage (cada lunes a las 3am Bogotá) ───
exports.weeklyBackup = onSchedule(
    { schedule: '0 8 * * 1', timeZone: 'America/Bogota', region: 'us-central1' },
    async () => {
        const db = getFirestore();
        const bucket = getStorage().bucket();
        const fecha = new Date().toISOString().split('T')[0];

        try {
            // Exportar órdenes
            const ordersSnap = await db.collection('orders').get();
            const orders = ordersSnap.docs.map(d => d.data());

            // Exportar proveedores
            const providersSnap = await db.collection('providers').get();
            const providers = providersSnap.docs.map(d => d.data());

            const backup = {
                fecha,
                totalOrdenes: orders.length,
                totalProveedores: providers.length,
                orders,
                providers
            };

            const fileName = `backups/${fecha}_backup.json`;
            const file = bucket.file(fileName);
            await file.save(JSON.stringify(backup, null, 2), {
                contentType: 'application/json',
                metadata: { cacheControl: 'no-cache' }
            });

            console.log(`✅ Backup semanal guardado: ${fileName} (${orders.length} órdenes, ${providers.length} proveedores)`);
        } catch (err) {
            console.error('❌ Error en backup semanal:', err.message);
        }
    }
);

// ─── Recibir errores del frontend y guardarlos en Firestore ───
exports.logClientError = onRequest(
    { region: 'us-central1', cors: true },
    async (req, res) => {
        if (req.method !== 'POST') { res.status(405).send('Method Not Allowed'); return; }

        const { error, context, userEmail } = req.body;
        if (!error) { res.status(400).send('Falta campo error'); return; }

        try {
            const db = getFirestore();
            await db.collection('clientErrors').add({
                error: String(error).slice(0, 500),
                context: context || '',
                userEmail: userEmail || 'desconocido',
                timestamp: new Date().toISOString(),
                userAgent: req.headers['user-agent'] || ''
            });
            res.status(200).send('OK');
        } catch (err) {
            console.error('Error guardando log:', err.message);
            res.status(500).send('Error');
        }
    }
);

// ─── Reservar consecutivo de orden atómicamente (evita colisiones) ───
exports.reserveOrderNumber = onRequest(
    { region: 'us-central1', cors: true },
    async (req, res) => {
        if (req.method !== 'POST') { res.status(405).send('Method Not Allowed'); return; }

        const decoded = await verifyAuth(req, res);
        if (!decoded) return;

        const allowed = await checkRateLimit(decoded.uid, 'reserveOrder', 30);
        if (!allowed) { res.status(429).send('Too Many Requests'); return; }

        const BASE_ORDER_NUM = 1247;
        const db = getFirestore();
        const counterRef = db.collection('counters').doc('orderNumber');

        try {
            const nextNum = await db.runTransaction(async (t) => {
                const counterDoc = await t.get(counterRef);

                if (counterDoc.exists) {
                    // Documento counter ya existe: incrementar
                    const current = counterDoc.data().current || BASE_ORDER_NUM;
                    const next = current + 1;
                    t.update(counterRef, { current: next, lastReservedBy: decoded.email, lastReservedAt: new Date().toISOString() });
                    return next;
                } else {
                    // Primera vez: leer todas las órdenes para calcular el máximo actual
                    // Esto solo pasa una vez para inicializar el counter
                    const ordersSnap = await db.collection('orders').get();
                    let maxNum = BASE_ORDER_NUM;
                    ordersSnap.forEach(doc => {
                        const data = doc.data();
                        const id = data.id || doc.id;
                        const n = parseInt(String(id).replace('OC-', ''), 10);
                        if (!isNaN(n) && n > maxNum) maxNum = n;
                    });
                    const next = maxNum + 1;
                    t.set(counterRef, { current: next, lastReservedBy: decoded.email, lastReservedAt: new Date().toISOString() });
                    return next;
                }
            });

            console.log(`✅ Consecutivo ${nextNum} reservado por ${decoded.email}`);
            res.status(200).json({ orderNumber: nextNum });
        } catch (err) {
            console.error('❌ Error reservando consecutivo:', err.message);
            res.status(500).json({ error: 'No se pudo reservar el consecutivo' });
        }
    }
);

// ─── Monitor semanal de uso de Firebase Storage ───
// Corre cada lunes a las 4am Bogotá. Guarda stats en config/storageStats.
exports.monitorStorageUsage = onSchedule(
    { schedule: '0 9 * * 1', timeZone: 'America/Bogota', region: 'us-central1' },
    async () => {
        const db = getFirestore();
        const bucket = getStorage().bucket();
        const FREE_LIMIT_BYTES = 5 * 1024 * 1024 * 1024; // 5 GB

        try {
            const [files] = await bucket.getFiles();

            let totalBytes = 0;
            const byCategory = { orders: 0, providers: 0, backups: 0, other: 0 };

            for (const file of files) {
                const size = parseInt(file.metadata.size || '0', 10);
                totalBytes += size;
                if (file.name.startsWith('orders/')) byCategory.orders += size;
                else if (file.name.startsWith('providers/')) byCategory.providers += size;
                else if (file.name.startsWith('backups/')) byCategory.backups += size;
                else byCategory.other += size;
            }

            const usedGB = totalBytes / (1024 * 1024 * 1024);
            const pctUsed = (totalBytes / FREE_LIMIT_BYTES) * 100;

            const stats = {
                updatedAt: new Date().toISOString(),
                totalBytes,
                usedGB: Math.round(usedGB * 100) / 100,
                pctUsed: Math.round(pctUsed * 10) / 10,
                freeLimitGB: 5,
                totalFiles: files.length,
                byCategory: {
                    orders: Math.round(byCategory.orders / (1024 * 1024) * 10) / 10,
                    providers: Math.round(byCategory.providers / (1024 * 1024) * 10) / 10,
                    backups: Math.round(byCategory.backups / (1024 * 1024) * 10) / 10,
                    other: Math.round(byCategory.other / (1024 * 1024) * 10) / 10,
                }
            };

            await db.collection('config').doc('storageStats').set(stats);
            console.log(`✅ Storage monitoreado: ${usedGB.toFixed(2)} GB usados (${pctUsed.toFixed(1)}% del límite gratuito)`);
        } catch (err) {
            console.error('❌ Error monitoreando storage:', err.message);
        }
    }
);
