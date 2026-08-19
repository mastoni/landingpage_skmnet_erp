import { steps } from "../data";
import { IconPetir, IconImport, IconGrafik, IconArrow } from "../icons";
import { Reveal, SectionHead } from "./Ui";

const iconMap: Record<string, React.ReactNode> = {
  petir: <IconPetir size={22} />,
  import: <IconImport size={22} />,
  grafik: <IconGrafik size={22} />,
};

export default function HowItWorks() {
  return (
    <section id="cara-kerja" className="bg-ledger-dark relative overflow-hidden bg-ink py-20 text-paper sm:py-28" aria-labelledby="cara-title">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[120%] -translate-x-1/2 bg-gradient-to-r from-transparent via-marigold/60 to-transparent" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            dark
            eyebrow="Cara kerja"
            title={<span id="cara-title">Dari daftar sampai laporan rapi, cuma <span className="text-marigold">3 langkah</span></span>}
            copy="Tidak perlu orang IT, tidak perlu training berhari-hari. Rata-rata pengguna melakukan transaksi pertamanya dalam 15 menit."
          />
          <Reveal delay={200}>
            <p className="hidden max-w-[220px] rounded-xl border-2 border-dashed border-paper/20 p-4 font-mono text-[11px] leading-relaxed text-paper/60 lg:block">
              ⌀ waktu setup pengguna baru:<br />
              <span className="text-2xl font-bold text-marigold">14 menit 32 detik</span>
            </p>
          </Reveal>
        </div>

        <div className="relative mt-14 grid gap-10 lg:grid-cols-3 lg:gap-8">
          {/* garis penghubung */}
          <div className="absolute left-[16%] right-[16%] top-9 hidden border-t-2 border-dashed border-paper/20 lg:block" aria-hidden />
          {steps.map((s, i) => (
            <Reveal key={s.no} delay={i * 130}>
              <div className="relative">
                <div className="flex items-center gap-4">
                  <span className="relative z-10 flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-2xl border-2 border-marigold/50 bg-ink-2 text-marigold shadow-[0_0_0_8px_rgba(11,31,51,1)]">
                    {iconMap[s.icon]}
                    <span className="font-display absolute -right-2.5 -top-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-marigold text-xs font-extrabold text-ink">
                      {i + 1}
                    </span>
                  </span>
                  <span className="font-display text-5xl font-extrabold text-paper/15" aria-hidden>
                    {s.no}
                  </span>
                </div>
                <h3 className="font-display mt-5 text-xl font-bold text-paper sm:text-2xl">{s.title}</h3>
                <p className="mt-2.5 max-w-sm text-sm leading-relaxed text-paper/65">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-14 flex flex-col items-center gap-4 border-t-2 border-dashed border-paper/15 pt-10 text-center">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-paper/50">Gratis migrasi data · gratis onboarding · batalkan kapan saja</p>
            <a
              href="#daftar"
              className="btn-arrow inline-flex items-center gap-2.5 rounded-xl bg-marigold px-7 py-3.5 text-base font-extrabold text-ink transition hover:-translate-y-0.5 hover:bg-marigold-2"
            >
              Mulai Sekarang — Gratis
              <IconArrow size={17} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
