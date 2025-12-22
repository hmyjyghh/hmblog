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
    "revision": "2ef28f687a8f75c3a23a64ffe92af034"
  },
  {
    "url": "algorithm/algo-temp.html",
    "revision": "514b67aed6f1beb2edc190a49363be9a"
  },
  {
    "url": "algorithm/binary-search.html",
    "revision": "82b8f299e586a618db9300a86d021304"
  },
  {
    "url": "algorithm/binary-tree.html",
    "revision": "1655ddb78b542e6cf7b8626907f1c013"
  },
  {
    "url": "algorithm/compare-al.html",
    "revision": "6d63d162e2363c7836c8982fbdcda7f9"
  },
  {
    "url": "algorithm/del-single-list-2.html",
    "revision": "1202bbe45dfe1349b9350e255ca0eb1f"
  },
  {
    "url": "algorithm/del-single-list.html",
    "revision": "05de6c0fdce2133fbb55d2d8f4a2cbb2"
  },
  {
    "url": "algorithm/double-pointer.html",
    "revision": "e4ebb03b7b7cdd70971f12f8e0a102c5"
  },
  {
    "url": "algorithm/dynamic-plan.html",
    "revision": "1b7195a61d9a526ffc499fa3073808f6"
  },
  {
    "url": "algorithm/effect-bracket.html",
    "revision": "a51ca0466fbc4ded3b27563ff378f3c5"
  },
  {
    "url": "algorithm/greedy.html",
    "revision": "5d4a1366bf49fd1cb8746445e64805ac"
  },
  {
    "url": "algorithm/longasc-sequence.html",
    "revision": "6b2c08293eb4cc45137b4de7387526d3"
  },
  {
    "url": "algorithm/other.html",
    "revision": "cc234304f6b2e88a5548f899e3f0c037"
  },
  {
    "url": "algorithm/receive-rain.html",
    "revision": "62a4cdc48d805d4d524e6b602db04aa5"
  },
  {
    "url": "algorithm/reverse-list.html",
    "revision": "7603001b85da2303b437e1c421629017"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "ff92dd4dfbf1a76771817a7c748b0823"
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
    "url": "assets/js/100.5613e6ba.js",
    "revision": "60ab86226f8feb3341f7254b805d7d4c"
  },
  {
    "url": "assets/js/101.b8eb0459.js",
    "revision": "dafbc1780ff3aa59c5ffac0491dafeb1"
  },
  {
    "url": "assets/js/102.40868c51.js",
    "revision": "fe4b5ff1e16471a10d86eb79104ca562"
  },
  {
    "url": "assets/js/103.1f40d097.js",
    "revision": "ccd2b28a334ab9d6a5d55e421b76e0c2"
  },
  {
    "url": "assets/js/104.4e73c56a.js",
    "revision": "d55edcba5a696ea0fc13cc5498db19e5"
  },
  {
    "url": "assets/js/105.cb525ef5.js",
    "revision": "4710dbac4c0a437cae094c2fdbccfad4"
  },
  {
    "url": "assets/js/106.252f49ca.js",
    "revision": "016dff2732e20fc3850e8d7290de38de"
  },
  {
    "url": "assets/js/107.91d170e8.js",
    "revision": "c1cf8795370e5d174c5bc2ab62406e9c"
  },
  {
    "url": "assets/js/108.8a514186.js",
    "revision": "f736b724392dd5c06fcabd0c825c977a"
  },
  {
    "url": "assets/js/109.f15844d7.js",
    "revision": "64a9d7cd5e9686e774fae622fb9b4398"
  },
  {
    "url": "assets/js/11.08937b90.js",
    "revision": "e77956ac107a7b0387db3e6be4e56ebe"
  },
  {
    "url": "assets/js/110.a0e27b36.js",
    "revision": "5950c24e91c66a33b908140fceeb843c"
  },
  {
    "url": "assets/js/111.1c542559.js",
    "revision": "a323cc9ce2a9ee1b8d149c229e03812a"
  },
  {
    "url": "assets/js/112.5fa57e84.js",
    "revision": "cf1ef0e55c25d6efb3dfcdcb4b0aaab2"
  },
  {
    "url": "assets/js/113.bfbfcd5a.js",
    "revision": "ba8ebf704ce0d8e5f72bf6d40d4a19a4"
  },
  {
    "url": "assets/js/114.2e526e4d.js",
    "revision": "45842a33a218b7a1bf209f31bade13da"
  },
  {
    "url": "assets/js/115.221e2f65.js",
    "revision": "720add26483a7742b08f99ba551b742f"
  },
  {
    "url": "assets/js/116.a7726179.js",
    "revision": "435f06adff90f08755fc4119d98d628a"
  },
  {
    "url": "assets/js/117.22075f73.js",
    "revision": "8ae46e1f47f329acc12e2328989a2916"
  },
  {
    "url": "assets/js/118.459f31e3.js",
    "revision": "5041170b4b95f896eb7d466de4885156"
  },
  {
    "url": "assets/js/119.f7a33a09.js",
    "revision": "c4ead96c7f654dd5b78bf051b026d4d1"
  },
  {
    "url": "assets/js/120.8b58a340.js",
    "revision": "bf269a86c4dbf84c7ce8895dba61fb9c"
  },
  {
    "url": "assets/js/121.277e1f1e.js",
    "revision": "fa069576a6ecb570713b991d76abc5b3"
  },
  {
    "url": "assets/js/122.ec3ae934.js",
    "revision": "cc0a57024d1716cc97d71ab56332718a"
  },
  {
    "url": "assets/js/123.514ade54.js",
    "revision": "14adb5e102f6fccf40d6a08221e537c9"
  },
  {
    "url": "assets/js/124.6b6c2b7d.js",
    "revision": "008f2bb905cb5df5c91c689a25d8e485"
  },
  {
    "url": "assets/js/125.a7fb1fbe.js",
    "revision": "268f8151c6dd863394b013fbaa6ba570"
  },
  {
    "url": "assets/js/126.b5ef252a.js",
    "revision": "85b99bf7068ba7815f842d948316a2b2"
  },
  {
    "url": "assets/js/127.d8121d6d.js",
    "revision": "ac289d2ea70b42f59036dccd6e5a825b"
  },
  {
    "url": "assets/js/128.40963707.js",
    "revision": "5a80352c950775af3f968146eca4e291"
  },
  {
    "url": "assets/js/129.bf256481.js",
    "revision": "2c3ea6cc41459a68542873eb4b4a1b6e"
  },
  {
    "url": "assets/js/130.0031ec91.js",
    "revision": "067808ccaff4d278608b00b7024100f7"
  },
  {
    "url": "assets/js/131.4fe99cc5.js",
    "revision": "7074b4519959d625c9b48f8b15f796cb"
  },
  {
    "url": "assets/js/132.fcf1a74b.js",
    "revision": "c0f61a3ca8b569d7c65a6b86921a49c8"
  },
  {
    "url": "assets/js/133.ff8e24a1.js",
    "revision": "ba8ad0283b0aa571a8157ca5e6c08bd8"
  },
  {
    "url": "assets/js/134.db2d31f5.js",
    "revision": "f72d5339070294d169e5a433e5db0ebd"
  },
  {
    "url": "assets/js/135.b152d9b0.js",
    "revision": "c6c845d9f827a01b5bf22a1f15dcbccc"
  },
  {
    "url": "assets/js/136.936be57e.js",
    "revision": "71f0567eed15748fca7958c2bb14dba8"
  },
  {
    "url": "assets/js/137.48f9d2b5.js",
    "revision": "04a4a9e866a0ac67429fd30864842107"
  },
  {
    "url": "assets/js/138.3bdb70b7.js",
    "revision": "c687aa3c9e40c36951434928466c31a4"
  },
  {
    "url": "assets/js/139.2c511f09.js",
    "revision": "dc3006d91cc2d1eda464de350e4f85df"
  },
  {
    "url": "assets/js/14.0ac4aea5.js",
    "revision": "11b1f5df8a45d04c2f0527031b496791"
  },
  {
    "url": "assets/js/140.5f00d305.js",
    "revision": "24335fc1acb3414f1331c8961f65419a"
  },
  {
    "url": "assets/js/141.41c9f925.js",
    "revision": "6b3cefbebe94c8a5a3c979c5cf0047d7"
  },
  {
    "url": "assets/js/142.b37e8f1d.js",
    "revision": "611abeb486eca60e7caaf294b9ec1a1a"
  },
  {
    "url": "assets/js/143.20c71a9e.js",
    "revision": "29f9a8832cb99b73451ae255668bcc2f"
  },
  {
    "url": "assets/js/144.17cece65.js",
    "revision": "4970f8d53f0e2ce9c38a25eb7a644833"
  },
  {
    "url": "assets/js/145.978e7516.js",
    "revision": "c622490da1528ac3841d85f324ddecfa"
  },
  {
    "url": "assets/js/146.94bdfed5.js",
    "revision": "d10386f17299be0f0df7d8724d5338e4"
  },
  {
    "url": "assets/js/147.f9c95b0c.js",
    "revision": "517c8a558b3748e0b8359a62c62fd394"
  },
  {
    "url": "assets/js/148.355cbcf5.js",
    "revision": "4b7f867ab7bcecd20f39a62f74b3c96d"
  },
  {
    "url": "assets/js/149.b1e46aaf.js",
    "revision": "559d50d0dda0a057f8efcd96b04c3f84"
  },
  {
    "url": "assets/js/15.2cac15c3.js",
    "revision": "688079c52f80af83336ee63d8b5680a1"
  },
  {
    "url": "assets/js/150.b5a35472.js",
    "revision": "0e0a64a2e31fd2693f01c0976825484c"
  },
  {
    "url": "assets/js/151.d309c32e.js",
    "revision": "80f5251a641f92cb4ad498ab6c3b5767"
  },
  {
    "url": "assets/js/152.fb9a950d.js",
    "revision": "a9d5966bf9677b6a3cacb44db1b296a8"
  },
  {
    "url": "assets/js/153.c231397c.js",
    "revision": "cd43015eb0d51effdca76961fd107cb3"
  },
  {
    "url": "assets/js/154.2c76a2e9.js",
    "revision": "587baf8c9c154d614d88c294eb37f216"
  },
  {
    "url": "assets/js/155.ad43ee17.js",
    "revision": "15ffe7a0a49f31a0c729ad1adf4838c7"
  },
  {
    "url": "assets/js/156.b0fe3a29.js",
    "revision": "19e5b9e638cac89f95c2117b3b677b9f"
  },
  {
    "url": "assets/js/157.d085315f.js",
    "revision": "6ac36e037b7e257427a4ff845c18f175"
  },
  {
    "url": "assets/js/158.9f11fbf4.js",
    "revision": "6336a9a96a3de70d0b5ce9eac844fdd2"
  },
  {
    "url": "assets/js/159.178d8a8a.js",
    "revision": "5288083970d2556f55eb033e14e4f06b"
  },
  {
    "url": "assets/js/16.41c97ec9.js",
    "revision": "93d14d23f5306cdccf9cc340e18c5164"
  },
  {
    "url": "assets/js/160.e6a3b7e3.js",
    "revision": "0ececc0fca576e854bb4de89d59cc9e7"
  },
  {
    "url": "assets/js/161.b897eab6.js",
    "revision": "863a7c505d6229d7c85e3eedf2ee7ac3"
  },
  {
    "url": "assets/js/162.54114dbe.js",
    "revision": "e7a226fd5eaba12172fe6350b5b32a21"
  },
  {
    "url": "assets/js/163.156fce2c.js",
    "revision": "de0924c931c44092a3d3854ed0828960"
  },
  {
    "url": "assets/js/164.e44a107d.js",
    "revision": "435366ceebbdc2b5e333d423f4673a7e"
  },
  {
    "url": "assets/js/165.50843d9b.js",
    "revision": "f0b41bc763e3e0dbbc704ceabf47da1e"
  },
  {
    "url": "assets/js/166.51cc166e.js",
    "revision": "96985e426ef92110bf020f7fb31a7d2e"
  },
  {
    "url": "assets/js/167.1e241fd0.js",
    "revision": "75bf5d6af1f31eb4423a373d461f73b8"
  },
  {
    "url": "assets/js/168.1f0c33e5.js",
    "revision": "039fabe4defd49aa91cf5e731c1c07db"
  },
  {
    "url": "assets/js/169.62546341.js",
    "revision": "6059d3ce1109a848ebda0dfea7a3bb6c"
  },
  {
    "url": "assets/js/17.29a60e10.js",
    "revision": "c12cab21b0e58f47d805749f1a837598"
  },
  {
    "url": "assets/js/170.3e1d4983.js",
    "revision": "8c08109f4a874320c6e2ed4137cfd0d9"
  },
  {
    "url": "assets/js/171.5975c042.js",
    "revision": "a6caecef1c924f9efe71341550b84be6"
  },
  {
    "url": "assets/js/172.a172fe4f.js",
    "revision": "507c2cd04ae9b1ebd16001424786afd3"
  },
  {
    "url": "assets/js/173.b7f30ce1.js",
    "revision": "efdebc0855dabaad338cd2ae3883147c"
  },
  {
    "url": "assets/js/174.cf213ee7.js",
    "revision": "fa3ac6cf138ec521040fa42e12d43fc9"
  },
  {
    "url": "assets/js/175.fead80ee.js",
    "revision": "b0fbb31b88564465d61ecd6bd4a56075"
  },
  {
    "url": "assets/js/176.d8597cdf.js",
    "revision": "409fc26655f178e0374abb84cc04690f"
  },
  {
    "url": "assets/js/177.72596ae1.js",
    "revision": "9d09243b4fb0782f71a0dcc18cc31db7"
  },
  {
    "url": "assets/js/178.d0c48b18.js",
    "revision": "9973254dec6dadcbe965f4423639aa59"
  },
  {
    "url": "assets/js/179.d5c444fc.js",
    "revision": "087ead646a585e17d3906ce51609f588"
  },
  {
    "url": "assets/js/18.27fd2b83.js",
    "revision": "bd9d5b805bca2ffea52562e712745e52"
  },
  {
    "url": "assets/js/180.2f29e719.js",
    "revision": "75d611c0cb70959926f8d5b5e337e53a"
  },
  {
    "url": "assets/js/181.bb359567.js",
    "revision": "7857eb8912a6809b9ad095cc1bd0576e"
  },
  {
    "url": "assets/js/182.e140022f.js",
    "revision": "f81bfd687825353cd55d87770fdfd2d4"
  },
  {
    "url": "assets/js/183.88c88131.js",
    "revision": "3e4ad810f0e464afb360c654d118ca32"
  },
  {
    "url": "assets/js/184.7dafb863.js",
    "revision": "db8a4e8ecefef594654808e481832fc9"
  },
  {
    "url": "assets/js/185.6ee6fee4.js",
    "revision": "de4b94a6b21a9f07b687e7fef70ec13f"
  },
  {
    "url": "assets/js/186.a58d3091.js",
    "revision": "3c3843505e9eedeb9098d2059e7e8a3c"
  },
  {
    "url": "assets/js/187.06e4ac29.js",
    "revision": "aa62f9905581d7aee2492113cce1f6b3"
  },
  {
    "url": "assets/js/188.4f58b234.js",
    "revision": "65425787cc7e142cdaf657306470a347"
  },
  {
    "url": "assets/js/189.b7fcaad5.js",
    "revision": "dc53cf91052e640a4227c58173c56aef"
  },
  {
    "url": "assets/js/19.e7351a57.js",
    "revision": "497c4fe1210b978757c125312c8c95af"
  },
  {
    "url": "assets/js/190.1ee24f3f.js",
    "revision": "d4f39bd9b66f1e952df6705d12bb9d09"
  },
  {
    "url": "assets/js/191.71d1ed44.js",
    "revision": "f83ef1357e2094406918a145378bb58b"
  },
  {
    "url": "assets/js/192.8e13dbd5.js",
    "revision": "7b65842a7298f23cfe327f2bbbf1cb6b"
  },
  {
    "url": "assets/js/193.6ffdbe3c.js",
    "revision": "8e2727e828197eccf6b738d0d091dc34"
  },
  {
    "url": "assets/js/194.f3092777.js",
    "revision": "0a0021a0796241a99c1d468779845d06"
  },
  {
    "url": "assets/js/195.61518c26.js",
    "revision": "fd06a5ab9fac7330662ef225ca63848c"
  },
  {
    "url": "assets/js/196.4749bfe4.js",
    "revision": "a667f6af0f756b721197950acd41d3a7"
  },
  {
    "url": "assets/js/197.02f293f5.js",
    "revision": "9af42af9b6cdcf44e3ae9f210bbb19ec"
  },
  {
    "url": "assets/js/198.66d067f8.js",
    "revision": "85fe357d12195b4b02c5702ab252f9cb"
  },
  {
    "url": "assets/js/199.e713626b.js",
    "revision": "2873f638df9ed6e91c3d0d422b6e12a6"
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
    "url": "assets/js/200.a0428ce1.js",
    "revision": "71b51fa3371a8e173304b8066f7632b3"
  },
  {
    "url": "assets/js/201.10f94064.js",
    "revision": "837db7d05ff73e26cd8fcb522df08815"
  },
  {
    "url": "assets/js/202.85104aab.js",
    "revision": "c68aaea32ed6173b5ce98a9277761153"
  },
  {
    "url": "assets/js/203.610baaad.js",
    "revision": "851bd6b51f0c4a10379c9a2f424b88bf"
  },
  {
    "url": "assets/js/204.d7a56285.js",
    "revision": "03014989489a2f8f295fee8b7a9d8d9e"
  },
  {
    "url": "assets/js/205.e9c3d532.js",
    "revision": "351e9a37acbd1e524179a64770ebbfca"
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
    "url": "assets/js/39.c2783769.js",
    "revision": "0fbac52bb669e493ef1e928bcb16d209"
  },
  {
    "url": "assets/js/4.a36b649a.js",
    "revision": "a1af6d49f1ee40330c85d48e323c6ea8"
  },
  {
    "url": "assets/js/40.b6871f20.js",
    "revision": "fcc80ecce9f0404d995c6a42fa29d697"
  },
  {
    "url": "assets/js/41.b9269303.js",
    "revision": "91437fdee616a5f3a425eeed1d148049"
  },
  {
    "url": "assets/js/42.e8164e0c.js",
    "revision": "127f0067632c510e1d93c83ab39620cd"
  },
  {
    "url": "assets/js/43.70ef46e5.js",
    "revision": "fac746deef6d9443569371a0f9114844"
  },
  {
    "url": "assets/js/44.9331e0b2.js",
    "revision": "9c724f8bb78920b7f0ebfb03ce2b9d0f"
  },
  {
    "url": "assets/js/45.5feef070.js",
    "revision": "5ed763e83654a08a0c1eca165c07d0cd"
  },
  {
    "url": "assets/js/46.cbe15db5.js",
    "revision": "c93834c8c9a0a5bd6d95912ec28c0720"
  },
  {
    "url": "assets/js/47.13b797de.js",
    "revision": "523e75c9b68202ce05e4956b8b9be9de"
  },
  {
    "url": "assets/js/48.7030d96f.js",
    "revision": "3e38d91de40841a1b640b99662f4ba2e"
  },
  {
    "url": "assets/js/49.21360ca4.js",
    "revision": "85b06db8acfefcd854ce738e8705360a"
  },
  {
    "url": "assets/js/5.ade88313.js",
    "revision": "41c0c07ec8d7952411e4a9ff01130d28"
  },
  {
    "url": "assets/js/50.2278b4f1.js",
    "revision": "0c02b2bf3ed3644b82b585a0168c9615"
  },
  {
    "url": "assets/js/51.dfcce7fa.js",
    "revision": "3956010aaec14c0a17d589f24398b3af"
  },
  {
    "url": "assets/js/52.411e6b71.js",
    "revision": "6110c7f1e5e5aceb2bf8fe89395c1397"
  },
  {
    "url": "assets/js/53.9f14e863.js",
    "revision": "ccca7a27f8db2c14a5d2748dd5a42446"
  },
  {
    "url": "assets/js/54.ae21c7a9.js",
    "revision": "c39135c3ea5a72e774a364ebff9e48ab"
  },
  {
    "url": "assets/js/55.0b0dbecf.js",
    "revision": "6829ffdc33a7bb1fba231a4d2da2a15a"
  },
  {
    "url": "assets/js/56.2b3b9c9e.js",
    "revision": "9fcb0984a32a054373b6e07ec420524d"
  },
  {
    "url": "assets/js/57.eb5c4857.js",
    "revision": "5496b10b5c5d50ff6995cb7777dc3532"
  },
  {
    "url": "assets/js/58.5bb642a4.js",
    "revision": "e6ab09dae37c5ca816d88ecc65fe5d85"
  },
  {
    "url": "assets/js/59.310d4748.js",
    "revision": "10bc48f77cffbe95ddce55891b7fccaa"
  },
  {
    "url": "assets/js/6.3551780c.js",
    "revision": "fe0ed93201a286fa45177a397258d276"
  },
  {
    "url": "assets/js/60.43f50fd6.js",
    "revision": "fd22da1bc16f0bb3ff6a522bc1e0730b"
  },
  {
    "url": "assets/js/61.bf7359ad.js",
    "revision": "3c9ae1ad7355fc59e475eb33ae82242f"
  },
  {
    "url": "assets/js/62.bbc1a63f.js",
    "revision": "60d260f4a55d874d0696fc1380fe8188"
  },
  {
    "url": "assets/js/63.4f514386.js",
    "revision": "13bd273d13eadec1bbdae9d32c162319"
  },
  {
    "url": "assets/js/64.75891b13.js",
    "revision": "9f5137a137244b41171141f579bae00c"
  },
  {
    "url": "assets/js/65.c594c5f0.js",
    "revision": "b3646615816f3d9f04e02b2c61aeff68"
  },
  {
    "url": "assets/js/66.3b2e8434.js",
    "revision": "39fbf116bbe5b8c4b980cbf547ffef06"
  },
  {
    "url": "assets/js/67.d21dd018.js",
    "revision": "13d216ad1ecb3d00853cb669b7b53c53"
  },
  {
    "url": "assets/js/68.3a1952eb.js",
    "revision": "2f6a070955e97f5ad4b73fd59e198320"
  },
  {
    "url": "assets/js/69.4a9f3de5.js",
    "revision": "9e2acdac8bdb498a11e360d54dd2674f"
  },
  {
    "url": "assets/js/7.5041dce4.js",
    "revision": "f2c23e2ac23b68ac3e88a056dd0784fa"
  },
  {
    "url": "assets/js/70.79851ca4.js",
    "revision": "4d516e795746c659930a13a6a928d395"
  },
  {
    "url": "assets/js/71.6b0dd684.js",
    "revision": "d45c135324dd5590a19b2fe77c821d1a"
  },
  {
    "url": "assets/js/72.194abe8d.js",
    "revision": "4e45bdc0d22dddee76bde8c10d60f894"
  },
  {
    "url": "assets/js/73.57d7aacb.js",
    "revision": "f68be2af1c9e20d7facb9e6d65d53ba5"
  },
  {
    "url": "assets/js/74.21d325f3.js",
    "revision": "55fcc5aa6e06506841ccf88da8a66a1e"
  },
  {
    "url": "assets/js/75.5db4d81f.js",
    "revision": "89e9c17caf85aebc04200fedf8ea4bba"
  },
  {
    "url": "assets/js/76.f614fd28.js",
    "revision": "4d66beab0f3eb32ea25f5632492378ed"
  },
  {
    "url": "assets/js/77.5fb8fe74.js",
    "revision": "855d78f201ebf8878b4dd3e364c8295d"
  },
  {
    "url": "assets/js/78.cbf908d6.js",
    "revision": "be6fd6875c7ade6170f04af78bc45195"
  },
  {
    "url": "assets/js/79.16b13beb.js",
    "revision": "96be11d1e0d93be58a2e2ef563a32d0b"
  },
  {
    "url": "assets/js/8.1407b990.js",
    "revision": "dcb7a34e3667ce40091860e9cc38e5c2"
  },
  {
    "url": "assets/js/80.b7f99985.js",
    "revision": "1199f417dc4a0f4a4528eb859c426520"
  },
  {
    "url": "assets/js/81.c5c33a8c.js",
    "revision": "b8e7fa3344225408c74df4592b71c8fd"
  },
  {
    "url": "assets/js/82.1bb32711.js",
    "revision": "743e54d12be603d378db6df732557267"
  },
  {
    "url": "assets/js/83.0126cbfc.js",
    "revision": "e48c7dfd7199621ac0d0309e2ffaac20"
  },
  {
    "url": "assets/js/84.bf184586.js",
    "revision": "6b9ab5411048df3f1d410fd74dc5f55a"
  },
  {
    "url": "assets/js/85.ed882d02.js",
    "revision": "c250f8b58476019d594ecd3e8712a057"
  },
  {
    "url": "assets/js/86.00a6c023.js",
    "revision": "212726f173bcf689f9714c60a001ac1d"
  },
  {
    "url": "assets/js/87.19ec978b.js",
    "revision": "fa0b2b8573b2b89474ed5b81f1914238"
  },
  {
    "url": "assets/js/88.da0b0fce.js",
    "revision": "31fe5feb82f3540e0e7b6ad8bbe4a46e"
  },
  {
    "url": "assets/js/89.1b3f0dc7.js",
    "revision": "c1ac237efb27e0d7a6f55fd3b158cd9d"
  },
  {
    "url": "assets/js/9.7b6dd5b4.js",
    "revision": "f1ee1335cb73fc3af924d330037b0332"
  },
  {
    "url": "assets/js/90.5b446b43.js",
    "revision": "945ffcb106583521fc947e5639c35e96"
  },
  {
    "url": "assets/js/91.b7568648.js",
    "revision": "19af6fdf8601be0afbe3ff79bc0bfb3b"
  },
  {
    "url": "assets/js/92.41c96c2a.js",
    "revision": "e98ac5d891bbc2bca58a357c6d84f52a"
  },
  {
    "url": "assets/js/93.c88897c2.js",
    "revision": "c532deb19c8f47f3a28bea7511fd28a1"
  },
  {
    "url": "assets/js/94.1b8ca6ee.js",
    "revision": "7a92179f933c438c9f1b107b12a75a6b"
  },
  {
    "url": "assets/js/95.ad838784.js",
    "revision": "ea083522a1397bef0d15efaa0d028af2"
  },
  {
    "url": "assets/js/96.8d479f68.js",
    "revision": "7ff3c76307de3e3597f2360dd42bae22"
  },
  {
    "url": "assets/js/97.50826eb1.js",
    "revision": "c124e5bdb6cdfe842c6a93069c8c8cbe"
  },
  {
    "url": "assets/js/98.bdb338cb.js",
    "revision": "42887204661376b6cf6211445076e5d8"
  },
  {
    "url": "assets/js/99.4842effa.js",
    "revision": "2c27ff0402c20ac3df9f2ca9b4f22b91"
  },
  {
    "url": "assets/js/app.252ae38c.js",
    "revision": "78b45c5055af0047f1f7c3baad1f584d"
  },
  {
    "url": "assets/js/vendors~docsearch.e480d9b8.js",
    "revision": "a887f3139f3f8baba27c98087130d4d9"
  },
  {
    "url": "categories/index.html",
    "revision": "6e417bb8b3b697549d10c7fe954610cf"
  },
  {
    "url": "guide.html",
    "revision": "895285b3948144ea83178aa4fdf3f249"
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
    "revision": "620fd6eb41990aa5f25780c75fc15411"
  },
  {
    "url": "logo.png",
    "revision": "4e48730bd98de9f333e6bd14d62b6c7d"
  },
  {
    "url": "mcpstudy/ide-mcp-server.html",
    "revision": "294fa692142055f49c935cfeb582d009"
  },
  {
    "url": "mcpstudy/mcp-knowledge.html",
    "revision": "ae085df8dbc13d7bcedf974ed4fd04c6"
  },
  {
    "url": "mcpstudy/mcp-tool.html",
    "revision": "21b6fc5e6e0f0e6ad98f374817256d9a"
  },
  {
    "url": "modelstudy/11-29.html",
    "revision": "ec9e48f18091c6703034236046636f4d"
  },
  {
    "url": "modelstudy/123.html",
    "revision": "c27a582209dee31d8f603b709e1507e9"
  },
  {
    "url": "modelstudy/2025-11-04.html",
    "revision": "dc5d8765a4285e48587a46182da8759c"
  },
  {
    "url": "modelstudy/25-12-01.html",
    "revision": "e48193c7e9e214fbb2a27e2be2697ffc"
  },
  {
    "url": "modelstudy/666-多模态.html",
    "revision": "e8c3c3dfdcf1ae0320ab37fac56fbb13"
  },
  {
    "url": "modelstudy/agent.html",
    "revision": "e8559de3eea73975b19f9a16342df169"
  },
  {
    "url": "modelstudy/auto-model-desc.html",
    "revision": "446cbd61d63ab81677f3cce00af88b21"
  },
  {
    "url": "modelstudy/basic-aigc.html",
    "revision": "6da7b170ac13c0a31a49dd9dad67af66"
  },
  {
    "url": "modelstudy/basic-knowledge.html",
    "revision": "d74909ccaeace33d9d43c1deb90b8769"
  },
  {
    "url": "modelstudy/compute-metrics.html",
    "revision": "26913ab6bdd1ba2f81e20b110c14743e"
  },
  {
    "url": "modelstudy/construct-dataset.html",
    "revision": "9449d4d641df69c82bad8cfb636dd81e"
  },
  {
    "url": "modelstudy/data-chunk.html",
    "revision": "3d2349585d7389f4bd1f3976c4ee4a8d"
  },
  {
    "url": "modelstudy/deep-learning.html",
    "revision": "7888aad1d169cb3bb13e1e273dad6963"
  },
  {
    "url": "modelstudy/deepseek-search.html",
    "revision": "5d270739e2cb469e16d8f3249324921c"
  },
  {
    "url": "modelstudy/extended-learning.html",
    "revision": "c3ec30485fbd63e2a058fa6f2b5ee5c4"
  },
  {
    "url": "modelstudy/finetuing-step5.html",
    "revision": "638d3f76f3f4c30bfff1f400702c1909"
  },
  {
    "url": "modelstudy/finetuing-step9.html",
    "revision": "04adbb4753a458ea09e227bcf722347a"
  },
  {
    "url": "modelstudy/finetuning-error-collect.html",
    "revision": "a1cc45ae19a6584520e1f052feb236b7"
  },
  {
    "url": "modelstudy/finetuning-exercises-code.html",
    "revision": "8bd6e760d84eb2e3099c9fe17b0d65f0"
  },
  {
    "url": "modelstudy/finetuning-f1-scores.html",
    "revision": "f2d8acef0369cbbbc36395af5b558f1d"
  },
  {
    "url": "modelstudy/finetuning-warn-collect.html",
    "revision": "9e401d87629ea3d60b3008eb5fd59468"
  },
  {
    "url": "modelstudy/first-model-project.html",
    "revision": "f81de3b815f3984347eabfb7f5faec8d"
  },
  {
    "url": "modelstudy/function-calling.html",
    "revision": "2ce1e68732b58ce8d8212eb880d312a3"
  },
  {
    "url": "modelstudy/impl-transformer.html",
    "revision": "c1b8e4b709726e92c9bd2a8e291a877b"
  },
  {
    "url": "modelstudy/langchain-agent-practice.html",
    "revision": "40dc413a97fcc06030d898a71ab01027"
  },
  {
    "url": "modelstudy/langchain-prompt.html",
    "revision": "6817b24305406032996624c7268e2c3a"
  },
  {
    "url": "modelstudy/langchain-study.html",
    "revision": "ee5cc958aeeff7b8cfb7a2142e5e8f24"
  },
  {
    "url": "modelstudy/llms_generation_optimization copy.html",
    "revision": "581e64acfe706442c5c52d65d95b23e1"
  },
  {
    "url": "modelstudy/llms_generation_optimization.html",
    "revision": "6703e505a8df9727cc60091b0a0564cd"
  },
  {
    "url": "modelstudy/lm_eval.html",
    "revision": "710f086784ab2bc2a4fc1bf8f1661d2d"
  },
  {
    "url": "modelstudy/lora-fine-tuning.html",
    "revision": "ebfd57d9a5b1b947b81e290216cb9b84"
  },
  {
    "url": "modelstudy/mianshi.html",
    "revision": "a042348121efce1e0828ee8055e955bd"
  },
  {
    "url": "modelstudy/model-basic.html",
    "revision": "d5316bc54c7794a15e9c018fc7da5750"
  },
  {
    "url": "modelstudy/model-case.html",
    "revision": "469658a0bb74ef3daecc3386f07261cc"
  },
  {
    "url": "modelstudy/model-deploy.html",
    "revision": "fd930bd773ea6cb13ea9255df89dbd2a"
  },
  {
    "url": "modelstudy/model-english.html",
    "revision": "88d4a3f9c49794995792080367a45d22"
  },
  {
    "url": "modelstudy/model-evaluate.html",
    "revision": "777482721e210f28e0274f1689ba4581"
  },
  {
    "url": "modelstudy/model-fine-tuning.html",
    "revision": "0f00f29d8237c60fada5e3cd62bc8715"
  },
  {
    "url": "modelstudy/model-function-calling.html",
    "revision": "54baffb2cb5bd44459d3582683b84923"
  },
  {
    "url": "modelstudy/model-langchain-rag.html",
    "revision": "72218452625ffbfd9c5e2de24cc11fd8"
  },
  {
    "url": "modelstudy/model-langchain.html",
    "revision": "d2ae0e09c88fb37ed07f2bf03c6161cf"
  },
  {
    "url": "modelstudy/model-optimize.html",
    "revision": "97903cacced440a5f5379740345d3e29"
  },
  {
    "url": "modelstudy/model-pytorch.html",
    "revision": "8931b8c0b1a921c162cc2b4271e9b90f"
  },
  {
    "url": "modelstudy/model-quantization.html",
    "revision": "f20d1825580b92825f31206d781bc471"
  },
  {
    "url": "modelstudy/model-question.html",
    "revision": "78ddcc5df03eb16622d5958be134fc89"
  },
  {
    "url": "modelstudy/model-rag-pain.html",
    "revision": "40bbac0736638b18cd40d309749ab129"
  },
  {
    "url": "modelstudy/model-rag.html",
    "revision": "e820241255f2f01024747b09e1eabfaf"
  },
  {
    "url": "modelstudy/model-RNN.html",
    "revision": "3e7b4b19f757c7cfb352a46ace52ba3d"
  },
  {
    "url": "modelstudy/model-summary.html",
    "revision": "282c6f278307f30e772b492a0e8e9345"
  },
  {
    "url": "modelstudy/model-train-analyze.html",
    "revision": "beb870674586d5155cad76032f6aa242"
  },
  {
    "url": "modelstudy/model-train-code.html",
    "revision": "3b6ab153628b5d6e25de7404a53c05aa"
  },
  {
    "url": "modelstudy/model-train-process.html",
    "revision": "01fcb0fab917490e85bbff3c730e93d5"
  },
  {
    "url": "modelstudy/model-train.html",
    "revision": "9b875f67f4f3c8092b0723a5cf39d9f7"
  },
  {
    "url": "modelstudy/model-transformer.html",
    "revision": "3182068435f2a671b6bcf40cf51f59d3"
  },
  {
    "url": "modelstudy/model.html",
    "revision": "db9010039a46ef1507b29d40663cf4e4"
  },
  {
    "url": "modelstudy/multi-chat.html",
    "revision": "94afc69fca9186957dc689f1a79121e8"
  },
  {
    "url": "modelstudy/ner-instruct-task.html",
    "revision": "14b987db49d7e4c3007ec10fb61ac23b"
  },
  {
    "url": "modelstudy/peft.html",
    "revision": "e83f5c07f9d392a6cde6ece7ff75b52e"
  },
  {
    "url": "modelstudy/project-study.html",
    "revision": "bc7c2cca6ad2dfc624097c9b031ee9a2"
  },
  {
    "url": "modelstudy/prompts.html",
    "revision": "462072fe3f61811fd251127b72f72a6b"
  },
  {
    "url": "modelstudy/quantization.html",
    "revision": "41536622ad9c18a46e29482d37b07158"
  },
  {
    "url": "modelstudy/question-bank.html",
    "revision": "2cbdfd0fcbc16c430ceca9e9a752fdf6"
  },
  {
    "url": "modelstudy/rag-eval.html",
    "revision": "a6ddc816b753e4400cbbfad9e560dc77"
  },
  {
    "url": "modelstudy/rag-react.html",
    "revision": "c4006567e41a725f1ddb745e30f221f0"
  },
  {
    "url": "modelstudy/rag.html",
    "revision": "bd1b0873133a2015c28d200ee69c2daf"
  },
  {
    "url": "modelstudy/rl.html",
    "revision": "16a88632f76ff2fd01e8d27f813f0c90"
  },
  {
    "url": "modelstudy/self-function-calling.html",
    "revision": "05380e064f2582338ddfa4ee0656b078"
  },
  {
    "url": "modelstudy/stage-four-chatbot.html",
    "revision": "6c20f78dbcfc92417d5aea7f797a80d7"
  },
  {
    "url": "modelstudy/temp.html",
    "revision": "e1572f4976ee490dc0f53c44d629dbc9"
  },
  {
    "url": "modelstudy/temp2.html",
    "revision": "9cdf78ff3dcbe310e15f827fda151366"
  },
  {
    "url": "modelstudy/transformer-basic.html",
    "revision": "76601adafa0bf5d6c9c16d8b73a73c97"
  },
  {
    "url": "modelstudy/transformer-code.html",
    "revision": "4a8409118a92816aacee18c3b853f307"
  },
  {
    "url": "modelstudy/transformer-knowledge.html",
    "revision": "014764c2b1c4ae80ac326038455d8977"
  },
  {
    "url": "modelstudy/transformer-learn.html",
    "revision": "194410b6c341c1e8168a55db91ba6ea6"
  },
  {
    "url": "modelstudy/transformer-question.html",
    "revision": "2559073b0370dac7e758b1361230de5c"
  },
  {
    "url": "modelstudy/transformer-related.html",
    "revision": "cd9258eef8c44329f6b73bc60cd89e56"
  },
  {
    "url": "modelstudy/vector-database.html",
    "revision": "09c25ee11126e6bf3877b2fb2e402e56"
  },
  {
    "url": "modelstudy/vLLM-intro.html",
    "revision": "4923513332b466c90a9c53a7265362bf"
  },
  {
    "url": "modelstudy/whatIsModel.html",
    "revision": "09b70204341f43de4f43dfc837015980"
  },
  {
    "url": "other/ai-agent.html",
    "revision": "11f7ba7f3ed4709967934e8fffce469c"
  },
  {
    "url": "other/conda.html",
    "revision": "8f3bb021bf2ae38c5fb3638a44b35d2e"
  },
  {
    "url": "other/excellentarticles.html",
    "revision": "9c3810e40ecfcd36bff7a63a99a194c3"
  },
  {
    "url": "other/fine-tuning-adapters.html",
    "revision": "ddfb074ffe3d9151e1c8fc6a7ef948bd"
  },
  {
    "url": "other/git-operate.html",
    "revision": "43e7c8d86ad3cfc34fdc0bb87eccdc69"
  },
  {
    "url": "other/lora-0-1.html",
    "revision": "88c919f86dc9d7bf31674bf88b8e1f4f"
  },
  {
    "url": "other/model-refrence.html",
    "revision": "002d736f9dc3a2fe6552dd461e5cd2a0"
  },
  {
    "url": "other/python.html",
    "revision": "0be6d19d949e020c734415107ff9ce8a"
  },
  {
    "url": "other/pytorch-know.html",
    "revision": "3fbfe0aae0ad4ffddabc211b06daca99"
  },
  {
    "url": "other/rag-question-compare.html",
    "revision": "2b8840afcb5f6bcfcd758c4f91e98546"
  },
  {
    "url": "other/resume.html",
    "revision": "4545930f5cab02495a0c38ed6b91c7d2"
  },
  {
    "url": "other/swanLab-info.html",
    "revision": "18d1bc24dd953d2f41843d7692d7d896"
  },
  {
    "url": "other/transformer-1.html",
    "revision": "67a946fe01d6e9fb9feba571d45916b3"
  },
  {
    "url": "other/transformer-2.html",
    "revision": "289f7f7d10ddf471319bec3983fc7a82"
  },
  {
    "url": "other/transformer-3.html",
    "revision": "724521395ec6323acaa5ecafa7034503"
  },
  {
    "url": "other/transformer-collect.html",
    "revision": "a3f269145738537e3ac348ac3e50dc12"
  },
  {
    "url": "other/transformer-learn.html",
    "revision": "8d0312eb4d27e819eb89f05aece1044d"
  },
  {
    "url": "other/using-packages.html",
    "revision": "5c539d7a4b03af629ab9a6f8c2ed4046"
  },
  {
    "url": "pystudy/array-operation.html",
    "revision": "8ab7fcb6e69f6fbe5bb7bebcb8313e08"
  },
  {
    "url": "pystudy/basic.html",
    "revision": "cb99c0e5e2536a688806df37462fc85e"
  },
  {
    "url": "pystudy/builtin-function.html",
    "revision": "d30e86c559d43cee32d1974a4c64d8d8"
  },
  {
    "url": "pystudy/class.html",
    "revision": "ac210a5e905f036be61b84c4054dc953"
  },
  {
    "url": "pystudy/data-structure.html",
    "revision": "d154f3066ebde1ec003648443426659a"
  },
  {
    "url": "pystudy/database.html",
    "revision": "c9c6171d439842bf3b20eadef1d22c0d"
  },
  {
    "url": "pystudy/exception.html",
    "revision": "e72e16ff0cfd23b76a749a2e94932aa5"
  },
  {
    "url": "pystudy/file.html",
    "revision": "0fda338c0333e14697ed8319b1076616"
  },
  {
    "url": "pystudy/function.html",
    "revision": "cd378a5dbe924e6a4f9faaef12793c00"
  },
  {
    "url": "pystudy/line-continue.html",
    "revision": "0694e60605e313dad2cc70555dba26d7"
  },
  {
    "url": "pystudy/module.html",
    "revision": "5343e0416a078ec293a853c16d14374b"
  },
  {
    "url": "pystudy/network.html",
    "revision": "6ebfc93cbfa91b2bbebe6fac25252d23"
  },
  {
    "url": "pystudy/numpy.html",
    "revision": "7264a673b571a01fe14925f0ab925abe"
  },
  {
    "url": "pystudy/other.html",
    "revision": "1f80c4ffcb6944eb3d89254788845275"
  },
  {
    "url": "pystudy/package.html",
    "revision": "42a265fd70d49d062f631f944e316da4"
  },
  {
    "url": "pystudy/pandas-study.html",
    "revision": "218fc523a0e90a48f497cc5ffe5306bf"
  },
  {
    "url": "pystudy/practice.html",
    "revision": "e1c44f08b191a1c599ef7e16a2b1f452"
  },
  {
    "url": "pystudy/process.html",
    "revision": "a3e901de4dcec1fe6bf958527de1bfad"
  },
  {
    "url": "pystudy/python-collect.html",
    "revision": "76a4e0f663748a62e490f6db7d32f9f9"
  },
  {
    "url": "pystudy/python-evaluation.html",
    "revision": "77bc511ad52eefd648ad19c485273f95"
  },
  {
    "url": "pystudy/python-important.html",
    "revision": "df0303abba003e58b6ba758e06906fc8"
  },
  {
    "url": "pystudy/python-web.html",
    "revision": "34a93f2c1fd8276f9de7ae5d540013f8"
  },
  {
    "url": "pystudy/regex.html",
    "revision": "70b71c9757af18630481eff178f41c88"
  },
  {
    "url": "pystudy/string-function.html",
    "revision": "a533008d6edeadb0ae8bf45311672b12"
  },
  {
    "url": "pystudy/technology-point.html",
    "revision": "d7583e161ddadbe7fbc27ef10f8af412"
  },
  {
    "url": "pystudy/thread.html",
    "revision": "54b562390c5c5937fb7bbb493bd796f6"
  },
  {
    "url": "pystudy/use-library.html",
    "revision": "6e9537e5121a26796d221b8a318ca43b"
  },
  {
    "url": "pystudy/use-pip-install.html",
    "revision": "d183bdb94ed7615d074598fd5de61c51"
  },
  {
    "url": "react/react-advanced.html",
    "revision": "39062f316a4818730e154f60ea72e8f9"
  },
  {
    "url": "react/react-basic.html",
    "revision": "553a02f040a9ad10dc8138edadfea903"
  },
  {
    "url": "react/react-context.html",
    "revision": "bdacaecc69625eaa576902d49af0cf0e"
  },
  {
    "url": "react/react-relation.html",
    "revision": "050c4e4f2ac767619396b94ac660a75e"
  },
  {
    "url": "react/ssr.html",
    "revision": "6c2b094bde8afe56b5c15dfea068e68b"
  },
  {
    "url": "react/status-manage.html",
    "revision": "c0c85ee68e28f3827814fbf1996df39e"
  },
  {
    "url": "reactnative/reactnative-desc.html",
    "revision": "29d55842e830c825f48fac7807b5c8a2"
  },
  {
    "url": "reactnative/reactnative.html",
    "revision": "c95ab402d23543732bcd415922275e90"
  },
  {
    "url": "reactnative/rn-problem.html",
    "revision": "7b56a67b072eb8426d110fba65d4365e"
  },
  {
    "url": "tag/index.html",
    "revision": "8c35da0cb8b9f075b71983c1878c1147"
  },
  {
    "url": "tag/react/index.html",
    "revision": "8474330c0dbd25d24b1c887351f6d8d8"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "cc4422a6bda932f631782aa03c7d2dfa"
  },
  {
    "url": "tag/二叉树/index.html",
    "revision": "0168446468f93cf2547a3dff6901bf84"
  },
  {
    "url": "timeline/index.html",
    "revision": "9bbe8c6255aee3e81988ff66d272887f"
  },
  {
    "url": "vue/basicknowledge.html",
    "revision": "8434410f14c09a5f3ae1f5443075082f"
  },
  {
    "url": "vue/compare.html",
    "revision": "e6ee1886a4b4e4e8ce60fe4f330e5047"
  },
  {
    "url": "vue/misnotes.html",
    "revision": "60448903fd949b28712150b058a8e5c7"
  },
  {
    "url": "vue/ssr.html",
    "revision": "37ee3ab55281229ceb6afe66e5cf1203"
  },
  {
    "url": "vue/vue-attrs-listeners.html",
    "revision": "de895967ddd2ad49eae8314fbec807d8"
  },
  {
    "url": "vue/vue-principle.html",
    "revision": "b2d19b6ccb89f6d59a297d6bb2492c6d"
  },
  {
    "url": "vue/vue-router.html",
    "revision": "84cdc500c620f3c7d897b7bd09e0d799"
  },
  {
    "url": "vue/vue-status.html",
    "revision": "105d09cf93011a21ddd7884dfe2d1437"
  },
  {
    "url": "vue/vue3-basic.html",
    "revision": "254a6ab5a0f8f5a965de39023c4d8b5e"
  },
  {
    "url": "vue/vue3-impl.html",
    "revision": "6799d0856d518e83f33b56836a63b4ce"
  },
  {
    "url": "vue/vue3.html",
    "revision": "0811cbdc9fd942298ce01f31e5a31767"
  },
  {
    "url": "vue/vuex.html",
    "revision": "a1fb2acdeb39a93cd2018635a1825181"
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
