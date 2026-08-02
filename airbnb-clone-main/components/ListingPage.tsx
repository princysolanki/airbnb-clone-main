"use client";

import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import TitleBar from "./TitleBar";
import PhotoGrid from "./PhotoGrid";
import OverviewSection from "./OverviewSection";
import Description from "./Description";
import SleepSection from "./SleepSection";
import AmenitiesSection from "./AmenitiesSection";
import CalendarSection from "./CalendarSection";
import BookingColumn from "./BookingColumn";
import ReviewsSection from "./ReviewsSection";
import LocationSection from "./LocationSection";
import MeetHostSection from "./MeetHostSection";
import ThingsToKnowSection from "./ThingsToKnowSection";
import NearbyStaysSection from "./NearbyStaysSection";
import PhotoTour from "./PhotoTour";
import Lightbox from "./Lightbox";
import { allPhotos } from "@/lib/listing-data";

const SECTION_IDS = ["photos", "amenities", "reviews", "location"] as const;

export default function ListingPage() {
  const [tourOpen, setTourOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showStickyNav, setShowStickyNav] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(SECTION_IDS[0]);

  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowStickyNav(!entry.isIntersecting),
      { rootMargin: "-80px 0px 0px 0px" }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  // Track which section the sticky nav should bold: the last one whose top
  // has scrolled past the header, i.e. the section currently in view.
  useEffect(() => {
    let ticking = false;
    function computeActive() {
      const offset = 130;
      let current: string = SECTION_IDS[0];
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) current = id;
      }
      setActiveSection(current);
      ticking = false;
    }
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(computeActive);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    computeActive();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function openLightboxBySrc(src: string) {
    const idx = allPhotos.findIndex((p) => p.src === src);
    setLightboxIndex(idx === -1 ? 0 : idx);
  }

  return (
    <>
      <Header showSecondary={showStickyNav} activeSection={activeSection} />
      <main id="main" className="flex-1 pb-16">
        <TitleBar />
        <PhotoGrid onOpenTour={() => setTourOpen(true)} />
        <div ref={sentinelRef} aria-hidden="true" />

        {/* Two-column split: the price card only pins alongside this top
            portion of the listing (matching the real reference), then the
            sections below run full-width with no sidebar. */}
        <div className="mx-auto mt-8 grid max-w-[1120px] grid-cols-1 gap-x-20 px-6 lg:grid-cols-[1fr_400px] lg:px-0">
          <div>
            <OverviewSection />
            <Description />
            <SleepSection />
            <AmenitiesSection />
            <CalendarSection />
          </div>

          {/* This grid item stretches to the row's full height (the left
              column, being much taller, sets that height); the inner sticky
              wrapper then has room to pin at the same offset the secondary
              header settles at, releasing once the left column ends. Native
              sticky positioning is driven by the live layout every frame, so
              there's no cached measurement to go stale the way a JS-driven
              scroll pin's would. */}
          <div className="hidden lg:block">
            <div className="sticky" style={{ top: 100 }}>
              <BookingColumn />
            </div>
          </div>

          {/* Booking card repeated inline for viewports where the sticky/grid column is hidden */}
          <div className="lg:hidden">
            <BookingColumn />
          </div>
        </div>

        <div className="mx-auto max-w-[1120px] px-6 lg:px-0">
          <ReviewsSection />
          <LocationSection />
          <MeetHostSection />
          <ThingsToKnowSection />
          <NearbyStaysSection />
        </div>
      </main>

      {tourOpen && (
        <PhotoTour onClose={() => setTourOpen(false)} onOpenLightbox={openLightboxBySrc} />
      )}
      {lightboxIndex !== null && (
        <Lightbox initialIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />
      )}
    </>
  );
}
