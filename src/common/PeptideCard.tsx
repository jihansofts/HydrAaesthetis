// components/PeptideCard.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

interface PeptideCardProps {
  title: string;
  desc: string;
  slug: string;
}

export default function PeptideCard({ title, desc, slug }: PeptideCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.9 }}
      className="bg-[#2a2a2a] w-full p-6 rounded-lg text-white flex flex-col justify-between border border-[#CAB485]">
      <h3 className="text-[32px] font-inter font-extrabold mb-3 break-words leading-snug">
        {title}
      </h3>

      <p className="text-[16px] font-inter font-normal text-white mb-4">
        {desc}{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://drive.google.com/file/d/${slug}`}
          className="text-[#d6b36b] font-inter font-medium underline hover:text-[#cbb688]">
          Read More
        </a>
      </p>

      <button className="mt-auto bg-gradient text-[#1E1E1E] hover:bg-[#cbb688]/10 px-4 py-2 rounded-md font-semibold transition">
        Book Consultation
      </button>
    </motion.div>
  );
}
