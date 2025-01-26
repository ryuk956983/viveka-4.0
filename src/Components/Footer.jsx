import React from "react";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import VivekaImg from "../images/vivekaLogo.c756f3a9a824d7e68e29.png";

const Footer = () => {
  return (
    <div className="h-fit flex tracking-wider items-center justify-center text-white p-24 max-md:p-10 max-md:flex-col max-md:gap-10  bg-viveka-back-light ">
      <div className="flex-1 grid gap-4">
        <div>
          <img src={VivekaImg} alt="" />
        </div>
        <div>
          <p>
            Viveka 4.0 is an annual techno-cultural fest of Shri Ramswaroop
            Memorial University organised by TechFusion Club. Let's make a Tech
            move.
          </p>
        </div>
        <div className="flex gap-4 text-4xl">
                    <a
                      className="hover:text-pink-500 transition-all duration-150"
                      href="#"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      className="hover:text-blue-500 transition-all duration-150 "
                      href="#"
                    >
                      <FaFacebook />
                    </a>
                    <a
                      className="hover:text-blue-400 transition-all duration-150"
                      href="#"
                    >
                      <FaLinkedin />
                    </a>
                  </div>
      </div>
      <div className="flex-1 flex justify-center max-md:justify-start  max-md:w-full">
        
            <ul className="grid gap-4 ">
                <li className="hover:text-viveka-theme cursor-pointer">ABOUT US</li>
                <li className="hover:text-viveka-theme cursor-pointer">TERM OF USE</li>
                <li className="hover:text-viveka-theme cursor-pointer">PRIVACY POLICY</li>
            </ul>
        
      </div>
      <div className="flex-1">
        <ul className="grid gap-4 text-lg">
            <li className="flex gap-3 items-center"><FaLocationDot />Shri Ramswaroop Memorial University, Lucknow-Deva Road</li>
            <li className="flex gap-3 items-center"><IoCall/>9555686979</li>
            <li className="flex gap-3 items-center"><IoMdMail/>techfusionclub@srmu.ac.in</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
