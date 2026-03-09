import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "놀라운 경험의 시작 - 비오드 고객 후기와 실제 변화",
  description:
    "비오드 라이트핏 펫 유산균을 경험한 고객들의 실제 후기. 체중 관리, 장 건강 개선, 활력 증가까지. 반려동물과 함께하는 놀라운 변화를 만나보세요.",
  keywords: [
    "비오드 후기",
    "반려동물유산균 후기",
    "강아지유산균 효과",
    "고양이유산균 효과",
    "비오드 체험",
    "반려동물 건강 변화",
    "펫 유산균 후기",
    "다이어트강아지유산균",
    "항비만유산균 후기",
  ],
  openGraph: {
    title: "놀라운 경험의 시작 - 비오드 고객 후기와 실제 변화",
    description:
      "비오드 라이트핏 펫 유산균을 경험한 고객들의 실제 후기. 반려동물과 함께하는 놀라운 변화.",
    url: "https://biode.co.kr/experience",
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

export default function WowExperiencePage() {
  return (
    <div>
      <section className="img-section">
        <img src="/experience/experience_01.png" className="pc" alt="Amazing Experience - 고객의 경험에서 비오드의 믿음이 시작됩니다" />
        <img src="/experience/m_experience_01.png" className="mobile" alt="놀라운 경험의 시작 - 고객의 경험에서 비오드의 믿음이 시작됩니다" />
      </section>

      {/* 텍스트 콘텐츠 - 경험 소개 */}
      <section className="biode-intro">
        <h1>놀라운 경험의 시작 (Amazing Experience)</h1>
        <p className="biode-intro__subtitle">고객의 경험에서 비오드의 믿음이 시작됩니다</p>
        <div className="biode-intro__grid">
          <div className="biode-intro__card">
            <h2>체중 관리에 대한 고민</h2>
            <p>&ldquo;체중이 늘어 고민이었어요.&rdquo; 많은 반려인들이 공감하는 이야기입니다. 비오드 라이트핏 펫 유산균의 항비만유산균 성분은 반려동물의 건강한 체중 관리를 도와줍니다. 다이어트강아지유산균, 다이어트고양이유산균으로서 체지방 감소에 도움을 주는 락토바실러스 퍼멘텀 특허 균주가 함유되어 있습니다.</p>
          </div>
          <div className="biode-intro__card">
            <h2>예민했던 아이의 변화</h2>
            <p>&ldquo;예민하고 약했던 아이가 점점 밝아지는 느낌이에요.&rdquo; 비오드 강아지유산균과 고양이유산균은 장 건강 개선을 통해 반려동물의 전반적인 컨디션을 향상시킵니다. 장내 유익균이 늘어나면 소화가 편안해지고, 면역력이 강화되어 활력이 생깁니다.</p>
          </div>
          <div className="biode-intro__card">
            <h2>건강하게 오래 사는 것</h2>
            <p>&ldquo;소중한 반려견에게 가장 중요한 건 건강하게 오래 사는 것.&rdquo; 비오드가 추구하는 가치와 같은 마음입니다. 반려동물유산균 비오드 라이트핏은 장 건강, 면역력, 체중 관리를 한 번에 케어하여 반려동물의 건강수명 연장에 도움을 줍니다. 반려견유산균, 반려묘유산균의 새로운 기준입니다.</p>
          </div>
        </div>
      </section>

      <section className="img-section">
        <img src="/experience/experience_02.png" className="pc" alt="비오드 고객 후기 - 체중이 늘어 고민이었어요, 예민하고 약했던 아이가 점점 밝아지는 느낌이에요, 소중한 반려견에게 가장 중요한 건 건강하게 오래 사는 것" />
        <img src="/experience/m_experience_02.png" className="mobile" alt="비오드 고객 후기 - 체중이 늘어 고민이었어요, 예민하고 약했던 아이가 점점 밝아지는 느낌이에요" />
      </section>

      {/* 추가 텍스트 콘텐츠 - 비오드를 선택해야 하는 이유 */}
      <section className="biode-intro" style={{ paddingTop: 0 }}>
        <div className="biode-intro__card" style={{ textAlign: 'center', background: 'transparent', border: 'none' }}>
          <h2>비오드를 선택한 반려인들의 공통된 이유</h2>
          <p>비오드를 선택한 고객들은 한결같이 말합니다. &ldquo;성분이 안전해서&rdquo;, &ldquo;HUMAN GRADE 등급이라서&rdquo;, &ldquo;과학적으로 검증된 효과가 있어서&rdquo;. 강아지영양제와 고양이영양제를 고를 때 가장 중요한 것은 안전성과 효과입니다. 비오드는 세계적 원료사 DANISCO의 17종 고기능 혼합 유산균과 특허받은 항비만 균주를 사용하며, 모든 원료를 HUMAN GRADE 등급으로 관리합니다. 반려동물의 건강한 변화, 비오드와 함께 시작해 보세요.</p>
        </div>
      </section>
    </div>
  );
}
