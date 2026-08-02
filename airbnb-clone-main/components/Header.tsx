"use client";

import Image from "next/image";
import { IconAirbnbWordmark, IconGlobe, IconMenu, IconSearch, IconStar } from "./icons";
import { booking, listing } from "@/lib/listing-data";

const navLinks = [
  { href: "#photos", label: "Photos" },
  { href: "#amenities", label: "Amenities" },
  { href: "#reviews", label: "Reviews" },
  { href: "#location", label: "Location" },
];

export default function Header({
  onReserve,
  showSecondary,
  activeSection,
}: {
  onReserve?: () => void;
  showSecondary: boolean;
  activeSection: string;
}) {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      {/* Primary bar: sits in normal document flow and scrolls away with the
          page, exactly like the reference — it is not sticky. */}
      <div className="border-b border-[color:var(--color-border-light)] bg-white">
        <nav
          aria-label="Main navigation menu"
          className="mx-auto grid h-20 max-w-[1760px] grid-cols-[1fr_auto_1fr] items-center px-6 lg:px-10"
        >
          <a href="#" aria-label="Airbnb homepage" className="flex items-center justify-self-start">
            <IconAirbnbWordmark className="h-8 w-auto text-[color:var(--color-rausch)]" />
          </a>

          <button
            aria-label="Search"
            className="flex items-center gap-3 justify-self-center rounded-full border border-[color:var(--color-border)] py-2 pl-5 pr-2 shadow-sm transition-shadow hover:shadow-md"
          >
            <span className="flex items-center gap-2 border-r border-[color:var(--color-border)] pr-3 text-sm font-semibold">
              <Image src="/images/searchbar-house.png" alt="" width={24} height={24} className="h-10 w-10" />
              Anywhere
            </span>
            <span className="border-r border-[color:var(--color-border)] pr-3 text-sm font-semibold">
              Anytime
            </span>
            <span className="pr-1 text-sm text-[var(--color-ink-light)]">Add guests</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-rausch)] text-white">
              <IconSearch className="h-3.5 w-3.5" />
            </span>
          </button>

          <div className="flex items-center justify-self-end gap-4">
            <a href="#" className="hidden rounded-full px-3 py-2.5 text-sm font-semibold hover:bg-[var(--color-border-light)] md:inline">
              Become a host
            </a>
            <div className="flex items-center gap-1">
              <button
                aria-label="Choose a language and currency"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-border-light)] hover:bg-[color:var(--color-border)]"
              >
                <IconGlobe className="h-4 w-4" />
              </button>
              <button
                aria-label="Main navigation menu"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-border-light)] hover:bg-[color:var(--color-border)]"
              >
                <IconMenu className="h-4 w-4" />
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Secondary bar: fixed to the viewport top independently of the
          primary bar above, and slides down into view only once the user has
          scrolled past it — it never appears alongside the primary bar. */}
      <div
        aria-label="Listing sections"
        className={`fixed inset-x-0 top-0 z-40 border-b border-[color:var(--color-border-light)] bg-white transition-transform duration-300 ease-in-out ${
          showSecondary ? "translate-y-0" : "-translate-y-full"
        }`}
        {...(!showSecondary ? { inert: true } : {})}
      >
        <div className="mx-auto flex h-20 max-w-[1760px] items-center justify-between px-6 lg:px-10">
          <ul className="hidden items-center gap-8 text-sm font-medium md:flex">
            {navLinks.map((link) => {
              const isActive = link.href === `#${activeSection}`;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`border-b-2 pb-1 transition-colors ${
                      isActive
                        ? "border-[color:var(--color-ink)] font-semibold text-[var(--color-ink)]"
                        : "border-transparent text-[var(--color-ink-light)] hover:border-[color:var(--color-ink)] hover:text-[var(--color-ink)]"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center gap-4">
            <div className="text-right text-sm leading-tight">
              <p>
                <span className="font-semibold underline">
                  {booking.currency}
                  {booking.price.toLocaleString("en-IN")}
                </span>{" "}
                <span className="text-[var(--color-ink-light)]">for {booking.nights} nights</span>
              </p>
              <p className="flex items-center justify-end gap-1 text-[var(--color-ink-light)]">
                <IconStar className="h-3 w-3" />
                {listing.rating} · {listing.reviewCount} reviews
              </p>
            </div>
            <button
              onClick={onReserve}
              className="rounded-lg bg-gradient-to-r from-[var(--color-rose)] to-[var(--color-rose-dark)] px-6 py-3 text-sm font-semibold text-white transition-transform hover:brightness-110 active:scale-[0.98]"
            >
              Reserve
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
