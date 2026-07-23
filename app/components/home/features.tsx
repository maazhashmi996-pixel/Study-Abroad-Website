import Image from "next/image";


export default function FeaturedUniversities(){


const universities=[

{
id:1,
name:"University of Oxford",
image:"/images/uni1.png"
},

{
id:2,
name:"University of Toronto",
image:"/images/uni2.png"
},

{
id:3,
name:"University of Melbourne",
image:"/images/uni3.png"
},

{
id:4,
name:"Technical University",
image:"/images/uni4.png"
}

];


return(

<section className="py-16 bg-gray-50">


<div className="container mx-auto px-6">


<div className="text-center mb-12">

<h2 className="text-4xl font-bold text-[#43246f]">
Featured Universities
</h2>

</div>



<div className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-4
gap-8
">


{
universities.map((uni)=>(


<div
key={uni.id}
className="
bg-white
rounded-xl
p-6
shadow-md
hover:shadow-xl
transition
text-center
"
>


<Image

src={uni.image}

alt={uni.name}

width={180}

height={100}

className="mx-auto object-contain h-24"

/>


<h3 className="mt-5 font-semibold">
{uni.name}
</h3>


</div>


))
}


</div>


</div>


</section>

)

}