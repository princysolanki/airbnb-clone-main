"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { allPhotos } from "@/lib/listing-data";
import { IconChevronLeft, IconChevronRight, IconClose } from "./icons";
import { useDialog } from "@/lib/useDialog";

function IconGrid({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      {[3, 12, 21].map((cy) =>
        [3, 12, 21].map((cx) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.6" />)
      )}
    </svg>
  );
}

export default function Lightbox({
  initialIndex,
  onClose,
}: {
  initialIndex: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(initialIndex);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const dialogRef = useDialog<HTMLDivElement>(onClose);

  const goNext = useCallback(() => {
    setDirection("next");
    setIndex((i) => (i + 1) % allPhotos.length);
  }, []);

  const goPrev = useCallback(() => {
    setDirection("prev");
    setIndex((i) => (i - 1 + allPhotos.length) % allPhotos.length);
  }, []);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev, onClose]);

  const photo = allPhotos[index];

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${photo.alt || "Photo"} viewer`}
      className="fixed inset-0 z-[60] flex flex-col bg-white"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <button
          aria-label="View all photos"
          className="rounded-full p-2 text-neutral-700 hover:bg-neutral-100"
        >
          <IconGrid className="h-5 w-5" />
        </button>

        <h2 className="flex-1 truncate text-center text-base font-semibold text-neutral-900">
          {photo.alt}
        </h2>

        <div className="flex items-center gap-3 sm:gap-5">
          <span className="whitespace-nowrap text-sm text-neutral-500">
            {index + 1} of {allPhotos.length}
          </span>
          <button
            onClick={onClose}
            aria-label="Close"
            className="rounded-full p-2 text-neutral-700 hover:bg-neutral-100"
          >
            <IconClose className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Image area */}
      <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-neutral-50 px-6 py-6 sm:px-10">
        <button
          onClick={goPrev}
          aria-label="Previous photo"
          className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 text-neutral-700 border-1 ring-1 ring-black/5 transition hover:bg-neutral-50 sm:left-6"
        >
          <IconChevronLeft className="h-5 w-5" />
        </button>

        <div
          key={photo.src}
          className="relative h-full w-full max-w-5xl animate-[fadeIn_0.25s_ease]"
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>

        <button
          onClick={goNext}
          aria-label="Next photo"
          className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 text-neutral-700 border-1 ring-1 ring-black/5 transition hover:bg-neutral-50 sm:right-6"
        >
          <IconChevronRight className="h-5 w-5" />
        </button>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(${direction === "next" ? "16px" : "-16px"}); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}