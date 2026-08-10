import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SelectedWork from "@/components/SelectedWork";
import TalksWriting from "@/components/TalksWriting";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <SelectedWork />
        <TalksWriting />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
