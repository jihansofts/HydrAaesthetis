import React from "react";
import Button from "@/common/Button";
import PreptideCard from "@/common/PreptideCard";

// Correct type definition for card props (ensure PreptideCard expects this)
type PreptideCardProps = {
  productId: number;
  title: string;
  desc: string[];
  slug: string;
  price: number;
};

const VitaminsSection: React.FC = () => {
  const peptides: PreptideCardProps[] = [
    {
      productId: 1,
      title: "Vitamin C",
      slug: "1DH4jvwUMIMJgeR7ep8Wy1R5IhPX00NtU/preview",
      desc: [
        "Boost your immune system, enhance collagen production, and fight oxidative stress with powerful Vitamin C injections. Perfect for glowing skin, faster recovery, and overall wellness.",
      ],
      price: 200,
    },
    {
      productId: 2,
      title: "Thiamin (Vitamin B1)",
      slug: "1DH4jvwUMIMJgeR7ep8Wy1R5IhPX00NtU/preview",
      desc: [
        "Support your nervous system, increase energy, and improve mental clarity. Essential for turning food into fuel and reducing fatigue and brain fog.",
      ],
      price: 200,
    },
    {
      productId: 3,
      title: "Vitamin B12",
      slug: "1DH4jvwUMIMJgeR7ep8Wy1R5IhPX00NtU/preview",
      desc: [
        "Increase energy, lift your mood, and support metabolism with fast-acting B12 injections—ideal for staying sharp, active, and naturally energized daily.",
      ],
      price: 200,
    },
    {
      productId: 4,
      title: "Vitamin B6",
      slug: "1DH4jvwUMIMJgeR7ep8Wy1R5IhPX00NtU/preview",
      desc: [
        "Enhance brain function, balance mood, and support heart and immune health. Great for stress relief and improved focus.",
      ],
      price: 200,
    },
    {
      productId: 5,
      title: "Zofran",
      slug: "1DH4jvwUMIMJgeR7ep8Wy1R5IhPX00NtU/preview",
      desc: [
        "Fast-acting relief from nausea and vomiting caused by surgery, chemotherapy, or other treatments. Blocks brain signals that trigger nausea.",
      ],
      price: 200,
    },
    {
      productId: 6,
      title: "Vitamin B Complex",
      slug: "1DH4jvwUMIMJgeR7ep8Wy1R5IhPX00NtU/preview",
      desc: [
        "A balanced blend of B vitamins to fuel energy, metabolism, brain health, and reduce stress for optimal vitality.",
      ],
      price: 200,
    },
    {
      productId: 7,
      title: "Zinc",
      slug: "1DH4jvwUMIMJgeR7ep8Wy1R5IhPX00NtU/preview",
      desc: [
        "Strengthen your immune system, support hormone balance, and promote faster healing with zinc injections. This essential mineral plays a key role in metabolism, skin health, and cell repair. Ideal for boosting immunity...",
      ],
      price: 200,
    },
    {
      productId: 8,
      title: "Protonix",
      slug: "1DH4jvwUMIMJgeR7ep8Wy1R5IhPX00NtU/preview",
      desc: [
        "Reduces stomach acid to relieve acid reflux, GERD, and ulcers, promoting esophageal healing and comfort.",
      ],
      price: 200,
    },
  ];

  return (
    <section id="vitamins" className="bg-bgColor py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-white font-inter text-center text-[36px] md:text-[56px] font-extrabold mb-12">
          Vitamins Injections
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {peptides.map((item) => (
            <PreptideCard
              key={item.productId}
              productId={item.productId.toString()}
              title={item.title}
              desc={item.desc}
              slug={item.slug}
              price={item.price}
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
};

export default VitaminsSection;
