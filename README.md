# EduStar Academic Centre — Website

A Web rebuild of the EduStar Academic Centre website (originally WordPress + Astra + Elementor), rebuilt with modern tooling. Content, colours, fonts and imagery are carried over from the source site; layout and alignment issues from the original have been cleaned up.

## Version

**v1.0.0** — production release (2026-09-29)
**v1.0.1** — in progress: campus-LAN question bank entry (not yet deployed)

### Changelog

- **v1.0.1** — campus-LAN question bank entry (unreleased)
  - Header nav **Resources → Questionbank → IB Questionbank** now routes through the
    on-site `/questionbank/ib` page instead of a "Coming Soon" placeholder.
  - That page probes the internal learning platform and forwards campus-network visitors
    automatically; everyone else gets a bilingual "Campus Network Only" notice.
    See [Campus network question bank](#campus-network-question-bank).
  - Off-site navigation links open in a new tab (`externalLinkProps` in `Header.tsx`).
- **v1.0.0**
  - Deployed to Hostinger shared hosting at `edustarcorp.com` via GitHub Actions
    (build + FTP deploy to `public_html`).
  - Wired the free-trial form to Formspree (`NEXT_PUBLIC_FORMSPREE_ENDPOINT` is injected
    at build time from a GitHub secret), so booking requests are emailed instead of
    opening the visitor's mail client.
  - Removed the inline `data-lang` script from `layout.tsx` that caused a React
    hydration mismatch; language attribute is now set exclusively by `LanguageProvider`.
- **v0.1.1** — bilingual release (2026-09-20)
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
- ⏳ Placeholder pages ("Coming Soon"): Questionbank (parent + Primary/Secondary),
  Dashboard, Student Registration, Instructor Registration — the source site has no
  published content for these either.
- 🔒 `/questionbank/ib` is the campus-network entry point to the internal IB question bank
  (see [Campus network question bank](#campus-network-question-bank)).
- ✅ The free-trial form posts to Formspree (endpoint injected at build time), emailing
  booking requests to the centre.
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
docs/                      # internal notes (campus-LAN integration prompt)
```

## Pages

Marketing pages are fully built. The `questionbank`, `dashboard`, `student-registration`
and `instructor-registration` pages are intentional **placeholders** ("Coming Soon") —
the original WordPress site has no published content for those routes either.

`/questionbank/ib` is the exception: it is the public entry point to the internal IB
question bank (see [Campus network question bank](#campus-network-question-bank)).

## Forms

The free-trial form posts to a third-party endpoint (Formspree-compatible). Set:

```bash
NEXT_PUBLIC_FORMSPREE_ENDPOINT="https://formspree.io/f/your-id"
```

If the variable is not set, the form falls back to opening the visitor's mail client.
In production this value is stored as the GitHub secret `FORMSPREE_ENDPOINT` and injected
into the build by the deploy workflow.

## Campus network question bank

The IB question bank is **not** part of this public site. It runs on a separate internal
server whose hostname resolves only inside the EduStar campus network (no public DNS
record), so it is unreachable from the internet by design.

The public site is the entry point:

1. The header link **Resources → Questionbank → IB Questionbank** points at the on-site
   route `/questionbank/ib` — deliberately *not* at the internal host, so off-campus
   visitors never land on a bare browser error page.
2. That route renders a bilingual "Campus Network Only" notice and mounts
   `src/components/LanProbeRedirect.tsx`, which probes the platform (2 s timeout,
   `credentials: "omit"`, `cache: "no-store"`).
3. Probe succeeds → the visitor is forwarded to the platform. Probe fails → the notice
   stays on screen.

Both URLs live in `src/lib/site.ts`:

| Key | Value | Purpose |
| --- | ----- | ------- |
| `learnUrl` | `https://learn.edustarcorp.com/` | the internal platform itself |
| `learnProbeUrl` | `https://learn.edustarcorp.com/_lan_probe` | reachability probe endpoint |
| `learnProbeTimeoutMs` | `2000` | probe timeout |

The internal server must serve **HTTPS with a browser-trusted certificate** (an HTTPS page
cannot probe a plain `http://` host) and answer the probe with
`Access-Control-Allow-Origin: https://edustarcorp.com`,
`Access-Control-Allow-Private-Network: true` and `Cache-Control: no-store`. The full
requirements handed to the learning-platform owner are in
[`docs/learn-edustarcorp-lan-prompt.md`](docs/learn-edustarcorp-lan-prompt.md).

`/questionbank/ib` carries `robots: { index: false, follow: false }` because it is a
utility page rather than content.

Testing without the campus network: open `/questionbank/ib` — the probe times out and the
notice renders. To exercise the forwarding path, point `learn.edustarcorp.com` at a local
server (hosts file) that answers `200` on `/_lan_probe`.

## Deploy to Hostinger (GitHub Actions)

The site is deployed automatically to Hostinger shared hosting on every push to `main` via
`.github/workflows/deploy.yml`:

1. GitHub Actions checks out the repo, installs dependencies, and runs `npm run build`
   with `NEXT_PUBLIC_FORMSPREE_ENDPOINT` injected from the `FORMSPREE_ENDPOINT` secret.
2. The static `out/` directory is uploaded over FTP to `public_html` on the Hostinger server.

Required GitHub Actions secrets:

| Secret | Description |
| ------ | ----------- |
| `FTP_HOST` | Hostinger FTP server IP |
| `FTP_USERNAME` | FTP account username |
| `FTP_PASSWORD` | FTP account password |
| `FTP_PORT` | FTP port (usually `21`) |
| `FORMSPREE_ENDPOINT` | Formspree form endpoint (e.g. `https://formspree.io/f/xxxx`) |

> Note: the FTP account's home directory is `public_html`, so the workflow deploys to
> `server-dir: ./` (not `./public_html/`).

## Deploy to Cloudflare Pages (alternative)

1. Push this repository to GitHub/GitLab.
2. In the Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Build settings:
   - **Framework preset:** None
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
4. After the first deploy, add your custom domain under **Custom domains**.

`trailingSlash` is enabled, so routes resolve to their own `index.html` and Cloudflare
serves them directly with no rewrite rules required.
