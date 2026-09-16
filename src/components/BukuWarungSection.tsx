import { useState } from "react";
import { bukuWarungInfo, PUBLIC_ORDER_URL } from "../data";
import {
  IconCart,
  IconBarcode,
  IconPrinter,
  IconLayers,
  IconMoney,
  IconDebt,
  IconTruck,
  IconReport,
  IconCloud,
  IconCheck,
  IconArrowRight,
  IconPhone,
  IconShield,
} from "../icons";
import { Reveal, Eyebrow } from "./Ui";

const featureIcons: Record<string, React.ReactNode> = {
  cart: <IconCart size={22} />,
  barcode: <IconBarcode size={22} />,
  printer: <IconPrinter size={22} />,
  layers: <IconLayers size={22} />,
  money: <IconMoney size={22} />,
  debt: <IconDebt size={22} />,
  truck: <IconTruck size={22} />,
  report: <IconReport size={22} />,
  cloud: <IconCloud size={22} />,
};

export default function BukuWarungSection() {
  const [activeTab, setActiveTab] = useState<"pos" | "struk" | "hutang">("pos");

  return (
    <section
      id="buku-warung"
      className="bg-ledger relative border-b-2 border-ink/10 py-20 sm:py-28"
      aria-labelledby="buku-warung-title"
    >
      {/* Background Decorative Glow */}
      <div
        className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-marigold/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-leaf/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <Eyebrow tone="marigold">Produk Unggulan UMKM · Buku Warung</Eyebrow>
          </Reveal>
          <Reveal delay={90}>
            <h2
              id="buku-warung-title"
              className="font-display mt-5 text-3xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-4xl lg:text-[2.85rem]"
            >
              Aplikasi Kasir & Pembukuan <br className="hidden sm:inline" />
              <span className="text-marigold-2 underline decoration-marigold decoration-wavy decoration-2">
                Simpel & Praktis
              </span>{" "}
              untuk Warung Anda.
            </h2>
          </Reveal>
          <Reveal delay={170}>
            <p className="mt-5 text-base leading-relaxed text-ink/70 sm:text-lg">
              Buku Warung hadir khusus untuk warung, toko kelontong, dan UMKM Indonesia. Kelola transaksi kasir,
              stok barang, cetak struk, dan catat bon piutang pelanggan langsung di HP Android Anda.
            </p>
          </Reveal>
        </div>

        {/* Pricing Card & Interactive POS Showcase */}
        <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
          {/* KIRI: Pricing & License Highlight Box (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <Reveal className="h-full">
              <div className="relative flex h-full flex-col justify-between rounded-3xl border-3 border-ink bg-card p-6 sm:p-8 shadow-[6px_6px_0_0_var(--color-ink)] transition-all">
                {/* Ribbon Tag */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-leaf/40 bg-leaf/15 px-3.5 py-1 font-mono text-[11px] font-extrabold uppercase tracking-wider text-leaf">
                    <span className="h-2 w-2 rounded-full bg-leaf animate-pulse" />
                    100% OFFLINE READY
                  </span>
                  <span className="font-mono text-xs font-bold text-ink/40">Android APK</span>
                </div>

                {/* Price Display */}
                <div className="mt-6 border-b border-ink/10 pb-6">
                  <p className="font-mono text-xs font-bold uppercase tracking-widest text-ink/50">
                    Lisensi Resmi Pemilik
                  </p>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-ink">
                      Rp50.000
                    </span>
                    <span className="font-mono text-xs font-bold text-ink/60">/ Sekali Beli</span>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm font-semibold text-leaf">
                    ✓ Tanpa iuran bulanan · Tanpa langganan · Aktif selamanya
                  </p>
                </div>

                {/* Core License Guarantees */}
                <ul className="my-6 space-y-3">
                  {bukuWarungInfo.coreBenefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm font-semibold text-ink/80">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-leaf/20 text-leaf">
                        <IconCheck size={13} />
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* License Policy Callout */}
                <div className="rounded-xl border border-ink/10 bg-paper/70 p-3.5 text-xs text-ink/75">
                  <p className="font-bold flex items-center gap-1.5 text-ink">
                    <IconShield size={14} className="text-marigold-2" /> Ketentuan Lisensi:
                  </p>
                  <p className="mt-1 font-mono text-[11px] text-ink/65">
                    1 Lisensi = 1 Email Pemilik = 1 HP Aktif. Koneksi internet hanya dibutuhkan sekali saat aktivasi awal.
                  </p>
                </div>

                {/* CTAs */}
                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href={PUBLIC_ORDER_URL}
                    className="btn-arrow flex w-full items-center justify-center gap-2 rounded-2xl bg-marigold px-6 py-4 text-center font-display text-base font-extrabold text-ink transition-all hover:bg-marigold-2 hover:-translate-y-0.5 shadow-[3px_3px_0_0_var(--color-ink)]"
                  >
                    <span>Beli Buku Warung — Rp50.000</span>
                    <IconArrowRight size={17} />
                  </a>
                  <a
                    href="#cara-beli"
                    className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-ink/15 py-2.5 text-xs font-bold text-ink transition hover:bg-ink/5"
                  >
                    <span>Lihat 4 Langkah Cara Pembelian</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* KANAN: Interactive Mobile App Mockup Preview (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <Reveal delay={150} className="h-full">
              <div className="flex h-full flex-col overflow-hidden rounded-3xl border-3 border-ink bg-ink text-paper shadow-[6px_6px_0_0_var(--color-ink)]">
                {/* Header Simulator */}
                <div className="flex items-center justify-between border-b border-paper/10 bg-ink-2 px-5 py-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-marigold text-ink">
                      <IconPhone size={20} />
                    </span>
                    <div>
                      <p className="font-display text-sm font-extrabold leading-tight text-paper">
                        Buku Warung · Toko Berkah
                      </p>
                      <p className="font-mono text-[10px] text-paper/50">Mode Offline Aktif · HP Android</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1.5 rounded-full border border-leaf/40 bg-leaf/20 px-2.5 py-0.5 font-mono text-[10px] font-bold text-leaf">
                      <span className="h-1.5 w-1.5 rounded-full bg-leaf" /> OFFLINE
                    </span>
                  </div>
                </div>

                {/* Tabs Simulator */}
                <div className="flex border-b border-paper/10 bg-ink px-4 pt-3">
                  {[
                    { key: "pos", label: "🛒 Layar Kasir POS" },
                    { key: "struk", label: "🧾 Cetak Struk" },
                    { key: "hutang", label: "📒 Catat Bon Hutang" },
                  ].map((t) => (
                    <button
                      key={t.key}
                      onClick={() => setActiveTab(t.key as any)}
                      className={`px-3.5 py-2 font-mono text-xs font-bold transition-all cursor-pointer ${
                        activeTab === t.key
                          ? "border-b-2 border-marigold text-marigold bg-paper/5"
                          : "text-paper/50 hover:text-paper"
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>

                {/* Simulator Body */}
                <div className="flex-1 p-5 bg-ink-2/30">
                  {activeTab === "pos" && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs text-paper/60 font-mono">
                        <span>Keranjang Belanja (3 Barang)</span>
                        <span className="text-leaf">Barcode Scanner Siap</span>
                      </div>
                      <div className="space-y-2">
                        {[
                          { name: "Minyak Goreng 1L", qty: "2x", price: "Rp 32.000", code: "899277521" },
                          { name: "Beras Premium 5kg", qty: "1x", price: "Rp 74.000", code: "899100234" },
                          { name: "Gula Pasir 1kg", qty: "1x", price: "Rp 17.500", code: "899345112" },
                        ].map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between rounded-xl border border-paper/10 bg-paper/[0.04] p-3 text-xs"
                          >
                            <div>
                              <p className="font-bold text-paper text-sm">{item.name}</p>
                              <p className="font-mono text-[10px] text-paper/40">
                                {item.code} · {item.qty}
                              </p>
                            </div>
                            <span className="font-mono font-extrabold text-marigold text-sm">{item.price}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 rounded-2xl border-2 border-dashed border-marigold/40 bg-marigold/10 p-4">
                        <div className="flex justify-between items-center text-xs font-mono text-paper/70">
                          <span>TOTAL TRANSAKSI</span>
                          <span>UANG DITERIMA: Rp 150.000</span>
                        </div>
                        <div className="mt-1 flex justify-between items-baseline">
                          <span className="font-display text-2xl font-extrabold text-marigold">Rp 123.500</span>
                          <span className="font-mono text-sm font-bold text-leaf">Kembalian: Rp 26.500</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "struk" && (
                    <div className="mx-auto max-w-xs rounded-xl bg-paper p-4 text-ink font-mono text-xs shadow-lg">
                      <div className="text-center border-b border-dashed border-ink/20 pb-3">
                        <p className="font-extrabold text-sm">TOKO BERKAH JAYA</p>
                        <p className="text-[10px] text-ink/60">Jl. Pasar Minggu No. 12 · 0812-XXXX-XXXX</p>
                        <p className="text-[9px] text-ink/40 mt-1">14 Sep 2026 13:10 · Kasir 01</p>
                      </div>
                      <div className="py-2.5 space-y-1.5 border-b border-dashed border-ink/20 text-[11px]">
                        <div className="flex justify-between">
                          <span>Minyak Goreng 1L x2</span>
                          <span>32.000</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Beras Premium 5kg x1</span>
                          <span>74.000</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Gula Pasir 1kg x1</span>
                          <span>17.500</span>
                        </div>
                      </div>
                      <div className="pt-2 text-[11px] space-y-1 font-bold">
                        <div className="flex justify-between">
                          <span>TOTAL</span>
                          <span className="text-sm">Rp 123.500</span>
                        </div>
                        <div className="flex justify-between font-normal text-[10px] text-ink/70">
                          <span>TUNAI</span>
                          <span>Rp 150.000</span>
                        </div>
                        <div className="flex justify-between text-leaf">
                          <span>KEMBALI</span>
                          <span>Rp 26.500</span>
                        </div>
                      </div>
                      <div className="mt-3 text-center border-t border-dashed border-ink/20 pt-2 text-[10px] text-ink/60">
                        <p>Terima Kasih Atas Kunjungan Anda!</p>
                        <p className="font-semibold text-leaf mt-0.5">✓ Struk Thermal 58mm Siap Cetak</p>
                      </div>
                    </div>
                  )}

                  {activeTab === "hutang" && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs text-paper/60 font-mono">
                        <span>Buku Catatan Bon Pelanggan</span>
                        <span className="text-marigold">Total Piutang: Rp 410.000</span>
                      </div>
                      <div className="space-y-2">
                        {[
                          { name: "Pak Haji Joko", phone: "0812-34xx-xxxx", amount: "Rp 150.000", status: "Jatuh Tempo 3 Hari" },
                          { name: "Bu Siti Rahayu", phone: "0857-11xx-xxxx", amount: "Rp 85.000", status: "Belum Lunas" },
                          { name: "Mas Doni (Bengkel)", phone: "0898-76xx-xxxx", amount: "Rp 175.000", status: "Cicilan 1/2" },
                        ].map((cust, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between rounded-xl border border-paper/10 bg-paper/[0.04] p-3 text-xs"
                          >
                            <div>
                              <p className="font-bold text-paper text-sm">{cust.name}</p>
                              <p className="font-mono text-[10px] text-paper/40">{cust.phone}</p>
                            </div>
                            <div className="text-right">
                              <span className="font-mono font-extrabold text-brick text-sm">{cust.amount}</span>
                              <p className="font-mono text-[10px] text-marigold">{cust.status}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="text-center font-mono text-[11px] text-paper/50 pt-2">
                        ✓ Catat hutang langsung di HP, bebas resiko buku bon hilang atau basah.
                      </p>
                    </div>
                  )}
                </div>

                {/* Footer Simulator Info */}
                <div className="border-t border-paper/10 bg-ink px-5 py-3 flex items-center justify-between text-[11px] font-mono text-paper/60">
                  <span>Kompatibel: Android 7.0+</span>
                  <span className="text-marigold">Printer Bluetooth 58/80mm Ready</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* 9 Features Grid Section */}
        <div id="fitur" className="mt-24 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto">
            <Reveal>
              <Eyebrow>Fitur Lengkap Kasir & Pembukuan</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h3 className="font-display mt-4 text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                Semua yang Dibutuhkan Warung Anda, <br />
                <span className="text-leaf">Tersedia Lengkap Tanpa Biaya Tambahan.</span>
              </h3>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bukuWarungInfo.features.map((feat, idx) => (
              <Reveal key={feat.title} delay={idx * 60}>
                <article className="card-lift group flex h-full flex-col justify-between rounded-2xl border-2 border-ink/10 bg-card p-6 shadow-sm hover:border-ink/30 hover:shadow-md transition-all">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-marigold group-hover:bg-marigold group-hover:text-ink transition-colors">
                        {featureIcons[feat.icon]}
                      </span>
                      <span className="rounded-full border border-ink/10 bg-paper px-2.5 py-0.5 font-mono text-[10px] font-bold text-ink/60">
                        {feat.badge}
                      </span>
                    </div>
                    <h4 className="font-display mt-5 text-lg font-bold text-ink sm:text-xl">
                      {feat.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-ink/65">
                      {feat.desc}
                    </p>
                  </div>
                  <div className="mt-5 border-t border-ink/8 pt-3 flex items-center gap-1.5 font-mono text-[11px] font-bold text-leaf">
                    <IconCheck size={14} /> Termasuk dalam lisensi Rp50rb
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
