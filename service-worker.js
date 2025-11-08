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
    "revision": "d90e2e167b7108a9e5c66d0b1ec8a3fa"
  },
  {
    "url": "algorithm/algo-temp.html",
    "revision": "7e17fe75d3a5a5fc10ac82b6e538f649"
  },
  {
    "url": "algorithm/binary-search.html",
    "revision": "05e39ae268db5b38628befcc534d2f3b"
  },
  {
    "url": "algorithm/binary-tree.html",
    "revision": "66d8f7e876bc240dd0b4b96593f42031"
  },
  {
    "url": "algorithm/compare-al.html",
    "revision": "3be7c95db231efc0a102381accc8d1c5"
  },
  {
    "url": "algorithm/del-single-list-2.html",
    "revision": "bb34bba65cd79e62148a5f0dcb87f136"
  },
  {
    "url": "algorithm/del-single-list.html",
    "revision": "97806e87f1cec2d010a1774a5dbdd21c"
  },
  {
    "url": "algorithm/double-pointer.html",
    "revision": "5e42f5a304ee45793e39fcf5236ec5ca"
  },
  {
    "url": "algorithm/dynamic-plan.html",
    "revision": "ff38882a0518f356c5cd134da0c76b6b"
  },
  {
    "url": "algorithm/effect-bracket.html",
    "revision": "f2c0e89fcce0697f8358d0590fa4a57d"
  },
  {
    "url": "algorithm/greedy.html",
    "revision": "b908d2dea35bc3d263c97796a218bc07"
  },
  {
    "url": "algorithm/longasc-sequence.html",
    "revision": "d46e6ea487a66ed12dd3e12c3611cf19"
  },
  {
    "url": "algorithm/other.html",
    "revision": "832e133f33999b7680f8713d90fb5713"
  },
  {
    "url": "algorithm/receive-rain.html",
    "revision": "377b23aa4ce0b4da5c26b39f5a05dacd"
  },
  {
    "url": "algorithm/reverse-list.html",
    "revision": "cb0138c5b90b3d04f45ccc1f08555e56"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "e261e20b4be67e704f7127ee57dcbe96"
  },
  {
    "url": "assets/css/0.styles.b92e6d01.css",
    "revision": "1247c4633219ef505bc3305051f6a123"
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
    "url": "assets/js/1.ba4d6411.js",
    "revision": "0b0df57b0f6d7218452f3cb5c8ffba2b"
  },
  {
    "url": "assets/js/10.07b66ac1.js",
    "revision": "4184c2015680721b44d7f78b3195e27f"
  },
  {
    "url": "assets/js/100.3fc73df5.js",
    "revision": "561516037c0db175c2bad0b57d8ab03d"
  },
  {
    "url": "assets/js/101.64af12d6.js",
    "revision": "b836c5c99809e5e20c17ec9262d57dc3"
  },
  {
    "url": "assets/js/102.66135ce7.js",
    "revision": "d07f85ef31140d3a9b3f625a93597348"
  },
  {
    "url": "assets/js/103.56ea7b53.js",
    "revision": "1f5958881d87150b930d6d6f308b3d3e"
  },
  {
    "url": "assets/js/104.ae3ba763.js",
    "revision": "7c59e54cb40bff15f8375cd0d504f8d8"
  },
  {
    "url": "assets/js/105.c22c691a.js",
    "revision": "0b64c210890b422de141a959321db3de"
  },
  {
    "url": "assets/js/106.3c7811dd.js",
    "revision": "9ea0dfc70b8e2a092529e07d960c7eae"
  },
  {
    "url": "assets/js/107.8c0b1d6f.js",
    "revision": "902e243f09146b3a9b4665d2c051ce5f"
  },
  {
    "url": "assets/js/108.70fa098c.js",
    "revision": "1b8d8766ff5f377d6bef40d2f97ad57b"
  },
  {
    "url": "assets/js/109.733990ab.js",
    "revision": "b3bc7dd1ffba3b515c57eeca06ef68fc"
  },
  {
    "url": "assets/js/11.91f5d141.js",
    "revision": "43a36fa038527ef2561d19d21aa53b66"
  },
  {
    "url": "assets/js/110.0ea8c799.js",
    "revision": "98d7ebcce214d63c69e24c11421f94e9"
  },
  {
    "url": "assets/js/111.89828e13.js",
    "revision": "665b0c91395142901f3e07ae6447c63c"
  },
  {
    "url": "assets/js/112.35113804.js",
    "revision": "0917f939b5dcc56e22cbca3e08b5dd37"
  },
  {
    "url": "assets/js/113.2ed9b43b.js",
    "revision": "1fec5fd5df3dbffc8e60f9fb33d1e255"
  },
  {
    "url": "assets/js/114.f6b30ed1.js",
    "revision": "a58b881389276e318a0e1abb82496fd7"
  },
  {
    "url": "assets/js/115.a31caf4a.js",
    "revision": "c77e5accd12d610df7b5be3b67c6d902"
  },
  {
    "url": "assets/js/116.0749629d.js",
    "revision": "2d2da2f5b3d52e8597a4e5ee819de08a"
  },
  {
    "url": "assets/js/117.bfc542c9.js",
    "revision": "c408867bf36b4b159f1e98ba54dd9843"
  },
  {
    "url": "assets/js/118.88018068.js",
    "revision": "1422b795dc2c35a7189bacc5267ea05c"
  },
  {
    "url": "assets/js/119.310db11a.js",
    "revision": "a8548d6f3d87e30e197124651dd2e123"
  },
  {
    "url": "assets/js/12.2126dbf5.js",
    "revision": "772921ce977d2346ba418f83e89cc6b3"
  },
  {
    "url": "assets/js/120.1141dce4.js",
    "revision": "d1eee1236ee4485402fbab454de748f2"
  },
  {
    "url": "assets/js/121.1494b9e8.js",
    "revision": "d91a0fb8a1aa576d9722ec471a3c5328"
  },
  {
    "url": "assets/js/122.285059df.js",
    "revision": "93bd8a68ce124347108648d2f2451ceb"
  },
  {
    "url": "assets/js/123.c9c0740a.js",
    "revision": "bc44b10d5f4fb6c75ae3115d0f837a1f"
  },
  {
    "url": "assets/js/124.d4272d3b.js",
    "revision": "f6205cb0c4f7f64885500987d01225bc"
  },
  {
    "url": "assets/js/125.c37947d7.js",
    "revision": "e02f52a95f88660aecc9d09a156ba057"
  },
  {
    "url": "assets/js/126.47ac89e8.js",
    "revision": "55d5ed263f54cf5ee0210e2e07257e63"
  },
  {
    "url": "assets/js/127.11cfb168.js",
    "revision": "a382f1a55df06a6101f4f3789fcff2e8"
  },
  {
    "url": "assets/js/128.6a3886f9.js",
    "revision": "bf57db9ef7853494d0f347be96c548f5"
  },
  {
    "url": "assets/js/129.6e6373aa.js",
    "revision": "7a317a86986e3676a4e3effefdd8a674"
  },
  {
    "url": "assets/js/13.c9ef1f8e.js",
    "revision": "f4afa3d428b2acecb0740742d1acda74"
  },
  {
    "url": "assets/js/130.b65efc1e.js",
    "revision": "ed3b74ada7fe604399f4dac482ac6034"
  },
  {
    "url": "assets/js/131.a27b0677.js",
    "revision": "82a48b6602f74803671af32e2b24123c"
  },
  {
    "url": "assets/js/132.580d38e7.js",
    "revision": "6ef9a05f9610eb579e8019f7a85bae86"
  },
  {
    "url": "assets/js/133.99cf2230.js",
    "revision": "41c9034597190a92c58ba12debee4f14"
  },
  {
    "url": "assets/js/134.c4d0ce0b.js",
    "revision": "95a7d31b815564db4818ef9cdec51557"
  },
  {
    "url": "assets/js/135.57e79868.js",
    "revision": "1400d3dda2b363b1e23a8013aecf454c"
  },
  {
    "url": "assets/js/136.3b83d28b.js",
    "revision": "04152b391f723aac043f7d58412bbfc6"
  },
  {
    "url": "assets/js/137.97cfdf8b.js",
    "revision": "bdea283677d5a8cba150853d2c0a3aeb"
  },
  {
    "url": "assets/js/138.72953b05.js",
    "revision": "82214663c8edaa6e542cca8e4f56adc5"
  },
  {
    "url": "assets/js/139.14b4afa2.js",
    "revision": "40063eb8cc94203d351104b787898e27"
  },
  {
    "url": "assets/js/14.2741cb43.js",
    "revision": "bf5b82d4d9c6926dbf46d5d8792cd004"
  },
  {
    "url": "assets/js/140.1aa21427.js",
    "revision": "04a70a5ff259cb3cc76afa466315dea7"
  },
  {
    "url": "assets/js/141.4e510cd3.js",
    "revision": "1e9f3d1847bb0387d0279ce3073efb29"
  },
  {
    "url": "assets/js/142.adb40915.js",
    "revision": "e19f966c43e4bad39ff72e5001dcca51"
  },
  {
    "url": "assets/js/143.fd7d6776.js",
    "revision": "f4eaa14f3bf9b1133aaaeabaadfeb8f7"
  },
  {
    "url": "assets/js/144.01777b06.js",
    "revision": "c002b2e85c58656d2cfd538ae6b7740a"
  },
  {
    "url": "assets/js/145.8eb30e2d.js",
    "revision": "12d0915a37be997eea2daef66bcc9ecb"
  },
  {
    "url": "assets/js/146.16904ec7.js",
    "revision": "25eab35624f6a9329f4b5fa2b7aa5264"
  },
  {
    "url": "assets/js/147.dd42237c.js",
    "revision": "8a1cc00cdb58495c75868b223299215c"
  },
  {
    "url": "assets/js/148.11bd2f09.js",
    "revision": "8ddd38bc9b6f68accf655683af03f853"
  },
  {
    "url": "assets/js/149.440b0d3c.js",
    "revision": "b59c62cf11f6ef40fbaf024a998567af"
  },
  {
    "url": "assets/js/15.491bfa3e.js",
    "revision": "86c726732431b7efa3a4daeba97ace98"
  },
  {
    "url": "assets/js/150.cc36fe5f.js",
    "revision": "dad95a305877751517c50a5f7d1b654a"
  },
  {
    "url": "assets/js/16.eedcc008.js",
    "revision": "ee2105943d1788132e1b45bc07c53a7b"
  },
  {
    "url": "assets/js/17.8380d8a3.js",
    "revision": "e05e424c09de9f3cc4a57b987f3344cd"
  },
  {
    "url": "assets/js/18.e6b6ee67.js",
    "revision": "d3cfc4512e0d5312855a4bc9ad44579d"
  },
  {
    "url": "assets/js/19.127093b0.js",
    "revision": "c17c7414a3ad16029acdd35858da751e"
  },
  {
    "url": "assets/js/20.13018e45.js",
    "revision": "0e5e504f5303fb0b67d5b18ba847d3f8"
  },
  {
    "url": "assets/js/21.89860b7c.js",
    "revision": "f207e2881457dbe6f21dc5db92b9edd9"
  },
  {
    "url": "assets/js/22.94430091.js",
    "revision": "409ea54918f15fb9cff95b8a0fbe921a"
  },
  {
    "url": "assets/js/23.51c0584a.js",
    "revision": "4d8166abcfcecd8a326858b534a3b7bc"
  },
  {
    "url": "assets/js/24.53f66321.js",
    "revision": "c592e6c2f0c2952010866d793fd6e0bf"
  },
  {
    "url": "assets/js/25.1b9960ef.js",
    "revision": "607886162684c0312766eeaeccb321b8"
  },
  {
    "url": "assets/js/26.2ad4a545.js",
    "revision": "653dbaf3bca9c7181edd192a4c95b023"
  },
  {
    "url": "assets/js/27.61f08265.js",
    "revision": "5d309ca315fc29dfa3bf4d002006fa2f"
  },
  {
    "url": "assets/js/28.7d1ff35e.js",
    "revision": "a331be87d605a73de8dd48cb60f9ca0f"
  },
  {
    "url": "assets/js/29.6b22745a.js",
    "revision": "b8092e81778ab458d28f557320687605"
  },
  {
    "url": "assets/js/3.ac02bfbd.js",
    "revision": "df39aca961144197b00f272e7dd09a49"
  },
  {
    "url": "assets/js/30.dbd2057a.js",
    "revision": "eaf4963509efc2324690b3f8938735fb"
  },
  {
    "url": "assets/js/31.b6da7053.js",
    "revision": "5492515bbe12fd35aca5c56ae72266d2"
  },
  {
    "url": "assets/js/32.e03872ce.js",
    "revision": "ea633043835fdc648d88e7b3b458f8bd"
  },
  {
    "url": "assets/js/33.b7f362d2.js",
    "revision": "5761d8fa82ac490c0fd1267cfa6def35"
  },
  {
    "url": "assets/js/34.1169a1a5.js",
    "revision": "2acae9748e6317590d859922390d5bd7"
  },
  {
    "url": "assets/js/35.e5ea3f4f.js",
    "revision": "0a2caea6ae9f1d010a6447385c102c97"
  },
  {
    "url": "assets/js/36.b302e5cf.js",
    "revision": "0deabf56121e2f2edfa50c61e19c588f"
  },
  {
    "url": "assets/js/37.a776ac4e.js",
    "revision": "e2bd37dddb17f08cdf048eea04e16faf"
  },
  {
    "url": "assets/js/38.c42c5308.js",
    "revision": "2e1eddc53d6d464d38dd9d88dc931d42"
  },
  {
    "url": "assets/js/39.2315e4ad.js",
    "revision": "d6dedc1ad375d330a789eacdccb38ab7"
  },
  {
    "url": "assets/js/4.e51e222a.js",
    "revision": "2841a75f62752f85722e033372c29f18"
  },
  {
    "url": "assets/js/40.59a76a42.js",
    "revision": "bea8fc00bd413715ccff97274c46a4e9"
  },
  {
    "url": "assets/js/41.92a92c71.js",
    "revision": "d04d586c00728f2489ff5bafbcf0a779"
  },
  {
    "url": "assets/js/42.61ca43b4.js",
    "revision": "611b5c4ea06dceef7c04068aa6f207d0"
  },
  {
    "url": "assets/js/43.a8e42d68.js",
    "revision": "5ba2ea9272d29b3b60996e68ae2c9077"
  },
  {
    "url": "assets/js/44.f827a38c.js",
    "revision": "fc851f24e5887d0fe3a1f0fe03fe299e"
  },
  {
    "url": "assets/js/45.b66d2400.js",
    "revision": "f76201a9a7265b25a7bb677be87a12d4"
  },
  {
    "url": "assets/js/46.2e3e1c2c.js",
    "revision": "56af50646c919510ab54e9154b789cc0"
  },
  {
    "url": "assets/js/47.586c5420.js",
    "revision": "b87b77ca283ea3a2d8f3b1acb3fb6ece"
  },
  {
    "url": "assets/js/48.bbe7e84d.js",
    "revision": "6d1ea1abdcec7dce785cee5015f6da99"
  },
  {
    "url": "assets/js/49.1683c8c2.js",
    "revision": "f7a8caf2df58f9af074e00b42a87c4f9"
  },
  {
    "url": "assets/js/5.60398f15.js",
    "revision": "8abb22fde61e99ea77915a7930c23860"
  },
  {
    "url": "assets/js/50.fb57cd2d.js",
    "revision": "594ae1ab3f9605cf37e650c324bd8d08"
  },
  {
    "url": "assets/js/51.b582d8ea.js",
    "revision": "65dbaa4b21b4fe42aaa806888ee9c0df"
  },
  {
    "url": "assets/js/52.92359bad.js",
    "revision": "5bef18e31dd69ec76e005a3c60987063"
  },
  {
    "url": "assets/js/53.434c2729.js",
    "revision": "ec1d2b0171fe0447862e1d545e0d03ff"
  },
  {
    "url": "assets/js/54.4855b577.js",
    "revision": "2d7b9dc1e3572204336c3e266f1c1719"
  },
  {
    "url": "assets/js/55.dba15bdb.js",
    "revision": "85d9e3829e4eafaa83490696b7c0d416"
  },
  {
    "url": "assets/js/56.134930d5.js",
    "revision": "0bde3a4123b415b69d2b225370fa6b0c"
  },
  {
    "url": "assets/js/57.fd8efef4.js",
    "revision": "e3c3ed5acfeed98cef62ee98ea96b3e9"
  },
  {
    "url": "assets/js/58.1a6910f8.js",
    "revision": "56d97c8971797fd5b6c51f947f9d6d74"
  },
  {
    "url": "assets/js/59.cec11d6b.js",
    "revision": "02970f2daf1a5e11221a67690398ffb8"
  },
  {
    "url": "assets/js/6.775d6c13.js",
    "revision": "e1a3d42fd29735010cca76b218114972"
  },
  {
    "url": "assets/js/60.4f17565c.js",
    "revision": "64343d080bd6843e287707e6f7219360"
  },
  {
    "url": "assets/js/61.e11c97b6.js",
    "revision": "fec503a79d1593a0fc5afecc8a784f25"
  },
  {
    "url": "assets/js/62.d0d8a8f8.js",
    "revision": "a62dafa2d4ac17f377825be4104b1cfe"
  },
  {
    "url": "assets/js/63.3a9f0dc8.js",
    "revision": "6cba84898d6d107744f3e8d28927c4ce"
  },
  {
    "url": "assets/js/64.14d4c59c.js",
    "revision": "02601dd51e76da66e805fceb939080f5"
  },
  {
    "url": "assets/js/65.d29628d5.js",
    "revision": "7a67100aabb3a967a5d475e2257e800a"
  },
  {
    "url": "assets/js/66.77327c57.js",
    "revision": "9f1d90f0ea613dd1c65187779242cfc8"
  },
  {
    "url": "assets/js/67.e2b2575f.js",
    "revision": "ded129dbd2671d04d361691140748096"
  },
  {
    "url": "assets/js/68.b10a7b92.js",
    "revision": "31f40c6c6770872a19442d0a7f3a5606"
  },
  {
    "url": "assets/js/69.646f2f43.js",
    "revision": "a7485a05b197dc1a95f8ba6ddb72f706"
  },
  {
    "url": "assets/js/7.e91fdee2.js",
    "revision": "19481eb69187f48042a1168509f4d68a"
  },
  {
    "url": "assets/js/70.29584ec7.js",
    "revision": "3f4214afec44dc6cc4f3ff3a04c27f2d"
  },
  {
    "url": "assets/js/71.de7e3007.js",
    "revision": "f6ef658a081e2c079e7975553f53b22c"
  },
  {
    "url": "assets/js/72.9cfea194.js",
    "revision": "587f2a86c28f69494b08065f777fe61b"
  },
  {
    "url": "assets/js/73.74c9946b.js",
    "revision": "788b141ab0eae1f37b652767f2eeeac5"
  },
  {
    "url": "assets/js/74.f8d240f9.js",
    "revision": "df71de0cf3e54c09e38fbf0bd6e6c4d4"
  },
  {
    "url": "assets/js/75.73cf14f9.js",
    "revision": "cc9c5da3844de529562924a49b4f732c"
  },
  {
    "url": "assets/js/76.f8f7d7b5.js",
    "revision": "1d3c5f983e9026f95d333fb5757bc21a"
  },
  {
    "url": "assets/js/77.fa7d91e1.js",
    "revision": "c74ea3976897ed09a603cf03852fafe3"
  },
  {
    "url": "assets/js/78.a7ba0c6d.js",
    "revision": "bd4d75fc0a883be16be0624669facef9"
  },
  {
    "url": "assets/js/79.723396c2.js",
    "revision": "658eac5ddb210edcee63de711cfce979"
  },
  {
    "url": "assets/js/8.968ba87b.js",
    "revision": "9e8c843af7b89ae0dc684026882806d0"
  },
  {
    "url": "assets/js/80.5dcac119.js",
    "revision": "f03a6fedc20b21453b046add184e6219"
  },
  {
    "url": "assets/js/81.bb90945f.js",
    "revision": "d1870c167aa847d02b643e48ea456d2a"
  },
  {
    "url": "assets/js/82.7eb130e3.js",
    "revision": "432930a9cc69f72970b598ef22b7c5f5"
  },
  {
    "url": "assets/js/83.1778be9c.js",
    "revision": "496cdedd7f4d4faeef919ff4d7eaf07f"
  },
  {
    "url": "assets/js/84.8fb39d4e.js",
    "revision": "0545171886afcaff5ccbd75d71cc0727"
  },
  {
    "url": "assets/js/85.78ac88bd.js",
    "revision": "302719ac58b0ba67e18db36d670e9ebd"
  },
  {
    "url": "assets/js/86.278d7285.js",
    "revision": "ebdbfff1ff3b9db4dacd10891f59192e"
  },
  {
    "url": "assets/js/87.602c108d.js",
    "revision": "628fd59fcc2e0bebddf96514111a9c04"
  },
  {
    "url": "assets/js/88.d12875c2.js",
    "revision": "00a91ce9161e825d2bec77c01a593648"
  },
  {
    "url": "assets/js/89.fe6dacd2.js",
    "revision": "25f64b056fb222d31b9697e5d8ae9e04"
  },
  {
    "url": "assets/js/9.d5a05a45.js",
    "revision": "d9e459865596eb2571a0888326f5efb8"
  },
  {
    "url": "assets/js/90.9dff9ce6.js",
    "revision": "f7b9cb816fbb83d13d5e42081fb6fcdf"
  },
  {
    "url": "assets/js/91.450517df.js",
    "revision": "bc6d17ad00d40ae517ea23b7258e7ca2"
  },
  {
    "url": "assets/js/92.df0a8d8f.js",
    "revision": "9c1677397e7aeadcc8b0ae0565675ea7"
  },
  {
    "url": "assets/js/93.b21a5e6b.js",
    "revision": "124e0a2b3e24756c0105bb5c3686dc6c"
  },
  {
    "url": "assets/js/94.7d79ac06.js",
    "revision": "2b1422f745570683a901d2ecade31057"
  },
  {
    "url": "assets/js/95.87c5459f.js",
    "revision": "c57c657e0c3bf8114024485328a069ff"
  },
  {
    "url": "assets/js/96.297f9a5b.js",
    "revision": "8b20f21a9d8b5ce2006fa18bbb7a1719"
  },
  {
    "url": "assets/js/97.4e40563e.js",
    "revision": "6739eee67c919820fcf89829dbb3e5ec"
  },
  {
    "url": "assets/js/98.3a7b1c48.js",
    "revision": "17f12cbc51c9969aca1fd45b1b464ab2"
  },
  {
    "url": "assets/js/99.449f1699.js",
    "revision": "c017de8a85c5bfab1856edb06fb3050c"
  },
  {
    "url": "assets/js/app.d98947a7.js",
    "revision": "36aa26406aab4d5e1633b5cb2e5e3ff6"
  },
  {
    "url": "categories/index.html",
    "revision": "3c8a451fbc75cdbe57d96daa2a7f5eca"
  },
  {
    "url": "guide.html",
    "revision": "982aade4cf4b6bb26647d6640c6eb9ae"
  },
  {
    "url": "images/algo/compare-1.png",
    "revision": "5c86695677341fdde8898b75f68901b5"
  },
  {
    "url": "images/chat-gpt/chat-gpt-train.png",
    "revision": "5b8d9b6295ae87979489e5ee4e4ea887"
  },
  {
    "url": "images/chat-gpt/LLM-repeat.png",
    "revision": "308d1f6adc081fbeea4048b47e4c101b"
  },
  {
    "url": "images/fine-tuning/error/finetuning-1.png",
    "revision": "12a9e244a199e227cdb4390ea9ad6a50"
  },
  {
    "url": "images/fine-tuning/error/finetuning-2.png",
    "revision": "6473047b2365456d591fad2abc18689f"
  },
  {
    "url": "images/fine-tuning/error/finetuning-3.png",
    "revision": "2232b8b811f8dd0cce13c87afb4f92ad"
  },
  {
    "url": "images/fine-tuning/error/finetuning-4.png",
    "revision": "39fee95c848253b9115cf43eae075360"
  },
  {
    "url": "images/fine-tuning/error/finetuning-5.png",
    "revision": "9fdae652d2db9cd13b6a6db911e95fa9"
  },
  {
    "url": "images/fine-tuning/error/finetuning-6.png",
    "revision": "68b05f524ade0c2009f1a3adb1b016b3"
  },
  {
    "url": "images/fine-tuning/error/finetuning-OM.png",
    "revision": "846dd1c58d40888cf3dd19618abd744e"
  },
  {
    "url": "images/fine-tuning/error/tokenizer-1.png",
    "revision": "713d62ca2894de0614d7684cbe544a91"
  },
  {
    "url": "images/fine-tuning/error/数据处理函数.png",
    "revision": "a008f93d8467b7f8d196e73f8d30eb2c"
  },
  {
    "url": "images/fine-tuning/IA3-1.png",
    "revision": "bf7186dbdd08d1cd9c03e60a4a150968"
  },
  {
    "url": "images/fine-tuning/LORA.png",
    "revision": "feed0fdb084763f80c4fd61c6d3d5d7c"
  },
  {
    "url": "images/fine-tuning/Lora1.png",
    "revision": "c0a6c09236a9197a16ece5146c312be5"
  },
  {
    "url": "images/fine-tuning/Lora2.png",
    "revision": "efc9af3d267ca91afafaaba549a41c2a"
  },
  {
    "url": "images/fine-tuning/loss-compute-metrics.png",
    "revision": "cfb23017b3a8455cd6cbd81133e17fea"
  },
  {
    "url": "images/fine-tuning/P-Tuning.png",
    "revision": "993b6e3b28aed4c5bb66c97d288f3e2e"
  },
  {
    "url": "images/fine-tuning/past_key_values.png",
    "revision": "a399a9e773307597778f859f3ed97726"
  },
  {
    "url": "images/fine-tuning/prefix-tuning-zb.png",
    "revision": "9c43139bb66a07f0c617e11810ca0ea9"
  },
  {
    "url": "images/fine-tuning/Prefix-Tuning.png",
    "revision": "bd9fa16b4d2c21cdf1b4908cde84d6e4"
  },
  {
    "url": "images/hero-logo.png",
    "revision": "6af75e3dd33d57b6e4ddc8c56f7c73f0"
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
    "url": "images/mcp/mcp-rules-ide.png",
    "revision": "20b8757194f8c2daf0d2a74b46c0308d"
  },
  {
    "url": "images/mcp/mcp-server-2.png",
    "revision": "e2cbac3bf94b4efe30fe370efcf24e8e"
  },
  {
    "url": "images/mcp/mcp-server-ide.png",
    "revision": "cc1712d7aa1ebff2adf47efe01ce2854"
  },
  {
    "url": "images/mcp/mcp-server.png",
    "revision": "8b1b5da530d67152709c52c90ea9e63b"
  },
  {
    "url": "images/mcp/stdio.jpg",
    "revision": "844df32b1bfd830a73d298a0b924b1bc"
  },
  {
    "url": "images/other/stage-four/grpo-1.png",
    "revision": "e3e90a634fc91f106260dfe9e653e584"
  },
  {
    "url": "images/other/stage-four/grpo-2.png",
    "revision": "0f377531a647bb6544af34e02d26f109"
  },
  {
    "url": "images/other/stage-four/grpo-3.png",
    "revision": "da8a5c3e173e3a6b9ed3a63602fc9b79"
  },
  {
    "url": "images/other/stage-four/grpo-4-1.png",
    "revision": "3389e005176a0eb01f7c4436cd941d3b"
  },
  {
    "url": "images/other/stage-four/grpo-4-2.png",
    "revision": "4fc80c6c1dd0702a4eac4339cccfe338"
  },
  {
    "url": "images/other/stage-four/grpo-4-3.png",
    "revision": "326f15e48010da5a3bcbca66ec165735"
  },
  {
    "url": "images/other/stage-four/langchain的六大核心组件是什么.png",
    "revision": "5748b0b1936ec2e928ce68b7bc5e5828"
  },
  {
    "url": "images/other/stage-four/ppo-1.png",
    "revision": "c31dab37a6d5690328d2c0378523f15d"
  },
  {
    "url": "images/other/stage-four/ppo-2.png",
    "revision": "715b7b087d81206be48cb27720550665"
  },
  {
    "url": "images/other/stage-four/ppo-3-1.png",
    "revision": "9ccb1a868ae8da5016bfeac9e2929109"
  },
  {
    "url": "images/other/stage-four/ppo-3-2.png",
    "revision": "764ce8cb390e4138e785ef1bec0bb5b3"
  },
  {
    "url": "images/other/stage-four/ppo-3-3.png",
    "revision": "1f01a3714d9a4fd5895fe7948df5e81e"
  },
  {
    "url": "images/other/stage-four/pre-trained.png",
    "revision": "36c6ca0909c92dd24aa8acdb5a805db9"
  },
  {
    "url": "images/other/stage-four/reason-1.png",
    "revision": "ebd61c96660af9f0e7b1f3817a758197"
  },
  {
    "url": "images/other/stage-four/reason-2.png",
    "revision": "bf56a0dde6b54d2eb4d114e6ed92f3c6"
  },
  {
    "url": "images/other/stage-four/reason-3.png",
    "revision": "94fcafaeb87031c0ed28147adcbd972c"
  },
  {
    "url": "images/other/stage-four/reason-4.png",
    "revision": "4c5dc55eb02924c05d6dab1c3b0e71eb"
  },
  {
    "url": "images/other/stage-four/reason-out-of-range-1.png",
    "revision": "248ea955c614c798bcdb51039fe97258"
  },
  {
    "url": "images/other/stage-four/reason-out-of-range-2.png",
    "revision": "30d08de9170f1f5a77d92cefbce9ddd8"
  },
  {
    "url": "images/other/stage-four/sft-1.png",
    "revision": "b58f2ca5b00e43f344cb8334be4ff27c"
  },
  {
    "url": "images/other/stage-four/sft-2.png",
    "revision": "b75f9ae09e537025350a35d1d5a22cfe"
  },
  {
    "url": "images/other/stage-four/如何理解chatgpt-2.png",
    "revision": "79c85fdf9eced3c19223bd42b8b9b765"
  },
  {
    "url": "images/other/stage-four/如何理解chatgpt-3.png",
    "revision": "24b89174f9374faa1acf6c0fe21e24fe"
  },
  {
    "url": "images/other/stage-four/如何理解chatgpt.png",
    "revision": "005e77aadfca6e975093f212c8536254"
  },
  {
    "url": "images/other/stage-four/杭州市的美食有-1.png",
    "revision": "20cd1f2b236db72d745c6cddb7d48cd7"
  },
  {
    "url": "images/other/stage-four/杭州市的美食有-2.png",
    "revision": "56f98700984a4f46b6e78648a3d1b443"
  },
  {
    "url": "images/other/stage-four/马克思主义基本原理-1.png",
    "revision": "3f692a44f8d858df4202e6f71b2d0896"
  },
  {
    "url": "images/other/stage-four/马克思主义基本原理-2.png",
    "revision": "31210fdcb9596727f601903f5e3124ff"
  },
  {
    "url": "images/other/svg.png",
    "revision": "67954a7e209562245c3a54c8c16b21cd"
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
    "url": "images/python/json-loads.png",
    "revision": "46071fe20f2f914cedab02d18667d057"
  },
  {
    "url": "images/python/pd-DataFrame-2.png",
    "revision": "b3339c2c8384abc7a6a551ff8408644a"
  },
  {
    "url": "images/python/pd-DataFrame-3.png",
    "revision": "94c12c80635a7945ac3b4552bbdd5555"
  },
  {
    "url": "images/python/pd-DataFrame.png",
    "revision": "bf7837bd8d1566e8bd80159a216ac227"
  },
  {
    "url": "images/python/zip-use.png",
    "revision": "9af51b98f47a0544f525ca8009634f57"
  },
  {
    "url": "images/question/SFT-LLM.png",
    "revision": "88092905d618f04b40d5f8c44224bc19"
  },
  {
    "url": "images/vue/patchFlag.png",
    "revision": "172d76f5b6cc8cd2f48f9c96f8d0c836"
  },
  {
    "url": "index.html",
    "revision": "acde5001378e39a26508a56f83d643f1"
  },
  {
    "url": "logo.png",
    "revision": "4e48730bd98de9f333e6bd14d62b6c7d"
  },
  {
    "url": "mcpstudy/ide-mcp-server.html",
    "revision": "e8a9a7dce9407a2baf90b7eed6264bdc"
  },
  {
    "url": "mcpstudy/mcp-knowledge.html",
    "revision": "b73ef191859926c8a8a7c2de28502ae7"
  },
  {
    "url": "modelstudy/123.html",
    "revision": "1df7a369f0957c61bc8e0924a853ae4c"
  },
  {
    "url": "modelstudy/2025-11-04.html",
    "revision": "ed6f52cb356a1d454d1e91fb0de03e50"
  },
  {
    "url": "modelstudy/agent.html",
    "revision": "1717c1dbf699398dacd430acc5d49b17"
  },
  {
    "url": "modelstudy/auto-model-desc.html",
    "revision": "1d0dba908ee7fe4b0a88456e6fb6ebe2"
  },
  {
    "url": "modelstudy/compute-metrics.html",
    "revision": "5ccee8f66fe658c5f3b52b13fe406990"
  },
  {
    "url": "modelstudy/construct-dataset.html",
    "revision": "e961c1b174b0c3bfacff470c1b2495e5"
  },
  {
    "url": "modelstudy/deep-learning.html",
    "revision": "8b6d3ec5e6ba1b2ee07bf0244934691e"
  },
  {
    "url": "modelstudy/deepseek-search.html",
    "revision": "0c5ab1469038a64b6b685d701f1c33a9"
  },
  {
    "url": "modelstudy/extended-learning.html",
    "revision": "17625b96b9b647a4da9b90a704a55bdb"
  },
  {
    "url": "modelstudy/finetuing-step5.html",
    "revision": "8550b058c92faeea776ca79f317e7a7a"
  },
  {
    "url": "modelstudy/finetuing-step9.html",
    "revision": "191e995e06bfb18a7b1026f0a2a7c800"
  },
  {
    "url": "modelstudy/finetuning-error-collect.html",
    "revision": "6b429743ca3ff68ec6e94551c2d475ca"
  },
  {
    "url": "modelstudy/finetuning-exercises-code.html",
    "revision": "1c03f69e6da15011a5d7aa791241d0e8"
  },
  {
    "url": "modelstudy/finetuning-f1-scores.html",
    "revision": "6a9ca0bc908000f9da22cac82846ba77"
  },
  {
    "url": "modelstudy/finetuning-warn-collect.html",
    "revision": "987c16ee5bcc7651289727d791e0c418"
  },
  {
    "url": "modelstudy/first-model-project.html",
    "revision": "8c27bffcd1ee654ff13d441caecec38d"
  },
  {
    "url": "modelstudy/impl-transformer.html",
    "revision": "81258763d938dffa8894df299a9de2fb"
  },
  {
    "url": "modelstudy/langchain-agent-practice.html",
    "revision": "73d2893b2a6fe6a66cdb7f501e2eb7cf"
  },
  {
    "url": "modelstudy/langchain-prompt.html",
    "revision": "485385bea6ca1c466534bec36469f678"
  },
  {
    "url": "modelstudy/langchain-study.html",
    "revision": "f7898522ae6c24af34adf6477b47dcb9"
  },
  {
    "url": "modelstudy/lora-fine-tuning.html",
    "revision": "ad4ab3ad2072986d37e78f0a316a32f0"
  },
  {
    "url": "modelstudy/model-basic.html",
    "revision": "e988d8ff6ba1304609e654a2642c0792"
  },
  {
    "url": "modelstudy/model-case.html",
    "revision": "6d8de179940cadd58d14d73e1b64d9e9"
  },
  {
    "url": "modelstudy/model-deploy.html",
    "revision": "bb24eefe28ea41a1de188a8653dbbd32"
  },
  {
    "url": "modelstudy/model-english.html",
    "revision": "df4cf132ed877ed476bacbca8b0c1830"
  },
  {
    "url": "modelstudy/model-evaluate.html",
    "revision": "27b7d8d1ba58861295b23f6708f8aa20"
  },
  {
    "url": "modelstudy/model-fine-tuning.html",
    "revision": "99ebbd1321f57468e9897b919576ada6"
  },
  {
    "url": "modelstudy/model-function-calling.html",
    "revision": "05c4157c9568a0cd13ef248e4d848443"
  },
  {
    "url": "modelstudy/model-langchain-rag.html",
    "revision": "02b51c96d6aeabc513bcdabd21d8814a"
  },
  {
    "url": "modelstudy/model-langchain.html",
    "revision": "5deba7e1f8914fc2144124d94ca6c10e"
  },
  {
    "url": "modelstudy/model-optimize.html",
    "revision": "5deabf944f44798fe5edd50af8625e3d"
  },
  {
    "url": "modelstudy/model-pytorch.html",
    "revision": "f7415410818d4bca0e8e79edcfd74524"
  },
  {
    "url": "modelstudy/model-quantization.html",
    "revision": "50b456320d0ec327e4f8d2b788040876"
  },
  {
    "url": "modelstudy/model-question.html",
    "revision": "31a2eb4e1f81c542a3f1617e193affea"
  },
  {
    "url": "modelstudy/model-rag-pain.html",
    "revision": "ae97c7354ef90c30596131f47fb26145"
  },
  {
    "url": "modelstudy/model-rag.html",
    "revision": "70741e2ab9ffdb9276d21e58c0d9a304"
  },
  {
    "url": "modelstudy/model-RNN.html",
    "revision": "b50545b8d42c97e1e07c029109ed19c8"
  },
  {
    "url": "modelstudy/model-summary.html",
    "revision": "f039d019650cfa47f356ef8404f7ba1b"
  },
  {
    "url": "modelstudy/model-train-analyze.html",
    "revision": "aaab445a6d6ab3d1f1795f3039a0330c"
  },
  {
    "url": "modelstudy/model-train-code.html",
    "revision": "eddb9d21346c47e79f837e60eda93ef5"
  },
  {
    "url": "modelstudy/model-train-process.html",
    "revision": "1c2ccfe7e6e0bef4f38fcfbef70b4e61"
  },
  {
    "url": "modelstudy/model-train.html",
    "revision": "2ebe3ca2640e2df8adab7953d6c40b92"
  },
  {
    "url": "modelstudy/model-transformer.html",
    "revision": "b5f4ea49d7fd375f104f42698470700d"
  },
  {
    "url": "modelstudy/model.html",
    "revision": "78750b57ac6aee2215847d9d463f6c38"
  },
  {
    "url": "modelstudy/ner-instruct-task.html",
    "revision": "aafcfb1189b1d4da378e1680b5cd63df"
  },
  {
    "url": "modelstudy/project-study.html",
    "revision": "5aae8c3e0c94b936d24b53945e6b41b2"
  },
  {
    "url": "modelstudy/self-function-calling.html",
    "revision": "44119837f151a989e2316a10fa7fe7a0"
  },
  {
    "url": "modelstudy/stage-four-chatbot.html",
    "revision": "b97d48b9769c2fd5a9811ebe56b3874a"
  },
  {
    "url": "modelstudy/temp.html",
    "revision": "e715eb7ad3595fd0aed281db74143d72"
  },
  {
    "url": "modelstudy/temp2.html",
    "revision": "06ca82bdf9245b0f8be7d102cf01a31b"
  },
  {
    "url": "modelstudy/transformer-code.html",
    "revision": "88aff76811fd74de62a37600e723e9b4"
  },
  {
    "url": "modelstudy/transformer-knowledge.html",
    "revision": "14d2d2822dcd9f573b2def6e54e2cfed"
  },
  {
    "url": "modelstudy/transformer-learn.html",
    "revision": "7c952dd0f2029be9e204501fafcdb51e"
  },
  {
    "url": "modelstudy/transformer-question.html",
    "revision": "ef5301c262b8d3f5b66758aa208b334b"
  },
  {
    "url": "modelstudy/transformer-related.html",
    "revision": "3f11507595b4281404e4b0f0595953f2"
  },
  {
    "url": "modelstudy/vector-database.html",
    "revision": "d28e4a018c80ca19dcff5f8db4a3af14"
  },
  {
    "url": "modelstudy/vLLM-intro.html",
    "revision": "06ea19527acb925b4255733714804f7f"
  },
  {
    "url": "modelstudy/whatIsModel.html",
    "revision": "f316ac7dfb2e6f84eb0d46b7b16316d3"
  },
  {
    "url": "other/ai-agent.html",
    "revision": "4ef7fa3fd72e7d001efc5b87d639a86d"
  },
  {
    "url": "other/conda.html",
    "revision": "5507887650e7f658ca3d19c98ed96d91"
  },
  {
    "url": "other/excellentarticles.html",
    "revision": "75cfa385f41f123e6a1e449ca0e376cd"
  },
  {
    "url": "other/fine-tuning-adapters.html",
    "revision": "53adb3f5b3e557c53236e481b6749c8d"
  },
  {
    "url": "other/git-operate.html",
    "revision": "1f5bd75bc9a12fd19f9681787e30d01a"
  },
  {
    "url": "other/lora-0-1.html",
    "revision": "8d08f36f9d2f0cbb0a08bf4443edf4e2"
  },
  {
    "url": "other/model-refrence.html",
    "revision": "6c5c199ca9e04690767f8d3f5e0287b8"
  },
  {
    "url": "other/python.html",
    "revision": "6dfbb156aa21964f07b03f448682f404"
  },
  {
    "url": "other/pytorch-know.html",
    "revision": "2a3ac6244024915753f81f41e01fa426"
  },
  {
    "url": "other/swanLab-info.html",
    "revision": "daf82bb02e487f34b999cb3ae81ddae2"
  },
  {
    "url": "other/transformer-1.html",
    "revision": "f384838a045e54090d4795adb8d54845"
  },
  {
    "url": "other/transformer-2.html",
    "revision": "e50f67c35f77568a8e64d75bedf4627a"
  },
  {
    "url": "other/transformer-3.html",
    "revision": "2445962c197990af558831efd9c85a10"
  },
  {
    "url": "other/transformer-collect.html",
    "revision": "67463627360a95f6efe4b5b908cc5c97"
  },
  {
    "url": "other/transformer-learn.html",
    "revision": "876a50b53b75e33a12f5456c254fbca3"
  },
  {
    "url": "other/using-packages.html",
    "revision": "45259b9cf8f70f0b1eb474bce62be35d"
  },
  {
    "url": "pystudy/array-operation.html",
    "revision": "166a33f5f89bc95fcc81bba2767609a3"
  },
  {
    "url": "pystudy/basic.html",
    "revision": "69952bd9b7f24ebad6cdc5b4e591fed8"
  },
  {
    "url": "pystudy/builtin-function.html",
    "revision": "9178ce6540199d89f9fde2431ae8f3e0"
  },
  {
    "url": "pystudy/class.html",
    "revision": "26adc6e9f33eba1f4edca63604e56624"
  },
  {
    "url": "pystudy/data-structure.html",
    "revision": "e8fdeefbb1419f473c00130d2fb1601f"
  },
  {
    "url": "pystudy/database.html",
    "revision": "ffe04241bac625879a8351f6ccd92a20"
  },
  {
    "url": "pystudy/exception.html",
    "revision": "495d445267b1d3a4fe39c17c2de1f04d"
  },
  {
    "url": "pystudy/file.html",
    "revision": "7eb55bdb418f60d8cf7f226c1bf8cd9a"
  },
  {
    "url": "pystudy/function.html",
    "revision": "e327578872bff3e370da6145259e9043"
  },
  {
    "url": "pystudy/line-continue.html",
    "revision": "76a849bf3a2c5e029d79814cbed76c74"
  },
  {
    "url": "pystudy/module.html",
    "revision": "2c7c5c767796e484a1d9e44fde3ff2de"
  },
  {
    "url": "pystudy/network.html",
    "revision": "17433fc089dde4565b394a2dac925e50"
  },
  {
    "url": "pystudy/numpy.html",
    "revision": "24a5aeb66edd7210ab210b04dc16e8f0"
  },
  {
    "url": "pystudy/package.html",
    "revision": "07760cefce5bf8eab1be44f48f64b36b"
  },
  {
    "url": "pystudy/pandas-study.html",
    "revision": "ce76bbd67cca09a7a362a69bd35435c4"
  },
  {
    "url": "pystudy/practice.html",
    "revision": "4d252968b0a05f5adc7d6aa7cf8caebc"
  },
  {
    "url": "pystudy/process.html",
    "revision": "b07de9dc6fb8d23bfcbc2c3b178d6699"
  },
  {
    "url": "pystudy/python-collect.html",
    "revision": "6ae3e58539c5795efd5d8b3d7caa912d"
  },
  {
    "url": "pystudy/python-important.html",
    "revision": "1766c454189fd5c98ed3ef644a00df3c"
  },
  {
    "url": "pystudy/regex.html",
    "revision": "cd44a57257f9785b51331ec7c5ac21d7"
  },
  {
    "url": "pystudy/string-function.html",
    "revision": "822f9dad752c98fc9f915f311a453587"
  },
  {
    "url": "pystudy/technology-point.html",
    "revision": "302c964fe7dde37891c7279733554b24"
  },
  {
    "url": "pystudy/thread.html",
    "revision": "e12252b3601bf2f64d4bd89f437738ef"
  },
  {
    "url": "pystudy/use-library.html",
    "revision": "9d794356418a43a79b12da15b847aa71"
  },
  {
    "url": "pystudy/use-pip-install.html",
    "revision": "57132369fc5d9e1a0746aeec842d3275"
  },
  {
    "url": "react/react-advanced.html",
    "revision": "8abe45e48a0f66baf227f40d510fd5ac"
  },
  {
    "url": "react/react-basic.html",
    "revision": "e23beff73d69c75c9b7a28fa2b1206e0"
  },
  {
    "url": "react/react-context.html",
    "revision": "9c7b98854f5502b6acdc80425ef2714a"
  },
  {
    "url": "react/react-relation.html",
    "revision": "1faf226ca34f0c56a93563741597858f"
  },
  {
    "url": "react/ssr.html",
    "revision": "8b139dcdff23e2407c74d13f8c89eee7"
  },
  {
    "url": "react/status-manage.html",
    "revision": "9929846e1c8fe8c941c5a56a932e0a18"
  },
  {
    "url": "reactnative/reactnative-desc.html",
    "revision": "0274c089e5e3ce60f745bc8c7bc01cea"
  },
  {
    "url": "reactnative/reactnative.html",
    "revision": "761fbe11c283f261bb462e6dc1e30e28"
  },
  {
    "url": "reactnative/rn-problem.html",
    "revision": "ba6e5ed9d3e2aff740f1fbf9c484f135"
  },
  {
    "url": "tag/index.html",
    "revision": "d4d5f01c46a04fe7038c5e36af4df675"
  },
  {
    "url": "tag/react/index.html",
    "revision": "e727d46ed6c1b809e18110b90b745f42"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "aa25b15fc5119839445767dc8b13429d"
  },
  {
    "url": "tag/二叉树/index.html",
    "revision": "5505f7a6ec97baf5a5cd9b350e62233b"
  },
  {
    "url": "timeline/index.html",
    "revision": "f185243a242cb70343dbd0568e577316"
  },
  {
    "url": "vue/basicknowledge.html",
    "revision": "916a94c1494fb64b912d41d69f7db22c"
  },
  {
    "url": "vue/compare.html",
    "revision": "287d34d4dc8fa3c97795df2de8df3c3c"
  },
  {
    "url": "vue/misnotes.html",
    "revision": "2cdf6623f7a29a64c694e9a5d5bf181f"
  },
  {
    "url": "vue/ssr.html",
    "revision": "2aaa282b7e9c762c5d353c7264018b4e"
  },
  {
    "url": "vue/vue-attrs-listeners.html",
    "revision": "88c3e267241f554fbb46caa1e012170a"
  },
  {
    "url": "vue/vue-principle.html",
    "revision": "ffab52e75aba097b3e3a9e2c5f3c3eb9"
  },
  {
    "url": "vue/vue-router.html",
    "revision": "48b6caef455fe2da9274455b19ad7fad"
  },
  {
    "url": "vue/vue-status.html",
    "revision": "8141d4e7347085adb5ad5362772797bf"
  },
  {
    "url": "vue/vue3-basic.html",
    "revision": "b1fab904c473b454436076f8c856963d"
  },
  {
    "url": "vue/vue3-impl.html",
    "revision": "fda266955f8f893cf78b309533e73ab4"
  },
  {
    "url": "vue/vue3.html",
    "revision": "1e7fe405245ebf366babf68d879365c5"
  },
  {
    "url": "vue/vuex.html",
    "revision": "4c3badfd553262d408585e7da368edaf"
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
