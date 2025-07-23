import Hero from "@/common/Hero";
import React from "react";

export default function HeroSection() {
  return (
    <section className="lg:py-20 md:py-10 py-10 sm:py-10 bg-primary relative">
      <Hero
        title="Revitalize your body. Renew your confidence."
        description="Welcome to Hydra Aesthetics – your destination for wellness and beauty. From Botox and fillers to IV hydration, hormone therapy, and vitamin infusions, we offer personalized treatments to help you look and feel your best."
        subtitle="What type of services do you want?"
      />
    </section>
  );
}
