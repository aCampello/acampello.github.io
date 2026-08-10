import { BrainCircuit, Compass, Mic } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/lib/content";

const icons = [BrainCircuit, Compass, Mic];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-2xl">
          <span className="section-label">What I take on</span>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Ways I can help</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[i];
            return (
              <Card key={service.title} className="flex flex-col">
                <CardHeader>
                  <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col justify-between gap-4">
                  <CardDescription className="text-base leading-relaxed text-foreground/80">
                    {service.description}
                  </CardDescription>
                  <p className="text-sm font-medium text-secondary">{service.goodFor}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
