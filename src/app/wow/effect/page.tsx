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
    url: "https://www.biode.com/wow/effect",
  },
};

export default function WowEffectPage() {
  return (
    <div>
      <section className="img-section">
        <img src="/effect/effect_01.png" className="pcn" />
      </section>
      <section className="img-section">
        <img src="/effect/effect_02.png" className="pcn" />
      </section>
      <section className="img-section">
        <img src="/effect/effect_03.png" className="pcn" />
      </section>
      <section className="img-section">
        <img src="/effect/effect_04.png" className="pcn" />
      </section>
      <section className="img-section">
        <img src="/effect/effect_05.png" className="pcn" />
      </section>
      <section className="img-section">
        <img src="/effect/effect_06.png" className="pcn" />
      </section>
      <section className="img-section">
        <img src="/effect/effect_07.png" className="pcn" />
      </section>
      <section className="img-section">
        <img src="/effect/effect_08.png" className="pcn" />
      </section>
    </div>
  );
}
