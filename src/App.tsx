import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustGrid from "./components/TrustGrid";
import ValueProps from "./components/ValueProps";
import Process from "./components/Process";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Closer from "./components/Closer";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustGrid />
        <ValueProps />
        <Process />
        <Team />
        <Testimonials />
        <FAQ />
        <Closer />
      </main>
      <Footer />
    </div>
  );
}
