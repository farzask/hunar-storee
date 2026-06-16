import Section from "./Section";
import { facilities } from "@/lib/content";

export default function Facilities() {
  return (
    <Section id="facilities" eyebrow="Facilities" title="A space built for learning">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {facilities.map((f, i) => (
          <div
            key={f.title}
            className="rounded-2xl border border-cream-deep bg-white/60 p-6"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-terracotta-soft font-heading text-base font-bold text-terracotta-dark">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="font-heading text-lg font-bold text-ink">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
