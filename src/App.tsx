import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SelectedWork from "@/components/SelectedWork";
import TalksWriting from "@/components/TalksWriting";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

export default function App() {
  const [collapsed, setCollapsed] = useState(
    () => localStorage.getItem("sidebar-collapsed") === "1",
  );

  useEffect(() => {
    localStorage.setItem("sidebar-collapsed", collapsed ? "1" : "0");
  }, [collapsed]);

  return (
    <div
      className={cn(
        "min-h-screen transition-[padding] duration-300",
        collapsed ? "md:pl-20" : "md:pl-64 lg:pl-72",
      )}
    >
      <Navbar collapsed={collapsed} onToggleCollapsed={() => setCollapsed((v) => !v)} />
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
