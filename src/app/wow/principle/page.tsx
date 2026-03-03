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
      <section className="wow-principle__section seo-overlay" style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}>
        <img
          src="/principle1_m.png"
          alt="Biode Principle - 세계 최고가 아니면 만들지 않습니다"
          style={{ width: '100%', height: 'auto', display: 'block'}}
        />
        <div className="seo-overlay__text">
          <h1>Biode Principle</h1>
          <p>세계 최고가 아니면 만들지 않습니다.</p>
          <p>반려동물을 위한, 세계 최고 수준의 유산균을 만들어보자</p>
        </div>
      </section>

      {/* Biod Principle 섹션 */}
      <section className="seo-overlay" style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}>
        <img
          src="/principle1_m_2.png"
          alt="비오드의 원칙과 철학 - 식이 보조제를 기반으로 노화 과정을 늦추는 기술을 연구하는 바이오 회사"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
        <div className="seo-overlay__text">
          <h2>비오드의 원칙과 철학</h2>
          <p>비오드의 시작은 식이 보조제를 기반으로 노화 과정을 늦추는 기술을 연구하는 바이오 회사였습니다.</p>
          <p>사람의 건강수명에 대한 수많은 연구 자료를 축적하고 있었고 자연스럽게 수명을 단축시키는 노화와 질병의 요인들에 대한 저항력을 갖추는 다양한 솔루션들을 보유하고 있었습니다.</p>
          <p>그런데... 어느 날 저희는 너무나 충격적인 현실과 마주하게 되었습니다. 사람에 비해 너무나 뒤처진 기술과 증명되지 못한 임상결과들이 반려동물 건강식 시장에 버젓이 그것도 아주 자연스럽게 소비자들의 눈을 속이고 있는 상황이었습니다.</p>
          <p>요것 봐라... 이미 보유한 아주 작은 기술만으로도 압도적으로 이길 수 있는 현실이었지만 비오드는 한 번 더 생각했습니다. 개발되고 증명된 최고의 솔루션에 반려동물에 최적화된 레시피까지 얹어 그야말로... 명실상부한 세계 최고의 반려동물 유산균 솔루션을 만들어 보자 이렇게 탄생한 유산균이</p>
        </div>
      </section>

      {/* 섹션 2 이미지 */}
      <section className="seo-overlay" style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}>
        <img
          src="/principle2_m.png"
          alt="비오드의 라이트핏 펫 유산균 - Biod Philosophy. 올바른 선택기준, 과학적인 기술, 효과를 확실하게 증명"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
        <div className="seo-overlay__text">
          <h2>바로, 비오드의 라이트핏 펫 유산균입니다!</h2>
          <h3>Biod Philosophy</h3>
          <p>1. 올바른 선택기준을 만듭니다. 비오드의 사명은 올바른 기술과 원칙을 가지고 소비자가 더 비싼 소비 판단을 할 수 있도록 소비자 스스로 좋은 결정을 내릴 수 있는 자세한 정보를 소비자들에게 끊임없이 전달하고 있습니다.</p>
          <p>2. 과학적인 기술로 접근합니다. 비오드는 누구보다 과학적 데이터에 근거한 기술과 결과만을 선택합니다. 통계학적으로 검증된 과학의 정밀에 과학이지 못하는 그 어떤 시도 및 요인 연구와 실험을 통해 증명된 결과만을 믿습니다.</p>
          <p>3. 효과를 확실하게 증명합니다. 사실이 아닌 결과나 충족되지 않는 품질로 소비자를 유인하는 행위는 결코 용납하지 않습니다.</p>
        </div>
      </section>

      {/* 판매정책 섹션 */}
      <section className="seo-overlay" style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}>
        <img
          src="/principle2_m_2.png"
          alt="비오드의 특별한·유별난 판매정책 - 구매후 1개월 환불정책, 소비자 광고비 지원정책, 찾아가는 연구정책"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
        <div className="seo-overlay__text">
          <h2>비오드의 특별한·유별난 판매정책</h2>
          <h3>01. 구매후 1개월 환불정책</h3>
          <p>비오드가 원하는 것은 여러분의 만족도입니다. 한 달 동안 급여 후 마음에 드시지 않는다면 편하게 환불 요청해 주세요. 유산균은 하루 이틀이 아닌 평생을 생각해서 먹이는 아주 중요한 건강식품이니까요.</p>
          <h3>02. 소비자 광고비 지원정책</h3>
          <p>최고의 광고는 바로 소비자분들의 진심입니다. 저희 제품을 직접 구매하신 분들께서 올려 주시는 블로그, 인스타그램, 유튜브에 관해 소정의 지원금을 드리고 있습니다.</p>
          <h3>03. 찾아가는 연구정책</h3>
          <p>비오드는 우리가 만든 제품에 대한 자부심이 아주 크답니다. 출시하기 전부터 우리는 수많은 반려동물 주인님들을 만나러 다녔습니다. 저희는 구매하신 소비자분들에게 허락을 받은 후 소정의 선물을 들고 찾아갑니다. 어떤 변화가 있는지에 대한 의견의 소양의 분변까지 주시면 된답니다.</p>
        </div>
      </section>
    </div>
  );
}
