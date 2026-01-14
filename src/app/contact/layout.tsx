import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "문의하기 - 비오드",
  description:
    "비오드에 문의하세요. 반려동물 유산균에 관한 궁금한 점이나 제품 문의를 친절하게 안내해 드립니다.",
  keywords: [
    "비오드 문의",
    "문의하기",
    "고객센터",
    "반려동물 유산균 문의",
    "제품 상담",
  ],
  openGraph: {
    title: "문의하기 - 비오드",
    description:
      "비오드에 문의하세요. 반려동물 유산균에 관한 궁금한 점이나 제품 문의를 친절하게 안내해 드립니다.",
    url: "https://biode.co.kr/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
