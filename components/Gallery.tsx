"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Section from "./Section";
import { programs } from "@/lib/content";

type LightboxImage = { src: string; alt: string };

export default function Gallery() {
  // Only programs that are currently offered are shown as gallery groups.
  const groups = programs.filter((p) => p.status === "current");

  const [active, setActive] = useState<LightboxImage | null>(null);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close]);

  return (
    <Section
      id="gallery"
      eyebrow="Our Work"
      title="Made by our trainees"
      intro="Photos from our programs. Add images per program in lib/content.ts."
    >
      <div className="space-y-14">
        {groups.map((group) => (
          <div key={group.slug}>
            <h3 className="mb-5 flex items-center gap-3 font-heading text-xl font-bold text-ink">
              <span>{group.name}</span>
              <span className="h-px flex-1 bg-cream-deep" aria-hidden />
            </h3>

            {group.gallery.length > 0 ? (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {group.gallery.map((img, i) => (
                  <button
                    key={img.src}
                    type="button"
                    onClick={() => setActive(img)}
                    className="group relative aspect-square overflow-hidden rounded-xl ring-1 ring-cream-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
                    aria-label={`View image: ${img.alt}`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      style={{ animationDelay: `${i * 0.05}s` }}
                    />
                  </button>
                ))}
              </div>
            ) : (
              <EmptyState program={group.name} />
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onClick={close}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-cream/15 text-2xl text-cream transition-colors hover:bg-cream/30"
          >
            ×
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[85vh] w-full max-w-4xl"
          >
            <Image
              src={active.src}
              alt={active.alt}
              width={1400}
              height={1000}
              className="mx-auto h-auto max-h-[85vh] w-auto rounded-lg object-contain"
            />
            <p className="mt-3 text-center text-sm text-cream/80">{active.alt}</p>
          </div>
        </div>
      )}
    </Section>
  );
}

function EmptyState({ program }: { program: string }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-cream-deep bg-white/40 px-6 py-14 text-center">
      <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-terracotta-soft text-terracotta-dark">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
          <circle cx="9" cy="10" r="1.5" fill="currentColor" />
          <path d="m4 17 5-4 4 3 3-2 4 3" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      </div>
      <p className="font-heading font-semibold text-ink">
        {program} photos coming soon
      </p>
      <p className="mt-1 max-w-sm text-sm text-ink-soft">
        Add images to{" "}
        <code className="rounded bg-cream-deep px-1.5 py-0.5 text-xs">
          public/images/programs/{program.toLowerCase()}/
        </code>{" "}
        and list them in <code className="rounded bg-cream-deep px-1.5 py-0.5 text-xs">lib/content.ts</code>.
      </p>
    </div>
  );
}
