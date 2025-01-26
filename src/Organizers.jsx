import React from "react";
import OrganizerCard from "./Components/OrganizersCard/OrganizerCard";

const Organizers = () => {
  const cheiefPatrons = [
    {
      name: "Er. Pankaj Agarwal",
      work: "Chancellor",
      image:
        "src/images/Organizers/chiefs/er-pankaj-agarwal-12012403111859.jpg",
    },
    {
      name: "Er. Pooja Agarwal",
      work: "Pro Chancellor",
      image:
        "src/images/Organizers/chiefs/er.-pooja-agarwal-pro-chancellor--12012403114783.jpg",
    },
    {
      name: "Arrushi Agarwal",
      work: "University Advisor",
      image: "src/images/Organizers/chiefs/aarushinsfui832894239.webp",
    },
  ];

  const patron = [{
    name:"Prof.(Dr.) Vikas Mishra",
    work:"Vice Chancellor",
    image:"src/images/Organizers/patron/whatsapp-image-2024-07-31-at-14.03.56-3107240456253.jpeg"
  }]

  const facultyConveners = [{
name:"Er. Sunny Kumar",
work:"Assistant Professor - DCSE",
image:"src/images/Organizers/FACULTY/11zon-cropped-5-11zon-23022411165423.jpeg",
linkedIn:"https://www.linkedin.com/in/sunny-kumar-a7910b234/"
  },
  {
    name:"Er. Neeta Bhusal Sharma",
    work:"Assistant Professor - DCSE",
    image:"src/images/Organizers/FACULTY/11zon-cropped-2-11zon-23022410512735.jpeg",
    linkedIn:"https://www.linkedin.com/in/neeta-bhusal-13708037/"

      },
      {
        name:"Er. Abhishek Kumar Saxena",
        work:"Assistant Professor - DEEE",
        image:"src/images/Organizers/FACULTY/22.84e79aae4013d11ad5c2.jpg",
        linkedIn:"https://www.linkedin.com/in/abhishek-kumar-saxena-80a51111a/"
          }]

 const veteran = [{
  name:"Deepika",
work:"M.Tech (2nd Year)",
image:"src/images/Organizers/veteran/Deepika.92971efc14ccbc6803bd.jpg",
linkedIn:"https://www.linkedin.com/in/deepika-singh-070957230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
 },{
  name:"Aadya Sharma",
work:"BBA.LLB (5th Year)",
image:"src/images/Organizers/veteran/Aadya.a082cfa0e5385c1e5f8b.jpg",
linkedIn:"https://www.linkedin.com/in/aadya-sharma-130a27218/"
 },{
  name:"Ayushman Singh",
work:"B.Tech ECE (4th Year)",
image:"src/images/Organizers/veteran/Ayushman.8e0be6c4d2361fa915b7.jpg",
linkedIn:"https://www.linkedin.com/in/ayushman-singh-413240195"
 },{
  name:"Atam Prakash Bajpai",
work:"B.Tech ECE (4th Year)",
image:"src/images/Organizers/veteran/Atam.645281d022456e76bfa4.jpg",
linkedIn:"https://www.linkedin.com/in/atam-prakash-bajpai-67441a224/"
 }]

 const students = [{
  name:"Pranshu Agrahari",
work:"B.Tech CSE (3rd Year)",
image:"src/images/Organizers/veteran/Pranshu.86f485a89c01a5ad604c.jpg",
linkedIn:"https://www.linkedin.com/in/pranshu-agrahari-956a37288/"
 },{
  name:"Kesar Rai",
work:"B.Tech CSE (3rd Year)",
image:"src/images/Organizers/veteran/Kesar.4138626489429f27219e.jpg",
linkedIn:"https://www.linkedin.com/in/kesarrai/"
 }]


 const CoConveners =[{
  name:"Aadi Chandra",
work:"B.Tech CSE (3rd Year)",
image:"src/images/Organizers/veteran/Aadi.f4c24566fbfb88a44fb1.jpg",
linkedIn:"https://www.linkedin.com/in/aadi-chandra-7a4185278/"
 },{
  name:"Nitin Jaiswal",
work:"B.Tech CSE (3rd Year)",
image:"src/images/Organizers/veteran/Nitin.e264367041395411d43f.jpg",
linkedIn:"https://www.linkedin.com/in/nitin-jaiswal-6b41a024b/"
 },{
  name:"Nandini Verma",
work:"B.Tech CSE (3rd Year)",
image:"src/images/Organizers/veteran/Nandini.07c80e6c58e0132e99c4.jpg",
linkedIn:"https://www.linkedin.com/in/nandini-verma-4n5v4/"
 },{
  name:"Pragya Sharma",
work:"B.Tech CSE (3rd Year)",
image:"src/images/Organizers/veteran/pragya.c4d658466dc4e00b233e.jpeg",
linkedIn:"https://www.linkedin.com/in/pragya-sharma-136280280"
 }]

  return (
    <main className="mt-30 max-md:mt-28 flex gap-20 flex-col  items-center max-md:justify-start">
      <div className=" max-md:justify-start justify-center flex w-full">
        <h1 className="text-7xl max-md:text-5xl border-r-4 border-viveka-theme p-2 font-bold w-fit max-md:w-min ">
          Organizing Committee
        </h1>
      </div>

      <section>
        <div className="bg-viveka-back-light w-screen max-md:w-full flex flex-col  items-center p-6 gap-14">
          <h2 className="text-4xl border-r-4 border-viveka-theme text-white p-2 font-bold w-fit">
            Chief Patrons
          </h2>
          <div className="flex gap-18 max-md:flex-col">
            {cheiefPatrons.map((element, index) => {
              return <OrganizerCard key={index} data={element} />;
            })}
          </div>
        </div>

{/* patrons */}

        <div className="mt-10 flex flex-col gap-14 items-center">
          <h1 className="text-4xl border-r-4 border-viveka-theme text-viveka-back-light p-2 font-bold w-fit">Patron</h1>
          <div>
{
  patron.map((el,ind)=>{
    return <OrganizerCard key={ind} data={el}/>
  })
}
          </div>
        </div>


        {/* FacultyConvenor */}

        <div className="mt-10 flex flex-col gap-14 p-8 items-center bg-viveka-back-light">
        
        <h1 className="text-4xl border-r-4 border-viveka-theme text-white p-2 font-bold w-fit">Faculty Conveners</h1>
        <div className="flex gap-18 max-md:flex-col ">
          {
            facultyConveners.map((el,ind)=>{
              return <OrganizerCard key={ind} data={el} />
            })
          }
        </div>
        </div>

        {/* students Conveners */}

        <section>
        <div className="bg-white  mt-10 p-8 gap-8 flex flex-col items-center rounded-xl">
        <h1 className="text-4xl border-r-4 border-viveka-theme text-viveka-back-light p-2 font-bold w-fit">Students Conveners</h1>
          <div className="flex gap-18 justify-center max-md:items-center w-full max-md:flex-col">
          {  
          students.map((el,ind)=>{
                return <OrganizerCard key={ind} data={el}/>
              })
            }
          </div>
        </div>
        </section>

        {/* Veterans */}
<div className="w-full p-4">
        <div className="bg-viveka-back-light mt-4 p-8 gap-8 flex flex-col items-center rounded-xl">
        <h1 className="text-4xl border-r-4 border-viveka-theme text-white p-2 font-bold w-fit">Veteran Students Conveners</h1>
          <div className="flex justify-around w-full max-md:gap-10 max-md:flex-col max-md:items-center">
            {
              veteran.map((el,ind)=>{
                return <OrganizerCard key={ind} data={el}/>
              })
            }





          </div>
        </div>
        </div>

        {/* students co-conveners */}

<section >
<div className="bg-viveka-back-light my-4 p-8 gap-8 flex flex-col items-center ">
        <h1 className="text-4xl border-r-4 border-viveka-theme text-white p-2 font-bold w-fit">Student Co-Conveners</h1>
          <div className="flex justify-around w-full max-md:flex-col max-md:items-center max-md:gap-10 ">
            {
              CoConveners.map((el,ind)=>{
                return <OrganizerCard key={ind} data={el}/>
              })
            }

          </div>
        </div>
</section>

      </section>
    </main>
  );
};

export default Organizers;
