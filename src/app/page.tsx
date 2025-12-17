"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { OrganizationStructuredData } from "@/components/StructuredData";

// CSS 애니메이션을 위한 스타일
const animationStyles = `
  @keyframes pulse-delay-2 {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }
  @keyframes pulse-delay-4 {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  .animation-delay-4000 {
    animation-delay: 4s;
  }
`;

interface Banner {
  id: number;
  title: string;
  description?: string;
  imageUrl: string;
}

// 정적 배너 데이터
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
  const firstSliderImageRef = useRef<HTMLImageElement | null>(null);
  const [verticalSliderHeightPx, setVerticalSliderHeightPx] = useState<number | null>(null);
  const sliderSectionRef = useRef<HTMLElement | null>(null);
  const lastScrollYRef = useRef<number>(0);
  const [sliderSnapDone, setSliderSnapDone] = useState<boolean>(false);
  const [banners] = useState<Banner[]>(staticBanners);
  const [currentBannerIndex, setCurrentBannerIndex] = useState<number>(0);
  const [currentVerticalSlideIndex, setCurrentVerticalSlideIndex] = useState<number>(0);

  useEffect(() => {
    // CSS 스타일 주입
    const style = document.createElement("style");
    style.textContent = animationStyles;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // 세로 슬라이더: 자동 슬라이드 (6초마다)
  useEffect(() => {
    const pattern = [0, 1, 2, 1];
    let patternIndex = 0;

    const autoSlideInterval = setInterval(() => {
      patternIndex = (patternIndex + 1) % pattern.length;
      const next = pattern[patternIndex];
      setCurrentVerticalSlideIndex(next);
    }, 6000);

    return () => {
      clearInterval(autoSlideInterval);
    };
  }, []);

  // 세로 슬라이더: 데스크톱에서 마지막 슬라이드 후 외부 스크롤 연결
  useEffect(() => {
    const isDesktop = () => window.innerWidth >= 1024;
    if (!isDesktop()) return;

    const viewport = document.querySelector<HTMLElement>(".biode-vertical-slider__viewport");
    if (!viewport) return;

    let isScrollingInSlider = false;
    let lastScrollTime = 0;

    const handleWheel = (e: WheelEvent) => {
      if (!isDesktop()) return;

      const scrollTop = viewport.scrollTop;
      const scrollHeight = viewport.scrollHeight;
      const clientHeight = viewport.clientHeight;
      const isAtTop = scrollTop <= 10;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10;
      const now = Date.now();

      if (e.deltaY < 0 && isAtTop && !isScrollingInSlider) {
        return;
      }

      if (e.deltaY > 0 && isAtBottom) {
        if (now - lastScrollTime > 100) {
          e.preventDefault();
          const nextSection = sliderSectionRef.current?.nextElementSibling as HTMLElement;
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
            isScrollingInSlider = false;
          }
        }
        lastScrollTime = now;
        return;
      }

      if (!isAtTop && !isAtBottom) {
        isScrollingInSlider = true;
      }
    };

    viewport.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      viewport.removeEventListener("wheel", handleWheel);
    };
  }, []);

  // 세로 슬라이더: 첫 이미지 비율에 맞춰 섹션 높이를 고정
  useEffect(() => {
    const computeHeight = () => {
      const img = firstSliderImageRef.current;
      if (!img) return;
      const vw = window.innerWidth;
      if (img.naturalWidth > 0 && img.naturalHeight > 0) {
        const h = Math.round((vw * img.naturalHeight) / img.naturalWidth);
        setVerticalSliderHeightPx(h);
      } else {
        const rect = img.getBoundingClientRect();
        if (rect.height > 0) setVerticalSliderHeightPx(Math.round(rect.height));
      }
    };

    computeHeight();
    window.addEventListener("resize", computeHeight);
    return () => window.removeEventListener("resize", computeHeight);
  }, []);

  // 외부 스크롤이 내려오다 슬라이더를 만나면 섹션 상단에 스냅
  useEffect(() => {
    const section = sliderSectionRef.current;
    if (!section) return;

    const onWindowScroll = () => {
      lastScrollYRef.current = window.scrollY || window.pageYOffset;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const goingDown = (window.scrollY || window.pageYOffset) >= lastScrollYRef.current;
        lastScrollYRef.current = window.scrollY || window.pageYOffset;
        if (!sliderSnapDone && goingDown && entry.isIntersecting) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
          setSliderSnapDone(true);
        }
      },
      { root: null, threshold: 0.15 }
    );

    observer.observe(section);
    window.addEventListener("scroll", onWindowScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onWindowScroll);
    };
  }, [sliderSnapDone]);

  // 배너 자동 로테이션 (5초 간격)
  useEffect(() => {
    if (!banners || banners.length <= 1) return;
    const id = setInterval(() => {
      setCurrentBannerIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(id);
  }, [banners]);

  const goToBanner = (index: number) => {
    if (!banners || banners.length === 0) return;
    setCurrentBannerIndex(index % banners.length);
  };

  return (
    <div className="biode-home" style={{ backgroundColor: '#ffffff' }}>
      <OrganizationStructuredData
        data={{
          name: "BIODE",
          url: "https://www.biode.com",
          description:
            "비오드(BIODE)는 과학적 데이터에 근거한 세계 최고 수준의 반려동물 유산균 솔루션을 제공합니다. 라이트핏 펫 유산균으로 반려동물의 건강한 삶을 지켜드립니다.",
          logo: "https://www.biode.com/logo.png",
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

      {/* 배너 섹션 */}
      {banners.length > 0 && (
        <section className="biode-banner-full biode-banner-full--flush">
          <div className="biode-banner-slider">
            <div
              className="biode-banner-slider__track"
              style={{
                transform: `translateX(-${currentBannerIndex * 100}%)`,
              }}
            >
              {banners.map((banner, idx) => (
                <div
                  key={banner.id}
                  className="biode-banner-slider__slide"
                >
                  <img
                    src={banner.imageUrl}
                    alt={banner.title ?? "banner"}
                    className="biode-banner-image__img"
                    loading={idx === 0 ? "eager" : "lazy"}
                    decoding="async"
                  />
                  {banner.description && (
                    <div className="biode-banner__content">
                      <div
                        className="banner-description"
                        dangerouslySetInnerHTML={{ __html: banner.description }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* 배너 컨트롤 */}
            {banners.length > 1 && (
              <div className="biode-banner-controls">
                <div className="biode-banner-dots" role="tablist" aria-label="배너 선택">
                  {banners.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      role="tab"
                      aria-selected={idx === currentBannerIndex}
                      aria-label={`${idx + 1}번째 배너`}
                      className={`biode-banner-dots__dot ${idx === currentBannerIndex ? "is-active" : ""}`}
                      onClick={() => goToBanner(idx)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 배너 하단 이미지 - PC 전용 */}
      <section className="biode-banner-pc">
        <img
          src="/20250915_BOID_Homepage_1.png"
          alt="BIODE PC Banner"
          className="biode-banner-pc__img"
        />
      </section>

      {/* 배너 하단 이미지 - 모바일 전용 */}
      <section className="biode-banner-mobile">
        <img
          src="/banner_after.png"
          alt="BIODE Mobile Banner"
          className="biode-banner-mobile__img"
        />
      </section>

      {/* 세로 슬라이더 섹션 */}
      <section ref={sliderSectionRef} className="biode-vertical-slider" aria-label="BIODE 제품 미리보기">
        <div className="biode-vertical-slider__wrapper" style={verticalSliderHeightPx ? { height: `${verticalSliderHeightPx}px` } : undefined}>
          <div
            className="biode-vertical-slider__track"
            style={{
              transform: `translateY(-${currentVerticalSlideIndex * 100}%)`,
              transition: 'transform 1.5s ease-in-out'
            }}
          >
            {/* 슬라이드 1 */}
            <div className="biode-vertical-slider__slide" aria-label="미리보기 이미지 1">
              <Link href="/wow/principle">
                <img
                  ref={firstSliderImageRef}
                  src="/slide1.png"
                  alt="BIODE 미리보기 1"
                  className="biode-vertical-slider__img"
                  onLoad={() => {
                    const img = firstSliderImageRef.current;
                    if (!img) return;
                    if (img.naturalWidth > 0 && img.naturalHeight > 0) {
                      const vw = window.innerWidth;
                      const h = Math.round((vw * img.naturalHeight) / img.naturalWidth);
                      setVerticalSliderHeightPx(h);
                    }
                  }}
                />
              </Link>
            </div>

            {/* 슬라이드 2 */}
            <div className="biode-vertical-slider__slide" aria-label="미리보기 이미지 2">
              <Link href="/wow/technology">
                <img
                  src="/slide2.png"
                  alt="BIODE 미리보기 2"
                  className="biode-vertical-slider__img"
                />
              </Link>
            </div>

            {/* 슬라이드 3 */}
            <div className="biode-vertical-slider__slide" aria-label="미리보기 이미지 3">
              <Link href="/wow/effect">
                <img
                  src="/slide3.png"
                  alt="BIODE 미리보기 3"
                  className="biode-vertical-slider__img"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 비오드가 처음이시라구요 */}
      <section className="biode-first-time" style={{marginBottom: 0, paddingBottom: 0, minHeight: '36vh'}}>
        <div className="biode-first-time__container" style={{minHeight: '29vh'}}>
          <div className="biode-first-time__image-wrapper" style={{marginTop: 0}}>
            <Link href="/experience">
              <img src="/first.png" alt="비오드 소개" className="biode-first-time__image" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
