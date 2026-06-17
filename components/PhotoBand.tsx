import Image from "next/image";
import { media, site } from "@/lib/content";

/** Full-bleed photo band with the tagline overlaid — a visual breather. */
export default function PhotoBand() {
  return (
    <section className="relative h-72 w-full overflow-hidden sm:h-96">
      <Image
        src={media.band.src}
        alt={media.band.alt}
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/45 to-ink/20" />
      <div className="absolute inset-0 flex items-end">
        <div className="mx-auto w-full max-w-6xl px-5 pb-10 sm:px-8 sm:pb-14">
          <p className="font-heading text-3xl font-extrabold leading-tight text-cream sm:text-5xl">
            {site.tagline}
          </p>
          <p className="mt-3 max-w-xl text-cream/85">
            Real skills, learned hands-on — turning practice into income and
            independence.
          </p>
        </div>
      </div>
    </section>
  );
}
