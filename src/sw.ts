/// <reference lib="webworker" />
declare const self: ServiceWorkerGlobalScope & typeof globalThis;
declare const __WB_MANIFEST: any;
import { precacheAndRoute } from 'workbox-precaching';
precacheAndRoute(__WB_MANIFEST);

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});
