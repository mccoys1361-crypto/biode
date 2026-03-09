import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "비오드의 효과 - 과학적 임상 데이터로 입증된 유산균",
  description:
    "비오드 라이트핏 펫 유산균의 입증된 효과. 장 건강 개선, 체중 관리, 면역력 강화까지 ALL-IN-ONE 복합 설계. 항비만 기능 유산균 락토바실러스 퍼멘텀 특허 균주로 체지방 감소 효과를 임상으로 증명했습니다.",
  keywords: [
    "비오드 효과",
    "반려동물유산균",
    "강아지유산균",
    "고양이유산균",
    "항비만유산균",
    "다이어트강아지유산균",
    "다이어트고양이유산균",
    "AF균주유산균",
    "체지방 감소 유산균",
    "락토바실러스 퍼멘텀",
    "반려동물 체중관리",
    "장 건강 유산균",
  ],
  openGraph: {
    title: "비오드의 효과 - 과학적 임상 데이터로 입증된 유산균",
    description:
      "장 건강 개선, 체중 관리, 면역력 강화까지 ALL-IN-ONE 복합 설계. 임상 데이터로 입증된 효과.",
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

      {/* 텍스트 콘텐츠 - 비오드 효과 소개 */}
      <section className="biode-intro">
        <h1>비오드의 효과 (The Effect of BIODE)</h1>
        <p className="biode-intro__subtitle">건강수명을 늘리는 완벽한 효과, 숫자가 말해주는 확실한 변화</p>
        <div className="biode-intro__grid">
          <div className="biode-intro__card">
            <h2>ALL-IN-ONE 복합 설계</h2>
            <p>장 건강에서 체중 관리까지 한 번에 케어하는 복합 설계. 비오드 라이트핏 펫 유산균은 장 건강 개선, 면역력 강화, 체지방 감소까지 하나의 제품으로 해결합니다. 강아지유산균과 고양이유산균의 새로운 기준, 이런 반려동물유산균은 없었습니다. 유산균 하나만 잘 먹여도 수많은 걱정이 사라집니다.</p>
          </div>
          <div className="biode-intro__card">
            <h2>항비만 기능 유산균</h2>
            <p>비오드에 함유된 락토바실러스 퍼멘텀(Lactobacillus fermentum)은 특허받은 항비만 기능 유산균입니다. MG4231과 MG4244 복합 배합으로 체지방과 체중 관리에 시너지 효과를 발휘합니다. 다이어트강아지유산균, 다이어트고양이유산균으로서 과학적으로 입증된 체중 관리 솔루션을 제공합니다.</p>
          </div>
          <div className="biode-intro__card">
            <h2>숫자가 말해주는 확실한 변화</h2>
            <p>비오드의 효과는 과학적 임상 데이터로 증명됩니다. 섭취 전후 체지방량 변화 및 체지방률 변화를 임상 시험을 통해 확인했습니다. 막연한 기대가 아닌, 데이터로 말하고 결과로 증명하는 항비만유산균입니다. AF균주유산균의 효과를 직접 확인해 보세요.</p>
          </div>
        </div>
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

      {/* 텍스트 콘텐츠 - 특허 기술과 효과 상세 */}
      <section className="biode-intro">
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>특허 등록 완료한 기능성 유산균</h2>
        <div className="biode-intro__grid">
          <div className="biode-intro__card">
            <h3>지방만 줄인 유산균</h3>
            <p>비오드의 퍼멘텀 복합 균주는 지방 축적을 억제하는 항비만 작용 메커니즘을 가지고 있습니다. 근육량은 유지하면서 체지방만 선택적으로 감소시키는 과학적 설계입니다. 반려동물의 건강한 체중 관리를 원하시는 분들께 다이어트강아지유산균, 다이어트고양이유산균으로 추천드립니다.</p>
          </div>
          <div className="biode-intro__card">
            <h3>미국 특허 등록 완료</h3>
            <p>비오드에 사용된 지방 축적 억제 복합 유산균은 미국 특허 등록까지 완료한 기능성 유산균입니다. 국제적으로 인정받은 기술력을 바탕으로, 반려동물의 건강한 삶을 과학적으로 지원합니다. 강아지영양제, 고양이영양제로서 최고 수준의 품질을 자랑합니다.</p>
          </div>
          <div className="biode-intro__card">
            <h3>장 건강은 기본, 체중 관리까지</h3>
            <p>비오드 라이트핏 펫 유산균은 장 건강 개선을 기본으로, 체중 관리에 도움을 주는 유산균 원료를 함유하고 있습니다. 반려견유산균과 반려묘유산균으로서 장내 유익균 증식, 유해균 억제, 면역 기능 강화, 체지방 감소까지 종합적인 건강 관리가 가능합니다.</p>
          </div>
        </div>
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
