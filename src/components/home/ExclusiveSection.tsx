"use client";
import React from "react";
import Link from "next/link";
import Button from "@/common/Button";
import PeptideCard from "@/common/PeptideCard";

const peptides = [
  {
    title: "AOD 9604",
    slug: "1L0mIaJnEuZTKZ_NpZGAoh5ScIvPuEeP-/preview",
    desc: "AOD 9604 is a modified form of amino acids 176-191 of the GH polypeptide. Investigators at Monash University discovered that the fat-reducing effects of GH appear to be controlled by a small region near one end of the GH molecule...",
  },
  {
    title: "BPC-157",
    slug: "1L0mIaJnEuZTKZ_NpZGAoh5ScIvPuEeP-/preview",
    desc: "AOD 9604 is a modified form of amino acids 176-191 of the GH polypeptide. Investigators at Monash University discovered that the fat-reducing effects of GH appear to be controlled by a small region near one end of the GH molecule...",
  },
  {
    title: "CEREBROLYSIN",
    slug: "1L0mIaJnEuZTKZ_NpZGAoh5ScIvPuEeP-/preview",
    desc: "AOD 9604 is a modified form of amino acids 176-191 of the GH polypeptide. Investigators at Monash University discovered that the fat-reducing effects of GH appear to be controlled by a small region near one end of the GH molecule...",
  },
  {
    title: "CJC1295+IPAMORELIN",
    slug: "1L0mIaJnEuZTKZ_NpZGAoh5ScIvPuEeP-/preview",
    desc: " amino acids 176-191 of the GH polypeptide. Investigators at Monash University discovered that the fat-reducing effects of GH appear to be controlled by a small region near one end of the GH molecule...",
  },
  {
    title: "DIHEXA",
    slug: "1L0mIaJnEuZTKZ_NpZGAoh5ScIvPuEeP-/preview",
    desc: "Dihexa is a peptide variant derived from angiotensin IV which has been found to potently improve cognitive function in animal models of disease such as Alzheimer’sAngiotensin IV is a derivative of the potent vasoconstrictor....",
  },
  {
    title: "DSIP",
    slug: "1L0mIaJnEuZTKZ_NpZGAoh5ScIvPuEeP-/preview",
    desc: "DSIP is a well-known neuromodulator and natural somnogenic nonapeptide with many other physiological functions. It is typically found in the brain and easily passes the blood-brain barrier....",
  },
  {
    title: "EPITALON",
    slug: "1L0mIaJnEuZTKZ_NpZGAoh5ScIvPuEeP-/preview",
    desc: "Epithalon is the synthetic version of the polypeptide Epithalamin which is naturally produced in humans. The pineal peptide preparation is secreted in the epithalamium-epiphyseal region of the brain. Its more prominent tasks are: to regulate...",
  },
  {
    title: "FENBENDAZOLE",
    slug: "1L0mIaJnEuZTKZ_NpZGAoh5ScIvPuEeP-/preview",
    desc: "Fenbendazol acts by destroying microtubules that sustain the structure of cancer cells and its ability to divide and multiply. It also inhibits the cancer cells ability to process sugar and survive by the metabolism of sugar...",
  },
];

export default function ExclusiveSection() {
  return (
    <section className="bg-bgColor py-20">
      <div className="container mx-auto px-5">
        <h2 className="text-white font-inter text-center text-[36px] md:text-[56px] font-extrabold mb-12">
          Exclusive Peptides
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
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1L0mIaJnEuZTKZ_NpZGAoh5ScIvPuEeP-/preview">
            <Button text="See More Peptides" borderLeanr="gradient-border" />
          </a>
        </div>
      </div>
    </section>
  );
}
