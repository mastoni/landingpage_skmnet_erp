import { whyPoints, WHATSAPP_URL } from "../data";
import { IconMoney, IconWifi, IconLayers, IconHeadset, IconExpand, IconArrowRight } from "../icons";
import { Reveal, Eyebrow } from "./Ui";

const whyIcons: Record<string, React.ReactNode> = {
  money: <IconMoney size={20} />,
  wifi: <IconWifi size={20} />,
  layers: <IconLayers size={20} />,
  headset: <IconHeadset size={20} />,
  expand: <IconExpand size={20} />,
};

export default function Why() {
  return (
    <section id="tentang" className="bg-ledger relative border-b-2 border-ink/10 bg-card/50 py-20 sm:py-28" aria-labelledby="tentang-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* KIRI: Narasi Mengapa Memilih SKMNetwork */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <Eyebrow>Komitmen Kami</Eyebrow>
              </Reveal>
              <Reveal delay={90}>
                <h2 id="tentang-title" className="font-display mt-5 text-3xl font-extrabold leading-[1.06] tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
                  Teknologi Jujur untuk <span className="text-marigold-2">Pertumbuhan Nyata.</span>
                </h2>
              </Reveal>
              <Reveal delay={170}>
                <p className="mt-5 text-base leading-relaxed text-ink/70 sm:text-lg">
                  SKMNetwork percaya bahwa teknologi kasir dan pembukuan tidak boleh membebani UMKM dengan biaya langganan bulanan yang mencekik.
                </p>
              </Reveal>
              <Reveal delay={250}>
                <div className="mt-8">
                  <a
                    href={WHATSAPP_URL}
                    className="btn-arrow inline-flex items-center gap-2 rounded-2xl bg-ink px-6 py-3.5 font-display text-sm font-extrabold text-paper transition hover:bg-ink-2 shadow-sm"
                  >
                    <span>Konsultasi dengan Admin</span>
                    <IconArrowRight size={15} />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>

          {/* KANAN: 5 Poin Keunggulan */}
          <div className="lg:col-span-7">
            <div className="divide-y-2 divide-ink/8 rounded-3xl border-2 border-ink/10 bg-card overflow-hidden shadow-xs">
              {whyPoints.map((w, i) => (
                <Reveal key={w.no} delay={i * 70}>
                  <div className="group flex items-start gap-4 px-6 py-5 sm:px-7 transition hover:bg-marigold/5">
                    <span className="font-display text-2xl font-extrabold text-ink/20 group-hover:text-marigold-2 transition-colors sm:text-3xl">
                      {w.no}
                    </span>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-ink/10 bg-paper text-ink group-hover:bg-marigold group-hover:text-ink transition-colors">
                      {whyIcons[w.icon]}
                    </span>
                    <div className="flex-1">
                      <h3 className="font-display text-base font-bold text-ink sm:text-lg">
                        {w.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm leading-relaxed text-ink/65">
                        {w.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
