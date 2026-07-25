# Corporate Site — Top Page

A static Astro site for a hospitality/wellness operations & staffing company. Navy and
gold, formal register. Built on top of Astro 7 with hand-written CSS (lightningcss via
Vite) — no CSS framework.

Everything in this repository except the top-level config is **placeholder content** for
client review. See [Replacing placeholder content](#replacing-placeholder-content) before
launch.

## Project structure

```text
/
├── astro.config.mjs        site URL, image, fonts, lightningcss targets
├── docs/
│   └── image-credits.md    source, photographer, license for every stock photo
├── public/
│   └── favicon.svg
└── src/
    ├── assets/
    │   ├── logo.svg
    │   └── images/         stock photography
    ├── components/
    │   ├── Header.astro
    │   ├── Footer.astro
    │   ├── SectionHeading.astro
    │   └── sections/       one component per top-page section, in document order
    ├── data/                company facts and page copy — see below
    ├── layouts/
    │   └── BaseLayout.astro
    ├── pages/
    │   └── index.astro
    └── styles/
        ├── tokens.css       design tokens (:root custom properties only)
        └── global.css       reset, base elements, shared utility classes
```

`src/components/sections/*` render page content in document order and are not meant to be
reused elsewhere; a future page (e.g. `/services`) should import from `src/data/*.ts`
rather than reuse a section component.

## Commands

All commands run from the project root:

| Command         | Action                                           |
| :--------------- | :----------------------------------------------- |
| `pnpm install`   | Install dependencies                              |
| `pnpm dev`       | Start the local dev server at `localhost:4321`    |
| `pnpm build`     | Build the production site to `./dist/`            |
| `pnpm preview`   | Preview the build locally                         |
| `pnpm fix`       | Format and lint with Biome                        |
| `pnpm astro ...` | Run Astro CLI commands, e.g. `astro check`        |

## Fonts

Headings use Shippori Mincho B1 and Latin labels use Jost, both self-hosted via Astro's
built-in `fonts` config (Google provider, downloaded at build time). Body copy
intentionally uses a system font stack (see `src/styles/tokens.css`) instead of a
self-hosted Japanese sans — Google's CJK families split into 100+ font files per weight,
which is only worth the build cost for the display serif used in headings.

## Replacing placeholder content

Every company fact lives in one of these files. No other file should contain a company
fact — page components only read from `src/data/*`.

- `astro.config.mjs` — `site` (the real domain; also drives canonical/OG URLs)
- `src/data/site.ts` — company name, tagline, meta description
- `src/data/company.ts` — legal name, address, phone, email, business details
- `src/data/nav.ts` — navigation labels and links
- `src/data/services.ts` — services offered
- `src/data/cases.ts` — case studies
- `src/data/stats.ts` — track-record figures
- `src/data/clients.ts` — past clients
- `public/favicon.svg` — brand mark
- `src/assets/images/` — stock photography (see `docs/image-credits.md`); replace with
  real on-site photos when available

## Learn more

[Astro documentation](https://docs.astro.build) · [Astro Discord](https://astro.build/chat)
