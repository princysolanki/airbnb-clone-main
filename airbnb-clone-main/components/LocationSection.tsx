"use client";

import { location } from "@/lib/listing-data";
import { IconZoomIn, IconZoomOut, IconSearch, IconChevronRight } from "./icons";

export default function LocationSection() {
  return (
    <div id="location" className="border-b border-[color:var(--color-border-light)] py-6">
      <h2 className="mb-1 text-2xl font-semibold">Where you&apos;ll be</h2>
      <p className="mb-4 text-[15px]">{location.place}</p>

      <div className="relative mb-4 h-[75vh] w-full overflow-hidden rounded-xl">
        <svg viewBox="0 0 800 400" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          {/* Land base */}
          <rect width="800" height="400" fill="#dfe6d4" />

          {/* Water — diagonal coastline on the left */}
          <polygon points="0,0 340,0 190,400 0,400" fill="#a9cfe3" />

          {/* Grid lines over the land */}
          <g stroke="#cfd8c2" strokeWidth="1">
            {Array.from({ length: 9 }).map((_, i) => (
              <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2="400" />
            ))}
            {Array.from({ length: 5 }).map((_, i) => (
              <line key={`h${i}`} x1="0" y1={i * 100} x2="800" y2={i * 100} />
            ))}
          </g>

          {/* Soft green area circles — reduced size */}
          <circle cx="265" cy="165" r="35" fill="#b9d9a8" opacity="0.9" />
          <circle cx="540" cy="245" r="42" fill="#b9d9a8" opacity="0.9" />

          {/* Home marker — slightly smaller */}
          <circle cx="395" cy="205" r="24" fill="#1f1f1f" />
          <path
            d="M395 192.5 L381.5 203.5 V218.5 H389 V209 H401 V218.5 H408.5 V203.5 Z"
            fill="white"
          />
        </svg>

        {/* Search button, top-left */}
        <button
          aria-label="Search this area"
          className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md hover:bg-[var(--color-border-light)]"
        >
          <IconSearch className="h-4 w-4" />
        </button>

        {/* Zoom controls, top-right — separate stacked buttons */}
        <div className="absolute right-4 top-4 flex flex-col gap-2">
          <button
            aria-label="Zoom in"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-md hover:bg-[var(--color-border-light)]"
          >
            <IconZoomIn className="h-4 w-4" />
          </button>
          <button
            aria-label="Zoom out"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-md hover:bg-[var(--color-border-light)]"
          >
            <IconZoomOut className="h-4 w-4" />
          </button>
        </div>
      </div>

      <p className="mb-4 text-sm text-[var(--color-ink-light)]">{location.note}</p>

      <h3 className="mb-2 font-semibold">{location.neighbourhoodTitle}</h3>
      <p className="mb-4 text-[15px] text-[var(--color-ink-light)]">{location.neighbourhoodBody}</p>

      <button className="flex items-center gap-1 font-semibold underline">
        Show more
        <IconChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}