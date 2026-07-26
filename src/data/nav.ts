// PLACEHOLDER CONTENT — replace with the client's real data.
// `href` values are same-page anchors today. When a section becomes its own
// page (e.g. /services), only this file changes — Header and Footer do not.

export type NavItem = {
  readonly label: string;
  readonly href: string;
};

export const nav = [
  { label: "理念", href: "#philosophy" },
  { label: "サービス", href: "#services" },
  { label: "導入事例", href: "#cases" },
  { label: "会社概要", href: "#company" },
  { label: "お問い合わせ", href: "#contact" },
] as const satisfies readonly NavItem[];
