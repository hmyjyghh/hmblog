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
    "revision": "7ce519a3bc4b552895518e9fa2f6c163"
  },
  {
    "url": "algorithm/binary-search.html",
    "revision": "1e6313f65b780d91c20c9752cc3c216d"
  },
  {
    "url": "algorithm/binary-tree.html",
    "revision": "1b0dd2a45f55ec54aa63e6f83c3235ca"
  },
  {
    "url": "algorithm/double-pointer.html",
    "revision": "ab54f9c0c84ecbac334e1a20fb0f2ef8"
  },
  {
    "url": "algorithm/dynamic-plan.html",
    "revision": "be201170a8e5ddce5ca3e64a405da7f2"
  },
  {
    "url": "algorithm/greedy.html",
    "revision": "cc487f81e6f1dae891ed3b1ced283147"
  },
  {
    "url": "algorithm/longasc-sequence.html",
    "revision": "310dad0cec7f0e791d448b40d5cb8952"
  },
  {
    "url": "algorithm/other.html",
    "revision": "4deb23fd2a8974231263e19836991b97"
  },
  {
    "url": "algorithm/receive-rain.html",
    "revision": "1f90ed875ea1095adde56a4388ff1556"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "9b82da12858fe23f28172cbed10bf12e"
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
    "url": "assets/js/100.a18cbcd6.js",
    "revision": "3aab333f89d5aac9dc3b1302585943a1"
  },
  {
    "url": "assets/js/101.72298f5f.js",
    "revision": "00751f205222dcf2e30c926ccef79cea"
  },
  {
    "url": "assets/js/102.7f009d03.js",
    "revision": "17982a699dfe20dc7ddef02b72d08836"
  },
  {
    "url": "assets/js/103.62917b51.js",
    "revision": "4fb8eafae53c805bf30345681d5b58be"
  },
  {
    "url": "assets/js/104.2b142520.js",
    "revision": "c4cc73469b0434145cd4bc3930a90f8e"
  },
  {
    "url": "assets/js/105.7846d56d.js",
    "revision": "34a7af8c9f506a8c6dd9fd56dbbd2171"
  },
  {
    "url": "assets/js/106.c7cc885e.js",
    "revision": "608f04f98695df45dfe9147466803285"
  },
  {
    "url": "assets/js/107.ccc93ad0.js",
    "revision": "5b0299d0117a99dd7c4d24af3ac1e3f3"
  },
  {
    "url": "assets/js/108.cb14c040.js",
    "revision": "f7f9e0cac8bd501118241028cbb05ca3"
  },
  {
    "url": "assets/js/109.154f3d68.js",
    "revision": "6476e46a0d7e7e4a47ca0b7d0611f66a"
  },
  {
    "url": "assets/js/11.08937b90.js",
    "revision": "e77956ac107a7b0387db3e6be4e56ebe"
  },
  {
    "url": "assets/js/110.73670018.js",
    "revision": "faa572ff400cf513fe9c2809041d2b32"
  },
  {
    "url": "assets/js/111.732c118e.js",
    "revision": "b87827b20a371d4fe890ae044b50feab"
  },
  {
    "url": "assets/js/112.f73b2a24.js",
    "revision": "e67a35393ae7a7a79e7009aee3f03541"
  },
  {
    "url": "assets/js/113.788c625e.js",
    "revision": "ee63e04ea753e593e9f933c6622c61c3"
  },
  {
    "url": "assets/js/114.0cd1781f.js",
    "revision": "65b3ff917b3e1b09af4fb63346fd4db2"
  },
  {
    "url": "assets/js/115.a06deddf.js",
    "revision": "04e5c0ca9b8ededd9e7e5a02872e7e78"
  },
  {
    "url": "assets/js/116.0faeae9e.js",
    "revision": "a0acd1242387ceb7b2680efcd3a25b30"
  },
  {
    "url": "assets/js/117.fdf57f54.js",
    "revision": "4574c0e2cada8bf9c651bd10ffe1b16d"
  },
  {
    "url": "assets/js/118.c1315937.js",
    "revision": "16bdf8d7d2a102647096e20cc476ddc9"
  },
  {
    "url": "assets/js/119.e5dfa552.js",
    "revision": "92c7cbe77d2b79ce64429ee5066f6ea7"
  },
  {
    "url": "assets/js/120.2a1dfa1b.js",
    "revision": "bc9340c79214d9bc9304bb34781fd10a"
  },
  {
    "url": "assets/js/121.29588055.js",
    "revision": "49c9c00bf7231e98f2f91f196c2ae0e4"
  },
  {
    "url": "assets/js/122.b96c3b77.js",
    "revision": "f8b372a28737b140e01a3b78626ded47"
  },
  {
    "url": "assets/js/123.74a431d4.js",
    "revision": "60078fa78137a5f333cec98f07f2cbe1"
  },
  {
    "url": "assets/js/124.c2e6961c.js",
    "revision": "9af395b7bab0814c543ae29771355100"
  },
  {
    "url": "assets/js/125.7910a5c4.js",
    "revision": "1d8e0d5b46946b3ed2a5116f788ac616"
  },
  {
    "url": "assets/js/126.4aa935a1.js",
    "revision": "6358f3c6dfd78ddc14da20cba2c8c970"
  },
  {
    "url": "assets/js/127.781bcdb6.js",
    "revision": "18171f915f4d9ef82c736ed56382448f"
  },
  {
    "url": "assets/js/128.bb2632da.js",
    "revision": "3dafed94c58c4653570a1960cc96fc48"
  },
  {
    "url": "assets/js/129.4d4a0e16.js",
    "revision": "ac5235ed139cbb83f9da3a6cd07f02fc"
  },
  {
    "url": "assets/js/130.624bc5eb.js",
    "revision": "aa67cfdd4d4c02434ae6c751c7ab6357"
  },
  {
    "url": "assets/js/131.deb918f5.js",
    "revision": "fcc4aa4c4912739d80bba97b3a2328e1"
  },
  {
    "url": "assets/js/132.a14fc7ed.js",
    "revision": "e71a9a74ffda7c192367b7d3a8c527c0"
  },
  {
    "url": "assets/js/133.9e16dcb4.js",
    "revision": "b3513b475cb610c252366c0c85681544"
  },
  {
    "url": "assets/js/134.c3e82ca4.js",
    "revision": "3a282a22d54cf1031c2d601780dc54ee"
  },
  {
    "url": "assets/js/135.f58c012c.js",
    "revision": "0b87f5577d1f25bb4ed454f73b1acbcb"
  },
  {
    "url": "assets/js/136.e03744fc.js",
    "revision": "9809235c1fb447b66a25ef2f8dfa85f4"
  },
  {
    "url": "assets/js/137.e494946b.js",
    "revision": "71ac6f4014a072b4cacd841811d966e4"
  },
  {
    "url": "assets/js/138.14e78643.js",
    "revision": "18e518c05614f56e7aa88541c7de0380"
  },
  {
    "url": "assets/js/139.3863ada3.js",
    "revision": "fcc9084f200251b50ffba9f86f278dd1"
  },
  {
    "url": "assets/js/14.0ac4aea5.js",
    "revision": "11b1f5df8a45d04c2f0527031b496791"
  },
  {
    "url": "assets/js/140.2e7e4499.js",
    "revision": "fc3318cea5d27fbbaa5d6d33e149a34b"
  },
  {
    "url": "assets/js/141.2935c690.js",
    "revision": "d5e7729748862441e2c63b641e526fa4"
  },
  {
    "url": "assets/js/142.039155ec.js",
    "revision": "4c4b3249ded4ade518fd300f435c520d"
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
    "url": "assets/js/39.c2783769.js",
    "revision": "0fbac52bb669e493ef1e928bcb16d209"
  },
  {
    "url": "assets/js/4.a36b649a.js",
    "revision": "a1af6d49f1ee40330c85d48e323c6ea8"
  },
  {
    "url": "assets/js/40.b5f8d279.js",
    "revision": "1f27527609e17a6db214679f4ddb2f50"
  },
  {
    "url": "assets/js/41.90bc3dec.js",
    "revision": "09d5d339bc35d688b472db2d6cec0338"
  },
  {
    "url": "assets/js/42.55a95e7d.js",
    "revision": "b4c819d88a6332f3ae41fbd7f5ed1ecc"
  },
  {
    "url": "assets/js/43.9478905d.js",
    "revision": "c0af5e42d5cbd33f429faf7e05c274fe"
  },
  {
    "url": "assets/js/44.b1658bed.js",
    "revision": "5f2e0631abff473fdac89189bc35ec96"
  },
  {
    "url": "assets/js/45.cb1b4d46.js",
    "revision": "9375f8671672ab8c8036d71de6ef1e60"
  },
  {
    "url": "assets/js/46.666ffb1b.js",
    "revision": "ff46d802465641e9def7c04cf599c44b"
  },
  {
    "url": "assets/js/47.7f0c2fc0.js",
    "revision": "26625e2a780f0aae65769f397ce9c3e4"
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
    "url": "assets/js/50.7b903d1d.js",
    "revision": "c2951e115dc6bc051a073324199d79de"
  },
  {
    "url": "assets/js/51.f73c5f01.js",
    "revision": "bf1fd21ad39a76558e1d1a971e9fe51d"
  },
  {
    "url": "assets/js/52.bde67030.js",
    "revision": "317ea2f80a28ff22f9535f7f339fba65"
  },
  {
    "url": "assets/js/53.ab761ca0.js",
    "revision": "8f32e0111bbca36ea8c68a815f39773a"
  },
  {
    "url": "assets/js/54.a06ec674.js",
    "revision": "1c75a496fe9abedd10f9ae4c2d37ddef"
  },
  {
    "url": "assets/js/55.d051e2e2.js",
    "revision": "61dbaa8518b10673978b530feaaedd87"
  },
  {
    "url": "assets/js/56.88f1564b.js",
    "revision": "9b87eebe16c1fe5dfce5f80fb8b1d92d"
  },
  {
    "url": "assets/js/57.08c6b2fb.js",
    "revision": "2009b8a6549dd01f29e075bc230180b1"
  },
  {
    "url": "assets/js/58.f2c42729.js",
    "revision": "20fa1e179868df6c80704ece1dc1ca34"
  },
  {
    "url": "assets/js/59.dd5f8e66.js",
    "revision": "4048ea37e64664dbd6d1cebab8f726eb"
  },
  {
    "url": "assets/js/6.3551780c.js",
    "revision": "fe0ed93201a286fa45177a397258d276"
  },
  {
    "url": "assets/js/60.765543d9.js",
    "revision": "8ba10751e7bccbd13b102fd3f8bda95d"
  },
  {
    "url": "assets/js/61.ef09089f.js",
    "revision": "6b22024a4912bd67782dc0377bb213c5"
  },
  {
    "url": "assets/js/62.6c63ada1.js",
    "revision": "56614c8abfbc420bb2ca9432c559b6f0"
  },
  {
    "url": "assets/js/63.1afc5ff4.js",
    "revision": "4db6f2caece2be23024ce49a33aab031"
  },
  {
    "url": "assets/js/64.3a4ee9ac.js",
    "revision": "fc47d7f67208f81feeadf1d31ff9c5c2"
  },
  {
    "url": "assets/js/65.1ae2d86d.js",
    "revision": "b9da56f200076f8042c26805dc9a966b"
  },
  {
    "url": "assets/js/66.ecf78640.js",
    "revision": "5dd9fd3c33286bcb2a422c5707deb887"
  },
  {
    "url": "assets/js/67.11b23200.js",
    "revision": "d72cbd4d3774b7dce6fca3cf6d11220a"
  },
  {
    "url": "assets/js/68.de3d1935.js",
    "revision": "1baa8c019bfa27e5771792a145d42eab"
  },
  {
    "url": "assets/js/69.13a0712a.js",
    "revision": "6adebeda453adb8a01ab2ec80badd836"
  },
  {
    "url": "assets/js/7.5041dce4.js",
    "revision": "f2c23e2ac23b68ac3e88a056dd0784fa"
  },
  {
    "url": "assets/js/70.86076480.js",
    "revision": "d8296d65e923223c756f0fa2a509f4d6"
  },
  {
    "url": "assets/js/71.9927e4d0.js",
    "revision": "efd99f56598412da943f0ccd5ffa8be7"
  },
  {
    "url": "assets/js/72.6a128123.js",
    "revision": "159dd8b94770585e2328b94e47c1a934"
  },
  {
    "url": "assets/js/73.498325df.js",
    "revision": "4f3b1258b5aec00630e21b783bcb846e"
  },
  {
    "url": "assets/js/74.bfc7f5cd.js",
    "revision": "398cecfa18a56d6256bd5fae49393bf1"
  },
  {
    "url": "assets/js/75.441c878a.js",
    "revision": "eb1b600b16eac719faa94c8675e177c7"
  },
  {
    "url": "assets/js/76.e7cd9b92.js",
    "revision": "f359f9021e15b7f28260226a415cb406"
  },
  {
    "url": "assets/js/77.62c403f1.js",
    "revision": "e30ea9bcf91cf5f0615764fc0d7472ef"
  },
  {
    "url": "assets/js/78.64fca418.js",
    "revision": "1819aaa4acaea22403d34b5f276dd635"
  },
  {
    "url": "assets/js/79.4c279633.js",
    "revision": "582e65ff005ef1a4a432fc1841ef5fe4"
  },
  {
    "url": "assets/js/8.1407b990.js",
    "revision": "dcb7a34e3667ce40091860e9cc38e5c2"
  },
  {
    "url": "assets/js/80.6d179fe3.js",
    "revision": "d2607f8ee0831031700052a1bc6f56d1"
  },
  {
    "url": "assets/js/81.bd2834be.js",
    "revision": "329bf406fb665332c2550217c96a6bfd"
  },
  {
    "url": "assets/js/82.1e94a408.js",
    "revision": "4bfa37b0ab738bd584e2e38378ea39fe"
  },
  {
    "url": "assets/js/83.f64dc5b6.js",
    "revision": "cdcb4333549cfed5738c22dc96f300ec"
  },
  {
    "url": "assets/js/84.27805239.js",
    "revision": "29749cbac8a2c25aff9f816d9491bc4b"
  },
  {
    "url": "assets/js/85.3fabf294.js",
    "revision": "eee18bbc5c97154013b67bda04425e49"
  },
  {
    "url": "assets/js/86.6dc53eac.js",
    "revision": "c2f71839964fa4062b498bec31172f55"
  },
  {
    "url": "assets/js/87.1d9b3365.js",
    "revision": "6c826af5ba3248af37d67c6fd8c7e1a7"
  },
  {
    "url": "assets/js/88.2a85ac1b.js",
    "revision": "0ed46674d4e6c753b66c1e59f7fdf516"
  },
  {
    "url": "assets/js/89.f99d1f13.js",
    "revision": "227d161c0919d4fe64cbeed10900da53"
  },
  {
    "url": "assets/js/9.7b6dd5b4.js",
    "revision": "f1ee1335cb73fc3af924d330037b0332"
  },
  {
    "url": "assets/js/90.dcc3fe61.js",
    "revision": "f83f60fb025fbbe3d9e842e134ce1538"
  },
  {
    "url": "assets/js/91.0e0bc617.js",
    "revision": "54721db85595173b6dd6b8856d83d346"
  },
  {
    "url": "assets/js/92.570a9887.js",
    "revision": "56c6e1a6d15ff94362b79523898f179b"
  },
  {
    "url": "assets/js/93.86bec5d2.js",
    "revision": "1af266387a17b1f268f6ba3aef7b59b3"
  },
  {
    "url": "assets/js/94.46729252.js",
    "revision": "8cd8c034258d839357edb8af0771cd13"
  },
  {
    "url": "assets/js/95.db45d177.js",
    "revision": "7808b916a5a4f62d5b0452251dbe5a63"
  },
  {
    "url": "assets/js/96.c74e578d.js",
    "revision": "4887a770e992c779bbd376e761e86c89"
  },
  {
    "url": "assets/js/97.ed0b59ea.js",
    "revision": "778eb37be001cfb10e2562fd7b16adab"
  },
  {
    "url": "assets/js/98.d9350898.js",
    "revision": "3d8ca14eb6d8acd726b7b74f7546cebf"
  },
  {
    "url": "assets/js/99.003df90c.js",
    "revision": "2e62d2297b483195248c2f0701b070de"
  },
  {
    "url": "assets/js/app.2d6dcf2a.js",
    "revision": "b23a4036e58e2462e9bf85c00438a440"
  },
  {
    "url": "assets/js/vendors~docsearch.e480d9b8.js",
    "revision": "a887f3139f3f8baba27c98087130d4d9"
  },
  {
    "url": "categories/index.html",
    "revision": "79bca9964a4985d3e357dad5ff7d273a"
  },
  {
    "url": "guide.html",
    "revision": "e5b8c285ca71f0d1ae3633bbb133638e"
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
    "url": "images/chat-gpt/chat-gpt-train.png",
    "revision": "5b8d9b6295ae87979489e5ee4e4ea887"
  },
  {
    "url": "images/chat-gpt/LLM-repeat.png",
    "revision": "308d1f6adc081fbeea4048b47e4c101b"
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
    "url": "images/question/SFT-LLM.png",
    "revision": "88092905d618f04b40d5f8c44224bc19"
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
    "revision": "025e1baf3058270c1b59b00789cb6758"
  },
  {
    "url": "logo.png",
    "revision": "4e48730bd98de9f333e6bd14d62b6c7d"
  },
  {
    "url": "mcpstudy/ide-mcp-server.html",
    "revision": "77fc7c81d3702d0e3ea04d04e40e12b1"
  },
  {
    "url": "mcpstudy/mcp-knowledge.html",
    "revision": "fb9b7198e73a428b1be4049aea9b0592"
  },
  {
    "url": "modelstudy/agent.html",
    "revision": "9d711813fbcc80f12b862159605e7bce"
  },
  {
    "url": "modelstudy/deepseek-search.html",
    "revision": "3584f47466de4a79930bab07dde4d989"
  },
  {
    "url": "modelstudy/extended-learning.html",
    "revision": "b7416aca05cfcafc1565efe12e1edc7b"
  },
  {
    "url": "modelstudy/impl-transformer.html",
    "revision": "fa2215f290662516e96daafb35011f95"
  },
  {
    "url": "modelstudy/langchain-agent-practice.html",
    "revision": "bb324eeafde52f5ea6c6b51a5a24cd1a"
  },
  {
    "url": "modelstudy/langchain-study.html",
    "revision": "e9e6874e03b1a5a4296be0085b3c07e2"
  },
  {
    "url": "modelstudy/lora-fine-tuning.html",
    "revision": "4e77d7109f03301419b3ff79ee2d0c38"
  },
  {
    "url": "modelstudy/model-basic.html",
    "revision": "4986cd3e92083f3b5ad25610bfb1b026"
  },
  {
    "url": "modelstudy/model-case.html",
    "revision": "651f1b53c0b7e31c975a652fbc484614"
  },
  {
    "url": "modelstudy/model-deploy.html",
    "revision": "f11ef6fcc24e6943aecaabbf5e0d2a06"
  },
  {
    "url": "modelstudy/model-english.html",
    "revision": "aa409ac681d5dea96c273d75b769e414"
  },
  {
    "url": "modelstudy/model-evaluate.html",
    "revision": "18cbe05886d716e81fd681319dbecc2a"
  },
  {
    "url": "modelstudy/model-fine-tuning.html",
    "revision": "67eeee901ac65a133c13a7479c4cec56"
  },
  {
    "url": "modelstudy/model-function-calling.html",
    "revision": "0b17cb533395a4e2169f6d48054da721"
  },
  {
    "url": "modelstudy/model-langchain-rag.html",
    "revision": "ffc87af17b93fd93f6e54840e8c06b7e"
  },
  {
    "url": "modelstudy/model-langchain.html",
    "revision": "d6e102756cfd08ebdd577d8c302f7584"
  },
  {
    "url": "modelstudy/model-optimize.html",
    "revision": "f370718c9b5954536cf4e34ad46ff097"
  },
  {
    "url": "modelstudy/model-pytorch.html",
    "revision": "a3d74baefb0dc0ef341c74b900be443a"
  },
  {
    "url": "modelstudy/model-question.html",
    "revision": "dc757c752b792305c965aad5265d0052"
  },
  {
    "url": "modelstudy/model-rag-pain.html",
    "revision": "d38e09fb63ac3bf002542e2827fa66af"
  },
  {
    "url": "modelstudy/model-rag.html",
    "revision": "09ccaa12d034d4fd1682a914e134eaec"
  },
  {
    "url": "modelstudy/model-RNN.html",
    "revision": "e8478c6cb3dfe59fdc60ffbc425a625b"
  },
  {
    "url": "modelstudy/model-summary.html",
    "revision": "265fb003c5815a7c3ae099b0251f327d"
  },
  {
    "url": "modelstudy/model-train-code.html",
    "revision": "7a6a6a7f86b3a33db37854660c02949e"
  },
  {
    "url": "modelstudy/model-train.html",
    "revision": "3c76e843af5278786578aabe34cd1328"
  },
  {
    "url": "modelstudy/model-transformer.html",
    "revision": "3861e32cf1e066b85bfc733d8e93be52"
  },
  {
    "url": "modelstudy/model.html",
    "revision": "3b7defedc50ee6f426477a1967af7f69"
  },
  {
    "url": "modelstudy/self-function-calling.html",
    "revision": "5623693c3a0d23e16144516e35527d8a"
  },
  {
    "url": "modelstudy/temp.html",
    "revision": "d47c9340b099f45d88e9c840fffeb540"
  },
  {
    "url": "modelstudy/transformer-code.html",
    "revision": "38b1b807035879a4b585f92260804b19"
  },
  {
    "url": "modelstudy/transformer-knowledge.html",
    "revision": "b986158a3afcdab813c28a2e455add59"
  },
  {
    "url": "modelstudy/transformer-learn.html",
    "revision": "a28d42d0f3d98d86224968e7611a7dc2"
  },
  {
    "url": "modelstudy/transformer-question.html",
    "revision": "39631c52641bc798f42bd0c593b21505"
  },
  {
    "url": "modelstudy/transformer-related.html",
    "revision": "de6a5e87349c364edff3d8d9b7aea847"
  },
  {
    "url": "modelstudy/whatIsModel.html",
    "revision": "70743caf75c7682ac1d9b4a68b70a0ce"
  },
  {
    "url": "other/ai-agent.html",
    "revision": "4c900297b3699a8b9d61a919efe93a94"
  },
  {
    "url": "other/conda.html",
    "revision": "b1768172d19dfca1abd305e0f0b5c882"
  },
  {
    "url": "other/excellentarticles.html",
    "revision": "1001eb19ec41002c2bb1ee672ca4a4af"
  },
  {
    "url": "other/fine-tuning-adapters.html",
    "revision": "6d7f5ebc650b931cd87289553b338626"
  },
  {
    "url": "other/git-operate.html",
    "revision": "4d9b6ca03e80cd4e05007da89a27e379"
  },
  {
    "url": "other/model-refrence.html",
    "revision": "33d58e6377cb1548ca095647041afb1e"
  },
  {
    "url": "other/python.html",
    "revision": "023588f75bc6e43ab4f2a258dbed24f3"
  },
  {
    "url": "other/pytorch-know.html",
    "revision": "2340e8f6de26cf1478ce4eebd4f2a779"
  },
  {
    "url": "other/transformer-1.html",
    "revision": "ed88ffcd39d12ab50ce66c98d6b8fbaf"
  },
  {
    "url": "other/transformer-2.html",
    "revision": "913d4e449a831f54a55b8758e53f866b"
  },
  {
    "url": "other/transformer-3.html",
    "revision": "47e4af3387c54faf042888fc9eb40c64"
  },
  {
    "url": "other/transformer-collect.html",
    "revision": "25589ecede41eada3558d994efdfe039"
  },
  {
    "url": "other/transformer-learn.html",
    "revision": "5b90ed1b902bc8ed0b63d9481d1c4672"
  },
  {
    "url": "other/using-packages.html",
    "revision": "82cdd855cbbc7a58054db678972e9623"
  },
  {
    "url": "pystudy/array-operation.html",
    "revision": "ed7abc39aa2e0e253bab3cc7e905f544"
  },
  {
    "url": "pystudy/basic.html",
    "revision": "fc36838801e387e3b5508501a8f9feab"
  },
  {
    "url": "pystudy/builtin-function.html",
    "revision": "fc4e2e4f3476f427569d3aa59f7351a8"
  },
  {
    "url": "pystudy/class.html",
    "revision": "de34e79cb608398ea2832a98295b52bf"
  },
  {
    "url": "pystudy/data-structure.html",
    "revision": "f38d440cf6d96375863c97c74de10e25"
  },
  {
    "url": "pystudy/database.html",
    "revision": "3c76a79fa2748267d168efd021133540"
  },
  {
    "url": "pystudy/exception.html",
    "revision": "1150b6a6a3a71751d99d0724fec5cb6c"
  },
  {
    "url": "pystudy/file.html",
    "revision": "39cb633644a68975f178660f9a67ec79"
  },
  {
    "url": "pystudy/function.html",
    "revision": "cb7a66dfd02756a30af85fcee4a412d7"
  },
  {
    "url": "pystudy/module.html",
    "revision": "6de41eadba58922328e5fcccec5da7c5"
  },
  {
    "url": "pystudy/network.html",
    "revision": "4241c1b6ab1e8f25b5a83dd624486e2f"
  },
  {
    "url": "pystudy/numpy.html",
    "revision": "00e21156520e6662b3bc706bbfa8d907"
  },
  {
    "url": "pystudy/package.html",
    "revision": "b2d504e53fc9e5f9a65f0202e22c00fb"
  },
  {
    "url": "pystudy/practice.html",
    "revision": "454c9f9a6549fcb7634136d8cfd7ae06"
  },
  {
    "url": "pystudy/process.html",
    "revision": "072c93d11b338821440cc87e5e8f127a"
  },
  {
    "url": "pystudy/regex.html",
    "revision": "ac4e8c7c58eb0d3c09a66841a04afd24"
  },
  {
    "url": "pystudy/string-function.html",
    "revision": "922678168139516fbbffa586b12ba53f"
  },
  {
    "url": "pystudy/thread.html",
    "revision": "ecc72d9a6b940459fc10be80c89fb5bf"
  },
  {
    "url": "pystudy/use-library.html",
    "revision": "984af2fdc57b6c5b30225cb03df73ec4"
  },
  {
    "url": "pystudy/use-pip-install.html",
    "revision": "6941c7f02adcae02ef430ff6f4e64b57"
  },
  {
    "url": "react/react-advanced.html",
    "revision": "3a8908b7389a7f187724b0c5eb12e8a8"
  },
  {
    "url": "react/react-basic.html",
    "revision": "96b1c1c12b212de36fe2ad55da367f84"
  },
  {
    "url": "react/react-context.html",
    "revision": "b85cc73621258f8ded22fcd228972fba"
  },
  {
    "url": "react/react-relation.html",
    "revision": "04fe6e5538c2e719ff7bdf45ec5a5c66"
  },
  {
    "url": "react/ssr.html",
    "revision": "7eb4bc48ab3f050a4e866f192c63e29e"
  },
  {
    "url": "react/status-manage.html",
    "revision": "f19cbed68a248028d08a729a6e505859"
  },
  {
    "url": "reactnative/reactnative-desc.html",
    "revision": "a3b2a57bb769a436ef3bbc7d813f7dc5"
  },
  {
    "url": "reactnative/reactnative.html",
    "revision": "794da5d22923b1097519ded1ee8aee40"
  },
  {
    "url": "reactnative/rn-problem.html",
    "revision": "23024315aacdfe8d1bedaca98a04e5d8"
  },
  {
    "url": "tag/index.html",
    "revision": "a3b5a92c7ff3410f7a5fc32b63c0c996"
  },
  {
    "url": "tag/react/index.html",
    "revision": "759bd35dc28aa718b0da787dad9fd08e"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "12c612e351a2ef8fa6bac06059fe87d1"
  },
  {
    "url": "tag/二叉树/index.html",
    "revision": "654680b9c73ce28037f890f0ef548da9"
  },
  {
    "url": "timeline/index.html",
    "revision": "faf90c829066c930da6fbffcd60c7888"
  },
  {
    "url": "vue/basicknowledge.html",
    "revision": "87ab29add4f7abdf22ebd1e41708026a"
  },
  {
    "url": "vue/compare.html",
    "revision": "71bd8907650f9707d9447521cf898d53"
  },
  {
    "url": "vue/misnotes.html",
    "revision": "27eb5190693beb38fb3007253aea61fc"
  },
  {
    "url": "vue/ssr.html",
    "revision": "b5e8b1a57fbc86a5be815c1861ed2130"
  },
  {
    "url": "vue/vue-attrs-listeners.html",
    "revision": "d09f9d3acde1bb275b1e9b0566a8186d"
  },
  {
    "url": "vue/vue-principle.html",
    "revision": "78b89ae1fd8cd21f805ef0f6b12340af"
  },
  {
    "url": "vue/vue-router.html",
    "revision": "c1895a9c6c5dc9332ad3bf9a2fb0989f"
  },
  {
    "url": "vue/vue-status.html",
    "revision": "88152fa3bd73f3f923b61aebc42e6ae9"
  },
  {
    "url": "vue/vue3-basic.html",
    "revision": "93ddc8b7f713470fa4684b10a914ab6a"
  },
  {
    "url": "vue/vue3-impl.html",
    "revision": "fc153adb5e475bd2f6308aecf060f8d7"
  },
  {
    "url": "vue/vue3.html",
    "revision": "79f45f51cc68d66f58108d7cdf2f002a"
  },
  {
    "url": "vue/vuex.html",
    "revision": "6c2649f7f59c8a183d275da4bc22ca2a"
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
