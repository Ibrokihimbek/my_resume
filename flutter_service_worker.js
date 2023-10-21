'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "5eba2b3f48e84c0565b6c84a1e17c11c",
"index.html": "c5df4169330f5b94aa95bc3e42e3ce4f",
"/": "c5df4169330f5b94aa95bc3e42e3ce4f",
"main.dart.js": "64f1745f7a55c0d311685917e1c3ef66",
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
".git/objects/66/381a626fa9eb81c8342933bcde3e717020a57a": "be584c21ed3a6d5071ca8df5de290868",
".git/objects/3e/d9b5a7b4d0e168d4e15694d2f168d86cdbc72e": "78e8f884865fde6ee2964a2086f7d376",
".git/objects/50/2eb4b8888bda1238085b123d151b1fd57fca62": "d59d2953547f056fadc6e001bb2ed81b",
".git/objects/57/c7014dcc4118943d47c768a364e1685a3caa09": "a65c50473a64e95fc117d192507f7bd6",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9e/c1090356ab8f971756a1beca7450205baefa65": "37cfd793612ecf43f609c4ef39e13cf5",
".git/objects/32/36ca14f144ab297512616e972b97f438cc8073": "b2345a34f2b62a57eff9189c3fb7c68f",
".git/objects/35/487f264aea4cf1b32b4d7ace4a55c8a18b9289": "b8e963bd9a46d81f4c29aa556f9b5485",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/51/924930054c33a0783e17f1fc18131298106c98": "a9e13b7cc9417a894721cdef5f5e9188",
".git/objects/3d/863ee48e5dca20af9dc5faeb378bd28b33be15": "56399231f9b53b4c8c0f7ea8401f8521",
".git/objects/3d/80964ae4a7ed2ce3b1b2066bdc36d826e317ff": "2c20166dac16362cbea3a077622188cb",
".git/objects/67/6f9e7c7193f02ad2db76144c2f87299a6959d9": "574c29f8e3d9d10ad2093f5880f6a08e",
".git/objects/0b/44e97e1e019171e1ccc2776755d122b041072b": "f2a419763315f1aac007c97ef38aab44",
".git/objects/93/f675f3aca52e3857f6db0e340577eb682a6619": "62edcb1ae296655df097b7ee69ee3f8f",
".git/objects/93/f28aa2e1c5607c28663a4f420a29628e04430c": "e4bd9394acbf5b7ea874edfbb3e1c27f",
".git/objects/0e/d4edb65b32e1e36a8dfc0bfe0cf044c81d90c2": "5ffa6af8a56ae9d6da25016935fc3c33",
".git/objects/0e/c3ae245a7ad5dc0471950f1a75d1c343b95c7c": "61f24abac5778531876d290ff718fd50",
".git/objects/60/6fb2c38e4b27caf6614881575c3376d8d2406e": "17bf5ba8ad1b202d0df3a2e7680246b6",
".git/objects/60/5fc583a236b6f48639498857f5e25fb1892bc1": "bdba6c592b9ce45252a1440edc5dfb6b",
".git/objects/34/d5469b9ae34557c6155b0e5140eac6925e8b84": "434b67724e35dc7afcab790d4b84d274",
".git/objects/34/45bb0b7086ae696b1723eb1c74ac3ea024e230": "dbe26af2e227899ba37bf462cb0923d1",
".git/objects/5a/320746b7e623896f03c3f76d15a6241d3df1f9": "ad129f9a9a539a4e5f4dd07354e6f530",
".git/objects/5a/9118c4b7303d31a4836c50de1b30279c06ecc8": "5ce6cc84b4d53c6338fb93546a379990",
".git/objects/5a/8e893ea91a4a77ba264981870d481c08acafb2": "1d25b3f4f3416b4061d6adaecd176c5b",
".git/objects/5a/a2a1abaad25c34adc3ddf84544c188f9acd450": "e1aaaa00c36e4d5269d636baba3cf7ed",
".git/objects/5f/ecd63a6e1f980ac8f3ff88336a03e88d31dff9": "f29f962847c9c2c3276abcc410e5162b",
".git/objects/5f/db68a04741b2bd0dc554978e09ed647aa028e1": "f96ab1cc8e20ac4b6b2d83f877e952f7",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/02/6d99961ba5b0935f2677beac05052ab547d5ed": "a9dc2df8921633529fe5fc8c27a0505f",
".git/objects/a4/3371136aa1dd0c7153b3ca82d8f2a2e2d61133": "713ce1061e79dc2c6e301f912db2d423",
".git/objects/a4/b97df04e795fccce3cd56a7de73297c299b69e": "41dd8608ce333d844e737ae12f7bbfda",
".git/objects/a4/bf244111c9249baa0fdce24f50e882e577dc4e": "726da7578189b640fb7237d45188609a",
".git/objects/b5/c32c78133c39e69eb8d140d06c3afbe140cb87": "e1b26e9b7a9f381b4c469f0f12770278",
".git/objects/d9/1d71bae7a6ba19665c1d3598de1e6457dd72eb": "82b9af0518ab4e6037a221967ab88aaa",
".git/objects/d9/1357c635231ae15cf16ab314573286ffa925ae": "f2b26cdc25619ff196608d75baa0a96e",
".git/objects/d9/7c3a00a92117a2df696231473b9ce82dc9f857": "c09ceff5934fb88dd5b4e7b5d17c1a5e",
".git/objects/d9/575a4f7813efd70e3940b9af66d5482839752f": "7ff234eb1fe5790157e93cbabe1f237d",
".git/objects/ac/5b1d3c568d6a5ce9784eabf484adb7a5addf0a": "ecf6a97a80f1e5e755f44480c9c1f270",
".git/objects/ac/615e0eb7b5c20218f9548c421fd1a2296b0d76": "8f24d5473a3d1f3c0202be8cce6e14c8",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d7/df889b5e88469000d4fcabd72eae2c5ff73cea": "c2d4c89640bb506ca3c91a6c9d53379e",
".git/objects/be/17d74268262d809316dee45f3af2fcf3b372a0": "0c7e144cc86f4f0cd4aa2c7153ecadf4",
".git/objects/b3/560cba2c89a9aa1b939d06f927b1b0ff6a1291": "20d8b4057d387d8ce5dfdee03ef9ff73",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/b4/de619fa835603262b62d0ff97806d4feb879a3": "6c3b2fab6c949aa2ceff4823e10c2127",
".git/objects/bd/fe0029d9543ba8b0a5a70fda0baf1f62727ea0": "9506a149fd6793c60a0d33eccae0a2d3",
".git/objects/d1/463436f5275854f98104366f57fc0c253f68aa": "cf0b240b476779583d429a4c6423387d",
".git/objects/d1/5875dae8028f7fdb63ec1e20fe7ec3b76853a5": "367c9ba5d85f6c5ad569dc9edd4a5ba0",
".git/objects/d1/57ce9795d85c5de61e29b026056e7b1c287418": "4db44fd60eab911ff78a7ef6b2257ed2",
".git/objects/d6/99c33781f431276ea39a292c4865fdddc78d06": "e6fbb2ad0d26ed3ebef325800e155389",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/57552b738031b5d90b9ae5908f9b1a7624cd7d": "a4bdc70b2282de92441fdc111262096d",
".git/objects/ae/3224ca33782fdaaabf27e9d683720f2babff39": "dfb062bb7945b6eec7b5cb75338733a6",
".git/objects/ae/c7f92827dae60c96ba3cd07b75c03416efb6fc": "68d9aacb704848789841a6634ebd3122",
".git/objects/d8/9d0ca1de08eca081d4a2098897d6e572fe96f5": "c0e68ad227239c9d9aea6bd3c104a608",
".git/objects/ab/95cf7c64f475b18130c70cfc374b5f37036c43": "1eb70b917f6df7a180fcebd36f1d8df6",
".git/objects/e5/10bdbbc85d0e0636e0fc412bcc8d36ad1948e6": "961a9e598937d087fd595c3ed29e2efb",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/e2/aa8a14f7d5f65c3ac33db936139926ae4fe0c4": "3c3c13b4bd639a4665444073eb6094bd",
".git/objects/f3/6aeb60370347d077af613a4b39b550365e48c0": "908d854664083db572fe5081efab952c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/79147edb72f359af10368c87d864f938b52b20": "06e084761515d4cf7d23102c59316370",
".git/objects/c7/9c1b187a1d885957d2e18d1ba70a1ac6594b4f": "22f67588245ce3c9801a39ef3ed4339e",
".git/objects/c7/721be0208c34e05d92c304a79db3c9da67bfae": "c5fea1c2ec09360e1efb219ff897efba",
".git/objects/c0/ed33f5861c2dfa5152c4e94e649540f0ad08e3": "f7c111e6183f7f4b7674447d601cf397",
".git/objects/ee/a73daedda8cac2c7c251a665ece0c8575c2ec5": "5e08728623445f28afa93f29cd8b7c8b",
".git/objects/c9/762958511f56af2746c8c594252691c3ec1157": "421dfb30d27bdee5b15deac91ad37ecc",
".git/objects/c9/82640f57bfd78e8f63d8cd3462d8b41ae3816f": "c4e58ce6f52022a9928da09a0cc990c5",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fc/0daf80a6e3c833954bb8a23fce77c285fa7741": "54422472b1c46f9ddd85aea4f5eba7fb",
".git/objects/f5/1f3b38b53ee88443bfe5a44b98262eb29eeb06": "1213a7cbe5ecba0f5fd638ecc7e9b9c1",
".git/objects/f5/b243e4347bd5f96cdf5d61bf76b15849779f71": "fd08d8e0cf261587e357d705efcaec4c",
".git/objects/e3/771e26fb5e5b11ed5633c673383b5e700ddaa1": "c42d2bb695d74952297fbb6773e199ec",
".git/objects/e3/c63b1a210f1b8dc26d343a4ce9ad6d1277b4e7": "d58459522794e6e3a45834393d86b07a",
".git/objects/cf/79815da379b836ee2d39e2b05b4ab666ceae73": "af0c821cb19fceb254b23c87ee04da99",
".git/objects/ca/d98804ddd292460761595028177dfce22672d0": "dd89a80017d93e17413e89116ce5330a",
".git/objects/c8/79b9640f908de41a36e5ee54ba8659fb59173d": "46c8e31283709a69064d33627919b1ac",
".git/objects/c1/4d2a975443cda1a620142610860d653c6390ba": "50e2c52746c0202cfe0cd95f4e641c0b",
".git/objects/c6/9985f720b7f74edb769c241e668c0f376aab17": "e69c38d66d0fc07d4260ba74aa2abaf0",
".git/objects/ec/0d30503d7cbf1d7dcc26b12318a1fa6bb0bedc": "888f65b2ae7646044c9a76d641ab979e",
".git/objects/4e/ad7f933c419154b998cbd306a9ac553c337321": "5e13d98dab92439ca0d6bdf0a89c2c5b",
".git/objects/4e/d5f03780e6d9a807db8509dfc451ea614c392e": "894a30c4b6c1d1d34cade78616a60a4b",
".git/objects/4e/95b20dc829a10672dcea30ac132089bc22b8d2": "2a0ab02ba66615d70afe1e54a6c677b2",
".git/objects/18/0901b8c3eaa66edab856cae55b8d4a6d94c61f": "11e134a50dbe2e4ad7ab9e42adc00469",
".git/objects/7d/2dd352bb703ae4a04d62281cfba77651f39082": "bf18962a7d3b0bbf6d4d8681131cc185",
".git/objects/7c/aea0777c94dd8383db847341ac38bab814b496": "0fdc4aa12efd463e53a84a4e69d67161",
".git/objects/7c/37d0c7affc8292084c2a42883586cb9dec828f": "afcde58c4942e8ae2099fc4b0b7e1526",
".git/objects/45/3fc945e4bd4e3a59b7a516a81e3925ebb3838a": "c7c3ab95c8b1d986240a0248c93cf891",
".git/objects/45/c28d096bfbfcf93e83b0674bb04a253568f6d0": "d3a82b0ff87052cf71a42e895d20172f",
".git/objects/1f/76e8a1bf0be1949b80ff5a5848fd6c0f5eb16f": "872924182f86bbc14ffac8796c7a5746",
".git/objects/1f/a1345a93ffbf21c82e3534381e694ea8769099": "aa7f9c17aa1b77a5c10d02c0969886f7",
".git/objects/87/5694f537eb99a82ed9b9fdb31700c7ab26aaa0": "808dacf7b93d889eb0d7e42d421f00f9",
".git/objects/87/2b0dbabd874f7d531ced12f10e9fd5607aebb7": "9ea167e5ed6c6161749cd3a358ffc8c4",
".git/objects/80/c1d29128cca5cce712d79c295b07933c92069b": "084db6441b5b2e1619fcab7330705ca7",
".git/objects/74/78edda87d86cc7a457322bad26ecdfe4496e34": "2c432f27ab87595d08633c516f73a89d",
".git/objects/7b/e0a313d8c15caefff8966097666e8579f8d68a": "c58e7e854141b068bca6b1d061d1f454",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8f/11b5b335353121d5cf198bbc4e9066b85b0216": "c5dc997ff36457fce4a2f530d9493c03",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/10/58cc4324a79080cee3c5fa871d665ab5db5a43": "20562919e94ac3946ba561fef1588458",
".git/objects/19/ff9d0e2ea246c0726ddcf414fda2ae210ce6b9": "6a77d13e52d79b2bb0d5f34f6a59657a",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/26/ef7a26f02acdd7898e975099dc682f690c038a": "279f6dd2d16102effcec116e82e7c42b",
".git/objects/26/8c07bf7761ed34e902ab84f1da30d82e663586": "c7d55cec95c0af71fd93ae31a733d445",
".git/objects/4d/354a26c82edf9ff839b628991b7c41f0203bc0": "947e08d9fc65aa48c93995976ab4270f",
".git/objects/72/fb46a5d624a5558927209adb5d534d999924e2": "88f0769d40ba715b0c26d01433e61289",
".git/objects/44/7452fb30543cdbe02150b9a67f04855204e413": "9bac8ee7b0febac2de797202e647c161",
".git/objects/2a/7dbd9e1a8a34e3c1fe1ad5916f7b0315ba43ac": "12c9eb5cc635004c996b79cae8250b89",
".git/objects/43/2388a9dff42406eddc9828fe8a953f7c4f311d": "21663731d3cd696dd8735121761aafa8",
".git/objects/88/8bacab5dda624259779056be593a94b27fb83b": "a9585536b99337f3d28724f2bbec42e2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/a72c6a16f2a7962f039659e3f442ab8a5c90bb": "780c449e32f29ac7d8e037c6d085a1a4",
".git/objects/6b/b8041fa19c4fcc55a0b97878eaa43b072f0904": "5fdbfed1017b7de6a1d5154f498d88b7",
".git/objects/38/4aaf9c04b57c031d8c0aa6afc4a5e6e4621534": "04f5b5e5fbb986eead768279de0df819",
".git/objects/5c/d86961a444d8559516e816a2b0e8a3aa5493e0": "34cbb2a44014af193350d9120ef902a8",
".git/objects/65/aaef2d6060165aaae6b9a01d3f5f4e92525672": "90ef4468ad58f81c6d6da8c1ae0ce6c8",
".git/objects/65/8eb6e0dbefd398fdd888fa860460311b0dcfca": "fdee201db3c2ec2ce05912d503363986",
".git/objects/62/37596ff11218d73ac1d9181f0fada9219bae86": "256db5561b25a1a45db5f8da85b9891b",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/3f/6fc5ee57a22fe3b3cfddbd8f00f7da13545796": "5edeaea0fb835e2165e18b08876cc9d5",
".git/objects/3f/80199c4f0d4cbc24046c38ed47f9600f5ed658": "cef29549687f105332d483bc8de39429",
".git/objects/3f/1a5f7c0bcee4593f08aab678396d7fcb4d3a09": "42761c0ae9c372aece0b15fb6747b313",
".git/objects/30/0c0505cf2007bf7cc3e18b773e37541207681b": "a28cf10595b0163c4cff26c7462d6445",
".git/objects/5e/bb8d76ae832eb7234d59c8f35217b5e9985345": "f22736a41002a1e1ecb3316a724b3f4e",
".git/objects/5e/5d5f9ac015d3f39242ab1b1919aaaf41fa690e": "bbaa5831ebe7b04527d94d83742e5ad5",
".git/objects/37/a4f80126da6fd0096263ab347c7349796f4bcf": "ae40009864f6fa0bff8a20f922e4b9cc",
".git/objects/08/478737bb5c3904b2f9d9e0eda468ec8636738b": "3ef03164d86fdc8f366bee4f3b86511c",
".git/objects/6d/92bab413f5883b1e017731deea8ba04e54dc92": "8761a0d010182e8f993ec316ea5895ea",
".git/objects/01/52efd12c537f7c0d5619b37b36ed4bcfb1e2d9": "c787a9f1ba8ffdb76053e1b18e0b3601",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/01/d223eee4aeb7e744c922657ea14616d931d1df": "27277cbaefe2e1e05e703e90eebf53b8",
".git/objects/01/08130c22936df5d97ae4e83fc82c8e3b1b9042": "bdebd842efb60bda6399b3f9686513a6",
".git/objects/01/7f16872587b1dde07cc48f6025f0a28f8e7970": "1bea7c8d825a05ce2cd2216617250203",
".git/objects/01/1e668ab5224e85fa1b0df425a3e670446120f6": "19315f3c39afa7d8b4699d7a1ed61e01",
".git/objects/39/eb3f58c82c5ed3ff88f0f5da5571ec3e2e768f": "a9f6966ac3d54dee40d6d3313a5fa87b",
".git/objects/52/11cd7adc620f48efdbefbbdd03bbe332b3edeb": "53869e120197487e5ff2e7dfb1caa6ac",
".git/objects/55/667df7af7d16170485b2bc238bd1bc4847d8f2": "91c225862c2f0b3f1258e3d145af4e45",
".git/objects/55/a87964f6d5de7010ca4dd2b7a1414265eff4fa": "2139f40da194499b3726e9deba4cfc38",
".git/objects/63/3c0401e32157311e9f5e3a4c617bdccb1401b7": "7b6dda9505b081c9b9409ea3968a6f4d",
".git/objects/0a/094c2e9532dabc2748b10f3b988dbd874354a6": "641e656e8ee9315f9d958c43e92ff06d",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/ba/e291ef3df66fcf18ba1bcd102476d0097ef032": "90bc5e61c67cf750fc255a6769d6c6cc",
".git/objects/a7/74791ed4980bce5d8ce6c3aac0bb71707c22aa": "87c7a2f470acd5cf61361711386cf3f3",
".git/objects/b8/563fcecd97df268434bb00472e880a68bf98c0": "7853469a2ead7e9db966d64ebeaf3761",
".git/objects/b8/29dc25548e25437886591569c674bf954058d0": "99d4a14dd4eae779aabffb93a302c5a9",
".git/objects/a9/b9087599e3c493b4cfb382826c5de865428bd6": "8196c59110bd66450d54b6509607b7d6",
".git/objects/d5/28c0cc6f5f473fe668784fd6b7b169f71307ed": "dd9c13f2b7651f663dad0efe18959adf",
".git/objects/d5/accc540ef8c73720295e4b5a09dfac33e84b75": "5f796f35e689df5ff7f5b982aa35609d",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d2/330f83b9630176ff6813810c23009ceebd4851": "8334306affd9038c391ee5c1369662f9",
".git/objects/aa/67f4a866da1e3ff2a276630196ae82cc1a4372": "6ff11fa72ff4f5014bdf05189ad1fd05",
".git/objects/af/85ee82a449da700b7d4dbbfeb200f55cb9535b": "d1f0215d5c081f956419ee063b286ebc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/f1e5411b2cc3b99e041dac3c16de0666c904ba": "cefa46d08a4dd23145e067e5203d8221",
".git/objects/db/946f57dd4681fa34163e75cbd933ddf7569408": "168640e480050eef77d1c739d929af20",
".git/objects/a8/e709368c64c9985827c02fb23b385eaa2f65db": "aa2a71b3d60975211c092768f61630f0",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/de/01bc64715ff5827e284a2ac43e8f08050a23c8": "46fb4c548db9c3a243318e9f318727cb",
".git/objects/b0/fa141373f0b46ee6d896517f6bb8a0b172ce92": "fd163ef1a1fc7b33893ebbc372627865",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/83d9565ba1e8addc75633dac8c0c4ede6bafce": "28a7661c5d163ac7b684e30f945e6a40",
".git/objects/c4/729d324cfc6cb3656dc74666f103748876f25b": "c7df3556cb60137cc564862e9ce828e3",
".git/objects/e6/a317753890a2ab590f200a4ff7e3eccea5410b": "c75d19cd07517ecafdf5de0c3ca051e9",
".git/objects/e6/85cf6d7f3a641c1594f4e03981e421ce15b8a7": "7e46536073570fe506245398f6648ae9",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f7/ce6a77f5da1d32cd554085d53ba840b03bd0f3": "c30df234dce6337368011ff6143d9a8f",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/e9/4039e98800ab13f92bb8651ee5d6d85ab4aed7": "8632ba644fdde13b20fe5e2819e19f59",
".git/objects/e9/891483127560866c87774a548466063f011c7f": "0534a755e747adb3432de82943ecefe9",
".git/objects/e9/8cafddb969db8e09ac0b6c6e28409d9618e6e6": "17faf54698c1fe178471e44b2fa3806c",
".git/objects/f1/f9bff80617e4a14c92970b2606cbb8e9ee661e": "24aca4b18728da25afe39c4e604d760f",
".git/objects/cb/1101d90a2a017d74a98467a1573a82bcd444d7": "8d4b11c1795a1e08d21ebe171c40d87a",
".git/objects/cb/d0a741459ea50335317e4e3c7fd57d27699cec": "35145a4961271c6ad637368e91390d8f",
".git/objects/f8/0127767f70a896f5565bf4d2d3451e92e9291e": "65bc2951c5d00efd7541d9e02ede4023",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/75514beb24ff0123f1edb47ebfcb660c15f1fe": "5db581b8d2c1583c2cba444dde83fc5c",
".git/objects/46/a0899f1f060bad4996ef72b8177d32c0165021": "2184435460365355492ad00becc63427",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/1b/45a8e227437b55780534ce3f57e92498d04ebf": "5ce0c8a44ae88bc10671987ac455630a",
".git/objects/1e/87db7c967a78acaf686ff0223ce7778cd2fc5e": "1640a78c69a7cc7c11128ba20074da6c",
".git/objects/84/ca30490de55add24b095602d970a31736ae103": "0498fd423622888cea2fb4f7ab98dfcc",
".git/objects/4a/1d9b60993878c89f16e93575236342fe3e5941": "601cb0ae9ba6e82af48e56865e0ab046",
".git/objects/4a/996df68ff78682b028a7f2ffd3fa9585c25506": "077caeffff9d5b23aaa0efcafb7db1c5",
".git/objects/4f/f26290d0bf64668f24921891226bd21953afaa": "2400e77fffe4623aad9b220384c0cf45",
".git/objects/4f/6776b98b6ea85bac6837583d1315d68c34b7e2": "ade819836d7adfa9bcd74d6c4c8bddc1",
".git/objects/15/181ddef8c8ff7d1cd652c050fc1058da3b15ce": "6d46a6f44f6ec4ce2f400b8949ff45e6",
".git/objects/12/62199e0c058eddcff61a7734fa0737fb0ab006": "23765e6815b05e5cd28fb009b90ff244",
".git/objects/85/a426fe37174c782bfffb0d1e5d8b0863cc3371": "8218b56673cec5713ef44931012015c0",
".git/objects/85/55966874aa6e2b2246730611f9abd340e1a4fc": "f8aa4c42fe7762cc44dcfcf9439fab14",
".git/objects/1d/d026968e6f81a2d31759691cbf7f25504f3d3a": "e3bc1436dad0b8670307a2ea6c2b2b1a",
".git/objects/71/685183fc3dfcb53eeb906cbdab01f2fd093d24": "84f7006d3e26c3a8a02510ad1e785496",
".git/objects/1c/514434beff96e8e257bf2494fdd001ea915cd5": "2651bf8b812a37b3ae20ca6ee9e655eb",
".git/objects/82/72389f45da2a9051aed05d06cd1fbccc78ac77": "e19714474e17d92be441c5eaeead0812",
".git/objects/40/7ad1e27fed4c785316c86c3eeb9b50f785e7b4": "bf1b01341655e18f339f738c37203d41",
".git/objects/2b/c505462d8bb09cab2abbdbdaf58d7c5490e8ff": "45abee3d78dbeeacbde364a205806693",
".git/objects/47/11dbbe533d79924b54bba3858522ad09b53811": "4743d6698d37c3527e65fcf62773514a",
".git/objects/47/9391be24a9898fd97a2a32084c4b6e290abf73": "cc2219d71b360563256a46d231d931c7",
".git/objects/47/91b02c6916ca6b4a6cc189188150c7fcfa58f9": "2bb372afc623d32eb480dcfe02f95cd2",
".git/objects/7f/65f38b625e79a369486512f957b1ba43b00d0f": "02897fd752c90853ec564634903a9682",
".git/objects/8e/ff5169eeea0bf04c30e74e87e3a4f4f6e5c2e6": "93132b2ec4393f74910c257911a985b9",
".git/objects/22/ff1b285d2d5a8ce9b35eab48c028e930acf29f": "2e6fb2bd971a4be22f636f6909580a0e",
".git/objects/22/06df64549d92d9dc77d504698c0a38c14b1fe6": "777eac5b8e34f6bd2843f76ab3441bb1",
".git/objects/22/2198e5b658e52b1e8392fa85f81b5b0ad89699": "e183403d82efb1b3e5005d5a49e3526b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e01ac99c5da2746cd3f4a918b08543f8",
".git/logs/refs/heads/main": "1e0a4e3c8c50a72db41d9a84061fe175",
".git/logs/refs/remotes/origin/main": "23d56baf131d76c6b91b66a7f9b6dee2",
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
".git/refs/heads/main": "30bc031068b66735f4908f1035bbdb08",
".git/refs/remotes/origin/main": "30bc031068b66735f4908f1035bbdb08",
".git/index": "82eec874a34146165605a2398eb69af7",
".git/COMMIT_EDITMSG": "dba649f2a7327994019ddeda5595e698",
"assets/AssetManifest.json": "e40584e80f8dec1712dd6c41a4c2c60a",
"assets/NOTICES": "df0038e62f3b93a9627e923cebb25f50",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "25fe62bfa24765f72fbe68ce4c3ce9a7",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/assets/qwatt/intro.png": "d40c2d434cde9838c0ea14dd7c292063",
"assets/assets/qwatt/4.png": "fde8e66ca43b8244588f6230021f0276",
"assets/assets/qwatt/2.png": "8155a2d94e1c232fff5b0cd3c903c1cf",
"assets/assets/qwatt/3.png": "5df6d9cc7a3b1e011b24b0f8429d7001",
"assets/assets/qwatt/1.png": "0cc9a89fcd6acd378f0cd38179cf6d1e",
"assets/assets/images/courier.png": "471f62843febb814b913c612e35ad692",
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
"assets/assets/icons/app_store.svg": "fdabfe2454168f46f347de05ad0bec63",
"assets/assets/icons/play_store.svg": "49a97d4766efa32ba4d530fbb74b59b9",
"assets/assets/icons/phone.svg": "efc2465bbb071954f1ae056460a24201",
"assets/assets/icons/udevs.svg": "f952433ba5303ded432712d453980922",
"assets/assets/icons/linkedin.svg": "7d20bd1e4710a12ba1a1321e69580000",
"assets/assets/icons/apple.svg": "3d7cd068ca7b51bdb9a823dbf80958aa",
"assets/assets/icons/app_gallery.svg": "7e16f2c62d7d26435e0ab530b836656b",
"assets/assets/delever/intro.png": "7b89aba69612ae32259a990b4a4ff169",
"assets/assets/delever/4.png": "c1955e1bbaf82da0a5130c1ab2bd9b7a",
"assets/assets/delever/2.png": "2b5884f2430a89625c2bc7741fef1fcf",
"assets/assets/delever/3.png": "0666b64048e4e06839eaca53aa65a712",
"assets/assets/delever/1.png": "38994a9ce2ff91a10d2faa848ea0fd18",
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
