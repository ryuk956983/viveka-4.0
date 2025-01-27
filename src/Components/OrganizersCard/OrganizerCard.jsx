import React from 'react'
import { FaLinkedin } from "react-icons/fa";


const OrganizerCard = ({data}) => {
  return (
    /* From Uiverse.io by Javierrocadev */ 
<div className="w-60 h-80 bg-[#172136] rounded-3xl text-white p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-xs hover:shadow-sky-400 transition-shadow">
  <div className="w-fit overflow-hidden h-54 rounded-2xl"> <img src={data.image} className='w-full' alt="" /></div>
  <div className="">
      <p className="font-extrabold text-xl">{data.name}</p>
      <p className="text-gray-400">{data.work}</p>
      {data.linkedIn && <a href={data.linkedIn} target='blank'><FaLinkedin className='mt-2 text-lg hover:text-blue-400 cursor-pointer'/> </a>}
  </div>
  
</div>
  )
}

export default OrganizerCard