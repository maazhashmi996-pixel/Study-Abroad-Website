"use client";

import {
  FaUserGraduate,
  FaUniversity,
  FaPassport,
  FaBookOpen,
  FaGlobe,
  FaHeadset
} from "react-icons/fa";


export default function Services(){

const services=[
 {
  id:1,
  icon:<FaUserGraduate/>,
  title:"Student Counseling",
  description:"Professional guidance to choose the right career path and university."
 },

 {
  id:2,
  icon:<FaUniversity/>,
  title:"University Admission",
  description:"Complete assistance with university selection and admission process."
 },

 {
  id:3,
  icon:<FaPassport/>,
  title:"Visa Assistance",
  description:"Expert visa guidance to improve your chances of success."
 },

 {
  id:4,
  icon:<FaBookOpen/>,
  title:"Scholarship Guidance",
  description:"Helping students find suitable scholarship opportunities."
 },

 {
  id:5,
  icon:<FaGlobe/>,
  title:"Study Abroad",
  description:"Explore international education opportunities worldwide."
 },

 {
  id:6,
  icon:<FaHeadset/>,
  title:"Student Support",
  description:"Continuous support before and after your journey abroad."
 }

];


return(

<section className="py-16 bg-gray-50">

<div className="container mx-auto px-6">


<div className="text-center mb-12">

<h2 className="text-4xl font-bold text-[#43246f]">
Our Services
</h2>

<p className="text-gray-600 mt-3">
Complete solutions for studying abroad
</p>

</div>


<div className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-3
gap-8
">


{
services.map((item)=>(

<div
key={item.id}
className="
bg-white
p-8
rounded-xl
shadow-md
hover:shadow-xl
transition
text-center
"
>


<div className="
w-16
h-16
mx-auto
rounded-full
bg-[#43246f]
text-white
flex
items-center
justify-center
text-3xl
mb-5
">

{item.icon}

</div>


<h3 className="text-xl font-semibold mb-3">
{item.title}
</h3>


<p className="text-gray-600">
{item.description}
</p>


</div>

))
}


</div>


</div>

</section>

)

}