"use client";
import Button from "@/common/Button";
import DripsCard from "@/common/DripsCard";
import React from "react";
import { motion } from "framer-motion";
const peptides = [
  {
    title: "Myers Cocktail",
    image: "/images/drop.svg",
    slug: "1V-JP8f606zZmyM2tx7fTahgX_RmuR1g7/preview",
    desc: "Rejuvenate your body and revive your energy with this classic nutrient blend.",
  },
  {
    title: "Immune Boost",
    image: "/images/drop1.svg",
    slug: "1V-JP8f606zZmyM2tx7fTahgX_RmuR1g7/preview",
    desc: "Fight off colds, coughs, and itchy throats—strengthen your defenses fast.",
  },
  {
    title: "Migraine Relief",
    image: "/images/drop2.svg",
    slug: "1V-JP8f606zZmyM2tx7fTahgX_RmuR1g7/preview",
    desc: "Ease migraine pain and restore balance for a brighter, younger-feeling you.",
  },
  {
    title: "Jet Lag Recovery",
    image: "/images/drop3.svg",
    slug: "1V-JP8f606zZmyM2tx7fTahgX_RmuR1g7/preview",
    desc: "Bounce back quickly and beat the jet lag blues after long travels.",
  },
  {
    title: "Hydration Therapy",
    image: "/images/drop4.svg",
    slug: "1V-JP8f606zZmyM2tx7fTahgX_RmuR1g7/preview",
    desc: "Rehydrate and say goodbye to fatigue and sluggishness.",
  },
  {
    title: "Hangover Relief",
    image: "/images/drop5.svg",
    slug: "1V-JP8f606zZmyM2tx7fTahgX_RmuR1g7/preview",
    desc: "Recover faster and feel refreshed after a long night out.",
  },
  {
    title: "Beauty Boost",
    image: "/images/drop6.svg",
    slug: "1V-JP8f606zZmyM2tx7fTahgX_RmuR1g7/preview",
    desc: "Glow from within and be runway-ready with skin-enhancing nutrients.",
  },
  {
    title: "Custom Blend",
    image: "/images/drop7.svg",
    slug: "1V-JP8f606zZmyM2tx7fTahgX_RmuR1g7/preview",
    desc: "Personalize your drip to target your unique needs—headache relief, energy, and more.",
  },
];
export default function DripsSection() {
  return (
    <section className="bg-bgColor py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white font-inter text-center text-[36px] md:text-[56px] font-extrabold mb-12">
          IV Drips
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {peptides.map((item, index) => (
            <DripsCard
              image={item.image}
              key={index}
              title={item.title}
              desc={item.desc}
              slug={item.slug}
            />
          ))}
        </div>
        <div className="mx-auto mt-12 w-full text-center">
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1V-JP8f606zZmyM2tx7fTahgX_RmuR1g7/preview">
            <Button text="See More IV Drips" borderLeanr="gradient-border" />
          </a>
        </div>
      </div>
    </section>
  );
}
