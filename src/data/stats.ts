// PLACEHOLDER CONTENT — replace with the client's real data.

export type Stat = {
  readonly value: string;
  readonly unit: string;
  readonly label: string;
};

export const stats = [
  { value: "120", unit: "社+", label: "支援実績" },
  { value: "15", unit: "年", label: "現場運営の経験" },
  { value: "450", unit: "名+", label: "育成した人材" },
  { value: "94", unit: "%", label: "顧客継続率" },
] as const satisfies readonly Stat[];
