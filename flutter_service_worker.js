'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "093122e25a289d6de8db97f5e3f2d460",
"index.html": "923048822547874fb261fac94fa931eb",
"/": "923048822547874fb261fac94fa931eb",
"main.dart.js": "b1cf7c5977d9e573e848a8657ea4bfbb",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d57428c7204e3dabfe2b0bb9b46fdd46",
"assets/AssetManifest.json": "4fe06baab13a8cf1ef059ad98c471dd9",
"assets/NOTICES": "bbff4c86816e85f0afca766f84a65c68",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "5c841567363d1e3d92e78659c6262078",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/progress_dialog_null_safe/assets/double_ring_loading_io.gif": "a03b96c4f7bef9fd9ed90eb516267a11",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "48ed1fc20ac9dc3f4473e96e3b85dbdf",
"assets/fonts/MaterialIcons-Regular.otf": "d5b80429d8bb0392faf85cc57737a047",
"assets/assets/images/test.gif": "f37a48359ab6568139a8bf37c04e1800",
"assets/assets/images/image_welcome4.jpg": "dbb79e0ae4c8a78476110a4f1a52083d",
"assets/assets/images/loginImage.png": "896aac1a0862d9af6cdbd2f18164b047",
"assets/assets/images/image_welcome1.jpg": "5fd625f277bd5211f50d1dfd5db34456",
"assets/assets/images/image_welcome3.jpg": "96beafc33a4130fb36be563423f63c89",
"assets/assets/images/success.gif": "3ddd67c6274a87b4e556df5052266e3f",
"assets/assets/images/image_welcome2.jpg": "f10bf4c005a1c06d3a21b5aced5aca6c",
"assets/assets/images/banner2.jpg": "2d3404f32e5e2316aa373ddaf73a72c5",
"assets/assets/images/banner1.jpg": "22fa94ce7e47695790d4d2f6bac5af2e",
"assets/assets/images/banner0.jpg": "c96456af3e3f8d5042f0982237f4ca7f",
"assets/assets/images/OTPPage.png": "e506af9aa59c149e6e097f9d670279ff",
"assets/assets/images/ForgotPassword.gif": "a51b1c17635145178a552cbe1ee143ac",
"assets/assets/images/NewPassWord.gif": "9bf1851afec6e6f2cf60e3d3ff8d6d48",
"assets/assets/images/nodata.png": "ecd19770a9904d9fbec9203875dc66cc",
"assets/assets/images/avatar.png": "3d1533f776b5edbce3dee9baa994dd17",
"assets/assets/images/logo.png": "39a21fb970054deaffce9b457f418bb4",
"assets/assets/images/registerImage.png": "a140f934d899c43c1192e532aed0bae6",
"assets/assets/images/welcomePage.png": "9fb92afb1eda7a3c3555c36f03bb981d",
"assets/assets/images/register.gif": "bf9c868aa38c6ae169f7e211615962d6",
"assets/assets/images/forgot.png": "84956f0eace65e037289bea6787655c5",
"assets/assets/images/forgotPassword.png": "6a5036db1c48d8b48f9f161def214942",
"assets/assets/icons/news.png": "7514efe630a67fd6f49336c4aa366b67",
"assets/assets/icons/class.png": "d67226f3b6192a6fdda2b916a12cc90f",
"assets/assets/icons/bell.png": "798c477cb5f71dc2b96552fc2dda448c",
"assets/assets/icons/all.jpg": "d04d1a9830036b0e97a70037e4b46218",
"assets/assets/icons/cancel.png": "4854a15a23db464f53599f35ab4ef584",
"assets/assets/icons/successfully.png": "c87ba8c858cdcf41583800e00f1a62bc",
"assets/assets/icons/gmail.png": "a189ad2bcf2a9214789686f207e73aaf",
"assets/assets/icons/changePassword.png": "a985ffe9104cdf20dc42906ac48c801f",
"assets/assets/icons/old.jpg": "f160d6996e88e2274cce1a008134f9e6",
"assets/assets/icons/present.png": "105571b32bf9a9c390f73da7b70944f9",
"assets/assets/icons/information.png": "b01c41d7703783830bca2834479a34f7",
"assets/assets/icons/student.png": "3c23d20f0c4ae7e95616b25ec5f4a1b2",
"assets/assets/icons/garbage.png": "2a4582b651832b2ea3d049809851972a",
"assets/assets/icons/language.png": "57ae89b0163af0a142543decc948a97e",
"assets/assets/icons/signout.png": "828f3136f8a5f092a63dbbc187002033",
"assets/assets/icons/google.png": "acb6e1dd389cdbf2ec50746e1e7460b9",
"assets/assets/icons/facebook.png": "a662474721ec62bfdfc4e6e881a29cb9",
"assets/assets/icons/notification.png": "43e321c310bbd24af1db695e2524e0e2",
"assets/assets/icons/lectuer.png": "137483918aeb5e9db74eb367732f6c62",
"assets/assets/icons/modeTheme.png": "07757a561814d8a9c9da4bb4fc5d821d",
"assets/assets/icons/absent.png": "47274eedeea77b3c8a28ba27d6ecff7f",
"assets/assets/icons/pending.png": "46cb35a57b7026c5964c1c21c4f13b07",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
