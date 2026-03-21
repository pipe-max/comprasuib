const { onDocumentCreated } = require('firebase-functions/v2/firestore');
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

// ─── Enviar correo de aprobación al solicitante ───
exports.sendApprovalEmail = onDocumentCreated(
    { document: 'emailQueue/{emailId}', region: 'us-central1' },
    async (event) => {
        const data = event.data?.data();
        if (!data) return;

        const { to, subject, message } = data;
        if (!to || !subject) {
            await event.data.ref.delete();
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
        } catch (err) {
            console.error('❌ Error enviando correo:', err.message);
        }

        await event.data.ref.delete();
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
