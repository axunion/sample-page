// PLACEHOLDER CONTENT — replace with the client's real data.

export type Client = {
  readonly name: string;
  readonly category: string;
};

export const clients = [
  {
    name: "JWマリオットホテル東京（東京都）",
    category: "ホテル（現受託施設）",
  },
  { name: "コンラッド名古屋（名古屋市）", category: "ホテル（現受託施設）" },
  {
    name: "パレスホテル東京（エヴィアンスパ）",
    category: "ホテル（管理実績）",
  },
  {
    name: "フォーシーズンズ大手町（ウェルネス施設）",
    category: "ホテル（管理実績）",
  },
  {
    name: "ROKU KYOTO, LXR Hotels and Resorts",
    category: "ホテル（コンサル・アドバイス）",
  },
  {
    name: "ウェスティンホテル横浜",
    category: "ホテル（コンサル・アドバイス）",
  },
  { name: "パークコート青山ザタワー", category: "高級マンション（管理実績）" },
  { name: "ザコート神宮外苑", category: "高級マンション（管理実績）" },
] as const satisfies readonly Client[];
