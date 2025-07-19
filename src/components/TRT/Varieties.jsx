import React from "react";
import varietie1 from "../../assets/trt/varietie1.png?url";
import varietie2 from "../../assets/trt/varietie2.png?url";
import varietie3 from "../../assets/trt/varietie3.png?url";
const Varieties = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
          View Our Varieties
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
          <div className="h-48 overflow-hidden rounded-lg">
            <img
              src={varietie1}
              alt="Blood Work"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-100 mb-3">
              Injectable (TRT)
            </h3>
            <p className="text-gray-200 mb-4">
              Experience consistent and effective testosterone levels with
              physician-prescribed injectable therapy. A proven method for
              boosting energy, mood, and vitality.
            </p>
          </div>
        </div>

        <div className="shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
          <div className="h-48 overflow-hidden rounded-lg">
            <img
              src={varietie2}
              alt="Book Consultation"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-100 mb-3">
              Pellets (Oral TRT)
            </h3>
            <p className="text-gray-200 mb-4">
              Enjoy long-lasting testosterone support with convenient,
              slow-release oral pellets. A hassle-free option for steady hormone
              balance and improved well-being.
            </p>
          </div>
        </div>

        <div className="shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
          <div className="h-48 overflow-hidden rounded-lg">
            <img
              src={varietie3}
              alt="Begin Your Journey"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-100 mb-3">
              Cream (TRT)
            </h3>
            <p className="text-gray-200 mb-4">
              A simple, non-invasive option—testosterone cream is applied daily
              to the skin for steady hormone absorption and improved energy,
              mood, and focus.
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
          <span className="relative z-10">Book Consultations</span>
        </button>
      </div>
    </div>
  );
};

export default Varieties;
