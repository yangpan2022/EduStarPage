# EduStar Academic Centre — Website

A bilingual Next.js website for EduStar Academic Centre. The site is exported as static files and deployed to Hostinger through GitHub Actions.

## Version

**v1.0.2** — question bank selection page (2026-10-16)

## Changelog

- **v1.0.2** — question bank selection page
  - Replaced the `/questionbank` Coming Soon placeholder with a bilingual selector matching the navigation menu.
  - Primary School and Secondary School display Coming Soon without inactive buttons.
  - IB Questionbank links to `/questionbank/ib`, preserving the campus-network notice, manual entry button, and LAN probe behavior.
  - Updated the Resources page to show Question Banks as available.
- **v1.0.1** — campus-LAN IB question bank entry
  - Added `/questionbank/ib` as the public entry page for the private IB question bank.
  - Added a manual entry button and an optional automatic LAN reachability probe.
- **v1.0.0** — production release
  - Deployed the static site to Hostinger through GitHub Actions.
  - Connected the trial form to Formspree.
- **v0.1.1** — bilingual release
  - Added site-wide English and Chinese switching.
- **v0.1.0** — initial website build.

## Current status

- Marketing pages and global English/Chinese switching are implemented.
- `/questionbank` provides Primary School, Secondary School, and IB choices.
- Primary and Secondary question banks are marked Coming Soon.
- `/questionbank/ib` is the campus-network entry point for the active IB question bank.
- The IB question bank itself runs on the local MacBook Air server and is not hosted on Hostinger.

## Tech stack

- Next.js 16 with App Router and static export
- React 19 and TypeScript
- Tailwind CSS v4
- react-icons

## Development

```bash
npm install
npm run dev
npm run lint
npm run build
```

The production build is exported to `out/`.

## Question bank routes

| Route | Status | Purpose |
| --- | --- | --- |
| `/questionbank` | Available | Bilingual question bank selection page |
| `/questionbank/primary-school` | Coming Soon | Primary School question bank placeholder |
| `/questionbank/secondary-school` | Coming Soon | Secondary School question bank placeholder |
| `/questionbank/ib` | Available | Public campus-network guidance and IB entry page |

The internal IB service uses:

| Setting | Value |
| --- | --- |
| Internal URL | `https://learn.edustarcorp.com/` |
| LAN probe | `https://learn.edustarcorp.com/_lan_probe.png` |
| Probe timeout | 2000 ms |

Inside the EduStar LAN, AdGuard Home resolves `learn.edustarcorp.com` to the MacBook Air at `192.168.0.79`. Caddy provides HTTPS and serves the locally running question bank. The public website never links directly to the IP address.

Chrome may block the automatic LAN probe because of local-network access controls. The manual **Enter Questionbank** button remains the reliable entry method.

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`:

1. Install dependencies.
2. Build the static Next.js export.
3. Upload `out/` to Hostinger over FTP.

Required GitHub Actions secrets:

- `FTP_HOST`
- `FTP_USERNAME`
- `FTP_PASSWORD`
- `FTP_PORT`
- `FORMSPREE_ENDPOINT`

The Hostinger FTP account starts in `public_html`, so the workflow deploys to `server-dir: ./`.
