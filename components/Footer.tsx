import Image from "next/image";
import { navLinks, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/80">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-[1.5fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-16 w-16 place-items-center overflow-hidden rounded-xl bg-white p-1.5">
              <Image
                src={site.logo}
                alt={`${site.name} logo`}
                width={128}
                height={128}
                className="h-full w-full object-contain"
              />
            </span>
            <span className="font-heading text-lg font-bold text-cream">
              {site.name}
            </span>
          </div>
          <p className="mt-3 max-w-sm text-sm text-cream/70">
            Empowering women and youth through practical skills development.
          </p>
          <p className="mt-4 font-heading text-sm font-semibold uppercase tracking-[0.18em] text-gold">
            {site.tagline}
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-cream/50">
            Explore
          </p>
          <ul className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-cream/75 transition-colors hover:text-cream"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-cream/10">
        <p className="mx-auto w-full max-w-6xl px-5 py-5 text-xs text-cream/50 sm:px-8">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
