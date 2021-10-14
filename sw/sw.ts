import { precacheAndRoute } from 'workbox-precaching';

//
// https://www.fabrizioduroni.it/2020/08/07/webpack-workbox-service-worker-typescript/
const CACHE_PREFIX = 'vue-ts-starter'

const CACHE_OFFLINE_NAME = `${CACHE_PREFIX}-offline`
const CACHE_SCRIPT_NAME = `${CACHE_PREFIX}-scripts`
const CACHE_STYLES_NAME = `${CACHE_PREFIX}-styles`
const CACHE_DOCUMENTS_NAME = `${CACHE_PREFIX}-documents`
const CACHE_FONTS_NAME = `${CACHE_PREFIX}-fonts`
const CACHE_IMAGES_NAME = `${CACHE_PREFIX}-images`

const OFFLINE_PAGE_URL = '/offline.html'
const OFFLINE_PAGE_NO_NETWORK_IMAGE_URL = '/assets/images/no-wifi.png'

// // Fix self: https://stackoverflow.com/questions/56356655/structuring-a-typescript-project-with-workers
declare const self: ServiceWorkerGlobalScope;
export {};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: __WB_MANIFEST is a placeholder filled by workbox-webpack-plugin with the list of
// dependecies to be cached
// precacheAndRoute(self.__WB_MANIFEST)

// tslint:disable-next-line:no-console
console.log('Hello from service-worker.js');

addEventListener('install', (event: ExtendableEvent) => {
    const offlineUrls = [
        OFFLINE_PAGE_URL,
        OFFLINE_PAGE_NO_NETWORK_IMAGE_URL
    ];
    event.waitUntil(
        Promise.all([
            caches.delete(CACHE_DOCUMENTS_NAME),
            caches.delete(CACHE_SCRIPT_NAME),
            caches.delete(CACHE_STYLES_NAME),
            caches.delete(CACHE_FONTS_NAME),
            caches.delete(CACHE_IMAGES_NAME),
            caches.open(CACHE_OFFLINE_NAME).then((cache) => cache.addAll(offlineUrls))
        ])
    );
})

