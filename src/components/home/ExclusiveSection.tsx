"use client";
import React from "react";
import Link from "next/link";
import Button from "@/common/Button";

const peptides = [
  {
    title: "AOD 9604",
    slug: "aod-9604",
    desc: "AOD 9604 is a modified form of amino acids 176-191 of the GH polypeptide. Investigators at Monash University discovered that the fat-reducing effects of GH appear to be controlled by a small region near one end of the GH molecule...",
  },
  {
    title: "BPC-157",
    slug: "bpc-157",
    desc: "AOD 9604 is a modified form of amino acids 176-191 of the GH polypeptide. Investigators at Monash University discovered that the fat-reducing effects of GH appear to be controlled by a small region near one end of the GH molecule...",
  },
  {
    title: "CEREBROLYSIN",
    slug: "cerebrolysin",
    desc: "AOD 9604 is a modified form of amino acids 176-191 of the GH polypeptide. Investigators at Monash University discovered that the fat-reducing effects of GH appear to be controlled by a small region near one end of the GH molecule...",
  },
  {
    title: "CJC1295+IPAMORELIN",
    slug: "cjc1295-ipamorelin",
    desc: " amino acids 176-191 of the GH polypeptide. Investigators at Monash University discovered that the fat-reducing effects of GH appear to be controlled by a small region near one end of the GH molecule...",
  },
  {
    title: "AOD 9604",
    slug: "aod-9604",
    desc: "AOD 9604 is a modified form of amino acids 176-191 of the GH polypeptide. Investigators at Monash University discovered that the fat-reducing effects of GH appear to be controlled by a small region near one end of the GH molecule...",
  },
  {
    title: "BPC-157",
    slug: "bpc-157",
    desc: "AOD 9604 is a modified form of amino acids 176-191 of the GH polypeptide. Investigators at Monash University discovered that the fat-reducing effects of GH appear to be controlled by a small region near one end of the GH molecule...",
  },
  {
    title: "CEREBROLYSIN",
    slug: "cerebrolysin",
    desc: "AOD 9604 is a modified form of amino acids 176-191 of the GH polypeptide. Investigators at Monash University discovered that the fat-reducing effects of GH appear to be controlled by a small region near one end of the GH molecule...",
  },
  {
    title: "CJC1295+IPAMORELIN",
    slug: "cjc1295-ipamorelin",
    desc: " amino acids 176-191 of the GH polypeptide. Investigators at Monash University discovered that the fat-reducing effects of GH appear to be controlled by a small region near one end of the GH molecule...",
  },
];

export default function ExclusiveSection() {
  return (
    <section className="bg-bgColor py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-white text-center text-[36px] md:text-[56px] font-extrabold mb-12">
          Exclusive Peptides
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {peptides.map((item, index) => (
            <div
              key={index}
              className="bg-[#2a2a2a] w-full p-6 rounded-lg text-white flex flex-col justify-between border border-[#CAB485]">
              <h3 className="text-[32px] font-extrabold mb-3 break-words leading-snug">
                {item.title}
              </h3>

              <p className="text-[16px] font-normal text-white mb-4">
                {item.desc}{" "}
                <Link
                  href={`/peptides/${item.slug}`}
                  className="text-[#d6b36b] font-medium underline hover:text-[#cbb688]">
                  Read More
                </Link>
              </p>

              <button className="mt-auto bg-gradient text-[#1E1E1E] hover:bg-[#cbb688]/10 px-4 py-2 rounded-md font-semibold transition">
                Book Consultation
              </button>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-12 w-full text-center">
          <Button text="See More Peptides" />
        </div>
      </div>
    </section>
  );
}
