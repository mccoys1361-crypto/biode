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
      <section className="img-section seo-overlay">
        <img src="/experience/experience_01.png" className="pc" alt="Amazing Experience - 고객의 경험에서 비오드의 믿음이 시작됩니다" />
        <img src="/experience/m_experience_01.png" className="mobile" alt="놀라운 경험의 시작 - 고객의 경험에서 비오드의 믿음이 시작됩니다" />
        <div className="seo-overlay__text">
          <h1>Amazing Experience - 놀라운 경험의 시작</h1>
          <p>고객의 경험에서 비오드의 믿음이 시작됩니다.</p>
        </div>
      </section>
      <section className="img-section seo-overlay">
        <img src="/experience/experience_02.png" className="pc" alt="비오드 고객 후기 - 체중이 늘어 고민이었어요, 예민하고 약했던 아이가 점점 밝아지는 느낌이에요, 소중한 반려견에게 가장 중요한 건 건강하게 오래 사는 것" />
        <img src="/experience/m_experience_02.png" className="mobile" alt="비오드 고객 후기 - 체중이 늘어 고민이었어요, 예민하고 약했던 아이가 점점 밝아지는 느낌이에요" />
        <div className="seo-overlay__text">
          <h2>비오드 고객 후기</h2>
          <p>체중이 늘어 고민이었어요. 반려동물도 사람처럼 체중 관리가 중요하다고 해서 비오드 유산균을 시작했어요.</p>
          <p>예민하고 약했던 아이가 점점 밝아지는 느낌이에요. 장이 예민한 아이라 유산균 선택이 어려웠는데 비오드를 만나고 달라졌어요.</p>
          <p>소중한 반려견에게 가장 중요한 건 건강하게 오래 사는 것.</p>
          <p>길에서 구조한 아이, 이제는 조금씩 편안함을 찾아가요.</p>
        </div>
      </section>
    </div>
  );
}
