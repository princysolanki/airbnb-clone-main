import Image from "next/image";
import { booking } from "@/lib/listing-data";
import { IconFlag } from "./icons";

export default function BookingColumn() {
  return (
    <div className="w-full">
      <div className="mb-4 flex items-center gap-3 rounded-xl border border-[color:var(--color-border)] p-4">
        <Image src="/images/discount.svg" alt="" width={32} height={32} className="h-8 w-8 shrink-0" />
        <p className="flex-1 text-sm">
          {booking.discountText}
          <br />
          <a href="#" className="font-semibold underline">
            Terms apply
          </a>
        </p>
        <button className="rounded-lg bg-[var(--color-border-light)] px-4 py-2 text-sm font-semibold hover:bg-[color:var(--color-border)]">
          Claim
        </button>
      </div>

      <div className="rounded-2xl border border-[color:var(--color-border)] p-6 shadow-[0_6px_20px_rgba(0,0,0,0.08)]">
        <p className="text-lg">
          <span className="text-xl font-semibold underline">
            {booking.currency}
            {booking.price.toLocaleString("en-IN")}
          </span>{" "}
          for {booking.nights} nights
        </p>

        <div className="mt-4 overflow-hidden rounded-lg border border-[color:var(--color-border)]">
          <div className="grid grid-cols-2">
            <div className="border-r border-b border-[color:var(--color-border)] p-3">
              <p className="text-[10px] font-semibold tracking-wide">CHECK-IN</p>
              <p className="text-sm">{booking.checkIn}</p>
            </div>
            <div className="border-b border-[color:var(--color-border)] p-3">
              <p className="text-[10px] font-semibold tracking-wide">CHECKOUT</p>
              <p className="text-sm">{booking.checkOut}</p>
            </div>
          </div>
          <button className="flex w-full items-center justify-between p-3 text-left hover:bg-[var(--color-border-light)]">
            <span>
              <span className="block text-[10px] font-semibold tracking-wide">GUESTS</span>
              <span className="text-sm">{booking.guests} guests</span>
            </span>
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>

        <p className="mt-4 rounded-lg bg-[var(--color-border-light)] px-4 py-2.5 text-center text-sm">
          Free cancellation before <b>{booking.freeCancellationBefore}</b>
        </p>

        <button className="mt-4 w-full rounded-lg bg-gradient-to-r from-[var(--color-rose)] to-[var(--color-rose-dark)] py-3.5 font-semibold text-white transition-transform hover:brightness-110 active:scale-[0.98]">
          Reserve
        </button>
        <p className="mt-3 text-center text-sm text-[var(--color-ink-light)]">You won&apos;t be charged yet</p>
      </div>

      <button className="mx-auto mt-4 flex items-center gap-2 text-sm underline text-[var(--color-ink)]">
        <IconFlag className="h-4 w-4" />
        Report this listing
      </button>
    </div>
  );
}
