// Database Berita
const newsData = {
    nasional: [
        {
            title: "Pemerintah Resmikan Jalan Tol Baru",
            content: "Pemerintah Resmikan Jalan Tol Baru Sungai Aruna–Lembah Pratama Aruna Raya, 2 Desember 2025 — Pemerintah meresmikan Jalan Tol Sungai Aruna–Lembah Pratama sepanjang 62 kilometer, yang menjadi bagian dari proyek jaringan Trans Nusantara. Peresmian dilakukan oleh Menteri Pekerjaan Umum dan Infrastruktur, Damar Prasetyo, didampingi pejabat pemerintah daerah serta perwakilan badan usaha pengelola tol.Upacara peresmian berlangsung di Gerbang Tol Aruna Raya dan dihadiri ratusan warga yang antusias menyaksikan pembukaan akses tol pertama di wilayah tersebut.Dalam sambutannya, Menteri Damar Prasetyo mengatakan bahwa pembangunan tol ini menjadi tonggak penting untuk meningkatkan konektivitas antardaerah di kawasan timur.Jalan Tol Sungai Aruna–Lembah Pratama akan memangkas waktu tempuh dari dua jam menjadi hanya 45 menit. Kami berharap infrastruktur ini dapat mempercepat distribusi logistik dan memacu pertumbuhan ekonomi masyarakat ujarnya."
        },
        {
            title: "Harga Beras Mulai Turun",
            content: "Nusantara Jaya, 2 Desember 2025 — Sejumlah pasar tradisional dan ritel modern melaporkan bahwa harga beras mulai mengalami penurunan dalam dua pekan terakhir. Penurunan ini terjadi setelah pasokan beras dari sejumlah sentra produksi kembali lancar dan stok cadangan pemerintah ditambah.Menurut pantauan Dinas Perdagangan Nusantara Jaya, harga beras medium yang sebelumnya berada di kisaran Rp14.500 per kilogram kini turun menjadi Rp13.200 per kilogram. Sementara beras premium turun dari Rp16.800 menjadi Rp15.500 per kilogram.Kepala Dinas Perdagangan, Lilis Kartadipura, menyatakan bahwa stabilisasi harga mulai terasa setelah distribusi dari wilayah penghasil padi seperti Lembah Padi, Aruna Selatan, dan Kerta Mulia meningkat.“Beberapa bulan lalu kami sempat kekurangan pasokan akibat cuaca buruk. Sekarang suplai sudah normal, sehingga harga ikut terkoreksi,” ujarnya."
        }
    ],
    internasional: [
        {
            title: "Presiden Baru Terpilih di Negara Indonesia",
            content: "Jakarta, 2 Desember 2025 — Komisi Pemilihan Umum Nasional (KPUN) mengumumkan bahwa Ardian Maheswara resmi terpilih sebagai Presiden Baru Negara Indonesia untuk periode 2025–2030. Ia memenangkan pemilihan dengan perolehan suara 58,7 persen, unggul dari rival terdekatnya, Nadira Pramesti, yang meraih 40,9 persen suara.Pengumuman dilakukan setelah proses rekapitulasi nasional yang berlangsung selama tiga hari, disaksikan oleh pengawas dan perwakilan dari berbagai lembaga independen.Dalam pidato kemenangannya, Ardian Maheswara menyampaikan apresiasi kepada seluruh masyarakat yang berpartisipasi dalam pemilu tahun ini.“Kemenangan ini adalah kemenangan seluruh rakyat Indonesia. Pemerintahan kami akan berdiri di atas kepentingan bersama, demi pembangunan dan persatuan bangsa,” ujarnya di hadapan ribuan pendukung di Plaza Nusantara."
        },
        {
            title: "Badai Salju Landa Eropa",
            content: "Berlin, 2 Desember 2025 — Sebuah badai salju besar melanda sejumlah wilayah di Eropa Tengah dan Utara sepanjang akhir pekan, menyebabkan gangguan transportasi, pemadaman listrik lokal, serta penutupan sementara beberapa sekolah dan fasilitas umum.Badan Meteorologi Eropa (EME) melaporkan bahwa badai yang diberi nama “Helena” ini membawa angin kencang hingga 110 km/jam serta curah salju tebal yang mencapai 40–60 cm di beberapa kota, termasuk bagian Jerman, Polandia, Denmark, dan Ceko."
        }
    ],
    olahraga: [
        {
            title: "Timnas Indonesia Menang Telak",
            content: "Jakarta, 2 Desember 2025 — Timnas Indonesia meraih kemenangan telak 4–0 atas tim nasional Solvaria dalam laga persahabatan yang digelar di Stadion Nusantara Arena tadi malam. Pertandingan tersebut menjadi ajang uji coba menjelang turnamen regional awal tahun depan.Indonesia tampil dominan sejak menit pertama. Lini tengah berhasil menguasai permainan, sementara pertahanan tampil rapat dan sulit ditembus."
        },
        {
            title: "Bintang Sepak Bola Pindah Klub",
            content: "Lisandra, 2 Desember 2025 — Dunia sepak bola kembali digemparkan dengan kabar kepindahan megabintang Arsenio Valdez dari Ravona United ke Aurora FC. Transfer ini diumumkan secara resmi oleh manajemen klub pada Senin malam, setelah negosiasi intensif selama hampir tiga minggu.Aurora FC mengontrak Arsenio dengan durasi tiga tahun, disertai opsi perpanjangan satu tahun. Nilai transfer disebut-sebut mencapai €82 juta, menjadikannya salah satu transfer terbesar dalam sejarah Liga Primea."
        }
    ],
    teknologi: [
        {
            title: "Smartphone Baru Dirilis",
            content: "Techvale, 2 Desember 2025 — Perusahaan teknologi Zenith Mobile resmi meluncurkan smartphone terbaru mereka, Zenith X12, dalam acara peluncuran global yang digelar secara daring dan disaksikan lebih dari satu juta penonton di seluruh dunia.Zenith X12 hadir sebagai penerus seri X sebelumnya dengan peningkatan besar pada kamera, performa chipset, dan kemampuan baterai yang diklaim menjadi yang terbaik di kelasnya."
        },
        {
            title: "AI Meningkat Pesat",
            content: "Silicon Terra, 2 Desember 2025 — Perkembangan kecerdasan buatan (AI) mengalami lonjakan signifikan sepanjang tahun 2025. Laporan terbaru dari Institute of Future Intelligence (IFI) menunjukkan peningkatan besar dalam kemampuan model bahasa, sistem penglihatan komputer, dan robotika tingkat tinggi yang mulai terintegrasi dalam kehidupan sehari-hari.Dalam laporan tahunan bertajuk “AI Acceleration 2025”, IFI mencatat bahwa adopsi teknologi AI meningkat hingga 64% di berbagai sektor industri, mulai dari kesehatan, pendidikan, manufaktur, hingga layanan publik."
        }
    ]
};

