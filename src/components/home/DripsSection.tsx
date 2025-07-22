"use client";
import Button from "@/common/Button";
import DripsCard from "@/common/DripsCard";
import React from "react";
import { motion } from "framer-motion";
const peptides = [
  {
    title: "Myers Cocktail",
    image: "/images/drop.png",
    slug: "1V-JP8f606zZmyM2tx7fTahgX_RmuR1g7/preview",
    desc: "Rejuvinate and Revive...",
  },
  {
    title: "Immune Boost",
    image: "/images/drop1.png",
    slug: "1V-JP8f606zZmyM2tx7fTahgX_RmuR1g7/preview",
    desc: "Combat cough and itchy throat...",
  },
  {
    title: "NAD+",
    image: "/images/drop2.png",
    slug: "1V-JP8f606zZmyM2tx7fTahgX_RmuR1g7/preview",
    desc: "A younger you...",
  },
  {
    title: "Jet Lag",
    image: "/images/drop3.png",
    slug: "1V-JP8f606zZmyM2tx7fTahgX_RmuR1g7/preview",
    desc: "Beat the jet lag blues...",
  },
  {
    title: "Hydration",
    image: "/images/drop4.png",
    slug: "1V-JP8f606zZmyM2tx7fTahgX_RmuR1g7/preview",
    desc: "Say goodbye to your slump...",
  },
  {
    title: "Hangover",
    image: "/images/drop5.png",
    slug: "1V-JP8f606zZmyM2tx7fTahgX_RmuR1g7/preview",
    desc: "Your solution to a long night out...",
  },
  {
    title: "Beauty",
    image: "/images/drop6.png",
    slug: "1V-JP8f606zZmyM2tx7fTahgX_RmuR1g7/preview",
    desc: "Be runway ready...",
  },
  {
    title: "Migraine",
    image: "/images/drop7.png",
    slug: "1V-JP8f606zZmyM2tx7fTahgX_RmuR1g7/preview",
    desc: "Sweet, sweet headache relief...",
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
