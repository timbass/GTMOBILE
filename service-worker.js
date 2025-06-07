const CACHE_NAME = 'gt-suite-v2'; // Change version number
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Add update notification
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
    })
  );
});

// Skip waiting to activate new version
self.addEventListener('message', event => {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
});
