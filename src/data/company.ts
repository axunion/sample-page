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
  readonly tel: string;
  readonly telHref: string;
  readonly email: string;
  readonly businessHours: string;
};

export const company = {
  name: "合同会社 MODESTY FIT",
  nameEn: "MODESTY FIT LLC",
  established: "【設立年月 未定】",
  capital: "【資本金 未定】",
  representative: "【代表者名 未定】",
  employees: "22名（正社員・アルバイト・業務委託スタッフを含む）",
  businessLines: ["【事業内容 未定】"],
  offices: [
    { label: "本社", address: "東京都豊島区巣1-16-2B309" },
    { label: "千葉オフィス", address: "千葉県柏市柏3-5-14 3F" },
    { label: "名古屋オフィス", address: "愛知県名古屋市中区門前町1-60" },
  ],
  tel: "090-7186-0946",
  telHref: "tel:+819071860946",
  email: "【メールアドレス 未定】",
  businessHours: "【営業時間 未定】",
} as const satisfies CompanyProfile;
