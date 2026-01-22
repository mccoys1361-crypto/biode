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
      {/* SEO: 검색엔진용 숨겨진 콘텐츠 - 서버에서 렌더링됨 */}
      <div className="sr-only">
        <h1>비오드(BIODE) - 세계 최고 수준의 반려동물 유산균</h1>
        <p>
          비오드(BIODE)는 과학적 데이터에 근거한 세계 최고 수준의 반려동물 유산균 솔루션을 제공합니다.
          라이트핏 펫 유산균으로 강아지, 고양이 등 반려동물의 장 건강과 면역력 강화를 도와드립니다.
        </p>
        <h2>반려동물 유산균 전문 기업</h2>
        <p>
          비오드는 펫 프로바이오틱스 분야의 선두주자로서, 반려견과 반려묘를 위한
          프리미엄 유산균 제품을 연구 개발하고 있습니다. 과학적으로 검증된 균주와
          특허 기술을 바탕으로 반려동물의 건강한 삶을 지원합니다.
        </p>
        <h2>주요 제품 및 서비스</h2>
        <ul>
          <li>라이트핏 펫 유산균 - 반려동물 전용 프로바이오틱스</li>
          <li>강아지 유산균 - 반려견 장 건강 솔루션</li>
          <li>고양이 유산균 - 반려묘 면역력 강화</li>
          <li>반려동물 건강식품 - 영양 보조제</li>
        </ul>
      </div>

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
          alt="비오드 라이트핏 펫 유산균 - 반려동물 장 건강 솔루션"
          className="biode-banner-pc__img"
        />
      </section>

      {/* 배너 하단 이미지 - 모바일 전용 */}
      <section className="biode-banner-mobile">
        <img
          src="/banner_after.png"
          alt="비오드 반려동물 유산균 - 강아지 고양이 프로바이오틱스"
          className="biode-banner-mobile__img"
        />
      </section>

      {/* 세로 슬라이더 섹션 - 클라이언트 컴포넌트 */}
      <VerticalSlider />

      {/* 비오드가 처음이시라구요 */}
      <section className="biode-first-time" style={{marginBottom: 0, paddingBottom: 0, minHeight: '36vh'}}>
        <div className="biode-first-time__container" style={{minHeight: '29vh'}}>
          <div className="biode-first-time__image-wrapper" style={{marginTop: 0}}>
            <Link href="/experience">
              <img src="/first.png" alt="비오드가 처음이신가요? 반려동물 유산균 체험하기" className="biode-first-time__image" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
