import React from 'react'
import { IoLocation } from "react-icons/io5";


const EventCard = ({data}) => {
  return (
    <div className='hover:bg-gray-900 cursor-default transition duration-150 bg-gray-800 grid gap-3 rounded-lg p-4 tracking-wide'>
    <div className='flex justify-between items-center'>
    <h1 className='text-xl font-medium text-viveka-theme flex gap-2 items-center'><img src={data.icon} alt="" className='h-6'/>{data.head}</h1>
    <h2>{data.time}</h2>
        </div>
        <p className='text-gray-400'>{data.info}</p>
        <p className='flex gap-2 items-center'>
            <IoLocation/>
            {data.location}
        </p>
        

        

   </div>
  )
}

export default EventCard