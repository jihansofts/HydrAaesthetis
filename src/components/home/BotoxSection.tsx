"use client";

import React from "react";
import Image from "next/image";
import HormoneSection from "@/common/HormoneSection";
import { motion } from "framer-motion";

export default function BotoxSection() {
  return (
    <section id="botox" className="relative  bg-gradient py-20">
      {/* Background image layer */}

      {/* Content layer */}
      <div className="relative  z-10 container mx-auto px-5 space-y-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}>
          <HormoneSection
            title="Botox / Toxins"
            image="/images/face1.png"
            buttonText="Book Consultation"
            desc="At Hydra Aesthetics, our Botox treatments are a safe, effective, and non-surgical way to refresh your look and reduce the appearance of fine lines and wrinkles. Whether you're looking to smooth forehead lines, frown lines, crow’s feet, or other signs of aging, our skilled professionals use precise techniques to ensure natural-looking, subtle results. With minimal discomfort and no downtime, Botox is a quick and convenient solution for maintaining a youthful, confident appearance. Let us help you look as vibrant as you feel."
            contentColor="text-[#1E1E1E]"
            textColor="text-gradient"
            bgBtnColor="bg-bgColor"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}>
          <HormoneSection
            title="Fillers / Muscle relaxers"
            image="/images/face2.png"
            buttonText="Book Consultation"
            desc="At Hydra Aesthetics, our Botox treatments are a safe, effective, and non-surgical way to refresh your look and reduce the appearance of fine lines and wrinkles. Whether you're looking to smooth forehead lines, frown lines, crow’s feet, or other signs of aging, our skilled professionals use precise techniques to ensure natural-looking, subtle results. With minimal discomfort and no downtime, Botox is a quick and convenient solution for maintaining a youthful, confident appearance. Let us help you look as vibrant as you feel."
            contentColor="text-[#1E1E1E]"
            textColor="text-gradient"
            bgBtnColor="bg-bgColor"
            reverse
          />
        </motion.div>
      </div>
    </section>
  );
}
