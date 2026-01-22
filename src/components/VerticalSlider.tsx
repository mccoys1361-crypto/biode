"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

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

export default function VerticalSlider() {
  const firstSliderImageRef = useRef<HTMLImageElement | null>(null);
  const [verticalSliderHeightPx, setVerticalSliderHeightPx] = useState<number | null>(null);
  const sliderSectionRef = useRef<HTMLElement | null>(null);
  const lastScrollYRef = useRef<number>(0);
  const [sliderSnapDone, setSliderSnapDone] = useState<boolean>(false);
  const [currentVerticalSlideIndex, setCurrentVerticalSlideIndex] = useState<number>(0);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = animationStyles;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

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

  return (
    <section ref={sliderSectionRef} className="biode-vertical-slider" aria-label="BIODE 제품 미리보기">
      <div className="biode-vertical-slider__wrapper" style={verticalSliderHeightPx ? { height: `${verticalSliderHeightPx}px` } : undefined}>
        <div
          className="biode-vertical-slider__track"
          style={{
            transform: `translateY(-${currentVerticalSlideIndex * 100}%)`,
            transition: 'transform 1.5s ease-in-out'
          }}
        >
          <div className="biode-vertical-slider__slide" aria-label="미리보기 이미지 1">
            <Link href="/wow/principle">
              <img
                ref={firstSliderImageRef}
                src="/slide1.png"
                alt="비오드 유산균 원칙 - 과학적 데이터 기반 반려동물 건강"
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

          <div className="biode-vertical-slider__slide" aria-label="미리보기 이미지 2">
            <Link href="/wow/technology">
              <img
                src="/slide2.png"
                alt="비오드 기술력 - 특허 균주 펫 프로바이오틱스"
                className="biode-vertical-slider__img"
              />
            </Link>
          </div>

          <div className="biode-vertical-slider__slide" aria-label="미리보기 이미지 3">
            <Link href="/wow/effect">
              <img
                src="/slide3.png"
                alt="비오드 효과 - 반려동물 면역력 장건강 개선"
                className="biode-vertical-slider__img"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
