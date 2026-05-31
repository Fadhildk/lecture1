/* ================================================
   SPORTSBLUE - Portal Berita Olahraga Terpercaya
   home.js - Seluruh logika JavaScript portal berita
   ================================================ */

// -----------------------------------------------
// DATABASE MOCK: Semua berita untuk fitur Live Search
// -----------------------------------------------
const mockBeritaDatabase = [
    { title: "PERINGKAT: 50 PEMAIN TERBAIK DUNIA DI SELURUH CABANG OLAHRAGA MUSIM INI", category: "Sorotan Utama", pageId: "opini", img: "img/hero-banner.jpg" },
    { title: "Juara Bertahan Kunci Tiket Final NBA Setelah Laga Sengit 7 Game", category: "Basket • NBA", pageId: "basket", img: "okc.webp" },
    { title: "Ganda Putra Indonesia Juara Umum Indonesia Open 2026", category: "Badminton • Indonesia Open", pageId: "badminton", img: "ganda.jpg" },
    { title: "Siasat Cerdik Pit Stop Membuahkan Kemenangan Dramatis Tim Biru", category: "Motorsport • Formula 1", pageId: "balap", img: "img/balap-supercar.jpg" },
    { title: "Persiapan Matang Sang Pelatih Jerman Jelang Laga Final Eropa Terbesar", category: "Sepak Bola • Liga Champions", pageId: "bola", img: "img/bola-champions.jpg" },
    { title: "Pemusatan Latihan Nasional Dimulai Demi Kualifikasi Piala Dunia mendatang", category: "Sepak Bola • Tim Nasional", pageId: "bola", img: "img/bola-timnas.jpg" },
    { title: "Bintang Madrid Cetak Gol Spektakuler Jarak Jauh Kunci Gelar Juara", category: "Sepak Bola • Liga Spanyol", pageId: "bola", img: "img/bola-liga-spanyol.jpg" },
    { title: "Petenis Berbakat Spanyol Rebut Juara Grand Slam Lapangan Tanah Liat", category: "Tenis Dunia", pageId: "lainnya", img: "img/tenis-grandslam.jpg" },
    { title: "Tim Indonesia Sukses Raih Gelar Juara Dunia Game Bergenre Strategi", category: "E-sports", pageId: "lainnya", img: "img/esports.jpg" }
];

