"use client";

import { useState, useEffect } from "react";

interface Banner {
  id: number;
  title: string;
  description?: string;
  imageUrl: string;
}

interface BannerSliderProps {
  banners: Banner[];
}

export default function BannerSlider({ banners }: BannerSliderProps) {
  const [currentBannerIndex, setCurrentBannerIndex] = useState<number>(0);

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

  if (banners.length === 0) return null;

  return (
    <section className="biode-banner-full biode-banner-full--flush">
      <div className="biode-banner-slider">
        <div
          className="biode-banner-slider__track"
          style={{
            transform: `translateX(-${currentBannerIndex * 100}%)`,
          }}
        >
          {banners.map((banner, idx) => (
            <div key={banner.id} className="biode-banner-slider__slide">
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
  );
}
