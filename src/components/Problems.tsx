import { problems } from "../data";
import { IconKasir, IconStok, IconDompet, IconGrafik, IconArrow } from "../icons";
import { Reveal, Eyebrow } from "./Ui";

const iconMap: Record<string, React.ReactNode> = {
  kasir: <IconKasir size={22} />,
  stok: <IconStok size={22} />,
  dompet: <IconDompet size={22} />,
  grafik: <IconGrafik size={22} />,
};

export default function Problems() {
  return (
    <section className="relative py-20 sm:py-28" aria-labelledby="masalah-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* kiri: sticky */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <Eyebrow>Masalah klasik UMKM</Eyebrow>
              </Reveal>
              <Reveal delay={90}>
                <h2 id="masalah-title" className="font-display mt-5 text-3xl font-bold leading-[1.05] tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
                  Masih jualan pakai <span className="relative whitespace-nowrap">buku tulis<svg className="absolute -bottom-1.5 left-0 w-full" viewBox="0 0 200 10" fill="none" preserveAspectRatio="none" aria-hidden><path d="M3 7C50 2 150 2 197 6" stroke="var(--color-brick)" strokeWidth="4" strokeLinecap="round" opacity="0.7" /></svg></span> & kalkulator?
                </h2>
              </Reveal>
              <Reveal delay={170}>
                <p className="mt-5 text-base leading-relaxed text-ink/70 sm:text-lg">
                  Sebagian besar UMKM bukan kurang laku — tapi <strong className="font-bold text-ink">bocor di operasional</strong>. Empat masalah ini
                  diam-diam menggerus margin setiap bulan, dan semuanya beres begitu pembukuan pindah ke sistem.
                </p>
              </Reveal>
              <Reveal delay={250}>
                <a href="#fitur" className="btn-arrow group mt-7 inline-flex items-center gap-2.5 rounded-xl bg-ink px-5.5 py-3.5 text-sm font-bold text-paper transition hover:bg-ink-2">
                  Lihat cara BizERP membereskannya
                  <IconArrow size={16} />
                </a>
              </Reveal>

              <Reveal delay={320}>
                <div className="mt-10 hidden rounded-xl border-2 border-dashed border-ink/15 bg-card/60 p-5 lg:block">
                  <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ink/45">Hasil rata-rata 3 bulan pemakaian</p>
                  <div className="mt-3 grid grid-cols-3 gap-4">
                    {[
                      ["−92%", "selisih stok"],
                      ["+5 jam", "waktu luang/hari"],
                      ["×3", "lebih cepat rekap"],
                    ].map(([v, l]) => (
                      <div key={l}>
                        <p className="font-display text-xl font-extrabold text-leaf">{v}</p>
                        <p className="mt-0.5 text-[11px] font-semibold text-ink/55">{l}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* kanan: kartu masalah */}
          <div className="space-y-5 lg:col-span-7">
            {problems.map((p, i) => (
              <Reveal key={p.no} delay={i * 80}>
                <article
                  className={`card-lift group relative overflow-hidden rounded-xl border-2 border-ink/10 bg-card p-6 sm:p-7 ${
                    i % 2 === 1 ? "lg:ml-10" : ""
                  }`}
                >
                  <span className="font-display pointer-events-none absolute -right-3 -top-6 text-[7rem] font-extrabold leading-none text-ink/[0.05] transition group-hover:text-marigold/20" aria-hidden>
                    {p.no}
                  </span>
                  <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border-2 border-ink/10 bg-paper text-ink transition group-hover:border-marigold group-hover:bg-marigold/15">
                      {iconMap[p.icon]}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-mono text-xs font-bold text-brick">/{p.no}</span>
                        <h3 className="font-display text-lg font-bold text-ink sm:text-xl">{p.title}</h3>
                      </div>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/65 sm:text-[15px]">{p.desc}</p>
                      <p className="mt-3.5 inline-flex items-center gap-2 rounded-full border border-brick/25 bg-brick/10 px-3 py-1 font-mono text-[11px] font-bold text-brick">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <path d="M4 7l6 6 4-4 6 8M14 17h6v-6" />
                        </svg>
                        {p.stat}
                      </p>
                    </div>
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
