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
    "revision": "4e4c300359655b4bb74816552cf6592f"
  },
  {
    "url": "algorithm/666.html",
    "revision": "f9745ac95ee11b5764d579ea2e22aa87"
  },
  {
    "url": "algorithm/algo-temp.html",
    "revision": "10085956c3945fa86fef114c5ae76d34"
  },
  {
    "url": "algorithm/binary-search.html",
    "revision": "f34994418d398f5e114b23c9900153d7"
  },
  {
    "url": "algorithm/binary-tree.html",
    "revision": "c33bac965500c200d12acb63a1757372"
  },
  {
    "url": "algorithm/compare-al.html",
    "revision": "185021a1f3d30937588a8f23183bea3a"
  },
  {
    "url": "algorithm/del-single-list-2.html",
    "revision": "fe3a5f68f5bc39fdaf37ede6c1e8a63c"
  },
  {
    "url": "algorithm/del-single-list.html",
    "revision": "ceb9154af67164d1629609d44c0523eb"
  },
  {
    "url": "algorithm/double-pointer.html",
    "revision": "41194a5791e7124ee8aa3ef40990da17"
  },
  {
    "url": "algorithm/dynamic-plan.html",
    "revision": "3358449c2c5630cb984ef1cec22447a0"
  },
  {
    "url": "algorithm/effect-bracket.html",
    "revision": "28424d4076c706a946f51013b6ef6934"
  },
  {
    "url": "algorithm/greedy.html",
    "revision": "ded29db1f8ff6d74acf9f0307919549d"
  },
  {
    "url": "algorithm/longasc-sequence.html",
    "revision": "2df7a71590be1b1b3b775959228ed9f3"
  },
  {
    "url": "algorithm/other.html",
    "revision": "58c1f1e422a6b469fcffdf403230ce86"
  },
  {
    "url": "algorithm/receive-rain.html",
    "revision": "d472645633f8e4bdcc66033bfdd2fb97"
  },
  {
    "url": "algorithm/reverse-list.html",
    "revision": "ee862965a781758a3281d2803a2fb29c"
  },
  {
    "url": "algorithm/sort copy.html",
    "revision": "9a61cdb220f0dbde90403da188ade79b"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "cbb3a209bbeed5d74e870bb8de8a8f4a"
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
    "url": "assets/js/100.611dc281.js",
    "revision": "cffbe872a8dae9f894c683cadca0014f"
  },
  {
    "url": "assets/js/101.b18d16d7.js",
    "revision": "8fb8130fd1b2bfd3cd37248a038898f5"
  },
  {
    "url": "assets/js/102.eeae3640.js",
    "revision": "b0376f013751cf5f05a3f85cd9f1f41f"
  },
  {
    "url": "assets/js/103.45f2be6d.js",
    "revision": "6f107094c3b675d7661516dada34fb43"
  },
  {
    "url": "assets/js/104.62e81142.js",
    "revision": "16cb6948bfdd54a4c373c9a5f091bffa"
  },
  {
    "url": "assets/js/105.a852fed7.js",
    "revision": "e6f832b39f8537176c85edaa8f9aae09"
  },
  {
    "url": "assets/js/106.1b543a69.js",
    "revision": "a396015453f79678128ead38ae20b1b0"
  },
  {
    "url": "assets/js/107.84863f03.js",
    "revision": "d64d835ee672e61044ce1090c1ec793e"
  },
  {
    "url": "assets/js/108.d4951ce0.js",
    "revision": "35963c373ed46724f9e4581b944838be"
  },
  {
    "url": "assets/js/109.5509452e.js",
    "revision": "39620b10f6729c3b912505e289377375"
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
    "url": "assets/js/111.a27b0fd5.js",
    "revision": "8431e5d2c7608d8429657e1325398a3c"
  },
  {
    "url": "assets/js/112.15abd6c0.js",
    "revision": "b60a79c3ad73e1ed827f3c5dbd0aa2bf"
  },
  {
    "url": "assets/js/113.3fa5c9d1.js",
    "revision": "f929490f07b326b198a8decc30e8b734"
  },
  {
    "url": "assets/js/114.63ff0b3d.js",
    "revision": "69e5d76ed7c5d9ef416e13749153f7b3"
  },
  {
    "url": "assets/js/115.192dbe09.js",
    "revision": "e05b1d79ee2d867c2c29d750d7b67fc2"
  },
  {
    "url": "assets/js/116.0ebfd5f1.js",
    "revision": "b321e1450bc3f766ed617793f67deb90"
  },
  {
    "url": "assets/js/117.50aa2803.js",
    "revision": "6650d9dfc08dea16a96ad239bef45e76"
  },
  {
    "url": "assets/js/118.b29f3d6e.js",
    "revision": "731fe3527e9a63a0538e3be0ebe8e4c2"
  },
  {
    "url": "assets/js/119.390dc50b.js",
    "revision": "de4e95eedf4a4fc6f34591e86bec2f05"
  },
  {
    "url": "assets/js/120.465af5ba.js",
    "revision": "2502b7e20090ded185a594c635c84b85"
  },
  {
    "url": "assets/js/121.81f85049.js",
    "revision": "c4045e46ade14024b9fefbcbc300c214"
  },
  {
    "url": "assets/js/122.3bac1883.js",
    "revision": "2619f1dc9e06c42836c90b3830f25499"
  },
  {
    "url": "assets/js/123.7b4dde7d.js",
    "revision": "8e1a65cd5e0eadd439ca9f23456a37a8"
  },
  {
    "url": "assets/js/124.9bc569ea.js",
    "revision": "dd799f7c667173dcac250943f5835d23"
  },
  {
    "url": "assets/js/125.98ab869d.js",
    "revision": "314328c3bf02f32efb2fd91ee5384def"
  },
  {
    "url": "assets/js/126.ec44f112.js",
    "revision": "d51e07f01f6d3d08d62e52e04e50e47b"
  },
  {
    "url": "assets/js/127.d686d655.js",
    "revision": "65642ee50dd59e2c1f88f10b2acba09b"
  },
  {
    "url": "assets/js/128.8b7f669b.js",
    "revision": "8e2b02883f82de09790dbbe606aa2052"
  },
  {
    "url": "assets/js/129.2738ab0c.js",
    "revision": "98b2b1ef7e85681ba97d4ed8317d6969"
  },
  {
    "url": "assets/js/130.15b6889b.js",
    "revision": "be23da6ec3153e4e637c7ffdb67e5e2d"
  },
  {
    "url": "assets/js/131.21785c78.js",
    "revision": "b65b5ec800354a8925795ec121dc7136"
  },
  {
    "url": "assets/js/132.416369ca.js",
    "revision": "bb8291a7ef82edaa58416226a55fbd8e"
  },
  {
    "url": "assets/js/133.842f5ac4.js",
    "revision": "2efe5f44b7e22b10ca0178193f062346"
  },
  {
    "url": "assets/js/134.2f2c3646.js",
    "revision": "7db91dbb6753583b475cf0e9dc4a5b1a"
  },
  {
    "url": "assets/js/135.2834ba3c.js",
    "revision": "92206c52685e90ab3d0323dcc50e2700"
  },
  {
    "url": "assets/js/136.c66ac53a.js",
    "revision": "7bd4f77da16fda6ab08a357b27591e6b"
  },
  {
    "url": "assets/js/137.6b8f99e3.js",
    "revision": "d430868ed69f5fe8221fa7bc47b79651"
  },
  {
    "url": "assets/js/138.a50196db.js",
    "revision": "b49705b6d5ef3ba552ef45b462c3d34b"
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
    "url": "assets/js/140.a0f63f55.js",
    "revision": "825f57b51630bd0be8cfc05e469ea492"
  },
  {
    "url": "assets/js/141.f86f9582.js",
    "revision": "b4f6159761b8c3cf047b8511926331e4"
  },
  {
    "url": "assets/js/142.ab677270.js",
    "revision": "9041e32de633b5104450296c77bc6e5f"
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
    "url": "assets/js/145.013734ed.js",
    "revision": "b3ed421b80958a3793ea73824b6e8117"
  },
  {
    "url": "assets/js/146.53790c2f.js",
    "revision": "01121faeff44cd50667cbc62bb7afdff"
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
    "url": "assets/js/149.1903746e.js",
    "revision": "b7858ccf571c1941fda1cf77d75b35dc"
  },
  {
    "url": "assets/js/15.2cac15c3.js",
    "revision": "688079c52f80af83336ee63d8b5680a1"
  },
  {
    "url": "assets/js/150.2dc034c6.js",
    "revision": "72666e9404d4fdcb1764f6daa968988c"
  },
  {
    "url": "assets/js/151.b2abf121.js",
    "revision": "2ef1d078afd4cefc30ebec46bc472e4f"
  },
  {
    "url": "assets/js/152.af952472.js",
    "revision": "849c02aaf76fb4a268c095562605faa9"
  },
  {
    "url": "assets/js/153.ce5af63b.js",
    "revision": "6931551aa5f30a404c952522e6729ea0"
  },
  {
    "url": "assets/js/154.1f51d4cf.js",
    "revision": "7d180337072d15b78eabc8aa12ab8b27"
  },
  {
    "url": "assets/js/155.5fd7f52f.js",
    "revision": "a67ca8ecd02cd8bc894cc1d527af783b"
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
    "url": "assets/js/159.1c4e5831.js",
    "revision": "e879afcfa83f3a115ec66ebcc8ee5e02"
  },
  {
    "url": "assets/js/16.41c97ec9.js",
    "revision": "93d14d23f5306cdccf9cc340e18c5164"
  },
  {
    "url": "assets/js/160.503c8bf0.js",
    "revision": "8bb79320f720afa128ecd1e004827a32"
  },
  {
    "url": "assets/js/161.0a02e80f.js",
    "revision": "c49ed271069e0e37cd4272cbbae69341"
  },
  {
    "url": "assets/js/162.9fbcaad7.js",
    "revision": "bf6dca070dd4dea9b0cdcb9fabd7fa6f"
  },
  {
    "url": "assets/js/163.c448b3b7.js",
    "revision": "554c57b995b0ea05d78c25d9abc74d3f"
  },
  {
    "url": "assets/js/164.cfea5bc1.js",
    "revision": "7ba003bdd36215e9cf2eef9223c8417e"
  },
  {
    "url": "assets/js/165.135783cc.js",
    "revision": "b557377ab85345f4c266df38b9f25dfa"
  },
  {
    "url": "assets/js/166.5e7ef9e2.js",
    "revision": "af0e9533f818dc78f62d91a3354810d4"
  },
  {
    "url": "assets/js/167.0b76c932.js",
    "revision": "91fcd89e4c3ac4b611889f667b4a87f0"
  },
  {
    "url": "assets/js/168.36a81da6.js",
    "revision": "62657fa9da283aeed16721c2c05eccb7"
  },
  {
    "url": "assets/js/169.7d65cf66.js",
    "revision": "5277ec99e0b74058cd3b95652bf34a1a"
  },
  {
    "url": "assets/js/17.29a60e10.js",
    "revision": "c12cab21b0e58f47d805749f1a837598"
  },
  {
    "url": "assets/js/170.25d054dd.js",
    "revision": "5be9800a4c92f7b14309466d3caaf225"
  },
  {
    "url": "assets/js/171.a4fef6db.js",
    "revision": "f8b7a69c988a49296886092d0924226e"
  },
  {
    "url": "assets/js/172.cb7dd928.js",
    "revision": "65000613eb1ede14e16573a556dea40b"
  },
  {
    "url": "assets/js/173.69c0f410.js",
    "revision": "31ff428fab18fde4360e47cd714ddab4"
  },
  {
    "url": "assets/js/174.fdb957fe.js",
    "revision": "53a104a895edd2ea39653360891d67a0"
  },
  {
    "url": "assets/js/175.e9d15b95.js",
    "revision": "a2af4695ab9349c1bf70b7dfe6991cda"
  },
  {
    "url": "assets/js/176.384b8718.js",
    "revision": "c40083f45f155bd51ca50ddfde0bd746"
  },
  {
    "url": "assets/js/177.b25f671c.js",
    "revision": "a9c03f43bc91c2145a60544fd082f42f"
  },
  {
    "url": "assets/js/178.ad0b2f50.js",
    "revision": "2ef88da2abeeff8f405261cff591a037"
  },
  {
    "url": "assets/js/179.ce449f58.js",
    "revision": "0b2000914d38634ecd78e6adeeaa92a1"
  },
  {
    "url": "assets/js/18.27fd2b83.js",
    "revision": "bd9d5b805bca2ffea52562e712745e52"
  },
  {
    "url": "assets/js/180.75477869.js",
    "revision": "d239f9154bf9042856a20930165b6ca5"
  },
  {
    "url": "assets/js/181.2cbdcb08.js",
    "revision": "cbcedf6836c4b38b8e078fdba3d34cdb"
  },
  {
    "url": "assets/js/182.dc1b2d3a.js",
    "revision": "b6fbd2430165feb463bad992d6123f05"
  },
  {
    "url": "assets/js/183.fa579967.js",
    "revision": "f97ea9c8ea7bbd9034c8575eb93ebddf"
  },
  {
    "url": "assets/js/184.9184d56c.js",
    "revision": "666e8c1acc85806b0f7b9e0c67736de6"
  },
  {
    "url": "assets/js/185.1f618787.js",
    "revision": "a97df2561284c0a15783b720b3bf6989"
  },
  {
    "url": "assets/js/186.d825af85.js",
    "revision": "a739472fbc961f2704d79fadb86d94ea"
  },
  {
    "url": "assets/js/187.46138407.js",
    "revision": "47c5384a5b9f486c137d11047ee93a0a"
  },
  {
    "url": "assets/js/188.432a2a86.js",
    "revision": "aad230e5cbb8fa606bdf78dfdc13eab3"
  },
  {
    "url": "assets/js/189.57543582.js",
    "revision": "58ea61a8d7c1c1bf75841dd481cfa4ba"
  },
  {
    "url": "assets/js/19.e7351a57.js",
    "revision": "497c4fe1210b978757c125312c8c95af"
  },
  {
    "url": "assets/js/190.80e173f8.js",
    "revision": "81a71af48b345d975d1a23454279d52d"
  },
  {
    "url": "assets/js/191.ef43dc96.js",
    "revision": "c9fec4bb2b6d0dc3dbe2682a3ec511d9"
  },
  {
    "url": "assets/js/192.20ea80b7.js",
    "revision": "5c74dc18d36193e4e068c45239d52aec"
  },
  {
    "url": "assets/js/193.8a4713a1.js",
    "revision": "dfc330923622f12ef419f292d276edd9"
  },
  {
    "url": "assets/js/194.be9f51f6.js",
    "revision": "27c8960761e394c948920caca540844b"
  },
  {
    "url": "assets/js/195.ddaca327.js",
    "revision": "46ff6f4a4647c598024ba4540e097cf2"
  },
  {
    "url": "assets/js/196.920402ff.js",
    "revision": "3139c2d67403baa9e5e8e5ebd0bfbf8c"
  },
  {
    "url": "assets/js/197.52a183d0.js",
    "revision": "71cebae94bebb8eabf1ecc3d5db3ce18"
  },
  {
    "url": "assets/js/198.704f991c.js",
    "revision": "4266383d7fc5704ee98ddf0e3ba0cb18"
  },
  {
    "url": "assets/js/199.d1ae783a.js",
    "revision": "7e7ad2db31a5627bb03bb8271031934e"
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
    "url": "assets/js/200.d9473b17.js",
    "revision": "63ceba87a4874d0748846f3fce928133"
  },
  {
    "url": "assets/js/201.0e9eedff.js",
    "revision": "ad497cc408c813d4ae754fcec4f59288"
  },
  {
    "url": "assets/js/202.52347d74.js",
    "revision": "e5066a7c61ea6e72a0515abf4cd7f77b"
  },
  {
    "url": "assets/js/203.fc42e8f2.js",
    "revision": "c4b35ba7d2ba65619385fc0ce2f73c60"
  },
  {
    "url": "assets/js/204.6c5e3ddd.js",
    "revision": "bc5b40a45c1449debc19560f72623449"
  },
  {
    "url": "assets/js/205.dff83873.js",
    "revision": "00c1a561b9c9b66dd7a1385b79bb5511"
  },
  {
    "url": "assets/js/206.b4ea9c54.js",
    "revision": "6bbe472557a01fd35cbf3d7824ff1b34"
  },
  {
    "url": "assets/js/207.3a47c7a0.js",
    "revision": "47e3c94c653c765977610ef11ec9eb16"
  },
  {
    "url": "assets/js/208.86b73a3b.js",
    "revision": "5e325f8b1d20dc0c7441aa885d0c69ae"
  },
  {
    "url": "assets/js/209.8523c4ab.js",
    "revision": "24eb2d82e87b8c4e442e8e6668d922ff"
  },
  {
    "url": "assets/js/21.0feb36e8.js",
    "revision": "a8d15496e383de00a8b45e5413dafbf5"
  },
  {
    "url": "assets/js/210.61cc6aac.js",
    "revision": "c933370ff3f944b31ad756620517dabd"
  },
  {
    "url": "assets/js/211.be02b242.js",
    "revision": "4d74811e1d6598bffb36356b25cd41e2"
  },
  {
    "url": "assets/js/212.20f1f37c.js",
    "revision": "f9c4ccf041cf23834fec6a65dc5ae42d"
  },
  {
    "url": "assets/js/213.dc4be699.js",
    "revision": "17a973216edf76b7aaaec86bab8631f0"
  },
  {
    "url": "assets/js/214.dd533303.js",
    "revision": "eccc1dbb8523c0c15660252e3a72585b"
  },
  {
    "url": "assets/js/215.00d62229.js",
    "revision": "ffa887d744f4e7e4596d45e65ff88f0e"
  },
  {
    "url": "assets/js/216.ae252303.js",
    "revision": "b6726f84899efc20769626803c1e4b5d"
  },
  {
    "url": "assets/js/217.0bd75dff.js",
    "revision": "3643a925a75b10d96b5f78fef4cc6dad"
  },
  {
    "url": "assets/js/218.343d1ccc.js",
    "revision": "afcda5c0b144d6d231448cc50bf4bb5a"
  },
  {
    "url": "assets/js/219.eef195de.js",
    "revision": "9c4841f3110462c49b0eab572bf87add"
  },
  {
    "url": "assets/js/22.40bc0c74.js",
    "revision": "c70f295257910e3ed1383305928ec583"
  },
  {
    "url": "assets/js/220.c58e6da1.js",
    "revision": "f55d6c20e3a271778c351c0b6ea3c14b"
  },
  {
    "url": "assets/js/221.350d3a12.js",
    "revision": "3f2633ba8e729faa3bf7af4b3f9018b7"
  },
  {
    "url": "assets/js/222.3426e4f1.js",
    "revision": "e20b70664f97a57ffb1c7c7036fe20e3"
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
    "url": "assets/js/43.f23fd5b5.js",
    "revision": "05bc602ff76440e123d918441a15a1fa"
  },
  {
    "url": "assets/js/44.f4802bc7.js",
    "revision": "8f4c38ebf21e09d070486b76734aabec"
  },
  {
    "url": "assets/js/45.5546d318.js",
    "revision": "5e0363976f5762aedfb8c76a4c66e020"
  },
  {
    "url": "assets/js/46.d907cc70.js",
    "revision": "79fa55c08f62e1dabcd777adf444edbf"
  },
  {
    "url": "assets/js/47.18e94ba6.js",
    "revision": "f8ce2e10215965fd88232e65fba80d5f"
  },
  {
    "url": "assets/js/48.d6f4fcb3.js",
    "revision": "92cb7d4570d3e2c2e08d61fcfb3b503a"
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
    "url": "assets/js/50.3bbed9a1.js",
    "revision": "21b769ab47faa33b7f14a38573e0de72"
  },
  {
    "url": "assets/js/51.8a0ac264.js",
    "revision": "f4845aaf624f3fd35e9411a94dbac0e1"
  },
  {
    "url": "assets/js/52.39d0f251.js",
    "revision": "4f79e05b62604763bf04891922c1a7fc"
  },
  {
    "url": "assets/js/53.1168ab98.js",
    "revision": "12b9a3c42207b5e16bca5cd2c9e87cf5"
  },
  {
    "url": "assets/js/54.81ecf5a5.js",
    "revision": "ec0f50910d6e5bade5068dbcf3a97e56"
  },
  {
    "url": "assets/js/55.625d1b3c.js",
    "revision": "08fab21a7ff745853bf9ce87329abc8d"
  },
  {
    "url": "assets/js/56.e76508d9.js",
    "revision": "83bf3c990369190f54683f46aafb79d1"
  },
  {
    "url": "assets/js/57.6fbb85de.js",
    "revision": "f5ebc89d7eba14cd8b39f87dcfbf8326"
  },
  {
    "url": "assets/js/58.da08dcac.js",
    "revision": "f589aff4fb3a55d5c009ea0a8c4a34cb"
  },
  {
    "url": "assets/js/59.64143326.js",
    "revision": "470f328578573219f973f657132114b6"
  },
  {
    "url": "assets/js/6.3551780c.js",
    "revision": "fe0ed93201a286fa45177a397258d276"
  },
  {
    "url": "assets/js/60.eb163b2c.js",
    "revision": "bdd9f395fb2c26ad5c2721018fc18ed2"
  },
  {
    "url": "assets/js/61.7f4a709e.js",
    "revision": "42bb582a753f0e2a2e2f19a43bfd0e4e"
  },
  {
    "url": "assets/js/62.a1148cc1.js",
    "revision": "4302bb943807b5d63d90c32f3299ce91"
  },
  {
    "url": "assets/js/63.65697b96.js",
    "revision": "384832907a5517eba8525e8c7c18e4f5"
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
    "url": "assets/js/68.73ed3749.js",
    "revision": "26478a7c3865f89e2bcd8b3d9ccd6165"
  },
  {
    "url": "assets/js/69.93b0f801.js",
    "revision": "ac8bd9ed8f12e3fd4f15f5415a8b1ae7"
  },
  {
    "url": "assets/js/7.5041dce4.js",
    "revision": "f2c23e2ac23b68ac3e88a056dd0784fa"
  },
  {
    "url": "assets/js/70.f8682611.js",
    "revision": "72cdacb1d6b4e544362c0325b89328e1"
  },
  {
    "url": "assets/js/71.bbf9cec1.js",
    "revision": "0f58b46da7d16591f53219f46be6eadd"
  },
  {
    "url": "assets/js/72.be88b0f4.js",
    "revision": "3857ab75a0d75ecbbb92eaafb912f296"
  },
  {
    "url": "assets/js/73.fe33fac5.js",
    "revision": "7073e89e0c73958d7586b43eef6ec6ca"
  },
  {
    "url": "assets/js/74.330a5133.js",
    "revision": "b7ae75af4ad662fa1731985b6462ba86"
  },
  {
    "url": "assets/js/75.d58979e4.js",
    "revision": "80882bfb5a63416c725c087257b77635"
  },
  {
    "url": "assets/js/76.4984e890.js",
    "revision": "9f6a943981698d98aa3954379f62ccba"
  },
  {
    "url": "assets/js/77.651c0812.js",
    "revision": "ccde59d8582edcaf663c1c9c3f887ae9"
  },
  {
    "url": "assets/js/78.0c6fd5f9.js",
    "revision": "61a574d24c53d8bed09c0ab5c9a2b2ac"
  },
  {
    "url": "assets/js/79.b586291b.js",
    "revision": "d5c13dcd65e133634b0c0ed0f0983bc5"
  },
  {
    "url": "assets/js/8.1407b990.js",
    "revision": "dcb7a34e3667ce40091860e9cc38e5c2"
  },
  {
    "url": "assets/js/80.878722c0.js",
    "revision": "ea10863c6f67c50288d353a3507d3421"
  },
  {
    "url": "assets/js/81.6fb933d3.js",
    "revision": "aec6a8180b118cc69f3aed7700dfd080"
  },
  {
    "url": "assets/js/82.1500a0ec.js",
    "revision": "5decd54745f438ef69dc8402191cde16"
  },
  {
    "url": "assets/js/83.091ac34f.js",
    "revision": "e319811d563d5c4deb984451d297bab2"
  },
  {
    "url": "assets/js/84.97c0c987.js",
    "revision": "f087cabb0c1020062c952ed36655eccf"
  },
  {
    "url": "assets/js/85.6e6a4478.js",
    "revision": "c514336edf611f71ffa614e6c05b8711"
  },
  {
    "url": "assets/js/86.cd03d54f.js",
    "revision": "26a4d9f17ee5fce71ffd1b320a5d970a"
  },
  {
    "url": "assets/js/87.c92bc77f.js",
    "revision": "459735535cea4d8f525511a5ef645800"
  },
  {
    "url": "assets/js/88.e1f134e1.js",
    "revision": "8e640b4b0caf0e2edfc5f00a0d2af94c"
  },
  {
    "url": "assets/js/89.d8c76bf6.js",
    "revision": "976019b40fed50a4695ccf98f88f1d27"
  },
  {
    "url": "assets/js/9.7b6dd5b4.js",
    "revision": "f1ee1335cb73fc3af924d330037b0332"
  },
  {
    "url": "assets/js/90.97cdc671.js",
    "revision": "b612568b956c7c72ce401d24febca55d"
  },
  {
    "url": "assets/js/91.e85ba301.js",
    "revision": "0df831eb294ad9263c96d30d7a555897"
  },
  {
    "url": "assets/js/92.bfd8faf4.js",
    "revision": "22b69e389bded8497f719ba97a228a1d"
  },
  {
    "url": "assets/js/93.7a66a588.js",
    "revision": "9d6c374e457954b990c36e0278f82c89"
  },
  {
    "url": "assets/js/94.0d913725.js",
    "revision": "eff636e4e31acdbb083fdd8aedfee02e"
  },
  {
    "url": "assets/js/95.f4c7f45f.js",
    "revision": "89cf57f8886bb6a211c17f5b313c893f"
  },
  {
    "url": "assets/js/96.638f7c74.js",
    "revision": "8ab101dea91b79f7f24b9ceb9db8fdf2"
  },
  {
    "url": "assets/js/97.84ba1ebc.js",
    "revision": "ccae1c743e765f7e4ee3470f3986eb5a"
  },
  {
    "url": "assets/js/98.bbd93e83.js",
    "revision": "e5d9e456bd2624a9faf5a2d53ecdc1f4"
  },
  {
    "url": "assets/js/99.52037780.js",
    "revision": "5a06793d317d1fa5c2653cacfcb4c54e"
  },
  {
    "url": "assets/js/app.fdb00e86.js",
    "revision": "f67a32742d59a5eac24671536496c0d6"
  },
  {
    "url": "assets/js/vendors~docsearch.e480d9b8.js",
    "revision": "a887f3139f3f8baba27c98087130d4d9"
  },
  {
    "url": "categories/index.html",
    "revision": "07a753673221a9bc91031ceb5b501c60"
  },
  {
    "url": "guide.html",
    "revision": "50f0d80a6bcb48a7adaaba496fe9a2f4"
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
    "url": "images/python/function/hannuota-1.png",
    "revision": "648e9206c49676dbebf60b6846d3d5b9"
  },
  {
    "url": "images/python/function/hannuota-2.png",
    "revision": "2f93371aac8fdd2eb44f4d900f122007"
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
    "revision": "c866d94296bd02d429398bdf7b73fa17"
  },
  {
    "url": "logo.png",
    "revision": "4e48730bd98de9f333e6bd14d62b6c7d"
  },
  {
    "url": "mcpstudy/ide-mcp-server.html",
    "revision": "3e2c6d538e474959782fe1581384793b"
  },
  {
    "url": "mcpstudy/mcp-knowledge.html",
    "revision": "2406b1466b5f334bc4efb918d8642cb9"
  },
  {
    "url": "mcpstudy/mcp-tool.html",
    "revision": "9341dfc76f5457221db280c14226b700"
  },
  {
    "url": "modelstudy/11-29.html",
    "revision": "32590be86043e01a5494ef1c575fbe09"
  },
  {
    "url": "modelstudy/123.html",
    "revision": "88c63e8fb599e89f521aa24c3e086a75"
  },
  {
    "url": "modelstudy/2025-11-04.html",
    "revision": "b83f334f1636d0eedf4010dc55596422"
  },
  {
    "url": "modelstudy/25-12-01.html",
    "revision": "ee56531b3e5cab11644a1e9df55c8079"
  },
  {
    "url": "modelstudy/666-多模态.html",
    "revision": "769d453e4a394b88895c636661ab49ad"
  },
  {
    "url": "modelstudy/agent.html",
    "revision": "36dd53a6d868a679db9ca503fb5f3728"
  },
  {
    "url": "modelstudy/auto-model-desc.html",
    "revision": "4856a2b072bab3ddc11a34ee617db967"
  },
  {
    "url": "modelstudy/basic-aigc.html",
    "revision": "d794d0ff814a0f10c4330581750bf066"
  },
  {
    "url": "modelstudy/basic-knowledge.html",
    "revision": "f0bc2d3ed4bcaca94c8859a93e146d04"
  },
  {
    "url": "modelstudy/compute-metrics.html",
    "revision": "a8c437baf449d8e22236cde4203ccc3b"
  },
  {
    "url": "modelstudy/construct-dataset.html",
    "revision": "78619b5849c906d4055109a60460dc92"
  },
  {
    "url": "modelstudy/data-chunk.html",
    "revision": "c563adbbeb663c74a78754de22d22e07"
  },
  {
    "url": "modelstudy/deep-learning.html",
    "revision": "bc975327f3178f6e9a56e4d475034369"
  },
  {
    "url": "modelstudy/deepseek-search.html",
    "revision": "559272dc4ac0cc333c25d014c42ed409"
  },
  {
    "url": "modelstudy/extended-learning.html",
    "revision": "8b656f8789e962ffaa84a5ebea592087"
  },
  {
    "url": "modelstudy/finetuing-step5.html",
    "revision": "b78d2536b1e56212376068982dfe666f"
  },
  {
    "url": "modelstudy/finetuing-step9.html",
    "revision": "62c79350d9bb55e55d29d210c02fd6c9"
  },
  {
    "url": "modelstudy/finetuning-error-collect.html",
    "revision": "549111b2e6e233f4a2e23639c92b84e6"
  },
  {
    "url": "modelstudy/finetuning-exercises-code.html",
    "revision": "5ffc6038ffae30570da288bc94ac95fe"
  },
  {
    "url": "modelstudy/finetuning-f1-scores.html",
    "revision": "ccd6c75c5132cceac2e2096e58a35140"
  },
  {
    "url": "modelstudy/finetuning-warn-collect.html",
    "revision": "cf8e68bec4dcf2fa7d6d380be4beb80d"
  },
  {
    "url": "modelstudy/first-model-project.html",
    "revision": "74aff915d7183fe0472d5db8e44b129f"
  },
  {
    "url": "modelstudy/function-calling.html",
    "revision": "66f85c0417815927e8cd87fe23149071"
  },
  {
    "url": "modelstudy/impl-transformer.html",
    "revision": "9149ceb6fbac414845e8be3c8c361819"
  },
  {
    "url": "modelstudy/langchain-agent-practice.html",
    "revision": "7959ae2353e42bbc135032108db09c78"
  },
  {
    "url": "modelstudy/langchain-prompt.html",
    "revision": "f0962903630cf5269ff5fe7bd72b260d"
  },
  {
    "url": "modelstudy/langchain-study.html",
    "revision": "9c8432f060f0be44f2949683900bdbc1"
  },
  {
    "url": "modelstudy/llms_generation_optimization copy.html",
    "revision": "d71b2cf65aac63ac9fb9a96978fb486a"
  },
  {
    "url": "modelstudy/llms_generation_optimization.html",
    "revision": "e18f035985e5faaa4addd1e04c122b46"
  },
  {
    "url": "modelstudy/lm_eval.html",
    "revision": "70290b751059b85197955de8920949f1"
  },
  {
    "url": "modelstudy/lora-fine-tuning.html",
    "revision": "165483077dda914806a6d26e13fc23d5"
  },
  {
    "url": "modelstudy/mianshi.html",
    "revision": "1d5bea8eb08e85dbba70f67a5fd16cba"
  },
  {
    "url": "modelstudy/model-basic.html",
    "revision": "967816326de93355bb83926de5dc9af9"
  },
  {
    "url": "modelstudy/model-case.html",
    "revision": "e930248a2f5e848fa49df3e732a76693"
  },
  {
    "url": "modelstudy/model-deploy.html",
    "revision": "5f333fd69b245c6a9fc9e5cc0e9b8d51"
  },
  {
    "url": "modelstudy/model-english.html",
    "revision": "98350a40883082090106b6651df885a8"
  },
  {
    "url": "modelstudy/model-evaluate.html",
    "revision": "820031cfd51fd708ff7017d259473fcf"
  },
  {
    "url": "modelstudy/model-fine-tuning.html",
    "revision": "24bc5180dae6e28f1bb4bb9e313e42a0"
  },
  {
    "url": "modelstudy/model-function-calling.html",
    "revision": "39ca957939914bc0d2bb2fdbc9faf198"
  },
  {
    "url": "modelstudy/model-langchain-rag.html",
    "revision": "20097f599d72144f1ee765b39dc497d5"
  },
  {
    "url": "modelstudy/model-langchain.html",
    "revision": "dec7721c275c5c57451322f3c9ee482d"
  },
  {
    "url": "modelstudy/model-optimize.html",
    "revision": "7e1789759bfdb6efc90dc55eba99a32a"
  },
  {
    "url": "modelstudy/model-pytorch.html",
    "revision": "4aea613a2eeb619333dc95752ce340bd"
  },
  {
    "url": "modelstudy/model-quantization.html",
    "revision": "b70a799fb16630caad1dfc600d1d89ae"
  },
  {
    "url": "modelstudy/model-question.html",
    "revision": "8a942478460256585b7b3a8901557140"
  },
  {
    "url": "modelstudy/model-rag-pain.html",
    "revision": "5ed8a49909ca86ce42c973016899317b"
  },
  {
    "url": "modelstudy/model-rag.html",
    "revision": "0c1b139e594c01c935e0342f1ec78bba"
  },
  {
    "url": "modelstudy/model-RNN.html",
    "revision": "a664f6da8db832eceaa758699ac2879f"
  },
  {
    "url": "modelstudy/model-summary.html",
    "revision": "da505d3e8d0327c480a5c0cc7f353ef7"
  },
  {
    "url": "modelstudy/model-train-analyze.html",
    "revision": "7ae2f1ead80cc4738f536d0e5d1f46a8"
  },
  {
    "url": "modelstudy/model-train-code.html",
    "revision": "9c69d94e13f9f4a29a5c35dcf3fb4449"
  },
  {
    "url": "modelstudy/model-train-process.html",
    "revision": "29205ea8f5b92bd934e015c4df5c27be"
  },
  {
    "url": "modelstudy/model-train-related.html",
    "revision": "3340a4079b5cc087d3df33a69b9694a4"
  },
  {
    "url": "modelstudy/model-train.html",
    "revision": "57ff6b5b37925c5dc1e28d9b2d00330c"
  },
  {
    "url": "modelstudy/model-transformer.html",
    "revision": "be5c793b0f378eac504e712b3c535a67"
  },
  {
    "url": "modelstudy/model.html",
    "revision": "44ab816e817be19385d7694a1da93ad8"
  },
  {
    "url": "modelstudy/multi-chat.html",
    "revision": "e49ebd5eb870208d41ff27f36e919be8"
  },
  {
    "url": "modelstudy/ner-instruct-task.html",
    "revision": "fbc3ccb87cedb5ccfc2eeb9d72d04866"
  },
  {
    "url": "modelstudy/peft.html",
    "revision": "03770400d07e39f412649a5a8759deee"
  },
  {
    "url": "modelstudy/project-study.html",
    "revision": "33f157d56721be3f98d877ee82a3f8f7"
  },
  {
    "url": "modelstudy/prompts.html",
    "revision": "7605f302f77e4f306da18bcd00b83c49"
  },
  {
    "url": "modelstudy/quantization.html",
    "revision": "730442f6a7d64c09f4e78ca862676594"
  },
  {
    "url": "modelstudy/question-bank.html",
    "revision": "22bdbf6c28d909b7923c2194a7775755"
  },
  {
    "url": "modelstudy/rag-eval.html",
    "revision": "a29b314ed9c87c042dfd6b3370a3a025"
  },
  {
    "url": "modelstudy/rag-react.html",
    "revision": "d7b7a538fa1c767d55091b0d0a09d262"
  },
  {
    "url": "modelstudy/rag.html",
    "revision": "2323eb103edde1e7794822ab8d5192e9"
  },
  {
    "url": "modelstudy/rl.html",
    "revision": "6bd2e576f1b6a0ddcdccb1dd5912a480"
  },
  {
    "url": "modelstudy/self-function-calling.html",
    "revision": "89e6b39a8b807ef9eb0f4fd2795c6bf8"
  },
  {
    "url": "modelstudy/stage-four-chatbot.html",
    "revision": "b77152d322ca43fdc5005b5119fcd157"
  },
  {
    "url": "modelstudy/temp.html",
    "revision": "e3fc6e0f42794e2877366432a96e61e4"
  },
  {
    "url": "modelstudy/temp2.html",
    "revision": "9e18a03beeec922269eef79e0d66b9bf"
  },
  {
    "url": "modelstudy/transformer-basic.html",
    "revision": "e57410eeb4ccdd60b6dad2e2d37785f3"
  },
  {
    "url": "modelstudy/transformer-code.html",
    "revision": "d8f0adb12c3dc9b44ebcacbc0e1af839"
  },
  {
    "url": "modelstudy/transformer-knowledge.html",
    "revision": "6828f40865515238546425148d694f57"
  },
  {
    "url": "modelstudy/transformer-learn.html",
    "revision": "5ee9578e083ae3b709e10f2c52b4a2fa"
  },
  {
    "url": "modelstudy/transformer-question.html",
    "revision": "79e536331668a2e7438ae0c2c5f2d7be"
  },
  {
    "url": "modelstudy/transformer-related.html",
    "revision": "c22e4f1e59ae27f4c94cc15151ddd0c1"
  },
  {
    "url": "modelstudy/vector-database.html",
    "revision": "92a6c13d19bc35ade067a89abc0eb17e"
  },
  {
    "url": "modelstudy/vLLM-intro.html",
    "revision": "205c9d8cc41f4a7cf532f49403b868c0"
  },
  {
    "url": "modelstudy/whatIsModel.html",
    "revision": "8ee7099a61b12ab52511fce63fd84815"
  },
  {
    "url": "other/ai-agent.html",
    "revision": "061b30b4c5144d11fb93d31f8e8a577d"
  },
  {
    "url": "other/conda.html",
    "revision": "ca02311c4d0572fb4391ad080f5dd39c"
  },
  {
    "url": "other/excellentarticles.html",
    "revision": "9038acc38072329e6bc0f863d1faa08f"
  },
  {
    "url": "other/fine-tuning-adapters.html",
    "revision": "39ae8262123fa7c48d90ec4f443b6070"
  },
  {
    "url": "other/git-operate.html",
    "revision": "57b66118af91be02640e5a74ac9a6c4a"
  },
  {
    "url": "other/lora-0-1.html",
    "revision": "626390e90385bc25dfc4cb20937e624e"
  },
  {
    "url": "other/model-refrence.html",
    "revision": "ffb816b7ee11e162a19c1069b86e8cdf"
  },
  {
    "url": "other/python.html",
    "revision": "ee08c9cf597d127b467807adbfa4d817"
  },
  {
    "url": "other/pytorch-know.html",
    "revision": "ca7c085d9a388fc6c0bf62f3db1658ec"
  },
  {
    "url": "other/rag-question-compare.html",
    "revision": "e3615002e60e46d776e5cea9725db623"
  },
  {
    "url": "other/resume.html",
    "revision": "c688080070f44627a3f3571953b55602"
  },
  {
    "url": "other/swanLab-info.html",
    "revision": "b9ef101328024c037180f14526b08e73"
  },
  {
    "url": "other/transformer-1.html",
    "revision": "f0ef8a488dcb74c7751605b952a52ead"
  },
  {
    "url": "other/transformer-2.html",
    "revision": "ee005ca7a378066a7adb52f911494f33"
  },
  {
    "url": "other/transformer-3.html",
    "revision": "a87d4032ca831db49f2c8a1ea7a960d3"
  },
  {
    "url": "other/transformer-collect.html",
    "revision": "5292ec562ba12d6d7d71618fc4cb0c08"
  },
  {
    "url": "other/transformer-learn.html",
    "revision": "cc9594f84376a6cb2200b42959640eeb"
  },
  {
    "url": "other/using-packages.html",
    "revision": "d11ada9791572d8e4b860f55570dcd0c"
  },
  {
    "url": "pystudy/1229.html",
    "revision": "04769fd66bcc620f56a9080f5edd21b4"
  },
  {
    "url": "pystudy/array-operation.html",
    "revision": "62841b221f5bd1b5ba85ceaae981c9ad"
  },
  {
    "url": "pystudy/basic.html",
    "revision": "1215bbf0b5bb614a91c055831aad76af"
  },
  {
    "url": "pystudy/builtin-function.html",
    "revision": "44b71f569d779136992a3b14b6f3a2f6"
  },
  {
    "url": "pystudy/class.html",
    "revision": "ce94007e510da270f1f6de85a02d54cf"
  },
  {
    "url": "pystudy/data-structure.html",
    "revision": "b751ed54d266528501f0b869ba290ec2"
  },
  {
    "url": "pystudy/database.html",
    "revision": "a9c4059ee3050731e2daa74585eba89f"
  },
  {
    "url": "pystudy/dict-knowledge.html",
    "revision": "747b6f819f79da8a6d44e256c8c633aa"
  },
  {
    "url": "pystudy/exception.html",
    "revision": "1efdebfd0ccfd37875bbb0d18c23d29b"
  },
  {
    "url": "pystudy/file.html",
    "revision": "1502103e7336e55579dc287efd5ea362"
  },
  {
    "url": "pystudy/function.html",
    "revision": "885405c8fc5d1c308f1be7e97b7b3c50"
  },
  {
    "url": "pystudy/line-continue.html",
    "revision": "51b9edc214ba9a03725d9f34ef3ca9e5"
  },
  {
    "url": "pystudy/list-comprehension.html",
    "revision": "935a66dd9d7a88c81a5fae4d90dab680"
  },
  {
    "url": "pystudy/module.html",
    "revision": "9d4668bad1c1dec54ccb2c9b67e08549"
  },
  {
    "url": "pystudy/network.html",
    "revision": "7d4bbb5ce3fbc573b2f7c410f50ac128"
  },
  {
    "url": "pystudy/numpy.html",
    "revision": "80a655b65f2329114b43f594a9462f5c"
  },
  {
    "url": "pystudy/other.html",
    "revision": "5fa9227bf32d92f22d615dc2a3870d36"
  },
  {
    "url": "pystudy/package.html",
    "revision": "afe4f424112a704738c1428208fdebd0"
  },
  {
    "url": "pystudy/pandas-study.html",
    "revision": "cc8cb36d6be643581d4a858a706fd54e"
  },
  {
    "url": "pystudy/practice.html",
    "revision": "988ed7e773dcb890fb9d085cc14feae7"
  },
  {
    "url": "pystudy/process.html",
    "revision": "7c5e2c20888d9dc033710c57cf147016"
  },
  {
    "url": "pystudy/python-class.html",
    "revision": "f26a104a1e615b755a9cd6c7366e8dc2"
  },
  {
    "url": "pystudy/python-collect-knowledge.html",
    "revision": "d66b6829db5aba898e70ea407861aa84"
  },
  {
    "url": "pystudy/python-collect.html",
    "revision": "b1b6753bb11de791102043e2e746ff32"
  },
  {
    "url": "pystudy/python-evaluation.html",
    "revision": "b57e6bf18ef97891606b00905ec643a2"
  },
  {
    "url": "pystudy/python-except.html",
    "revision": "9d80bf56472842854f708972c2a17576"
  },
  {
    "url": "pystudy/python-important.html",
    "revision": "e43cb095f7fffcf13c177c3455a088d6"
  },
  {
    "url": "pystudy/python-list.html",
    "revision": "1282eb407ea037201093b68508cd6ce4"
  },
  {
    "url": "pystudy/python-other-related.html",
    "revision": "b26d3434ce24ef38322a99c2e2a06bfd"
  },
  {
    "url": "pystudy/python-set.html",
    "revision": "0ee19fd52306dae42f9ac96ad0ec3e67"
  },
  {
    "url": "pystudy/python-storage.html",
    "revision": "62179a37de7baa0fbf7d7470a86b1e2b"
  },
  {
    "url": "pystudy/python-str.html",
    "revision": "8abfef717a3dc84d33355e5f1e8ba3fa"
  },
  {
    "url": "pystudy/python-web.html",
    "revision": "210302c34f20dc503c3024d7dbd022a2"
  },
  {
    "url": "pystudy/regex.html",
    "revision": "c3d6b7e3a2b6682d78ed08a8b15f83de"
  },
  {
    "url": "pystudy/related-knowledge.html",
    "revision": "153138c162b0fa6ca15f112dd17a574b"
  },
  {
    "url": "pystudy/sequence.html",
    "revision": "45572f25a9408d0037e2d93a2f756c39"
  },
  {
    "url": "pystudy/string-function.html",
    "revision": "dba3a02e5d87ba94b9f9e07e54814783"
  },
  {
    "url": "pystudy/technology-point.html",
    "revision": "8b4381df4b311af4eff24bd465e582d7"
  },
  {
    "url": "pystudy/temp-1229.html",
    "revision": "39d797928c5707a71841b64470ac92b5"
  },
  {
    "url": "pystudy/thread.html",
    "revision": "b4e7d83c7ded3ca5ab3f779eb42fc1b9"
  },
  {
    "url": "pystudy/use-library.html",
    "revision": "294d806dda3b6015c45580c31aff53b3"
  },
  {
    "url": "pystudy/use-pip-install.html",
    "revision": "4ee889d3cebb32634959b3a910598eed"
  },
  {
    "url": "react/react-advanced.html",
    "revision": "e2ee655b3ebf0dd2b6dfaabaf5c82ffa"
  },
  {
    "url": "react/react-basic.html",
    "revision": "772521b04168c5a41e4ced020a26743b"
  },
  {
    "url": "react/react-context.html",
    "revision": "c56971013f5bf2028e5b7e1974eeb261"
  },
  {
    "url": "react/react-relation.html",
    "revision": "ce0e88d20ad8a52175c0f44b0b9bd7e3"
  },
  {
    "url": "react/ssr.html",
    "revision": "5205900868e28fa133b8c913993f90b8"
  },
  {
    "url": "react/status-manage.html",
    "revision": "952e3c87165fab4fcce9e93db4093b9c"
  },
  {
    "url": "reactnative/reactnative-desc.html",
    "revision": "9bce2fc74503322e3009cf7d0b8d0f59"
  },
  {
    "url": "reactnative/reactnative.html",
    "revision": "9f7df0dd2db12e991ad3d4caab1d11c7"
  },
  {
    "url": "reactnative/rn-problem.html",
    "revision": "5b726e3b5784d7274417b72e6a0665ac"
  },
  {
    "url": "tag/index.html",
    "revision": "9453e30b21a32fc903cf7ba62ecb32f7"
  },
  {
    "url": "tag/React/index.html",
    "revision": "46e942afc0af53beec34ae244502608e"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "4fdcf4118ea616030223b802a3f5c987"
  },
  {
    "url": "tag/二叉树/index.html",
    "revision": "016bb43921d125670933e578f3016c61"
  },
  {
    "url": "timeline/index.html",
    "revision": "c6dfd66ee3b321fac30f2dddde9b9968"
  },
  {
    "url": "vue/basicknowledge.html",
    "revision": "edd2caf6f396b1f64056cdef8ec4e94f"
  },
  {
    "url": "vue/compare.html",
    "revision": "561d73a48cfd2ff469ff30e053bc3b27"
  },
  {
    "url": "vue/misnotes.html",
    "revision": "07b2b57099d1186aad73f2fd4ebb26ad"
  },
  {
    "url": "vue/ssr.html",
    "revision": "f30a05aa56a66b36b6a9ac3477651496"
  },
  {
    "url": "vue/vue-attrs-listeners.html",
    "revision": "bc9f280824d3874a6c01eaefe2bfbb5c"
  },
  {
    "url": "vue/vue-principle.html",
    "revision": "ec30e4e6d54fb116320d626decab8aff"
  },
  {
    "url": "vue/vue-router.html",
    "revision": "a7cbf19ae632f7fbf106ea0ff34888cb"
  },
  {
    "url": "vue/vue-status.html",
    "revision": "b2c3bfed3a67b07e1273721f382be689"
  },
  {
    "url": "vue/vue3-basic.html",
    "revision": "9d97da769283aca9db4924cfc59fcc0e"
  },
  {
    "url": "vue/vue3-impl.html",
    "revision": "5bd3358f584009635aa949b27ed84378"
  },
  {
    "url": "vue/vue3.html",
    "revision": "788996f08a8f90186816474f006cf6ec"
  },
  {
    "url": "vue/vuex.html",
    "revision": "14598d1b3de1180f1bdb76b14e54a9d5"
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
