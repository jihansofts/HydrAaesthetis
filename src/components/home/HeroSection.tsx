import Hero from "@/common/Hero";
import React from "react";

export default function HeroSection() {
  return (
    <section className="lg:py-20 md:py-10 py-10 sm:py-10 bg-primary relative">
      <Hero
        title="Revitalize Your Body. Renew Your Confidence."
        description="Welcome to Hydra Aesthetics –  IV hydration, Vitamin infusion, hormone therapies, PRP, and many more services we offer personalized treatments to help you look and feel your best. (ask for package deals for more info…)"
        subtitle="What type of services do you want?"
      />
    </section>
  );
}
