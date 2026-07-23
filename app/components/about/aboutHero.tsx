"use client";

import Image from "next/image";


export default function AboutHero(){

  return(

    <section className="
    relative
    h-[500px]
    flex
    items-center
    justify-center
    overflow-hidden
    ">


      {/* Background Image */}

      <Image

        src="/images/about-banner.jpg"

        alt="About Times Consultant"

        fill

        className="
        object-cover
        "

      />


      {/* Overlay */}

      <div className="
      absolute
      inset-0
      bg-black/50
      "></div>



      {/* Content */}

      <div className="
      relative
      z-10
      text-center
      text-white
      px-6
      ">


        <h1 className="
        text-5xl
        md:text-6xl
        font-bold
        mb-5
        ">

          About Times Consultant

        </h1>



        <p className="
        max-w-2xl
        mx-auto
        text-lg
        text-gray-200
        ">

          Helping students achieve their dreams of studying abroad
          through expert guidance and trusted services.

        </p>


      </div>


    </section>

  )

}