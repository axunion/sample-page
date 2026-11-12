// PLACEHOLDER CONTENT — replace with the client's real data.
// `href` values are same-page anchors today. When a section becomes its own
// page (e.g. /services), only this file changes — Header and Footer do not.

export type NavItem = {
  readonly label: string;
  readonly href: string;
};

export const nav = [
  { label: "理念", href: "#philosophy" },
  { label: "強み", href: "#strengths" },
  { label: "サービス", href: "#services" },
  { label: "受託実績", href: "#clients" },
  { label: "展望", href: "#vision" },
  { label: "会社概要", href: "#company" },
] as const satisfies readonly NavItem[];

// Kept apart from `nav`: the header shows it as a button, not as a nav link.
export const contact = {
  label: "お問い合わせ",
  href: "#contact",
} as const satisfies NavItem;
