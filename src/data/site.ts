// PLACEHOLDER CONTENT — replace with the client's real data.
// The site's domain lives in astro.config.mjs (`site`), not here — see README.

export type Site = {
  readonly name: string;
  readonly nameEn: string;
  readonly tagline: string;
  readonly description: string;
  readonly locale: string;
};

export const site = {
  name: "株式会社紬",
  nameEn: "TSUMUGI Inc.",
  tagline: "その上質さは、現場がつくる。",
  description:
    "株式会社紬は、ホテル・フィットネス・ウェルネス業界の現場運営と人材育成を支援する会社です。",
  locale: "ja_JP",
} as const satisfies Site;
