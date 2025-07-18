import DripsSection from "@/components/home/DripsSection";
import ExclusiveSection from "@/components/home/ExclusiveSection";
import HeroSection from "@/components/home/HeroSection";
import Hormone from "@/components/home/Hormone";
import NicotinamideSection from "@/components/home/NicotinamideSection";
import VitaminsSection from "@/components/home/VitaminsSection";
import React from "react";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ExclusiveSection />
      <NicotinamideSection />
      <Hormone />
      <VitaminsSection/>
      <DripsSection/>
    </main>
  );
}
