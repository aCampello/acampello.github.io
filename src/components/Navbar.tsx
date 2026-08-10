import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Selected Work" },
  { href: "#talks", label: "Talks & Writing" },
  { href: "#about", label: "About" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all",
        scrolled ? "bg-background/90 shadow-sm backdrop-blur-md" : "bg-transparent",
      )}
    >
      <nav className="container flex h-16 items-center justify-between">
        <a href="#top" className="font-heading text-lg font-bold tracking-tight">
          Antonio Campello
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <Button asChild size="sm" variant="accent">
            <a href="#contact">Get in touch</a>
          </Button>
        </div>

        <button
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container flex flex-col gap-4 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button asChild size="sm" variant="accent" onClick={() => setOpen(false)}>
              <a href="#contact">Get in touch</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
