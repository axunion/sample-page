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
  name: "合同会社 MODESTY FIT",
  nameEn: "MODESTY FIT LLC",
  tagline: "日常を極上のウェルネスへ。",
  description:
    "合同会社 MODESTY FITは、パレスホテル東京やフォーシーズンズ大手町をはじめとする日本屈指のラグジュアリーホテル・高級マンションのウェルネス施設運営を受託し、品質を落とさないスマートなコスト最適化を実現します。",
  locale: "ja_JP",
} as const satisfies Site;
