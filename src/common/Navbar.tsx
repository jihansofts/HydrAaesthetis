"use client";
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { HiMenu, HiX } from "react-icons/hi";
import Button from "./Button";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop Our Products", href: "#" },
  { label: "Locations", href: "#" },
  { label: "The Company", href: "#" },
];

const services = [
  {
    label: "TRT (Testosterone Therapy)",
    href: "/trt-testosterone-therapy",
    submenu: [
      {
        label: "Injectable (TRT)",
        href: "/trt-testosterone-therapy",
      },
      { label: "Oral (TRT)", href: "/trt-testosterone-therapy" },
      { label: "Cream (TRT)", href: "/trt-testosterone-therapy" },
      { label: "Blood Tests", href: "/trt-testosterone-therapy" },
      { label: "HCG", href: "/trt-testosterone-therapy" },
    ],
  },
  {
    label: "HRT (Hormone Therapy)",
    submenu: [
      { label: "HRT Option 1", href: "/hrt/option-1" },
      { label: "HRT Option 2", href: "/hrt/option-2" },
    ],
  },
  {
    label: "Lose Weight",
    submenu: [
      { label: "Trizepatide", href: "/lose-weight/plan-a" },
      { label: "Trizepatide + B12", href: "/lose-weight/plan-b" },
      { label: "Labs", href: "/lose-weight/plan-c" },
    ],
  },
  {
    label: "Blood Work",
    href: "/blood-work",
    submenu: [{ label: "Quest Diagnostics Labs", href: "/blood-work" }],
  },
  {
    label: "Supplements & Vitamins",
    href: "/vitamins",
    submenu: [], // No submenu items, but you can add if needed
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-bgColor text-white w-full">
      {/* Top Nav */}
      <div className="container mx-auto flex justify-between items-center px-6 md:px-16 py-8">
        <div className="text-2xl font-bold text-white">
          <Link href="/" className="hover:text-[#d6b36b]">
            Logo<span className="text-[#d6b36b]">.</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[16px] font-medium hover:text-[#d6b36b]">
              {link.label}
            </a>
          ))}
        </div>

        <div>
          <Button text=" Go To Service" borderLeanr="gradient-border" />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Top Gold Line */}
      <div className="h-[2px] bg-gradient" />

      {/* Main Navigation (Desktop only) */}
      <div className="hidden md:flex justify-center gap-8 py-8 bg-[#1f1f1f]">
        {services.map((item, index) => (
          <div className="relative group" key={index}>
            <Link
              href={item.href || "#"}
              className="flex items-center cursor-pointer gap-1 hover:text-[#d6b36b]">
              {item.label}
              {item.submenu.length > 0 && <FiChevronDown />}
            </Link>
            {/* Dropdown */}
            {item.submenu.length > 0 && (
              <div className="absolute border-2  py-5 px-5 w-48 border-[#C1AC7D] left-0 top-full mt-2 bg-[#1f1f1f] text-white rounded-2xl shadow-lg min-w-[180px] z-50 opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-700 ease-in-out">
                {item.submenu.map((sub, i) => (
                  <a
                    key={i}
                    href={sub.href || "#"}
                    className="block text-[16px] font-medium px-4 py-2 hover:bg-[#d6b36b]/20">
                    {sub.label}
                  </a>
                ))}
                {item.submenu.length > 0 && (
                  <Link
                    href={item.href || "#"}
                    className="bg-gradient w-1/2 cursor-pointer rounded-3xl text-[#1E1E1E] text-[10px] font-semibold block px-4 py-2 mx-auto">
                    View All
                  </Link>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom Gold Line */}
      <div className="h-[2px] bg-gradient" />

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-[#2a2a2a] px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="block">
              {link.label}
            </a>
          ))}

          <div className="pt-4 border-t border-primaryGradient">
            {services.map((item, index) => (
              <div key={index} className="mb-2">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex justify-between items-center w-full text-left">
                  {item.label}
                  {item.submenu.length > 0 && (
                    <FiChevronDown
                      className={`transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>
                {openIndex === index && item.submenu.length > 0 && (
                  <div className="ml-4 mt-2 space-y-1">
                    {item.submenu.map((sub, i) => (
                      <a
                        key={i}
                        href={sub.href || "#"}
                        className="block text-sm text-gray-300 hover:text-white">
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
