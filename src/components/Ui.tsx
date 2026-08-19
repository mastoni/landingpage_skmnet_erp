import type { CSSProperties, ReactNode } from "react";
import { useInView } from "../hooks";

/* Pembungkus reveal-on-scroll */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "reveal-in" : ""} ${className}`}
      style={{ "--rv-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

/* Label kecil gaya mono */
export function Eyebrow({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" | "marigold" }) {
  const cls =
    tone === "dark"
      ? "bg-marigold/15 text-marigold border-marigold/30"
      : tone === "marigold"
        ? "bg-ink/10 text-ink border-ink/25"
        : "bg-ink/5 text-ink-2 border-ink/15";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] ${cls}`}
    >
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </span>
  );
}

/* Kepala seksi konsisten */
export function SectionHead({
  eyebrow,
  title,
  copy,
  dark = false,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  copy?: string;
  dark?: boolean;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <Reveal>
        <Eyebrow tone={dark ? "dark" : "light"}>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={90}>
        <h2
          className={`font-display mt-5 text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl lg:text-[2.75rem] ${
            dark ? "text-paper" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {copy && (
        <Reveal delay={170}>
          <p className={`mt-4 text-base leading-relaxed sm:text-lg ${dark ? "text-paper/70" : "text-ink/70"}`}>{copy}</p>
        </Reveal>
      )}
    </div>
  );
}

/* Bintang rating */
export function Stars({ n = 5, className = "" }: { n?: number; className?: string }) {
  return (
    <span className={`inline-flex gap-0.5 text-marigold ${className}`} aria-label={`${n} dari 5 bintang`}>
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.4l-5.8 3.1 1.1-6.5L2.6 9.4l6.5-.9L12 2.6z" />
        </svg>
      ))}
    </span>
  );
}