// -----------------------------------------------
// DATABASE LENGKAP: Isi artikel untuk halaman detail
// Setiap objek berisi: id, title, category, tag,
// pageId, img, author, date, readTime, lead,
// body (array paragraf/heading/blockquote), stats, tags
// -----------------------------------------------
const artikelDatabase = {

    // ===== BASKET =====
    "nba-final-game7": {
        id: "nba-final-game7",
        pageId: "basket",
        category: "Basket • NBA Playoffs 2026",
        tag: "NBA",
        img: "okc.webp",
        title: "Juara Bertahan Kunci Tiket Final NBA Setelah Laga Sengit 7 Game",
        author: "Budi Santoso",
        date: "31 Mei 2026",
        readTime: "5 menit baca",
        lead: "Tembakan tiga angka penentu di detik terakhir pertandingan Game 7 membawa sukacita luar biasa bagi fans setia tuan rumah. Juara bertahan kini resmi melaju ke babak final NBA 2026 setelah melewati salah satu seri playoff tersengit dalam sejarah liga.",
        body: [
            { type: "p", text: "Kegilaan malam itu dimulai sejak tip-off. Kedua tim tampil dengan intensitas tertinggi, menyadari bahwa satu kekalahan berarti akhir musim. Pertandingan berjalan ketat selama 48 menit penuh, dengan selisih poin yang tidak pernah melebihi 8 angka sepanjang laga." },
            { type: "h2", text: "Kuarter Terakhir yang Menguras Emosi" },
            { type: "p", text: "Memasuki kuarter keempat, skor terkunci di angka 98-98. Kedua pelatih menguras habis rotasi pemain mereka, mencoba setiap strategi yang ada. Timeout demi timeout diambil, masing-masing berusaha mendapatkan momentum terakhir yang menentukan." },
            { type: "p", text: "Ketegangan memuncak ketika sang bintang tuan rumah menerima umpan di sudut kanan, 0,8 detik tersisa di papan skor. Tanpa ragu, ia melompat dan melepaskan tembakan melengkung sempurna. Bola berputar di tepi ring selama sepersekian detik yang terasa seperti selamanya — sebelum akhirnya masuk." },
            { type: "blockquote", text: "\"Saya tidak punya waktu untuk berpikir. Sudah latihan ribuan kali, tubuh saya bergerak sendiri.\" — Pemain kunci tuan rumah usai pertandingan" },
            { type: "img", src: "okc.webp", caption: "Para pemain merayakan kemenangan dramatis Game 7 di hadapan ribuan fans tuan rumah. (Foto: Dokumentasi Tim)" },
            { type: "h2", text: "Perjalanan Seri yang Penuh Drama" },
            { type: "p", text: "Seri tujuh game ini menjadi salah satu yang paling memukau sepanjang era modern NBA. Tim tamu sempat unggul 3-2 dan berada di ambang kemenangan, namun kubu tuan rumah bangkit dengan dua kemenangan beruntun yang fenomenal." },
            { type: "p", text: "Kunci keberhasilan tuan rumah terletak pada perbaikan pertahanan di sisi perimeter. Pelatih kepala mengubah skema dari man-to-man menjadi zone defense 2-3 di kuarter keempat, langkah yang terbukti ampuh membatasi tembakan tiga angka lawan yang sebelumnya mendominasi." },
            { type: "h2", text: "Menuju Final: Tantangan Berikutnya" },
            { type: "p", text: "Dengan tiket final di tangan, sang juara bertahan kini bersiap menghadapi pemenang dari seri Barat yang masih berlangsung. Jadwal final dijadwalkan mulai dua pekan ke depan, memberikan waktu cukup bagi kedua kubu untuk memulihkan kondisi fisik pemain." },
            { type: "p", text: "\"Kami belum selesai. Ini baru satu langkah. Tujuan kami tetap satu — mempertahankan gelar juara,\" ujar kapten tim dalam konferensi pers pasca pertandingan." }
        ],
        stats: [
            { value: "103", label: "Poin Akhir" },
            { value: "38", label: "Top Scorer" },
            { value: "7", label: "Game Series" },
            { value: "48", label: "Menit Main" },
            { value: "12", label: "Assist" },
            { value: "9", label: "Rebound" }
        ],
        tags: ["NBA", "Playoffs 2026", "Basketball", "Game 7", "Final NBA"],
        related: ["nba-allstar", "ibl-bandung"]
    },

    "nba-allstar": {
        id: "nba-allstar",
        pageId: "basket",
        category: "Basket • NBA Global",
        tag: "NBA All-Star",
        img: "star.webp",
        title: "Pertunjukan Fantastis Tim Timur Menangi Laga Tahunan All-Star",
        author: "Rizky Pratama",
        date: "20 Februari 2026",
        readTime: "4 menit baca",
        lead: "Pesta dunk, hujan tembakan tiga angka, dan aksi individu spektakuler melarang selama empat kuarter penuh menghibur puluhan ribu penonton langsung di arena. Tim Timur berhasil keluar sebagai pemenang dalam laga tahunan yang selalu ditunggu-tunggu ini.",
        body: [
            { type: "p", text: "Seperti yang sudah menjadi tradisi, NBA All-Star Game 2026 hadir bukan sebagai ajang kompetisi serius, melainkan panggung hiburan kelas dunia di mana para bintang liga bebas berekspresi tanpa beban taktis yang ketat." },
            { type: "h2", text: "Aksi Individual yang Mencuri Perhatian" },
            { type: "p", text: "Bintang-bintang liga bergantian tampil memukau. Satu guard muda melakukan crossover ganda sebelum menyelesaikannya dengan floater ambidextrousnya yang khas, sementara big man veteran membuktikan ia masih bisa melayang dengan dunk berputar yang membuat arena bergema." },
            { type: "p", text: "Tim Timur tampil lebih terorganisir di babak kedua, membangun keunggulan 15 poin di kuarter ketiga sebelum mempertahankannya hingga peluit akhir berbunyi." },
            { type: "blockquote", text: "\"All-Star adalah waktu kami untuk berterima kasih kepada fans. Kami ingin memberi mereka show terbaik.\" — MVP All-Star 2026" },
            { type: "h2", text: "Slam Dunk Contest yang Legendaris" },
            { type: "p", text: "Di luar pertandingan utama, Slam Dunk Contest tahun ini menorehkan momen bersejarah ketika seorang rookie berhasil melakukan dunk melewati mantan MVP liga yang berdiri di bawah ring sebagai hambatan. Nilai sempurna dari seluruh juri membuat arena meledak." }
        ],
        stats: [
            { value: "211", label: "Poin Timur" },
            { value: "198", label: "Poin Barat" },
            { value: "43", label: "Top Scorer" },
            { value: "22", label: "Assist" },
            { value: "18", label: "Rebound" },
            { value: "OT", label: "Perpanjangan" }
        ],
        tags: ["NBA", "All-Star", "Basketball", "Hiburan"],
        related: ["nba-final-game7", "ibl-bandung"]
    },

    "ibl-bandung": {
        id: "ibl-bandung",
        pageId: "basket",
        category: "Basket • IBL Indonesia",
        tag: "IBL",
        img: "sm.webp",
        title: "Klub Kota Bandung Sukses Curi Kemenangan di Game Tandang Pertama",
        author: "Hendra Gunawan",
        date: "28 Mei 2026",
        readTime: "3 menit baca",
        lead: "Pertahanan zona ketat dan disiplin transisi ofensif-defensif yang terlatih baik berhasil mengunci pergerakan guard impor lawan. Klub asal Bandung meraih kemenangan tandang perdana yang sangat berarti dalam seri semifinal IBL 2026.",
        body: [
            { type: "p", text: "Jarang ada tim yang datang ke kandang lawan dan langsung mendikte permainan sejak menit pertama. Namun itulah yang dilakukan oleh klub Bandung malam itu, tampil percaya diri dengan game plan yang dieksekusi nyaris sempurna." },
            { type: "h2", text: "Zone Defense yang Membingungkan Lawan" },
            { type: "p", text: "Pelatih kepala memilih zone defense 2-3 sebagai senjata utama. Pilihan ini ternyata tepat sasaran karena guard impor lawan yang biasa bergerak bebas di sela-sela man-to-man defense mendadak kehilangan ritme. Tembakan tiga angka lawan anjlok ke persentase 23% dari biasanya 38%." },
            { type: "p", text: "Di sisi lain, transisi cepat menjadi senjata andalan Bandung. Setiap kali lawan gagal mencetak angka, mereka langsung berlari ke depan dan menyelesaikannya sebelum pertahanan lawan sempat terset." },
            { type: "h2", text: "Bintang Lokal Tampil Memukau" },
            { type: "p", text: "Point guard lokal berusia 23 tahun menjadi pemain paling menonjol dengan catatan 22 poin, 9 assist, dan nol turnover. Penampilannya malam itu menegaskan bahwa talenta lokal Indonesia sudah siap bersaing di level tertinggi." }
        ],
        stats: [
            { value: "89", label: "Poin Bandung" },
            { value: "81", label: "Poin Tuan Rumah" },
            { value: "22", label: "Top Scorer" },
            { value: "9", label: "Assist" },
            { value: "11", label: "Rebound" },
            { value: "23%", label: "3PT Lawan" }
        ],
        tags: ["IBL", "Basketball Indonesia", "Bandung", "Semifinal"],
        related: ["nba-final-game7", "nba-allstar"]
    },

    // ===== SEPAK BOLA =====
    "madrid-champions": {
        id: "madrid-champions",
        pageId: "bola",
        category: "Sepak Bola • Liga Champions UEFA",
        tag: "Liga Champions",
        img: "madrid.jpg",
        title: "Drama Adu Penalti Bawa Madrid ke Final: Malam yang Tak Terlupakan di Bernabeu",
        author: "Eko Wahyudi",
        date: "30 Mei 2026",
        readTime: "6 menit baca",
        lead: "Lima penalti sempurna mengantar Los Blancos melaju ke partai puncak Liga Champions untuk kali ketiga berturut-turut. Malam bersejarah di Santiago Bernabeu ini akan dikenang selamanya oleh jutaan pendukung setia mereka.",
        body: [
            { type: "p", text: "Suara gemuruh 85.000 penonton yang memenuhi Santiago Bernabeu seolah mampu menggoyahkan fondasi stadion ikonik itu. Laga semifinal leg kedua antara tuan rumah melawan raksasa Premier League berlangsung penuh intensitas sejak menit pembuka." },
            { type: "h2", text: "90 Menit yang Menegangkan" },
            { type: "p", text: "Madrid tampil dengan pressing tinggi sejak awal, memaksa lawan melakukan kesalahan di area berbahaya. Namun tim tamu menunjukkan ketangguhan defensif yang luar biasa, bermain dengan organisasi rapat dan mengandalkan serangan balik cepat." },
            { type: "p", text: "Gol penyeimbang di menit ke-87 memaksa laga berlanjut ke perpanjangan waktu. Dua kali 15 menit tambahan tidak menghasilkan gol, memaksa drama adu penalti yang sesungguhnya." },
            { type: "blockquote", text: "\"Ini bukan keberuntungan. Ini kerja keras selama bertahun-tahun. Bernabeu selalu memberi kami kekuatan ekstra.\" — Kapten Madrid" },
            { type: "img", src: "madrid.jpg", caption: "Kapten Madrid merayakan kemenangan adu penalti bersama ribuan pendukung di Bernabeu. (Foto: AFP)" },
            { type: "h2", text: "Eksekusi Penalti yang Sempurna" },
            { type: "p", text: "Lima eksekutor Madrid tampil sempurna, tidak satu pun meleset. Kiper veteran mereka menjadi pahlawan dengan menggagalkan dua tendangan penalti lawan di momen paling krusial." }
        ],
        stats: [
            { value: "1-1", label: "Skor 90 Menit" },
            { value: "5-3", label: "Penalti" },
            { value: "120", label: "Menit Laga" },
            { value: "78%", label: "Penguasaan" },
            { value: "14", label: "Tembakan" },
            { value: "2", label: "Penalti Gagal" }
        ],
        tags: ["Real Madrid", "Liga Champions", "Semifinal", "Penalti", "UEFA"],
        related: ["bintang-madrid", "pelatih-jerman"]
    },

    "bintang-madrid": {
        id: "bintang-madrid",
        pageId: "bola",
        category: "Sepak Bola • Liga Spanyol",
        tag: "LaLiga",
        img: "guler.webp",
        title: "Bintang Madrid Cetak Gol Spektakuler Jarak Jauh Kunci Gelar Juara",
        author: "Siti Rahayu",
        date: "25 Mei 2026",
        readTime: "4 menit baca",
        lead: "Tendangan melengkung akurat dari luar kotak pinalti yang menyasar sudut kanan atas gawang di menit ke-89 mengunci gelar juara LaLiga musim ini. Gol spektakuler ini langsung menjadi viral di seluruh media sosial dunia dalam hitungan menit.",
        body: [
            { type: "p", text: "Tidak ada yang menyangka laga terakhir musim ini akan berakhir sedemikian dramatis. Dengan skor masih imbang 1-1 dan waktu yang nyaris habis, sang bintang menerima bola di area 30 meter dari gawang lawan." },
            { type: "h2", text: "Tendangan yang Mengguncang Spanyol" },
            { type: "p", text: "Tanpa ragu ia melepaskan tendangan kaki kiri yang membentuk kurva sempurna. Bola melewati tembok satu pemain bertahan lawan sebelum mengecoh kiper yang bergerak ke arah berlawanan dan bersarang tepat di sudut kiri atas jaring gawang." },
            { type: "p", text: "Stadion berkapasitas 70.000 penonton bergetar. Para pemain sesama tim langsung berlarian ke arahnya. Selebrasi yang kemudian menjadi ikon musim ini pun dimulai." },
            { type: "blockquote", text: "\"Saya sudah berlatih tendangan seperti itu ribuan kali di sesi latihan. Ketika momen itu datang, saya percaya bisa melakukannya.\" — Pencetak gol" },
            { type: "h2", text: "Statistik Gol Terbaik Musim Ini" },
            { type: "p", text: "Menurut lembaga statistik olahraga terkemuka, tendangan tersebut memiliki kecepatan awal 112 km/jam dengan sudut elevasi 23 derajat. xG (Expected Goals) untuk situasi tembakan tersebut hanya 0.04 — benar-benar gol berkualitas langka." }
        ],
        stats: [
            { value: "2-1", label: "Skor Akhir" },
            { value: "89'", label: "Menit Gol" },
            { value: "30m", label: "Jarak Tendangan" },
            { value: "112", label: "km/jam" },
            { value: "0.04", label: "xG Gol" },
            { value: "36", label: "Gol Musim" }
        ],
        tags: ["Real Madrid", "LaLiga", "Gol Spektakuler", "Juara"],
        related: ["madrid-champions", "pelatih-jerman"]
    },

    "pelatih-jerman": {
        id: "pelatih-jerman",
        pageId: "bola",
        category: "Sepak Bola • Liga Champions",
        tag: "Liga Champions",
        img: "flick.webp",
        title: "Persiapan Matang Sang Pelatih Jerman Jelang Laga Final Eropa Terbesar",
        author: "Ahmad Fauzi",
        date: "29 Mei 2026",
        readTime: "5 menit baca",
        lead: "Pelatih asal Jerman itu dikenal dengan detail analisis video yang obsesif dan sesi latihan set-piece hingga larut malam. Kini, dengan final Liga Champions di depan mata, ia dan timnya telah mempersiapkan diri selama berminggu-minggu untuk momen paling penting musim ini.",
        body: [
            { type: "p", text: "Di ruang analisis yang penuh layar taktis, pelatih kepala itu memutar ulang satu klip yang sama untuk keempat belas kalinya. Ia memperhatikan pergerakan pemain bertahan lawan di situasi set-piece sudut gawang dengan teliti, mencatat setiap celah kecil yang mungkin bisa dieksploitasi." },
            { type: "h2", text: "Filosofi Persiapan yang Detail" },
            { type: "p", text: "Tim analisis yang terdiri dari tujuh analis video bekerja sepanjang waktu selama tiga minggu terakhir. Setiap pemain lawan sudah dipelajari secara individual — kebiasaan kaki tumpuan saat menahan bola, kecenderungan memutar ke arah mana saat dibayangi, dan zona lapangan mana yang menjadi area nyaman mereka." },
            { type: "p", text: "Sesi latihan pun didesain untuk mereplikasi situasi-situasi spesifik yang diperkirakan akan muncul di final. Enam puluh persen latihan harian berfokus pada fase bertahan terorganisir menghadapi high press lawan yang sudah sangat dikenal." },
            { type: "blockquote", text: "\"Dalam final, detail yang terkecil bisa menjadi penentu kemenangan atau kekalahan. Kami tidak boleh menyia-nyiakan satu jam pun persiapan.\" — Pelatih Kepala" },
            { type: "h2", text: "Kepercayaan Diri yang Dibangun" },
            { type: "p", text: "Yang menarik adalah bagaimana ia membangun kepercayaan diri tim tanpa mengorbankan rasa hormat kepada lawan. Ia dikenal selalu mengakui kualitas lawan secara terbuka kepada para pemainnya, namun di saat bersamaan meyakinkan mereka bahwa mereka memiliki semua alat untuk menang." }
        ],
        stats: [
            { value: "14", label: "Kemenangan" },
            { value: "2", label: "Seri" },
            { value: "0", label: "Kalah" },
            { value: "41", label: "Gol Dibuat" },
            { value: "8", label: "Gol Kemasukan" },
            { value: "UCL", label: "Target" }
        ],
        tags: ["Liga Champions", "Final", "Taktik", "Pelatih"],
        related: ["madrid-champions", "bintang-madrid"]
    },

    "timnas-latihan": {
        id: "timnas-latihan",
        pageId: "bola",
        category: "Sepak Bola • Tim Nasional",
        tag: "Timnas Indonesia",
        img: "timnas.jpg",
        title: "Pemusatan Latihan Nasional Dimulai Demi Kualifikasi Piala Dunia Mendatang",
        author: "Dani Kusuma",
        date: "27 Mei 2026",
        readTime: "4 menit baca",
        lead: "25 penggawa lokal dan diaspora resmi bergabung di pusat pelatihan Jakarta. Pelatih kepala timnas menegaskan bahwa target utama adalah lolos dari babak ketiga kualifikasi Piala Dunia yang semakin kompetitif musim ini.",
        body: [
            { type: "p", text: "Satu per satu pemain berdatangan ke fasilitas latihan berstandar FIFA yang baru diresmikan di pinggiran Jakarta. Mereka datang dari berbagai liga — dari Liga 1 Indonesia, kompetisi Eropa, hingga liga-liga Asia Tenggara — membawa semangat yang sama: membawa merah putih ke panggung Piala Dunia." },
            { type: "h2", text: "Skuad yang Kompetitif" },
            { type: "p", text: "Pelatih kepala memanggil 25 nama yang merupakan kombinasi pemain senior berpengalaman dan wajah-wajah muda berbakat. Empat pemain yang berbasis di Eropa turut hadir, menambah kualitas teknis dan mentalitas kompetitif yang dibutuhkan tim." },
            { type: "p", text: "Program pemusatan latihan dijadwalkan berlangsung selama tiga pekan penuh sebelum laga kualifikasi pertama. Fokus utama adalah mematangkan organisasi bertahan terstruktur dan kecepatan transisi menyerang yang menjadi identitas permainan timnas musim ini." },
            { type: "blockquote", text: "\"Kami tidak hanya datang untuk berpartisipasi. Kami datang untuk lolos. Setiap pemain harus membawa mentalitas itu.\" — Pelatih Kepala Timnas" },
            { type: "h2", text: "Jadwal Kualifikasi yang Berat" },
            { type: "p", text: "Timnas Indonesia tergabung dalam grup yang cukup berat bersama tiga negara yang peringkat FIFA-nya berada di atas. Namun pelatih kepala tetap optimis, mengingat rekor kandang timnas yang tidak terkalahkan dalam 12 laga terakhir di Gelora Bung Karno." }
        ],
        stats: [
            { value: "25", label: "Pemain Dipanggil" },
            { value: "4", label: "Pemain Eropa" },
            { value: "21", label: "Hari Latihan" },
            { value: "3", label: "Lawan Kualifikasi" },
            { value: "12", label: "Unbeaten Run" },
            { value: "GBK", label: "Venue Kandang" }
        ],
        tags: ["Timnas Indonesia", "Kualifikasi Piala Dunia", "Sepak Bola"],
        related: ["madrid-champions", "bintang-madrid"]
    },

    // ===== BADMINTON =====
    "indonesia-open-ganda": {
        id: "indonesia-open-ganda",
        pageId: "badminton",
        category: "Badminton • BWF Super 1000",
        tag: "Indonesia Open",
        img: "ganda.jpg",
        title: "Ganda Putra Indonesia Juara Umum Indonesia Open 2026",
        author: "Maya Putri",
        date: "31 Mei 2026",
        readTime: "5 menit baca",
        lead: "Melalui drama rubber game berdurasi 74 menit yang menguras tenaga dan emosi, pasangan ganda putra Indonesia berhasil naik ke podium tertinggi turnamen Indonesia Open 2026. Kemenangan ini semakin mempertegas dominasi Indonesia di nomor ganda putra dunia.",
        body: [
            { type: "p", text: "Istora Senayan bergema dengan teriakan puluhan ribu penonton yang memenuhi setiap sudut arena bersejarah itu. Pertandingan final ganda putra antara pasangan tuan rumah melawan unggulan pertama asal China berlangsung dalam atmosfer yang sulit dilukiskan dengan kata-kata." },
            { type: "h2", text: "Game Pertama yang Dramatis" },
            { type: "p", text: "Game pertama berjalan sangat ketat. Kedua pasangan saling bergantian memimpin, tidak pernah ada yang unggul lebih dari tiga poin. Smash tajam dipadu defense yang tangguh menjadi pertunjukan bulu tangkis di level tertinggi. Indonesia akhirnya menutup game pertama 21-19 setelah serangkaian rally panjang yang membuat penonton berdiri." },
            { type: "p", text: "China membalas di game kedua dengan permainan yang lebih agresif di net. Netting tipis dan drop shot akurat mereka membuat pasangan Indonesia kesulitan merespons, hingga game kedua berakhir 19-21." },
            { type: "blockquote", text: "\"Di game ketiga, kami hanya fokus pada setiap poin satu per satu. Tidak memikirkan skor, tidak memikirkan juara. Hanya poin berikutnya.\" — Pasangan Juara" },
            { type: "img", src: "ganda.jpg", caption: "Pasangan ganda putra Indonesia mengangkat trofi Indonesia Open 2026 di Istora Senayan. (Foto: PBSI)" },
            { type: "h2", text: "Rubber Game yang Mendebarkan" },
            { type: "p", text: "Game ketiga menjadi pertarungan mental dan fisik sekaligus. Di angka 19-19, pasangan Indonesia melakukan service tipis yang menyentuh net sebelum jatuh di sisi lapangan lawan — poin yang kemudian menjadi momentum kemenangan. Mereka menutup laga 21-19 dengan smash keras yang tidak terjangkau kiper lawan." }
        ],
        stats: [
            { value: "3-0", label: "Set Juara" },
            { value: "74", label: "Menit Laga" },
            { value: "21-19", label: "Set Ketiga" },
            { value: "#2", label: "Ranking Dunia" },
            { value: "5", label: "Gelar 2026" },
            { value: "IDN", label: "Negara" }
        ],
        tags: ["BWF", "Indonesia Open", "Ganda Putra", "Juara", "Istora"],
        related: ["bwf-tunggal-putri"]
    },

    "bwf-tunggal-putri": {
        id: "bwf-tunggal-putri",
        pageId: "badminton",
        category: "Badminton • BWF World Tour",
        tag: "BWF Masters",
        img: "putri.jpg",
        title: "Kebangkitan Tunggal Putri Indonesia Sabet Emas Turnamen BWF Masters",
        author: "Lisa Andriani",
        date: "15 Mei 2026",
        readTime: "4 menit baca",
        lead: "Taktik netting tipis dan permainan net yang agresif menyulitkan pergerakan pemain kidal asal Jepang. Tunggal putri Indonesia berhasil keluar sebagai juara BWF Masters dalam penampilan yang oleh banyak pengamat disebut sebagai performa terbaiknya sepanjang karier.",
        body: [
            { type: "p", text: "Selama hampir dua tahun absen dari podium tertinggi akibat cedera lutut yang menguras semangat, atlet tunggal putri kebanggaan Indonesia itu kembali hadir dalam kondisi yang bahkan lebih baik dari sebelumnya. Pemulihannya bukan hanya fisik, tetapi juga mental." },
            { type: "h2", text: "Taktik yang Membedakan" },
            { type: "p", text: "Pelatih tekniknya merancang pendekatan yang berbeda menghadapi gaya bermain kidal lawannya. Alih-alih bermain dari belakang lapangan, ia diinstruksikan untuk aktif di depan net, memotong bola-bola pendek lawan sebelum mereka sempat berkembang." },
            { type: "p", text: "Hasilnya luar biasa. Lawan yang biasanya mendominasi permainan net mendadak tidak bisa masuk ke zona nyamannya. Pengembalian bola menjadi tidak akurat, dan tekanan yang terus-menerus dari net membuat lawan kehabisan opsi." },
            { type: "blockquote", text: "\"Cedera itu mengajarkan saya banyak hal. Saya belajar bersabar, belajar mendengarkan tubuh saya, dan belajar menikmati proses kembali.\" — Juara BWF Masters" },
            { type: "h2", text: "Makna Kemenangan Ini" },
            { type: "p", text: "Bagi federasi bulu tangkis Indonesia, kemenangan ini datang di waktu yang sangat tepat menjelang rangkaian turnamen super series dan persiapan menuju kejuaraan dunia. Memiliki tunggal putri yang kembali kompetitif di level tertinggi membuka peluang lebih besar untuk meraih kejuaraan bergengsi berikutnya." }
        ],
        stats: [
            { value: "21-18", label: "Set 1" },
            { value: "19-21", label: "Set 2" },
            { value: "21-16", label: "Set 3" },
            { value: "63", label: "Menit" },
            { value: "#5", label: "Ranking Dunia" },
            { value: "BWF", label: "Level" }
        ],
        tags: ["BWF", "Tunggal Putri", "Indonesia", "Masters", "Comeback"],
        related: ["indonesia-open-ganda"]
    },

    // ===== BALAP =====
    "mercedes-silverstone": {
        id: "mercedes-silverstone",
        pageId: "balap",
        category: "Motorsport • Formula 1",
        tag: "Formula 1",
        img: "russel.webp",
        title: "Dominasi Red Bull Mulai Luntur, Mercedes Raih Posisi Satu Dua di Silverstone",
        author: "Dimas Prasetyo",
        date: "30 Mei 2026",
        readTime: "5 menit baca",
        lead: "Gaya mengemudi sabar di trek setengah basah dan keputusan strategi yang tepat waktu membuahkan hasil luar biasa bagi duo driver Mercedes di Silverstone. Kemenangan satu-dua ini menjadi sinyal bahwa persaingan gelar konstruktor musim ini akan semakin sengit.",
        body: [
            { type: "p", text: "Hujan gerimis yang turun di lap ke-23 dari 52 lap total menjadi titik balik yang mengubah segalanya. Di sinilah ketenangan dan pengalaman luas duo Mercedes berbicara, sementara tim-tim rival tergesa-gesa membuat keputusan yang mereka sesali kemudian." },
            { type: "h2", text: "Keputusan Pit yang Mengubah Segalanya" },
            { type: "p", text: "Sementara sebagian besar tim memilih intermediate tyre begitu hujan mulai turun, Mercedes nekat mempertahankan slick tire selama tiga lap tambahan. Kalkulasi mereka ternyata tepat — trek justru mengering kembali, dan posisi yang dipertahankan itu menjadi modal menuju podium." },
            { type: "blockquote", text: "\"Kami memonitor data cuaca setiap 30 detik. Ketika radarnya menunjukkan hujan akan berhenti, kami memutuskan bertahan di slick.\" — Kepala Strategi Mercedes" },
            { type: "img", src: "img/balap-f1.jpg", caption: "Duo Mercedes merayakan kemenangan satu-dua bersejarah di Silverstone. (Foto: Mercedes AMG F1)" },
            { type: "h2", text: "Dampak pada Klasemen Konstruktor" },
            { type: "p", text: "Dengan kemenangan ini, Mercedes memangkas jarak poin dengan Red Bull menjadi hanya 47 poin. Masih ada 11 seri tersisa musim ini — gelar konstruktor masih sangat terbuka. Para analis memperkirakan minimal lima tim masih punya peluang realistis merebut gelar." }
        ],
        stats: [
            { value: "1-2", label: "Posisi Finis" },
            { value: "52", label: "Total Lap" },
            { value: "47", label: "Jarak Poin" },
            { value: "23", label: "Lap Hujan" },
            { value: "1:24.8", label: "Best Lap" },
            { value: "11", label: "Seri Tersisa" }
        ],
        tags: ["Formula 1", "Mercedes", "Silverstone", "Strategi", "Konstruktor"],
        related: ["pitstop-dramatis", "motogp-mandalika"]
    },

    "pitstop-dramatis": {
        id: "pitstop-dramatis",
        pageId: "balap",
        category: "Motorsport • Formula 1",
        tag: "Formula 1",
        img: "f1.webp",
        title: "Siasat Cerdik Pit Stop Membuahkan Kemenangan Dramatis Tim Biru",
        author: "Dimas Prasetyo",
        date: "31 Mei 2026",
        readTime: "4 menit baca",
        lead: "Keputusan krusial mengganti ban basah tepat sebelum rintik hujan turun secara signifikan merubah nasib tim di kualifikasi Grand Prix Monako. Apa yang tampak seperti gamble ternyata adalah kalkulasi cermat berbasis data real-time.",
        body: [
            { type: "p", text: "Di garasi tim, ketegangan memuncak. Kepala strategi menatap layar radar cuaca sambil berbicara cepat dengan race engineer di radio. \"Kita punya window dua lap,\" katanya tenang meski hatinya berdegup kencang." },
            { type: "h2", text: "Tiga Detik yang Mengubah Segalanya" },
            { type: "p", text: "Pit stop kilat 2,8 detik — salah satu yang tercepat musim ini — dilakukan dengan sempurna. Ketika mobil kembali ke trek dengan ban slick baru yang segar, para rival masih bergulung dengan ban setengah aus. Keunggulan tempo yang diraih dalam lima lap berikutnya menjadi tak terbendung." },
            { type: "p", text: "Hujan yang sesungguhnya baru turun 12 lap kemudian. Pada saat itu, tim biru sudah membangun keunggulan 18 detik yang aman dari pengejaran siapapun." },
            { type: "blockquote", text: "\"Kami tidak berjudi. Kami hanya mempercayai data kami lebih dari yang lain mempercayai data mereka.\" — Kepala Tim" }
        ],
        stats: [
            { value: "P1", label: "Posisi Finis" },
            { value: "2.8", label: "Detik Pit Stop" },
            { value: "18", label: "Detik Gap" },
            { value: "5", label: "Lap Unggul" },
            { value: "Monako", label: "Sirkuit" },
            { value: "12", label: "Lap ke Hujan" }
        ],
        tags: ["Formula 1", "Pit Stop", "Strategi", "Monako", "GP"],
        related: ["mercedes-silverstone", "motogp-mandalika"]
    },

    "motogp-mandalika": {
        id: "motogp-mandalika",
        pageId: "balap",
        category: "Motorsport • MotoGP",
        tag: "MotoGP",
        img: "gp.jpg",
        title: "Perubahan Setelan Aero Winglet Berbuah Kemenangan Podium Pertama",
        author: "Teguh Wibowo",
        date: "28 Mei 2026",
        readTime: "4 menit baca",
        lead: "Pebalap Italia sukses menahan gempuran pebalap Spanyol yang semakin intens di tikungan-tikungan terakhir Sirkuit Mandalika. Kemenangan podium pertama ini merupakan hasil dari penyesuaian aerodinamika winglet yang dilakukan tim malam sebelum race.",
        body: [
            { type: "p", text: "Sirkuit Mandalika dengan karakteristik panas dan angin lautnya selalu menjadi teka-teki tersendiri bagi tim-tim MotoGP. Tahun ini, salah satu tim Eropa berhasil memecahkan teka-teki itu dengan modifikasi winglet yang tak terduga." },
            { type: "h2", text: "Inovasi Teknis di Malam Terakhir" },
            { type: "p", text: "Setelah sesi latihan terakhir menunjukkan masalah stabilitas di kecepatan tinggi, tim teknisi bekerja sepanjang malam untuk menyesuaikan geometri winglet. Perubahan kecil sebesar 3 derajat pada sudut serangan winglet belakang ternyata memberikan efek besar pada stabilitas pengereman." },
            { type: "blockquote", text: "\"Perbedaannya terasa sejak lap pertama warm-up. Motor terasa seperti menempel di aspal di titik-titik pengereman.\" — Pebalap Juara" },
            { type: "h2", text: "Duel Akhir yang Mendebarkan" },
            { type: "p", text: "Di tiga lap terakhir, pebalap Spanyol menempel di belakang dengan jarak kurang dari 0,3 detik. Setiap tikungan menjadi duel sengit. Namun stabilitas motor yang lebih baik memberikan kepercayaan diri ekstra untuk mempertahankan jalur terbaik di setiap apex." }
        ],
        stats: [
            { value: "P1", label: "Posisi Finis" },
            { value: "0.3", label: "Detik Gap P2" },
            { value: "3°", label: "Perubahan Winglet" },
            { value: "27", label: "Total Lap" },
            { value: "INA", label: "GP" },
            { value: "1:33.2", label: "Best Lap" }
        ],
        tags: ["MotoGP", "Mandalika", "Teknik", "Aerodinamika", "Italia"],
        related: ["pitstop-dramatis", "mercedes-silverstone"]
    },

    // ===== LAINNYA =====
    "roland-garros-spanyol": {
        id: "roland-garros-spanyol",
        pageId: "lainnya",
        category: "Tenis Dunia • Grand Slam",
        tag: "Roland Garros",
        img: "tenis.jpeg",
        title: "Petenis Berbakat Spanyol Rebut Juara Grand Slam Lapangan Tanah Liat",
        author: "Nadia Kusuma",
        date: "29 Mei 2026",
        readTime: "5 menit baca",
        lead: "Uletnya pengembalian bola baseline dan ketahanan fisik yang luar biasa membuat lawannya kehabisan tenaga di set ketiga. Petenis Spanyol berusia 21 tahun itu meraih gelar Grand Slam pertamanya di Roland Garros dengan cara yang menawan.",
        body: [
            { type: "p", text: "Court Philippe-Chatrier, lapangan tenis paling ikonik di atas tanah liat dunia, menjadi saksi lahirnya juara baru yang bisa jadi akan mendominasi tenis dunia untuk satu dekade ke depan. Petenis Spanyol yang baru menginjak usia 21 tahun itu bermain dengan kedewasaan dan ketanangan yang jauh melampaui usianya." },
            { type: "h2", text: "Baseline yang Tak Terbendung" },
            { type: "p", text: "Gaya bermain baseline yang sabar dan konsisten adalah senjata utamanya. Di tanah liat Roland Garros yang memperlambat bola dan menguntungkan pemain baseliner, ia bagaikan ikan dalam air. Setiap pukulan diarahkan dengan presisi ke sudut-sudut lapangan, memaksa lawan berlari tanpa henti." },
            { type: "p", text: "Set pertama berlangsung sesuai prediksi — 6-3 untuk Spanyol. Set kedua menjadi lebih dramatis ketika lawan mulai menyerang lebih agresif dengan serve-and-volley yang tidak biasa di tanah liat. Namun Spanyol tetap tenang, menutupnya 7-5." },
            { type: "blockquote", text: "\"Roland Garros selalu menjadi impian saya. Bermain di sini terasa seperti bermain di kandang sendiri.\" — Juara Roland Garros 2026" },
            { type: "h2", text: "Warisan Tenis Spanyol Berlanjut" },
            { type: "p", text: "Kemenangan ini meneruskan tradisi emas tenis Spanyol di tanah liat. Para analis tenis memperkirakan bahwa dengan usianya yang masih sangat muda, ia berpotensi memenangkan Roland Garros berkali-kali lagi di masa mendatang, mengikuti jejak para legenda tanah liat pendahulunya." }
        ],
        stats: [
            { value: "6-3", label: "Set 1" },
            { value: "7-5", label: "Set 2" },
            { value: "6-4", label: "Set 3" },
            { value: "2:24", label: "Durasi" },
            { value: "21", label: "Usia Juara" },
            { value: "#8", label: "Ranking ATP" }
        ],
        tags: ["Tenis", "Roland Garros", "Grand Slam", "Spanyol", "Tanah Liat"],
        related: ["esports-strategi"]
    },

    "esports-strategi": {
        id: "esports-strategi",
        pageId: "lainnya",
        category: "E-Sports • Kejuaraan Dunia",
        tag: "E-Sports",
        img: "fm.jpeg",
        title: "Tim Indonesia Sukses Raih Gelar Juara Dunia Game Bergenre Strategi",
        author: "Kevin Hartanto",
        date: "26 Mei 2026",
        readTime: "4 menit baca",
        lead: "Mental tangguh dan eksekusi strategi yang sangat matang di babak pamungkas membawa kemenangan manis bagi tim Indonesia. Pencapaian bersejarah ini menjadi gelar kejuaraan dunia esports pertama dari tim dengan mayoritas pemain lokal Indonesia.",
        body: [
            { type: "p", text: "Di hadapan 20.000 penonton yang memenuhi arena esports terbesar di Asia dan jutaan pemirsa yang menyaksikan secara online, tim Indonesia mengukir sejarah yang akan dikenang dunia gaming untuk waktu yang lama." },
            { type: "h2", text: "Perjalanan Menuju Podium Dunia" },
            { type: "p", text: "Perjalanan tim Indonesia di kejuaraan dunia ini tidak mudah. Mereka hampir tersisih di fase grup setelah kalah dari dua tim unggulan Korea Selatan dan China. Namun kemenangan di tiga laga terakhir fase grup dengan cara-cara yang dramatis memperlihatkan karakter dan mental juara yang sesungguhnya." },
            { type: "p", text: "Di fase eliminasi, mereka memperlihatkan evolusi strategi yang terus berkembang. Setiap lawan dihadapi dengan pendekatan yang berbeda — bukti persiapan analitis yang menyeluruh dari tim pelatih yang bekerja keras selama berbulan-bulan." },
            { type: "blockquote", text: "\"Kami bermain untuk 270 juta orang Indonesia yang mendukung kami. Tekanan itu justru menjadi bahan bakar kami.\" — Kapten Tim" },
            { type: "h2", text: "Dampak Bagi Ekosistem Esports Indonesia" },
            { type: "p", text: "Kemenangan ini diharapkan menjadi katalis bagi perkembangan ekosistem esports Indonesia yang sudah mulai menunjukkan tanda-tanda matang. Beberapa perusahaan besar disebut-sebut tertarik untuk meningkatkan investasi mereka di sektor ini pasca kemenangan bersejarah ini." }
        ],
        stats: [
            { value: "3-1", label: "Skor Final" },
            { value: "20K", label: "Penonton" },
            { value: "4", label: "Jam Bermain" },
            { value: "#1", label: "Ranking Dunia" },
            { value: "IDN", label: "Negara" },
            { value: "$500K", label: "Prize Pool" }
        ],
        tags: ["E-Sports", "Kejuaraan Dunia", "Indonesia", "Strategi", "Gaming"],
        related: ["roland-garros-spanyol"]
    },

    // ===== OPINI =====
    "opini-atlet-dini": {
        id: "opini-atlet-dini",
        pageId: "opini",
        category: "Opini • Kolom Editorial",
        tag: "Opini",
        img: "laureus.webp",
        title: "Investasi Atlet Usia Dini: Kunci Utama Meraih Prestasi Olahraga Berkelanjutan",
        author: "Andi Wijaya (Redaktur Senior)",
        date: "26 Mei 2026",
        readTime: "7 menit baca",
        lead: "Meraih podium juara di kancah internasional adalah dambaan setiap bangsa. Namun jalan menuju kejayaan tidak bisa dibangun secara instan melalui program naturalisasi atlet kilat atau sekadar pemusatan latihan berdurasi beberapa pekan menjelang kejuaraan.",
        body: [
            { type: "p", text: "Negara-negara yang mendominasi perolehan medali emas di Olimpiade, seperti Tiongkok, Amerika Serikat, dan Jerman, memiliki kesamaan mendasar: sistem kurikulum olahraga sekolah dasar terstruktur rapi. Mereka menanamkan kecintaan olahraga sejak belia, mengasah bakat alami anak, dan menyediakan fasilitas latihan berstandar baik." },
            { type: "h2", text: "Kondisi Pembinaan Olahraga Indonesia" },
            { type: "p", text: "Di sinilah Indonesia perlu merombak fundamental pola pembinaan olahraga. Guru-guru penjaskes sekolah dasar harus memiliki bekal pengetahuan sains olahraga (sports science) dasar yang mumpuni guna mengidentifikasi anak yang berbakat di cabang atletik, renang, bulu tangkis, atau senam sejak dini." },
            { type: "p", text: "Saat ini, realitanya masih jauh dari ideal. Banyak sekolah dasar di luar kota besar yang bahkan tidak memiliki lapangan olahraga yang layak. Guru penjaskes kerap mengajar dengan peralatan seadanya dan kurikulum yang tidak diperbarui selama bertahun-tahun." },
            { type: "blockquote", text: "\"Kita tidak bisa panen di tahun ketiga jika tidak menanam benih di tahun pertama. Investasi atlet dini adalah benih itu.\" — Prof. Dr. Iwan Setiawan, Pakar Ilmu Keolahragaan" },
            { type: "h2", text: "Model yang Bisa Diadopsi" },
            { type: "p", text: "Jerman dan Australia memiliki program talent scouting nasional yang terstruktur. Setiap sekolah dasar wajib melaporkan hasil pengukuran fisik dan kemampuan motorik siswa setiap semester ke database nasional. Dari sana, petugas talent scout profesional menindaklanjuti dengan kunjungan langsung." },
            { type: "p", text: "Indonesia tidak harus meniru persis. Namun esensinya — deteksi bakat dini, pembinaan sistematis, dan fasilitas yang merata — harus menjadi prioritas kebijakan olahraga nasional jika kita serius ingin berkompetisi di panggung dunia." },
            { type: "h2", text: "Investasi Jangka Panjang" },
            { type: "p", text: "Pembangunan sistem pembinaan atlet usia dini membutuhkan komitmen lintas pemerintahan. Hasilnya tidak akan terlihat dalam satu atau dua tahun ke depan. Namun dalam satu dekade, jika dijalankan dengan konsisten, hasilnya akan terasa nyata: generasi atlet Indonesia yang berkualitas dunia dari rahim tanah air sendiri." }
        ],
        stats: [],
        tags: ["Opini", "Pembinaan Atlet", "Pendidikan Olahraga", "Indonesia", "Prestasi"],
        related: ["opini-atlet-dini"]
    },

    "opini-top50": {
        id: "opini-top50",
        pageId: "opini",
        category: "Opini • Peringkat Eksklusif",
        tag: "Opini",
        img: "laureus.webp",
        title: "Peringkat: 50 Pemain Terbaik Dunia di Seluruh Cabang Olahraga Musim Ini",
        author: "Tim Editorial SportsBlue",
        date: "31 Mei 2026",
        readTime: "10 menit baca",
        lead: "Kami merangkum atlet sepak bola, pebasket, pebalap, dan bintang badminton dengan pengaruh terbesar sepanjang turnamen global tahun ini. Daftar eksklusif yang menggabungkan statistik performa, dampak tim, dan dominasi kompetitif.",
        body: [
            { type: "p", text: "Menyusun peringkat 50 atlet terbaik dunia lintas cabang olahraga bukan pekerjaan mudah. Tim editorial SportsBlue menghabiskan dua bulan menganalisis data statistik, hasil pertandingan, dampak terhadap tim, dan faktor-faktor kualitatif yang tidak selalu tertangkap oleh angka." },
            { type: "h2", text: "Metodologi Penilaian" },
            { type: "p", text: "Sistem penilaian kami menggunakan empat dimensi utama: performa statistik (30%), kontribusi terhadap kemenangan tim (30%), konsistensi sepanjang musim (25%), dan dampak pada kejuaraan besar (15%). Setiap cabang olahraga dinilai dalam konteksnya masing-masing." },
            { type: "h2", text: "Bintang-Bintang yang Mendominasi" },
            { type: "p", text: "Dari sepak bola, pemain-pemain yang tampil di putaran akhir Liga Champions dan kualifikasi Piala Dunia mendapat poin lebih tinggi karena kualitas lawan yang lebih ketat. Di NBA, pemain yang mampu mengangkat tim medioker ke playoff mendapat apresiasi khusus." },
            { type: "blockquote", text: "\"Angka hanyalah bahasa. Seni menilai atlet terbaik adalah memahami cerita di balik angka itu.\" — Pemimpin Redaksi SportsBlue" },
            { type: "h2", text: "Kejutan dan Pendatang Baru" },
            { type: "p", text: "Yang menarik dari daftar tahun ini adalah masuknya beberapa nama muda yang belum pernah muncul sebelumnya. Petenis Spanyol berusia 21 tahun yang baru saja memenangkan Roland Garros langsung masuk di posisi yang mengejutkan. Begitu pula beberapa atlet Asia Tenggara yang kian kompetitif di panggung dunia." }
        ],
        stats: [],
        tags: ["Opini", "Top 50", "Ranking", "Lintas Olahraga", "SportsBlue"],
        related: ["opini-atlet-dini"]
    }
};

