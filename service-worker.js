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
    "revision": "3b3da4a0dd9b69c96853efe6218955d8"
  },
  {
    "url": "algorithm/algo-temp.html",
    "revision": "a60177a942c6cefde9c9aa2706cea670"
  },
  {
    "url": "algorithm/binary-search.html",
    "revision": "288afa4a146123b8753c68f1f21a8483"
  },
  {
    "url": "algorithm/binary-tree.html",
    "revision": "39a5ae1efb91297bcff139dbea112ed7"
  },
  {
    "url": "algorithm/compare-al.html",
    "revision": "7b8b04d2888ee7b6049a6db4812163ad"
  },
  {
    "url": "algorithm/del-single-list-2.html",
    "revision": "140a558f6477bc95df049657560271bf"
  },
  {
    "url": "algorithm/del-single-list.html",
    "revision": "dba621b0f977a2a798dbb140ef3c3667"
  },
  {
    "url": "algorithm/double-pointer.html",
    "revision": "e62807ac2e846b58b03cc4fa3682c995"
  },
  {
    "url": "algorithm/dynamic-plan.html",
    "revision": "fac754973cf0100dced2c75aebab8cce"
  },
  {
    "url": "algorithm/effect-bracket.html",
    "revision": "82cdc76559374aad1122fcf067ffc389"
  },
  {
    "url": "algorithm/greedy.html",
    "revision": "5aecdaad2f44ec0fd5b08d8c98867b14"
  },
  {
    "url": "algorithm/longasc-sequence.html",
    "revision": "a78fb1cf438f007a8d678fdeffd857a3"
  },
  {
    "url": "algorithm/other.html",
    "revision": "e3b5d9b1b36a01f6d7a35bb2997eb26e"
  },
  {
    "url": "algorithm/receive-rain.html",
    "revision": "2e16cc876d65ab8aa54b85c951793ddf"
  },
  {
    "url": "algorithm/reverse-list.html",
    "revision": "26eddafd50c9baa7b33e8dca8666bf95"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "1f8bd430d04dade6f5fd442eea53b87c"
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
    "url": "assets/js/10.cdd9f1fd.js",
    "revision": "3fb90ed48bc2eed681fbf99c1506c01d"
  },
  {
    "url": "assets/js/100.6bd782a8.js",
    "revision": "39607c286dab9cc686028df6fc9a1fde"
  },
  {
    "url": "assets/js/101.aa82f15d.js",
    "revision": "ccc7007ec451a73fecf97344147d78c6"
  },
  {
    "url": "assets/js/102.02a5e952.js",
    "revision": "59f00c418e48edae963eb52f6c373a12"
  },
  {
    "url": "assets/js/103.f64270f5.js",
    "revision": "892926a59e9b303c1370957989266b17"
  },
  {
    "url": "assets/js/104.28c05f95.js",
    "revision": "89691e1c82b92dd68a0c20298fc8008e"
  },
  {
    "url": "assets/js/105.4a3c3d99.js",
    "revision": "fc016bf3d0a4d02f79e79f456f85592a"
  },
  {
    "url": "assets/js/106.d7163a41.js",
    "revision": "e00157bb39b2daed2e7936019a006030"
  },
  {
    "url": "assets/js/107.03567d93.js",
    "revision": "0bd1c5a50724ed1b1f6a9bcd744a9208"
  },
  {
    "url": "assets/js/108.9c57ec7a.js",
    "revision": "4cc60a037119b6d7205293a29cc63146"
  },
  {
    "url": "assets/js/109.0b5cc849.js",
    "revision": "054a813e2485ef451d5a7bf560b8bd5c"
  },
  {
    "url": "assets/js/11.513bb120.js",
    "revision": "657e08ceebf72ef80f8646f4631b6ec9"
  },
  {
    "url": "assets/js/110.c000ed58.js",
    "revision": "0f5cf2bb6fdca3b36747412cda44aaba"
  },
  {
    "url": "assets/js/111.288d96b3.js",
    "revision": "06619cf48607818edafa95795cad4ce8"
  },
  {
    "url": "assets/js/112.8a5358fb.js",
    "revision": "db9619d92991feee1b56720222214da3"
  },
  {
    "url": "assets/js/113.a1de3201.js",
    "revision": "8635b3a5280f73cd4d76e53e9b358139"
  },
  {
    "url": "assets/js/114.d8618f6d.js",
    "revision": "c48d2ad52df74c071da93388e80462ed"
  },
  {
    "url": "assets/js/115.17026eb3.js",
    "revision": "d7e17fb556be7c4640754e50bbda3e93"
  },
  {
    "url": "assets/js/116.f0cb16ec.js",
    "revision": "ed40b9fdc40ea6c6002ebc876a58676e"
  },
  {
    "url": "assets/js/117.66402938.js",
    "revision": "cccb6e601d5b377248e9df41c747dd79"
  },
  {
    "url": "assets/js/118.e16ec272.js",
    "revision": "7c4c09ccab3a94c0bf06b5ac3ddc97de"
  },
  {
    "url": "assets/js/119.53ee2325.js",
    "revision": "b6c3692c936a2f685a6b252357ff6d8f"
  },
  {
    "url": "assets/js/12.6eb5f340.js",
    "revision": "c6f540090d75e0b975b14f7caa0510b4"
  },
  {
    "url": "assets/js/120.b2631c22.js",
    "revision": "8708b7db644aeb3cebf2568f488ce7c4"
  },
  {
    "url": "assets/js/121.9b598b7e.js",
    "revision": "88285300eca12cb125e6c9611d54db52"
  },
  {
    "url": "assets/js/122.05f086d4.js",
    "revision": "36ff937bec10cf314f8c0188e39eebe9"
  },
  {
    "url": "assets/js/123.ee628a51.js",
    "revision": "317a534560b790388e61fbae9595ce50"
  },
  {
    "url": "assets/js/124.3309b897.js",
    "revision": "d14e6f458c563f7da084539c5d95b863"
  },
  {
    "url": "assets/js/125.8ba7f05f.js",
    "revision": "13d394d4881cba12493ab220015662d1"
  },
  {
    "url": "assets/js/126.363ab065.js",
    "revision": "b51d5d2ed06ea5881be33634c967d380"
  },
  {
    "url": "assets/js/127.3dc43128.js",
    "revision": "7eedd190cc87e51e592297a98584382b"
  },
  {
    "url": "assets/js/128.ead549d4.js",
    "revision": "af9c2e1742a69a227c3ec64a1980e564"
  },
  {
    "url": "assets/js/129.0219dd0d.js",
    "revision": "8ca968e701487977caa65a494db74345"
  },
  {
    "url": "assets/js/13.41ba4240.js",
    "revision": "8f4ff5e2298c20cf59a567cbeb46a9fe"
  },
  {
    "url": "assets/js/130.50036dbd.js",
    "revision": "8a6df47021abaffdca362f6328c48e26"
  },
  {
    "url": "assets/js/131.43d759e2.js",
    "revision": "6814c41a14fb9448ef344ad2ac2eea02"
  },
  {
    "url": "assets/js/132.73426bd0.js",
    "revision": "3df6727417e9940ff4ca8214ad0d1dbf"
  },
  {
    "url": "assets/js/133.bf6d3d08.js",
    "revision": "8a08e3304f71fff722a7ab0c601804e3"
  },
  {
    "url": "assets/js/134.2eb9f09e.js",
    "revision": "cd6392c206c0a0938fc64a4840da7431"
  },
  {
    "url": "assets/js/135.06734521.js",
    "revision": "76cdc7d7c34cc665966219d19d266e6e"
  },
  {
    "url": "assets/js/136.82c90848.js",
    "revision": "d59354b53a247787402ee3fb9978a3c6"
  },
  {
    "url": "assets/js/137.8569b3cd.js",
    "revision": "9ebfbc914e8c739b00754d05a12dead9"
  },
  {
    "url": "assets/js/138.8e5559db.js",
    "revision": "a0d0bde58147198b740ab4370d1e827b"
  },
  {
    "url": "assets/js/139.d7e6536d.js",
    "revision": "b6aa14c77cb85140fb69c27ed77e751b"
  },
  {
    "url": "assets/js/14.bd0b82cb.js",
    "revision": "ded68c522621873e8f86d6bc4ccd2b9f"
  },
  {
    "url": "assets/js/140.8481dfb3.js",
    "revision": "ccfec4c57cc80f0051e44ca00e57fee3"
  },
  {
    "url": "assets/js/15.491bfa3e.js",
    "revision": "86c726732431b7efa3a4daeba97ace98"
  },
  {
    "url": "assets/js/16.00b7c2a7.js",
    "revision": "7839cd637b31db5989dfe58e33df0a65"
  },
  {
    "url": "assets/js/17.2edfa6dd.js",
    "revision": "1c5798d2aed83477f3be735d5d765db4"
  },
  {
    "url": "assets/js/18.c1ed5355.js",
    "revision": "a4d72da6e510284cdd8aae4697aa53d4"
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
    "url": "assets/js/21.af0d47de.js",
    "revision": "558810f46265a663a43931921dad66ba"
  },
  {
    "url": "assets/js/22.94430091.js",
    "revision": "409ea54918f15fb9cff95b8a0fbe921a"
  },
  {
    "url": "assets/js/23.7f4160d8.js",
    "revision": "f66d959595701fd5bf1165c6e6a9085c"
  },
  {
    "url": "assets/js/24.53f66321.js",
    "revision": "c592e6c2f0c2952010866d793fd6e0bf"
  },
  {
    "url": "assets/js/25.70c7adf7.js",
    "revision": "8c2a545bb294c046c7e7bf2447c339a7"
  },
  {
    "url": "assets/js/26.ed970703.js",
    "revision": "17d31afaf6fa013a2a6f4e7724a5fba1"
  },
  {
    "url": "assets/js/27.61f08265.js",
    "revision": "5d309ca315fc29dfa3bf4d002006fa2f"
  },
  {
    "url": "assets/js/28.47f448c8.js",
    "revision": "0caefa5b6ac980e36d651f6c1b5a2564"
  },
  {
    "url": "assets/js/29.3a6d76f5.js",
    "revision": "8d0d175cf76520335689a7006f1f7c88"
  },
  {
    "url": "assets/js/3.ac02bfbd.js",
    "revision": "df39aca961144197b00f272e7dd09a49"
  },
  {
    "url": "assets/js/30.fcf9b535.js",
    "revision": "f8d7d34762ee70ad1c8b01437e0616f9"
  },
  {
    "url": "assets/js/31.8a27a1da.js",
    "revision": "e29f54dcccd998964b9eba3686761f79"
  },
  {
    "url": "assets/js/32.e4efef75.js",
    "revision": "877a45ae3639047e2bfd48ae02f9eb67"
  },
  {
    "url": "assets/js/33.ea12175d.js",
    "revision": "6cef2c3f854fa8095a9ef486852207f5"
  },
  {
    "url": "assets/js/34.bc951939.js",
    "revision": "0d8525ba5d5e03815d97199172f60e3d"
  },
  {
    "url": "assets/js/35.adfc7113.js",
    "revision": "3afa0823e9253df939b62dc77e37a9ff"
  },
  {
    "url": "assets/js/36.f4b05b10.js",
    "revision": "66063a4857bbef6d0692a328bc05922e"
  },
  {
    "url": "assets/js/37.b160f43f.js",
    "revision": "6f03709646a4f79be92deac074e2e607"
  },
  {
    "url": "assets/js/38.182e0a40.js",
    "revision": "00c5c716bfc7ebf24862789ebd23a431"
  },
  {
    "url": "assets/js/39.f6688462.js",
    "revision": "0e33ceecef89f773302926317384072f"
  },
  {
    "url": "assets/js/4.e51e222a.js",
    "revision": "2841a75f62752f85722e033372c29f18"
  },
  {
    "url": "assets/js/40.9edf4cd4.js",
    "revision": "34111b51656c5a5b2078e33711fc0a57"
  },
  {
    "url": "assets/js/41.6ee87788.js",
    "revision": "2f9450fec956420e9df0e95d4d3207c9"
  },
  {
    "url": "assets/js/42.e15f3316.js",
    "revision": "31e0bf6fff7105ebb4b1a18c7e2fbaa9"
  },
  {
    "url": "assets/js/43.a703d986.js",
    "revision": "3b0e3c31a6276e6285ceb1e89d4a7f48"
  },
  {
    "url": "assets/js/44.73bbf228.js",
    "revision": "efa08a6413ddbfa7da9451e958cdee54"
  },
  {
    "url": "assets/js/45.c5ced175.js",
    "revision": "fa658cafec55485a4ce1c5a64f3aa8c7"
  },
  {
    "url": "assets/js/46.c039688e.js",
    "revision": "5d410d878cf77b385c1e907cf12f748a"
  },
  {
    "url": "assets/js/47.85473c5e.js",
    "revision": "94778c0e25e8aada0e5e0ff41ada86ad"
  },
  {
    "url": "assets/js/48.011447cd.js",
    "revision": "dfdf0f7445654b58ac1ba2913b6f1d56"
  },
  {
    "url": "assets/js/49.64ffd976.js",
    "revision": "f9bf6c2c9dec32b9970da45293bd3ef9"
  },
  {
    "url": "assets/js/5.60398f15.js",
    "revision": "8abb22fde61e99ea77915a7930c23860"
  },
  {
    "url": "assets/js/50.d4938794.js",
    "revision": "19427d9592390d8f34cb7b68cdedde41"
  },
  {
    "url": "assets/js/51.13d55290.js",
    "revision": "0a963630928a06caac17cc7a9bdb22a3"
  },
  {
    "url": "assets/js/52.506ef0e3.js",
    "revision": "f0326a17df07ae2de6c87d35c45c6621"
  },
  {
    "url": "assets/js/53.fbe62579.js",
    "revision": "6b0be469a34f1c8eb7cb6f978a6ab1ad"
  },
  {
    "url": "assets/js/54.72aa5c58.js",
    "revision": "2efbd228ca382836703f3ca8af26a0cb"
  },
  {
    "url": "assets/js/55.8a3c2734.js",
    "revision": "a6eb7aebdfbb7f081436e572bcfb04bb"
  },
  {
    "url": "assets/js/56.4d420373.js",
    "revision": "7fbd59d23ae114095518b21a47a079a3"
  },
  {
    "url": "assets/js/57.57103446.js",
    "revision": "476ad3e38c9c673b36cfa7cf67c02c99"
  },
  {
    "url": "assets/js/58.9aab8a53.js",
    "revision": "11c7c89d5b6a90d5f97feae605e52e84"
  },
  {
    "url": "assets/js/59.ec40cafa.js",
    "revision": "f22faa6a3461dc873f0885db1236857a"
  },
  {
    "url": "assets/js/6.775d6c13.js",
    "revision": "e1a3d42fd29735010cca76b218114972"
  },
  {
    "url": "assets/js/60.05b1112b.js",
    "revision": "85713df8128901bd08751623752adab5"
  },
  {
    "url": "assets/js/61.5dd88b4a.js",
    "revision": "a58f1ad9a7cb4c6e18a92f1e205b2219"
  },
  {
    "url": "assets/js/62.4bf0f31f.js",
    "revision": "dff14eb9d2df3eb7808d5773104508e3"
  },
  {
    "url": "assets/js/63.5fa24c27.js",
    "revision": "98dc3b3835feef44afe6fe5f83bdd22d"
  },
  {
    "url": "assets/js/64.98804cd8.js",
    "revision": "d7859fa66a5584dd4759f35761b29d18"
  },
  {
    "url": "assets/js/65.9d6391ad.js",
    "revision": "875bcd78f75d4f0c91c64f3d57e1b6ee"
  },
  {
    "url": "assets/js/66.afa16de6.js",
    "revision": "a8c9bd7840538cd40575855f9088d9ea"
  },
  {
    "url": "assets/js/67.23a13c5e.js",
    "revision": "c49cd8502004d66751a4d44f2ebdd6b3"
  },
  {
    "url": "assets/js/68.faffe00e.js",
    "revision": "82b941431427f30433c7335c0d0eeca4"
  },
  {
    "url": "assets/js/69.8d2c347b.js",
    "revision": "02713c860a904ceb7b86bc542a4303f8"
  },
  {
    "url": "assets/js/7.e91fdee2.js",
    "revision": "19481eb69187f48042a1168509f4d68a"
  },
  {
    "url": "assets/js/70.bed5cdee.js",
    "revision": "b32e1f0780dd3f3956ae6b241b48f350"
  },
  {
    "url": "assets/js/71.712a04f2.js",
    "revision": "19e7ee05540004238e3ad22c77eb4700"
  },
  {
    "url": "assets/js/72.67728c96.js",
    "revision": "92c3863c1680627b3993ee3a46943810"
  },
  {
    "url": "assets/js/73.a49f5b5b.js",
    "revision": "e7337a303d7e113df9f84d6cb9ff2d59"
  },
  {
    "url": "assets/js/74.fa293c83.js",
    "revision": "9d01745698ea38bb3a5af70aa0fbee34"
  },
  {
    "url": "assets/js/75.9452e054.js",
    "revision": "d5f3aa04fd9a31765df0e8584addea20"
  },
  {
    "url": "assets/js/76.24ad0c90.js",
    "revision": "b9df3a226d1bfc57e1437efc8f111ff0"
  },
  {
    "url": "assets/js/77.94b04afb.js",
    "revision": "d728c66f5bab4e5081acaf9b0177c552"
  },
  {
    "url": "assets/js/78.97c9f7fb.js",
    "revision": "f3a7e5337e63fb8b5ae532db403a9de3"
  },
  {
    "url": "assets/js/79.be8996a8.js",
    "revision": "fce89bc6d919171f9ba048b8651f1977"
  },
  {
    "url": "assets/js/8.968ba87b.js",
    "revision": "9e8c843af7b89ae0dc684026882806d0"
  },
  {
    "url": "assets/js/80.002c12e9.js",
    "revision": "3374bed719d7212e51c1a82e14090e39"
  },
  {
    "url": "assets/js/81.724c88b9.js",
    "revision": "8598fe3521b874f89fad5f924d9db114"
  },
  {
    "url": "assets/js/82.c17fc6b0.js",
    "revision": "515ac31a649f2f8b76dea534e6273026"
  },
  {
    "url": "assets/js/83.b1e421f1.js",
    "revision": "828ef574fa051a1572ec9227962772e8"
  },
  {
    "url": "assets/js/84.94eacc74.js",
    "revision": "2d678387efc98d86948eabf2039e4ad5"
  },
  {
    "url": "assets/js/85.089b8ca8.js",
    "revision": "a4bd66bbfee5ee377798ed2be6d01988"
  },
  {
    "url": "assets/js/86.fb003f4f.js",
    "revision": "7d0533e70af662b166f7b885bd74c7a9"
  },
  {
    "url": "assets/js/87.b6fd3eaa.js",
    "revision": "9ccae30ba0ebb44822911272ff4a1b6f"
  },
  {
    "url": "assets/js/88.d8b79d91.js",
    "revision": "92a3f0aac97db5e14f864712dd988269"
  },
  {
    "url": "assets/js/89.f6d32768.js",
    "revision": "63616ab81d0ce57ca47946b6ccf494f4"
  },
  {
    "url": "assets/js/9.d5a05a45.js",
    "revision": "d9e459865596eb2571a0888326f5efb8"
  },
  {
    "url": "assets/js/90.89f31336.js",
    "revision": "ee1534486b1af52972b39798977242d1"
  },
  {
    "url": "assets/js/91.47343b87.js",
    "revision": "f77acba239edda242ff28468939cfb0b"
  },
  {
    "url": "assets/js/92.2e8d45e3.js",
    "revision": "bc682332e6f975cc21e6bf212824c13e"
  },
  {
    "url": "assets/js/93.5e7328c6.js",
    "revision": "19404f877935dbc00d67c10ad56e217d"
  },
  {
    "url": "assets/js/94.bde570da.js",
    "revision": "803c4460a0d6e8f5876807ed0cf84930"
  },
  {
    "url": "assets/js/95.f0d4415e.js",
    "revision": "1bbce35bf28592de78f1aaed5d880ac7"
  },
  {
    "url": "assets/js/96.d48d924f.js",
    "revision": "dc0e873d30118854e7b8f00856638471"
  },
  {
    "url": "assets/js/97.3cea1091.js",
    "revision": "ea233829b6be5f83bbfad3b4f50b683e"
  },
  {
    "url": "assets/js/98.158fd54d.js",
    "revision": "ba12ff1755e906ec719382bf4a7b5914"
  },
  {
    "url": "assets/js/99.ca68782b.js",
    "revision": "a3a2efc835db691bb2a55cf8efef86db"
  },
  {
    "url": "assets/js/app.ba48173d.js",
    "revision": "4a1ca9e166b92a9dee5119db1a799210"
  },
  {
    "url": "categories/index.html",
    "revision": "a3bcea202c986a396c0d16701d516e0f"
  },
  {
    "url": "guide.html",
    "revision": "a9038be4eef80e1877faed6430733a5d"
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
    "url": "images/mcp/mcp-server-ide.png",
    "revision": "cc1712d7aa1ebff2adf47efe01ce2854"
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
    "url": "images/question/SFT-LLM.png",
    "revision": "88092905d618f04b40d5f8c44224bc19"
  },
  {
    "url": "images/vue/patchFlag.png",
    "revision": "172d76f5b6cc8cd2f48f9c96f8d0c836"
  },
  {
    "url": "index.html",
    "revision": "2f2c3508f4c3d3046a322be5110263af"
  },
  {
    "url": "logo.png",
    "revision": "4e48730bd98de9f333e6bd14d62b6c7d"
  },
  {
    "url": "mcpstudy/ide-mcp-server.html",
    "revision": "b922feaad2ba91045d51b6c99364dafa"
  },
  {
    "url": "mcpstudy/mcp-knowledge.html",
    "revision": "6e77d3415fd34fc36ff5cc1d5cc0c134"
  },
  {
    "url": "modelstudy/agent.html",
    "revision": "b14152c2dac1ac4f5bd123291b2d12ae"
  },
  {
    "url": "modelstudy/auto-model-desc.html",
    "revision": "6ea8062d737493c641ef8f9336e695cf"
  },
  {
    "url": "modelstudy/compute-metrics.html",
    "revision": "6d7f40401099080699a157a5d3d05f2e"
  },
  {
    "url": "modelstudy/construct-dataset.html",
    "revision": "204727ba4c5fa7af75d2c45951e2b327"
  },
  {
    "url": "modelstudy/deepseek-search.html",
    "revision": "1c6d82b87d7ee6239a41342305c8efe0"
  },
  {
    "url": "modelstudy/extended-learning.html",
    "revision": "125250ffca7c1297e26b190f3888dff6"
  },
  {
    "url": "modelstudy/finetuing-step5.html",
    "revision": "91baa96c98994bb8bab9dd4229b3778a"
  },
  {
    "url": "modelstudy/finetuing-step9.html",
    "revision": "af2f2091a14955f45bdae3e6049b0041"
  },
  {
    "url": "modelstudy/finetuning-error-collect.html",
    "revision": "2577c9065511449b1f9debe54ef4369f"
  },
  {
    "url": "modelstudy/finetuning-exercises-code.html",
    "revision": "3ee864d11d5f516b67e70756ad81b875"
  },
  {
    "url": "modelstudy/finetuning-f1-scores.html",
    "revision": "017e06e4c71b0757eea029498bae41e6"
  },
  {
    "url": "modelstudy/finetuning-warn-collect.html",
    "revision": "2f619ad927b2331a0b30cd01873e4a2a"
  },
  {
    "url": "modelstudy/impl-transformer.html",
    "revision": "2946f813f3e5e38c1b55e24feef3d18f"
  },
  {
    "url": "modelstudy/langchain-agent-practice.html",
    "revision": "701fb8bd63222413a849b5f55cbbd97d"
  },
  {
    "url": "modelstudy/langchain-prompt.html",
    "revision": "a2f508b85eca7ab3df0361fb1655e15a"
  },
  {
    "url": "modelstudy/langchain-study.html",
    "revision": "469f078b79ddd973bc0a081bc17f4fe9"
  },
  {
    "url": "modelstudy/lora-fine-tuning.html",
    "revision": "ff3f82446c445bf543f293b8903812b8"
  },
  {
    "url": "modelstudy/model-basic.html",
    "revision": "398ec29dd3a15415b51456986e84dcb2"
  },
  {
    "url": "modelstudy/model-case.html",
    "revision": "fd59d82bf0fe2f2558335cccf8cc1400"
  },
  {
    "url": "modelstudy/model-deploy.html",
    "revision": "676ad154c5a6d8f25f5616289c76b6f0"
  },
  {
    "url": "modelstudy/model-english.html",
    "revision": "f86040a1686896b8bff0a6decdf9ae19"
  },
  {
    "url": "modelstudy/model-evaluate.html",
    "revision": "10f500b7e81cc8d574372120bdc722d5"
  },
  {
    "url": "modelstudy/model-fine-tuning.html",
    "revision": "121d78759e72e89be9bfac51f84f06fe"
  },
  {
    "url": "modelstudy/model-function-calling.html",
    "revision": "dc091ec71d63c13a52dd328ec6bf3794"
  },
  {
    "url": "modelstudy/model-langchain-rag.html",
    "revision": "8abdcbff4dc00bc853153b90c308d0fc"
  },
  {
    "url": "modelstudy/model-langchain.html",
    "revision": "db708b992f5c43b4807c3da2a858dfb0"
  },
  {
    "url": "modelstudy/model-optimize.html",
    "revision": "60aab24f54537e30949a5997dda48be7"
  },
  {
    "url": "modelstudy/model-pytorch.html",
    "revision": "3ad39fe7461ecb49febf0f81b36d3808"
  },
  {
    "url": "modelstudy/model-question.html",
    "revision": "04930734e8f7cfc03d67c31dbcfb28a2"
  },
  {
    "url": "modelstudy/model-rag-pain.html",
    "revision": "47e3c4b032aaef0b93d5b99fc0aa6429"
  },
  {
    "url": "modelstudy/model-rag.html",
    "revision": "a03965c89a28fb88a89fcb6e1c0ac4f0"
  },
  {
    "url": "modelstudy/model-RNN.html",
    "revision": "27a4b7e36c97c61e1ae65242e6f17769"
  },
  {
    "url": "modelstudy/model-summary.html",
    "revision": "957960a5fef07eccdf1cfdcc8cfe9078"
  },
  {
    "url": "modelstudy/model-train-analyze.html",
    "revision": "6b372eb772a9f836f5cfc2e283957b7f"
  },
  {
    "url": "modelstudy/model-train-code.html",
    "revision": "86c345749fa5a8c9baffa343a33224b8"
  },
  {
    "url": "modelstudy/model-train.html",
    "revision": "d6f813ea57bd2e8a8e43c5902024c6f8"
  },
  {
    "url": "modelstudy/model-transformer.html",
    "revision": "fa02c84a383ef67bc1aee9832c5345d0"
  },
  {
    "url": "modelstudy/model.html",
    "revision": "321f89fa5d0ce941816c85cb7c96c6cc"
  },
  {
    "url": "modelstudy/ner-instruct-task.html",
    "revision": "19377c719e35f63e80957fdc740cc207"
  },
  {
    "url": "modelstudy/self-function-calling.html",
    "revision": "127265f95bffaced490fbff3e6ba9ac7"
  },
  {
    "url": "modelstudy/temp.html",
    "revision": "453d2641d2d293d0d7970bee60ba5311"
  },
  {
    "url": "modelstudy/temp2.html",
    "revision": "515d57048b0afa9af29ff197734056e7"
  },
  {
    "url": "modelstudy/transformer-code.html",
    "revision": "641509b001f0cd989b613183cafcc7d1"
  },
  {
    "url": "modelstudy/transformer-knowledge.html",
    "revision": "4bc79ea5145d7c5a899f866f95abaf07"
  },
  {
    "url": "modelstudy/transformer-learn.html",
    "revision": "2c0abb81c9f7e331ea0c393595119f4a"
  },
  {
    "url": "modelstudy/transformer-question.html",
    "revision": "e5cfab9226aca852182617a02e9c8d93"
  },
  {
    "url": "modelstudy/transformer-related.html",
    "revision": "54cd8ae752f3f43dc25c0cdc76047fcb"
  },
  {
    "url": "modelstudy/vector-database.html",
    "revision": "ff722f7de661dd42989d4c2e40d22af0"
  },
  {
    "url": "modelstudy/vLLM-intro.html",
    "revision": "dd9a3f66ed66958abd1413ed92466f0a"
  },
  {
    "url": "modelstudy/whatIsModel.html",
    "revision": "15fcf8e4f36ab0a2e924e6a21e16cdec"
  },
  {
    "url": "other/ai-agent.html",
    "revision": "e79e37f4bb0bb6c69e82624f31f13b41"
  },
  {
    "url": "other/conda.html",
    "revision": "1e7670bcd4f23c6b08078a1d5ec1cad9"
  },
  {
    "url": "other/excellentarticles.html",
    "revision": "5db19db32318909642d4b9318eba5e75"
  },
  {
    "url": "other/fine-tuning-adapters.html",
    "revision": "532c6580a257039d629575a1d51210df"
  },
  {
    "url": "other/git-operate.html",
    "revision": "89786c68d94fa7088670fa48e8fcee7a"
  },
  {
    "url": "other/lora-0-1.html",
    "revision": "0f140cefe95b9e6f6127ef391eb509bc"
  },
  {
    "url": "other/model-refrence.html",
    "revision": "406c84506cec34aca2b49966335d7ab1"
  },
  {
    "url": "other/python.html",
    "revision": "46a46297188a5bb95949372c2722af86"
  },
  {
    "url": "other/pytorch-know.html",
    "revision": "4eb8c4f4d3ffe41a8f90891c62a93f2e"
  },
  {
    "url": "other/swanLab-info.html",
    "revision": "87d1007a1fc443907e580f4cf0eb1a7c"
  },
  {
    "url": "other/transformer-1.html",
    "revision": "e9c33de32c006d944b5036e7204b51a9"
  },
  {
    "url": "other/transformer-2.html",
    "revision": "76e4feaaf06f8e29dd6fbffba5a7f3c7"
  },
  {
    "url": "other/transformer-3.html",
    "revision": "ef61a2c7a5f1dfa241abc207acd844e6"
  },
  {
    "url": "other/transformer-collect.html",
    "revision": "d00031628018d9db2f13ffcf91d032c2"
  },
  {
    "url": "other/transformer-learn.html",
    "revision": "47fdb59619a1633dd0ce04c6cd8431cc"
  },
  {
    "url": "other/using-packages.html",
    "revision": "05b244e7087ceb6878caebe97ff6babc"
  },
  {
    "url": "pystudy/array-operation.html",
    "revision": "23df12c5b8572eb2ddb123c4c268ff65"
  },
  {
    "url": "pystudy/basic.html",
    "revision": "a3924f8fc02fcd42cadf2cfe71636856"
  },
  {
    "url": "pystudy/builtin-function.html",
    "revision": "16d5ec6e2857c0e12d63f1de9e29492f"
  },
  {
    "url": "pystudy/class.html",
    "revision": "1fa94af86e99bd39ac9b41ef08d94e88"
  },
  {
    "url": "pystudy/data-structure.html",
    "revision": "b7cc973a8d7b18ba866d5fdfec9557d0"
  },
  {
    "url": "pystudy/database.html",
    "revision": "70fbf106c6b09301b6eb38f9e5849e8d"
  },
  {
    "url": "pystudy/exception.html",
    "revision": "1ebf9e142313b55bae9bf1f8cb8aae83"
  },
  {
    "url": "pystudy/file.html",
    "revision": "5981648d101795cba22edf32349ac24b"
  },
  {
    "url": "pystudy/function.html",
    "revision": "46c4b15e7242bcdc1b1845954f15ad42"
  },
  {
    "url": "pystudy/line-continue.html",
    "revision": "9c68d865a6bbf72fa8d1a3cc177a71a7"
  },
  {
    "url": "pystudy/module.html",
    "revision": "678d0297a8b2338e6debc9abdfdc2a01"
  },
  {
    "url": "pystudy/network.html",
    "revision": "6a4b1d78fece39f3867521573884431a"
  },
  {
    "url": "pystudy/numpy.html",
    "revision": "afd5401eba8db46f59570267ca0aad5a"
  },
  {
    "url": "pystudy/package.html",
    "revision": "fdb3a07729b3923c5780da24ed9c95e8"
  },
  {
    "url": "pystudy/pandas-study.html",
    "revision": "54324896c432c7cbd4ea2c75b77a76e8"
  },
  {
    "url": "pystudy/practice.html",
    "revision": "68dc831f4fa36ce83387abb4bec625f3"
  },
  {
    "url": "pystudy/process.html",
    "revision": "d7afdb1dca92026fedbb54d2606e83f0"
  },
  {
    "url": "pystudy/regex.html",
    "revision": "1eebf8e0f96efe5c7e873849006a6a2b"
  },
  {
    "url": "pystudy/string-function.html",
    "revision": "ce49bed8fd38579e2f672ab3075c6347"
  },
  {
    "url": "pystudy/technology-point.html",
    "revision": "0481695c04154c4ece542b4fb840bb33"
  },
  {
    "url": "pystudy/thread.html",
    "revision": "1685d04fecca4cd2cfaca7d6392ea35a"
  },
  {
    "url": "pystudy/use-library.html",
    "revision": "ad301b732b939051dfcc271b1e5dfb2f"
  },
  {
    "url": "pystudy/use-pip-install.html",
    "revision": "718ea3ea50442d0ee5a60e0ebeef2511"
  },
  {
    "url": "react/react-advanced.html",
    "revision": "3a8a0c7e7ff4e70b3120bbf8f3ee78d6"
  },
  {
    "url": "react/react-basic.html",
    "revision": "fcdbac6146527283b78ee5c3093ef776"
  },
  {
    "url": "react/react-context.html",
    "revision": "0e7a9e74fc622f53836c8ee7372becaf"
  },
  {
    "url": "react/react-relation.html",
    "revision": "fbdcfba416e69723733387be6756a450"
  },
  {
    "url": "react/ssr.html",
    "revision": "7371c5ece49d95e898d0a019f0605ca8"
  },
  {
    "url": "react/status-manage.html",
    "revision": "a135efe6ad88a45a4892952cd38560ae"
  },
  {
    "url": "reactnative/reactnative-desc.html",
    "revision": "e14529646701508acb822760bf82bb0b"
  },
  {
    "url": "reactnative/reactnative.html",
    "revision": "638573be6c5718935c87d3eeb1447f48"
  },
  {
    "url": "reactnative/rn-problem.html",
    "revision": "6a7e2365f03bcdd7cdd2017ec3c0fdaa"
  },
  {
    "url": "tag/index.html",
    "revision": "ddc7a3db5dda2a937bac6e07dd6b239d"
  },
  {
    "url": "tag/React/index.html",
    "revision": "5df251e91769fcfce499bfbb180bc533"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "8383257b91e0fd0bea5550f552d494a2"
  },
  {
    "url": "tag/二叉树/index.html",
    "revision": "163dacdd185010791d56416841b71c53"
  },
  {
    "url": "timeline/index.html",
    "revision": "bffdc347de41629757c908d1725f9579"
  },
  {
    "url": "vue/basicknowledge.html",
    "revision": "9ed9c58777911378b5859303f949c9cc"
  },
  {
    "url": "vue/compare.html",
    "revision": "23ece3f1517b0c1e794ec644a90e7eb7"
  },
  {
    "url": "vue/misnotes.html",
    "revision": "460b939569abe0878013fc42039f2739"
  },
  {
    "url": "vue/ssr.html",
    "revision": "b2e146e6661169c7cc03f7b56afa2478"
  },
  {
    "url": "vue/vue-attrs-listeners.html",
    "revision": "bc27197df2f81caef7abf98aced310c5"
  },
  {
    "url": "vue/vue-principle.html",
    "revision": "fa74493a549276dc556388f895438a45"
  },
  {
    "url": "vue/vue-router.html",
    "revision": "38d535b229f728759a375b5a34250700"
  },
  {
    "url": "vue/vue-status.html",
    "revision": "83c36108cdf200a549e018067895155c"
  },
  {
    "url": "vue/vue3-basic.html",
    "revision": "034ada2506725927bbf9ebca71ffd9b9"
  },
  {
    "url": "vue/vue3-impl.html",
    "revision": "88b1aed17771b70b1b6835412aa380e9"
  },
  {
    "url": "vue/vue3.html",
    "revision": "98e9557a07b8505bff0af2ea41bf51f2"
  },
  {
    "url": "vue/vuex.html",
    "revision": "fd61536fc16de4060570d4644f522834"
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
