import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  /** Tailwind background utility, e.g. "bg-cream-deep". Defaults to transparent. */
  className?: string;
  children: ReactNode;
};

/**
 * Shared wrapper that gives every section a consistent id (for anchor nav),
 * vertical rhythm, max-width container and an optional heading block.
 */
export default function Section({
  id,
  eyebrow,
  title,
  intro,
  className = "",
  children,
}: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 py-12 sm:py-16 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        {(eyebrow || title || intro) && (
          <header className="mb-8 max-w-2xl">
            {eyebrow && (
              <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
                <span className="h-px w-8 bg-terracotta" aria-hidden />
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-4 text-lg leading-relaxed text-ink-soft">{intro}</p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
