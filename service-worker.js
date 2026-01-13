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
    "revision": "791aacb69b50de76949ac70efc1befeb"
  },
  {
    "url": "algorithm/666.html",
    "revision": "b71b0f92c841217e4597786e8ec80bd2"
  },
  {
    "url": "algorithm/algo-temp.html",
    "revision": "788b46f861ae14df01504043b54a6f48"
  },
  {
    "url": "algorithm/binary-search.html",
    "revision": "8d3d58b298fe8b76566b8d614c9db4e5"
  },
  {
    "url": "algorithm/binary-tree.html",
    "revision": "f201409b681eafda0a66e4b55c4e32e5"
  },
  {
    "url": "algorithm/compare-al.html",
    "revision": "2dc6624b2fd6624f03a12804a01a8b99"
  },
  {
    "url": "algorithm/del-single-list-2.html",
    "revision": "2b3148b2429dbe032983b8fdf4248133"
  },
  {
    "url": "algorithm/del-single-list.html",
    "revision": "33296b7de9a3d3775334fd1e4c89cb3c"
  },
  {
    "url": "algorithm/double-pointer.html",
    "revision": "3457237d59f2c53ad9056f3f416ef2a4"
  },
  {
    "url": "algorithm/dynamic-plan.html",
    "revision": "7bbf63a31285736dcec844d86fc7d6fc"
  },
  {
    "url": "algorithm/effect-bracket.html",
    "revision": "5116f27cb29a926141ef327ea554834b"
  },
  {
    "url": "algorithm/greedy.html",
    "revision": "818faac90fecd6ec5bc34af015332c3d"
  },
  {
    "url": "algorithm/longasc-sequence.html",
    "revision": "baa004e58565e0581a876befc732783e"
  },
  {
    "url": "algorithm/other.html",
    "revision": "ab719b93bc0f478e34156f6b78396d4d"
  },
  {
    "url": "algorithm/receive-rain.html",
    "revision": "07db0767d471fc199b0ea81a937a6866"
  },
  {
    "url": "algorithm/reverse-list.html",
    "revision": "8d25e8bcf7466ee4a8f28efaa270f75a"
  },
  {
    "url": "algorithm/sort copy.html",
    "revision": "6e8be13f4178859937f6acc979a1053b"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "a393c67821b3f2dc4a71b5799f476bc5"
  },
  {
    "url": "assets/css/0.styles.e7d53aa5.css",
    "revision": "4679fbdc86999661505c76e9ded5b77d"
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
    "url": "assets/js/100.b5370e15.js",
    "revision": "4d4eb852e7b169244a479a653b3287a2"
  },
  {
    "url": "assets/js/101.11d69293.js",
    "revision": "8a88140b9209efd7726854d045226742"
  },
  {
    "url": "assets/js/102.ec371acb.js",
    "revision": "7f34e7cd808f6f0d77cc5ec013d85ac2"
  },
  {
    "url": "assets/js/103.b19e3302.js",
    "revision": "6136be73fce625cc34faa3db78e24787"
  },
  {
    "url": "assets/js/104.a5d1118b.js",
    "revision": "2557e4454a3a46a0035e882c2c69abac"
  },
  {
    "url": "assets/js/105.027e1e70.js",
    "revision": "752c12d840f1b0a2ffa205383a8abaea"
  },
  {
    "url": "assets/js/106.29059eec.js",
    "revision": "e417f032898be82b9714f2fdfb045e60"
  },
  {
    "url": "assets/js/107.df098f41.js",
    "revision": "1682afd4a3a164a36603cd7ed1890bbe"
  },
  {
    "url": "assets/js/108.b32395ba.js",
    "revision": "3e27d26749cf50170bdafae4a6d27601"
  },
  {
    "url": "assets/js/109.04680449.js",
    "revision": "ad410cf1511241668656b9bad8696889"
  },
  {
    "url": "assets/js/11.08937b90.js",
    "revision": "e77956ac107a7b0387db3e6be4e56ebe"
  },
  {
    "url": "assets/js/110.3f0e265c.js",
    "revision": "822c5d1a5fff2e8df6e7a366af1b5b5a"
  },
  {
    "url": "assets/js/111.267fca7d.js",
    "revision": "878b662c3976d2d62530c9e7429c5c44"
  },
  {
    "url": "assets/js/112.777e7460.js",
    "revision": "05dfca5eb08961f03dd18946c3cc8978"
  },
  {
    "url": "assets/js/113.3fa5c9d1.js",
    "revision": "f929490f07b326b198a8decc30e8b734"
  },
  {
    "url": "assets/js/114.7942c611.js",
    "revision": "73bfb3f75edad2739615352723a7539f"
  },
  {
    "url": "assets/js/115.73cbc360.js",
    "revision": "78519f7eaeeb4094b81b0f7e9d34cc04"
  },
  {
    "url": "assets/js/116.13fbd424.js",
    "revision": "8e6ddda5938137d3a2ab96dd8118db31"
  },
  {
    "url": "assets/js/117.50aa2803.js",
    "revision": "6650d9dfc08dea16a96ad239bef45e76"
  },
  {
    "url": "assets/js/118.66821f6e.js",
    "revision": "7296176a717062d57d163b314049dd37"
  },
  {
    "url": "assets/js/119.da118f68.js",
    "revision": "3fe9ad8f12eb46990f58025547e4d2c1"
  },
  {
    "url": "assets/js/120.4472cbe6.js",
    "revision": "71e55129e4d0b980a5c88137183204ca"
  },
  {
    "url": "assets/js/121.389268b2.js",
    "revision": "f1dbfe20ce99acf1cdd2b3354879441c"
  },
  {
    "url": "assets/js/122.df5b0c2c.js",
    "revision": "84057e69bfdb5eadced6b360da5b37bd"
  },
  {
    "url": "assets/js/123.d9c9fac7.js",
    "revision": "b87a4f91a17d520863c0f47de6605b18"
  },
  {
    "url": "assets/js/124.e61413bb.js",
    "revision": "8d8b3f72bf43df5181aba74193fb01b1"
  },
  {
    "url": "assets/js/125.01e4a7da.js",
    "revision": "baf180d70aa8a5cf45290d3a2a1b1006"
  },
  {
    "url": "assets/js/126.c3eb0f4c.js",
    "revision": "b8ac66229dc5b80562ba637677e603a6"
  },
  {
    "url": "assets/js/127.ad38efca.js",
    "revision": "b1cd51b649bbd816436a346a2eeef992"
  },
  {
    "url": "assets/js/128.aa1a2c28.js",
    "revision": "214952d8bff6f71b559825a09a18fcc7"
  },
  {
    "url": "assets/js/129.8d20593d.js",
    "revision": "3490fc97c665a7913fef52571b6770f7"
  },
  {
    "url": "assets/js/130.91e775b6.js",
    "revision": "a9020c7a05b05883dee3052978d69cc4"
  },
  {
    "url": "assets/js/131.eb9c25a2.js",
    "revision": "573039ca2becaae5e83ab2672e59be11"
  },
  {
    "url": "assets/js/132.416369ca.js",
    "revision": "bb8291a7ef82edaa58416226a55fbd8e"
  },
  {
    "url": "assets/js/133.d39f05a1.js",
    "revision": "fbef5bd239707ff076763d6e4dc6c53e"
  },
  {
    "url": "assets/js/134.a8d198f5.js",
    "revision": "ebc321d1c65852f7e2c9f4bf3a6f8ae6"
  },
  {
    "url": "assets/js/135.b1325deb.js",
    "revision": "5f13c058615f842dac224f7e998757ba"
  },
  {
    "url": "assets/js/136.20239e0e.js",
    "revision": "1665af0f43dac7cacaffab54a0d868dc"
  },
  {
    "url": "assets/js/137.6b8f99e3.js",
    "revision": "d430868ed69f5fe8221fa7bc47b79651"
  },
  {
    "url": "assets/js/138.1e5b21c9.js",
    "revision": "5ad4ed7667d7c4a4f75c1c0e8d85b180"
  },
  {
    "url": "assets/js/139.11c4327d.js",
    "revision": "8569f57719562f246f1c7ef9d3e09e19"
  },
  {
    "url": "assets/js/14.0ac4aea5.js",
    "revision": "11b1f5df8a45d04c2f0527031b496791"
  },
  {
    "url": "assets/js/140.fee44758.js",
    "revision": "1b9dd86678cf053a97c4340a202ce9e1"
  },
  {
    "url": "assets/js/141.c3b89020.js",
    "revision": "b8e4a32ab30cded3a1ad6e265d950631"
  },
  {
    "url": "assets/js/142.df24c198.js",
    "revision": "ef80250cef5089d22cb3ce726679f62a"
  },
  {
    "url": "assets/js/143.9d2052df.js",
    "revision": "a21d7f43f2bb63d54811afc733e3ed61"
  },
  {
    "url": "assets/js/144.2f4e1d52.js",
    "revision": "099435e72d603a3e28c2360fca4494b9"
  },
  {
    "url": "assets/js/145.51fc7ecd.js",
    "revision": "a017fc2908ee6e53009069fc6448cfb0"
  },
  {
    "url": "assets/js/146.8a157335.js",
    "revision": "6947041ca8227657c06079a8cb7ec028"
  },
  {
    "url": "assets/js/147.0cf4ccf1.js",
    "revision": "4573d68df54c89a0e1a4d826e8904301"
  },
  {
    "url": "assets/js/148.7fa222c9.js",
    "revision": "8852cdf49f1ec3fa635b9af1338d3575"
  },
  {
    "url": "assets/js/149.d2ea3e9f.js",
    "revision": "d5ca462cd9aeb053bc79ac59125f9dce"
  },
  {
    "url": "assets/js/15.2cac15c3.js",
    "revision": "688079c52f80af83336ee63d8b5680a1"
  },
  {
    "url": "assets/js/150.aece84af.js",
    "revision": "9edaf0d34eb55d127fe7c2a051406d60"
  },
  {
    "url": "assets/js/151.b2abf121.js",
    "revision": "2ef1d078afd4cefc30ebec46bc472e4f"
  },
  {
    "url": "assets/js/152.f974f4d5.js",
    "revision": "1b95cdb661e17293ae56f6c4ca1265f0"
  },
  {
    "url": "assets/js/153.576ae466.js",
    "revision": "55410821ef3c8a24d586066b7d055acc"
  },
  {
    "url": "assets/js/154.feb7351a.js",
    "revision": "3e2aaec5f8436f56d0343b9b7d1c7d7a"
  },
  {
    "url": "assets/js/155.ceb7ee93.js",
    "revision": "112fa1e2dcdba57acd800c4550016ec2"
  },
  {
    "url": "assets/js/156.59e5e60c.js",
    "revision": "5ed0215604ab8b2b501251941f4579aa"
  },
  {
    "url": "assets/js/157.b2d98899.js",
    "revision": "9bc87405ca1452c41b156641a46d673d"
  },
  {
    "url": "assets/js/158.1d321223.js",
    "revision": "361baf65c2d65daab9a924102e7ff950"
  },
  {
    "url": "assets/js/159.34fb3587.js",
    "revision": "6dcd8d278f6555d9c0e55871772d08d0"
  },
  {
    "url": "assets/js/16.41c97ec9.js",
    "revision": "93d14d23f5306cdccf9cc340e18c5164"
  },
  {
    "url": "assets/js/160.327c24a5.js",
    "revision": "ef1a738b739c27e07e50b1f88c67ec8e"
  },
  {
    "url": "assets/js/161.46989a6e.js",
    "revision": "9d22e547b08ded5285a2f2103d3b2a64"
  },
  {
    "url": "assets/js/162.aca9fc03.js",
    "revision": "01f48c87d48fa0ddae73b7dc3cb2887a"
  },
  {
    "url": "assets/js/163.7b750de2.js",
    "revision": "de0924c931c44092a3d3854ed0828960"
  },
  {
    "url": "assets/js/164.11817a34.js",
    "revision": "8244e1997d3db8cd150851d68c234a24"
  },
  {
    "url": "assets/js/165.69f84a6d.js",
    "revision": "a441c7cc13e14db6ee7e86fcdf38d4d2"
  },
  {
    "url": "assets/js/166.04a9455e.js",
    "revision": "560f7915ba6c1ef8c2f1acad321dcd5b"
  },
  {
    "url": "assets/js/167.de58f97c.js",
    "revision": "fde43349749ed7658dd3b09ee5c75a62"
  },
  {
    "url": "assets/js/168.1fda293d.js",
    "revision": "64144b806e8c919c9524aa1192036b0a"
  },
  {
    "url": "assets/js/169.658d866b.js",
    "revision": "9ff8d3bf8a29c3e66d9221dc1ee1f5f5"
  },
  {
    "url": "assets/js/17.29a60e10.js",
    "revision": "c12cab21b0e58f47d805749f1a837598"
  },
  {
    "url": "assets/js/170.93cda1d5.js",
    "revision": "dd7d870ea7355c71fddc5476824c36a8"
  },
  {
    "url": "assets/js/171.ec137401.js",
    "revision": "7530679936af67431773b2fdb200f508"
  },
  {
    "url": "assets/js/172.503542ca.js",
    "revision": "b295462156f66b45e4b9a527d8a6c639"
  },
  {
    "url": "assets/js/173.e01bb63d.js",
    "revision": "b37f2ea135f3c18b7833aebbd54cabd8"
  },
  {
    "url": "assets/js/174.f62b3b69.js",
    "revision": "57e0114e41f544d0a0df6cd01c520cf6"
  },
  {
    "url": "assets/js/175.1e81affb.js",
    "revision": "ad963822bd913d01a6a449de053e04bc"
  },
  {
    "url": "assets/js/176.c228e264.js",
    "revision": "711fbe132fe82d64c4a45892041a178a"
  },
  {
    "url": "assets/js/177.8b701f5f.js",
    "revision": "81d7d104d128fbc79213e262f90203fc"
  },
  {
    "url": "assets/js/178.b3040418.js",
    "revision": "d926c97d781055af34ea1ea82412200e"
  },
  {
    "url": "assets/js/179.95b66158.js",
    "revision": "aa8f465f12465f5b23be0d2a08df9da2"
  },
  {
    "url": "assets/js/18.27fd2b83.js",
    "revision": "bd9d5b805bca2ffea52562e712745e52"
  },
  {
    "url": "assets/js/180.28a002e6.js",
    "revision": "4ceaea561cc3579eb7bf5c3b3c1a0ae9"
  },
  {
    "url": "assets/js/181.a5b2a85a.js",
    "revision": "042ecd740e3ac7b8e01f2f7fbf672231"
  },
  {
    "url": "assets/js/182.b0d528f9.js",
    "revision": "fdf94aacb0f509673896e53fe5f4bb11"
  },
  {
    "url": "assets/js/183.064f0686.js",
    "revision": "d1a9c21924cf79f13a69c0db98e923fd"
  },
  {
    "url": "assets/js/184.a55849ef.js",
    "revision": "665d5fb83c8af949039495b483d57601"
  },
  {
    "url": "assets/js/185.d30053a1.js",
    "revision": "83853e1dd2fc27666edb44caa7fd3c94"
  },
  {
    "url": "assets/js/186.43690601.js",
    "revision": "af23d6d7ba9b3117e55c01b7da1b83c8"
  },
  {
    "url": "assets/js/187.1885f261.js",
    "revision": "cde162a22c11cd764a2596d8cdeef1be"
  },
  {
    "url": "assets/js/188.14bc02b8.js",
    "revision": "9c7b9429892d655afd248129493aa561"
  },
  {
    "url": "assets/js/189.c39e7169.js",
    "revision": "5beac01f3f94d63c4f687b127d0e6a3c"
  },
  {
    "url": "assets/js/19.e7351a57.js",
    "revision": "497c4fe1210b978757c125312c8c95af"
  },
  {
    "url": "assets/js/190.6df8a6cb.js",
    "revision": "6a46c11c9b1f80d8e642f6d57d47b72f"
  },
  {
    "url": "assets/js/191.7c034f61.js",
    "revision": "231b4a690af8bd124754162767267fb3"
  },
  {
    "url": "assets/js/192.87493c0b.js",
    "revision": "54425613b0d345052620bf7d2d5dec9a"
  },
  {
    "url": "assets/js/193.614b7fd7.js",
    "revision": "a4787153c072f421a1a3f1f1e2afd718"
  },
  {
    "url": "assets/js/194.55efe45a.js",
    "revision": "b7c221551f847643775c9bb24f44a6c6"
  },
  {
    "url": "assets/js/195.84ae7930.js",
    "revision": "4306248d4381bb11bcd5b0b471f2621d"
  },
  {
    "url": "assets/js/196.9b92a9e9.js",
    "revision": "b6fb82e6ea8143b84f38d5e3d421c18f"
  },
  {
    "url": "assets/js/197.d5ce227e.js",
    "revision": "1b13d6cd5e23df5e9a6d07506c433cf3"
  },
  {
    "url": "assets/js/198.a889219a.js",
    "revision": "54ec6f5bc891ffdee3155ca21818c7c1"
  },
  {
    "url": "assets/js/199.cb7acbba.js",
    "revision": "a550f5d5fe349f066b869fcc828f6bb3"
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
    "url": "assets/js/200.6b03dbe5.js",
    "revision": "9466cd36cf8685161034a6827209a36a"
  },
  {
    "url": "assets/js/201.04210c55.js",
    "revision": "0502392c425656f15f90ce87fab24e10"
  },
  {
    "url": "assets/js/202.841b96be.js",
    "revision": "c66de1cdcce57a076f86761cac0724b1"
  },
  {
    "url": "assets/js/203.e43080f2.js",
    "revision": "960ae4cff070d4d99ff513a9bb4a23e9"
  },
  {
    "url": "assets/js/204.f9ac267d.js",
    "revision": "24030d0882d36a8aa28a7137c73d7d21"
  },
  {
    "url": "assets/js/205.e7b6c5bc.js",
    "revision": "7692facc9b762ab9c41c23cb793181fd"
  },
  {
    "url": "assets/js/206.7856c113.js",
    "revision": "3e4534b0127bda3c483c3fa7543b761f"
  },
  {
    "url": "assets/js/207.3fa7673f.js",
    "revision": "56b3210f198540c46b992a7bbc5954ed"
  },
  {
    "url": "assets/js/208.321f34da.js",
    "revision": "96b115ffaefd1328469b61637c694ec2"
  },
  {
    "url": "assets/js/209.424fbd4a.js",
    "revision": "b867339c235018bb0d46ad1257527143"
  },
  {
    "url": "assets/js/21.0feb36e8.js",
    "revision": "a8d15496e383de00a8b45e5413dafbf5"
  },
  {
    "url": "assets/js/210.9674b994.js",
    "revision": "0b5dd6bb03177aa5c1ffc560b896a789"
  },
  {
    "url": "assets/js/211.76ff10e6.js",
    "revision": "d871b36c407075a7a6c121391498f81d"
  },
  {
    "url": "assets/js/212.1f945f3c.js",
    "revision": "45f279d403db865d7b04cde8183e487b"
  },
  {
    "url": "assets/js/213.1b05ce01.js",
    "revision": "e73694ece8d2b2280d4036f7b8ff954d"
  },
  {
    "url": "assets/js/214.be92c192.js",
    "revision": "c7a20a47056ec92b013b3546f176e1f9"
  },
  {
    "url": "assets/js/215.e9904e30.js",
    "revision": "b2ae01f52541b33c3de1976ad7d77b53"
  },
  {
    "url": "assets/js/216.82c8a94e.js",
    "revision": "911a24bb6ec0e99c8d79cc40df8c069c"
  },
  {
    "url": "assets/js/217.42174e7c.js",
    "revision": "29c79a9083c53bbe96eefece7814c83b"
  },
  {
    "url": "assets/js/218.72f00225.js",
    "revision": "e0b48cab82cdd35b0ae53a18dee231e3"
  },
  {
    "url": "assets/js/219.34766469.js",
    "revision": "19cee028e6243b47308ecf0baa874c95"
  },
  {
    "url": "assets/js/22.40bc0c74.js",
    "revision": "c70f295257910e3ed1383305928ec583"
  },
  {
    "url": "assets/js/220.7fa45ba3.js",
    "revision": "985acac822737a62760b7c0d0dafb42d"
  },
  {
    "url": "assets/js/221.11000c3e.js",
    "revision": "a8c30b87a998535638cc2ae4d53e91a5"
  },
  {
    "url": "assets/js/222.c80e9b19.js",
    "revision": "e288453b63e488d3c20f65a5a16ec233"
  },
  {
    "url": "assets/js/223.55e2a3f3.js",
    "revision": "f2ad571950b161f2b754b3db493fd4ef"
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
    "url": "assets/js/39.c2783769.js",
    "revision": "0fbac52bb669e493ef1e928bcb16d209"
  },
  {
    "url": "assets/js/4.a36b649a.js",
    "revision": "a1af6d49f1ee40330c85d48e323c6ea8"
  },
  {
    "url": "assets/js/40.67bc9334.js",
    "revision": "bdd42cbbecc1f27e0f7a2eafe8a36872"
  },
  {
    "url": "assets/js/41.0cffe87b.js",
    "revision": "53ae6bc1ada67e4843255de0f59e945b"
  },
  {
    "url": "assets/js/42.7007a9e2.js",
    "revision": "f8c03ee01f4709dff9b11dd099069dd7"
  },
  {
    "url": "assets/js/43.4cdc1a74.js",
    "revision": "a7b2a2e2877624b0d9b0c912497cf000"
  },
  {
    "url": "assets/js/44.f4802bc7.js",
    "revision": "8f4c38ebf21e09d070486b76734aabec"
  },
  {
    "url": "assets/js/45.34debc14.js",
    "revision": "5eff3a41812528f22f01772ab2bcdfb1"
  },
  {
    "url": "assets/js/46.c2ce5dd7.js",
    "revision": "ffe03e16e1e9d26b66567990bab5f99b"
  },
  {
    "url": "assets/js/47.39c8ff51.js",
    "revision": "0e6718dac52bf7b45083d5564d08626b"
  },
  {
    "url": "assets/js/48.948d1838.js",
    "revision": "2f6dee134a3aa764c47b8d29ea4797e3"
  },
  {
    "url": "assets/js/49.3a7623be.js",
    "revision": "414bc01508f8bebb1a8a2103f48221a2"
  },
  {
    "url": "assets/js/5.ade88313.js",
    "revision": "41c0c07ec8d7952411e4a9ff01130d28"
  },
  {
    "url": "assets/js/50.ac02ad0e.js",
    "revision": "8f7170fce64b7605b326863f5f10dbb1"
  },
  {
    "url": "assets/js/51.f16547e7.js",
    "revision": "e25522107aadd76d0c75cc0d344757e5"
  },
  {
    "url": "assets/js/52.7fe5922d.js",
    "revision": "8caaba58b3b7fd84b23b85a799028b24"
  },
  {
    "url": "assets/js/53.c1c2c7fb.js",
    "revision": "3b3822cde1b7f6c1f758dc48879f79fb"
  },
  {
    "url": "assets/js/54.0e306c09.js",
    "revision": "b97eb1004bc7afb4691af0bd99a18577"
  },
  {
    "url": "assets/js/55.b421f487.js",
    "revision": "62365ce80d11e94052c507c248b7eaa0"
  },
  {
    "url": "assets/js/56.81af8d2b.js",
    "revision": "9ec0ba6eb9bc4eb331286805e4e94cbb"
  },
  {
    "url": "assets/js/57.a75ace25.js",
    "revision": "14c801dc6f3871fc9395e2108149016f"
  },
  {
    "url": "assets/js/58.da08dcac.js",
    "revision": "f589aff4fb3a55d5c009ea0a8c4a34cb"
  },
  {
    "url": "assets/js/59.dab6d7fa.js",
    "revision": "87a214428f03c8a48f864d6f634e578a"
  },
  {
    "url": "assets/js/6.3551780c.js",
    "revision": "fe0ed93201a286fa45177a397258d276"
  },
  {
    "url": "assets/js/60.119bb2a1.js",
    "revision": "6008e9378c9e4e51f8e910d116394dcf"
  },
  {
    "url": "assets/js/61.edc5e570.js",
    "revision": "b6571817c62e708f7013d33d31c59dbc"
  },
  {
    "url": "assets/js/62.7716e6b6.js",
    "revision": "d43c3a8c93052faa60c95bcb2350419d"
  },
  {
    "url": "assets/js/63.862022f3.js",
    "revision": "11a3ee32d8b49849f81e950bb82670fd"
  },
  {
    "url": "assets/js/64.140c3499.js",
    "revision": "5d36ed98792362500bf273968752def8"
  },
  {
    "url": "assets/js/65.9f957148.js",
    "revision": "8fc73ba771be36864aa1042e1fa55ef7"
  },
  {
    "url": "assets/js/66.bfc80bb5.js",
    "revision": "84053c2e2511ec7aed673b0ca28afcb3"
  },
  {
    "url": "assets/js/67.3d565f98.js",
    "revision": "7edd3b1e38b9aea5b350ef2858aa8007"
  },
  {
    "url": "assets/js/68.bf75b3e1.js",
    "revision": "874f78fe2d8e534ffdebfea7627ae3fc"
  },
  {
    "url": "assets/js/69.702f7500.js",
    "revision": "595d45305a1d641dcc376745d7ee3c09"
  },
  {
    "url": "assets/js/7.5041dce4.js",
    "revision": "f2c23e2ac23b68ac3e88a056dd0784fa"
  },
  {
    "url": "assets/js/70.4ff5100f.js",
    "revision": "9a1b1796d2e7a8eb9b25390b6cda8bf9"
  },
  {
    "url": "assets/js/71.8343a21d.js",
    "revision": "7c78480f49a52218288761204dfbaaec"
  },
  {
    "url": "assets/js/72.5f656cae.js",
    "revision": "fecdb20d43110b17a6e8f5251f0d2268"
  },
  {
    "url": "assets/js/73.8b747092.js",
    "revision": "a77c91ff6f25e359ae9496204e2d58ef"
  },
  {
    "url": "assets/js/74.ce37eef4.js",
    "revision": "3c26cfea8adbc83d4406693f7f069139"
  },
  {
    "url": "assets/js/75.146a5498.js",
    "revision": "7303cf811d49c6280c0ce03980c94269"
  },
  {
    "url": "assets/js/76.4984e890.js",
    "revision": "9f6a943981698d98aa3954379f62ccba"
  },
  {
    "url": "assets/js/77.2cd2e868.js",
    "revision": "9193fb886b2a4d86cbfa14f61c09fd4d"
  },
  {
    "url": "assets/js/78.90dbc4be.js",
    "revision": "8bd59a9be4ef991068bf2254ab09f6b6"
  },
  {
    "url": "assets/js/79.1b20039d.js",
    "revision": "786b7f2bccff59abdac577e0a1121076"
  },
  {
    "url": "assets/js/8.1407b990.js",
    "revision": "dcb7a34e3667ce40091860e9cc38e5c2"
  },
  {
    "url": "assets/js/80.0494bb83.js",
    "revision": "a13f02ebe2f8632623c0957be720223c"
  },
  {
    "url": "assets/js/81.ed79dacf.js",
    "revision": "fbbc0ca5f3bdc459c80f493464be7782"
  },
  {
    "url": "assets/js/82.1500a0ec.js",
    "revision": "5decd54745f438ef69dc8402191cde16"
  },
  {
    "url": "assets/js/83.6ea83899.js",
    "revision": "bd30243d075c086ec6a87ff671c370a3"
  },
  {
    "url": "assets/js/84.97c0c987.js",
    "revision": "f087cabb0c1020062c952ed36655eccf"
  },
  {
    "url": "assets/js/85.5478ff3d.js",
    "revision": "d79ef2eff6863dd131daa11c99c0de59"
  },
  {
    "url": "assets/js/86.eefe55cf.js",
    "revision": "507599714beb32c9726e440f2b8dfc9c"
  },
  {
    "url": "assets/js/87.36078833.js",
    "revision": "3d7757a0e5aebb46d571d0fb3729d845"
  },
  {
    "url": "assets/js/88.c154a1ac.js",
    "revision": "a656a1d352daa65f11b8fa4441e0d73b"
  },
  {
    "url": "assets/js/89.9d69c066.js",
    "revision": "89815af3eb463e909a74f48765a4ef90"
  },
  {
    "url": "assets/js/9.7b6dd5b4.js",
    "revision": "f1ee1335cb73fc3af924d330037b0332"
  },
  {
    "url": "assets/js/90.52e79e0e.js",
    "revision": "168a96e6d231161f0e202f211dc44036"
  },
  {
    "url": "assets/js/91.ee7188ed.js",
    "revision": "292363fcf0a4d5c67d56a2772af3c009"
  },
  {
    "url": "assets/js/92.e55d0541.js",
    "revision": "13e375f17afe66a385886076099a2988"
  },
  {
    "url": "assets/js/93.7a66a588.js",
    "revision": "9d6c374e457954b990c36e0278f82c89"
  },
  {
    "url": "assets/js/94.862ef2ed.js",
    "revision": "5740f8347d094f125887d9624cf15e44"
  },
  {
    "url": "assets/js/95.3902dbfc.js",
    "revision": "552a6c7c8f441db7afdd8bbda63aeb0e"
  },
  {
    "url": "assets/js/96.58ae93f2.js",
    "revision": "14875af0f27d779846749e08c27ea57a"
  },
  {
    "url": "assets/js/97.b5822d64.js",
    "revision": "082169c7683b7d6a65b22a4b788d6dde"
  },
  {
    "url": "assets/js/98.1873d69b.js",
    "revision": "57f14038a4051af3a9c913485161dfc7"
  },
  {
    "url": "assets/js/99.e295e79d.js",
    "revision": "b1476e34479914109d79445f5a7c5a5f"
  },
  {
    "url": "assets/js/app.d50dda49.js",
    "revision": "944126d448527c6855c9f0c08b4821c6"
  },
  {
    "url": "assets/js/vendors~docsearch.e480d9b8.js",
    "revision": "a887f3139f3f8baba27c98087130d4d9"
  },
  {
    "url": "categories/index.html",
    "revision": "ce257bd5fe29d6adc2521d44f5ffb8b7"
  },
  {
    "url": "guide.html",
    "revision": "234284be19f0781847a0ce80a80b49ed"
  },
  {
    "url": "images/algo/compare-1.png",
    "revision": "5c86695677341fdde8898b75f68901b5"
  },
  {
    "url": "images/algo/sort/sort.png",
    "revision": "e7d4e8a07ed369d457c7d5f07b5427f2"
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
    "url": "images/fine-tuning/prefix-tuning.png",
    "revision": "bd9fa16b4d2c21cdf1b4908cde84d6e4"
  },
  {
    "url": "images/fine-tuning/xishu-tuning.jpg",
    "revision": "d6b116d1f8c271d3bb74fc5e1044bb12"
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
    "url": "images/llm/quan/Dynamic_Batching.png",
    "revision": "6c39d785f6b76090643fcd30092d7a5e"
  },
  {
    "url": "images/llm/quan/Int-8.png",
    "revision": "de1f00efbd3afef94efe9180ae0c4e7e"
  },
  {
    "url": "images/llm/quan/kv-cache.png",
    "revision": "98f8cd864933207265fd4f08da9004e5"
  },
  {
    "url": "images/llm/quan/Paged_Attention-2.png",
    "revision": "d048c2ae60ea512186fb3468ea7e2e26"
  },
  {
    "url": "images/llm/quan/Paged_Attention.png",
    "revision": "031e80c3249fbb6f86db968c26d9f268"
  },
  {
    "url": "images/llm/quan/quan-2.png",
    "revision": "125fb1c9de4a6ba46c0e97797fb88032"
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
    "url": "images/llm/transformer/Attention.png",
    "revision": "9b2138a338c7450e653960efc27a2d04"
  },
  {
    "url": "images/llm/transformer/transformer.png",
    "revision": "635a2d6cffde78f7f1690e54f524089a"
  },
  {
    "url": "images/llm/vllm-kvcache/batching-1.jpg",
    "revision": "8cf0be58b5a9923702c3458fb13be0c3"
  },
  {
    "url": "images/llm/vllm-kvcache/continuous-batching-1.jpg",
    "revision": "94e6549b79c61e2bb6c70c6cfd1eda2a"
  },
  {
    "url": "images/llm/vllm-kvcache/continuous-batching-2.jpg",
    "revision": "25e8a4a83a24c15a8d3de8558f7cfbd5"
  },
  {
    "url": "images/llm/vllm-kvcache/continuous-batching-3.jpg",
    "revision": "fe65b454db605cfa38ad491c8533fb03"
  },
  {
    "url": "images/llm/vllm-kvcache/continuous-batching-4-merge-batch.jpg",
    "revision": "32fc8f8e31a697372307d987f8e9eefc"
  },
  {
    "url": "images/llm/vllm-kvcache/continuous-batching-5-filtering-batches.jpg",
    "revision": "31dbb7525dd5b4e896ab8e51b5e1963d"
  },
  {
    "url": "images/llm/vllm-kvcache/continuous-batching-6.jpg",
    "revision": "0a60eca240047e0d45296d6996f97d8f"
  },
  {
    "url": "images/llm/vllm-kvcache/d-batching-1.jpg",
    "revision": "1d3012e954d582f2c08212c0fff1a034"
  },
  {
    "url": "images/llm/vllm-kvcache/kv_cache_1.jpg",
    "revision": "a1934703a00ffd8f6d622765852b159b"
  },
  {
    "url": "images/llm/vllm-kvcache/kv_cache_2.jpg",
    "revision": "1bcbd6bbdcd11a3903b491781cf87fc8"
  },
  {
    "url": "images/llm/vllm-kvcache/kv_cache_3.jpg",
    "revision": "825a9f23c4c9d8f92002b9e418143d6d"
  },
  {
    "url": "images/llm/vllm-kvcache/kv_cache_4.jpg",
    "revision": "0c4c80fb0570c3a81c5d3b561c7cfa08"
  },
  {
    "url": "images/llm/vllm-kvcache/kv_cache_5.png",
    "revision": "a319e70fc0f3f9d7974dbb4a8061de55"
  },
  {
    "url": "images/llm/vllm-kvcache/kv_cache_6-多请求-批处理-填充标记.jpg",
    "revision": "dddf3f7b03c7cfaca70fcb388185cd03"
  },
  {
    "url": "images/llm/vllm-kvcache/though-吞吐量.jpg",
    "revision": "bb6cd7804170333693a1418ad61cd391"
  },
  {
    "url": "images/mcp/cline-usage.jpg",
    "revision": "87dd56c4e4e40b034d453f0486deb241"
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
    "url": "images/mcp/vscode-cline.jpg",
    "revision": "3290b6742904481c5f2835fb2869cd76"
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
    "url": "images/prompts/prompts-1.png",
    "revision": "9aecdb071937acac4c87d32964e9004f"
  },
  {
    "url": "images/prompts/prompts-2.jpg",
    "revision": "9788ce85721f532a34aa36aa6954f26e"
  },
  {
    "url": "images/python/cite-2.png",
    "revision": "ada6ee92bdfb844aff83ec2410d63d16"
  },
  {
    "url": "images/python/cite-3-1.png",
    "revision": "326a3e1166b846c44da8fcf33e59a613"
  },
  {
    "url": "images/python/cite-3-2.png",
    "revision": "0b67d07753f372d8f5fc7399e547c9da"
  },
  {
    "url": "images/python/cite-3.png",
    "revision": "9f6e6278cf1d3552f0315469c905ceec"
  },
  {
    "url": "images/python/cite.png",
    "revision": "d6e0773435438863ab2d5f77242cea2e"
  },
  {
    "url": "images/python/exception/try-basic-2.png",
    "revision": "165ece300c7c0a84fd308c9e6e259eac"
  },
  {
    "url": "images/python/exception/try-basic.png",
    "revision": "55ee1bcb4e36ce0c71ad9e5b08193bdb"
  },
  {
    "url": "images/python/exception/try-except.jpg",
    "revision": "062501feae56f4e57cd043588791853d"
  },
  {
    "url": "images/python/function/extends.jpg",
    "revision": "910d113bb3c9f802bdcd9fa03767b88c"
  },
  {
    "url": "images/python/function/hannuota-1.png",
    "revision": "648e9206c49676dbebf60b6846d3d5b9"
  },
  {
    "url": "images/python/function/hannuota-2.png",
    "revision": "2f93371aac8fdd2eb44f4d900f122007"
  },
  {
    "url": "images/python/function/MRO.png",
    "revision": "29c9c2f2196488115a7dd6019ede6e65"
  },
  {
    "url": "images/python/json-loads.png",
    "revision": "46071fe20f2f914cedab02d18667d057"
  },
  {
    "url": "images/python/list-1.png",
    "revision": "7516f38c8bda96ffb0f3c1c219ba48dc"
  },
  {
    "url": "images/python/list-2.png",
    "revision": "4f06e3a99a190c8fc3cfa3d7fb9632a5"
  },
  {
    "url": "images/python/list-cite.png",
    "revision": "3fcfc88349889228ceb990501269ecfe"
  },
  {
    "url": "images/python/operate.png",
    "revision": "a9936c0bad1d7bed7a76da4fb64639f1"
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
    "url": "images/rl/PPO.png",
    "revision": "9c154b9a3fe258a4dd4dfdf2ea7b6fa9"
  },
  {
    "url": "images/rl/RLAIF.png",
    "revision": "a7f5ce470b995660df96e355e9d38f95"
  },
  {
    "url": "images/rl/rlhf-1.jpg",
    "revision": "27e509aab3511dc19e0f7a3be19bc0ef"
  },
  {
    "url": "images/rl/rlhf-2.jpg",
    "revision": "9ef29b05674abc325badd8f45e8944e9"
  },
  {
    "url": "images/search/RRF-1.jpg",
    "revision": "63370945519a9593c3675dc00663b61c"
  },
  {
    "url": "images/vue/patchFlag.png",
    "revision": "172d76f5b6cc8cd2f48f9c96f8d0c836"
  },
  {
    "url": "index.html",
    "revision": "a43279d2bf2081cfcd215aac185c5f84"
  },
  {
    "url": "logo.png",
    "revision": "4e48730bd98de9f333e6bd14d62b6c7d"
  },
  {
    "url": "mcpstudy/ide-mcp-server.html",
    "revision": "2e9e10216f2d91533d32ae20f7fc9c44"
  },
  {
    "url": "mcpstudy/mcp-knowledge.html",
    "revision": "ce9a63c71dbf5ac3e3cf5d72be057d31"
  },
  {
    "url": "mcpstudy/mcp-tool.html",
    "revision": "26047674b38f56aea06bbbc06a44365a"
  },
  {
    "url": "modelstudy/11-29.html",
    "revision": "83c6cecf83afddae85ce0132ccedd834"
  },
  {
    "url": "modelstudy/123.html",
    "revision": "01214c71f6de76940f73d7796e96244d"
  },
  {
    "url": "modelstudy/2025-11-04.html",
    "revision": "51b95ce2cd13a3a924b8cf8ef4e78791"
  },
  {
    "url": "modelstudy/25-12-01.html",
    "revision": "ba3b0cae66060629c5339736d9787151"
  },
  {
    "url": "modelstudy/666-多模态.html",
    "revision": "6b516856f7463fe6a77781fc9359eef2"
  },
  {
    "url": "modelstudy/agent.html",
    "revision": "773155c007a1e89c902121db1d17a8d5"
  },
  {
    "url": "modelstudy/auto-model-desc.html",
    "revision": "3bf02a1bf81c11fdd4290c6e9fe8ddbd"
  },
  {
    "url": "modelstudy/basic-aigc.html",
    "revision": "aa99273ae758d442ef6f645e6c8724b0"
  },
  {
    "url": "modelstudy/basic-knowledge.html",
    "revision": "cd5c728e7b9fb41ef7b65283bfc6cd1b"
  },
  {
    "url": "modelstudy/compute-metrics.html",
    "revision": "ee9ab03f9f72a537100f77b5ff406784"
  },
  {
    "url": "modelstudy/construct-dataset.html",
    "revision": "f116b4ed06172ebe02f8aadaf6eb4b44"
  },
  {
    "url": "modelstudy/data-chunk.html",
    "revision": "e69a1ac68974eb863ed2389fce43c6c2"
  },
  {
    "url": "modelstudy/deep-learning.html",
    "revision": "50eccfc7abc6bff4aafa762e03c54a49"
  },
  {
    "url": "modelstudy/deepseek-search.html",
    "revision": "f4c4bee801d090d7dc0ff1a283d9ac19"
  },
  {
    "url": "modelstudy/extended-learning.html",
    "revision": "12882ddf0f2f112df8afef34ddd3dd1f"
  },
  {
    "url": "modelstudy/finetuing-step5.html",
    "revision": "5b2d7ac56c27795da18ecb25e45c0523"
  },
  {
    "url": "modelstudy/finetuing-step9.html",
    "revision": "4522a568bfcf9f6339fe9a1fcad0d662"
  },
  {
    "url": "modelstudy/finetuning-error-collect.html",
    "revision": "52b98a56033d7fed903d46d7ec83f2f4"
  },
  {
    "url": "modelstudy/finetuning-exercises-code.html",
    "revision": "48953ad3d47ca50e9d4d3c6f84d530b5"
  },
  {
    "url": "modelstudy/finetuning-f1-scores.html",
    "revision": "48a6be85ce8406863f3a2d5fce73a716"
  },
  {
    "url": "modelstudy/finetuning-warn-collect.html",
    "revision": "9c34637596a9772e89fe63a7e2d630fa"
  },
  {
    "url": "modelstudy/first-model-project.html",
    "revision": "ca86cea81af7298603e2fc086090a0ef"
  },
  {
    "url": "modelstudy/function-calling.html",
    "revision": "5ee83fd6a29af8b8c3344f4ef07b3141"
  },
  {
    "url": "modelstudy/impl-transformer.html",
    "revision": "f08bed85b16cad68d53ab2bc1fc21982"
  },
  {
    "url": "modelstudy/langchain-agent-practice.html",
    "revision": "32550ae977b247f179d377928ebe9df0"
  },
  {
    "url": "modelstudy/langchain-prompt.html",
    "revision": "529146b3beb2c43cca165de3d7d997ea"
  },
  {
    "url": "modelstudy/langchain-study.html",
    "revision": "81d8179911208ad0ae6727de8163f0ba"
  },
  {
    "url": "modelstudy/llms_generation_optimization copy.html",
    "revision": "5051301eb1c0d06340437cf087599b6b"
  },
  {
    "url": "modelstudy/llms_generation_optimization.html",
    "revision": "0f535ded1e3a29089d3a0b74e6de7747"
  },
  {
    "url": "modelstudy/lm_eval.html",
    "revision": "05276b388e312658930e4808b533f520"
  },
  {
    "url": "modelstudy/lora-fine-tuning.html",
    "revision": "519ec017b6124a0587cbfabd19295ac8"
  },
  {
    "url": "modelstudy/mianshi.html",
    "revision": "6f840d02bda202cb83f2b55747954a3c"
  },
  {
    "url": "modelstudy/model-basic.html",
    "revision": "2a3bf3f000d4d7b4b170019c52c9784a"
  },
  {
    "url": "modelstudy/model-case.html",
    "revision": "0e8481a9ee07af729e10858d9cf85f6d"
  },
  {
    "url": "modelstudy/model-deploy.html",
    "revision": "17c77b99a757f4a69e4edf840d037b5b"
  },
  {
    "url": "modelstudy/model-english.html",
    "revision": "4014be8a754f3e807b676cd0c081f95a"
  },
  {
    "url": "modelstudy/model-evaluate.html",
    "revision": "5d7fa8ae629167893292a0bd3235f306"
  },
  {
    "url": "modelstudy/model-fine-tuning.html",
    "revision": "42b97051ccb9f9b83bad01137bc0d534"
  },
  {
    "url": "modelstudy/model-function-calling.html",
    "revision": "c05337ae9d0b05b2a5c2b0f1190c2df5"
  },
  {
    "url": "modelstudy/model-langchain-rag.html",
    "revision": "6552f182eb0a0d97482ba4f347233f8a"
  },
  {
    "url": "modelstudy/model-langchain.html",
    "revision": "9b2bca74e2ac14f1e67769a7d8f76c21"
  },
  {
    "url": "modelstudy/model-optimize.html",
    "revision": "93dcd362aefbd8a45f305deaab74e5e6"
  },
  {
    "url": "modelstudy/model-pytorch.html",
    "revision": "4c3d87d7dfc74114980b8bc29226ec58"
  },
  {
    "url": "modelstudy/model-quantization.html",
    "revision": "19b73e8280d12dc97144fd17b6161def"
  },
  {
    "url": "modelstudy/model-question.html",
    "revision": "ce08a5381b4dd42ccbc1c89409c955e5"
  },
  {
    "url": "modelstudy/model-rag-pain.html",
    "revision": "f6613dd7fffab46e8228ae2215ac1e7b"
  },
  {
    "url": "modelstudy/model-rag.html",
    "revision": "351d30207fbd5c62f940080defc367cc"
  },
  {
    "url": "modelstudy/model-RNN.html",
    "revision": "4c3d3c19f0fa26a476adbf9f409c80c3"
  },
  {
    "url": "modelstudy/model-summary.html",
    "revision": "2a68354650d3da2204a41fa8ca02806c"
  },
  {
    "url": "modelstudy/model-train-analyze.html",
    "revision": "1f7510e0d21a612d3949e1dfed2c0803"
  },
  {
    "url": "modelstudy/model-train-code.html",
    "revision": "763ba2cfec12ada0bdd01cf7be19f69e"
  },
  {
    "url": "modelstudy/model-train-process.html",
    "revision": "6e898887dc70894a877b5abbadff7ebc"
  },
  {
    "url": "modelstudy/model-train-related.html",
    "revision": "520b77cdde4cf5f63dbed9bda84ea47f"
  },
  {
    "url": "modelstudy/model-train.html",
    "revision": "094b4092bc7ea5ec2f87e6ac1bb95227"
  },
  {
    "url": "modelstudy/model-transformer.html",
    "revision": "0cbef974e58b1650453f2d61e22b9300"
  },
  {
    "url": "modelstudy/model.html",
    "revision": "e9378d30abbc83040cdc6312f5843a91"
  },
  {
    "url": "modelstudy/multi-chat.html",
    "revision": "7324eacd8a3d72a2f30d5a419b5aeb22"
  },
  {
    "url": "modelstudy/ner-instruct-task.html",
    "revision": "e90d4945ed1da0c61b9bdae33d97a042"
  },
  {
    "url": "modelstudy/peft.html",
    "revision": "56ff56a12d56d5b528f7df88454c7784"
  },
  {
    "url": "modelstudy/project-study.html",
    "revision": "a677f9369d400ca0b707e0e463f51439"
  },
  {
    "url": "modelstudy/prompts.html",
    "revision": "a7a28ecb6243555a43491f61c3833f9f"
  },
  {
    "url": "modelstudy/quantization.html",
    "revision": "8aed0670826c0f8a269c21352c82c597"
  },
  {
    "url": "modelstudy/question-bank.html",
    "revision": "ca966dcc39734d6dbf4835a08113807f"
  },
  {
    "url": "modelstudy/rag-eval.html",
    "revision": "27086221d69a169d2a4a8f02add14295"
  },
  {
    "url": "modelstudy/rag-react.html",
    "revision": "a19cbc114045fce61ec71f85f0e4089e"
  },
  {
    "url": "modelstudy/rag.html",
    "revision": "7ff66a32bced485b3dd3982b9104e758"
  },
  {
    "url": "modelstudy/rl.html",
    "revision": "9aa92b09f516f89ca85580e3ceaee687"
  },
  {
    "url": "modelstudy/self-function-calling.html",
    "revision": "6cea4093daf7dca187029413e77ab452"
  },
  {
    "url": "modelstudy/stage-four-chatbot.html",
    "revision": "26036da019a66ccc6344496b6d485f5b"
  },
  {
    "url": "modelstudy/temp.html",
    "revision": "d24419436767f507c5df8c98234518b8"
  },
  {
    "url": "modelstudy/temp2.html",
    "revision": "19e019059c225a720d9d0837daf66c0e"
  },
  {
    "url": "modelstudy/transformer-basic.html",
    "revision": "d2ab35e7eb0cc510dc134a2b8d8cbcab"
  },
  {
    "url": "modelstudy/transformer-code.html",
    "revision": "341262b54fdfae8191fa4587818daf41"
  },
  {
    "url": "modelstudy/transformer-knowledge.html",
    "revision": "bb3568abc355ff78f1404a2ad5f9a210"
  },
  {
    "url": "modelstudy/transformer-learn.html",
    "revision": "596149aaaa0426635965d623fd454120"
  },
  {
    "url": "modelstudy/transformer-question.html",
    "revision": "5a8190a15f1b70817856e23713df28b4"
  },
  {
    "url": "modelstudy/transformer-related.html",
    "revision": "8ed725adad491ac09402096036bc7d66"
  },
  {
    "url": "modelstudy/vector-database.html",
    "revision": "3ff8238c946eb7d8a627f61cddcddb6c"
  },
  {
    "url": "modelstudy/vLLM-intro.html",
    "revision": "3d60caea7bf6c044500a49be6d39c8b1"
  },
  {
    "url": "modelstudy/whatIsModel.html",
    "revision": "aa843c3e5ff5fde298358494490befbf"
  },
  {
    "url": "other/ai-agent.html",
    "revision": "2f604f5e53c929fe2ba6e2ca5cfbb52e"
  },
  {
    "url": "other/conda.html",
    "revision": "0ed6a0ceefebd5fe2994d7f0a8cdbd0a"
  },
  {
    "url": "other/excellentarticles.html",
    "revision": "fd3e469e2bb6f409da45fe4d02398fba"
  },
  {
    "url": "other/fine-tuning-adapters.html",
    "revision": "66879c2113a4a079074f09e2526bfbc4"
  },
  {
    "url": "other/git-operate.html",
    "revision": "435b11689c90fb42d960524c34db9b04"
  },
  {
    "url": "other/lora-0-1.html",
    "revision": "8e7db6bab1293c69a0e59323ddb764ff"
  },
  {
    "url": "other/model-refrence.html",
    "revision": "8bb83e06db20a45c6a2d5ccecfc1eb03"
  },
  {
    "url": "other/python.html",
    "revision": "dab718411b472baec81235084a907a1d"
  },
  {
    "url": "other/pytorch-know.html",
    "revision": "b12d34e9390b6398f5e3ff9236349d4f"
  },
  {
    "url": "other/rag-question-compare.html",
    "revision": "e8a0ae8d4efd7693efd3808dc027ee4d"
  },
  {
    "url": "other/resume.html",
    "revision": "a48eef6151ace021fbb38d6d9479d660"
  },
  {
    "url": "other/swanLab-info.html",
    "revision": "733a1de2a813256ceac12a246e351df7"
  },
  {
    "url": "other/transformer-1.html",
    "revision": "cc2b6b68a90315538ba176f7ddeb7c0b"
  },
  {
    "url": "other/transformer-2.html",
    "revision": "0341b255e7f6f171aeb1b64735c3ec8c"
  },
  {
    "url": "other/transformer-3.html",
    "revision": "830746515940bfc4177b667c60c79c77"
  },
  {
    "url": "other/transformer-collect.html",
    "revision": "37e2d8edc995584e9320ba20df7cf99f"
  },
  {
    "url": "other/transformer-learn.html",
    "revision": "e5fe6b1b1cac8be093126841aaf78459"
  },
  {
    "url": "other/using-packages.html",
    "revision": "15bf90ef55d57d175548677d0726ced1"
  },
  {
    "url": "pystudy/1229.html",
    "revision": "dac286a3da44b5aeffc54a5a00b3408a"
  },
  {
    "url": "pystudy/array-operation.html",
    "revision": "167cffd17f026e0da5eadccc7f8ace8a"
  },
  {
    "url": "pystudy/basic.html",
    "revision": "578c14d99ef7963aa2092c1289c73595"
  },
  {
    "url": "pystudy/builtin-function.html",
    "revision": "dc502367ea957c9a52c819b51e86effc"
  },
  {
    "url": "pystudy/class.html",
    "revision": "1e5f558d37483b6fc8430d5bc74b7bcc"
  },
  {
    "url": "pystudy/data-structure.html",
    "revision": "73632bf5a33bb282a307b619af4b5fc7"
  },
  {
    "url": "pystudy/database.html",
    "revision": "69b024fcb94860ffde93616935a08c4c"
  },
  {
    "url": "pystudy/dict-knowledge.html",
    "revision": "3cb5e30596b178c3b949c5783e85bd03"
  },
  {
    "url": "pystudy/exception.html",
    "revision": "0be9f45785340cfb1eceba6c5d0404ce"
  },
  {
    "url": "pystudy/file.html",
    "revision": "b4e938a3eb8f30674d07576f48975a3b"
  },
  {
    "url": "pystudy/function.html",
    "revision": "9a5b654a8bb4284de293571946b328a3"
  },
  {
    "url": "pystudy/line-continue.html",
    "revision": "9cbf0b8ae6fe025cf3a0275141b4bb09"
  },
  {
    "url": "pystudy/list-comprehension.html",
    "revision": "c23acd22874dbcef1e23996f71ed3393"
  },
  {
    "url": "pystudy/module.html",
    "revision": "5c4b7bc72caffa47e511f7d5a587742d"
  },
  {
    "url": "pystudy/network.html",
    "revision": "085f31d056dc7729ab4ed87233036f10"
  },
  {
    "url": "pystudy/numpy.html",
    "revision": "c8fb2c78378908746875ed233aba58cd"
  },
  {
    "url": "pystudy/other.html",
    "revision": "caeff13ff8a86a5591b96e15be1ad4d8"
  },
  {
    "url": "pystudy/package.html",
    "revision": "b48a783ad64bbb2527b2d5e792162ac4"
  },
  {
    "url": "pystudy/pandas-study.html",
    "revision": "b5dd4d3988a5cd5885aba3a8e14b94b4"
  },
  {
    "url": "pystudy/practice.html",
    "revision": "7991fa5a91c0438574d14bd0146f80ab"
  },
  {
    "url": "pystudy/process.html",
    "revision": "46ac763a55c200c78e298a93dc2532ef"
  },
  {
    "url": "pystudy/python-class.html",
    "revision": "8a7a18afd034ae73102d89b1db895101"
  },
  {
    "url": "pystudy/python-collect-knowledge.html",
    "revision": "74195667ff2fbae5a61c514ff317ad0d"
  },
  {
    "url": "pystudy/python-collect.html",
    "revision": "768e2dcd138f4b91341e75d8e2402436"
  },
  {
    "url": "pystudy/python-evaluation.html",
    "revision": "e5b6153bd4ff8b3d94cd0acc7a97a3b1"
  },
  {
    "url": "pystudy/python-except.html",
    "revision": "25a44a513adb55cb36cdcd660645c070"
  },
  {
    "url": "pystudy/python-important.html",
    "revision": "c9330f1d8adc19b1e668c461d907c423"
  },
  {
    "url": "pystudy/python-list.html",
    "revision": "87bac084c54efd54a105c529e6e92508"
  },
  {
    "url": "pystudy/python-magic.html",
    "revision": "05b116aa7bef35882cc7a73da6e08de0"
  },
  {
    "url": "pystudy/python-other-related.html",
    "revision": "0dc104b9714e31d71fb3f982f01b1d5c"
  },
  {
    "url": "pystudy/python-set.html",
    "revision": "a87a38e1e44ecd82b5f5b91e377dac80"
  },
  {
    "url": "pystudy/python-storage.html",
    "revision": "01aef9e2bb81dcd50e5a016552f63115"
  },
  {
    "url": "pystudy/python-str.html",
    "revision": "28dc6f89891f45ee6bd1ed273cb14dcd"
  },
  {
    "url": "pystudy/python-web.html",
    "revision": "0a8155b320535bf0d50f045fafdf4cff"
  },
  {
    "url": "pystudy/regex.html",
    "revision": "a5ef857447acd52119feef4a65941165"
  },
  {
    "url": "pystudy/related-knowledge.html",
    "revision": "891f09dd15f74563a49a9d2b9f8d5796"
  },
  {
    "url": "pystudy/sequence.html",
    "revision": "7a8a71c059aa527137507f1a52025109"
  },
  {
    "url": "pystudy/string-function.html",
    "revision": "ea852975e0299542e890005097bccd8f"
  },
  {
    "url": "pystudy/technology-point.html",
    "revision": "e0543bd59db16ac1cb3cb1784deb64d2"
  },
  {
    "url": "pystudy/temp-1229.html",
    "revision": "8065279c4a59f20e4eb15fd09129d541"
  },
  {
    "url": "pystudy/thread.html",
    "revision": "3044534cf72b4c3d5166e48121665090"
  },
  {
    "url": "pystudy/use-library.html",
    "revision": "46cd7000a84f81c19004dd9e2ea1d04c"
  },
  {
    "url": "pystudy/use-pip-install.html",
    "revision": "d35d782b3b43d569b5f35a8aa4459f77"
  },
  {
    "url": "react/react-advanced.html",
    "revision": "bce7c3122e97086efec3854e03e81074"
  },
  {
    "url": "react/react-basic.html",
    "revision": "f756a38631aa1d6aa910c87aaa553aaf"
  },
  {
    "url": "react/react-context.html",
    "revision": "a0a2e234eb76fb9d3b9e2ab3755afa93"
  },
  {
    "url": "react/react-relation.html",
    "revision": "101d3a440095c88ca83585a63e6f2e49"
  },
  {
    "url": "react/ssr.html",
    "revision": "2505d606e474ddd7b161618a147e96ac"
  },
  {
    "url": "react/status-manage.html",
    "revision": "e20a178f1b6869b3896ba6a53eb36a33"
  },
  {
    "url": "reactnative/reactnative-desc.html",
    "revision": "b99a50b1cd31f4a2037bac70fd0fcbe1"
  },
  {
    "url": "reactnative/reactnative.html",
    "revision": "f23d027adc32de7ec71d96600b18ded7"
  },
  {
    "url": "reactnative/rn-problem.html",
    "revision": "feddc92a30c6680fc5c81ae6ed95fb1d"
  },
  {
    "url": "tag/index.html",
    "revision": "5110ac5c99da72b89feb2d8d81347fe8"
  },
  {
    "url": "tag/react/index.html",
    "revision": "8631b0ee16500cd08939811755867192"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "1dd7ce926da2144b04118344f1b027da"
  },
  {
    "url": "tag/二叉树/index.html",
    "revision": "2fe7195d994a6373532d94af9d9bf60d"
  },
  {
    "url": "timeline/index.html",
    "revision": "1ab1018712eb9dea6895a2b2b8d66309"
  },
  {
    "url": "vue/basicknowledge.html",
    "revision": "1f1649efe440c28313782f78d336d883"
  },
  {
    "url": "vue/compare.html",
    "revision": "68f3204ce5438772d7dd594d17edd2c7"
  },
  {
    "url": "vue/misnotes.html",
    "revision": "06e3291e666dafc0fa3a04f15c16d508"
  },
  {
    "url": "vue/ssr.html",
    "revision": "fe37416f594d4f6be8d0210d8e637a13"
  },
  {
    "url": "vue/vue-attrs-listeners.html",
    "revision": "c9ea2207f310938f5a842b7cd3a221dd"
  },
  {
    "url": "vue/vue-principle.html",
    "revision": "abbf88d620265754100a471f22734c8b"
  },
  {
    "url": "vue/vue-router.html",
    "revision": "09605390098bab032f95707388a3c6dd"
  },
  {
    "url": "vue/vue-status.html",
    "revision": "0360a0a448a0dbdd72ab1297522549f2"
  },
  {
    "url": "vue/vue3-basic.html",
    "revision": "d0d4db33f56c5bb95ac4f1271913808d"
  },
  {
    "url": "vue/vue3-impl.html",
    "revision": "e2fe4c898dbe55f5ab19df5a6a77a673"
  },
  {
    "url": "vue/vue3.html",
    "revision": "8e16c79dd4b76d1125dd60e5df10d0d4"
  },
  {
    "url": "vue/vuex.html",
    "revision": "07b249eff92ba98e046b3cd58a235914"
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
