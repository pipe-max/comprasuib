// ─── Firebase Messaging (push notifications en background) ───
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyBHVEbagEIJ5WDklRyyXvh5DjDsNrLbMSc",
    authDomain: "compras-cth.firebaseapp.com",
    projectId: "compras-cth",
    storageBucket: "compras-cth.firebasestorage.app",
    messagingSenderId: "928554603193",
    appId: "1:928554603193:web:568043d2b10291101a4168"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const title = payload.notification?.title || '✅ Orden Aprobada';
    const body  = payload.notification?.body  || 'Una de tus órdenes fue aprobada';
    self.registration.showNotification(title, {
        body,
        icon: '/assets/logo-uib.png',
        badge: '/assets/logo-uib.png',
        tag: 'order-approved',
        data: payload.data || {}
    });
    if (navigator.setAppBadge) navigator.setAppBadge(1).catch(() => {});
});

self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then(clientList => {
            for (const client of clientList) {
                if ('focus' in client) return client.focus();
            }
            return clients.openWindow('/');
        })
    );
});

const CACHE_NAME = 'uib-contabilidad-v2.17';
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/style.css',
    '/app.js',
    '/inventory.js',
    '/assets/logo-uib.png',
    '/assets/encabezado%20orden%20de%20compra.png',
    '/assets/andrea-toledo.png',
    '/assets/nidia-londono.png',
    '/manifest.json'
];

// Install: cache core assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
    self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
            );
        })
    );
    self.clients.claim();
});

// Fetch: network first, fallback to cache
self.addEventListener('fetch', (event) => {
    // Skip non-GET requests and Firebase/Google auth requests
    if (event.request.method !== 'GET') return;
    const url = event.request.url;
    if (url.includes('firestore.googleapis.com') ||
        url.includes('firebase') ||
        url.includes('firebasestorage.app') ||
        url.includes('storage.googleapis.com') ||
        url.includes('googleapis.com/identitytoolkit') ||
        url.includes('accounts.google.com') ||
        url.includes('gstatic.com/firebasejs')) {
        return;
    }

    event.respondWith(
        fetch(event.request)
            .then((response) => {
                // Cache successful responses
                if (response.status === 200) {
                    const responseClone = response.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseClone);
                    });
                }
                return response;
            })
            .catch(() => {
                // Fallback to cache
                return caches.match(event.request);
            })
    );
});
