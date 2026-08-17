"use client";

export default function Contact() {
  // 1. Function definition (const lagana zaroori hai)
  const openWhatsApp = (
    phoneNumber: string = "923452066100",
    message: string = "Hello! I need some information."
  ) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // 2. Return JSX (Button UI)
  return (
    <div className="p-4">
      <button
        type="button"
        onClick={() => openWhatsApp("923452066100", "Hi, I clicked Contact Us!")}
        className="bg-blue-400 hover:bg-blue-600 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition shadow-md"
      >
        Contact Us
      </button>
    </div>
  );
}