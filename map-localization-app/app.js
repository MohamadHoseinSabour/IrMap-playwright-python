/*
 * BizFinder Pro — app.js (v4)
 * Requires: Leaflet 1.9.x (loaded before this script)
 */
"use strict";

// ─── Translations ───────────────────────────────────────────
var TR = {
  fa: {
    pageTitle:         "BizFinder Pro | استخراج اطلاعات کسب\u200Cوکار",
    appHeading:        "BizFinder Pro",
    appTagline:        "استخراج هوشمند کسب\u200Cوکار",
    langBtn:           "English",
    searchLabel:       "جستجوی زنده روی نقشه",
    quickCats:         "دسته\u200Cبندی سریع:",
    mapProvider:       "نقشه:",
    searchBtn:         "\uD83D\uDD0D جستجو در این منطقه",
    searching:         "در حال جستجو...",
    filterLabel:       "فیلترهای پیشرفته",
    filterPlaceholder: "فیلتر در نتایج...",
    keywordPlaceholder:"\u06A9\u0644\u06CC\u062F\u0648\u0627\u0698\u0647: \u067E\u0632\u0634\u06A9\u060C \u0622\u0631\u0627\u06CC\u0634\u06AF\u0627\u0647\u060C \u06A9\u0627\u0641\u0647...",
    ratingLabel:       "حداقل امتیاز:",
    hasFields:         "فقط با:",
    hasPhone:          "\uD83D\uDCDE تلفن",
    hasWebsite:        "\uD83C\uDF10 وب\u200Cسایت",
    hasEmail:          "\u2709\uFE0F ایمیل",
    hasHours:          "\u23F0 ساعات",
    radiusLabel:       "شعاع:",
    radiusUnlimited:   "نامحدود",
    boundsLabel:       "محدوده نقشه",
    sortLabel:         "مرتب\u200Cسازی:",
    sortDefault:       "پیش\u200Cفرض",
    sortName:          "نام",
    sortRating:        "بیشترین امتیاز",
    sortDistance:      "نزدیک\u200Cترین",
    clearFilters:      "\uD83D\uDDD1\uFE0F پاک کردن فیلترها",
    resultsLabel:      "نتایج",
    exportCsv:         "خروجی CSV",
    exportJson:        "خروجی JSON",
    selectAll:         "انتخاب همه",
    mapHint:           "نقشه را به منطقه مورد نظر ببرید، سپس جستجو کنید",
    footer:            "BizFinder Pro \u2014 داده از OpenStreetMap",
    noResults:         "کسب\u200Cوکاری یافت نشد.",
    noResultsHint:     "یک دسته\u200Cبندی انتخاب کنید و روی «جستجو» بزنید.",
    locate:            "روی نقشه",
    copy:              "کپی",
    copied:            "کپی شد!",
    statusReady:       "آماده جستجو",
    statusSearching:   "در حال جستجو...",
    statusDone:        "نتیجه یافت شد",
    statusError:       "خطا در جستجو \u2014 دوباره تلاش کنید",
    modalTitle:        "پیش\u200Cنمایش خروجی CSV",
    modalDlCsv:        "دانلود CSV",
    modalDlJson:       "دانلود JSON",
    modalCancel:       "انصراف",
    statTotal:         "مجموع:",
    statPhone:         "با تلفن:",
    statWebsite:       "با وب\u200Cسایت:",
    statEmail:         "با ایمیل:",
    csvHeaders:        ["ID","نام","دسته\u200Cبندی","امتیاز","تلفن","وب\u200Cسایت","ایمیل","آدرس","ساعات","عرض","طول","OSM ID"],
    chips: {
      restaurant:"\uD83C\uDF7D\uFE0F رستوران", cafe:"\u2615 کافه",
      hospital:"\uD83C\uDFE5 بیمارستان",     pharmacy:"\uD83D\uDC8A داروخانه",
      dentist:"\uD83E\uDDB7 دندانپزشک",       mobile:"\uD83D\uDCF1 موبایل",
      hotel:"\uD83C\uDFE8 هتل",               supermarket:"\uD83D\uDED2 سوپرمارکت",
      bank:"\uD83C\uDFE6 بانک",               gym:"\uD83D\uDCAA باشگاه",
      beauty:"\uD83D\uDC87 آرایشگاه",         school:"\uD83C\uDFEB مدرسه",
    },
    cats: {
      restaurant:"رستوران",   cafe:"کافه",       hospital:"بیمارستان",
      pharmacy:"داروخانه",    dentist:"دندانپزشک",mobile:"موبایل",
      hotel:"هتل",            supermarket:"سوپرمارکت",bank:"بانک",
      gym:"باشگاه",           beauty:"آرایشگاه", school:"مدرسه",  other:"سایر",
    },
  },
  en: {
    pageTitle:         "BizFinder Pro | Business Contact Extractor",
    appHeading:        "BizFinder Pro",
    appTagline:        "Smart Business Extractor",
    langBtn:           "\u0641\u0627\u0631\u0633\u06CC",
    searchLabel:       "Live Map Search",
    quickCats:         "Quick categories:",
    mapProvider:       "Map:",
    searchBtn:         "\uD83D\uDD0D Search This Area",
    searching:         "Searching...",
    filterLabel:       "Advanced Filters",
    filterPlaceholder: "Filter results...",
    keywordPlaceholder:"Keyword: doctor, pharmacy, cafe...",
    ratingLabel:       "Min Rating:",
    hasFields:         "Only with:",
    hasPhone:          "\uD83D\uDCDE Phone",
    hasWebsite:        "\uD83C\uDF10 Website",
    hasEmail:          "\u2709\uFE0F Email",
    hasHours:          "\u23F0 Hours",
    radiusLabel:       "Radius:",
    radiusUnlimited:   "Unlimited",
    boundsLabel:       "Map Bounds",
    sortLabel:         "Sort:",
    sortDefault:       "Default",
    sortName:          "Name",
    sortRating:        "Highest Rating",
    sortDistance:      "Nearest",
    clearFilters:      "\uD83D\uDDD1\uFE0F Clear Filters",
    resultsLabel:      "Results",
    exportCsv:         "Export CSV",
    exportJson:        "Export JSON",
    selectAll:         "Select All",
    mapHint:           "Navigate to your area, then click Search",
    footer:            "BizFinder Pro \u2014 Data from OpenStreetMap",
    noResults:         "No businesses found.",
    noResultsHint:     "Select a category and click Search to begin.",
    locate:            "On Map",
    copy:              "Copy",
    copied:            "Copied!",
    statusReady:       "Ready to search",
    statusSearching:   "Searching...",
    statusDone:        "results found",
    statusError:       "Search error \u2014 please try again",
    modalTitle:        "CSV Export Preview",
    modalDlCsv:        "Download CSV",
    modalDlJson:       "Download JSON",
    modalCancel:       "Cancel",
    statTotal:         "Total:",
    statPhone:         "With phone:",
    statWebsite:       "With website:",
    statEmail:         "With email:",
    csvHeaders:        ["ID","Name","Category","Rating","Phone","Website","Email","Address","Opening Hours","Lat","Lng","OSM ID"],
    chips: {
      restaurant:"\uD83C\uDF7D\uFE0F Restaurant",cafe:"\u2615 Cafe",
      hospital:"\uD83C\uDFE5 Hospital",          pharmacy:"\uD83D\uDC8A Pharmacy",
      dentist:"\uD83E\uDDB7 Dentist",             mobile:"\uD83D\uDCF1 Mobile",
      hotel:"\uD83C\uDFE8 Hotel",                supermarket:"\uD83D\uDED2 Supermarket",
      bank:"\uD83C\uDFE6 Bank",                  gym:"\uD83D\uDCAA Gym",
      beauty:"\uD83D\uDC87 Beauty",              school:"\uD83C\uDFEB School",
    },
    cats: {
      restaurant:"Restaurant", cafe:"Cafe",       hospital:"Hospital",
      pharmacy:"Pharmacy",     dentist:"Dentist",  mobile:"Mobile",
      hotel:"Hotel",           supermarket:"Supermarket", bank:"Bank",
      gym:"Gym",               beauty:"Beauty",   school:"School", other:"Other",
    },
  },
};

