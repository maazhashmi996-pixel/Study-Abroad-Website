

// Inline SVG Icons (No external icon library required)
const Icons = {
  Briefcase: () => (
    <svg className="w-8 h-8 fill-current" viewBox="0 0 512 512">
      <path d="M128 48C128 21.5 149.5 0 176 0l160 0c26.5 0 48 21.5 48 48l0 48 96 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L32 512c-35.3 0-64-28.7-64-64L0 160c0-35.3 28.7-64 64-64l96 0 0-48zm48 48l160 0 0-48-160 0 0 48z" />
    </svg>
  ),
  SearchLocation: () => (
    <svg className="w-8 h-8 fill-current" viewBox="0 0 512 512">
      <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
    </svg>
  ),
  BalanceScale: () => (
    <svg className="w-8 h-8 fill-current" viewBox="0 0 640 512">
      <path d="M256 32V64H384V32C384 14.3 369.7 0 352 0H288c-17.7 0-32 14.3-32 32zM32 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H288v64H160c-17.7 0-32 14.3-32 32v32c0 88.4 71.6 160 160 160s160-71.6 160-160V320c0-17.7-14.3-32-32-32H352V224H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z" />
    </svg>
  ),
  ClipboardCheck: () => (
    <svg className="w-8 h-8 fill-current" viewBox="0 0 384 512">
      <path d="M192 0c-41.8 0-77.4 26.7-90.5 64H48C21.5 64 0 85.5 0 112V464c0 26.5 21.5 48 48 48H336c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm116.3 180.3l-112 112c-6.2 6.2-16.4 6.2-22.6 0l-56-56c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L185 322.7l100.7-100.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
    </svg>
  ),
  University: () => (
    <svg className="w-8 h-8 fill-current" viewBox="0 0 512 512">
      <path d="M243.4 2.6l-224 96c-14 6-21.4 21.5-17.4 36.1S19.6 160 34.7 160H477.3c15.1 0 28.7-10.7 32.7-25.3s-3.4-30.1-17.4-36.1l-224-96c-7.9-3.4-16.8-3.4-24.7 0zM32 208H96v208H32V208zm128 0h64v208H160V208zm160 0h64v208H320V208zm128 0h64v208H448V208zM0 464c0 13.3 10.7 24 24 24H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H24c-13.3 0-24 10.7-24 24z" />
    </svg>
  ),
  Passport: () => (
    <svg className="w-8 h-8 fill-current" viewBox="0 0 448 512">
      <path d="M0 64C0 28.7 28.7 0 64 0L384 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm224 64a96 96 0 1 0 0 192 96 96 0 1 0 0-192zm0 48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </svg>
  ),
};

interface CardProps {
  title: string;
  icon: JSX.Element;
}

export default function JourneyCard({ title, icon }: CardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-300 p-7 h-32 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between">
      <div className="text-[#44246f] text-3xl">{icon}</div>
      <h3 className="text-3xl font-semibold text-[#44246f]">{title}</h3>
    </div>
  );
}

