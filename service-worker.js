self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('flora-up-cache').then(function (cache) {
      return cache.addAll([
        './index.html',
        './manifest.json',
        './icon_192.png',
        './icon_512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});
