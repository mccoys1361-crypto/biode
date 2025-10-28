export default function WowTechnologyPage() {
  return (
    <div>
      {/* 상단 이미지 섹션 */}
      <section className="wow-technology__section" style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}>
        <img
          src="/Homepage_14.png"
          alt="비오드의 기술"
          style={{ width: '100%', height: 'auto', display: 'block'}}
        />

        {/* 이미지 위 텍스트 오버레이 */}
        <div className="wow-technology__overlay">
          <p className="wow-technology__overlay-text">건강수명을 늘리는 놀라운 기술</p>
        </div>
      </section>

      {/* 두 번째 섹션 */}
      <section className="wow-technology__section wow-technology__section--2" style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', backgroundColor: 'white' }}>
        <img
          src="/Homepage_15.png"
          alt="비오드의 기술 2"
          style={{ width: '100%', height: 'auto', display: 'block'}}
        />

        {/* 텍스트 오버레이 */}
        <div className="wow-technology__overlay-2">
          <div className="wow-technology__overlay-content">
            <h2 className="wow-technology__title">엄마의 눈으로<br />하나하나 따졌습니다.</h2>
            <p className="wow-technology__text">성분 하나, 원료 하나까지 놓치기 쉬운 부분까지 챙겼어요.</p>
            <p className="wow-technology__text">'혹시라도'라는 걱정에서 출발했으니까요.</p>
            <p className="wow-technology__text">그래서 더 꼼꼼하게,</p>
            <p className="wow-technology__text">더 정직하게, 기능은 기본,</p>
            <p className="wow-technology__text">매일 먹고 싶은</p>
            <p className="wow-technology__text highlight">'진짜 유산균'을 고민했어요.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
