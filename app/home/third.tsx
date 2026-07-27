

export default function Third()  {


  return (
    <div className="min-h-screen bg-[#3b2768] text-white flex flex-col font-sans">
{/* --- MAIN HERO SECTION --- */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Information & Marketing */}
        <div className="space-y-6">
          <div className="space-y-1 text-lg sm:text-xl">
            <div>
              <span className="text-[#f7a600] font-bold text-xl sm:text-2xl">65+</span> Countries
            </div>
            <div>
              <span className="text-[#f7a600] font-bold text-xl sm:text-2xl">3000+</span> Universities
            </div>
            <div>
              <span className="text-[#f7a600] font-bold text-xl sm:text-2xl">3.4 Million+</span> Programs
            </div>
          </div>

          <div className="pt-2">
            <h2 className="text-[#f7a600] text-xl sm:text-2xl font-semibold">
              Not Sure Where to begin?
            </h2>
            <p className="text-gray-300 text-base sm:text-lg font-light">
              Let our experts guide you towards right choice.
            </p>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
            Share Your <span className="text-[#f7a600]">Details</span> - Our{' '}
            <span className="text-[#f7a600]">Experts</span> Will Contact You
          </h1>
        </div>

        {/* Right Column: Lead Form */}
        <div>
          <form  className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <input
                type="text"
                
                placeholder="Full Name"
              
                className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-purple-200 text-sm focus:outline-none focus:border-[#f7a600] focus:bg-white/30 transition-all"
              />
            </div>

            <div>
              <input
                type="email"
             
                placeholder="Email Address*"
             
                className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-purple-200 text-sm focus:outline-none focus:border-[#f7a600] focus:bg-white/30 transition-all"
              />
            </div>

            <div>
              <input
                type="tel"
              
                placeholder="Mobile"
               
                className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-purple-200 text-sm focus:outline-none focus:border-[#f7a600] focus:bg-white/30 transition-all"
              />
            </div>

            <div>
              <select
                name="destination"
             
                className="w-full bg-[#523d7f] border border-white/30 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#f7a600] transition-all appearance-none cursor-pointer"
              >
                <option value="" disabled>Preferred Study Destination</option>
                <option value="uk">United Kingdom</option>
                <option value="usa">USA</option>
                <option value="canada">Canada</option>
                <option value="australia">Australia</option>
              </select>
            </div>

            <div>
              <select
                name="city"
              
                className="w-full bg-[#523d7f] border border-white/30 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#f7a600] transition-all appearance-none cursor-pointer"
              >
                <option value="" disabled>Select City</option>
                <option value="lahore">Lahore</option>
                <option value="karachi">Karachi</option>
                <option value="islamabad">Islamabad</option>
              </select>
            </div>

            <div>
              <select
                name="counsellingMode"
             
                className="w-full bg-[#523d7f] border border-white/30 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#f7a600] transition-all appearance-none cursor-pointer"
              >
                <option value="" disabled>Preferred Mode of Counselling</option>
                <option value="online">Online</option>
                <option value="office">In-Office</option>
              </select>
            </div>

            <div>
              <select
                name="studyLevel"
              
                className="w-full bg-[#523d7f] border border-white/30 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#f7a600] transition-all appearance-none cursor-pointer"
              >
                <option value="" disabled>Preferred Study Level</option>
                <option value="undergraduate">Undergraduate</option>
                <option value="postgraduate">Postgraduate</option>
                <option value="doctorate">Doctorate</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <textarea
                name="question"
                placeholder="Ask Your Question"
             
                className="w-full bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-purple-200 text-sm focus:outline-none focus:border-[#f7a600] focus:bg-white/30 transition-all resize-y"
              ></textarea>
            </div>

            <div className="sm:col-span-2 flex items-start space-x-2 text-xs text-gray-200">
              <input
                type="checkbox"
                id="agreeTerms"
             
                className="mt-0.5 accent-[#f7a600] rounded cursor-pointer"
              />
              <label htmlFor="agreeTerms">
                By selecting this you agree to Times
                <a href="#" className="text-indigo-300 underline">
                  privacy policy
                </a>{' '}
                and{' '}
                <a href="#" className="text-indigo-300 underline">
                  Terms & conditions
                </a>{' '}
                you agree to be contacted by phone,email or messages
              </label>
            </div>

            <div className="sm:col-span-2 pt-2">
              <button
                type="submit"
                className="bg-[#f7a600] hover:bg-amber-500 text-[#3b2768] font-bold px-8 py-3 rounded-full text-sm flex items-center space-x-2 transition-transform active:scale-95 shadow-md"
              >
                <span>Submit</span>
                <span>➔</span>
              </button>
            </div>
          </form>
        </div>
      </main>


    
    </div>
  );
};

