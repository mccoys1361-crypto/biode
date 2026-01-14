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
  },
};

export default function WowTechnologyPage() {
  return (
    <div>
      <section className="img-section">
        <img src="/tecknology/m_tech_01.png" style={{ width: '100%', height: 'auto', display: 'block' }} alt="비오드의 기술 1" />
      </section>
      <section className="img-section">
        <img src="/tecknology/m_tech_02.png" style={{ width: '100%', height: 'auto', display: 'block' }} alt="비오드의 기술 2" />
      </section>
      <section className="img-section">
        <img src="/tecknology/m_tech_03.png" style={{ width: '100%', height: 'auto', display: 'block' }} alt="비오드의 기술 3" />
      </section>
      <section className="img-section">
        <img src="/tecknology/m_tech_04.png" style={{ width: '100%', height: 'auto', display: 'block' }} alt="비오드의 기술 4" />
      </section>
      <section className="img-section">
        <img src="/tecknology/m_tech_05.png" style={{ width: '100%', height: 'auto', display: 'block' }} alt="비오드의 기술 5" />
      </section>
      <section className="img-section">
        <img src="/tecknology/m_tech_06.png" style={{ width: '100%', height: 'auto', display: 'block' }} alt="비오드의 기술 6" />
      </section>
      <section className="img-section">
        <img src="/tecknology/m_tech_07.png" style={{ width: '100%', height: 'auto', display: 'block' }} alt="비오드의 기술 7" />
      </section>
      <section className="img-section">
        <img src="/tecknology/m_tech_08.png" style={{ width: '100%', height: 'auto', display: 'block' }} alt="비오드의 기술 8" />
      </section>
    </div>
  );
}
