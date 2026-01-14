import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Only 비오드 - 비오드만의 특별함",
  description:
    "비오드만의 특별함을 만나보세요. 더 오랫동안 건강한 모습의 반려동물과 함께할 수 있는 더 나은 유산균.",
  keywords: [
    "비오드",
    "Only 비오드",
    "반려동물 유산균",
    "특별한 유산균",
    "건강한 반려동물",
  ],
  openGraph: {
    title: "Only 비오드 - 비오드만의 특별함",
    description:
      "비오드만의 특별함을 만나보세요. 더 오랫동안 건강한 모습의 반려동물과 함께할 수 있는 더 나은 유산균.",
    url: "https://biode.co.kr/only",
  },
};

export default function OnlyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
