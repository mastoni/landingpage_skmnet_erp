import { useState } from "react";
import { faqs } from "../data";
import { IconWa, IconMail, IconClock } from "../icons";
import { Reveal, SectionHead } from "./Ui";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="border-t-2 border-ink/10 bg-card/60 py-20 sm:py-28" aria-labelledby="faq-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHead
              eyebrow="Tanya jawab"
              title={<span id="faq-title">Masih ragu? <span className="text-sky-2">Wajar kok.</span></span>}
              copy="Jawaban untuk pertanyaan yang paling sering ditanyakan juragan sebelum pindah ke BizERP."
            />
            <Reveal delay={220}>
              <div className="mt-8 rounded-2xl border-2 border-ink/10 bg-paper p-6">
                <p className="font-display text-lg font-bold text-ink">Butuh jawaban lebih cepat?</p>
                <p className="mt-1.5 text-sm text-ink/60">Tim kami (manusia, bukan bot) siap bantu di jam kerja.</p>
                <div className="mt-5 flex flex-col gap-3">
                  <a
                    href="https://wa.me/6281234567890?text=Halo%20BizERP%2C%20saya%20mau%20tanya%20promo%20UMKM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-arrow flex items-center justify-between rounded-xl bg-leaf px-5 py-3.5 text-sm font-extrabold text-paper transition hover:-translate-y-0.5"
                  >
                    <span className="flex items-center gap-2.5">
                      <IconWa size={18} /> Chat WhatsApp
                    </span>
                    <span className="font-mono text-xs font-semibold text-paper/70">0812-3456-7890</span>
                  </a>
                  <a href="mailto:halo@biz-erp.id" className="flex items-center gap-2.5 rounded-xl border-2 border-ink/15 px-5 py-3.5 text-sm font-bold text-ink transition hover:border-ink/40">
                    <IconMail size={18} className="text-ink/50" /> halo@biz-erp.id
                  </a>
                  <p className="flex items-center gap-2.5 px-1 font-mono text-[11px] font-semibold text-ink/45">
                    <IconClock size={14} /> Senin–Sabtu · 08.00–20.00 WIB
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="divide-y-2 divide-ink/8 rounded-2xl border-2 border-ink/10 bg-card">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <Reveal key={f.q} delay={i * 60}>
                    <div className="px-6 sm:px-7">
                      <h3>
                        <button
                          onClick={() => setOpen(isOpen ? -1 : i)}
                          aria-expanded={isOpen}
                          aria-controls={`faq-panel-${i}`}
                          className="flex w-full items-center justify-between gap-4 py-5 text-left"
                        >
                          <span className={`font-display text-base font-bold transition-colors sm:text-lg ${isOpen ? "text-brick" : "text-ink"}`}>
                            {f.q}
                          </span>
                          <span
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                              isOpen ? "rotate-45 border-brick bg-brick text-paper" : "border-ink/15 text-ink/50"
                            }`}
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden>
                              <path d="M12 5v14M5 12h14" />
                            </svg>
                          </span>
                        </button>
                      </h3>
                      <div id={`faq-panel-${i}`} className={`acc-body ${isOpen ? "acc-open" : ""}`}>
                        <div>
                          <p className="max-w-2xl pb-6 text-sm leading-relaxed text-ink/65 sm:text-[15px]">{f.a}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
