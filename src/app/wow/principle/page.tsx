export default function WowPrinciplePage() {
  return (
    <div>
      {/* 상단 이미지 섹션 */}
      <section style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}>
        <img
          src="/Homepage_2.png"
          alt="비오드의 원칙"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </section>

      {/* 컨텐츠 섹션 */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">WOW, 비오드 - 원칙</h1>
        <div className="prose max-w-none">
          <p>비오드의 원칙 페이지입니다.</p>
        </div>
      </div>
    </div>
  );
}
