"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";


export default function Testimonials(){

const reviews=[

{
id:1,
name:"Ali Ahmed",
country:"Study in UK",
review:"Times Consultant helped me throughout my admission and visa process."
},

{
id:2,
name:"Sara Khan",
country:"Study in Canada",
review:"The counselors guided me to choose the best university for my career."
},

{
id:3,
name:"Hassan Ali",
country:"Study in Denmark",
review:"Excellent support and professional services."
}

];


return(

<section className="py-16">


<div className="container mx-auto px-6">


<div className="text-center mb-12">

<h2 className="
text-4xl
font-bold
text-[#43246f]
">
Student Success Stories
</h2>

<p className="text-gray-600 mt-3">
What our students say about us
</p>

</div>



<Swiper

modules={[Autoplay]}

spaceBetween={30}

slidesPerView={1}

autoplay={{
delay:2500
}}

loop={true}

breakpoints={{
768:{
slidesPerView:2
},

1024:{
slidesPerView:3
}
}}

>


{
reviews.map((item)=>(

<SwiperSlide key={item.id}>


<div className="
bg-white
shadow-lg
rounded-xl
p-8
border
">


<div className="
w-16
h-16
rounded-full
bg-[#43246f]
text-white
flex
items-center
justify-center
text-2xl
font-bold
mb-5
">

{item.name.charAt(0)}

</div>


<h3 className="text-xl font-semibold">
{item.name}
</h3>


<p className="text-[#43246f] mb-4">
{item.country}
</p>


<p className="text-gray-600">
"{item.review}"
</p>


</div>


</SwiperSlide>

))
}


</Swiper>


</div>

</section>

)

}