import React from "react";
import Image from "next/image";
import Button from "./Button";
import { IoIosStar } from "react-icons/io";

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
}
export default function Hero({ title, subtitle, description }: HeroProps) {
  return (
    <div className="container px-5 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between xl:gap-2 lg:gap-5 md:px-0 px-5">
        <div className="flex flex-col space-y-5 justify-center items-start lg:pr-20 md:pr-0 pr-0">
          <h2 className="text-white lg:text-[64px] md:text-[56px] sm:text-[40px] text-[32px] font-extrabold">
            {title || "Welcome to Hydra Aesthetics"}
          </h2>
          <p className="text-white md:text-[16px] text-[14px] font-medium leading-9">
            {description || "Your journey to wellness and beauty starts here."}
          </p>

          <div className="relative inline-block font-extrabold text-white  z-10">
            <span className="relative inline-block ml-1 lg:text-[22px] md:text-[18px] sm:text-[16px] text-[14px]">
              {subtitle || "Explore Our Services"}
              <span className="absolute bottom-[-2px] p-2 left-[-8px] right-[-8px] h-[10px] bg-[#D9C79B69] z-[-1] "></span>
            </span>
          </div>

          <div className="mt-5">
            <Button text=" Go To Service" borderLeanr="gradient-border" />
          </div>
        </div>
        <div>
          <Image
            src="/images/hero.png"
            alt="hero"
            width={500}
            height={500}
            className="w-full h-full"
          />
          <div className="flex items-center gap-x-5 justify-center">
            <h4 className="lg:text-[40px] md:text-[36px] sm:text-[24px] font-extrabold text-white">
              4.97/5
            </h4>
            <IoIosStar className="text-[#D9C79B] text-[40px]" />
            <span className="lg:text-[24px] md:text-[18px] sm:text-[16px] text-[16px] font-bold text-white">
              From 500+ Customer reviews
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
