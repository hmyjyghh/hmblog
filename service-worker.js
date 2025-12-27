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
    "revision": "469fc5322d3adab8e8777be2251fcbd9"
  },
  {
    "url": "algorithm/666.html",
    "revision": "96da5e182c592d59ac1cad18da4dd7f5"
  },
  {
    "url": "algorithm/algo-temp.html",
    "revision": "53f46e3463f2ffc5877d1222d313df40"
  },
  {
    "url": "algorithm/binary-search.html",
    "revision": "c6250660f9e337c9a6cdbb5098258334"
  },
  {
    "url": "algorithm/binary-tree.html",
    "revision": "e055177a0eb4d0f9bf172f45f2e2092c"
  },
  {
    "url": "algorithm/compare-al.html",
    "revision": "539df952303dffa5937e68a1f9cc7876"
  },
  {
    "url": "algorithm/del-single-list-2.html",
    "revision": "95d0dd81acffa19becdda191e14ef909"
  },
  {
    "url": "algorithm/del-single-list.html",
    "revision": "be962532d0783b78140803dc5fa861ae"
  },
  {
    "url": "algorithm/double-pointer.html",
    "revision": "f9daa69300b25d922cabd4ffe48a45fe"
  },
  {
    "url": "algorithm/dynamic-plan.html",
    "revision": "791e7983483eccc67e96b72cd4210503"
  },
  {
    "url": "algorithm/effect-bracket.html",
    "revision": "c95cee20db6f95437ab53e3101666f8e"
  },
  {
    "url": "algorithm/greedy.html",
    "revision": "34c87c2ec7e69e52f4de8744eb2b1a2a"
  },
  {
    "url": "algorithm/longasc-sequence.html",
    "revision": "7e3bb236cb04603474dbe174968d1e05"
  },
  {
    "url": "algorithm/other.html",
    "revision": "c6520f583f0b351190ca13b3d0ed31a1"
  },
  {
    "url": "algorithm/receive-rain.html",
    "revision": "b97eefb8cdcddd3d7d241e55ee766c20"
  },
  {
    "url": "algorithm/reverse-list.html",
    "revision": "5a215c640eadf2e950fa420edce41770"
  },
  {
    "url": "algorithm/sort copy.html",
    "revision": "1419504b9d5c6f197600e217c051430e"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "9fff862ce5bf314817fd1bb5c86c6cf8"
  },
  {
    "url": "assets/css/0.styles.b90bb923.css",
    "revision": "024aa9e6a17ee626516ae96b55f3148a"
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
    "url": "assets/js/1.d0f8c90c.js",
    "revision": "0b0df57b0f6d7218452f3cb5c8ffba2b"
  },
  {
    "url": "assets/js/10.6f542f16.js",
    "revision": "8973ef477e2b979372ee195965c8cbcf"
  },
  {
    "url": "assets/js/100.8999ab8d.js",
    "revision": "6d8e98c950f39bf5b726987c3422b5f5"
  },
  {
    "url": "assets/js/101.66b27e5e.js",
    "revision": "8594c1b7c9f9868b1e771505f858782b"
  },
  {
    "url": "assets/js/102.68d1bfb2.js",
    "revision": "4a9d9234b981ddacf5a880533c4030bc"
  },
  {
    "url": "assets/js/103.cb1a4f9a.js",
    "revision": "420915c5f8eeda627f240bf4c8a44e87"
  },
  {
    "url": "assets/js/104.5b992740.js",
    "revision": "ddd90085ba5a8a2d04c2fd24112ee9cd"
  },
  {
    "url": "assets/js/105.e98e2771.js",
    "revision": "357b5e86842b2a375f0c708fc4b24a7b"
  },
  {
    "url": "assets/js/106.1d2674a7.js",
    "revision": "653207c1204ad4db4fcb2f15c210cd33"
  },
  {
    "url": "assets/js/107.e4c17da1.js",
    "revision": "ae23358a20bd580536389c21d107b18d"
  },
  {
    "url": "assets/js/108.4f6761e8.js",
    "revision": "ab6396e0bdd2646ee2d591dfc588dedd"
  },
  {
    "url": "assets/js/109.b687227a.js",
    "revision": "aff008993c018bd9a98815604b98a775"
  },
  {
    "url": "assets/js/11.91f5d141.js",
    "revision": "43a36fa038527ef2561d19d21aa53b66"
  },
  {
    "url": "assets/js/110.07f1e092.js",
    "revision": "b9481e3c4d708cdc621c496ea75c75e5"
  },
  {
    "url": "assets/js/111.7ffb4dde.js",
    "revision": "2a833a7a1eb52e554a42ec7b23d23a05"
  },
  {
    "url": "assets/js/112.f0b7d5c7.js",
    "revision": "812ccbdcd219936fafabd2edf5686d93"
  },
  {
    "url": "assets/js/113.08f289c1.js",
    "revision": "7af206b8b811ed016a95419818ff31b4"
  },
  {
    "url": "assets/js/114.d515f51f.js",
    "revision": "aea6b099f6cfeeb8654ece91efed4b75"
  },
  {
    "url": "assets/js/115.30152616.js",
    "revision": "95bb4cc37f682a84415cfcb0312bad2b"
  },
  {
    "url": "assets/js/116.225bf898.js",
    "revision": "4535aa74417cf80d793806bd20434fd9"
  },
  {
    "url": "assets/js/117.8fe006c7.js",
    "revision": "e284ad9378108d86f70d101eb0f16c7b"
  },
  {
    "url": "assets/js/118.91639f98.js",
    "revision": "44705c27142145a5d7e29dbc8256b194"
  },
  {
    "url": "assets/js/119.6c381b99.js",
    "revision": "a621f2c59e8b0b22a92d493c3eb53c0f"
  },
  {
    "url": "assets/js/12.40fdd925.js",
    "revision": "c68ac285ae59fe99d8bee3e7c7edeaad"
  },
  {
    "url": "assets/js/120.8c950085.js",
    "revision": "101879d8a8c3c8a18c0ee7796d9e8b3c"
  },
  {
    "url": "assets/js/121.a2694949.js",
    "revision": "90109d703007f96ceefcd5c57c72db3e"
  },
  {
    "url": "assets/js/122.41b02a28.js",
    "revision": "67323f2338867071bd6a1b8ea0e0695f"
  },
  {
    "url": "assets/js/123.638deccf.js",
    "revision": "84906d2499b658f2d9237c8ee25c6fb5"
  },
  {
    "url": "assets/js/124.7852f8ed.js",
    "revision": "7d043d5e0a1d96608cd23259a4e00959"
  },
  {
    "url": "assets/js/125.9ab1a4d4.js",
    "revision": "bb307c899236cb3ece8db2184456c5a7"
  },
  {
    "url": "assets/js/126.fa7f79a1.js",
    "revision": "25543f5bb6bccc9660a1f66960be60fd"
  },
  {
    "url": "assets/js/127.3ed51cfb.js",
    "revision": "067f6b3c758a8b5a9446909b361826ec"
  },
  {
    "url": "assets/js/128.2453e87b.js",
    "revision": "72fd76a164fd0364924298de8e10e77e"
  },
  {
    "url": "assets/js/129.fc4305ed.js",
    "revision": "182af46d7392477ddd8385b0f166da42"
  },
  {
    "url": "assets/js/13.96f8eb4b.js",
    "revision": "8f00982a1ea60878771cec69ede5cf91"
  },
  {
    "url": "assets/js/130.36a1bc15.js",
    "revision": "c48b5b970bb8eab5ce8f32eb0cfda638"
  },
  {
    "url": "assets/js/131.22a410b9.js",
    "revision": "3dc582064b71b189f3dd3cb65b6b1023"
  },
  {
    "url": "assets/js/132.74bd14d9.js",
    "revision": "39a1b3998e284829f7b5fb128429bc6b"
  },
  {
    "url": "assets/js/133.11ca171b.js",
    "revision": "528fd59043728262797e8dc1d5ca9e02"
  },
  {
    "url": "assets/js/134.fa22b523.js",
    "revision": "4e622d4efcdcc63edbeb6b2a4acaf1b9"
  },
  {
    "url": "assets/js/135.87165e4c.js",
    "revision": "1cb48ea608e67bc2abd4ca250ab47cb9"
  },
  {
    "url": "assets/js/136.e17a5b26.js",
    "revision": "8ef4f194a82c47157ff94e399e3a5a03"
  },
  {
    "url": "assets/js/137.34f6ac78.js",
    "revision": "039b89aa83307b79fe5d89d72617dac1"
  },
  {
    "url": "assets/js/138.98fe71a6.js",
    "revision": "c8ecb523592d8f446f1565039e0cc4e9"
  },
  {
    "url": "assets/js/139.863c462d.js",
    "revision": "e8a1874b57b575b33ab4eb5c5fcf837f"
  },
  {
    "url": "assets/js/14.e1307ddb.js",
    "revision": "e963d90caf802177763b1136055303f3"
  },
  {
    "url": "assets/js/140.5b97ad08.js",
    "revision": "9c624b9aadd1940c90491ecdc4bfed8e"
  },
  {
    "url": "assets/js/141.820c7526.js",
    "revision": "cfb098f72d303e75b435ed2bd5a9f7e7"
  },
  {
    "url": "assets/js/142.fd6c2c03.js",
    "revision": "fb510428e2949c247a9316ea8815e816"
  },
  {
    "url": "assets/js/143.3223d722.js",
    "revision": "5443811aafa8b1c2333ee15f7e9299f3"
  },
  {
    "url": "assets/js/144.f6f4d112.js",
    "revision": "6b87ea0d0e552522028be417047a00ad"
  },
  {
    "url": "assets/js/145.75976478.js",
    "revision": "5a7aa78efe2da402eff554b904c10058"
  },
  {
    "url": "assets/js/146.4f73f3b9.js",
    "revision": "deb008264d8c3355f094551763d595e6"
  },
  {
    "url": "assets/js/147.0290f571.js",
    "revision": "c7f6d618edb25eb0ed16af01b18f80f7"
  },
  {
    "url": "assets/js/148.3ce96c83.js",
    "revision": "0cbc5b940387393d43ad3e4634397229"
  },
  {
    "url": "assets/js/149.88ab4ccd.js",
    "revision": "ed15a2252b76d4c26f1a1c44063bc873"
  },
  {
    "url": "assets/js/15.c8f28fa1.js",
    "revision": "5c997ab5e6a415ceb3207d6e3b8b2dff"
  },
  {
    "url": "assets/js/150.42901871.js",
    "revision": "8662396b35dc10700f7ee7ef2e3ae4c6"
  },
  {
    "url": "assets/js/151.c6cfedf1.js",
    "revision": "bef1b6f5ad3c90c486ac2baf5d1811ac"
  },
  {
    "url": "assets/js/152.c075110a.js",
    "revision": "cb88ea389eb2cf49a8f6c833fd0a01fb"
  },
  {
    "url": "assets/js/153.767d89d2.js",
    "revision": "a50aeeeed33eed8794496fc7f402f31a"
  },
  {
    "url": "assets/js/154.9a99a357.js",
    "revision": "962dc9608ebc481d08cba18718be4f7f"
  },
  {
    "url": "assets/js/155.17017f13.js",
    "revision": "90907cf04d1881621d685e402c961793"
  },
  {
    "url": "assets/js/156.e9c7989d.js",
    "revision": "70f3e83d87445bfd7c851f80af7e5f5e"
  },
  {
    "url": "assets/js/157.cfca26ca.js",
    "revision": "863a60c934f03ad7bb4159e41ef976fa"
  },
  {
    "url": "assets/js/158.fa1550fb.js",
    "revision": "aecc825efdcba62ae06c004a8791c8b8"
  },
  {
    "url": "assets/js/159.95b38393.js",
    "revision": "8393f2698493969a0dd2cafa2614c4e2"
  },
  {
    "url": "assets/js/16.6beb9ca4.js",
    "revision": "a910d7ef591d4b2aee07fe6d09d7112a"
  },
  {
    "url": "assets/js/160.f8edb948.js",
    "revision": "49734576d410894ef07346d75f571b85"
  },
  {
    "url": "assets/js/161.c5e5867d.js",
    "revision": "6c73dbd21787c0b65baffd6e20e2c136"
  },
  {
    "url": "assets/js/162.91b3b77b.js",
    "revision": "bc90241559ca9eed2da6f401b4c1126f"
  },
  {
    "url": "assets/js/163.9fbac4c5.js",
    "revision": "ea1073451d87cab96f9f97064988cef0"
  },
  {
    "url": "assets/js/164.3e6c7f5a.js",
    "revision": "6ee4d9ced9497271c32cc67fd4081fe6"
  },
  {
    "url": "assets/js/165.aaef3fc8.js",
    "revision": "61a03d3c09ba96398272343221f41247"
  },
  {
    "url": "assets/js/166.87876647.js",
    "revision": "d34b99a93544d419fdbdc5e8659b89d9"
  },
  {
    "url": "assets/js/167.2f2a09d9.js",
    "revision": "31433894b076d41803c608db91f6499e"
  },
  {
    "url": "assets/js/168.767f5460.js",
    "revision": "763bddd796c7bae330e07a5c25b02374"
  },
  {
    "url": "assets/js/169.bda4a376.js",
    "revision": "09330ea335cf29b582479bb55439e87a"
  },
  {
    "url": "assets/js/17.e820338c.js",
    "revision": "b22584a409d591f3b51351d2e6d72c49"
  },
  {
    "url": "assets/js/170.fa13b7b9.js",
    "revision": "1b9e03109c790fe16b9995d56c5a21c5"
  },
  {
    "url": "assets/js/171.ec5fe49b.js",
    "revision": "73d5353dba644b66a28ae8d897b9bffc"
  },
  {
    "url": "assets/js/172.0acfc9a5.js",
    "revision": "f23e7e896f3475cb0ee4f946de2f9787"
  },
  {
    "url": "assets/js/173.98ce4143.js",
    "revision": "fb132840f284a49da9d9c8ef0587b460"
  },
  {
    "url": "assets/js/174.2ee83b75.js",
    "revision": "4b72181bd5ae14b98daf6f33c45298d8"
  },
  {
    "url": "assets/js/175.151c0a7c.js",
    "revision": "1bf3e2070a87bdc7349cdb332484ae2d"
  },
  {
    "url": "assets/js/176.8e6a1f2a.js",
    "revision": "f6cf7c3cc609e0402be63beafb6ac2af"
  },
  {
    "url": "assets/js/177.5d1f761a.js",
    "revision": "0abbc10164a18516bde42e77d747021a"
  },
  {
    "url": "assets/js/178.3b121740.js",
    "revision": "c8a796a8c5d48ce7e16fa939b72382d2"
  },
  {
    "url": "assets/js/179.3ad3396b.js",
    "revision": "e74e68a1af41a4fd8d6c74a0e2f45c1e"
  },
  {
    "url": "assets/js/18.3daf29e9.js",
    "revision": "5529d803e5edf9d8064fbd2263bb5c88"
  },
  {
    "url": "assets/js/180.b7fc61e4.js",
    "revision": "7220d69e12fb2981666f23651b87d903"
  },
  {
    "url": "assets/js/181.0168960f.js",
    "revision": "259e8153ee2d8b30d30d29a13a7cc159"
  },
  {
    "url": "assets/js/19.10ca0a07.js",
    "revision": "03037952a1c4595ba586fa1f9e21d7a4"
  },
  {
    "url": "assets/js/20.9d84ad0a.js",
    "revision": "993a0707ec56b7a67fe75eded70da974"
  },
  {
    "url": "assets/js/21.6010de28.js",
    "revision": "0a5167964eb08ad2950df5ce9821e3c8"
  },
  {
    "url": "assets/js/22.2797ce52.js",
    "revision": "2e30da349b9f549120997f32ea7d1396"
  },
  {
    "url": "assets/js/23.2ddb74fd.js",
    "revision": "9c93d5667d7e3f95c2d714cce7bf958e"
  },
  {
    "url": "assets/js/24.4f97c5f7.js",
    "revision": "1018c7a8d19a2ba74f703644204afad3"
  },
  {
    "url": "assets/js/25.a1ee1451.js",
    "revision": "1e4cfd456e0572465af3bc7180c09db5"
  },
  {
    "url": "assets/js/26.28eeeae5.js",
    "revision": "170c66968a9a0eaf9e97e0104ebdee87"
  },
  {
    "url": "assets/js/27.c678aaa0.js",
    "revision": "ba8823bb7ab82f12498cffd97aecded6"
  },
  {
    "url": "assets/js/28.b3c9f2aa.js",
    "revision": "26a6415c57805b040050033629728520"
  },
  {
    "url": "assets/js/29.d6fd3149.js",
    "revision": "5c19318d823f8b222e382728cf38dedf"
  },
  {
    "url": "assets/js/3.9abc57d5.js",
    "revision": "df39aca961144197b00f272e7dd09a49"
  },
  {
    "url": "assets/js/30.e513bf84.js",
    "revision": "dbdca569c12b1808c3184781a68ae616"
  },
  {
    "url": "assets/js/31.e20e6d9d.js",
    "revision": "aea0653939131786198f40dab7bee375"
  },
  {
    "url": "assets/js/32.4e76475e.js",
    "revision": "e487c362b61acbf7aa9c0c37ee0f1013"
  },
  {
    "url": "assets/js/33.3e0c942e.js",
    "revision": "b534a59c3f7437ba5e87f4494be8c4a1"
  },
  {
    "url": "assets/js/34.60bd1011.js",
    "revision": "7bd6d2ba90ad764cac8a89acedf1c81e"
  },
  {
    "url": "assets/js/35.a053b7a7.js",
    "revision": "111a198613bc2b8d6aff6c45b1e1d339"
  },
  {
    "url": "assets/js/36.09b1a64f.js",
    "revision": "fc0d41868a2beee1dabe6414d1a7328f"
  },
  {
    "url": "assets/js/37.b6d61d3c.js",
    "revision": "bbb86fcfe132071e091b1debae39c703"
  },
  {
    "url": "assets/js/38.11b4599e.js",
    "revision": "ce79f5cfe42d330d32330e652d1f78ba"
  },
  {
    "url": "assets/js/39.fbddfd0e.js",
    "revision": "c4bff78c3661075ea6f409f4d1b3ccb5"
  },
  {
    "url": "assets/js/4.62c79767.js",
    "revision": "2841a75f62752f85722e033372c29f18"
  },
  {
    "url": "assets/js/40.19ef5949.js",
    "revision": "fbe727b807e5d1684872e0b2224ceea1"
  },
  {
    "url": "assets/js/41.d52fb071.js",
    "revision": "9bd590c52a4f169bd14084130fe46d75"
  },
  {
    "url": "assets/js/42.b9629b09.js",
    "revision": "ea1ba9d5c51aa388aea79328ab34033d"
  },
  {
    "url": "assets/js/43.49b32d48.js",
    "revision": "62d978b58173c8a1435cd5f879739637"
  },
  {
    "url": "assets/js/44.129e195b.js",
    "revision": "7923394e6a86142bffcaccb728b21f3c"
  },
  {
    "url": "assets/js/45.a567c938.js",
    "revision": "eff5b10b69a72adeb97956faa0848ac0"
  },
  {
    "url": "assets/js/46.68cf415f.js",
    "revision": "147f453e290d001fa729892e361f7fee"
  },
  {
    "url": "assets/js/47.51b6c562.js",
    "revision": "81e706c7e1bf72534370360f1980fe5f"
  },
  {
    "url": "assets/js/48.14cdebf9.js",
    "revision": "7e0f9c2b380f20a31b9735c4e61919bf"
  },
  {
    "url": "assets/js/49.37c15c52.js",
    "revision": "33d41ff7c8bea794a83b14868f4519fe"
  },
  {
    "url": "assets/js/5.18a48000.js",
    "revision": "8abb22fde61e99ea77915a7930c23860"
  },
  {
    "url": "assets/js/50.02f5a4ba.js",
    "revision": "3e1c3856a981fd642452c31504b10569"
  },
  {
    "url": "assets/js/51.e38d02da.js",
    "revision": "9cdc31a5ad50a18431d6046c83eeed5a"
  },
  {
    "url": "assets/js/52.de215163.js",
    "revision": "488870ca434ce93a312c02ced45223be"
  },
  {
    "url": "assets/js/53.3fa41e3f.js",
    "revision": "7bc662e7b2bfdbb4accf152fe275d00c"
  },
  {
    "url": "assets/js/54.f5850ded.js",
    "revision": "eef200266a96509fc959c61dbe4dfbe0"
  },
  {
    "url": "assets/js/55.3b5a2ee8.js",
    "revision": "8eb7d4466157996b1d41472a094191b5"
  },
  {
    "url": "assets/js/56.b0b58e12.js",
    "revision": "7a7fdff5f40032c3204d5304f9778226"
  },
  {
    "url": "assets/js/57.7b15876c.js",
    "revision": "4cc41a5dbf4dcefeacea4e239cc33641"
  },
  {
    "url": "assets/js/58.5d1a41b7.js",
    "revision": "e3e2684984c328a4ba146f7bc51600e9"
  },
  {
    "url": "assets/js/59.81581d1f.js",
    "revision": "f92c4bfe9f6c9b568ab90e73dd26d4d4"
  },
  {
    "url": "assets/js/6.a0827074.js",
    "revision": "e1a3d42fd29735010cca76b218114972"
  },
  {
    "url": "assets/js/60.fd672828.js",
    "revision": "cfd360f7cead2ca2939897c3a02097d1"
  },
  {
    "url": "assets/js/61.afc6adec.js",
    "revision": "450eafd8782e607712624d047d7625b0"
  },
  {
    "url": "assets/js/62.8337cd1c.js",
    "revision": "5696bd87ec9776df26e50ba79d4160c4"
  },
  {
    "url": "assets/js/63.c2bb1181.js",
    "revision": "f3fc739a34a820b4fa850631ffdf758b"
  },
  {
    "url": "assets/js/64.6d8e3a3c.js",
    "revision": "3b23582331b84a2c1225afba310fbac8"
  },
  {
    "url": "assets/js/65.0efe3ece.js",
    "revision": "2b83c39da555cd847298229b968f1192"
  },
  {
    "url": "assets/js/66.ab700f63.js",
    "revision": "25eae1561c22d8067130f4d032583ef3"
  },
  {
    "url": "assets/js/67.d1f4e9da.js",
    "revision": "2727fd0f05ed65073ac0aa6c17fa7841"
  },
  {
    "url": "assets/js/68.6ea85b5f.js",
    "revision": "f40217f558bee6a1fda85fa0e85bdb8b"
  },
  {
    "url": "assets/js/69.7fad0927.js",
    "revision": "5650eb3a5035f975a798c58fba8a2c1f"
  },
  {
    "url": "assets/js/7.da820db9.js",
    "revision": "19481eb69187f48042a1168509f4d68a"
  },
  {
    "url": "assets/js/70.242fd854.js",
    "revision": "d7fb6362beeffb35ee86c8a40695203c"
  },
  {
    "url": "assets/js/71.cc3faed6.js",
    "revision": "7bd67043737fea304d8808645c38f819"
  },
  {
    "url": "assets/js/72.7446e15e.js",
    "revision": "1847e28e4a4cfa2bb292294dfce5d50d"
  },
  {
    "url": "assets/js/73.d0b0f540.js",
    "revision": "25e356d432bb85a386ca1d6794fa7e62"
  },
  {
    "url": "assets/js/74.f6771a1c.js",
    "revision": "0d396df614af6636389f983d42ca053c"
  },
  {
    "url": "assets/js/75.0c99f9a7.js",
    "revision": "e93ff9de3f8f1e696c3af3c08d1bb889"
  },
  {
    "url": "assets/js/76.7611c0e5.js",
    "revision": "6e0074bb9c271b4b89c7546a484a0abf"
  },
  {
    "url": "assets/js/77.b5439318.js",
    "revision": "e10ef488ab24a57c66a1de0754e60499"
  },
  {
    "url": "assets/js/78.59889d7c.js",
    "revision": "892291202907554b95cab1e021e90427"
  },
  {
    "url": "assets/js/79.098bbfb6.js",
    "revision": "75fca28b321e70a716d31bc0b8c9df67"
  },
  {
    "url": "assets/js/8.968ba87b.js",
    "revision": "9e8c843af7b89ae0dc684026882806d0"
  },
  {
    "url": "assets/js/80.48c15a74.js",
    "revision": "9ade80aa592222b27e0cffd919dd8043"
  },
  {
    "url": "assets/js/81.b61eaa93.js",
    "revision": "4ca0b0696b332907ae7169490d642b1d"
  },
  {
    "url": "assets/js/82.ac1c4470.js",
    "revision": "b27aba0fb7278c5d4ec0a538871d687f"
  },
  {
    "url": "assets/js/83.9d79f19d.js",
    "revision": "cd4b8df9405193877bf4c94e656d1a06"
  },
  {
    "url": "assets/js/84.fcf16aa2.js",
    "revision": "c465b889a424a27b44472d01f30c344e"
  },
  {
    "url": "assets/js/85.200be386.js",
    "revision": "7da96ee53b76786bd9e9f418bef6389e"
  },
  {
    "url": "assets/js/86.669d2852.js",
    "revision": "2f82badb06c9e5a7b6c1a9b81385b837"
  },
  {
    "url": "assets/js/87.5cbf22f4.js",
    "revision": "7262ab1b1292caa6c779a702a87e7690"
  },
  {
    "url": "assets/js/88.573ee080.js",
    "revision": "197e73e9637b67022ab5965020b5a5ea"
  },
  {
    "url": "assets/js/89.024f85fa.js",
    "revision": "ff427fb26e0502059670273dd3b3ae20"
  },
  {
    "url": "assets/js/9.ffd10309.js",
    "revision": "d9e459865596eb2571a0888326f5efb8"
  },
  {
    "url": "assets/js/90.7e17783a.js",
    "revision": "6076a702b3aafa8c96af034987624978"
  },
  {
    "url": "assets/js/91.d95c84ac.js",
    "revision": "4a2f05396672f14c26b1645f96be763b"
  },
  {
    "url": "assets/js/92.a0d9d729.js",
    "revision": "b05e413de56853f0869d88d52cce9630"
  },
  {
    "url": "assets/js/93.f7390471.js",
    "revision": "a2acffd250ac8557d02f683d8dc1d1fd"
  },
  {
    "url": "assets/js/94.26921b2c.js",
    "revision": "2b9025e96249af2b9335b2d6ad351a80"
  },
  {
    "url": "assets/js/95.96b4b3f8.js",
    "revision": "9973b8781e71ab7eee243045e2da705b"
  },
  {
    "url": "assets/js/96.82f469ed.js",
    "revision": "bfa85e4a6ccb8bb83c395dda4d70d588"
  },
  {
    "url": "assets/js/97.0a498b89.js",
    "revision": "16c3f43daae8826d8a7a302e8be97fd6"
  },
  {
    "url": "assets/js/98.6f131f57.js",
    "revision": "528a213c9b32d9cce8dfabe21cb7ea96"
  },
  {
    "url": "assets/js/99.a7767d6c.js",
    "revision": "e2a487bb9987b71476f4e98ae6f4ccea"
  },
  {
    "url": "assets/js/app.6384c940.js",
    "revision": "8c07a882ad372936c3d0593fb34ffde5"
  },
  {
    "url": "categories/index.html",
    "revision": "4794974e0f033968b02a8fdcdc18234a"
  },
  {
    "url": "guide.html",
    "revision": "2e21ed2fc3d062519cb7107274c44ebc"
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
    "url": "images/fine-tuning/Prefix-Tuning.png",
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
    "revision": "67e3f9511e856e0b7edd5a30a5625b9c"
  },
  {
    "url": "logo.png",
    "revision": "4e48730bd98de9f333e6bd14d62b6c7d"
  },
  {
    "url": "mcpstudy/ide-mcp-server.html",
    "revision": "7308054ba93309b094fb8742a634a583"
  },
  {
    "url": "mcpstudy/mcp-knowledge.html",
    "revision": "f050e80746cde0c2f63fdbbd9f941446"
  },
  {
    "url": "mcpstudy/mcp-tool.html",
    "revision": "44c6229d22924d174b31cf2931a6c5df"
  },
  {
    "url": "modelstudy/11-29.html",
    "revision": "87470ff96fb9c38ba46ecd92b57ffcb8"
  },
  {
    "url": "modelstudy/123.html",
    "revision": "46a2f5e8c78b1d3f929c278725b78d9e"
  },
  {
    "url": "modelstudy/2025-11-04.html",
    "revision": "2b7b973bd402db8f03c8e799d123f6b3"
  },
  {
    "url": "modelstudy/25-12-01.html",
    "revision": "bdd521958cb875bbe12c9984346977b3"
  },
  {
    "url": "modelstudy/666-多模态.html",
    "revision": "8936d71ba16d79c824a21d98ce92b20a"
  },
  {
    "url": "modelstudy/agent.html",
    "revision": "6498a91446de8ba750e55f2669a2c32c"
  },
  {
    "url": "modelstudy/auto-model-desc.html",
    "revision": "a93532cd7e338ec5492f3cb561a6e3cf"
  },
  {
    "url": "modelstudy/basic-aigc.html",
    "revision": "32c57f2749a0605bebfad8e278b44f66"
  },
  {
    "url": "modelstudy/basic-knowledge.html",
    "revision": "1ba821c254723c02068d7a1b060177cb"
  },
  {
    "url": "modelstudy/compute-metrics.html",
    "revision": "1e652dfcb995ceec3289e53444850678"
  },
  {
    "url": "modelstudy/construct-dataset.html",
    "revision": "6d656f219bd91233ec4b0c07b4dad5f0"
  },
  {
    "url": "modelstudy/data-chunk.html",
    "revision": "2dd11e9c43fc9d82d126e582406a2c41"
  },
  {
    "url": "modelstudy/deep-learning.html",
    "revision": "c382c946e06ca6a86d4b56e5927613ee"
  },
  {
    "url": "modelstudy/deepseek-search.html",
    "revision": "fb207863c10bdd6f0f3739c5b2feeca5"
  },
  {
    "url": "modelstudy/extended-learning.html",
    "revision": "a6bc65fe788cdfed934fc2f2dbe4e0a6"
  },
  {
    "url": "modelstudy/finetuing-step5.html",
    "revision": "4545f8b0903b734da4b05c78427c86bc"
  },
  {
    "url": "modelstudy/finetuing-step9.html",
    "revision": "c726f8577c09c54c4012169a49350a34"
  },
  {
    "url": "modelstudy/finetuning-error-collect.html",
    "revision": "7d4501c873c57a89d0351a76e9c8cc89"
  },
  {
    "url": "modelstudy/finetuning-exercises-code.html",
    "revision": "10f3be1ad00edbf4fb007e27d1c2765d"
  },
  {
    "url": "modelstudy/finetuning-f1-scores.html",
    "revision": "f4858ed65d49f886eada4e255c882462"
  },
  {
    "url": "modelstudy/finetuning-warn-collect.html",
    "revision": "a4db108c109197a6856f55958a1d5591"
  },
  {
    "url": "modelstudy/first-model-project.html",
    "revision": "3ee334846a89b4966274b56fd342e11d"
  },
  {
    "url": "modelstudy/function-calling.html",
    "revision": "7be84566dfbf2b1cd02e3450ce1478f7"
  },
  {
    "url": "modelstudy/impl-transformer.html",
    "revision": "82d11ad9b51e77938f6074769eaef51b"
  },
  {
    "url": "modelstudy/langchain-agent-practice.html",
    "revision": "9399cce4abd9a15e4f216702acab29b2"
  },
  {
    "url": "modelstudy/langchain-prompt.html",
    "revision": "05548e87a624bfd67feb6b996fddd4c3"
  },
  {
    "url": "modelstudy/langchain-study.html",
    "revision": "847dd1088e33e08c73ac9d20def4b7f2"
  },
  {
    "url": "modelstudy/llms_generation_optimization copy.html",
    "revision": "5160a3170d83967b6e40bcb243bda047"
  },
  {
    "url": "modelstudy/llms_generation_optimization.html",
    "revision": "39f5aff702076184b7b8ede744a9b2a8"
  },
  {
    "url": "modelstudy/lm_eval.html",
    "revision": "af13948bcd418f467d3abface1e20c72"
  },
  {
    "url": "modelstudy/lora-fine-tuning.html",
    "revision": "ea7f1f46d0283646abf7ddbe770e8235"
  },
  {
    "url": "modelstudy/mianshi.html",
    "revision": "6ec295d384ce9a1841161117dce2450f"
  },
  {
    "url": "modelstudy/model-basic.html",
    "revision": "348ed1effc0db4af6abd2776b7fdfe64"
  },
  {
    "url": "modelstudy/model-case.html",
    "revision": "39e4d032f529fcc29cde09c08ae05f70"
  },
  {
    "url": "modelstudy/model-deploy.html",
    "revision": "bad014dae383c9ad2a6175fcc1b806be"
  },
  {
    "url": "modelstudy/model-english.html",
    "revision": "046999b5c242ff3788986d9e7cde2064"
  },
  {
    "url": "modelstudy/model-evaluate.html",
    "revision": "9e304893b74d4ff855dcddf61ce3f84a"
  },
  {
    "url": "modelstudy/model-fine-tuning.html",
    "revision": "1ddd64c2c2dccc39f87ab471e34c7238"
  },
  {
    "url": "modelstudy/model-function-calling.html",
    "revision": "44eecd80ab038c5456209ce99dee811a"
  },
  {
    "url": "modelstudy/model-langchain-rag.html",
    "revision": "4b319a07f1fd1194dcb4c5fff09212f0"
  },
  {
    "url": "modelstudy/model-langchain.html",
    "revision": "94b6df036c5c7235d90c2b4f911ad2e9"
  },
  {
    "url": "modelstudy/model-optimize.html",
    "revision": "a95ed958b30239c34bcd25221106082c"
  },
  {
    "url": "modelstudy/model-pytorch.html",
    "revision": "236805bce6e3baf335300bf26c22eb51"
  },
  {
    "url": "modelstudy/model-quantization.html",
    "revision": "40af379e5468980282257a19f97eb17a"
  },
  {
    "url": "modelstudy/model-question.html",
    "revision": "956e4ec1bc2b17a3100d9a7c054e8793"
  },
  {
    "url": "modelstudy/model-rag-pain.html",
    "revision": "eba0829114035ef3dff8b2eb2fe6292d"
  },
  {
    "url": "modelstudy/model-rag.html",
    "revision": "b16c03265ca9d1d1c6cd13e97efbb2e3"
  },
  {
    "url": "modelstudy/model-RNN.html",
    "revision": "77e7e567709e8d1139dfaff100d3200c"
  },
  {
    "url": "modelstudy/model-summary.html",
    "revision": "687e81b5ba29b841ad90823a482a9ee5"
  },
  {
    "url": "modelstudy/model-train-analyze.html",
    "revision": "6601e689dca1bf635ad704466bb6014d"
  },
  {
    "url": "modelstudy/model-train-code.html",
    "revision": "5031475c46cf769ee95a5b4f91df6db7"
  },
  {
    "url": "modelstudy/model-train-process.html",
    "revision": "7f1af40dfad1f4db61e4997749a7f178"
  },
  {
    "url": "modelstudy/model-train-related.html",
    "revision": "6b559436002c3536dee15a7f07b70c49"
  },
  {
    "url": "modelstudy/model-train.html",
    "revision": "92b142ce54ff825f0f49dcd4e2783e04"
  },
  {
    "url": "modelstudy/model-transformer.html",
    "revision": "4bb2f5999c25fd6157b785a61b127cfd"
  },
  {
    "url": "modelstudy/model.html",
    "revision": "5d0b348ee2a26dc528d54515a868ac46"
  },
  {
    "url": "modelstudy/multi-chat.html",
    "revision": "f0f9e45ae98750760a674505d14773c4"
  },
  {
    "url": "modelstudy/ner-instruct-task.html",
    "revision": "5f0c65ecb76dc3f690029c7e53b12522"
  },
  {
    "url": "modelstudy/peft.html",
    "revision": "2317f8b578bb54a33fa4fd958d24c9fe"
  },
  {
    "url": "modelstudy/project-study.html",
    "revision": "8b6c3662f9ef638978a1d3596e963da3"
  },
  {
    "url": "modelstudy/prompts.html",
    "revision": "face90997c47f944a133a1bc6eef8d72"
  },
  {
    "url": "modelstudy/quantization.html",
    "revision": "091e8dc72deb79a90b81d7833e3c475a"
  },
  {
    "url": "modelstudy/question-bank.html",
    "revision": "d02993378e33223c8f6f5cff1c9d8ef0"
  },
  {
    "url": "modelstudy/rag-eval.html",
    "revision": "ed6cedbd9bfeeaa683949e9a6f0b6fa6"
  },
  {
    "url": "modelstudy/rag-react.html",
    "revision": "69e3026caa4fd7deac9575e2d3cfe31e"
  },
  {
    "url": "modelstudy/rag.html",
    "revision": "7bb01fd61e8b1b0642d329e3ca7112ed"
  },
  {
    "url": "modelstudy/rl.html",
    "revision": "e9832dcaa8db21ff78155bb56edb7b6c"
  },
  {
    "url": "modelstudy/self-function-calling.html",
    "revision": "adf131aeebab0706f25d4deded42168a"
  },
  {
    "url": "modelstudy/stage-four-chatbot.html",
    "revision": "8e13f3d8303406e5627ebaa5cd8028a0"
  },
  {
    "url": "modelstudy/temp.html",
    "revision": "3bdea8392865860e93dbfd8ac3be4712"
  },
  {
    "url": "modelstudy/temp2.html",
    "revision": "e13862d265e79089d3c92853b37125de"
  },
  {
    "url": "modelstudy/transformer-basic.html",
    "revision": "2241a0e4e161558a5f7e6d76649f6cde"
  },
  {
    "url": "modelstudy/transformer-code.html",
    "revision": "f462d4ac08fb5d1215740d594d492479"
  },
  {
    "url": "modelstudy/transformer-knowledge.html",
    "revision": "bf5c150f7d3bd902632472a66e865a68"
  },
  {
    "url": "modelstudy/transformer-learn.html",
    "revision": "eb92d13025a4df43facb9bd0011ccf0e"
  },
  {
    "url": "modelstudy/transformer-question.html",
    "revision": "d30f5f1bb2472bb414f3ae04d60bb374"
  },
  {
    "url": "modelstudy/transformer-related.html",
    "revision": "15af606755d6de92112271fa65bb037e"
  },
  {
    "url": "modelstudy/vector-database.html",
    "revision": "38c176f4aaf944552cdec966f31d190e"
  },
  {
    "url": "modelstudy/vLLM-intro.html",
    "revision": "06a2ff61ff85b723f8d50d38f8d4c8de"
  },
  {
    "url": "modelstudy/whatIsModel.html",
    "revision": "a011a22fa67febc832892d790e3d7986"
  },
  {
    "url": "other/ai-agent.html",
    "revision": "2215741602ddbd80f44cd091ffab5031"
  },
  {
    "url": "other/conda.html",
    "revision": "a903b9c27834078bc5988aeee953ed43"
  },
  {
    "url": "other/excellentarticles.html",
    "revision": "20c0d437d2150560e237e6d36ab7050d"
  },
  {
    "url": "other/fine-tuning-adapters.html",
    "revision": "309cf37a1bd2da776e8265ad85c06dd4"
  },
  {
    "url": "other/git-operate.html",
    "revision": "bf0c61c328e4a25cca2547113e7b368e"
  },
  {
    "url": "other/lora-0-1.html",
    "revision": "08a456caa06c330749e3fad82a1f92f5"
  },
  {
    "url": "other/model-refrence.html",
    "revision": "f0f37c2e307186270e2f4192d6ecf042"
  },
  {
    "url": "other/python.html",
    "revision": "9f05d42605f260e2acaad197ef91e733"
  },
  {
    "url": "other/pytorch-know.html",
    "revision": "713a6a7ef358d95132f9ec3e78a564d8"
  },
  {
    "url": "other/rag-question-compare.html",
    "revision": "23eccc46097ed3c947377d8f67feb246"
  },
  {
    "url": "other/resume.html",
    "revision": "7e64a7cf4d59a47b39a005461420df6a"
  },
  {
    "url": "other/swanLab-info.html",
    "revision": "3bff197d1cef83dfdc91b8df2f38f3c7"
  },
  {
    "url": "other/transformer-1.html",
    "revision": "57a9cea9ad1a5ebb8f5bd90bcf5fd079"
  },
  {
    "url": "other/transformer-2.html",
    "revision": "419f5ebf92ba3ee0cd116ab4a3461d5d"
  },
  {
    "url": "other/transformer-3.html",
    "revision": "c754b3f187a3b36bbc4c48239ed63d5b"
  },
  {
    "url": "other/transformer-collect.html",
    "revision": "f7376b075ad43ced0a08bdc05fe512a4"
  },
  {
    "url": "other/transformer-learn.html",
    "revision": "84d82da3c09d4032aa18b5001f14d1c3"
  },
  {
    "url": "other/using-packages.html",
    "revision": "f7a0b111daa3d6ce759b94b8d6f328f6"
  },
  {
    "url": "pystudy/array-operation.html",
    "revision": "889840233d2f1af9e7c0867ba5595bec"
  },
  {
    "url": "pystudy/basic.html",
    "revision": "39b097dea34041330f768767c07d5247"
  },
  {
    "url": "pystudy/builtin-function.html",
    "revision": "a20e043db0eaed2d31856155a065f0fc"
  },
  {
    "url": "pystudy/class.html",
    "revision": "23bcf9afffc1dc72e9ae9430641d16a2"
  },
  {
    "url": "pystudy/data-structure.html",
    "revision": "ed7f1c9f3901534e7fde4c0428ff99db"
  },
  {
    "url": "pystudy/database.html",
    "revision": "13c0ea0ccaea892f668574da91ea2ca6"
  },
  {
    "url": "pystudy/exception.html",
    "revision": "186074c718e05e25548627f04d5ae956"
  },
  {
    "url": "pystudy/file.html",
    "revision": "970f738ef25211ebddfb863998d264d6"
  },
  {
    "url": "pystudy/function.html",
    "revision": "65ff72798be0bc92fb2b6bd29571e670"
  },
  {
    "url": "pystudy/line-continue.html",
    "revision": "1ea855d4e4f50c76c3e8945713515605"
  },
  {
    "url": "pystudy/module.html",
    "revision": "1b4a4dde1c68523ce3e0ffd2ff5e4f2e"
  },
  {
    "url": "pystudy/network.html",
    "revision": "56466946368807d181bc4203e2dbcb6c"
  },
  {
    "url": "pystudy/numpy.html",
    "revision": "963365d417dff17c09565d3c3295a3ea"
  },
  {
    "url": "pystudy/other.html",
    "revision": "670f769263f641189baa7cf3510ec2a2"
  },
  {
    "url": "pystudy/package.html",
    "revision": "a34a7034ff611272bb89012ff82346f2"
  },
  {
    "url": "pystudy/pandas-study.html",
    "revision": "bf14bf1936f91a547e8ec39dc519acd4"
  },
  {
    "url": "pystudy/practice.html",
    "revision": "bce72aebbb36456dcbe302699d9ad936"
  },
  {
    "url": "pystudy/process.html",
    "revision": "2bfda2285a3b8b5c7e60fc060ace8283"
  },
  {
    "url": "pystudy/python-collect.html",
    "revision": "25f46b2dc144109f9a92e2106d753058"
  },
  {
    "url": "pystudy/python-evaluation.html",
    "revision": "a5d435173f58b7e5bf1bcc86fff6338e"
  },
  {
    "url": "pystudy/python-important.html",
    "revision": "deda4ba6f73ac1678c6fc23056192928"
  },
  {
    "url": "pystudy/python-list.html",
    "revision": "5ef6e2e2808e1b3bc6e51009e5f68bba"
  },
  {
    "url": "pystudy/python-web.html",
    "revision": "c3acd78182b0e240d0f37ae4c7ffb96c"
  },
  {
    "url": "pystudy/regex.html",
    "revision": "9747c531b634b55c200b95cc8e3895de"
  },
  {
    "url": "pystudy/string-function.html",
    "revision": "345b967b344a44f6e019d8abc29761a4"
  },
  {
    "url": "pystudy/technology-point.html",
    "revision": "9f4b3a05d60d529372d306078fa5d24a"
  },
  {
    "url": "pystudy/thread.html",
    "revision": "e541b731d609993bee779774e24adc8c"
  },
  {
    "url": "pystudy/use-library.html",
    "revision": "a8ad108d0f14f0573bb98376d3161190"
  },
  {
    "url": "pystudy/use-pip-install.html",
    "revision": "9e6b322701ff14ec1ff2ac30a90126c3"
  },
  {
    "url": "react/react-advanced.html",
    "revision": "531ea283f3c1b528106287b281bc77af"
  },
  {
    "url": "react/react-basic.html",
    "revision": "21e435eecfe573942701a30922008403"
  },
  {
    "url": "react/react-context.html",
    "revision": "ac1336c2bd2a78ebde3c8f9a4fb4937b"
  },
  {
    "url": "react/react-relation.html",
    "revision": "08368d62d93a57b44a6d6308074ffb13"
  },
  {
    "url": "react/ssr.html",
    "revision": "79902d6b8026f6e84a964841788b0d93"
  },
  {
    "url": "react/status-manage.html",
    "revision": "345fd1fa5e92205625756fe38b756b15"
  },
  {
    "url": "reactnative/reactnative-desc.html",
    "revision": "ecae8c68e91cb4d5f264e16cef77c2ea"
  },
  {
    "url": "reactnative/reactnative.html",
    "revision": "43bf8546e0f398264d62bb568b7810e7"
  },
  {
    "url": "reactnative/rn-problem.html",
    "revision": "5024be681bd56c95d3a2536f1a3c9f6e"
  },
  {
    "url": "tag/index.html",
    "revision": "50afa90fbfe9aead099eea594aa499b0"
  },
  {
    "url": "tag/react/index.html",
    "revision": "58c48e12a3364b7d310cbc1fea027df3"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "3159834da2f4b89be453141a6f7f103f"
  },
  {
    "url": "tag/二叉树/index.html",
    "revision": "b789874360877ab5b04fd66c4c514364"
  },
  {
    "url": "timeline/index.html",
    "revision": "00c65c65ba6e16a66bffc03843f36126"
  },
  {
    "url": "vue/basicknowledge.html",
    "revision": "d8ff00d4ea0c8e72cf2a2e347ffc998b"
  },
  {
    "url": "vue/compare.html",
    "revision": "6d3ed12ca2ab77a0b2b86832abc70daa"
  },
  {
    "url": "vue/misnotes.html",
    "revision": "f9042c5033d8404f38190f53132524bc"
  },
  {
    "url": "vue/ssr.html",
    "revision": "a114b5a59d00442e67cbac67010a8410"
  },
  {
    "url": "vue/vue-attrs-listeners.html",
    "revision": "a584354472fa0532b5ab108889409bd1"
  },
  {
    "url": "vue/vue-principle.html",
    "revision": "d5c6266ebdda9c632d6106181b6b3bbf"
  },
  {
    "url": "vue/vue-router.html",
    "revision": "199d6cfd36b6a456ecf18391724b24f4"
  },
  {
    "url": "vue/vue-status.html",
    "revision": "82aefbc031c11d5714408e1954165108"
  },
  {
    "url": "vue/vue3-basic.html",
    "revision": "da40b6149fd4761f12a8858ff3b667bf"
  },
  {
    "url": "vue/vue3-impl.html",
    "revision": "7939c8646371d4d11716daa0a3f75bc6"
  },
  {
    "url": "vue/vue3.html",
    "revision": "3a5040d1719d41c4cb6c88aa553a0e05"
  },
  {
    "url": "vue/vuex.html",
    "revision": "8538c4aae145d7ad9f2a767b3a0a5963"
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
