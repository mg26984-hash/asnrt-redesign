// ============================================================
// ASNRT Service Worker — Progressive Offline Caching
// Strategy: Don't block first load, progressively cache everything
// ============================================================

const CACHE_VERSION = 'asnrt-v1';
const STATIC_CACHE = `${CACHE_VERSION}-static`;
const IMAGE_CACHE = `${CACHE_VERSION}-images`;
const PAGE_CACHE = `${CACHE_VERSION}-pages`;
const FONT_CACHE = `${CACHE_VERSION}-fonts`;
const PDF_CACHE = `${CACHE_VERSION}-pdfs`;

// App shell — cached on install (minimal set for fast install)
const APP_SHELL = [
  '/',
];

// All site routes to pre-cache in background after load
const SITE_ROUTES = [
  '/',
  '/about',
  '/about/constitution',
  '/about/past-presidents',
  '/members',
  '/members/coordinators',
  '/education',
  '/education/patient',
  '/education/nurses',
  '/education/doctors',
  '/academic',
  '/academic/journals',
  '/academic/guidelines',
  '/news',
  '/gallery',
  '/societies',
  '/societies/international',
  '/membership',
  '/events',
  '/contact',
];

// ============================================================
// INSTALL — Cache only the minimal app shell
// ============================================================
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      return cache.addAll(APP_SHELL);
    }).then(() => self.skipWaiting())
  );
});

// ============================================================
// ACTIVATE — Clean old caches, claim clients
// ============================================================
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key.startsWith('asnrt-') && !key.startsWith(CACHE_VERSION))
          .map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

// ============================================================
// FETCH — Tiered caching strategies
// ============================================================
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests (form submissions, etc.)
  if (request.method !== 'GET') return;

  // Skip API calls — let them go to network (forms need live server)
  if (url.pathname.startsWith('/api/')) return;

  // Skip OAuth and auth-related paths
  if (url.pathname.startsWith('/api/oauth') || url.pathname.includes('oauth')) return;

  // Skip dev-only paths
  if (url.pathname.startsWith('/__manus__')) return;
  if (url.pathname.includes('hot-update')) return;
  if (url.pathname.startsWith('/@')) return;
  if (url.pathname.startsWith('/node_modules')) return;

  // Google Fonts — cache-first (they rarely change)
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(cacheFirst(request, FONT_CACHE, 365 * 24 * 60 * 60));
    return;
  }

  // PDF files — cache-first (education materials don't change)
  if (url.pathname.endsWith('.pdf')) {
    event.respondWith(cacheFirst(request, PDF_CACHE));
    return;
  }

  // Images — stale-while-revalidate (show cached, update in background)
  if (isImageRequest(request)) {
    event.respondWith(staleWhileRevalidate(request, IMAGE_CACHE));
    return;
  }

  // JS/CSS bundles — cache-first (hashed filenames = immutable)
  if (isStaticAsset(url.pathname)) {
    event.respondWith(cacheFirst(request, STATIC_CACHE));
    return;
  }

  // HTML pages / navigation — network-first with cache fallback
  if (request.mode === 'navigate' || request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(networkFirstForPages(request));
    return;
  }

  // Everything else — stale-while-revalidate
  event.respondWith(staleWhileRevalidate(request, STATIC_CACHE));
});

// ============================================================
// CACHING STRATEGIES
// ============================================================

// Cache-first: Return cached version, only fetch if not cached
async function cacheFirst(request, cacheName, maxAge) {
  const cached = await caches.match(request);
  if (cached) return cached;

  try {
    const url = new URL(request.url);
    const isCrossOrigin = url.origin !== self.location.origin;
    const response = await fetch(
      isCrossOrigin ? new Request(request.url, { mode: 'no-cors' }) : request
    );
    if (response.ok || response.type === 'opaque') {
      const cache = await caches.open(cacheName);
      cache.put(request, response.clone());
    }
    return response;
  } catch (err) {
    // Return offline fallback for images
    if (isImageRequest(request)) {
      return new Response(
        '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect fill="#f1f5f9" width="200" height="200"/><text fill="#94a3b8" font-family="sans-serif" font-size="14" text-anchor="middle" x="100" y="105">Offline</text></svg>',
        { headers: { 'Content-Type': 'image/svg+xml' } }
      );
    }
    throw err;
  }
}

