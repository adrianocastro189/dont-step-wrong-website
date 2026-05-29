# dont-step-wrong-website

Static website for **Don't Step Wrong 2** — a puzzle game by **Feriado**.

Live: https://dontstepwrong.com

## Stack

- **Astro** (static output) — multilingual SSG with native i18n
- **Alpine.js** — minimal interactivity (planned for mobile drawer)
- **GitHub Pages** — hosting
- **Cloudflare** — CDN + privacy-friendly Web Analytics

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output to dist/
npm run preview  # serve built site locally
```

Requires Node >= 20.

## Languages

Default English, with Portuguese (`/pt/`) and Spanish (`/es/`) versions.
UI strings in `src/i18n/{locale}.ts`. Devlog posts as three MDX files
per post (one per locale) under `src/content/devlog/`.

## Deploy

Automatic via GitHub Actions on push to `main`. Workflow at
`.github/workflows/deploy.yml`. Domain (`dontstepwrong.com`) configured
via `public/CNAME` and Cloudflare DNS.

## Structure

```
src/
├── components/
│   ├── layout/       BaseLayout, Header, Footer
│   ├── seo/          Hreflang, Schemas (VideoGame, BlogPosting, Breadcrumb)
│   ├── ui/           CTASteam, CTADiscord, GameplayVideo, Placeholder
│   ├── landing/      Hero, HowItWorks, MechanicsPreview, FinalCta
│   └── pages/        Mechanics, DevlogList, DevlogPost, PressKit, Privacy
├── content/devlog/   MDX posts (3 files per slug, one per locale)
├── i18n/             en.ts, pt.ts, es.ts, utils.ts
├── pages/            Astro routes (mirrors URL structure)
└── styles/           tokens.css (design tokens), global.css
```
