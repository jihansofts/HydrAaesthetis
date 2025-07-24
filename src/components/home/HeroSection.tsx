import Hero from "@/common/Hero";
import React from "react";

export default function HeroSection() {
  return (
    <section className="lg:py-20 md:py-10 py-10 sm:py-10 bg-primary relative">
      <Hero
        title="Revitalize. Renew. Conquer the new and confident you."
        description="<strong class='text-white'>Welcome to Hydra Aesthetics</strong> – your destination for IV hydration, vitamin infusions, hormone therapy, PRP treatments, and more. <br /><strong class='text-white'>Ask about our package deals to save on your journey to optimal health and beauty!"
        subtitle="What type of services do you want? </strong>"
      />
    </section>
  );
}
