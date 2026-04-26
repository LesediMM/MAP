// ============================================================
// HOW TO ADD / UPDATE TOWNS
// ============================================================
//
// This is the ONLY file you need to edit to change what appears
// on the map. Add or update entries in the `towns` array below.
//
// Each town follows this exact format:
//
//   { name: "Binji", lat: 13.2167, lng: 4.9167, status: "red" }
//
// Fields:
//   name   — Display name shown in the marker popup.
//   lat    — Latitude (decimal degrees). North of the equator = positive.
//   lng    — Longitude (decimal degrees). East of the prime meridian = positive.
//   status — One of exactly four strings (see key below).
//
// Status key:
//   "green"  → Low Risk
//   "yellow" → Cautious Risk
//   "red"    → High Risk
//   "gray"   → Unknown
//
// How to find lat/lng for a town:
//   Option A — Google Maps:
//     1. Go to https://www.google.com/maps
//     2. Search for the town (e.g. "Binji, Sokoto, Nigeria")
//     3. Right-click the exact point on the map
//     4. The first item in the menu shows the coordinates — click to copy
//        (first number = Latitude, second = Longitude)
//
//   Option B — LatLong.net:
//     1. Go to https://www.latlong.net
//     2. Type the place name and click Find
//
// Workflow reminder:
//   Edit this file → save → commit → push to GitHub →
//   Render auto-deploys → map updates on the live site.
// ============================================================

export type TownStatus = "green" | "yellow" | "red" | "gray";

export interface Town {
  name: string;
  lat: number;
  lng: number;
  status: TownStatus;
}

