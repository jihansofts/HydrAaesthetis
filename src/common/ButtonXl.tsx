import React from "react";

interface ButtonXlProps {
  text: string;
  bg: string;
  textColor: string;
}
export default function ButtonXl({ text, bg, textColor }: ButtonXlProps) {
  return (
    <div className={`${bg} rounded-md w-[232px] text-center px-8 mt-5`}>
      <button
        className={`${textColor} w-full text-[16px] font-bold   py-4 rounded-lg `}>
        {text}
      </button>
    </div>
  );
}
