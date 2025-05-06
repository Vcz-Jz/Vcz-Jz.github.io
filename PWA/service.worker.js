const CACHE_NAME = "inventors-pwa-v1";
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/data.json',
  '/manifest.json',
  '/images/icon-192.png',
  '/images/icon-512.png',
  '/images/nikola_tesla.jpg',
  '/images/marie_curie.jpg',
  '/images/thomas_edison.png',
  '/images/benjamin_franklin.png',
  '/images/graham_bell.png',
  '/images/da_vinci.png',
  '/images/lee.png',
  '/images/barton.png',
  'audio/nikola_tesla.mp3',
  'audio/marie_curie.mp3',
  'audio/thomas_edison.mp3',
  'audio/benjamin_franklin.mp3',
  'audio/graham_bell.mp3',
  'audio/da_vinci.mp3',
  'audio/lee.mp3',
  'audio/barton.mp3',
];

self.addEventListener("install", evt => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", evt => {
  evt.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(
        keyList.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", evt => {
  evt.respondWith(
    caches.match(evt.request).then(response => {
      return response || fetch(evt.request);
    })
  );
});
