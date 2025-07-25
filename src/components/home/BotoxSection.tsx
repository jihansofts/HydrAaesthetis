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
            title="Botox & Toxins"
            image="/images/face1.png"
            buttonText="Book Consultation"
            desc={[
              "At Hydra Aesthetics, our Botox treatments offer a safe, effective, and non-surgical way to refresh your appearance by smoothing fine lines and wrinkles. Whether targeting forehead lines, frown lines, or crow’s feet, our skilled professionals use precise techniques for natural, subtle results. With minimal discomfort and no downtime, Botox is a quick, convenient way to maintain a youthful, confident look. Let us help you look as vibrant as you feel.",
            ]}
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
            title="Fillers & Muscle Relaxers"
            image="/images/face2.png"
            buttonText="Book Consultation"
            desc={[
              "At Hydra Aesthetics, confidence begins with feeling your best inside and out. We offer personalized treatments including dermal fillers, muscle relaxers, hormone therapy, vitamin injections, and weight loss solutions—all designed to enhance your natural beauty and boost overall wellness. Our expert team is dedicated to guiding you every step of the way with compassionate, professional care tailored to your unique goals. Experience modern aesthetics crafted just for you.",
            ]}
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
                Microneedling & PRP
              </h3>

              <p
                className={`text-[16px] font-inter font-medium leading-7 text-[#1E1E1E] mt-5 lg:mr-20 md:mr-0`}>
                At Hydra Aesthetics, we offer advanced skincare treatments
                designed to leave your skin smoother, firmer, and radiant. Our
                microneedling combined with Platelet-Rich Plasma (PRP) harnesses
                your body’s natural healing to boost collagen, improve texture,
                reduce fine lines and acne scars, and enhance overall skin tone.
                This minimally invasive procedure is tailored by our expert team
                to meet your unique goals—whether you want a subtle glow or
                deeper skin renewal.
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
