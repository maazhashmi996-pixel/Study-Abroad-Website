import Image from "next/image";

function First() {
  return (
    <section className="w-full py-10">
      <div className="max-w-7xl mx-auto px-4">
        <Image
          src="/images/services/study-Abroad.png"
          alt="Study Abroad"
          width={1200}
          height={600}
          className="w-full h-auto rounded-xl object-cover"
          priority
        />
      </div>
    </section>
  );
}

export default First;