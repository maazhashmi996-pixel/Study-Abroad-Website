export default function Application() {
  return (
    <section className="bg-amber-500 px-4 sm:px-8 md:px-16 lg:px-20 py-10 md:py-16">
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        
        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#43246F] border-b border-[#43246F]/20 pb-4">
          Application Documents
        </h1>

        {/* Responsive Grid List */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-white text-base sm:text-lg md:text-xl font-medium">
          <li className="flex items-center gap-3 bg-[#43246F]/10 p-3.5 sm:p-4 rounded-xl border border-[#43246F]/20">
            <span className="h-2 w-2 rounded-full bg-[#43246F] shrink-0" />
            <span>Online application form</span>
          </li>

          <li className="flex items-center gap-3 bg-[#43246F]/10 p-3.5 sm:p-4 rounded-xl border border-[#43246F]/20">
            <span className="h-2 w-2 rounded-full bg-[#43246F] shrink-0" />
            <span>Official transcripts</span>
          </li>

          <li className="flex items-center gap-3 bg-[#43246F]/10 p-3.5 sm:p-4 rounded-xl border border-[#43246F]/20">
            <span className="h-2 w-2 rounded-full bg-[#43246F] shrink-0" />
            <span>Standardized test scores</span>
          </li>

          <li className="flex items-center gap-3 bg-[#43246F]/10 p-3.5 sm:p-4 rounded-xl border border-[#43246F]/20">
            <span className="h-2 w-2 rounded-full bg-[#43246F] shrink-0" />
            <span>Motivation letter</span>
          </li>

          <li className="flex items-center gap-3 bg-[#43246F]/10 p-3.5 sm:p-4 rounded-xl border border-[#43246F]/20">
            <span className="h-2 w-2 rounded-full bg-[#43246F] shrink-0" />
            <span>Letter of recommendation</span>
          </li>

          <li className="flex items-center gap-3 bg-[#43246F]/10 p-3.5 sm:p-4 rounded-xl border border-[#43246F]/20">
            <span className="h-2 w-2 rounded-full bg-[#43246F] shrink-0" />
            <span>Portfolio</span>
          </li>

          <li className="flex items-center gap-3 bg-[#43246F]/10 p-3.5 sm:p-4 rounded-xl border border-[#43246F]/20 sm:col-span-2 md:col-span-1">
            <span className="h-2 w-2 rounded-full bg-[#43246F] shrink-0" />
            <span>Proof of financial Resources</span>
          </li>
        </ul>

      </div>
    </section>
  );
}