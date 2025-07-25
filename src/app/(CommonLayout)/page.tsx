"use client";
import BotoxSection from "@/components/home/BotoxSection";
import DripsSection from "@/components/home/DripsSection";
import ExclusiveSection from "@/components/home/AdvancedSection";
import HeroSection from "@/components/home/HeroSection";
import Hormone from "@/components/home/Hormone";
import HydraAest from "@/components/home/HydraAest";
import Magic from "@/components/home/Magic";
import NicotinamideSection from "@/components/home/NicotinamideSection";
import VitaminsSection from "@/components/home/VitaminsSection";
import React from "react";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhyChooseUs />
      <ExclusiveSection />
      <NicotinamideSection />
      <Hormone />
      <VitaminsSection />
      <DripsSection />
      <BotoxSection />
      <Magic />
      <HydraAest />
    </main>
  );
}
