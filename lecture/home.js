/* ================================================
   SPORTSBLUE - Portal Berita Olahraga Terpercaya
   scripts.js - Seluruh logika JavaScript portal berita
   ================================================ */

// -----------------------------------------------
// DATABASE MOCK: Semua berita untuk fitur Live Search
// -----------------------------------------------
const mockBeritaDatabase = [
    {
        title: "PERINGKAT: 50 PEMAIN TERBAIK DUNIA DI SELURUH CABANG OLAHRAGA MUSIM INI",
        category: "Sorotan Utama",
        pageId: "opini",
        img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=400"
    },
    {
        title: "Juara Bertahan Kunci Tiket Final NBA Setelah Laga Sengit 7 Game",
        category: "Basket • NBA",
        pageId: "basket",
        img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=400&q=80"
    },
    {
        title: "Ganda Putra Indonesia Juara Umum Indonesia Open 2026",
        category: "Badminton • Indonesia Open",
        pageId: "badminton",
        img: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=400&q=80"
    },
    {
        title: "Siasat Cerdik Pit Stop Membuahkan Kemenangan Dramatis Tim Biru",
        category: "Motorsport • Formula 1",
        pageId: "balap",
        img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=400&q=80"
    },
    {
        title: "Persiapan Matang Sang Pelatih Jerman Jelang Laga Final Eropa Terbesar",
        category: "Sepak Bola • Liga Champions",
        pageId: "bola",
        img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=400&q=80"
    },
    {
        title: "Pemusatan Latihan Nasional Dimulai Demi Kualifikasi Piala Dunia mendatang",
        category: "Sepak Bola • Tim Nasional",
        pageId: "bola",
        img: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=400&q=80"
    },
    {
        title: "Bintang Madrid Cetak Gol Spektakuler Jarak Jauh Kunci Gelar Juara",
        category: "Sepak Bola • Liga Spanyol",
        pageId: "bola",
        img: "https://images.unsplash.com/photo-1431324155629-1a6edd1d141e?auto=format&fit=crop&w=400&q=80"
    },
    {
        title: "Petenis Berbakat Spanyol Rebut Juara Grand Slam Lapangan Tanah Liat",
        category: "Tenis Dunia",
        pageId: "lainnya",
        img: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=300&q=80"
    },
    {
        title: "Tim Indonesia Sukses Raih Gelar Juara Dunia Game Bergenre Strategi",
        category: "E-sports",
        pageId: "lainnya",
        img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=300&q=80"
    }
];

// -----------------------------------------------
// 1. DYNAMIC PAGE ROUTER LOGIC
// -----------------------------------------------
const listPages = ['home', 'bola', 'basket', 'badminton', 'balap', 'lainnya', 'opini', 'tentang'];

function switchPage(targetPageId) {
    // Sembunyikan semua halaman terlebih dahulu
    listPages.forEach(page => {
        const pageEl = document.getElementById(`page-${page}`);
        if (pageEl) pageEl.classList.add('hidden');

        // Hapus gaya aktif di tombol navigasi
        const navBtn = document.getElementById(`nav-${page}`);
        if (navBtn) {
            navBtn.className = "px-3 py-2 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 hover:text-brand-500 border-b-2 border-transparent hover:border-brand-500 transition-all";
        }
    });

    // Tampilkan halaman target
    const targetEl = document.getElementById(`page-${targetPageId}`);
    if (targetEl) targetEl.classList.remove('hidden');

    // Beri gaya aktif ke tombol navigasi aktif
    const activeNavBtn = document.getElementById(`nav-${targetPageId}`);
    if (activeNavBtn) {
        activeNavBtn.className = "px-3 py-2 text-xs font-bold uppercase tracking-wider text-brand-500 border-b-2 border-brand-500 transition-all";
    }

    // Scroll ke paling atas secara mulus
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Tutup seksi hasil pencarian setiap ganti halaman
    clearSearch();
}

// -----------------------------------------------
// Mobile Menu Toggle
// -----------------------------------------------
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const iconOpen = document.getElementById('menu-icon-open');
    const iconClose = document.getElementById('menu-icon-close');

    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        iconOpen.classList.add('hidden');
        iconClose.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
        iconOpen.classList.remove('hidden');
        iconClose.classList.add('hidden');
    }
}

