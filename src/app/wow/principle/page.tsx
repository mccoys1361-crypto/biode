export default function WowPrinciplePage() {
  return (
    <div>
      {/* 상단 이미지 섹션 */}
      <section className="wow-principle__section" style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}>
        <img
          src="/Homepage_11.png"
          alt="비오드의 원칙"
          style={{ width: '100%', height: 'auto', display: 'block'}}
        />

        {/* 이미지 위 텍스트 오버레이 */}
        <div className="wow-principle__overlay">
          <div className="wow-principle__content">
            <p className="wow-principle__text--primary wow-principle__text--largest">Biod Principle</p>
            <p className="wow-principle__text--primary wow-principle__text--large">세계 최고가 아니면 만들지 않습니다.</p>
            <p className="wow-principle__text--secondary">반려동물을 위한,</p>
            <p className="wow-principle__text--secondary">세계 최고 수준의 유산균을 만들어보자</p>
          </div>
        </div>
      </section>

      {/* 두 번째 섹션 */}
      <section className="wow-principle__section" style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}>
        <img
          src="/Homepage_12.png"
          alt="비오드의 원칙 2"
          className="wow-principle__image-philosophy"
          style={{ width: '100%', height: 'auto', display: 'block'}}
        />

        {/* 이미지 위 텍스트 오버레이 */}
        <div className="wow-principle__overlay-philosophy">
          <p className="wow-principle__philosophy-text">Biod</p>
          <p className="wow-principle__philosophy-text">Philosophy</p>
        </div>
      </section>

      {/* 세 번째 섹션 - 텍스트 컨텐츠 */}
      <section className="wow-principle__text-section">
        <div className="wow-principle__text-container">
          <div>
          <p className="wow-principle__standard-text">|  올바른 선택의 기준을 만듭니다.</p>
          <p className="wow-principle__description-text">비오드의 사명은 올바른 기술과 원칙을 가지고 소비자가 더 바른 소비 판단을 할 수 있게 돕는 것입니다.
          <br />무엇이 바른 제품이고 무엇을 고려해야 하는지 소비자 스스로 바른 결정을 내릴 수 있도록 돕는 지혜로운 소비운동을 꿈입없이 펼쳐 나가고 있습니다.</p>
          </div>
          <div>
          <p className="wow-principle__standard-text">|  과학적인 기술로 접근합니다.</p>
          <p className="wow-principle__description-text">비오드는 누구보다 과학적인 데이터에 근거한 기술과 결과물 만을 신뢰합니다. 통념적이고 일반적인 정보에 의지하지 않고 철저히 우리의 연구와 실험을 통해 증명된 결과만을 믿습니다. 비오드가 만든 제품 앞에서 그 어떤 의심이나 고민도 필요하지 않은 이유입니다.</p>
          </div>
          <div>
          <p className="wow-principle__standard-text">|  효과를 확실하게 증명합니다.</p>
          <p className="wow-principle__description-text">사실이 아닌 결과나 충족되지 않는 품질로 소비자를 유린하는 행위는 결코 용납되어서는 안됩니다. 누군가의 소중한 반려동물, 가족들이 먹는 제품의 특성상 그 어떤 제품보다 더욱 신뢰할 수 있는 시험자료와 성적서가 필요합니다. 효과가 입증될 수 없으면 만들지 않겠다는 비오드만의 고집입니다.</p>
          </div>
        </div>
      </section>

      {/* 네 번째 섹션 */}
      <section className="wow-principle__section" style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', backgroundColor: 'white' }}>
        <img
          src="/Homepage_13.png"
          alt="비오드의 원칙 3"
          style={{ width: '100%', height: 'auto', display: 'block'}}
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
    </div>
  );
}
