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
    }
];

// App State Variables
let currentLang = "fa";
let map = null;
let markers = [];
let currentTileLayer = null;

// Filter States
let searchFilter = "";
let categoryFilter = "all";
let ratingFilter = 0;

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
    
    // Monitor coordinates on move
    map.on('move', function() {
        const center = map.getCenter();
        document.getElementById("coordinates-display").textContent = 
            `${center.lat.toFixed(4)}° N, ${center.lng.toFixed(4)}° E`;
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

// Business filtering engine
function filterBusinesses() {
    const filtered = businesses.filter(biz => {
        // 1. Text Search Filter
        const nameMatches = biz.name[currentLang].toLowerCase().includes(searchFilter.toLowerCase()) ||
                            biz.address[currentLang].toLowerCase().includes(searchFilter.toLowerCase());
        
        // 2. Category Filter
        const categoryMatches = categoryFilter === "all" || biz.category === categoryFilter;
        
        // 3. Rating Filter
        const ratingMatches = biz.rating >= ratingFilter;
        
        return nameMatches && categoryMatches && ratingMatches;
    });
    
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
        
        // Reset controls state
        document.getElementById("search-input").value = "";
        document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
        document.getElementById("cat-all").classList.add("active");
        document.querySelectorAll(".star-btn").forEach(b => b.classList.remove("active"));
        
        filterBusinesses();
    });
}

// App Initialization entrypoint
window.addEventListener("DOMContentLoaded", () => {
    initMap();
    setupEventListeners();
    setLanguage("fa"); // Default is Persian (fa)
});
