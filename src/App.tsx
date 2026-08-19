import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Problems from "./components/Problems";
import Solutions from "./components/Solutions";
import Erp from "./components/Erp";
import Ecosystem from "./components/Ecosystem";
import HowItWorks from "./components/HowItWorks";
import Customers from "./components/Customers";
import Internet from "./components/Internet";
import Cctv from "./components/Cctv";
import Why from "./components/Why";
import Development from "./components/Development";
import Faq from "./components/Faq";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-paper font-body text-ink">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Problems />
        <Solutions />
        <Erp />
        <Ecosystem />
        <HowItWorks />
        <Customers />
        <Internet />
        <Cctv />
        <Why />
        <Development />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <div className="noise-overlay" aria-hidden />
    </div>
  );
}
