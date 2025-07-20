import React from "react";
import Image from "next/image";


const HeroPage = () => {
  return (
    <div className="bg-[#252525]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Recharge Your <br />
              Strength. Rediscover <br /> Your Drive.
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Experience renewed energy, focus, and vitality with personalized
              Testosterone Replacement Therapy designed to help you feel like
              yourself again.
            </p>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-200 mb-4 relative inline-block">
                <span className="relative z-20">TRT product types ?</span>
                <span className="absolute left-0 -bottom-2 w-full h-0.5 bg-gradient-to-r from-[#C4AC7B] via-[#EEE1BA] to-[#836539] z-10"></span>
              </h2>
            </div>

            <button
              className="
            relative overflow-hidden group
            font-bold py-3 px-6 rounded-lg 
            bg-transparent
            hover:border-gradient-to-r hover:from-[#C4AC7B] hover:via-[#EEE1BA] hover:to-[#836539] border border-amber-300
            transition-all duration-300
          ">
              <span
                className="
              relative z-10 
              bg-gradient-to-r from-[#C4AC7B] via-[#EEE1BA] to-[#836539] 
              bg-clip-text text-transparent
              group-hover:brightness-110
              transition-all duration-300
            ">
                Go To Products
              </span>
              <span
                className="
              absolute inset-0 
              bg-gradient-to-r from-[#C4AC7B] via-[#EEE1BA] to-[#836539] 
              opacity-0 group-hover:opacity-10
              transition-opacity duration-300
            "></span>
            </button>
          </div>

          <div className="order-1 md:order-2">
            <Image
              src="/images/mask-group.png"
              width={500}
              height={500}
              alt="TRT Therapy"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default HeroPage;
