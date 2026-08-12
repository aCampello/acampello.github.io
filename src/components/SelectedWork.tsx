import { ArrowUpRight } from "lucide-react";
import coral from "@/assets/coral.jpg";
import ktp from "@/assets/ktp.png";

const work = [
  {
    title: "Verifying LLM-Generated Clinical Summaries",
    tag: "LLM evaluation · Healthcare AI",
    description:
      "With Pfizer and academic partners, developed and validated a methodology to check the faithfulness and readability of LLM-generated clinical (oncology) summaries. Published in JAMIA Open, June 2026.",
    href: "https://academic.oup.com/jamiaopen/article/9/3/ooag078/8709993",
  },
  {
    title: "WellcomeML",
    tag: "NLP · Open source",
    description:
      "Open-source NLP toolkit for analysing biomedical and academic text, built and maintained while leading data science at Wellcome Trust.",
    href: "https://github.com/wellcometrust/WellcomeML",
  },
  {
    title: "Biomedical document tagging models",
    tag: "NLP",
    description:
      "Open-sourced machine learning models that automatically tag documents with biomedical subject headings (MeSH).",
    href: "https://medium.com/wellcome-data/open-source-machine-learning-models-for-medical-subject-headings-a82f88f18395",
  },
  {
    title: "Scrubadub",
    tag: "NLP · Privacy",
    description:
      "Open-source library to detect and pseudo-anonymise personally identifiable information in free text.",
    href: "https://github.com/LeapBeyond/scrubadub",
  },
  {
    title: "CLEFCoral",
    tag: "Computer vision",
    description:
      "Co-organiser of an annual computer-vision competition for automatic coral reef identification, now in its third-plus edition.",
    href: "https://www.imageclef.org/2021/coral",
    image: coral,
  },
  {
    title: "Best Innovate UK Associate",
    tag: "Computer vision · Leadership",
    description:
      "Led an award-winning Knowledge Transfer Partnership between the University of Essex and London start-up Filament AI on ML-driven computer vision.",
    href: "https://vimeo.com/303229373",
    image: ktp,
  },
  {
    title: "DataKind UK — Data Maturity Report",
    tag: "Advisory",
    description:
      "Co-authored a report assessing the data maturity of charities partnering with DataKind UK, shaping how the network prioritises pro-bono support.",
    href: "https://datakind.org.uk/journey-impact-2020/",
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="border-t border-border bg-muted/30 py-16 md:py-20">
      <div className="container">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h2 className="font-heading text-3xl font-semibold md:text-4xl">Selected work</h2>
          <div className="flex gap-4 text-sm font-medium">
            <a href="https://github.com/acampello/" className="underline hover:text-accent">
              More on GitHub
            </a>
            <a href="https://medium.com/@antoniocampello" className="underline hover:text-accent">
              More on Medium
            </a>
          </div>
        </div>

        <div className="mt-8 grid gap-x-8 md:grid-cols-2">
          {[work.slice(0, 4), work.slice(4)].map((column, colIndex) => (
            <div
              key={colIndex}
              className={
                colIndex === 1 ? "divide-y divide-border md:border-l md:border-border md:pl-8" : "divide-y divide-border"
              }
            >
              {column.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-4 py-6 first:pt-0"
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt=""
                      className="mt-1 h-14 w-14 flex-shrink-0 border border-border object-cover"
                    />
                  )}
                  <div>
                    <p className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-secondary">
                      {item.tag}
                    </p>
                    <h3 className="mt-1 flex items-start justify-between gap-2 font-heading text-lg font-medium leading-snug">
                      {item.title}
                      <ArrowUpRight className="mt-1 h-4 w-4 flex-shrink-0 text-muted-foreground transition-colors group-hover:text-accent" />
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
