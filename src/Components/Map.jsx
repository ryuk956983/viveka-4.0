import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const Map = () => {

    const [first, setfirst] = useState(false);
    const [second, setsecond] = useState(false);
    const [third, setthird] = useState(false);
    const [fourth, setfourth] = useState(false);
    const [innerWidth , setinnerWidth] = useState(window.innerWidth);

    window.addEventListener("resize", ()=>{setinnerWidth(window.innerWidth)});

const handleFirst=()=>{
setfirst(true);
setsecond(false);
setthird(false);
setfourth(false);
}

const handleSecond=()=>{
    setfirst(false);
    setsecond(true);
    setthird(false);
    setfourth(false);
    }

    const handlethird=()=>{
        setfirst(false);
        setsecond(false);
        setthird(true);
        setfourth(false);
        }

        const handleFourth=()=>{
            setfirst(false);
            setsecond(false);
            setthird(false);
            setfourth(true);
            }

  return (
    <main className="min-h-screen max-md:w-screen max-md:h-fit bg-viveka-back-light rounded-xl p-6 text-white flex gap-10 flex-col items-center">
      <div>
        <h1 className="text-5xl p-4 border-r-2 border-viveka-theme mt-10">
          FAQ
        </h1>
      </div>

      <section className="flex gap-10 max-md:w-full items-center max-md:flex-col">
        <div className="grid gap-4">
          <div className="bg-gray-800 p-4 rounded-lg text-md tracking-wider cursor-pointer hover:bg-gray-900" onClick={()=>{handleFirst()}}>
            <h1 className="flex  items-center justify-between" >What is Viveka 4.0?<FaPlus /></h1>
            <p className={`text-gray-500 h-0 overflow-hidden ${first && "h-fit transition duration-200 "}`}>
              Viveka 4.0 is one of the biggest technical evnts in the history
              of Shri Ramswaroop Memorial University
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-md tracking-wider cursor-pointer hover:bg-gray-900" onClick={()=>{handleSecond()}}>
            <h1 className="flex  items-center justify-between" >What are the Dates and Timings of the event?<FaPlus /></h1>
            <p className={`text-gray-500 h-0 overflow-hidden transition duration-200 ${second && "h-fit"}`}>
              The event will start at 9 AM on 06th Feb and will be till 8th of
              Feb 10 PM.
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-md tracking-wider cursor-pointer hover:bg-gray-900" onClick={()=>{handlethird()}}>
            <h1 className="flex  items-center justify-between" >How can I participate in the event?<FaPlus /></h1>
            <p className={`text-gray-500 h-0 overflow-hidden transition duration-200 ${third && "h-fit"}`}>
              Explore various events on the VIVEKA-4.O website and register for
              the same.
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-md tracking-wider cursor-pointer hover:bg-gray-900" onClick={()=>{handleFourth()}}>
            <h1 className="flex  items-center justify-between" >Are there any rewards or prizes for the winners ?<FaPlus /></h1>
            <p className={`text-gray-500 h-0 overflow-hidden transition duration-200 ${fourth && "h-fit"}`}>Of Course !</p>
          </div>
        </div>
        <div className="max-md:hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.4818280163577!2d81.0955250753305!3d26.951636976624005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39995ee81add328f%3A0xbe8acc99218572c9!2sShri%20Ramswaroop%20Memorial%20University%20(SRMU)!5e0!3m2!1sen!2sin!4v1737791826712!5m2!1sen!2sin"
            width="700"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="hidden max-md:block overflow-hidden rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.4818280163577!2d81.0955250753305!3d26.951636976624005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39995ee81add328f%3A0xbe8acc99218572c9!2sShri%20Ramswaroop%20Memorial%20University%20(SRMU)!5e0!3m2!1sen!2sin!4v1737791826712!5m2!1sen!2sin"
            width={innerWidth-50}
            height="400"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </section>
    </main>
  );
};

export default Map;
