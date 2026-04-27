const CACHE_NAME = "bizeasy-cache-v1";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(["/", "/offline.html"]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.url.includes("/api")) {
    // Network first for API
    event.respondWith(
      fetch(event.request).catch(() => caches.match(event.request))
    );
  } else {
    // Cache first for assets
    event.respondWith(
      caches.match(event.request).then((res) => {
        return res || fetch(event.request);
      })
    );
  }
});
