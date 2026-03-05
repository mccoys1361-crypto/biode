import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "비오드의 효과 - 입증된 결과로 말하는 유산균",
  description:
    "비오드 라이트핏 펫 유산균의 입증된 효과. 과학적 데이터와 실험을 통해 증명된 결과만을 믿습니다. 반려동물의 건강한 변화를 경험하세요.",
  keywords: [
    "비오드 효과",
    "유산균 효과",
    "입증된 결과",
    "반려동물 건강 개선",
    "과학적 증명",
    "임상실험",
    "건강 변화",
  ],
  openGraph: {
    title: "비오드의 효과 - 입증된 결과로 말하는 유산균",
    description:
      "비오드 라이트핏 펫 유산균의 입증된 효과. 과학적 데이터와 실험을 통해 증명된 결과만을 믿습니다.",
    url: "https://biode.co.kr/wow/effect",
    images: [
      {
        url: "/biode-og.jpg",
        width: 1200,
        height: 630,
        alt: "비오드 반려동물 유산균",
      },
    ],
  },
};

export default function WowEffectPage() {
  return (
    <div>
      <section className="img-section">
        <img src="/effect/effect_01.png" style={{ width: '100%', height: 'auto', display: 'block' }} alt="The Effect of Biode - 건강수명을 늘리는 완벽한 효과" />
      </section>
      <section className="img-section">
        <img src="/effect/effect_02.png" style={{ width: '100%', height: 'auto', display: 'block' }} alt="ALL-IN-ONE 장 건강에서 체중 관리까지 한 번에 케어하는 복합 설계" />
      </section>
      <section className="img-section">
        <img src="/effect/effect_03.png" style={{ width: '100%', height: 'auto', display: 'block' }} alt="이런 유산균은 없었습니다! 유산균 하나만 잘 먹여도 수많은 걱정이 사라집니다" />
      </section>
      <section className="img-section">
        <img src="/effect/effect_04.png" style={{ width: '100%', height: 'auto', display: 'block' }} alt="항비만 기능 유산균, 락토바실러스 퍼멘텀 - MG4231 + MG4244 복합 배합으로 체지방·체종 관리에 시너지 효과" />
      </section>
      <section className="img-section">
        <img src="/effect/effect_05.png" style={{ width: '100%', height: 'auto', display: 'block' }} alt="섭취 전후 차이, 숫자가 말해주는 확실한 변화 - 체지방량 변화 및 체지방률 변화 임상 결과" />
      </section>
      <section className="img-section">
        <img src="/effect/effect_06.png" style={{ width: '100%', height: 'auto', display: 'block' }} alt="지방만 줄인 유산균, 여기에 있습니다 - 퍼멘텀 복합 균주의 항비만 작용 메커니즘" />
      </section>
      <section className="img-section">
        <img src="/effect/effect_07.png" style={{ width: '100%', height: 'auto', display: 'block' }} alt="지방 축적 억제 특허등록 완료한 복합 유산균 - 미국 특허 등록까지 완료한 기능성 유산균" />
      </section>
      <section className="img-section">
        <img src="/effect/effect_08.png" style={{ width: '100%', height: 'auto', display: 'block' }} alt="장 건강은 기본, 체중 관리까지 함께 - 체중관리에 도움을 주는 유산균 원료 함유" />
      </section>
    </div>
  );
}
