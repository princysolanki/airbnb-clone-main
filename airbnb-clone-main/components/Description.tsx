"use client";

import { useState } from "react";
import { description } from "@/lib/listing-data";

export default function Description() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border-b border-[color:var(--color-border-light)] py-6">
      {description.translated && (
        <div className="mb-4 flex items-center rounded-lg bg-[var(--color-border-light)] px-4 py-3 text-sm">
          <span>Some info has been automatically translated.</span>
          <button className="font-semibold underline">Show original</button>
        </div>
      )}
      <div className="relative">
        <p className={`whitespace-pre-line text-[15px] leading-6 ${expanded ? "" : "line-clamp-3"}`}>
          {description.text}
        </p>
        {!expanded && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-6 bg-linear-to-t from-white to-transparent" />
        )}
      </div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-3 flex items-center gap-1 font-semibold underline"
      >
        {expanded ? "Show less" : "Show more"} <span aria-hidden="true">›</span>
      </button>
    </div>
  );
}
