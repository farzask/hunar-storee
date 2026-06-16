# Hunar Vocational Training Centre — Website

A single-page website for Hunar Vocational Training Centre, built with
**Next.js (App Router)**, **TypeScript** and **Tailwind CSS v4**.

> _Skills for Life, Opportunity for All_

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Editing the site

**Almost everything is edited in one file: [`lib/content.ts`](lib/content.ts)** —
the centre's text, programs, gallery images and contact details. You usually
don't need to touch the components.

### Update contact details

Open `lib/content.ts` and edit the `contact` object:

```ts
export const contact = {
  address: "123 Example Road, City",
  phone: "+92 300 1234567",
  email: "hello@example.com",
  contactPerson: "Name Surname",
  whatsapp: "923001234567", // international format, digits only ("" to hide)
};
```

- A field left as `""` or wrapped in `[ ... ]` is treated as a placeholder.
- Real phone/email/WhatsApp values automatically become clickable
  call / mail / WhatsApp buttons.

### Add photos of trainee work

1. Drop image files into the matching program folder under `public/images/programs/`, e.g.
   `public/images/programs/sewing/dress-1.jpg`.
2. Add an entry to that program's `gallery` array in `lib/content.ts`:

   ```ts
   {
     slug: "sewing",
     name: "Sewing",
     // ...
     gallery: [
       { src: "/images/programs/sewing/dress-1.jpg", alt: "Hand-stitched cotton dress" },
     ],
   },
   ```

Empty galleries show a "photos coming soon" message until you add images.

### Promote a planned course to "now offered"

Change that program's `status` from `"planned"` to `"current"` in
`lib/content.ts` — it will then appear in the current-programs grid and get its
own gallery section.

## Project structure

```
app/            layout, global styles, the single page
components/      one component per section + shared Section + Gallery lightbox
lib/content.ts  all editable content (single source of truth)
public/images/  program photos
```
