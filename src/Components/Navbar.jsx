import React, { useState } from "react";
import VivekaImg from "../images/vivekaLogo.c756f3a9a824d7e68e29.png";
import Logo from "../images/srmu_logo.a3484d63accb2fc514c1.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";



const Navbar = ({setloader}) => {

  const [hamburger, sethamburger] = useState(false);

  setTimeout(() => {
    setloader(true);
  }, 3000);

  const loaderTrue = () =>{
    setloader(false);
  }

  const mobileLoaderTrue = ()=>{
    sethamburger(false);
    loaderTrue();
  }

  return (
    <div className="text-white bg-[#111c2c]  px-8 max-md:px-3  shadow-lg shadow-gray-900 rounded-xl">
      <div className="flex  w-full justify-between h-20 max-md:h-16 items-center">
        <div className="flex gap-3 justify-center h-[40%]">
          <img src={Logo} alt="" />
          <img src={VivekaImg} alt="" />
        </div>
        <div className="max-md:hidden">
          <ul className="flex gap-8 text-xl font-medium tracking-wide">
            <li className="hover:text-red-300 cursor-pointer px-1  ease-in-out " onClick={loaderTrue}>
            <Link to="/" >Home</Link>
            </li>
            <li className="hover:text-red-300 cursor-pointer px-1 ease-in-out " onClick={loaderTrue}>
            <Link to="/about" >About</Link>
            </li>
            <li className="hover:text-red-300 cursor-pointer px-1  ease-in-out" onClick={loaderTrue}>
            <Link to="/organizers" >Organizers</Link>
            </li>
            <li className="hover:text-white cursor-pointer px-1 ease-in-out text-red-500" onClick={loaderTrue}>
            <Link to="/events" >Events</Link>
            </li>
            <li className="hover:text-red-300 cursor-pointer px-1  ease-in-out">
            <a href="https://drive.google.com/file/d/1-9ddtb9tIOHKgax2Q8UuGMU3Jdcf4ILd/view" target="blank">Brochure</a>
            </li>
          </ul>
        </div>

        <div className=" h-7 w-7 max-md:h-8 max-md:w-8 cursor-pointer hidden max-md:block " onClick={()=>{sethamburger(!hamburger)}}>
          <GiHamburgerMenu className="h-full w-full" />
          
        </div>
      </div>
      
      <div className={`overflow-hidden transition-all h-0 ease-in-out duration-200 ${hamburger && "h-[300px]"}`}>
        <ul>
        <ul className="flex flex-col items-center py-4 gap-8 text-xl font-medium tracking-wider">
            <li className=" cursor-pointer px-1  ease-in-out  text-center " onClick={mobileLoaderTrue}>
             <Link to="/" >Home</Link>
            </li>
            
            <li className=" cursor-pointer px-1 ease-in-out  text-center" onClick={mobileLoaderTrue}>
              <Link to="/about" >About</Link>
            </li>
            
            <li className=" cursor-pointer px-1  ease-in-out text-center" onClick={mobileLoaderTrue}>
              <Link to="/organizers" >Organizers</Link>
            </li>
            
            <li className=" cursor-pointer px-1 ease-in-out text-red-500 text-center" onClick={mobileLoaderTrue}>
              <Link to="/events">Events</Link>
            </li>
              
            <li className=" cursor-pointer px-1  ease-in-out text-center" onClick={()=>{sethamburger(false)}}>
              <a href="https://drive.google.com/file/d/1-9ddtb9tIOHKgax2Q8UuGMU3Jdcf4ILd/view" target="blank">Brochure</a>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
