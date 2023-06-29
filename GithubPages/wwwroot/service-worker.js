// In development, always fetch from the network and do not enable offline support.
// This is because caching would make development more difficult (changes would not
// be reflected on the first load after each change).
self.addEventListener('fetch', () => { });

self.addEventListener('fetch', event => event.respondWith(onFetch(event)));

async function onFetch(event) {
    let cachedResponse = null;
    if (event.request.method === 'GET') {
        const shouldServeIndexHtml = event.request.mode === 'navigate';

        let request = shouldServeIndexHtml ? 'index.html' : event.request;
        if (request == "FLAG.txt") {
            request = "DUMMY.txt";
        }
        return  fetch(request);
    }

    return cachedResponse || fetch(event.request);
}