// Multi-language Translations Database
const translations = {
    fa: {
        "page-title": "داشبورد بومی‌سازی نقشه | Map Localization Dashboard",
        "app-heading": "سامانه مکان‌یاب",
        "lang-btn-text": "English",
        "provider-title": "انتخاب سرویس نقشه",
        "filter-title": "جستجو و فیلتر کسب‌وکارها",
        "search-placeholder": "نام کسب‌وکار یا آدرس را جستجو کنید...",
        "cat-all": "همه",
        "cat-restaurant": "رستوران",
        "cat-cafe": "کافه",
        "cat-hospital": "بیمارستان",
        "rating-label": "حداقل امتیاز:",
        "clear-filters": "پاک کردن فیلترها",
        "results-title": "نتایج جستجو",
        "results-count-singular": "{count} نتیجه",
        "results-count-plural": "{count} نتیجه",
        "footer-text": "نسخه دمو بومی‌سازی خدمات نقشه ایران",
        "status-active-provider": "موتور نقشه فعال: {provider}",
        "phone-label": "تلفن: ",
        "address-label": "آدرس: ",
        "no-results": "هیچ کسب‌وکاری با مشخصات فیلتر شده پیدا نشد.",
        "locate-btn": "نمایش روی نقشه",
        "map-bounds-label": "جستجو فقط در محدوده نقشه",
        "radius-label-select": "شعاع جستجو:",
        "radius-unlimited": "نامحدود",
        "export-csv-btn": "خروجی CSV",
        "export-json-btn": "خروجی JSON",
        "categories": {
            "restaurant": "رستوران",
            "cafe": "کافه",
            "hospital": "بیمارستان"
        }
    },
    en: {
        "page-title": "Map Localization Dashboard",
        "app-heading": "Business Locator",
        "lang-btn-text": "فارسی",
        "provider-title": "Map Provider",
        "filter-title": "Search & Filters",
        "search-placeholder": "Search business name or address...",
        "cat-all": "All",
        "cat-restaurant": "Restaurants",
        "cat-cafe": "Cafes",
        "cat-hospital": "Hospitals",
        "rating-label": "Min Rating:",
        "clear-filters": "Clear Filters",
        "results-title": "Search Results",
        "results-count-singular": "{count} result",
        "results-count-plural": "{count} results",
        "footer-text": "Iran Map Services Localization Demo",
        "status-active-provider": "Active Map Engine: {provider}",
        "phone-label": "Tel: ",
        "address-label": "Address: ",
        "no-results": "No businesses found matching current filters.",
        "locate-btn": "Show on Map",
        "map-bounds-label": "Limit search to map view",
        "radius-label-select": "Search Radius:",
        "radius-unlimited": "Unlimited",
        "export-csv-btn": "Export CSV",
        "export-json-btn": "Export JSON",
        "categories": {
            "restaurant": "Restaurant",
            "cafe": "Cafe",
            "hospital": "Hospital"
        }
    }
};

