# South Natick Law Next.js Migration Plan

## Goal

Move the public site off Ghost and redeploy it on Vercel with the same routes, same visual design, and the same user-facing behavior.

The safest way to do that is a parity-first migration:

1. Rebuild the current site in Next.js with the existing DOM structure, CSS, images, and page copy.
2. Replace Ghost dependencies with code-native content and Next.js primitives.
3. Only then do a deeper React refactor to remove the remaining legacy jQuery/bootstrap behavior.

## What This Repo Actually Is

This repository is a Ghost theme, not a full Ghost application.

What is in the repo:

- Handlebars templates for the public pages.
- Static CSS, JS, fonts, and image assets under `assets/`.
- A few plain-text attorney bios in `*.txt`.

What is not in the repo:

- Ghost content storage.
- Ghost admin/config/database.
- A reusable data model for pages.

That means the migration is mostly a theme-to-Next port, plus a small content extraction project.

## Current Site Inventory

### Layout and shared UI

- `default.hbs` defines the global shell: navbar, footer, contact block, CSS/JS includes, fonts, favicon, and analytics.
- `partials/cta.hbs` is the repeated "Schedule a Consultation" CTA.

### Public routes in use

- `/` from `home.hbs`
- `/about` from `page-about.hbs`
- `/areas-of-practice` from `page-areas-of-practice.hbs`
- `/contact` from `page-contact.hbs`
- `/thanks` from `page-thanks.hbs`
- `/george-richards` from `page-george-richards.hbs`
- `/richard-biller` from `page-richard-biller.hbs`
- `/caren-schindel` from `page-caren-schindel.hbs`
- `/kimberly-winter` from `page-kimberly-winter.hbs`
- 404 from `error-404.hbs`

### Templates that appear unused for the public site

- `index.hbs`
- `page.hbs`
- `post.hbs`

These just render "There's nothing here." They suggest the site is not using Ghost posts/blog functionality in any meaningful way.

## Ghost Dependencies To Remove

The theme uses Ghost in a very limited way:

- `{{!< default}}` for layout inheritance.
- `{{asset ...}}` for asset URLs.
- `{{ghost_head}}` and `{{ghost_foot}}` for injected meta/scripts.
- `{{@blog.title}}` and `{{@blog.description}}` for site metadata.
- `{{#post}}`, `{{title}}`, and `{{content}}` on several pages.

Important consequence:

- The attorney page bodies are not authored in the theme templates.
- The About page intro/body is not fully authored in the theme templates.
- The Areas of Practice page heading/intro is partly Ghost-managed.

So a pure file move is not enough. We need a content extraction step before or during the port.

## Current Behavior We Need To Preserve

### Visual behavior

- Fixed top navbar with mobile collapse.
- Hero section with background image and CTA buttons.
- Section-to-section anchor scrolling on the homepage and footer.
- Scroll-triggered reveal animations for `.wp1` through `.wp5`.
- Attorney image hover overlays on the homepage cards.
- Shared footer/contact section on most pages.
- Repeated CTA section.

### Functional behavior

- Contact form submission and redirect to `/thanks`.
- All current public URLs continue to work.
- Existing external links, mailto links, and attorney profile pages remain intact.

### Legacy quirks worth preserving first, then revisiting

- The homepage "Resources" card points to `/contact`.
- Footer contains a Google+ link that is likely obsolete.
- Universal Analytics script is legacy and should be replaced, not copied verbatim.
- Flexslider is initialized, but the homepage slider currently contains a single slide only.

## Recommended Target Architecture

Use a small App Router Next.js site, deployed on Vercel, with static rendering by default.

### Proposed structure

- `app/layout.tsx`
- `app/page.tsx`
- `app/about/page.tsx`
- `app/areas-of-practice/page.tsx`
- `app/contact/page.tsx`
- `app/thanks/page.tsx`
- `app/george-richards/page.tsx`
- `app/richard-biller/page.tsx`
- `app/caren-schindel/page.tsx`
- `app/kimberly-winter/page.tsx`
- `app/not-found.tsx`
- `components/`
- `content/` or `src/data/`
- `public/assets/`

### Content recommendation

For phase 1, do not add a new CMS.

Reason:

- The site is small.
- The content model is simple.
- A CMS migration would add risk before we achieve parity.
- The current Ghost usage is already very light.

Recommended content source for phase 1:

- Store site copy in TypeScript objects or Markdown files committed in the repo.
- Keep a small structured data model for attorneys, contact info, firm metadata, and practice areas.

If non-developers need an editor later, add a CMS after parity is live.

## Recommended Migration Strategy

### Phase 0: Capture the source of truth

Before building, collect all content from Ghost/live production:

- Export Ghost page content if admin access exists.
- If Ghost admin is unavailable, recover content directly from the public live site. The current production routes are crawlable enough to reconstruct page titles, attorney bios, About copy, practice-area listings, and contact-page copy.
- Capture titles, meta descriptions, route slugs, and page bodies.
- Save the exact copy for About, Areas of Practice, and each attorney page.
- Confirm whether `/thanks` and 404 copy should remain unchanged.
- Confirm whether Alex Mulcahy should remain on About only or get a dedicated page.

