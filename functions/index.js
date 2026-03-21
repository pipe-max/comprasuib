const { onDocumentCreated } = require('firebase-functions/v2/firestore');
const { onRequest } = require('firebase-functions/v2/https');
const { initializeApp } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const { getMessaging } = require('firebase-admin/messaging');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'pipe@theodoro.edu.co',
        pass: 'dflxxhiadhtzccdi'
    }
});

initializeApp();

// ─── Enviar correo de aprobación al solicitante (HTTP) ───
exports.sendApprovalEmail = onRequest(
    { region: 'us-central1', cors: true },
    async (req, res) => {
        if (req.method !== 'POST') {
            res.status(405).send('Method Not Allowed');
            return;
        }

        const { to, subject, message } = req.body;
        if (!to || !subject) {
            res.status(400).send('Faltan campos to o subject');
            return;
        }

        try {
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
