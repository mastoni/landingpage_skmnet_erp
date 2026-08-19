/* ================= Konten statis BizERP ================= */

export const industries = [
  "Warung Kopi",
  "Toko Retail",
  "Kuliner & Resto",
  "Barbershop",
  "Laundry",
  "Bengkel",
  "Toko Bangunan",
  "Fashion & Thrift",
  "Minimarket",
  "Catering",
  "Toko Kue",
  "Jasa Servis",
  "Apotek",
  "Petshop",
];

export const heroStats = [
  { value: 12400, suffix: "+", label: "UMKM aktif pakai BizERP" },
  { value: 38, suffix: " jt", label: "transaksi dicatat / bulan" },
  { value: 120, suffix: "+", label: "kota & kabupaten" },
  { value: 4.9, suffix: "/5", label: "rating pengguna", decimals: 1 },
];

export const problems = [
  {
    no: "01",
    icon: "kasir",
    title: "Pembukuan manual rawan selisih",
    desc: "Catatan di buku tulis dan Excel gampang tercecer. Ujung-ujungnya laba bersih cuma tebakan, dan selisih kas baru ketahuan saat sudah menumpuk.",
    stat: "± Rp2,3 jt selisih kas / bulan",
  },
  {
    no: "02",
    icon: "stok",
    title: "Stok toko & gudang nggak sinkron",
    desc: "Di sistem tertulis ada, di rak kosong. Pelanggan kecewa, belanja dadakan membengkak, dan stok mati menumpuk diam-diam menggerus modal.",
    stat: "8–12% stok bocor tiap audit",
  },
  {
    no: "03",
    icon: "dompet",
    title: "Piutang pelanggan kebablasan",
    desc: "Bon ngutang dicatat seadanya, tidak ada pengingat jatuh tempo. Piutang macet mengendap jadi modal yang tidak pernah kembali.",
    stat: "1 dari 5 piutang sulit tertagih",
  },
  {
    no: "04",
    icon: "grafik",
    title: "Laporan keuangan bikin begadang",
    desc: "Rekap manual tiap akhir bulan makan waktu berhari-hari. Keputusan bisnis jalan pakai feeling, bukan angka yang bisa dipercaya.",
    stat: "6+ jam rekap manual / bulan",
  },
];

export const modules = [
  {
    id: "pos",
    icon: "kasir",
    title: "Kasir & POS",
    desc: "Transaksi kilat 5 detik, cetak struk thermal, QRIS & e-wallet terintegrasi, mode offline auto-sync.",
    points: ["Scan barcode & SKU", "Diskon, pajak, uang muka", "Struk digital via WhatsApp"],
    visual: "receipt",
    span: "lg:col-span-7 lg:row-span-2",
  },
  {
    id: "stok",
    icon: "stok",
    title: "Manajemen Inventori",
    desc: "Stok multi-gudang real-time, alert stok menipis, stok opname dari HP, dan lacak batch & kedaluwarsa.",
    points: ["Perpindahan antar gudang", "HPP otomatis (FIFO/average)"],
    visual: "stock",
    span: "lg:col-span-5",
  },
  {
    id: "akuntansi",
    icon: "grafik",
    title: "Akuntansi & Laporan",
    desc: "Laba-rugi, arus kas, dan neraca tersusun otomatis setiap transaksi. Export ke PDF/Excel sekali klik.",
    points: ["38 template laporan siap pakai", "Rekonsiliasi bank otomatis"],
    visual: "chart",
    span: "lg:col-span-5",
  },
  {
    id: "hr",
    icon: "tim",
    title: "HR & Absensi",
    desc: "Absensi karyawan via selfie + lokasi, jadwal shift, hitung komisi kasir, dan slip gaji otomatis.",
    points: ["Payroll + BPJS otomatis", "KPI per karyawan"],
    visual: "hr",
    span: "lg:col-span-4",
  },
  {
    id: "crm",
    icon: "hati",
    title: "CRM & Loyalitas",
    desc: "Database pelanggan, poin rewards, stamp card digital, dan broadcast promo langsung ke WhatsApp.",
    points: ["Segmentasi pelanggan", "Ulang tahun auto-voucher"],
    visual: "crm",
    span: "lg:col-span-4",
  },
  {
    id: "cabang",
    icon: "cabang",
    title: "Multi-Cabang",
    desc: "Pantau semua outlet dari satu dasbor: omzet per cabang, mutasi stok, dan hak akses per peran.",
    points: ["Konsolidasi laporan pusat", "Audit trail setiap aksi"],
    visual: "branch",
    span: "lg:col-span-4",
    dark: true,
  },
];

