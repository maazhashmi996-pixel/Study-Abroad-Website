"use client";



function Mistakes() {

     // Common Mistakes (Purple Section)
  const mistakes = [
    {
      title: "Not reading offer conditions carefully",
      desc: "Missing specific academic or language score requirements can delay your unconditional offer.",
    },
    {
      title: "Ignoring offer acceptance deadlines",
      desc: "Universities can withdraw offers if you don't accept them before the stated date.",
    },
    {
      title: "Confusing conditional with unconditional offer",
      desc: "Assuming a conditional offer is final admission without clearing pending requirements.",
    },
    {
      title: "Delaying submission of pending documents",
      desc: "Waiting too long to submit final transcripts or IELTS results loses valuable processing time.",
    },
    {
      title: "Not checking email regularly",
      desc: "Missing important updates or clarifications sent by the admissions team.",
    },
  ];
  return (
    <>
       {/* 4. COMMON MISTAKES (PURPLE BACKGROUND) */}
      <section className="bg-[#3B1E54] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Common Mistakes
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 opacity-90">
              Avoid these pitfalls after receiving your offer letter
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-4xl mx-auto">
            {mistakes.slice(0, 4).map((item, idx) => (
              <div
                key={idx}
                className="bg-[#2E1643] border border-purple-900/60 rounded-2xl p-5 sm:p-6 shadow-lg space-y-2"
              >
                <h3 className="text-base sm:text-lg font-bold text-[#ECA82C]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Centered 5th Item */}
          <div className="max-w-xl mx-auto">
            <div className="bg-[#2E1643] border border-purple-900/60 rounded-2xl p-5 sm:p-6 shadow-lg space-y-2 text-center sm:text-left">
              <h3 className="text-base sm:text-lg font-bold text-[#ECA82C]">
                {mistakes[4].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {mistakes[4].desc}
              </p>
            </div>
          </div>
        </div>
      </section>
</>
  )
}

export default Mistakes
