import { ArrowUpRight, Github, LineChart, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import coral from "@/assets/coral.jpg";
import ktp from "@/assets/ktp.png";

const work = [
  {
    title: "Verifying LLM-Generated Clinical Summaries",
    tag: "LLM evaluation · Healthcare AI",
    description:
      "With Pfizer and academic partners, developed and validated a methodology to check the faithfulness and readability of LLM-generated clinical (oncology) summaries. Published in JAMIA Open, June 2026.",
    href: "https://academic.oup.com/jamiaopen/article/9/3/ooag078/8709993",
    icon: ShieldCheck,
  },
  {
    title: "WellcomeML",
    tag: "NLP · Open source",
    description:
      "Open-source NLP toolkit for analysing biomedical and academic text, built and maintained while leading data science at Wellcome Trust.",
    href: "https://github.com/wellcometrust/WellcomeML",
    icon: Github,
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
    icon: Github,
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
    icon: LineChart,
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="bg-muted/40 py-20 md:py-28">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <span className="section-label">Case studies</span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Selected work</h2>
          </div>
          <div className="flex gap-4 text-sm font-medium">
            <a href="https://github.com/acampello/" className="underline hover:text-accent">
              More on GitHub
            </a>
            <a href="https://medium.com/@antoniocampello" className="underline hover:text-accent">
              More on Medium
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {work.map((item) => (
            <a key={item.title} href={item.href} target="_blank" rel="noreferrer" className="group block">
              <Card className="flex h-full flex-col overflow-hidden transition-shadow hover:shadow-md">
                {item.image ? (
                  <div className="h-40 w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt=""
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="flex h-40 w-full items-center justify-center bg-primary/5">
                    {item.icon && <item.icon className="h-10 w-10 text-primary/40" />}
                  </div>
                )}
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <span className="text-xs font-semibold uppercase tracking-wide text-secondary">
                    {item.tag}
                  </span>
                  <h3 className="flex items-start justify-between gap-2 font-heading text-lg font-semibold leading-snug">
                    {item.title}
                    <ArrowUpRight className="mt-1 h-4 w-4 flex-shrink-0 text-muted-foreground transition-colors group-hover:text-accent" />
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
