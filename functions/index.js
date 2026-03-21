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