// ─── OSM Tag → Category ──────────────────────────────────────
var OSM_TO_CAT = {
  "amenity=restaurant":"restaurant","amenity=fast_food":"restaurant","amenity=food_court":"restaurant",
  "amenity=cafe":"cafe","amenity=bar":"cafe","amenity=pub":"cafe",
  "amenity=hospital":"hospital","amenity=clinic":"hospital","amenity=doctors":"hospital",
  "amenity=pharmacy":"pharmacy","amenity=dentist":"dentist",
  "shop=mobile_phone":"mobile","shop=electronics":"mobile",
  "tourism=hotel":"hotel","tourism=guest_house":"hotel",
  "shop=supermarket":"supermarket","shop=grocery":"supermarket","shop=convenience":"supermarket",
  "amenity=bank":"bank","amenity=atm":"bank",
  "amenity=gym":"gym","leisure=fitness_centre":"gym",
  "shop=beauty":"beauty","shop=hairdresser":"beauty",
  "amenity=school":"school","amenity=university":"school","amenity=college":"school",
};

var CAT_COLOR = {
  restaurant:"#ef4444", cafe:"#f59e0b", hospital:"#10b981", pharmacy:"#6ee7b7",
  dentist:"#06b6d4",    mobile:"#8b5cf6",hotel:"#fde68a",   supermarket:"#34d399",
  bank:"#6366f1",       gym:"#f97316",   beauty:"#ec4899",  school:"#eab308",
  other:"#64748b",
};

