"use client";

import OfficeCard from "./officeCard";
import { offices } from "./office";

export default function OfficeGrid() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offices.map((office) => (
            <OfficeCard
              key={office.city}
              city={office.city}
              address={office.address}
              phone={office.phone}
              email={office.email}
            />
          ))}
        </div>
      </div>
    </section>
  );
}