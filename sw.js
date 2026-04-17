// EnterFlow Service Worker - Minimal PWA support
const CACHE_NAME = 'enterflow-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// Simple fetch - just pass through, no caching needed since it's a single-file app
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
