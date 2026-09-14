/* ================= Konten Statis & Konfigurasi SKMNetwork ================= */

/* ============ Konfigurasi Terpusat: URL & Kontak ============
   Semua URL keluar dikelola di satu tempat.
   Domain produksi publik: https://www.skmnetwork.com
   ERP web produksi: https://erp.skmnetwork.com */
export const SITE = "https://www.skmnetwork.com";
export const ERP_URL = "https://erp.skmnetwork.com";
export const CONTACT_URL = "#kontak";
export const BUKU_WARUNG_URL = "#buku-warung";
export const FITUR_URL = "#fitur";
export const CARA_BELI_URL = "#cara-beli";
export const FAQ_URL = "#faq";
export const INTERNET_URL = "#ekosistem";

/* ============ Konfigurasi WhatsApp Pemesanan ============
   Nomor WhatsApp Admin resmi (Format: 628xxxxxxxxxx).
   Jika nomor belum terkonfigurasi, CTA akan secara aman diarahkan ke anchor #kontak. */
export const WHATSAPP_NUMBER = "6285157056604";
export const BUKU_WARUNG_ORDER_MESSAGE = encodeURIComponent(
  "Halo Admin SKMNetwork, saya ingin membeli lisensi Buku Warung (Rp50.000 Sekali Beli).\n\nMohon panduan pembayaran dan aktivasinya. Terima kasih!"
);
export const WHATSAPP_URL = WHATSAPP_NUMBER
  ? `https://wa.me/${WHATSAPP_NUMBER}?text=${BUKU_WARUNG_ORDER_MESSAGE}`
  : "#kontak";

export const ERP_IMAGE =
  "https://image.qwenlm.ai/generated-images/00b49471-53ee-4e32-b0ec-f43fc53a8585/_result.png";

export const CONTACTS: { label: string; value: string; href: string }[] = [
  { label: "Situs Resmi", value: "www.skmnetwork.com", href: SITE },
  { label: "Pemesanan & Bantuan", value: "Hubungi Admin SKMNetwork", href: WHATSAPP_URL },
];

export const navLinks = [
  { href: "#buku-warung", label: "Buku Warung" },
  { href: "#fitur", label: "Fitur & Harga" },
  { href: "#erp", label: "SKMNet ERP" },
  { href: "#ekosistem", label: "Ekosistem" },
  { href: "#cara-beli", label: "Cara Beli" },
  { href: "#faq", label: "FAQ" },
];

/* Marquee running text */
export const servicesMarquee = [
  "Buku Warung (Kasir UMKM)",
  "Rp50.000 Sekali Beli",
  "100% Offline-Ready",
  "SKMNet ERP",
  "WhatsApp Gateway",
  "AutoPost Sosmed",
  "Internet & WiFi",
  "CCTV & Keamanan",
  "Cetak Struk Bluetooth",
  "Backup Google Sheets",
];

/* Hero Satellite Nodes */
export const heroNodes = [
  { icon: "store", label: "Buku Warung", sub: "kasir umkm", pos: "top-[2%] left-1/2 -translate-x-1/2" },
  { icon: "erp", label: "SKMNet ERP", sub: "bisnis cloud", pos: "top-[22%] right-0" },
  { icon: "chip", label: "WA Gateway", sub: "otomatisasi", pos: "top-[63%] right-[-2%]" },
  { icon: "wifi", label: "Internet", sub: "konektivitas", pos: "bottom-[3%] right-[16%]" },
  { icon: "cctv", label: "CCTV", sub: "keamanan", pos: "bottom-[3%] left-[8%]" },
  { icon: "code", label: "Software", sub: "solusi digital", pos: "top-[42%] left-[-2%]" },
];

/* 4 Trust Strip Highlights */
export const capabilities = [
  {
    icon: "store",
    title: "Buku Warung UMKM",
    desc: "Kasir & pembukuan Rp50.000 sekali beli, aktif offline selamanya.",
  },
  {
    icon: "erp",
    title: "SKMNet ERP Cloud",
    desc: "Sistem bisnis terintegrasi untuk toko & usaha berkembang.",
  },
  {
    icon: "chip",
    title: "Otomatisasi Digital",
    desc: "WhatsApp Gateway & AutoPost penjadwalan media sosial.",
  },
  {
    icon: "wifi",
    title: "Konektivitas & CCTV",
    desc: "Infrastruktur internet stabil dan sistem keamanan terpantau.",
  },
];

