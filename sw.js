const CACHE="ghafur-book-v1";const ASSETS=["./","./index.html","./icon.png","./apple-touch-icon.png","./photo.jpg","./manifest.json"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener("fetch",e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