// Mock Businesses Database (Tehran area)
const businesses = [
    {
        id: 1,
        name: {
            fa: "رستوران سنتی نایب (تجریش)",
            en: "Nayeb Traditional Restaurant (Tajrish)"
        },
        category: "restaurant",
        rating: 4.5,
        phone: "021-22712679",
        address: {
            fa: "تهران، میدان تجریش، خیابان شهرداری",
            en: "Shahrdari St, Tajrish Square, Tehran"
        },
        description: {
            fa: "کباب‌های سنتی ایرانی با کیفیت برتر در فضایی مجلل و تاریخی.",
            en: "Premium traditional Persian kebabs in a luxurious and historic ambiance."
        },
        coords: [35.8073, 51.4283]
    },
    {
        id: 2,
        name: {
            fa: "کافه اسپرسو (برج میلاد)",
            en: "Espresso Cafe (Milad Tower)"
        },
        category: "cafe",
        rating: 4.8,
        phone: "021-88620310",
        address: {
            fa: "تهران، بزرگراه همت، ورودی برج میلاد",
            en: "Milad Tower Entrance, Hemmat Expressway, Tehran"
        },
        description: {
            fa: "چشم‌انداز ۳۶۰ درجه از پایتخت همراه با نوشیدنی‌های باکیفیت و عصرانه‌های مدرن.",
            en: "360-degree panoramic view of the capital with premium coffee and modern snacks."
        },
        coords: [35.7448, 51.3753]
    },
    {
        id: 3,
        name: {
            fa: "بیمارستان فوق تخصصی میلاد",
            en: "Milad Specialty Hospital"
        },
        category: "hospital",
        rating: 4.2,
        phone: "021-88062000",
        address: {
            fa: "تهران، بزرگراه همت، خروجی اختصاصی بیمارستان میلاد",
            en: "Milad Hospital Exit, Hemmat Expressway, Tehran"
        },
        description: {
            fa: "بزرگترین بیمارستان تخصصی کشور با بخش‌های پیشرفته درمانی.",
            en: "The largest specialty hospital in the country with advanced medical departments."
        },
        coords: [35.7483, 51.3693]
    },
    {
        id: 4,
        name: {
            fa: "رستوران لوکس دیوان (فرشته)",
            en: "Divan Luxury Restaurant (Fereshteh)"
        },
        category: "restaurant",
        rating: 4.7,
        phone: "021-26201320",
        address: {
            fa: "تهران، خیابان فرشته، مرکز خرید سام سنتر",
            en: "Sam Center Mall, Fereshteh St, Tehran"
        },
        description: {
            fa: "تلفیقی هنرمندانه از غذاهای سنتی ایرانی در قالب دیزاین مدرن و شیک.",
            en: "An artistic fusion of traditional Persian food designed in modern, stylish plating."
        },
        coords: [35.7958, 51.4215]
    },
    {
        id: 5,
        name: {
            fa: "سام کافه (مرکز خرید سنا)",
            en: "Sam Cafe (Sana Mall)"
        },
        category: "cafe",
        rating: 4.6,
        phone: "021-22709270",
        address: {
            fa: "تهران، بلوار اندرزگو، مرکز خرید سنا، طبقه اول",
            en: "1st Floor, Sana Shopping Center, Andarzgoo Blvd, Tehran"
        },
        description: {
            fa: "دانه‌های قهوه برشته شده توسط کارگاه اختصاصی و شیرینی‌های گرم دست‌ساز.",
            en: "In-house roasted coffee beans and fresh handmade warm pastries."
        },
        coords: [35.7981, 51.4325]
    },
    {
        id: 6,
        name: {
            fa: "بیمارستان و مرکز پزشکی گاندی",
            en: "Gandhi Hospital & Medical Center"
        },
        category: "hospital",
        rating: 4.0,
        phone: "021-88191000",
        address: {
            fa: "تهران، خیابان گاندی، نبش کوچه ترابنده",
            en: "Corner of Tarabandeh St, Gandhi St, Tehran"
        },
        description: {
            fa: "نخستین هتل‌بیمارستان ایران مجهز به پیشرفته‌ترین تجهیزات جراحی.",
            en: "Iran's first hotel-hospital equipped with advanced surgical tools."
        },
        coords: [35.7533, 51.4110]
    },
    {
        id: 7,
        name: {
            fa: "رستوران شاندیز جردن (گلستان)",
            en: "Shandiz Jordan Restaurant (Golestan)"
        },
        category: "restaurant",
        rating: 4.4,
        phone: "021-22054848",
        address: {
            fa: "تهران، بلوار آفریقا (جردن)، خیابان گلستان",
            en: "Golestan St, Africa Blvd (Jordan), Tehran"
        },
        description: {
            fa: "معروف‌ترین ششلیک‌ها و ماهیچه‌های ایرانی با برنج اصیل ایرانی.",
            en: "The most famous Persian Shishlik and lamb shank served with traditional rice."
        },
        coords: [35.7820, 51.4200]
    },
    {
        id: 8,
        name: {
            fa: "کافه دنچ ونک",
            en: "Cozy Vanak Cafe"
        },
        category: "cafe",
        rating: 3.9,
        phone: "021-88775533",
        address: {
            fa: "تهران، میدان ونک، خیابان ملاصدرا",
            en: "Mollasadra St, Vanak Square, Tehran"
        },
        description: {
            fa: "فضایی آرام و خودمانی مناسب مطالعه، کار با لپ‌تاپ و قرارهای کاری کوچک.",
            en: "A quiet, friendly space ideal for reading, working on laptop, and casual business meetings."
        },
        coords: [35.7570, 51.4080]
    },
    {
        id: 9,
        name: {
            fa: "رستوران سنتی آزادی (غرب)",
            en: "Azadi Traditional Restaurant (West)"
        },
        category: "restaurant",
        rating: 4.3,
        phone: "021-44001122",
        address: {
            fa: "تهران، میدان آزادی، ابتدای بزرگراه جناح",
            en: "Jenah Expressway, Azadi Square, Tehran"
        },
        description: {
            fa: "فضای باز دلنشین با انواع کباب‌ها و دیزی سنگی سنتی ایرانی.",
            en: "Pleasant outdoor seating with various kebabs and traditional Persian Dizi."
        },
        coords: [35.6997, 51.3380]
    },
    {
        id: 10,
        name: {
            fa: "کافه چیتگر (بام لند)",
            en: "Chitgar Cafe (Bam Land)"
        },
        category: "cafe",
        rating: 4.7,
        phone: "021-40223300",
        address: {
            fa: "تهران، بزرگراه همت غرب، دریاچه چیتگر، مجتمع تجاری بام لند",
            en: "Bam Land Mall, Chitgar Lake, Hemmat West Expressway, Tehran"
        },
        description: {
            fa: "چشم‌انداز فوق‌العاده دریاچه چیتگر همراه با منوی متنوع صبحانه و نوشیدنی سرد.",
            en: "Gorgeous lake views with a diverse breakfast menu and cold drinks."
        },
        coords: [35.7508, 51.2185]
    },
    {
        id: 11,
        name: {
            fa: "بیمارستان فوق تخصصی لاله",
            en: "Laleh Specialty Hospital"
        },
        category: "hospital",
        rating: 4.1,
        phone: "021-88571065",
        address: {
            fa: "تهران، شهرک غرب، فاز ۵، خیابان سیمای ایران",
            en: "Simay-e-Iran St, Phase 5, Shahrak-e Gharb, Tehran"
        },
        description: {
            fa: "یکی از مجهزترین بیمارستان‌های خصوصی کشور در قلب شهرک غرب.",
            en: "One of the most equipped private hospitals in the heart of Shahrak-e Gharb."
        },
        coords: [35.7610, 51.3732]
    },
    {
        id: 12,
        name: {
            fa: "کافه ویونا (سعادت‌آباد)",
            en: "Viuna Cafe (Sa'adat Abad)"
        },
        category: "cafe",
        rating: 4.2,
        phone: "021-22067890",
        address: {
            fa: "تهران، سعادت‌آباد، میدان کاج، خیابان سرو شرقی",
            en: "Sarv-e Sharqi St, Kaj Square, Sa'adat Abad, Tehran"
        },
        description: {
            fa: "قهوه‌های دمی تخصصی و انواع کیک‌های شکلاتی خانگی تازه روزانه.",
            en: "Specialty brewed coffees and fresh daily homemade chocolate cakes."
        },
        coords: [35.7876, 51.3688]
    },
    {
        id: 13,
        name: {
            fa: "رستوران کاخ نیاوران",
            en: "Niavaran Palace Restaurant"
        },
        category: "restaurant",
        rating: 4.6,
        phone: "021-22820200",
        address: {
            fa: "تهران، انتهای خیابان پاسداران، پارک نیاوران",
            en: "Niavaran Park, Pasdaran St, Tehran"
        },
        description: {
            fa: "صرف غذاهای لذیذ در مجاورت مجموعه تاریخی کاخ نیاوران با درختان کهنسال.",
            en: "Enjoy delicious meals adjacent to the historical Niavaran Palace complex."
        },
        coords: [35.8115, 51.4695]
    },
    {
        id: 14,
        name: {
            fa: "کافه لمیز (پاسداران)",
            en: "Lamiz Cafe (Pasdaran)"
        },
        category: "cafe",
        rating: 4.5,
        phone: "021-22584512",
        address: {
            fa: "تهران، خیابان پاسداران، نبش گلستان چهارم",
            en: "Corner of 4th Golestan, Pasdaran St, Tehran"
        },
        description: {
            fa: "محیطی صمیمی، دکوراسیون چوبی زیبا و قهوه‌های بیرون‌بر سریع و ارزان قیمت.",
            en: "Cozy atmosphere, beautiful wooden decor, and fast, budget-friendly takeaway coffees."
        },
        coords: [35.7725, 51.4600]
    },
    {
        id: 15,
        name: {
            fa: "بیمارستان تهرانپارس",
            en: "Tehranpars Hospital"
        },
        category: "hospital",
        rating: 3.8,
        phone: "021-77884690",
        address: {
            fa: "تهران، تهرانپارس، فلکه سوم، خیابان ۱۹۶ غربی",
            en: "196th West St, 3rd Square, Tehranpars, Tehran"
        },
        description: {
            fa: "ارائه خدمات شبانه‌روزی اورژانس و تخصص‌های مختلف در شرق تهران.",
            en: "Providing 24/7 emergency and various specialized medical services in East Tehran."
        },
        coords: [35.7335, 51.5218]
    },
    {
        id: 16,
        name: {
            fa: "کافه رستوران هفت حوض (نارمک)",
            en: "Haft Hoz Cafe (Narmak)"
        },
        category: "cafe",
        rating: 4.1,
        phone: "021-77945533",
        address: {
            fa: "تهران، نارمک، ضلع جنوبی میدان هفت حوض",
            en: "South side of Haft Hoz Square, Narmak, Tehran"
        },
        description: {
            fa: "انواع پیتزاها و پاستاهای ایتالیایی به همراه نوشیدنی‌های گرم در قلب نارمک.",
            en: "Italian pizzas and pastas along with warm drinks in the heart of Narmak."
        },
        coords: [35.7320, 51.4920]
    },
    {
        id: 17,
        name: {
            fa: "رستوران سنتی پیروزی",
            en: "Pirouzi Traditional Restaurant"
        },
        category: "restaurant",
        rating: 4.0,
        phone: "021-33344455",
        address: {
            fa: "تهران، خیابان پیروزی، صد دستگاه، نبش خیابان نبرد",
            en: "Corner of Nabard St, Pirouzi St, Tehran"
        },
        description: {
            fa: "دیزی‌های سنتی مشهور با نان سنگک داغ و سبزی خوردن تازه.",
            en: "Famous traditional Dizi with hot Sangak bread and fresh green herbs."
        },
        coords: [35.6880, 51.4880]
    },
    {
        id: 18,
        name: {
            fa: "بیمارستان فیروزآبادی (شهر ری)",
            en: "Firouzabadi Hospital (Shahr-e Rey)"
        },
        category: "hospital",
        rating: 3.7,
        phone: "021-55902045",
        address: {
            fa: "تهران، شهر ری، خیابان فداییان اسلام، میدان بسیج",
            en: "Basij Square, Fadaeian-e Islam St, Shahr-e Rey, Tehran"
        },
        description: {
            fa: "بیمارستان آموزشی درمانی با سابقه طولانی در جنوب پایتخت.",
            en: "Educational medical center with a long history in the south of the capital."
        },
        coords: [35.5900, 51.4350]
    },
    {
        id: 19,
        name: {
            fa: "فست فود نازی‌آباد",
            en: "Nazi Abad Fast Food"
        },
        category: "restaurant",
        rating: 4.4,
        phone: "021-55061234",
        address: {
            fa: "تهران، نازی‌آباد، خیابان بازار دوم، پلاک ۸۸",
            en: "No 88, Bazar-e Dovom St, Nazi Abad, Tehran"
        },
        description: {
            fa: "برگرهای زغالی آبدار و سیب‌زمینی‌های سرخ‌کرده ویژه با سس قارچ دست‌ساز.",
            en: "Juicy charcoal-grilled burgers and special fries with handmade mushroom sauce."
        },
        coords: [35.6420, 51.3930]
    },
    {
        id: 20,
        name: {
            fa: "چلوکبابی رفتاری (بازار بزرگ)",
            en: "Raftari Restaurant (Grand Bazaar)"
        },
        category: "restaurant",
        rating: 4.6,
        phone: "021-55611122",
        address: {
            fa: "تهران، بازار بزرگ، بازار کفاش‌ها، کوچه مهناز",
            en: "Mahnaz Alley, Shoe Bazaar, Grand Bazaar, Tehran"
        },
        description: {
            fa: "یکی از قدیمی‌ترین چلوکبابی‌های بازار تهران با طعم اصیل و نوستالژیک.",
            en: "One of the oldest kebab restaurants in Tehran bazaar with nostalgic authentic taste."
        },
        coords: [35.6780, 51.4180]
    },
    {
        id: 21,
        name: {
            fa: "کافه کتاب انقلاب",
            en: "Enghelab Book Cafe"
        },
        category: "cafe",
        rating: 4.6,
        phone: "021-66487799",
        address: {
            fa: "تهران، میدان انقلاب، خیابان ۱۲ فروردین، بن‌بست نور",
            en: "Noor Cul-de-sac, 12 Farvardin St, Enghelab Square, Tehran"
        },
        description: {
            fa: "محیطی آرام برای دوست‌داران کتاب به همراه انواع نوشیدنی‌های گیاهی سنتی.",
            en: "A quiet hub for book lovers with traditional herbal teas and warm beverages."
        },
        coords: [35.7010, 51.3910]
    },
    {
        id: 22,
        name: {
            fa: "بیمارستان فوق تخصصی قلب جماران",
            en: "Jamaran Heart Hospital"
        },
        category: "hospital",
        rating: 4.3,
        phone: "021-22290292",
        address: {
            fa: "تهران، نیاوران، جماران، خیابان حسنی‌کیا",
            en: "Hasnikia St, Jamaran, Niavaran, Tehran"
        },
        description: {
            fa: "بیمارستان فوق تخصصی و مرکز تحقیقات قلب و عروق در شمال تهران.",
            en: "Specialty cardiovascular hospital and research center in North Tehran."
        },
        coords: [35.8155, 51.4550]
    },
    {
        id: 23,
        name: {
            fa: "کافه بهار (هفت تیر)",
            en: "Bahar Cafe (Haft-e Tir)"
        },
        category: "cafe",
        rating: 4.0,
        phone: "021-88820033",
        address: {
            fa: "تهران، میدان هفت تیر، خیابان بهار شیراز",
            en: "Bahar Shiraz St, Haft-e Tir Square, Tehran"
        },
        description: {
            fa: "کافه‌ای با سبک نوستالژیک دهه ۶۰ و سرو چای ترش و شربت بهارنارنج عالی.",
            en: "Nostalgic 1980s styled cafe serving excellent sour tea and orange blossom syrup."
        },
        coords: [35.7155, 51.4260]
    },
    {
        id: 24,
        name: {
            fa: "بیمارستان شریعتی",
            en: "Shariati University Hospital"
        },
        category: "hospital",
        rating: 3.9,
        phone: "021-84901000",
        address: {
            fa: "تهران، بزرگراه جلال آل احمد، روبروی کوی دانشگاه",
            en: "Jalal Al-Ahmad Expressway, Tehran"
        },
        description: {
            fa: "بیمارستان آموزشی دانشگاه علوم پزشکی تهران با کادر مجرب علمی.",
            en: "Tehran University of Medical Sciences educational hospital with scientific staff."
        },
        coords: [35.7280, 51.3900]
    },
    {
        id: 25,
        name: {
            fa: "بیمارستان شهدای تجریش",
            en: "Shohada-ye Tajrish Hospital"
        },
        category: "hospital",
        rating: 3.6,
        phone: "021-22718001",
        address: {
            fa: "تهران، میدان تجریش، خیابان شهرداری، پلاک ۳",
            en: "No 3, Shahrdari St, Tajrish Square, Tehran"
        },
        description: {
            fa: "بیمارستان عمومی دولتی مجهز به بخش‌های انکولوژی و رادیوتراپی پیشرفته.",
            en: "Public general hospital equipped with advanced oncology and radiotherapy wings."
        },
        coords: [35.8080, 51.4290]
    },
    {
        id: 26,
        name: {
            fa: "کافه باغ ولنجک",
            en: "Velenjak Garden Cafe"
        },
        category: "cafe",
        rating: 4.7,
        phone: "021-22409010",
        address: {
            fa: "تهران، ولنجک، انتهای خیابان یمن، باغ ایرانی",
            en: "Iranian Garden, Yemen St, Velenjak, Tehran"
        },
        description: {
            fa: "نشستن در زیر سایه چنارهای کهنسال همراه با صدای دلنشین جوی آب باریک.",
            en: "Sitting under historical plane trees with the soothing sound of flowing water."
        },
        coords: [35.8060, 51.3980]
    },
    {
        id: 27,
        name: {
            fa: "رستوران باغ قصر یخ",
            en: "Ice Palace Garden Restaurant"
        },
        category: "restaurant",
        rating: 4.2,
        phone: "021-22880099",
        address: {
            fa: "تهران، خیابان شریعتی، بالاتر از پل سیدخندان",
            en: "Shariati St, above Seyed Khandan Bridge, Tehran"
        },
        description: {
            fa: "غذاهای ملل با استایل مدرن و لابی لوکس شیشه‌ای با تم خنک در تابستان.",
            en: "International cuisine served in a modern style inside a cool glass lobby."
        },
        coords: [35.7650, 51.4420]
    },
    {
        id: 28,
        name: {
            fa: "کافه دیدار (شرق)",
            en: "Didar Cafe (East)"
        },
        category: "cafe",
        rating: 4.1,
        phone: "021-77889900",
        address: {
            fa: "تهران، بزرگراه رسالت، بعد از اتوبان باقری",
            en: "Resalat Expressway, past Bagheri Highway, Tehran"
        },
        description: {
            fa: "فضایی دنج در طبقه فوقانی مجتمع تجاری با قهوه فرانسه عالی.",
            en: "A cozy spot on the top floor of a commercial mall serving great French press coffee."
        },
        coords: [35.7180, 51.4780]
    },
    {
        id: 29,
        name: {
            fa: "درمانگاه شبانه‌روزی ترمینال جنوب",
            en: "South Terminal 24/7 Clinic"
        },
        category: "hospital",
        rating: 3.5,
        phone: "021-55185390",
        address: {
            fa: "تهران، بزرگراه بعثت، ترمینال مسافربری جنوب",
            en: "South Passenger Terminal, Be'sat Expressway, Tehran"
        },
        description: {
            fa: "خدمات پزشکی اضطراری اولیه شبانه‌روزی برای مسافران و مراجعان پایانه.",
            en: "24/7 basic emergency medical services for passengers and visitors."
        },
        coords: [35.6580, 51.4100]
    },
    {
        id: 30,
        name: {
            fa: "رستوران پارک غربی (چیتگر)",
            en: "West Park Restaurant (Chitgar)"
        },
        category: "restaurant",
        rating: 4.4,
        phone: "021-44705050",
        address: {
            fa: "تهران، آزادراه تهران-کرج، ورودی پارک جنگلی چیتگر",
            en: "Chitgar Forest Park Entrance, Tehran-Karaj Freeway, Tehran"
        },
        description: {
            fa: "غذاهای گریل باربیکیو و محیط جنگلی خنک در غربی‌ترین نقطه شهر.",
            en: "Grilled BBQ food in a cool forest environment at the westernmost city limit."
        },
        coords: [35.7320, 51.2720]
    }
];