/* Buku Warung Flagship Data */
export const bukuWarungInfo = {
  name: "Buku Warung",
  tagline: "Aplikasi Kasir & Pembukuan Simpel untuk Warung dan UMKM",
  price: 50000,
  priceFormatted: "Rp50.000",
  model: "Sekali Beli · Tanpa Langganan",
  licenseModel: "1 Lisensi = 1 Email Pemilik = 1 HP Aktif",
  offlineStatus: "Aktivasi Online 1x → 100% Offline Selamanya",
  coreBenefits: [
    "Cukup bayar sekali Rp50.000, aktif selamanya tanpa iuran bulanan",
    "Bisa dipakai jualan offline tanpa kuota internet",
    "Data transaksi tersimpan aman di memori HP Anda",
    "Dukungan cetak struk kasir bluetooth & scan barcode",
    "Backup otomatis ke Google Sheets pribadi",
  ],
  features: [
    {
      icon: "cart",
      title: "Kasir POS Cepat",
      desc: "Catat transaksi penjualan dalam hitungan detik, hitung kembalian otomatis, dan minimalkan antrean pembeli.",
      badge: "Cepat & Mudah",
    },
    {
      icon: "barcode",
      title: "Scan Barcode & Kamera",
      desc: "Gunakan kamera HP atau scanner barcode bluetooth untuk input barang dagangan tanpa ketik manual.",
      badge: "Scan Akurat",
    },
    {
      icon: "printer",
      title: "Cetak Struk Bluetooth",
      desc: "Kompatibel dengan berbagai printer thermal bluetooth (58mm/80mm) untuk cetak nota kasir rapi.",
      badge: "Thermal Ready",
    },
    {
      icon: "layers",
      title: "Produk & Manajemen Stok",
      desc: "Pantau sisa stok barang, dapatkan peringatan otomatis saat stok menipis, dan kelola harga jual/beli.",
      badge: "Stok Terpantau",
    },
    {
      icon: "money",
      title: "Catat Uang Kas Masuk/Keluar",
      desc: "Pisahkan uang kas warung dengan pengeluaran pribadi secara rapi agar keuangan usaha tidak bocor.",
      badge: "Arus Kas Rapi",
    },
    {
      icon: "debt",
      title: "Buku Piutang Pelanggan",
      desc: "Catat bon hutang pembeli, tanggal jatuh tempo, dan riwayat pembayaran cicilan hutang pelanggan.",
      badge: "Bebas Lupa Bon",
    },
    {
      icon: "truck",
      title: "Hutang Supplier & Pembelian",
      desc: "Rekam belanja modal barang dari agen/supplier dan jadwal pembayaran hutang dagang tepat waktu.",
      badge: "Kulakan Rapi",
    },
    {
      icon: "report",
      title: "Laporan Laba Rugi & PDF",
      desc: "Lihat ringkasan keuntungan harian/bulanan dan ekspor laporan keuangan profesional format PDF/Excel.",
      badge: "Laporan Jelas",
    },
    {
      icon: "cloud",
      title: "Backup ke Google Sheets",
      desc: "Cadangkan data usaha Anda langsung ke akun Google Sheets pribadi agar data tidak hilang jika HP berganti.",
      badge: "Backup Aman",
    },
  ],
};

/* Problem Discovery (Pain Points UMKM & Solusi) */
export const problems = [
  {
    no: "01",
    icon: "report",
    title: "Catatan Bon Kertas Hilang atau Rusak",
    desc: "Mencatat hutang pelanggan di buku kertas rawan sobek, basah, atau lupa ditagih saat jatuh tempo.",
    solution: "Buku Warung mencatat piutang pelanggan rapi di HP, lengkap dengan nominal dan riwayat pembayaran.",
    tag: "bon hilang / lupa tagih",
  },
  {
    no: "02",
    icon: "cart",
    title: "Kasir Lambat & Sering Salah Hitung",
    desc: "Menghitung total belanja dengan kalkulator makan waktu lama dan rentan salah hitung kembalian saat ramai.",
    solution: "Tinggal klik produk atau scan barcode, total belanja dan kembalian dihitung akurat seketika.",
    tag: "hitung manual lama",
  },
  {
    no: "03",
    icon: "layers",
    title: "Stok Barang Sering Selisih / Habis Mendadak",
    desc: "Tidak tahu sisa stok barang dagangan yang laku, sehingga terlambat kulakan barang modal.",
    solution: "Stok otomatis terpotong setiap transaksi dan ada peringatan stok menipis.",
    tag: "stok tidak terkontrol",
  },
  {
    no: "04",
    icon: "money",
    title: "Keuangan Usaha Tercampur Uang Pribadi",
    desc: "Uang hasil jualan sering terpakai untuk keperluan rumah tanpa tercatat, membuat laba usaha tidak jelas.",
    solution: "Catat arus kas masuk/keluar harian dengan kategori jelas dan laporan laba bersih otomatis.",
    tag: "uang kas campur aduk",
  },
];

