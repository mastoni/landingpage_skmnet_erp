import { testimonials } from "../data";
import { Reveal, SectionHead, Stars } from "./Ui";

const metricCls: Record<string, string> = {
  marigold: "bg-marigold/20 text-ink border-marigold/50",
  sky: "bg-sky-2/10 text-sky-2 border-sky-2/30",
  leaf: "bg-leaf/10 text-leaf border-leaf/30",
  brick: "bg-brick/10 text-brick border-brick/30",
  ink: "bg-ink text-paper border-ink",
};

const avatarCls: Record<string, string> = {
  marigold: "bg-marigold text-ink",
  sky: "bg-sky-2 text-paper",
  leaf: "bg-leaf text-paper",
  brick: "bg-brick text-paper",
  ink: "bg-ink text-marigold",
};

const initials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

export default function Testimonials() {
  return (
    <section id="testimoni" className="bg-ledger relative overflow-hidden border-y-2 border-ink/10 bg-card/50 py-20 sm:py-28" aria-labelledby="testi-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            eyebrow="Kata mereka yang sudah naik kelas"
            title={<span id="testi-title">Bukan dari kami — <span className="text-brick">dari sesama juragan</span></span>}
            copy="Dari kedai kopi sampai toko bangunan 4.500 SKU. Angka di setiap kartu adalah hasil yang mereka ukur sendiri."
          />
          <Reveal delay={180}>
            <div className="rounded-xl border-2 border-ink/10 bg-card px-5 py-4 text-center">
              <p className="font-display text-3xl font-extrabold text-ink">4,9<span className="text-lg text-ink/40">/5</span></p>
              <Stars className="mt-1 justify-center" />
              <p className="mt-1 font-mono text-[10px] font-bold uppercase tracking-widest text-ink/45">3.120 ulasan terverifikasi</p>
            </div>
          </Reveal>
        </div>

        {/* kartu pos tersebar */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90} className={i === 1 ? "lg:translate-y-6" : i === 3 ? "lg:-translate-y-3" : ""}>
              <figure className={`postcard relative h-full rounded-xl border-2 border-ink/12 bg-card p-6 shadow-[0_14px_35px_-18px_rgba(11,31,51,0.35)] ${t.rotate}`}>
                {/* selotip */}
                <span className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 rotate-[-4deg] rounded-sm bg-marigold/70 shadow-sm" aria-hidden />
                <Stars />
                <blockquote className="mt-3.5 text-[15px] font-medium leading-relaxed text-ink/80">
                  “{t.quote}”
                </blockquote>
                <p className={`mt-4 inline-flex rounded-full border px-3 py-1 font-mono text-[11px] font-extrabold ${metricCls[t.color]}`}>
                  ▲ {t.metric}
                </p>
                <figcaption className="mt-5 flex items-center gap-3.5 border-t-2 border-dashed border-ink/10 pt-4.5">
                  <span className={`font-display flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-extrabold ${avatarCls[t.color]}`}>
                    {initials(t.name)}
                  </span>
                  <div>
                    <p className="text-sm font-extrabold text-ink">{t.name}</p>
                    <p className="font-mono text-[11px] font-semibold text-ink/50">
                      {t.biz} · {t.city}
                    </p>
                    <p className="font-mono text-[10px] text-ink/40">{t.type}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}

          {/* kartu ajakan */}
          <Reveal delay={450} className="lg:translate-y-10">
            <a
              href="#daftar"
              className="postcard flex h-full rotate-2 flex-col items-start justify-center rounded-xl border-2 border-dashed border-ink/25 bg-paper p-6"
            >
              <p className="font-display text-2xl font-extrabold leading-tight text-ink">
                Kartu berikutnya bisa jadi <span className="bg-marigold px-1.5">milik Anda.</span>
              </p>
              <p className="mt-3 text-sm font-semibold text-ink/60">Gratis 14 hari. Tanpa kartu kredit. Batalkan kapan saja.</p>
              <span className="btn-arrow mt-5 inline-flex items-center gap-2 font-mono text-sm font-extrabold text-brick">
                MULAI SEKARANG
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M4 12h15M13.5 5.5 20 12l-6.5 6.5" />
                </svg>
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