var TILES = {
  google: { url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",        opts:{attribution:"© OpenStreetMap",maxZoom:19,subdomains:"abc"} },
  neshan: { url:"https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", opts:{attribution:"© CartoDB",maxZoom:19,subdomains:"abcd"} },
  balad:  { url:"https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", opts:{attribution:"© CartoDB",maxZoom:19,subdomains:"abcd"} },
};

// ─── State ───────────────────────────────────────────────────
var currentLang  = "fa";
var map          = null;
var tileLayer    = null;
var radiusCir    = null;
var mapMarkers   = [];
var allBiz       = [];
var filteredBiz  = [];
var checkedIds   = {};      // id → true/false (plain object, no Set)
var isLive       = false;   // Track if we have fetched live data from Overpass
var activeProvider = "google"; // Track active map provider for status display
var currentStatusType = "ready";
var currentStatusCount = 0;

var fText    = "";
var fRating  = 0;
var fPhone   = false;
var fWebsite = false;
var fEmail   = false;
var fHours   = false;
var fBounds  = false;
var fRadius  = "unlimited";
var fSort    = "default";
var activeOsm = "amenity=restaurant";
var isSearching = false;

// ─── Helpers ─────────────────────────────────────────────────
function T(key) {
  var v = TR[currentLang][key];
  return (v !== undefined && v !== null) ? v : key;
}

function el(id) { return document.getElementById(id); }

function setText(id, val) {
  var e = el(id);
  if (e) { e.textContent = String(val); }
}

function setPlaceholder(id, val) {
  var e = el(id);
  if (e) { e.placeholder = String(val); }
}

function esc(s) {
  if (s == null) { return ""; }
  return String(s)
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;");
}

function distM(la1, lo1, la2, lo2) {
  var R = 6371000;
  var r = function(d) { return d * Math.PI / 180; };
  var a = Math.pow(Math.sin(r(la2-la1)/2),2) + Math.cos(r(la1))*Math.cos(r(la2))*Math.pow(Math.sin(r(lo2-lo1)/2),2);
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

function checkedCount() {
  var n = 0;
  Object.keys(checkedIds).forEach(function(k) { if (checkedIds[k]) n++; });
  return n;
}

var MOCK_DATA = [
  { id: 1,  name: { fa: "رستوران سنتی نایب (تجریش)", en: "Nayeb Traditional Restaurant (Tajrish)" }, category: "restaurant", rating: 4.5, phone: "021-22712679", address: { fa: "تهران، میدان تجریش، خیابان شهرداری", en: "Shahrdari St, Tajrish Square, Tehran" }, coords: [35.8073, 51.4283] },
  { id: 2,  name: { fa: "کافه اسپرسو (برج میلاد)", en: "Espresso Cafe (Milad Tower)" }, category: "cafe", rating: 4.8, phone: "021-88620310", address: { fa: "تهران، بزرگراه همت، ورودی برج میلاد", en: "Milad Tower Entrance, Hemmat Expressway, Tehran" }, coords: [35.7448, 51.3753] },
  { id: 3,  name: { fa: "بیمارستان فوق تخصصی میلاد", en: "Milad Specialty Hospital" }, category: "hospital", rating: 4.2, phone: "021-88062000", address: { fa: "تهران، بزرگراه همت، خروجی اختصاصی بیمارستان میلاد", en: "Milad Hospital Exit, Hemmat Expressway, Tehran" }, coords: [35.7483, 51.3693] },
  { id: 4,  name: { fa: "رستوران لوکس دیوان (فرشته)", en: "Divan Luxury Restaurant (Fereshteh)" }, category: "restaurant", rating: 4.7, phone: "021-26201320", address: { fa: "تهران، خیابان فرشته، مرکز خرید سام سنتر", en: "Sam Center Mall, Fereshteh St, Tehran" }, coords: [35.7958, 51.4215] },
  { id: 5,  name: { fa: "سام کافه (مرکز خرید سنا)", en: "Sam Cafe (Sana Mall)" }, category: "cafe", rating: 4.6, phone: "021-22709270", address: { fa: "تهران، بلوار اندرزگو، مرکز خرید سنا، طبقه اول", en: "1st Floor, Sana Shopping Center, Andarzgoo Blvd, Tehran" }, coords: [35.7981, 51.4325] },
  { id: 6,  name: { fa: "بیمارستان و مرکز پزشکی گاندی", en: "Gandhi Hospital & Medical Center" }, category: "hospital", rating: 4.0, phone: "021-88191000", address: { fa: "تهران، خیابان گاندی، نبش کوچه ترابنده", en: "Corner of Tarabandeh St, Gandhi St, Tehran" }, coords: [35.7533, 51.4110] },
  { id: 7,  name: { fa: "رستوران شاندیز جردن (گلستان)", en: "Shandiz Jordan Restaurant (Golestan)" }, category: "restaurant", rating: 4.4, phone: "021-22054848", address: { fa: "تهران، بلوار آفریقا (جردن)، خیابان گلستان", en: "Golestan St, Africa Blvd (Jordan), Tehran" }, coords: [35.7820, 51.4200] },
  { id: 8,  name: { fa: "کافه دنچ ونک", en: "Cozy Vanak Cafe" }, category: "cafe", rating: 3.9, phone: "021-88775533", address: { fa: "تهران، میدان ونک، خیابان ملاصدرا", en: "Mollasadra St, Vanak Square, Tehran" }, coords: [35.7570, 51.4080] },
  { id: 9,  name: { fa: "رستوران سنتی آزادی (غرب)", en: "Azadi Traditional Restaurant (West)" }, category: "restaurant", rating: 4.3, phone: "021-44001122", address: { fa: "تهران، میدان آزادی، ابتدای بزرگراه جناح", en: "Jenah Expressway, Azadi Square, Tehran" }, coords: [35.6997, 51.3380] },
  { id: 10, name: { fa: "کافه چیتگر (بام لند)", en: "Chitgar Cafe (Bam Land)" }, category: "cafe", rating: 4.7, phone: "021-40223300", address: { fa: "تهران، بزرگراه همت غرب، دریاچه چیتگر، مجتمع تجاری بام لند", en: "Bam Land Mall, Chitgar Lake, Hemmat West Expressway, Tehran" }, coords: [35.7508, 51.2185] },
  { id: 11, name: { fa: "بیمارستان فوق تخصصی لاله", en: "Laleh Specialty Hospital" }, category: "hospital", rating: 4.1, phone: "021-88571065", address: { fa: "تهران، شهرک غرب، فاز ۵، خیابان سیمای ایران", en: "Simay-e-Iran St, Phase 5, Shahrak-e Gharb, Tehran" }, coords: [35.7610, 51.3732] },
  { id: 12, name: { fa: "کافه ویونا (سعادت‌آباد)", en: "Viuna Cafe (Sa'adat Abad)" }, category: "cafe", rating: 4.2, phone: "021-22067890", address: { fa: "تهران، سعادت‌آباد، میدان کاج، خیابان سرو شرقی", en: "Sarv-e Sharqi St, Kaj Square, Sa'adat Abad, Tehran" }, coords: [35.7876, 51.3688] },
  { id: 13, name: { fa: "رستوران کاخ نیاوران", en: "Niavaran Palace Restaurant" }, category: "restaurant", rating: 4.6, phone: "021-22820200", address: { fa: "تهران، انتهای خیابان پاسداران، پارک نیاوران", en: "Niavaran Park, Pasdaran St, Tehran" }, coords: [35.8115, 51.4695] },
  { id: 14, name: { fa: "کافه لمیز (پاسداران)", en: "Lamiz Cafe (Pasdaran)" }, category: "cafe", rating: 4.5, phone: "021-22584512", address: { fa: "تهران، خیابان پاسداران، نبش گلستان چهارم", en: "Corner of 4th Golestan, Pasdaran St, Tehran" }, coords: [35.7725, 51.4600] },
  { id: 15, name: { fa: "بیمارستان تهرانپارس", en: "Tehranpars Hospital" }, category: "hospital", rating: 3.8, phone: "021-77884690", address: { fa: "تهران، تهرانپارس، فلکه سوم، خیابان ۱۹۶ غربی", en: "196th West St, 3rd Square, Tehranpars, Tehran" }, coords: [35.7335, 51.5218] },
  { id: 16, name: { fa: "کافه رستوران هفت حوض (نارمک)", en: "Haft Hoz Cafe (Narmak)" }, category: "cafe", rating: 4.1, phone: "021-77945533", address: { fa: "تهران، نارمک، ضلع جنوبی میدان هفت حوض", en: "South side of Haft Hoz Square, Narmak, Tehran" }, coords: [35.7320, 51.4920] },
  { id: 17, name: { fa: "رستوران سنتی پیروزی", en: "Pirouzi Traditional Restaurant" }, category: "restaurant", rating: 4.0, phone: "021-33344455", address: { fa: "تهران، خیابان پیروزی، صد دستگاه، نبش خیابان نبرد", en: "Corner of Nabard St, Pirouzi St, Tehran" }, coords: [35.6880, 51.4880] },
  { id: 18, name: { fa: "بیمارستان فیروزآبادی (شهر ری)", en: "Firouzabadi Hospital (Shahr-e Rey)" }, category: "hospital", rating: 3.7, phone: "021-55902045", address: { fa: "تهران، شهر ری، خیابان فداییان اسلام، میدان بسیج", en: "Basij Square, Fadaeian-e Islam St, Shahr-e Rey, Tehran" }, coords: [35.5900, 51.4350] },
  { id: 19, name: { fa: "فست فود نازی‌آباد", en: "Nazi Abad Fast Food" }, category: "restaurant", rating: 4.4, phone: "021-55061234", address: { fa: "تهران، نازی‌آباد، خیابان بازار دوم، پلاک ۸۸", en: "No 88, Bazar-e Dovom St, Nazi Abad, Tehran" }, coords: [35.6420, 51.3930] },
  { id: 20, name: { fa: "چلوکبابی رفتاری (بازار بزرگ)", en: "Raftari Restaurant (Grand Bazaar)" }, category: "restaurant", rating: 4.6, phone: "021-55611122", address: { fa: "تهران، بازار بزرگ، بازار کفاش‌ها، کوچه مهناز", en: "Mahnaz Alley, Shoe Bazaar, Grand Bazaar, Tehran" }, coords: [35.6780, 51.4180] },
  { id: 21, name: { fa: "کافه کتاب انقلاب", en: "Enghelab Book Cafe" }, category: "cafe", rating: 4.6, phone: "021-66487799", address: { fa: "تهران، میدان انقلاب، خیابان ۱۲ فروردین، بن‌بست نور", en: "Noor Cul-de-sac, 12 Farvardin St, Enghelab Square, Tehran" }, coords: [35.7010, 51.3910] },
  { id: 22, name: { fa: "بیمارستان فوق تخصصی قلب جماران", en: "Jamaran Heart Hospital" }, category: "hospital", rating: 4.3, phone: "021-22290292", address: { fa: "تهران، نیاوران، جماران، خیابان حسنی‌کیا", en: "Hasnikia St, Jamaran, Niavaran, Tehran" }, coords: [35.8155, 51.4550] },
  { id: 23, name: { fa: "کافه بهار (هفت تیر)", en: "Bahar Cafe (Haft-e Tir)" }, category: "cafe", rating: 4.0, phone: "021-88820033", address: { fa: "تهران، میدان هفت تیر، خیابان بهار شیراز", en: "Bahar Shiraz St, Haft-e Tir Square, Tehran" }, coords: [35.7155, 51.4260] },
  { id: 24, name: { fa: "بیمارستان شریعتی", en: "Shariati University Hospital" }, category: "hospital", rating: 3.9, phone: "021-84901000", address: { fa: "تهران، بزرگراه جلال آل احمد، روبروی کوی دانشگاه", en: "Jalal Al-Ahmad Expressway, Tehran" }, coords: [35.7280, 51.3900] },
  { id: 25, name: { fa: "بیمارستان شهدای تجریش", en: "Shohada-ye Tajrish Hospital" }, category: "hospital", rating: 3.6, phone: "021-22718001", address: { fa: "تهران، میدان تجریش، خیابان شهرداری، پلاک ۳", en: "No 3, Shahrdari St, Tajrish Square, Tehran" }, coords: [35.8080, 51.4290] },
  { id: 26, name: { fa: "کافه باغ ولنجک", en: "Velenjak Garden Cafe" }, category: "cafe", rating: 4.7, phone: "021-22409010", address: { fa: "تهران، ولنجک، انتهای خیابان یمن، باغ ایرانی", en: "Iranian Garden, Yemen St, Velenjak, Tehran" }, coords: [35.8060, 51.3980] },
  { id: 27, name: { fa: "رستوران باغ قصر یخ", en: "Ice Palace Garden Restaurant" }, category: "restaurant", rating: 4.2, phone: "021-22880099", address: { fa: "تهران، خیابان شریعتی، بالاتر از پل سیدخندان", en: "Shariati St, above Seyed Khandan Bridge, Tehran" }, coords: [35.7650, 51.4420] },
  { id: 28, name: { fa: "کافه دیدار (شرق)", en: "Didar Cafe (East)" }, category: "cafe", rating: 4.1, phone: "021-77889900", address: { fa: "تهران، بزرگراه رسالت، بعد از اتوبان باقری", en: "Resalat Expressway, past Bagheri Highway, Tehran" }, coords: [35.7180, 51.4780] },
  { id: 29, name: { fa: "درمانگاه شبانه‌روزی ترمینال جنوب", en: "South Terminal 24/7 Clinic" }, category: "hospital", rating: 3.5, phone: "021-55185390", address: { fa: "تهران، بزرگراه بعثت، ترمینال مسافربری جنوب", en: "South Passenger Terminal, Be'sat Expressway, Tehran" }, coords: [35.6580, 51.4100] },
  { id: 30, name: { fa: "رستوران پارک غربی (چیتگر)", en: "West Park Restaurant (Chitgar)" }, category: "restaurant", rating: 4.4, phone: "021-44705050", address: { fa: "تهران، آزادراه تهران-کرج، ورودی پارک جنگلی چیتگر", en: "Chitgar Forest Park Entrance, Tehran-Karaj Freeway, Tehran" }, coords: [35.7320, 51.2720] }
];

function loadMockData() {
  var out = [];
  var mc = map ? map.getCenter() : { lat: 35.6997, lng: 51.3380 };
  for (var i = 0; i < MOCK_DATA.length; i++) {
    var b = MOCK_DATA[i];
    out.push({
      id:       b.id,
      osmId:    "node/" + (1000000 + b.id),
      name:     currentLang === "fa" ? b.name.fa : b.name.en,
      category: b.category,
      rating:   b.rating,
      phone:    b.phone,
      website:  "",
      email:    "",
      address:  currentLang === "fa" ? b.address.fa : b.address.en,
      hours:    "",
      coords:   b.coords,
      distance: distM(mc.lat, mc.lng, b.coords[0], b.coords[1]),
    });
  }
  allBiz = out;
}

// ─── Language ────────────────────────────────────────────────
function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir  = lang === "fa" ? "rtl" : "ltr";

  if (!isLive) {
    loadMockData();
  }

  setText("page-title",          T("pageTitle"));
  setText("app-heading",         T("appHeading"));
  setText("app-tagline",         T("appTagline"));
  setText("search-engine-label", T("searchLabel"));
  setText("quick-cats-label",    T("quickCats"));
  setText("map-provider-label",  T("mapProvider"));
  setText("search-btn-text",     T("searchBtn"));
  setText("filter-label",        T("filterLabel"));
  setText("rating-label",        T("ratingLabel"));
  setText("has-fields-label",    T("hasFields"));
  setText("radius-label-select", T("radiusLabel"));
  setText("opt-radius-unlimited",T("radiusUnlimited"));
  setText("map-bounds-label",    T("boundsLabel"));
  setText("sort-label",          T("sortLabel"));
  setText("sort-default",        T("sortDefault"));
  setText("sort-name",           T("sortName"));
  setText("sort-rating",         T("sortRating"));
  setText("sort-distance",       T("sortDistance"));
  setText("clear-filters-text",  T("clearFilters"));
  setText("results-label",       T("resultsLabel"));
  setText("export-csv-text",     T("exportCsv"));
  setText("export-json-text",    T("exportJson"));
  setText("select-all-text",     T("selectAll"));
  setText("map-hint-text",       T("mapHint"));
  setText("footer-text",         T("footer"));
  setText("modal-title-text",    T("modalTitle"));
  setText("modal-dl-csv-text",   T("modalDlCsv"));
  setText("modal-dl-json-text",  T("modalDlJson"));
  setText("modal-cancel-text",   T("modalCancel"));

  setPlaceholder("text-filter-input", T("filterPlaceholder"));
  setPlaceholder("keyword-input",     T("keywordPlaceholder"));

  // Lang button
  var lbEl = document.querySelector("#lang-btn .lang-text");
  if (lbEl) { lbEl.textContent = T("langBtn"); }

  // Has-field labels — find the span inside each label
  var hasCats = ["has-phone-label","has-website-label","has-email-label","has-hours-label"];
  var hasKeys = ["hasPhone","hasWebsite","hasEmail","hasHours"];
  for (var i = 0; i < hasCats.length; i++) {
    var labelEl = el(hasCats[i]);
    if (labelEl) {
      var spanEl = labelEl.querySelector("span");
      if (spanEl) { spanEl.textContent = T(hasKeys[i]); }
    }
  }

  // Chip labels
  var chips = document.querySelectorAll(".chip");
  for (var ci = 0; ci < chips.length; ci++) {
    var cat = chips[ci].dataset.cat;
    if (cat && TR[currentLang].chips[cat]) {
      chips[ci].textContent = TR[currentLang].chips[cat];
    }
  }

  applyFilters();
  updateStatusText();
}

// ─── Map Init ────────────────────────────────────────────────
function initMap() {
  if (typeof L === "undefined") {
    console.error("Leaflet not loaded!");
    return;
  }
  try {
    map = L.map("map", { center:[35.6997,51.3380], zoom:13, zoomControl:false });
    L.control.zoom({ position:"bottomright" }).addTo(map);
    switchTiles("google");

    map.on("move", function() {
      var c = map.getCenter();
      setText("coordinates-display", c.lat.toFixed(4) + "° N, " + c.lng.toFixed(4) + "° E");
      if (radiusCir) { radiusCir.setLatLng(c); }
    });

    map.on("zoomend moveend", function() {
      setText("map-zoom-info", "zoom: " + map.getZoom());
      if (fBounds || fRadius !== "unlimited") { applyFilters(); }
    });

    // Force Leaflet to recalculate container size
    setTimeout(function() { if (map) { map.invalidateSize(); } }, 400);
  } catch(e) {
    console.error("Map init failed:", e);
  }
}

function switchTiles(key) {
  var p = TILES[key];
  if (!p || !map) { return; }
  try {
    if (tileLayer) { map.removeLayer(tileLayer); tileLayer = null; }
    tileLayer = L.tileLayer(p.url, p.opts).addTo(map);
    activeProvider = key;
    updateStatusText();
  } catch(e) {
    console.error("Tile layer error:", e);
  }
}

// ─── Overpass Search ─────────────────────────────────────────
function doSearch() {
  if (isSearching || !map) { return; }
  isSearching = true;
  setSearchBtnState(true);
  var hintEl = el("map-hint");
  if (hintEl) { hintEl.classList.add("hidden"); }
  setStatus("searching", 0);

  var center  = map.getCenter();
  var bounds  = map.getBounds();
  var sw      = bounds.getSouthWest();
  var ne      = bounds.getNorthEast();
  var bbox    = sw.lat + "," + sw.lng + "," + ne.lat + "," + ne.lng;
  var kwEl    = el("keyword-input");
  var keyword = kwEl ? kwEl.value.trim() : "";

  var tagFilter;
  if (keyword) {
    tagFilter = '[name~"' + keyword + '",i]';
  } else {
    var parts  = activeOsm.split("=");
    tagFilter  = '["' + parts[0] + '"="' + parts[1] + '"]';
  }

  var geoFilter;
  if (fRadius !== "unlimited") {
    geoFilter = "(around:" + parseInt(fRadius) + "," + center.lat + "," + center.lng + ")";
  } else {
    geoFilter = "(" + bbox + ")";
  }

  var query = "[out:json][timeout:25];" +
    "(node" + tagFilter + geoFilter + ";" +
    "way"  + tagFilter + geoFilter + ";" +
    "relation" + tagFilter + geoFilter + ";);out center;";

  fetch("https://overpass-api.de/api/interpreter", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: "data=" + encodeURIComponent(query),
  })
  .then(function(res) {
    if (!res.ok) { throw new Error("HTTP " + res.status); }
    return res.json();
  })
  .then(function(data) {
    isLive     = true;
    allBiz     = parseResults(data.elements || [], center);
    checkedIds = {};
    var cbEl   = el("select-all-checkbox");
    if (cbEl) { cbEl.checked = false; }
    setStatus("done", allBiz.length);
    applyFilters();
  })
  .catch(function(err) {
    console.error("Search error:", err);
    setStatus("error", 0);
    renderList([]);
  })
  .finally(function() {
    isSearching = false;
    setSearchBtnState(false);
  });
}

