"use client";

import Image from "next/image";


export default function Destinations(){

const countries=[
 {
 id:1,
 name:"UK",
 image:"/images/uk.jpg"
 },

 {
 id:2,
 name:"Canada",
 image:"/images/canada.jpg"
 },

 {
 id:3,
 name:"Australia",
 image:"/images/australia.jpg"
 },

 {
 id:4,
 name:"Denmark",
 image:"/images/denmark.jpg"
 },

 {
 id:5,
 name:"Germany",
 image:"/images/germany.jpg"
 },

 {
 id:6,
 name:"USA",
 image:"/images/usa.jpg"
 }
];


return(

<section className="py-16">


<div className="container mx-auto px-6">


<div className="text-center mb-12">

<h2 className="text-4xl font-bold text-[#43246f]">
Study Destinations
</h2>

<p className="text-gray-600 mt-3">
Choose your preferred study destination
</p>

</div>



<div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-8
">


{
countries.map((country)=>(

<div
key={country.id}
className="
relative
h-64
rounded-xl
overflow-hidden
group
"
>


<Image

src={country.image}

alt={country.name}

fill

className="object-cover group-hover:scale-110 transition duration-500"

/>


<div className="
absolute
inset-0
bg-black/40
flex
items-center
justify-center
">

<h3 className="
text-white
text-3xl
font-bold
">
{country.name}
</h3>

</div>


</div>


))
}


</div>


</div>


</section>

)

}