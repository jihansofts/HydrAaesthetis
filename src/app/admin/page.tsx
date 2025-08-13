"use client";
import Button from "@/common/Button";
import React from "react";

export default function Page() {
  return (
    <div className="min-h-screen text-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-16 py-8">
        {/* Form grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side - Form */}
          <div className="space-y-5">
            {/* Title */}
            <h1 className="text-3xl sm:text-[40px] font-extrabold mb-8">
              Provide Information
            </h1>
            <div>
              <label className="block text-lg sm:text-[20px] font-bold mb-2 text-white">
                Category Of Product
              </label>
              <select className="w-full bg-[#2E2E2E] border border-[#2E2E2E] rounded-xl px-4 py-3 sm:py-4 text-white focus:outline-none focus:border-[#C5AE7D]">
                <option value="option1">IV Drips</option>
                <option value="option2">Vitamins</option>
              </select>
            </div>
            <div>
              <label className="block text-lg sm:text-[20px] font-bold mb-2 text-white">
                Name Of The Product
              </label>
              <input
                type="text"
                className="w-full bg-[#2E2E2E] border border-[#2E2E2E] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C5AE7D]"
              />
            </div>

            <div>
              <label className="block text-lg sm:text-[20px] font-bold mb-2 text-white">
                Enter Price
              </label>
              <input
                type="text"
                className="w-full bg-[#2E2E2E] border border-[#2E2E2E] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C5AE7D]"
              />
            </div>

            <div>
              <label className="block text-lg sm:text-[20px] font-bold mb-2 text-white">
                Description
              </label>
              <textarea
                rows={5}
                className="w-full bg-[#2E2E2E] border border-[#2E2E2E] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C5AE7D]"></textarea>
            </div>
          </div>

          {/* Right side - Image Upload */}
          <div className="bg-[#2E2E2E] rounded-lg p-6 sm:p-10 flex flex-col items-center justify-center mt-6 lg:mt-0">
            <h3 className="text-2xl sm:text-[32px] font-inter font-bold text-white mb-6 sm:mb-10 text-center">
              Upload Image
            </h3>
            <label className="w-full h-56 sm:h-80 border-2 border-dashed border-[#D6A553] flex flex-col items-center justify-center cursor-pointer bg-[#494D47] rounded-md hover:bg-gray-700 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-[#D6A553] mb-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              <span className="text-[#D6A553] text-center px-2">
                Drag & drop or click to{" "}
                <span className="underline">choose from files</span>
              </span>
              <input type="file" className="hidden" />
            </label>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-8">
          <a target="_blank" href="">
            <Button
              text="Add Product"
              bg="bg-[#2E2E2E]"
              borderLeanr="gradient-border"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