// ─── Parse Overpass Results ───────────────────────────────────
function parseResults(elements, center) {
  var out = [];
  var idN = 1;
  for (var i = 0; i < elements.length; i++) {
    var el2  = elements[i];
    var lat, lng;
    if (el2.type === "node") {
      lat = el2.lat; lng = el2.lon;
    } else if (el2.center) {
      lat = el2.center.lat; lng = el2.center.lon;
    } else {
      continue;
    }
    var tags = el2.tags || {};
    var name = tags.name || tags["name:fa"] || tags["name:en"];
    if (!name) { continue; }

    var cat = "other";
    var osmKeys = Object.keys(OSM_TO_CAT);
    for (var j = 0; j < osmKeys.length; j++) {
      var osmParts = osmKeys[j].split("=");
      if (tags[osmParts[0]] === osmParts[1]) { cat = OSM_TO_CAT[osmKeys[j]]; break; }
    }

    var addrParts = [];
    if (tags["addr:street"])    { addrParts.push(tags["addr:street"]); }
    if (tags["addr:housenumber"]){ addrParts.push(tags["addr:housenumber"]); }
    if (tags["addr:suburb"])    { addrParts.push(tags["addr:suburb"]); }
    if (tags["addr:city"] || tags["addr:district"]) { addrParts.push(tags["addr:city"] || tags["addr:district"]); }
    var address = addrParts.join("، ") || tags["addr:full"] || "";

    out.push({
      id:       idN++,
      osmId:    el2.type + "/" + el2.id,
      name:     String(name),
      category: cat,
      rating:   parseFloat(tags.stars || tags.rating || 0) || 0,
      phone:    String(tags.phone || tags["contact:phone"] || ""),
      website:  String(tags.website || tags["contact:website"] || tags.url || ""),
      email:    String(tags.email || tags["contact:email"] || ""),
      address:  String(address),
      hours:    String(tags.opening_hours || ""),
      coords:   [lat, lng],
      distance: distM(center.lat, center.lng, lat, lng),
    });
  }
  return out;
}

