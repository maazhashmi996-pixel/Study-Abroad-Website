"use client";

import Image from "next/image";

export default function StudyVisa() {
     const study=[
{
    Image:"/images/services/study-Abroad.png",
    title:"Study Abroad",
    button:'Read More',
},
{
    Image:"/images/services/ACCOMMODATION-scaled.png",
    title:"ACCOMMODATION",
    button:'Read More',
},
{
    Image:"/images/services/lang-scaled.jpg",
    title:"LANGUAGES",
    button:'Read More',
},
     ]
  return (
    <div className="px-10 mx-auto h-full">
      <h1 className="flex justify-center p-10 font-extrabold text-4xl" >OUR STUDY VISA SERVICES</h1>
      <div  className="flex  justify-center gap-10 px-30 mx-auto mb-5">
       {study.map((study,index)=>(
       <div key={index} className="hover:border rounded-md hover:border-yellow-500 p-10 gap-5 mb-10 flex flex-col justify-center items-center">
        <Image 
        src={study.Image}
        alt={study.title}
        width={90}
        height={90}
        className="rounded-full h-15  w-15  border-6 border-amber-400"
        />
        <h4>{study.title}</h4>
        <button className="bg-[#3b2768] hover:bg-amber-500 rounded-md text-white px-4 p-2">{study.button}</button>
        </div>
         ))}
      </div>
    </div>
  )
}


// style={font-family="sansarif, poppins"}

