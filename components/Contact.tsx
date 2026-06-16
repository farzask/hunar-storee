import Section from "./Section";
import { contact, site } from "@/lib/content";

/* A value is a placeholder if it's empty or wrapped in square brackets. */
const isReal = (v: string) => v.trim() !== "" && !v.trim().startsWith("[");

export default function Contact() {
  const rows = [
    {
      label: "Address",
      value: contact.address,
      href: undefined,
      icon: <PinIcon />,
    },
    {
      label: "Phone",
      value: contact.phone,
      href: isReal(contact.phone)
        ? `tel:${contact.phone.replace(/[^\d+]/g, "")}`
        : undefined,
      icon: <PhoneIcon />,
    },
    {
      label: "Email",
      value: contact.email,
      href: isReal(contact.email) ? `mailto:${contact.email}` : undefined,
      icon: <MailIcon />,
    },
    {
      label: "Contact Person",
      value: contact.contactPerson,
      href: undefined,
      icon: <UserIcon />,
    },
  ];

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Get in touch with us"
      intro="Whether you'd like to learn, teach, or partner with us — we'd love to hear from you."
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <ul className="space-y-5">
          {rows.map((row) => (
            <li
              key={row.label}
              className="flex items-start gap-4 rounded-2xl border border-cream-deep bg-white/60 p-5"
            >
              <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-terracotta-soft text-terracotta-dark">
                {row.icon}
              </span>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-soft">
                  {row.label}
                </p>
                {row.href ? (
                  <a
                    href={row.href}
                    className="break-words font-medium text-ink transition-colors hover:text-terracotta"
                  >
                    {row.value}
                  </a>
                ) : (
                  <p
                    className={`break-words font-medium ${
                      isReal(row.value) ? "text-ink" : "italic text-ink-soft/70"
                    }`}
                  >
                    {row.value}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>

        {/* Quick-action panel */}
        <div className="flex flex-col justify-center rounded-2xl bg-ink p-8 text-cream sm:p-10">
          <p className="font-heading text-2xl font-bold">{site.name}</p>
          <p className="mt-2 font-heading text-sm font-semibold uppercase tracking-[0.18em] text-gold">
            {site.tagline}
          </p>
          <p className="mt-4 text-cream/80">
            Reach out directly using the options below.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            {isReal(contact.whatsapp) && (
              <a
                href={`https://wa.me/${contact.whatsapp.replace(/[^\d]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                WhatsApp us
              </a>
            )}
            {isReal(contact.phone) && (
              <a
                href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
                className="rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-terracotta-dark"
              >
                Call us
              </a>
            )}
            {isReal(contact.email) && (
              <a
                href={`mailto:${contact.email}`}
                className="rounded-full border border-cream/30 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:border-cream/70"
              >
                Email us
              </a>
            )}
            {!isReal(contact.whatsapp) &&
              !isReal(contact.phone) &&
              !isReal(contact.email) && (
                <p className="text-sm italic text-cream/60">
                  Add phone, email or WhatsApp in{" "}
                  <code className="rounded bg-cream/10 px-1.5 py-0.5">
                    lib/content.ts
                  </code>{" "}
                  to enable quick-contact buttons.
                </p>
              )}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---- icons ---- */
function PinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21s7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L16 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function UserIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="2" />
      <path d="M5 20a7 7 0 0 1 14 0" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
