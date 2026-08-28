// La app usa atributos onclick="" en línea de forma masiva (así funcionan
// casi todos los botones), por lo que script-src necesita 'unsafe-inline'.
// Igual se restringen los dominios permitidos y se bloquean iframes,
// carga de <object>/<embed> y cambios del <base>.
const CSP = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' https://unpkg.com https://cdn.jsdelivr.net https://www.gstatic.com https://apis.google.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: blob: https:",
    "connect-src 'self' https://*.googleapis.com https://*.firebaseio.com wss://*.firebaseio.com https://*.cloudfunctions.net https://firebasestorage.googleapis.com https://unpkg.com https://cdn.jsdelivr.net https://www.gstatic.com",
    "frame-src 'self' https://compras-cth.firebaseapp.com https://accounts.google.com https://firebasestorage.googleapis.com",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'"
].join('; ');

function addSecurityHeaders(response) {
    const headers = new Headers(response.headers);
    headers.set('Content-Security-Policy', CSP);
    headers.set('X-Content-Type-Options', 'nosniff');
    headers.set('X-Frame-Options', 'DENY');
    headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    headers.set('Permissions-Policy', 'geolocation=(), camera=(), microphone=(), payment=(), usb=()');
    headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers
    });
}

export default {
    async fetch(request, env) {
        const url = new URL(request.url);

        if (url.pathname.startsWith('/__/')) {
            const firebaseUrl = 'https://compras-cth.firebaseapp.com' + url.pathname + url.search;
            const resp = await fetch(firebaseUrl, {
                method: request.method,
                headers: request.headers,
                body: ['GET', 'HEAD'].includes(request.method) ? undefined : request.body,
                redirect: 'follow',
            });
            return addSecurityHeaders(resp);
        }

        const resp = await env.ASSETS.fetch(request);
        return addSecurityHeaders(resp);
    }
};
