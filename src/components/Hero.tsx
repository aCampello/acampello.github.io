import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { socials } from "@/lib/content";
import headshot from "@/assets/headshot.jpg";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container grid items-center gap-12 md:grid-cols-[1.2fr_0.8fr]">
        <div className="animate-fade-in-up">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-semibold text-accent-foreground">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Selectively available for contract work
          </span>

          <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Senior Data Scientist &amp;{" "}
            <span className="text-gradient">ML/AI Consultant</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            I'm a senior data scientist at{" "}
            <a href="https://www.digital-science.com" className="underline hover:text-foreground">
              Digital Science
            </a>
            , and take on a limited number of out-of-hours engagements in ML/AI &amp; NLP
            engineering, fractional data leadership, and technical speaking.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" variant="accent">
              <a href="#contact">Enquire about a project</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#work">See selected work</a>
            </Button>
          </div>

          <ul className="mt-10 flex items-center gap-5">
            <li>
              <a
                href={socials.linkedin}
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </li>
            <li>
              <a
                href={socials.github}
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </li>
            <li>
              <a
                href={socials.twitter}
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </li>
            <li>
              <a
                href={`mailto:${socials.email}`}
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </li>
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-fade-in-up md:mx-0">
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-accent/20 to-secondary/20 blur-2xl" />
          <img
            src={headshot}
            alt="Antonio Campello"
            className="aspect-square w-full rounded-3xl border border-border object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
