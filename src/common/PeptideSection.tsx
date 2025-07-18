"use client";

import React from "react";
import Image from "next/image";
import ButtonXl from "./ButtonXl";

interface PeptideSectionProps {
  title: string;
  desc: string;
  image: string;
  reverse?: boolean;
  buttonText: string;
}

export default function PeptideSection({
  title,
  desc,
  image,
  reverse = false,
  buttonText 
}: PeptideSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12  lg:grid-cols-12 items-center gap-8 gap-x-10 lg:mt-20 md:mt-8 pt-10">
      {/* Conditionally render text/image blocks */}
      {reverse ? (
        <>
          {/* Image */}
          <div className="lg:col-span-5 md:flex-col-reverse md:col-span-12 bg-primary py-16 px-10 rounded-lg">
            <Image
              src={image}
              alt={title}
              width={500}
              height={500}
              className="w-full h-full"
            />
          </div>
          {/* Text */}
          <div className="lg:col-span-7 md:col-span-12 space-y-5">
            <h3 className="lg:text-[48px] mr-10 md:text-[56px] sm:text-[40px] text-[32px] font-extrabold font-inter">
              {title}
            </h3>
            <p className="text-[16px] font-inter font-medium leading-7 text-bgColor mt-5 mr-20">
              {desc}
            </p>
            <ButtonXl text={buttonText} bg="bg-bgColor" />
          </div>
        </>
      ) : (
        <>
          {/* Text */}
          <div className="lg:col-span-7 md:flex-col-reverse md:col-span-12 space-y-5">
            <div className="max-w-3xl">
              <h3 className="lg:text-[48px] md:text-[56px] sm:text-[40px] text-[32px] font-extrabold font-inter">
                {title}
              </h3>
              <p className="text-[16px] font-inter font-medium leading-7 text-bgColor mt-5 mr-20">
                {desc}
              </p>
            </div>
            <ButtonXl text={buttonText} bg="bg-bgColor" />
          </div>
          {/* Image */}
          <div className="lg:col-span-5 md:col-span-12 bg-primary py-16 px-10 rounded-lg">
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
