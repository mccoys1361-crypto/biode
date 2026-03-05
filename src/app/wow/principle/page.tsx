import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "비오드의 원칙 - 특별하고 유별난 판매정책",
  description:
    "비오드만의 특별한 원칙. 반려동물의 건강을 최우선으로 생각하는 유별난 판매정책과 품질 철학을 소개합니다.",
  keywords: [
    "비오드 원칙",
    "반려동물 건강",
    "판매정책",
    "품질 철학",
    "펫 유산균 원칙",
    "비오드 철학",
  ],
  openGraph: {
    title: "비오드의 원칙 - 특별하고 유별난 판매정책",
    description:
      "비오드만의 특별한 원칙. 반려동물의 건강을 최우선으로 생각하는 유별난 판매정책과 품질 철학.",
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
    </div>
  );
}
