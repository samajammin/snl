# South Natick Law

Next.js App Router migration of [southnaticklaw.com](https://www.southnaticklaw.com), preserving the existing public routes, styling, and assets while removing the site from Ghost hosting.

## Stack

- Next.js 16
- React 19
- Vercel-ready App Router project
- Legacy CSS, images, and jQuery behaviors preserved for parity under `public/assets/`

## Local development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Start the production server locally:

```bash
npm run start
```

## Project structure

- `app/` contains the Next.js routes.
- `components/` contains shared UI like the navbar, CTA, footer contact section, and attorney profile shell.
- `lib/site-data.js` contains the structured site content and uses the existing attorney `.txt` files as the bio source.
- `public/assets/` contains the migrated static assets from the original Ghost theme.

## Notes

- The old Ghost theme files remain in the repo as migration reference material.
- `MIGRATION_PLAN.md` documents the migration strategy.
- `LIVE_SITE_CONTENT_MAP.md` records which public pages supplied the Ghost-managed content during the migration.
