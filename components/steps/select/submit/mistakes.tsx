"use client";

import {
  GraduationCap,
  FileCheck,
  Globe,
  FileText,
  UserCheck,
  Award,
  Search,
  CheckCircle2,
  UserPlus,
  Upload,
  HelpCircle,
  CreditCard,
  Clock,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

export default function Mistakes() {
  // Prerequisites Data
  const prerequisites = [
    {
      title: "Shortlisted programs and universities",
      desc: "You should not be applying randomly. By Step 2, you should already know 'I'm applying to Program X at University Y for Intake Z.'",
      icon: GraduationCap,
    },
    {
      title: "Your academic documents ready to upload",
      desc: "Transcripts, mark sheets, degree certificates, provisional certificates.",
      icon: FileCheck,
    },
    {
      title: "Your English language test status",
      desc: "IELTS / PTE / TOEFL score, or a clear plan if the university accepts 'English as Medium of Instruction' instead for certain countries/programs.",
      icon: Globe,
    },
    {
      title: "A valid passport scan",
      desc: "Many universities require passport ID pages when you apply.",
      icon: FileText,
    },
    {
      title: "Statement of Purpose / Personal Statement (if required)",
      desc: "Some programs (especially postgraduate) need to understand 'Why this course?' and 'Why now?'",
      icon: FileText,
    },
    {
      title: "CV / Resume (for postgraduate / professional programs)",
      desc: "Especially important for MBAs, Masters with industry focus, etc.",
      icon: UserCheck,
    },
    {
      title: "Referee details / recommendation letters (if needed)",
      desc: "Some schools ask for academic or professional references at the application stage.",
      icon: Award,
    },
  ];

  // How This Step Works Data (Yellow Section)
  const processSteps = [
    {
      title: "Create an application account / portal login",
      desc: "Some countries use centralized portals (like UCAS in the UK for undergrad). Others require applying directly on the university website. You'll create a profile and select your program.",
      icon: UserPlus,
    },
    {
      title: "Fill in your personal and academic details",
      desc: "You enter your personal information, education history, grades, graduation dates, and (if applicable) work experience. This must match your documents exactly.",
      icon: UserCheck,
    },
    {
      title: "Upload all required documents",
      desc: "This usually includes transcripts, certificates, passport scan, English test score, CV, and Statement of Purpose. Missing or blurry documents slow down your file.",
      icon: Upload,
    },
    {
      title: "Answer course-specific questions",
      desc: "Some programs ask why you chose that course, how it fits your career plan, or whether you understand the fees. Treat these seriously. Admissions and later, visa officers, both look at intent.",
      icon: HelpCircle,
    },
    {
      title: "Pay the application fee (if there is one)",
      desc: "Some universities charge an application fee. In some cases there is no fee. But if there is a fee, payment is part of 'submission' — it's not considered 'submitted' until paid.",
      icon: CreditCard,
    },
    {
      title: "Submit before the deadline for your intake",
      desc: "Once submitted, you receive either a confirmation email or an application ID/reference number. Keep that safe. You will need it for follow-up.",
      icon: Clock,
    },
  ];




  // Documents Required List
  const requiredDocs = [
    "Academic transcripts / mark sheets",
    "Degree certificate or provisional certificate (if graduated)",
    "Current semester or final year transcript (if still studying)",
    "English language test scores (IELTS / PTE / TOEFL), or proof of medium of instruction where accepted",
    "Passport ID page",
    "Statement of Purpose / Personal Statement",
    "CV / Resume (postgraduate, MBA, or skill-based programs)",
    "Work experience letters (for programs that require relevant experience)",
    "Reference letters / referee contact details (if the program requests them)",
    "Application fee payment receipt (if applicable)",
  ];

  return (
    <div className="w-full font-sans bg-white text-slate-800">
      
      {/* 1. HERO & WHY THIS STEP MATTERS */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
        

        

        </div>

        {/* DIVIDER WITH STAR */}
        <div className="relative flex py-2 items-center">
          <div className="flex-grow border-t border-slate-200"></div>
          <span className="flex-shrink mx-4 text-slate-400 text-xs">★</span>
          <div className="flex-grow border-t border-slate-200"></div>
        </div>

     
      </section>

    

      {/* 5. TIMELINE */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-extrabold text-[#3B1E54]">Timeline</h2>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5">
          <p className="text-xs sm:text-sm text-slate-700 font-medium">
            “Submit Application” is Step 2. It comes <strong className="text-[#3B1E54]">after</strong> you’ve chosen the correct program and country, and <strong className="text-[#3B1E54]">before</strong> you receive any offer letter.
          </p>
        </div>

        <div className="space-y-4 max-w-2xl mx-auto">
          <div className="bg-[#3B1E54] text-white p-4 sm:p-5 rounded-2xl font-bold text-xs sm:text-base shadow-md">
            You should submit your university applications about 4–6 months before your intended start date.
          </div>

          <div className="bg-[#3B1E54] text-white p-4 sm:p-5 rounded-2xl font-bold text-xs sm:text-base shadow-md">
            For a September intake, most serious students apply between February and May.
          </div>

          <div className="bg-[#3B1E54] text-white p-4 sm:p-5 rounded-2xl font-bold text-xs sm:text-base shadow-md">
            The earlier you apply, the better your chances for faster decisions, seat availability, and visa preparation time.
          </div>
        </div>

        {/* Step Navigation Pill Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href="/study-abroad-steps/select-your-program"
            className="bg-[#ECA82C] hover:bg-[#d99723] text-[#3B1E54] font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-colors inline-flex items-center space-x-2 shadow"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous step: Select Your Program</span>
          </a>

          <a
            href="/study-abroad-steps/receive-offer-letter"
            className="bg-[#ECA82C] hover:bg-[#d99723] text-[#3B1E54] font-bold text-xs sm:text-sm px-6 py-3 rounded-full transition-colors inline-flex items-center space-x-2 shadow"
          >
            <span>Next step: Receive Offer Letter</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* 6. DOCUMENTS / PROOF REQUIRED */}
      <section className="bg-[#3B1E54] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Documents / proof required
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 opacity-90">
              When you hit “Submit,” you’re usually expected to provide some or all of the following
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {requiredDocs.map((doc, idx) => (
              <div
                key={idx}
                className="bg-[#2E1643] border border-amber-400/40 rounded-xl p-4 flex items-center space-x-3 shadow-md"
              >
                <div className="w-2 h-2 rounded-full bg-[#ECA82C] flex-shrink-0" />
                <p className="text-xs sm:text-sm text-slate-100 font-medium leading-snug">
                  {doc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <p className="text-xs sm:text-sm text-amber-300/90 italic max-w-3xl mx-auto">
              Important: universities do not guess. If a document is missing or unreadable, they pause your file. That delay becomes your problem at visa time.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}