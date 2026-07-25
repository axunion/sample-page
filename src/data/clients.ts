// PLACEHOLDER CONTENT — replace with the client's real data.

export type Client = {
  readonly name: string;
  readonly category: string;
};

export const clients = [
  { name: "ホテル・ヴェルダン東京", category: "ホテル" },
  { name: "グランドテラス箱根", category: "ホテル" },
  { name: "ベイサイドホテル横浜", category: "ホテル" },
  { name: "クラブフィット町田", category: "フィットネス" },
  { name: "フィットベース渋谷", category: "フィットネス" },
  { name: "アーバンスパ&ウェルネス青山", category: "ウェルネス" },
  { name: "リラクゼーション凛 表参道", category: "ウェルネス" },
] as const satisfies readonly Client[];
