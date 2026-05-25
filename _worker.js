export default {
    async fetch(request, env) {
        const url = new URL(request.url);

        if (url.pathname.startsWith('/__/')) {
            const firebaseUrl = 'https://compras-cth.firebaseapp.com' + url.pathname + url.search;
            return fetch(firebaseUrl, {
                method: request.method,
                headers: request.headers,
                body: ['GET', 'HEAD'].includes(request.method) ? undefined : request.body,
                redirect: 'follow',
            });
        }

        return env.ASSETS.fetch(request);
    }
};
