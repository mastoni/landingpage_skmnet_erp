import { steps, WHATSAPP_URL } from "../data";
import { IconCart, IconMoney, IconChip, IconStore, IconArrowRight } from "../icons";
import { Reveal, SectionHead } from "./Ui";

const stepIcons: Record<string, React.ReactNode> = {
  cart: <IconCart size={24} />,
  money: <IconMoney size={24} />,
  chip: <IconChip size={24} />,
  store: <IconStore size={24} />,
};

export default function HowItWorks() {
  return (
    <section id="cara-beli" className="relative border-b-2 border-ink/10 py-20 sm:py-28" aria-labelledby="cara-beli-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHead
          eyebrow="Cara Pembelian & Aktivasi"
          title={
            <span id="cara-beli-title">
              Mulai Pakai Buku Warung dalam <span className="text-leaf">4 Langkah Mudah.</span>
            </span>
          }
          copy="Proses pemesanan cepat dan transparan melalui Admin resmi SKMNetwork. Tanpa registrasi yang rumit, langsung aktif di HP Anda."
        />

        <div className="relative mt-14">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.no} delay={i * 100}>
                <article className="relative flex h-full flex-col justify-between rounded-2xl border-2 border-ink/10 bg-card p-6 shadow-xs">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-ink bg-paper text-ink shadow-[3px_3px_0_0_var(--color-marigold)]">
                        {stepIcons[s.icon]}
                      </span>
                      <span className="font-display text-4xl font-extrabold text-ink/15">
                        {s.no}
                      </span>
                    </div>
                    <h3 className="font-display mt-6 text-lg font-bold text-ink sm:text-xl">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-ink/65">
                      {s.desc}
                    </p>
                  </div>

                  {i < 3 && (
                    <div className="mt-6 pt-3 border-t border-ink/8 flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-wider text-ink/40">
                      <span>Lanjut Tahap {i + 2}</span>
                      <IconArrowRight size={11} />
                    </div>
                  )}
                </article>
              </Reveal>
            ))}
          </div>

          {/* CTA Box */}
          <Reveal delay={400}>
            <div className="mt-12 rounded-3xl border-3 border-ink bg-marigold/15 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <p className="font-display text-xl sm:text-2xl font-extrabold text-ink">
                  Siap Memulai? Dapatkan Lisensi Buku Warung Hari Ini!
                </p>
                <p className="mt-1 text-sm text-ink/75">
                  Cukup bayar <strong>Rp50.000 sekali</strong>, dapatkan APK installer resmi dan kode lisensi aktif.
                </p>
              </div>
              <a
                href={WHATSAPP_URL}
                className="btn-arrow shrink-0 inline-flex items-center gap-2 rounded-2xl bg-marigold px-6 py-3.5 font-display text-sm font-extrabold text-ink shadow-[3px_3px_0_0_var(--color-ink)] transition-all hover:bg-marigold-2 hover:-translate-y-0.5"
              >
                <span>Pesan Lisensi via WhatsApp</span>
                <IconArrowRight size={16} />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
