"use client";

import Image from "next/image";
import { heroImages } from "@/lib/listing-data";

export default function PhotoGrid({ onOpenTour }: { onOpenTour: () => void }) {
  return (
    <section id="photos" className="mx-auto mt-6 max-w-[1120px] px-6 lg:px-0">
      <div className="relative grid grid-cols-4 grid-rows-2 gap-2 overflow-hidden rounded-xl" style={{ height: 480 }}>
        <button
          onClick={onOpenTour}
          aria-label={`Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 image 1`}
          className="group relative col-span-2 row-span-2 overflow-hidden"
        >
          <Image
            src={heroImages[0].src}
            alt={heroImages[0].alt}
            fill
            sizes="(max-width: 1120px) 50vw, 560px"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            priority
          />
          <span className="absolute inset-0 bg-black/0 transition-colors duration-200 group-hover:bg-black/10" />
        </button>

        {heroImages.slice(1).map((img) => (
          <button
            key={img.src}
            onClick={onOpenTour}
            aria-label={img.alt}
            className="group relative col-span-1 row-span-1 overflow-hidden"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 1120px) 25vw, 280px"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
            <span className="absolute inset-0 bg-black/0 transition-colors duration-200 group-hover:bg-black/10" />
          </button>
        ))}

        <button
          onClick={onOpenTour}
          className="absolute bottom-4 right-4 flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold shadow-md ring-1 ring-black/10 transition-transform hover:scale-[1.03]"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
          </svg>
          Show all photos
        </button>
      </div>
    </section>
  );
}
