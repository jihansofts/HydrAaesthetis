"use client";

import React from "react";
import Image from "next/image";
import HormoneSection from "@/common/HormoneSection";
import { motion } from "framer-motion";
import ButtonXl from "@/common/ButtonXl";

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
            desc="At Hydra Aesthetics, we believe confidence starts with feeling your best—both inside and out. Our clinic offers a full range of personalized treatments, including hormone therapy, vitamin injections, weight loss solutions, and advanced aesthetic services like dermal fillers and skincare. Whether you're looking to boost energy, improve your appearance, or enhance overall wellness, our expert team is here to guide you every step of the way. With Hydra Aesthetics, you’ll experience modern care that’s tailored to your goals, delivered with compassion and professionalism."
            contentColor="text-[#1E1E1E]"
            textColor="text-gradient"
            bgBtnColor="bg-bgColor"
            reverse
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 justify-between items-center gap-8 py-10">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="lg:col-span-7 lg:ml-10 md:ml-0 md:col-span-12 space-y-10">
            <div className="lg:max-w-3xl md:max-w-full">
              <h3 className="lg:text-[48px] md:text-[56px] sm:text-[40px] text-[32px] font-extrabold font-inter text-[#A70049] drop-shadow-[0px_15px_15px_rgba(208,0,95,0.7)]">
                Micro-needle and PRP
              </h3>

              <p
                className={`text-[16px] font-inter font-medium leading-7 text-[#1E1E1E] mt-5 lg:mr-20 md:mr-0`}>
                At Hydra Aesthetics, your wellness and beauty journey is our
                priority. We offer a comprehensive range of treatments—from
                hormone therapy and weight loss programs to vitamin injections,
                fillers, and advanced skincare solutions like microneedling with
                PRP. Our expert team combines medical precision with a
                personalized approach to help you feel confident, energized, and
                naturally radiant. Whether you&apos;re seeking subtle
                enhancements or transformative results, Hydra Aesthetics
                delivers care that’s tailored to you—every step of the way.
              </p>
            </div>
            <ButtonXl
              text="Book Consultation"
              bg="bg-bgColor"
              textColor="text-gradient"
            />
          </motion.div>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 md:col-span-12   rounded-lg ">
            <Image
              src="/images/mico.png"
              alt=""
              width={500}
              height={500}
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
