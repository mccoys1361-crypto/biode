import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "비오드의 효과 - 입증된 결과로 말하는 유산균",
  description:
    "비오드 라이트핏 펫 유산균의 입증된 효과. 과학적 데이터와 실험을 통해 증명된 결과만을 믿습니다. 반려동물의 건강한 변화를 경험하세요.",
  keywords: [
    "비오드 효과",
    "유산균 효과",
    "입증된 결과",
    "반려동물 건강 개선",
    "과학적 증명",
    "임상실험",
    "건강 변화",
  ],
  openGraph: {
    title: "비오드의 효과 - 입증된 결과로 말하는 유산균",
    description:
      "비오드 라이트핏 펫 유산균의 입증된 효과. 과학적 데이터와 실험을 통해 증명된 결과만을 믿습니다.",
    url: "https://biode.co.kr/wow/effect",
    images: [
      {
        url: "/biode-og.jpg",
        width: 1200,
        height: 630,
        alt: "비오드 반려동물 유산균",
      },
    ],
  },
};

export default function WowEffectPage() {
  return (
    <div>
      <section className="img-section seo-overlay">
        <img src="/effect/effect_01.png" style={{ width: '100%', height: 'auto', display: 'block' }} alt="The Effect of Biode - 건강수명을 늘리는 완벽한 효과" />
        <div className="seo-overlay__text">
          <h1>The Effect of Biode</h1>
          <p>건강수명을 늘리는 완벽한 효과.</p>
          <p>기능은 더 넓히고, 기준은 더 까다롭게 설계한 비오드 라이트핏 펫 유산균!</p>
        </div>
      </section>
      <section className="img-section seo-overlay">
        <img src="/effect/effect_02.png" style={{ width: '100%', height: 'auto', display: 'block' }} alt="ALL-IN-ONE 장 건강에서 체중 관리까지 한 번에 케어하는 복합 설계" />
        <div className="seo-overlay__text">
          <h2>ALL-IN-ONE 장 건강에서 체중 관리까지 한 번에 케어하는 복합 설계</h2>
          <p>한 포로 설계된 토탈 헬스 루틴으로 장내 유익균을 늘리고 체내 독소를 줄이며, 지방 대사까지 잡은 고기능 복합 유산균 솔루션으로 소화부터 순환, 면역, 대사까지</p>
          <p>비오드는 반려동물의 건강 전반을 설계합니다.</p>
          <p>체중관리, 장 건강, 면역, 피부, 관절까지 한번에!</p>
        </div>
      </section>
      <section className="img-section seo-overlay">
        <img src="/effect/effect_03.png" style={{ width: '100%', height: 'auto', display: 'block' }} alt="이런 유산균은 없었습니다! 유산균 하나만 잘 먹여도 수많은 걱정이 사라집니다" />
        <div className="seo-overlay__text">
          <h2>이런 유산균은 없었습니다!</h2>
          <p>유산균 하나만 잘 먹여도 수많은 걱정이 사라집니다.</p>
          <p>체지방 감소, 두뇌발달, 면역강화, 피부탄력, 관절건강, 장건강, 잇몸과 치주 건강, 심혈관 건강</p>
          <p>차세대 반려동물 수명연장 솔루션 BIODE</p>
        </div>
      </section>
      <section className="img-section seo-overlay">
        <img src="/effect/effect_04.png" style={{ width: '100%', height: 'auto', display: 'block' }} alt="항비만 기능 유산균, 락토바실러스 퍼멘텀 - MG4231 + MG4244 복합 배합으로 체지방·체종 관리에 시너지 효과" />
        <div className="seo-overlay__text">
          <h2>퍼멘텀 복합 균주로 체지방·체중 다각도 케어. 항비만 기능 유산균, 락토바실러스 퍼멘텀</h2>
          <p>LACTOBACILLUS FERMENTUM</p>
          <p>체지방 축적을 억제하는 기능으로 항비만 분야에서 주목받는 유산균종</p>
          <p>다양한 인체 연구에서 지방 분해 및 대사 활성 효과 확인</p>
          <p>비오드는 단일균주가 아닙니다. MG4231 + MG4244 복합 배합으로 체지방·체종 관리에 시너지 효과를 더했습니다.</p>
        </div>
      </section>
      <section className="img-section seo-overlay">
        <img src="/effect/effect_05.png" style={{ width: '100%', height: 'auto', display: 'block' }} alt="섭취 전후 차이, 숫자가 말해주는 확실한 변화 - 체지방량 변화 및 체지방률 변화 임상 결과" />
        <div className="seo-overlay__text">
          <h2>섭취 전후 차이, 숫자가 말해주는 확실한 변화</h2>
          <h3>01 체지방량 변화 Fat Mass Change</h3>
          <p>MED-02 그룹: -1166.82G 감소. 위약군: -382.08G. 약 3배 가까운 차이로 실질적인 체지방 감소 효과 입증.</p>
          <h3>02 체지방률 변화 Fat Percentage Change</h3>
          <p>MED-02 그룹: -0.85% 감소 (P=0.002). 위약군: 유의미한 변화 없음. 단순 체중 변화가 아닌 지방 중심의 집중 케어 효과.</p>
        </div>
      </section>
      <section className="img-section seo-overlay">
        <img src="/effect/effect_06.png" style={{ width: '100%', height: 'auto', display: 'block' }} alt="지방만 줄인 유산균, 여기에 있습니다 - 퍼멘텀 복합 균주의 항비만 작용 메커니즘" />
        <div className="seo-overlay__text">
          <h2>지방만 줄인 유산균, 여기에 있습니다</h2>
          <p>단순한 체중이 아닌, 지방에 집중한 결과 퍼멘텀 복합 균주 (MG4231 &amp; MG4244)는 단순한 체중 변화가 아닌 지방 감소 효과에 초점을 맞췄습니다.</p>
          <h3>퍼멘텀 복합균주의 항비만 작용 메커니즘</h3>
          <p>체지방량 1.1kg 감소. 체지방률 -0.85% 유의미한 변화. 체지방량 1.1kg 감소.</p>
          <p>지방 세포 형성 억제: PPARy, C/EBPa, FAS, aP2 등 지방 생성에 관여하는 단백질 발현이 감소. 지방 세포 분화와 축적을 원천 차단.</p>
          <p>지방 분해 촉진: p-HSL / HSL 비율 증가. 지방 분해 효소 활성화. 이미 쌓인 지방을 분해 촉진.</p>
          <p>AMPK 경로 활성화: p-AMPK / AMPK 비율 증가. 에너지 대사 중심 경로 활성. 지방 축적 억제 + 에너지 소비 촉진.</p>
          <p>비오드는 체지방의 원인과 해결 메커니즘까지 함께 생각합니다!</p>
        </div>
      </section>
      <section className="img-section seo-overlay">
        <img src="/effect/effect_07.png" style={{ width: '100%', height: 'auto', display: 'block' }} alt="지방 축적 억제 특허등록 완료한 복합 유산균 - 미국 특허 등록까지 완료한 기능성 유산균" />
        <div className="seo-overlay__text">
          <h2>지방 축적 억제 특허등록 완료한 복합 유산균입니다.</h2>
          <p>퍼멘텀 복합 균주(MG4231 &amp; MG4244)는 항비만 효과에 대한 과학적 근거와 기술력으로 미국 특허 등록까지 완료한 기능성 유산균입니다.</p>
          <p>미국 특허증 락토바실러스 MG4231,MG4244. 엔테로코커스 페시엄 MG5232 제조 안전성 평가 승인. 항비만 특허증 락토바실러스 (퍼멘텀) MG4231,MG4244. MG4231,MG4244 특허증.</p>
        </div>
      </section>
      <section className="img-section seo-overlay">
        <img src="/effect/effect_08.png" style={{ width: '100%', height: 'auto', display: 'block' }} alt="장 건강은 기본, 체중 관리까지 함께 - 체중관리에 도움을 주는 유산균 원료 함유" />
        <div className="seo-overlay__text">
          <h2>장 건강은 기본, 체중 관리까지 함께</h2>
          <p>단순히 장만 챙기는 유산균이 아닙니다. 체지방 축적, 지방 흡수, 대사 속도까지 고려한 입체적 다기능 항비만 유산균 솔루션입니다.</p>
          <h3>체중관리에 도움을 주는 유산균 원료 함유</h3>
          <p>LACTOBACILLUS FERMENTUM - 항산화, 체지방 감소, 대사 촉진, 장내 유익균 정식 및 면역력 강화에 도움</p>
          <p>F-2200 10종 혼합 유산균 - 체지방 축적 억제에 도움</p>
          <p>ENTEROCOCCUS FAECIUM - 지방 흡수 억제에 도움</p>
        </div>
      </section>
    </div>
  );
}
