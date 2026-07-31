export default function Post() {
  return (
    <section className="bg-white px-4 sm:px-8 md:px-12 lg:px-20 py-6 md:py-10 text-[#43246f]">
      <div className="max-w-7xl mx-auto flex flex-col gap-3 sm:gap-4">
        
        {/* Heading */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold border-b-2 border-[#43246f]/10 pb-2">
          Post-Study Work Opportunities
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
          After completing a Bachelor’s, Master’s, or PhD in Denmark, non-EU/EEA students can apply for a 3-year job search permit through the Danish Agency for International Recruitment and Integration. If your passport is valid, the permit is automatically extended.
          Technology, engineering, and life sciences are the most in-demand sectors, with a strong job offer opening the path to a regular work visa and permanent residency.
        </p>

      </div>
    </section>
  );
}