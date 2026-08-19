import { modules } from "../data";
import { IconKasir, IconStok, IconGrafik, IconTim, IconHati, IconCabang, IconCheck, IconArrowUp, IconPin } from "../icons";
import { Reveal, SectionHead } from "./Ui";

const iconMap: Record<string, React.ReactNode> = {
  kasir: <IconKasir size={22} />,
  stok: <IconStok size={22} />,
  grafik: <IconGrafik size={22} />,
  tim: <IconTim size={22} />,
  hati: <IconHati size={22} />,
  cabang: <IconCabang size={22} />,
};

/* ----- mini-visual per modul ----- */
function Visual({ type, dark = false }: { type: string; dark?: boolean }) {
  const ink = dark ? "text-paper" : "text-ink";
  const sub = dark ? "text-paper/55" : "text-ink/50";
  const line = dark ? "border-paper/15" : "border-ink/10";

  if (type === "receipt")
    return (
      <div className={`mt-5 rounded-lg border-2 border-dashed p-4 font-mono text-[11px] ${line} ${ink}`}>
        <div className="flex items-center justify-between">
          <span className={sub}>Kopi Susu ×2</span>
          <span className="font-bold">Rp36.000</span>
        </div>
        <div className="mt-1.5 flex items-center justify-between">
          <span className={sub}>Croffle Keju</span>
          <span className="font-bold">Rp22.000</span>
        </div>
        <div className={`my-3 border-t-2 border-dashed ${line}`} />
        <div className="flex items-center justify-between text-sm font-bold">
          <span>TOTAL</span>
          <span className="tabular-nums">Rp58.000</span>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className={`rounded-full border px-2 py-0.5 text-[10px] font-bold ${dark ? "border-marigold/40 text-marigold" : "border-sky-2/30 bg-sky-2/10 text-sky-2"}`}>QRIS ✓</span>
          <span className={`text-[10px] ${sub}`}>struk terkirim via WA</span>
        </div>
      </div>
    );

  if (type === "stock")
    return (
      <div className="mt-5 space-y-2.5">
        {[
          ["Kopi Gayo 1kg", 34, "bg-brick", "sisa 4"],
          ["Gula Aren", 61, "bg-marigold", "sisa 27"],
          ["Cup 12oz", 88, "bg-leaf", "aman"],
        ].map(([n, w, c, s]) => (
          <div key={n as string} className="flex items-center gap-3">
            <span className={`w-24 shrink-0 font-mono text-[10px] font-semibold ${sub}`}>{n}</span>
            <div className={`h-2 flex-1 overflow-hidden rounded-full ${dark ? "bg-paper/10" : "bg-ink/8"}`}>
              <div className={`h-full rounded-full ${c}`} style={{ width: `${w}%` }} />
            </div>
            <span className={`w-12 text-right font-mono text-[10px] font-bold ${s === "sisa 4" ? "text-brick" : sub}`}>{s}</span>
          </div>
        ))}
      </div>
    );

  if (type === "chart")
    return (
      <div className="mt-5">
        <svg viewBox="0 0 220 64" className="w-full" aria-hidden>
          <path d="M0 52 L30 44 L60 47 L90 34 L120 38 L150 22 L180 26 L220 10 V64 H0 Z" fill="var(--color-leaf)" opacity="0.12" />
          <path d="M0 52 L30 44 L60 47 L90 34 L120 38 L150 22 L180 26 L220 10" fill="none" stroke="var(--color-leaf)" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="220" cy="10" r="4" fill="var(--color-leaf)" />
        </svg>
        <div className="mt-2 flex items-center justify-between">
          <span className={`font-mono text-[10px] ${sub}`}>Laba bersih · 6 bulan</span>
          <span className="rounded-full border border-leaf/30 bg-leaf/10 px-2 py-0.5 font-mono text-[10px] font-bold text-leaf">▲ +41%</span>
        </div>
      </div>
    );

  if (type === "hr")
    return (
      <div className={`mt-5 flex items-center justify-between rounded-lg border-2 p-3.5 ${line}`}>
        <div className="flex -space-x-2">
          {["bg-marigold text-ink", "bg-sky-2 text-paper", "bg-leaf text-paper", "bg-ink text-marigold"].map((c, i) => (
            <span key={i} className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-card font-mono text-[9px] font-bold ${c}`}>
              {["DW", "AR", "SN", "+9"][i]}
            </span>
          ))}
        </div>
        <div className="text-right">
          <p className={`font-mono text-[10px] font-bold ${ink}`}>Hadir 12/14</p>
          <p className={`font-mono text-[9px] ${sub}`}>shift pagi · 08.00</p>
        </div>
      </div>
    );

  if (type === "crm")
    return (
      <div className={`mt-5 rounded-lg border-2 p-3.5 ${line}`}>
        <div className="flex items-center justify-between">
          <span className={`font-mono text-[10px] font-bold ${ink}`}>Stamp card — Sari</span>
          <span className="rounded-full bg-marigold px-2 py-0.5 font-mono text-[9px] font-extrabold text-ink">2 lagi = gratis</span>
        </div>
        <div className="mt-2.5 flex gap-1.5">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className={`h-3.5 flex-1 rounded-full ${i < 8 ? "bg-marigold" : dark ? "bg-paper/15" : "bg-ink/10"}`} />
          ))}
        </div>
      </div>
    );

  /* branch */
  return (
    <div className="mt-5 space-y-2">
      {[
        ["Bandung", "42,1 jt", 92],
        ["Jakarta", "38,4 jt", 82],
        ["Surabaya", "29,7 jt", 64],
      ].map(([c, v, w]) => (
        <div key={c as string} className="flex items-center gap-2.5">
          <IconPin size={13} className="shrink-0 text-marigold" />
          <span className="w-16 shrink-0 font-mono text-[10px] font-semibold text-paper/70">{c}</span>
          <div className="h-2 flex-1 overflow-hidden rounded-full bg-paper/10">
            <div className="h-full rounded-full bg-marigold" style={{ width: `${w}%` }} />
          </div>
          <span className="w-14 shrink-0 text-right font-mono text-[10px] font-bold text-paper">{v}</span>
        </div>
      ))}
    </div>
  );
}

export default function Modules() {
  return (
    <section id="fitur" className="bg-ledger relative border-y-2 border-ink/10 bg-card/50 py-20 sm:py-28" aria-labelledby="fitur-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead
            eyebrow="Satu aplikasi, semua beres"
            title={<span id="fitur-title">6 modul ERP yang biasanya cuma dimiliki perusahaan besar</span>}
            copy="Tidak perlu jahit lima aplikasi berbeda. Semua modul BizERP saling terhubung — satu transaksi di kasir otomatis memperbarui stok, jurnal, dan laporan."
          />
          <Reveal delay={200}>
            <a href="#harga" className="btn-arrow hidden items-center gap-2 font-mono text-sm font-bold text-ink-2 transition hover:text-ink lg:inline-flex">
              BANDINGKAN PAKET <IconArrowUp size={15} />
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-12 lg:grid-rows-[repeat(3,auto)]">
          {modules.map((m, i) => (
            <Reveal key={m.id} delay={i * 70} className={m.span}>
              <article
                className={`card-lift group flex h-full flex-col rounded-xl border-2 p-6 sm:p-7 ${
                  m.dark
                    ? "border-ink bg-ink text-paper"
                    : "border-ink/10 bg-card text-ink hover:border-ink/30"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-lg border-2 transition ${
                        m.dark
                          ? "border-marigold/40 bg-marigold/10 text-marigold"
                          : "border-ink/10 bg-paper text-ink group-hover:border-marigold group-hover:bg-marigold/15"
                      }`}
                    >
                      {iconMap[m.icon]}
                    </span>
                    <h3 className="font-display text-lg font-bold sm:text-xl">{m.title}</h3>
                  </div>
                  <IconArrowUp size={18} className={`mt-1 shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 ${m.dark ? "text-marigold" : "text-ink/30 group-hover:text-ink"}`} />
                </div>

                <p className={`mt-3.5 text-sm leading-relaxed ${m.dark ? "text-paper/70" : "text-ink/65"}`}>{m.desc}</p>

                <Visual type={m.visual} dark={m.dark} />

                <ul className={`mt-5 space-y-1.5 border-t-2 pt-4 ${m.dark ? "border-paper/10" : "border-ink/8"}`}>
                  {m.points.map((pt) => (
                    <li key={pt} className={`flex items-center gap-2 text-[13px] font-semibold ${m.dark ? "text-paper/80" : "text-ink/70"}`}>
                      <IconCheck size={15} className={m.dark ? "text-marigold" : "text-leaf"} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <p className="mt-8 text-center font-mono text-xs font-semibold uppercase tracking-widest text-ink/45">
            + 40 fitur lain: purchase order, diskon bertingkat, pajak PPN, export jurnal, & lainnya
          </p>
        </Reveal>
      </div>
    </section>
  );
}
