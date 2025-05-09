const CACHE_NAME = 'imr-portfolio-v2';
const STATIC_CACHE = 'static-v2';
const DYNAMIC_CACHE = 'dynamic-v2';

const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/404.html',
    '/css/style.css',
    '/js/main.js',
    '/js/theme.js',
    '/js/projects.js',
    '/js/terminal.js',
    '/js/contact.js',
    '/js/animations.js',
    '/js/awards.js',
    '/js/error-boundary.js',
    '/assets/images/I.png',
    '/assets/images/profile.png',
    '/manifest.json',
    'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css',
    'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js'
];

// Install event - cache assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(ASSETS_TO_CACHE))
            .then(() => self.skipWaiting())
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch event - serve from cache, fallback to network with dynamic caching
self.addEventListener('fetch', (event) => {
    // Skip if request is not GET
    if (event.request.method !== 'GET') return;

    // Skip cross-origin requests
    if (!event.request.url.startsWith(self.location.origin)) {
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                // Return cached response immediately if available
                if (cachedResponse) {
                    return cachedResponse;
                }

                return fetch(event.request)
                    .then(async (networkResponse) => {
                        // Check if we received a valid response
                        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                            return networkResponse;
                        }

                        try {
                            // Clone the response as it can only be consumed once
                            const responseToCache = networkResponse.clone();

                            // Open cache and store updated resource
                            const cache = await caches.open(DYNAMIC_CACHE);
                            await cache.put(event.request, responseToCache);

                            return networkResponse;
                        } catch (error) {
                            console.error('Failed to cache response:', error);
                            return networkResponse;
                        }
                    })
                    .catch((error) => {
                        console.error('Fetch failed:', error);
                        // Show offline page if no cached response
                        return caches.match('/404.html');
                    });
            })
    );
});