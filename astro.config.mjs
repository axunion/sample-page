// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";

// Set by .github/workflows/deploy.yml only, for the temporary GitHub Pages
// preview. Never set for the real production build.
const isGithubPagesPreview = process.env.GITHUB_PAGES === "true";

// https://astro.build/config
export default defineConfig({
  // PLACEHOLDER — replace with the client's real domain before launch.
  // Used to build absolute canonical/OG URLs and the Organization JSON-LD.
  site: isGithubPagesPreview
    ? "https://axunion.github.io"
    : "https://example.com",
  // GitHub Pages project sites are served under /<repo>/, not /.
  base: isGithubPagesPreview ? "/sample-page/" : "/",

  image: {
    layout: "constrained",
    responsiveStyles: true,
  },

  // Self-hosted fonts, downloaded and cached at build time (node_modules/.astro/fonts).
  // Client spec: Japanese text in Noto Sans JP, Latin text in Noto Serif, Regular only.
  //
  // Do not set `subsets`: Google's CJK slices carry no subset comment, so naming a subset
  // drops every weight after the first. Do not add `preload` to Noto Sans JP: each weight
  // expands to ~120 files and would emit that many preload links.
  fonts: [
    {
      name: "Noto Sans JP",
      cssVariable: "--font-noto-sans-jp",
      provider: fontProviders.google(),
      weights: [400],
      styles: ["normal"],
      fallbacks: [
        "Hiragino Kaku Gothic ProN",
        "Hiragino Sans",
        "Yu Gothic Medium",
        "YuGothic",
        "Yu Gothic",
        "BIZ UDPGothic",
        "Meiryo",
        "sans-serif",
      ],
      optimizedFallbacks: false,
    },
    {
      name: "Noto Serif",
      cssVariable: "--font-noto-serif",
      provider: fontProviders.google(),
      weights: [400],
      styles: ["normal"],
      fallbacks: ["Georgia", "Times New Roman", "serif"],
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