// Stale-while-revalidate: Return cached immediately, update cache in background
async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);

  const url = new URL(request.url);
  const isCrossOrigin = url.origin !== self.location.origin;

  const fetchPromise = fetch(
    isCrossOrigin ? new Request(request.url, { mode: 'no-cors' }) : request
  ).then((response) => {
    if (response.ok || response.type === 'opaque') {
      cache.put(request, response.clone());
    }
    return response;
  }).catch(() => cached);

  return cached || fetchPromise;
}

// Network-first for pages: Try network, fall back to cache, then offline page
async function networkFirstForPages(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(PAGE_CACHE);
      cache.put(request, response.clone());
    }
    return response;
  } catch (err) {
    const cached = await caches.match(request);
    if (cached) return cached;

    // Fall back to cached index for SPA routing
    const indexCached = await caches.match('/');
    if (indexCached) return indexCached;

    // Ultimate fallback
    return new Response(
      getOfflineFallbackHTML(),
      { headers: { 'Content-Type': 'text/html' } }
    );
  }
}

// ============================================================
// HELPERS
// ============================================================

function isImageRequest(request) {
  const url = new URL(request.url);
  return (
    request.destination === 'image' ||
    /\.(webp|png|jpg|jpeg|gif|svg|ico|avif)(\?.*)?$/i.test(url.pathname)
  );
}

function isStaticAsset(pathname) {
  return /\.(js|css|woff2?|ttf|eot)(\?.*)?$/i.test(pathname);
}

function getOfflineFallbackHTML() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ASNRT — Offline</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
      color: white;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .container {
      text-align: center;
      padding: 2rem;
      max-width: 480px;
    }
    .icon {
      width: 80px;
      height: 80px;
      margin: 0 auto 1.5rem;
      background: rgba(5, 150, 105, 0.15);
      border-radius: 1.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .icon svg { width: 40px; height: 40px; color: #34d399; }
    h1 {
      font-family: 'Outfit', sans-serif;
      font-size: 1.75rem;
      font-weight: 700;
      margin-bottom: 0.75rem;
    }
    p {
      color: rgba(255,255,255,0.6);
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }
    button {
      background: linear-gradient(135deg, #059669, #0d9488);
      color: white;
      border: none;
      padding: 0.875rem 2rem;
      border-radius: 0.875rem;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    button:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(5,150,105,0.3);
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="icon">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
      </svg>
    </div>
    <h1>You're Offline</h1>
    <p>This page hasn't been cached yet. Please connect to the internet and try again. Pages you've previously visited are available offline.</p>
    <button onclick="window.location.reload()">Try Again</button>
  </div>
</body>
</html>`;
}

// ============================================================
// MESSAGE HANDLER — Progressive background caching
// ============================================================
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'CACHE_ROUTES') {
    event.waitUntil(cacheAllRoutes());
  }
  if (event.data && event.data.type === 'CACHE_IMAGES') {
    event.waitUntil(cacheImages(event.data.urls));
  }
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Pre-cache all site routes in background
async function cacheAllRoutes() {
  const cache = await caches.open(PAGE_CACHE);
  // Cache routes sequentially to avoid overwhelming the network
  for (const route of SITE_ROUTES) {
    try {
      const response = await fetch(route);
      if (response.ok) {
        await cache.put(route, response);
      }
    } catch (e) {
      // Silently skip failed routes
    }
    // Small delay between requests to not hog bandwidth
    await new Promise((r) => setTimeout(r, 100));
  }
}

// Cache a batch of image URLs in background
async function cacheImages(urls) {
  if (!urls || !urls.length) return;
  const cache = await caches.open(IMAGE_CACHE);
  for (const url of urls) {
    try {
      const existing = await cache.match(url);
      if (existing) continue; // Skip already cached

      // Determine if cross-origin
      const isCrossOrigin = !url.startsWith(self.location.origin);

      // Use no-cors for cross-origin images (produces opaque responses)
      // Opaque responses can still be cached and served back
      const response = await fetch(url, {
        mode: isCrossOrigin ? 'no-cors' : 'cors'
      });

      // For same-origin: check response.ok
      // For cross-origin (opaque): response.type === 'opaque' with status 0
      if (response.ok || response.type === 'opaque') {
        await cache.put(url, response);
      }
    } catch (e) {
      // Silently skip failed images
    }
    await new Promise((r) => setTimeout(r, 200));
  }
}
