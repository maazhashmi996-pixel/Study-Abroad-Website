import Image from "next/image";


export default function Blogs(){


const blogs=[

{
id:1,
title:"How to Study Abroad Successfully",
image:"/images/blog1.jpg"
},

{
id:2,
title:"Top Universities For International Students",
image:"/images/blog2.jpg"
},

{
id:3,
title:"Student Visa Requirements Guide",
image:"/images/blog3.jpg"
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
Latest Blogs & News
</h2>

</div>



<div className="
grid
grid-cols-1
md:grid-cols-3
gap-8
">


{
blogs.map((blog)=>(


<div
key={blog.id}
className="
bg-white
rounded-xl
overflow-hidden
shadow-md
hover:shadow-xl
transition
"
>


<Image

src={blog.image}

alt={blog.title}

width={400}

height={250}

className="w-full h-52 object-cover"

/>


<div className="p-6">


<h3 className="
text-xl
font-semibold
mb-3
">
{blog.title}
</h3>


<button className="
text-[#43246f]
font-semibold
">
Read More →
</button>


</div>


</div>


))
}


</div>


</div>

</section>

)

}