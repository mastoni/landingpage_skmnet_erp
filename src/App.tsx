import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Problems from "./components/Problems";
import Modules from "./components/Modules";
import HowItWorks from "./components/HowItWorks";
import Promo from "./components/Promo";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import SeoSection from "./components/SeoSection";
import Faq from "./components/Faq";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Problems />
        <Modules />
        <HowItWorks />
        <Promo />
        <Pricing />
        <Testimonials />
        <SeoSection />
        <Faq />
        <Cta />
      </main>
      <Footer />
      {/* grain ambient */}
      <div className="noise-overlay" aria-hidden />
    </div>
  );
}
