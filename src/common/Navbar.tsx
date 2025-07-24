"use client";
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { HiMenu, HiX } from "react-icons/hi";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop Our Products", href: "/#nicotinamide" },
  // { label: "Women’s Choice", href: "/#botox" },
  // { label: "Men’s Choice", href: "/#hormone" },
];

const services = [
  {
    label: "TRT (Testosterone Therapy)",
    href: "/trt-testosterone-therapy",
    submenu: [
      { label: "Injectable (TRT)", href: "/trt-testosterone-therapy" },
      { label: "Oral (TRT)", href: "/trt-testosterone-therapy" },
      { label: "Cream (TRT)", href: "/trt-testosterone-therapy" },
      { label: "Blood Tests", href: "/trt-testosterone-therapy" },
      { label: "HCG", href: "/trt-testosterone-therapy" },
    ],
  },
  {
    label: "HRT (Hormone Therapy)",
    href: "#hormone",
    submenu: [],
  },
  {
    label: "Weight Lose",
    href: "/weight-lose",
    submenu: [
      { label: "Trizepatide", href: "/weight-lose" },
      { label: "Trizepatide + B12", href: "/weight-lose" },
      { label: "Labs", href: "/weight-lose" },
    ],
  },
  {
    label: "Blood Work",
    href: "/blood-work",
    submenu: [{ label: "Quest Diagnostics Labs", href: "/blood-work" }],
  },
  {
    label: "Vitamin Shots",
    href: "#vitamins",
    submenu: [],
  },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const navigateToHash = (e: React.MouseEvent, href: string) => {
    // Only handle if it's a hash link
    if (href.startsWith("#")) {
      e.preventDefault();
      if (pathname !== "/") {
        // Navigate to home page with hash
        router.push(`/${href}`);
      } else {
        // Scroll to section on home page
        const section = document.querySelector(href);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    // Regular links will handle navigation normally
  };

  return (
    <div className="bg-bgColor text-white w-full">
      {/* Top Nav */}
      <div className="container mx-auto flex justify-between items-center px-6 md:px-16 py-8">
        <div className="text-2xl font-bold text-white">
          <Link href="/" className="hover:text-[#d6b36b]">
            <div className="flex items-center gap-x-4 justify-start">
              <Image
                src="/images/logo.svg"
                alt="Hydra Aesthetics"
                width={150}
                height={150}
                className="w-24 h-24"
              />
              <h2 className="text-2xl font-bold bg-gradient-to-r from-[#C4AC7B] via-[#EEE1BA] to-[#836539] bg-clip-text text-transparent">
                Hydra Aesthetics
              </h2>
            </div>
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

        <div className="hidden md:flex">
          <a
            target="_blank"
            href="https://www.myaestheticspro.com/BN/index.cfm?A78B66E7FFE2188433572F72D74E0F5F">
            <Button text="Contact Us" borderLeanr="gradient-border" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? (
              <HiX className="text-[#d6b36b]" size={24} />
            ) : (
              <HiMenu className="text-[#d6b36b]" size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Top Gold Line */}
      <div className="h-[2px] bg-gradient" />

      {/* Main Navigation (Desktop only) */}
      <div className="hidden md:flex justify-center gap-8 py-8 bg-[#1f1f1f]">
        {services.map((item, index) => (
          <div
            className="relative group"
            key={index}
            onMouseEnter={() => setHoveredMenu(item.label)}
            onMouseLeave={() => setHoveredMenu(null)}>
            <Link
              href={item.href}
              onClick={(e) => navigateToHash(e, item.href)}
              className="flex font-inter text-[16px] font-medium items-center cursor-pointer gap-1 hover:text-[#d6b36b]">
              {item.label}
              {item.submenu.length > 0 && <FiChevronDown />}
            </Link>

            {/* Framer Motion Dropdown */}
            <AnimatePresence>
              {hoveredMenu === item.label && item.submenu.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute border-2  py-5 px-5 w-48 border-[#C1AC7D] left-0 top-full mt-2 bg-[#1f1f1f] text-white rounded-2xl z-10">
                  {item.submenu.map((sub, i) => (
                    <Link
                      key={i}
                      href={sub.href || "#"}
                      className="block text-[16px] font-inter font-medium text-gray-300 hover:text-white mb-2">
                      {sub.label}
                    </Link>
                  ))}
                  {item.submenu.length > 0 && (
                    <div className="w-26  mt-2 flex justify-start items-start">
                      <Link
                        href={item.href || "#"}
                        className="bg-gradient mr-4 cursor-pointer rounded-2xl text-[#1E1E1E] text-[10px] font-semibold block px-6 py-2 mx-auto">
                        View All
                      </Link>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
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
                <Link
                  href={item.href || "#"}
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="flex font-inter font-medium text-[16px] justify-between items-center w-full text-left">
                  {item.label}
                  {item.submenu.length > 0 && (
                    <FiChevronDown
                      className={`transition-transform ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>
                {openIndex === index && item.submenu.length > 0 && (
                  <div className="ml-4 flex flex-col justify-start items-start mt-2 space-y-1">
                    {item.submenu.map((sub, i) => (
                      <a
                        key={i}
                        href={sub.href || "#"}
                        className="block text-[16px] text-gray-300 hover:text-white">
                        {sub.label}
                      </a>
                    ))}
                    {item.submenu.length > 0 && (
                      <Link
                        href={item.href || "#"}
                        className="bg-gradient cursor-pointer rounded-3xl text-[#1E1E1E] text-[10px] font-semibold block px-4 py-2 mx-auto">
                        View All
                      </Link>
                    )}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4">
              <a href="tel:+18186698271">
                <Button text="Contact Us" borderLeanr="gradient-border" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
