workbox.precaching.precacheAndRoute(self.__precacheManifest);

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', () => {
  clients.claim();
});

workbox.routing.registerRoute(
  "https://sarunk-api.000webhostapp.com/api/item",
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
  new RegExp("https://sarunk-api.000webhostapp.com/sarunk-api/public/img/"),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "api-image",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30,
        maxAgeSeconds: 360 * 60
      })
    ]
  })
)

workbox.routing.registerRoute(
  ({ url }) => url.origin === self.location.origin && /\.(jpe?g|png|svg|ico)$/i.test(url.pathname),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "images",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 50
      })
    ]
  })
)

workbox.routing.registerRoute(
  ({ url }) => url.origin.includes('fonts.googleapis.com'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "fonts",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 20
      })
    ]
  })
)