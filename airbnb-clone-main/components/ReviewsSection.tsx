"use client";

import { useState } from "react";
import Image from "next/image";
import {
  guestFavourite,
  listing,
  ratingCategories,
  ratingDistribution,
  reviewHighlights,
  reviews,
} from "@/lib/listing-data";
import {
  IconStar,
  IconSprayBottle,
  IconCheckCircle,
  IconKeyRound,
  IconChatBubble,
  IconMapFold,
  IconPriceTag,
} from "./icons";

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  cleanliness: IconSprayBottle,
  accuracy: IconCheckCircle,
  checkin: IconKeyRound,
  communication: IconChatBubble,
  location: IconMapFold,
  value: IconPriceTag,
};

const highlightImages: Record<string, string> = {
  comfort: "/images/comfort.png",
  accuracy: "/images/accuracy.png",
  hottub: "/images/hot-tub.png",
  condition: "/images/condition.png",
  hospitality: "/images/hospitality.png",
  cleanliness: "/images/cleanliness.png",
  amenities: "/images/amenities.png",
};

export default function ReviewsSection() {
  const maxCount = Math.max(...ratingDistribution.map((r) => r.count), 1);
  const [expandedReviews, setExpandedReviews] = useState<Set<string>>(new Set());

  const toggleReview = (name: string) => {
    setExpandedReviews((prev) => {
      const next = new Set(prev);
      if (next.has(name)) {
        next.delete(name);
      } else {
        next.add(name);
      }
      return next;
    });
  };

  return (
    <div id="reviews" className="border-b border-[color:var(--color-border-light)] py-6">
      <div className="mb-8 flex items-center gap-2">
        <IconStar className="h-6 w-6" />
        <h2 className="text-xl font-semibold">
          {listing.rating} · {listing.reviewCount} reviews
        </h2>
      </div>

      {listing.guestFavourite && (
        <div className="mb-10 flex flex-col items-center border-b border-[color:var(--color-border-light)] pb-10 text-center">
          <div className="flex items-center gap-4">
            <Image src="/images/laurel-left.png" alt="" width={44} height={64} className="h-16 w-11" />
            <span className="text-6xl font-semibold">{guestFavourite.rating}</span>
            <Image src="/images/laurel-right.png" alt="" width={44} height={64} className="h-16 w-11" />
          </div>
          <p className="mt-3 text-xl font-semibold">{guestFavourite.title}</p>
          <p className="mt-2 max-w-md text-sm text-[var(--color-ink-light)]">
            {guestFavourite.reviewsBody}
          </p>
          <button className="mt-4 font-semibold underline">How reviews work</button>
        </div>
      )}

      <div className="mb-10 grid grid-cols-7 gap-x-6 border-b border-[color:var(--color-border-light)] pb-10">
        <div>
          <p className="mb-3 text-sm font-semibold">Overall rating</p>
          <div className="space-y-1.5">
            {ratingDistribution.map((row) => (
              <div key={row.stars} className="flex items-center gap-3 text-xs">
                <span className="w-2">{row.stars}</span>
                <div className="h-1 flex-1 overflow-hidden rounded-full bg-[color:var(--color-border-light)]">
                  <div
                    className="h-full rounded-full bg-[var(--color-ink)]"
                    style={{ width: `${(row.count / maxCount) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {ratingCategories.map((c) => {
          const Icon = categoryIcons[c.icon];
          return (
            <div key={c.key} className="border-l border-[color:var(--color-border-light)] pl-6">
              <p className="text-sm">{c.label}</p>
              <p className="mt-1 text-2xl">{c.value.toFixed(1)}</p>
              <Icon className="mt-3 h-9 w-9" />
            </div>
          );
        })}
      </div>

      <div className="mb-10 flex gap-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {reviewHighlights.map((h) => (
          <div
            key={h.key}
            className="flex shrink-0 items-center gap-2 rounded-full border border-[color:var(--color-border)] px-4 py-3 text-sm"
          >
            <Image src={highlightImages[h.icon]} alt="" width={20} height={20} className="h-5 w-5" />
            <span>{h.label}</span>
            <span className="text-[var(--color-ink-light)]">{h.count}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:grid-cols-2">
        {reviews.map((r) => {
          const expanded = expandedReviews.has(r.name);
          return (
          <div key={r.name}>
            <div className="mb-2 flex items-center gap-3">
              {r.avatar ? (
                <Image src={r.avatar} alt="" width={44} height={44} className="h-11 w-11 rounded-full object-cover" />
              ) : (
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-ink-light)] text-lg font-semibold text-white">
                  {r.avatarInitial}
                </span>
              )}
              <div>
                <p className="font-semibold">{r.name}</p>
                <p className="text-xs text-[var(--color-ink-light)]">{r.meta}</p>
              </div>
            </div>
            <div className="mb-1 flex items-center gap-1.5 text-xs text-dark">
              <span className="flex items-center gap-0.5" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconStar key={i} className={`h-2.5 w-2.5 ${i < r.rating ? "" : "opacity-25"}`} />
                ))}
              </span>
              <span>·</span>
              <span>{r.time}</span>
            </div>
            <p className={`text-[15px] leading-6 ${r.truncated && !expanded ? "line-clamp-3" : ""}`}>{r.text}</p>
            {r.truncated && (
              <button onClick={() => toggleReview(r.name)} className="mt-1 font-semibold underline">
                {expanded ? "Show less" : "Show more"}
              </button>
            )}
          </div>
          );
        })}
      </div>

      <button className="mt-8 rounded-lg border border-[color:var(--color-ink)] px-5 py-3 text-sm font-semibold hover:bg-[var(--color-border-light)]">
        Show all {listing.reviewCount} reviews
      </button>
    </div>
  );
}