// App State Variables
let currentLang = "fa";
let map = null;
let markers = [];
let currentTileLayer = null;
let radiusCircle = null; // Leaflet Circle object to draw the radius

// Filter States
let searchFilter = "";
let categoryFilter = "all";
let ratingFilter = 0;
let boundsFilter = false; // Whether search is limited to the current map bounds
let radiusFilter = "unlimited"; // Radius value in meters or "unlimited"
let lastFilteredBusinesses = []; // Store currently filtered businesses for export

// Leaflet Map Layer Providers
const mapProviders = {
    google: {
        name: "Google Maps",
        url: "https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
        attribution: "&copy; Google Maps Road"
    },
    neshan: {
        name: "Neshan Map",
        // Standard OSM tiles representing Neshan map layout
        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        attribution: "&copy; OpenStreetMap | Neshan Localized Engine"
    },
    balad: {
        name: "Balad Map",
        // CartoDB Positron layer representing Balad Light Vector Map
        url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        attribution: "&copy; CartoDB Positron | Balad Engine"
    }
};

// Set Active Language Function
function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    
    if (lang === "fa") {
        document.documentElement.dir = "rtl";
    } else {
        document.documentElement.dir = "ltr";
    }
    
    // Translate text of elements with mapping keys
    document.getElementById("page-title").textContent = translations[lang]["page-title"];
    document.getElementById("app-heading").textContent = translations[lang]["app-heading"];
    
    // Toggle button text
    const langBtnText = document.querySelector("#lang-btn .lang-text");
    if (langBtnText) langBtnText.textContent = translations[lang]["lang-btn-text"];
    
    // Panel Headers
    document.getElementById("provider-title").textContent = translations[lang]["provider-title"];
    document.getElementById("filter-title").textContent = translations[lang]["filter-title"];
    document.getElementById("search-input").placeholder = translations[lang]["search-placeholder"];
    
    // Categories buttons
    document.getElementById("cat-all").textContent = translations[lang]["cat-all"];
    document.getElementById("cat-restaurant").textContent = translations[lang]["cat-restaurant"];
    document.getElementById("cat-cafe").textContent = translations[lang]["cat-cafe"];
    document.getElementById("cat-hospital").textContent = translations[lang]["cat-hospital"];
    
    // Ratings & clear filters
    document.getElementById("rating-label").textContent = translations[lang]["rating-label"];
    document.getElementById("clear-filters-btn").textContent = translations[lang]["clear-filters"];
    
    // Results count & footer
    document.getElementById("results-title").textContent = translations[lang]["results-title"];
    document.getElementById("footer-text").textContent = translations[lang]["footer-text"];

    // Translate new features
    document.getElementById("map-bounds-label").textContent = translations[lang]["map-bounds-label"];
    document.getElementById("radius-label-select").textContent = translations[lang]["radius-label-select"];
    document.getElementById("opt-radius-unlimited").textContent = translations[lang]["radius-unlimited"];
    document.getElementById("export-csv-btn").textContent = translations[lang]["export-csv-btn"];
    document.getElementById("export-json-btn").textContent = translations[lang]["export-json-btn"];
    
    // Refresh business lists and map overlays with translated content
    filterBusinesses();
    updateMapStatus();
}

