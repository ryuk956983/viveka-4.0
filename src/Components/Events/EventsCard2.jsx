import React from "react";
import { Link } from "react-router-dom";

const EventsCard2 = ({index,data}) => {
  return (
    <div className="transform transition duration-300 overflow-hidden rounded-lg shadow-lg h-fit  w-68 p-2 hover:shadow-xl bg-[#172136]">
      <div className="bg-white m-2 h-fit rounded-lg">
      <img src={data.img} className="w-full h-full" alt="" /></div>

      <div className="px-2  tracking-wide pt-2 flex flex-col">
        <h2 className="font-semibold text-2xl text-white">{data.title}</h2>

        <Link
          className="bg-viveka-theme cursor-pointer mb-2 text-white p-3 tracking-wider mt-2 rounded-md transition duration-150 text-center hover:bg-viveka-theme"
          to={`/events/${index}`}
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default EventsCard2;
