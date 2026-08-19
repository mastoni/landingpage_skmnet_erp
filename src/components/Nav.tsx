import { useEffect, useState } from "react";
import { LogoMark, Wordmark } from "../icons";

const links = [
  { href: "#fitur", label: "Fitur" },
  { href: "#cara-kerja", label: "Cara Kerja" },
  { href: "#promo", label: "Promo" },
  { href: "#harga", label: "Harga" },
  { href: "#testimoni", label: "Testimoni" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Bar promo */}
      <div className="bg-ink text-paper">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2.5 px-4 py-2 text-center font-mono text-[11px] font-semibold tracking-wide sm:text-xs">
          <span className="relative inline-flex h-2 w-2 shrink-0 rounded-full bg-marigold text-marigold ping-dot" />
          <span className="truncate">
            PROMO UMKM NAIK KELAS — diskon <span className="text-marigold">40%</span> tahun pertama
          </span>
          <a
            href="#promo"
            className="hidden shrink-0 items-center gap-1 rounded-full border border-marigold/50 bg-marigold/10 px-2.5 py-0.5 text-marigold transition hover:bg-marigold hover:text-ink sm:inline-flex"
          >
            Kode: UMKMNAIK40
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M4 12h15M13.5 5.5 20 12l-6.5 6.5" />
            </svg>
          </a>
        </div>
      </div>

      {/* Navigasi utama */}
      <nav
        className={`border-b transition-all duration-300 ${
          scrolled ? "border-ink/10 bg-paper/90 shadow-[0_8px_30px_-18px_rgba(11,31,51,0.4)] backdrop-blur-md" : "border-transparent bg-transparent"
        }`}
        aria-label="Navigasi utama"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#beranda" className="flex items-center gap-2.5" aria-label="BizERP beranda">
            <LogoMark size={38} />
            <Wordmark />
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-link text-sm font-semibold text-ink/80 transition hover:text-ink">
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#daftar"
              className="btn-arrow hidden items-center gap-2 rounded-lg bg-ink px-4.5 py-2.5 text-sm font-bold text-paper transition hover:bg-ink-2 sm:inline-flex"
            >
              Coba Gratis
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M4 12h15M13.5 5.5 20 12l-6.5 6.5" />
              </svg>
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-ink/15 bg-card text-ink lg:hidden"
              aria-label={open ? "Tutup menu" : "Buka menu"}
              aria-expanded={open}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden>
                {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M4 7h16M4 12h16M4 17h10" />}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        <div
          className={`grid overflow-hidden border-ink/10 bg-paper transition-all duration-300 lg:hidden ${
            open ? "grid-rows-[1fr] border-t" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-1 px-4 py-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-semibold text-ink/80 transition hover:bg-ink/5 hover:text-ink"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#daftar"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-lg bg-ink px-3 py-3 text-center text-sm font-bold text-paper"
              >
                Coba Gratis 14 Hari
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
