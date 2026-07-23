import {
  FaUserTie,
  FaUniversity,
  FaPassport,
  FaHeadset
} from "react-icons/fa";


export default function WhyTrustUs(){

const reasons=[
{
id:1,
icon:<FaUserTie />,
title:"Expert Counselors",
description:"Our experienced counselors provide personalized guidance for every student."
},

{
id:2,
icon:<FaUniversity />,
title:"Global University Network",
description:"Strong partnerships with leading universities worldwide."
},

{
id:3,
icon:<FaPassport />,
title:"Visa Assistance",
description:"Complete support for documentation and visa processing."
},

{
id:4,
icon:<FaHeadset />,
title:"Student Support",
description:"Continuous assistance before and after studying abroad."
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
Why Students Trust Us?
</h2>

<p className="text-gray-600 mt-3">
Reliable guidance for your international education journey
</p>

</div>



<div className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-4
gap-8
">


{
reasons.map((item)=>(

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
">


<div className="
w-16
h-16
mx-auto
bg-[#43246f]
text-white
rounded-full
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