"use client";

import React from "react";
import Image from "next/image";
import ButtonXl from "./ButtonXl";

interface TreatmentSectionProps {
  title: string;
  desc: string;
  image: string;
  bgBtnColor: string;
  textColor: string;
  buttonText: string;
  reverse?: boolean;
}

export default function HormoneSection({
  title,
  desc,
  image,
  bgBtnColor,
  textColor,
  buttonText,
  reverse = false,
}: TreatmentSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 justify-between items-center gap-8 py-10">
      {reverse ? (
        <>
          {/* Image */}
          <div className="lg:col-span-5 md:col-span-12   rounded-lg ">
            <Image
              src={image}
              alt={title}
              width={500}
              height={500}
              className="w-full h-full"
            />
          </div>

          {/* Text */}
          <div className="lg:col-span-7 ml-10 md:col-span-12 space-y-10">
            <div className="max-w-3xl">
              <h3 className="lg:text-[48px] text-white md:text-[56px] sm:text-[40px] text-[32px] font-extrabold font-inter">
                {title}
              </h3>
              <p className="text-[16px] font-inter font-medium leading-7 text-white mt-5 mr-20">
                {desc}
              </p>
            </div>
            <ButtonXl text={buttonText} bg={bgBtnColor} textColor={textColor} />
          </div>
        </>
      ) : (
        <>
          {/* Text */}
          <div className="lg:col-span-7 md:col-span-12 space-y-10">
            <div className="max-w-3xl">
              <h3 className="lg:text-[48px] text-white md:text-[56px] sm:text-[40px] text-[32px] font-extrabold font-inter">
                {title}
              </h3>
              <p className="text-[16px] font-inter font-medium leading-7 text-white mt-5 mr-20">
                {desc}
              </p>
            </div>
            <ButtonXl
              text={buttonText}
              bg={bgBtnColor}
              textColor={textColor}
            />
          </div>

          {/* Image */}
          <div className="lg:col-span-5 md:col-span-12 rounded-lg">
            <Image
              src={image}
              alt={title}
              width={500}
              height={500}
              className="w-full h-full"
            />
          </div>
        </>
      )}
    </div>
  );
}