// Fungsi Menampilkan daftar berita
function loadCategory(category) {
    const container = document.getElementById("newsContainer");
    container.innerHTML = "";

    newsData[category].forEach((item, index) => {
        const div = document.createElement("div");
        div.classList.add("news-item");
        div.innerHTML = item.title;

        div.onclick = () => showDetail(category, index);

        container.appendChild(div);
    });
}

// Fungsi menampilkan isi berita
function showDetail(category, index) {
    const news = newsData[category][index];
    const container = document.getElementById("newsContainer");

    container.innerHTML = `
        <div class="news-detail">
            <h2>${news.title}</h2>
            <p>${news.content}</p>
            <button onclick="loadCategory('${category}')">⬅ Kembali</button>
        </div>
    `;
}

// Tombol Berita Panas
document.getElementById("hotNewsBtn").onclick = () => {
    document.getElementById("newsContainer").innerHTML = `
        <div class="news-detail">
            <h2>🔥 Berita Panas Hari Ini</h2>
            <p>Deputi Meteorologi Badan Meteorologi, Klimatologi, dan Geofisika (BMKG) Guswanto mengatakan suhu udara saat ini terasa lebih panas karena matahari sudah bergeser ke area selatan Indonesia. Temperatur maksimum yang ideal untuk wilayah perkotaan, kata dia, rata-rata berkisar 31-34 derajat Celcius. Belakangan, suhu udara sudah melebihi kondisi normal tersebut.

Menurut Guswanto, Minimnya pertumbuhan awan, mengurangi hambatan paparan sinar matahari. Cahaya langsung dari matahari, terutama di siang bolong, meningkatkan suhu udara.

Merujuk catatan BMKG, Indonesia sebenarnya sudah memasuki musim hujan sejak Agustus. Namun, awal musim hujan tidak terjadi serentak di seluruh daerah. Wilayah Jakarta dan sekitarnya termasuk yang belum memasuki musim basah.</p>
        </div>
    `;
};
// ===== PANEL PENGATURAN (POJOK KIRI ATAS) =====
document.querySelector(".settings-btn").onclick = () => {
    const panel = document.getElementById("settingsPanel");
    panel.style.display = panel.style.display === "block" ? "none" : "block";
};

// MODE GELAP
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

document.head.insertAdjacentHTML("beforeend", `
<style>
.dark-mode {
    background: #1e1e1e;
    color: white;
}
.news-item, .news-detail {
    background: #333 !important;
    color: white;
}
</style>
`);


// ===== BOTTOM SHEET (PROFIL & MENU) =====
function openBottomSheet(content) {
    const sheet = document.getElementById("bottomSheet");
    const contentDiv = document.getElementById("bottomSheetContent");

    contentDiv.innerHTML = content;
    sheet.style.bottom = "0px";
}

function closeBottomSheet() {
    document.getElementById("bottomSheet").style.bottom = "-300px";
}

// EVENT untuk tombol footer
document.querySelector("footer button:nth-child(1)").onclick = () => {
    openBottomSheet("<h3>Profil Pengguna</h3><p>Nama: User</p><p>Status: Aktif</p>");
};

document.querySelector("footer button:nth-child(2)").onclick = () => {
    openBottomSheet("<h3>Menu Aplikasi</h3><p>- Beranda</p><p>- Kategori</p><p>- Pengaturan</p>");
};
// Gambar untuk tiap kategori (ganti URL sesuai keinginanmu)
const categoryImages = {
    nasional: "images/logonasional.png",
    internasional: "images/internasionallogo.png",
    olahraga: "images/logoolahraga.png",
    teknologi: "images/logoteknologi.png"
};

// Fungsi menampilkan kategori dengan gambar
function loadCategoryWithImage(category) {
    const container = document.getElementById("newsContainer");
    container.innerHTML = ""; // bersihkan container

    // Tambahkan gambar kategori
    const img = document.createElement("img");
    img.src = categoryImages[category];
    img.alt = category;
    img.style.width = "80%";      // lebar 80% dari container
    img.style.height = "200px";   // tinggi 200px
    img.style.objectFit = "cover"; // agar gambar tetap proporsional
    img.style.borderRadius = "10px";
    img.style.marginBottom = "15px";
    container.appendChild(img);

    // Tambahkan daftar berita
    newsData[category].forEach((item, index) => {
        const div = document.createElement("div");
        div.classList.add("news-item");
        div.innerHTML = item.title;

        div.onclick = () => showDetail(category, index);

        container.appendChild(div);
    });
}
