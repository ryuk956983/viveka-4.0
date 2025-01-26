import React from 'react'
import EventsCard2 from './Components/Events/EventsCard2'

const EventsRoute = () => {

    const events = [{
        title:"Laser Light Show",
        img:"src/images/events/laser light show.97f610deaba5a75050fb.png"
    },
    {
        title:"AI Workshop (Generative AI)/ Power Bi Workshop",
        img:"src/images/events/AI.88953e637ed03bc56f45.jpg"
    },
    {
        title:"Workshop on configuring the Network Layers",
        img:"src/images/events/Network.b66efe67f84f84647e35.jpg"
    },
    {
        title:"CodeX",
        img:"src/images/events/codex.1b960ae8bb05f752c1df.png"
    },
    {
        title:"Find the Language",
        img:"src/images/events/find the language.ca1148282c6c58746a08.png"
    },
    {
        title:"Hack-a-thon",
        img:"src/images/events/hack-a-thon.6bee251c3e0f6bae3629.png"
    },
    {
        title:"Bug Hunting",
        img:"src/images/events/Bug.eb80efef7ebedb43c833.jpg"
    },
    {
        title:"Digi Art",
        img:"src/images/events/digi art.9a96000d8606d39a45bd.png"
    },{
        title:"Robo दौड़",
        img:"src/images/events/robo DAUD.53317eea61b088eab172.png"
    },
{
    title:"Robo फुटबॉल",
    img:"src/images/events/robo FOOTBALL.af88c5c5223574e5f82b.png"
},{
    title:"Path Finder:Robot",
    img:"src/images/events/path fnder-robot.667a7c2d533d230be45d.png"
},{
    title:"Robo War",
    img:"src/images/events/robo war.ac95b658314d04f4b52c.png"
},{
    title:"Drone Race",
    img:"src/images/events/drone race.3c130786094318217886.png"
},{
    title:"Boat Race",
    img:"src/images/events/boat race.794da8b0292a0df68597.png"
},{
    title:"Structomania",
    img:"src/images/events/structromania.7396853aa6fd421c99a2.png"
},{
    title:"Recall-O-Tune",
    img:"src/images/events/recall-o-tune.ab949ae3af0b07261934.png"
},{
    title:"Rubik's Cube",
    img:"src/images/events/rubics cube.e7bd524bfc7ea6cb92d1.png"
},{
    title:"Buddhi क्षमता",
    img:"src/images/events/Buddhi SHAMTA.720ebf5c74bbad455593.png"
},{
    title:"Reasoning Rumble",
    img:"src/images/events/reasoning rumble.185c85b7a4c652e717ea.png"
},{
    title:"BGMI",
    img:"src/images/events/bgmi.33be073ceb62e6b8d371.png"
},{
    title:"Free Fire",
    img:"src/images/events/freefire.72c3d59e4ce95b5a41ed.png"
}]

  return (
    <main className=' h-fit flex flex-col bg-viveka-back-light p-4 mb-2 gap-12 items-center max-md:justify-start '>
    
          <h1 className='text-7xl border-r-4 border-viveka-theme p-2 font-bold mt-30 text-white tracking-wide w-fit'>Events</h1>
    
          <div className='grid max-md:grid-cols-1 max-md:gap-10 grid-cols-4 gap-18 h-full'>
            {
                events.map((el,ind)=>{
                    return <EventsCard2 key={ind} index={ind} data={el}/>
                })
            }
          </div>
        </main>
  )
}

export default EventsRoute