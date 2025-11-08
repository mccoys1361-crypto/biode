import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "놀라운 경험의 시작 - 비오드와 함께하는 건강한 변화",
  description:
    "반려동물과 함께하는 놀라운 경험의 시작. 비오드 라이트핏 펫 유산균으로 시작하는 건강한 변화를 만나보세요. 소중한 가족의 건강을 지켜드립니다.",
  keywords: [
    "반려동물 경험",
    "비오드 체험",
    "건강한 변화",
    "반려동물 케어",
    "유산균 체험",
    "반려동물 건강 관리",
  ],
  openGraph: {
    title: "놀라운 경험의 시작 - 비오드와 함께하는 건강한 변화",
    description:
      "반려동물과 함께하는 놀라운 경험의 시작. 비오드 라이트핏 펫 유산균으로 시작하는 건강한 변화.",
    url: "https://www.biode.com/experience",
  },
};

export default function WowExperiencePage() {
  return (
    <div>
      <section className="img-section">
        <img src="/experience/experience_01.png" className="pc" />
        <img src="/experience/m_experience_01.png" className="mobile" />
      </section>
      <section className="img-section">
        <img src="/experience/experience_02.png" className="pc" />
        <img src="/experience/m_experience_02.png" className="mobile" />
      </section>
    </div>
  );
}
