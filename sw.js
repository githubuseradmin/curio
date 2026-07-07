// Curio service worker — офлайн-режим и мгновенная загрузка.
// Бампни версию при каждом деплое, чтобы обновить кэш.
const CACHE = 'curio-v17';
const ASSETS = [
  './', 'index.html', 'cards.js', 'cards.en.js', 'illustrations.js', 'manifest.webmanifest',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png', 'icons/favicon-32.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => Promise.allSettled(ASSETS.map((a) => c.add(new Request(a, { cache: 'reload' }))))) // всегда свежие с сети, не из HTTP-кэша; не падать, если asset недоступен
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return; // внешние ссылки (источники) — мимо кэша, как есть
  if (url.pathname.includes('/videos/')) return; // видео тяжёлые + range-запросы — не кэшируем, отдаём сети
  e.respondWith(
    caches.match(req).then((hit) =>
      hit ||
      fetch(req).then((res) => {
        if (res && res.status === 200 && res.type === 'basic') {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
        }
        return res;
      }).catch(() => (req.mode === 'navigate' ? caches.match('index.html') : undefined))
    )
  );
});
