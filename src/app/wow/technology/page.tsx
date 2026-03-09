import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "비오드의 기술 - 건강수명을 늘리는 2세대 유산균 기술",
  description:
    "엄마의 눈으로 하나하나 따진 비오드의 기술. DANISCO 17종 고기능 혼합 유산균, SP 복합 코팅 기술, 2000억 CFU 함유. 사람이 먹을 수 있는 HUMAN GRADE 등급 원료만 사용합니다.",
  keywords: [
    "비오드 기술",
    "반려동물유산균",
    "강아지유산균",
    "고양이유산균",
    "DANISCO 유산균",
    "항비만유산균",
    "AF균주유산균",
    "HUMAN GRADE 유산균",
    "프로바이오틱스",
    "SP 복합 코팅",
    "건강수명",
    "2세대 유산균",
  ],
  openGraph: {
    title: "비오드의 기술 - 건강수명을 늘리는 2세대 유산균 기술",
    description:
      "엄마의 눈으로 하나하나 따진 비오드의 기술. DANISCO 17종 고기능 혼합 유산균과 SP 복합 코팅 기술.",
    url: "https://biode.co.kr/wow/technology",
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

export default function WowTechnologyPage() {
  return (
    <div>
      <section className="img-section">
        <img src="/tecknology/m_tech_01.png" style={{ width: '100%', height: 'auto', display: 'block' }} alt="Biode Technology - 건강수명을 늘리는 놀라운 기술" />
      </section>
      <section className="img-section">
        <img src="/tecknology/m_tech_02.png" style={{ width: '100%', height: 'auto', display: 'block' }} alt="BIO+DESIGN 건강을 디자인하다 - 엄마의 눈으로 하나하나 따졌습니다" />
      </section>

      {/* 텍스트 콘텐츠 - 비오드 기술력 소개 */}
      <section className="biode-intro">
        <h1>비오드의 기술 (BIODE Technology)</h1>
        <p className="biode-intro__subtitle">건강수명을 늘리는 놀라운 기술, 엄마의 눈으로 하나하나 따졌습니다</p>
        <div className="biode-intro__grid">
          <div className="biode-intro__card">
            <h2>BIO + DESIGN, 건강을 디자인하다</h2>
            <p>비오드(BIODE)는 BIO(생명)와 DESIGN(디자인)의 합성어입니다. 성분 하나, 원료 하나까지 꼼꼼하게 챙긴 진짜 반려동물유산균을 만듭니다. 엄마의 눈으로 하나하나 따져서, 매일 먹이고 싶은 강아지유산균, 고양이유산균을 완성했습니다. 사람이 먹을 수 있는 HUMAN GRADE 등급 원료만을 사용합니다.</p>
          </div>
          <div className="biode-intro__card">
            <h2>1세대를 넘어 2세대 유산균으로</h2>
            <p>1세대 유산균이 장 건강만을 생각했다면, 비오드의 2세대 유산균은 건강수명까지 생각합니다. 기존 유산균의 평균 기대 수명 10년을 넘어, 비오드 2세대 유산균은 15년의 건강수명을 목표로 설계되었습니다. 장 건강, 면역력 강화, 체지방 관리까지 복합적으로 케어하는 차세대 솔루션입니다.</p>
          </div>
          <div className="biode-intro__card">
            <h2>SP 복합 코팅 기술</h2>
            <p>유산균은 살아서 장까지 도달해야 효과를 발휘합니다. 비오드의 SP 복합 코팅 기술은 하루 한 포의 유산균이 위산과 담즙산을 견디고 장까지 살아서 도달할 수 있도록 설계되었습니다. 실효 유산균만이 진정한 변화를 만듭니다.</p>
          </div>
        </div>
      </section>

      <section className="img-section">
        <img src="/tecknology/m_tech_03.png" style={{ width: '100%', height: 'auto', display: 'block' }} alt="2세대 유산균은 건강수명까지 생각합니다 - 1세대 10년 vs 비오드 2세대 15년" />
      </section>
      <section className="img-section">
        <img src="/tecknology/m_tech_04.png" style={{ width: '100%', height: 'auto', display: 'block' }} alt="하루 한 포 장까지 살아 도달하는 실효 유산균 비오드 - SP 복합 코팅 기술" />
      </section>
      <section className="img-section">
        <img src="/tecknology/m_tech_05.png" style={{ width: '100%', height: 'auto', display: 'block' }} alt="프리미엄 복합 유산균 2000억 함유 - HUMAN GRADE 등급 원료, DANISCO 17종 고기능 혼합 유산균" />
      </section>

      {/* 텍스트 콘텐츠 - 원료와 성분 */}
      <section className="biode-intro">
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>프리미엄 원료와 성분</h2>
        <div className="biode-intro__grid">
          <div className="biode-intro__card">
            <h3>DANISCO 17종 고기능 혼합 유산균</h3>
            <p>세계적 유산균 원료사 DANISCO의 17종 고기능 혼합 유산균을 사용합니다. 각 균주는 장내 환경 개선, 면역 기능 강화, 소화 촉진 등 특화된 기능을 가지고 있으며, 복합 배합을 통해 시너지 효과를 극대화합니다. 프리미엄 복합 유산균 2000억 CFU를 함유하여 확실한 효과를 보장합니다.</p>
          </div>
          <div className="biode-intro__card">
            <h3>검증된 유산균 복합체 IP0301</h3>
            <p>비오드가 사용하는 유산균 복합체 IP0301은 사람에게 먼저 사용되어 검증된 유산균입니다. 소아 로타바이러스 장염 개선, 대장절제술 후 회복 촉진 등 인체적용시험에서 효과가 입증되었습니다. 이 검증된 유산균을 반려동물 전용 포뮬러로 재설계하여 강아지영양제, 고양이영양제로서의 효과를 극대화했습니다.</p>
          </div>
          <div className="biode-intro__card">
            <h3>안전한 급여를 위한 품질 약속</h3>
            <p>비오드는 차세대 반려동물 수명연장 솔루션으로서, 안심하고 급여할 수 있는 품질을 약속합니다. 모든 원료는 HUMAN GRADE 등급으로 관리되며, 엄격한 품질 검사를 거칩니다. 반려견유산균, 반려묘유산균으로서 안전성과 효과를 동시에 갖춘 제품을 제공합니다.</p>
          </div>
        </div>
      </section>

      <section className="img-section">
        <img src="/tecknology/m_tech_06.png" style={{ width: '100%', height: 'auto', display: 'block' }} alt="검증된 유산균 복합체 IP0301 - 사람에게 먼저 쓰인 검증된 유산균을 반려동물 전용 포뮬러로 제공합니다" />
      </section>
      <section className="img-section">
        <img src="/tecknology/m_tech_07.png" style={{ width: '100%', height: 'auto', display: 'block' }} alt="IP0301 인체적용시험결과 - 소아 로타바이러스 장염, 대장절제술 후 회복 임상시험" />
      </section>
      <section className="img-section">
        <img src="/tecknology/m_tech_08.png" style={{ width: '100%', height: 'auto', display: 'block' }} alt="차세대 반려동물 수명연장 솔루션 BIODE - 안심하고 급여하세요! 안전한 급여를 위한 품질을 약속합니다" />
      </section>
    </div>
  );
}
