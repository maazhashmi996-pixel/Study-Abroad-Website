"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";


export default function Partners() {

  const universities = [
    {
      id: 1,
      image: "/images/university1.png",
    },
    {
      id: 2,
      image: "/images/university2.png",
    },
    {
      id: 3,
      image: "/images/university3.png",
    },
    {
      id: 4,
      image: "/images/university4.png",
    },
    {
      id: 5,
      image: "/images/university5.png",
    },
    {
      id: 6,
      image: "/images/university6.png",
    },
  ];


  return (
    <section className="py-16 bg-white">

      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10">

          <h2 className="text-4xl font-bold text-[#43246f]">
            Our Partner Universities
          </h2>

          <p className="mt-3 text-gray-600">
            We are partnered with leading universities worldwide
          </p>

        </div>


        {/* Logos Slider */}
        <Swiper

          modules={[Autoplay]}

          spaceBetween={40}

          slidesPerView={2}

          autoplay={{
            delay:2000,
            disableOnInteraction:false,
          }}

          breakpoints={{
            640:{
              slidesPerView:3,
            },

            768:{
              slidesPerView:4,
            },

            1024:{
              slidesPerView:5,
            },
          }}

          loop={true}

        >

          {
            universities.map((item)=>(

              <SwiperSlide key={item.id}>

                <div className="
                  h-32 
                  flex 
                  items-center 
                  justify-center
                  border
                  rounded-xl
                  shadow-sm
                  hover:shadow-lg
                  transition
                  bg-white
                ">

                  <Image

                    src={item.image}

                    alt="University Logo"

                    width={150}

                    height={80}

                    className="object-contain"

                  />

                </div>

              </SwiperSlide>

            ))
          }


        </Swiper>


      </div>

    </section>
  );
}