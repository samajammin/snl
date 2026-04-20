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

- `app/` — routes (one directory per public URL)
- `components/` — shared UI: Navbar, FooterContact, Cta, AttorneyProfile
- `lib/site-data.js` — all site content: attorney bios, practice areas, page copy
- `public/assets/` — static CSS, JS, images, and fonts

## Environment variables

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | API key from resend.com for contact form delivery |
