import React from "react";
import Image from "next/image";
import logo from "../assets/trt/footer.png";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClinicMedical,
} from "react-icons/fa";
import { LuMessageSquareText } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="bg-[#252525] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-1 items-center justify-between gap-8 mb-12">
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

          <ul className="space-y-4 flex flex-col items-start justify-start ">
            <li className="flex items-center justify-center md:justify-start">
              <LuMessageSquareText className="text-[#EEE1BA] mr-3 text-xl" />
              <span className="bg-gradient-to-r from-[#C4AC7B] via-[#EEE1BA] to-[#836539] bg-clip-text text-transparent">
                747 477 4050
              </span>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <FaPhone className="text-[#EEE1BA] mr-3 text-xl" />
              <span className="bg-gradient-to-r from-[#C4AC7B] via-[#EEE1BA] to-[#836539] bg-clip-text text-transparent">
                818 669 8271
              </span>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <FaEnvelope className="text-[#D0BB8F] mr-3 text-xl" />
              <span className="bg-gradient-to-r from-[#C4AC7B] via-[#EEE1BA] to-[#836539] bg-clip-text text-transparent">
                avmedcorp@yahoo.com
              </span>
            </li>
          </ul>

          <ul className="space-y-4 flex flex-col items-start justify-start ">
            {/* Glendale Location */}
            <li className="flex items-start justify-center md:justify-start">
              <FaMapMarkerAlt className="text-[#C4AC7B] mt-1 mr-3 flex-shrink-0 text-xl" />
              <div>
                <h3 className="font-bold text-lg mb-1 bg-gradient-to-r from-[#C4AC7B] via-[#EEE1BA] to-[#836539] bg-clip-text text-transparent">
                  West Hollywood
                </h3>
                <p className="bg-gradient-to-r from-[#C4AC7B] via-[#EEE1BA] to-[#836539] bg-clip-text text-transparent">
                  8205 Santa Monica blvd, <br /> Santa Monica 90404
                </p>
              </div>
            </li>
            <li className="flex items-start justify-center md:justify-start">
              <FaClinicMedical className="text-[#252525] mt-1 mr-3 flex-shrink-0 text-xl" />
              <span className="bg-gradient-to-r from-[#C4AC7B] via-[#EEE1BA] to-[#836539] bg-clip-text text-transparent">
                ( Aesthetics, Procedure, Services )
              </span>
            </li>

            {/* Burbank Location */}
            <li className="flex items-start justify-center md:justify-start">
              <FaMapMarkerAlt className="text-[#C4AC7B] mt-1 mr-3 flex-shrink-0 text-xl" />
              <div>
                <h3 className="font-bold mb-1 bg-gradient-to-r from-[#C4AC7B] via-[#EEE1BA] to-[#836539] bg-clip-text text-transparent">
                  Burbank Location
                </h3>
                <p className="bg-gradient-to-r from-[#C4AC7B] via-[#EEE1BA] to-[#836539] bg-clip-text text-transparent">
                  207 N Victory Blvd., Ste J <br /> Burbank, CA 91502
                  <br />( Consultations only )
                </p>
              </div>
            </li>

            {/* Aesthetic Services */}
            {/* <li className="flex items-start justify-center md:justify-start">
              <FaClinicMedical className="text-[#252525] mt-1 mr-3 flex-shrink-0 text-xl" />
              <span className="bg-gradient-to-r from-[#C4AC7B] via-[#EEE1BA] to-[#836539] bg-clip-text text-transparent">
                ( Aesthetics, Procedure, Services
              </span>
            </li> */}
          </ul>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-[#C4AC7B] via-[#EEE1BA] to-[#836539] mb-8"></div>

        <div className="text-center bg-gradient-to-r from-[#C4AC7B] via-[#EEE1BA] to-[#836539] bg-clip-text text-transparent">
          <p>
            © {new Date().getFullYear()} Hydra Aesthetics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