// Set Map Provider Function
function setMapProvider(providerKey) {
    const provider = mapProviders[providerKey];
    if (!provider || !map) return;
    
    // Remove current layer if it exists
    if (currentTileLayer) {
        map.removeLayer(currentTileLayer);
    }
    
    // Add new layer
    currentTileLayer = L.tileLayer(provider.url, {
        attribution: provider.attribution,
        maxZoom: 19
    }).addTo(map);
    
    updateMapStatus(provider.name);
}

// Update Map Status Bar Text
function updateMapStatus(providerName) {
    if (!providerName) {
        const checkedRadio = document.querySelector('input[name="map-provider"]:checked');
        const providerKey = checkedRadio ? checkedRadio.value : "google";
        providerName = mapProviders[providerKey].name;
    }
    
    const statusTextTemplate = translations[currentLang]["status-active-provider"];
    document.getElementById("status-text").textContent = statusTextTemplate.replace("{provider}", providerName);
}

// Initialize Leaflet Map
function initMap() {
    // Tehran center coordinates
    const tehranCenter = [35.6997, 51.3380];
    
    map = L.map('map', {
        zoomControl: false // disabled standard control to place it in custom place if needed
    }).setView(tehranCenter, 12);
    
    // Add standard Leaflet zoom buttons on bottom-right or bottom-left depending on language
    L.control.zoom({
        position: 'bottomright'
    }).addTo(map);
    
    // Set default provider to google roadmap
    setMapProvider("google");
    
    // Monitor coordinates on move and update radius circle center
    map.on('move', function() {
        const center = map.getCenter();
        document.getElementById("coordinates-display").textContent = 
            `${center.lat.toFixed(4)}° N, ${center.lng.toFixed(4)}° E`;
        
        if (radiusCircle) {
            radiusCircle.setLatLng(center);
        }
    });

    // Re-filter when map movement finishes if map bounds or radius filter are active
    map.on('moveend', function() {
        if (boundsFilter || radiusFilter !== "unlimited") {
            filterBusinesses();
        }
    });
}

