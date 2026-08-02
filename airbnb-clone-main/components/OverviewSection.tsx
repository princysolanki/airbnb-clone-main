import Image from "next/image";
import { IconStar } from "./icons";
import { listing, guestFavourite, highlights } from "@/lib/listing-data";
import { IconBonfire, IconFan, IconDoor } from "./icons";

const highlightIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  bonfire: IconBonfire,
  fan: IconFan,
  door: IconDoor,
};

export default function OverviewSection() {
  return (
    <div>
      <h2 className="text-xl font-semibold">{listing.subtitle}</h2>
      <p className="mt-1 text-[15px] text-[var(--color-ink)]">{listing.stats}</p>

      <div className="mt-6 flex items-center gap-3 rounded-xl border border-[color:var(--color-border)] p-4">
        <div className="flex items-center gap-1 text-2xl" aria-hidden="true">
          <Image src="/images/laurel-left.png" alt="" width={28} height={40} className="h-10 w-7" />
          <div className="text-center">
            <p className="text-sm font-semibold leading-tight">Guest favourite</p>
          </div>
          <Image src="/images/laurel-right.png" alt="" width={28} height={40} className="h-10 w-7" />
        </div>
        <p className="max-w-[320px] text-[13px] text-[var(--color-ink-light)]">
          {guestFavourite.body}
        </p>
        <div className="ml-auto flex items-center gap-1">
          <span className="text-xl font-bold">{guestFavourite.rating}</span>
          <IconStar className="h-4 w-4" />
        </div>
        <div className="h-8 w-px bg-[color:var(--color-border)]" />
        <div className="text-center">
          <p className="text-xl font-bold">{listing.reviewCount}</p>
          <p className="text-xs text-[var(--color-ink-light)]">Reviews</p>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-4 border-b border-[color:var(--color-border-light)] pb-6">
        <Image
          src={listing.host.avatar}
          alt=""
          width={56}
          height={56}
          className="h-14 w-14 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold">Hosted by {listing.host.name}</p>
          <p className="text-sm text-[var(--color-ink-light)]">{listing.host.yearsHosting} years hosting</p>
        </div>
      </div>

      <ul className="mt-6 space-y-6">
        {highlights.map((h) => {
          const Icon = highlightIcons[h.icon];
          return (
            <li key={h.title} className="flex gap-4 border-b border-[color:var(--color-border-light)] pb-6 last:border-0">
              <Icon className="h-7 w-7 shrink-0" />
              <div>
                <p className="font-semibold">{h.title}</p>
                <p className="text-sm text-[var(--color-ink-light)]">{h.body}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
