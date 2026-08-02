"use client";

import { useState } from "react";
import { IconHeart, IconShare } from "./icons";
import { listing } from "@/lib/listing-data";

export default function TitleBar() {
  const [saved, setSaved] = useState(false);

  return (
    <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-3 px-6 pt-6 lg:px-0">
      <h1 className="text-[26px] font-semibold leading-tight">{listing.title}</h1>
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold underline hover:bg-[var(--color-border-light)]">
          <IconShare className="h-4 w-4" />
          Share
        </button>
        <button
          onClick={() => setSaved((s) => !s)}
          aria-pressed={saved}
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold underline hover:bg-[var(--color-border-light)]"
        >
          <IconHeart className={`h-4 w-4 ${saved ? "text-[var(--color-rausch)]" : ""}`} filled={saved} />
          Save
        </button>
      </div>
    </div>
  );
}
