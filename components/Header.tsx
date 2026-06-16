"use client";

import { useEffect, useState } from "react";
import { navLinks, site } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-cream-deep bg-cream/95 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5" aria-label={site.name}>
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-terracotta font-heading text-lg font-bold text-cream">
            H
          </span>
          <span className="font-heading text-lg font-bold leading-none text-ink">
            {site.shortName}
            <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-teal">
              Vocational Centre
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-ink-soft transition-colors hover:text-terracotta"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded-full bg-teal px-4 py-2 text-sm font-semibold text-cream transition-colors hover:bg-teal-dark"
            >
              Get in touch
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 block h-0.5 w-6 bg-current transition-transform duration-300 ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-0.5 w-6 bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 block h-0.5 w-6 bg-current transition-transform duration-300 ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-cream-deep bg-cream md:hidden">
          <ul className="mx-auto flex w-full max-w-6xl flex-col px-5 py-3 sm:px-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-ink transition-colors hover:text-terracotta"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
