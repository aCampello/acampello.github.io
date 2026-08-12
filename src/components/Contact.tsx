import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { socials } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border py-16 md:py-20">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="kicker">Get in touch</p>
            <h2 className="mt-3 font-heading text-3xl font-semibold md:text-4xl">Have a project in mind?</h2>
            <p className="mt-4 text-muted-foreground">
              I take on a limited number of contract engagements outside my full-time role —
              ML/AI engineering, fractional advisory, or speaking. Tell me what you're working on
              and I'll get back to you.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href={`mailto:${socials.email}`}
                className="flex items-center gap-3 text-sm font-medium hover:text-accent"
              >
                <Mail className="h-4 w-4" /> {socials.email}
              </a>
              <a
                href={socials.linkedin}
                className="flex items-center gap-3 text-sm font-medium hover:text-accent"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href={socials.github}
                className="flex items-center gap-3 text-sm font-medium hover:text-accent"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href={socials.twitter}
                className="flex items-center gap-3 text-sm font-medium hover:text-accent"
              >
                <Twitter className="h-4 w-4" /> Twitter
              </a>
            </div>
          </div>

          <form
            action="https://formspree.io/f/maylzywq"
            method="POST"
            className="flex flex-col gap-4 border border-border bg-card p-6 shadow-sm md:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="h-11 rounded-md border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="h-11 rounded-md border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <select
              name="engagement_type"
              defaultValue=""
              className="h-11 rounded-md border border-input bg-background px-4 text-sm text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="" disabled>
                Type of engagement
              </option>
              <option value="ML/AI engineering">ML/AI &amp; NLP engineering</option>
              <option value="Advisory / fractional leadership">
                Advisory / fractional leadership
              </option>
              <option value="Speaking / training">Speaking / training</option>
              <option value="Other">Other</option>
            </select>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="h-11 rounded-md border border-input bg-background px-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />

            <textarea
              name="message"
              placeholder="Tell me a bit about the project"
              rows={5}
              required
              className="rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />

            <Button type="submit" variant="accent" size="lg" className="self-start">
              Send message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
