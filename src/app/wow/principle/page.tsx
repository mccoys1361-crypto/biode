import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "비오드의 원칙 - 세계 최고가 아니면 만들지 않습니다",
  description:
    "비오드만의 특별한 원칙. 세계 최고가 아니면 만들지 않는다는 철학으로, 올바른 선택기준과 과학적 기술, 확실한 효과 증명을 약속합니다. 구매 후 1개월 환불정책, 소비자 광고비 지원정책을 운영합니다.",
  keywords: [
    "비오드 원칙",
    "비오드 철학",
    "반려동물유산균",
    "강아지유산균",
    "고양이유산균",
    "펫 유산균 품질",
    "HUMAN GRADE 유산균",
    "반려동물 건강",
    "항비만유산균",
  ],
  openGraph: {
    title: "비오드의 원칙 - 세계 최고가 아니면 만들지 않습니다",
    description:
      "비오드만의 특별한 원칙. 올바른 선택기준과 과학적 기술, 확실한 효과 증명을 약속합니다.",
    url: "https://biode.co.kr/wow/principle",
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

export default function WowPrinciplePage() {
  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      {/* 상단 이미지 섹션 */}
      <section className="wow-principle__section" style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}>
        <img
          src="/principle1_m.png"
          alt="Biode Principle - 세계 최고가 아니면 만들지 않습니다"
          style={{ width: '100%', height: 'auto', display: 'block'}}
        />
      </section>

      {/* Biod Principle 섹션 */}
      <section style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}>
        <img
          src="/principle1_m_2.png"
          alt="비오드의 원칙과 철학 - 식이 보조제를 기반으로 노화 과정을 늦추는 기술을 연구하는 바이오 회사"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </section>

      {/* 텍스트 콘텐츠 - 비오드의 원칙과 철학 */}
      <section className="biode-intro">
        <h1>비오드의 원칙 (BIODE Principle)</h1>
        <p className="biode-intro__subtitle">세계 최고가 아니면 만들지 않습니다</p>
        <div className="biode-intro__grid">
          <div className="biode-intro__card">
            <h2>비오드는 어떤 회사인가요?</h2>
            <p>비오드(BIODE)는 BIO(생명)와 DESIGN(디자인)의 합성어로, &ldquo;건강을 디자인하다&rdquo;라는 철학을 담은 바이오 기업입니다. 식이 보조제를 기반으로 노화 과정을 늦추는 기술을 연구하며, 반려동물의 건강수명 연장을 목표로 합니다. 사람이 먹을 수 있는 HUMAN GRADE 등급의 원료만을 사용하여 강아지유산균과 고양이유산균을 제조합니다.</p>
          </div>
          <div className="biode-intro__card">
            <h2>올바른 선택기준</h2>
            <p>반려동물유산균을 선택할 때 가장 중요한 것은 원료의 안전성과 품질입니다. 비오드는 세계적 원료사 DANISCO의 17종 고기능 혼합 유산균을 사용하며, 특허받은 항비만 균주를 복합 배합합니다. 성분 하나하나까지 엄마의 눈으로 꼼꼼하게 따져, 우리 아이에게 먹일 수 있는 안전한 제품만을 만듭니다.</p>
          </div>
          <div className="biode-intro__card">
            <h2>과학적인 기술</h2>
            <p>비오드의 기술력은 과학적 데이터에 근거합니다. 1세대 유산균이 장 건강만을 목표로 했다면, 비오드의 2세대 유산균은 장 건강은 물론 면역력 강화, 체지방 감소, 건강수명 연장까지 고려한 복합 설계입니다. AF균주유산균과 특허 균주를 활용한 차세대 반려동물 건강 솔루션을 제공합니다.</p>
          </div>
        </div>
      </section>

      {/* 섹션 2 이미지 */}
      <section style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}>
        <img
          src="/principle2_m.png"
          alt="비오드의 라이트핏 펫 유산균 - Biod Philosophy. 올바른 선택기준, 과학적인 기술, 효과를 확실하게 증명"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </section>

      {/* 판매정책 섹션 */}
      <section style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}>
        <img
          src="/principle2_m_2.png"
          alt="비오드의 특별한·유별난 판매정책 - 구매후 1개월 환불정책, 소비자 광고비 지원정책, 찾아가는 연구정책"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </section>

      {/* 텍스트 콘텐츠 - 판매정책 */}
      <section className="biode-intro">
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>비오드의 특별하고 유별난 판매정책</h2>
        <div className="biode-intro__grid">
          <div className="biode-intro__card">
            <h3>구매 후 1개월 환불정책</h3>
            <p>비오드는 제품에 대한 확신이 있습니다. 구매 후 1개월 이내에 만족하지 못하시면 환불해 드립니다. 반려동물유산균의 효과를 직접 경험해보시고, 변화를 느끼지 못하시면 언제든 연락해 주세요. 고객님의 신뢰가 비오드의 가장 큰 자산입니다.</p>
          </div>
          <div className="biode-intro__card">
            <h3>소비자 광고비 지원정책</h3>
            <p>비오드는 과도한 광고비 대신 고객에게 그 비용을 돌려드립니다. 좋은 제품은 광고가 아닌 품질로 말해야 한다고 믿기 때문입니다. 강아지유산균, 고양이유산균을 찾는 반려인들에게 합리적인 가격으로 최고 품질의 제품을 제공합니다.</p>
          </div>
          <div className="biode-intro__card">
            <h3>찾아가는 연구정책</h3>
            <p>비오드는 고객의 목소리에 귀 기울입니다. 반려동물의 건강 상태와 변화를 지속적으로 추적하고, 그 데이터를 바탕으로 제품을 개선합니다. 현장의 경험이 곧 연구의 출발점이며, 고객과 함께 성장하는 브랜드가 되겠습니다.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
