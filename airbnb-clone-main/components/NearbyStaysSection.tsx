"use client";

import { useState } from "react";
import Image from "next/image";
import { nearbyStays } from "@/lib/listing-data";
import { IconStar, IconChevronLeft, IconChevronRight } from "./icons";

const VISIBLE_COUNT = 5;

function formatRating(value: number) {
  const rounded = Math.round(value * 100) / 100;
  return rounded % 1 === 0 ? rounded.toFixed(1) : rounded.toString();
}

function startIndexForPage(page: number, total: number) {
  return Math.max(0, Math.min(page * VISIBLE_COUNT, total - VISIBLE_COUNT));
}

export default function NearbyStaysSection() {
  const totalPages = Math.max(1, Math.ceil(nearbyStays.length / VISIBLE_COUNT));
  const [page, setPage] = useState(0);

  const startIndex = startIndexForPage(page, nearbyStays.length);
  const trackWidthPercent = (nearbyStays.length / VISIBLE_COUNT) * 100;
  const itemWidthPercent = 100 / nearbyStays.length;
  const translatePercent = startIndex * itemWidthPercent;

  const isFirst = page === 0;
  const isLast = page === totalPages - 1;

  return (
    <div className="py-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold">More stays nearby</h2>
        <div className="flex items-center gap-3">
          <span className="text-sm text-[var(--color-ink-light)]">
            {page + 1} / {totalPages}
          </span>
          <button
            aria-label="Previous stays"
            disabled={isFirst}
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            className={`flex h-8 w-8 items-center justify-center rounded-full border transition-colors ${
              isFirst
                ? "cursor-not-allowed border-[color:var(--color-border-light)] text-[var(--color-border)]"
                : "border-[color:var(--color-border)] hover:bg-[var(--color-border-light)]"
            }`}
          >
            <IconChevronLeft className="h-4 w-4" />
          </button>
          <button
            aria-label="Next stays"
            disabled={isLast}
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            className={`flex h-8 w-8 items-center justify-center rounded-full border transition-colors ${
              isLast
                ? "cursor-not-allowed border-[color:var(--color-border-light)] text-[var(--color-border)]"
                : "border-[color:var(--color-border)] hover:bg-[var(--color-border-light)]"
            }`}
          >
            <IconChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            width: `${trackWidthPercent}%`,
            transform: `translateX(-${translatePercent}%)`,
          }}
        >
          {nearbyStays.map((stay, i) => (
            <div key={i} className="shrink-0 px-2" style={{ width: `${itemWidthPercent}%` }}>
              <div className="relative mb-2 h-40 w-full overflow-hidden rounded-xl">
                <Image
                  src={stay.image}
                  alt={stay.title}
                  fill
                  sizes="200px"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <p className="line-clamp-2 text-sm font-medium">{stay.title}</p>
              <div className="mt-1 flex items-center gap-2 text-sm">
                <span className="font-semibold">₹{stay.price.toLocaleString("en-IN")}</span>
                <span className="flex items-center gap-1">
                  <IconStar className="h-3.5 w-3.5" />
                  {formatRating(stay.rating)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}