/* ============================================================
   Focus40 — Service Worker (sw.js)
   PWA offline cache + notification click handler
   No Firebase — no external SDK needed
============================================================ */

const CACHE_NAME = 'focus40-v2';
const SHELL = ['/', '/index.html', '/manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(c => c.addAll(SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.url.includes('api.jsonbin.io')) return;
  if (e.request.url.includes('fonts.googleapis.com')) return;
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(cached =>
      cached || fetch(e.request).catch(() => caches.match('/index.html'))
    )
  );
});

self.addEventListener('push', e => {
  const data  = e.data ? e.data.json() : {};
  const title = data.title || 'Focus40 📚';
  const body  = data.body  || 'Time to study!';
  e.waitUntil(self.registration.showNotification(title, { body, tag: 'focus40-reminder', renotify: true }));
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
      for (const c of list) { if ('focus' in c) return c.focus(); }
      return clients.openWindow(self.location.origin);
    })
  );
});
