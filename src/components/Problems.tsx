import { problems } from "../data";
import { IconReport, IconCart, IconLayers, IconMoney, IconArrowRight, IconCheck } from "../icons";
import { Reveal, Eyebrow } from "./Ui";

const iconMap: Record<string, React.ReactNode> = {
  report: <IconReport size={20} />,
  cart: <IconCart size={20} />,
  layers: <IconLayers size={20} />,
  money: <IconMoney size={20} />,
};

export default function Problems() {
  return (
    <section id="masalah" className="bg-ledger relative border-b-2 border-ink/10 py-20 sm:py-28" aria-labelledby="masalah-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* KIRI: Sticky Narasi Masalah UMKM */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <Eyebrow>Tantangan Nyata di Warung</Eyebrow>
              </Reveal>
              <Reveal delay={90}>
                <h2 id="masalah-title" className="font-display mt-5 text-3xl font-extrabold leading-[1.06] tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
                  Jualan Ramai Tapi <span className="text-brick">Uang Kas & Stok</span> Sering Selisih?
                </h2>
              </Reveal>
              <Reveal delay={170}>
                <p className="mt-5 text-base leading-relaxed text-ink/70 sm:text-lg">
                  Banyak pemilik warung dan toko masih mencatat kasir dan piutang di buku kertas manual. Akibatnya bon terselip, hitung kembalian lambat, dan keuntungan bersih tidak jelas.
                </p>
              </Reveal>
              <Reveal delay={250}>
                <div className="mt-6 rounded-2xl border-2 border-dashed border-leaf/40 bg-leaf/10 p-5">
                  <p className="font-display font-bold text-ink text-base">
                    💡 Solusi Praktis: Buku Warung
                  </p>
                  <p className="mt-1.5 text-xs sm:text-sm text-ink/70 leading-relaxed">
                    Tinggal buka HP, catat kasir dalam 3 detik, dan pantau pembukuan rapi — tanpa perlu bayar langganan bulanan.
                  </p>
                  <a
                    href="#buku-warung"
                    className="btn-arrow mt-4 inline-flex items-center gap-1.5 font-mono text-xs font-extrabold text-leaf transition hover:text-ink uppercase tracking-wider"
                  >
                    <span>Pelajari Solusinya</span>
                    <IconArrowRight size={13} />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>

          {/* KANAN: Daftar 4 Masalah Utama & Solusinya */}
          <div className="space-y-5 lg:col-span-7">
            {problems.map((p, i) => (
              <Reveal key={p.no} delay={i * 80}>
                <article className="card-lift group flex items-start gap-5 rounded-2xl border-2 border-ink/10 bg-card p-6 hover:border-ink/30 sm:p-7 shadow-xs">
                  <span className="font-display text-3xl font-extrabold text-ink/15 transition-colors group-hover:text-brick sm:text-4xl">
                    {p.no}
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-display flex items-center gap-2.5 text-lg font-bold text-ink sm:text-xl">
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brick/10 text-brick">
                          {iconMap[p.icon]}
                        </span>
                        {p.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-ink/60">{p.desc}</p>
                    
                    {/* Solusi Buku Warung */}
                    <div className="mt-3.5 flex items-start gap-2 rounded-xl bg-leaf/10 p-3 text-xs font-semibold text-ink/80">
                      <IconCheck size={16} className="text-leaf shrink-0 mt-0.5" />
                      <span>{p.solution}</span>
                    </div>

                    <p className="mt-3 inline-flex rounded-full border border-brick/20 bg-brick/5 px-2.5 py-0.5 font-mono text-[10px] font-bold text-brick">
                      Masalah: {p.tag}
                    </p>
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
