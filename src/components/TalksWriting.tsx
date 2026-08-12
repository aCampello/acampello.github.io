import { ArrowUpRight } from "lucide-react";
import { talks, writing } from "@/lib/content";
import panelPhoto from "@/assets/talk_3.jpg";
import podiumPhoto from "@/assets/talk_4.jpg";
import audiencePhoto from "@/assets/talk_2.jpg";

const bubbles = [
  {
    src: audiencePhoto,
    alt: "A packed room at a Data Idols conference talk",
    size: "h-20 w-20 sm:h-28 sm:w-28 md:h-36 md:w-36 lg:h-40 lg:w-40 xl:h-44 xl:w-44",
    position: "object-[45%_40%]",
    margin: "",
  },
  {
    src: panelPhoto,
    alt: "Antonio Campello speaking on a conference panel",
    size: "h-28 w-28 sm:h-40 sm:w-40 md:h-52 md:w-52 lg:h-56 lg:w-56 xl:h-60 xl:w-60",
    position: "object-center",
    margin: "-ml-6 sm:-ml-10 lg:-ml-12 xl:-ml-14",
  },
  {
    src: podiumPhoto,
    alt: "Antonio Campello giving a keynote from a podium",
    size: "h-20 w-20 sm:h-28 sm:w-28 md:h-36 md:w-36 lg:h-40 lg:w-40 xl:h-44 xl:w-44",
    position: "object-[65%_45%]",
    margin: "-ml-6 sm:-ml-10 lg:-ml-12 xl:-ml-14",
  },
];

export default function TalksWriting() {
  return (
    <section id="talks" className="border-t border-border py-16 md:py-20">
      <div className="container">
        <p className="kicker">Communicating data science</p>
        <h2 className="mt-3 font-heading text-3xl font-semibold md:text-4xl">Talks &amp; writing</h2>

        <div className="mt-8 flex items-center justify-center">
          {bubbles.map((bubble, i) => (
            <img
              key={bubble.alt}
              src={bubble.src}
              alt={bubble.alt}
              className={`${bubble.size} ${bubble.position} ${bubble.margin} rounded-full border-4 border-background object-cover shadow-sm`}
              style={{ zIndex: i === 1 ? 2 : 1 }}
            />
          ))}
        </div>

        <div className="mt-10 grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-5 font-heading text-lg font-semibold">Talks &amp; panels</h3>
            <ul className="flex flex-col gap-4">
              {talks.map((talk) => (
                <li key={talk.title} className="border-b border-border pb-4 last:border-0">
                  <a
                    href={talk.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-start justify-between gap-3"
                  >
                    <span>
                      <span className="block font-medium leading-snug group-hover:text-accent">
                        {talk.title}
                      </span>
                      <span className="mt-0.5 block text-sm text-muted-foreground">{talk.venue}</span>
                    </span>
                    <ArrowUpRight className="mt-1 h-4 w-4 flex-shrink-0 text-muted-foreground transition-colors group-hover:text-accent" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-heading text-lg font-semibold">Writing</h3>
            <ul className="flex flex-col gap-4">
              {writing.map((post) => (
                <li key={post.title} className="border-b border-border pb-4 last:border-0">
                  <a
                    href={post.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-start justify-between gap-3"
                  >
                    <span className="font-medium leading-snug group-hover:text-accent">{post.title}</span>
                    <ArrowUpRight className="mt-1 h-4 w-4 flex-shrink-0 text-muted-foreground transition-colors group-hover:text-accent" />
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="https://medium.com/@antoniocampello"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-1 text-sm font-semibold underline hover:text-accent"
            >
              Read more on Medium
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