// Render business cards in sidebar
function renderBusinessList(filtered) {
    const container = document.getElementById("business-list");
    container.innerHTML = "";
    
    if (filtered.length === 0) {
        container.innerHTML = `<div class="no-results-msg">${translations[currentLang]["no-results"]}</div>`;
        updateResultsBadge(0);
        return;
    }
    
    updateResultsBadge(filtered.length);
    
    filtered.forEach(biz => {
        const name = biz.name[currentLang];
        const address = biz.address[currentLang];
        const categoryLabel = translations[currentLang]["categories"][biz.category];
        
        const card = document.createElement("div");
        card.className = "business-item";
        card.dataset.id = biz.id;
        
        card.innerHTML = `
            <div class="biz-header">
                <span class="biz-name">${name}</span>
                <span class="biz-category ${biz.category}">${categoryLabel}</span>
            </div>
            <div class="biz-details">
                <div><strong>${translations[currentLang]["address-label"]}</strong>${address}</div>
                <div><strong>${translations[currentLang]["phone-label"]}</strong>${biz.phone}</div>
            </div>
            <div class="biz-meta">
                <span class="biz-rating">
                    ★ <span class="biz-rating-num">${biz.rating}</span>
                </span>
                <button class="lang-toggle-btn locate-btn" style="padding:0.25rem 0.6rem; font-size:0.7rem; margin-right:auto;">
                    ${translations[currentLang]["locate-btn"]}
                </button>
            </div>
        `;
        
        // Locate button and Card Click events
        card.addEventListener("click", () => {
            selectBusiness(biz);
        });
        
        container.appendChild(card);
    });
}

