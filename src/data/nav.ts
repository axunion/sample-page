// PLACEHOLDER CONTENT — replace with the client's real data.
// `href` values are same-page anchors today. When a section becomes its own
// page (e.g. /services), only this file changes — Header and Footer do not.

export type NavItem = {
  readonly label: string;
  readonly labelEn: string;
  readonly href: string;
};

export const nav = [
  { label: "理念", labelEn: "PHILOSOPHY", href: "#philosophy" },
  { label: "サービス", labelEn: "SERVICES", href: "#services" },
  { label: "導入事例", labelEn: "CASES", href: "#cases" },
  { label: "会社概要", labelEn: "COMPANY", href: "#company" },
  { label: "お問い合わせ", labelEn: "CONTACT", href: "#contact" },
] as const satisfies readonly NavItem[];
