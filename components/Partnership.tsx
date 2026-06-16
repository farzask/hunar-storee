import Section from "./Section";
import { partnership } from "@/lib/content";

export default function Partnership() {
  return (
    <Section
      id="partnership"
      eyebrow="Partnership Opportunities"
      title="Let's collaborate"
      intro={partnership.intro}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {partnership.areas.map((area) => (
          <div
            key={area}
            className="flex items-start gap-3 rounded-xl border border-cream-deep bg-white/60 p-5"
          >
            <span
              className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-terracotta"
              aria-hidden
            />
            <span className="font-medium text-ink">{area}</span>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl bg-teal p-8 text-cream sm:p-10">
        <p className="font-heading text-xl font-semibold sm:text-2xl">
          Interested in working together?
        </p>
        <p className="mt-2 max-w-xl text-cream/85">
          We welcome NGOs, donors and institutions to support skills development
          in our community.
        </p>
        <a
          href="#contact"
          className="mt-6 inline-flex rounded-full bg-cream px-7 py-3 text-sm font-semibold text-teal-dark transition-colors hover:bg-white"
        >
          Reach out to us
        </a>
      </div>
    </Section>
  );
}
