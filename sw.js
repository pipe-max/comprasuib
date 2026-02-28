const CACHE_NAME = 'uib-contabilidad-v2.5';
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/style.css',
    '/app.js',
    '/assets/logo-uib.png',
    '/assets/encabezado orden de compra.png',
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
