import HormoneSection from "@/common/HormoneSection";
import React from "react";

export default function Hormone() {
  return (
    <section id="hormone" className="py-20 bg-bgColor">
      <div className="container  mx-auto px-5">
        <HormoneSection
          title="Hormone Replacement (HRT)"
          desc="At Hydra Aesthetics, we believe that you are in charge of your body and encourage you to trust us build a professional relationship to guide you through your transformation so that you are not alone. We are with you every step of the way and are passionate about your success and achievements you attain with us. Whether you're looking to refresh your appearance, boost energy, or restore hormonal balance, with our customized plan utilizing Peptide therapy, Testosterone therapy. our expert team is here to guide you every step of the way. Experience personalized care designed to help you look and feel your absolute best."
          contentColor="text-white"
          image="/images/hormone1.png"
          textColor="text-[#1E1E1E]"
          bgBtnColor="bg-gradient"
          buttonText="Book Consultation"
          reverse={false}
        />
        <HormoneSection
          title="Testosterone Replacement (TRT)"
          desc="At Hydra Aesthetics, our Testosterone Replacement Therapy (TRT) is designed to help men restore vitality, improve energy, and regain hormonal balance. If you're experiencing fatigue, low libido, or mood changes, our expert-guided TRT treatments offer a safe and effective solution to help you feel stronger, more focused, and revitalized."
          image="/images/hormone2.png"
          bgBtnColor="bg-gradient"
          contentColor="text-white"
          buttonText="Book Consultation"
          reverse
          textColor="text-[#1E1E1E]"
        />
      </div>
    </section>
  );
}
