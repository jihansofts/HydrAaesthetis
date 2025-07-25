"use client";

import React from "react";
import Image from "next/image";
import Button from "./Button";
import { IoIosStar } from "react-icons/io";
import { motion } from "framer-motion";
import { FaClinicMedical, FaMapMarkerAlt } from "react-icons/fa";

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
}

export default function Hero({ title, description }: HeroProps) {
  return (
    <div className="container px-5 mx-auto pb-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between xl:gap-2 lg:gap-5 md:px-0">
        {/* Left Content */}
        <motion.div
          className="flex flex-col max-w-2xl space-y-5 justify-center items-start lg:pr-10 md:pr-0 pr-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}>
          <h2 className="text-white lg:text-[64px] md:text-[56px] sm:text-[40px] text-[32px] font-extrabold">
            {title || "Welcome to Hydra Aesthetics"}
          </h2>
          <p
            className="text-[#FFFFFFC9] md:text-[16px] text-[14px] font-medium leading-9"
            dangerouslySetInnerHTML={{ __html: description || "" }}
          />

          <ul className="space-y-4 flex  items-start justify-start ">
            {/* Glendale Location */}
            <li className="flex items-start justify-center md:justify-start">
              <FaMapMarkerAlt className="text-[#C4AC7B] mt-1 mr-3 flex-shrink-0 text-xl" />
              <div>
                <p className="bg-gradient-to-r font-bold font-inter from-[#C4AC7B] via-[#EEE1BA] to-[#836539] bg-clip-text text-transparent">
                  8205 Santa Monica blvd, <br /> Santa Monica 90046
                </p>
                <p className="bg-gradient-to-r font-inter font-medium mt-2 text-[12px] from-[#C4AC7B] via-[#EEE1BA] to-[#836539] bg-clip-text text-transparent">
                  ( Aesthetics, Procedure, Services )
                </p>
              </div>
            </li>
            <li className="flex items-start justify-center md:justify-start">
              <FaClinicMedical className="text-[#252525] mt-1 mr-3 flex-shrink-0 text-xl" />
              <span className="bg-gradient-to-r from-[#C4AC7B] via-[#EEE1BA] to-[#836539] bg-clip-text text-transparent"></span>
            </li>

            {/* Burbank Location */}
            <li className="flex items-start justify-center md:justify-start">
              <FaMapMarkerAlt className="text-[#C4AC7B] mt-1 mr-3 flex-shrink-0 text-xl" />
              <div>
                <p className="bg-gradient-to-r font-inter font-bold from-[#C4AC7B] via-[#EEE1BA] to-[#836539] bg-clip-text text-transparent">
                  207 N Victory Blvd., Ste J <br /> Burbank, CA 91502
                </p>
                <p className="bg-gradient-to-r font-inter font-medium mt-2 text-[12px] from-[#C4AC7B] via-[#EEE1BA] to-[#836539] bg-clip-text text-transparent">
                  ( Consultations only )
                </p>
              </div>
            </li>
          </ul>
          {/* <div className="relative inline-block font-extrabold text-white z-10">
            <span className="relative inline-block ml-1 lg:text-[22px] md:text-[18px] sm:text-[16px] text-[14px]">
              {subtitle || "Explore Our Services"}
              <span className="absolute bottom-[-2px] p-2 left-[-8px] right-[-8px] h-[10px] bg-[#D9C79B69] z-[-1]"></span>
            </span>
          </div> */}

          <div className="mt-5">
            <a href="tel:+18186698271">
              <Button
                text="Call Us +1 818 669 8271"
                borderLeanr="gradient-border"
              />
            </a>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className=""
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}>
          <Image
            src="/images/hero.svg"
            alt="hero"
            width={500}
            height={500}
            className="w-full object-center h-full"
          />
          {/* <div className="flex  items-center gap-x-5 justify-center mt-4">
            <h4 className="lg:text-[40px] md:text-[36px] sm:text-[24px] font-extrabold text-white">
              4.97/5
            </h4>
            <IoIosStar className="text-[#D9C79B] text-[40px]" />
            <span className="lg:text-[24px] md:text-[18px] sm:text-[16px] text-[16px] font-bold text-white">
              From 500+ Customer reviews
            </span>
          </div> */}
        </motion.div>
      </div>
    </div>
  );
}