// Map untuk menghubungkan kartu berita ke ID artikel
// Key: tuple (pageId, judul-kecil/keyword) atau ID eksplisit
const cardToArticleMap = {
    // Basket
    "nba-final":    "nba-final-game7",
    "nba-allstar":  "nba-allstar",
    "ibl-bandung":  "ibl-bandung",
    // Bola
    "madrid-drama": "madrid-champions",
    "bintang-madrid": "bintang-madrid",
    "pelatih-jerman": "pelatih-jerman",
    "timnas-latihan": "timnas-latihan",
    // Badminton
    "ganda-juara":      "indonesia-open-ganda",
    "tunggal-putri":    "bwf-tunggal-putri",
    // Balap
    "mercedes-1-2":    "mercedes-silverstone",
    "pitstop":         "pitstop-dramatis",
    "motogp-winglet":  "motogp-mandalika",
    "supercar-muda":   "pitstop-dramatis",
    // Lainnya
    "roland-garros":   "roland-garros-spanyol",
    "esports-juara":   "esports-strategi",
    // Opini
    "opini-top50":     "opini-top50",
    "opini-dini":      "opini-atlet-dini"
};

// Halaman asal sebelum buka detail (untuk tombol kembali)
let previousPageId = "home";

// -----------------------------------------------
// FUNGSI UTAMA: Buka halaman detail berita
// -----------------------------------------------
function openDetail(articleId) {
    const artikel = artikelDatabase[articleId];
    if (!artikel) {
        console.warn("Artikel tidak ditemukan:", articleId);
        return;
    }

    // Simpan halaman asal
    previousPageId = document.querySelector('.page-section.active')?.id?.replace('page-', '') || 'home';

    // Render konten detail
    renderDetailPage(artikel);

    // Sembunyikan semua halaman & tampilkan detail
    listPages.forEach(page => {
        const pageEl = document.getElementById(`page-${page}`);
        if (pageEl) pageEl.classList.remove('active');
        const navBtn = document.getElementById(`nav-${page}`);
        if (navBtn) navBtn.classList.remove('active');
    });

    const detailPage = document.getElementById('page-detail');
    if (detailPage) detailPage.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
    clearSearch();
}