// Update "X Results" badges
function updateResultsBadge(count) {
    const badge = document.getElementById("results-count");
    const template = count === 1 
        ? translations[currentLang]["results-count-singular"]
        : translations[currentLang]["results-count-plural"];
        
    badge.textContent = template.replace("{count}", count);
}

// Focus map on business and open Leaflet popup
function selectBusiness(biz) {
    // Add selected class to the sidebar element
    document.querySelectorAll(".business-item").forEach(el => {
        el.classList.remove("selected");
        if (parseInt(el.dataset.id) === biz.id) {
            el.classList.add("selected");
        }
    });
    
    if (map) {
        map.setView(biz.coords, 14);
        
        // Find corresponding marker and trigger popup
        const marker = markers.find(m => m.options.id === biz.id);
        if (marker) {
            marker.openPopup();
        }
    }
}

// Set Leaflet Map Markers for filtered list
function updateMarkers(filtered) {
    // Remove existing markers
    markers.forEach(m => map.removeLayer(m));
    markers = [];
    
    filtered.forEach(biz => {
        const name = biz.name[currentLang];
        const categoryLabel = translations[currentLang]["categories"][biz.category];
        const desc = biz.description[currentLang];
        
        // Custom Marker Coloring based on business type
        let markerColor = "#6366f1"; // default indigo
        if (biz.category === "restaurant") markerColor = "#ef4444"; // red
        if (biz.category === "cafe") markerColor = "#f59e0b"; // orange/amber
        if (biz.category === "hospital") markerColor = "#10b981"; // green
        
        const pinHtml = `
            <div style="
                background-color: ${markerColor};
                width: 28px;
                height: 28px;
                border-radius: 50% 50% 50% 0;
                transform: rotate(-45deg);
                display: flex;
                align-items: center;
                justify-content: center;
                border: 2px solid white;
                box-shadow: 0 4px 10px rgba(0,0,0,0.3);
            ">
                <div style="
                    transform: rotate(45deg);
                    font-size: 0.8rem;
                ">📍</div>
            </div>
        `;
        
        const customIcon = L.divIcon({
            html: pinHtml,
            iconSize: [28, 28],
            iconAnchor: [14, 28],
            popupAnchor: [0, -30],
            className: 'custom-pin-icon'
        });
        
        const marker = L.marker(biz.coords, { icon: customIcon, id: biz.id }).addTo(map);
        
        // Localized popup content
        const popupContent = `
            <div class="popup-biz-container">
                <div class="popup-title">${name}</div>
                <div class="popup-meta">
                    <span class="popup-rating">★ ${biz.rating}</span>
                    <span class="popup-category ${biz.category}" style="background-color:${markerColor}22; color:${markerColor};">${categoryLabel}</span>
                </div>
                <div class="popup-desc">${desc}</div>
                <div class="popup-tel">${translations[currentLang]["phone-label"]}${biz.phone}</div>
            </div>
        `;
        
        marker.bindPopup(popupContent);
        markers.push(marker);
    });
}

