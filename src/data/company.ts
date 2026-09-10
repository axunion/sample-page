// PLACEHOLDER CONTENT — replace with the client's real data.

export type CompanyProfile = {
  readonly name: string;
  readonly nameEn: string;
  readonly established: string;
  readonly capital: string;
  readonly representative: string;
  readonly employees: string;
  readonly businessLines: readonly string[];
  readonly address: {
    readonly postalCode: string;
    readonly region: string;
    readonly locality: string;
    readonly street: string;
  };
  readonly tel: string;
  readonly telHref: string;
  readonly email: string;
  readonly businessHours: string;
};

export const company = {
  name: "株式会社紬",
  nameEn: "TSUMUGI Inc.",
  established: "2016年4月",
  capital: "3,000万円",
  representative: "代表 鈴木 雅幸",
  employees: "48名（2026年4月時点）",
  businessLines: [
    "ラグジュアリーホテル・高級マンション ウェルネス施設の運営受託",
    "施設運営における人材の採用・育成・シフトマネジメント",
    "施設・機器メンテナンス、プール清掃および水質管理",
    "プール監視業務の警備業申請、保健所対応など公的手続きの代行",
    "新規開発向けオペレーションプランニング・設計コンサルティング",
  ],
  address: {
    postalCode: "107-0062",
    region: "東京都",
    locality: "港区南青山",
    street: "3-12-8 紬ビル8F",
  },
  tel: "03-1234-5678",
  telHref: "tel:+81312345678",
  email: "info@example.com",
  businessHours: "平日 9:00〜18:00（土日祝休）",
} as const satisfies CompanyProfile;
