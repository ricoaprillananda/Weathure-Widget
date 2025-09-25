# Weather Widget UI — SPEC.md

## 1. Project Goals
- Deliver a reusable, embeddable, production-grade weather widget for web applications.
- Support theming (light/dark/auto), responsive design, accessibility (WCAG AA+), PWA/offline-first, i18n (EN/ID), and robust data caching.
- Provide current, hourly (48h), and daily (7–10d) forecasts, with weather alerts if available.
- Enable easy embedding via iframe and npm package.
- Ensure high performance, security, privacy, and developer experience.

## 2. User Stories
- As a user, I want to view current, hourly, and daily weather for my location or a searched city.
- As a user, I want to toggle between metric and imperial units, or use auto-detect.
- As a user, I want to see weather alerts for severe conditions.
- As a user, I want the widget to work offline and update in the background.
- As a user, I want the widget to be accessible via keyboard and screen reader.
- As a user, I want the widget to match my system theme and support high-contrast mode.
- As a developer, I want to embed the widget via iframe or npm import, and customize its theme.
- As a developer, I want to localize the widget to English or Indonesian.

## 3. Non-Functional Requirements
- Responsive (mobile-first), performant (LCP < 2.5s on 3G), accessible (WCAG AA+), secure, privacy-respecting.
- Deterministic builds and tests; stable type system; small bundle size via code-splitting and lazy loading.
- Robust error handling, retry logic, and fallback data provider.
- No precise location stored without user consent; analytics disabled by default.

## 4. Architecture Overview
- **Frontend:** React + TypeScript + Vite
- **Styling:** TailwindCSS, shadcn/ui, CSS variables for theming
- **State:** Zustand (UI state), TanStack Query (data fetching/caching)
- **Routing:** TanStack Router
- **Data Providers:** OpenWeatherMap (API key via .env), Met.no fallback (no key)
- **i18n:** i18next (EN/ID), auto-detect locale
- **PWA:** Service Worker, manifest, offline shell, background sync
- **Testing:** Vitest, React Testing Library, Playwright, Storybook
- **Tooling:** ESLint (strict + jsx-a11y), Prettier, Commitlint, Husky, lint-staged
- **Builds:** App (static), Library (npm), PWA

## 5. Technical Decisions
- Use TanStack Query for stale-while-revalidate caching and background refresh.
- Use Zustand for UI state (theme, units, location, etc.).
- Abstract weather providers for retry/fallback/rate-limit awareness.
- Use CSS variables for theming; support high-contrast and prefers-reduced-motion.
- Lazy-load charts (Chart.js) and maps (Leaflet) for bundle size.
- Use error boundaries and optimistic UI for robust UX.
- Use .env for API keys; never commit secrets.

## 6. Main Components
- `<WeatherWidget />` (embeddable, main entry)
- `WeatherCard` (current conditions)
- `Temperature`, `UnitToggle`, `LocationPicker`
- `ForecastHourly`, `ForecastDaily`, `Alerts`, `LoadingSkeleton`
- UI primitives (shadcn/ui)

## 7. State Schema
- `weatherStore`: { location, units, forecasts, alerts, loading, error }
- `settingsStore`: { theme, locale, highContrast, prefersReducedMotion }

## 8. Data Flow
- On mount: detect location (geolocation or default), fetch weather from OpenWeatherMap, fallback to Met.no if error/rate-limit.
- On search: update location, refetch data.
- On unit/theme/locale change: update UI state, refetch if needed.
- On offline: show cached data, enable background sync.

## 9. Error Handling
- Error boundaries at widget and page level.
- Retry logic for data fetch; fallback to secondary provider.
- User-friendly error messages (US English), retry button, skeleton states.
- Log errors (console in dev, no-op in prod).

## 10. Security & Privacy
- API keys via .env, masked in client.
- No precise location stored without explicit consent.
- No analytics or tracking by default.
- PII guard in logging/utilities.

## 11. Performance Strategy
- Code-splitting, lazy-load charts/maps.
- App shell caching via Service Worker.
- Optimize LCP, TTI, and bundle size.
- Use skeletons and optimistic UI for perceived speed.

## 12. Testing Matrix
- Unit: Zustand stores, data mappers, UI components.
- Integration: Widget flows, provider fallback, i18n, theming.
- E2E: City search, unit toggle, hourly/daily details, offline mode.
- Accessibility: Keyboard nav, ARIA, contrast, reduced motion.
- Visual: Storybook docs and snapshots.

## 13. CI/CD Plan
- Lint, typecheck, unit, e2e, build app & lib, upload artifacts.
- Release automation via release-please (semantic releases).
- Dependabot for monthly dependency updates.
- Prepare hooks via Husky, lint-staged, commitlint.

## 14. Deployment Guide
- Static app: Netlify, Vercel, GitHub Pages.
- Library: npm publish (widget package).
- PWA: manifest, service worker, offline shell.
- Set VITE_WEATHER_API_KEY in .env (never commit).
- Add repo secret for CI preview if needed.

## 15. Accessibility & Internationalization
- ARIA roles, keyboard navigation, prefers-reduced-motion.
- High-contrast mode, WCAG AA minimum.
- i18next for EN/ID, auto-detect locale.

## 16. Embedding Guide
- Via iframe (static demo page)
- Via npm import (<WeatherWidget />)
- Via vanilla <script type="module">

## 17. Observability & Hardening
- Error boundary with optional telemetry (console by default).
- Guard PII, no-op logging in production.

---

This SPEC.md covers all requirements for a robust, production-ready Weather Widget UI. All code, comments, and documentation will be written in US English (C2, native-like).