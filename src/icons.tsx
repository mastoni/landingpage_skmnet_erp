import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement> & { size?: number };
const base = (p: P) => {
  const { size = 24, ...rest } = p;
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    ...rest,
  };
};

export const LogoMark = ({ size = 36, ...rest }: P) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" {...rest} aria-hidden>
    <rect width="40" height="40" rx="9" fill="var(--color-ink)" />
    <path d="M11 9h18v17.5l-3-2.4-3 2.4-3-2.4-3 2.4-3-2.4-3 2.4V9z" fill="var(--color-marigold)" />
    <rect x="15" y="14" width="10" height="2" rx="1" fill="var(--color-ink)" />
    <rect x="15" y="18.5" width="7" height="2" rx="1" fill="var(--color-ink)" />
    <circle cx="31" cy="11" r="4" fill="var(--color-brick)" stroke="var(--color-card)" strokeWidth="1.5" />
  </svg>
);

export const Wordmark = ({ dark = false }: { dark?: boolean }) => (
  <span className="font-display text-[1.35rem] font-bold tracking-tight leading-none">
    <span className={dark ? "text-paper" : "text-ink"}>Biz</span>
    <span className="text-marigold">ERP</span>
  </span>
);

export const IconKasir = (p: P) => (
  <svg {...base(p)} aria-hidden>
    <path d="M5 3.5h14v17l-2.4-1.9-2.3 1.9-2.3-1.9-2.3 1.9-2.3-1.9L5 20.5v-17z" />
    <path d="M8.5 8h7M8.5 11.5h7M8.5 15h4" />
  </svg>
);

export const IconStok = (p: P) => (
  <svg {...base(p)} aria-hidden>
    <path d="M12 3 3.5 7v10L12 21l8.5-4V7L12 3z" />
    <path d="M3.5 7 12 11l8.5-4M12 11v10" />
    <path d="M7.8 5 16 9" />
  </svg>
);

export const IconGrafik = (p: P) => (
  <svg {...base(p)} aria-hidden>
    <path d="M4 4v16h16" />
    <path d="M7.5 15.5 11 11l3 2.5 4.5-6" />
    <circle cx="18.5" cy="7.5" r="1.4" fill="currentColor" stroke="none" />
  </svg>
);

export const IconDompet = (p: P) => (
  <svg {...base(p)} aria-hidden>
    <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 16.5v-9z" />
    <path d="M15 12.5h5v3h-5a1.5 1.5 0 0 1 0-3zM4 8.5h9" />
  </svg>
);

export const IconTim = (p: P) => (
  <svg {...base(p)} aria-hidden>
    <circle cx="9" cy="8.5" r="3" />
    <path d="M3.5 19.5c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5" />
    <circle cx="16.5" cy="9.5" r="2.4" />
    <path d="M15.5 14.6c2.4.2 4.2 1.8 4.9 4.4" />
  </svg>
);

export const IconCabang = (p: P) => (
  <svg {...base(p)} aria-hidden>
    <path d="M12 21s6.5-5.4 6.5-10.4A6.5 6.5 0 0 0 12 4a6.5 6.5 0 0 0-6.5 6.6C5.5 15.6 12 21 12 21z" />
    <circle cx="12" cy="10.5" r="2.3" />
    <path d="M3 21.5h18" strokeDasharray="2.5 2.5" />
  </svg>
);

export const IconHati = (p: P) => (
  <svg {...base(p)} aria-hidden>
    <path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 9 5.6c1.3 0 2.4.7 3 1.7.6-1 1.7-1.7 3-1.7a4.3 4.3 0 0 1 4.5 4.4c0 5.4-7.5 10-7.5 10z" />
    <path d="M9 11.5l2 2 4-4" />
  </svg>
);

export const IconCheck = (p: P) => (
  <svg {...base(p)} aria-hidden>
    <circle cx="12" cy="12" r="9" />
    <path d="m8 12.2 2.6 2.6L16 9.5" />
  </svg>
);

