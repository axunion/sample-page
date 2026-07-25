// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";

// https://astro.build/config
export default defineConfig({
  // PLACEHOLDER — replace with the client's real domain before launch.
  // Used to build absolute canonical/OG URLs and the Organization JSON-LD.
  site: "https://example.com",

  image: {
    layout: "constrained",
    responsiveStyles: true,
  },

  // Self-hosted fonts, downloaded and cached at build time (node_modules/.astro/fonts).
  // Body copy intentionally uses a system font stack instead (see src/styles/tokens.css):
  // the Google provider slices CJK families into ~100+ unlabeled files per weight, which
  // is only worth paying for the display serif used in headings.
  //
  // Do not set `subsets`: Google's CJK slices carry no subset comment, so naming a subset
  // drops every weight after the first. Do not add `preload` to Shippori Mincho B1: each
  // weight expands to ~120 files and would emit that many preload links.
  fonts: [
    {
      name: "Shippori Mincho B1",
      cssVariable: "--font-shippori",
      provider: fontProviders.google(),
      weights: [500],
      styles: ["normal"],
      fallbacks: ["Hiragino Mincho ProN", "Yu Mincho", "YuMincho", "serif"],
      optimizedFallbacks: false,
    },
    {
      name: "Jost",
      cssVariable: "--font-jost",
      provider: fontProviders.google(),
      weights: [400, 500],
      styles: ["normal"],
      fallbacks: ["Helvetica Neue", "Arial", "sans-serif"],
      optimizedFallbacks: false,
    },
  ],

  vite: {
    css: {
      transformer: "lightningcss",
      lightningcss: {
        targets: browserslistToTargets(browserslist()),
      },
    },
  },
});