// -----------------------------------------------
// 2. LIVE SEARCH LOGIC
// -----------------------------------------------
function liveSearch() {
    const inputVal = document.getElementById('global-search').value.toLowerCase().trim();
    executeSearch(inputVal);
}

function liveSearchMobile() {
    const inputVal = document.getElementById('global-search-mobile').value.toLowerCase().trim();
    executeSearch(inputVal);
}

function executeSearch(keyword) {
    const resultSection = document.getElementById('search-results-section');
    const resultGrid = document.getElementById('search-results-grid');
    const keywordDisplay = document.getElementById('search-keyword-display');

    if (keyword.length < 2) {
        resultSection.classList.add('hidden');
        return;
    }

    // Cari berita yang cocok
    const filtered = mockBeritaDatabase.filter(b => b.title.toLowerCase().includes(keyword));

    // Perbarui antarmuka pengguna
    keywordDisplay.innerText = keyword;
    resultGrid.innerHTML = '';
    resultSection.classList.remove('hidden');

    if (filtered.length === 0) {
        resultGrid.innerHTML = `
            <div class="col-span-full text-center py-6 text-slate-400 dark:text-slate-500 text-xs">
                <i data-lucide="frown" class="w-8 h-8 mx-auto mb-2 text-slate-300"></i>
                Maaf, tidak ada berita yang cocok dengan kata pencarian Anda.
            </div>
        `;
        lucide.createIcons();
        return;
    }

    filtered.forEach(news => {
        resultGrid.innerHTML += `
            <div onclick="switchPage('${news.pageId}')" class="bg-white dark:bg-slate-800 p-3.5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm cursor-pointer hover:border-brand-500 dark:hover:border-brand-500 transition flex items-start gap-3 group">
                <img src="${news.img}" alt="${news.title}" class="w-16 h-16 object-cover rounded shrink-0">
                <div>
                    <span class="text-brand-500 text-[8px] font-extrabold uppercase">${news.category}</span>
                    <h5 class="font-bold text-slate-800 dark:text-white mt-0.5 text-xs group-hover:text-brand-500 line-clamp-2">${news.title}</h5>
                </div>
            </div>
        `;
    });
    lucide.createIcons();
}

function clearSearch() {
    document.getElementById('global-search').value = '';
    document.getElementById('global-search-mobile').value = '';
    document.getElementById('search-results-section').classList.add('hidden');
}

// -----------------------------------------------
// 3. DUAL THEME SWITCHER LOGIC
// -----------------------------------------------
function toggleTheme() {
    const htmlEl = document.documentElement;
    const sunIcon = document.getElementById('theme-sun-icon');
    const moonIcon = document.getElementById('theme-moon-icon');

    if (htmlEl.classList.contains('dark')) {
        htmlEl.classList.remove('dark');
        htmlEl.classList.add('light');
        sunIcon.classList.add('hidden');
        moonIcon.classList.remove('hidden');
    } else {
        htmlEl.classList.remove('light');
        htmlEl.classList.add('dark');
        moonIcon.classList.add('hidden');
        sunIcon.classList.remove('hidden');
    }
}

// -----------------------------------------------
// 4. INTERACTIVE SOCCER CATEGORY FILTER LOGIC
// -----------------------------------------------
function filterSoccer(category) {
    const cards = document.querySelectorAll('.soccer-card');

    // Atur gaya aktif tombol filter
    const filterButtons = ['semua', 'nasional', 'internasional'];
    filterButtons.forEach(btn => {
        const el = document.getElementById(`btn-soccer-${btn}`);
        if (btn === category) {
            el.className = "bg-brand-500 text-white text-[10px] uppercase font-bold px-3 py-1 rounded transition";
        } else {
            el.className = "text-slate-600 dark:text-slate-300 text-[10px] uppercase font-bold px-3 py-1 rounded hover:bg-slate-100 dark:hover:bg-slate-700 transition";
        }
    });

    // Saring kartu berita sepak bola
    cards.forEach(card => {
        const cardCat = card.getAttribute('data-cat');
        if (category === 'semua' || cardCat === category) {
            card.classList.remove('hidden');
            card.classList.add('fade-in');
        } else {
            card.classList.add('hidden');
            card.classList.remove('fade-in');
        }
    });
}

