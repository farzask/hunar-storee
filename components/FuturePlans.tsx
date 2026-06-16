import Section from "./Section";
import { futurePlans } from "@/lib/content";

export default function FuturePlans() {
  return (
    <Section
      id="future"
      eyebrow="Future Plans"
      title="Where we're headed"
      className="bg-cream-deep/50"
    >
      <ol className="relative space-y-8 border-l-2 border-dashed border-terracotta/40 pl-8">
        {futurePlans.map((plan, i) => (
          <li key={plan} className="relative">
            <span
              className="absolute -left-[2.4rem] flex h-7 w-7 items-center justify-center rounded-full bg-terracotta font-heading text-xs font-bold text-cream"
              aria-hidden
            >
              {i + 1}
            </span>
            <p className="text-lg font-medium text-ink">{plan}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
