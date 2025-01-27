import React, { useEffect } from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Event from "./Components/Event";
import Gallery from "./Components/Gallery";
import Map from "./Components/Map";

const HomeRoute = () => {

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional: for smooth scrolling
    });
    console.log("hello")
  }

  useEffect(() => {
     handleClick();
     
  }, [])
  

  return (
    <main className=" w-fit">
      <Home />
      <div className="p-4 max-md:px-2 h-full w-fit " >
        <About />
      </div>

      <Event />

      <div className="p-4 max-md:px-2 h-full">
        <Gallery />
      </div>
      <div className="p-4 max-md:px-2 h-full">
        <Map />
      </div>
    </main>
  );
};

export default HomeRoute;
