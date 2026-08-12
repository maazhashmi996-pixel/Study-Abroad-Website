"use client";

function Mistakes() {
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
      desc: "Waiting too long to submit final transcripts or IELTS results can cause unnecessary delays.",
    },
    {
      title: "Not checking email regularly",
      desc: "Missing important updates or clarifications sent by the admissions team can affect your application.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto space-y-8 sm:space-y-10">

        {/* Section Heading */}
        <div className="text-center space-y-2">
          <span className="inline-block text-xs sm:text-sm font-bold text-red-600 uppercase tracking-wider">
            Important
          </span>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-800">
            Common Mistakes to Avoid
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Avoid these common mistakes after receiving your offer letter.
          </p>
        </div>

        {/* Mistakes Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 max-w-4xl mx-auto">
          {mistakes.map((item, idx) => (
            <div
              key={idx}
              className={`
                bg-slate-50
                border border-slate-200
                rounded-2xl
                p-5 sm:p-6
                shadow-sm
                hover:shadow-md
                hover:border-red-400
                hover:-translate-y-1
                transition-all duration-300
                ${idx === 4 ? "sm:col-span-2 sm:max-w-xl sm:w-full sm:mx-auto" : ""}
              `}
            >
              <div className="flex items-start gap-3">

                {/* Number */}
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-600 text-white text-xs font-bold flex items-center justify-center">
                  {idx + 1}
                </span>

                <h3 className="text-base sm:text-lg font-bold text-slate-800 leading-snug">
                  {item.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-11 mt-3">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Mistakes;