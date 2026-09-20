# EduStar Academic Centre — Website

A Web rebuild of the EduStar Academic Centre website (originally WordPress + Astra + Elementor), rebuilt with modern tooling. Content, colours, fonts and imagery are carried over from the source site; layout and alignment issues from the original have been cleaned up.

## Version

**v0.1.1** — bilingual release (2026-09-20)

### Changelog

- **v0.1.1**
  - Added site-wide **English / 中文** switching via a single toggle in the top-right
    (preference persisted in `localStorage`); all pages translated.
  - International School fees/features sections and the comparison table are now bilingual.
  - University Quiz now follows the global language toggle.
  - Home: moved the "15+ Teaching Experts" stat into the stats row and removed the
    floating overlay.
  - Header: single-line nav on desktop, "Book Trial" always visible, hours label cleaned up.
  - Contact/home: trial form and address panel are now equal height (bottom-aligned).
  - Configured static export (`output: "export"`) for Cloudflare Pages; added `serve:lan`
    / `preview` scripts for LAN preview.
- **v0.1.0** — initial build (2026-09-20): all marketing pages, quiz, forms, assets.

### Current status

- ✅ All marketing pages implemented: Home, About Us, Testimonial, Meet Our Team,
  Services + 4 service sub-pages, Resources, Competitions, University Test,
  Singapore International School comparison, Contact.
- ✅ Full **English / 中文** bilingual support across every page, toggled from the header.
- ✅ Global chrome: top bar, responsive nav (single-line on desktop, drawer on mobile),
  footer, back-to-top, scroll reveal and counter animations.
- ✅ University Readiness Quiz — full 5-step quiz ported from the source site,
  with EN / 中文 support and the original scoring logic.
- ✅ Contact page with embedded map and a Formspree-ready free-trial form.
- ✅ Assets (logo, hero/about/course images, WeChat QR, favicon) downloaded locally to `public/images`.
- ⏳ Placeholder pages ("Coming Soon"): Questionbank (parent + Primary/Secondary/IB),
  Dashboard, Student Registration, Instructor Registration — the source site has no
  published content for these either.
- ⏳ The free-trial form needs `NEXT_PUBLIC_FORMSPREE_ENDPOINT`; without it, it falls
  back to opening the visitor's mail client.
- 🖼 Team photos and testimonial avatars currently reuse the source site's placeholder images.

## Tech stack

- **Next.js 16** (App Router, static export)
- **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **react-icons** (Font Awesome icon set)
- Self-hosted **Montserrat** via `next/font`

The site is exported as fully static HTML/CSS/JS (`output: "export"`), so it can be hosted anywhere.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # generates the static site into ./out
npm run lint
```

## Project structure

```
src/
  app/                     # one folder per route (App Router)
    page.tsx               # Home
    about-us/ testimonial/ meet-our-team/
    services/ + 4 service sub-pages
    resources/ competitions/ university-test/
    singapore-international-school/
    contact/
    questionbank/ (+ primary-school, secondary-school, ib)
    dashboard/ student-registration/ instructor-registration/
  components/              # Header, Footer, Reveal, Counter, forms, quiz, table...
  lib/site.ts              # nav + contact/social data
public/images/             # assets downloaded from the original site
```

## Pages

Marketing pages are fully built. The `questionbank`, `dashboard`, `student-registration`
and `instructor-registration` pages are intentional **placeholders** ("Coming Soon") —
the original WordPress site has no published content for those routes either.

## Forms

The free-trial form posts to a third-party endpoint (Formspree-compatible). Set:

```bash
NEXT_PUBLIC_FORMSPREE_ENDPOINT="https://formspree.io/f/your-id"
```

If the variable is not set, the form falls back to opening the visitor's mail client.

## Deploy to Cloudflare Pages

1. Push this repository to GitHub/GitLab.
2. In the Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Build settings:
   - **Framework preset:** None
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
4. After the first deploy, add your custom domain under **Custom domains**.

`trailingSlash` is enabled, so routes resolve to their own `index.html` and Cloudflare
serves them directly with no rewrite rules required.