export const towns: Town[] = [
  // ── Sokoto State ──────────────────────────────────────────
  { name: "Sokoto",             lat: 13.0059,             lng: 5.2476,             status: "green"  },
  { name: "Tambuwal",           lat: 12.4047,             lng: 4.6467,             status: "yellow" },
  { name: "Wurno",              lat: 13.2931,             lng: 5.4219,             status: "red"    },
  { name: "Bachaka",            lat: 13.406255242763388,  lng: 4.174514597480909,  status: "red"    },
  { name: "Gwazange",           lat: 13.414786267553565,  lng: 4.25528626021784,   status: "red"    },
  { name: "Boto",               lat: 13.401985311122655,  lng: 4.316357553325996,  status: "red"    },
  { name: "Yakka",              lat: 13.337739572820038,  lng: 4.369244816262523,  status: "yellow" },
  { name: "Kafin-Chana",        lat: 13.221637525817775,  lng: 4.488329170273017,  status: "yellow" },
  { name: "Kafin Sarki",        lat: 13.2767683252025,    lng: 4.520020770032224,  status: "yellow" },
  { name: "Udan Marki",         lat: 13.32592074171073,   lng: 4.564732727128958,  status: "yellow" },
  { name: "Filasko",            lat: 13.348255918164808,  lng: 4.588708255970978,  status: "yellow" },
  { name: "Bamgi",              lat: 13.372396776889452,  lng: 4.608946146719645,  status: "yellow" },
  { name: "Bamgi",              lat: 13.39761887794674,   lng: 4.653410570021542,  status: "yellow" },
  { name: "Balle",              lat: 13.469674579097736,  lng: 4.683412609433046,  status: "red"    },
  { name: "Rafin Kubu",         lat: 13.516054454414416,  lng: 4.652809764811156,  status: "yellow" },
  { name: "Kasura",             lat: 13.563934794997751,  lng: 4.473480272077651,  status: "red"    },
  { name: "Kurdula-Sabarumowa", lat: 13.576562998062233,  lng: 4.37033998551623,   status: "red"    },
  { name: "Tunga",              lat: 13.470152836165425,  lng: 4.710358059315861,  status: "yellow" },
  { name: "Kuafuri",            lat: 13.486267127774026,  lng: 4.743755207215089,  status: "yellow" },
  { name: "Kotohari",           lat: 13.478366068803835,  lng: 4.744777838574403,  status: "yellow" },
  { name: "Mada",               lat: 13.482120760093716,  lng: 4.777031359469616,  status: "red"    },
  { name: "Shanyasu",           lat: 13.47922517368993,   lng: 4.775991144541827,  status: "red"    },
  { name: "Gurdam",             lat: 13.489082820667415,  lng: 4.781458839462492,  status: "red"    },
  { name: "Dan Chigaya",        lat: 13.462396575440135,  lng: 4.795184936407107,  status: "yellow" },
  { name: "Lamsani",            lat: 13.415595957945326,  lng: 4.84924694925316,   status: "yellow" },
  { name: "Hunkui",             lat: 13.382200421552197,  lng: 4.924308700037434,  status: "red"    },
  { name: "Tangaza",            lat: 13.366894664485407,  lng: 4.942459799483832,  status: "red"    },
  { name: "Laina",              lat: 13.370403993145564,  lng: 4.9704618935596185, status: "red"    },
  { name: "Rugaruwa",           lat: 13.365534025981756,  lng: 4.963588349246193,  status: "red"    },
  { name: "Bedi",               lat: 13.396372883606954,  lng: 4.9568982521153115, status: "red"    },
  { name: "Ayama",              lat: 13.402304501942552,  lng: 4.937268419345884,  status: "red"    },
  { name: "Saina",              lat: 13.450526081125133,  lng: 4.95911701500118,   status: "red"    },
  { name: "Gidan Madi",         lat: 13.508128861016864,  lng: 4.946521622790632,  status: "red"    },
  { name: "Maliba",             lat: 13.578921889545983,  lng: 4.88795449071762,   status: "red"    },
  { name: "Manu",               lat: 13.660956626465032,  lng: 4.914256420163035,  status: "red"    },
  { name: "Kaurawa",            lat: 13.666144439864043,  lng: 4.920520345110177,  status: "yellow" },
  { name: "Kaurawo Manu",       lat: 13.671811788045588,  lng: 4.924540230406032,  status: "red"    },
  { name: "Bugawa",             lat: 13.681906785772005,  lng: 4.945724388199057,  status: "yellow" },
  { name: "Ruawuri",            lat: 13.712629424390801,  lng: 4.967813056435982,  status: "red"    },
  { name: "Magaria",            lat: 13.705492733205674,  lng: 4.993574396858341,  status: "red"    },
  { name: "Bawgwel",            lat: 13.696428181659465,  lng: 5.011566141278082,  status: "red"    },
  { name: "Soni",               lat: 13.706480467780704,  lng: 5.0207990585097395, status: "red"    },
  { name: "Gorgao",             lat: 13.701340938796507,  lng: 5.052905672455475,  status: "red"    },
  { name: "Malga Tawa",         lat: 13.68956526967488,   lng: 5.104264979674321,  status: "red"    },
  { name: "Sarma",              lat: 13.686914821171472,  lng: 5.121036596869283,  status: "yellow" },
  { name: "Tumbulumkum",        lat: 13.694550677152346,  lng: 5.160772096120662,  status: "red"    },
  { name: "Rumji Dan Tudu",     lat: 13.698284814979235,  lng: 5.206903077559209,  status: "red"    },
  { name: "Kalmalo",            lat: 13.721036301240625,  lng: 5.244489634907403,  status: "red"    },
  { name: "Munwadata",          lat: 13.692351225482216,  lng: 5.268325356832857,  status: "red"    },
  { name: "Amarawa",            lat: 13.708214874967501,  lng: 5.2953366852790165, status: "red"    },
  { name: "Illela",             lat: 13.727398121226601,  lng: 5.29630398525479,   status: "red"    },
  { name: "Tunga Nama",         lat: 13.751692312684359,  lng: 5.282905726633577,  status: "red"    },
  { name: "Gidan Madi",         lat: 13.297661466053242,  lng: 4.9741280638115315, status: "red"    },
  { name: "Gidan Madebe",       lat: 13.281057336609788,  lng: 4.9552221347486585, status: "yellow" },
  { name: "Gidan Dedi",         lat: 13.262981386278643,  lng: 4.959872847207781,  status: "red"    },
  { name: "Toidi Zaidi",        lat: 13.249879677050052,  lng: 4.935444855200602,  status: "red"    },
  { name: "Binji",              lat: 13.222092562966049,  lng: 4.912007148136098,  status: "red"    },
  { name: "Gawaze",             lat: 13.204724746101943,  lng: 4.878588304541308,  status: "red"    },
  { name: "Aleta",              lat: 13.07879115819578,   lng: 4.699481064741289,  status: "red"    },
  { name: "Salawa",             lat: 13.38732117711738,   lng: 4.194768145435155,  status: "red"    },
  { name: "Tulum Bere",         lat: 13.346662485739747,  lng: 4.157627917582181,  status: "red"    },
  { name: "Shitalo",            lat: 13.329819301936068,  lng: 4.15999896357246,   status: "red"    },
  { name: "Arbakwe",            lat: 13.300493224419828,  lng: 4.171505327196878,  status: "red"    },
  { name: "Arbkwe",             lat: 13.281882742567804,  lng: 4.195540980323581,  status: "red"    },
  { name: "Gumbin Duki",        lat: 13.33577955566654,   lng: 4.192775114219905,  status: "red"    },
  { name: "Makwa",              lat: 13.319169033948626,  lng: 4.214403696255198,  status: "red"    },
  { name: "Makwa",              lat: 13.339263475304989,  lng: 4.257584554157507,  status: "yellow" },
  { name: "Tulua Takabawa",     lat: 13.278960138534998,  lng: 4.275931769391224,  status: "yellow" },
  { name: "Tulua",              lat: 13.291822190178573,  lng: 4.288898625737483,  status: "yellow" },
  { name: "Tulua Hausa",        lat: 13.299595808041177,  lng: 4.283076574035835,  status: "yellow" },
  { name: "Tulua",              lat: 13.276799904733272,  lng: 4.341375021910428,  status: "yellow" },
  { name: "Dangadabro",         lat: 13.252588230533213,  lng: 4.359209918841331,  status: "yellow" },
  { name: "Kulhi Kondo",        lat: 13.250577978649483,  lng: 4.370427511008621,  status: "yellow" },
  { name: "Kulhi",              lat: 13.245626618158546,  lng: 4.395170542301802,  status: "yellow" },
  { name: "Parakam",            lat: 13.226022578322153,  lng: 4.398806426949885,  status: "yellow" },
  { name: "Giliodi",            lat: 13.201229777402745,  lng: 4.403077721261064,  status: "yellow" },
  { name: "Tungan Namaiwa",     lat: 13.199564955072507,  lng: 4.4070045306402115, status: "yellow" },
  { name: "Tungan Chichi",      lat: 13.194045546184247,  lng: 4.4247808318649575, status: "yellow" },
  { name: "Tungan Katchira",    lat: 13.189110314881948,  lng: 4.464703292933962,  status: "yellow" },
  { name: "Gomozo",             lat: 13.15277839228104,   lng: 4.621667118493537,  status: "red"    },
  { name: "Kutumbu Mochera",    lat: 13.444583673250092,  lng: 4.203703211285935,  status: "red"    },
  { name: "Dangari Adua",       lat: 13.456225788265822,  lng: 4.205438855063309,  status: "red"    },
  { name: "Angwa Hure",         lat: 13.472856354753137,  lng: 4.162979674553625,  status: "red"    },
  { name: "Kutumbu Mockera",    lat: 13.466422409627711,  lng: 4.216768019063813,  status: "red"    },
  { name: "Shatoka",            lat: 13.459322374879113,  lng: 4.235289439058015,  status: "red"    },
  { name: "Tudu",               lat: 13.465315060923563,  lng: 4.254728578626601,  status: "red"    },
  { name: "Dambagi",            lat: 13.447648092237209,  lng: 4.263209718949822,  status: "red"    },
  { name: "Danwai",             lat: 13.44121078136504,   lng: 4.282587824419948,  status: "yellow" },
  { name: "Bobare",             lat: 13.436542895247793,  lng: 4.3231562938427635, status: "yellow" },
  { name: "Kiso",               lat: 13.438063651673662,  lng: 4.337742662967992,  status: "yellow" },
  { name: "Dubare",             lat: 13.451349314118609,  lng: 4.327194232127864,  status: "yellow" },
  { name: "Dabaga",             lat: 13.476711585044038,  lng: 4.309292033574477,  status: "yellow" },
  { name: "Kwararap",           lat: 13.487769300431221,  lng: 4.29997674390888,   status: "red"    },
  { name: "Kurunkuse",          lat: 13.493851427241836,  lng: 4.289357761786974,  status: "red"    },
  { name: "Gumbi",              lat: 13.506790727427605,  lng: 4.268219834970588,  status: "red"    },
  { name: "Dakassa",            lat: 13.511605392597973,  lng: 4.291092964428689,  status: "red"    },
  { name: "Makira",             lat: 13.511665783604077,  lng: 4.298425838462284,  status: "red"    },
  { name: "Gari-Ahoda",         lat: 13.508437121513554,  lng: 4.3139620160083645, status: "yellow" },
  { name: "Baori",              lat: 13.511532102946425,  lng: 4.312547838868241,  status: "yellow" },
  { name: "Yamu",               lat: 13.49749175817204,   lng: 4.358208894755181,  status: "red"    },
  { name: "Tunga-Sabarumowa",   lat: 13.504856340455111,  lng: 4.36215683180432,   status: "red"    },
  { name: "Rufai",              lat: 13.482814953212781,  lng: 4.378113378521153,  status: "yellow" },
  { name: "Kaukau",             lat: 13.501032514528697,  lng: 4.388413641366096,  status: "yellow" },
  { name: "Bauchi",             lat: 13.592370719057081,  lng: 4.430604995627184,  status: "red"    },
  { name: "Kokoki",             lat: 13.601310029381388,  lng: 4.429592242653362,  status: "red"    },
  { name: "Katsura",            lat: 13.611540911713607,  lng: 4.446329177018332,  status: "red"    },
  { name: "Awulkin Takare",     lat: 13.621540517817355,  lng: 4.411266155673596,  status: "red"    },
  { name: "Maraken Bori",       lat: 13.64643090583856,   lng: 4.481602061620293,  status: "red"    },
  { name: "Gozange",            lat: 13.645416869455632,  lng: 4.507401776525585,  status: "red"    },
  { name: "Maraken Bori",       lat: 13.646270239463593,  lng: 4.479196080703988,  status: "red"    },
  { name: "Diegi",              lat: 13.549707904432053,  lng: 4.633476827577719,  status: "yellow" },
  { name: "Rafin Kubu",         lat: 13.515982886290367,  lng: 4.6494314745781935, status: "yellow" },
  { name: "Talabani",           lat: 13.529476100700725,  lng: 4.742580530113075,  status: "yellow" },
  { name: "Jigo",               lat: 13.504332546710549,  lng: 4.747393961807133,  status: "yellow" },
  { name: "Wayage",             lat: 13.55944021899509,   lng: 4.8433484941527105, status: "red"    },
  { name: "Gingu",              lat: 13.53492837221822,   lng: 4.843026227215261,  status: "yellow" },
  { name: "Dan Tudu Wusenia",   lat: 13.643099725860191,  lng: 4.800479918112909,  status: "red"    },
  { name: "Chohi",              lat: 13.592412961739143,  lng: 4.872704673145685,  status: "red"    },
  { name: "Bagida",             lat: 13.702911708566296,  lng: 4.913374928498166,  status: "red"    },
  { name: "Tunugara",           lat: 13.715875749791492,  lng: 4.868497661535552,  status: "yellow" },
  { name: "Buzaga",             lat: 13.740497270788893,  lng: 4.871697001211308,  status: "red"    },
  { name: "Sabiu",              lat: 13.74653614876653,   lng: 4.877765709007651,  status: "red"    },
  { name: "Kuradina",           lat: 13.73419236306544,   lng: 4.908058450719953,  status: "red"    },
  { name: "Karani",             lat: 13.133462566755439,  lng: 4.558693683063478,  status: "red"    },
  { name: "Bauchi",             lat: 13.59212491760964,   lng: 4.430139681049821,  status: "red"    },
  { name: "Katsura",            lat: 13.610334975720887,  lng: 4.445531406204462,  status: "red"    },
  { name: "Maraken Bori",       lat: 13.645196915636888,  lng: 4.478085605206894,  status: "red"    },
  { name: "Diegi",              lat: 13.549371016838434,  lng: 4.631576581609151,  status: "red"    },
  { name: "Angwa Bawa",         lat: 13.230424974116499,  lng: 4.447817340624977,  status: "yellow" },
  { name: "Malgam",             lat: 13.67774355431209,   lng: 5.0205238376158965, status: "yellow" },
  { name: "Sarma",              lat: 13.642907052928257,  lng: 4.95051341879636,   status: "red"    },
  { name: "Waria",              lat: 13.653898791320614,  lng: 4.978234812939337,  status: "yellow" },
  { name: "Nukuru",             lat: 13.622032393688409,  lng: 4.976807321858309,  status: "yellow" },
  { name: "Kaideji",            lat: 13.616476827800577,  lng: 5.0319082095056515, status: "yellow" },
  { name: "Bauni",              lat: 13.61182648533304,   lng: 5.075283394277553,  status: "yellow" },
  { name: "Goboro",             lat: 13.577143987395768,  lng: 5.106123261418262,  status: "yellow" },
  { name: "Alia",               lat: 13.581483114763184,  lng: 4.983985653711375,  status: "yellow" },
  { name: "Sauna",              lat: 13.57208755321627,   lng: 5.190888194965811,  status: "yellow" },
  { name: "Zurmuku",            lat: 13.530324491620876,  lng: 5.120007179559516,  status: "yellow" },
  { name: "Salewa",             lat: 13.495266307330114,  lng: 5.122226423520737,  status: "red"    },
  { name: "Buwadi",             lat: 13.52178843047349,   lng: 5.2205040000443335, status: "red"    },
  { name: "Tunkarra",           lat: 13.511076263288663,  lng: 5.202350846408711,  status: "red"    },
  { name: "Kyanga",             lat: 13.501218053808936,  lng: 5.175458271226308,  status: "yellow" },
  { name: "Burtali",            lat: 13.481709388519718,  lng: 5.216531233298539,  status: "yellow" },
  { name: "Gigani",             lat: 13.491701634804206,  lng: 5.230476210687502,  status: "red"    },
  { name: "Isiyako",            lat: 13.534739227756196,  lng: 5.275158135008709,  status: "red"    },
  { name: "Dambaana",           lat: 13.55129615265242,   lng: 5.264305357796733,  status: "red"    },
  { name: "Makina",             lat: 13.586485669301426,  lng: 5.288058469436352,  status: "yellow" },
  { name: "Tarike",             lat: 13.585656419679529,  lng: 5.25985553996644,   status: "red"    },
  { name: "Raka",               lat: 13.446708659390653,  lng: 5.158326880841646,  status: "red"    },
  { name: "Hasan",              lat: 13.442274800143059,  lng: 5.116383085091419,  status: "yellow" },
  { name: "Nadindu",            lat: 13.46210342589534,   lng: 5.1176216557938305, status: "yellow" },
  { name: "Mele",               lat: 13.424606230277488,  lng: 5.215094769902188,  status: "red"    },
  { name: "Gidan Ardo",         lat: 13.429140502162463,  lng: 5.196174370136302,  status: "yellow" },
  { name: "Gamaru",             lat: 13.44165957105914,   lng: 5.18525225731215,   status: "yellow" },
  { name: "Abdolo",             lat: 13.397671899470504,  lng: 5.24575996768581,   status: "red"    },
  { name: "Guamela",            lat: 13.39615828460937,   lng: 5.227072007172973,  status: "red"    },
  { name: "Olaho",              lat: 13.389761513607093,  lng: 5.21016734299238,   status: "yellow" },
  { name: "Yalao",              lat: 13.378948362612668,  lng: 5.192470443688938,  status: "red"    },
  { name: "Balah",              lat: 13.388062932199588,  lng: 5.169037757568908,  status: "red"    },
  { name: "Madarari",           lat: 13.385368901638106,  lng: 5.139133683804848,  status: "red"    },
  { name: "Burdi",              lat: 13.368910743233823,  lng: 5.12853303701,      status: "red"    },
  { name: "Mulela",             lat: 13.346830719554449,  lng: 5.129133559826097,  status: "red"    },
  { name: "Gwadabawa",          lat: 13.349013123107108,  lng: 5.1005882011111785, status: "red"    },
  { name: "Bararaji",           lat: 13.349418521570813,  lng: 5.089209058331201,  status: "yellow" },
  { name: "Kwarka",             lat: 13.326320140215403,  lng: 5.046444658960238,  status: "yellow" },
  { name: "Bakerma",            lat: 13.312892035652794,  lng: 5.032177979836961,  status: "red"    },
  { name: "Saraku",             lat: 13.302136062664673,  lng: 5.004573615933948,  status: "yellow" },
  { name: "Suroru",             lat: 13.2919290556783,    lng: 5.018653165561266,  status: "red"    },
  { name: "Gidan Mayawaki",     lat: 13.302142854228702,  lng: 5.027827615432322,  status: "red"    },
  { name: "Adarawa",            lat: 13.291062320565207,  lng: 5.049266159402576,  status: "red"    },
  { name: "Gundunga",           lat: 13.25928735998104,   lng: 5.152847255707342,  status: "yellow" },
  { name: "Katalan",            lat: 13.313524742295156,  lng: 5.1321870447531515, status: "red"    },
  { name: "Aguluri",            lat: 13.326305794415852,  lng: 5.163324965487626,  status: "red"    },
  { name: "Chobal",             lat: 13.34187620057813,   lng: 5.162856762929583,  status: "yellow" },
  { name: "Habewu",             lat: 13.30076087697283,   lng: 5.1920231876893075, status: "yellow" },
  { name: "Balkore",            lat: 13.299693397746397,  lng: 5.2343300785274804, status: "red"    },
  { name: "Gidan Karma",        lat: 13.317654115574026,  lng: 5.210597087571856,  status: "red"    },
  { name: "Tunga Bako",         lat: 13.309447969387241,  lng: 5.224652393414087,  status: "red"    },
  { name: "Ranganda",           lat: 13.340595109455439,  lng: 5.218467889651304,  status: "red"    },
  { name: "Gwadabawa",          lat: 13.354327744210835,  lng: 5.237810181102184,  status: "red"    },
  { name: "Abdolo",             lat: 13.397516601963845,  lng: 5.245751677961947,  status: "red"    },
  { name: "Gundunga",           lat: 13.25916204603041,   lng: 5.152976001902878,  status: "yellow" },

  // New towns (latest batch)
  { name: "Kware",              lat: 13.21845334123869,   lng: 5.26522345897118,    status: "red"    },
  { name: "Kalalawa",           lat: 13.208692657352321,  lng: 5.223795682517822,   status: "red"    },
  { name: "Kulatawa",           lat: 13.200692881737929,  lng: 5.2148636165231546,  status: "red"    },
  { name: "Kawa",               lat: 13.174825794514966,  lng: 5.238838647626863,   status: "yellow" },
  { name: "Erjabe",             lat: 13.166460494195203,  lng: 5.229261896101178,   status: "yellow" },
  { name: "Danjawa",            lat: 13.139979944693124,  lng: 5.224728673786987,   status: "green"  },
  { name: "Kaura",              lat: 13.131559913563612,  lng: 5.241282181871309,   status: "yellow" },
  { name: "Dundaye",            lat: 13.112450025534883,  lng: 5.227490507205965,   status: "yellow" },
  { name: "Gidan Alkali",       lat: 13.127482425964732,  lng: 5.203914593462488,   status: "green"  },
  { name: "Budano Ila",         lat: 13.11198633197532,   lng: 5.13492533841575,    status: "yellow" },
  { name: "Lingo",              lat: 13.092532653990308,  lng: 5.139577197457354,   status: "green"  },
  { name: "Bowen",              lat: 13.07525855518801,   lng: 5.099672415070902,   status: "yellow" },
  { name: "Huchi",              lat: 13.053081197169567,  lng: 5.074380677535463,   status: "red"    },
  { name: "Samalu",             lat: 13.105486034141512,  lng: 5.031627363646236,   status: "green"  },
  { name: "Daraye",             lat: 13.140959595916662,  lng: 5.01874373646678,    status: "yellow" },
  { name: "Samama",             lat: 13.158200553642846,  lng: 5.028848911122216,   status: "yellow" },

  // ── Kebbi State ───────────────────────────────────────────
  { name: "Birnin Kebbi",       lat: 12.4539,             lng: 4.1975,             status: "green"  },
  { name: "Argungu",            lat: 12.7405,             lng: 4.5237,             status: "gray"   },
  { name: "Tuga",               lat: 11.36887553889238,   lng: 4.150192155395355,  status: "yellow" },
  { name: "Tuluwa",             lat: 11.348615944361695,  lng: 4.200064703253016,  status: "yellow" },
  { name: "Tunga Maje",         lat: 11.353707736070932,  lng: 4.216253013916381,  status: "yellow" },
  { name: "Zaria",              lat: 11.356140101327853,  lng: 4.1806196230704264, status: "red"    },
  { name: "Tunga Ulu",          lat: 11.379330038688499,  lng: 4.229747622804109,  status: "yellow" },
  { name: "Baguda",             lat: 11.400108874475404,  lng: 4.22391110806843,   status: "red"    },
  { name: "Futawa",             lat: 11.391014789996,     lng: 4.26463297196405,   status: "yellow" },
  { name: "Marakai",            lat: 11.424523910310143,  lng: 4.265759191035419,  status: "red"    },
  { name: "Ramin Kura",         lat: 11.39537860636687,   lng: 4.195710557842012,  status: "red"    },
  { name: "Bahindi",            lat: 11.464547318039479,  lng: 4.183279313848462,  status: "yellow" },
  { name: "Runtuwa",            lat: 11.492963849569142,  lng: 4.185630454978016,  status: "green"  },
  { name: "Kuruga",             lat: 11.515925549485898,  lng: 4.236252935914058,  status: "red"    },
  { name: "Tunga Burahi",       lat: 11.486121259698312,  lng: 4.284139863196304,  status: "yellow" },
  { name: "Dabaga",             lat: 11.474149396754928,  lng: 4.305575092980705,  status: "yellow" }
];