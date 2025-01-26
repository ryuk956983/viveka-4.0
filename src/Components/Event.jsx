import React, { useState } from 'react'
import EventCard from './Events/EventCard'


const Event = () => {

    const [first, setfirst] = useState(true);
    const [mid, setmid] = useState(false);
    const [last, setlast] = useState(false);

  const handlefirst = ()=>{
    setfirst(true);
    setmid(false);
    setlast(false);
  }
  const handlemid = ()=>{
    setfirst(false);
    setmid(true);
    setlast(false);
  }
  const handlelast = ()=>{
    setfirst(false);
    setmid(false);
    setlast(true);
  }
    let eventfeb6 = [{
        time:"12:30 PM",
        icon:"src/images/icons/programming.png",
        head:"CodeX",
        info:"For University Students",
        location:"B2-Computer Labs"
    },
    {
        time:"1:00 PM",
        icon:"src/images/icons/brainstorm.png",
        head:"Buddhi क्षमता",
        info:"For School Students",
        location:"B1-First Floor"
    },
    {
        time:"1:00 PM",
        icon:"src/images/icons/hacker.png",
        head:"Hack-a-thon",
        info:"For School Students",
        location:"B2-305"
    },
    {
        time:"1:20 PM",
        icon:"src/images/icons/rubik.png",
        head:"Rubik's Cube",
        info:"For University Students",
        location:"Kabaddi Ground, Near B1 Block"
    },
    {
        time:"2:00 PM",
        icon:"src/images/icons/laser.png",
        head:"Laser Light Show",
        info:"For University Students",
        location:"Mini Auditorium"
        
    },
    {
        time:"2:00 PM",
        icon:"src/images/icons/robot.png",
        head:"Robo दौड़",
        info:"For School Students",
        location:"BBC"
    },
    {
        time:"2:00 PM",
        icon:"src/images/icons/soccer-ball-variant.png",
        head:"Robo फुटबॉल",
        info:"For School Students",
        location:"BBC"
    },
    {
        time:"2:05 PM",
        icon:"src/images/icons/brainstorm.png",
        head:"Buddhi क्षमता",
        info:"For University Students",
        location:"Volleyball Court"
    },
    {
        time:"2:45 PM",
        icon:"src/images/icons/music.png",
        head:"Recall-O-Tune",
        info:"For School Students",
        location:"B1-207, B2-007"
    },
    {
        time:"2:50 PM",
        icon:"src/images/icons/light-bulb.png",
        head:"Reasoning Rumble",
        info:"For University Students",
        location:"Volleyball Court"
    },
    {
        time:"3:35 PM",
        icon:"src/images/icons/light-bulb.png",
        head:"Reasoning Rumble",
        info:"For School Students",
        location:"Volleyball Court"
    },
    {
        time:"TBA",
        icon:"src/images/icons/gamepad.png",
        head:"Free Fire",
        info:"For School and University Students",
        location:"B2-305(Online Final Round)"
    },
   
]

let eventfeb7 =[
    {
        time:"12:30 PM",
        icon:"src/images/icons/robot.png",
        head:"Robo दौड़",
        info:"For University Students",
        location:"BBC Ground"
    },
    {
        time:"12:30 PM",
        icon:"src/images/icons/robot.png",
        head:"Robo फुटबॉल",
        info:"For University Students",
        location:"BBC Ground"
    },
    {
        time:"12:30 PM",
        icon:"src/images/icons/robot.png",
        head:"Robo War",
        info:"For University Students",
        location:"B2-305"
    },
    {
        time:"12:30 PM",
        icon:"src/images/icons/robot.png",
        head:"Path Finder: Robot",
        info:"For University Students",
        location:"B1-310"
    },
    {
        time:"12:30 PM",
        icon:"src/images/icons/robot.png",
        head:"Drone Race",
        info:"For University Students",
        location:"Cricket Ground"
    },
    {
        time:"12:30 PM",
        icon:"src/images/icons/robot.png",
        head:"Boat Race",
        info:"For University Students",
        location:"Open Arena"
    },
    {
        time:"12:30 PM",
        icon:"src/images/icons/gamepad.png",
        head:"BGMI",
        info:"For University Students",
        location:"B2-305 (Final Round Only)"
    },
    {
        time:"12:30 PM",
        icon:"src/images/icons/hacker.png",
        head:"Workshop on Configuring the Network Layers",
        info:"For University Students",
        location:"Mini Auditorium"
    }

]

let eventfeb8 = [{
    time:"12:30 PM",
    icon:"src/images/icons/hacker.png",
    head:"Find The Language",
    info:"For University Students",
    location:"B2 - All Labs"
},
{
    time:"12:30 PM",
    icon:"src/images/icons/hacker.png",
    head:"Hack-a-Thon",
    info:"For University Students",
    location:"B2-305 , B1-007"
},
{
    time:"1:00 PM",
    icon:"src/images/icons/hacker.png",
    head:"Structromania",
    info:"For University Students",
    location:" B5 Ground Floor"
},
{
    time:"1:30 PM",
    icon:"src/images/icons/music.png",
    head:"Recall-O-Tune",
    info:"For University Students",
    location:"B1-207 , B2-007"

},
{
    time:"2:15 PM",
    icon:"src/images/icons/laser.png",
    head:"Digi Art",
    info:"For University Students",
    location:" B2-006 , 004"

},
{
    time:"3:00 PM",
    icon:"src/images/icons/programming.png",
    head:"Generative AI / Power BI Workshop",
    info:"For University Students",
    location:"Mini Auditorium"
},
{
    time:"4:00 PM",
    icon:"src/images/icons/programming.png",
    head:"Bug Hunting",
    info:"For University Students",
    location:"B2-008"
}]

  return (
    <main className='text-white bg-viveka-back-light min-h-screen max-md:w-screen p-4 flex flex-col items-center max-md:h-fit'>
    <div className='text-center my-10'>
        <h1 className='text-5xl border-b-3 py-2 border-b-viveka-theme'>Event Schedule</h1>
        <p>Here is our event schedule</p>
    </div>

    <div className='flex gap-3'>
        <h2 onClick={()=> handlefirst()} className={`dates transition duration-200 font-medium tracking-wide cursor-pointer  px-2 py-1 rounded ${first ? "bg-viveka-theme":"bg-transparent"} ${first ? "text-white":"text-viveka-theme"}`}>Feb 6</h2>
        <h2 onClick={()=> handlemid()} className={`dates transition duration-200 font-medium tracking-wide cursor-pointer  px-2 py-1 rounded ${mid ? "bg-viveka-theme":"bg-transparent"} ${mid ? "text-white":"text-viveka-theme"}`}>Feb 7</h2>
        <h2 onClick={()=> handlelast()} className={`dates transition duration-200 font-medium tracking-wide cursor-pointer  px-2 py-1 rounded ${last ? "bg-viveka-theme":"bg-transparent"} ${last ? "text-white":"text-viveka-theme"}`}>Feb 8</h2>
    </div>

<div className=' w-full grid grid-cols-4 max-md:grid-cols-1   gap-8 p-8'>
    
   { first && eventfeb6.map((el,ind)=>{
        return <EventCard key={ind} data={el}/>
    })
   }
    { mid && eventfeb7.map((el,ind)=>{
        return <EventCard key={ind} data={el}/>
    })
   }
   {
    last && eventfeb8.map((el,ind)=>{
        return <EventCard key={ind} data={el}/>
    })
   }
</div>

    </main>
  )
}

export default Event