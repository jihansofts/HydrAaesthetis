"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface DripsCardProps {
  image: string;
  title: string;
  desc: string;
  slug: string;
}

export default function DripsCard({
  image,
  title,
  desc,
  slug,
}: DripsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.5 }}
      className="bg-[#2a2a2a] w-full p-6 rounded-lg text-white flex flex-col justify-between border border-[#CAB485]">
      <div className="flex justify-start mb-4">
        <Image
          src={image}
          alt={title}
          width={60}
          height={80}
          className="object-contain"
        />
      </div>

      <h3 className="text-[24px] font-inter font-bold mb-2">{title}</h3>

      <p className="text-[15px] text-white mb-4">
        {desc.slice(0, 50)}...{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={`https://drive.google.com/file/d/${slug}`}
          className="text-[#D6B36B] font-inter font-semibold hover:underline">
          Read More
        </Link>
      </p>

      <a
        target="_blank"
        href="https://www.myaestheticspro.com/BN/index.cfm?A78B66E7FFE2188433572F72D74E0F5F">
        <button className="bg-gradient-to-r px-8 py-3 font-inter from-[#CAB485] via-[#D9C9A1] to-[#8A6D42] text-[#1E1E1E] font-bold text-[16px] rounded-md transition hover:opacity-90">
          Book Consultation
        </button>
      </a>
    </motion.div>
  );
}