// ─── Filter & Sort ───────────────────────────────────────────
function applyFilters() {
  var res = allBiz.slice();

  if (fText) {
    var q = fText.toLowerCase();
    res = res.filter(function(b) {
      return b.name.toLowerCase().indexOf(q) >= 0 ||
             b.address.toLowerCase().indexOf(q) >= 0 ||
             b.phone.indexOf(q) >= 0 ||
             b.website.toLowerCase().indexOf(q) >= 0;
    });
  }
  if (fRating > 0)  { res = res.filter(function(b) { return b.rating >= fRating; }); }
  if (fPhone)       { res = res.filter(function(b) { return !!b.phone; }); }
  if (fWebsite)     { res = res.filter(function(b) { return !!b.website; }); }
  if (fEmail)       { res = res.filter(function(b) { return !!b.email; }); }
  if (fHours)       { res = res.filter(function(b) { return !!b.hours; }); }

  if (fBounds && map) {
    var bnds = map.getBounds();
    res = res.filter(function(b) { return bnds.contains(L.latLng(b.coords)); });
  }
  if (fRadius !== "unlimited" && map) {
    var mc = map.getCenter();
    var r  = parseInt(fRadius);
    res = res.filter(function(b) { return distM(mc.lat, mc.lng, b.coords[0], b.coords[1]) <= r; });
  }

  if (fSort === "name") {
    res.sort(function(a, b) { return a.name.localeCompare(b.name, currentLang); });
  } else if (fSort === "rating-desc") {
    res.sort(function(a, b) { return b.rating - a.rating; });
  } else if (fSort === "distance") {
    res.sort(function(a, b) { return a.distance - b.distance; });
  }

  filteredBiz = res;
  updateRadiusCircle();
  renderList(filteredBiz);
  setBadge(filteredBiz.length);
  updateSelectedCount();
  try { updateMarkers(filteredBiz); } catch(e) { console.warn("Marker error:", e); }
}

// ─── Render List ─────────────────────────────────────────────
function renderList(list) {
  var cont = el("business-list");
  if (!cont) { return; }
  cont.innerHTML = "";

  if (!list || list.length === 0) {
    if (allBiz.length === 0) {
      cont.innerHTML = '<div class="no-results-msg"><span class="no-results-icon">\uD83D\uDD0D</span><div>' + esc(T("noResults")) + '</div><div style="font-size:.7rem;margin-top:.4rem;opacity:.6">' + esc(T("noResultsHint")) + '</div></div>';
    } else {
      cont.innerHTML = '<div class="no-results-msg"><span class="no-results-icon">\uD83D\uDEAB</span><div>' + esc(T("noResults")) + '</div></div>';
    }
    return;
  }

  var frag = document.createDocumentFragment();
  var rendered = 0;
  for (var i = 0; i < list.length; i++) {
    try {
      var card = makeCard(list[i]);
      if (card) { frag.appendChild(card); rendered++; }
    } catch(e) {
      console.warn("Card error:", list[i] ? list[i].name : "?", e);
    }
  }
  cont.appendChild(frag);
  if (rendered === 0 && list.length > 0) {
    cont.innerHTML = '<div class="no-results-msg"><span class="no-results-icon">\u26A0\uFE0F</span><div>خطا در نمایش نتایج</div></div>';
  }
}