// -----------------------------------------------
// 5. BASKET INTERACTIVE WEEKLY POLL LOGIC
// -----------------------------------------------
function submitVote(optionId) {
    const pollContainer = document.getElementById('polling-container');
    const pollResult = document.getElementById('polling-result');

    // Simulasikan penambahan vote (data visual)
    if (optionId === 'A') {
        document.getElementById('vote-val-A').innerText = '43%';
    } else if (optionId === 'B') {
        document.getElementById('vote-val-B').innerText = '39%';
    } else if (optionId === 'C') {
        document.getElementById('vote-val-C').innerText = '21%';
    }

    // Sembunyikan form pilihan, tampilkan progres bar
    pollContainer.classList.add('hidden');
    pollResult.classList.remove('hidden');
}

// -----------------------------------------------
// 6. ACCORDION BADMINTON SCHEDULE LOGIC
// -----------------------------------------------
function toggleAccordion(id) {
    const accContent = document.getElementById(`acc-content-${id}`);
    const accIcon = document.getElementById(`acc-icon-${id}`);

    if (accContent.classList.contains('hidden')) {
        accContent.classList.remove('hidden');
        accIcon.classList.add('rotate-180');
    } else {
        accContent.classList.add('hidden');
        accIcon.classList.remove('rotate-180');
    }
}

// -----------------------------------------------
// 7. EDITORIAL COLUMN FONT SIZER LOGIC
// -----------------------------------------------
function changeFontSize(size) {
    const textEl = document.getElementById('opinion-article-text');
    const btnS = document.getElementById('btn-font-s');
    const btnN = document.getElementById('btn-font-n');
    const btnL = document.getElementById('btn-font-l');

    // Reset semua kelas warna aktif tombol
    [btnS, btnN, btnL].forEach(b => {
        b.className = "px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-200";
    });

    if (size === 'small') {
        textEl.className = "text-xs text-slate-600 dark:text-slate-300 leading-relaxed space-y-4";
        btnS.className = "px-2 py-0.5 rounded bg-brand-500 text-white font-bold";
    } else if (size === 'normal') {
        textEl.className = "text-sm text-slate-600 dark:text-slate-300 leading-relaxed space-y-4";
        btnN.className = "px-2 py-0.5 rounded bg-brand-500 text-white font-bold";
    } else if (size === 'large') {
        textEl.className = "text-base text-slate-600 dark:text-slate-300 leading-relaxed space-y-4";
        btnL.className = "px-2 py-0.5 rounded bg-brand-500 text-white font-bold";
    }
}

// -----------------------------------------------
// 8. CONTACT FORM LOGIC (WITH REALTIME CHAR COUNTER)
// -----------------------------------------------
function updateCharCount() {
    const textLength = document.getElementById('form-pesan').value.length;
    document.getElementById('char-count').innerText = textLength;
}

function handleFormSubmit(event) {
    event.preventDefault(); // Cegah reload form submit standar browser

    const nama = document.getElementById('form-nama').value;
    const email = document.getElementById('form-email').value;
    const errorEmail = document.getElementById('email-error');

    // Validasi email sederhana di JS
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorEmail.classList.remove('hidden');
        return;
    } else {
        errorEmail.classList.add('hidden');
    }

    // Tampilkan custom modal pop-up interaktif (bukan alert)
    document.getElementById('user-display-name').innerText = nama;
    document.getElementById('custom-modal').classList.remove('hidden');

    // Reset formulir input setelah sukses dikirim
    document.getElementById('contact-form').reset();
    document.getElementById('char-count').innerText = '0';
}

function closeModal() {
    document.getElementById('custom-modal').classList.add('hidden');
}

// -----------------------------------------------
// INISIALISASI: Jalankan saat halaman selesai dimuat
// -----------------------------------------------
window.onload = () => {
    lucide.createIcons();
};