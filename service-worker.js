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
    "revision": "c4eed27dd4f197293f877bed7abb4702"
  },
  {
    "url": "algorithm/algo-temp.html",
    "revision": "63244d974445ad36662728755c5f003b"
  },
  {
    "url": "algorithm/binary-search.html",
    "revision": "e4136dd174d5eb01e2bd791786843936"
  },
  {
    "url": "algorithm/binary-tree.html",
    "revision": "b3eb84783fca709457660817c8d76f84"
  },
  {
    "url": "algorithm/compare-al.html",
    "revision": "140776dccb97b2f2f1c97bd33ca158d7"
  },
  {
    "url": "algorithm/del-single-list-2.html",
    "revision": "a6f17a697e0cc857e81d48263257506d"
  },
  {
    "url": "algorithm/del-single-list.html",
    "revision": "7357165455165ed7771eb2ed57e9da33"
  },
  {
    "url": "algorithm/double-pointer.html",
    "revision": "49e147764bb5d70953763b3edfeee91a"
  },
  {
    "url": "algorithm/dynamic-plan.html",
    "revision": "ae4879a9fa5d3ddc6e2cff16fa8b0705"
  },
  {
    "url": "algorithm/effect-bracket.html",
    "revision": "798565ac29165545174f594b3fabbaf0"
  },
  {
    "url": "algorithm/greedy.html",
    "revision": "9b3fd9b303ef1b291fa5d42a3517b48f"
  },
  {
    "url": "algorithm/longasc-sequence.html",
    "revision": "e0414ff4b6207d35b3058c6da0fb67aa"
  },
  {
    "url": "algorithm/other.html",
    "revision": "fd643624f246065a56118e3f63bfa74c"
  },
  {
    "url": "algorithm/receive-rain.html",
    "revision": "4147194d5716a1f8d121b9c076e589f2"
  },
  {
    "url": "algorithm/reverse-list.html",
    "revision": "4364792e6d437c8a0cb61bfd83f7ee9d"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "4492c5e5272237ff5ebf21110aa8d447"
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
    "url": "assets/js/100.a99280b5.js",
    "revision": "945b243beb17094d63f175f63249523f"
  },
  {
    "url": "assets/js/101.8f113f6f.js",
    "revision": "9725b5ba2fbb0f69e60d56f71b3487b1"
  },
  {
    "url": "assets/js/102.27d940fd.js",
    "revision": "4b51e76298adfbfefbf12db5f655ca7e"
  },
  {
    "url": "assets/js/103.7aab96f8.js",
    "revision": "1087fa8570b3de444450216676432389"
  },
  {
    "url": "assets/js/104.9abd6222.js",
    "revision": "ee9ea6d188585ba556e9a4455f9f3c97"
  },
  {
    "url": "assets/js/105.42995d79.js",
    "revision": "2497f55e9b144f0e4cceaca12d22454a"
  },
  {
    "url": "assets/js/106.3d040520.js",
    "revision": "36ed6c8bbca7805d44b106594064966b"
  },
  {
    "url": "assets/js/107.70937e15.js",
    "revision": "c0a4561068dc47ca08e994dec0f14aca"
  },
  {
    "url": "assets/js/108.d6d60109.js",
    "revision": "18630d661e33b1eb178f32fdf5d29ff6"
  },
  {
    "url": "assets/js/109.d40a5bf4.js",
    "revision": "025729c0211549e72cf9055786fd4c58"
  },
  {
    "url": "assets/js/11.08937b90.js",
    "revision": "e77956ac107a7b0387db3e6be4e56ebe"
  },
  {
    "url": "assets/js/110.40aa93e4.js",
    "revision": "d4650e588331b36d42c02c994326c76d"
  },
  {
    "url": "assets/js/111.333a4a58.js",
    "revision": "e730b924b6d9de360d5fed8fb4bb8e8a"
  },
  {
    "url": "assets/js/112.892f34ed.js",
    "revision": "e5b4f49a5601d9bc1e466966461e68f1"
  },
  {
    "url": "assets/js/113.0c1be231.js",
    "revision": "1476508bc684b82113f5a122641c93b1"
  },
  {
    "url": "assets/js/114.34f807e3.js",
    "revision": "742a22f6ffd9ab5d83532b4e4a0e87a3"
  },
  {
    "url": "assets/js/115.6f760ab7.js",
    "revision": "610568a9889741c9899beeaab7de7f33"
  },
  {
    "url": "assets/js/116.b636fb0f.js",
    "revision": "832b0851fbe292bc5002d77e0c54e2e7"
  },
  {
    "url": "assets/js/117.e9fc92fd.js",
    "revision": "951ec075587122845e12c87190985164"
  },
  {
    "url": "assets/js/118.75a3b01a.js",
    "revision": "00a7c28927bea8cf9dd246315391c332"
  },
  {
    "url": "assets/js/119.0772ee4e.js",
    "revision": "7ab9277514e5210d16ac83ea618e5461"
  },
  {
    "url": "assets/js/120.4a1bf0f0.js",
    "revision": "3ded7e7349d47faca60667d74c263a9b"
  },
  {
    "url": "assets/js/121.50f1f0aa.js",
    "revision": "65054f43b48dee9a4d67d5d25ef031a0"
  },
  {
    "url": "assets/js/122.be472b0d.js",
    "revision": "e0313dee7771fa01f4d73dccc468e6de"
  },
  {
    "url": "assets/js/123.852243c5.js",
    "revision": "8d71ee6d9c23c98025b3e53450498aea"
  },
  {
    "url": "assets/js/124.ecd1aae0.js",
    "revision": "62f2855f776b786665d8b69c77020fda"
  },
  {
    "url": "assets/js/125.e09c3c0b.js",
    "revision": "5a5e2493c6deda6b90883f172e520ade"
  },
  {
    "url": "assets/js/126.8a568fb7.js",
    "revision": "b2f34f56b060164e6d492705e3ebfd86"
  },
  {
    "url": "assets/js/127.f869ba0e.js",
    "revision": "501226309f89c61bab75ba085ef4cefd"
  },
  {
    "url": "assets/js/128.e7fcc1f3.js",
    "revision": "63f26bdcae9e1055651ff5e116e4e734"
  },
  {
    "url": "assets/js/129.cb16f385.js",
    "revision": "d4d4b314629483ce8de2d705faa3832e"
  },
  {
    "url": "assets/js/130.3b4b17b7.js",
    "revision": "1f6c1f61fc2b03ee0b385bb0c0462194"
  },
  {
    "url": "assets/js/131.c60c5d60.js",
    "revision": "1c34b48c42dd3ed384e78421f659ebe4"
  },
  {
    "url": "assets/js/132.8a4964a7.js",
    "revision": "a7aee65c8f5db214b4849c07ed5e4977"
  },
  {
    "url": "assets/js/133.549855e0.js",
    "revision": "d396d8e10cacc030fc6bbdaed16f9adb"
  },
  {
    "url": "assets/js/134.bf327f95.js",
    "revision": "fda8b4df28602cb6f12e696de9d9e3af"
  },
  {
    "url": "assets/js/135.7790ba91.js",
    "revision": "5d3cee710038811ae8dbb781ec5f5670"
  },
  {
    "url": "assets/js/136.d5e9ec72.js",
    "revision": "126e79ecd7e681e48bd3e0ea61f838a4"
  },
  {
    "url": "assets/js/137.4ce20cec.js",
    "revision": "173c27b960a2f1a4f8b15c1de246afc6"
  },
  {
    "url": "assets/js/138.d610fed6.js",
    "revision": "08721b5ee11fb2848c781c4cae423abf"
  },
  {
    "url": "assets/js/139.f8ec2734.js",
    "revision": "944b95fee4160b6d355c31944455de24"
  },
  {
    "url": "assets/js/14.0ac4aea5.js",
    "revision": "11b1f5df8a45d04c2f0527031b496791"
  },
  {
    "url": "assets/js/140.8f0f410d.js",
    "revision": "0f056604d0f44526dfac33d2da23cd70"
  },
  {
    "url": "assets/js/141.a02119e1.js",
    "revision": "9fe578c9dc839ba768655c584429d8d7"
  },
  {
    "url": "assets/js/142.eb392dc0.js",
    "revision": "a830b8816edb117653fb9db59df2c94d"
  },
  {
    "url": "assets/js/143.3ede9a7a.js",
    "revision": "d1779a58da9a3743ea81169b6d009f46"
  },
  {
    "url": "assets/js/144.11691e85.js",
    "revision": "50087e3e3a6084214d2b66075422389b"
  },
  {
    "url": "assets/js/145.86145108.js",
    "revision": "36d73eb3831b6973e0e1103ab38b64be"
  },
  {
    "url": "assets/js/146.ef752381.js",
    "revision": "c5adea7e91e73ec541295de7a365d059"
  },
  {
    "url": "assets/js/147.6714cd9c.js",
    "revision": "3c2b6d9ba09858ab45cc191dfd18c9e7"
  },
  {
    "url": "assets/js/148.a19b66a9.js",
    "revision": "acd2668b1be6e7540eb1c3fc4ee62c73"
  },
  {
    "url": "assets/js/149.3af6d0b5.js",
    "revision": "7e6ee223663394153778e597a7323788"
  },
  {
    "url": "assets/js/15.2cac15c3.js",
    "revision": "688079c52f80af83336ee63d8b5680a1"
  },
  {
    "url": "assets/js/150.dacfa1c6.js",
    "revision": "7782019b069dd7c34037379f0d47c567"
  },
  {
    "url": "assets/js/151.6c55e935.js",
    "revision": "19150420892876b4e02698103da9c656"
  },
  {
    "url": "assets/js/152.75e10da2.js",
    "revision": "c05cc3c17545110837305c5e125c7eaa"
  },
  {
    "url": "assets/js/153.2002c40d.js",
    "revision": "2536e3636f8e9f26c51783ef784c8a2a"
  },
  {
    "url": "assets/js/154.04f69b19.js",
    "revision": "a3478be9509628228bc6c327f1886e8f"
  },
  {
    "url": "assets/js/155.3df195a1.js",
    "revision": "1bebd79581768fd28a6e866c0a552899"
  },
  {
    "url": "assets/js/156.636d877e.js",
    "revision": "04a3029c8adc1cd264fcf2c471843214"
  },
  {
    "url": "assets/js/157.bb17a2a1.js",
    "revision": "6e93f50167e96e65174320096fa70271"
  },
  {
    "url": "assets/js/158.0a07aea6.js",
    "revision": "ff216dc1aa7d64f188aa2eee048cb114"
  },
  {
    "url": "assets/js/159.4f3e205b.js",
    "revision": "9a1d348e1daca1db212093b08c8cc892"
  },
  {
    "url": "assets/js/16.41c97ec9.js",
    "revision": "93d14d23f5306cdccf9cc340e18c5164"
  },
  {
    "url": "assets/js/160.559310c7.js",
    "revision": "e84252e63236eb5d9ac13608f650b0cb"
  },
  {
    "url": "assets/js/161.d7004006.js",
    "revision": "5ecb95e9150f9363a2df8e7684194ff5"
  },
  {
    "url": "assets/js/162.39d4a2b9.js",
    "revision": "477389dae0c200f0220e2b787aa736dd"
  },
  {
    "url": "assets/js/163.08c33750.js",
    "revision": "112577213fe10f6f6ca450737d8a4031"
  },
  {
    "url": "assets/js/164.3a38cf38.js",
    "revision": "32ff772056127fe3fa9f109fb2c276d7"
  },
  {
    "url": "assets/js/165.7e4b3648.js",
    "revision": "efd31dda651eee2509360e30f2303a47"
  },
  {
    "url": "assets/js/166.9f9a8206.js",
    "revision": "3c1af064f89cc924b4b52e24c62d3534"
  },
  {
    "url": "assets/js/167.265e1dda.js",
    "revision": "97c1e62582be732d5b256fba1cd74468"
  },
  {
    "url": "assets/js/168.27e1e9f4.js",
    "revision": "4cc2fe94f37e9b361654905375ee0cf1"
  },
  {
    "url": "assets/js/169.5bd9597b.js",
    "revision": "9b8eb9f8cd57ce4af1eaceafe9a3eb15"
  },
  {
    "url": "assets/js/17.29a60e10.js",
    "revision": "c12cab21b0e58f47d805749f1a837598"
  },
  {
    "url": "assets/js/170.68008d87.js",
    "revision": "dd72dac1b73475aa94a8ff6694d18f80"
  },
  {
    "url": "assets/js/171.9071c2ef.js",
    "revision": "49454a3ed907b7f5b394442b5f99a196"
  },
  {
    "url": "assets/js/172.36a74d12.js",
    "revision": "40e735c01354e5e64b676c8baf038379"
  },
  {
    "url": "assets/js/173.b777dfa5.js",
    "revision": "ca502e018c3e75464cf23b3c5eb6a179"
  },
  {
    "url": "assets/js/174.f0e9023f.js",
    "revision": "83c1249419d4f27daa7febae41662132"
  },
  {
    "url": "assets/js/175.a009efef.js",
    "revision": "c385d9df238ef191cc641a10fc35fbae"
  },
  {
    "url": "assets/js/176.693ccd0f.js",
    "revision": "265f7b430e0f9d7ce696bcaab5b3e1ba"
  },
  {
    "url": "assets/js/177.3dc2ea6e.js",
    "revision": "e76f188c6aceda444405c7d0db121589"
  },
  {
    "url": "assets/js/178.ff5281c4.js",
    "revision": "13ad388315f783a1ac3eb3ec0cddeeb9"
  },
  {
    "url": "assets/js/179.9e26696b.js",
    "revision": "90521f5caf342b492ccb15120a7346a4"
  },
  {
    "url": "assets/js/18.27fd2b83.js",
    "revision": "bd9d5b805bca2ffea52562e712745e52"
  },
  {
    "url": "assets/js/180.bab0d905.js",
    "revision": "b42e1e16700ffad8bc88a5553eebb4a4"
  },
  {
    "url": "assets/js/181.7cfe057a.js",
    "revision": "4e689b4e2d82ba98ba148360304ca0b0"
  },
  {
    "url": "assets/js/182.3b79e656.js",
    "revision": "328d5134686324cbf41f56ffa34fc245"
  },
  {
    "url": "assets/js/183.4a168a8c.js",
    "revision": "f2b4f66c78f6950dc768acad8979d655"
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
    "url": "assets/js/39.c2783769.js",
    "revision": "0fbac52bb669e493ef1e928bcb16d209"
  },
  {
    "url": "assets/js/4.a36b649a.js",
    "revision": "a1af6d49f1ee40330c85d48e323c6ea8"
  },
  {
    "url": "assets/js/40.b84f239b.js",
    "revision": "ba167c732845bb4eac078623e5d89b2e"
  },
  {
    "url": "assets/js/41.a230726b.js",
    "revision": "77b2e7d11c3affe6c4cc137a0ca0a2ba"
  },
  {
    "url": "assets/js/42.7a8e7b8e.js",
    "revision": "c99e321f9216a45e431de4c0edca5416"
  },
  {
    "url": "assets/js/43.8389ecb1.js",
    "revision": "5ebbc49e4c0ecfae567f0f31438d73a3"
  },
  {
    "url": "assets/js/44.31e84185.js",
    "revision": "57f1f29ed8524817db2c97ab8660c8df"
  },
  {
    "url": "assets/js/45.4a357b71.js",
    "revision": "b7d511cfe6d33c852c4eb750076d5c9e"
  },
  {
    "url": "assets/js/46.2e3ff6e3.js",
    "revision": "c14e08013346069183dea92a5fc8dbad"
  },
  {
    "url": "assets/js/47.85624427.js",
    "revision": "84ddbd072258e5f6586d4a304f299630"
  },
  {
    "url": "assets/js/48.080a766d.js",
    "revision": "ba8e5f9b7640bdc21c3a7a0459d44dae"
  },
  {
    "url": "assets/js/49.67c2077d.js",
    "revision": "301f55739d11eaa88306bed8a207f300"
  },
  {
    "url": "assets/js/5.ade88313.js",
    "revision": "41c0c07ec8d7952411e4a9ff01130d28"
  },
  {
    "url": "assets/js/50.3c07d153.js",
    "revision": "cacee8d669c9135cc68e49d798d7a768"
  },
  {
    "url": "assets/js/51.717366ae.js",
    "revision": "5ae82362d4a1bc781599282061e98211"
  },
  {
    "url": "assets/js/52.6bacc180.js",
    "revision": "86461d99c09403a377a03df316d1a130"
  },
  {
    "url": "assets/js/53.ea1cf3cf.js",
    "revision": "6a035c86c6b58df1a6267fcff5765102"
  },
  {
    "url": "assets/js/54.ae21c7a9.js",
    "revision": "c39135c3ea5a72e774a364ebff9e48ab"
  },
  {
    "url": "assets/js/55.ac16bad8.js",
    "revision": "5d692daf8bf1bcf304ba6a0b3a301e71"
  },
  {
    "url": "assets/js/56.d8a6f247.js",
    "revision": "a663a72e5eaa973372b2bd95bfb8c006"
  },
  {
    "url": "assets/js/57.4fa64816.js",
    "revision": "a25ae460be937fab2eb1b90a1d70d045"
  },
  {
    "url": "assets/js/58.31425697.js",
    "revision": "c0157b638d67846115c7fedfceb53a3b"
  },
  {
    "url": "assets/js/59.cbfe735e.js",
    "revision": "bcb7f566df22d8166ba75f5a0c59ecd5"
  },
  {
    "url": "assets/js/6.3551780c.js",
    "revision": "fe0ed93201a286fa45177a397258d276"
  },
  {
    "url": "assets/js/60.378a1779.js",
    "revision": "55c4e7c39c3ab3bf2f2d32d81d0db635"
  },
  {
    "url": "assets/js/61.16b64626.js",
    "revision": "201bceaa536767d5b18f61a6307025c9"
  },
  {
    "url": "assets/js/62.34fffc4e.js",
    "revision": "2b5cddc3f9e7944de91d4d3e6e8cd529"
  },
  {
    "url": "assets/js/63.4cd2d9e3.js",
    "revision": "c3d69c22d50145675f5bcce8edcd3f3d"
  },
  {
    "url": "assets/js/64.76e44ea5.js",
    "revision": "dce28e4fc2003a2041cc860c00853e9c"
  },
  {
    "url": "assets/js/65.07b3227f.js",
    "revision": "ba2d2814843c9eb85b03e7837d3c6110"
  },
  {
    "url": "assets/js/66.516b29ef.js",
    "revision": "400040c065ca7469a08ecbeaa7662c46"
  },
  {
    "url": "assets/js/67.f393816a.js",
    "revision": "dd348ffdc554f5c1032eab95abb0f96f"
  },
  {
    "url": "assets/js/68.149dfb42.js",
    "revision": "9c8af17effd09736376617d8c04ac176"
  },
  {
    "url": "assets/js/69.8e039d90.js",
    "revision": "88896566a7425d4daebbd95f5e33eb6e"
  },
  {
    "url": "assets/js/7.5041dce4.js",
    "revision": "f2c23e2ac23b68ac3e88a056dd0784fa"
  },
  {
    "url": "assets/js/70.04be4e20.js",
    "revision": "7438098f9c6f7a82f858d7d35d52e610"
  },
  {
    "url": "assets/js/71.8cb6552f.js",
    "revision": "5954352d14646974b4a056e5c1b18f08"
  },
  {
    "url": "assets/js/72.9a07aee1.js",
    "revision": "42c1df304eb39f1ff34669dcdd6c9f2b"
  },
  {
    "url": "assets/js/73.892cf514.js",
    "revision": "86cebf766054f1fb78b2fdaf77a353c4"
  },
  {
    "url": "assets/js/74.dfcbf8f3.js",
    "revision": "40511e2519a64eefc485a723722d71f1"
  },
  {
    "url": "assets/js/75.78bd33f6.js",
    "revision": "82d7fbcd466d1dbd3e4c6db5d7c9a202"
  },
  {
    "url": "assets/js/76.70093d34.js",
    "revision": "9b05837b0c6d8516d2df0313c2c9d136"
  },
  {
    "url": "assets/js/77.2a11d486.js",
    "revision": "338c7d0bfc65ed71f683f68bbddcba60"
  },
  {
    "url": "assets/js/78.0d9822b4.js",
    "revision": "1863db1099d2ed4ecbfc952a075f5d66"
  },
  {
    "url": "assets/js/79.890a0747.js",
    "revision": "935c43020f1be533abb04ecb8c741bdf"
  },
  {
    "url": "assets/js/8.1407b990.js",
    "revision": "dcb7a34e3667ce40091860e9cc38e5c2"
  },
  {
    "url": "assets/js/80.c528f7f3.js",
    "revision": "a96624c1fb303c8290208e812e8f0ef0"
  },
  {
    "url": "assets/js/81.323f313b.js",
    "revision": "67902d8a149a3ff8c98d2beff54032c8"
  },
  {
    "url": "assets/js/82.42930329.js",
    "revision": "5b08615727fc9dde808e151566bf7fc8"
  },
  {
    "url": "assets/js/83.72ea295c.js",
    "revision": "c8d8e9131af14ead7dbbf2926be1c0af"
  },
  {
    "url": "assets/js/84.44a8c234.js",
    "revision": "74c01b4b163d664633917fd8d8ce42ac"
  },
  {
    "url": "assets/js/85.c98253fc.js",
    "revision": "1620612fcb046686932ea7c498fe00db"
  },
  {
    "url": "assets/js/86.371e678f.js",
    "revision": "42b17dc68aeb680c2780a7ea9c7ec315"
  },
  {
    "url": "assets/js/87.5d932593.js",
    "revision": "570f35e693da5cd9ab7a52a2b76a5a2c"
  },
  {
    "url": "assets/js/88.2a7196ae.js",
    "revision": "3603ea4233393c6ab49bc290e2278ca3"
  },
  {
    "url": "assets/js/89.e90831d9.js",
    "revision": "50a73366c7c47c7b337c2aba258c3ca1"
  },
  {
    "url": "assets/js/9.7b6dd5b4.js",
    "revision": "f1ee1335cb73fc3af924d330037b0332"
  },
  {
    "url": "assets/js/90.c519e810.js",
    "revision": "b6009c287347aeadf6221a26669b4e7d"
  },
  {
    "url": "assets/js/91.daf0a508.js",
    "revision": "700db607583c3c0278855b2cac72d2eb"
  },
  {
    "url": "assets/js/92.ce940219.js",
    "revision": "ec2614da010a7b39e487198a6619ba02"
  },
  {
    "url": "assets/js/93.a71660be.js",
    "revision": "ddba0714429c8dd92306a8529e662cf0"
  },
  {
    "url": "assets/js/94.a0f9a8e2.js",
    "revision": "a646d4d4f3b0b7365c4c853ad6cc5407"
  },
  {
    "url": "assets/js/95.747c50b7.js",
    "revision": "623b98dcbbaf4d6ef2e6f61c5cbc1962"
  },
  {
    "url": "assets/js/96.e198a3f2.js",
    "revision": "566ce83f5e8f035bd0b9b4e6d71a716e"
  },
  {
    "url": "assets/js/97.8aa2cfa5.js",
    "revision": "0e6f437161e3a7ba36c15c299d3948c5"
  },
  {
    "url": "assets/js/98.d9cd076d.js",
    "revision": "6d41099859cf4086cc91c444b791cb40"
  },
  {
    "url": "assets/js/99.b180cebf.js",
    "revision": "7e56e36be7653caf0fc5d7746c06cdc7"
  },
  {
    "url": "assets/js/app.7d9ae305.js",
    "revision": "560b1b5b4f6f1ec7815164fab4ef2ca1"
  },
  {
    "url": "assets/js/vendors~docsearch.e480d9b8.js",
    "revision": "a887f3139f3f8baba27c98087130d4d9"
  },
  {
    "url": "categories/index.html",
    "revision": "9c2c2b64c10fd7b8cae0c98c80cd0f43"
  },
  {
    "url": "guide.html",
    "revision": "5dc8609344f6efc89474bbfecea7a7c8"
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
    "revision": "53f0d57a1ea7189cc4bf998e500ea862"
  },
  {
    "url": "logo.png",
    "revision": "4e48730bd98de9f333e6bd14d62b6c7d"
  },
  {
    "url": "mcpstudy/ide-mcp-server.html",
    "revision": "9be512baf1857218c900a29430f15dab"
  },
  {
    "url": "mcpstudy/mcp-knowledge.html",
    "revision": "4676cc1b0cf6d17ff6096eb34cb4419d"
  },
  {
    "url": "modelstudy/123.html",
    "revision": "9008e2db72596b7174ef2c935f97330f"
  },
  {
    "url": "modelstudy/2025-11-04.html",
    "revision": "b712d6f416cce4f43f260ece6c409ca8"
  },
  {
    "url": "modelstudy/666-多模态.html",
    "revision": "a38a531c8c6fa4971d33eb4b78645731"
  },
  {
    "url": "modelstudy/agent.html",
    "revision": "6c8f357cedd2830fa148b7ff1d5530a0"
  },
  {
    "url": "modelstudy/auto-model-desc.html",
    "revision": "d6150f67fd1f6e7c471fbb7b321df511"
  },
  {
    "url": "modelstudy/compute-metrics.html",
    "revision": "fd0fa9b57d74f398705930466a54ade3"
  },
  {
    "url": "modelstudy/construct-dataset.html",
    "revision": "e6f314c9c4608709d786f70555c203f3"
  },
  {
    "url": "modelstudy/deep-learning.html",
    "revision": "861b9bd3c4c2c24598336f7981498934"
  },
  {
    "url": "modelstudy/deepseek-search.html",
    "revision": "53569b9ca4e03ac6b5b786e398c60736"
  },
  {
    "url": "modelstudy/extended-learning.html",
    "revision": "37399b981cb34e1cd3d842493a3aef59"
  },
  {
    "url": "modelstudy/finetuing-step5.html",
    "revision": "5ac222f568d60943b678e0dceb3990da"
  },
  {
    "url": "modelstudy/finetuing-step9.html",
    "revision": "c3d7fda2143f3bc085c3894fe09529b9"
  },
  {
    "url": "modelstudy/finetuning-error-collect.html",
    "revision": "d75333ec32c3f0718ffa908e8609654f"
  },
  {
    "url": "modelstudy/finetuning-exercises-code.html",
    "revision": "239294ed6cafcf880549659466f309ec"
  },
  {
    "url": "modelstudy/finetuning-f1-scores.html",
    "revision": "ae68207eeba0f03131cc7bb22ad14d79"
  },
  {
    "url": "modelstudy/finetuning-warn-collect.html",
    "revision": "a4bf183f6f8eed703085ce4ac663751a"
  },
  {
    "url": "modelstudy/first-model-project.html",
    "revision": "15e405ad07de93c4438c909405683611"
  },
  {
    "url": "modelstudy/impl-transformer.html",
    "revision": "7f1f45c49f1d5d73d0f39f8b3e6e0c8b"
  },
  {
    "url": "modelstudy/langchain-agent-practice.html",
    "revision": "390e8e88bdf48cf2b49d3800327e2997"
  },
  {
    "url": "modelstudy/langchain-prompt.html",
    "revision": "b9500b71a134bc2d18ed9cee5ec24068"
  },
  {
    "url": "modelstudy/langchain-study.html",
    "revision": "946e640843083358de71b4fdb974277d"
  },
  {
    "url": "modelstudy/llms_generation_optimization copy.html",
    "revision": "d0d16c815cea2242b3b418f1493e62f8"
  },
  {
    "url": "modelstudy/llms_generation_optimization.html",
    "revision": "31761c8eef599529ee09b89d3f448017"
  },
  {
    "url": "modelstudy/lm_eval.html",
    "revision": "70b00f08828d727b371a465ff406b2af"
  },
  {
    "url": "modelstudy/lora-fine-tuning.html",
    "revision": "5e1b74ee249c49005bbed2b3839b64e1"
  },
  {
    "url": "modelstudy/mianshi.html",
    "revision": "459e405eeba3c85ea41863c6a08bede0"
  },
  {
    "url": "modelstudy/model-basic.html",
    "revision": "9db748b26379e3691f13792e4f6db092"
  },
  {
    "url": "modelstudy/model-case.html",
    "revision": "28029d9016b256cc3aafebee30d1ccd1"
  },
  {
    "url": "modelstudy/model-deploy.html",
    "revision": "e935820b536fa503f8904545569cce8d"
  },
  {
    "url": "modelstudy/model-english.html",
    "revision": "827cb5526fff3a22aec3a11153ce7d30"
  },
  {
    "url": "modelstudy/model-evaluate.html",
    "revision": "1f181ec9d59c029f80d1247f92280f42"
  },
  {
    "url": "modelstudy/model-fine-tuning.html",
    "revision": "e15d9de6cbc43166f8395d19b8d6456b"
  },
  {
    "url": "modelstudy/model-function-calling.html",
    "revision": "5c22d4e1e077f913b99abe2a292a51fa"
  },
  {
    "url": "modelstudy/model-langchain-rag.html",
    "revision": "c9079401fb57c74178c69b2439fbf3cc"
  },
  {
    "url": "modelstudy/model-langchain.html",
    "revision": "0bef24da48f0009067581b8827916463"
  },
  {
    "url": "modelstudy/model-optimize.html",
    "revision": "4bbd56cb2104cd58b655ee99c3f45cc1"
  },
  {
    "url": "modelstudy/model-pytorch.html",
    "revision": "3159d3b7c55f62637def6eff1697bc16"
  },
  {
    "url": "modelstudy/model-quantization.html",
    "revision": "0d144cce12efdceddf62d1a913c89384"
  },
  {
    "url": "modelstudy/model-question.html",
    "revision": "344e446afd8e4cd1ef971d103c05268f"
  },
  {
    "url": "modelstudy/model-rag-pain.html",
    "revision": "69bc20aa161a4246f9dd5dd3c2d9fd7f"
  },
  {
    "url": "modelstudy/model-rag.html",
    "revision": "91d7e55d8e32862cfc488a4cfa6a97eb"
  },
  {
    "url": "modelstudy/model-RNN.html",
    "revision": "c0f3fd28b78cd9e78bff870da68c0618"
  },
  {
    "url": "modelstudy/model-summary.html",
    "revision": "6697f5c56a4218ca243389689cc1fb92"
  },
  {
    "url": "modelstudy/model-train-analyze.html",
    "revision": "25fa708c111ff6c2e9ab20c90f978685"
  },
  {
    "url": "modelstudy/model-train-code.html",
    "revision": "929f72616c431d5bac2541f30c8cb19b"
  },
  {
    "url": "modelstudy/model-train-process.html",
    "revision": "df058ef6ff9cf4b1abd211decd22c162"
  },
  {
    "url": "modelstudy/model-train.html",
    "revision": "f919144253360d22cb378a24398d0b73"
  },
  {
    "url": "modelstudy/model-transformer.html",
    "revision": "cbec305541797dcf673f0c9485865345"
  },
  {
    "url": "modelstudy/model.html",
    "revision": "cd4c42f80df2bc9e12db6abb47763fae"
  },
  {
    "url": "modelstudy/ner-instruct-task.html",
    "revision": "1ed93149511a6a571b7f0ed5bf07dbd9"
  },
  {
    "url": "modelstudy/project-study.html",
    "revision": "62ea51c4940a0e5c40a4851d4529debb"
  },
  {
    "url": "modelstudy/self-function-calling.html",
    "revision": "eb81a1952f59fde05fc7264ad05c6cb6"
  },
  {
    "url": "modelstudy/stage-four-chatbot.html",
    "revision": "425d2f962c6e4f90288b6201b9fe48ff"
  },
  {
    "url": "modelstudy/temp.html",
    "revision": "53516065a1ad529b44c97256663e5b65"
  },
  {
    "url": "modelstudy/temp2.html",
    "revision": "fba9b1793449721f20babd7cde5a8a5c"
  },
  {
    "url": "modelstudy/transformer-code.html",
    "revision": "f6667749c007802d4ba7fc109a763fdc"
  },
  {
    "url": "modelstudy/transformer-knowledge.html",
    "revision": "a84240ca08db7a62848e46b81dc61bf0"
  },
  {
    "url": "modelstudy/transformer-learn.html",
    "revision": "c559f0189e9bb801ed48f2d9f6bcabd2"
  },
  {
    "url": "modelstudy/transformer-question.html",
    "revision": "6c7078befd6167d90cd94bd49a45348a"
  },
  {
    "url": "modelstudy/transformer-related.html",
    "revision": "e9b3b659d639fc0d75329b18181df4d6"
  },
  {
    "url": "modelstudy/vector-database.html",
    "revision": "893a370617d0604cffab8064bc1f9220"
  },
  {
    "url": "modelstudy/vLLM-intro.html",
    "revision": "21f4e3f6d154fe2c790bd09ebac6ceb3"
  },
  {
    "url": "modelstudy/whatIsModel.html",
    "revision": "1b77445b2fd5a253a42ce0a22eede9a3"
  },
  {
    "url": "other/ai-agent.html",
    "revision": "e35c8a7143b58c7a4a256584b959aefe"
  },
  {
    "url": "other/conda.html",
    "revision": "8ad380ae5d054a56abf6f2af92cd702a"
  },
  {
    "url": "other/excellentarticles.html",
    "revision": "95193d2cbc2881f5fe4e61ccfef835b6"
  },
  {
    "url": "other/fine-tuning-adapters.html",
    "revision": "10885cd2cb9287749bcffb986539aa33"
  },
  {
    "url": "other/git-operate.html",
    "revision": "27f84a44cf7c1ccd060e870ab0879f8a"
  },
  {
    "url": "other/lora-0-1.html",
    "revision": "3de4730f94447bfaf1c4cc1020a70b3d"
  },
  {
    "url": "other/model-refrence.html",
    "revision": "471c34e666d499a2d6856bd555efec0d"
  },
  {
    "url": "other/python.html",
    "revision": "5f1b7f445761ead2937e5215eb60b0a6"
  },
  {
    "url": "other/pytorch-know.html",
    "revision": "a2233a548800359001a90d9001cc636c"
  },
  {
    "url": "other/swanLab-info.html",
    "revision": "294a967a1a5ff7b1b8eee0fa9489568b"
  },
  {
    "url": "other/transformer-1.html",
    "revision": "3ce4f844e5d27fd361c50b5d0bafe0a5"
  },
  {
    "url": "other/transformer-2.html",
    "revision": "8aa6bfb8098dbbff80913a8e04659f2f"
  },
  {
    "url": "other/transformer-3.html",
    "revision": "69103ff74a73aaaed8162b8c0c8a6163"
  },
  {
    "url": "other/transformer-collect.html",
    "revision": "00b3bf5e01390868caa2e45ecb25acfe"
  },
  {
    "url": "other/transformer-learn.html",
    "revision": "d02bcc94e4c96de199e62ca83b06480a"
  },
  {
    "url": "other/using-packages.html",
    "revision": "409d22c7a2e5209866ad589621ee5949"
  },
  {
    "url": "pystudy/array-operation.html",
    "revision": "e3f04a37639c0a8ecddc5c46a559a607"
  },
  {
    "url": "pystudy/basic.html",
    "revision": "cbdf34e07ffd05e39fc0ba1b39850fad"
  },
  {
    "url": "pystudy/builtin-function.html",
    "revision": "4a616cf9417ec3871b9aa35449528abd"
  },
  {
    "url": "pystudy/class.html",
    "revision": "f39d3dfc7d7b2fe55cd250d85ac0378e"
  },
  {
    "url": "pystudy/data-structure.html",
    "revision": "82457233993c9e2e439f0536d24f0f46"
  },
  {
    "url": "pystudy/database.html",
    "revision": "00e665f01ef8b28972bf1b54b88fbdf6"
  },
  {
    "url": "pystudy/exception.html",
    "revision": "1d9dc77267b10d263535129ffc686fe9"
  },
  {
    "url": "pystudy/file.html",
    "revision": "ba27cb68bfe04d642a3fc1740ffd9085"
  },
  {
    "url": "pystudy/function.html",
    "revision": "6c07e400dba2a5fb0385755b306dee44"
  },
  {
    "url": "pystudy/line-continue.html",
    "revision": "c8569eb317cd1cdbd31291b42cdec610"
  },
  {
    "url": "pystudy/module.html",
    "revision": "8f6f805d20519aa07b59488026883e8e"
  },
  {
    "url": "pystudy/network.html",
    "revision": "4f53cf97c269cdc396fe8bb501c9d606"
  },
  {
    "url": "pystudy/numpy.html",
    "revision": "96c1f0ee7197734a4a84664150e6aa1b"
  },
  {
    "url": "pystudy/package.html",
    "revision": "76392072895cf7162e18c8a0ef78e80b"
  },
  {
    "url": "pystudy/pandas-study.html",
    "revision": "4856461ee0e70d96a67d75a54672f2dd"
  },
  {
    "url": "pystudy/practice.html",
    "revision": "f564702d13f27a9c53ec98eab7ad0f1b"
  },
  {
    "url": "pystudy/process.html",
    "revision": "1f6d7e6d81e6bf2ab55ed9ae48a25868"
  },
  {
    "url": "pystudy/python-collect.html",
    "revision": "219d61c540f850ac10c66cdb1f5a6253"
  },
  {
    "url": "pystudy/python-important.html",
    "revision": "0bda01e8e53f1bea6f15188af94cd005"
  },
  {
    "url": "pystudy/regex.html",
    "revision": "5454aa6901b4b1ad8e4fdbcde220243c"
  },
  {
    "url": "pystudy/string-function.html",
    "revision": "60c787231c6a82c9a1b127c48f56041b"
  },
  {
    "url": "pystudy/technology-point.html",
    "revision": "61ccaf852806e0d429cc6808ecb77bef"
  },
  {
    "url": "pystudy/thread.html",
    "revision": "3e5b9af3eaef2019579420eeebdfa8b9"
  },
  {
    "url": "pystudy/use-library.html",
    "revision": "41d9f08f682a11844eaac186911e8e30"
  },
  {
    "url": "pystudy/use-pip-install.html",
    "revision": "12ff9ae487d79840769aee85f482973b"
  },
  {
    "url": "react/react-advanced.html",
    "revision": "b609f78106e586296b0d85c40b0ad5b8"
  },
  {
    "url": "react/react-basic.html",
    "revision": "1f779a92da6b037693a4f57290f69d38"
  },
  {
    "url": "react/react-context.html",
    "revision": "ec98b9c4f3ba51b58a2030345685161c"
  },
  {
    "url": "react/react-relation.html",
    "revision": "82a5a1098d58512c82fb94102de0dd52"
  },
  {
    "url": "react/ssr.html",
    "revision": "47f010dcfacafdf8b90bd02cd9990c9b"
  },
  {
    "url": "react/status-manage.html",
    "revision": "ef5f719f5ee3d9e24760c8c0b202a965"
  },
  {
    "url": "reactnative/reactnative-desc.html",
    "revision": "6302f652b2e49698f43dd4de39c6b5f5"
  },
  {
    "url": "reactnative/reactnative.html",
    "revision": "455e57a298c901a86e04a9e3f928bfd2"
  },
  {
    "url": "reactnative/rn-problem.html",
    "revision": "446e965466e6158dfa6b5b8df93c94c4"
  },
  {
    "url": "tag/index.html",
    "revision": "702a08439f015ba5e2105f80e260be4f"
  },
  {
    "url": "tag/React/index.html",
    "revision": "17e543843f63a0db321b716fb2ce2462"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "a42bb0bfda46e091a21f1ed8dd4d61e2"
  },
  {
    "url": "tag/二叉树/index.html",
    "revision": "0b3babe6c66fdc0a7a4f1d6ccd70374c"
  },
  {
    "url": "timeline/index.html",
    "revision": "907e914039e3f962c2a4bc7e4977754c"
  },
  {
    "url": "vue/basicknowledge.html",
    "revision": "3e2992fece869abdf8f3435f25a5fe28"
  },
  {
    "url": "vue/compare.html",
    "revision": "9029e5d877eb55bcc7823c7a02ae74cd"
  },
  {
    "url": "vue/misnotes.html",
    "revision": "8d50f0edd5dded27b52313323050f0ba"
  },
  {
    "url": "vue/ssr.html",
    "revision": "f4193bb472dcf5b2b3708918a2a7290f"
  },
  {
    "url": "vue/vue-attrs-listeners.html",
    "revision": "34967680d0428b3057049355103d2a15"
  },
  {
    "url": "vue/vue-principle.html",
    "revision": "42d02b52eedaa6ed00fabc3586d47c67"
  },
  {
    "url": "vue/vue-router.html",
    "revision": "b5e8317ca4342a9ea717449f6709bbe4"
  },
  {
    "url": "vue/vue-status.html",
    "revision": "76d055c4b4ea1852fc8974c1b5fbad93"
  },
  {
    "url": "vue/vue3-basic.html",
    "revision": "30cfe74c1e051bb9c67d103910a422e6"
  },
  {
    "url": "vue/vue3-impl.html",
    "revision": "e346fee749b45039875f9e77ea595d15"
  },
  {
    "url": "vue/vue3.html",
    "revision": "6a78bd6c267e75c217c76197c91d0eb2"
  },
  {
    "url": "vue/vuex.html",
    "revision": "476fb9a9b8817bcdb9793cb12ae23465"
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
