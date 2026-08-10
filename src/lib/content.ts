export const socials = {
  linkedin: "https://www.linkedin.com/in/antonio-campello-ds/",
  github: "https://github.com/acampello/",
  medium: "https://medium.com/@antoniocampello",
  twitter: "https://twitter.com/a_campello_jr",
  email: "campello.data@gmail.com",
};

export const services = [
  {
    title: "ML/AI & NLP Engineering",
    description:
      "Building, fine-tuning and deploying ML and NLP systems in production — from biomedical text-tagging models to anonymisation tooling — across the full MLOps stack, from experiment to deployment.",
    goodFor: "Good for: teams shipping an ML/NLP feature that need a safe pair of hands end-to-end.",
  },
  {
    title: "Fractional & Advisory Data Leadership",
    description:
      "Scoping data science strategy, assessing data maturity, and advising mission-driven organisations on where to invest — drawing on experience leading data science work at Wellcome Trust and Digital Science, and chairing DataKind UK's Scoping & Impact Assessment committee.",
    goodFor: "Good for: non-profits and scale-ups that need senior data science judgement without a full-time hire.",
  },
  {
    title: "Speaking, Training & Workshops",
    description:
      "Keynotes and workshops that make data science and AI legible to broader audiences — delivered at PyData London, the Data Science Festival, and as a linear algebra instructor for working data scientists.",
    goodFor: "Good for: conferences, internal L&D, and teams that want a technical concept taught well.",
  },
];

export type WorkItem = {
  title: string;
  tag: string;
  description: string;
  href: string;
  image?: string;
};

export const talks = [
  {
    title: "Keynote: Data Science for Social Good",
    venue: "PyData London, 2023",
    href: "https://london2023.pydata.org/cfp/talk/USPLMX/",
  },
  {
    title: "Speaker Spotlight",
    venue: "Data Science Festival, 2023",
    href: "https://datasciencefestival.com/2023/03/20/speaker-spotlight-antonio-campello/",
  },
  {
    title: "Panel: Audacious Goals in Philanthropy",
    venue: "Technology Association of Grantmakers — 350+ attendees",
    href: "https://us06web.zoom.us/rec/play/F6IhRMkaYNSZIOUfQYQyQgWhQDRsSNY8wD49K7cB2S0RCJagrlIW297lJ-2Pznt_gk0I-oKDlo3UVgo.pT0PanHzIWEuzzlh?continueMode=true",
  },
  {
    title: "Digishift 52 — Bias in Data and How to Mitigate It",
    venue: "Scottish Council of Voluntary Organisations",
    href: "https://scvo.scot/events/a1v3z00000JZF8WAAX/digishift-52-how-to-avoid-bias-in-data",
  },
  {
    title: "Data Science for Social Good",
    venue: "Data Science Festival, 2022",
    href: "https://www.youtube.com/watch?v=m4-ql6lTbhs",
  },
  {
    title: "Lightning talk: Will GPT-3 replace data scientists?",
    venue: "PyData, 2022",
    href: "https://youtu.be/IEgDpCz4BJI?t=1877",
  },
  {
    title: "Teaching: Linear Algebra for Data Scientists",
    venue: "Data Idols Summer Programme",
    href: "https://events.dataidols.com/speakers/antonio-campello/",
  },
  {
    title: "Panel: Comeback Stronger",
    venue: "Career comebacks & work–life balance after parenthood",
    href: "https://www.youtube.com/watch?v=i8uOFdvS2DY/",
  },
];

export const writing = [
  {
    title: "You'll probably underestimate the duration of your data science project",
    href: "https://antoniocampello.medium.com/youll-probably-underestimate-the-duration-of-your-data-science-project-here-s-why-4da3b8938dcd",
  },
  {
    title: "Open Source Machine Learning Models for Medical Subject Headings",
    href: "https://medium.com/wellcome-data/open-source-machine-learning-models-for-medical-subject-headings-a82f88f18395",
  },
  {
    title: "Data Science at the Wellcome Trust: A Year in Review",
    href: "https://medium.com/wellcome-data-labs/data-science-at-the-wellcome-trust-a-year-in-review-e73ea0360625",
  },
  {
    title: "Navigating UK Tier 2 visa sponsorship for tech jobs (+ searchable sponsor list)",
    href: "https://medium.com/@antoniocampello/looking-for-a-data-science-job-in-the-uk-and-need-tier-2-visa-sponsorship-d7bc986dd155",
  },
];

export const credentials = [
  "PhD, Applied Mathematics",
  "Chartered Management Institute — Level 5, Management & Leadership",
  "Google Cloud Engineer Certification",
  "Fellow, Science to Data Science (S2DS)",
  "AMIMA, Institute of Mathematics & Its Applications",
  "2022 Emerging Leader, Technology Association of Grantmakers",
];

export const publications = [
  {
    title: "Lattices Applied to Coding for Reliable and Secure Communications",
    venue: "Springer, book",
    href: "https://link.springer.com/book/10.1007%2F978-3-319-67882-5",
  },
  {
    title: "Number-theoretic foundations of modern wireless communications",
    venue: "Springer, book chapter",
    href: "https://link.springer.com/chapter/10.1007/978-3-030-61303-7_4",
  },
  {
    title: "Semantic security for the wiretap channel",
    venue: "IEEE / arXiv",
    href: "https://arxiv.org/abs/1903.09954",
  },
];
