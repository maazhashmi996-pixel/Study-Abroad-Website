import React from 'react';

export default function Steps() {
  const steps = [
    {
      title: "Select Your Program",
      description: "This is where you match your academics + budget + country preference + intake. A good choice here increases acceptance and visa success.",
    },
    {
      title: "Submit Application",
      description: "You fill the university / portal form, upload documents, and pay the application fee (if required). Clean, complete files get faster decisions.",
    },
    {
      title: "Receive Offer Letter",
      description: "The university reviews your file and sends a conditional offer (usually). You must read it carefully as it contains deadlines and conditions.",
    },
    {
      title: "Fulfill Conditions",
      description: "You send whatever the university is still asking for; final transcript, IELTS/PTE, passport copy, deposit in some cases. This is what unlocks your unconditional offer.",
    },
    {
      title: "Pay Tuition Deposit",
      description: "To secure your seat, you pay the tuition deposit mentioned in your offer letter, using the official university channel. Delays here = delays in CAS/CoE.",
    },
    {
      title: "Get Unconditional Offer",
      description: "Now the university confirms: all good, nothing pending, you're fully accepted. This is the admission proof most embassies want to see.",
    },
    {
      title: "Apply for Visa",
      description: "You submit your student visa / study permit file with admission proof, funds, medical/biometrics, and a proper study plan (where needed).",
    },
    {
      title: "Start Your Program",
      description: "You travel, clear immigration, enroll at the university, attend orientation, and start classes on time without breaking visa rules.",
    },
  ];

  const consultantRole = [
    "We check your profile before telling you where to apply",
    "We prepare and submit applications on time",
    "We review offer letters so you don't miss conditions",
    "We guide on deposits and official payment channels",
    "We push universities to issue unconditional offers when intakes are close",
    "We build visa files according to updated rules",
  ];

  return (
    <div className="w-full font-sans">
      
      {/* ================= SECTION 1: YELLOW SECTION (THE 8 STEPS) ================= */}
      <section className="bg-[#f5a623] text-[#2a1747] py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
            The 8 Study Abroad Steps
          </h2>

          {/* 8 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md border border-amber-200 hover:shadow-lg transition-all duration-200"
              >
                <h3 className="font-bold text-lg text-[#2a1747] mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-10">
            <button className="bg-white text-[#2a1747] hover:bg-gray-100 font-semibold text-sm px-6 py-3 rounded-full border border-gray-200 shadow-sm transition">
              Talk to a Study Abroad Advisor
            </button>
          </div>

        </div>
      </section>

      {/* ================= SECTION 2: PURPLE SECTION (HOW WE FIT IN) ================= */}
      <section className="bg-[#2a1747] text-white py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
            How Times Consultant fits into this journey
          </h2>
          <p className="text-xs md:text-sm text-gray-300 mb-10 max-w-2xl mx-auto">
            Times Consultant has been guiding students since 2004 across the UK, Canada, Australia, Germany, Europe, and more. The way we work is simple
          </p>

          {/* 6 Grid Box Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-6">
            {consultantRole.map((roleText, index) => (
              <div 
                key={index}
                className="border border-amber-400/80 rounded-xl p-5 flex items-center justify-center min-h-[90px] bg-[#22123b] hover:border-amber-400 transition"
              >
                <p className="text-amber-400 font-medium text-xs md:text-sm leading-snug">
                  {roleText}
                </p>
              </div>
            ))}
          </div>

          {/* Centered Bottom Card */}
          <div className="max-w-md mx-auto mb-10">
            <div className="border border-amber-400/80 rounded-xl p-5 bg-[#22123b]">
              <p className="text-amber-400 font-medium text-xs md:text-sm leading-snug">
                We give pre-departure help so you arrive and enroll on time
              </p>
            </div>
          </div>

          {/* Subtext */}
          <p className="text-xs text-gray-300 mb-6">
            Tell us which country, which intake, and your last qualification, we'll tell you exactly which step you're on right now.
          </p>

          {/* Yellow CTA Button */}
          <button className="bg-[#f5a623] text-[#2a1747] font-bold text-xs uppercase px-6 py-3 rounded-full hover:bg-amber-400 transition shadow-md">
            Review My Study Visa Case
          </button>

          {/* Bottom Footer Line */}
          <p className="text-[11px] text-amber-300 mt-6 font-light">
            Send your offer letter / application status to Times Consultant and we'll tell you what is done, what is pending, and what to do next to catch your intake.
          </p>

        </div>
      </section>

    </div>
  );
}