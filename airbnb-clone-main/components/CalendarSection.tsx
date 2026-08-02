"use client";

import { calendar } from "@/lib/listing-data";
import { IconChevronLeft, IconChevronRight } from "./icons";

const weekdayLabels = ["S", "M", "T", "W", "T", "F", "S"];

// Dates that are unavailable / blocked out (shown struck-through, non-interactive).
const unavailableDates: Record<string, number[]> = {
  "November 2026": [18, 19, 20, 21, 22, 23, 24, 29, 30],
};

function isInRange(month: number, day: number) {
  const { checkIn, checkOut } = calendar;

  // Same month: range is simply between checkIn.day and checkOut.day
  if (checkIn.month === checkOut.month) {
    return month === checkIn.month && day >= checkIn.day && day <= checkOut.day;
  }

  // Different months: day is in range if it's on/after checkIn in checkIn's month,
  // on/before checkOut in checkOut's month, or fully within any month in between
  if (month === checkIn.month) return day >= checkIn.day;
  if (month === checkOut.month) return day <= checkOut.day;
  return month > checkIn.month && month < checkOut.month;
}

function edgeType(month: number, day: number): "start" | "end" | null {
  const { checkIn, checkOut } = calendar;
  if (month === checkIn.month && day === checkIn.day) return "start";
  if (month === checkOut.month && day === checkOut.day) return "end";
  return null;
}

function isUnavailable(monthName: string, day: number) {
  return unavailableDates[monthName]?.includes(day) ?? false;
}

// Inline icon — no dependency on ./icons exporting this.
function IconKeyboard({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className={className}
    >
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M6 14h12" strokeLinecap="round" />
    </svg>
  );
}

function MonthGrid({ month }: { month: (typeof calendar.months)[number] }) {
  const cells: (number | null)[] = Array(month.startWeekday).fill(null);
  for (let d = 1; d <= month.days; d++) cells.push(d);

  return (
    <div>
      <p className="mb-4 text-center font-semibold">{month.name}</p>
      <div className="grid grid-cols-7 gap-y-1 text-center text-xs text-[var(--color-ink-light)]">
        {weekdayLabels.map((w, i) => (
          <span key={i}>{w}</span>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-y-1 text-center text-sm">
        {cells.map((day, i) => {
          if (day === null) return <span key={i} />;

          const inRange = isInRange(month.month, day);
          const edge = edgeType(month.month, day);
          const blocked = isUnavailable(month.name, day);

          return (
            <div key={i} className="relative h-9">
              {inRange && !blocked && (
                <span
                  aria-hidden
                  className={`absolute inset-y-0 bg-[var(--color-border-light)] ${
                    edge === "start" ? "left-1/2 right-0" : edge === "end" ? "left-0 right-1/2" : "left-0 right-0"
                  }`}
                />
              )}
              <button
                disabled={blocked}
                aria-label={`${month.name.split(" ")[0]} ${day}`}
                className={`relative z-10 mx-auto flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
                  blocked
                    ? "cursor-not-allowed text-[var(--color-ink-light)] line-through decoration-1"
                    : edge
                      ? "bg-[var(--color-ink)] font-semibold text-white"
                      : inRange
                        ? ""
                        : "hover:bg-[var(--color-border-light)]"
                }`}
              >
                {day}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function CalendarSection() {
  return (
    <div className="border-b border-[color:var(--color-border-light)] py-6">
      <h2 className="text-xl font-semibold">{calendar.nightsLabel}</h2>
      <p className="mt-1 mb-6 text-[15px] text-[var(--color-ink-light)]">{calendar.dateRangeLabel}</p>

      <div className="relative grid grid-cols-2 gap-10">
        <button aria-label="Previous month" className="absolute -left-2 top-0 rounded-full border border-[color:var(--color-border)] p-2 hover:bg-[var(--color-border-light)]">
          <IconChevronLeft className="h-4 w-4" />
        </button>
        <button aria-label="Next month" className="absolute -right-2 top-0 rounded-full border border-[color:var(--color-border)] p-2 hover:bg-[var(--color-border-light)]">
          <IconChevronRight className="h-4 w-4" />
        </button>
        {calendar.months.map((m) => (
          <MonthGrid key={m.name} month={m} />
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <button
          aria-label="Toggle keyboard navigation"
          className="rounded-full border border-[color:var(--color-border)] p-2 hover:bg-[var(--color-border-light)]"
        >
          <IconKeyboard className="h-4 w-4" />
        </button>
        <button className="font-semibold underline">Clear dates</button>
      </div>
    </div>
  );
}