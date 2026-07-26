// PLACEHOLDER CONTENT — replace with the client's real data.
// Photos are self-contained in this module — see docs/image-credits.md for sourcing.
// They are stock photography and are not associated with the fictional clients named here.

import caseFitness from "../assets/images/case-fitness.jpg";
import caseHotel from "../assets/images/case-hotel.jpg";
import caseWellness from "../assets/images/case-wellness.jpg";

export type CaseStudy = {
  readonly id: string;
  readonly client: string;
  readonly industryLabel: string;
  readonly challenge: string;
  readonly approach: string;
  readonly result: readonly string[];
  readonly image: ImageMetadata;
  readonly imageAlt: string;
};

export const cases = [
  {
    id: "hotel",
    client: "ホテル・ヴェルダン東京",
    industryLabel: "ホテル",
    challenge:
      "客室稼働率の上昇に伴い、フロント・ベルスタッフの人手不足と新人教育の停滞が課題に。",
    approach:
      "当社スタッフを現場に常駐派遣し、OJT設計とマニュアル整備を並行して実施。",
    result: [
      "離職率 32% → 11%",
      "顧客満足度アンケート 4.6 / 5.0",
      "新人独り立ちまでの期間を平均45日短縮",
    ],
    image: caseHotel,
    imageAlt: "金色の荷物カートを押すホテルスタッフ",
  },
  {
    id: "fitness",
    client: "クラブフィット町田",
    industryLabel: "フィットネス",
    challenge:
      "トレーナーの経験差によって指導品質にばらつきがあり、退会率の増加が続いていた。",
    approach:
      "指導基準を標準化する研修プログラムを設計し、現場同行でのOJTフォローを実施。",
    result: [
      "月間退会率 4.1% → 1.8%",
      "会員継続率 12ポイント改善",
      "トレーナー定着率 91%",
    ],
    image: caseFitness,
    imageAlt: "トレーナーが会員のフォームを指導している様子",
  },
  {
    id: "wellness",
    client: "アーバンスパ&ウェルネス青山",
    industryLabel: "ウェルネス",
    challenge:
      "拠点拡大にあわせてセラピスト採用を進めたが、施術品質の均一化が追いつかなかった。",
    approach:
      "採用基準の策定から研修プログラム設計まで、開業前から一貫して支援。",
    result: [
      "新規拠点の立ち上げ期間を2ヶ月短縮",
      "顧客リピート率 68% → 82%",
      "採用充足率 100%",
    ],
    image: caseWellness,
    imageAlt: "落ち着いた雰囲気のスタジオに置かれたヨガマットとタオル",
  },
] as const satisfies readonly CaseStudy[];
