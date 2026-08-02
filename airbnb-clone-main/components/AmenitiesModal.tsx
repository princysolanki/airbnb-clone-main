"use client";

import { amenityCategories } from "@/lib/listing-data";
import { getAmenityIcon, unavailableAmenities } from "@/lib/amenity-icons";
import AmenityIcon from "./AmenitiesIcon";
import { IconClose } from "./icons";
import { useDialog } from "@/lib/useDialog";

export default function AmenitiesModal({ onClose }: { onClose: () => void }) {
  const dialogRef = useDialog<HTMLDivElement>(onClose);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/50 p-4 sm:p-8">
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="What this place offers"
        className="w-full max-w-[600px] rounded-2xl bg-white"
      >
        <div className="sticky top-0 flex items-center border-b border-[color:var(--color-border-light)] bg-white p-4">
          <button
            onClick={onClose}
            aria-label="Close"
            className="rounded-full p-2 hover:bg-[var(--color-border-light)]"
          >
            <IconClose className="h-4 w-4" />
          </button>
          <h2 className="flex-1 text-center text-base font-semibold">What this place offers</h2>
          <span className="w-8" aria-hidden="true" />
        </div>

        <div className="max-h-[70vh] overflow-y-auto p-6">
          {amenityCategories.map((cat) => (
            <div key={cat.category} className="mb-8 last:mb-0">
              <h3 className="mb-4 text-lg font-semibold">{cat.category}</h3>
              <ul className="space-y-4">
                {cat.items.map((item) => {
                  const available = !unavailableAmenities.has(item);
                  return (
                    <li
                      key={item}
                      className="flex items-center gap-4 border-b border-[color:var(--color-border-light)] pb-4 text-[15px] last:border-0"
                    >
                      <AmenityIcon icon={getAmenityIcon(item)} available={available} />
                      <span className={!available ? "text-[color:var(--color-muted)] line-through" : ""}>
                        {item}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}