import ExclusiveSection from "@/components/home/ExclusiveSection";
import HeroSection from "@/components/home/HeroSection";
import NicotinamideSection from "@/components/home/NicotinamideSection";
import React from "react";

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <ExclusiveSection/>
      <NicotinamideSection/>
    </main>
  );
}
