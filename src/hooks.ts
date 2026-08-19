import { useEffect, useRef, useState } from "react";

/* Apakah user memilih reduced motion */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

/* Satu kali masuk viewport */
export function useInView<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* Angka naik (count-up) dengan easing */
export function useCountUp(target: number, start: boolean, duration = 1700, decimals = 0): string {
  const reduced = usePrefersReducedMotion();
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    if (reduced) {
      setVal(target);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration, reduced]);
  return val.toLocaleString("id-ID", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}

/* Hitung mundur menuju tanggal tertentu */
export function useCountdown(target: Date) {
  const calc = () => Math.max(0, target.getTime() - Date.now());
  const [ms, setMs] = useState(calc);
  useEffect(() => {
    const id = window.setInterval(() => setMs(calc()), 1000);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target.getTime()]);
  const total = Math.floor(ms / 1000);
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  };
}

/* Efek scramble-decode untuk teks pendek */
const GLYPHS = "AKUSMNRT0147#%$";
export function useScramble(text: string, start: boolean, speed = 28): string {
  const reduced = usePrefersReducedMotion();
  const [out, setOut] = useState(reduced ? text : "");
  useEffect(() => {
    if (!start) return;
    if (reduced) {
      setOut(text);
      return;
    }
    let frame = 0;
    const id = window.setInterval(() => {
      frame++;
      const settled = Math.floor(frame / 2);
      let s = "";
      for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        if (ch === " " || ch === "·") s += ch;
        else if (i < settled) s += ch;
        else s += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      }
      setOut(s);
      if (settled >= text.length) window.clearInterval(id);
    }, speed);
    return () => window.clearInterval(id);
  }, [start, text, speed, reduced]);
  return out;
}

/* Salin ke clipboard dengan fallback */
export async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      return true;
    } catch {
      return false;
    }
  }
}

/* Format rupiah singkat: 99000 -> "99rb" */
export const rupiahK = (n: number) => `Rp${Math.round(n / 1000)}rb`;
export const rupiah = (n: number) => `Rp${n.toLocaleString("id-ID")}`;
