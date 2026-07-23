import Image from "next/image";


export default function Team(){


const team=[

{
id:1,
name:"Muhammad Ali",
role:"Education Counselor",
image:"/images/about/team/team1.jpg"
},

{
id:2,
name:"Sara Ahmed",
role:"Visa Consultant",
image:"/images/about/team/team2.jpg"
},

{
id:3,
name:"Usman Khan",
role:"Admission Advisor",
image:"/images/about/team/team3.jpg"
}

];


return(

<section className="py-16 bg-white">


<div className="container mx-auto px-6">


<div className="text-center mb-12">

<h2 className="
text-4xl
font-bold
text-[#43246f]
">
Our Team
</h2>

<p className="text-gray-600 mt-3">
Meet our experienced education consultants
</p>

</div>



<div className="
grid
grid-cols-1
md:grid-cols-3
gap-8
">


{
team.map((member)=>(

<div
key={member.id}
className="
bg-white
rounded-xl
shadow-md
overflow-hidden
hover:shadow-xl
transition
"
>


<Image

src={member.image}

alt={member.name}

width={400}

height={400}

className="
w-full
h-72
object-cover
"

/>


<div className="p-6 text-center">


<h3 className="
text-xl
font-semibold
">
{member.name}
</h3>


<p className="text-[#43246f] mt-2">
{member.role}
</p>


</div>


</div>


))
}


</div>


</div>


</section>

)

}