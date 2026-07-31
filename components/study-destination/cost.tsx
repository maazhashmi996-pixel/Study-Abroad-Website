export default function Cost() {
  return (
    <section className="bg-gray-50 px-4 sm:px-8 md:px-12 lg:px-20 py-10 md:py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 lg:gap-10">
        
        {/* Left Box: Cost of Studying */}
        <div className="flex flex-col border border-purple-900/10 text-white bg-[#43246f] gap-4 sm:gap-6 p-6 sm:p-8 md:w-1/2 rounded-2xl shadow-xl">
          <h1 className="text-xl sm:text-2xl font-bold text-amber-400 border-b border-purple-400/20 pb-3">
            Cost of Studying In Denmark
          </h1>
          
          <div className="flex flex-col gap-4 text-xs sm:text-sm md:text-base leading-relaxed text-gray-200">
            <p>
              In general, living expenses in Denmark are expensive. While the suggested monthly budget for smaller towns like Aalborg is about EUR 1,000, living in Copenhagen may cost anything from EUR 1,280 to 1,800 per month.
            </p>
            <p>
              However, students from Switzerland and the EU/EEA should consider that Danish institutions do not charge tuition for these students, so they save a lot of money in this area.
            </p>
            <p>
              Several students in Denmark dwell in off-campus residence halls because getting to Danish metropolitan areas by car is typically simple. Make friends and become settled by living in dorms, especially if it’s your first year. Moreover, it is the least expensive choice; one may expect to pay between EUR 240 and EUR 460 monthly for living in residence halls.
            </p>
          </div>
        </div>

        {/* Right Box: Scholarships */}
        <div className="flex flex-col border border-purple-900/10 text-white bg-[#43246f] gap-4 sm:gap-6 p-6 sm:p-8 md:w-1/2 rounded-2xl shadow-xl">
          <h1 className="text-xl sm:text-2xl font-bold text-amber-400 border-b border-purple-400/20 pb-3">
            Scholarships For International Students In Denmark
          </h1>

          <p className="text-xs sm:text-sm text-gray-300 italic">
            Merit-based, covers partial to full tuition for international Master’s students:
          </p>

          <ul className="list-disc pl-5 sm:pl-6 flex flex-col gap-3 text-xs sm:text-sm md:text-base text-gray-200">
            <li>
              <strong className="text-amber-200">Danish Government Scholarship:</strong> Covers full tuition and monthly stipend for non-EU/EEA students with outstanding academic records.
            </li>
            <li>
              <strong className="text-amber-200">DTU Scholarship:</strong> Partial tuition waiver for high-achieving non-EU/EEA Master’s students.
            </li>
            <li>
              <strong className="text-amber-200">Aarhus University Scholarship:</strong> Covers 50%-100% tuition for exceptional international students.
            </li>
            <li>
              <strong className="text-amber-200">Erasmus+ Scholarship:</strong> EU-funded, covers tuition, travel, and living allowance for exchange students.
            </li>
            <li>
              <strong className="text-amber-200">Novo Nordisk Foundation Scholarship:</strong> Covers full tuition and stipend for students in life sciences and health programs.
            </li>
            <li>
              <strong className="text-amber-200">HEC Denmark Scholarship (For Pakistanis):</strong> Higher Education Commission Pakistan offers funded programs for Danish universities.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}