/* 4 Integrated Solutions */
export const solutions = [
  {
    id: "buku-warung",
    icon: "store",
    title: "Buku Warung (Kasir UMKM)",
    desc: "Aplikasi kasir & pembukuan Android praktis untuk warung dan toko. Rp50.000 sekali beli, 100% offline-ready.",
    points: ["Rp50.000 Sekali Beli", "Aktivasi online 1x → Offline selamanya", "Cetak struk bluetooth & scan barcode"],
    cta: "Beli Buku Warung",
    href: WHATSAPP_URL,
    isExternal: false,
    highlight: true,
  },
  {
    id: "erp",
    icon: "erp",
    title: "SKMNet ERP Cloud",
    desc: "Sistem terintegrasi untuk bisnis berkembang: multi-cabang, multi-tenant, inventory gudang, dan laporan laba rugi.",
    points: ["Sistem cloud multi-unit usaha", "Kasir & gudang terpusat", "Akses via web browser di mana saja"],
    cta: "Masuk SKMNet ERP",
    href: `${ERP_URL}/login`,
    isExternal: true,
    highlight: false,
  },
  {
    id: "digital",
    icon: "chip",
    title: "Otomatisasi Digital (WA & Sosmed)",
    desc: "WA Gateway untuk auto-reply notifikasi pesanan dan AutoPost untuk jadwal promosi lintas media sosial.",
    points: ["WhatsApp Gateway terotomatisasi", "Penjadwalan konten media sosial", "Terkoneksi dengan alur bisnis"],
    cta: "Tanya Solusi Digital",
    href: CONTACT_URL,
    isExternal: false,
    highlight: false,
  },
  {
    id: "jaringan",
    icon: "wifi",
    title: "Konektivitas & CCTV Keamanan",
    desc: "Layanan internet broadband bisnis yang stabil dan instalasi CCTV pengawasan yang terpantau aman.",
    points: ["Internet stabil rumah & usaha", "CCTV & monitoring jarak jauh", "Didampingi tim teknis berpengalaman"],
    cta: "Konsultasi Jaringan",
    href: CONTACT_URL,
    isExternal: false,
    highlight: false,
  },
];

/* SKMNet ERP Modules */
export const erpModules = [
  { icon: "erp", title: "Kasir & Penjualan", desc: "Catat transaksi penjualan harian multi-kasir dengan rapi." },
  { icon: "layers", title: "Inventory Multi-Gudang", desc: "Pantau mutasi dan posisi stok di berbagai cabang." },
  { icon: "store", title: "Manajemen Produk", desc: "Katalog produk terpusat dengan varian harga grosir/ecer." },
  { icon: "target", title: "Pelanggan & CRM", desc: "Data pelanggan, riwayat belanja, dan program loyalitas." },
  { icon: "expand", title: "Multi-Business / Tenant", desc: "Satu akun sistem untuk mengelola beberapa cabang usaha." },
  { icon: "monitor", title: "Laporan & Analitik", desc: "Dashboard ringkasan laba rugi untuk keputusan bisnis cepat." },
];

export const erpAccess = [
  {
    tag: "INCLUDED",
    title: "Termasuk untuk Pelanggan Internet",
    desc: "Untuk pelanggan internet SKMNetwork yang mendapatkan ERP sebagai bagian/benefit layanan sesuai ketentuan paket.",
  },
  {
    tag: "STANDALONE",
    title: "Berlangganan Mandiri",
    desc: "Untuk UMKM yang ingin menggunakan ERP secara mandiri tanpa harus menjadi pelanggan internet SKMNetwork.",
  },
];

