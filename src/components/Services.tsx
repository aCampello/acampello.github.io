import { services } from "@/lib/content";

export default function Services() {
  return (
    <section id="services" className="border-t border-border py-16 md:py-20">
      <div className="container">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="font-heading text-3xl font-semibold md:text-4xl">Current and past work</h2>
          <p className="kicker hidden sm:block">01 — 03</p>
        </div>

        <div className="mt-10 divide-y divide-border border-y border-border">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="grid gap-4 py-8 md:grid-cols-[3rem_1fr_1fr] md:gap-8"
            >
              <span className="font-heading text-2xl italic text-muted-foreground/50">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-heading text-2xl font-medium leading-snug">{service.title}</h3>
              <div>
                <p className="text-base leading-relaxed text-foreground/80">{service.description}</p>
                {/* <p className="mt-3 text-sm font-medium text-secondary">{service.goodFor}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
