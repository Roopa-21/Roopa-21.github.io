'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "716f3dff89e11a4059fda97dcefc43dd",
"assets/AssetManifest.json": "89e1566da3e19f647866f59b037649f7",
"assets/assets/fonts/Proxima%2520Nova%2520Bold.otf": "62d4d7d369292a9bf23762465ec6d704",
"assets/assets/fonts/ProximaNova-Regular.otf": "410504d49238e955ba7dc23a7f963021",
"assets/assets/images/appstore.png": "7322410a9616da7d1ac91f7c20098965",
"assets/assets/images/fitness.JPG": "212a3c412ae8824d4da6defedec1a6eb",
"assets/assets/images/fitness1.jpeg": "121d9754b67f21eb74d90338a2a8c1c8",
"assets/assets/images/fitness2.jpeg": "acac1f4649dcd7a333f2c9e37105f838",
"assets/assets/images/fitness3.jpeg": "e0e153caaf09b3754342ce5683c312d6",
"assets/assets/images/fitness4.jpeg": "ac862d10acdb18bda823213e76eb0bc2",
"assets/assets/images/Fuel.jpg": "14339ac7ee14105d72d8a94ac3076ed6",
"assets/assets/images/fuel01.jpg": "bc0abf8b47b9cddd3eaf1a062c343cd5",
"assets/assets/images/fuel02.jpg": "de8243517e8c25638bd5857534b0ddeb",
"assets/assets/images/fun.jpg": "ba1fda43b372cde4b263247322b7f3b0",
"assets/assets/images/g1.png": "d024f8509388ac00efa70664c4fa1f5c",
"assets/assets/images/g10.png": "edae05dbf9361d3441a7b05177e58993",
"assets/assets/images/g2.png": "94632a430cb533d94068498982ea4bed",
"assets/assets/images/g3.png": "cd06b569a2fb3883e0e00d4e07cc40b9",
"assets/assets/images/g4.png": "ec971df9bc4ffa93135dfc7e911732d5",
"assets/assets/images/g5.png": "6de1c8f6b58092cfa98cf876d3387705",
"assets/assets/images/g6.png": "abe32e5a7c0a9c12802a4a88e5f53443",
"assets/assets/images/g7.png": "16afca22aff7da14e9872d7bb19b1bf5",
"assets/assets/images/g8.png": "5457cb5801fc683e6b6dde6c3f08579f",
"assets/assets/images/g9.png": "72cdf263cfaf58a7b4527fcb5f7c449d",
"assets/assets/images/googleplay.png": "0e7c8d19c1d74af6af1f41e5cc2ac252",
"assets/assets/images/googleplaystore.png": "ad289eb2bc7e480396887bfc5c13b057",
"assets/assets/images/gymname.jpeg": "d1dd52b2a82234786f8ed87ec95ed24e",
"assets/assets/images/hoverfit.png": "dfec8fb1e1b89429cd2b8f100cba79a7",
"assets/assets/images/linearbox.png": "14f31ce12ce580dc62bfe9061a9ab86a",
"assets/assets/images/mobile.png": "d7ddddfd72de4a3b38fdd4e81776b954",
"assets/assets/images/schedule1bw.png": "e070f5011a3cf06ab8c7e19caeb404c9",
"assets/assets/images/schedule1hover.png": "0346b6b7117ad9233c022562edafaf7a",
"assets/assets/images/schedule2bw.png": "16514883e359fa9648dad59555fe609b",
"assets/assets/images/schedule3bw.png": "88488588f865f581243889153b288470",
"assets/assets/images/webtop2.png": "62b0f322124839830d65a96286a115fc",
"assets/assets/images/webtop3.png": "0b9636acc971c0056c5c37bc359592aa",
"assets/assets/images/webtop4.png": "1ec456bd0deb49bbdd7c0b4bdcc1a9d9",
"assets/assets/images/weburl.png": "51d997f3db54454aac0acec374cb9f8d",
"assets/assets/videos/gymvideo.mp4": "482843786f402709d61f5955459b89ac",
"assets/FontManifest.json": "573a179f226ac398c15e56547650fae6",
"assets/fonts/MaterialIcons-Regular.otf": "6bf7129db146eb485118e6cfca8b4370",
"assets/NOTICES": "80898369c8be3bdec93d3753dd3847c7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7a290e238f5c1d762ef7ff5f08d49e1a",
"/": "7a290e238f5c1d762ef7ff5f08d49e1a",
"main.dart.js": "39989b8685fd6dd5e27ed712ef0cde75",
"manifest.json": "b5fa603eaa22429c71fa975fc9d3f84c",
"version.json": "6a00a9eb060538e2316fdb28db642ffe"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
