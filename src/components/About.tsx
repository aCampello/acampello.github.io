import { CheckCircle2 } from "lucide-react";
import { credentials, publications } from "@/lib/content";
import headshot from "@/assets/headshot.jpg";

export default function About() {
  return (
    <section id="about" className="bg-primary py-16 text-primary-foreground md:py-20">
      <div className="container grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="flex items-center gap-5">
            <div className="relative w-20 flex-shrink-0">
              <img
                src={headshot}
                alt="Antonio Campello"
                className="relative z-10 aspect-square w-full border-2 border-primary-foreground/40 object-cover"
              />
              <div className="absolute -bottom-2 -right-2 h-full w-full border-2 border-accent" />
            </div>
            <div>
              <p className="kicker">About</p>
              <h2 className="mt-1 font-heading text-3xl font-semibold md:text-4xl">Background</h2>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4 text-primary-foreground/85">
            <p>
              I'm a senior data scientist at{" "}
              <a href="https://www.digital-science.com" className="underline hover:text-accent">
                Digital Science
              </a>
              , building digital infrastructure for the research ecosystem. I previously led data
              science work at the{" "}
              <a href="https://wellcome.org" className="underline hover:text-accent">
                Wellcome Trust
              </a>
              , the UK's largest charitable foundation, and was a research associate at{" "}
              <a
                href="https://www.imperial.ac.uk/electrical-engineering"
                className="underline hover:text-accent"
              >
                Imperial College London
              </a>
              .
            </p>
            <p>
              I sit on{" "}
              <a href="https://datakind.org.uk" className="underline hover:text-accent">
                DataKind UK
              </a>
              's Scoping Committee, chairing their monthly Scoping &amp; Impact Assessment meetings,
              and was named a 2022 Emerging Leader by the{" "}
              <a
                href="https://www.tagtech.org/news/579325/2022-Emerging-Leaders-Announced.htm"
                className="underline hover:text-accent"
              >
                Technology Association of Grantmakers
              </a>
              .
            </p>
          </div>

          <p className="mt-10 text-primary-foreground/85">
            In my academic life, I published several books and papers in high-calibre journals,
            like the ones below.
          </p>
          <h3 className="mt-4 mb-4 font-heading text-base font-semibold text-primary-foreground/70">
            Publications
          </h3>
          <ul className="flex flex-col gap-2 text-sm">
            {publications.map((pub) => (
              <li key={pub.title}>
                <a href={pub.href} target="_blank" rel="noreferrer" className="hover:text-accent">
                  {pub.title}
                </a>
                <span className="text-primary-foreground/60"> — {pub.venue}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-heading text-base font-semibold text-primary-foreground/70">
            Credentials
          </h3>
          <ul className="flex flex-col gap-3">
            {credentials.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                <span className="text-primary-foreground/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
