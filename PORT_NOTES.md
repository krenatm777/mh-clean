# MusharaqaHub — redesign port (light / institutional)

This is the approved prototype ported onto the existing Next.js 15 / React 19 / Tailwind 3 stack.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (needs internet for next/font on first build)
```

## What changed

**Design system**
- `app/globals.css` — replaced with the ported design system (light ivory `#F6F3EA` + forest green `#003D27` + gold `#EFCC04`). All section styles live here under semantic class names.
- `tailwind.config.ts` — brand color tokens (`ink`, `paper`, `gold`, …) and `font-serif/sans/mono` mapped to the next/font CSS variables.
- `app/layout.tsx` — fonts via `next/font/google` (Marcellus, Hanken Grotesk, IBM Plex Mono) + updated metadata (MusharaqaHub, REA, light theme color).

**Components** (`components/`)
- `Header.tsx` — client component: scroll shadow + mobile menu. Monogram + typeset "MusharaqaHub" (no wordmark image).
- `Hero.tsx` — hero + inline signature SVG + credential rail.
- `About.tsx` — three principles.
- `ProjectFocus.tsx` — Real Economic Assets (REA) + asset classes (01 IP, 02 Real estate, 03 Commodities, 04 Enterprises).
- `HowItWorks.tsx` — **new** — four-step flow.
- `Governance.tsx` — **new** — dark green compliance band (AIFC / AAOIFI / Shariah / AIX).
- `WhySection.tsx` — four differentiators.
- `Team.tsx` — 2 + 3 layout with normalized, warm-graded photos.
- `Contact.tsx`, `Footer.tsx` — updated.
- `ScrollFx.tsx` — **new** — client: scroll-reveal + hero signature draw-in (respects prefers-reduced-motion).

**Assets** (`public/`)
- `logo-mono-black.svg`, `logo-mono-white.svg` — brand monograms.
- `team/*.jpg` — retouched, tone-matched team portraits (560×560).
- `logo.png` removed (no longer used).

## Optional follow-ups
- `app/opengraph-image.tsx` and `app/icon.svg` still carry the old dark theme — update to the light brand if desired.
- Team photos use plain `<img>`; switch to `next/image` for optimization if wanted.
