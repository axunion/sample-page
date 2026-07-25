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
  representative: "代表取締役社長 神谷 直樹",
  employees: "48名（2026年4月時点）",
  businessLines: [
    "ホテル・宿泊施設の現場運営支援",
    "フィットネス・ウェルネス施設の運営支援",
    "人材育成・研修",
    "人材紹介・採用支援",
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
