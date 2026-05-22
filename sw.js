const CACHE_VERSION = 'uib-contabilidad-v2.41';
const STATIC_ASSETS = [
    '/assets/logo-uib.png',
    '/assets/encabezado%20orden%20de%20compra.png',
    '/assets/andrea-toledo.png',
    '/assets/nidia-londono.png'
];

// Install: solo cachear imágenes estáticas
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_VERSION).then((cache) => cache.addAll(STATIC_ASSETS))
    );
    self.skipWaiting();
});

// Activate: eliminar todos los cachés anteriores
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k)))
        )
    );
    self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;

    const url = event.request.url;

    // Dejar pasar siempre: Firebase, Google APIs, CDNs externos
    if (
        url.includes('firestore.googleapis.com') ||
        url.includes('firebase') ||
        url.includes('firebasestorage.app') ||
        url.includes('storage.googleapis.com') ||
        url.includes('googleapis.com') ||
        url.includes('accounts.google.com') ||
        url.includes('gstatic.com') ||
        url.includes('fonts.googleapis.com') ||
        url.includes('fonts.gstatic.com') ||
        url.includes('unpkg.com') ||
        url.includes('cdn.jsdelivr.net')
    ) return;

    // JS, CSS, HTML → siempre red primero, sin caché
    if (
        url.endsWith('.js') || url.includes('.js?') ||
        url.endsWith('.css') || url.includes('.css?') ||
        url.endsWith('.html') || url === self.location.origin + '/'
    ) {
        event.respondWith(
            fetch(event.request).catch(() => caches.match(event.request))
        );
        return;
    }

    // Imágenes estáticas → caché primero, red como respaldo
    event.respondWith(
        caches.match(event.request).then((cached) => {
            if (cached) return cached;
            return fetch(event.request).then((response) => {
                if (response.status === 200) {
                    const clone = response.clone();
                    caches.open(CACHE_VERSION).then((cache) => cache.put(event.request, clone));
                }
                return response;
            });
        })
    );
});