// Update the search radius circle overlay on map
function updateRadiusCircle() {
    if (!map) return;
    
    if (radiusFilter === "unlimited") {
        if (radiusCircle) {
            map.removeLayer(radiusCircle);
            radiusCircle = null;
        }
    } else {
        const radiusMeters = parseInt(radiusFilter);
        if (!radiusCircle) {
            radiusCircle = L.circle(map.getCenter(), {
                radius: radiusMeters,
                color: '#6366f1',
                fillColor: '#6366f1',
                fillOpacity: 0.12,
                weight: 1.5,
                dashArray: '5, 5'
            }).addTo(map);
        } else {
            radiusCircle.setLatLng(map.getCenter());
            radiusCircle.setRadius(radiusMeters);
        }
    }
}

// Business filtering engine
function filterBusinesses() {
    // Sync radius circle overlay
    updateRadiusCircle();

    const filtered = businesses.filter(biz => {
        // 1. Text Search Filter
        const nameMatches = biz.name[currentLang].toLowerCase().includes(searchFilter.toLowerCase()) ||
                            biz.address[currentLang].toLowerCase().includes(searchFilter.toLowerCase());
        
        // 2. Category Filter
        const categoryMatches = categoryFilter === "all" || biz.category === categoryFilter;
        
        // 3. Rating Filter
        const ratingMatches = biz.rating >= ratingFilter;

        // 4. Map Bounds Filter
        let boundsMatches = true;
        if (boundsFilter && map) {
            const bounds = map.getBounds();
            boundsMatches = bounds.contains(L.latLng(biz.coords));
        }

        // 5. Search Radius Filter
        let radiusMatches = true;
        if (radiusFilter !== "unlimited" && map) {
            const mapCenter = map.getCenter();
            const distance = mapCenter.distanceTo(L.latLng(biz.coords)); // distance in meters
            radiusMatches = distance <= parseInt(radiusFilter);
        }
        
        return nameMatches && categoryMatches && ratingMatches && boundsMatches && radiusMatches;
    });
    
    lastFilteredBusinesses = filtered;
    renderBusinessList(filtered);
    if (map) {
        updateMarkers(filtered);
    }
}

