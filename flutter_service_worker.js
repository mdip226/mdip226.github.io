'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"version.json": "64e9da82f2caa68862eb002596e4462d",
"dip_calc/flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"dip_calc/version.json": "18dd935eae045766a282a4f4fbbf8640",
"dip_calc/icons/Icon-192.png": "13036170b7a29d47dcf03f22eb2162df",
"dip_calc/icons/Icon-512.png": "ec48667e4d222d8090d704b3fa5d1e5d",
"dip_calc/icons/Icon-maskable-512.png": "ec48667e4d222d8090d704b3fa5d1e5d",
"dip_calc/icons/Icon-maskable-192.png": "13036170b7a29d47dcf03f22eb2162df",
"dip_calc/index.html": "7a2322f88870c76ff1374a43881e0360",
"/": "86aa65ee055e72deca72fb115817838a",
"dip_calc/manifest.json": "89383cbdbcca8a3b311a0b6bf1847869",
"dip_calc/canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"dip_calc/canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"dip_calc/canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"dip_calc/canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"dip_calc/.git/refs/heads/master": "751b7666c2e2f7424d5beac992aa064a",
"dip_calc/.git/refs/remotes/origin/master": "751b7666c2e2f7424d5beac992aa064a",
"dip_calc/.git/logs/refs/heads/master": "a3eeeffb6250cc72b56488274905fa08",
"dip_calc/.git/logs/refs/remotes/origin/master": "6140ddb1470d18ce1404122ea1eb20af",
"dip_calc/.git/logs/HEAD": "a3eeeffb6250cc72b56488274905fa08",
"dip_calc/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"dip_calc/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"dip_calc/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"dip_calc/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"dip_calc/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"dip_calc/.git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
"dip_calc/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"dip_calc/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"dip_calc/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"dip_calc/.git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
"dip_calc/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"dip_calc/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"dip_calc/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"dip_calc/.git/COMMIT_EDITMSG": "e90f0cb34f1276b35985903597efad7b",
"dip_calc/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"dip_calc/.git/FETCH_HEAD": "a5f4415fbc56ea8e71d41af1dd9b1c9e",
"dip_calc/.git/index": "1fecd6008fa22bcef1528574ba05065e",
"dip_calc/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"dip_calc/.git/config": "5f7cc320e38daf996216f1e1ca17dfdf",
"dip_calc/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"dip_calc/.git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
"dip_calc/.git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
"dip_calc/.git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
"dip_calc/.git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
"dip_calc/.git/objects/4e/63c50d1c725993dcca62d900d79c2d4dd6f81a": "c08a85a910d4a61282d7bd0712bfa132",
"dip_calc/.git/objects/e6/92fadb77df9e1c012aa4b916eab282eb63be54": "48a79dfdcf3560d01fc466619d5dd77b",
"dip_calc/.git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
"dip_calc/.git/objects/ea/1d669dc48752d69bb18440e8a72fdb8d02e14e": "753fd570d5e0e72bf3a5eb127f2e28e5",
"dip_calc/.git/objects/4d/2cc2b0dc50609c60d5f1a582f15a618b591cfd": "cc2a6162f525c4f723cb3886a830549a",
"dip_calc/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"dip_calc/.git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
"dip_calc/.git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
"dip_calc/.git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
"dip_calc/.git/objects/6e/6726110c42cf483abf6a5ad49819b8f3a474f7": "c16820d5bcb4ad40a55aabfe1e27925b",
"dip_calc/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
"dip_calc/.git/objects/eb/d73ac1294158b063f94872e018a2af605b8de4": "60a996f597b68ac9b28b2d1a4344fb3b",
"dip_calc/.git/objects/10/0fcd48c119a85f72436e605e11eede961bbd14": "5138c3638a31a5e8659ad7b0ae0f3389",
"dip_calc/.git/objects/9a/8200a57cbbcf6d4a069ad93f836df87b081540": "1d678cd3d5a4f09d0b60873394a21eb0",
"dip_calc/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
"dip_calc/.git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
"dip_calc/.git/objects/2b/b81757a404e3f73b5105c5bbbbc433e386f43d": "afd7ae9057f09cbe08fb6b52f22ad7ef",
"dip_calc/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
"dip_calc/.git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
"dip_calc/.git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
"dip_calc/.git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
"dip_calc/.git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
"dip_calc/.git/objects/3c/36046059ff02a92ccac591333559698897f565": "c12008f0f9bfd83d6294ba4d32f87244",
"dip_calc/.git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
"dip_calc/.git/objects/e7/6c2095c0bbfbcae1e31c9848c1059f51a21175": "6a0b11002523dd0a7f4b9b317b6a633d",
"dip_calc/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"dip_calc/.git/objects/af/4a1c01eecfc76f93a1ad9de62b792198884811": "5a2eba4593bc93dfcf094ef9b6ee09c7",
"dip_calc/.git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
"dip_calc/assets/NOTICES": "9b534458fabb512c705cbe3f18b12441",
"dip_calc/assets/AssetManifest.json": "e59b70faddce480fdb6c7f8c3492f04e",
"dip_calc/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"dip_calc/assets/shaders/ink_sparkle.frag": "0e8672fcdf9efdc86291eb7b2c87b387",
"dip_calc/assets/assets/icon.png": "d7c66997d7146aea3fefe0faf3eddb44",
"dip_calc/assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"dip_calc/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"dip_calc/main.dart.js": "91a5e4579b6cf6ab0ef3f28e5f96cc5f",
"dip_calc/favicon.png": "675020aff3d7afb547593157266847bb",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"index.html": "86aa65ee055e72deca72fb115817838a",
"manifest.json": "cc42777e8e7075a79d6f4d774290d49b",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
".git/refs/heads/main": "9efa6e38509d13d442856676405f35ba",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "9efa6e38509d13d442856676405f35ba",
".git/logs/refs/heads/main": "d77a2e7d4088065d6de37e62371bf10b",
".git/logs/refs/remotes/origin/HEAD": "ab96bd4f0d3cce45ec4756dd76e55fd0",
".git/logs/refs/remotes/origin/main": "5cef903ef85fa0e6b7b073125e1fd65d",
".git/logs/HEAD": "d77a2e7d4088065d6de37e62371bf10b",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/COMMIT_EDITMSG": "fff32a82fba738951c403ec92f50b70a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "704fbd672dab1c67ba800e747ed0907f",
".git/index": "9a01384e6e52465cbe717d21e3e8b2a3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/packed-refs": "bc9df4abaaa5feddfc05a97ad97a7a27",
".git/config": "300c963806ed89d6dc8a6fb2608e7b76",
".git/objects/15/9e125b19d517c0c51081c38736daec0f870fcb": "09fa5d54d30cbd11376be770303a9d28",
".git/objects/a0/d77b251039a25a2947454e3cbb94a8ef91f93e": "e93e1506290bbdb7fcc5655873c0d771",
".git/objects/5e/f743a76f8ba9fd3fa806c1304e1fbab6defc2e": "2e0fad85cd00a1369fe13154110d7471",
".git/objects/19/0a23ed5b91a99f6c5d9b6a73e04461f8a97069": "4c38ca2a12ef7a1cfc077ce651003393",
".git/objects/72/ed223c861f9c7f9ef6bd71aeab45ec4b2ef7ab": "907b70709a5bb454d424f5f8127018ae",
".git/objects/12/148a78bad35733f700a3c548d243df575e030a": "aebe80f18df7316dfd6520fbfe487858",
".git/objects/ee/12df68f39a667151c0c5f5689baa4c443462d4": "5c343af1bbcdeb7b738b9b4d21f2925f",
".git/objects/0d/54c40d6f8f10e0d1ea0804980febc2c5fe2ca2": "7eb961820856b4af6d9e61d7890cf86c",
".git/objects/56/cc7254cd71fb3e096f75f4771cec12e06bda24": "d4e8c4237b8ae92d4351aafc4739825c",
".git/objects/c8/0bf5733230251746a74d2b08e242dfd6dbafcb": "6f35709112d5c068a1f906821d8fa9f7",
".git/objects/c4/e2a8f3846ecd2d4a1ed1959674d4223cf071aa": "4c7e94c66276630a1382659d8ffdabdd",
".git/objects/c4/c6f62b42cef1fa45873e52ce172fc3e5c10525": "ba1e0e41d422b6099bf5a944ec0078b3",
".git/objects/4e/63c50d1c725993dcca62d900d79c2d4dd6f81a": "c08a85a910d4a61282d7bd0712bfa132",
".git/objects/43/30fbd9e3afea3e2c3bd738e8b647bfcccfb1f5": "05600dda8f86fbbe80730294ea5abbe3",
".git/objects/bd/8b21be0c87ab0528919043ce199dedf239fff3": "a02d3e8b4dc5d16792b267718a70c70e",
".git/objects/a2/53f68a8e60e3627758803bb7131bf2967402cb": "6ed4bb9d5babab79aa8664c4ece94707",
".git/objects/a2/4c34550375bc4dbd4d9cb0a8afdd4131475a3f": "c85cc7a1d0bce1b60502b4ec4b48fa90",
".git/objects/29/2924848071bc4674f520f49e2bb448162212f5": "0b6ffab5f0b2e4c2f310a7393225d42d",
".git/objects/84/537530d589e939ccf3d2c845ba14fffa2262b5": "97e0c96ff681e5505e26bd5a8f87c3ac",
".git/objects/0e/f4d1ade3970d997d37ce13f1c47dd01b5a395b": "41aaf289bd3ba2b67101bb90b4c9b848",
".git/objects/0e/85c220781bfb043945ccb2a6e2ad7cf2bc8233": "afeb37d96e9b893cea4b61c47d7f0863",
".git/objects/b3/cf84303ccb22a147db0f315b76e3e0e766efad": "3d5b0cd287614cd03ae031f5640952a3",
".git/objects/fa/ad9a81ebc2a6b71612a2dd775d9cdb1d23865b": "c44fca4f4efb01916e0aa59122679a57",
".git/objects/c6/8b34a744fe158a48638fae4d2bd48e2b9221a7": "d4f954cee9ce3920e302b38b4916f660",
".git/objects/94/9f779a506f79b405135b7c256e4253ab6aff7e": "c1413f41d659fbf1e80194f35f31a8ff",
".git/objects/94/139c815b03a4e83da69efc5b5d092e5bb022a2": "a43750602ad51d4c0bd183cf8c23b42e",
".git/objects/b0/ab8bb60cafa15a6721b6314cf34869b37d9338": "25b0824852b45e01c0287870109a42fa",
".git/objects/e6/92fadb77df9e1c012aa4b916eab282eb63be54": "48a79dfdcf3560d01fc466619d5dd77b",
".git/objects/4a/23e7938f392121c0cb344c4962ce99e6f98851": "3c20aa1ea2e0fa7d42eefad1cdf1e11c",
".git/objects/4c/5b577343c67701e55cd6737d00dbc0a444447f": "4601fa75b08257add90d43b039b5a2eb",
".git/objects/8b/84a40e61c659b12eabb66666673e84aa2e631c": "5ac945ce5d21001632066acefe1dd870",
".git/objects/71/3161dfda2fe5dfd15da14a0d9a99f8e039603c": "005e93025b1422409c7f3c8f8f99c4b2",
".git/objects/ea/1320d576caa418b8a0e3282043f3778f0ffeef": "8adf920c46f060117c9bc27538fa762c",
".git/objects/ea/1d669dc48752d69bb18440e8a72fdb8d02e14e": "753fd570d5e0e72bf3a5eb127f2e28e5",
".git/objects/f1/20fe1c4092338f1a6473dfd31932cccb8a22b1": "f55eb0a74eb06fea2468eac9c77d057d",
".git/objects/4d/2cc2b0dc50609c60d5f1a582f15a618b591cfd": "cc2a6162f525c4f723cb3886a830549a",
".git/objects/42/998fcaabeb2d56ad2c92c9941ac6187caa2347": "0a233aacf54fb3487e3790985d7b1469",
".git/objects/cf/552e7265a39df5db6550a9dda854c5030dc547": "d09c6f35a2041bf8f0837c2f02c1c44a",
".git/objects/c9/9a61934e5f234aab929fa93beedab1702be5e8": "dc026bdffe3692aa715e711f79f19d09",
".git/objects/51/c38be0afb76fc7c435bd1318fd287a6a9673da": "08f6aa480ac769153cfa65d66d21c1a8",
".git/objects/bf/b8ac73a681951d154c1bfca5fbb6c24cc9e3a4": "5476dc8c1b89b8febbb1c74a04605a98",
".git/objects/bf/1eae223c49ee0da9d2dc0bafaccc8521c50848": "eaa10300e54f5663d086467a5945671b",
".git/objects/bf/b8a19a360895703af1b447c0a171e8eabcaebc": "6f7898e477043467bd314d56eacf1a6c",
".git/objects/ba/9d153b500dcad6f34a66b4996827dd211cef13": "0f4921cac8b8d1dadeb6644e8f006ed6",
".git/objects/0f/35128f80d2775e5148e1284e926eb89ca40ab6": "7f2384f98fc7d87545ad4354b6afc84b",
".git/objects/7c/c8a46da8fb73b9c436e8c0e4b248f52e7f5553": "673fc91a9eb64bf52da6e04e477b2af5",
".git/objects/92/96e8302e184c3ac7c4c4e2ac74155aaef375cd": "01f633ae506f63497932fe0646c0223e",
".git/objects/d4/bb57cf650db33cb41e19dd643047d5d6e3df6b": "2962041272639c916fa2ec94ea5d58b4",
".git/objects/38/96ae8f3a48b8432167504285d3e1bfee9046d7": "02f50cdd7a09de258fa964e97ca0513a",
".git/objects/b8/b3475bb4e7cc21ba9b9d7e13f50be46f1ae874": "95cea1d3dbd2e91ffe5cd9d892da30f6",
".git/objects/6e/6726110c42cf483abf6a5ad49819b8f3a474f7": "c16820d5bcb4ad40a55aabfe1e27925b",
".git/objects/eb/d73ac1294158b063f94872e018a2af605b8de4": "60a996f597b68ac9b28b2d1a4344fb3b",
".git/objects/10/0fcd48c119a85f72436e605e11eede961bbd14": "5138c3638a31a5e8659ad7b0ae0f3389",
".git/objects/cb/a7ec991be7b8a0c7f6f2e13eb57f46b7921a46": "d9e027634062d4056288f5acc34368cb",
".git/objects/cb/56e47557d10e7450ada186fc660249345c88e5": "c88cbdfca3990f857f3fd2ea28b2d310",
".git/objects/d6/507a6e5e397d8356f5b180fcf40d1fa961ca77": "41e13279334fe9348d7ba75c5b4c4bc1",
".git/objects/d6/aa1e50f161245b00a2150fba7f41583b8955bf": "bfadfe3fcc1a8fc600699e041426e762",
".git/objects/2b/b81757a404e3f73b5105c5bbbbc433e386f43d": "afd7ae9057f09cbe08fb6b52f22ad7ef",
".git/objects/9e/957b59ae504ca7ade591df4bce36db450c201f": "ad07d58ad83daab4b032490c00b80a10",
".git/objects/9d/739b4044151684cac0f965d250ef2cc3f8fdfe": "4fced3c4ff005298ef0a6447635c0b46",
".git/objects/c5/e1e51bf77d7da91e8bc9f7fdca24debe7d7af5": "29c7d7a168636dceae638dcefe602f47",
".git/objects/44/18e8ed956bb304cbbcf5117c4e5c81e4919311": "52652c84f106ea57baab97d64eb4d1ad",
".git/objects/e2/4bab624e31701af9d5eaf754e22e3c0698849e": "4872090c5f83a45249bb4bdb31a837a5",
".git/objects/40/6533482c98a7a11a668fa58ff87d85b102539d": "8970eb9a9d7d8e5148d63b72cf2a2edf",
".git/objects/40/cb84d6e437b20cb1ea2501e4840f3a8e94d9c4": "00102d1b3bcb55d77bdb0d16ad6c1015",
".git/objects/22/b7e4b54e8fd1314a5a563ca6fb96d267c98527": "ba79685589c0140a9861ab50082bbd20",
".git/objects/2d/7c65dad97acaaf24a50eea4a28271cfd7d7b6b": "8acdd9fe5f34e9a60e79ab34d9f14b33",
".git/objects/3c/36046059ff02a92ccac591333559698897f565": "c12008f0f9bfd83d6294ba4d32f87244",
".git/objects/f3/11251609acc378091c908256e5e7987db8bf9c": "de3ad89e36e18e401b316a1dc907875b",
".git/objects/1a/1211f07d5894150366dc44f007a79c8171888a": "ef35d0d5ae486f6eb420971cad2480b2",
".git/objects/69/42f553cb806706e7eb0caee915f975abad16c2": "7b5fff686cb8ce70709705bfb84df93f",
".git/objects/4b/2e3d2babbe7951598be73a4ee7914edf04aa35": "1f8017d802944dab6f977060669d6d14",
".git/objects/50/a69020dc882e4e823b36aff59710f8f4c1ac92": "9cf52743e0a314338964c7a229e04cc5",
".git/objects/81/a8b03544cedeefc736a5858e6c8c9a84571788": "2fdff13c2d806bba93831341e7dd45ee",
".git/objects/d3/171f1aecf7cf2033635c62669b958e79a2ff59": "37efd31c8fc735e81995ca796f22cc1d",
".git/objects/88/b6352c10002dbedaf20ea25890cc1e52b8109c": "b22eba6ceebbc61d786c508e1b9a2ca0",
".git/objects/af/1a43d8a6e0fc073c1eb29c29e378018a06a956": "c3b38b43459f1c8e5bb0b4d37e19d522",
".git/objects/pack/pack-80bba121690017716dec657f98583957861aa8a6.pack": "9e6c0ab87b39617eb3ead353dd4d5284",
".git/objects/pack/pack-80bba121690017716dec657f98583957861aa8a6.idx": "e205893f5e66822bc40a33f19dbab864",
".git/objects/5c/b46a6397e30960f537da45632be47c3427fe8b": "006ad44aaa1a72ea6cab2536d33c8cfc",
".git/objects/ca/65ad3bdd8620303a7a7208641c44542adca467": "8bddc42a00e98f3efa5e3cbcd3908217",
".git/ORIG_HEAD": "91e3e3c9d66b1e2e56156712e77fac84",
"assets/NOTICES": "82b8c3a3254a9143276019676f47e01b",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "0e8672fcdf9efdc86291eb7b2c87b387",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"main.dart.js": "007520ef7113387d4cf4b338587cc8ad",
"favicon.png": "5dcef449791fa27946b3d35ad8803796"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
