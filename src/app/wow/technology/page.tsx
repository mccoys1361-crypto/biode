import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "비오드의 기술 - 건강수명을 늘리는 놀라운 기술",
  description:
    "엄마의 눈으로 하나하나 따진 비오드의 기술. 성분 하나, 원료 하나까지 꼼꼼하게 챙긴 진짜 유산균. 매일 먹고 싶은 반려동물 유산균을 만들었습니다.",
  keywords: [
    "비오드 기술",
    "반려동물 유산균 성분",
    "안전한 유산균",
    "꼼꼼한 제조",
    "건강수명",
    "진짜 유산균",
    "반려동물 영양소",
  ],
  openGraph: {
    title: "비오드의 기술 - 건강수명을 늘리는 놀라운 기술",
    description:
      "엄마의 눈으로 하나하나 따진 비오드의 기술. 성분 하나, 원료 하나까지 꼼꼼하게 챙긴 진짜 유산균.",
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
      <section className="img-section">
        <img src="/tecknology/m_tech_03.png" style={{ width: '100%', height: 'auto', display: 'block' }} alt="2세대 유산균은 건강수명까지 생각합니다 - 1세대 10년 vs 비오드 2세대 15년" />
      </section>
      <section className="img-section">
        <img src="/tecknology/m_tech_04.png" style={{ width: '100%', height: 'auto', display: 'block' }} alt="하루 한 포 장까지 살아 도달하는 실효 유산균 비오드 - SP 복합 코팅 기술" />
      </section>
      <section className="img-section">
        <img src="/tecknology/m_tech_05.png" style={{ width: '100%', height: 'auto', display: 'block' }} alt="프리미엄 복합 유산균 2000억 함유 - HUMAN GRADE 등급 원료, DANISCO 17종 고기능 혼합 유산균" />
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
