# Live Site Content Map

This file captures which pages on the live site provide the content currently missing from the Ghost theme repo.

## Source

Public site crawled on April 18, 2026:

- [Homepage](https://southnaticklaw.com/)
- [About](https://southnaticklaw.com/about/)
- [Areas of Practice](https://southnaticklaw.com/areas-of-practice)
- [Contact](https://southnaticklaw.com/contact/)
- [George Richards](https://southnaticklaw.com/george-richards/)
- [Richard Biller](https://southnaticklaw.com/richard-biller)
- [Caren Schindel](https://southnaticklaw.com/caren-schindel/)
- [Kimberly Winter](https://southnaticklaw.com/kimberly-winter/)

## Route Recovery Status

### Fully recoverable from repo + public site

- `/`
  - Repo already contains the full homepage body markup.
  - Live site confirms final visible copy and route behavior.

- `/about`
  - Repo contains attorney cards and structure.
  - Live site provides the missing Ghost-managed page title and intro paragraph.

- `/areas-of-practice`
  - Repo contains the full practice-area list and page structure.
  - Live site provides the missing Ghost-managed page title and any page intro copy.

- `/contact`
  - Repo contains the full page structure and form markup.
  - Live site confirms visible form copy and behavior.

- `/george-richards`
  - Repo contains structure, contact details, and image.
  - Live site provides the attorney bio body.

- `/richard-biller`
  - Repo contains structure, contact details, and image.
  - Live site provides the attorney bio body.

- `/caren-schindel`
  - Repo contains structure, contact details, and image.
  - Live site provides the attorney bio body.

- `/kimberly-winter`
  - Repo contains structure, contact details, and image.
  - Live site provides the attorney bio body.

### Recoverable from repo only

- `/thanks`
  - Present in repo as `page-thanks.hbs`.
  - Not surfaced in search results, but current implementation is already fully defined locally.

- `404`
  - Present in repo as `error-404.hbs`.
  - No public crawl dependency required.

## Content Gaps Closed By The Public Crawl

These were the main Ghost-managed fields not fully represented in the theme templates:

- About page title and intro/body copy.
- Areas of Practice page title and intro/body copy.
- Attorney-page body content for:
  - George Richards
  - Richard Biller
  - Caren Schindel
  - Kimberly Winter

The public site exposes all of those fields well enough for migration.

## Content Decisions Still Worth Making

- Whether Alex Mulcahy should remain only on `/about` or receive a dedicated profile page in the Next.js version.
- Whether the homepage "Resources" card should continue linking to `/contact`, since that appears to be the current live behavior.
- Whether to preserve the exact current footer/social set, including the obsolete Google+ link, or clean that up during migration.
- Whether to preserve the current contact workflow provider or move submissions to a Vercel-hosted endpoint.

## Recommended Use During Implementation

When building the Next.js site:

1. Use repo templates as the structural source of truth.
2. Use the live public site as the content source of truth for any `{{title}}` or `{{content}}` that was formerly coming from Ghost.
3. Normalize that content into repo-managed data files so the new site no longer depends on Ghost.
