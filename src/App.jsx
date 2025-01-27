import React, { useState } from "react";
import Navbar from "../src/Components/Navbar";
import HomeRoute from "./HomeRoute";
import Footer from "./Components/Footer";
import { HashRouter as Router, Routes, Route, BrowserRouter, HashRouter } from "react-router-dom";
import AboutRoute from "./AboutRoute";
import Organizers from "./Organizers";
import EventsRoute from "./EventsRoute";
import EventInside from "./Components/Events/EventInside";
import Loader from "./Loader"
import ScrollToTop from "./ScrollTop";

const App = () => {

const [loader, setloader] = useState(false)

  return (

    <HashRouter>
      
    <div className="h-screen relative w-screen overflow-x-hidden bg-viveka-back font-oswald ">
<div className={`fixed z-100 ${loader && "hidden"}`}><Loader /></div>
      <header className="fixed w-screen p-4 max-md:p-2 z-99">
      <ScrollToTop />
        <Navbar setloader={setloader} loader={loader}/>
      </header>
      
      
      <Routes> 
    
        <Route path="/" element={<HomeRoute />} /> 
        <Route path="/about" element={<AboutRoute />} /> 
        <Route path="/organizers" element={<Organizers />} /> 
        <Route path="/events" element={<EventsRoute />} /> 
        <Route path="/events/:eventId" element={<EventInside />} /> 
       
      </Routes>
   
      <footer>
        <Footer />
      </footer>
    </div>
    </HashRouter>
  );
};

export default App;
