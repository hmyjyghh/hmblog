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
    "revision": "1023574b20e21427842279e3a0dd5cfe"
  },
  {
    "url": "algorithm/666.html",
    "revision": "1d145d2d4f4a9056db5ef88933f87a52"
  },
  {
    "url": "algorithm/algo-temp.html",
    "revision": "5354753a09a3638649763e01991ecbea"
  },
  {
    "url": "algorithm/binary-search.html",
    "revision": "fcf06a92157e310d3c32a5e12719e084"
  },
  {
    "url": "algorithm/binary-tree.html",
    "revision": "3a48d4719d64f0f909889285b150dbbc"
  },
  {
    "url": "algorithm/compare-al.html",
    "revision": "e17a6b01da88ffa6f00d93119918ff63"
  },
  {
    "url": "algorithm/del-single-list-2.html",
    "revision": "a47e69473ecf24e5bf2578bf84306465"
  },
  {
    "url": "algorithm/del-single-list.html",
    "revision": "1b1b1f5bf39d9fd4e6344ba3bdcb2825"
  },
  {
    "url": "algorithm/double-pointer.html",
    "revision": "1a57e279857871dc2abdca3229060be9"
  },
  {
    "url": "algorithm/dynamic-plan.html",
    "revision": "ccd383173d207c9d4a3d3ca9d9d67cd0"
  },
  {
    "url": "algorithm/effect-bracket.html",
    "revision": "deb51e95940223c2f4f4629b1dbc1daf"
  },
  {
    "url": "algorithm/greedy.html",
    "revision": "6a45fb315437cdb1ca618d881c268498"
  },
  {
    "url": "algorithm/longasc-sequence.html",
    "revision": "17755a28a6bf09f9a8bc24944b1dc853"
  },
  {
    "url": "algorithm/other.html",
    "revision": "3fa41b47b82909b08ef86d0c111c2f11"
  },
  {
    "url": "algorithm/receive-rain.html",
    "revision": "8d22f847eb7bbbfa30940a125728fb1d"
  },
  {
    "url": "algorithm/reverse-list.html",
    "revision": "0c9a29159f76db20bb0c3d92193aa8f0"
  },
  {
    "url": "algorithm/sort copy.html",
    "revision": "8c50c006c8b0fc798555b98201c35846"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "dd557bdffedce2c2b618ba558e4d3860"
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
    "url": "assets/js/100.fcfda1cc.js",
    "revision": "d4b8191f34e674f00d091dfea5ece035"
  },
  {
    "url": "assets/js/101.c3849e4a.js",
    "revision": "19ce94685bc40bb01ae713d4aa87d5fc"
  },
  {
    "url": "assets/js/102.2070ce59.js",
    "revision": "bdf0672fe26c4c9cd184a10a2caa29a2"
  },
  {
    "url": "assets/js/103.d3f56ef5.js",
    "revision": "ce873909fdcc67164ffc177fb010da68"
  },
  {
    "url": "assets/js/104.4b0fcbce.js",
    "revision": "a162d29e911915275d3f37d4b7aec7cb"
  },
  {
    "url": "assets/js/105.abf0989e.js",
    "revision": "6975d79310419208a4827fe8482cd670"
  },
  {
    "url": "assets/js/106.10d8bd26.js",
    "revision": "d58de6c126cd444473a39eed993959ae"
  },
  {
    "url": "assets/js/107.30b3b2d6.js",
    "revision": "c5a72d4489a500b8ac862e292b253d6c"
  },
  {
    "url": "assets/js/108.c7edb21b.js",
    "revision": "aaf32d9eb624853f063eaa07f7b8c18e"
  },
  {
    "url": "assets/js/109.7a57772e.js",
    "revision": "0c559d2d7f4719e6b2f391246a6d27f2"
  },
  {
    "url": "assets/js/11.08937b90.js",
    "revision": "e77956ac107a7b0387db3e6be4e56ebe"
  },
  {
    "url": "assets/js/110.eca9eda5.js",
    "revision": "40ffa32fae92bb302593a3d77554e666"
  },
  {
    "url": "assets/js/111.a27b0fd5.js",
    "revision": "8431e5d2c7608d8429657e1325398a3c"
  },
  {
    "url": "assets/js/112.37a37a0b.js",
    "revision": "17c523839714e51e4edf1d6c2a2b28d4"
  },
  {
    "url": "assets/js/113.d960dc56.js",
    "revision": "c03c48801377552729c34d2bbc453b26"
  },
  {
    "url": "assets/js/114.7942c611.js",
    "revision": "73bfb3f75edad2739615352723a7539f"
  },
  {
    "url": "assets/js/115.dca63718.js",
    "revision": "d8d389e536ff0f1e4408b8ff2c68c450"
  },
  {
    "url": "assets/js/116.492be37e.js",
    "revision": "0f65b1c0c77a4015d76552835ee64a09"
  },
  {
    "url": "assets/js/117.354aecc2.js",
    "revision": "7e7544a6739f2a26b504d8c320da408d"
  },
  {
    "url": "assets/js/118.52b72f7f.js",
    "revision": "8aaa2a915f73d03bfecb6e418e4535a0"
  },
  {
    "url": "assets/js/119.cb834180.js",
    "revision": "189b0fe03473de463f0f66a14c7991d9"
  },
  {
    "url": "assets/js/120.d634d240.js",
    "revision": "62bf2e24325bc46fbf867932ffa98617"
  },
  {
    "url": "assets/js/121.81f85049.js",
    "revision": "c4045e46ade14024b9fefbcbc300c214"
  },
  {
    "url": "assets/js/122.2adb153f.js",
    "revision": "93511702d845f6badb32dcacbca091df"
  },
  {
    "url": "assets/js/123.7b4dde7d.js",
    "revision": "8e1a65cd5e0eadd439ca9f23456a37a8"
  },
  {
    "url": "assets/js/124.e2a9b3cf.js",
    "revision": "5109872d57f204cb72eb57db1fae99ab"
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
    "url": "assets/js/127.d686d655.js",
    "revision": "65642ee50dd59e2c1f88f10b2acba09b"
  },
  {
    "url": "assets/js/128.b4729d2b.js",
    "revision": "5a8b4d3ac3b503c5104ca189f87e9f90"
  },
  {
    "url": "assets/js/129.f90c62e8.js",
    "revision": "4a833f98ec4b7bebd22a6472638170e6"
  },
  {
    "url": "assets/js/130.15b6889b.js",
    "revision": "be23da6ec3153e4e637c7ffdb67e5e2d"
  },
  {
    "url": "assets/js/131.14ee2984.js",
    "revision": "becb3c0115485b857e03e7725ac8d15c"
  },
  {
    "url": "assets/js/132.13b1db98.js",
    "revision": "9c88dab0c4d6e1996674c5c5394a621b"
  },
  {
    "url": "assets/js/133.d39f05a1.js",
    "revision": "fbef5bd239707ff076763d6e4dc6c53e"
  },
  {
    "url": "assets/js/134.11a58fb4.js",
    "revision": "4e8111392437f7f3d8aee914d72b4c5e"
  },
  {
    "url": "assets/js/135.971f8030.js",
    "revision": "0d324b8370758f3bcdebc5fae3f2cb39"
  },
  {
    "url": "assets/js/136.3e3504af.js",
    "revision": "5a0292cd5a05bee6d89eeb1c369cfc56"
  },
  {
    "url": "assets/js/137.fc61baaf.js",
    "revision": "06b8b39ed1be2c1abaf8730c51abf388"
  },
  {
    "url": "assets/js/138.dc2a393d.js",
    "revision": "2044559027b2f8aaede860b4a2e266fd"
  },
  {
    "url": "assets/js/139.40e36d52.js",
    "revision": "ae05553b7ac818c2f1d4ed2fd7e8f327"
  },
  {
    "url": "assets/js/14.0ac4aea5.js",
    "revision": "11b1f5df8a45d04c2f0527031b496791"
  },
  {
    "url": "assets/js/140.3ef51d7f.js",
    "revision": "a8d7260a64c562c669f0b1b70f3361cf"
  },
  {
    "url": "assets/js/141.af9f0daa.js",
    "revision": "cd8202f87762199b7baca51037dcfe0d"
  },
  {
    "url": "assets/js/142.df24c198.js",
    "revision": "ef80250cef5089d22cb3ce726679f62a"
  },
  {
    "url": "assets/js/143.5de220f9.js",
    "revision": "624b6b3d0a44304c46021d5f11921311"
  },
  {
    "url": "assets/js/144.9c9d6034.js",
    "revision": "a70dec1e3a765654829131e66ae86bc1"
  },
  {
    "url": "assets/js/145.51fc7ecd.js",
    "revision": "a017fc2908ee6e53009069fc6448cfb0"
  },
  {
    "url": "assets/js/146.53790c2f.js",
    "revision": "01121faeff44cd50667cbc62bb7afdff"
  },
  {
    "url": "assets/js/147.3210f868.js",
    "revision": "312c7964da601df5c1bb7b163e8346d6"
  },
  {
    "url": "assets/js/148.7fa222c9.js",
    "revision": "8852cdf49f1ec3fa635b9af1338d3575"
  },
  {
    "url": "assets/js/149.77350b0f.js",
    "revision": "dd36e594bfc58059134d1f92f5f2f07e"
  },
  {
    "url": "assets/js/15.2cac15c3.js",
    "revision": "688079c52f80af83336ee63d8b5680a1"
  },
  {
    "url": "assets/js/150.6316cca4.js",
    "revision": "bc976ae95a1bae5f18341377a542ad42"
  },
  {
    "url": "assets/js/151.82441253.js",
    "revision": "18cd94169ec381b82b03d359a8ac9b61"
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
    "url": "assets/js/154.899f4d27.js",
    "revision": "e7282e61e139c90b0a671c7acb90afe6"
  },
  {
    "url": "assets/js/155.73d93741.js",
    "revision": "aa046e70a9674530b012c6b060ef055d"
  },
  {
    "url": "assets/js/156.6d0d7e5c.js",
    "revision": "2e3996d70bacae0993269ead5760a241"
  },
  {
    "url": "assets/js/157.46f88e97.js",
    "revision": "d8b7131615be418084bf4dcd06b9e172"
  },
  {
    "url": "assets/js/158.1d321223.js",
    "revision": "361baf65c2d65daab9a924102e7ff950"
  },
  {
    "url": "assets/js/159.40ad7b0b.js",
    "revision": "a64fc99ba492c56c6fdf6f54b21e8a72"
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
    "url": "assets/js/161.fc502c93.js",
    "revision": "cc9155fcaca55d981b3c671e16d3255d"
  },
  {
    "url": "assets/js/162.565e2f40.js",
    "revision": "15c90b53b238b34bde1703a5df4c27b9"
  },
  {
    "url": "assets/js/163.b4771f84.js",
    "revision": "31c7d1b5e661e6d41bf1ab290906a70f"
  },
  {
    "url": "assets/js/164.691db7df.js",
    "revision": "616a16e2ac778869256808183c6fd797"
  },
  {
    "url": "assets/js/165.1056d168.js",
    "revision": "785c389a29987d5b79be07675bc0c799"
  },
  {
    "url": "assets/js/166.9c704aba.js",
    "revision": "ae1f5bed2d36c6b11d482164e44a5d05"
  },
  {
    "url": "assets/js/167.a9a2f8d4.js",
    "revision": "75bf5d6af1f31eb4423a373d461f73b8"
  },
  {
    "url": "assets/js/168.84df9556.js",
    "revision": "e8205089f8adc1ed59db314d0a80dfd6"
  },
  {
    "url": "assets/js/169.41699a5e.js",
    "revision": "a4b3d367e72aabb7bd9b49a6fcf0f9ae"
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
    "url": "assets/js/171.460fd59b.js",
    "revision": "1bd24cfccc1ef5df7b5168d6f9ca82d1"
  },
  {
    "url": "assets/js/172.cb7dd928.js",
    "revision": "65000613eb1ede14e16573a556dea40b"
  },
  {
    "url": "assets/js/173.fefad7b6.js",
    "revision": "6d4decad112a12aeeed092a6fdeef460"
  },
  {
    "url": "assets/js/174.7778087b.js",
    "revision": "d94afc64d85b5ed7c755c029f0acaa80"
  },
  {
    "url": "assets/js/175.818cafb4.js",
    "revision": "0aac3069ad2ec3d9e4047abbd20569e7"
  },
  {
    "url": "assets/js/176.063543bf.js",
    "revision": "dad02c1e0c5118dec02178eba18fe8e8"
  },
  {
    "url": "assets/js/177.b25f671c.js",
    "revision": "a9c03f43bc91c2145a60544fd082f42f"
  },
  {
    "url": "assets/js/178.61046a2d.js",
    "revision": "b1accc5a2c5b97f8eceadcab9ab65bd9"
  },
  {
    "url": "assets/js/179.6483efd5.js",
    "revision": "983242276b32406ef5b9b1f691b27d47"
  },
  {
    "url": "assets/js/18.27fd2b83.js",
    "revision": "bd9d5b805bca2ffea52562e712745e52"
  },
  {
    "url": "assets/js/180.3428bd15.js",
    "revision": "9d4d8eebe1520cd0bd8e17c5e20048bf"
  },
  {
    "url": "assets/js/181.f002b0d8.js",
    "revision": "d764f68c78685820b49358fe7fdcd679"
  },
  {
    "url": "assets/js/182.a444e259.js",
    "revision": "b4d25c0954b50e71b36f73757a552092"
  },
  {
    "url": "assets/js/183.b7fbeae5.js",
    "revision": "0690bb1cb6222c788b3d208d53f59c47"
  },
  {
    "url": "assets/js/184.81ae35da.js",
    "revision": "10b9acc802e1e87e20accca305e6a72c"
  },
  {
    "url": "assets/js/185.157e49a2.js",
    "revision": "10e24789d8d50a6a15160e40399a1132"
  },
  {
    "url": "assets/js/186.e2f20b02.js",
    "revision": "ef2df91fba3d15e84b6dde653de85376"
  },
  {
    "url": "assets/js/187.a1cbf54a.js",
    "revision": "9bded4c029f54492444fed62c0071c83"
  },
  {
    "url": "assets/js/188.3cdc3f91.js",
    "revision": "a9faf06586576ba2b5207600c28ce107"
  },
  {
    "url": "assets/js/189.874fe0d7.js",
    "revision": "357897a25042d50060ff761b4797ca0c"
  },
  {
    "url": "assets/js/19.e7351a57.js",
    "revision": "497c4fe1210b978757c125312c8c95af"
  },
  {
    "url": "assets/js/190.6758ff12.js",
    "revision": "bec492ddda2f4effe903c3bdf6a4f88f"
  },
  {
    "url": "assets/js/191.faae3327.js",
    "revision": "071a597b9647eb9b79e6b4ff9742ad4e"
  },
  {
    "url": "assets/js/192.0779a750.js",
    "revision": "a2d3f304893c547c6063d40b0e93e748"
  },
  {
    "url": "assets/js/193.87176101.js",
    "revision": "1866a6eec925aa5a7215f98857b3f6f8"
  },
  {
    "url": "assets/js/194.323ec2f3.js",
    "revision": "33a0699c10f8ddd89ab9581662713929"
  },
  {
    "url": "assets/js/195.4dcdc388.js",
    "revision": "9fc84ba81e0a4b20fa2edd32ef95be1c"
  },
  {
    "url": "assets/js/196.98111dc5.js",
    "revision": "4c3304202b19ed01861b6e6bf4caa7bd"
  },
  {
    "url": "assets/js/197.282283e9.js",
    "revision": "fbf22bcb287b45da33e59322be974c24"
  },
  {
    "url": "assets/js/198.d41e55c0.js",
    "revision": "fa229fa35ff1bbeba553fbeeb8a33221"
  },
  {
    "url": "assets/js/199.43332c5f.js",
    "revision": "b8a0dd6072312e03f7998fb2a66d7e7b"
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
    "url": "assets/js/200.bff3307d.js",
    "revision": "86b334fa739616e47bf1450923abecf8"
  },
  {
    "url": "assets/js/201.bd09ef60.js",
    "revision": "2d0d7fac157d7b28b6cd62852e780651"
  },
  {
    "url": "assets/js/202.01a8c549.js",
    "revision": "bfd970688320fa380378defb6df9cf3c"
  },
  {
    "url": "assets/js/203.bdcc5bea.js",
    "revision": "f5ac0b5c948a144ced4e9ff7444f604a"
  },
  {
    "url": "assets/js/204.e8e8dca7.js",
    "revision": "1e121a7ad4665afa1c0a4e63ff0a8ea4"
  },
  {
    "url": "assets/js/205.64dc90c9.js",
    "revision": "0312520bfaa65b94536e98d8c2685cac"
  },
  {
    "url": "assets/js/206.12faea32.js",
    "revision": "b2ccf0d6f665a7fdefa0629fde54e88f"
  },
  {
    "url": "assets/js/207.0551b9c8.js",
    "revision": "f9418ee7f9f3ccfaea8e7199ac2a36fe"
  },
  {
    "url": "assets/js/208.dd8292f9.js",
    "revision": "1f5cb78bdbf8918890eace18b75a8b62"
  },
  {
    "url": "assets/js/209.0a820666.js",
    "revision": "f24306de6632dff50e9850da33b31e83"
  },
  {
    "url": "assets/js/21.0feb36e8.js",
    "revision": "a8d15496e383de00a8b45e5413dafbf5"
  },
  {
    "url": "assets/js/210.161b374c.js",
    "revision": "4a4d7524d53acdc1eea6d580c27d2733"
  },
  {
    "url": "assets/js/211.f922fb0a.js",
    "revision": "459984856d3b37c89a4b153df4c3d2df"
  },
  {
    "url": "assets/js/212.ff7c858e.js",
    "revision": "14068967e343f172cac8eaa305a53559"
  },
  {
    "url": "assets/js/213.380e2400.js",
    "revision": "cfeb9ac6ceea3fc410e0ff2e76f85383"
  },
  {
    "url": "assets/js/214.0526f327.js",
    "revision": "1e62d21b131f40c25364e30422d3ba86"
  },
  {
    "url": "assets/js/215.5ef03cb6.js",
    "revision": "8b492c2a15d158377731fed14a2ff690"
  },
  {
    "url": "assets/js/216.c43ff286.js",
    "revision": "40003abca7e56bbd54459d5398225083"
  },
  {
    "url": "assets/js/217.28e6d549.js",
    "revision": "4c5990695e862add4c5b80a849d8ed6e"
  },
  {
    "url": "assets/js/218.2e35d9de.js",
    "revision": "760ddd5ac16cbc0bc21903fda091a9f5"
  },
  {
    "url": "assets/js/219.4c5090db.js",
    "revision": "b8743228a61c78cee817357356e02234"
  },
  {
    "url": "assets/js/22.40bc0c74.js",
    "revision": "c70f295257910e3ed1383305928ec583"
  },
  {
    "url": "assets/js/220.93d8a8d2.js",
    "revision": "79177a4961ffbdbfd300379d2d5215ea"
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
    "url": "assets/js/42.28705486.js",
    "revision": "16714344d575a5839d0a8cd86285d03a"
  },
  {
    "url": "assets/js/43.d40aff24.js",
    "revision": "620b50f56aa4ffc6988d3047b39aa152"
  },
  {
    "url": "assets/js/44.f64d5e4b.js",
    "revision": "d48000c5af9ef855f5d9738e670b97fe"
  },
  {
    "url": "assets/js/45.94236040.js",
    "revision": "97e729b34c2fee16b72c1ace8a4f3cf0"
  },
  {
    "url": "assets/js/46.0705e320.js",
    "revision": "bf21610b2dfb6f7c6f2f6e74a22ddbe6"
  },
  {
    "url": "assets/js/47.5f0af86d.js",
    "revision": "1f513a96c2fd28ee4e2ad71c003731bb"
  },
  {
    "url": "assets/js/48.b2635c28.js",
    "revision": "e67620495663bce71ddb5874209b47cb"
  },
  {
    "url": "assets/js/49.5911d456.js",
    "revision": "615a50ad447c8fcb1c99e8a01a788bd6"
  },
  {
    "url": "assets/js/5.ade88313.js",
    "revision": "41c0c07ec8d7952411e4a9ff01130d28"
  },
  {
    "url": "assets/js/50.f13658ee.js",
    "revision": "4534dbc1e21361c9d7cb7302ad34a230"
  },
  {
    "url": "assets/js/51.a0dba021.js",
    "revision": "3db764058317721e0e717bef6a8f40b2"
  },
  {
    "url": "assets/js/52.6abfb97d.js",
    "revision": "9a800f5b9bb5921f444653f72f36deb0"
  },
  {
    "url": "assets/js/53.589b13c3.js",
    "revision": "60d88ffbc317a7210cf241fae05a1b2d"
  },
  {
    "url": "assets/js/54.bd322d94.js",
    "revision": "3fa50884aedad89b05200f0e63a02429"
  },
  {
    "url": "assets/js/55.9c25b2fe.js",
    "revision": "084ab5cfbe88354366b8a25411c5843a"
  },
  {
    "url": "assets/js/56.8f1cae2b.js",
    "revision": "664d64d849ff98c507e17a963f4e55dc"
  },
  {
    "url": "assets/js/57.cb582068.js",
    "revision": "577243747f8cb260f305cb29e98337ff"
  },
  {
    "url": "assets/js/58.38e0d90f.js",
    "revision": "16e9a9cee74e2227558c436ef9b96052"
  },
  {
    "url": "assets/js/59.f15516e4.js",
    "revision": "dd04751bcf7128101ad8341fee48cfa9"
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
    "url": "assets/js/61.b5f53821.js",
    "revision": "52537300b219fcae4f3f96d73b136a82"
  },
  {
    "url": "assets/js/62.a07a096e.js",
    "revision": "294429710297e5029db780f2d10520de"
  },
  {
    "url": "assets/js/63.65697b96.js",
    "revision": "384832907a5517eba8525e8c7c18e4f5"
  },
  {
    "url": "assets/js/64.177a751d.js",
    "revision": "f142dfe3408458270bcf6c3014535ebf"
  },
  {
    "url": "assets/js/65.9f957148.js",
    "revision": "8fc73ba771be36864aa1042e1fa55ef7"
  },
  {
    "url": "assets/js/66.f1fd7e2a.js",
    "revision": "bba7a52894402fd22c6eb0d9242cf0d9"
  },
  {
    "url": "assets/js/67.f809625c.js",
    "revision": "11c7450adf4bec72d8f3c37e97a53287"
  },
  {
    "url": "assets/js/68.ae528d69.js",
    "revision": "904c05d4435d6a004e6da199084f30a0"
  },
  {
    "url": "assets/js/69.60a03631.js",
    "revision": "e56f14b4dc8e3f370c8a6a04da81a2cc"
  },
  {
    "url": "assets/js/7.5041dce4.js",
    "revision": "f2c23e2ac23b68ac3e88a056dd0784fa"
  },
  {
    "url": "assets/js/70.1d9d4701.js",
    "revision": "eec85574a15eeb5b044697806a788654"
  },
  {
    "url": "assets/js/71.8343a21d.js",
    "revision": "7c78480f49a52218288761204dfbaaec"
  },
  {
    "url": "assets/js/72.95f8e771.js",
    "revision": "a704f7cb204adfc8d0e4531747e392b1"
  },
  {
    "url": "assets/js/73.bcf99c5b.js",
    "revision": "b5b4fb2e084080f63111bd4ed1ce8ab0"
  },
  {
    "url": "assets/js/74.47ab50e5.js",
    "revision": "c630ccde80c0a14d50b121e49c472b05"
  },
  {
    "url": "assets/js/75.f970b564.js",
    "revision": "9e0b8716b97915fc5b7218bc005c64ef"
  },
  {
    "url": "assets/js/76.8246232c.js",
    "revision": "e30e2eff71fc917a488484abeeecbde0"
  },
  {
    "url": "assets/js/77.651c0812.js",
    "revision": "ccde59d8582edcaf663c1c9c3f887ae9"
  },
  {
    "url": "assets/js/78.92b44eea.js",
    "revision": "7a55b6615e24b4277d03d73c2ded0837"
  },
  {
    "url": "assets/js/79.4b34f82a.js",
    "revision": "3ebbffb1ae0b7d1201000cd477d59344"
  },
  {
    "url": "assets/js/8.1407b990.js",
    "revision": "dcb7a34e3667ce40091860e9cc38e5c2"
  },
  {
    "url": "assets/js/80.bf6798e5.js",
    "revision": "26ded319ac642f38d27cdce3c7b3b34b"
  },
  {
    "url": "assets/js/81.1eb5ffc6.js",
    "revision": "407059ea5bbbf073349818c7a71598d5"
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
    "url": "assets/js/84.7cdcaae3.js",
    "revision": "c56d422eb75b7e2016313dc470e8c259"
  },
  {
    "url": "assets/js/85.61900f36.js",
    "revision": "9387b5c50cd66ec65913c2e32b85e82f"
  },
  {
    "url": "assets/js/86.ad36a100.js",
    "revision": "7832eadd6781905ffa8174aac8a5799b"
  },
  {
    "url": "assets/js/87.ae9c7535.js",
    "revision": "84864e104fd5e20b8ca20765fd2760e9"
  },
  {
    "url": "assets/js/88.0abd6c73.js",
    "revision": "d2f0365c542c42d42be9dcbbe1dc351a"
  },
  {
    "url": "assets/js/89.e39697e3.js",
    "revision": "e25492b178aa6ef3ebdb6eb07881071b"
  },
  {
    "url": "assets/js/9.7b6dd5b4.js",
    "revision": "f1ee1335cb73fc3af924d330037b0332"
  },
  {
    "url": "assets/js/90.16c04c7f.js",
    "revision": "79acdfe2806ba9d6e67a8e3c86438139"
  },
  {
    "url": "assets/js/91.d6ebf065.js",
    "revision": "c552145b068fb49cee4213b71440a3bf"
  },
  {
    "url": "assets/js/92.e55d0541.js",
    "revision": "13e375f17afe66a385886076099a2988"
  },
  {
    "url": "assets/js/93.0544ad03.js",
    "revision": "5da49182a6e3e0ff210520ba2af463c5"
  },
  {
    "url": "assets/js/94.3d87e457.js",
    "revision": "9a13010e5ac4070d9694d8cbd9b3de55"
  },
  {
    "url": "assets/js/95.6d2cc48b.js",
    "revision": "5828c6e70dacd16a27f982b18b494280"
  },
  {
    "url": "assets/js/96.9705e6ff.js",
    "revision": "dcc4525cce571690f1c11480ae52b76d"
  },
  {
    "url": "assets/js/97.7f430b22.js",
    "revision": "37925b5d01495edcf5a22746f79af032"
  },
  {
    "url": "assets/js/98.87817ff4.js",
    "revision": "7cdcb269764bdd32aa133d6c6d245fa5"
  },
  {
    "url": "assets/js/99.e295e79d.js",
    "revision": "b1476e34479914109d79445f5a7c5a5f"
  },
  {
    "url": "assets/js/app.432a7983.js",
    "revision": "1793bd5ef4529a82b24c5cdc04b905eb"
  },
  {
    "url": "assets/js/vendors~docsearch.e480d9b8.js",
    "revision": "a887f3139f3f8baba27c98087130d4d9"
  },
  {
    "url": "categories/index.html",
    "revision": "942f15efc8f14ce03b0bc734275bc537"
  },
  {
    "url": "guide.html",
    "revision": "a3889fea6609d8af35af084edfa9a148"
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
    "revision": "bf2b939bcfd2ab6e066f480ccdef2c19"
  },
  {
    "url": "logo.png",
    "revision": "4e48730bd98de9f333e6bd14d62b6c7d"
  },
  {
    "url": "mcpstudy/ide-mcp-server.html",
    "revision": "5bcc6ee5e4c9f84219b4c1902e444742"
  },
  {
    "url": "mcpstudy/mcp-knowledge.html",
    "revision": "d3970888b2db1eebde269bc956b97bc5"
  },
  {
    "url": "mcpstudy/mcp-tool.html",
    "revision": "d0559df2a409cec60b9abb54006b7662"
  },
  {
    "url": "modelstudy/11-29.html",
    "revision": "47c770836b725ec9696d57934375b586"
  },
  {
    "url": "modelstudy/123.html",
    "revision": "e467fc7992ad2ba7a7e5114449f80369"
  },
  {
    "url": "modelstudy/2025-11-04.html",
    "revision": "39c3c9df47388741d4dba395f66ae62d"
  },
  {
    "url": "modelstudy/25-12-01.html",
    "revision": "1cc72ae574764bf9098b2d57337ee5c5"
  },
  {
    "url": "modelstudy/666-多模态.html",
    "revision": "5b938bf8d15a532b3271bcb197474d0f"
  },
  {
    "url": "modelstudy/agent.html",
    "revision": "2dbc2750f3a73b6d1281208848287c7c"
  },
  {
    "url": "modelstudy/auto-model-desc.html",
    "revision": "fc809846642942619979474799015282"
  },
  {
    "url": "modelstudy/basic-aigc.html",
    "revision": "d05f19c284ad8ec7e693a1f4660309d7"
  },
  {
    "url": "modelstudy/basic-knowledge.html",
    "revision": "e9291629e3420976005fe2f05b429bce"
  },
  {
    "url": "modelstudy/compute-metrics.html",
    "revision": "e1550e81a928d967b2f6114c99a649f2"
  },
  {
    "url": "modelstudy/construct-dataset.html",
    "revision": "aeea06bdc9f8f75c963ed1e5322baf12"
  },
  {
    "url": "modelstudy/data-chunk.html",
    "revision": "2d3cd4fbe199af8b6b1de709bbd0f3cf"
  },
  {
    "url": "modelstudy/deep-learning.html",
    "revision": "aed8cce116fc5f735556ab6d4b40ee0d"
  },
  {
    "url": "modelstudy/deepseek-search.html",
    "revision": "9d5c0b9c22e89773a2d74b69b69c2afc"
  },
  {
    "url": "modelstudy/extended-learning.html",
    "revision": "008fd11ea033ce2870e480a3142bb847"
  },
  {
    "url": "modelstudy/finetuing-step5.html",
    "revision": "c3580025a4ba98329fedb69ada59eb49"
  },
  {
    "url": "modelstudy/finetuing-step9.html",
    "revision": "b73113b35eba0af6dc9a372050af9ad0"
  },
  {
    "url": "modelstudy/finetuning-error-collect.html",
    "revision": "e6dcaed4ae164d5972c2f547fe89e88f"
  },
  {
    "url": "modelstudy/finetuning-exercises-code.html",
    "revision": "4645a88b9b76aab4a7212e932e04c11c"
  },
  {
    "url": "modelstudy/finetuning-f1-scores.html",
    "revision": "c11e62d3eab98e8197cdc240b4ca8c56"
  },
  {
    "url": "modelstudy/finetuning-warn-collect.html",
    "revision": "65adcd5b290080773310b91a5695b82a"
  },
  {
    "url": "modelstudy/first-model-project.html",
    "revision": "bb074de99927bf37fb2587cda2c53805"
  },
  {
    "url": "modelstudy/function-calling.html",
    "revision": "02ef3cf924a538e667da62a310a50941"
  },
  {
    "url": "modelstudy/impl-transformer.html",
    "revision": "f43f15254e344ee94ab9d330d048f1ff"
  },
  {
    "url": "modelstudy/langchain-agent-practice.html",
    "revision": "b3acb14007f7080fcbb8247aa852527e"
  },
  {
    "url": "modelstudy/langchain-prompt.html",
    "revision": "23d6e714aced901d82e22f348c40a446"
  },
  {
    "url": "modelstudy/langchain-study.html",
    "revision": "1cf0a583647f643c1c45379a96fe8086"
  },
  {
    "url": "modelstudy/llms_generation_optimization copy.html",
    "revision": "d561857926804052e5bae72ab37ce8d8"
  },
  {
    "url": "modelstudy/llms_generation_optimization.html",
    "revision": "7b3bfa1df2a121021bbcbce2ecd4f505"
  },
  {
    "url": "modelstudy/lm_eval.html",
    "revision": "f30bd13954566688b57f12cd81b648ea"
  },
  {
    "url": "modelstudy/lora-fine-tuning.html",
    "revision": "9279e1149e23379e846d11dacf19e65a"
  },
  {
    "url": "modelstudy/mianshi.html",
    "revision": "20bce8b63785596ee974bf39b994c4d0"
  },
  {
    "url": "modelstudy/model-basic.html",
    "revision": "3d46ee020c6a7d2bbb9c290870cdae3f"
  },
  {
    "url": "modelstudy/model-case.html",
    "revision": "4e464c32d4bc3141c8e8f440b22375e1"
  },
  {
    "url": "modelstudy/model-deploy.html",
    "revision": "aac90ad6794bc4212c877da8603c93fd"
  },
  {
    "url": "modelstudy/model-english.html",
    "revision": "706151e9748f0115bb5bea7660eb2639"
  },
  {
    "url": "modelstudy/model-evaluate.html",
    "revision": "6e41d1be9481b03fe0cb2267a13b1076"
  },
  {
    "url": "modelstudy/model-fine-tuning.html",
    "revision": "acd0b0c7566dc9bf697cddca0284f121"
  },
  {
    "url": "modelstudy/model-function-calling.html",
    "revision": "ee88b5fd66b0a067f8bbede142a39a6a"
  },
  {
    "url": "modelstudy/model-langchain-rag.html",
    "revision": "9b32c0de47856709b97aa9da78e9057f"
  },
  {
    "url": "modelstudy/model-langchain.html",
    "revision": "01fb6afb17e40eb5c9f3e82bf624bd13"
  },
  {
    "url": "modelstudy/model-optimize.html",
    "revision": "61384be1bdedaf29d4e8dee6fc8e71b4"
  },
  {
    "url": "modelstudy/model-pytorch.html",
    "revision": "4095fbc4a7f5dc17e75d64f2cda8abdf"
  },
  {
    "url": "modelstudy/model-quantization.html",
    "revision": "351c9b74aa16ae885461655b52d3f5f5"
  },
  {
    "url": "modelstudy/model-question.html",
    "revision": "0b56bbe4db296293ed7560a2095d7450"
  },
  {
    "url": "modelstudy/model-rag-pain.html",
    "revision": "323b3401463ec0839bc1d2388d8352c3"
  },
  {
    "url": "modelstudy/model-rag.html",
    "revision": "e1283c930461ddf614649e8491386015"
  },
  {
    "url": "modelstudy/model-RNN.html",
    "revision": "b88f6b33e02e8e13b8b2f2426317df9c"
  },
  {
    "url": "modelstudy/model-summary.html",
    "revision": "84535f46b1b0a17fbc1f1e7bb6d89cf0"
  },
  {
    "url": "modelstudy/model-train-analyze.html",
    "revision": "2df3df3a8913fd461b3d4d17c0d0922d"
  },
  {
    "url": "modelstudy/model-train-code.html",
    "revision": "2fa9281ca59ab3c69fa378def1332f6e"
  },
  {
    "url": "modelstudy/model-train-process.html",
    "revision": "ae807b0d82245e16728d92048f2496c1"
  },
  {
    "url": "modelstudy/model-train-related.html",
    "revision": "86c169e269840d70e6e501f6e7522cb5"
  },
  {
    "url": "modelstudy/model-train.html",
    "revision": "5f6a1d70ad58daf634fd6f76a22d79b6"
  },
  {
    "url": "modelstudy/model-transformer.html",
    "revision": "c869044a4484180c2aa9204fac491405"
  },
  {
    "url": "modelstudy/model.html",
    "revision": "25db06f6a6819f7478631af60384e277"
  },
  {
    "url": "modelstudy/multi-chat.html",
    "revision": "1c7a9e05961b7dad65fd6c2ae6dd24fa"
  },
  {
    "url": "modelstudy/ner-instruct-task.html",
    "revision": "7d3471670d247181bfa6f226273198eb"
  },
  {
    "url": "modelstudy/peft.html",
    "revision": "ea256e7f2fa0e83072e44efc4cc36d11"
  },
  {
    "url": "modelstudy/project-study.html",
    "revision": "4824f05cebf8f4a4b1dad52ee4b23172"
  },
  {
    "url": "modelstudy/prompts.html",
    "revision": "406c41b5f524e9e242009a64f1ec94bd"
  },
  {
    "url": "modelstudy/quantization.html",
    "revision": "5519672e522e7e6463f373e98e8ca5d8"
  },
  {
    "url": "modelstudy/question-bank.html",
    "revision": "2e37f1e62d36cdbbc3b2618d492f9945"
  },
  {
    "url": "modelstudy/rag-eval.html",
    "revision": "8c6dfd98c4fea2fa47851f8c6a6ad2c5"
  },
  {
    "url": "modelstudy/rag-react.html",
    "revision": "0d6ee85474a3547e8b9b63392fe428fb"
  },
  {
    "url": "modelstudy/rag.html",
    "revision": "59bde4e75b6aa589af0238b46c7347a3"
  },
  {
    "url": "modelstudy/rl.html",
    "revision": "d283a69c1c58316c6ff8d490c491e19d"
  },
  {
    "url": "modelstudy/self-function-calling.html",
    "revision": "045f285263f1fc41d16d416e09abaf99"
  },
  {
    "url": "modelstudy/stage-four-chatbot.html",
    "revision": "b994ddf4523f17fef1b17836913d8ab8"
  },
  {
    "url": "modelstudy/temp.html",
    "revision": "867c9d2cfd0bba7baefb307f6678aa4c"
  },
  {
    "url": "modelstudy/temp2.html",
    "revision": "bc6532b9757e911cbcdeec1b27e10895"
  },
  {
    "url": "modelstudy/transformer-basic.html",
    "revision": "8bc7965ea110111b324e629121f1e301"
  },
  {
    "url": "modelstudy/transformer-code.html",
    "revision": "65e94ba8b1229a0fa7ad6c6088c0ac5d"
  },
  {
    "url": "modelstudy/transformer-knowledge.html",
    "revision": "b2fdcb7e449d4a84c4264429f4f05151"
  },
  {
    "url": "modelstudy/transformer-learn.html",
    "revision": "24d067d910a25b8681e3dde0e768d53e"
  },
  {
    "url": "modelstudy/transformer-question.html",
    "revision": "83c4d2b4eb2b57c7ada5723cb83f2d9f"
  },
  {
    "url": "modelstudy/transformer-related.html",
    "revision": "8c29105b88fc7e5715df5a70bec300f5"
  },
  {
    "url": "modelstudy/vector-database.html",
    "revision": "526614ab96a22e1962b9d1c24ed04cfc"
  },
  {
    "url": "modelstudy/vLLM-intro.html",
    "revision": "a21a97aa677382b2f9dc3ac991c04008"
  },
  {
    "url": "modelstudy/whatIsModel.html",
    "revision": "d245855c7afb4c253d56150e9b4f2706"
  },
  {
    "url": "other/ai-agent.html",
    "revision": "58134245dfdc80eeaa2cfcc67be22b2a"
  },
  {
    "url": "other/conda.html",
    "revision": "52f7590299fb48bfd532db3249ed01fb"
  },
  {
    "url": "other/excellentarticles.html",
    "revision": "12517b6a34d80be5ad580c906eafb7a8"
  },
  {
    "url": "other/fine-tuning-adapters.html",
    "revision": "be8d374933f7729f34d82e9810448f55"
  },
  {
    "url": "other/git-operate.html",
    "revision": "f7396bb2bc22892188bc10c2efd8c569"
  },
  {
    "url": "other/lora-0-1.html",
    "revision": "d8484cd9c1e63a86326fd4d9ed697ddd"
  },
  {
    "url": "other/model-refrence.html",
    "revision": "e80b43320156be67fb18746fed1fb850"
  },
  {
    "url": "other/python.html",
    "revision": "579bc4d09841657204347d9c5ec38980"
  },
  {
    "url": "other/pytorch-know.html",
    "revision": "9eb566ea89cfbb312492520d6ed596f4"
  },
  {
    "url": "other/rag-question-compare.html",
    "revision": "8098bdfb29b8445eb892a7a67fea71db"
  },
  {
    "url": "other/resume.html",
    "revision": "230519f878b9aa308ba5291833554165"
  },
  {
    "url": "other/swanLab-info.html",
    "revision": "0654dbdf84ec56017fc3fa1433f98b3a"
  },
  {
    "url": "other/transformer-1.html",
    "revision": "b5ea74ca376f891ce7c8a338af1d82ad"
  },
  {
    "url": "other/transformer-2.html",
    "revision": "b9074c438e3d1c32e690e6603f345cf8"
  },
  {
    "url": "other/transformer-3.html",
    "revision": "446aa51ad360ce968b2aada79e7c2fb2"
  },
  {
    "url": "other/transformer-collect.html",
    "revision": "e6c095fbcee834e1e7377b202b030c57"
  },
  {
    "url": "other/transformer-learn.html",
    "revision": "275be1cdf622fe60388ca2487ec074e9"
  },
  {
    "url": "other/using-packages.html",
    "revision": "7a64b559cc914c25a35248d6c7a1d246"
  },
  {
    "url": "pystudy/1229.html",
    "revision": "167090b70ddcd963483399a527f8fda6"
  },
  {
    "url": "pystudy/array-operation.html",
    "revision": "c223e99c7a0a7c6841b0dac95c2dd070"
  },
  {
    "url": "pystudy/basic.html",
    "revision": "8ae8ae9aa105518045ef313230c371e7"
  },
  {
    "url": "pystudy/builtin-function.html",
    "revision": "f683e2c5d59e82b2c26439d278964b6d"
  },
  {
    "url": "pystudy/class.html",
    "revision": "d552234ab7f65a04d425ba23bcae4824"
  },
  {
    "url": "pystudy/data-structure.html",
    "revision": "611dadaa9375b2f1bfb408e5c261df91"
  },
  {
    "url": "pystudy/database.html",
    "revision": "1f7a03edb12050d0c48614dd35148b31"
  },
  {
    "url": "pystudy/dict-knowledge.html",
    "revision": "48e9866cf33718c11d1a3d51e90e4edb"
  },
  {
    "url": "pystudy/exception.html",
    "revision": "481019836336a20b198a311b93136445"
  },
  {
    "url": "pystudy/file.html",
    "revision": "cbda0a81e8d7d2b3630685b656d47faa"
  },
  {
    "url": "pystudy/function.html",
    "revision": "36aebd3850e9da3d693ac6c309fdde44"
  },
  {
    "url": "pystudy/line-continue.html",
    "revision": "5b1ccbd80d593972525a033dfe6d90d4"
  },
  {
    "url": "pystudy/list-comprehension.html",
    "revision": "69d729486ad6375595320993d7a04448"
  },
  {
    "url": "pystudy/module.html",
    "revision": "418616d3dceb1fa00e66217ceac1ea71"
  },
  {
    "url": "pystudy/network.html",
    "revision": "3a631196fb772c74ef1d9af0b24f37a9"
  },
  {
    "url": "pystudy/numpy.html",
    "revision": "734dc778d344ea27c2d6e3e9038ec163"
  },
  {
    "url": "pystudy/other.html",
    "revision": "8663a4017b665ab52f354026ed469563"
  },
  {
    "url": "pystudy/package.html",
    "revision": "c96c0376f7d09044a0df9f0bbddea853"
  },
  {
    "url": "pystudy/pandas-study.html",
    "revision": "06a192370ec5d7bc777b6438f570918e"
  },
  {
    "url": "pystudy/practice.html",
    "revision": "accb84437923d8503f0dcd66acc81c4b"
  },
  {
    "url": "pystudy/process.html",
    "revision": "f9942c85ea75dcabcde8e6f0e15f894e"
  },
  {
    "url": "pystudy/python-collect-knowledge.html",
    "revision": "cf1b8d39da0afbc8b8c54e834b4e1900"
  },
  {
    "url": "pystudy/python-collect.html",
    "revision": "bccad57d4159ed63e8c2fabf445ddd8f"
  },
  {
    "url": "pystudy/python-evaluation.html",
    "revision": "c0e3b62f226622ea2c4b91dd189279d2"
  },
  {
    "url": "pystudy/python-important.html",
    "revision": "46189cb2061e414fdd0c4d44784e1dd0"
  },
  {
    "url": "pystudy/python-list.html",
    "revision": "e654f9fcd45fba517374bae58c0492a0"
  },
  {
    "url": "pystudy/python-other-related.html",
    "revision": "f62622e9ec2a24f0d600bcbe755ae905"
  },
  {
    "url": "pystudy/python-set.html",
    "revision": "21e07ed0eb720bf17a55be3366454ab3"
  },
  {
    "url": "pystudy/python-storage.html",
    "revision": "96b8fef6f41546e5771615ad5d384a0c"
  },
  {
    "url": "pystudy/python-str.html",
    "revision": "6c0d06fe8d0dff3cceeff862a63da676"
  },
  {
    "url": "pystudy/python-web.html",
    "revision": "d9f4556772d838a737038a85b6532f9b"
  },
  {
    "url": "pystudy/regex.html",
    "revision": "a0bf362fa2b1253e37365ec1a8535cb8"
  },
  {
    "url": "pystudy/related-knowledge.html",
    "revision": "78a8525d29795974bd1a100b84f6fb2f"
  },
  {
    "url": "pystudy/sequence.html",
    "revision": "ed975fd76b6fd6a8e20f5bfb90ce992e"
  },
  {
    "url": "pystudy/string-function.html",
    "revision": "06b7d2d20241fae04e965356e2716904"
  },
  {
    "url": "pystudy/technology-point.html",
    "revision": "f6ddec18f60f035f956db717bf15d913"
  },
  {
    "url": "pystudy/temp-1229.html",
    "revision": "43c30d39750e2c89b9080fa702ab601d"
  },
  {
    "url": "pystudy/thread.html",
    "revision": "a71e708bf3b9f9bbeab506ff47a50e72"
  },
  {
    "url": "pystudy/use-library.html",
    "revision": "b2f62e0791de6850915e427521e75b26"
  },
  {
    "url": "pystudy/use-pip-install.html",
    "revision": "6235c89ae4c8f38aa21ac206afbc2394"
  },
  {
    "url": "react/react-advanced.html",
    "revision": "a3c0b9eca2874a33999c143f325f2590"
  },
  {
    "url": "react/react-basic.html",
    "revision": "4cbce35ec39f7f15b25a34dce307c3a0"
  },
  {
    "url": "react/react-context.html",
    "revision": "d1e2073869fb331344e27ce0960c6443"
  },
  {
    "url": "react/react-relation.html",
    "revision": "e8e551529da0bf2ff2cd0e6d81edabaf"
  },
  {
    "url": "react/ssr.html",
    "revision": "cfdba6e06d0eea21a04c129cce77831c"
  },
  {
    "url": "react/status-manage.html",
    "revision": "06a6597334747fbad9c238b4df568354"
  },
  {
    "url": "reactnative/reactnative-desc.html",
    "revision": "5748880be060e0319f3885b4a6aca5e1"
  },
  {
    "url": "reactnative/reactnative.html",
    "revision": "f8cee5e9e55dee3ec8f84fcebcf4cf46"
  },
  {
    "url": "reactnative/rn-problem.html",
    "revision": "c6dc8d22e908383900f630fe266d1f80"
  },
  {
    "url": "tag/index.html",
    "revision": "94ebddbee36c80d565d0396e0721e397"
  },
  {
    "url": "tag/React/index.html",
    "revision": "8b186bd26f675cd1eea768981e3d9cda"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "177ddf1bc48ac7ae1ecf836e4ff48f88"
  },
  {
    "url": "tag/二叉树/index.html",
    "revision": "08e37859ab06a559ee7bb8fc3362ae22"
  },
  {
    "url": "timeline/index.html",
    "revision": "82b42a83e64802ea6b4b942d1994d524"
  },
  {
    "url": "vue/basicknowledge.html",
    "revision": "fd0465ecd2aba873f17a272d8bf7d621"
  },
  {
    "url": "vue/compare.html",
    "revision": "b2ac76b475b8c51a17e740e6f6e0f2e9"
  },
  {
    "url": "vue/misnotes.html",
    "revision": "0253a13edc0590e5e028578e7bd15c92"
  },
  {
    "url": "vue/ssr.html",
    "revision": "224de2ee389e89c29b1e8b630d6b063d"
  },
  {
    "url": "vue/vue-attrs-listeners.html",
    "revision": "ab6857f0b5021a024d5ab17c141fec14"
  },
  {
    "url": "vue/vue-principle.html",
    "revision": "633fde90c3ccbbfca6a3c4acc5e1044f"
  },
  {
    "url": "vue/vue-router.html",
    "revision": "1a5870724d46b90fe5742f48be17549c"
  },
  {
    "url": "vue/vue-status.html",
    "revision": "565626655ed943f08d97c8a44fa28256"
  },
  {
    "url": "vue/vue3-basic.html",
    "revision": "728c127c2cea24198dade6caa725ac6b"
  },
  {
    "url": "vue/vue3-impl.html",
    "revision": "231d8befa3877a856b62a7957a87535b"
  },
  {
    "url": "vue/vue3.html",
    "revision": "4c87a935448fd019ff808a8393734f01"
  },
  {
    "url": "vue/vuex.html",
    "revision": "2b04b340c914bc24596233bd53c66253"
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
