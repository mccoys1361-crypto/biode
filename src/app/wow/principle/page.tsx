"use client";

import { useState, useEffect } from 'react';

export default function WowPrinciplePage() {
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
    <div style={{ backgroundColor: '#ffffff' }}>
      {/* 상단 이미지 섹션 */}
      <section className="wow-principle__section" style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}>
        <img
          src={isMobile ? "/principle1_m.png" : "/Homepage_11_pc.png"}
          alt="비오드의 원칙"
          style={{ width: '100%', height: 'auto', display: 'block'}}
        />
      </section>

      {/* 섹션 2 - PC는 원칙2.png */}
      {!isMobile && (
        <section style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}>
          <img
            src="/principle2.png"
            alt="원칙 2"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </section>
      )}

      {isMobile && (
        <>
          {/* Biod Principle 섹션 */}
          <section style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}>
            <img
              src="/principle1_m_2.png"
              alt="비오드의 원칙"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </section>

          {/* 모바일 섹션 2 이미지 */}
          <section style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}>
            <img
              src="/principle2_m.png"
              alt="비오드의 원칙 2"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </section>

          {/* 다섯 번째 섹션 - 판매정책 */}
          <section className="wow-principle__policy-section">
            <div className="wow-principle__policy-container">
              <h2 className="wow-principle__policy-title">비오드의 <span className="wow-principle__policy-highlight">특별한·유별난</span> 판매정책</h2>

              <div className="wow-principle__policy-item">
                <h3 className="wow-principle__policy-number">01. 구매후 1개월 환불정책</h3>
                <p className="wow-principle__policy-text"><strong>비오드가 원하는 것은 여러분의 만족도입니다.</strong></p>
                <p className="wow-principle__policy-text">한 달 동안 급여 후 마음에 드시지 않는다면 편하게 환불 요청해 주셔도 됩니다.</p>
                <p className="wow-principle__policy-text">유산균은 하루 이틀이 아닌 평생을 생각해서 먹이는 아주 중요한 건강식품이니까요.</p>
              </div>

              <div className="wow-principle__policy-item">
                <h3 className="wow-principle__policy-number">02. 소비자 광고비 지원정책</h3>
                <p className="wow-principle__policy-text"><strong>최고의 광고는 바로 소비자분들의 진심입니다.</strong></p>
                <p className="wow-principle__policy-text">저희 제품을 잘 알지도 못하고 쓸 생각도 없는 분들의 입에서 저희 제품이 여러분에게 전달되는 것을 원하지 않습니다. 저희 제품을 직접 구매하신 분들께서 올려 주시는 블로그, 인스타그램, 유튜브에 관해 소정의 지원금을 드리고 있습니다.</p>
              </div>

              <div className="wow-principle__policy-item">
                <h3 className="wow-principle__policy-number">03. 찾아가는 연구정책</h3>
                <p className="wow-principle__policy-text"><strong>비오드는 우리가 만든 제품에 대한 자부심이 아주 크답니다.</strong></p>
                <p className="wow-principle__policy-text">출시하기 전부터 우리는 수많은 반려동물 주인님들을 만나러 다녔습니다. 급여 후 변화되는 몸 상태와 변성분을 꼼꼼히 분석하기 위해서였습니다. 저희는 구매하신 소비자분들에게 허락을 받은 후 소정의 선물을 들고 찾아갑니다. 어떤 변화가 있는지에 대한 의견과 소량의 분변만 주시면 됩니다.</p>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
