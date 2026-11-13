# Project Notes

Static Astro top page for a client corporate site, currently in client review.
General working rules live in the user-level config; this file holds only what is
specific to this repo. See README.md for structure, commands, and deployment.

## Content

- Values used in more than one place (company facts, nav, site name) and
  lists rendered as repeated cards (strengths, services, clients) live in
  `src/data/*.ts` (plus `site` in `astro.config.mjs`). Components read from there and
  never hard-code them. Prose used once (hero, philosophy, vision, section leads) stays
  in its section component.
- Unconfirmed facts are marked `【… 未定】` or `PLACEHOLDER`. Never fill them with
  invented data; leave the marker until the client confirms the value.
- Adding or replacing a photo requires a row in `docs/image-credits.md`.

## Code

- Styling is hand-written CSS with no framework. Use the custom properties in
  `src/styles/tokens.css` instead of literal colors, sizes, or fonts.
- `src/components/sections/*` are single-use, one per top-page section. New pages
  import from `src/data/*` instead of reusing a section component.

## Verification

- `pnpm fix` (Biome), `pnpm exec astro check`, and `pnpm build` must pass. Lefthook
  runs Biome on commit and `astro check` on push.
