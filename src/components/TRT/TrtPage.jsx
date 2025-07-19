import React from "react";
import HeroPageTrt from "./HeroPageTrt";
import WhyHRT from "./WhyHRT";
import Achieve from "./Achieve";
import Varieties from "./Varieties";

const TrtPage = () => {
  return (
    <div className="min-h-screen bg-[#2E2E2E]">
      <HeroPageTrt />
      <WhyHRT />
      <Achieve />
      <Varieties />
    </div>
  );
};

export default TrtPage;
