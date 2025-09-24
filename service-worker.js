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
    "revision": "ac10b938e4592bca86fd06361a099a0a"
  },
  {
    "url": "algorithm/binary-search.html",
    "revision": "1dec4db887000405719e444e3ce8be15"
  },
  {
    "url": "algorithm/binary-tree.html",
    "revision": "df07f4e427b33b9bb69819b2e60591af"
  },
  {
    "url": "algorithm/double-pointer.html",
    "revision": "75bbea64ad18ab584740ecbc6f641c31"
  },
  {
    "url": "algorithm/dynamic-plan.html",
    "revision": "db9c66fddde2943f2ce7e549b9abcebb"
  },
  {
    "url": "algorithm/greedy.html",
    "revision": "6a06cfe7656f387f2736e6d953fbc0f0"
  },
  {
    "url": "algorithm/longasc-sequence.html",
    "revision": "93fa64391507fb85a3ac488514ad78ac"
  },
  {
    "url": "algorithm/other.html",
    "revision": "4673d20860e001cf74c2f9a13e665851"
  },
  {
    "url": "algorithm/receive-rain.html",
    "revision": "c87eafff2c91fe9453b28a44c1a5eae4"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "b2bb1a08b501b10f0c7259dcc54d2122"
  },
  {
    "url": "assets/css/0.styles.f8de909c.css",
    "revision": "bf3171570bec0dab7808cdaa0b01ea0e"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.1d6abb18.js",
    "revision": "1ccd95e7538ef5426d96c546cd888112"
  },
  {
    "url": "assets/js/10.63d0ad8f.js",
    "revision": "f0b59350daaf363af47c2704e77cba68"
  },
  {
    "url": "assets/js/100.218e88eb.js",
    "revision": "95f36be9cc2c80d137c58b3a537a7598"
  },
  {
    "url": "assets/js/101.351f52d4.js",
    "revision": "dafbc1780ff3aa59c5ffac0491dafeb1"
  },
  {
    "url": "assets/js/102.00774a46.js",
    "revision": "29e5ec63c80b6170f2bf33db08c6e815"
  },
  {
    "url": "assets/js/103.d07542ff.js",
    "revision": "f4a1ceeff1731ac129dba83535e87fdd"
  },
  {
    "url": "assets/js/104.4d7a8215.js",
    "revision": "e7840963c5524b5dd8dad6af8b9c5ed7"
  },
  {
    "url": "assets/js/105.d5be52a7.js",
    "revision": "34a7af8c9f506a8c6dd9fd56dbbd2171"
  },
  {
    "url": "assets/js/106.62843571.js",
    "revision": "5acb25ad7a62d95c5faaa03dde918446"
  },
  {
    "url": "assets/js/107.58431c1f.js",
    "revision": "a67540764ab2915e471dccf39c3e0cc0"
  },
  {
    "url": "assets/js/108.987481d7.js",
    "revision": "ff5defebd5613b4744b4e724536f9b16"
  },
  {
    "url": "assets/js/109.37c54812.js",
    "revision": "6e479b6959c2fffcae55ea8752a7b040"
  },
  {
    "url": "assets/js/11.08937b90.js",
    "revision": "e77956ac107a7b0387db3e6be4e56ebe"
  },
  {
    "url": "assets/js/110.d28932be.js",
    "revision": "456272297405cadd215782155e6af87a"
  },
  {
    "url": "assets/js/111.c085924f.js",
    "revision": "c49a3aa7568a658f1cfead88b9c4dde8"
  },
  {
    "url": "assets/js/112.ae55711c.js",
    "revision": "ee23b38fcb0dc45a335827e1854f6092"
  },
  {
    "url": "assets/js/113.724ba84f.js",
    "revision": "835de6e5d0a2047d6ab2a90325ef74f1"
  },
  {
    "url": "assets/js/114.9dd1171e.js",
    "revision": "ae7020d132f11efdea2d645c37002e93"
  },
  {
    "url": "assets/js/115.97c235e6.js",
    "revision": "84036a5cac5b82e311c6489c8194dfa1"
  },
  {
    "url": "assets/js/116.8128f99c.js",
    "revision": "1f46f7eb59bf7ef5da8394e9f2668167"
  },
  {
    "url": "assets/js/117.f8b4e127.js",
    "revision": "67a74e424a985221e3c02403d06b3d20"
  },
  {
    "url": "assets/js/118.1cf8455c.js",
    "revision": "18327ead2e6de78cd5c6d1c0adbd4674"
  },
  {
    "url": "assets/js/119.96782b7c.js",
    "revision": "ac3defe347bf45050c590b8c94e6fa20"
  },
  {
    "url": "assets/js/120.4b13efa6.js",
    "revision": "e981fd76296fe63e3b01baab9f3ba985"
  },
  {
    "url": "assets/js/121.746d9359.js",
    "revision": "ede6d8b699028274bc3b6b5560c288fd"
  },
  {
    "url": "assets/js/122.e87aa11b.js",
    "revision": "ce60cd0e153695e102f1c55878c900b3"
  },
  {
    "url": "assets/js/123.ba200899.js",
    "revision": "ea0d9fabb9dd72adbaa56d96eeb5c9f7"
  },
  {
    "url": "assets/js/124.31c4e415.js",
    "revision": "1b93080705239252124b85c58473656f"
  },
  {
    "url": "assets/js/125.d204efac.js",
    "revision": "4e2d24bdd8b51e5c71ada72096be6ed3"
  },
  {
    "url": "assets/js/126.76c3d254.js",
    "revision": "51ade57fbb99eaf5d37658963aaa1d98"
  },
  {
    "url": "assets/js/127.22f841e9.js",
    "revision": "81bf685ecbae37fdad1b06e8e910c016"
  },
  {
    "url": "assets/js/128.fca3519a.js",
    "revision": "03452b0d9d1c313741684a7afe779e9e"
  },
  {
    "url": "assets/js/129.5c768dbe.js",
    "revision": "20a1eb73a9f13277bcdeeaa09b983ffb"
  },
  {
    "url": "assets/js/130.6f912e69.js",
    "revision": "130b7ab4433239deccc92a910fb29624"
  },
  {
    "url": "assets/js/131.bf570674.js",
    "revision": "7a347f599dafacdfb79f6924580c3e79"
  },
  {
    "url": "assets/js/14.0ac4aea5.js",
    "revision": "11b1f5df8a45d04c2f0527031b496791"
  },
  {
    "url": "assets/js/15.2cac15c3.js",
    "revision": "688079c52f80af83336ee63d8b5680a1"
  },
  {
    "url": "assets/js/16.41c97ec9.js",
    "revision": "93d14d23f5306cdccf9cc340e18c5164"
  },
  {
    "url": "assets/js/17.29a60e10.js",
    "revision": "c12cab21b0e58f47d805749f1a837598"
  },
  {
    "url": "assets/js/18.27fd2b83.js",
    "revision": "bd9d5b805bca2ffea52562e712745e52"
  },
  {
    "url": "assets/js/19.e7351a57.js",
    "revision": "497c4fe1210b978757c125312c8c95af"
  },
  {
    "url": "assets/js/2.79670d2b.js",
    "revision": "a1ef245a1898680ddd364c69aaf1a457"
  },
  {
    "url": "assets/js/20.20706f57.js",
    "revision": "c7f4ee75708c06fcc38a47ee44793fa9"
  },
  {
    "url": "assets/js/21.0feb36e8.js",
    "revision": "a8d15496e383de00a8b45e5413dafbf5"
  },
  {
    "url": "assets/js/22.40bc0c74.js",
    "revision": "c70f295257910e3ed1383305928ec583"
  },
  {
    "url": "assets/js/23.3f7042f4.js",
    "revision": "60d78adc9371afbaf121488b6196a60c"
  },
  {
    "url": "assets/js/24.ed563c46.js",
    "revision": "3df8bae98b08f952b6ab732d5664df9b"
  },
  {
    "url": "assets/js/25.ac1b0e72.js",
    "revision": "4963e652861f86f50dbb32a16ae12b33"
  },
  {
    "url": "assets/js/26.683143d5.js",
    "revision": "ed95dd17f25a0dd9690b9f8e892b0244"
  },
  {
    "url": "assets/js/27.f0066995.js",
    "revision": "ee77c077b685605c5b452ddfd966cda0"
  },
  {
    "url": "assets/js/28.d8aebbf6.js",
    "revision": "1c9310b82f6cc6fcdea0c56914dce67a"
  },
  {
    "url": "assets/js/29.411fc063.js",
    "revision": "2a5a86a3f424a8d6187b50d7031e4900"
  },
  {
    "url": "assets/js/3.1300dadf.js",
    "revision": "6ac27c3138ea1e70f5b38171f9dbb988"
  },
  {
    "url": "assets/js/30.2f75779a.js",
    "revision": "34471c1e04e57ce701ce92ab3fbfca55"
  },
  {
    "url": "assets/js/31.a195dbd7.js",
    "revision": "f64ae7bdac4f2f23ce3035d96a63257c"
  },
  {
    "url": "assets/js/32.a4da846d.js",
    "revision": "d7a4ab4744aec0bc6ecdd7fda557caf5"
  },
  {
    "url": "assets/js/33.cbaf45e6.js",
    "revision": "847ef5c69838db855d496f6dda0bce65"
  },
  {
    "url": "assets/js/34.b26cede8.js",
    "revision": "a79c796b5d7ec96630cb0983c055ac91"
  },
  {
    "url": "assets/js/35.b991843f.js",
    "revision": "6c03de271f228f6b47e7b5f51a99e040"
  },
  {
    "url": "assets/js/36.ae8fa883.js",
    "revision": "1b39536ba5b4bbc24b371f5b4b39d55f"
  },
  {
    "url": "assets/js/37.dc5b3f34.js",
    "revision": "aa707b9d238411e4812927bc0c13f84f"
  },
  {
    "url": "assets/js/38.2acfc275.js",
    "revision": "f4f7d6969d5d7199c5a65fb65ce7df50"
  },
  {
    "url": "assets/js/39.3ecb7b66.js",
    "revision": "7aea7b869d1a62ef7aca9ae43bec4642"
  },
  {
    "url": "assets/js/4.a36b649a.js",
    "revision": "a1af6d49f1ee40330c85d48e323c6ea8"
  },
  {
    "url": "assets/js/40.92bad752.js",
    "revision": "cac8cad62c95dba37fbbbb6e2ee770f6"
  },
  {
    "url": "assets/js/41.509a3d0a.js",
    "revision": "9616c80c90bcc889f8a7538bf082ba19"
  },
  {
    "url": "assets/js/42.55a95e7d.js",
    "revision": "b4c819d88a6332f3ae41fbd7f5ed1ecc"
  },
  {
    "url": "assets/js/43.1f179606.js",
    "revision": "b08f431e706a0b256e60120e61608728"
  },
  {
    "url": "assets/js/44.e7c648c2.js",
    "revision": "9db705045d833e4dd0083ac53f2d005c"
  },
  {
    "url": "assets/js/45.cb1b4d46.js",
    "revision": "9375f8671672ab8c8036d71de6ef1e60"
  },
  {
    "url": "assets/js/46.227e29e1.js",
    "revision": "40a65f903415fdc8fc6ef8b43163d6ac"
  },
  {
    "url": "assets/js/47.4901883c.js",
    "revision": "9a8b415b0b1d8e08e7a7ee6bab5aa3b4"
  },
  {
    "url": "assets/js/48.c5faa0d4.js",
    "revision": "a2365eeb60ecd39933036f4d73c95778"
  },
  {
    "url": "assets/js/49.54f206e0.js",
    "revision": "7d4cfbe3890b21302d4cf767a1f70e35"
  },
  {
    "url": "assets/js/5.ade88313.js",
    "revision": "41c0c07ec8d7952411e4a9ff01130d28"
  },
  {
    "url": "assets/js/50.33ecb6b5.js",
    "revision": "c76949ee97e5e091dbbd263604f5e22d"
  },
  {
    "url": "assets/js/51.278c5a1c.js",
    "revision": "5e823e0c5637cecb95128aa433c232bd"
  },
  {
    "url": "assets/js/52.fe48386f.js",
    "revision": "2f8d6165db980c280fbd123b6dfd6da8"
  },
  {
    "url": "assets/js/53.b5cbffbf.js",
    "revision": "d3e3d0e8effd5d488cbbf2831aecf347"
  },
  {
    "url": "assets/js/54.6327888e.js",
    "revision": "643122f778e4c4ff6ef207bc47e085d3"
  },
  {
    "url": "assets/js/55.1e1ec1d6.js",
    "revision": "eef36933202ff024c477a876d399488b"
  },
  {
    "url": "assets/js/56.bc00afe9.js",
    "revision": "1c0f4828e24a5dc13aaedde7d62aa293"
  },
  {
    "url": "assets/js/57.966a57ec.js",
    "revision": "cda6014c7b67e2c24b2bf64b34eb84cf"
  },
  {
    "url": "assets/js/58.8ea7d787.js",
    "revision": "44ef6bf2eccd2e0867d8b0d79b29188f"
  },
  {
    "url": "assets/js/59.752e8e4f.js",
    "revision": "3b26a11fb6955a33783920ae3ef39754"
  },
  {
    "url": "assets/js/6.3551780c.js",
    "revision": "fe0ed93201a286fa45177a397258d276"
  },
  {
    "url": "assets/js/60.ea5d3f31.js",
    "revision": "49a1e70f9c79b5d1fb5d64c809f3fbe4"
  },
  {
    "url": "assets/js/61.5ea637c9.js",
    "revision": "a312348119dff4729d7f3076272c96dd"
  },
  {
    "url": "assets/js/62.410ffedf.js",
    "revision": "18d4f6a09236e43c46a068ed6b1e8cfb"
  },
  {
    "url": "assets/js/63.c817e062.js",
    "revision": "b4f29faf048db30269c8b5f8dfd9dad7"
  },
  {
    "url": "assets/js/64.fd546d23.js",
    "revision": "6c2a5509e9f2876b0889def16390d475"
  },
  {
    "url": "assets/js/65.09cc0ec9.js",
    "revision": "abb739ea122eba2add6b295bfbde92a0"
  },
  {
    "url": "assets/js/66.5da48272.js",
    "revision": "c37eddc2de5046b796e0d3dfae671d72"
  },
  {
    "url": "assets/js/67.0d11004a.js",
    "revision": "c980de11e8e8cdab611d7559d93159f7"
  },
  {
    "url": "assets/js/68.f3e42c0b.js",
    "revision": "19afd72e71e4bc67f8af3b28f0908168"
  },
  {
    "url": "assets/js/69.bab8921f.js",
    "revision": "9593f06826e2dc801934e876f5f6e0c7"
  },
  {
    "url": "assets/js/7.5041dce4.js",
    "revision": "f2c23e2ac23b68ac3e88a056dd0784fa"
  },
  {
    "url": "assets/js/70.559009d1.js",
    "revision": "a5c36fa891949fe6a17fbff1ca863684"
  },
  {
    "url": "assets/js/71.d012859f.js",
    "revision": "cd91f0afe87625b92616c6b65c6a5095"
  },
  {
    "url": "assets/js/72.28170930.js",
    "revision": "2a44b9c9ea567498f70c814b9d274b66"
  },
  {
    "url": "assets/js/73.fd7216f3.js",
    "revision": "cdf2ed42014c724dc567c80cd42e07cc"
  },
  {
    "url": "assets/js/74.c61e95a7.js",
    "revision": "e2744da64d21b649b56aa6179fef4826"
  },
  {
    "url": "assets/js/75.4d789939.js",
    "revision": "8399bb86566531bbe4010f5ddcb77772"
  },
  {
    "url": "assets/js/76.cba1c255.js",
    "revision": "125ffeef7069e98183f931b620393816"
  },
  {
    "url": "assets/js/77.e38f1772.js",
    "revision": "da655d6463f8f8ab1709a9580f0d7dbb"
  },
  {
    "url": "assets/js/78.9475ca01.js",
    "revision": "60ccfa82cce2d7f8baa5e46d2c89d792"
  },
  {
    "url": "assets/js/79.1369e873.js",
    "revision": "30b0377c6c837b68c804f0a74e2dfe35"
  },
  {
    "url": "assets/js/8.1407b990.js",
    "revision": "dcb7a34e3667ce40091860e9cc38e5c2"
  },
  {
    "url": "assets/js/80.8181158f.js",
    "revision": "77e00ead6759b555b4bbb10f67c93104"
  },
  {
    "url": "assets/js/81.93a07244.js",
    "revision": "07c84f244aca571d3b8aa8ecf7e2eab0"
  },
  {
    "url": "assets/js/82.ae7a89ee.js",
    "revision": "cc0665f6622d4573d7aae6f91d654f5a"
  },
  {
    "url": "assets/js/83.a74c1064.js",
    "revision": "cfe20ee2570541618d830dcc8b94bddf"
  },
  {
    "url": "assets/js/84.17095e65.js",
    "revision": "3675e73ef1522dd57a67f433a7b90860"
  },
  {
    "url": "assets/js/85.72f8ac76.js",
    "revision": "a81e9466ebd2250b4511ed6e81d44812"
  },
  {
    "url": "assets/js/86.37244272.js",
    "revision": "378c11f4f8d515d0279013b210d7d63b"
  },
  {
    "url": "assets/js/87.cb8fc9af.js",
    "revision": "d1c7f00238d8cdb1014a2e16f32f523f"
  },
  {
    "url": "assets/js/88.2cbf175d.js",
    "revision": "f132abe36288d45043fef552bfbe66f9"
  },
  {
    "url": "assets/js/89.034b219a.js",
    "revision": "935cabaae36209df764e2ba7a2d207a3"
  },
  {
    "url": "assets/js/9.7b6dd5b4.js",
    "revision": "f1ee1335cb73fc3af924d330037b0332"
  },
  {
    "url": "assets/js/90.053a7971.js",
    "revision": "41d8c3cec5884b59aa6280d6000b7e15"
  },
  {
    "url": "assets/js/91.78cd4564.js",
    "revision": "c545dbd69907b319df9eca9a592baa79"
  },
  {
    "url": "assets/js/92.8a7c5c1f.js",
    "revision": "6228dddd798367a8152acec665dbe50e"
  },
  {
    "url": "assets/js/93.b8a807f8.js",
    "revision": "1af266387a17b1f268f6ba3aef7b59b3"
  },
  {
    "url": "assets/js/94.1e69ed57.js",
    "revision": "307807ca2ad67e0a83db24ab38f0753a"
  },
  {
    "url": "assets/js/95.a83e8ebb.js",
    "revision": "66bff51b996d1ec909bba5ca1682accf"
  },
  {
    "url": "assets/js/96.edfbdafb.js",
    "revision": "ec3d7414f327d12cd7783d5b1bb506c9"
  },
  {
    "url": "assets/js/97.766e72d6.js",
    "revision": "2758902f43a163c2277d6b8b9e161f26"
  },
  {
    "url": "assets/js/98.1f99d478.js",
    "revision": "5bdb66ccde355341e8bccf6628679871"
  },
  {
    "url": "assets/js/99.38c0c8a0.js",
    "revision": "2a6301a558fcf085c697da3ea8611d91"
  },
  {
    "url": "assets/js/app.bf22e5bc.js",
    "revision": "a0b885962a7ba3202d456692a5ec18c7"
  },
  {
    "url": "assets/js/vendors~docsearch.e480d9b8.js",
    "revision": "a887f3139f3f8baba27c98087130d4d9"
  },
  {
    "url": "categories/index.html",
    "revision": "283ccb1100722a9870a0018af05a1b00"
  },
  {
    "url": "guide.html",
    "revision": "7703872347cfcd7db9bb6407d6b0b0ff"
  },
  {
    "url": "images/bubble-trapping-1.jpg",
    "revision": "e69af734e1b29168ef54807d1f4aafa5"
  },
  {
    "url": "images/Build_APK4.png",
    "revision": "ecb7631cc44ff8aca6267b7732d5b6f0"
  },
  {
    "url": "images/Build_APK6.png",
    "revision": "6c235271011191310716487a82e41e44"
  },
  {
    "url": "images/Build_APK7.png",
    "revision": "432e08fcc2902dfa4d60076fa3d56225"
  },
  {
    "url": "images/cache_20230228.png",
    "revision": "48aa9e6f08af0cecdc9d6afdeab0376c"
  },
  {
    "url": "images/cache_20230228142105_etag.png",
    "revision": "a97df7ff232a216afa60495a8943c8f8"
  },
  {
    "url": "images/cffx-2.jpg",
    "revision": "c6b60276c21841765d679760870a877c"
  },
  {
    "url": "images/cffx.jpg",
    "revision": "1cf58a76c7ccc1b942acbf29fa308181"
  },
  {
    "url": "images/clientX.jpg",
    "revision": "529e87cb16731e8a293bdba676c38ba9"
  },
  {
    "url": "images/computed.png",
    "revision": "0e504a6bf1d38105574d3f21a6ce8ac7"
  },
  {
    "url": "images/css-jx-1.jpg",
    "revision": "b856a0004c992cd4f75d2dc6f4f2b374"
  },
  {
    "url": "images/css-jx-2.jpg",
    "revision": "7b04b225f5436a12e591eff304d49385"
  },
  {
    "url": "images/dns-2.png",
    "revision": "87d8f2cd1fcf7fa7470697d8d81ad56b"
  },
  {
    "url": "images/DNS.jpg",
    "revision": "0dacd61f63a07a7048b9c8ebd3214c0e"
  },
  {
    "url": "images/esmodule.jpg",
    "revision": "60d857da720f15b1172a670b3f1346c9"
  },
  {
    "url": "images/hero-logo.jpg",
    "revision": "c621c54381b7a802001940d9e58e6ff0"
  },
  {
    "url": "images/hmr-2.png",
    "revision": "e9f784456e7ed9601fb786f3b7489d70"
  },
  {
    "url": "images/hmr.png",
    "revision": "9ac8834c1cddcf3f592f3a501f76fbd2"
  },
  {
    "url": "images/http-request.jpg",
    "revision": "9d43833fdab72b0f075af21c3f54f311"
  },
  {
    "url": "images/http-request2.jpg",
    "revision": "2528eac6fe0c84024a1a62b32c3c29be"
  },
  {
    "url": "images/jc-1.png",
    "revision": "20c9c5ea7cc948c6aabb24a006327414"
  },
  {
    "url": "images/jicheng.jpg",
    "revision": "c3396d97d726896c5a61c5ff1f9d3833"
  },
  {
    "url": "images/langchain/agent/sex-1.png",
    "revision": "66011a5fa72ddd5cf5b69d74a998179d"
  },
  {
    "url": "images/langchain/agent/sex-survived.png",
    "revision": "5c4331a70002320c36fc2ed0c98462fd"
  },
  {
    "url": "images/langchain/agent/sex对生存率的影响统计.png",
    "revision": "365b2f573004658408c779248d92d4bb"
  },
  {
    "url": "images/langchain/agent/summary.png",
    "revision": "b30565fa9e0e9eda3656316aedfd127f"
  },
  {
    "url": "images/langchain/agent/Survived-column-1.png",
    "revision": "68e5e51e75ec919a23332f50487667fd"
  },
  {
    "url": "images/langchain/agent/Survived-column-photo.png",
    "revision": "d093458f596f37625026f83e5925303c"
  },
  {
    "url": "images/lifecycle.png",
    "revision": "6f2c97f045ba988851b02056c01c8d62"
  },
  {
    "url": "images/llm/rag/RAG-1.png",
    "revision": "18f030853057a6371ad76f377927bcc3"
  },
  {
    "url": "images/llm/rag/RAG-2.png",
    "revision": "9905d20567a218b70c25b37b12f94e23"
  },
  {
    "url": "images/llm/rag/RAG-3.png",
    "revision": "804231be007fe692e3f5799b8119e072"
  },
  {
    "url": "images/lowcode-1.jpg",
    "revision": "273a6c3721840cce3a5567b56a93801e"
  },
  {
    "url": "images/lowcode-2.jpg",
    "revision": "251d8b9555d83c4cea873893908d389a"
  },
  {
    "url": "images/lowcode-3.jpg",
    "revision": "d546798b96313e88eab143684c9b3ecc"
  },
  {
    "url": "images/lowcode-4.jpg",
    "revision": "4e37846417e966f34fa9b8b2834145c9"
  },
  {
    "url": "images/lowcode-5.jpg",
    "revision": "3f673cdb348a9b403226f5b6740b2ff5"
  },
  {
    "url": "images/lowcode-6.jpg",
    "revision": "dd4da74b3ab4dbe37d15c360d37425c8"
  },
  {
    "url": "images/lowcode-7.jpg",
    "revision": "684763d65a0cf3212c85513ac236d838"
  },
  {
    "url": "images/mcp/mcp-rules-ide.png",
    "revision": "20b8757194f8c2daf0d2a74b46c0308d"
  },
  {
    "url": "images/mcp/mcp-server-ide.png",
    "revision": "cc1712d7aa1ebff2adf47efe01ce2854"
  },
  {
    "url": "images/other/svg.png",
    "revision": "67954a7e209562245c3a54c8c16b21cd"
  },
  {
    "url": "images/performance-tti.png",
    "revision": "ba288fc4c9fba2a689b9ef5bdb280fe5"
  },
  {
    "url": "images/performance.png",
    "revision": "d9ced95d585c22a0e262448e08f0feab"
  },
  {
    "url": "images/photo.jpg",
    "revision": "104525c55aa112b7e59bca7b1509db95"
  },
  {
    "url": "images/project/husky.png",
    "revision": "a45ec9024fe9cdcd4c90ff25bbf51881"
  },
  {
    "url": "images/prototype.png",
    "revision": "a3e50e8c077f6875b97964c73e8ab7d7"
  },
  {
    "url": "images/react-lifecycle.png",
    "revision": "959dce1f100f5ff318339c769d212afc"
  },
  {
    "url": "images/skd-sysdm01.png",
    "revision": "5cb2014a8e4fd345f966d320ce130064"
  },
  {
    "url": "images/skd-sysdm02.png",
    "revision": "d43b4baf7688634132980a5ae9b92b16"
  },
  {
    "url": "images/slot.png",
    "revision": "3f0f008600d14ef8936cb824ee60a9f8"
  },
  {
    "url": "images/sort.png",
    "revision": "e7d4e8a07ed369d457c7d5f07b5427f2"
  },
  {
    "url": "images/ssr-csr.png",
    "revision": "6b81adf1856afc91d88c1148ca4afe9b"
  },
  {
    "url": "images/ssr-csr1.png",
    "revision": "999d7ddbbc41054f0c0a7bf1b37989df"
  },
  {
    "url": "images/ssr-server.png",
    "revision": "97a6b63de6f2d399bdb83da23e284b4a"
  },
  {
    "url": "images/ssr-source.png",
    "revision": "bdd04766275d517290c87db1c8b689aa"
  },
  {
    "url": "images/suspense1.png",
    "revision": "08e9c4025772b2038747d27f6ae01915"
  },
  {
    "url": "images/suspense2.png",
    "revision": "d0e5afe314295a263a1eb8ea66d2f526"
  },
  {
    "url": "images/tcp-four.jpg",
    "revision": "1d0348bb5383b6c2a390d690768906a6"
  },
  {
    "url": "images/tcp-ip.png",
    "revision": "ff288cd81a6ba9792dda1ffcc36b761c"
  },
  {
    "url": "images/tcp-three.jpg",
    "revision": "5768e2e70e8e5b296dd1160a6bf133bd"
  },
  {
    "url": "images/vue-react.jpg",
    "revision": "8edac1357455aa791d28863ad8370170"
  },
  {
    "url": "images/vue/patchFlag.png",
    "revision": "172d76f5b6cc8cd2f48f9c96f8d0c836"
  },
  {
    "url": "images/webpack.png",
    "revision": "7c81d03d7615eb7a6bca9d375228e919"
  },
  {
    "url": "index.html",
    "revision": "ed5d19aa69f6efc8d27a8fa53d772631"
  },
  {
    "url": "logo.png",
    "revision": "4e48730bd98de9f333e6bd14d62b6c7d"
  },
  {
    "url": "mcpstudy/ide-mcp-server.html",
    "revision": "544a2834e9d87e061d9ade05ba31106f"
  },
  {
    "url": "modelstudy/impl-transformer.html",
    "revision": "7e0237a9d3114967945cfa007d2469a3"
  },
  {
    "url": "modelstudy/langchain-agent-practice.html",
    "revision": "d0b30b51e6217ea79b5ee9f522504260"
  },
  {
    "url": "modelstudy/langchain-study.html",
    "revision": "cbc8811842d7cda87ea70b6c80862420"
  },
  {
    "url": "modelstudy/model-basic.html",
    "revision": "6040a250916e0c72e0faa583b010c3bc"
  },
  {
    "url": "modelstudy/model-case.html",
    "revision": "90c76f40e688b9ee44ded46ff2c5707a"
  },
  {
    "url": "modelstudy/model-deploy.html",
    "revision": "bb63f6d14b0e0cda6338aad710a6372c"
  },
  {
    "url": "modelstudy/model-english.html",
    "revision": "fb911effd3f399636b32a8e42ccbd55f"
  },
  {
    "url": "modelstudy/model-evaluate.html",
    "revision": "8c6ffc651550c4ab59f387b7805680b9"
  },
  {
    "url": "modelstudy/model-function-calling.html",
    "revision": "dcec966da045dfe4e0038e1238aa3f17"
  },
  {
    "url": "modelstudy/model-langchain-rag.html",
    "revision": "d783f90951f7e1d28fc690ac7ca2f3d6"
  },
  {
    "url": "modelstudy/model-langchain.html",
    "revision": "175e8b0d28df74a824cefaa30dbf7fca"
  },
  {
    "url": "modelstudy/model-optimize.html",
    "revision": "3a7b8ace96d8261cb53bf600643d6ee9"
  },
  {
    "url": "modelstudy/model-pytorch.html",
    "revision": "2d91937a9fa65c77c287a366c1af8499"
  },
  {
    "url": "modelstudy/model-question.html",
    "revision": "1007c0a68bf4c4d12dd884106ab6bb57"
  },
  {
    "url": "modelstudy/model-rag-pain.html",
    "revision": "f3036b48c1fe1d362406352b7d965af2"
  },
  {
    "url": "modelstudy/model-rag.html",
    "revision": "111881260a7e8fd250313c9988978a13"
  },
  {
    "url": "modelstudy/model-RNN.html",
    "revision": "14fb6ca99b3576d5c765391999d0e387"
  },
  {
    "url": "modelstudy/model-summary.html",
    "revision": "17c2bf6a5050192e9efbc03ef3bad8cd"
  },
  {
    "url": "modelstudy/model-train-code.html",
    "revision": "98a1e7d3f5d3232c2ad1be25abef4a78"
  },
  {
    "url": "modelstudy/model-train.html",
    "revision": "c91be19591b0d2eca13dc1d6880a5db8"
  },
  {
    "url": "modelstudy/model-transformer.html",
    "revision": "50dcaa2d7d09452cf0f643191174de62"
  },
  {
    "url": "modelstudy/model.html",
    "revision": "26b6e1fee7bfcf8a7207b84c018eb990"
  },
  {
    "url": "modelstudy/temp.html",
    "revision": "d1fb9237e42609d31e544160cc9d2bfd"
  },
  {
    "url": "modelstudy/transformer-code.html",
    "revision": "77a6371950577a314e1b0d4654fbe06f"
  },
  {
    "url": "modelstudy/transformer-knowledge.html",
    "revision": "28e183cefee9229135ad0ed82c08e217"
  },
  {
    "url": "modelstudy/transformer-learn.html",
    "revision": "939149137a3edbd508b9040cb1170bd8"
  },
  {
    "url": "modelstudy/transformer-related.html",
    "revision": "475217f6b1fb1351de789acfb191eced"
  },
  {
    "url": "modelstudy/whatIsModel.html",
    "revision": "b73513b16a9d75f93e9edd97121f7f2b"
  },
  {
    "url": "other/ai-agent.html",
    "revision": "1a2221fd23ab1472b7d851e942876bfe"
  },
  {
    "url": "other/conda.html",
    "revision": "ac4af4bdb27773c2259f7909a39bea14"
  },
  {
    "url": "other/excellentarticles.html",
    "revision": "c2d6e7b3b6d6cfab95915596fdd93d25"
  },
  {
    "url": "other/git-operate.html",
    "revision": "1981bbc2bbb61982e08e997407e6616a"
  },
  {
    "url": "other/model-refrence.html",
    "revision": "fbbb3d43f056e5f92fdc0cc4909375f9"
  },
  {
    "url": "other/python.html",
    "revision": "6df1a3168c03c3fe6e3316bc53ab587d"
  },
  {
    "url": "other/pytorch-know.html",
    "revision": "e356ee3539d30a203f03c841f080c65f"
  },
  {
    "url": "other/transformer-1.html",
    "revision": "8881d263ff4ba2e8fc25e2a9660d86a5"
  },
  {
    "url": "other/transformer-2.html",
    "revision": "7e67d58ce988d8e38defb4e98c410488"
  },
  {
    "url": "other/transformer-3.html",
    "revision": "953ac8adf4e022741bba5a4546614a54"
  },
  {
    "url": "other/transformer-collect.html",
    "revision": "41a72ce6f4e9289050a715dad1ea3478"
  },
  {
    "url": "other/transformer-learn.html",
    "revision": "fada05adaba2c9b720f4edbd005723a8"
  },
  {
    "url": "other/using-packages.html",
    "revision": "09365170aad980c9ed4a9211b5fddeeb"
  },
  {
    "url": "pystudy/array-operation.html",
    "revision": "a1399629017f432d020eaf401c383344"
  },
  {
    "url": "pystudy/basic.html",
    "revision": "48d96119da171d25be9226ad1eff2f94"
  },
  {
    "url": "pystudy/builtin-function.html",
    "revision": "e46b6f09dea3616f687c9e7f87514f66"
  },
  {
    "url": "pystudy/class.html",
    "revision": "8179c5775b01c84c004387dd4da115cf"
  },
  {
    "url": "pystudy/data-structure.html",
    "revision": "419f0bb1b87b29ddf0c08df06f3bdf6b"
  },
  {
    "url": "pystudy/database.html",
    "revision": "236217b6a2ea84f8edefcbf37d197004"
  },
  {
    "url": "pystudy/exception.html",
    "revision": "65f1798b97f103d33b4d56a52208bc70"
  },
  {
    "url": "pystudy/file.html",
    "revision": "d1852d50d92b9b7c14ae04413d874f8e"
  },
  {
    "url": "pystudy/function.html",
    "revision": "50d2c6e99bac1d6cd7996067cf01a17b"
  },
  {
    "url": "pystudy/module.html",
    "revision": "1bcfa5ec3fbfa955e502d52b5e69acec"
  },
  {
    "url": "pystudy/network.html",
    "revision": "0b64b38126a30407dfa5b09d2043ceff"
  },
  {
    "url": "pystudy/numpy.html",
    "revision": "c4848b27afe6df94a46fca892e03eafa"
  },
  {
    "url": "pystudy/package.html",
    "revision": "fc33e5bd30cf23a2eebabe1e233ae695"
  },
  {
    "url": "pystudy/process.html",
    "revision": "7712c718e8d017914301b108d5eaca86"
  },
  {
    "url": "pystudy/regex.html",
    "revision": "e22230bfd7684ea1397ab2b7348019a4"
  },
  {
    "url": "pystudy/string-function.html",
    "revision": "25b166dc9bd97820cf7a5340376dcf08"
  },
  {
    "url": "pystudy/thread.html",
    "revision": "4f43c87ac6dc6469e71f3503ae098cd6"
  },
  {
    "url": "pystudy/use-library.html",
    "revision": "395f12aa2dde31616c0559e0b7222531"
  },
  {
    "url": "react/react-advanced.html",
    "revision": "2c80ba080f48ff16e4346eedea5e1302"
  },
  {
    "url": "react/react-basic.html",
    "revision": "a977e5ef1915efca7b5d6a60fefef050"
  },
  {
    "url": "react/react-context.html",
    "revision": "2d4739b55136f0c60069d0e46bb40cec"
  },
  {
    "url": "react/react-relation.html",
    "revision": "b81377a1f1e59f8ea05f4d1958e2a573"
  },
  {
    "url": "react/ssr.html",
    "revision": "632a07dde458df88dcbfb5a50a7f53ab"
  },
  {
    "url": "react/status-manage.html",
    "revision": "d4fa631fcad940d50805694d240c5f92"
  },
  {
    "url": "reactnative/reactnative-desc.html",
    "revision": "c2b00125d87a37a0ce910a5acc0f4a25"
  },
  {
    "url": "reactnative/reactnative.html",
    "revision": "d231c1e2c381f52299ac0def0967973e"
  },
  {
    "url": "reactnative/rn-problem.html",
    "revision": "7e97f83d8ce7d7e69184cdbaf5fd5491"
  },
  {
    "url": "tag/index.html",
    "revision": "9eb42d3f35040a2bc37cbef4905f9dff"
  },
  {
    "url": "tag/react/index.html",
    "revision": "6d002c388825a115fc67ad4caf5213cf"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "d2fc3bc402c57db8928458da759c67f8"
  },
  {
    "url": "tag/二叉树/index.html",
    "revision": "3643371ed94efe3a281bf45daaa1827d"
  },
  {
    "url": "timeline/index.html",
    "revision": "9e44f6d08337872b88bb1e550861d75c"
  },
  {
    "url": "vue/basicknowledge.html",
    "revision": "f5775da73c29ed36b7b363cc20701dc4"
  },
  {
    "url": "vue/compare.html",
    "revision": "993ef9af9890879cb7ac285ff6380018"
  },
  {
    "url": "vue/misnotes.html",
    "revision": "186b10009d5b715dc6b27bdf81386baf"
  },
  {
    "url": "vue/ssr.html",
    "revision": "3582cde503d3cc25269944a8016d4413"
  },
  {
    "url": "vue/vue-attrs-listeners.html",
    "revision": "beb4fe3542f6b3fdbb51ea38a754e122"
  },
  {
    "url": "vue/vue-principle.html",
    "revision": "c2801c9175af8660cac89416ac3de44d"
  },
  {
    "url": "vue/vue-router.html",
    "revision": "ecd5a6acafcecac0542713bdecfc288e"
  },
  {
    "url": "vue/vue-status.html",
    "revision": "8838c80adbdcc696d7527045695f5e52"
  },
  {
    "url": "vue/vue3-basic.html",
    "revision": "7d0312b053e076e945f5789428488b68"
  },
  {
    "url": "vue/vue3-impl.html",
    "revision": "a1f63b051421462eb8a0542374f66615"
  },
  {
    "url": "vue/vue3.html",
    "revision": "24a4b1a787131466f86bf16dba113d03"
  },
  {
    "url": "vue/vuex.html",
    "revision": "c8ed11676287651beb4493713092dbe3"
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
