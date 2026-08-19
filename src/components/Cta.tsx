import { useState } from "react";
import type { FormEvent } from "react";
import { IconCheck, IconWa } from "../icons";
import { Reveal, Eyebrow } from "./Ui";

export default function Cta() {
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState("");
  const [wa, setWa] = useState("");
  const [nama, setNama] = useState("");
  const [usaha, setUsaha] = useState("Kuliner & Minuman");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const digits = wa.replace(/\D/g, "");
    if (nama.trim().length < 2) {
      setErr("Isi nama dulu ya, biar kami tahu harus menyapa siapa.");
      return;
    }
    if (digits.length < 9) {
      setErr("Nomor WhatsApp minimal 9 digit angka.");
      return;
    }
    setErr("");
    setSent(true);
  };

  return (
    <section id="daftar" className="bg-ledger-dark relative overflow-hidden bg-ink py-20 text-paper sm:py-28" aria-labelledby="daftar-title">
      <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-marigold/10 blur-3xl" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          {/* kiri */}
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow tone="dark">Gratis 14 hari · tanpa kartu kredit</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h2 id="daftar-title" className="font-display mt-5 text-4xl font-extrabold leading-[1.03] tracking-tight sm:text-5xl lg:text-[3.3rem]">
                Siap bikin bisnismu <span className="text-marigold">naik kelas</span> bulan ini?
              </h2>
            </Reveal>
            <Reveal delay={170}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/70 sm:text-lg">
                Tinggalkan nomor WhatsApp, tim kami kirimkan akses akun demo lengkap dengan data contoh —
                atau langsung pakai untuk jualan sungguhan. <strong className="font-bold text-paper">Setup-nya cuma 15 menit.</strong>
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="relative mt-8 max-w-md">
                <img
                  src="https://image.qwenlm.ai/generated-images/00b49471-53ee-4e32-b0ec-f43fc53a8585/_result.png"
                  alt="Ilustrasi pemilik UMKM Indonesia menggunakan BizERP di tabletnya"
                  width={1200}
                  height={1000}
                  loading="lazy"
                  className="w-full rounded-2xl border-2 border-paper/15 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.6)]"
                />
                <span className="floaty absolute -right-3 -top-4 rounded-xl border-2 border-ink/10 bg-marigold px-4 py-2 font-display text-sm font-extrabold text-ink shadow-lg">
                  +34% omzet rata-rata
                </span>
              </div>
            </Reveal>
          </div>

          {/* kanan: form */}
          <div className="lg:col-span-6">
            <Reveal delay={180}>
              <div className="relative mx-auto max-w-lg rounded-2xl border-2 border-ink/10 bg-card p-7 text-ink shadow-[0_40px_80px_-30px_rgba(0,0,0,0.65)] sm:p-9">
                <span className="absolute -top-3.5 left-8 rounded-full bg-brick px-3.5 py-1 font-mono text-[10px] font-extrabold uppercase tracking-[0.18em] text-paper">
                  Sisa 188 slot promo
                </span>

                {!sent ? (
                  <form onSubmit={submit} noValidate>
                    <h3 className="font-display text-2xl font-extrabold">Daftar & klaim diskon 40%</h3>
                    <p className="mt-1.5 text-sm font-semibold text-ink/55">Kode <span className="font-mono font-extrabold text-brick">UMKMNAIK40</span> otomatis terpasang di akun Anda.</p>

                    <div className="mt-6 space-y-4">
                      <div>
                        <label htmlFor="nama" className="mb-1.5 block font-mono text-[11px] font-bold uppercase tracking-widest text-ink/50">
                          Nama pemilik
                        </label>
                        <input
                          id="nama"
                          type="text"
                          value={nama}
                          onChange={(e) => setNama(e.target.value)}
                          placeholder="cth. Rina Marlina"
                          className="w-full rounded-xl border-2 border-ink/15 bg-paper px-4 py-3 text-sm font-semibold outline-none transition placeholder:text-ink/30 focus:border-marigold focus:bg-card"
                        />
                      </div>
                      <div>
                        <label htmlFor="wa" className="mb-1.5 block font-mono text-[11px] font-bold uppercase tracking-widest text-ink/50">
                          Nomor WhatsApp
                        </label>
                        <input
                          id="wa"
                          type="tel"
                          value={wa}
                          onChange={(e) => setWa(e.target.value)}
                          placeholder="0812-3456-7890"
                          className="w-full rounded-xl border-2 border-ink/15 bg-paper px-4 py-3 text-sm font-semibold outline-none transition placeholder:text-ink/30 focus:border-marigold focus:bg-card"
                        />
                      </div>
                      <div>
                        <label htmlFor="usaha" className="mb-1.5 block font-mono text-[11px] font-bold uppercase tracking-widest text-ink/50">
                          Jenis usaha
                        </label>
                        <select
                          id="usaha"
                          value={usaha}
                          onChange={(e) => setUsaha(e.target.value)}
                          className="w-full rounded-xl border-2 border-ink/15 bg-paper px-4 py-3 text-sm font-semibold outline-none transition focus:border-marigold"
                        >
                          {["Kuliner & Minuman", "Retail & Toko", "Jasa & Servis", "Fashion", "Catering", "Lainnya"].map((o) => (
                            <option key={o}>{o}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {err && (
                      <p className="mt-4 rounded-lg border-2 border-brick/30 bg-brick/10 px-4 py-2.5 text-sm font-bold text-brick" role="alert">
                        {err}
                      </p>
                    )}

                    <button
                      type="submit"
                      className="btn-arrow mt-6 flex w-full items-center justify-center gap-2.5 rounded-xl bg-ink px-6 py-4 text-base font-extrabold text-paper transition hover:-translate-y-0.5 hover:bg-ink-2"
                    >
                      Buat Akun Gratis
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M4 12h15M13.5 5.5 20 12l-6.5 6.5" />
                      </svg>
                    </button>
                    <p className="mt-3.5 text-center font-mono text-[10px] font-semibold text-ink/40">
                      Tanpa kartu kredit · batalkan kapan saja · data Anda aman (UU PDP 27/2022)
                    </p>
                  </form>
                ) : (
                  <div className="py-4 text-center">
                    <span className="stamp-in mx-auto flex h-20 w-20 items-center justify-center rounded-full border-[3px] border-leaf bg-leaf/10 text-leaf">
                      <IconCheck size={40} />
                    </span>
                    <h3 className="font-display mt-6 text-2xl font-extrabold">
                      Sip, {nama.split(" ")[0]}! Akun sedang dibuat.
                    </h3>
                    <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-ink/65">
                      Link aktivasi & kode promo <span className="font-mono font-bold text-brick">UMKMNAIK40</span> meluncur ke WhatsApp{" "}
                      <strong className="font-mono text-ink">{wa}</strong> dalam ±2 menit untuk usaha {usaha}.
                    </p>
                    <a
                      href={`https://wa.me/6281234567890?text=Halo%2C%20saya%20${encodeURIComponent(nama)}%2C%20baru%20daftar%20BizERP`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2.5 rounded-xl bg-leaf px-6 py-3.5 text-sm font-extrabold text-paper transition hover:-translate-y-0.5"
                    >
                      <IconWa size={18} /> Lanjut chat tim onboarding
                    </a>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
