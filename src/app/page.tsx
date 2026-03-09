import Link from "next/link";
import { OrganizationStructuredData, FAQStructuredData, WebSiteStructuredData } from "@/components/StructuredData";
import BannerSlider from "@/components/BannerSlider";
import VerticalSlider from "@/components/VerticalSlider";

interface Banner {
  id: number;
  title: string;
  description?: string;
  imageUrl: string;
}

const faqItems = [
  {
    question: "비오드 유산균은 강아지와 고양이 모두 급여할 수 있나요?",
    answer: "네, 비오드 라이트핏 펫 유산균은 강아지와 고양이 모두를 위해 설계된 프로바이오틱스 제품입니다. 반려동물의 종류에 관계없이 안전하게 급여하실 수 있습니다.",
  },
  {
    question: "비오드 유산균은 하루에 얼마나 급여하나요?",
    answer: "하루 한 포를 권장합니다. 사료나 간식에 섞어 급여하시면 됩니다. 반려동물의 체중이나 건강 상태에 따라 조절이 가능하며, 자세한 급여 방법은 제품 패키지를 참고해 주세요.",
  },
  {
    question: "비오드 유산균의 원료는 안전한가요?",
    answer: "비오드는 사람이 먹을 수 있는 HUMAN GRADE 등급의 원료만을 사용합니다. 세계적 원료사 DANISCO의 17종 고기능 혼합 유산균과 특허받은 항비만 균주를 사용하며, 모든 성분을 엄격하게 관리합니다.",
  },
  {
    question: "비오드 유산균은 어떤 효과가 있나요?",
    answer: "비오드 라이트핏 펫 유산균은 과학적 임상 데이터로 효과를 증명한 제품입니다. 장 건강 개선, 면역력 강화, 체지방 감소에 도움을 줄 수 있으며, 반려동물의 전반적인 건강수명 증진을 목표로 설계되었습니다.",
  },
  {
    question: "비오드 제품은 어디서 구매할 수 있나요?",
    answer: "비오드 공식 홈페이지에서 구매하실 수 있으며, 제품 관련 문의는 문의하기 페이지를 통해 연락해 주시면 친절히 안내드리겠습니다.",
  },
];

const staticBanners: Banner[] = [
  {
    id: 1,
    title: "비오드 라이트핏 펫 유산균 - 반려동물 프리미엄 프로바이오틱스",
    imageUrl: "/banner-news/1762569966294_qm99lc4dz2m.png",
  },
  {
    id: 2,
    title: "비오드 유산균 - 과학적 데이터 기반 반려동물 건강 솔루션",
    imageUrl: "/banner-news/1762569988785_hmhad09c2sm.png",
  },
  {
    id: 3,
    title: "비오드 BIODE - 세계 최고 수준의 반려동물 유산균 브랜드",
    imageUrl: "/banner3.png",
  },
];

