import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import BukuWarungSection from "./components/BukuWarungSection";
import Problems from "./components/Problems";
import Erp from "./components/Erp";
import Solutions from "./components/Solutions";
import HowItWorks from "./components/HowItWorks";
import Why from "./components/Why";
import Faq from "./components/Faq";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import VisitorChat from "./components/VisitorChat";

export default function App() {
  return (
    <div className="min-h-screen bg-paper font-body text-ink">
      <a href="#konten-utama" className="skip-link">
        Langsung ke konten utama
      </a>
      <Nav />
      <main id="konten-utama">
        <Hero />
        <Marquee />
        <BukuWarungSection />
        <Problems />
        <Erp />
        <Solutions />
        <HowItWorks />
        <Why />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <VisitorChat />
      <div className="noise-overlay" aria-hidden />
    </div>
  );
}
