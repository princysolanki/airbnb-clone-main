"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { photoTour, allPhotos } from "@/lib/listing-data";
import { IconChevronLeft, IconHeart, IconShare } from "./icons";
import { useDialog } from "@/lib/useDialog";

// Gap (px) between the top of the scroll viewport and a pinned heading/photo.
const STICKY_TOP = 24;

export default function PhotoTour({
  onClose,
  onOpenLightbox,
}: {
  onClose: () => void;
  onOpenLightbox: (photoSrc: string) => void;
}) {
  const dialogRef = useDialog<HTMLDivElement>(onClose);
  const scrollRef = useRef<HTMLDivElement>(null);
  const categoryRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const [saved, setSaved] = useState(false);

  function scrollToCategory(name: string) {
    const el = categoryRefs.current.get(name);
    const scroller = scrollRef.current;
    if (!el || !scroller) return;
    const top = el.offsetTop - STICKY_TOP + 1;
    scroller.scrollTo({ top, behavior: "smooth" });
  }

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Photo tour"
      className="fixed inset-0 z-50 flex flex-col bg-white"
    >
      <div className="grid grid-cols-[1fr_auto_1fr] items-center px-6 py-4">
        <button onClick={onClose} aria-label="Back" className="flex w-fit items-center rounded-lg p-2 hover:bg-[var(--color-border-light)]">
          <IconChevronLeft className="h-4 w-4" />
        </button>
        <h2 className="text-base font-semibold">Photo tour</h2>
        <div className="flex items-center justify-end gap-2">
          <button aria-label="Share" className="flex items-center rounded-lg p-2 hover:bg-[var(--color-border-light)]">
            <IconShare className="h-4 w-4" />
          </button>
          <button
            onClick={() => setSaved((s) => !s)}
            aria-label="Save"
            className="flex items-center rounded-lg p-2 hover:bg-[var(--color-border-light)]"
          >
            <IconHeart className={`h-4 w-4 ${saved ? "text-[var(--color-rausch)]" : ""}`} filled={saved} />
          </button>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto px-6 py-10 sm:px-16" tabIndex={-1}>
        <div className="mx-auto max-w-[1100px]">
          <nav aria-label="Photo categories" className="mb-10 grid grid-cols-8 gap-4 border-b border-[color:var(--color-border-light)] pb-10">
            {photoTour.map((cat) => (
              <button
                key={cat.name}
                onClick={() => scrollToCategory(cat.name)}
                className="flex flex-col items-center gap-2 rounded-xl p-1 hover:bg-[var(--color-border-light)]"
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-lg">
                  <Image src={cat.photos[0].src} alt="" fill sizes="140px" className="object-cover" />
                </div>
                <span className="text-sm font-medium">{cat.name}</span>
              </button>
            ))}
          </nav>
          {photoTour.map((cat) => {
            const [hero, ...rest] = cat.photos;
            return (
              <div
                key={cat.name}
                ref={(el) => {
                  if (el) categoryRefs.current.set(cat.name, el);
                }}
                className="grid grid-cols-1 gap-14 py-10 sm:grid-cols-2 sm:gap-34"
              >
                {/* The text column stretches to the row's full height (the image column,
                    with every photo in normal flow, sets that height); the heading pins
                    within that space until this row ends — i.e. until the next
                    category's heading reaches the same offset — while every photo in
                    the row (hero included) scrolls past normally with no positioning of
                    its own, so nothing can ever render over anything else. */}
                <div>
                  <div className="sticky" style={{ top: STICKY_TOP }}>
                    <h3 className="text-4xl font-semibold">{cat.name}</h3>
                    {cat.caption && (
                      <p className="mt-2 text-lg text-[var(--color-ink-light)]">{cat.caption}</p>
                    )}
                  </div>
                </div>

                <div>
                  <div className="mb-4">
                    <button
                      onClick={() => onOpenLightbox(hero.src)}
                      className="relative block aspect-[4/3] w-full overflow-hidden rounded-xl"
                      aria-label={hero.alt}
                    >
                      <Image src={hero.src} alt={hero.alt} fill sizes="700px" className="object-cover" />
                    </button>
                  </div>

                  {rest.length > 0 && (
                    <div className="grid grid-cols-2 gap-4">
                      {rest.map((photo, i) => (
                        <button
                          key={photo.src + i}
                          onClick={() => onOpenLightbox(photo.src)}
                          aria-label={photo.alt}
                          className="relative aspect-[4/3] w-full overflow-hidden rounded-xl"
                        >
                          <Image src={photo.src} alt={photo.alt} fill sizes="350px" className="object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          {/* <p className="pb-10 text-center text-sm text-[var(--color-ink-light)]">
            {allPhotos.length} photos
          </p> */}
        </div>
      </div>
    </div>
  );
}
