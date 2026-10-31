// Vastu Compass offline support: keep the app files so it opens without internet.
const CACHE = "vastu-prop-test-v1-3-31oct";
const FILES = ["./", "index.html", "manifest.webmanifest", "config.js", "icon-192.png", "icon-512.png", "sample_plan.jpg", "sample_room.jpg", "assets/mandala.svg", "assets/cream.svg", "fonts/cormorant-600.woff2", "fonts/manrope-400.woff2", "fonts/manrope-500.woff2", "fonts/manrope-600.woff2", "fonts/manrope-700.woff2", "fonts/manrope-800.woff2"];
self.addEventListener("install", (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener("activate", (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k))))); self.clients.claim(); });
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  // network first for the page (so updates arrive), cache as fallback when offline
  e.respondWith(fetch(e.request).then((r) => {
    if (r.ok && new URL(e.request.url).origin === location.origin) { const copy = r.clone(); caches.open(CACHE).then((c) => c.put(e.request, copy)); }
    return r;
  }).catch(() => caches.match(e.request).then((m) => m || caches.match("index.html"))));
});
