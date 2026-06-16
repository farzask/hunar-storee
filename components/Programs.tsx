import Section from "./Section";
import { programs } from "@/lib/content";

export default function Programs() {
  const current = programs.filter((p) => p.status === "current");
  const planned = programs.filter((p) => p.status === "planned");

  return (
    <Section
      id="programs"
      eyebrow="Training Programs"
      title="Skills we teach"
      intro="Hands-on training that turns into real income — with more courses on the way."
      className="bg-cream-deep/50"
    >
      {/* Currently offered */}
      <div className="grid gap-6 sm:grid-cols-2">
        {current.map((p) => (
          <article
            key={p.slug}
            className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm ring-1 ring-cream-deep"
          >
            <span className="absolute right-5 top-5 rounded-full bg-teal-soft px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-dark">
              Now offered
            </span>
            <h3 className="font-heading text-2xl font-bold text-ink">{p.name}</h3>
            <p className="mt-3 max-w-sm leading-relaxed text-ink-soft">
              {p.description}
            </p>
            <a
              href="#gallery"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-terracotta transition-colors hover:text-terracotta-dark"
            >
              See the work
              <span aria-hidden>→</span>
            </a>
          </article>
        ))}
      </div>

      {/* Planned */}
      <div className="mt-12">
        <h3 className="mb-5 flex items-center gap-3 font-heading text-lg font-bold text-ink">
          <span>Planned courses</span>
          <span className="h-px flex-1 bg-cream-deep" aria-hidden />
        </h3>
        <div className="grid gap-4 sm:grid-cols-3">
          {planned.map((p) => (
            <article
              key={p.slug}
              className="rounded-xl border border-dashed border-ink/20 bg-white/40 p-6"
            >
              <div className="mb-2 flex items-center justify-between">
                <h4 className="font-heading text-lg font-semibold text-ink">
                  {p.name}
                </h4>
                <span className="rounded-full bg-gold/20 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-[#9a6b1e]">
                  Coming soon
                </span>
              </div>
              <p className="text-sm leading-relaxed text-ink-soft">
                {p.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