export const steps = [
  {
    no: "01",
    icon: "petir",
    title: "Daftar 2 menit",
    desc: "Buat akun pakai nomor WhatsApp. Tanpa kartu kredit, tanpa komitmen — langsung dapat akses 14 hari fitur lengkap.",
  },
  {
    no: "02",
    icon: "import",
    title: "Import produk & stok",
    desc: "Upload Excel produk lama atau scan barcode satu-satu. Tim onboarding bantu migrasi gratis sampai rapi.",
  },
  {
    no: "03",
    icon: "grafik",
    title: "Jualan & pantau real-time",
    desc: "Mulai transaksi dari kasir, HP, atau tablet. Pemilik pantau omzet, stok, dan karyawan dari mana saja.",
  },
];

export const testimonials = [
  {
    name: "Rina Marlina",
    biz: "Kopi Sudut Senja",
    city: "Bandung",
    type: "Kedai Kopi · 2 outlet",
    quote: "Dulu rekap tutup toko 1 jam lebih. Sekarang 5 menit langsung keluar laporan harian. Selisih kas nyaris nol sejak pakai BizERP.",
    metric: "Selisih kas 3% → 0,2%",
    color: "marigold",
    rotate: "-rotate-2",
  },
  {
    name: "Bagus Wicaksono",
    biz: "Toko Bangunan Berkah",
    city: "Semarang",
    type: "Retail · 4.500 SKU",
    quote: "Stok 4.500 item dulunya mimpi buruk tiap audit. Sekarang opname cukup scan dari HP, selisih langsung ketahuan di mana.",
    metric: "Audit 3 hari → 4 jam",
    color: "sky",
    rotate: "rotate-1",
  },
  {
    name: "Sari Dewi",
    biz: "Catering Dapur Bunda",
    city: "Surabaya",
    type: "Kuliner · 60 karyawan",
    quote: "Absensi selfie + slip gaji otomatis bikin urusan 60 karyawan beres sendiri. Saya bisa fokus ke menu dan klien besar.",
    metric: "Hemat 20 jam admin / bulan",
    color: "leaf",
    rotate: "-rotate-1",
  },
  {
    name: "Andi Pratama",
    biz: "Thrift House 88",
    city: "Yogyakarta",
    type: "Fashion · 3 cabang",
    quote: "Pantau tiga cabang dari satu HP. Cabang mana yang lagi lesu kelihatan hari itu juga, bukan nunggu rekapan akhir bulan.",
    metric: "Omzet naik 34% / semester",
    color: "brick",
    rotate: "rotate-2",
  },
  {
    name: "Maya Kusuma",
    biz: "Laundry Kinclong",
    city: "Depok",
    type: "Jasa · membership 1.200",
    quote: "Stamp card digital bikin pelanggan balik terus. Broadcast promo via WhatsApp sekali klik, omzet weekend naik dua kali.",
    metric: "Repeat order +57%",
    color: "ink",
    rotate: "-rotate-3",
  },
];

