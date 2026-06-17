import Image from "next/image";
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
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
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

        <div className="relative h-96 w-full overflow-hidden rounded-3xl border-4 border-white shadow-2xl">
          <Image
            src="/images/futurePlan.jpeg"
            alt="Future plans for Hunar Vocational Training Centre"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 90vw, 500px"
          />
        </div>
      </div>
    </Section>
  );
}
