import Button from "@/common/Button";
import PeptideCard from "@/common/PeptideCard";
import React from "react";

const peptides = [
  {
    title: "Vitamin C",
    slug: "1DH4jvwUMIMJgeR7ep8Wy1R5IhPX00NtU/preview",
    desc: "Strengthen your immune system, boost collagen production, and fight oxidative stress with powerful Vitamin C injections. Perfect for enhancing skin health, recovery, and overall wellness. A natural way to stay healthy, radiant, and resilient...",
  },
  {
    title: "Thiamin (B1)",
    slug: "1DH4jvwUMIMJgeR7ep8Wy1R5IhPX00NtU/preview",
    desc: "Support your nervous system, improve energy levels, and enhance mental clarity with Thiamin (Vitamin B1) injections. Essential for converting food into fuel and maintaining healthy nerve function.Great for reducing fatigue, brain fog....",
  },
  {
    title: "Vitamin B12",
    slug: "1DH4jvwUMIMJgeR7ep8Wy1R5IhPX00NtU/preview",
    desc: "Boost energy, improve mood, and support metabolism with fast-acting B12 injections. Perfect for fighting fatigue and enhancing overall wellness. Ideal for those looking to stay sharp, active, and naturally energized every day...",
  },
  {
    title: "Vitamin B6",
    slug: "1DH4jvwUMIMJgeR7ep8Wy1R5IhPX00NtU/preview",
    desc: "Boost brain function, support mood regulation, and promote heart health with Vitamin B6 injections. This essential nutrient helps balance hormones and improves immune function. Ideal for reducing stress, enhancing focus...",
  },
  {
    title: "Zofran",
    slug: "1DH4jvwUMIMJgeR7ep8Wy1R5IhPX00NtU/preview",
    desc: "Zofran is a fast-acting anti-nausea medication used to prevent and treat nausea and vomiting caused by surgery, chemotherapy, or other treatments. It works by blocking serotonin signals in the brain that trigger nausea...",
  },
  {
    title: "Vitamin B Complex",
    slug: "1DH4jvwUMIMJgeR7ep8Wy1R5IhPX00NtU/preview",
    desc: "Fuel your body with a full spectrum of B vitamins to support energy, metabolism, brain health, and stress relief. Our B Complex injections deliver a balanced blend for optimal performance and vitality...",
  },
  {
    title: "Zinc",
    slug: "1DH4jvwUMIMJgeR7ep8Wy1R5IhPX00NtU/preview",
    desc: "Strengthen your immune system, support hormone balance, and promote faster healing with zinc injections. This essential mineral plays a key role in metabolism, skin health, and cell repair. Ideal for boosting immunity...",
  },
  {
    title: "Protonix",
    slug: "1DH4jvwUMIMJgeR7ep8Wy1R5IhPX00NtU/preview",
    desc: "Protonix is a proton pump inhibitor (PPI) that reduces stomach acid production, helping relieve symptoms of acid reflux, GERD, and stomach ulcers.  It promotes healing of the esophagus and...",
  },
];
export default function VitaminsSection() {
  return (
    <section id="vitamins" className="bg-bgColor py-20">
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
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1DH4jvwUMIMJgeR7ep8Wy1R5IhPX00NtU/preview">
            <Button text="See More Vitamins" borderLeanr="gradient-border" />
          </a>
        </div>
      </div>
    </section>
  );
}
