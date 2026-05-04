# aiclientbuilder.com — marketing site

Astro static site, deployed to Vercel, source on GitHub.

## Stack

- [Astro](https://astro.build) v5 — static site generator
- Vercel — hosting + CDN
- Pure HTML/CSS/JS, no UI framework

## Local development

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # outputs to ./dist
npm run preview      # serve built site locally
```

## Project structure

```
site/
├── src/
│   └── pages/
│       └── index.astro       # homepage (generic / fallback)
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── astro.config.mjs
├── vercel.json               # security headers + clean URLs
└── package.json
```

Niche-specific pages (e.g. `/hvac`, `/plumbing`) will live at `src/pages/[niche]/index.astro` once the niche data system is added.

## Deployment

Pushes to `main` auto-deploy to production via Vercel's GitHub integration. PRs get preview URLs.

## Domain

Production: `aiclientbuilder.com`
