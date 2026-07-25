// PLACEHOLDER CONTENT — replace with the client's real data.

export type Service = {
  readonly id: string;
  readonly title: string;
  readonly titleEn: string;
  readonly summary: string;
  readonly points: readonly string[];
};

export const services = [
  {
    id: "operations",
    title: "現場運営支援",
    titleEn: "ON-SITE OPERATIONS",
    summary:
      "フロント・客室・フロア業務の標準化から人員配置まで、現場に入って支援します。",
    points: [
      "業務フロー・マニュアルの設計と整備",
      "繁閑に応じた人員配置の最適化",
      "現場常駐によるOJTと改善サイクルの定着",
    ],
  },
  {
    id: "training",
    title: "人材育成・研修",
    titleEn: "TRAINING & DEVELOPMENT",
    summary: "接客品質のばらつきを、指導基準の標準化と実地研修で解消します。",
    points: [
      "階層別・職種別の研修プログラム設計",
      "指導基準の言語化とトレーナー育成",
      "新人が独り立ちするまでの伴走支援",
    ],
  },
  {
    id: "staffing",
    title: "人材紹介・採用支援",
    titleEn: "STAFFING & RECRUITMENT",
    summary:
      "外国人材やセカンドキャリア人材を含む、現場に定着する採用を設計します。",
    points: [
      "採用基準の策定と選考プロセスの構築",
      "外国人材の受け入れ体制づくり",
      "入社後の定着フォローアップ",
    ],
  },
] as const satisfies readonly Service[];
