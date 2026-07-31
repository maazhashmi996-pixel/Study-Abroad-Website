export default function Admission() {
  return (
    <section className="bg-amber-500 text-white px-4 sm:px-8 md:px-16 lg:px-20 py-10 md:py-16">
      <div className="max-w-5xl mx-auto flex flex-col gap-6 md:gap-8">
        
        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold border-b border-white/30 pb-4 text-center md:text-left">
          Admission Requirements In Denmark
        </h1>

        <div className="flex flex-col gap-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-amber-100">
            Background in Education
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            
            {/* Card 1: Undergraduates */}
            <div className="bg-amber-600/40 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-amber-400/30 flex flex-col gap-2">
              <span className="font-bold text-lg text-amber-200">
                Undergraduates:
              </span>
              <p className="text-sm sm:text-base leading-relaxed text-amber-50">
                Your degree needs to be equivalent to the Danish upper secondary school graduation certificate.
              </p>
            </div>

            {/* Card 2: Graduate */}
            <div className="bg-amber-600/40 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-amber-400/30 flex flex-col gap-2">
              <span className="font-bold text-lg text-amber-200">
                Graduate:
              </span>
              <p className="text-sm sm:text-base leading-relaxed text-amber-50">
                Usually, a valid Bachelor’s degree or its equivalent is necessary.
              </p>
            </div>

            {/* Card 3: Academic Performance */}
            <div className="bg-amber-600/40 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-amber-400/30 flex flex-col gap-2">
              <span className="font-bold text-lg text-amber-200">
                Academic Performance:
              </span>
              <p className="text-sm sm:text-base leading-relaxed text-amber-50">
                In your prior studies, exhibit a strong level of academic performance. This might entail reaching minimum GPA criteria (you may have to convert from your grading system).
              </p>
            </div>

            {/* Card 4: Certain Requirements */}
            <div className="bg-amber-600/40 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-amber-400/30 flex flex-col gap-2">
              <span className="font-bold text-lg text-amber-200">
                Certain Requirements:
              </span>
              <p className="text-sm sm:text-base leading-relaxed text-amber-50">
                Programs may have certain field-related requirements or course prerequisites.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}