import React from "react";
import acivei1 from "../../assets/trt/acive1.png";
import acivei2 from "../../assets/trt/acive2.png";
import acivei3 from "../../assets/trt/acive3.png";

const Achieve = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
          Achieve Results in Only 3 Easy Steps
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
          <div className="h-48 overflow-hidden rounded-lg">
            <img
              src={acivei1}
              alt="Blood Work"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-100 mb-3">
              Blood Work (Quest Labs)
            </h3>
            <p className="text-gray-200 mb-4">
              Get fast, accurate hormone testing through our partner, Quest
              Diagnostics. Your results help us tailor the perfect TRT plan for
              you.
            </p>
          </div>
        </div>

       
        <div className="shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
          <div className="h-48 overflow-hidden rounded-lg">
            <img
              src={acivei2}
              alt="Book Consultation"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-100 mb-3">
              Book Consultation
            </h3>
            <p className="text-gray-200 mb-4">
              Schedule a 1-on-1 consultation with our experts to discuss your
              symptoms, goals, and personalized TRT options. Take the first step
              toward feeling your best.
            </p>
          </div>
        </div>

        <div className="shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
          <div className="h-48 overflow-hidden rounded-lg">
            <img
              src={acivei3}
              alt="Begin Your Journey"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-100 mb-3">
              Begin Your Journey
            </h3>
            <p className="text-gray-200 mb-4">
              Start your path to renewed energy, strength, and confidence. Take
              control of your health with personalized TRT support.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-5">
        <button
          className="
            relative overflow-hidden 
            font-bold py-3  px-16 rounded-lg 
            text-black
           bg-gradient-to-r from-[#C4AC7B] via-[#EEE1BA] to-[#836539]"
        >
          <span className="relative z-10">Get Started</span>
        </button>
      </div>
    </div>
  );
};

export default Achieve;
