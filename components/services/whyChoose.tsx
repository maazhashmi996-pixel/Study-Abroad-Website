"use client";
import Image from "next/image";

function whyChoose() {
  return ( 
    <div className="bg-[#43246f] text-white flex flex-col items-center gap-3 px-20 p-5">
      <h1 className="font-bold text-4xl">Client Testimonials</h1>
      <p className="">What They're Talking</p>
      <div className="flex">
      <Image 
      src="/images/services/Tailored-Services.jpg" 
      alt=""
      width={600}
      height={300}
      className=""
      />
      <p className="border-white border bg-white text-[#43246f]  flex mt-10 h-130 my-auto">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque eveniet quae corporis placeat similique dolorum laborum inventore mollitia, temporibus necessitatibus quam quia sunt hic officia tempora ex expedita libero nesciunt?</p>
      </div>
    </div>
  )
}

export default whyChoose
