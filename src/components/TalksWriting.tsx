import { ArrowUpRight } from "lucide-react";
import { talks, writing } from "@/lib/content";
import panelPhoto from "@/assets/talk_3.jpg";
import podiumPhoto from "@/assets/talk_4.jpg";
import audiencePhoto from "@/assets/talk_2.jpg";

const photos = [
  {
    src: audiencePhoto,
    alt: "A packed room at a Data Idols conference talk",
    position: "object-[45%_40%]",
  },
  {
    src: panelPhoto,
    alt: "Antonio Campello speaking on a conference panel",
    position: "object-center",
  },
  {
    src: podiumPhoto,
    alt: "Antonio Campello giving a keynote from a podium",
    position: "object-[65%_45%]",
  },
];

export default function TalksWriting() {
  return (
    <section id="talks" className="border-t border-border py-16 md:py-20">
      <div className="container">
        <p className="kicker">Communicating data science</p>
        <h2 className="mt-3 font-heading text-3xl font-semibold md:text-4xl">Talks &amp; writing</h2>

        <div className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-6">
          {photos.map((photo) => (
            <img
              key={photo.alt}
              src={photo.src}
              alt={photo.alt}
              className={`h-28 w-28 sm:h-36 sm:w-36 md:h-44 md:w-44 lg:h-48 lg:w-48 ${photo.position} border border-border object-cover`}
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
