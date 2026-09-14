import { useEffect, useState } from "react";
import { LogoMark, Wordmark, IconArrowRight } from "../icons";
import { navLinks, ERP_URL, WHATSAPP_URL } from "../data";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [prog, setProg] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProg(max > 0 ? Math.min(1, h.scrollTop / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className={`border-b transition-all duration-300 ${
          scrolled
            ? "border-ink/10 bg-paper/95 shadow-[0_8px_30px_-18px_rgba(11,31,51,0.4)] backdrop-blur-md"
            : "border-transparent bg-paper/80 backdrop-blur-sm"
        }`}
        aria-label="Navigasi utama"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#beranda" className="flex items-center gap-2.5" aria-label="SKMNetwork beranda">
            <LogoMark size={38} />
            <Wordmark />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-5 xl:gap-6 lg:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link text-[13.5px] font-bold text-ink/80 transition hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* 1. Masuk ERP Web App */}
            <a
              href={`${ERP_URL}/login`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl border border-ink/15 bg-card px-3 py-2 text-xs font-bold text-ink transition hover:border-ink/40 hover:bg-ink/5"
            >
              <span>Masuk ERP</span>
              <span className="text-[10px] opacity-70">↗</span>
            </a>

            {/* 2. Beli Buku Warung Primary CTA */}
            <a
              href={WHATSAPP_URL}
              className="btn-arrow hidden items-center gap-1.5 rounded-xl bg-marigold px-4 py-2 text-xs font-extrabold text-ink transition hover:bg-marigold-2 shadow-xs sm:inline-flex"
            >
              <span>Beli Buku Warung (Rp50rb)</span>
              <IconArrowRight size={13} />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-ink/15 bg-card text-ink lg:hidden cursor-pointer"
              aria-label={open ? "Tutup menu navigasi" : "Buka menu navigasi"}
              aria-expanded={open}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden>
                {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M4 7h16M4 12h16M4 17h10" />}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`grid overflow-hidden border-ink/10 bg-paper transition-all duration-300 lg:hidden ${
            open ? "grid-rows-[1fr] border-t" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-1 px-4 py-3">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-sm font-bold text-ink/80 transition hover:bg-ink/5 hover:text-ink min-h-[44px] flex items-center"
                >
                  {l.label}
                </a>
              ))}
              <div className="mt-3 flex flex-col gap-2 border-t border-ink/10 pt-3">
                <a
                  href={WHATSAPP_URL}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-marigold px-4 py-3 text-center text-sm font-extrabold text-ink shadow-xs min-h-[44px]"
                >
                  <span>Beli Buku Warung — Rp50.000</span>
                  <IconArrowRight size={15} />
                </a>
                <a
                  href={`${ERP_URL}/login`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl border-2 border-ink/15 bg-card px-3 py-2.5 text-center text-xs font-bold text-ink min-h-[44px]"
                >
                  <span>Masuk ke SKMNet ERP ↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <div className="h-[3px] w-full bg-ink/5" aria-hidden>
          <div className="h-full bg-marigold transition-[width] duration-150 ease-out" style={{ width: `${prog * 100}%` }} />
        </div>
      </nav>
    </header>
  );
}
