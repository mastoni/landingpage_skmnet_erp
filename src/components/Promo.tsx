import { useMemo, useState } from "react";
import { copyText, useCountdown, useInView } from "../hooks";
import { IconGift, IconCheck, IconClock } from "../icons";
import { Reveal, Eyebrow } from "./Ui";

const CODE = "UMKMNAIK40";
const QUOTA = 500;
const CLAIMED = 312;

function CountBox({ v, label }: { v: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-display flex h-14 w-14 items-center justify-center rounded-lg bg-ink text-2xl font-extrabold tabular-nums text-marigold sm:h-16 sm:w-16 sm:text-3xl">
        {String(v).padStart(2, "0")}
      </span>
      <span className="mt-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-ink/60">{label}</span>
    </div>
  );
}

export default function Promo() {
  const target = useMemo(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
  }, []);
  const { days, hours, minutes, seconds } = useCountdown(target);
  const { ref, inView } = useInView<HTMLDivElement>(0.25);
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    const ok = await copyText(CODE);
    if (ok) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    }
  };

  return (
    <section
      id="promo"
      className="relative overflow-hidden border-y-2 border-ink/10 bg-marigold py-20 sm:py-28"
      aria-labelledby="promo-title"
      style={{
        backgroundImage:
          "repeating-linear-gradient(-45deg, rgba(11,31,51,0.045) 0 2px, transparent 2px 18px)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div ref={ref} className="grid items-center gap-14 lg:grid-cols-12">
          {/* kiri: pesan promo */}
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow tone="marigold">Promo bulan ini · kuota terbatas</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h2 id="promo-title" className="font-display mt-5 text-4xl font-extrabold leading-[1.02] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
                UMKM Naik Kelas: <br />
                <span className="relative inline-block">
                  diskon 40%
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 240 12" fill="none" preserveAspectRatio="none" aria-hidden>
                    <path d="M4 8C60 2 180 2 236 7" stroke="var(--color-ink)" strokeWidth="5" strokeLinecap="round" />
                  </svg>
                </span>{" "}
                tahun pertama
              </h2>
            </Reveal>
            <Reveal delay={170}>
              <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-ink/75 sm:text-lg">
                Khusus <strong className="font-extrabold text-ink">500 UMKM pertama</strong> yang daftar bulan ini: semua fitur Paket Juragan,
                harga naik-kelas yang ramah kantong, plus <strong className="font-extrabold text-ink">gratis migrasi data & onboarding</strong>.
              </p>
            </Reveal>

            {/* hitung mundur */}
            <Reveal delay={240}>
              <div className="mt-8">
                <p className="mb-3 inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-ink/65">
                  <IconClock size={15} /> Promo berakhir dalam
                </p>
                <div className="flex items-start gap-2.5 sm:gap-3" role="timer" aria-label="Hitung mundur promo">
                  <CountBox v={days} label="Hari" />
                  <span className="font-display pt-3 text-2xl font-bold text-ink/40">:</span>
                  <CountBox v={hours} label="Jam" />
                  <span className="font-display pt-3 text-2xl font-bold text-ink/40">:</span>
                  <CountBox v={minutes} label="Menit" />
                  <span className="font-display pt-3 text-2xl font-bold text-ink/40">:</span>
                  <CountBox v={seconds} label="Detik" />
                </div>
              </div>
            </Reveal>

            {/* kuota */}
            <Reveal delay={310}>
              <div className="mt-8 max-w-md">
                <div className="flex items-end justify-between">
                  <p className="font-mono text-xs font-bold uppercase tracking-widest text-ink/65">Kuota terisi</p>
                  <p className="font-display text-lg font-extrabold text-ink">
                    {CLAIMED}<span className="text-ink/50">/{QUOTA}</span>
                  </p>
                </div>
                <div className="mt-2 h-3.5 overflow-hidden rounded-full border-2 border-ink/20 bg-ink/10">
                  <div
                    className={`quota-fill h-full rounded-full bg-ink ${inView ? "quota-in" : ""}`}
                    style={{ "--quota-w": `${(CLAIMED / QUOTA) * 100}%` } as React.CSSProperties}
                  />
                </div>
                <p className="mt-2 font-mono text-[11px] font-semibold text-ink/55">Sisa {QUOTA - CLAIMED} slot — diperbarui real-time</p>
              </div>
            </Reveal>
          </div>

          {/* kanan: tiket promo */}
          <div className="lg:col-span-6">
            <Reveal delay={150}>
              <div className="relative mx-auto max-w-md rotate-2 transition-transform duration-500 hover:rotate-0">
                {/* stempel */}
                <span className={`stamp-in absolute -top-5 right-2 z-10 rounded-md border-[3px] border-brick px-3 py-1 font-display text-sm font-extrabold uppercase tracking-[0.25em] text-brick ${inView ? "" : "opacity-0"}`} style={{ transform: "rotate(-8deg)" }}>
                  Terbatas
                </span>

                <div className="perf-left rounded-2xl border-2 border-ink/15 bg-card shadow-[0_35px_70px_-30px_rgba(11,31,51,0.55)]">
                  {/* kepala tiket */}
                  <div className="flex items-center justify-between rounded-t-2xl border-b-2 border-ink/10 bg-ink px-6 py-4">
                    <div className="flex items-center gap-2.5 text-marigold">
                      <IconGift size={20} />
                      <span className="font-mono text-xs font-bold uppercase tracking-[0.2em]">Tiket Promo BizERP</span>
                    </div>
                    <span className="font-mono text-[10px] font-bold text-paper/60">NO. 0313-UMKM</span>
                  </div>

                  <div className="px-6 py-6 sm:px-8">
                    <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ink/50">Potongan tahun pertama</p>
                    <p className="font-display mt-1 text-6xl font-extrabold leading-none tracking-tight text-ink sm:text-7xl">
                      40<span className="text-marigold-2">%</span>
                    </p>

                    <div className="mt-5 space-y-2.5">
                      {[
                        "Paket Juragan: Rp99rb → Rp59rb /bulan",
                        "Gratis migrasi data dari Excel/aplikasi lain",
                        "Gratis onboarding 1-on-1 via video call",
                        "Garansi 30 hari uang kembali",
                      ].map((b) => (
                        <p key={b} className="flex items-start gap-2.5 text-sm font-semibold text-ink/75">
                          <IconCheck size={17} className="mt-0.5 shrink-0 text-leaf" />
                          {b}
                        </p>
                      ))}
                    </div>

                    {/* pemisah robekan */}
                    <div className="relative my-6 border-t-2 border-dashed border-ink/20">
                      <span className="absolute -left-9 -top-3 h-6 w-6 rounded-full bg-marigold" aria-hidden />
                      <span className="absolute -right-9 -top-3 h-6 w-6 rounded-full bg-marigold" aria-hidden />
                    </div>

                    {/* kupon */}
                    <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-ink/50">Kode kupon</p>
                    <button
                      onClick={onCopy}
                      className="group mt-2 flex w-full items-center justify-between gap-3 rounded-xl border-2 border-dashed border-ink/30 bg-paper px-4 py-3.5 transition hover:border-ink/60 hover:bg-marigold/15"
                      aria-label={`Salin kode kupon ${CODE}`}
                    >
                      <span className="font-mono text-lg font-extrabold tracking-[0.15em] text-ink">{CODE}</span>
                      <span className="inline-flex items-center gap-1.5 rounded-lg bg-ink px-3 py-1.5 text-xs font-bold text-paper transition group-hover:bg-ink-2">
                        {copied ? (
                          <>
                            <IconCheck size={14} className="text-marigold" /> Tersalin!
                          </>
                        ) : (
                          "Salin"
                        )}
                      </span>
                    </button>

                    <a
                      href="#daftar"
                      className="btn-arrow mt-4 flex w-full items-center justify-center gap-2.5 rounded-xl bg-brick px-6 py-4 text-base font-extrabold text-paper transition hover:-translate-y-0.5 hover:bg-[#c93c22]"
                    >
                      Klaim Promo Sekarang
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M4 12h15M13.5 5.5 20 12l-6.5 6.5" />
                      </svg>
                    </a>

                    <p className="mt-4 text-center font-mono text-[10px] leading-relaxed text-ink/45">
                      *Berlaku untuk paket tahunan & UMKM baru. Tidak dapat digabung dengan promo lain.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* toast */}
      <div
        className={`fixed bottom-6 right-6 z-[80] transition-all duration-300 ${
          copied ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
        role="status"
      >
        <div className="flex items-center gap-2.5 rounded-xl border-2 border-ink/10 bg-ink px-4.5 py-3 text-paper shadow-xl">
          <IconCheck size={18} className="text-marigold" />
          <p className="text-sm font-bold">
            Kode <span className="font-mono text-marigold">{CODE}</span> tersalin!
          </p>
        </div>
      </div>
    </section>
  );
}
