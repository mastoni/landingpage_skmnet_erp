import { industries } from "../data";

const Diamond = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" aria-hidden className="text-marigold">
    <path d="M5 0l5 5-5 5L0 5z" />
  </svg>
);

export default function Marquee() {
  const list = [...industries, ...industries];
  return (
    <section aria-label="Jenis usaha yang dilayani" className="marquee overflow-hidden border-b-2 border-ink/10 bg-ink py-4">
      <div className="marquee-track flex w-max items-center gap-8 pr-8" style={{ "--mq-dur": "38s" } as React.CSSProperties}>
        {list.map((ind, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap">
            <span className="font-display text-lg font-bold tracking-wide text-paper/90">{ind}</span>
            <Diamond />
          </span>
        ))}
      </div>
    </section>
  );
}
