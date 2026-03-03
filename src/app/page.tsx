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
      <section className="biode-banner-pc seo-overlay">
        <img
          src="/20250915_BOID_Homepage_1.png"
          alt="비오드 유산균 이야기 - BIODE Lactic Acid Bacteria Story. 원칙을 세우다, 가장 앞선 기술, 증명을 해내다"
          className="biode-banner-pc__img"
        />
        <div className="seo-overlay__text">
          <h1>비오드 유산균 이야기</h1>
          <p>BIODE Lactic Acid Bacteria Story</p>
          <h2>세계 최고가 아니면 만들지 않습니다. 원칙을 세우다</h2>
          <h2>건강수명까지 생각한 비오드 바이오 테크널러지. 가장 앞선 기술</h2>
          <h2>숫자가 말해주는 확실한 변화. 증명을 해내다</h2>
        </div>
      </section>

      {/* 배너 하단 이미지 - 모바일 전용 */}
      <section className="biode-banner-mobile seo-overlay">
        <img
          src="/banner_after.png"
          alt="비오드 유산균 이야기 - BIODE Lactic Acid Bacteria Story"
          className="biode-banner-mobile__img"
        />
        <div className="seo-overlay__text">
          <h1>비오드 유산균 이야기</h1>
          <p>BIODE Lactic Acid Bacteria Story</p>
        </div>
      </section>

      {/* 세로 슬라이더 섹션 - 클라이언트 컴포넌트 */}
      <VerticalSlider />

      {/* 비오드가 처음이시라구요 */}
      <section className="biode-first-time seo-overlay" style={{marginBottom: 0, paddingBottom: 0, minHeight: '36vh'}}>
        <div className="biode-first-time__container" style={{minHeight: '29vh'}}>
          <div className="biode-first-time__image-wrapper" style={{marginTop: 0}}>
            <Link href="/experience">
              <img src="/first.png" alt="비오드가 처음이시라구요? 그렇다면 먼저 경험한 분들의 이야기와 만나보세요!" className="biode-first-time__image" />
            </Link>
          </div>
        </div>
        <div className="seo-overlay__text">
          <h2>비오드가 처음이시라구요?</h2>
          <p>그렇다면 먼저, 경험한 분들의 이야기와 만나보세요!</p>
        </div>
      </section>
    </div>
  );
}