// -----------------------------------------------
// RENDER konten halaman detail secara dinamis
// -----------------------------------------------
function renderDetailPage(artikel) {
    // Gambar hero
    const heroImg = document.getElementById('detail-hero-img');
    if (heroImg) heroImg.src = artikel.img;

    // Badge hero
    const heroBadge = document.getElementById('detail-hero-badge');
    if (heroBadge) heroBadge.textContent = artikel.category;

    // Label hero bawah
    const heroLabel = document.getElementById('detail-hero-label');
    if (heroLabel) heroLabel.textContent = artikel.tag;

    // Tag atas artikel
    const detailTag = document.getElementById('detail-tag');
    if (detailTag) detailTag.textContent = artikel.category;

    // Judul
    const detailTitle = document.getElementById('detail-title');
    if (detailTitle) detailTitle.textContent = artikel.title;

    // Meta: penulis
    const metaAuthor = document.getElementById('detail-meta-author');
    if (metaAuthor) metaAuthor.textContent = artikel.author;

    // Meta: tanggal
    const metaDate = document.getElementById('detail-meta-date');
    if (metaDate) metaDate.textContent = artikel.date;

    // Meta: waktu baca
    const metaRead = document.getElementById('detail-meta-read');
    if (metaRead) metaRead.textContent = artikel.readTime;

    // Lead
    const detailLead = document.getElementById('detail-lead');
    if (detailLead) detailLead.textContent = artikel.lead;

    // Body artikel
    const detailBody = document.getElementById('detail-body');
    if (detailBody) {
        detailBody.innerHTML = '';
        artikel.body.forEach(item => {
            if (item.type === 'p') {
                const p = document.createElement('p');
                p.textContent = item.text;
                detailBody.appendChild(p);
            } else if (item.type === 'h2') {
                const h = document.createElement('h2');
                h.textContent = item.text;
                detailBody.appendChild(h);
            } else if (item.type === 'blockquote') {
                const bq = document.createElement('blockquote');
                bq.textContent = item.text;
                detailBody.appendChild(bq);
            } else if (item.type === 'img') {
                const img = document.createElement('img');
                img.src = item.src;
                img.alt = item.caption || '';
                img.className = 'detail-inline-img';
                detailBody.appendChild(img);
                if (item.caption) {
                    const cap = document.createElement('p');
                    cap.className = 'detail-img-caption';
                    cap.textContent = item.caption;
                    detailBody.appendChild(cap);
                }
            }
        });
    }

    // Statistik sidebar
    const statsBox = document.getElementById('detail-stats-box');
    if (statsBox) {
        if (artikel.stats && artikel.stats.length > 0) {
            statsBox.innerHTML = '';
            artikel.stats.forEach(s => {
                const div = document.createElement('div');
                div.className = 'stat-item';
                div.innerHTML = `<div class="stat-value">${s.value}</div><div class="stat-label">${s.label}</div>`;
                statsBox.appendChild(div);
            });
            document.getElementById('detail-stats-widget').style.display = 'block';
        } else {
            document.getElementById('detail-stats-widget').style.display = 'none';
        }
    }

    // Tags bawah artikel
    const detailTagsEl = document.getElementById('detail-tags');
    if (detailTagsEl && artikel.tags) {
        detailTagsEl.innerHTML = '';
        artikel.tags.forEach(t => {
            const span = document.createElement('span');
            span.className = 'detail-tag-pill';
            span.textContent = t;
            detailTagsEl.appendChild(span);
        });
    }

    // Berita terkait sidebar
    const relatedList = document.getElementById('detail-related-list');
    if (relatedList && artikel.related) {
        relatedList.innerHTML = '';
        artikel.related.forEach(relId => {
            const rel = artikelDatabase[relId];
            if (!rel) return;
            const card = document.createElement('div');
            card.className = 'related-card';
            card.onclick = () => openDetail(relId);
            card.innerHTML = `
                <img src="${rel.img}" alt="${rel.title}">
                <div>
                    <span class="related-card-tag">${rel.tag}</span>
                    <p class="related-card-title">${rel.title}</p>
                </div>`;
            relatedList.appendChild(card);
        });
    }

    // Tombol kembali
    const backBtn = document.getElementById('detail-back-btn');
    if (backBtn) {
        const prevLabel = getLabelForPage(previousPageId);
        backBtn.innerHTML = `
            <svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>
            Kembali ke ${prevLabel}`;
    }
}

