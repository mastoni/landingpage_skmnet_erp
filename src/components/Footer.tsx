import { SITE, ERP_URL, WHATSAPP_URL } from "../data";
import { LogoMark, Wordmark, IconGlobe, IconArrowUp, IconChat } from "../icons";

const cols: { title: string; links: { label: string; href: string; ext?: boolean }[] }[] = [
  {
    title: "Produk",
    links: [
      { label: "Buku Warung (Kasir UMKM)", href: "#buku-warung" },
      { label: "Fitur & Harga Rp50rb", href: "#fitur" },
      { label: "SKMNet ERP Cloud", href: "#erp" },
      { label: "Masuk Web ERP", href: `${ERP_URL}/login`, ext: true },
    ],
  },
  {
    title: "Ekosistem",
    links: [
      { label: "Solusi Terintegrasi", href: "#ekosistem" },
      { label: "WhatsApp Gateway", href: "#ekosistem" },
      { label: "AutoPost Sosmed", href: "#ekosistem" },
      { label: "Internet & CCTV", href: "#ekosistem" },
    ],
  },
  {
    title: "Bantuan & Lisensi",
    links: [
      { label: "Cara Pembelian", href: "#cara-beli" },
      { label: "FAQ & Tanya Jawab", href: "#faq" },
      { label: "Ketentuan Lisensi", href: "#faq" },
      { label: "Hubungi Admin", href: WHATSAPP_URL, ext: Boolean(WHATSAPP_URL.startsWith("http")) },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-marigold bg-ink text-paper" aria-label="Footer SKMNetwork">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-5">
            <a href="#beranda" className="flex items-center gap-2.5" aria-label="Kembali ke atas">
              <LogoMark size={42} />
              <Wordmark dark />
            </a>
            <p className="mt-4 max-w-sm text-xs sm:text-sm leading-relaxed text-paper/60">
              SKMNetwork menghadirkan ekosistem solusi digital dan teknologi untuk UMKM dan bisnis Indonesia — dari aplikasi kasir mandiri Buku Warung hingga ERP multi-cabang.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href={SITE}
                className="inline-flex items-center gap-2 rounded-xl border border-paper/15 px-3.5 py-2 font-mono text-xs font-bold text-paper/80 transition hover:border-marigold hover:text-marigold"
              >
                <IconGlobe size={14} className="text-marigold" />
                www.skmnetwork.com
              </a>
              <a
                href={WHATSAPP_URL}
                className="inline-flex items-center gap-2 rounded-xl border border-leaf/40 bg-leaf/10 px-3.5 py-2 font-mono text-xs font-bold text-leaf transition hover:bg-leaf/20"
              >
                <IconChat size={14} />
                Hubungi Admin
              </a>
            </div>
          </div>

          {/* Links Cols (7 cols) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:col-span-7">
            {cols.map((c) => (
              <nav key={c.title} aria-label={c.title}>
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-marigold">{c.title}</p>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        {...(l.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="text-xs sm:text-sm font-semibold text-paper/65 transition hover:text-marigold"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t-2 border-dashed border-paper/15 pt-7 sm:flex-row">
          <p className="font-mono text-[11px] font-semibold text-paper/40">
            © {year} SKMNetwork · Solusi Digital & Teknologi UMKM Indonesia
          </p>
          <a
            href="#beranda"
            className="group inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-widest text-paper/40 transition hover:text-marigold"
          >
            Kembali ke atas
            <span className="transition-transform group-hover:-translate-y-1">
              <IconArrowUp size={13} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
