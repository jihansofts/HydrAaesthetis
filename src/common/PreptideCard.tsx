import React from "react";
import { motion } from "framer-motion";
import { TbShoppingBagPlus } from "react-icons/tb";
import { useAppContext } from "@/context/AppContext";

type PreptideCardProps = {
  productId: string;
  title: string;
  desc: string[];
  slug: string;
  price: number;
};

const PreptideCard: React.FC<PreptideCardProps> = ({
  productId,
  title,
  desc,
  slug,
  price,
}) => {
  const { addToCart, cartItems } = useAppContext();
  const cartItem = cartItems.find((item) => item.productId === productId);
  const itemQuantity = cartItem ? cartItem.quantity : 0;

  const handleAddToCart = () => {
    addToCart({ productId, title, desc, slug, price, quantity: 1 });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, duration: 0.9 }}
      className="bg-[#2a2a2a] w-full min-h-[350px] p-6 rounded-lg text-white flex flex-col justify-between border border-[#CAB485]">
      <div className="grid grid-cols-12 items-center">
        <h3 className="col-span-11 text-[32px] font-inter font-extrabold mb-3 break-words leading-snug">
          {title}
        </h3>

        <div className="col-span-1 relative">
          <TbShoppingBagPlus
            className="w-6 h-6 text-[#d6b36b] hover:text-[#cbb688] cursor-pointer"
            onClick={handleAddToCart}
          />
          {itemQuantity > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {itemQuantity}
            </span>
          )}
        </div>
      </div>

      <p
        className="text-[16px] font-inter font-normal text-[] mb-2"
        dangerouslySetInnerHTML={{ __html: desc }}></p>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={`https://drive.google.com/file/d/${slug}`}
        className="text-[#d6b36b] font-inter font-medium underline hover:text-[#cbb688]">
        Read More
      </a>
      <a
        target="_blank"
        href="https://www.myaestheticspro.com/BN/index.cfm?A78B66E7FFE2188433572F72D74E0F5F">
        <button className="bg-gradient-to-r px-8 py-3 font-inter from-[#CAB485] via-[#D9C9A1] to-[#8A6D42] text-[#1E1E1E] font-bold text-[16px] rounded-md transition hover:opacity-90">
          Book Consultation
        </button>
      </a>
    </motion.div>
  );
};

export default PreptideCard;
