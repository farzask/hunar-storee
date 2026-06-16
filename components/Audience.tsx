import Section from "./Section";
import { beneficiaries, objectives } from "@/lib/content";

export default function Audience() {
  return (
    <Section
      id="audience"
      eyebrow="Who It's For"
      title="Built around the people we serve"
      className="bg-cream-deep/50"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-cream-deep">
          <h3 className="font-heading text-xl font-bold text-ink">
            Target beneficiaries
          </h3>
          <ul className="mt-5 space-y-3">
            {beneficiaries.map((b) => (
              <li key={b} className="flex items-start gap-3 text-ink-soft">
                <Check className="text-teal" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-cream-deep">
          <h3 className="font-heading text-xl font-bold text-ink">Our objectives</h3>
          <ul className="mt-5 space-y-3">
            {objectives.map((o) => (
              <li key={o} className="flex items-start gap-3 text-ink-soft">
                <Check className="text-terracotta" />
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function Check({ className = "" }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className={`mt-0.5 shrink-0 ${className}`}
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.15" />
      <path
        d="M7.5 12.5l3 3 6-6.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
