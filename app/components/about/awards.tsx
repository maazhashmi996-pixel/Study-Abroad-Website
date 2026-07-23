import {
 FaAward,
 FaTrophy,
 FaCertificate
} from "react-icons/fa";


export default function Awards(){


const awards=[

{
id:1,
icon:<FaAward/>,
title:"Best Education Consultant",
year:"2023"
},

{
id:2,
icon:<FaTrophy/>,
title:"Excellence Award",
year:"2024"
},

{
id:3,
icon:<FaCertificate/>,
title:"Trusted Education Partner",
year:"2025"
}

];


return(

<section className="py-16 bg-gray-50">


<div className="container mx-auto px-6">


<div className="text-center mb-12">

<h2 className="
text-4xl
font-bold
text-[#43246f]
">
Awards & Achievements
</h2>

</div>



<div className="
grid
grid-cols-1
md:grid-cols-3
gap-8
">


{
awards.map((award)=>(

<div
key={award.id}
className="
bg-white
p-8
rounded-xl
shadow-md
text-center
hover:shadow-xl
transition
">


<div className="
text-5xl
text-[#43246f]
mb-5
flex
justify-center
">

{award.icon}

</div>


<h3 className="
text-xl
font-semibold
">
{award.title}
</h3>


<p className="text-gray-600 mt-2">
{award.year}
</p>


</div>

))
}


</div>


</div>


</section>

)

}