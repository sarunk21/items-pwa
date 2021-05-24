workbox.precaching.precacheAndRoute(self.__precacheManifest);

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', () => {
  clients.claim();
});

workbox.routing.registerRoute(
  "https://sarunk-items-api.herokuapp.com/api/item",
  new workbox.strategies.NetworkFirst({
    cacheName: "api-data",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30,
        maxAgeSeconds: 360 * 60
      })
    ]
  })
)

workbox.routing.registerRoute(
  new RegExp("https://sarunk-items-api.herokuapp.com/storage/img"),
  new workbox.strategies.CacheFirst({
    cacheName: "api-image",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30,
        maxAgeSeconds: 360 * 60
      })
    ]
  })
)