import React from "react";
import SRMUpic from "../images/SRMULOGO.8c795ea01235f98cfc10.jpg";
import vivekaPic from "../images/about.a4eff2220dd963e3839ab8baf346ba59.svg";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const About = () => {

  

  return (
    <main className="bg-viveka-back-light text-white mt-4 p-8 max-md:p-4 rounded-xl">
      <section className="flex items-center h-full my-24 max-md:my-10 gap-10 max-md:flex-col">
        <div className="flex-2 flex flex-col items-start gap-14 tracking-wide">
          <div className="flex items-end gap-2  border-r-3 px-2 border-r-viveka-theme">
            <h5 className="text-4xl">About</h5>
            <h1 className="text-8xl font-bold">SRMU</h1>
          </div>

          <div className="grid gap-8 max-md:px-2">
            <p>
              <b>
                Shri Ramswaroop Memorial University<i> (SRMU) </i>
              </b>
              aims to be a globally recognized leader in education, research,
              and preparing ethical professionals. Founded in 1999, it offers a
              wide range of undergraduate, postgraduate, and doctoral programs
              across various disciplines. SRMU boasts excellent faculty,
              industry collaborations, and innovative pedagogy, ensuring its
              programs are relevant and enhance employability.
            </p>
            <p>
              With a focus on holistic development, students gain practical
              exposure, attend guest lectures, and participate in co-curricular
              activities. The university also provides scholarships and outreach
              programs, creating a well-rounded educational experience. With its
              <b>
                <i>"Chase Reality…Dreams Will Follow"</i>
              </b>
              motto, SRMU strives to set a benchmark in higher education.
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

        <div className="flex-3 max-md:w-full">
          <img className="rounded-xl max-md:h-full" src={SRMUpic} alt="" />
        </div>
      </section>

      <section className="flex gap-14 items-center bg-white rounded-xl px-2 max-md:flex-col text-viveka-back-light">
        <div className="flex-2 flex flex-col gap-14 p-8 max-md:p-2 my-20 max-md:my-10">
          <div className=" gap-3 flex items-end max-md:flex-col max-md:items-start">
            <h2 className="text-4xl">About</h2>
            <h1 className="text-8xl font-bold border-r-3 text-viveka-theme border-r-viveka-theme pr-3">
              VIVEKA 4.0
            </h1>
          </div>

          <div className="flex gap-8 flex-col tracking-wide">
            <p>
              <b>
                <i>VIVEKA:The Intelligence 4.0 </i>
              </b>{" "}
              is the Annual Techfest of Shri Ramswaroop Memorial University
              organized under the initiative of Tech Fusion Club. Unleash your
              technical skills in the vast horizon of events.
            </p>
            <p>
              <b>
                <i>VIVEKA:The Intelligence 4.0 </i>
              </b>{" "}
              promises a thrilling experience for all tech enthusiasts. We are
              writing to you with the hope that your esteemed organization will
              consider sponsoring our event.
            </p>
          </div>
        </div>

        <div className="flex-3">
          <img src={vivekaPic} alt="" />
        </div>
      </section>
    </main>
  );
};

export default About;
