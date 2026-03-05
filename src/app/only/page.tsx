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
      <section style={{ width: '100%', marginBottom: 0, paddingBottom: 0 }}>
        <img
          src={isMobile ? "/only_m.png" : "/Homepage_7.png"}
          alt="Only 비오드 - 비오드는 꿈꿉니다. 더 오랜 시간 반려동물과 함께할 수 있는 세상을 위해"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </section>

      {/* 섹션 2 - PC는 이미지, 모바일은 텍스트 */}
      {!isMobile && (
        <section style={{ width: '100%', marginBottom: 0, paddingBottom: 0 }}>
          <img
            src="/section2.png"
            alt="우리는 얼마나 오랫동안 반려동물과 함께 할 수 있을까요? 당신과 반려동물에게 기술의 감동을 고스란히 느낄 수 있는 효과적인 방법에 대해 고민하고 연구합니다."
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </section>
      )}

      {isMobile && (
        <section style={{ width: '100%', marginBottom: 0, paddingBottom: 0 }}>
          <img
            src="/only_m_2.png"
            alt="우리는 얼마나 오랫동안 반려동물과 함께 할 수 있을까요?"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
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
          <section style={{ width: '100%', marginBottom: 0, paddingBottom: 0 }}>
            <img
              src="/only2_m.png"
              alt="이것이, 비오드가 꿈꾸는 세상입니다! 비오드 라이트핏 펫 유산균"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </section>

          {/* 모바일 섹션 3 이미지 */}
          <section style={{ width: '100%', marginBottom: 0, paddingBottom: 0 }}>
            <img
              src="/only3_m.png"
              alt="BIODE DEAR MY FRIENDS - 나를 위해 오래오래 곁에 머물러 줘. 완전히 새로운 유산균을 만들었습니다."
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </section>
        </>
      )}
    </div>
  );
}
