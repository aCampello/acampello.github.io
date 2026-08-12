import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  CircleUser,
  FolderKanban,
  Github,
  Linkedin,
  Mail,
  Menu,
  Mic2,
  Sparkles,
  Twitter,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { socials } from "@/lib/content";
import { cn } from "@/lib/utils";

const links = [
  { href: "#services", label: "Services", icon: Sparkles },
  { href: "#work", label: "Selected Work", icon: FolderKanban },
  { href: "#talks", label: "Talks & Writing", icon: Mic2 },
  { href: "#about", label: "About", icon: CircleUser },
];

type NavbarProps = {
  collapsed: boolean;
  onToggleCollapsed: () => void;
};

export default function Navbar({ collapsed, onToggleCollapsed }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar */}
      <header className="fixed top-0 z-50 w-full bg-primary text-primary-foreground md:hidden">
        <nav className="container flex h-16 items-center justify-between">
          <a href="#top" className="font-heading text-lg font-bold tracking-tight">
            Antonio Campello
          </a>
          <button aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {open && (
          <div className="border-t border-primary-foreground/15">
            <div className="container flex flex-col gap-4 py-4">
              {links.map((link) => (
                <a key={link.href} href={link.href} className="text-sm font-medium" onClick={() => setOpen(false)}>
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

      {/* Desktop sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 hidden flex-col justify-between bg-primary py-8 text-primary-foreground transition-[width] duration-300 md:flex",
          collapsed ? "w-20 px-4" : "w-64 px-8 lg:w-72",
        )}
      >
        <div>
          <div className={cn("flex", collapsed ? "flex-col items-center gap-4" : "flex-col gap-3")}>
            <button
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
              onClick={onToggleCollapsed}
              className={cn(
                "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md border border-primary-foreground/20 text-primary-foreground/70 transition-colors hover:border-primary-foreground/40 hover:text-primary-foreground",
                !collapsed && "self-end",
              )}
            >
              {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
            </button>

            {!collapsed && (
              <a href="#top" className="font-heading text-xl font-bold leading-tight tracking-tight">
                Antonio Campello
              </a>
            )}
          </div>

          {!collapsed && (
            <p className="mt-2 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              Data Science · ML/AI Engineering
            </p>
          )}

          <nav className={cn("mt-12 flex flex-col gap-4", collapsed && "mt-8 items-center gap-5")}>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                title={link.label}
                aria-label={link.label}
                className="flex items-center gap-3 text-sm font-medium text-primary-foreground/75 transition-colors hover:text-primary-foreground"
              >
                {collapsed ? <link.icon className="h-5 w-5" /> : link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className={cn(collapsed && "flex flex-col items-center gap-6")}>
          <Button asChild size={collapsed ? "icon" : "sm"} variant="accent" className={collapsed ? "" : "w-full"}>
            <a href="#contact" aria-label="Get in touch">
              {collapsed ? <Mail className="h-4 w-4" /> : "Get in touch"}
            </a>
          </Button>
          <ul className={cn("flex items-center gap-5", collapsed ? "mt-0 flex-col gap-4" : "mt-6")}>
            <li>
              <a href={socials.linkedin} className="text-primary-foreground/60 transition-colors hover:text-accent" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </li>
            <li>
              <a href={socials.github} className="text-primary-foreground/60 transition-colors hover:text-accent" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </li>
            <li>
              <a href={socials.twitter} className="text-primary-foreground/60 transition-colors hover:text-accent" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </li>
            <li>
              <a href={`mailto:${socials.email}`} className="text-primary-foreground/60 transition-colors hover:text-accent" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
