import { IconCheck, IconGrafik, IconShield, IconPetir } from "../icons";
import { Reveal, Eyebrow } from "./Ui";

const checks = [
  "Laporan keuangan UMKM tersusun otomatis, siap untuk pengajuan KUR",
  "Stok opname akurat — tidak ada lagi modal menguap tanpa jejak",
  "Rekam jejak transaksi rapi untuk lapor pajak & pembukuan resmi",
  "Skala bisnis tanpa menambah tenaga admin",
];

export default function SeoSection() {
  return (
    <section className="relative py-20 sm:py-28" aria-labelledby="seo-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>Kenapa ERP untuk UMKM?</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h2 id="seo-title" className="font-display mt-5 text-3xl font-bold leading-[1.08] tracking-tight text-ink sm:text-4xl lg:text-[2.6rem]">
                ERP bukan lagi barang mewah perusahaan besar — ini <span className="text-leaf">senjata UMKM naik kelas</span>
              </h2>
            </Reveal>
            <Reveal delay={170}>
              <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-ink/70">
                <p>
                  Indonesia punya lebih dari <strong className="font-bold text-ink">64 juta UMKM</strong>, namun baru sebagian kecil yang pembukuannya
                  terdigitalisasi. Padahal, UMKM yang mengelola <strong className="font-bold text-ink">kasir, stok, dan laporan keuangan</strong> dalam
                  satu sistem terbukti mengambil keputusan lebih cepat dan menekan kebocoran operasional secara drastis.
                </p>
                <p>
                  <strong className="font-bold text-ink">BizERP</strong> hadir sebagai <strong className="font-bold text-ink">aplikasi ERP untuk UMKM</strong> yang
                  sederhana: semua modul — mulai dari <em className="not-italic font-semibold text-ink">software kasir (POS)</em>, manajemen inventori,
                  akuntansi, hingga HR — saling terhubung dan berbahasa Indonesia penuh. Anda tidak perlu latar belakang akunting untuk membaca
                  laporan laba-rugi yang dihasilkan otomatis setiap hari.
                </p>
              </div>
            </Reveal>
            <Reveal delay={250}>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {checks.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 rounded-lg border-2 border-ink/8 bg-card p-3.5 text-sm font-semibold text-ink/75 transition hover:border-leaf/40">
                    <IconCheck size={17} className="mt-0.5 shrink-0 text-leaf" />
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* aside angka */}
          <div className="lg:col-span-5">
            <Reveal delay={200}>
              <aside className="rounded-2xl border-2 border-ink/10 bg-ink p-7 text-paper sm:p-8" aria-label="Fakta digitalisasi UMKM">
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-marigold">Fakta lapangan</p>
                <div className="mt-5 space-y-6">
                  {[
                    { icon: <IconGrafik size={20} />, v: "64 jt+", l: "UMKM di Indonesia — tulang punggung 61% PDB nasional" },
                    { icon: <IconPetir size={20} />, v: "< 20%", l: "yang sudah menjalankan pembukuan digital secara konsisten" },
                    { icon: <IconShield size={20} />, v: "2–3×", l: "peluang approval KUR lebih tinggi dengan laporan keuangan rapi" },
                  ].map((f) => (
                    <div key={f.v} className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border-2 border-marigold/40 bg-marigold/10 text-marigold">
                        {f.icon}
                      </span>
                      <div>
                        <p className="font-display text-2xl font-extrabold text-marigold">{f.v}</p>
                        <p className="mt-0.5 text-sm leading-snug text-paper/65">{f.l}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-7 border-t-2 border-dashed border-paper/15 pt-5 font-mono text-[10px] leading-relaxed text-paper/40">
                  Sumber: Kemenkop UKM, Bank Indonesia (diolah). Angka approval KUR berdasarkan survei internal pengguna BizERP 2025.
                </p>
              </aside>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
