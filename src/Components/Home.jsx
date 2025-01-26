import React from "react";
import VivekaImg from "../images/vivekaLogo.c756f3a9a824d7e68e29.png";
import backSvg from "../images/svg/Hero.899cad8d98aba1feee10.svg"

const Home = () => {
  return (
    <>
      <div className="main-home  text-white bg-viveka-back-light  w-screen p-4 h-screen max-md:relative flex items-center gap-8">
        <div className=" flex-1 z-10">
          <div >
            <img src={VivekaImg} className="max-md:w-full max-md:h-full"  alt="" />
          </div>
          <div className="flex flex-col items-start  gap-4 font-display">
            <p className="text-4xl max-md:text-3xl font-bold ">nnovate, Elevate and Celebrate</p>
            <p className="text-4xl max-md:text-3xl font-bold">February 6th-8th, 2025</p>
            <button className="border-2 border-purple-300 mt-4 hover:bg-purple-300 hover:text-viveka-back-light transition duration-200 cursor-pointer hover:ease-linear p-4 rounded-full"> Explore Our Events</button>
          </div>
        </div>
        <div className="flex-1 scale-150 max-md:absolute max-md:opacity-40">

            <img src={backSvg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
