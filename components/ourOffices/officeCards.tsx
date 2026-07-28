"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

interface Props {
  city: string;
  address: string;
  phone: string;
  email: string;
}

export default function OfficeCard({
  city,
  address,
  phone,
  email,
}: Props) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold mb-4">{city}</h3>

      <p className="flex gap-2 mb-2">
        <FaMapMarkerAlt />
        {address}
      </p>

      <p className="flex gap-2 mb-2">
        <FaPhoneAlt />
        {phone}
      </p>

      <p className="flex gap-2">
        <FaEnvelope />
        {email}
      </p>
    </div>
  );
}