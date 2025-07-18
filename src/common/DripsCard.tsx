// components/DripsCard.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

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
    <div className="bg-[#2a2a2a] w-full p-6 rounded-lg text-white flex flex-col justify-between border border-[#CAB485]">
      <div className="flex justify-start mb-4">
        <Image
          src={image}
          alt={title}
          width={80}
          height={80}
          className="object-contain"
        />
      </div>

      <h3 className="text-[24px] font-inter font-bold mb-2">{title}</h3>

      <p className="text-[15px] text-white mb-4">
        {desc.slice(0, 50)}...{" "}
        <Link
          href={slug}
          className="text-[#D6B36B] font-inter font-semibold hover:underline">
          Read More
        </Link>
      </p>

      <button className="bg-gradient-to-r font-inter from-[#E0C57C] to-[#BFA15A] text-[#1E1E1E] font-semibold py-2 rounded-md transition hover:opacity-90">
        Book Consultation
      </button>
    </div>
  );
}