Without this step, we can rebuild the UI but still miss Ghost-managed page bodies.

Important update:

- The current live site already exposes the missing Ghost-managed content publicly, so this project is no longer blocked on CMS export access.
- The repo now has enough local template structure plus enough live-site content to do a full parity rebuild in Next.js.

### Phase 1: Parity scaffold in Next.js

- Create a fresh Next.js App Router project.
- Move `assets/` into `public/assets/` with the same internal folder layout.
- Import the existing CSS globally first instead of restyling immediately.
- Recreate the global shell from `default.hbs` in `app/layout.tsx`.
- Rebuild each route as a React page while keeping the existing class names and markup structure close to the original theme.

This gives us the best chance of preserving the visual result on the first pass.

### Phase 2: Replace Ghost data flow

- Replace `{{@blog.title}}` and `{{@blog.description}}` with Next metadata.
- Replace `{{asset ...}}` with `/assets/...` paths or `next/image` where safe.
- Replace `{{#post}}`, `{{title}}`, and `{{content}}` with repo-managed content objects/components.
- Replace the shared CTA partial with a reusable React component.

### Phase 3: Replace legacy JS behavior

Current client behavior comes from jQuery + Bootstrap 3 + Waypoints + Flexslider + Modernizr.

Recommended replacement path:

- Mobile nav collapse: React state.
- Smooth scrolling: CSS `scroll-behavior` plus small client enhancement if needed.
- Scroll reveal animations: Intersection Observer.
- Attorney overlays: CSS hover/focus states.
- Flexslider: remove entirely unless a true multi-slide carousel is still wanted.

Important note:

- The fastest parity path is to temporarily load some legacy JS.
- The better long-term refactor is to replace it with small React/client utilities after the site matches production.

### Phase 4: Contact form decision

There are two viable paths:

1. Keep the current external form flow during parity if the existing endpoint is still valid.
2. Replace it with a Next route handler on Vercel and send mail through an email provider.

Recommendation:

- For fastest launch, keep the current submission behavior if it still works.
- For a cleaner long-term stack, move to a Vercel-hosted route handler after parity.

Either way, preserve the `/thanks` success page and redirect behavior.

### Phase 5: Analytics and metadata

- Replace legacy Universal Analytics with GA4 or Vercel Analytics.
- Recreate title/description/canonical metadata in Next.
- Keep favicon and social links.
- Add redirect rules if trailing-slash behavior changes.

### Phase 6: QA for parity

Acceptance checks:

- Every current public route loads in Next.
- Mobile nav behaves correctly.
- Contact form still succeeds and lands on `/thanks`.
- Home hero, attorney cards, About page, and Areas of Practice match visually.
- Footer/contact section matches production.
- Images, fonts, and icons all resolve correctly.
- 404 page works.
- Lighthouse/performance is at least no worse than the current site.

## File-To-Route Mapping

- `default.hbs` -> `app/layout.tsx`
- `partials/cta.hbs` -> `components/cta.tsx`
- `home.hbs` -> `app/page.tsx`
- `page-about.hbs` -> `app/about/page.tsx`
- `page-areas-of-practice.hbs` -> `app/areas-of-practice/page.tsx`
- `page-contact.hbs` -> `app/contact/page.tsx`
- `page-thanks.hbs` -> `app/thanks/page.tsx`
- `page-george-richards.hbs` -> `app/george-richards/page.tsx`
- `page-richard-biller.hbs` -> `app/richard-biller/page.tsx`
- `page-caren-schindel.hbs` -> `app/caren-schindel/page.tsx`
- `page-kimberly-winter.hbs` -> `app/kimberly-winter/page.tsx`
- `error-404.hbs` -> `app/not-found.tsx`
- `assets/` -> `public/assets/`

## Biggest Risks

### 1. Missing content not stored in the repo

The theme contains markup, but Ghost still owns some of the copy. We should expect to extract missing content before implementation.

### 2. Legacy frontend behavior

Bootstrap 3, jQuery 1.11, Waypoints, and Flexslider can be made to work in Next, but they are not the ideal end state.

### 3. Exact visual parity during refactor

If we immediately rewrite markup or CSS architecture, we increase the risk of spacing, typography, and animation drift. A parity-first port avoids that.

### 4. Contact form ownership

The contact form is the only meaningful interactive workflow. We need to confirm whether to preserve the current external provider or bring it fully onto Vercel.

## Recommended Execution Order

1. Export all Ghost-managed content and verify the live route list.
2. Scaffold a Next.js App Router app.
3. Move static assets into `public/assets/`.
4. Port the global layout and shared footer/contact block.
5. Port each route one by one with existing class names preserved.
6. Wire repo-managed content into each page.
7. Recreate or temporarily preserve the current JS behaviors.
8. Finalize contact form handling.
9. Replace analytics/meta handling.
10. Run visual QA against production and deploy to Vercel.

## Recommended First Implementation Milestone

The first milestone should be:

"A Next.js app on Vercel that renders every public route with the existing styling and assets, using code-native content instead of Ghost."

That milestone gets Ghost out of the hosting path without forcing a full design-system rewrite on day one.