// ─── Make Card ───────────────────────────────────────────────
function makeCard(biz) {
  var cat      = biz.category || "other";
  var catLabel = (TR[currentLang].cats[cat]) || cat;
  var color    = CAT_COLOR[cat] || CAT_COLOR.other;
  var isChk    = !!checkedIds[biz.id];

  var card = document.createElement("div");
  card.className = "business-item" + (isChk ? " checked" : "");
  card.setAttribute("data-id", biz.id);

  var details = "";
  if (biz.address) { details += '<div class="biz-detail-row"><span class="biz-detail-icon">\uD83D\uDCCD</span><span class="biz-detail-val">' + esc(biz.address) + '</span></div>'; }
  if (biz.phone)   { details += '<div class="biz-detail-row"><span class="biz-detail-icon">\uD83D\uDCDE</span><span class="biz-detail-val">' + esc(biz.phone) + '</span></div>'; }
  if (biz.website) {
    var dUrl = biz.website.replace(/^https?:\/\//,"").replace(/\/$/,"");
    details += '<div class="biz-detail-row"><span class="biz-detail-icon">\uD83C\uDF10</span><a class="biz-website-link biz-detail-val" href="' + esc(biz.website) + '" target="_blank" rel="noopener">' + esc(dUrl) + '</a></div>';
  }
  if (biz.email)   { details += '<div class="biz-detail-row"><span class="biz-detail-icon">\u2709\uFE0F</span><span class="biz-detail-val">' + esc(biz.email) + '</span></div>'; }
  if (biz.hours)   { details += '<div class="biz-detail-row"><span class="biz-detail-icon">\u23F0</span><span class="biz-detail-val">' + esc(biz.hours) + '</span></div>'; }

  var ratingHtml = biz.rating
    ? '\u2605 <span class="biz-rating-num">' + biz.rating.toFixed(1) + '</span>'
    : '<span style="opacity:.35">—</span>';

  var copyBtn = biz.phone
    ? '<button class="biz-action-btn copy-btn" data-copy="' + esc(biz.phone) + '">' + T("copy") + ' \uD83D\uDCDE</button>'
    : "";

  card.innerHTML =
    '<div class="biz-checkbox-wrap">' +
      '<input type="checkbox" class="biz-checkbox" data-id="' + biz.id + '"' + (isChk ? ' checked' : '') + ' title="انتخاب">' +
    '</div>' +
    '<div class="biz-header">' +
      '<span class="biz-name">' + esc(biz.name) + '</span>' +
      '<span class="biz-category ' + cat + '" style="border:1px solid ' + color + '30;color:' + color + ';background:' + color + '14;">' + esc(catLabel) + '</span>' +
    '</div>' +
    (details ? '<div class="biz-details">' + details + '</div>' : '') +
    '<div class="biz-meta">' +
      '<span class="biz-rating">' + ratingHtml + '</span>' +
      '<div class="biz-actions">' + copyBtn +
        '<button class="biz-action-btn locate-btn">\uD83D\uDDFA\uFE0F ' + T("locate") + '</button>' +
      '</div>' +
    '</div>';

  // Checkbox
  var cbEl = card.querySelector(".biz-checkbox");
  if (cbEl) {
    cbEl.addEventListener("change", function(e) {
      e.stopPropagation();
      if (e.target.checked) { checkedIds[biz.id] = true;  card.classList.add("checked"); }
      else                  { checkedIds[biz.id] = false; card.classList.remove("checked"); }
      updateSelectedCount();
      syncSelectAll();
    });
  }

  // Locate button
  var locEl = card.querySelector(".locate-btn");
  if (locEl) {
    locEl.addEventListener("click", function(e) {
      e.stopPropagation();
      flyTo(biz);
    });
  }

  // Copy button
  var cpEl = card.querySelector(".copy-btn");
  if (cpEl) {
    cpEl.addEventListener("click", function(e) {
      e.stopPropagation();
      var self = this;
      var val = self.getAttribute("data-copy");
      if (navigator.clipboard) {
        navigator.clipboard.writeText(val).then(function() {
          var orig = self.textContent;
          self.textContent = T("copied");
          setTimeout(function() { self.textContent = orig; }, 1500);
        }).catch(function() {});
      }
    });
  }

  // Card click
  card.addEventListener("click", function() { flyTo(biz); });
  return card;
}

// ─── Fly to Marker ───────────────────────────────────────────
function flyTo(biz) {
  var cards = document.querySelectorAll(".business-item");
  for (var i = 0; i < cards.length; i++) {
    var cardId = parseInt(cards[i].getAttribute("data-id"));
    if (cardId === biz.id) { cards[i].classList.add("selected"); }
    else                   { cards[i].classList.remove("selected"); }
  }
  if (!map) { return; }
  map.flyTo(biz.coords, Math.max(map.getZoom(), 16), { duration:0.8 });
  for (var j = 0; j < mapMarkers.length; j++) {
    if (mapMarkers[j]._bizId === biz.id) {
      (function(m) { setTimeout(function() { m.openPopup(); }, 850); })(mapMarkers[j]);
      break;
    }
  }
}

// ─── Markers ─────────────────────────────────────────────────
function updateMarkers(list) {
  if (!map) { return; }
  for (var i = 0; i < mapMarkers.length; i++) {
    try { map.removeLayer(mapMarkers[i]); } catch(e) {}
  }
  mapMarkers = [];

  for (var i2 = 0; i2 < list.length; i2++) {
    var biz    = list[i2];
    var color  = CAT_COLOR[biz.category] || CAT_COLOR.other;
    var catLbl = TR[currentLang].cats[biz.category] || biz.category;

    var pin = L.divIcon({
      html: '<div style="background:' + color + ';width:24px;height:24px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);border:2px solid rgba(255,255,255,.8);box-shadow:0 3px 10px rgba(0,0,0,.35);display:flex;align-items:center;justify-content:center"><div style="transform:rotate(45deg);font-size:.65rem">\uD83D\uDCCD</div></div>',
      iconSize:[24,24], iconAnchor:[12,24], popupAnchor:[0,-26], className:"",
    });

    var popRows = "";
    if (biz.address) { popRows += '<div class="popup-row"><span class="popup-icon">\uD83D\uDCCD</span><span>' + esc(biz.address) + '</span></div>'; }
    if (biz.phone)   { popRows += '<div class="popup-row"><span class="popup-icon">\uD83D\uDCDE</span><span>' + esc(biz.phone) + '</span></div>'; }
    if (biz.website) { popRows += '<div class="popup-row"><span class="popup-icon">\uD83C\uDF10</span><a class="popup-website" href="' + esc(biz.website) + '" target="_blank" rel="noopener">' + esc(biz.website.replace(/^https?:\/\//,"")) + '</a></div>'; }
    if (biz.hours)   { popRows += '<div class="popup-row"><span class="popup-icon">\u23F0</span><span>' + esc(biz.hours) + '</span></div>'; }

    var popup =
      '<div class="popup-biz-container">' +
        '<div class="popup-title">' + esc(biz.name) + '</div>' +
        '<div class="popup-meta">' +
          (biz.rating ? '<span class="popup-rating">\u2605 ' + biz.rating.toFixed(1) + '</span>' : '') +
          '<span class="popup-category" style="background:' + color + '18;color:' + color + ';border:1px solid ' + color + '30">' + esc(catLbl) + '</span>' +
        '</div>' +
        (popRows ? '<div class="popup-divider"></div>' + popRows : '') +
      '</div>';

    var m = L.marker(biz.coords, { icon:pin }).addTo(map);
    m._bizId = biz.id;
    m.bindPopup(popup, { maxWidth:280 });
    mapMarkers.push(m);
  }
}

// ─── Radius Circle ───────────────────────────────────────────
function updateRadiusCircle() {
  if (!map) { return; }
  if (fRadius === "unlimited") {
    if (radiusCir) { try { map.removeLayer(radiusCir); } catch(e){} radiusCir = null; }
  } else {
    var r = parseInt(fRadius);
    if (!radiusCir) {
      radiusCir = L.circle(map.getCenter(), { radius:r, color:"#6366f1", fillColor:"#6366f1", fillOpacity:.07, weight:1.5, dashArray:"6 4" }).addTo(map);
    } else {
      radiusCir.setLatLng(map.getCenter());
      radiusCir.setRadius(r);
    }
  }
}

// ─── UI Helpers ──────────────────────────────────────────────
function setBadge(n) { setText("results-count", n); }

function updateSelectedCount() {
  var n   = checkedCount();
  var sel = el("selected-count-text");
  if (!sel) { return; }
  if (n > 0) {
    sel.textContent = n + " " + (currentLang === "fa" ? "انتخاب شده" : "selected");
  } else {
    sel.textContent = "";
  }
}

function syncSelectAll() {
  var cb = el("select-all-checkbox");
  if (!cb || filteredBiz.length === 0) { if (cb) { cb.checked = false; cb.indeterminate = false; } return; }
  var allChk  = filteredBiz.every(function(b) { return !!checkedIds[b.id]; });
  var someChk = filteredBiz.some(function(b)  { return !!checkedIds[b.id]; });
  cb.checked = allChk;
  cb.indeterminate = !allChk && someChk;
}

var currentStatusType = "ready";
var currentStatusCount = 0;

function updateStatusText() {
  setStatus(currentStatusType, currentStatusCount);
}

function setStatus(type, n) {
  var dot  = el("status-dot");
  var text = el("status-text");
  if (!dot || !text) { return; }
  dot.className = "status-dot";
  currentStatusType = type;
  currentStatusCount = n;

  var mapName = "";
  if (activeProvider === "google")       { mapName = "Google Maps"; }
  else if (activeProvider === "neshan") { mapName = "Neshan Map"; }
  else if (activeProvider === "balad")  { mapName = "Balad Map"; }
  var suffix = " (" + mapName + ")";

  if (type === "ready")     { dot.classList.add("green"); text.textContent = T("statusReady") + suffix; }
  if (type === "searching") { dot.classList.add("amber"); text.textContent = T("statusSearching") + suffix; }
  if (type === "done")      { dot.classList.add("green"); text.textContent = n + " " + T("statusDone") + suffix; }
  if (type === "error")     { dot.classList.add("red");   text.textContent = T("statusError") + suffix; }
}

function setSearchBtnState(on) {
  var btn     = el("search-btn");
  var spinner = el("search-spinner");
  var btnTxt  = el("search-btn-text");
  if (!btn) { return; }
  btn.disabled = on;
  if (spinner) { spinner.style.display = on ? "block" : "none"; }
  if (btnTxt)  { btnTxt.textContent    = on ? T("searching") : T("searchBtn"); }
  if (on) { showSkeletons(); }
}

function showSkeletons() {
  var cont = el("business-list");
  if (!cont) { return; }
  var html = "";
  for (var i = 0; i < 4; i++) {
    html += '<div class="skeleton-item"><div class="skeleton-line s-title"></div><div class="skeleton-line s-sub"></div><div class="skeleton-line s-sub2"></div></div>';
  }
  cont.innerHTML = html;
}

// ─── Export ──────────────────────────────────────────────────
function getExportData() {
  var src = (filteredBiz && filteredBiz.length > 0) ? filteredBiz : allBiz;
  var anyChecked = filteredBiz.some(function(b) { return !!checkedIds[b.id]; });
  if (anyChecked) { return src.filter(function(b) { return !!checkedIds[b.id]; }); }
  return src;
}

function buildCSV(data) {
  var headers = TR[currentLang].csvHeaders;
  var rows = data.map(function(b) {
    return [
      b.id,
      '"' + b.name.replace(/"/g,'""') + '"',
      TR[currentLang].cats[b.category] || b.category,
      b.rating || "",
      '"' + b.phone.replace(/"/g,'""') + '"',
      '"' + b.website.replace(/"/g,'""') + '"',
      '"' + b.email.replace(/"/g,'""') + '"',
      '"' + b.address.replace(/"/g,'""') + '"',
      '"' + b.hours.replace(/"/g,'""') + '"',
      b.coords[0], b.coords[1], b.osmId,
    ].join(",");
  });
  return "\ufeff" + headers.join(",") + "\n" + rows.join("\n");
}

function triggerDownload(blob, name) {
  var url  = URL.createObjectURL(blob);
  var a    = document.createElement("a");
  a.href   = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(function() { URL.revokeObjectURL(url); }, 1000);
}

function openModal() {
  var data  = getExportData();
  var stats = el("modal-stats");
  if (stats) {
    stats.innerHTML =
      '<span class="modal-stat"><span>' + T("statTotal") + '</span><strong>' + data.length + '</strong></span>' +
      '<span class="modal-stat"><span>' + T("statPhone") + '</span><strong>' + data.filter(function(b){return !!b.phone;}).length + '</strong></span>' +
      '<span class="modal-stat"><span>' + T("statWebsite") + '</span><strong>' + data.filter(function(b){return !!b.website;}).length + '</strong></span>' +
      '<span class="modal-stat"><span>' + T("statEmail") + '</span><strong>' + data.filter(function(b){return !!b.email;}).length + '</strong></span>';
  }
  var thead = el("csv-thead");
  var tbody = el("csv-tbody");
  if (thead) { thead.innerHTML = "<tr>" + TR[currentLang].csvHeaders.map(function(h){ return "<th>" + esc(h) + "</th>"; }).join("") + "</tr>"; }
  if (tbody) {
    tbody.innerHTML = "";
    var preview = data.slice(0,30);
    for (var i = 0; i < preview.length; i++) {
      var b  = preview[i];
      var tr2 = document.createElement("tr");
      var vals = [b.id,b.name,TR[currentLang].cats[b.category]||b.category,b.rating||"",b.phone,b.website,b.email,b.address,b.hours,b.coords[0].toFixed(5),b.coords[1].toFixed(5),b.osmId];
      tr2.innerHTML = vals.map(function(v){ return '<td title="' + esc(String(v||"")) + '">' + esc(String(v||"")) + '</td>'; }).join("");
      tbody.appendChild(tr2);
    }
  }
  var dlCsv  = el("modal-download-csv");
  var dlJson = el("modal-download-json");
  if (dlCsv)  { dlCsv._exportData  = data; }
  if (dlJson) { dlJson._exportData = data; }

  var modal = el("csv-modal");
  if (modal) { modal.classList.add("open"); }
}

function closeModal() {
  var modal = el("csv-modal");
  if (modal) { modal.classList.remove("open"); }
}

// ─── Event Setup ─────────────────────────────────────────────
function setupEvents() {
  // Lang button
  var langBtn = el("lang-btn");
  if (langBtn) {
    langBtn.addEventListener("click", function() {
      setLang(currentLang === "fa" ? "en" : "fa");
    });
  }

  // Provider tabs
  var tabs = document.querySelectorAll(".provider-tab");
  for (var ti = 0; ti < tabs.length; ti++) {
    tabs[ti].addEventListener("click", function() {
      var allTabs = document.querySelectorAll(".provider-tab");
      for (var k = 0; k < allTabs.length; k++) { allTabs[k].classList.remove("active"); }
      this.classList.add("active");
      switchTiles(this.getAttribute("data-provider"));
    });
  }

  // Search button
  var searchBtn = el("search-btn");
  if (searchBtn) { searchBtn.addEventListener("click", doSearch); }

  // Keyword Enter
  var kwInp = el("keyword-input");
  if (kwInp) { kwInp.addEventListener("keydown", function(e) { if (e.key === "Enter") { doSearch(); } }); }

  // Category chips
  var chipEls = document.querySelectorAll(".chip");
  for (var ci2 = 0; ci2 < chipEls.length; ci2++) {
    chipEls[ci2].addEventListener("click", function() {
      var allChips = document.querySelectorAll(".chip");
      for (var c = 0; c < allChips.length; c++) { allChips[c].classList.remove("active"); }
      this.classList.add("active");
      activeOsm = this.getAttribute("data-osm");
      var kwEl2 = el("keyword-input");
      if (kwEl2) { kwEl2.value = ""; }
    });
  }

  // Text filter
  var tfInp = el("text-filter-input");
  if (tfInp) { tfInp.addEventListener("input", function(e) { fText = e.target.value; applyFilters(); }); }

  // Stars
  var starBtns = document.querySelectorAll(".star-btn");
  for (var si = 0; si < starBtns.length; si++) {
    starBtns[si].addEventListener("mouseenter", function() {
      var v = parseInt(this.getAttribute("data-rating"));
      var sbs = document.querySelectorAll(".star-btn");
      for (var s = 0; s < sbs.length; s++) { sbs[s].classList.toggle("highlight", parseInt(sbs[s].getAttribute("data-rating")) <= v); }
    });
    starBtns[si].addEventListener("mouseleave", function() {
      var sbs = document.querySelectorAll(".star-btn");
      for (var s = 0; s < sbs.length; s++) { sbs[s].classList.remove("highlight"); }
    });
    starBtns[si].addEventListener("click", function() {
      var v = parseInt(this.getAttribute("data-rating"));
      if (fRating === v) { fRating = 0; }
      else               { fRating = v; }
      var sbs = document.querySelectorAll(".star-btn");
      for (var s = 0; s < sbs.length; s++) {
        sbs[s].classList.toggle("active", parseInt(sbs[s].getAttribute("data-rating")) <= fRating);
      }
      applyFilters();
    });
  }

  // Has-field checkboxes
  var hpEl = el("has-phone");    if (hpEl) { hpEl.addEventListener("change", function(e) { fPhone   = e.target.checked; applyFilters(); }); }
  var hwEl = el("has-website");  if (hwEl) { hwEl.addEventListener("change", function(e) { fWebsite = e.target.checked; applyFilters(); }); }
  var heEl = el("has-email");    if (heEl) { heEl.addEventListener("change", function(e) { fEmail   = e.target.checked; applyFilters(); }); }
  var hhEl = el("has-hours");    if (hhEl) { hhEl.addEventListener("change", function(e) { fHours   = e.target.checked; applyFilters(); }); }

  // Bounds
  var btEl = el("bounds-toggle");
  if (btEl) { btEl.addEventListener("change", function(e) { fBounds = e.target.checked; applyFilters(); }); }

  // Radius
  var rsEl = el("radius-select");
  if (rsEl) { rsEl.addEventListener("change", function(e) { fRadius = e.target.value; applyFilters(); }); }

  // Sort
  var ssEl = el("sort-select");
  if (ssEl) { ssEl.addEventListener("change", function(e) { fSort = e.target.value; applyFilters(); }); }

  // Clear filters
  var cfBtn = el("clear-filters-btn");
  if (cfBtn) {
    cfBtn.addEventListener("click", function() {
      fText = ""; fRating = 0;
      fPhone = false; fWebsite = false; fEmail = false; fHours = false;
      fBounds = false; fRadius = "unlimited"; fSort = "default";
      var tfi = el("text-filter-input"); if (tfi) { tfi.value = ""; }
      var rsi = el("radius-select");     if (rsi) { rsi.value = "unlimited"; }
      var ssi = el("sort-select");       if (ssi) { ssi.value = "default"; }
      var bti = el("bounds-toggle");     if (bti) { bti.checked = false; }
      var hpi = el("has-phone");         if (hpi) { hpi.checked = false; }
      var hwi = el("has-website");       if (hwi) { hwi.checked = false; }
      var hei = el("has-email");         if (hei) { hei.checked = false; }
      var hhi = el("has-hours");         if (hhi) { hhi.checked = false; }
      var starB = document.querySelectorAll(".star-btn");
      for (var s = 0; s < starB.length; s++) { starB[s].classList.remove("active"); }
      applyFilters();
    });
  }

  // Select All
  var saEl = el("select-all-checkbox");
  if (saEl) {
    saEl.addEventListener("change", function(e) {
      for (var i = 0; i < filteredBiz.length; i++) {
        checkedIds[filteredBiz[i].id] = e.target.checked;
      }
      renderList(filteredBiz);
      updateSelectedCount();
    });
  }

  // Export CSV
  var ecBtn = el("export-csv-btn");
  if (ecBtn) { ecBtn.addEventListener("click", openModal); }

  // Export JSON
  var ejBtn = el("export-json-btn");
  if (ejBtn) {
    ejBtn.addEventListener("click", function() {
      var data = getExportData();
      var json = data.map(function(b) {
        return { id:b.id, osmId:b.osmId, name:b.name, category:b.category, rating:b.rating, phone:b.phone, website:b.website, email:b.email, address:b.address, opening_hours:b.hours, latitude:b.coords[0], longitude:b.coords[1] };
      });
      triggerDownload(new Blob([JSON.stringify(json,null,2)],{type:"application/json;charset=utf-8"}), "bizfinder_" + Date.now() + ".json");
    });
  }

  // Modal close
  var mcBtn = el("modal-close-btn");
  if (mcBtn) { mcBtn.addEventListener("click", closeModal); }
  var mcnBtn = el("modal-cancel");
  if (mcnBtn) { mcnBtn.addEventListener("click", closeModal); }
  var modalEl = el("csv-modal");
  if (modalEl) { modalEl.addEventListener("click", function(e) { if (e.target === modalEl) { closeModal(); } }); }

  // Modal download CSV
  var mdcEl = el("modal-download-csv");
  if (mdcEl) {
    mdcEl.addEventListener("click", function() {
      var data = this._exportData || getExportData();
      triggerDownload(new Blob([buildCSV(data)],{type:"text/csv;charset=utf-8"}), "bizfinder_" + Date.now() + ".csv");
      closeModal();
    });
  }

  // Modal download JSON
  var mdjEl = el("modal-download-json");
  if (mdjEl) {
    mdjEl.addEventListener("click", function() {
      var data = this._exportData || getExportData();
      var json = data.map(function(b) {
        return { id:b.id, name:b.name, category:b.category, phone:b.phone, website:b.website, email:b.email, address:b.address, latitude:b.coords[0], longitude:b.coords[1] };
      });
      triggerDownload(new Blob([JSON.stringify(json,null,2)],{type:"application/json;charset=utf-8"}), "bizfinder_" + Date.now() + ".json");
      closeModal();
    });
  }

  // Keyboard
  document.addEventListener("keydown", function(e) { if (e.key === "Escape") { closeModal(); } });
}

// ─── Boot ────────────────────────────────────────────────────
window.addEventListener("DOMContentLoaded", function() {
  initMap();
  setupEvents();
  setLang("fa");
});
