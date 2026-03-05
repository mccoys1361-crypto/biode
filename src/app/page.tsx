import Link from "next/link";
import { OrganizationStructuredData } from "@/components/StructuredData";
import BannerSlider from "@/components/BannerSlider";
import VerticalSlider from "@/components/VerticalSlider";

interface Banner {
  id: number;
  title: string;
  description?: string;
  imageUrl: string;
}

const staticBanners: Banner[] = [
  {
    id: 1,
    title: "banner1",
    imageUrl: "/banner-news/1762569966294_qm99lc4dz2m.png",
  },
  {
    id: 2,
    title: "banner2",
    imageUrl: "/banner-news/1762569988785_hmhad09c2sm.png",
  },
  {
    id: 3,
    title: "banner3",
    imageUrl: "/banner3.png",
  },
];

export default function BIODEHomePage() {
  return (
    <div className="biode-home" style={{ backgroundColor: '#ffffff' }}>
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
            <p>세계 최고가 아니면 만들지 않습니다. 비오드는 반려동물을 위한 세계 최고 수준의 유산균을 만들겠다는 원칙에서 시작했습니다. 사람이 먹을 수 있는 HUMAN GRADE 등급 원료만을 사용하며, 성분 하나하나까지 꼼꼼하게 설계합니다.</p>
          </div>
          <div className="biode-intro__card">
            <h2>가장 앞선 기술</h2>
            <p>건강수명까지 생각한 비오드 바이오 테크놀러지. 1세대 유산균이 장 건강만을 생각했다면, 비오드의 2세대 유산균은 건강수명까지 생각합니다. DANISCO 17종 고기능 혼합 유산균과 특허 항비만 균주를 복합 배합한 프리미엄 솔루션입니다.</p>
          </div>
          <div className="biode-intro__card">
            <h2>증명을 해내다</h2>
            <p>숫자가 말해주는 확실한 변화. 비오드 라이트핏 펫 유산균은 과학적 임상 데이터로 효과를 증명합니다. 체지방 감소, 면역력 강화, 장 건강 개선 — 하루 한 포로 반려동물의 건강한 삶을 지켜드립니다.</p>
          </div>
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
    </div>
  );
}
