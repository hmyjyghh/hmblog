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
    "revision": "ebf2336f4ddd8ffd5a76e53da572a6d0"
  },
  {
    "url": "algorithm/algo-temp.html",
    "revision": "e99b268e0063f0dfde2d49b3ba0e44a1"
  },
  {
    "url": "algorithm/binary-search.html",
    "revision": "d25e4807b03c14bd948d819a65576023"
  },
  {
    "url": "algorithm/binary-tree.html",
    "revision": "aca5e8a74cb30d1634a4a8caa1f6e533"
  },
  {
    "url": "algorithm/compare-al.html",
    "revision": "3e05b9ca4c7f8713a1de68021dd9119e"
  },
  {
    "url": "algorithm/del-single-list-2.html",
    "revision": "6228d83b135dbece8f6b6c1b977b529c"
  },
  {
    "url": "algorithm/del-single-list.html",
    "revision": "20d016587f05682e02443c2c0c655d22"
  },
  {
    "url": "algorithm/double-pointer.html",
    "revision": "6f5d527c53c6bd2627dda551652c9e83"
  },
  {
    "url": "algorithm/dynamic-plan.html",
    "revision": "2f1582904fea5ade44f37af0115110da"
  },
  {
    "url": "algorithm/effect-bracket.html",
    "revision": "71a2db6b8e1cf26dbf10802eb965cab4"
  },
  {
    "url": "algorithm/greedy.html",
    "revision": "b7800b43113b4deb56a53a2f709c6a74"
  },
  {
    "url": "algorithm/longasc-sequence.html",
    "revision": "1dcbc0262ed4d11c4e6bda31ade4bb32"
  },
  {
    "url": "algorithm/other.html",
    "revision": "c1650c3c45647a9d758d6790ef6c704f"
  },
  {
    "url": "algorithm/receive-rain.html",
    "revision": "a34d88d0a38f09f374f9c1ae226351ae"
  },
  {
    "url": "algorithm/reverse-list.html",
    "revision": "b395210659bd51c893a1b7cb5cb2d0d7"
  },
  {
    "url": "algorithm/sort.html",
    "revision": "4f548ac07b2e775b30e6a32aa1c85575"
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
    "url": "assets/js/100.aaa14cd0.js",
    "revision": "0534108495d8a82a70ca730ebf0d4ffd"
  },
  {
    "url": "assets/js/101.0efbf6f3.js",
    "revision": "478dc0264a3d90360065ffd687cf5f93"
  },
  {
    "url": "assets/js/102.8266d8ce.js",
    "revision": "297874925f5705d0684e2fba76237ed3"
  },
  {
    "url": "assets/js/103.724ef5dc.js",
    "revision": "cd052737faa68a49bd530174ce9af305"
  },
  {
    "url": "assets/js/104.c90e046b.js",
    "revision": "55c6dd6f1409937bde1f64ebe060da2b"
  },
  {
    "url": "assets/js/105.524f4b47.js",
    "revision": "653e1bb78f80a495b47e5dbace9bc04b"
  },
  {
    "url": "assets/js/106.4f014dbb.js",
    "revision": "4783e2a4b3ef157d577763fa132799ea"
  },
  {
    "url": "assets/js/107.7f6dcc70.js",
    "revision": "05ea6d2a82c128cc534da51aa0ba283e"
  },
  {
    "url": "assets/js/108.67e05e49.js",
    "revision": "c14f10081ec762c6926bb846eec8a596"
  },
  {
    "url": "assets/js/109.ed91b88b.js",
    "revision": "5c3dd80e38406917f29b8309b667ebc9"
  },
  {
    "url": "assets/js/11.08937b90.js",
    "revision": "e77956ac107a7b0387db3e6be4e56ebe"
  },
  {
    "url": "assets/js/110.ba94b634.js",
    "revision": "4f30afe65b4ee2cd41b7117e5fa640c2"
  },
  {
    "url": "assets/js/111.b0891b5e.js",
    "revision": "04275b2aca03432f601df044433e54e9"
  },
  {
    "url": "assets/js/112.c310fff0.js",
    "revision": "3f4456324c9b2b9d8c2ab57b8340af6a"
  },
  {
    "url": "assets/js/113.35b115a5.js",
    "revision": "4d6acf733a4570cf193cb7731213f2b9"
  },
  {
    "url": "assets/js/114.bbc3f87d.js",
    "revision": "fc8b25c831594050b4061f5750e6f848"
  },
  {
    "url": "assets/js/115.cb2dffed.js",
    "revision": "a4d01f5073d753110a00d6d456d36b45"
  },
  {
    "url": "assets/js/116.9b4cccac.js",
    "revision": "b81c7945dada3c68fdafcb07f91a5f34"
  },
  {
    "url": "assets/js/117.d9f26adb.js",
    "revision": "79c4c9f9de9144c5de5e175b5fdf3989"
  },
  {
    "url": "assets/js/118.37aa0273.js",
    "revision": "e97d38f36c775e3b94b105a0edfde3ce"
  },
  {
    "url": "assets/js/119.c78bdb29.js",
    "revision": "3039a501dac6d009feab34e0f07921c2"
  },
  {
    "url": "assets/js/120.f5af9227.js",
    "revision": "4be0dfd83b6aa32e85f20a870225a2fb"
  },
  {
    "url": "assets/js/121.b4eba417.js",
    "revision": "3cc643eb199271170bf1b2c10176fc36"
  },
  {
    "url": "assets/js/122.11d6565c.js",
    "revision": "a4df26dd49c22ed8f796d72e7be811fe"
  },
  {
    "url": "assets/js/123.8091043e.js",
    "revision": "29fe003a0ac231263426915685b3a0ca"
  },
  {
    "url": "assets/js/124.71362df4.js",
    "revision": "f8607f51e47faf6dbd9526ab82ca457e"
  },
  {
    "url": "assets/js/125.00b86275.js",
    "revision": "39272ca06feb2add600d2f0e289b96e3"
  },
  {
    "url": "assets/js/126.713efb26.js",
    "revision": "edbbabd207a29fad9c8dd380d59ba8d8"
  },
  {
    "url": "assets/js/127.59cab168.js",
    "revision": "9070d5d3d7eaf767d9f6fe8b66ee2ca0"
  },
  {
    "url": "assets/js/128.089a135d.js",
    "revision": "ad082b344ee36a0069ffa2fde0ea5890"
  },
  {
    "url": "assets/js/129.b76c2bfb.js",
    "revision": "0fcc2a99bf93df1e24fc1925fa16b423"
  },
  {
    "url": "assets/js/130.033f60ff.js",
    "revision": "0041b4c0590d79add7710e69b5eaa55a"
  },
  {
    "url": "assets/js/131.ebdbe28b.js",
    "revision": "9d67108b269fa6392a0d85933c57acc3"
  },
  {
    "url": "assets/js/132.0650a520.js",
    "revision": "e07c36456049088123bc1d3d8926c453"
  },
  {
    "url": "assets/js/133.9ddae2e5.js",
    "revision": "c96665e6c06de577c063064c0f741e1f"
  },
  {
    "url": "assets/js/134.a5bb1c46.js",
    "revision": "0eecacd386af5d5c2fb7e0a3a51673e2"
  },
  {
    "url": "assets/js/135.5d8fb163.js",
    "revision": "017773a5fd89fdcaf02ea7c0eb032773"
  },
  {
    "url": "assets/js/136.4388ef11.js",
    "revision": "aa0625dbd2b3dbd5c8c7272c65007a33"
  },
  {
    "url": "assets/js/137.62de561f.js",
    "revision": "8a200b339a8e0327268afd61d290b2de"
  },
  {
    "url": "assets/js/138.45a46850.js",
    "revision": "5a3262c8560c086f851582bd7666c213"
  },
  {
    "url": "assets/js/139.3761647b.js",
    "revision": "4b7c77e279f1bd238e525c507c9465f1"
  },
  {
    "url": "assets/js/14.0ac4aea5.js",
    "revision": "11b1f5df8a45d04c2f0527031b496791"
  },
  {
    "url": "assets/js/140.629630cc.js",
    "revision": "e90d4d3586559a4beef1bf8616bd1468"
  },
  {
    "url": "assets/js/141.b3cf321f.js",
    "revision": "fc00936d447dbd06b6a391af2e3cf808"
  },
  {
    "url": "assets/js/142.0e2621cc.js",
    "revision": "87166ddb88a13f838229b24076dd101e"
  },
  {
    "url": "assets/js/143.b3b5efcc.js",
    "revision": "3f9fa711ac7074f49859e86d847e7fb6"
  },
  {
    "url": "assets/js/144.d3b1b4e4.js",
    "revision": "269c67899b468435faa484abe228d75b"
  },
  {
    "url": "assets/js/145.7e976193.js",
    "revision": "01f648cf6526c73558b5d8bb4acc75a9"
  },
  {
    "url": "assets/js/146.23117897.js",
    "revision": "cafc7c94a28c473b3dcc768daae3a60b"
  },
  {
    "url": "assets/js/147.119b53c4.js",
    "revision": "85de06da1c48165da176c84104aad812"
  },
  {
    "url": "assets/js/148.29d9e57b.js",
    "revision": "084c83bce359c2e9a3f8d3595df80773"
  },
  {
    "url": "assets/js/149.7337bbd7.js",
    "revision": "3294854e23101c6667df3693f486ade5"
  },
  {
    "url": "assets/js/15.2cac15c3.js",
    "revision": "688079c52f80af83336ee63d8b5680a1"
  },
  {
    "url": "assets/js/150.2bc6b77e.js",
    "revision": "808bf780d4ea86e42f93b9d64e780415"
  },
  {
    "url": "assets/js/151.0a63508d.js",
    "revision": "986e352a9877afa34369290724af19e9"
  },
  {
    "url": "assets/js/152.dcaab32f.js",
    "revision": "79d9989398fbde459ea96c0439988f88"
  },
  {
    "url": "assets/js/153.70ddb476.js",
    "revision": "3d4451383cc1cb74eb4a79cb4b708cad"
  },
  {
    "url": "assets/js/154.418525fe.js",
    "revision": "049bed09319324198cf40900decfa63a"
  },
  {
    "url": "assets/js/155.9afd0e4a.js",
    "revision": "2c31f3bec29ab52322ea5eade6583a25"
  },
  {
    "url": "assets/js/156.a8f86518.js",
    "revision": "5916f761068cf78d8e49d56ec9d40773"
  },
  {
    "url": "assets/js/157.a56694f6.js",
    "revision": "8b76013a439c063f90f98ddd6f5952d9"
  },
  {
    "url": "assets/js/158.a87b9813.js",
    "revision": "50d8f8f562730944f635a0746d1b0998"
  },
  {
    "url": "assets/js/159.494a3955.js",
    "revision": "20266057d6cdd34d6fde8c63a9bf5e48"
  },
  {
    "url": "assets/js/16.41c97ec9.js",
    "revision": "93d14d23f5306cdccf9cc340e18c5164"
  },
  {
    "url": "assets/js/160.fa07fb38.js",
    "revision": "07ffb63b04b932c160b0b526f3c1277c"
  },
  {
    "url": "assets/js/161.3c2ba74c.js",
    "revision": "6c8f700c2fdaf96f3692a79b44fba29d"
  },
  {
    "url": "assets/js/162.3498412c.js",
    "revision": "1b4d5cdaedc61b38c1d202fba99c12a3"
  },
  {
    "url": "assets/js/163.6e9a874c.js",
    "revision": "a98a341a05f7e8eb2b876daf359988a4"
  },
  {
    "url": "assets/js/164.fca0311a.js",
    "revision": "324fbc469df14ca574e5ce53cdebd371"
  },
  {
    "url": "assets/js/165.49f4f1e9.js",
    "revision": "a441c7cc13e14db6ee7e86fcdf38d4d2"
  },
  {
    "url": "assets/js/166.cc24c38c.js",
    "revision": "0c7dd582a270fb132a9a8b829ede0ebb"
  },
  {
    "url": "assets/js/167.c156eee0.js",
    "revision": "22ac77d238378c18f3b8c027ec6bf073"
  },
  {
    "url": "assets/js/168.1c97aa21.js",
    "revision": "6ebdd5e13345b59989a1cf6864597a69"
  },
  {
    "url": "assets/js/169.8030722b.js",
    "revision": "250d540c5f9e175d405e38e56eb55b4d"
  },
  {
    "url": "assets/js/17.29a60e10.js",
    "revision": "c12cab21b0e58f47d805749f1a837598"
  },
  {
    "url": "assets/js/170.931ffea0.js",
    "revision": "e5547b639b6526475b8b32aef119b69b"
  },
  {
    "url": "assets/js/171.e81efd43.js",
    "revision": "c996318277bf40505a89638fa8df7385"
  },
  {
    "url": "assets/js/172.ff893607.js",
    "revision": "a8bbf45743d7e7d2ac9bca8f45ec4299"
  },
  {
    "url": "assets/js/173.82bb0dfa.js",
    "revision": "bf2b93ac4bd0672d0059c9277792c53b"
  },
  {
    "url": "assets/js/174.a96b54bc.js",
    "revision": "09573abeeedf515b165462129c6f3547"
  },
  {
    "url": "assets/js/175.e38339af.js",
    "revision": "d76cfac826b334930f00c5d5c76730a2"
  },
  {
    "url": "assets/js/176.1c19e051.js",
    "revision": "3e1db75c9d582ed0a2300106fb645058"
  },
  {
    "url": "assets/js/177.17ac5940.js",
    "revision": "ee3a993fe2a7ed3c52900db8ab13a497"
  },
  {
    "url": "assets/js/178.13550966.js",
    "revision": "8647a4f7f32b88e47e17d9e6faed97a5"
  },
  {
    "url": "assets/js/179.eeceedc7.js",
    "revision": "42ab0ba6d26fe451737b978c6a188b34"
  },
  {
    "url": "assets/js/18.27fd2b83.js",
    "revision": "bd9d5b805bca2ffea52562e712745e52"
  },
  {
    "url": "assets/js/180.391bc0cc.js",
    "revision": "2a9ffa34de1314dbb8da1dd013b050b9"
  },
  {
    "url": "assets/js/181.7c56cbf5.js",
    "revision": "95cdd7b2303774bf519eaef781a59569"
  },
  {
    "url": "assets/js/182.18ed072c.js",
    "revision": "e7a88f8a9a4576bd79062875bb55d43c"
  },
  {
    "url": "assets/js/183.e370b607.js",
    "revision": "d5ca0d46c50005b3e462c05c207a9cb7"
  },
  {
    "url": "assets/js/184.3df2b614.js",
    "revision": "9bcbdfabc45a5608e1af287fa0f512af"
  },
  {
    "url": "assets/js/185.83406ffe.js",
    "revision": "2577a8fe169978356475329158e0ff05"
  },
  {
    "url": "assets/js/186.5ed9b760.js",
    "revision": "924b05dd6993b3e2f5aae3e2e32aef56"
  },
  {
    "url": "assets/js/187.1b2f656b.js",
    "revision": "7b18b707f3fbc884bbaee041f5c2b0cd"
  },
  {
    "url": "assets/js/188.7294afbe.js",
    "revision": "1610542c96e629dbdc0d563b2e955df0"
  },
  {
    "url": "assets/js/189.2b914a63.js",
    "revision": "0181fa0ab2d0b45e12cfc6842a589023"
  },
  {
    "url": "assets/js/19.e7351a57.js",
    "revision": "497c4fe1210b978757c125312c8c95af"
  },
  {
    "url": "assets/js/190.fffc2f76.js",
    "revision": "79652b0c73c6df1547ab3c6cff00cc81"
  },
  {
    "url": "assets/js/191.6e10b78f.js",
    "revision": "c1b4fe2d1271afd66623b7cc26448340"
  },
  {
    "url": "assets/js/192.c2c4d199.js",
    "revision": "b8d6209192af7351069410faa5a9ce7c"
  },
  {
    "url": "assets/js/193.d7913fc0.js",
    "revision": "60d445f9f01e9f31b6624bf9b078fe60"
  },
  {
    "url": "assets/js/194.d59ea137.js",
    "revision": "829eca59f20ebd403ac4958f45847493"
  },
  {
    "url": "assets/js/195.3c830119.js",
    "revision": "4744c461b37131c4e7b90b2fe4d5f821"
  },
  {
    "url": "assets/js/196.3cd5db01.js",
    "revision": "e8cf24c4c9f648fc9799573506f6abd1"
  },
  {
    "url": "assets/js/197.658f0553.js",
    "revision": "3eeb9b56721817722e3af147f251510c"
  },
  {
    "url": "assets/js/198.682f950e.js",
    "revision": "44dbddbcc868f5e332637938995ac28a"
  },
  {
    "url": "assets/js/199.412ad100.js",
    "revision": "6a28cb2cbf0e286d459e7e5f3f0f94c6"
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
    "url": "assets/js/200.3d787d96.js",
    "revision": "4808e438217892865f187a31b41c6620"
  },
  {
    "url": "assets/js/201.28641320.js",
    "revision": "0728e8a1726ebea7ec61fb6bcd1bda7b"
  },
  {
    "url": "assets/js/202.f5d30660.js",
    "revision": "79df8936d46e3753c5da867998e2724c"
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
    "url": "assets/js/39.ccd834b5.js",
    "revision": "4e72a2c0edc9802c2716ddbb59092f27"
  },
  {
    "url": "assets/js/4.a36b649a.js",
    "revision": "a1af6d49f1ee40330c85d48e323c6ea8"
  },
  {
    "url": "assets/js/40.bd57d38c.js",
    "revision": "17e1c81001622bc3d9e16984a1434db5"
  },
  {
    "url": "assets/js/41.7e9c947a.js",
    "revision": "0c1249d031e575a3d20e83ce42ebf7ce"
  },
  {
    "url": "assets/js/42.c1d8457e.js",
    "revision": "cd13eb14e5456c2de187a686afd59e52"
  },
  {
    "url": "assets/js/43.c579cfdf.js",
    "revision": "daa443addaa5ed6db7c13ddaff0befbf"
  },
  {
    "url": "assets/js/44.e9d4445c.js",
    "revision": "cd58ecbda3a19478238dcbfbb557609e"
  },
  {
    "url": "assets/js/45.f93e9bad.js",
    "revision": "bf8efc07ed44bbf0349ee48b48d7cf82"
  },
  {
    "url": "assets/js/46.2e3ff6e3.js",
    "revision": "c14e08013346069183dea92a5fc8dbad"
  },
  {
    "url": "assets/js/47.61225227.js",
    "revision": "3e6be6c51780be83e6d1b7066b7ccf3d"
  },
  {
    "url": "assets/js/48.7030d96f.js",
    "revision": "3e38d91de40841a1b640b99662f4ba2e"
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
    "url": "assets/js/50.9b33676c.js",
    "revision": "0b20dc0067875d59cd2ff3fa296a400f"
  },
  {
    "url": "assets/js/51.346846a4.js",
    "revision": "2b71e312ab1d1136f4fb57ca0bc9ea43"
  },
  {
    "url": "assets/js/52.2caf9c6d.js",
    "revision": "5191569f7b905f2b95f5da30a96b8516"
  },
  {
    "url": "assets/js/53.9f14e863.js",
    "revision": "ccca7a27f8db2c14a5d2748dd5a42446"
  },
  {
    "url": "assets/js/54.efbdc48a.js",
    "revision": "fc572419dbc69543ebc45a17bd79cc47"
  },
  {
    "url": "assets/js/55.b9c99df9.js",
    "revision": "5768554e3031bd9a40dfbf7e8ab4fc45"
  },
  {
    "url": "assets/js/56.92bdaa87.js",
    "revision": "4bbf61fb595e975a8e817d36dd37bc55"
  },
  {
    "url": "assets/js/57.ee6db2d3.js",
    "revision": "73e6cf0608d65b332ff5e6246a1957c5"
  },
  {
    "url": "assets/js/58.3a6c9a2f.js",
    "revision": "29b9f8d340322984238d7696983fdf5b"
  },
  {
    "url": "assets/js/59.7dd15aa9.js",
    "revision": "752a0f4e7b12cf122e1bf4c6578a50f3"
  },
  {
    "url": "assets/js/6.3551780c.js",
    "revision": "fe0ed93201a286fa45177a397258d276"
  },
  {
    "url": "assets/js/60.15e42057.js",
    "revision": "d47304dcb4861c1b8af06541d3df768a"
  },
  {
    "url": "assets/js/61.d7218ae6.js",
    "revision": "ddbe08614ad3795b0b8be29b39023fb8"
  },
  {
    "url": "assets/js/62.93201cfc.js",
    "revision": "5f6a059a523da28e01e85bdf0133857d"
  },
  {
    "url": "assets/js/63.ac5fdc26.js",
    "revision": "df9608663ee2f79ecaa843164d7a515a"
  },
  {
    "url": "assets/js/64.f5210254.js",
    "revision": "3d345c5fdf798d653c8f041503ab780b"
  },
  {
    "url": "assets/js/65.6eada07f.js",
    "revision": "a2c7ac72216230a9fca1300c3cf6f0dc"
  },
  {
    "url": "assets/js/66.53e00f73.js",
    "revision": "0d38473cb6b4d0547a205f16f3050133"
  },
  {
    "url": "assets/js/67.7972b3a3.js",
    "revision": "de644bb11fe7b81ddf21d557b53a54d6"
  },
  {
    "url": "assets/js/68.49ef65ee.js",
    "revision": "fb6dfaa710d814301d78c0e3b0b93339"
  },
  {
    "url": "assets/js/69.d3847aea.js",
    "revision": "8945cba13b38870fc57c3d8374c13113"
  },
  {
    "url": "assets/js/7.5041dce4.js",
    "revision": "f2c23e2ac23b68ac3e88a056dd0784fa"
  },
  {
    "url": "assets/js/70.dfeb6f83.js",
    "revision": "d8914239dcc3af755e55c2b166a9108a"
  },
  {
    "url": "assets/js/71.7bc610ed.js",
    "revision": "f9cafdb411088d0406d8917a38aa2500"
  },
  {
    "url": "assets/js/72.c0439b93.js",
    "revision": "b69dc8be54f9e6b5f6c2c8cbc3e462f6"
  },
  {
    "url": "assets/js/73.5be88c5f.js",
    "revision": "f0cdfdd9fe8c22a91de6193f8a190c19"
  },
  {
    "url": "assets/js/74.90056623.js",
    "revision": "5646c9ba7c41c4ac51a41b50c456f4d6"
  },
  {
    "url": "assets/js/75.15d8f5c3.js",
    "revision": "6908cbe16e6405d709e9df4c257ddac1"
  },
  {
    "url": "assets/js/76.df19c46f.js",
    "revision": "cf099f2513a7763d014c0e9e960553ae"
  },
  {
    "url": "assets/js/77.46c1300e.js",
    "revision": "41a812b4aed67fc34236c4da2e83b374"
  },
  {
    "url": "assets/js/78.dd6a8359.js",
    "revision": "983de8443bc7e11b10febc5069b37959"
  },
  {
    "url": "assets/js/79.7b85ed20.js",
    "revision": "77c2bdc412bb9e110076b929ec9ecbba"
  },
  {
    "url": "assets/js/8.1407b990.js",
    "revision": "dcb7a34e3667ce40091860e9cc38e5c2"
  },
  {
    "url": "assets/js/80.b794945b.js",
    "revision": "3133a5d323ce3e31152af03fed524a47"
  },
  {
    "url": "assets/js/81.9544f2c1.js",
    "revision": "afcf1d529b87814af14e3468f4c37a9f"
  },
  {
    "url": "assets/js/82.ed6b23da.js",
    "revision": "ab6bb4946c242e30512bfd18d76815b4"
  },
  {
    "url": "assets/js/83.4996695c.js",
    "revision": "45f0716182fca042cd2d8ece61e17f72"
  },
  {
    "url": "assets/js/84.fb1e1c6d.js",
    "revision": "83b6b50267e3a45aceb7026fd7ba9bb4"
  },
  {
    "url": "assets/js/85.35d8713a.js",
    "revision": "71c5d5e2d7ed45cbff86eeaa60ece58a"
  },
  {
    "url": "assets/js/86.92778e14.js",
    "revision": "81773cdd5b7426396e7b8e17dce436d1"
  },
  {
    "url": "assets/js/87.36f30213.js",
    "revision": "93474532878e30a672f50bc4de773243"
  },
  {
    "url": "assets/js/88.0e921717.js",
    "revision": "9efaf78d5444b77b5b1b1596faad4526"
  },
  {
    "url": "assets/js/89.7325ff99.js",
    "revision": "1761754ed98baf5116ecae35aedeb457"
  },
  {
    "url": "assets/js/9.7b6dd5b4.js",
    "revision": "f1ee1335cb73fc3af924d330037b0332"
  },
  {
    "url": "assets/js/90.8a74a496.js",
    "revision": "dd05e9662012d0ee755f5356076d989f"
  },
  {
    "url": "assets/js/91.33f5501c.js",
    "revision": "2714b6308d88e9435ecfb5cdd34fed30"
  },
  {
    "url": "assets/js/92.16c0cdca.js",
    "revision": "0ee554a7e11e25a9223a4081d0281de2"
  },
  {
    "url": "assets/js/93.bdfe358d.js",
    "revision": "e1c74755b849ae92379ac05f0716145d"
  },
  {
    "url": "assets/js/94.85edf174.js",
    "revision": "3fa05b144867ab90f78a4de5f2090c7c"
  },
  {
    "url": "assets/js/95.ebd6c741.js",
    "revision": "03a20e401a3b48d6690a08742e68f5d7"
  },
  {
    "url": "assets/js/96.4218b52b.js",
    "revision": "50275e19c1bbe735c9c2ff127e2ce899"
  },
  {
    "url": "assets/js/97.9c805501.js",
    "revision": "c46f14939ab9d446863aff765a854c09"
  },
  {
    "url": "assets/js/98.8d549e6b.js",
    "revision": "53a1cf485d7835aded0f0fa0d8812a55"
  },
  {
    "url": "assets/js/99.7529f3b5.js",
    "revision": "6a27f16a63caef63d6d5357054bf977b"
  },
  {
    "url": "assets/js/app.9af7565c.js",
    "revision": "99eb2f4013333ac907a7bbca817f5509"
  },
  {
    "url": "assets/js/vendors~docsearch.e480d9b8.js",
    "revision": "a887f3139f3f8baba27c98087130d4d9"
  },
  {
    "url": "categories/index.html",
    "revision": "139fcdc39fc41efef0058eeb3109f2cb"
  },
  {
    "url": "guide.html",
    "revision": "4b6b3f36cddf490fb21d5b1733a75c78"
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
    "revision": "7b4978de22196296fcfdbb94a62c8455"
  },
  {
    "url": "logo.png",
    "revision": "4e48730bd98de9f333e6bd14d62b6c7d"
  },
  {
    "url": "mcpstudy/ide-mcp-server.html",
    "revision": "a79af358f8ea95f3d4c9a8f864a98676"
  },
  {
    "url": "mcpstudy/mcp-knowledge.html",
    "revision": "bcd5ebce4c76b6a7568bd86ca1fcc27d"
  },
  {
    "url": "modelstudy/11-29.html",
    "revision": "0e2aa4314ac5684dbe7e9782856a7aec"
  },
  {
    "url": "modelstudy/123.html",
    "revision": "04e71b689ee1ed310bb1187f794294d0"
  },
  {
    "url": "modelstudy/2025-11-04.html",
    "revision": "90ac85764e781b02216a5ac809db5d11"
  },
  {
    "url": "modelstudy/25-12-01.html",
    "revision": "39d1d0bda761d14f733dc962ac685ff0"
  },
  {
    "url": "modelstudy/666-多模态.html",
    "revision": "6fed7ff150ae39bd6c2f01fe73d0886f"
  },
  {
    "url": "modelstudy/agent.html",
    "revision": "23b856569bd703a81ada4e6f864a33b7"
  },
  {
    "url": "modelstudy/auto-model-desc.html",
    "revision": "50bce544c56cd9db397ec5130126f918"
  },
  {
    "url": "modelstudy/basic-aigc.html",
    "revision": "8c7942fee415f535cae9a14c851a076d"
  },
  {
    "url": "modelstudy/basic-knowledge.html",
    "revision": "f92c97f942e686fc2f02a505891bef28"
  },
  {
    "url": "modelstudy/compute-metrics.html",
    "revision": "5a13847f2319118d90934239be120d0e"
  },
  {
    "url": "modelstudy/construct-dataset.html",
    "revision": "9b8142910f21faf376a04b7798c9d715"
  },
  {
    "url": "modelstudy/data-chunk.html",
    "revision": "f0af981967c06136bbef3459fa182f50"
  },
  {
    "url": "modelstudy/deep-learning.html",
    "revision": "5b80a6f09eff0125e5074ca3576f9c39"
  },
  {
    "url": "modelstudy/deepseek-search.html",
    "revision": "1e16982e33b3651c5e9333bd1bf0d412"
  },
  {
    "url": "modelstudy/extended-learning.html",
    "revision": "8c4bf37b26b8d5b2b2b024b9b12bfc82"
  },
  {
    "url": "modelstudy/finetuing-step5.html",
    "revision": "2ae4e2cbcad3120469b81023a0f72799"
  },
  {
    "url": "modelstudy/finetuing-step9.html",
    "revision": "d79e1cb3ab09716423868f957f894917"
  },
  {
    "url": "modelstudy/finetuning-error-collect.html",
    "revision": "84cbe582f5a04272b2be7733344a1730"
  },
  {
    "url": "modelstudy/finetuning-exercises-code.html",
    "revision": "f2741981c3ff19a9617c14378146b3fc"
  },
  {
    "url": "modelstudy/finetuning-f1-scores.html",
    "revision": "234c2e071ccc2ef7adbcf52f917b9a70"
  },
  {
    "url": "modelstudy/finetuning-warn-collect.html",
    "revision": "63ceddc7b384b44e2a4b13e8d4548da1"
  },
  {
    "url": "modelstudy/first-model-project.html",
    "revision": "c6134b90563be54519dc46be8d4f908d"
  },
  {
    "url": "modelstudy/function-calling.html",
    "revision": "d1ce5e098ba89e9bb6d2d73d48677d04"
  },
  {
    "url": "modelstudy/impl-transformer.html",
    "revision": "5e95b20e848f56e21ec1171e27a95712"
  },
  {
    "url": "modelstudy/langchain-agent-practice.html",
    "revision": "5a7a0d567e89b3bf0e9095113335c902"
  },
  {
    "url": "modelstudy/langchain-prompt.html",
    "revision": "a6424665b5cc04f59326dcdcae25dfd6"
  },
  {
    "url": "modelstudy/langchain-study.html",
    "revision": "3cbb036ef72973f67e179d70671b9dce"
  },
  {
    "url": "modelstudy/llms_generation_optimization copy.html",
    "revision": "25857cbad02444b1d65209bfb8a58a22"
  },
  {
    "url": "modelstudy/llms_generation_optimization.html",
    "revision": "ffd1a43f9d99e84d1ed1e4d53114ee28"
  },
  {
    "url": "modelstudy/lm_eval.html",
    "revision": "08d0f808c698a16f30fe2957ccb6d7a8"
  },
  {
    "url": "modelstudy/lora-fine-tuning.html",
    "revision": "a17cf569e0b8364643e4782088f2c1d2"
  },
  {
    "url": "modelstudy/mianshi.html",
    "revision": "c947dae3ad85f82bd13abe1e0d7b6b93"
  },
  {
    "url": "modelstudy/model-basic.html",
    "revision": "f8c08098a44055d0486108d6d4777509"
  },
  {
    "url": "modelstudy/model-case.html",
    "revision": "fd67390e7f6c3ba3d925d28ac89293b3"
  },
  {
    "url": "modelstudy/model-deploy.html",
    "revision": "78732affe46be194d5a0829d698a416b"
  },
  {
    "url": "modelstudy/model-english.html",
    "revision": "f11d6358998fc2f5e4bf2a8f500b3eb2"
  },
  {
    "url": "modelstudy/model-evaluate.html",
    "revision": "bbd4e8e76bf9ea71766a894a3333c81a"
  },
  {
    "url": "modelstudy/model-fine-tuning.html",
    "revision": "1f528cc6eb20b283543fd0ce75d23842"
  },
  {
    "url": "modelstudy/model-function-calling.html",
    "revision": "df603bc45910f9c900056f82a53ff871"
  },
  {
    "url": "modelstudy/model-langchain-rag.html",
    "revision": "03e384b92e82336849514235dd9d1192"
  },
  {
    "url": "modelstudy/model-langchain.html",
    "revision": "3428f99c4d87622d0fc86317afd6f28b"
  },
  {
    "url": "modelstudy/model-optimize.html",
    "revision": "449bbe82be65be69010e02c1cdda62fe"
  },
  {
    "url": "modelstudy/model-pytorch.html",
    "revision": "aab9847149d282fb1f139e04670bda21"
  },
  {
    "url": "modelstudy/model-quantization.html",
    "revision": "d34e7150cd7aa25b48c49b462c29cb72"
  },
  {
    "url": "modelstudy/model-question.html",
    "revision": "6620b7fbff05c7be561658c06bec8674"
  },
  {
    "url": "modelstudy/model-rag-pain.html",
    "revision": "2175d5436ce3fa28c629c00d4c4df24a"
  },
  {
    "url": "modelstudy/model-rag.html",
    "revision": "92dcbbe8b44eaa9ea05069b1e68f59a3"
  },
  {
    "url": "modelstudy/model-RNN.html",
    "revision": "0dc6fbef2e29782289e390528efbf8fc"
  },
  {
    "url": "modelstudy/model-summary.html",
    "revision": "2e5ef1f9ca8c6265ea461aacd56bd66a"
  },
  {
    "url": "modelstudy/model-train-analyze.html",
    "revision": "4dd3b2656dfbbe077c69e86f72fa3323"
  },
  {
    "url": "modelstudy/model-train-code.html",
    "revision": "e0e1e40ef747ece10ed8d315b7327fd4"
  },
  {
    "url": "modelstudy/model-train-process.html",
    "revision": "a0c924d1d1f0569c6453884510e276a6"
  },
  {
    "url": "modelstudy/model-train.html",
    "revision": "1d43a9d668304d9370d2064371753334"
  },
  {
    "url": "modelstudy/model-transformer.html",
    "revision": "d0cbf5ae2c7f1788249d5165a997eb9a"
  },
  {
    "url": "modelstudy/model.html",
    "revision": "0c02c15a5f995af30995e90075bde260"
  },
  {
    "url": "modelstudy/multi-chat.html",
    "revision": "0bfa557a96b83952a03db87da3f6a93c"
  },
  {
    "url": "modelstudy/ner-instruct-task.html",
    "revision": "b87133d655f9237a934ec5789781570c"
  },
  {
    "url": "modelstudy/peft.html",
    "revision": "ac20795109d2d328a2bfb15877e2a87b"
  },
  {
    "url": "modelstudy/project-study.html",
    "revision": "d5e1f77192ee1df8285f638723bc1fca"
  },
  {
    "url": "modelstudy/prompts.html",
    "revision": "d1e69b2d6d3b8047796468f063d92403"
  },
  {
    "url": "modelstudy/quantization.html",
    "revision": "c045f3e40bb00357507ff5bb8b895dcf"
  },
  {
    "url": "modelstudy/question-bank.html",
    "revision": "82877996790b819872b99089f81d766e"
  },
  {
    "url": "modelstudy/rag-eval.html",
    "revision": "0b7bfc0240cb4349fef280f43bf12831"
  },
  {
    "url": "modelstudy/rag-react.html",
    "revision": "c3ee549542589a1e507e52462564da61"
  },
  {
    "url": "modelstudy/rag.html",
    "revision": "66ec2fdcbcfe3c72f2d7c7242594e34a"
  },
  {
    "url": "modelstudy/rl.html",
    "revision": "2c3f2999f638120ee7fc7eeef09bdb3f"
  },
  {
    "url": "modelstudy/self-function-calling.html",
    "revision": "44f162fdbb6245cd5b2780a257700925"
  },
  {
    "url": "modelstudy/stage-four-chatbot.html",
    "revision": "075e3790580b85195ec13fc3c319ed47"
  },
  {
    "url": "modelstudy/temp.html",
    "revision": "6dee05c0597c1f5c3225aa8a651e523f"
  },
  {
    "url": "modelstudy/temp2.html",
    "revision": "667f33fce8b743beb6fbbbc9d42d5874"
  },
  {
    "url": "modelstudy/transformer-basic.html",
    "revision": "944abb9308148db7bc88d1e5dce6fb9d"
  },
  {
    "url": "modelstudy/transformer-code.html",
    "revision": "b12cc0d574ad0bd8fa5a83aa5353a15d"
  },
  {
    "url": "modelstudy/transformer-knowledge.html",
    "revision": "34fe6b310d41c89730ba09d7fde4f242"
  },
  {
    "url": "modelstudy/transformer-learn.html",
    "revision": "2b5fda189613b9d3c372a5130b4cfa94"
  },
  {
    "url": "modelstudy/transformer-question.html",
    "revision": "a714eade80ab64214fa74e90b9fac330"
  },
  {
    "url": "modelstudy/transformer-related.html",
    "revision": "6d6a38d5965ad932bb0dcebdc613c960"
  },
  {
    "url": "modelstudy/vector-database.html",
    "revision": "ec8cd095ebe18b1d33abdb93238a168e"
  },
  {
    "url": "modelstudy/vLLM-intro.html",
    "revision": "990c5b0747b667279bba98e8afddcb55"
  },
  {
    "url": "modelstudy/whatIsModel.html",
    "revision": "d6a54a576724adb12e059b51abad9f45"
  },
  {
    "url": "other/ai-agent.html",
    "revision": "c85e2f070ffefa6479daf7a725d4e57d"
  },
  {
    "url": "other/conda.html",
    "revision": "2a8ca1c7685de5834cb37f7a13270021"
  },
  {
    "url": "other/excellentarticles.html",
    "revision": "aa4600bce8ebf3effa1a4337da9f3195"
  },
  {
    "url": "other/fine-tuning-adapters.html",
    "revision": "2649232fe107600557acc8e54c0b8eed"
  },
  {
    "url": "other/git-operate.html",
    "revision": "3d6056d9e2d34cfd79017ea2ad39d3bf"
  },
  {
    "url": "other/lora-0-1.html",
    "revision": "2133b5bda7db52b1c6c3d6a86dc323cb"
  },
  {
    "url": "other/model-refrence.html",
    "revision": "ec89c2b101e2d37c3542404097804009"
  },
  {
    "url": "other/python.html",
    "revision": "41de609835e354bf3660d3f4d0c38095"
  },
  {
    "url": "other/pytorch-know.html",
    "revision": "2bfbcda1773cace49ef98b2e0255c220"
  },
  {
    "url": "other/rag-question-compare.html",
    "revision": "0582ce1a4552e1f789e1dbe92581de3c"
  },
  {
    "url": "other/resume.html",
    "revision": "603dd3b31334ee1102c3dce83261d027"
  },
  {
    "url": "other/swanLab-info.html",
    "revision": "6dea26c68854bb6696a4dd3c546f6f32"
  },
  {
    "url": "other/transformer-1.html",
    "revision": "8746ce94166ae4e00ce68c9970c51688"
  },
  {
    "url": "other/transformer-2.html",
    "revision": "2e8c5593960660950f8b38c3c6c2e5ee"
  },
  {
    "url": "other/transformer-3.html",
    "revision": "1419cdd59d457dc502089cba8d61407c"
  },
  {
    "url": "other/transformer-collect.html",
    "revision": "74b25f729213844b7c19745ed4898425"
  },
  {
    "url": "other/transformer-learn.html",
    "revision": "e7690345af440dfa2cc664208418ec22"
  },
  {
    "url": "other/using-packages.html",
    "revision": "55604628272a7d9f0bafc14d610a311b"
  },
  {
    "url": "pystudy/array-operation.html",
    "revision": "b2c668cea8c130aadb9bda5119168335"
  },
  {
    "url": "pystudy/basic.html",
    "revision": "49f6a718f1f2d25e4646305152372759"
  },
  {
    "url": "pystudy/builtin-function.html",
    "revision": "78c03f30091877b59c0bd65bef73944a"
  },
  {
    "url": "pystudy/class.html",
    "revision": "3ecda347782d48465258f4d48fe7ee2f"
  },
  {
    "url": "pystudy/data-structure.html",
    "revision": "999d6f908f460f7d540614bacc39caa2"
  },
  {
    "url": "pystudy/database.html",
    "revision": "f9b562dd7bf4f298ae309e5d61074d0b"
  },
  {
    "url": "pystudy/exception.html",
    "revision": "3d3cb0abc11caf44d527f93c600cde98"
  },
  {
    "url": "pystudy/file.html",
    "revision": "aaadaf6d49bb54c3e5c2cc0b8c1efe93"
  },
  {
    "url": "pystudy/function.html",
    "revision": "271f9a6d904c6174fcde1b8639529f74"
  },
  {
    "url": "pystudy/line-continue.html",
    "revision": "a246344ddafeed9eceff409d87232130"
  },
  {
    "url": "pystudy/module.html",
    "revision": "f76814b30a4d8feec24c5f398fdf8e89"
  },
  {
    "url": "pystudy/network.html",
    "revision": "6ee7e867834a1e669b71201c8448ddfc"
  },
  {
    "url": "pystudy/numpy.html",
    "revision": "734bfe4b44c0ce1c565fbaffc96cf98b"
  },
  {
    "url": "pystudy/other.html",
    "revision": "98fa72ebc5b529aab6ecd6cb604928ba"
  },
  {
    "url": "pystudy/package.html",
    "revision": "f7e83e9d3297a9ad8df919eb7469f204"
  },
  {
    "url": "pystudy/pandas-study.html",
    "revision": "f2bb2a0be1b5b3adfdbf4cc48ddb7f24"
  },
  {
    "url": "pystudy/practice.html",
    "revision": "994888789f2809bd68c779a25f212e3a"
  },
  {
    "url": "pystudy/process.html",
    "revision": "285cd172636a87e39f22e3ff61d474a7"
  },
  {
    "url": "pystudy/python-collect.html",
    "revision": "3e7a36753931ab61031909df25790051"
  },
  {
    "url": "pystudy/python-important.html",
    "revision": "b57bbbea32f32b8051792f8d0b641cbc"
  },
  {
    "url": "pystudy/regex.html",
    "revision": "026332c4291fd274e485b930ef9cc791"
  },
  {
    "url": "pystudy/string-function.html",
    "revision": "dc7d371652e37cf600629af7675eb363"
  },
  {
    "url": "pystudy/technology-point.html",
    "revision": "0791c8757bdd91c392901a0b1891f9ac"
  },
  {
    "url": "pystudy/thread.html",
    "revision": "ef640ab719588f8ca41a9e14528f05b2"
  },
  {
    "url": "pystudy/use-library.html",
    "revision": "2996ebc0a66da269f1e87981ccae4b23"
  },
  {
    "url": "pystudy/use-pip-install.html",
    "revision": "96a70b1e8375b6b70cd76a7fec46d32c"
  },
  {
    "url": "react/react-advanced.html",
    "revision": "5c89a288c35681ea10a8cf95f7b8a45b"
  },
  {
    "url": "react/react-basic.html",
    "revision": "5f721bd908caf7afc79361c00369ba2f"
  },
  {
    "url": "react/react-context.html",
    "revision": "96629add03acb22e56752faee69ea475"
  },
  {
    "url": "react/react-relation.html",
    "revision": "22c3aacaf97bf274b230a15bb75f5751"
  },
  {
    "url": "react/ssr.html",
    "revision": "677af11fc7caa46a7c1ac1b0246b7b69"
  },
  {
    "url": "react/status-manage.html",
    "revision": "e1196b3974d35813845fbace35b61c2c"
  },
  {
    "url": "reactnative/reactnative-desc.html",
    "revision": "b115855d581bd7f0bc3b9c818ae84067"
  },
  {
    "url": "reactnative/reactnative.html",
    "revision": "216bf177e2849735120351163f5ba0ab"
  },
  {
    "url": "reactnative/rn-problem.html",
    "revision": "e3d7b91a700942ba270cde728db305e1"
  },
  {
    "url": "tag/index.html",
    "revision": "8902f987a72072929a8194fa184eeaa9"
  },
  {
    "url": "tag/React/index.html",
    "revision": "a52d7990f8aefd2b6785285822afc26f"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "13665461bcc9307abb91afa2eefd6607"
  },
  {
    "url": "tag/二叉树/index.html",
    "revision": "01a15bc8f86e570f1b705bca23642939"
  },
  {
    "url": "timeline/index.html",
    "revision": "6b549fcd45d9e5fdd7f39812c323b10c"
  },
  {
    "url": "vue/basicknowledge.html",
    "revision": "cc04d1a7b7673147d550dd263bd6a188"
  },
  {
    "url": "vue/compare.html",
    "revision": "baa0ca1620706971a7449f510f17e0e6"
  },
  {
    "url": "vue/misnotes.html",
    "revision": "91bbbb227ad14f2d960832f584e1b6bd"
  },
  {
    "url": "vue/ssr.html",
    "revision": "2bfe6fb77b806a935f112643d3c3f09e"
  },
  {
    "url": "vue/vue-attrs-listeners.html",
    "revision": "d2008e8659d75bcef4c8b106434513fe"
  },
  {
    "url": "vue/vue-principle.html",
    "revision": "7946c1c1ec4ef0af8bb171a83f101795"
  },
  {
    "url": "vue/vue-router.html",
    "revision": "ec6b4b54f2da30d51034e841fb3f5423"
  },
  {
    "url": "vue/vue-status.html",
    "revision": "dbc0422ebe99b07a06bbd69b39cbb8f7"
  },
  {
    "url": "vue/vue3-basic.html",
    "revision": "da1a3b546b53c299c526728ed5958ba6"
  },
  {
    "url": "vue/vue3-impl.html",
    "revision": "50e602c01ff96a4ca8ce069ce32434cb"
  },
  {
    "url": "vue/vue3.html",
    "revision": "dd419db34ef3bddaaaa134eae9911259"
  },
  {
    "url": "vue/vuex.html",
    "revision": "80c6a1999051d9f6c715af0f797363b4"
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