export const faqs = [
  {
    q: "Apakah BizERP cocok untuk usaha kecil yang baru mulai?",
    a: "Sangat cocok. Paket Warung gratis selamanya untuk 1 outlet dan 300 produk — tanpa kartu kredit, tanpa batas waktu. Saat bisnis berkembang, upgrade ke Paket Juragan cukup satu klik dan semua data ikut terbawa.",
  },
  {
    q: "Berapa biaya berlangganan BizERP?",
    a: "Mulai dari gratis. Paket Juragan Rp99.000/bulan (tagihan bulanan) atau Rp59.000/bulan dengan tagihan tahunan. Selama promo UMKM Naik Kelas, pakai kode UMKMNAIK40 untuk diskon tambahan 40% di tahun pertama — selama kuota 500 UMKM masih ada.",
  },
  {
    q: "Apakah data bisnis saya aman?",
    a: "Aman. Data terenkripsi saat transit maupun tersimpan, backup otomatis setiap hari di server Indonesia, dan akses berbasis peran (kasir tidak bisa lihat laba bersih). Kami patuh UU Pelindungan Data Pribadi No. 27/2022.",
  },
  {
    q: "Bisakah tetap jualan saat internet mati?",
    a: "Bisa. Kasir BizERP punya mode offline: transaksi dan pengurangan stok tetap tercatat di perangkat, lalu otomatis sinkron ke cloud begitu koneksi kembali. Tidak ada penjualan yang hilang.",
  },
  {
    q: "Bisakah migrasi dari Excel atau aplikasi kasir lain?",
    a: "Bisa. Tersedia import produk, stok, dan pelanggan dari Excel/CSV dalam sekali klik. Untuk pelanggan paket tahunan, tim onboarding kami bantu migrasi penuh secara gratis — Anda terima beres.",
  },
  {
    q: "Bagaimana cara klaim promo diskon 40%?",
    a: "Daftar gratis lewat tombol “Coba Gratis”, lalu masukkan kode UMKMNAIK40 saat checkout paket tahunan. Diskon berlaku untuk 500 UMKM pertama yang terdaftar selama periode promo bulan ini.",
  },
  {
    q: "Apakah ada biaya tersembunyi atau biaya per transaksi?",
    a: "Tidak ada. Harga yang tertera sudah termasuk semua fitur dalam paket, update rutin, dan dukungan pelanggan. Biaya payment gateway QRIS mengikuti tarif resmi regulator, bukan dari BizERP.",
  },
];

export const plans = [
  {
    name: "Warung",
    tagline: "Untuk usaha yang baru mulai",
    monthly: 0,
    yearly: 0,
    cta: "Mulai Gratis",
    highlight: false,
    features: [
      "1 outlet, 2 pengguna",
      "300 produk & varian",
      "Kasir POS + struk digital",
      "Laporan penjualan harian",
      "Manajemen stok dasar",
      "Dukungan via email",
    ],
  },
  {
    name: "Juragan",
    tagline: "Paling pas untuk UMKM berkembang",
    monthly: 99000,
    yearly: 59000,
    cta: "Coba Gratis 14 Hari",
    highlight: true,
    features: [
      "1 outlet, pengguna tak terbatas",
      "Produk tanpa batas",
      "Semua fitur Paket Warung",
      "Akuntansi & laporan laba-rugi",
      "HR, absensi & payroll",
      "CRM, poin & stamp card",
      "Mode offline auto-sync",
      "Prioritas dukungan WhatsApp",
    ],
  },
  {
    name: "Serikat",
    tagline: "Untuk bisnis multi-cabang",
    monthly: 249000,
    yearly: 149000,
    cta: "Hubungi Kami",
    highlight: false,
    features: [
      "Hingga 5 outlet (tambah Rp39rb/outlet)",
      "Semua fitur Paket Juragan",
      "Konsolidasi laporan antar cabang",
      "Mutasi stok antar gudang",
      "Hak akses per peran",
      "API & integrasi akunting",
      "Manajer akun dedikasi",
    ],
  },
];

export const txPool = [
  { name: "Kopi Susu Gula Aren ×2", method: "QRIS", amount: 36000 },
  { name: "Croissant Cokelat", method: "Tunai", amount: 24000 },
  { name: "Americano + Roti Bakar", method: "QRIS", amount: 41000 },
  { name: "Es Kopi Sudut ×3", method: "Transfer", amount: 54000 },
  { name: "Croffle Keju", method: "Tunai", amount: 22000 },
  { name: "Voucher Member 100rb", method: "Transfer", amount: 100000 },
  { name: "Kopi Gayo Manual Brew", method: "QRIS", amount: 32000 },
  { name: "Nasi Goreng Kambing ×2", method: "QRIS", amount: 56000 },
];

export const methodColor: Record<string, string> = {
  QRIS: "bg-sky-2/10 text-sky-2 border-sky-2/30",
  Tunai: "bg-leaf/10 text-leaf border-leaf/30",
  Transfer: "bg-marigold/15 text-marigold-2 border-marigold/40",
};
