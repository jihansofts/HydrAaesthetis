import React from "react";
import Image from "next/image";
import HormoneSection from "@/common/HormoneSection";

export default function BotoxSection() {
  return (
    <section className="relative py-20">
      {/* Background image layer */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/botox-bg.png"
          alt="Botox Background"
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content layer */}
      <div className="relative z-10 container mx-auto px-5">
        <HormoneSection
          title="Botox / Toxins"
          image="/images/face1.png"
          buttonText="Book Consultation"
          desc="At Hydra Aesthetics, our Botox treatments are a safe, effective, and non-surgical way to refresh your look and reduce the appearance of fine lines and wrinkles. Whether you're looking to smooth forehead lines, frown lines, crow’s feet, or other signs of aging, our skilled professionals use precise techniques to ensure natural-looking, subtle results. With minimal discomfort and no downtime, Botox is a quick and convenient solution for maintaining a youthful, confident appearance. Let us help you look as vibrant as you feel."
          textColor="text-[#AB3279]"
          bgBtnColor="bg-white"
        />
        <HormoneSection
          title="Fillers / Muscle relaxers"
          image="/images/face2.png"
          buttonText="Book Consultation"
          desc="At Hydra Aesthetics, our Botox treatments are a safe, effective, and non-surgical way to refresh your look and reduce the appearance of fine lines and wrinkles. Whether you're looking to smooth forehead lines, frown lines, crow’s feet, or other signs of aging, our skilled professionals use precise techniques to ensure natural-looking, subtle results. With minimal discomfort and no downtime, Botox is a quick and convenient solution for maintaining a youthful, confident appearance. Let us help you look as vibrant as you feel."
          textColor="text-[#AB3279]"
          bgBtnColor="bg-white"
          reverse
        />
      </div>
    </section>
  );
}
