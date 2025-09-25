# Weathure Widget UI 🌧️☔

Production-grade, embeddable weather widget built with React, TypeScript, and Vite. Features responsive design, theming, accessibility (WCAG AA), PWA/offline-first, i18n (EN/ID), data caching, and background refresh.

---

## Live Demo & Deployment Status

[![GitHub Pages](https://img.shields.io/badge/Live%20Demo-Click%20Here-blue?logo=github)](https://ricoaprillananda.github.io/WEATHURE-WIDGET/)

- **Live Demo:** [https://ricoaprillananda.github.io/WEATHURE-WIDGET/](https://ricoaprillananda.github.io/WEATHURE-WIDGET/)
- **Status:** Automatically deployed on every push to `main` via GitHub Actions ([see workflow](.github/workflows/pages.yml))
- **Static Output:** All assets are built to `/dist` and served as a PWA

---

## Features

- Embeddable `<WeatherWidget />` (iframe or npm import)
- Current, hourly (48h), daily (7–10d) forecasts
- Weather alerts (if available)
- Offline mode (Service Worker, app shell caching)
- Skeleton/loading states, optimistic UI
- Error boundaries, retry UX
- Theming: light/dark/auto, high-contrast mode
- Accessibility: ARIA roles, keyboard navigation, prefers-reduced-motion
- i18n: English & Indonesian, auto-detect locale
- Charts (Chart.js) and Map (Leaflet) — lazy-loaded
- Tooling: ESLint, Prettier, Vitest, React Testing Library, Playwright, Storybook, Commitlint, Husky, lint-staged
- Builds: PWA, library (npm), static app (Netlify/Vercel/GitHub Pages)
- Security/Privacy: .env for API keys, no precise location stored without consent, analytics off by default

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set your OpenWeather API key
cp .env.example .env
# Edit .env and set VITE_WEATHER_API_KEY=your_openweather_key

# 3. Run locally
npm run dev

# 4. Lint, typecheck, and test
npm run lint
npm run typecheck
npm run test
npm run test:e2e || true

# 5. Build app and library
npm run build        # Static app for deployment
npm run build:lib    # Library for npm publish

# 6. Storybook (component docs)
npm run storybook
```

---

## How to Use the App

### 1. Web App (Live Demo)

- Visit [https://ricoaprillananda.github.io/Weathure-Widget/](https://ricoaprillananda.github.io/Weathure-Widget/)
- Try the widget, change theme, language, and view forecasts

### 2. Embed via iframe

```html
<iframe
  src="https://ricoaprillananda.github.io/Weathure-Widget/embed"
  width="350"
  height="500"
  style="border:none;border-radius:1rem"
></iframe>
```

### 3. Use as npm package (React)

```tsx
import { WeatherWidget } from 'weathure-widget'; // Use the published npm name

export default function App() {
  return <WeatherWidget />;
}
```

### 4. Vanilla JS (ESM CDN)

```html
<script type="module">
  import { WeatherWidget } from 'https://your-cdn-url/weather-widget.esm.js';
  // Mount to DOM
</script>
```

---

## Theming

- Light/dark/auto via CSS variables
- High-contrast mode: `data-theme="high-contrast"`
- Customizable via Tailwind and theme tokens

## Internationalization (i18n)

- Auto-detects browser locale
- Supports English (`en`) and Indonesian (`id`)
- Easily extendable via `src/lib/i18n/locales/*.json`

## Testing

- Unit: `npm run test` (Vitest, React Testing Library)
- E2E: `npm run test:e2e` (Playwright)
- Visual: `npm run storybook`

## Build & Deployment

- App: `npm run build` (static output in `dist/`)
- Library: `npm run build:lib` (for npm publish)
- PWA: manifest, service worker, offline shell
- **Automatic Deployment:** [GitHub Pages](https://ricoaprillananda.github.io/Weathure-Widget/) via CI/CD
- Manual: Deploy `/dist` to Netlify, Vercel, or any static host

## CI/CD

- Lint, typecheck, unit, e2e, build, upload artifacts
- Automated semantic releases via release-please
- Dependabot for monthly dependency updates

## Security & Privacy

- API keys via `.env` (never commit secrets)
- No precise location stored without explicit consent
- Analytics off by default

## Accessibility & Performance

- ARIA roles, keyboard navigation, prefers-reduced-motion
- High-contrast mode, WCAG AA minimum
- Mobile-first, code-split, lazy-load charts/maps
- Optimized for LCP < 2.5s on 3G fast

## Folder Structure & Docs

- See [`SPEC.md`](./SPEC.md) for full architecture, state schema, flows, and technical decisions.
- See [`storybook/`](./storybook/) for component documentation.
- See [`src/`](./src/) for main source code.

---

© 2025 ricoaprillananda. MIT License.
