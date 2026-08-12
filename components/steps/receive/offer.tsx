
"use client";

export default function OfferPage() {
  // Documents Required List
  const requiredDocs = [
    "Copy of Conditional Offer Letter",
    "Application Reference / Student ID",
    "Final Semester Transcripts (when ready)",
    "Official Language Test Score (IELTS/PTE/TOEFL)",
    "Updated Passport Copy (if requested)",
    "SOP / CV updates (if conditions specify)",
    "Financial Proofs / Sponsorship Letters",
    "Signed Offer Acceptance Form",
  ];

  return (
    <div className="w-full font-sans bg-white text-slate-800">

      {/* ================= DOCUMENTS REQUIRED ================= */}
      <section className=" text-slate-800 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">

        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">

          {/* Section Heading */}
          <div className="text-center space-y-2">

            <span className="inline-block text-xs sm:text-sm font-bold text-red-600 uppercase tracking-wider">
              Required Documents
            </span>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Documents & Proof Required
            </h2>

            <p className="text-xs sm:text-sm text-blue-600">
              Keep these important documents ready during your offer letter
              acceptance and admission process.
            </p>

          </div>

          {/* Documents Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-4xl mx-auto">

            {requiredDocs.map((doc, idx) => (
              <div
                key={idx}
                className="
                  group
                  bg-slate-900
                  border border-slate-700
                  rounded-xl
                  p-4
                  flex items-center
                  gap-3
                  shadow-md
                  hover:border-red-500
                  hover:-translate-y-0.5
                  transition-all
                  duration-300
                "
              >

                {/* Document Number */}
                <div
                  className="
                    w-8 h-8
                    rounded-full
                    bg-red-600
                    text-white
                    shrink-0
                    flex items-center justify-center
                    text-xs
                    font-bold
                    group-hover:bg-red-500
                    transition-colors
                  "
                >
                  {idx + 1}
                </div>

                {/* Document Text */}
                <p className="text-xs sm:text-sm text-slate-100 font-medium leading-snug">
                  {doc}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
}

