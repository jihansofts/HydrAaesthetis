import React from "react";
import Image from "next/image";
import Button from "./Button";
import { IoIosStar } from "react-icons/io";
export default function Hero() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between xl:gap-2 lg:gap-5 md:px-0 px-5">
        <div className="flex flex-col space-y-5 justify-center items-start pr-20">
          <h2 className="text-white lg:text-[64px] md:text-[56px] sm:text-[40px] text-[32px]  font-extrabold">
            Revitalize your body. Renew your confidence.
          </h2>
          <p className="text-white md:text-[16px] text-[14px] font-medium leading-9">
            Welcome to Hydra Aesthetics – your destination for wellness and
            beauty. From Botox and fillers to IV hydration, hormone therapy, and
            vitamin infusions, we offer personalized treatments to help you look
            and feel your best.
          </p>
          <div className="relative inline-block lg:text-[22px] md:text-[18px] sm:text-[16px] text-[14px] lg:w-[440px] md:w-[380px] sm:w-[300px] w-[300px] font-extrabold text-white z-10">
            <span className="relative z-10 ml-3">
              What type of services do you want?
            </span>
            <span className="absolute left-0 bottom-1 w-full h-[10px] bg-[#D9C79B69] z-0"></span>
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
