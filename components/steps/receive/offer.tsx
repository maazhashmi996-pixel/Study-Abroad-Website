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
{/* 6. DOCUMENTS REQUIRED */}
      <section className="bg-[#3B1E54] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Documents / Proof Required
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 opacity-90">
              Key documents involved during the offer letter acceptance phase
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {requiredDocs.map((doc, idx) => (
              <div
                key={idx}
                className="bg-[#2E1643] border border-amber-400/30 rounded-xl p-4 flex items-center space-x-3 shadow-md"
              >
                <div className="w-2 h-2 rounded-full bg-[#ECA82C] shrink-0" />
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