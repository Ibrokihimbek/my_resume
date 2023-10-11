'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "5eba2b3f48e84c0565b6c84a1e17c11c",
"index.html": "69a09c9a4a6d065f54ed1d28584d1a70",
"/": "69a09c9a4a6d065f54ed1d28584d1a70",
"main.dart.js": "0a577e24b00b3cf328172456c2d45333",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"logo.png": "e484ccb80fac595c7f37415a9151b964",
"icons/android-chrome-192x192.png": "e484ccb80fac595c7f37415a9151b964",
"icons/apple-touch-icon.png": "a86a17ed83a657df8cd7be7bfd6a04a6",
"icons/android-chrome-512x512.png": "ab3d4fdf66a2222cdb9741cd62bd67df",
"manifest.json": "a39009f4219461e0cf1032824be9f4e3",
".git/config": "0f932d18a743d43dd9456e795755a101",
".git/objects/0d/a5fb6c4d586fbdddc6c2ec9d7924bc830618d0": "26d7cf113d257705d490e35fb8338702",
".git/objects/0d/0323010d4c09a6fb6f57008ffd63cf18249fd4": "da421c9f796b28c6fbfe44fd16024f09",
".git/objects/0c/cd85f79d488213a1bdd8657151c78f2569a118": "6b9bac681f647870d3241d96f8ff71e0",
".git/objects/57/c7014dcc4118943d47c768a364e1685a3caa09": "a65c50473a64e95fc117d192507f7bd6",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/35/487f264aea4cf1b32b4d7ace4a55c8a18b9289": "b8e963bd9a46d81f4c29aa556f9b5485",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3d/863ee48e5dca20af9dc5faeb378bd28b33be15": "56399231f9b53b4c8c0f7ea8401f8521",
".git/objects/0e/d4edb65b32e1e36a8dfc0bfe0cf044c81d90c2": "5ffa6af8a56ae9d6da25016935fc3c33",
".git/objects/0e/c3ae245a7ad5dc0471950f1a75d1c343b95c7c": "61f24abac5778531876d290ff718fd50",
".git/objects/34/d5469b9ae34557c6155b0e5140eac6925e8b84": "434b67724e35dc7afcab790d4b84d274",
".git/objects/5a/a2a1abaad25c34adc3ddf84544c188f9acd450": "e1aaaa00c36e4d5269d636baba3cf7ed",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/a4/3371136aa1dd0c7153b3ca82d8f2a2e2d61133": "713ce1061e79dc2c6e301f912db2d423",
".git/objects/b5/c32c78133c39e69eb8d140d06c3afbe140cb87": "e1b26e9b7a9f381b4c469f0f12770278",
".git/objects/d9/7c3a00a92117a2df696231473b9ce82dc9f857": "c09ceff5934fb88dd5b4e7b5d17c1a5e",
".git/objects/d9/575a4f7813efd70e3940b9af66d5482839752f": "7ff234eb1fe5790157e93cbabe1f237d",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/df889b5e88469000d4fcabd72eae2c5ff73cea": "c2d4c89640bb506ca3c91a6c9d53379e",
".git/objects/be/17d74268262d809316dee45f3af2fcf3b372a0": "0c7e144cc86f4f0cd4aa2c7153ecadf4",
".git/objects/b3/560cba2c89a9aa1b939d06f927b1b0ff6a1291": "20d8b4057d387d8ce5dfdee03ef9ff73",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/d6/99c33781f431276ea39a292c4865fdddc78d06": "e6fbb2ad0d26ed3ebef325800e155389",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/57552b738031b5d90b9ae5908f9b1a7624cd7d": "a4bdc70b2282de92441fdc111262096d",
".git/objects/ab/95cf7c64f475b18130c70cfc374b5f37036c43": "1eb70b917f6df7a180fcebd36f1d8df6",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/721be0208c34e05d92c304a79db3c9da67bfae": "c5fea1c2ec09360e1efb219ff897efba",
".git/objects/c0/ed33f5861c2dfa5152c4e94e649540f0ad08e3": "f7c111e6183f7f4b7674447d601cf397",
".git/objects/ee/a73daedda8cac2c7c251a665ece0c8575c2ec5": "5e08728623445f28afa93f29cd8b7c8b",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fc/0daf80a6e3c833954bb8a23fce77c285fa7741": "54422472b1c46f9ddd85aea4f5eba7fb",
".git/objects/e3/771e26fb5e5b11ed5633c673383b5e700ddaa1": "c42d2bb695d74952297fbb6773e199ec",
".git/objects/e3/c63b1a210f1b8dc26d343a4ce9ad6d1277b4e7": "d58459522794e6e3a45834393d86b07a",
".git/objects/cf/79815da379b836ee2d39e2b05b4ab666ceae73": "af0c821cb19fceb254b23c87ee04da99",
".git/objects/c1/4d2a975443cda1a620142610860d653c6390ba": "50e2c52746c0202cfe0cd95f4e641c0b",
".git/objects/ec/0d30503d7cbf1d7dcc26b12318a1fa6bb0bedc": "888f65b2ae7646044c9a76d641ab979e",
".git/objects/4e/ad7f933c419154b998cbd306a9ac553c337321": "5e13d98dab92439ca0d6bdf0a89c2c5b",
".git/objects/4e/95b20dc829a10672dcea30ac132089bc22b8d2": "2a0ab02ba66615d70afe1e54a6c677b2",
".git/objects/7c/37d0c7affc8292084c2a42883586cb9dec828f": "afcde58c4942e8ae2099fc4b0b7e1526",
".git/objects/45/3fc945e4bd4e3a59b7a516a81e3925ebb3838a": "c7c3ab95c8b1d986240a0248c93cf891",
".git/objects/1f/76e8a1bf0be1949b80ff5a5848fd6c0f5eb16f": "872924182f86bbc14ffac8796c7a5746",
".git/objects/1f/a1345a93ffbf21c82e3534381e694ea8769099": "aa7f9c17aa1b77a5c10d02c0969886f7",
".git/objects/87/5694f537eb99a82ed9b9fdb31700c7ab26aaa0": "808dacf7b93d889eb0d7e42d421f00f9",
".git/objects/80/c1d29128cca5cce712d79c295b07933c92069b": "084db6441b5b2e1619fcab7330705ca7",
".git/objects/7b/e0a313d8c15caefff8966097666e8579f8d68a": "c58e7e854141b068bca6b1d061d1f454",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/19/ff9d0e2ea246c0726ddcf414fda2ae210ce6b9": "6a77d13e52d79b2bb0d5f34f6a59657a",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/26/8c07bf7761ed34e902ab84f1da30d82e663586": "c7d55cec95c0af71fd93ae31a733d445",
".git/objects/72/fb46a5d624a5558927209adb5d534d999924e2": "88f0769d40ba715b0c26d01433e61289",
".git/objects/44/7452fb30543cdbe02150b9a67f04855204e413": "9bac8ee7b0febac2de797202e647c161",
".git/objects/43/2388a9dff42406eddc9828fe8a953f7c4f311d": "21663731d3cd696dd8735121761aafa8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/a72c6a16f2a7962f039659e3f442ab8a5c90bb": "780c449e32f29ac7d8e037c6d085a1a4",
".git/objects/38/4aaf9c04b57c031d8c0aa6afc4a5e6e4621534": "04f5b5e5fbb986eead768279de0df819",
".git/objects/5c/d86961a444d8559516e816a2b0e8a3aa5493e0": "34cbb2a44014af193350d9120ef902a8",
".git/objects/65/8eb6e0dbefd398fdd888fa860460311b0dcfca": "fdee201db3c2ec2ce05912d503363986",
".git/objects/62/37596ff11218d73ac1d9181f0fada9219bae86": "256db5561b25a1a45db5f8da85b9891b",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/3f/6fc5ee57a22fe3b3cfddbd8f00f7da13545796": "5edeaea0fb835e2165e18b08876cc9d5",
".git/objects/3f/80199c4f0d4cbc24046c38ed47f9600f5ed658": "cef29549687f105332d483bc8de39429",
".git/objects/3f/1a5f7c0bcee4593f08aab678396d7fcb4d3a09": "42761c0ae9c372aece0b15fb6747b313",
".git/objects/37/a4f80126da6fd0096263ab347c7349796f4bcf": "ae40009864f6fa0bff8a20f922e4b9cc",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/01/d223eee4aeb7e744c922657ea14616d931d1df": "27277cbaefe2e1e05e703e90eebf53b8",
".git/objects/01/08130c22936df5d97ae4e83fc82c8e3b1b9042": "bdebd842efb60bda6399b3f9686513a6",
".git/objects/01/7f16872587b1dde07cc48f6025f0a28f8e7970": "1bea7c8d825a05ce2cd2216617250203",
".git/objects/0a/094c2e9532dabc2748b10f3b988dbd874354a6": "641e656e8ee9315f9d958c43e92ff06d",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/a7/74791ed4980bce5d8ce6c3aac0bb71707c22aa": "87c7a2f470acd5cf61361711386cf3f3",
".git/objects/b8/563fcecd97df268434bb00472e880a68bf98c0": "7853469a2ead7e9db966d64ebeaf3761",
".git/objects/d5/28c0cc6f5f473fe668784fd6b7b169f71307ed": "dd9c13f2b7651f663dad0efe18959adf",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d2/330f83b9630176ff6813810c23009ceebd4851": "8334306affd9038c391ee5c1369662f9",
".git/objects/af/85ee82a449da700b7d4dbbfeb200f55cb9535b": "d1f0215d5c081f956419ee063b286ebc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/f1e5411b2cc3b99e041dac3c16de0666c904ba": "cefa46d08a4dd23145e067e5203d8221",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/de/01bc64715ff5827e284a2ac43e8f08050a23c8": "46fb4c548db9c3a243318e9f318727cb",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/83d9565ba1e8addc75633dac8c0c4ede6bafce": "28a7661c5d163ac7b684e30f945e6a40",
".git/objects/e6/a317753890a2ab590f200a4ff7e3eccea5410b": "c75d19cd07517ecafdf5de0c3ca051e9",
".git/objects/e6/85cf6d7f3a641c1594f4e03981e421ce15b8a7": "7e46536073570fe506245398f6648ae9",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/e9/4039e98800ab13f92bb8651ee5d6d85ab4aed7": "8632ba644fdde13b20fe5e2819e19f59",
".git/objects/e9/891483127560866c87774a548466063f011c7f": "0534a755e747adb3432de82943ecefe9",
".git/objects/e9/8cafddb969db8e09ac0b6c6e28409d9618e6e6": "17faf54698c1fe178471e44b2fa3806c",
".git/objects/f1/f9bff80617e4a14c92970b2606cbb8e9ee661e": "24aca4b18728da25afe39c4e604d760f",
".git/objects/cb/1101d90a2a017d74a98467a1573a82bcd444d7": "8d4b11c1795a1e08d21ebe171c40d87a",
".git/objects/f8/0127767f70a896f5565bf4d2d3451e92e9291e": "65bc2951c5d00efd7541d9e02ede4023",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/a0899f1f060bad4996ef72b8177d32c0165021": "2184435460365355492ad00becc63427",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/1e/87db7c967a78acaf686ff0223ce7778cd2fc5e": "1640a78c69a7cc7c11128ba20074da6c",
".git/objects/4f/f26290d0bf64668f24921891226bd21953afaa": "2400e77fffe4623aad9b220384c0cf45",
".git/objects/85/55966874aa6e2b2246730611f9abd340e1a4fc": "f8aa4c42fe7762cc44dcfcf9439fab14",
".git/objects/1d/d026968e6f81a2d31759691cbf7f25504f3d3a": "e3bc1436dad0b8670307a2ea6c2b2b1a",
".git/objects/1c/514434beff96e8e257bf2494fdd001ea915cd5": "2651bf8b812a37b3ae20ca6ee9e655eb",
".git/objects/82/72389f45da2a9051aed05d06cd1fbccc78ac77": "e19714474e17d92be441c5eaeead0812",
".git/objects/2b/c505462d8bb09cab2abbdbdaf58d7c5490e8ff": "45abee3d78dbeeacbde364a205806693",
".git/objects/47/9391be24a9898fd97a2a32084c4b6e290abf73": "cc2219d71b360563256a46d231d931c7",
".git/objects/22/ff1b285d2d5a8ce9b35eab48c028e930acf29f": "2e6fb2bd971a4be22f636f6909580a0e",
".git/objects/22/06df64549d92d9dc77d504698c0a38c14b1fe6": "777eac5b8e34f6bd2843f76ab3441bb1",
".git/objects/22/2198e5b658e52b1e8392fa85f81b5b0ad89699": "e183403d82efb1b3e5005d5a49e3526b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b46ec16020b4359be733197bf77c7380",
".git/logs/refs/heads/main": "da44ce4ecff0d8da5e9db1a9e729e7cc",
".git/logs/refs/remotes/origin/main": "15dfd3159e81934cdc4644c601b75629",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "919d31d9ca913ceb550c2e38636051aa",
".git/refs/remotes/origin/main": "919d31d9ca913ceb550c2e38636051aa",
".git/index": "de19d54edd12ef80aee8181b678b3c46",
".git/COMMIT_EDITMSG": "dba649f2a7327994019ddeda5595e698",
"assets/AssetManifest.json": "2b9f55c21c67a6f1dcde33d96cf19d47",
"assets/NOTICES": "210cd0e833fbbfe06055c26e9ba21700",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "ac74185e62660edfa92b1f013210cd6e",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/assets/images/me.jpeg": "61dd35f7fce7050281025c48412e067a",
"assets/assets/images/logo.png": "02726e30f02a1e7db8a608b558edc68f",
"assets/assets/images/power_bank_logo.png": "11c69604f6baf28d649598c899278d56",
"assets/assets/icons/najot_talim.svg": "7ab61fe6bca425e0357c2ee118ab6f33",
"assets/assets/icons/gmail.svg": "3141b9baa60cf593140a92f1fb0d992a",
"assets/assets/icons/github.svg": "aaa31b38ea5241a1838df1b22387aadb",
"assets/assets/icons/uacademy.svg": "6bf4c0a1b855b2ae96fde84f5da3dbfd",
"assets/assets/icons/instagram.svg": "e7449d3dd1eea545fdefecfad43f7223",
"assets/assets/icons/Logo.webp": "0f405ac3c592a5dbfde3b0001df4a476",
"assets/assets/icons/telegram.svg": "4746861fca1096abcf1e4a345dd08a0c",
"assets/assets/icons/phone.svg": "efc2465bbb071954f1ae056460a24201",
"assets/assets/icons/udevs.svg": "f952433ba5303ded432712d453980922",
"assets/assets/icons/linkedin.svg": "7d20bd1e4710a12ba1a1321e69580000",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
