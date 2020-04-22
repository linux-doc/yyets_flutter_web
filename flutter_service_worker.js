'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "80b8b05380b4c05e0adb3cd48fdb80a2",
".git/config": "d4d807ed4f9fb08f5eb5d5a6e7e3cc71",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "94904a5040d6333a132b1cf95579b11a",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "349787729692fe87a90118d5ea75d90a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "366cc29a6ba029b0e5ce38de9d2acd76",
".git/logs/refs/heads/master": "366cc29a6ba029b0e5ce38de9d2acd76",
".git/logs/refs/remotes/origin/master": "1d2b9938ffa02ce92d7a973c6dcc721c",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/08/d3778584a21072bd7d683a1fd4f9697b7fcb80": "715f2eea3daad1c712746cd3e89f9971",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/12/7c8ab2ebb34dcaee74437586a06b9f77ae3ce4": "1271be04c6411a7904f1357504974dc8",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/13/effc30b094d553853b81474498e54265549023": "7cdb61cb14d6b4dbb4295e717c3ff837",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/16/903c3b8f9acdfb0b9bcb6877439f69649f9af4": "b9239fee5889c95270b03953c9ad4aad",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/3e/53498c7968c77401de9daf6a31bdad0743d41b": "49b212757f2d63e7f59e23105c3fdc0c",
".git/objects/64/a311be33e74324756ba83f646c64c4d8d51ff9": "7bde55df31dcb3cbf20d00aaf75b6419",
".git/objects/65/dc816d8e5d91660d83e359e4c1e898255986cc": "982fa6fd26e0b5f0c81f7679c2a92754",
".git/objects/6b/e0ab6968e5279e6659e0b2e923be1cb372fae6": "68ee229ab277a89e3ce1523af060414e",
".git/objects/6d/ad03670b79c42f9a2e686568e402ae9f3b69c4": "3009e10c519c2047979d3a6ca068c2b9",
".git/objects/7c/1f0b14143178b500c22be08ee1ae1293ef49dc": "51961b24df0c7b16859dceb4224131bf",
".git/objects/7e/86669404a38e88a71f2ae2d1dc41e1f1216d78": "63891e89f4433792569a32208b481ee3",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/99/ac8e0da673d6c13e4d8d6c5bde5aea96885179": "addd20b3bb1a8c30c9122cebbdef93f7",
".git/objects/9b/7dca243fece69461d2008d2dbe3eba2279accb": "b5c9673a5181bacc06edf17d1179a03a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/ceb8f026611bf08c77a40bbd95ce9dd9c2e6d1": "237c50a4753091f32e3dfca8c4f768a6",
".git/objects/c3/0e6e09dca3a2aa53f376e0c033c70a4daf9c79": "563ed9b7cafe4a9809aaaccc9ce2d140",
".git/objects/d8/f72e2c759cec72a9c6ef574adbc760badb01eb": "a3782be387d88957849dfc9ce1be4b4e",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/e1/5028175bc98d6070199f5d0450b8d64b9d4981": "26824f45266913e1c6bbfa9d87cab8d2",
".git/objects/e9/430974715b083fe71f8ef71bd20a14f0b61535": "e7ce1ef3eecae3fe12df90b84d1bfa39",
".git/objects/f7/0192dee2d9e0fe1327fe48f76fccffa73c77b3": "b873c8b145adbb302e880e495495d3ff",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/refs/heads/master": "0eb07c93d13ae65ff236e339043080c4",
".git/refs/remotes/origin/master": "0eb07c93d13ae65ff236e339043080c4",
"assets/AssetManifest.json": "6c6529f331a0639f06b3c29d0ed6efc9",
"assets/FontManifest.json": "c25cc06afa4b1c73f11b0f4a62381d84",
"assets/fonts/iconfont.ttf": "b87c541a2f6cde5b07dc2017ff3cb063",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "35e83f60f6cd4f1eebc54f3825782ff6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "f2d952b50eab41de3092d68537a8d413",
"/": "f2d952b50eab41de3092d68537a8d413",
"main.dart.js": "223771ba78b63e2d69f1136f33ef9cf8",
"manifest.json": "d5aea7eacd4d28cd882d6223267bdc5e"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
