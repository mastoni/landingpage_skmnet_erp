import { useState } from "react";
import type { FormEvent } from "react";
import { LogoMark, Wordmark, IconWa, IconMail, IconPin, IconCheck } from "../icons";

const cols: { title: string; links: [string, string][] }[] = [
  {
    title: "Produk",
    links: [
      ["Kasir & POS", "#fitur"],
      ["Manajemen Inventori", "#fitur"],
      ["Akuntansi & Laporan", "#fitur"],
      ["HR & Absensi", "#fitur"],
      ["Multi-Cabang", "#fitur"],
      ["Harga & Paket", "#harga"],
    ],
  },
  {
    title: "Perusahaan",
    links: [
      ["Tentang BizERP", "#beranda"],
      ["Testimoni UMKM", "#testimoni"],
      ["Promo Berjalan", "#promo"],
      ["Karier", "mailto:karier@biz-erp.id"],
      ["Program Mitra", "mailto:mitra@biz-erp.id"],
    ],
  },
  {
    title: "Sumber Daya",
    links: [
      ["Cara Kerja", "#cara-kerja"],
      ["Pusat Bantuan", "#faq"],
      ["Kalkulator HPP", "#faq"],
      ["Kelas UMKM Gratis", "#daftar"],
      ["Status Layanan", "#beranda"],
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState(false);
  const year = new Date().getFullYear();

  const subscribe = (e: FormEvent) => {
    e.preventDefault();
    if (/.+@.+\..+/.test(email)) setOk(true);
  };

  return (
    <footer className="border-t-4 border-marigold bg-ink text-paper" aria-label="Footer BizERP">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* brand + newsletter */}
          <div className="lg:col-span-5">
            <a href="#beranda" className="flex items-center gap-2.5" aria-label="Kembali ke atas">
              <LogoMark size={40} />
              <Wordmark dark />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/60">
              Aplikasi ERP all-in-one untuk UMKM Indonesia — kasir, stok, keuangan, karyawan, dan multi-cabang dalam satu tempat.
              Dibangun di Bandung, dipakai dari Sabang sampai Merauke.
            </p>

            <div className="mt-7">
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-paper/50">Surat kabar juragan</p>
              <p className="mt-1 text-sm text-paper/70">Tips pembukuan & promo, sebulan 2×. Tanpa spam.</p>
              {ok ? (
                <p className="mt-3 inline-flex items-center gap-2 rounded-xl border-2 border-leaf/40 bg-leaf/10 px-4 py-3 text-sm font-bold text-leaf">
                  <IconCheck size={17} /> Berhasil! Cek inbox Anda untuk konfirmasi.
                </p>
              ) : (
                <form onSubmit={subscribe} className="mt-3 flex max-w-sm gap-2">
                  <label htmlFor="footer-email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="footer-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@usahaanda.id"
                    className="w-full rounded-xl border-2 border-paper/15 bg-ink-2 px-4 py-3 text-sm font-semibold outline-none transition placeholder:text-paper/30 focus:border-marigold"
                  />
                  <button type="submit" className="shrink-0 rounded-xl bg-marigold px-5 py-3 text-sm font-extrabold text-ink transition hover:bg-marigold-2">
                    Langganan
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* kolom link */}
          {cols.map((c) => (
            <nav key={c.title} className="lg:col-span-2" aria-label={c.title}>
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-marigold">{c.title}</p>
              <ul className="mt-4 space-y-2.5">
                {c.links.map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="text-sm font-semibold text-paper/65 transition hover:text-marigold">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* kontak */}
          <div className="lg:col-span-1 lg:pl-2">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-marigold">Kontak</p>
            <ul className="mt-4 space-y-3 text-sm font-semibold text-paper/65">
              <li>
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 transition hover:text-marigold">
                  <IconWa size={16} className="shrink-0 text-leaf" /> 0812-3456-7890
                </a>
              </li>
              <li>
                <a href="mailto:halo@biz-erp.id" className="flex items-center gap-2.5 transition hover:text-marigold">
                  <IconMail size={16} className="shrink-0 text-sky-2" /> halo@biz-erp.id
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <IconPin size={16} className="mt-0.5 shrink-0 text-brick" />
                <span>
                  Jl. Asia Afrika No. 88,
                  <br />
                  Bandung, Jawa Barat
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* bar bawah */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t-2 border-dashed border-paper/15 pt-7 sm:flex-row">
          <p className="font-mono text-[11px] font-semibold text-paper/40">
            © {year} PT Biz Teknologi Nusantara · <a href="#beranda" className="transition hover:text-marigold">Privasi</a> ·{" "}
            <a href="#beranda" className="transition hover:text-marigold">Syarat Layanan</a> · Terdaftar Kominfo
          </p>
          <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-paper/40">
            Dibuat dengan <span className="text-brick">♥</span> untuk UMKM Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
