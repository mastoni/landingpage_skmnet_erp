import { WHATSAPP_URL, ERP_URL } from "../data";
import { IconArrowRight, IconErp, IconCheck } from "../icons";
import { Reveal, Eyebrow } from "./Ui";

export default function Cta() {
  return (
    <section
      id="kontak"
      className="bg-ledger-dark relative overflow-hidden bg-ink py-20 text-paper sm:py-28"
      aria-labelledby="kontak-title"
    >
      {/* Decorative Blur and SVG */}
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-marigold/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-28 -top-20 h-80 w-80 rounded-full bg-sky-2/15 blur-3xl" aria-hidden />

      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.16]" viewBox="0 0 400 200" preserveAspectRatio="none" fill="none" aria-hidden>
        <path d="M-10 160 90 90l100 40 110-70 120 30" stroke="var(--color-paper)" strokeWidth="1" strokeDasharray="3 6" className="flow-line-slow" />
        <path d="M-10 60 120 120 240 50l170 60" stroke="var(--color-marigold)" strokeWidth="1" strokeDasharray="3 6" className="flow-line-slow" style={{ animationDelay: "1.2s" }} />
        {[
          [90, 90], [190, 130], [300, 60], [120, 120], [240, 50],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3.5" fill="var(--color-marigold)" />
        ))}
      </svg>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <Eyebrow tone="dark">Mulai Sekarang</Eyebrow>
        </Reveal>
        <Reveal delay={90}>
          <h2 id="kontak-title" className="font-display mt-6 text-3xl font-extrabold leading-[1.03] tracking-tight sm:text-5xl lg:text-[3.3rem]">
            Jadikan Warung Anda <span className="text-marigold">Lebih Rapi & Menguntungkan.</span>
          </h2>
        </Reveal>
        <Reveal delay={170}>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-paper/70 sm:text-lg">
            Dapatkan aplikasi Buku Warung seharga <strong>Rp50.000 sekali beli</strong>. Kelola kasir, stok, hutang, dan laporan keuntungan langsung dari HP Android Anda.
          </p>
        </Reveal>

        {/* Action Buttons */}
        <Reveal delay={250}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              className="btn-arrow inline-flex items-center gap-2.5 rounded-2xl bg-marigold px-8 py-4 text-base font-extrabold text-ink transition hover:-translate-y-0.5 hover:bg-marigold-2 shadow-[3px_3px_0_0_var(--color-paper)]"
            >
              Beli Buku Warung — Rp50.000
              <IconArrowRight size={17} />
            </a>
            <a
              href={`${ERP_URL}/login`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border-2 border-paper/25 px-6 py-[14px] text-sm font-bold text-paper transition hover:border-marigold hover:text-marigold"
            >
              <IconErp size={17} />
              Masuk SKMNet ERP ↗
            </a>
          </div>
        </Reveal>

        {/* Guarantees */}
        <Reveal delay={330}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-paper/50">
            <span className="flex items-center gap-1.5 text-paper/70">
              <IconCheck size={14} className="text-leaf" /> Tanpa Iuran Bulanan
            </span>
            <span className="flex items-center gap-1.5 text-paper/70">
              <IconCheck size={14} className="text-leaf" /> 100% Offline Ready
            </span>
            <span className="flex items-center gap-1.5 text-paper/70">
              <IconCheck size={14} className="text-leaf" /> Didampingi Admin SKMNetwork
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
