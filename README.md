# New Amsterdam Agenda (English)

English edition of the [New Amsterdam Agenda](https://www.nieuwamsterdam.nu/) — a long-form essay on Amsterdam’s transition from a knowledge economy to an intelligence economy.

## Contents

- `content-en.json` — canonical English content (source of truth)
- `editorial-report.md` — translation QA notes
- `glossary-en.md` — terminology reference
- `public/assets/` — local images (crest, charts, agenda graphic)

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build & audit

```bash
npm run build
npm run preview
npm run audit
```

`npm run audit` checks section order, body character count, local assets, and image hotlinks.

## Stack

Vite + React, `react-markdown` with GFM and sanitization. Single scrolling page with fixed sidebar navigation on desktop and accessible drawer menu on mobile.
