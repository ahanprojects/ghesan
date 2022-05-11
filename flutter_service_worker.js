'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e78ca155277c26fdba4f8c3920086f99",
".git/config": "be6c1f922232ca9236000a60618bb3a0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8e2d8d3cbcb45f7922248549d25c908f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "70042691f96eb03b12592b35975085c9",
".git/logs/refs/heads/main": "05301a7636d8e1f2e0f830d970205be3",
".git/logs/refs/remotes/origin/main": "771723e3eb4aee4047224afa42d6758b",
".git/objects/08/a84c0f7bd5f3eec9b8032809f8a478ff9557c8": "d4dcf9d4d8861b04e2b156a40e47f5bf",
".git/objects/0b/e7e484b2e5112d33c9034422df4534ac7a6f0d": "1027b538901f73e044783f9161eb5721",
".git/objects/0c/e38eb0be1fe8d97681d05cc379e89694d1ddf3": "2b1c595612e454bc950cb3e73096441d",
".git/objects/0c/e66d6094e2ca4e033ab3a666347b5e885698e4": "e6bd865e50fa5a10c9c3dd07f6b8f9f9",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/6444465e6777afb0810d9d2dfd9e8764037ed6": "9fc0b838d98d0430bad8edd06ef2135b",
".git/objects/10/e1c0e1d5cdcc3480572a82278adf594e0dec7f": "29170de1443d2f39e54ab32bb67baa48",
".git/objects/12/22a79161215a240d700a468307ef4db49e8699": "5f4c391173d0d8d05b5cfa8090efe095",
".git/objects/14/2a7dd38c04501d298bb3682730b5e7357924a0": "8e4ac0317c888d2831aaa0f5ce18018f",
".git/objects/16/91a030eaeef2b3c356bfebd804fea4041b75b3": "ae479cdecd1755b0770ffb26b6357bb8",
".git/objects/18/527de449c666f9f08f0a6798367d4b4e4cb79f": "f6f62a431eaf4ddcdffb7e4675031b04",
".git/objects/18/f1a94fa445b52b64f069d993ca8d447d7641f3": "8f5633cef1af0b1709cce6cc6078b18b",
".git/objects/1a/85722cf5dc7fae8d6246d5201bc74066175ce9": "45b5f76670460e30784f0785d61cd71a",
".git/objects/1b/4680435586294c991c57713e706a6faa256728": "3d56a741e667f66e9934bf891eefe41f",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/2a/74e0b20550077def923664cbe703fae0eb5aea": "140460569db0cc8f5daf420b65a70ca2",
".git/objects/2a/971622c0f91ddf3bf82a9e565ba567c8a4c2a7": "b74d0670131d414a7226e7c2079d291a",
".git/objects/2d/5c984a44aa08b86edfbe0e6ecf215245d1da52": "402c2c1cf031b6917c2bcaca90d74615",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/38/8f3df7a2e3e4fd1515581a6c07c8b0da1c0ed8": "d5af371149d89031d5edf788e6b25cad",
".git/objects/3c/1df3da24d4b7cfad7943a0f7e15eba70cd81cc": "04ff338264b9bc02a219bab7d7a9c678",
".git/objects/3f/66e5b9b7fb714949226d5afe0b004f7217f121": "3579ace3995d9d5bfd5ad1a5b4732380",
".git/objects/42/3e6d1a11635637b3f0642aff1837fe5aacc45b": "6ce765bc42972ac16a15554e7038c13c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/50/681bc1b6d82962da0fed7ead115a8ac69d6ce1": "41cc69165b347c411f9fbffd25451409",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/55/2bea5a44cc5a70132674508c742c1137540be8": "5732bd98935a574df71b9bbddebe5ea7",
".git/objects/5a/dfaac4d184839cec8332ba0af4ce17380ca68b": "ee4039adce0f34aaca10fa9ffd0b8e0e",
".git/objects/5f/266d6c59a01a1a2b1351950524bff3c4b5c8c9": "60099803cb25d2e1f4dae8e4116e32f0",
".git/objects/63/78c1701bb924020ccf49f8e02213b9a8bf3417": "71318b86ecae00130437cb2546b5e327",
".git/objects/65/e0daeac4d1cc7e20c4bba51d84dbd25c1448a6": "70dae454b9e3671a3582d0a9119df906",
".git/objects/68/61ce2dd290fec2918ed2bf586df428dcf78d02": "9a7ca946d6d6c7ce9faa66c9e62f847c",
".git/objects/6f/1da9a3d9160419596932e112bbddc503d450dc": "2202fa08f18134440b37fe82f6e6dbd7",
".git/objects/72/57772105f20509e6803b09e93d96690e475d28": "83e7df6f29d1d517e0315a1621db6b31",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/77/c36437812d526d65ba38ef25be195890dc175c": "4edb1bd89afa557aa0111157473e96d2",
".git/objects/77/e6cce889f371459bfad496c10abd20671a287a": "f4457e07eea9342a18d814f3d9cb50ea",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/fd4107173c7bdbc014a54eb7e2ce609c1d8479": "0bf5810efc54e406db237ba92c3c700e",
".git/objects/7c/6ab12d9fa46a95b4fc16e58228a453797a140a": "d381d5c834e1c819590867fd56888764",
".git/objects/7d/25caa7dba60a536059d602c6bb45f409c51bbb": "7ca39c678019a92ccb09835ddff8376d",
".git/objects/80/6499747abcad60c8f02a581ba11f4810c9d953": "b4ae101ab2cbde79e8aa8bb6e20c1983",
".git/objects/83/172523f054c20192d8c417c12fa4041b393aeb": "eb8155c9a4965c1a55ffb0f62f2426d4",
".git/objects/85/31d5446b235535e51afe81f2ab2b4604cc8d5e": "c8b52c9964a99a921465799f702f866c",
".git/objects/85/95b0f74203897168bb94aac511f101507e2d32": "937c0063b4db27b4cd8776b48f0df25e",
".git/objects/88/3b8f93b9b7fdabeba1ada102ef1addead85a0f": "95c5a3105691838a406291fdefafb5fe",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/d5c2d888dffc6d5291f534ab02f2909e5fcf97": "0c041f4a19ee8b4dc183b0818d3d0e1a",
".git/objects/90/64df013c35542cef6895b3d37b996a66990466": "ff1baba9c69899318eebf21bad48339c",
".git/objects/91/b06822c2dd518604ead1b8144569dd1962fe4f": "8c4aec51ffb0750dab351d59dafdc745",
".git/objects/93/be2257183404c289bafb1b553564c4c04b14e5": "8cb5463eb8c93e096fbcaa70788c5b8c",
".git/objects/9c/93f1be045d7f6c31cb11a323582fa2a29a8da8": "a71e5323adb32d122dfbc3f8755e9aa6",
".git/objects/9c/ac7f317e2d2ebb098a1a19daf294c26f37fe13": "9156cf480cfbf8720a88f950455a165a",
".git/objects/9c/d2fcdfc668bd2cca9cf4d3a417cffe8625f533": "26df88155c9f40dc6567eb5d0b57e995",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/351cdabfa1f333d31336e157698f7294d8568d": "4024040e8434f66e4a043c8464779229",
".git/objects/a4/86d6f203de5aaf2abb0deee54df43efd02d966": "2e073e8b38f62ea52f75fff766e0f79d",
".git/objects/a6/f864edae33505c0e98c734cc43ca1d1f47d1c9": "125189a934bbb297df0b6d0537278dba",
".git/objects/a7/c680378be687efe6dab77302b60c7c187b62b0": "a7ed2f3eef78367a9a4ef7fadcca1cd8",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/08918ff174807033cd0155979d3165c0b049a7": "0a92b4e81317db6bc9bedc75cb331792",
".git/objects/ad/f5b66ad87ed7d29fe6ca6d1041703dab98d3f6": "64d586d0b45e0e65d8a56cb6e5ca3e5f",
".git/objects/ae/7935fe73cf18b726c5b282ac470b58140248be": "de8a54f6c6bb985fa60a1082fb58a4c8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/4f8898166a35f6a3027c4e83a6e1d25bcdccb8": "31d3879190c97036f2a0e271b83797fe",
".git/objects/be/a1298d25d721f1f2e7a9913e6afc43a3d9a118": "294159c3644cce551690c970d2fee6af",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c8/b6142aedc6d8de572d0d720c75a7e4f2b33d83": "ee12018188240b94feaa2b2360c71b24",
".git/objects/c9/18eb2879d873baa3b4ea81dc109015fb9ffb3d": "ea12d45bf712b714812e424faa442826",
".git/objects/cb/0c5773e351d68d00a74b250c97eab0e6d4a206": "287a988405c49e43db08d763405426f5",
".git/objects/cc/cd33ec945fbdf4226eaa957c4616232668e249": "3185c0913eb7f6e6a70482e2003d049e",
".git/objects/d2/2f9b22760ff51a8aa426b772b3fa5b58a26855": "1de6f4894d3bd0f6befb5ad73eea73f4",
".git/objects/d2/a05f5b11e99564444eea59898ceab64d05a66d": "d9f9c556b0deea4a2cb6bdb13cb96091",
".git/objects/d4/83a05f62c5fc9a2a2d27847795ec8a8825316e": "5d15c856acc60c3b5f24fc0c87410de8",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/de505939e8d3cccb8f83096715e1b020bc2c3b": "1d6580d4a6731ca15bb3bfed2590481a",
".git/objects/dd/c7fb8d52a7a837e2968587734afc1ad03c0960": "690091a1797ff3695f8a31e1fadbc5fd",
".git/objects/de/1e4928785a98e9c1a39f6192291afa5610024b": "04ec72fe505bc17c54f3580e1d04fd6a",
".git/objects/e0/84619f27abe7345b700e815ff88672cdc45e78": "4a111e2b78b35f7c39495a3e5e4b7300",
".git/objects/e4/64aa10eaf8bb3a0a2571b1b5bbb00832b0cf09": "9689ac15c9de69c5c165e61828cd9b34",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/f59f1d5588df8012bdae3094e181f950c6d654": "340714f3e7fd5e49d94af0dc8feed315",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/d559a6bbf02034415217c11c701ef51448c3ea": "f71818e8f2aa97dd30809accaa494e0a",
".git/objects/ec/80aaa2197fb4130343ef33aeff6eef1c0f0014": "83111679c6d4872b7af9ae9cae521204",
".git/objects/ec/ed478668ffbf3036c7db8ed5b47b35d74bbbcc": "be802ba94708c0fa01984aa13c8f0596",
".git/objects/ed/cb1402e5d9b3824d7fcc61e82ff42d1f26a4c8": "40b8f845bbe00790b015743ed316776f",
".git/objects/f6/9f867366940100742952a7a14be4eb2e1cbe61": "baff2915fe1dd6ac7958d5dd5f176183",
".git/objects/fa/784222590fe3b4843ec33eca638a23191aaf2d": "37b0d5ca2b411a256d10f3921da3cc7a",
".git/objects/fc/56dab783f55c0bb8fcf1e20fb0708c6cdafb2b": "d99559499de3a907fd07d2149de4f50e",
".git/objects/fd/08706798ff5a93c3c40351eeb92e367c4d3963": "1f469b8c8f7e5b03d3841c107a1b7096",
".git/refs/heads/main": "d8120598ccfb9351b7230fdef0009b23",
".git/refs/remotes/origin/main": "d8120598ccfb9351b7230fdef0009b23",
"assets/AssetManifest.json": "214e9bde20b927e4f5b8cdc6c9cbcb05",
"assets/assets/facts/1.png": "6167c776a0a3f401e2782654d9af8760",
"assets/assets/facts/10.png": "a14239013c184cf63f6f05dd7a694018",
"assets/assets/facts/11.png": "1c996cc3fe25a9bea0705bd958c6dedd",
"assets/assets/facts/12.png": "cab8b4f8d26e83b346d4b200d9427f0c",
"assets/assets/facts/13.png": "8814f3ac9842b9ceb78a0b0de00b176d",
"assets/assets/facts/14.png": "bc6643804729b07d1599db2793ffea9c",
"assets/assets/facts/15.png": "0700aaf2331e680eb71ab8b7c8eb43b1",
"assets/assets/facts/16.png": "cdf6eed30dd6c72b21b16b302badc904",
"assets/assets/facts/17.png": "6b20d2f5cf272e3cece35d8947328208",
"assets/assets/facts/18.png": "1b3dc6e0ae6ae3f6645ca23092480ba3",
"assets/assets/facts/19.png": "bb37695558c4efd51d68681a70787cc0",
"assets/assets/facts/2.png": "8ad553fa74fa0399d39f98cd387042f8",
"assets/assets/facts/20.png": "d1c57eca28a4e2f8ed0d7e2515777219",
"assets/assets/facts/3.png": "68ec3a1309aedf3a073270d835229678",
"assets/assets/facts/4.png": "f287a66781635b417ea47f0c2c672254",
"assets/assets/facts/5.png": "a547aa8c6edf193ea3416b202e26428b",
"assets/assets/facts/6.png": "52bb689cdf6cc3e53e1d487235b3c52f",
"assets/assets/facts/7.png": "044aba56f0a089709c7f289385d5ede0",
"assets/assets/facts/8.png": "1ac566a658663a3e41f342d51c28598a",
"assets/assets/facts/9.png": "7d086244bb2c0c4a39fbcb71928a64cf",
"assets/assets/images/banner.png": "ebf80acc23ca82a1cafc2333317589d5",
"assets/assets/images/cake.gif": "78962d9e9c27c994fac1a4c162fbb49b",
"assets/assets/images/cakepng.png": "4bcc4b91bb1f33e32fdc47dfd8c88578",
"assets/assets/images/fukyu.png": "f9b8078e2de4c149fdde7e6258a9f2c3",
"assets/assets/images/ghecakep.png": "7b9436947612b5c6c4f83ced34c896cb",
"assets/assets/images/ghejele.png": "ded198f76d331446650614b7fa4f053e",
"assets/assets/images/tunjuka.png": "8bb5c9d4b0f5d7781ce2781a40a8713b",
"assets/assets/images/tunjukb.png": "2afbb08682697d14510d1bd77f392d5e",
"assets/assets/images/vector.png": "695f992327d236a6bd045e9981e27587",
"assets/assets/images/vectorjelek.png": "74500ab614cf23f950a29c35c29e19c4",
"assets/assets/selfies/1.png": "bc9f2341cc010a2813d6fccf4cbf1253",
"assets/assets/selfies/10.png": "57eff72c1728a35e5c47d4d845fc45f6",
"assets/assets/selfies/11.png": "ce4885068ae6b5bf6cb56c20aef9ae5e",
"assets/assets/selfies/12.png": "b727f9f65dc9298a24f93963f7c15687",
"assets/assets/selfies/2.png": "29a2563263513b5f0b35b6c24d686ceb",
"assets/assets/selfies/3.png": "a153501729fb0084f3e11e9ef3093aa8",
"assets/assets/selfies/4.png": "2aaee029e8131bf8da285dc6ccef520a",
"assets/assets/selfies/5.png": "cabb5ac19cb1d307b615a9dd1c99ad4b",
"assets/assets/selfies/6.png": "f28933d1530d2637dba7a4e735467147",
"assets/assets/selfies/7.png": "e8e325c6dcd52a2cb10aa692972f8020",
"assets/assets/selfies/8.png": "112ab4370b28e94266c38cc82eb86246",
"assets/assets/selfies/9.png": "c3ad079f24b570a1fe762edc494f6ff3",
"assets/assets/ucapan/aisy.png": "f88d966d78800aa0c6d7b8fa576e2042",
"assets/assets/ucapan/irish.png": "407c9d1df574f9436500a8cc5d04ce85",
"assets/assets/ucapan/jati.png": "139321b23cac2a407745eb01ce641357",
"assets/assets/ucapan/mita.png": "b29bcdc48759c7f154d8dddb81e60fa5",
"assets/assets/ucapan/nida.png": "822123dcc5c471e873bc60f0064b7405",
"assets/assets/ucapan/tia.png": "07c6aecea663d6bc7c1894d49f93d5aa",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "4c8c342a24d9aac5b8856702833e7650",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "674c8a154bcc1ff945f3f70b4d50f893",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f95d4e19b3d7b195b4cab1b45a602c3d",
"/": "f95d4e19b3d7b195b4cab1b45a602c3d",
"main.dart.js": "143cb76ce6bb637819de605fc9fb7765",
"manifest.json": "193d219b8766fc46ab24cbcc35827c98",
"version.json": "307e5ef09e12233ec602947510b1c294"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
