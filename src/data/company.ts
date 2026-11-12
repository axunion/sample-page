// PLACEHOLDER CONTENT — replace with the client's real data.

export type Office = {
  readonly label: string;
  readonly address: string;
};

export type CompanyProfile = {
  readonly name: string;
  readonly nameEn: string;
  readonly established: string;
  readonly capital: string;
  readonly representative: string;
  readonly employees: string;
  readonly businessLines: readonly string[];
  readonly offices: readonly Office[];
  readonly email: string;
  readonly businessHours: string;
};

export const company = {
  name: "合同会社 MODESTY FIT",
  nameEn: "MODESTY FIT LLC",
  established: "2025年9月8日",
  capital: "100万円",
  representative: "鈴木　雅幸",
  employees: "22名（正社員・アルバイト・業務委託スタッフを含む）",
  businessLines: [
    "ホテル・マンション内のフィットネス関連施設の運営管理、各種アクティビティ業務の受託",
  ],
  offices: [
    { label: "本社", address: "東京都豊島区巣鴨1-16-2 B309" },
    { label: "千葉オフィス", address: "千葉県柏市柏3-5-14 3F" },
    { label: "名古屋オフィス", address: "愛知県名古屋市中区門前町1-60" },
  ],
  email: "modestyfit@modestyfit.com",
  businessHours: "10時から18時",
} as const satisfies CompanyProfile;
