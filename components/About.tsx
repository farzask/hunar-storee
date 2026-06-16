import Section from "./Section";
import { about } from "@/lib/content";

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About Us"
      title="A community-based centre for practical skills"
    >
      <p className="max-w-3xl text-lg leading-relaxed text-ink-soft">
        {about.body}
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-cream-deep bg-white/60 p-8">
          <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-terracotta-soft text-terracotta">
            <TargetIcon />
          </div>
          <h3 className="font-heading text-xl font-bold text-ink">Our Mission</h3>
          <p className="mt-3 leading-relaxed text-ink-soft">{about.mission}</p>
        </div>

        <div className="rounded-2xl border border-cream-deep bg-white/60 p-8">
          <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal-soft text-teal">
            <EyeIcon />
          </div>
          <h3 className="font-heading text-xl font-bold text-ink">Our Vision</h3>
          <p className="mt-3 leading-relaxed text-ink-soft">{about.vision}</p>
        </div>
      </div>
    </Section>
  );
}

function TargetIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
