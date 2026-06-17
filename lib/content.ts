export const site = {
  name: "Hunar Vocational Training Centre",
  shortName: "Hunar",
  tagline: "Skills for Life, Opportunity for All",
  positioning: "Empowering Women & Youth Through Skills Development",
  logo: "/images/logo.jpeg",
};

/* -------- Feature photos (not tied to a single program) -------- */
export const media = {
  heroFeature: {
    src: "/images/hero/hero.jpeg",
    alt: "Trainees learning embroidery together in a group session at Hunar Vocational Training Centre",
  },
  band: {
    src: "/images/bottom hero.jpeg",
    alt: "Trainees sewing at machines during a class at Hunar Vocational Training Centre",
  },
};

/* -------- Navigation (anchors into the single page) -------- */
export const navLinks: { label: string; href: string }[] = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Gallery", href: "#gallery" },
  { label: "Facilities", href: "#facilities" },
  { label: "Partnership", href: "#partnership" },
  { label: "Contact", href: "#contact" },
];

/* -------- About / Mission / Vision -------- */
export const about = {
  body: "Hunar Vocational Training Centre is a community-based vocational training institute dedicated to empowering women and youth through practical skills development. The centre focuses on building employable skills that help individuals achieve financial independence, start small businesses, and improve their quality of life.",
  mission:
    "To provide accessible, practical, and quality vocational training that enables individuals to become self-reliant and economically empowered.",
  vision:
    "To become a leading community skills development centre that produces confident, skilled, and self-employed individuals.",
};

/* -------- Programs -------- */
export type Program = {
  slug: string;
  name: string;
  description: string;
  status: "current" | "planned";
  /* Images live in public/images/programs/<slug>/  */
  gallery: { src: string; alt: string }[];
};

export const programs: Program[] = [
  {
    slug: "sewing",
    name: "Sewing",
    description:
      "Foundational stitching, garment construction and machine skills — the cornerstone of home-based income and self-employment.",
    status: "current",
    gallery: [
      { src: "/images/programs/sewing/sewing-1.jpeg", alt: "Sewing program at Hunar — trainee work (1)" },
      { src: "/images/programs/sewing/sewing-2.jpeg", alt: "Sewing program at Hunar — trainee work (2)" },
      { src: "/images/programs/sewing/sewing-3.jpeg", alt: "Sewing program at Hunar — trainee work (3)" },
      { src: "/images/programs/sewing/sewing-4.jpeg", alt: "Sewing program at Hunar — trainee work (4)" },
      { src: "/images/programs/sewing/sewing-5.jpeg", alt: "Sewing program at Hunar — trainee work (5)" },
      { src: "/images/programs/sewing/sewing-6.jpeg", alt: "Sewing program at Hunar — trainee work (6)" },
      { src: "/images/programs/sewing/sewing-7.jpeg", alt: "Sewing program at Hunar — trainee work (7)" },
      { src: "/images/programs/sewing/sewing-8.jpeg", alt: "Sewing program at Hunar — trainee work (8)" },
    ],
  },
  {
    slug: "embroidery",
    name: "Embroidery",
    description:
      "Decorative hand and machine embroidery techniques to add value, artistry and marketability to finished pieces.",
    status: "current",
    gallery: [
      { src: "/images/programs/embroidery/embroidary-1.jpeg", alt: "Embroidery program at Hunar — trainee work (1)" },
      { src: "/images/programs/embroidery/embroidary-2.jpeg", alt: "Embroidery program at Hunar — trainee work (2)" },
      { src: "/images/programs/embroidery/embroidary-3.jpeg", alt: "Embroidery program at Hunar — trainee work (3)" },
      { src: "/images/programs/embroidery/embroidary-4.jpeg", alt: "Embroidery program at Hunar — trainee work (4)" },
      { src: "/images/programs/embroidery/embroidary-5.jpeg", alt: "Embroidery program at Hunar — trainee work (5)" },
      { src: "/images/programs/embroidery/embroidary-6.jpeg", alt: "Embroidery program at Hunar — trainee work (6)" },
      { src: "/images/programs/embroidery/embroidary-7.jpeg", alt: "Embroidery program at Hunar — trainee work (7)" },
      { src: "/images/programs/embroidery/embroidary-8.jpeg", alt: "Embroidery program at Hunar — trainee work (8)" },
    ],
  },
  {
    slug: "crochet",
    name: "Crochet",
    description:
      "Hooked-yarn techniques for accessories, garments and home décor.",
    status: "planned",
    gallery: [],
  },
  {
    slug: "knitting",
    name: "Knitting",
    description:
      "Knitwear fundamentals — from basic stitches to wearable finished pieces.",
    status: "planned",
    gallery: [],
  },
  {
    slug: "advanced-tailoring",
    name: "Advanced Tailoring",
    description:
      "Professional dress making and fitting skills for those ready to take their craft to a commercial level.",
    status: "planned",
    gallery: [],
  },
];

/* -------- Facilities -------- */
export const facilities: { title: string; description: string }[] = [
  {
    title: "Dedicated Training Space",
    description: "A purpose-set environment built for focused, hands-on learning.",
  },
  {
    title: "Practical, Hands-On Learning",
    description: "Skills taught by doing — every session is practice-led.",
  },
  {
    title: "Machines & Equipment",
    description: "Sewing machines and the basic training equipment learners need.",
  },
  {
    title: "Accessible Community Location",
    description: "Based within the community it serves, easy to reach for all.",
  },
];

/* -------- Who it's for + Objectives -------- */
export const beneficiaries: string[] = [
  "Women and girls",
  "Youth seeking skill development",
  "Individuals interested in home-based income or self-employment",
];

export const objectives: string[] = [
  "Provide practical vocational skills training",
  "Promote self-employment and entrepreneurship",
  "Support women empowerment and poverty reduction",
  "Develop market-relevant skills for income generation",
];

/* -------- Partnership opportunities -------- */
export const partnership = {
  intro:
    "Hunar Vocational Training Centre welcomes collaboration with NGOs, development organizations, and institutions in the following areas:",
  areas: [
    "Vocational training support programs",
    "Equipment and material support",
    "Trainer development and capacity building",
    "Certification and skill recognition programs",
    "Livelihood and income-generation projects",
    "Community development initiatives",
  ],
};

/* -------- Future plans -------- */
export const futurePlans: string[] = [
  "Expansion of vocational training courses",
  "Introduction of advanced skill-based programs",
  "Increase in student enrollment",
  "Strengthening partnerships with organizations and donors",
  "Creating job and business opportunities for trainees",
];

/* -------- Contact ----------------------------------------------------
 * PLACEHOLDERS — replace with real details. Leave a field as "" to hide
 * that row. For WhatsApp use full international format, digits only
 * (e.g. "923001234567").
 * ------------------------------------------------------------------ */
export const contact = {
  address: "[ Add your centre address ]",
  phone: "[ Add phone number ]",
  email: "[ Add email address ]",
  contactPerson: "[ Add contact person ]",
  whatsapp: "", // e.g. "923001234567" — leave "" to hide the WhatsApp button
};
