/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "39d3829dee730b4b6cdf09995097c4c4"
  },
  {
    "url": "assets/css/0.styles.57064493.css",
    "revision": "bdfc107ffa09860922a6644b10cc5fcd"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/img/image-20221003213427786.78660150.png",
    "revision": "78660150ea0b348be23ac28ed4e87183"
  },
  {
    "url": "assets/js/1.267254bb.js",
    "revision": "e1122f8868c4e6315e8a7bf11d315b22"
  },
  {
    "url": "assets/js/10.bde5e811.js",
    "revision": "1f277cac2c790b6baf1a721f79eafe91"
  },
  {
    "url": "assets/js/11.c6b2d44b.js",
    "revision": "60409e26db741557add1b026d5a087c1"
  },
  {
    "url": "assets/js/12.513d7b93.js",
    "revision": "ed2d5f155075fe587a2fc7a121123c47"
  },
  {
    "url": "assets/js/13.f7e06d83.js",
    "revision": "54229bae62fd6f254f91609b5704807d"
  },
  {
    "url": "assets/js/14.12b25131.js",
    "revision": "9f8304d7f2c0a2f7d72c4a4757d02198"
  },
  {
    "url": "assets/js/15.ce855aa4.js",
    "revision": "63433d7270616f6bb8b7bd3146cee91e"
  },
  {
    "url": "assets/js/16.b2be2eb9.js",
    "revision": "20a23e70194153da17012cd96751fcc2"
  },
  {
    "url": "assets/js/4.91258604.js",
    "revision": "db96612343b117444e0b0f8d79ebd731"
  },
  {
    "url": "assets/js/5.45c9feca.js",
    "revision": "8e9f6ba5dc9f96411651813bc4c9ab98"
  },
  {
    "url": "assets/js/6.6e8bf289.js",
    "revision": "3096bc62a2c936038f7e7c1a4ec45875"
  },
  {
    "url": "assets/js/7.bd529ac8.js",
    "revision": "5b64e8c4a326040b9d586bb28db6b39a"
  },
  {
    "url": "assets/js/8.f3932110.js",
    "revision": "058f6e19d5effa1c7e3508cae74f5421"
  },
  {
    "url": "assets/js/9.d3034a29.js",
    "revision": "8bc91f433acc0def2ab148799c5f0c85"
  },
  {
    "url": "assets/js/app.cef19524.js",
    "revision": "962b517b71e7a3329643be84f25188e5"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.d1455b64.js",
    "revision": "d4d3a11a4b78b7e41a2091a21cc2fda1"
  },
  {
    "url": "avatar.png",
    "revision": "b765a0b5202fad1193285b4f0c15f6ac"
  },
  {
    "url": "categories/index.html",
    "revision": "5a003eaf684236aa6aa0a88bfbed1670"
  },
  {
    "url": "categories/python/index.html",
    "revision": "227b1698df38bd1b753885a28a9e45fa"
  },
  {
    "url": "categories/博客/index.html",
    "revision": "494c59f810e05afa07f82a03366af4f8"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "229a345bdc2a6516827f321c9bb3197a"
  },
  {
    "url": "css/style.css",
    "revision": "0b6bb50460c10cea419bf707274c4cda"
  },
  {
    "url": "guide/index.html",
    "revision": "3c85755fc9aa530c8a84d09f3aebdf90"
  },
  {
    "url": "hero_white.png",
    "revision": "62c1ed5ff8a389a1286dbc5cf860ebb3"
  },
  {
    "url": "img/5.jpeg",
    "revision": "d2f9309ca9fafb1c90372d50e496b712"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.jpg",
    "revision": "048967ee05d3b9901be8ab8c5980c6f3"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "20f6a8b25aeabc4e13c2d6596e2aded1"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "20f6a8b25aeabc4e13c2d6596e2aded1"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "20f6a8b25aeabc4e13c2d6596e2aded1"
  },
  {
    "url": "index.html",
    "revision": "99b1b5a78aa1069c89048f47b106b7b8"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "fc16afb7489ea0c5f9e0375d9fe1b8ec"
  },
  {
    "url": "tags/python/index.html",
    "revision": "d1f3446d7e21cece4d1cfb80ee07b042"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "6d9e7a5b0bfd40d676b66b824812f587"
  },
  {
    "url": "tags/爬虫/index.html",
    "revision": "ff99d8110e90f1c5d840b8d16e810141"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "33c5cdf1e4fdc2817f08f7d0c5770ea3"
  },
  {
    "url": "tags/记录/index.html",
    "revision": "52c00e05dfa8b59f14a2dd167c654880"
  },
  {
    "url": "timeline/index.html",
    "revision": "a446b48585d3e371d5c2bdee32a1a382"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "95ffb3ad40df195dc5d32a96e4acd846"
  },
  {
    "url": "技术文章/python/爬虫.html",
    "revision": "8f7e7a689d700f19625edaea3fc78a5c"
  },
  {
    "url": "生活分享/life.html",
    "revision": "f28ee779211ba68aff86949588151cad"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