function getLabelForPage(pageId) {
    const labels = {
        home: "Beranda", bola: "Kanal Bola", basket: "Kanal Basket",
        badminton: "Kanal Badminton", balap: "Kanal Balap",
        lainnya: "Olahraga Lainnya", opini: "Opini & Esai", tentang: "Tentang"
    };
    return labels[pageId] || "Beranda";
}

// -----------------------------------------------
// FUNGSI: Kembali dari halaman detail
// -----------------------------------------------
function closeDetail() {
    switchPage(previousPageId);
}

// -----------------------------------------------
// 1. DYNAMIC PAGE ROUTER LOGIC
// -----------------------------------------------
const listPages = ['home', 'bola', 'basket', 'badminton', 'balap', 'lainnya', 'opini', 'tentang', 'detail'];

function switchPage(targetPageId) {
    listPages.forEach(page => {
        const pageEl = document.getElementById(`page-${page}`);
        if (pageEl) pageEl.classList.remove('active');

        const navBtn = document.getElementById(`nav-${page}`);
        if (navBtn) navBtn.classList.remove('active');

        const mobileBtn = document.querySelector(`.mobile-nav-btn[data-page="${page}"]`);
        if (mobileBtn) mobileBtn.classList.remove('active');
    });

    const targetEl = document.getElementById(`page-${targetPageId}`);
    if (targetEl) targetEl.classList.add('active');

    // Beri highlight navbar (kecuali untuk halaman detail)
    if (targetPageId !== 'detail') {
        const activeNavBtn = document.getElementById(`nav-${targetPageId}`);
        if (activeNavBtn) activeNavBtn.classList.add('active');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    clearSearch();
}

// -----------------------------------------------
// Mobile Menu Toggle
// -----------------------------------------------
function toggleMobileMenu() {
    var menu      = document.getElementById('mobile-menu');
    var iconOpen  = document.getElementById('menu-icon-open');
    var iconClose = document.getElementById('menu-icon-close');
    var isOpen    = menu.classList.contains('open');
    if (isOpen) {
        menu.classList.remove('open');
        iconOpen.style.display  = 'block';
        iconClose.style.display = 'none';
    } else {
        menu.classList.add('open');
        iconOpen.style.display  = 'none';
        iconClose.style.display = 'block';
    }
}
// -----------------------------------------------
// 3. DUAL THEME SWITCHER LOGIC
// -----------------------------------------------
function toggleTheme() {
    var html = document.documentElement;
    var sun  = document.getElementById('theme-sun-icon');
    var moon = document.getElementById('theme-moon-icon');
    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        html.classList.add('light');
        if (sun)  sun.style.display = 'none';
        if (moon) moon.style.display = 'block';
    } else {
        html.classList.remove('light');
        html.classList.add('dark');
        if (moon) moon.style.display = 'none';
        if (sun)  sun.style.display  = 'block';
    }
}