// Event Listeners setup
function setupEventListeners() {
    // Language Toggle
    document.getElementById("lang-btn").addEventListener("click", () => {
        const nextLang = currentLang === "fa" ? "en" : "fa";
        setLanguage(nextLang);
    });
    
    // Map Provider Toggle
    document.querySelectorAll('input[name="map-provider"]').forEach(radio => {
        radio.addEventListener("change", (e) => {
            setMapProvider(e.target.value);
        });
    });
    
    // Search Input
    document.getElementById("search-input").addEventListener("input", (e) => {
        searchFilter = e.target.value;
        filterBusinesses();
    });
    
    // Category Buttons
    document.querySelectorAll(".cat-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            categoryFilter = e.target.dataset.category;
            filterBusinesses();
        });
    });
    
    // Rating Stars Selector
    document.querySelectorAll(".star-btn").forEach(btn => {
        // Highlight stars on hover
        btn.addEventListener("mouseenter", (e) => {
            const val = parseInt(e.target.dataset.rating);
            document.querySelectorAll(".star-btn").forEach(b => {
                if (parseInt(b.dataset.rating) <= val) {
                    b.classList.add("highlight");
                }
            });
        });
        
        btn.addEventListener("mouseleave", () => {
            document.querySelectorAll(".star-btn").forEach(b => b.classList.remove("highlight"));
        });
        
        // Select rating on click
        btn.addEventListener("click", (e) => {
            const val = parseInt(e.target.dataset.rating);
            
            if (ratingFilter === val) {
                // Clear rating filter if clicked again
                ratingFilter = 0;
                document.querySelectorAll(".star-btn").forEach(b => b.classList.remove("active"));
            } else {
                ratingFilter = val;
                document.querySelectorAll(".star-btn").forEach(b => {
                    if (parseInt(b.dataset.rating) <= val) {
                        b.classList.add("active");
                    } else {
                        b.classList.remove("active");
                    }
                });
            }
            filterBusinesses();
        });
    });
    
    // Clear Filters Button
    document.getElementById("clear-filters-btn").addEventListener("click", () => {
        searchFilter = "";
        categoryFilter = "all";
        ratingFilter = 0;
        boundsFilter = false;
        radiusFilter = "unlimited";
        
        // Reset controls state
        document.getElementById("search-input").value = "";
        document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
        document.getElementById("cat-all").classList.add("active");
        document.querySelectorAll(".star-btn").forEach(b => b.classList.remove("active"));
        document.getElementById("bounds-toggle").checked = false;
        document.getElementById("radius-select").value = "unlimited";
        
        filterBusinesses();
    });

    // Map Bounds Filter Toggle
    document.getElementById("bounds-toggle").addEventListener("change", (e) => {
        boundsFilter = e.target.checked;
        filterBusinesses();
    });

    // Search Radius Select Dropdown
    document.getElementById("radius-select").addEventListener("change", (e) => {
        radiusFilter = e.target.value;
        filterBusinesses();
    });

    // Export Data Listeners
    document.getElementById("export-csv-btn").addEventListener("click", exportToCSV);
    document.getElementById("export-json-btn").addEventListener("click", exportToJSON);
}

// Export filtered businesses as JSON file
function exportToJSON() {
    const jsonString = JSON.stringify(lastFilteredBusinesses, null, 2);
    const blob = new Blob([jsonString], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `businesses_${currentLang}.json`;
    link.click();
    URL.revokeObjectURL(url);
}

// Export filtered businesses as CSV file (fully flattened and localized)
function exportToCSV() {
    const headers = ["ID", "Name", "Category", "Rating", "Phone", "Latitude", "Longitude", "Address"];
    const rows = lastFilteredBusinesses.map(biz => [
        biz.id,
        `"${biz.name[currentLang].replace(/"/g, '""')}"`,
        biz.category,
        biz.rating,
        `"${biz.phone}"`,
        biz.coords[0],
        biz.coords[1],
        `"${biz.address[currentLang].replace(/"/g, '""')}"`
    ]);
    
    // Add BOM for proper UTF-8 Excel support (crucial for Farsi characters)
    const csvContent = "\ufeff" + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `businesses_${currentLang}.csv`;
    link.click();
    URL.revokeObjectURL(url);
}

// App Initialization entrypoint
window.addEventListener("DOMContentLoaded", () => {
    initMap();
    setupEventListeners();
    setLanguage("fa"); // Default is Persian (fa)
});
