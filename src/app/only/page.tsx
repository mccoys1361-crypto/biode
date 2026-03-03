"use client";

import { useState, useEffect } from 'react';

export default function OnlyPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div style={{ width: '100%', backgroundColor: '#ffffff' }}>
      {/* 섹션 1 - PC/모바일 분기 */}
      <section className="seo-overlay" style={{ width: '100%', marginBottom: 0, paddingBottom: 0 }}>
        <img
          src={isMobile ? "/only_m.png" : "/Homepage_7.png"}
          alt="Only 비오드 - 비오드는 꿈꿉니다. 더 오랜 시간 반려동물과 함께할 수 있는 세상을 위해"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
        <div className="seo-overlay__text">
          <h1>Only 비오드</h1>
          <p>Biode dreams. 비오드는 꿈꿉니다. 더 오랜 시간 반려동물과 함께할 수 있는 세상을 위해...</p>
        </div>
      </section>

      {/* 섹션 2 - PC는 이미지, 모바일은 텍스트 */}
      {!isMobile && (
        <section className="seo-overlay" style={{ width: '100%', marginBottom: 0, paddingBottom: 0 }}>
          <img
            src="/section2.png"
            alt="우리는 얼마나 오랫동안 반려동물과 함께 할 수 있을까요? 당신과 반려동물에게 기술의 감동을 고스란히 느낄 수 있는 효과적인 방법에 대해 고민하고 연구합니다."
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
          <div className="seo-overlay__text">
            <h2>우리는 얼마나 오랫동안 반려동물과 함께 할 수 있을까요?</h2>
            <p>반려동물의 건강이 걱정될 때 우리는 본능적으로 더 나은 기술을 찾아 여행을 떠나곤 합니다. 그리고 다양한 경험을 얻습니다. 그만큼 기술이 주는 위로 그리고 혜택은 우리가 생각하는 것보다 아주 크고 놀랍답니다.</p>
            <p>그래서 우리는, 당신과 반려동물에게 기술의 감동을 고스란히 느낄 수 있는 효과적인 방법에 대해 고민하고 연구합니다.</p>
          </div>
        </section>
      )}

      {isMobile && (
        <section className="seo-overlay" style={{ width: '100%', marginBottom: 0, paddingBottom: 0 }}>
          <img
            src="/only_m_2.png"
            alt="우리는 얼마나 오랫동안 반려동물과 함께 할 수 있을까요?"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
          <div className="seo-overlay__text">
            <p>우리는 얼마나 오랫동안 반려동물과 함께 할 수 있을까요? 반려동물의 건강이 걱정될 때 우리는 본능적으로 더 나은 기술을 찾아 여행을 떠나곤 합니다. 그리고 다양한 경험을 얻습니다. 그만큼 기술이 주는 위로 그리고 혜택은 우리가 생각하는 것보다 아주 크고 놀랍답니다. 그래서 우리는, 당신과 반려동물에게 기술의 감동을 고스란히 느낄 수 있는 효과적인 방법에 대해 고민하고 연구합니다.</p>
          </div>
        </section>
      )}

      {isMobile && (
        <>
          {/* Homepage_8 섹션 */}
          <section style={{ width: '100%', marginBottom: 0, paddingBottom: 0 }}>
            <img
              src="/Homepage_8.png"
              alt="비오드 반려동물 유산균"
              style={{ width: '100%', height: 'auto', display: 'block', marginLeft: '2rem' }}
            />
          </section>

          <section style={{ width: '100%', marginBottom: 0, paddingBottom: 0 }}>
            <div style={{ padding: '2rem' }}>
              <p style={{ fontSize: '1.3rem', fontWeight: 700, color: '#401F1D', lineHeight: 1.5 }}>
                아련하게 습관적으로
                <br />모호했지만 편견 없이 써왔던 유산균을
                <br />더 오랫동안 건강한 모습의 반려동물과 함께할 수 있는
                <br />더 나은 유산균으로 바꾸는 것</p>
            </div>
          </section>

          {/* 모바일 섹션 2 이미지 */}
          <section className="seo-overlay" style={{ width: '100%', marginBottom: 0, paddingBottom: 0 }}>
            <img
              src="/only2_m.png"
              alt="이것이, 비오드가 꿈꾸는 세상입니다! 비오드 라이트핏 펫 유산균"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            <div className="seo-overlay__text">
              <h2>이것이, 비오드가 꿈꾸는 세상입니다!</h2>
            </div>
          </section>

          {/* 모바일 섹션 3 이미지 */}
          <section className="seo-overlay" style={{ width: '100%', marginBottom: 0, paddingBottom: 0 }}>
            <img
              src="/only3_m.png"
              alt="BIODE DEAR MY FRIENDS - 나를 위해 오래오래 곁에 머물러 줘. 완전히 새로운 유산균을 만들었습니다."
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            <div className="seo-overlay__text">
              <h2>BIODE DEAR MY FRIENDS</h2>
              <p>나를 위해 오래오래 곁에 머물러 줘~</p>
              <p>당신 곁에 건강하게 오래오래 함께하는 것. 이보다 더한 소망, 이보다 더한 바램이 있을까요? 더 많은 추억을 쌓고 더 많은 사랑을 전할 수 있도록 더 많은 연구와 더 많은 기술을 담았습니다.</p>
              <p>생애 주기 중 질병 주기를 최소화시키는 압도적인 비오드의 반려동물 헬스케어 솔루션과 만나보세요. 당신의 소망이 이루어질 수 있도록 완전히 새로운 유산균을 만들었습니다.</p>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