// -----------------------------------------------
// 4. SOCCER CATEGORY FILTER LOGIC
// -----------------------------------------------
function filterSoccer(category) {
    const cards = document.querySelectorAll('.soccer-card');

    ['semua', 'nasional', 'internasional'].forEach(btn => {
        const el = document.getElementById(`btn-soccer-${btn}`);
        if (el) el.classList.toggle('active', btn === category);
    });

    cards.forEach(card => {
        const cardCat = card.getAttribute('data-cat');
        if (category === 'semua' || cardCat === category) {
            card.style.display = '';
            card.classList.add('fade-in');
        } else {
            card.style.display = 'none';
            card.classList.remove('fade-in');
        }
    });
}

// -----------------------------------------------
// 5. BASKET WEEKLY POLL LOGIC
// -----------------------------------------------
function submitVote(optionId) {
    const pollContainer = document.getElementById('polling-container');
    const pollResult    = document.getElementById('polling-result');

    if (optionId === 'A') document.getElementById('vote-val-A').innerText = '43%';
    else if (optionId === 'B') document.getElementById('vote-val-B').innerText = '39%';
    else if (optionId === 'C') document.getElementById('vote-val-C').innerText = '21%';

    pollContainer.style.display = 'none';
    pollResult.style.display    = 'flex';
}