/* How It Works (4 Steps Purchase Flow) */
export const steps = [
  {
    no: "01",
    icon: "cart",
    title: "Pesan via WhatsApp",
    desc: "Klik tombol pemesanan untuk menghubungi Admin WhatsApp resmi SKMNetwork.",
  },
  {
    no: "02",
    icon: "money",
    title: "Bayar Rp50.000 & Beri Email",
    desc: "Lakukan transfer pembayaran Rp50.000 dan berikan alamat Email Pemilik (Owner Email) Anda.",
  },
  {
    no: "03",
    icon: "chip",
    title: "Terima APK & Kode Lisensi",
    desc: "Admin memverifikasi dan langsung mengirimkan file APK resmi serta Kode Lisensi 16-Digit (BW-XXXX-XXXX-XXXX).",
  },
  {
    no: "04",
    icon: "store",
    title: "Aktivasi Online & Pakai Offline",
    desc: "Buka aplikasi, masukkan email dan kode lisensi (online sekali). Setelah aktif, gunakan offline selamanya!",
  },
];

/* Value Pillars (Why SKMNetwork) */
export const whyPoints = [
  {
    no: "01",
    icon: "money",
    title: "Rp50.000 Sekali Beli — Tanpa Biaya Bulanan",
    desc: "Buku Warung tidak membebankan biaya langganan bulanan atau tahunan. Cukup bayar satu kali, nikmati selamanya.",
  },
  {
    no: "02",
    icon: "wifi",
    title: "Bisa Digunakan 100% Offline",
    desc: "Internet hanya dibutuhkan sekali saat aktivasi awal. Setelah itu aplikasi kasir dan pembukuan berjalan tanpa kuota.",
  },
  {
    no: "03",
    icon: "layers",
    title: "Data Milik Anda Sepenuhnya",
    desc: "Data transaksi aman tersimpan di HP Anda dan dapat dicadangkan ke Google Sheets pribadi kapan saja.",
  },
  {
    no: "04",
    icon: "headset",
    title: "Dukungan Teknis & Tim Pendamping",
    desc: "SKMNetwork bukan software lepas tangan. Tim kami siap membantu jika Anda mengalami kendala teknis.",
  },
  {
    no: "05",
    icon: "expand",
    title: "Ekosistem Tumbuh Bersama Usaha Anda",
    desc: "Mulai dari Buku Warung untuk 1 toko, lalu tingkatkan ke SKMNet ERP saat usaha Anda membuka cabang baru.",
  },
];

/* 10 License & General FAQs */
export const faqs = [
  {
    q: "Berapa harga aplikasi Buku Warung?",
    a: "Harganya Rp50.000 sekali bayar untuk selamanya. Tidak ada biaya langganan bulanan, tahunan, maupun biaya tersembunyi lainnya.",
  },
  {
    q: "Apakah ada biaya langganan tambahan di kemudian hari?",
    a: "Tidak ada. Sekali Anda membeli lisensi resmi Buku Warung, aplikasi dapat terus Anda gunakan tanpa batas waktu.",
  },
  {
    q: "Apakah Buku Warung bisa digunakan tanpa internet (offline)?",
    a: "Ya, 100% bisa offline. Koneksi internet hanya dibutuhkan satu kali saat aktivasi lisensi awal. Setelah sukses diaktifkan, kasir POS, cetak struk, dan pembukuan berjalan tanpa kuota internet.",
  },
  {
    q: "Berapa perangkat yang bisa menggunakan 1 lisensi Buku Warung?",
    a: "1 Lisensi berlaku untuk 1 HP Android aktif dan terikat pada Email Pemilik (Owner Email) yang Anda daftarkan.",
  },
  {
    q: "Bagaimana jika HP saya rusak, hilang, atau saya ingin ganti HP baru?",
    a: "Lisensi Anda tidak hangus karena terdaftar atas nama email Anda. Anda cukup menghubungi admin SKMNetwork untuk memverifikasi email pemilik dan memindahkan aktivasi lisensi ke perangkat baru Anda.",
  },
  {
    q: "Bagaimana cara mendapatkan file aplikasi (APK) Buku Warung?",
    a: "Setelah pembayaran Rp50.000 diverifikasi oleh admin, file installer APK resmi beserta Kode Lisensi 16-Digit akan dikirimkan langsung melalui WhatsApp beserta panduan instalasi mudahnya.",
  },
  {
    q: "Apakah proses aktivasi awal membutuhkan koneksi internet?",
    a: "Ya. HP wajib terhubung ke internet selama beberapa detik saat pertama kali memasukkan kode lisensi untuk validasi registrasi perangkat.",
  },
  {
    q: "Bagaimana cara mencadangkan (backup) data transaksi saya?",
    a: "Semua data transaksi tersimpan di memori HP Anda. Buku Warung menyediakan fitur Backup Otomatis ke Google Sheets akun Google pribadi Anda, sehingga data tetap aman dan mudah dibuka di spreadsheet.",
  },
  {
    q: "Printer apa saja yang didukung oleh Buku Warung?",
    a: "Buku Warung mendukung seluruh printer thermal bluetooth standar (ukuran kertas 58mm maupun 80mm) yang umum digunakan untuk kasir toko di Indonesia.",
  },
  {
    q: "Apa perbedaan antara Buku Warung dan SKMNet ERP?",
    a: "Buku Warung adalah aplikasi kasir & pembukuan Android mandiri (offline-first, Rp50.000 sekali beli) untuk 1 toko/warung. Sedangkan SKMNet ERP adalah sistem berbasis cloud untuk bisnis berkembang yang membutuhkan integrasi multi-cabang, multi-kasir online, dan manajemen gudang terpusat.",
  },
];

