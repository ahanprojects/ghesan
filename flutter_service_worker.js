'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "214e9bde20b927e4f5b8cdc6c9cbcb05",
"assets/assets/facts/1.png": "6167c776a0a3f401e2782654d9af8760",
"assets/assets/facts/10.png": "a14239013c184cf63f6f05dd7a694018",
"assets/assets/facts/11.png": "1c996cc3fe25a9bea0705bd958c6dedd",
"assets/assets/facts/12.png": "cab8b4f8d26e83b346d4b200d9427f0c",
"assets/assets/facts/13.png": "8814f3ac9842b9ceb78a0b0de00b176d",
"assets/assets/facts/14.png": "bc6643804729b07d1599db2793ffea9c",
"assets/assets/facts/15.png": "0700aaf2331e680eb71ab8b7c8eb43b1",
"assets/assets/facts/16.png": "cdf6eed30dd6c72b21b16b302badc904",
"assets/assets/facts/17.png": "6b20d2f5cf272e3cece35d8947328208",
"assets/assets/facts/18.png": "1b3dc6e0ae6ae3f6645ca23092480ba3",
"assets/assets/facts/19.png": "bb37695558c4efd51d68681a70787cc0",
"assets/assets/facts/2.png": "8ad553fa74fa0399d39f98cd387042f8",
"assets/assets/facts/20.png": "d1c57eca28a4e2f8ed0d7e2515777219",
"assets/assets/facts/3.png": "68ec3a1309aedf3a073270d835229678",
"assets/assets/facts/4.png": "f287a66781635b417ea47f0c2c672254",
"assets/assets/facts/5.png": "a547aa8c6edf193ea3416b202e26428b",
"assets/assets/facts/6.png": "52bb689cdf6cc3e53e1d487235b3c52f",
"assets/assets/facts/7.png": "044aba56f0a089709c7f289385d5ede0",
"assets/assets/facts/8.png": "1ac566a658663a3e41f342d51c28598a",
"assets/assets/facts/9.png": "7d086244bb2c0c4a39fbcb71928a64cf",
"assets/assets/images/banner.png": "ebf80acc23ca82a1cafc2333317589d5",
"assets/assets/images/cake.gif": "78962d9e9c27c994fac1a4c162fbb49b",
"assets/assets/images/cakepng.png": "4bcc4b91bb1f33e32fdc47dfd8c88578",
"assets/assets/images/fukyu.png": "f9b8078e2de4c149fdde7e6258a9f2c3",
"assets/assets/images/ghecakep.png": "a90bacacc2a8913deea5cdcfe4636a18",
"assets/assets/images/ghejele.png": "9a9b6afa1c96b41dfaea90488dc61127",
"assets/assets/images/tunjuka.png": "8bb5c9d4b0f5d7781ce2781a40a8713b",
"assets/assets/images/tunjukb.png": "2afbb08682697d14510d1bd77f392d5e",
"assets/assets/images/vector.png": "695f992327d236a6bd045e9981e27587",
"assets/assets/images/vectorjelek.png": "74500ab614cf23f950a29c35c29e19c4",
"assets/assets/selfies/1.png": "bc9f2341cc010a2813d6fccf4cbf1253",
"assets/assets/selfies/10.png": "57eff72c1728a35e5c47d4d845fc45f6",
"assets/assets/selfies/11.png": "ce4885068ae6b5bf6cb56c20aef9ae5e",
"assets/assets/selfies/12.png": "b727f9f65dc9298a24f93963f7c15687",
"assets/assets/selfies/2.png": "29a2563263513b5f0b35b6c24d686ceb",
"assets/assets/selfies/3.png": "a153501729fb0084f3e11e9ef3093aa8",
"assets/assets/selfies/4.png": "2aaee029e8131bf8da285dc6ccef520a",
"assets/assets/selfies/5.png": "cabb5ac19cb1d307b615a9dd1c99ad4b",
"assets/assets/selfies/6.png": "f28933d1530d2637dba7a4e735467147",
"assets/assets/selfies/7.png": "e8e325c6dcd52a2cb10aa692972f8020",
"assets/assets/selfies/8.png": "112ab4370b28e94266c38cc82eb86246",
"assets/assets/selfies/9.png": "c3ad079f24b570a1fe762edc494f6ff3",
"assets/assets/ucapan/aisy.png": "f88d966d78800aa0c6d7b8fa576e2042",
"assets/assets/ucapan/irish.png": "407c9d1df574f9436500a8cc5d04ce85",
"assets/assets/ucapan/jati.png": "139321b23cac2a407745eb01ce641357",
"assets/assets/ucapan/mita.png": "b29bcdc48759c7f154d8dddb81e60fa5",
"assets/assets/ucapan/nida.png": "822123dcc5c471e873bc60f0064b7405",
"assets/assets/ucapan/tia.png": "07c6aecea663d6bc7c1894d49f93d5aa",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "4c8c342a24d9aac5b8856702833e7650",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "51cd7cd42a3fb334c1ef3b1b3d0d11c9",
"/": "51cd7cd42a3fb334c1ef3b1b3d0d11c9",
"main.dart.js": "143cb76ce6bb637819de605fc9fb7765",
"manifest.json": "193d219b8766fc46ab24cbcc35827c98",
"version.json": "307e5ef09e12233ec602947510b1c294"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
