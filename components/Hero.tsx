"use client";

import Image from "next/image";
import { programs, site } from "@/lib/content";

/* Pull up to 4 real photos from the current programs for the mosaic.
   Until photos are added, decorative fabric-swatch tiles stand in. */
const mosaicPhotos = programs
  .filter((p) => p.status === "current")
  .flatMap((p) => p.gallery)
  .slice(0, 4);

const swatchTiles = [
  { color: "bg-terracotta", label: "Sewing", rotate: "-rotate-3" },
  { color: "bg-teal", label: "Embroidery", rotate: "rotate-2" },
  { color: "bg-gold", label: "Crochet", rotate: "rotate-3" },
  { color: "bg-terracotta-dark", label: "Tailoring", rotate: "-rotate-2" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-cream pt-28 pb-20 sm:pt-32 sm:pb-28"
    >
      {/* soft background wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-terracotta-soft/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-teal-soft/40 blur-3xl"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        {/* ---------------- Left: editorial headline ---------------- */}
        <div className="float-in">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-terracotta-soft bg-white/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
            Community Skills Development Centre
          </p>

          <h1 className="font-heading text-[2.6rem] font-extrabold leading-[1.05] text-ink sm:text-6xl">
            Empowering{" "}
            <span className="relative inline-block">
              women
              {/* running-stitch underline */}
              <svg
                className="absolute -bottom-2 left-0 h-3 w-full"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  className="stitch-line"
                  d="M2 7 Q 50 1, 100 6 T 198 6"
                  stroke="var(--color-terracotta)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            &amp; youth through{" "}
            <span className="text-teal">skills</span>.
          </h1>

          <p className="mt-7 max-w-md text-lg leading-relaxed text-ink-soft">
            {site.name} builds practical, employable skills — helping people earn
            an income, start small businesses, and stand on their own feet.
          </p>

          {/* stitched tagline */}
          <div className="mt-8 flex items-center gap-3">
            <svg className="h-5 w-16 shrink-0" viewBox="0 0 80 20" aria-hidden>
              <path
                className="stitch-line"
                d="M2 10 H 70"
                stroke="var(--color-teal)"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {/* needle */}
              <path
                d="M68 10 l10 -4 -4 4 4 4 z"
                fill="var(--color-teal)"
              />
            </svg>
            <span className="font-heading text-sm font-semibold uppercase tracking-[0.18em] text-teal">
              {site.tagline}
            </span>
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-terracotta px-7 py-3.5 text-sm font-semibold text-cream shadow-sm transition-colors hover:bg-terracotta-dark"
            >
              Get in touch
            </a>
            <a
              href="#programs"
              className="rounded-full border border-ink/15 px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-ink/40"
            >
              Explore programs
            </a>
          </div>
        </div>

        {/* ---------------- Right: hand-arranged mosaic ---------------- */}
        <div className="relative mx-auto h-[26rem] w-full max-w-md sm:h-[30rem]">
          {(mosaicPhotos.length > 0
            ? mosaicPhotos
            : swatchTiles
          ).map((tile, i) => {
            const positions = [
              "left-0 top-4 h-52 w-40 -rotate-3",
              "right-2 top-0 h-44 w-36 rotate-3",
              "left-8 bottom-0 h-44 w-36 rotate-2",
              "right-0 bottom-8 h-52 w-44 -rotate-2",
            ];
            const pos = positions[i % positions.length];
            const isPhoto = "src" in tile;
            return (
              <div
                key={i}
                className={`float-in absolute overflow-hidden rounded-2xl border-4 border-white shadow-xl ${pos}`}
                style={{ animationDelay: `${0.15 * i + 0.2}s` }}
              >
                {isPhoto ? (
                  <Image
                    src={tile.src}
                    alt={tile.alt}
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                ) : (
                  <div
                    className={`flex h-full w-full flex-col items-center justify-center gap-3 ${tile.color}`}
                  >
                    <StitchMark />
                    <span className="font-heading text-sm font-semibold uppercase tracking-widest text-white/90">
                      {tile.label}
                    </span>
                  </div>
                )}
              </div>
            );
          })}

          {/* small floating thread spool accent */}
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 -z-10 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border-[10px] border-dashed border-gold/50"
          />
        </div>
      </div>
    </section>
  );
}

function StitchMark() {
  return (
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" aria-hidden>
      <path
        d="M6 30 Q 16 12, 26 22 T 40 16"
        stroke="white"
        strokeOpacity="0.9"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="7 6"
      />
      <circle cx="6" cy="30" r="3" fill="white" />
      <path d="M38 14 l6 -2 -2 6z" fill="white" />
    </svg>
  );
}
