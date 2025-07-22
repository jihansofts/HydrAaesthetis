import HormoneSection from "@/common/HormoneSection";
import React from "react";

export default function Hormone() {
  return (
    <section id="hormone" className="py-20 bg-bgColor">
      <div className="container  mx-auto px-5">
        <HormoneSection
          title="Hormone Replacement (HRT)"
          desc="Welcome to Hydra Aesthetics – your trusted destination for beauty, wellness, and rejuvenation. We offer a range of advanced treatments including Botox, fillers, IV hydration, hormone replacement therapy (HRT & TRT), microneedling, PRP, peptides, and vitamin infusions. Whether you're looking to refresh your appearance, boost energy, or restore hormonal balance, our expert team is here to guide you every step of the way. Experience personalized care designed to help you look and feel your absolute best. Ask ChatGPT"
          image="/images/hormone1.png"
          textColor="text-[#1E1E1E]"
          bgBtnColor="bg-gradient"
          buttonText="Book Consultation"
          reverse={false}
        />
        <HormoneSection
          title="Testosterone Replacement (TRT)"
          desc="At Hydra Aesthetics, our Testosterone Replacement Therapy (TRT) is designed to help men restore vitality, improve energy, and regain hormonal balance. If you're experiencing fatigue, low libido, or mood changes, our expert-guided TRT treatments offer a safe and effective solution to help you feel stronger, more focused, and revitalized."
          image="/images/hormone1.png"
          bgBtnColor="bg-gradient"
          buttonText="Book Consultation"
          reverse
          textColor="text-[#1E1E1E]"
        />
      </div>
    </section>
  );
}