export default function BIODEHomePage() {
  return (
    <div className="biode-home" style={{ backgroundColor: '#ffffff' }}>
      <WebSiteStructuredData
        data={{
          name: "비오드(BIODE)",
          url: "https://biode.co.kr",
          description: "과학적 데이터 기반 프리미엄 반려동물 유산균. 비오드 라이트핏으로 반려동물 건강을 지켜드립니다.",
        }}
      />
      <OrganizationStructuredData
        data={{
          name: "비오드(BIODE)",
          url: "https://biode.co.kr",
          description:
            "비오드(BIODE)는 과학적 데이터에 근거한 세계 최고 수준의 반려동물 유산균 솔루션을 제공합니다. 라이트핏 펫 유산균으로 반려동물의 건강한 삶을 지켜드립니다.",
          logo: "https://biode.co.kr/logo.png",
          address: {
            streetAddress: "소하로 190 G타워 1217",
            addressLocality: "광명시",
            addressRegion: "경기도",
            postalCode: "",
            addressCountry: "KR",
          },
          contactPoint: {
            telephone: "+82-10-8104-7181",
            contactType: "customer service",
          },
        }}
      />

      {/* 배너 섹션 - 클라이언트 컴포넌트 */}
      <BannerSlider banners={staticBanners} />

      {/* 배너 하단 이미지 - PC 전용 */}
      <section className="biode-banner-pc">
        <img
          src="/20250915_BOID_Homepage_1.png"
          alt="비오드 유산균 이야기 - BIODE Lactic Acid Bacteria Story. 원칙을 세우다, 가장 앞선 기술, 증명을 해내다"
          className="biode-banner-pc__img"
        />
      </section>

      {/* 배너 하단 이미지 - 모바일 전용 */}
      <section className="biode-banner-mobile">
        <img
          src="/banner_after.png"
          alt="비오드 유산균 이야기 - BIODE Lactic Acid Bacteria Story"
          className="biode-banner-mobile__img"
        />
      </section>

      {/* 메인 텍스트 콘텐츠 - 검색엔진이 읽을 수 있는 실제 콘텐츠 */}
      <section className="biode-intro">
        <h1>비오드 유산균 이야기</h1>
        <p className="biode-intro__subtitle">BIODE Lactic Acid Bacteria Story</p>
        <div className="biode-intro__grid">
          <div className="biode-intro__card">
            <h2>원칙을 세우다</h2>
            <p>세계 최고가 아니면 만들지 않습니다. 비오드는 반려동물을 위한 세계 최고 수준의 유산균을 만들겠다는 원칙에서 시작했습니다. 사람이 먹을 수 있는 HUMAN GRADE 등급 원료만을 사용하며, 성분 하나하나까지 꼼꼼하게 설계합니다. 엄마의 눈으로 하나하나 따져, 우리 아이에게 먹일 수 있는 안전한 제품만을 만듭니다.</p>
          </div>
          <div className="biode-intro__card">
            <h2>가장 앞선 기술</h2>
            <p>건강수명까지 생각한 비오드 바이오 테크놀러지. 1세대 유산균이 장 건강만을 생각했다면, 비오드의 2세대 유산균은 건강수명까지 생각합니다. 세계적 원료사 DANISCO의 17종 고기능 혼합 유산균과 특허받은 항비만 균주를 복합 배합한 프리미엄 솔루션으로, 과학적 설계로 반려동물의 건강한 내일을 준비합니다.</p>
          </div>
          <div className="biode-intro__card">
            <h2>증명을 해내다</h2>
            <p>숫자가 말해주는 확실한 변화. 비오드 라이트핏 펫 유산균은 과학적 임상 데이터로 효과를 증명합니다. 체지방 감소, 면역력 강화, 장 건강 개선까지 — 하루 한 포로 반려동물의 건강한 삶을 지켜드립니다. 비오드는 데이터로 말하고, 결과로 증명합니다.</p>
          </div>
        </div>
      </section>

      {/* 비오드 브랜드 소개 - SEO 텍스트 콘텐츠 */}
      <section className="biode-intro" style={{ paddingTop: 0 }}>
        <div className="biode-intro__card" style={{ textAlign: 'center', background: 'transparent', border: 'none' }}>
          <h2>비오드(BIODE)란?</h2>
          <p>비오드(BIODE)는 BIO(생명)와 DESIGN(디자인)의 합성어로, &quot;건강을 디자인하다&quot;라는 철학을 담고 있습니다. 반려동물의 건강한 삶을 과학적으로 설계하는 프리미엄 펫 헬스케어 브랜드입니다. 라이트핏 펫 유산균은 강아지와 고양이 모두를 위한 프로바이오틱스 제품으로, 장 건강과 면역력 증진에 도움을 줍니다. 비오드는 반려동물과 함께하는 더 건강하고 행복한 삶을 위해 끊임없이 연구하고 있습니다.</p>
        </div>
      </section>

      {/* 세로 슬라이더 섹션 - 클라이언트 컴포넌트 */}
      <VerticalSlider />

      {/* 비오드가 처음이시라구요 */}
      <section className="biode-first-time" style={{marginBottom: 0, paddingBottom: 0, minHeight: '36vh'}}>
        <div className="biode-first-time__container" style={{minHeight: '29vh'}}>
          <div className="biode-first-time__image-wrapper" style={{marginTop: 0}}>
            <Link href="/experience">
              <img src="/first.png" alt="비오드가 처음이시라구요? 그렇다면 먼저 경험한 분들의 이야기와 만나보세요!" className="biode-first-time__image" />
            </Link>
          </div>
        </div>
        <div className="biode-first-time__cta">
          <h2>비오드가 처음이시라구요?</h2>
          <p>그렇다면 먼저, <Link href="/experience">경험한 분들의 이야기</Link>와 만나보세요!</p>
        </div>
      </section>

      {/* FAQ 섹션 - 검색엔진 색인 개선 */}
      <FAQStructuredData items={faqItems} />
      <section className="biode-faq">
        <h2 className="biode-faq__title">자주 묻는 질문</h2>
        <dl className="biode-faq__list">
          {faqItems.map((item, index) => (
            <div key={index} className="biode-faq__item">
              <dt className="biode-faq__question">{item.question}</dt>
              <dd className="biode-faq__answer">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