/* Preserved / Archived Types & Data for Inactive Legacy Views */
export const customerTypes: { icon: string; title: string; desc: string; items: string[] }[] = [
  {
    icon: "home",
    title: "Rumah",
    desc: "Koneksi dan keamanan untuk aktivitas digital keluarga.",
    items: ["Internet & WiFi", "CCTV rumah"],
  },
  {
    icon: "store",
    title: "Warung / Usaha Kecil",
    desc: "Aplikasi kasir praktis dan pembukuan tanpa langganan.",
    items: ["Buku Warung", "Cetak Struk", "Catat Bon"],
  },
  {
    icon: "business",
    title: "Toko / Retail",
    desc: "Operasional kasir, stok barang, dan keamanan.",
    items: ["Kasir POS", "Inventory", "CCTV"],
  },
  {
    icon: "office",
    title: "Kantor & Bisnis",
    desc: "Sistem ERP multi-cabang dan jaringan stabil.",
    items: ["SKMNet ERP", "Software", "Maintenance"],
  },
];

export const devTracks: { icon: string; title: string; desc: string; focus: string[]; status: string; color: string; rotate: string }[] = [
  {
    icon: "store",
    title: "Buku Warung Android",
    desc: "Aplikasi kasir UMKM offline-first yang terus disempurnakan.",
    focus: ["POS Cepat", "Google Sheets Backup", "Bluetooth Printer"],
    status: "Aktif & Siap",
    color: "marigold",
    rotate: "-rotate-1",
  },
  {
    icon: "erp",
    title: "SKMNet ERP Cloud",
    desc: "Sistem operasional bisnis multi-cabang terintegrasi.",
    focus: ["Multi-Tenant", "Inventory", "Laporan Keuangan"],
    status: "Pengembangan Berkelanjutan",
    color: "sky",
    rotate: "rotate-1",
  },
];

export const ecosystemLayers: { icon: string; tag: string; title: string; desc: string }[] = [
  {
    icon: "store",
    tag: "Layer 01 · Kasir UMKM",
    title: "Buku Warung",
    desc: "Kasir dan pembukuan harian warung mandiri.",
  },
  {
    icon: "erp",
    tag: "Layer 02 · Bisnis Cloud",
    title: "SKMNet ERP",
    desc: "Sistem operasional bisnis multi-unit dan gudang.",
  },
  {
    icon: "chip",
    tag: "Layer 03 · Otomatisasi",
    title: "WA Gateway & AutoPost",
    desc: "Komunikasi pelanggan dan promosi otomatis.",
  },
  {
    icon: "wifi",
    tag: "Layer 04 · Konektivitas",
    title: "Internet & CCTV",
    desc: "Fondasi jaringan dan pengawasan keamanan.",
  },
];
