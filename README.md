# Alexandru Vucolov — Portfolio

Professional portfolio for **Alexandru Vucolov**, mobile & full-stack engineer and founder of
**Atech Engineering Solutions SRL**. Built with **Next.js 16 (App Router)**, **React 19**,
**TypeScript** and **Tailwind CSS v4**, exported as a fully static site and deployed to GitHub Pages.

**Live:** https://alexandruvucolov.github.io/portofolio/

## What's inside

- **Hero** — positioning, availability, headline metrics and a device mock-up.
- **Work** — 9 live store apps with category filters, tech tags, feature highlights and direct
  Google Play / App Store links, plus an "in the lab" strip for unreleased prototypes.
- **Expertise** — what the delivery chain covers (product, native, billing, store compliance).
- **Toolkit** — the production stack: React Native, Expo SDK 54, Reanimated, Firebase, Supabase,
  Stripe, RevenueCat, Mapbox, VisionCamera, Skia, AdMob, EAS and GitHub Actions.
- **Process** — discovery → design → build → release.
- **About** — background from CNC engineering to mobile software, timeline and store profiles.
- **Contact** — email, phone, studio address, copy-to-clipboard and GitHub.

## Apps featured (verified listings)

| App | Platform | Category | Package / Bundle ID |
| --- | --- | --- | --- |
| SwiftMap | Android + iOS | Marketplace | `com.alexandruvucolov.SwiftMap` |
| Lumi AI | Android | AI | `com.anonymous.lumiai` |
| Lumi Blocks | Android | Games | `com.lumiblocks.app` |
| PromptCam | Android | Photo & Video | `com.alexandruvucolov.PromptCam` |
| Pocket Twin | Android | AI | `com.pockettwin.app` |
| Lumi PDF Creator | Android | Productivity | `com.alexandruvucolov.lumipdfcreator` |
| Lumi QR Scanner | Android | Utilities | `com.lumi.qrscanner` |
| Lumi Snack | Android | Games | `com.lumisnack.app` |
| Atech Tools | Android + iOS | Business | `com.atechtools.catalog` / `com.atech.atechengineeringsolutions` |

Store profiles: [Google Play — Atech Engineering Solutions](https://play.google.com/store/search?q=Atech%20Engineering%20Solutions&c=apps) ·
[App Store — Alexandru Vucolov](https://apps.apple.com/us/developer/alexandru-vucolov/id1836241780)

## Tech stack

- Next.js 16 (App Router, static export)
- React 19 + TypeScript (strict)
- Tailwind CSS v4 (`@theme` design tokens, custom utilities)
- `next/font` (Inter + Sora), no runtime font requests
- JSON-LD structured data (`Person` + `ItemList` of `SoftwareApplication`)
- Dynamic OG image generated at build time with `next/og`

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
npm run typecheck    # tsc --noEmit
npm run build        # static export into ./out
npm run preview      # serve ./out locally
```

To preview the GitHub Pages base path locally:

```bash
NEXT_PUBLIC_BASE_PATH=/portofolio npm run build
npx serve out
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which typechecks, builds the static
export with `NEXT_PUBLIC_BASE_PATH=/portofolio`, and publishes it through GitHub Pages.

One-time setup in the repository:

1. **Settings → Pages → Build and deployment → Source: GitHub Actions**
2. Push to `main` (or run the workflow manually from the Actions tab).

## Content updates

All copy and app metadata lives in two typed files:

- `src/data/site.ts` — profile, stats, services, stack, timeline, process, links.
- `src/data/apps.ts` — every app: name, tagline, description, category, platforms, store links,
  bundle IDs, tech tags and highlights.

Add an app by appending one object to `apps` — the grid, filters, footer and JSON-LD update
automatically.

## License

© Alexandru Vucolov · Atech Engineering Solutions SRL. All rights reserved.