export const IconArrow = (p: P) => (
  <svg {...base(p)} aria-hidden>
    <path d="M4 12h15M13.5 5.5 20 12l-6.5 6.5" />
  </svg>
);

export const IconArrowUp = (p: P) => (
  <svg {...base(p)} aria-hidden>
    <path d="M6.5 17.5 17.5 6.5M8.5 6.5h9v9" />
  </svg>
);

export const IconStar = (p: P) => (
  <svg width={p.size ?? 16} height={p.size ?? 16} viewBox="0 0 24 24" fill="currentColor" {...p} aria-hidden>
    <path d="M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.4l-5.8 3.1 1.1-6.5L2.6 9.4l6.5-.9L12 2.6z" />
  </svg>
);

export const IconPlay = (p: P) => (
  <svg {...base(p)} aria-hidden>
    <circle cx="12" cy="12" r="9" />
    <path d="M10 8.5v7l6-3.5-6-3.5z" fill="currentColor" stroke="none" />
  </svg>
);

export const IconShield = (p: P) => (
  <svg {...base(p)} aria-hidden>
    <path d="M12 3 5 5.8v5.4c0 4.6 3 8 7 9.8 4-1.8 7-5.2 7-9.8V5.8L12 3z" />
    <path d="m9 11.8 2.2 2.2L15.5 9.5" />
  </svg>
);

export const IconPetir = (p: P) => (
  <svg {...base(p)} aria-hidden>
    <path d="M13 3 5 13.5h5.5L11 21l8-10.5h-5.5L13 3z" />
  </svg>
);

export const IconScan = (p: P) => (
  <svg {...base(p)} aria-hidden>
    <path d="M4 7V4h3M17 4h3v3M20 17v3h-3M7 20H4v-3" />
    <path d="M7.5 9v6M10.5 9v6M13 9v6M16.5 9v6" strokeWidth="1.4" />
  </svg>
);

export const IconImport = (p: P) => (
  <svg {...base(p)} aria-hidden>
    <path d="M12 4v9M8.5 9.5 12 13l3.5-3.5" />
    <path d="M4.5 15.5v2.5a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-2.5" />
  </svg>
);

export const IconWa = (p: P) => (
  <svg {...base(p)} aria-hidden>
    <path d="M12 3.8a8.2 8.2 0 0 0-7 12.4L4 20l3.9-1a8.2 8.2 0 1 0 4.1-15.2z" />
    <path d="M9 8.8c0 3.4 2.8 6.2 6.2 6.2l.6-1.7-2-1-.9.9a4.8 4.8 0 0 1-2-2l.9-.9-1-2-1.8.5z" strokeWidth="1.4" />
  </svg>
);

export const IconMail = (p: P) => (
  <svg {...base(p)} aria-hidden>
    <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
    <path d="m4.5 7.5 7.5 6 7.5-6" />
  </svg>
);

export const IconPin = (p: P) => (
  <svg {...base(p)} aria-hidden>
    <path d="M12 21s6-5 6-10a6 6 0 1 0-12 0c0 5 6 10 6 10z" />
    <circle cx="12" cy="11" r="2.2" />
  </svg>
);

export const IconClock = (p: P) => (
  <svg {...base(p)} aria-hidden>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);

export const IconGift = (p: P) => (
  <svg {...base(p)} aria-hidden>
    <path d="M4 11h16v9H4zM3 7.5h18V11H3zM12 7.5V20" />
    <path d="M12 7.5s-4.5.3-5.5-2C5.8 3.8 7.5 2.5 9 3.2c2 .9 3 4.3 3 4.3zm0 0s4.5.3 5.5-2c.7-1.7-1-3-2.5-2.3-2 .9-3 4.3-3 4.3z" />
  </svg>
);

export const IconMinus = (p: P) => (
  <svg {...base(p)} aria-hidden>
    <path d="M5 12h14" />
  </svg>
);

export const IconPlus = (p: P) => (
  <svg {...base(p)} aria-hidden>
    <path d="M12 5v14M5 12h14" />
  </svg>
);
