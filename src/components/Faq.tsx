import { useState } from "react";
import { faqs, WHATSAPP_URL } from "../data";
import { IconArrowRight, IconChat } from "../icons";
import { Reveal, SectionHead } from "./Ui";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-b-2 border-ink/10 bg-card/60 py-20 sm:py-28" aria-labelledby="faq-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* KIRI: Section Head & Quick Contact Box */}
          <div className="lg:col-span-5">
            <SectionHead
              eyebrow="Tanya Jawab & Bantuan"
              title={
                <span id="faq-title">
                  Hal yang Sering <br />
                  <span className="text-sky-2">Ditanyakan.</span>
                </span>
              }
              copy="Semua informasi transparan mengenai harga, lisensi, pemakaian offline, dan pencadangan data Buku Warung."
            />
            <Reveal delay={220}>
              <div className="mt-8 rounded-3xl border-2 border-ink/10 bg-paper p-6 shadow-xs">
                <p className="font-display text-lg font-bold text-ink">Ada pertanyaan lain?</p>
                <p className="mt-1.5 text-xs sm:text-sm text-ink/65 leading-relaxed">
                  Tim layanan pelanggan SKMNetwork siap membantu konsultasi fitur dan panduan aktivasi lisensi.
                </p>
                <div className="mt-5">
                  <a
                    href={WHATSAPP_URL}
                    className="btn-arrow flex items-center justify-between rounded-2xl bg-ink px-5 py-3.5 text-xs sm:text-sm font-extrabold text-paper transition hover:-translate-y-0.5 hover:bg-ink-2 shadow-xs"
                  >
                    <span className="flex items-center gap-2">
                      <IconChat size={16} className="text-marigold" /> Tanya Admin via WhatsApp
                    </span>
                    <IconArrowRight size={14} />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* KANAN: Accordion 10 FAQ */}
          <div className="lg:col-span-7">
            <div className="divide-y-2 divide-ink/8 rounded-3xl border-2 border-ink/10 bg-card overflow-hidden shadow-xs">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <Reveal key={f.q} delay={i * 40}>
                    <div className="px-6 sm:px-7">
                      <h3>
                        <button
                          onClick={() => setOpen(isOpen ? null : i)}
                          aria-expanded={isOpen}
                          aria-controls={`faq-panel-${i}`}
                          className="flex w-full items-center justify-between gap-4 py-5 text-left cursor-pointer"
                        >
                          <span className={`font-display text-sm sm:text-base font-bold transition-colors ${isOpen ? "text-marigold-2" : "text-ink"}`}>
                            {f.q}
                          </span>
                          <span
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                              isOpen ? "rotate-45 border-marigold bg-marigold text-ink" : "border-ink/15 text-ink/50"
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
                          <p className="max-w-2xl pb-6 text-xs sm:text-sm leading-relaxed text-ink/75">{f.a}</p>
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
