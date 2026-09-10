// PLACEHOLDER CONTENT — replace with the client's real data.

export type Service = {
  readonly id: string;
  readonly title: string;
  readonly titleEn: string;
  readonly summary: string;
  readonly points: readonly string[];
};

export const services = [
  {
    id: "staffing",
    title: "人員の採用・育成・品質維持・シフト管理",
    titleEn: "STAFFING & TRAINING",
    summary:
      "必要な語学力を備えた優秀な人材の確保、独自のスキームによる定期研修の実施、インストラクターやプール監視員の手配。",
    points: [
      "必要な語学力を備えた優秀な人材の確保",
      "独自のスキームによる定期研修の実施",
      "インストラクターやプール監視員の手配",
    ],
  },
  {
    id: "facility",
    title: "施設管理・機器メンテナンス",
    titleEn: "FACILITY & MAINTENANCE",
    summary:
      "トレーニングジム・スタジオの清掃、高額なフィットネスマシンの日・月・年次点検、プール清掃および水質管理。",
    points: [
      "トレーニングジム・スタジオの清掃",
      "高額なフィットネスマシンの日・月・年次点検",
      "プール清掃および水質管理",
    ],
  },
  {
    id: "compliance",
    title: "公的品質管理の完全一元化",
    titleEn: "REGULATORY & RISK MANAGEMENT",
    summary:
      "プール監視業務における警備業申請、保健所への定期報告書類作成や年次視察対応など、法的リスクに関わる手続きを一括して代行。",
    points: [
      "プール監視業務における警備業申請",
      "保健所への定期報告書類作成や年次視察対応",
      "法的リスクに関わる手続きの一括代行",
    ],
  },
] as const satisfies readonly Service[];
