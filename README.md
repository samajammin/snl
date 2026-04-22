# South Natick Law

Website for [southnaticklaw.com](https://www.southnaticklaw.com) — a Next.js App Router site deployed on Vercel.

## Stack

- Next.js 16 (App Router)
- React 19
- Resend for contact form email delivery
- Deployed on Vercel

## Local development

Copy the example env file and add your Resend API key:

```bash
cp .env.example .env.local
```

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

## Project structure

- `app/` — routes (one directory per public URL), global stylesheet (`snl.css`), and the SVG favicon (`icon.svg`)
- `components/` — shared UI: `SiteHeader`, `SiteFooter`, `ContactBand`, `ContactForm`, `AttorneyProfile`, `AopIcon`
- `lib/site-data.js` — all site content: firm info, attorney bios, practice areas, page copy
- `public/assets/img/` — photography (attorneys, office, library)

## Environment variables

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | API key from resend.com for contact form delivery |
