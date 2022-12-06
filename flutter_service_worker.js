'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"version.json": "64e9da82f2caa68862eb002596e4462d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"index.html": "885b8c6f6ce68af0863a5af48e91d32c",
"/": "885b8c6f6ce68af0863a5af48e91d32c",
"manifest.json": "cc42777e8e7075a79d6f4d774290d49b",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
".git/refs/heads/main": "690683f4929dbef0d77941526f7cd944",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "690683f4929dbef0d77941526f7cd944",
".git/logs/refs/heads/main": "88bfb5d0c9bbc988af1ecc3921c9e420",
".git/logs/refs/remotes/origin/HEAD": "ab96bd4f0d3cce45ec4756dd76e55fd0",
".git/logs/refs/remotes/origin/main": "cbbd3f2650ad93e8daf3de780a1bd5df",
".git/logs/HEAD": "88bfb5d0c9bbc988af1ecc3921c9e420",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/COMMIT_EDITMSG": "9ed5f29f69cedf8a98e53cab6aecf27c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "4fbdea3af3d5083b11707f6914c489b0",
".git/index": "a9336e024cbcad4d51130847d1dfed75",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/packed-refs": "bc9df4abaaa5feddfc05a97ad97a7a27",
".git/config": "300c963806ed89d6dc8a6fb2608e7b76",
".git/objects/ee/12df68f39a667151c0c5f5689baa4c443462d4": "5c343af1bbcdeb7b738b9b4d21f2925f",
".git/objects/56/cc7254cd71fb3e096f75f4771cec12e06bda24": "d4e8c4237b8ae92d4351aafc4739825c",
".git/objects/43/30fbd9e3afea3e2c3bd738e8b647bfcccfb1f5": "05600dda8f86fbbe80730294ea5abbe3",
".git/objects/a2/4c34550375bc4dbd4d9cb0a8afdd4131475a3f": "c85cc7a1d0bce1b60502b4ec4b48fa90",
".git/objects/29/2924848071bc4674f520f49e2bb448162212f5": "0b6ffab5f0b2e4c2f310a7393225d42d",
".git/objects/94/9f779a506f79b405135b7c256e4253ab6aff7e": "c1413f41d659fbf1e80194f35f31a8ff",
".git/objects/b0/ab8bb60cafa15a6721b6314cf34869b37d9338": "25b0824852b45e01c0287870109a42fa",
".git/objects/71/3161dfda2fe5dfd15da14a0d9a99f8e039603c": "005e93025b1422409c7f3c8f8f99c4b2",
".git/objects/42/998fcaabeb2d56ad2c92c9941ac6187caa2347": "0a233aacf54fb3487e3790985d7b1469",
".git/objects/bf/b8ac73a681951d154c1bfca5fbb6c24cc9e3a4": "5476dc8c1b89b8febbb1c74a04605a98",
".git/objects/bf/b8a19a360895703af1b447c0a171e8eabcaebc": "6f7898e477043467bd314d56eacf1a6c",
".git/objects/7c/c8a46da8fb73b9c436e8c0e4b248f52e7f5553": "673fc91a9eb64bf52da6e04e477b2af5",
".git/objects/d6/aa1e50f161245b00a2150fba7f41583b8955bf": "bfadfe3fcc1a8fc600699e041426e762",
".git/objects/40/cb84d6e437b20cb1ea2501e4840f3a8e94d9c4": "00102d1b3bcb55d77bdb0d16ad6c1015",
".git/objects/af/1a43d8a6e0fc073c1eb29c29e378018a06a956": "c3b38b43459f1c8e5bb0b4d37e19d522",
".git/objects/pack/pack-80bba121690017716dec657f98583957861aa8a6.pack": "9e6c0ab87b39617eb3ead353dd4d5284",
".git/objects/pack/pack-80bba121690017716dec657f98583957861aa8a6.idx": "e205893f5e66822bc40a33f19dbab864",
".git/ORIG_HEAD": "690683f4929dbef0d77941526f7cd944",
"assets/NOTICES": "087e7e8ffc8b35e9fd8bf863ae7c13f8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "0e8672fcdf9efdc86291eb7b2c87b387",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"main.dart.js": "4d8c752fe696ef74fbe41e320d5cbec2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
