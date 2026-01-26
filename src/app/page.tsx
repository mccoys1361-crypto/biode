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
          반려동물과 더 오래, 더 건강하게 함께하고 싶은 보호자를 위한 프리미엄 펫 유산균입니다.
        </p>

        <h2>반려동물 유산균 전문 기업 비오드</h2>
        <p>
          비오드는 펫 프로바이오틱스 분야의 선두주자로서, 반려견과 반려묘를 위한
          프리미엄 유산균 제품을 연구 개발하고 있습니다. 과학적으로 검증된 균주와
          특허 기술을 바탕으로 반려동물의 건강한 삶을 지원합니다.
          엄마의 눈으로 하나하나 따져 만든 진짜 유산균, 비오드와 함께하세요.
        </p>

        <h2>비오드 라이트핏 펫 유산균의 특징</h2>
        <p>
          비오드 라이트핏 펫 유산균은 반려동물의 장 건강을 위해 특별히 설계되었습니다.
          생존력이 뛰어난 프로바이오틱스 균주를 사용하여 장까지 살아서 도달하며,
          프리바이오틱스와 함께 배합하여 유익균의 증식을 돕습니다.
          매일 급여하기 쉬운 분말 형태로, 사료나 간식에 섞어 간편하게 급여할 수 있습니다.
        </p>

        <h2>왜 비오드 유산균인가요?</h2>
        <ul>
          <li>과학적 데이터 기반 - 임상시험을 통해 효과가 검증된 균주 사용</li>
          <li>안전한 원료 - 사람이 먹을 수 있는 등급의 원료만 사용</li>
          <li>특허 기술 - 균주의 생존력을 높이는 특허 코팅 기술 적용</li>
          <li>전문가 개발 - 수의사와 영양학 전문가가 함께 개발</li>
        </ul>

        <h2>주요 제품 및 서비스</h2>
        <ul>
          <li>라이트핏 펫 유산균 - 반려동물 전용 프로바이오틱스, 장 건강의 시작</li>
          <li>강아지 유산균 - 반려견의 소화 건강과 면역력 강화를 위한 솔루션</li>
          <li>고양이 유산균 - 반려묘의 예민한 장을 위한 맞춤형 프로바이오틱스</li>
          <li>반려동물 건강식품 - 영양 보조제로 건강한 일상 지원</li>
        </ul>

        <h2>비오드의 약속</h2>
        <p>
          아련하게 습관적으로 모호했지만 편견 없이 써왔던 유산균을
          더 오랫동안 건강한 모습의 반려동물과 함께할 수 있는
          더 나은 유산균으로 바꾸는 것, 그것이 비오드의 약속입니다.
          반려동물의 건강수명 연장을 위해 비오드가 함께합니다.
        </p>

        <h2>비오드 고객 지원</h2>
        <p>
          비오드는 고객님의 소중한 반려동물을 위해 최선을 다합니다.
          제품 문의, 급여 방법, 건강 상담 등 궁금한 점이 있으시면 언제든 연락주세요.
          전화: 010-8104-7181 | 이메일: MCCOYS1361@GMAIL.COM
          상담 시간: 평일 오전 9시 ~ 오후 6시
        </p>
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