// -----------------------------------------------
// 6. ACCORDION BADMINTON SCHEDULE LOGIC
// -----------------------------------------------
function toggleAccordion(id) {
    const content = document.getElementById(`acc-content-${id}`);
    const btn     = document.getElementById(`acc-btn-${id}`);

    const isOpen = content.classList.contains('open');
    content.classList.toggle('open', !isOpen);
    btn.classList.toggle('open', !isOpen);
}

// -----------------------------------------------
// 7. EDITORIAL FONT SIZER LOGIC
// -----------------------------------------------
function changeFontSize(size) {
    const textEl = document.getElementById('opinion-article-text');
    const btnS   = document.getElementById('btn-font-s');
    const btnN   = document.getElementById('btn-font-n');
    const btnL   = document.getElementById('btn-font-l');

    [btnS, btnN, btnL].forEach(b => b.classList.remove('active'));

    if (size === 'small') {
        textEl.className = 'article-body text-small';
        btnS.classList.add('active');
    } else if (size === 'normal') {
        textEl.className = 'article-body text-normal';
        btnN.classList.add('active');
    } else if (size === 'large') {
        textEl.className = 'article-body text-large';
        btnL.classList.add('active');
    }
}

// -----------------------------------------------
// 8. CONTACT FORM LOGIC
// -----------------------------------------------
function updateCharCount() {
    const textLength = document.getElementById('form-pesan').value.length;
    document.getElementById('char-count').innerText = textLength;
}

function handleFormSubmit(event) {
    event.preventDefault();
    const nama       = document.getElementById('form-nama').value;
    const email      = document.getElementById('form-email').value;
    const errorEmail = document.getElementById('email-error');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorEmail.style.display = 'block';
        return;
    } else {
        errorEmail.style.display = 'none';
    }

    document.getElementById('user-display-name').innerText = nama;
    document.getElementById('custom-modal').classList.add('open');

    document.getElementById('contact-form').reset();
    document.getElementById('char-count').innerText = '0';
}

function closeModal() {
    document.getElementById('custom-modal').classList.remove('open');
}

// -----------------------------------------------
// INISIALISASI
// -----------------------------------------------
window.onload = () => {
    // Tidak pakai lucide — gunakan inline SVG
};