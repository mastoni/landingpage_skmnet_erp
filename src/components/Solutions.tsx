import { solutions } from "../data";
import {
  IconStore,
  IconErp,
  IconChip,
  IconWifi,
  IconCheck,
  IconArrowRight,
} from "../icons";
import { Reveal, SectionHead } from "./Ui";

const iconMap: Record<string, React.ReactNode> = {
  store: <IconStore size={22} />,
  erp: <IconErp size={22} />,
  chip: <IconChip size={22} />,
  wifi: <IconWifi size={22} />,
};

export default function Solutions() {
  return (
    <section id="ekosistem" className="relative border-b-2 border-ink/10 bg-card/60 py-20 sm:py-28" aria-labelledby="ekosistem-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            eyebrow="Ekosistem Solusi Digital"
            title={
              <span id="ekosistem-title">
                Semua Kebutuhan Teknologi, <br />
                <span className="text-sky-2">Terintegrasi dalam Satu Ekosistem.</span>
              </span>
            }
            copy="Dari aplikasi kasir warung mandiri hingga ERP multi-cabang, otomatisasi pesan, internet, dan keamanan CCTV — SKMNetwork mendampingi pertumbuhan bisnis Anda."
          />
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((s, i) => (
            <Reveal key={s.id} delay={i * 80}>
              <article
                className={`card-lift group flex h-full flex-col justify-between rounded-2xl border-2 p-6 transition-all ${
                  s.highlight
                    ? "border-marigold bg-card shadow-[4px_4px_0_0_var(--color-marigold-2)]"
                    : "border-ink/10 bg-card hover:border-ink/30 shadow-xs"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${
                        s.highlight
                          ? "bg-marigold text-ink"
                          : "bg-ink text-marigold group-hover:bg-marigold group-hover:text-ink"
                      }`}
                    >
                      {iconMap[s.icon]}
                    </span>
                    {s.highlight && (
                      <span className="rounded-full bg-marigold/20 border border-marigold/40 px-2 py-0.5 font-mono text-[9px] font-extrabold uppercase text-marigold-2">
                        FLAGSHIP
                      </span>
                    )}
                  </div>
                  <h3 className="font-display mt-5 text-lg font-bold text-ink sm:text-xl">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-ink/65">
                    {s.desc}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-ink/8 pt-4">
                    {s.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-xs font-semibold text-ink/75">
                        <IconCheck size={14} className="text-leaf shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-ink/8">
                  <a
                    href={s.href}
                    {...(s.isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={`btn-arrow flex w-full items-center justify-center gap-1.5 rounded-xl py-2.5 px-3 text-xs font-extrabold transition ${
                      s.highlight
                        ? "bg-marigold text-ink hover:bg-marigold-2"
                        : "border-2 border-ink/15 text-ink hover:bg-ink hover:text-paper"
                    }`}
                  >
                    <span>{s.cta}</span>
                    <IconArrowRight size={13} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
