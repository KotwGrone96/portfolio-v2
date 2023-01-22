const CACHE_VERSION = 'V2_CACHE_PORTFOLIO';

const STATIC_FILES_TO_CACHE = [
  './assets/projects/fra.jpg',
  './assets/projects/free-games.jpg',
  './assets/projects/nelson-blog.jpg',
  './assets/projects/nelson-league.png',
  './assets/nelson.jpg',
  './assets/logo-desktop.png',
  './assets/logo-nelson.png',
  './css/animation20221216.css',
  './css/style20230113.css',
  './nelson-cv-web.pdf',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches
      .open(CACHE_VERSION)
      .then((cache) => {
        return cache.addAll(STATIC_FILES_TO_CACHE).then(() => self.skipWaiting());
      })
      .catch((err) => console.log('No se pudo registrar en caché', err))
  );
});

self.addEventListener('active', (e) => {
  const cacheList = [CACHE_VERSION];
  e.waitUntil(
    caches
      .keys()
      .then((cachesNames) => {
        cachesNames.map((cache) => {
          if (cacheList.indexOf(cache) === -1) {
            return caches.delete(cache);
          }
        });
      })
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      if (res) {
        return res;
      }
      return fetch(e.request);
    })
  );
});
