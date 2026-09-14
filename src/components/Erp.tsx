import { erpModules, ERP_URL, ERP_IMAGE } from "../data";
import { useInView } from "../hooks";
import { IconErp, IconLayers, IconStore, IconTarget, IconExpand, IconMonitor, IconArrowRight } from "../icons";
import { Reveal, Eyebrow } from "./Ui";
import ShowcasePlans from "./ShowcasePlans";

const modIcons: Record<string, React.ReactNode> = {
  erp: <IconErp size={19} />,
  layers: <IconLayers size={19} />,
  store: <IconStore size={19} />,
  target: <IconTarget size={19} />,
  expand: <IconExpand size={19} />,
  monitor: <IconMonitor size={19} />,
};

export default function Erp() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);

  return (
    <section id="erp" className="bg-ledger relative border-b-2 border-ink/10 py-20 sm:py-28" aria-labelledby="erp-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* KIRI: Narasi SKMNet ERP untuk Usaha Berkembang */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <Eyebrow>Solusi Bisnis Berkembang · SKMNet ERP</Eyebrow>
              </Reveal>
              <Reveal delay={90}>
                <h2 id="erp-title" className="font-display mt-5 text-3xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
                  SKMNet ERP — <span className="text-marigold-2">Menyatukan</span> Multi-Cabang & Gudang.
                </h2>
              </Reveal>
              <Reveal delay={170}>
                <p className="mt-5 text-base leading-relaxed text-ink/70 sm:text-lg">
                  Untuk bisnis yang membutuhkan kontrol lebih lengkap: kelola banyak outlet, transfer stok antar gudang, hak akses staf, dan laporan keuangan cloud terpusat.
                </p>
              </Reveal>

              <Reveal delay={250}>
                <div className="relative mt-8 max-w-sm">
                  <img
                    src={ERP_IMAGE}
                    alt="Pengelola usaha menggunakan SKMNet ERP di tablet"
                    width={1200}
                    height={1000}
                    loading="lazy"
                    className="w-full rounded-2xl border-2 border-ink/12 shadow-[0_25px_50px_-25px_rgba(11,31,51,0.5)]"
                  />
                  <span className="floaty absolute -right-3 -top-4 rounded-xl border-2 border-ink/10 bg-marigold px-4 py-2 font-display text-sm font-extrabold text-ink shadow-lg">
                    satu sistem, multi-cabang
                  </span>
                </div>
              </Reveal>

              <Reveal delay={330}>
                <div className="mt-8 flex flex-wrap gap-3.5">
                  <a
                    href={`${ERP_URL}/login`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-arrow inline-flex items-center gap-2 rounded-xl bg-ink px-6 py-3.5 text-sm font-extrabold text-paper transition hover:-translate-y-0.5 hover:bg-ink-2"
                  >
                    Masuk Web ERP
                    <IconArrowRight size={16} />
                  </a>
                  <a
                    href={`${ERP_URL}/register`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border-2 border-marigold/50 bg-marigold/10 px-5 py-3 text-sm font-bold text-marigold-2 transition hover:bg-marigold/20"
                  >
                    Daftar Akun ERP ↗
                  </a>
                </div>
                <p className="mt-3.5 font-mono text-[11px] font-semibold text-ink/40">
                  Akses web resmi: erp.skmnetwork.com
                </p>
              </Reveal>
            </div>
          </div>

          {/* KANAN: Jendela Modul SKMNet ERP */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="overflow-hidden rounded-2xl border-2 border-ink/15 bg-ink shadow-[0_35px_70px_-30px_rgba(11,31,51,0.6)]">
                {/* Bar Jendela */}
                <div className="flex items-center justify-between border-b border-paper/10 px-5 py-3.5">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-brick/80" />
                    <span className="h-3 w-3 rounded-full bg-marigold/80" />
                    <span className="h-3 w-3 rounded-full bg-leaf/80" />
                  </div>
                  <p className="font-mono text-[11px] font-bold tracking-widest text-paper/50">
                    skmnet-erp · modul terpusat
                  </p>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-leaf text-leaf ping-dot" />
                </div>

                {/* Modul Grid */}
                <div className="grid gap-3 p-5 sm:grid-cols-2">
                  {erpModules.map((m, i) => (
                    <Reveal key={m.title} delay={i * 70}>
                      <div className="group flex items-start gap-3.5 rounded-xl border border-paper/10 bg-paper/[0.04] p-4 transition hover:border-marigold/50 hover:bg-paper/[0.07]">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-marigold/15 text-marigold transition group-hover:bg-marigold group-hover:text-ink">
                          {modIcons[m.icon]}
                        </span>
                        <span>
                          <span className="font-display block text-[15px] font-bold text-paper">{m.title}</span>
                          <span className="mt-1 block text-[13px] leading-snug text-paper/55">{m.desc}</span>
                        </span>
                      </div>
                    </Reveal>
                  ))}
                </div>

                {/* Strip Laporan */}
                <div ref={ref} className="border-t border-paper/10 px-5 py-4">
                  <div className="flex items-end justify-between gap-6">
                    <div>
                      <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-paper/40">
                        Laporan & Analitik Terpusat
                      </p>
                      <p className="font-display mt-1 text-lg font-bold text-paper">
                        Seluruh cabang terpantau <span className="text-marigold">real-time.</span>
                      </p>
                    </div>
                    <div className="hidden items-end gap-1.5 sm:flex" aria-hidden>
                      {[34, 52, 40, 66, 48, 78, 60, 90].map((h, i) => (
                        <span
                          key={i}
                          className={`bar-grow w-4 rounded-t ${inView ? "bar-in" : ""} ${
                            i >= 6 ? "bg-marigold" : "bg-paper/25"
                          }`}
                          style={{ height: `${h * 0.55}px`, "--bar-delay": `${i * 90}ms` } as React.CSSProperties}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Dynamic ERP Plans & Bundles Showcase */}
        <div id="paket-promo" className="scroll-mt-24">
          <ShowcasePlans
            section="ERP_PLANS"
            eyebrowText="Paket Layanan · SKMNet ERP"
            title="Pilihan Paket ERP untuk Kebutuhan Bisnis Menengah"
            description="Pilih paket langganan software cloud ERP yang sesuai dengan skala operasional dan jumlah cabang usaha Anda."
          />

          <ShowcasePlans
            section="BUNDLES"
            eyebrowText="Solusi Bundel · Terintegrasi"
            title="Paket Solusi Lengkap (ERP + Internet + CCTV)"
            description="Dapatkan efisiensi maksimal dengan integrasi menyeluruh sistem kasir, konektivitas, dan pengawasan bisnis."
          />
        </div>
      </div>
    </section>
  );
}
