import { useEffect, useMemo, useRef, useState } from "react";
import { useCountUp, useInView, usePrefersReducedMotion, useScramble } from "../hooks";
import { heroStats, txPool, methodColor } from "../data";
import { IconPlay, IconStar, IconStok } from "../icons";

const rupiah = (n: number) => `Rp${n.toLocaleString("id-ID")}`;

/* ---------- Judul dengan line-mask reveal ---------- */
const lines: { word: string; underline?: boolean }[][] = [
  [{ word: "Jualan" }, { word: "laris,", underline: true }],
  [{ word: "stok" }, { word: "aman," }],
  [{ word: "laporan" }, { word: "rapi." }],
];

function MaskTitle() {
  let idx = 0;
  return (
    <h1 className="font-display text-[2.6rem] font-extrabold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-[4.3rem]">
      {lines.map((line, li) => (
        <span key={li} className="block">
          {line.map((w) => {
            const d = idx++ * 110;
            return (
              <span key={w.word} className="mask-line mr-[0.28em]">
                <span style={{ "--w-delay": `${260 + d}ms` } as React.CSSProperties} className="relative">
                  {w.word}
                  {w.underline && (
                    <svg
                      className="stroke-draw absolute -bottom-2 left-0 w-full"
                      viewBox="0 0 220 14"
                      fill="none"
                      aria-hidden
                      preserveAspectRatio="none"
                    >
                      <path d="M4 9c40-6 140-7 212-3" stroke="var(--color-marigold)" strokeWidth="6" strokeLinecap="round" />
                    </svg>
                  )}
                </span>
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}

/* ---------- Dasbor mini yang "hidup" ---------- */
function MiniDash() {
  const reduced = usePrefersReducedMotion();
  const { ref, inView } = useInView<HTMLDivElement>(0.25);
  const [sales, setSales] = useState(1_284_000);
  const [rows, setRows] = useState(() => txPool.slice(0, 4));
  const idRef = useRef(4);
  const bars = useMemo(() => [42, 64, 48, 78, 56, 92, 70], []);
  const days = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];

  useEffect(() => {
    if (!inView) return;
    const id = window.setInterval(() => {
      const next = txPool[Math.floor(Math.random() * txPool.length)];
      setRows((r) => [{ ...next }, ...r].slice(0, 4));
      setSales((s) => s + next.amount);
      idRef.current += 1;
    }, 3400);
    return () => window.clearInterval(id);
  }, [inView]);

  return (
    <div ref={ref} className="relative">
      {/* kartu dasbor */}
      <div className="relative rounded-xl border-2 border-ink/10 bg-card p-5 shadow-[0_30px_60px_-25px_rgba(11,31,51,0.45)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex gap-1.5">
              <i className="h-2.5 w-2.5 rounded-full bg-brick/70" />
              <i className="h-2.5 w-2.5 rounded-full bg-marigold/80" />
              <i className="h-2.5 w-2.5 rounded-full bg-leaf/70" />
            </span>
            <span className="ml-2 font-mono text-[11px] font-semibold uppercase tracking-widest text-ink/50">
              Dasbor · Toko Berkah Jaya
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-leaf/30 bg-leaf/10 px-2.5 py-1 font-mono text-[10px] font-bold text-leaf">
            <span className="relative inline-block h-1.5 w-1.5 rounded-full bg-leaf ping-dot" />
            LIVE
          </span>
        </div>

        <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-ink/45">Penjualan hari ini</p>
            <p className="font-display mt-1 text-3xl font-extrabold tabular-nums text-ink sm:text-4xl">{rupiah(sales)}</p>
            <p className="mt-1 inline-flex items-center gap-1 font-mono text-[11px] font-semibold text-leaf">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M4 17l6-6 4 4 6-8M14 7h6v6" />
              </svg>
              +18,4% vs kemarin
            </p>
          </div>
          {/* grafik batang mingguan */}
          <div className="flex items-end gap-1.5" aria-hidden>
            {bars.map((h, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <div className="flex h-16 w-4 items-end overflow-hidden rounded-sm bg-ink/5">
                  <div
                    className={`bar-grow w-full rounded-sm ${i === 5 ? "bg-marigold" : "bg-ink/70"} ${inView ? "bar-in" : ""}`}
                    style={{ height: `${h}%`, "--bar-delay": `${i * 70}ms` } as React.CSSProperties}
                  />
                </div>
                <span className="font-mono text-[9px] text-ink/40">{days[i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* transaksi berjalan */}
        <div className="mt-5 border-t-2 border-dashed border-ink/10 pt-4">
          <p className="mb-2.5 font-mono text-[11px] font-semibold uppercase tracking-widest text-ink/45">Transaksi terbaru</p>
          <ul className="space-y-2">
            {rows.map((t, i) => (
              <li
                key={`${t.name}-${i}`}
                className={`flex items-center justify-between gap-3 rounded-lg px-2 py-1.5 text-sm ${i === 0 && !reduced ? "flash-row" : ""}`}
              >
                <span className="truncate font-semibold text-ink/80">{t.name}</span>
                <span className={`shrink-0 rounded-full border px-2 py-0.5 font-mono text-[10px] font-bold ${methodColor[t.method]}`}>
                  {t.method}
                </span>
                <span className="shrink-0 font-mono text-sm font-bold tabular-nums text-ink">{rupiah(t.amount)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* struk tercetak */}
      <div className="floaty absolute -right-4 top-16 hidden w-44 rotate-6 md:block lg:-right-10" style={{ "--fl-rot": "6deg" } as React.CSSProperties}>
        <div className="h-60 overflow-hidden rounded-t-md border-2 border-ink/15 bg-card shadow-[0_20px_45px_-20px_rgba(11,31,51,0.5)]">
          <div className="print-anim p-4 font-mono text-[10px] leading-relaxed text-ink/80">
            <p className="text-center font-bold tracking-widest">TOKO BERKAH JAYA</p>
            <p className="text-center text-ink/50">Jl. Melati No. 8, Bandung</p>
            <p className="my-2 border-t-2 border-dashed border-ink/20" />
            <div className="space-y-1">
              <p className="flex justify-between"><span>Kopi Susu ×2</span><span>36.000</span></p>
              <p className="flex justify-between"><span>Croffle Keju</span><span>22.000</span></p>
              <p className="flex justify-between"><span>Air Mineral</span><span>6.000</span></p>
            </div>
            <p className="my-2 border-t-2 border-dashed border-ink/20" />
            <p className="flex justify-between font-bold"><span>TOTAL</span><span>Rp64.000</span></p>
            <p className="flex justify-between"><span>QRIS</span><span>64.000</span></p>
            <p className="mt-3 text-center text-ink/50">terima kasih ♥</p>
            <p className="relative mx-auto mt-2 w-fit border-2 border-leaf px-2 py-0.5 font-bold tracking-[0.3em] text-leaf">
              LUNAS
            </p>
          </div>
        </div>
      </div>

      {/* chip notifikasi */}
      <div className="floaty absolute -left-3 bottom-24 hidden items-center gap-2.5 rounded-xl border-2 border-ink/10 bg-ink px-3.5 py-2.5 text-paper shadow-lg sm:flex lg:-left-8" style={{ "--fl-delay": "1.2s" } as React.CSSProperties}>
        <span className="relative inline-block h-2 w-2 shrink-0 rounded-full bg-brick ping-dot text-brick" />
        <IconStok size={16} className="text-marigold" />
        <p className="text-xs font-semibold leading-tight">
          Stok menipis<br />
          <span className="font-mono text-[10px] font-normal text-paper/60">Kopi Gayo · sisa 4 pcs</span>
        </p>
      </div>
    </div>
  );
}

/* ---------- Deretan statistik count-up ---------- */
function StatBand() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  return (
      <div ref={ref} className="mt-16 border-y-2 border-ink/10 sm:mt-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden bg-ink/10 lg:grid-cols-4">
        {heroStats.map((s, i) => (
          <div key={i} className="bg-paper px-4 py-6 sm:px-6 sm:py-8">            <p className="font-display text-3xl font-extrabold tabular-nums text-ink sm:text-4xl">
              <StatValue target={s.value} start={inView} decimals={s.decimals ?? 0} />
              <span className="text-marigold-2">{s.suffix}</span>
            </p>
            <p className="mt-1 font-mono text-[11px] font-semibold uppercase tracking-widest text-ink/50">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatValue({ target, start, decimals }: { target: number; start: boolean; decimals: number }) {
  const v = useCountUp(target, start, 1800, decimals);
  return <>{v}</>;
}

/* ================= HERO ================= */
export default function Hero() {
  const { ref: eyeRef, inView: eyeIn } = useInView<HTMLDivElement>(0.5);
  const eyebrow = useScramble("SISTEM ERP UNTUK UMKM INDONESIA", eyeIn);

  return (
    <section id="beranda" className="bg-ledger relative overflow-hidden pb-4 pt-32 sm:pt-36" aria-label="Perkenalan BizERP">
      {/* bentuk latar */}
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-marigold/20 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-sky-2/10 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* kiri: narasi */}
          <div className="lg:col-span-6">
            <div ref={eyeRef} className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-ink-2">
              <span className="rounded-md border border-ink/15 bg-card px-3 py-1.5">{eyebrow}</span>
              <span className="blink ml-1 inline-block h-3.5 w-2 translate-y-0.5 bg-marigold" aria-hidden />
            </div>

            <div className="mt-6">
              <MaskTitle />
            </div>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">
              <strong className="font-bold text-ink">BizERP</strong> menyatukan <em className="not-italic font-semibold text-ink">kasir, stok, keuangan, karyawan, hingga multi-cabang</em> dalam
              satu aplikasi yang dibuat khusus untuk cara orang Indonesia berjualan — tanpa ribet, tanpa perlu orang IT.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#daftar"
                className="btn-arrow inline-flex items-center gap-2.5 rounded-xl bg-marigold px-6 py-3.5 text-base font-extrabold text-ink shadow-lift transition hover:-translate-y-0.5 hover:bg-marigold-2"
              >
                Coba Gratis 14 Hari
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M4 12h15M13.5 5.5 20 12l-6.5 6.5" />
                </svg>
              </a>
              <a
                href="#cara-kerja"
                className="inline-flex items-center gap-2.5 rounded-xl border-2 border-ink/15 bg-card px-6 py-3.5 text-base font-bold text-ink transition hover:border-ink/40 hover:bg-ink/5"
              >
                <IconPlay size={20} className="text-brick" />
                Lihat Demo 2 Menit
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <div className="flex -space-x-2.5" aria-hidden>
                {[
                  ["RN", "bg-marigold text-ink"],
                  ["BW", "bg-sky-2 text-paper"],
                  ["SD", "bg-leaf text-paper"],
                  ["AP", "bg-brick text-paper"],
                  ["MK", "bg-ink text-marigold"],
                ].map(([ini, cls]) => (
                  <span key={ini} className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-paper font-mono text-[10px] font-bold ${cls}`}>
                    {ini}
                  </span>
                ))}
              </div>
              <div>
                <span className="flex items-center gap-1.5">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <IconStar key={i} size={13} />
                  ))}
                  <span className="font-mono text-xs font-bold text-ink">4,9/5</span>
                </span>
                <p className="mt-0.5 text-xs font-semibold text-ink/55">
                  Dipercaya <strong className="text-ink">12.400+ UMKM</strong> di 120+ kota
                </p>
              </div>
            </div>
          </div>

          {/* kanan: dasbor hidup */}
          <div className="lg:col-span-6">
            <MiniDash />
          </div>
        </div>
      </div>

      <StatBand />
    </section>
  );
}
