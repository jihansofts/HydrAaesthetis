import Button from "@/common/Button";
import PeptideCard from "@/common/PeptideCard";
import React from "react";

const peptides = [
  {
    title: "Vitamin C",
    slug: "aod-9604",
    desc: "AOD 9604 is a modified form of amino acids 176-191 of the GH polypeptide. Investigators at Monash University discovered that the fat-reducing effects of GH appear to be controlled by a small region near one end of the GH molecule...",
  },
  {
    title: "Thiamin (B1)",
    slug: "bpc-157",
    desc: "AOD 9604 is a modified form of amino acids 176-191 of the GH polypeptide. Investigators at Monash University discovered that the fat-reducing effects of GH appear to be controlled by a small region near one end of the GH molecule...",
  },
  {
    title: "Thiamin (B1)",
    slug: "cerebrolysin",
    desc: "AOD 9604 is a modified form of amino acids 176-191 of the GH polypeptide. Investigators at Monash University discovered that the fat-reducing effects of GH appear to be controlled by a small region near one end of the GH molecule...",
  },
  {
    title: "Vitamin C",
    slug: "cjc1295-ipamorelin",
    desc: " AOD 9604 is a modified form of amino acids 176-191 of the GH polypeptide. Investigators at Monash University discovered that the fat-reducing effects of GH appear to be controlled by a small region near one end of the GH molecule...",
  },
  {
    title: "Vitamin C",
    slug: "aod-9604",
    desc: "AOD 9604 is a modified form of amino acids 176-191 of the GH polypeptide. Investigators at Monash University discovered that the fat-reducing effects of GH appear to be controlled by a small region near one end of the GH molecule...",
  },
  {
    title: "Thiamin (B1)",
    slug: "bpc-157",
    desc: "AOD 9604 is a modified form of amino acids 176-191 of the GH polypeptide. Investigators at Monash University discovered that the fat-reducing effects of GH appear to be controlled by a small region near one end of the GH molecule...",
  },
  {
    title: "Thiamin (B1)",
    slug: "cerebrolysin",
    desc: "AOD 9604 is a modified form of amino acids 176-191 of the GH polypeptide. Investigators at Monash University discovered that the fat-reducing effects of GH appear to be controlled by a small region near one end of the GH molecule...",
  },
  {
    title: "Vitamin C",
    slug: "cjc1295-ipamorelin",
    desc: "AOD 9604 is a modified form of amino acids 176-191 of the GH polypeptide. Investigators at Monash University discovered that the fat-reducing effects of GH appear to be controlled by a small region near one end of the GH molecule...",
  },
];
export default function VitaminsSection() {
  return (
    <section className="bg-bgColor py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-white font-inter text-center text-[36px] md:text-[56px] font-extrabold mb-12">
          Vitamins
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {peptides.map((item, index) => (
            <PeptideCard
              key={index}
              title={item.title}
              desc={item.desc}
              slug={item.slug}
            />
          ))}
        </div>
        <div className="mx-auto mt-12 w-full text-center">
          <Button text="See More Peptides" borderLeanr="gradient-border" />
        </div>
      </div>
    </section>
  );
}
