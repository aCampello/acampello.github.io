import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { socials } from "@/lib/content";

const collaborators = [
  "Wellcome Trust",
  "Digital Science",
  "Filament.AI",
  "Imperial College London",
  "DataKind UK",
  "PyData",
];

export default function Hero() {
  return (
    <section id="top" className="pt-24 pb-16 md:pt-20 md:pb-20">
      <div className="container">
        <p className="kicker md:hidden">Data Science · ML/AI Engineering</p>

        <h1 className="mt-4 max-w-3xl font-heading text-4xl font-semibold leading-[1.1] tracking-tight md:mt-0 md:text-6xl">
          Building Data and AI systems for{" "}
          <span className="italic text-accent">mission-driven organisations.</span>
        </h1>

        <div className="mt-10">
          <p className="max-w-xl text-lg text-muted-foreground">
            Senior data scientist at{" "}
            <a href="https://www.digital-science.com" className="text-foreground underline hover:text-accent">
              Digital Science
            </a>
            . I am a hands-on data lead taking on engagements in Machine Learning/AI &amp; NLP
            engineering, data leadership, and technical speaking.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Button asChild size="lg" variant="accent">
              <a href="#contact">Enquire about a project</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#work">See selected work</a>
            </Button>
          </div>

          <ul className="mt-8 flex items-center gap-5 md:hidden">
            <li>
              <a href={socials.linkedin} className="text-muted-foreground transition-colors hover:text-accent" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </li>
            <li>
              <a href={socials.github} className="text-muted-foreground transition-colors hover:text-accent" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </li>
            <li>
              <a href={socials.twitter} className="text-muted-foreground transition-colors hover:text-accent" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </li>
            <li>
              <a href={`mailto:${socials.email}`} className="text-muted-foreground transition-colors hover:text-accent" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-14 border-t border-border pt-6">
          <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground/70">
            Worked with
          </p>
          <ul className="flex flex-wrap gap-x-8 gap-y-2">
            {collaborators.map((name) => (
              <li key={name} className="font-heading text-lg text-primary/70">
                {name}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm italic text-muted-foreground">
            Also acted as a consultant for organisations in big pharma, financial services, and
            logistics. Full references and portfolio available on request.
          </p>
        </div>
      </div>
    </section>
  );
}
