"use client";

import { useState } from "react";


export default function EventRegisterPage() {


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    event: "",
  });



  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };



  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();

    console.log(formData);

    alert("Registration Submitted Successfully!");

  };



  return (

    <section className="bg-[#fafafa] py-16">


      <div className="max-w-3xl mx-auto px-6">


        {/* Heading */}

        <div className="text-center mb-12">


          <p className="text-orange-500 font-semibold mb-3">
            Event Registration
          </p>


          <h1 className="text-3xl md:text-5xl font-bold text-[#45246d]">
            Register For Study Abroad Event
          </h1>


          <p className="mt-4 text-gray-600">
            Fill the form below to reserve your seat.
          </p>


        </div>




        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-md p-8 md:p-10 space-y-6"
        >


          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border rounded-xl px-5 py-4 outline-none focus:border-[#45246d]"
            required
          />



          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-xl px-5 py-4 outline-none focus:border-[#45246d]"
            required
          />



          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded-xl px-5 py-4 outline-none focus:border-[#45246d]"
            required
          />



          <input
            type="text"
            name="country"
            placeholder="Interested Country"
            value={formData.country}
            onChange={handleChange}
            className="w-full border rounded-xl px-5 py-4 outline-none focus:border-[#45246d]"
          />



          <select
            name="event"
            value={formData.event}
            onChange={handleChange}
            className="w-full border rounded-xl px-5 py-4 outline-none focus:border-[#45246d]"
            required
          >

            <option value="">
              Select Event
            </option>

            <option>
              Study in Denmark Information Session
            </option>

            <option>
              Study Abroad Education Expo 2026
            </option>

            <option>
              Free Visa Consultation Event
            </option>


          </select>




          <button
            type="submit"
            className="w-full bg-[#45246d] hover:bg-[#5b378f]
            text-white py-4 rounded-full font-semibold transition"
          >

            Submit Registration

          </button>



        </form>



      </div>


    </section>

  );

}