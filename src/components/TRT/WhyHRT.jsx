import React from "react";
import whyHRT1 from "../../assets/trt/whyhrt1.png";
import whyHRT2 from "../../assets/trt/whyhrt2.png";

const WhyHRT = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="relative order-1 h-full min-h-[500px]">
          <div className="absolute top-0 left-0 w-6/12 sm:w-3/12 md:w-7/12 lg:w-5/12 z-10">
            <img
              src={whyHRT1}
              alt="HRT benefits"
              className="w-full h-auto rounded-xl shadow-2xl object-cover"
            />
          </div>

          <div className="absolute bottom-2/12 right-1/12 w-7/12 sm:w-3/12 md:w-7/12 lg:w-5/12 z-0">
            <img
              src={whyHRT2}
              alt="HRT treatment"
              className="w-full h-auto rounded-xl shadow-2xl object-cover"
            />
          </div>
        </div>

        <div className="order-2 md:pl-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Why Try Hormone Replacement Therapy (HRT) ?
          </h2>
          <p className="text-lg text-gray-200 mb-8">
            Hormone Replacement Therapy (HRT) helps restore hormonal balance,
            easing symptoms like fatigue, low libido, mood swings, and poor
            sleep. It supports overall well-being, boosts energy, sharpens
            mental clarity, and improves quality of life—especially for those
            experiencing age-related hormone decline.
          </p>

          <button
            className="
            relative overflow-hidden 
            font-bold py-4 px-8 rounded-lg 
            text-black
           bg-gradient-to-r from-[#C4AC7B] via-[#EEE1BA] to-[#836539]"
          >
            <span className="relative z-10">Request Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyHRT;
