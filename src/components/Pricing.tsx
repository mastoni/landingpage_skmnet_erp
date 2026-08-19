import { useState } from "react";
import { plans } from "../data";
import { rupiah } from "../hooks";
import { IconCheck, IconShield, IconArrow } from "../icons";
import { Reveal, SectionHead } from "./Ui";

export default function Pricing() {
  const [cycle, setCycle] = useState<"bulanan" | "tahunan">("tahunan");

  return (
    <section id="harga" className="relative py-20 sm:py-28" aria-labelledby="harga-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHead
            eyebrow="Harga transparan"
            title={<span id="harga-title">Mulai gratis, bayar saat bisnismu <span className="text-marigold-2">naik kelas</span></span>}
            copy="Tanpa biaya setup, tanpa biaya per transaksi, tanpa kontrak terkunci. Ganti paket kapan saja — data selalu ikut."
          />

          {/* toggle siklus */}
          <Reveal delay={150}>
            <div className="inline-flex items-center rounded-xl border-2 border-ink/15 bg-card p-1.5" role="group" aria-label="Pilih siklus tagihan">
              {(["bulanan", "tahunan"] as const).map((c) => (
                <button
                  key={c}
                  onClick={() => setCycle(c)}
                  aria-pressed={cycle === c}
                  className={`relative rounded-lg px-4 py-2.5 text-sm font-bold capitalize transition-all duration-300 ${
                    cycle === c ? "bg-ink text-paper shadow-sm" : "text-ink/55 hover:text-ink"
                  }`}
                >
                  {c}
                  {c === "tahunan" && (
                    <span className={`absolute -right-2 -top-2.5 rounded-full px-1.5 py-0.5 font-mono text-[9px] font-extrabold ${cycle === c ? "bg-marigold text-ink" : "bg-brick text-paper"}`}>
                      −40%
                    </span>
                  )}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {plans.map((p, i) => {
            const isFree = p.monthly === 0;
            const price = cycle === "bulanan" ? p.monthly : p.yearly;
            const hl = p.highlight;
            return (
              <Reveal key={p.name} delay={i * 110} className={hl ? "lg:-my-5" : ""}>
                <article
                  className={`card-lift relative flex h-full flex-col rounded-2xl border-2 p-7 sm:p-8 ${
                    hl ? "border-ink bg-ink text-paper shadow-[0_35px_70px_-25px_rgba(11,31,51,0.55)]" : "border-ink/12 bg-card text-ink"
                  }`}
                >
                  {hl && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-marigold px-4 py-1 font-mono text-[10px] font-extrabold uppercase tracking-[0.18em] text-ink">
                      ★ Paling laris
                    </span>
                  )}

                  <div className="flex items-baseline justify-between">
                    <h3 className="font-display text-2xl font-extrabold">{p.name}</h3>
                    {!isFree && cycle === "tahunan" && (
                      <span className={`rounded-full px-2 py-0.5 font-mono text-[10px] font-bold ${hl ? "bg-marigold/15 text-marigold" : "bg-brick/10 text-brick"}`}>
                        promo aktif
                      </span>
                    )}
                  </div>
                  <p className={`mt-1 text-sm font-semibold ${hl ? "text-paper/60" : "text-ink/55"}`}>{p.tagline}</p>

                  <div className="mt-6">
                    {isFree ? (
                      <p className="font-display text-5xl font-extrabold tracking-tight">
                        Gratis<span className={`text-base font-bold ${hl ? "text-paper/50" : "text-ink/45"}`}> selamanya</span>
                      </p>
                    ) : (
                      <>
                        <div className="flex items-baseline gap-3">
                          <p className="font-display text-5xl font-extrabold tracking-tight tabular-nums">
                            {rupiah(price)}
                            <span className={`text-base font-bold ${hl ? "text-paper/50" : "text-ink/45"}`}>/bln</span>
                          </p>
                        </div>
                        <p className={`mt-1.5 font-mono text-xs font-semibold ${hl ? "text-paper/50" : "text-ink/45"}`}>
                          <s className="text-brick">{rupiah(p.monthly)}/bln</s> · ditagih tahunan{cycle === "bulanan" && " (hemat saat pilih tahunan)"}
                        </p>
                      </>
                    )}
                  </div>

                  <ul className={`mt-7 flex-1 space-y-3 border-t-2 pt-6 ${hl ? "border-paper/15" : "border-ink/8"}`}>
                    {p.features.map((f) => (
                      <li key={f} className={`flex items-start gap-2.5 text-sm font-semibold ${hl ? "text-paper/80" : "text-ink/70"}`}>
                        <IconCheck size={17} className={`mt-0.5 shrink-0 ${hl ? "text-marigold" : "text-leaf"}`} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#daftar"
                    className={`btn-arrow mt-8 flex items-center justify-center gap-2.5 rounded-xl px-6 py-3.5 text-base font-extrabold transition ${
                      hl
                        ? "bg-marigold text-ink hover:-translate-y-0.5 hover:bg-marigold-2"
                        : "border-2 border-ink/20 bg-paper text-ink hover:border-ink hover:bg-ink hover:text-paper"
                    }`}
                  >
                    {p.cta}
                    <IconArrow size={16} />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* jaminan + pembayaran */}
        <Reveal delay={180}>
          <div className="mt-14 flex flex-col items-center gap-6 rounded-2xl border-2 border-dashed border-ink/15 bg-card/60 px-6 py-7 text-center">
            <p className="flex flex-wrap items-center justify-center gap-2.5 text-sm font-bold text-ink/75">
              <IconShield size={22} className="text-leaf" />
              Garansi 30 hari uang kembali — tidak cocok, uang Anda kembali utuh. Tanpa interogasi.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {["QRIS", "VA BCA", "Mandiri", "BRI", "GoPay", "OVO", "DANA", "Kartu Kredit"].map((m) => (
                <span key={m} className="rounded-md border border-ink/15 bg-paper px-3 py-1.5 font-mono text-[11px] font-bold text-ink/60 transition hover:border-ink/40 hover:text-ink">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
