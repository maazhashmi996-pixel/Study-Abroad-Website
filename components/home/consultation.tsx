"use client";


export default function Consultation(){


return(

<section className="
py-16
bg-[#43246f]
">


<div className="
container
mx-auto
px-6
">


<div className="
max-w-3xl
mx-auto
text-center
text-white
">


<h2 className="
text-4xl
font-bold
mb-4
">
Book A Free Consultation
</h2>


<p className="mb-8">
Get expert guidance for your study abroad journey.
</p>



<form className="
grid
grid-cols-1
md:grid-cols-2
gap-5
">


<input
type="text"
placeholder="Your Name"
className="
p-4
rounded-lg
text-black
"
/>


<input
type="email"
placeholder="Email Address"
className="
p-4
rounded-lg
text-black
"
/>


<input
type="tel"
placeholder="Phone Number"
className="
p-4
rounded-lg
text-black
"
/>


<input
type="text"
placeholder="Interested Country"
className="
p-4
rounded-lg
text-black
"
/>


<textarea

placeholder="Message"

className="
p-4
rounded-lg
text-black
md:col-span-2
h-32
"

/>



<button

className="
bg-white
text-[#43246f]
font-bold
py-3
rounded-lg
md:col-span-2
hover:bg-gray-200
transition
"

>
Submit Request
</button>


</form>


</div>


</div>


</section>

)

}