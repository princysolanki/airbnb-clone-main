"use client";

import { useState } from "react";
import { amenitiesPreview, amenitiesTotal } from "@/lib/listing-data";
import AmenityIcon from "./AmenitiesIcon";
import AmenitiesModal from "./AmenitiesModal";

export default function AmenitiesSection() {
  const [open, setOpen] = useState(false);

  return (
    <div id="amenities" className="border-b border-[color:var(--color-border-light)] py-6">
      <h2 className="mb-4 text-xl font-semibold">What this place offers</h2>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-4">
        {amenitiesPreview.map((item) => (
          <li key={item.label} className="flex items-center gap-4 text-[15px]">
            <AmenityIcon icon={item.icon} available={item.available} />
            <span className={!item.available ? "text-[color:var(--color-muted)] line-through" : ""}>
              {item.label}
            </span>
          </li>
        ))}
      </ul>
      <button
        onClick={() => setOpen(true)}
        className="mt-6 rounded-lg border border-[color:var(--color-ink)] px-5 py-3 text-sm font-semibold hover:bg-[var(--color-border-light)]"
      >
        Show all {amenitiesTotal} amenities
      </button>
      {open && <AmenitiesModal onClose={() => setOpen(false)} />}
    </div>
  );
}