import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ONLY 비오드 - 더 오랜 시간 반려동물과 함께하는 세상",
  description:
    "비오드는 꿈꿉니다. 더 오랜 시간 반려동물과 함께할 수 있는 세상을. 완전히 새로운 2세대 유산균으로 반려동물의 건강수명을 지켜드립니다.",
  keywords: [
    "비오드",
    "BIODE",
    "반려동물유산균",
    "강아지유산균",
    "고양이유산균",
    "반려동물 건강수명",
    "펫 유산균",
    "항비만유산균",
  ],
  openGraph: {
    title: "ONLY 비오드 - 더 오랜 시간 반려동물과 함께하는 세상",
    description:
      "비오드는 꿈꿉니다. 더 오랜 시간 반려동물과 함께할 수 있는 세상을.",
    url: "https://biode.co.kr/only",
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

export default function OnlyPage() {
  return (
    <div style={{ width: '100%', backgroundColor: '#ffffff' }}>
      {/* 섹션 1 - PC/모바일 분기 (CSS 기반) */}
      <section className="img-section" style={{ width: '100%', marginBottom: 0, paddingBottom: 0 }}>
        <img
          src="/Homepage_7.png"
          className="pc"
          alt="Only 비오드 - 비오드는 꿈꿉니다. 더 오랜 시간 반려동물과 함께할 수 있는 세상을 위해"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
        <img
          src="/only_m.png"
          className="mobile"
          alt="Only 비오드 - 비오드는 꿈꿉니다. 더 오랜 시간 반려동물과 함께할 수 있는 세상을 위해"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </section>

      {/* 섹션 2 - PC/모바일 분기 */}
      <section className="img-section" style={{ width: '100%', marginBottom: 0, paddingBottom: 0 }}>
        <img
          src="/section2.png"
          className="pc"
          alt="우리는 얼마나 오랫동안 반려동물과 함께 할 수 있을까요? 당신과 반려동물에게 기술의 감동을 고스란히 느낄 수 있는 효과적인 방법에 대해 고민하고 연구합니다."
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
        <img
          src="/only_m_2.png"
          className="mobile"
          alt="우리는 얼마나 오랫동안 반려동물과 함께 할 수 있을까요?"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </section>

      {/* 텍스트 콘텐츠 섹션 - 검색엔진 색인용 */}
      <section className="biode-intro">
        <h1>ONLY, 비오드 - 오직 비오드만의 이야기</h1>
        <p className="biode-intro__subtitle">더 오랜 시간 반려동물과 함께할 수 있는 세상을 꿈꿉니다</p>
        <div className="biode-intro__grid">
          <div className="biode-intro__card">
            <h2>우리는 얼마나 오랫동안 함께할 수 있을까요?</h2>
            <p>반려동물과 함께하는 시간은 언제나 짧게 느껴집니다. 비오드는 이 소중한 시간을 조금이라도 더 늘릴 수 있도록, 당신과 반려동물에게 기술의 감동을 고스란히 느낄 수 있는 효과적인 방법에 대해 끊임없이 고민하고 연구합니다. 강아지유산균과 고양이유산균의 새로운 기준을 만들어갑니다.</p>
          </div>
          <div className="biode-intro__card">
            <h2>습관적이었던 유산균을 바꾸다</h2>
            <p>아련하게, 습관적으로, 모호했지만 편견 없이 써왔던 유산균. 비오드는 이 유산균을 더 오랫동안 건강한 모습의 반려동물과 함께할 수 있는 &ldquo;더 나은 유산균&rdquo;으로 바꿉니다. 반려동물유산균의 기준을 높이고, 과학적으로 검증된 항비만유산균과 프로바이오틱스를 제공합니다.</p>
          </div>
          <div className="biode-intro__card">
            <h2>이것이 비오드가 꿈꾸는 세상입니다</h2>
            <p>비오드 라이트핏 펫 유산균은 단순한 건강보조제가 아닙니다. 반려동물의 건강수명을 연장하고, 더 오래 함께할 수 있는 세상을 만들기 위한 비오드의 약속입니다. DEAR MY FRIENDS &mdash; 나를 위해 오래오래 곁에 머물러 줘. 이 마음을 담아 완전히 새로운 유산균을 만들었습니다.</p>
          </div>
        </div>
      </section>

      {/* 모바일 추가 이미지 섹션 */}
      <section className="img-section" style={{ width: '100%', marginBottom: 0, paddingBottom: 0 }}>
        <img
          src="/Homepage_8.png"
          className="mobile"
          alt="비오드 반려동물 유산균 - 건강수명 연장 솔루션"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </section>

      <section className="img-section" style={{ width: '100%', marginBottom: 0, paddingBottom: 0 }}>
        <img
          src="/only2_m.png"
          className="mobile"
          alt="이것이, 비오드가 꿈꾸는 세상입니다! 비오드 라이트핏 펫 유산균"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </section>

      <section className="img-section" style={{ width: '100%', marginBottom: 0, paddingBottom: 0 }}>
        <img
          src="/only3_m.png"
          className="mobile"
          alt="BIODE DEAR MY FRIENDS - 나를 위해 오래오래 곁에 머물러 줘. 완전히 새로운 유산균을 만들었습니다."
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </section>
    </div>
  );
}
