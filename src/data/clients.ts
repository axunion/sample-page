// PLACEHOLDER CONTENT — replace with the client's real data.

export type Client = {
  readonly name: string;
  readonly category: string;
};

export const clients = [
  { name: "パレスホテル東京（エヴィアンスパ）", category: "ホテル" },
  { name: "フォーシーズンズ大手町（ウェルネス施設）", category: "ホテル" },
  { name: "ROKU KYOTO, LXR Hotels and Resorts", category: "ホテル" },
  { name: "ウェスティンホテル横浜", category: "ホテル" },
  { name: "パークコート青山ザタワー", category: "高級マンション" },
  { name: "ザコート神宮外苑", category: "高級マンション" },
] as const satisfies readonly Client[];
