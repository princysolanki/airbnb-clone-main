import Image from "next/image";
import { hostDetail } from "@/lib/listing-data";

function IconVerifiedCheck({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="12" fill="#e00b41" />
      <path d="M7 12.5l3 3 7-7" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconZodiac({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <circle cx="12" cy="9" r="6" />
      <path d="M12 15v6M9 21h6" strokeLinecap="round" />
    </svg>
  );
}

function IconSchool({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M12 3l10 5-10 5L2 8l10-5z" strokeLinejoin="round" />
      <path d="M6 10.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5" strokeLinejoin="round" />
      <path d="M22 8v6" strokeLinecap="round" />
    </svg>
  );
}

function IconShield({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3z" strokeLinejoin="round" />
    </svg>
  );
}

function CoHostAvatar({ h }: { h: (typeof hostDetail.coHosts)[number] }) {
  return (
    <div className="flex items-center gap-3">
      {h.avatar ? (
        <Image src={h.avatar} alt={h.name} width={44} height={44} className="h-11 w-11 rounded-full object-cover" />
      ) : (
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-border-light)] text-base font-semibold">
          {h.initial}
        </span>
      )}
      <span className="text-[15px]">{h.name}</span>
    </div>
  );
}

export default function MeetHostSection() {
  return (
    <div className="border-b border-[color:var(--color-border-light)] py-6">
      <h2 className="mb-6 text-xl font-semibold">Meet your host</h2>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[380px_1fr]">
        {/* Left column: host card + facts */}
        <div>
          <div className="flex items-stretch gap-6 rounded-2xl border border-[color:var(--color-border-light)] p-8 shadow-sm">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="relative">
                <Image
                  src={hostDetail.avatar}
                  alt={hostDetail.name}
                  width={96}
                  height={96}
                  className="h-24 w-24 rounded-full object-cover"
                />
                {hostDetail.verified && (
                  <IconVerifiedCheck className="absolute -bottom-1 -right-1 h-6 w-6" />
                )}
              </div>
              <p className="mt-3 text-xl font-bold leading-tight">{hostDetail.name}</p>
              <p className="text-[15px] text-[var(--color-ink-light)]">Host</p>
            </div>

            <div className="flex flex-1 flex-col justify-center gap-4 border-l border-[color:var(--color-border-light)] pl-6">
              <div>
                <p className="text-xl font-bold">{hostDetail.reviews.toLocaleString("en-IN")}</p>
                <p className="text-[15px] text-[var(--color-ink-light)]">Reviews</p>
              </div>
              <div>
                <p className="text-xl font-bold">{hostDetail.rating}★</p>
                <p className="text-[15px] text-[var(--color-ink-light)]">Rating</p>
              </div>
              <div>
                <p className="text-xl font-bold">{hostDetail.yearsHosting}</p>
                <p className="text-[15px] text-[var(--color-ink-light)]">Years hosting</p>
              </div>
            </div>
          </div>

          <div className="mt-5 space-y-4">
            <div className="flex items-center gap-3">
              <IconZodiac className="h-5 w-5 shrink-0" />
              <span className="text-[15px]">{hostDetail.bornDecade}</span>
            </div>
            <div className="flex items-center gap-3">
              <IconSchool className="h-5 w-5 shrink-0" />
              <span className="text-[15px]">Where I went to school: {hostDetail.school}</span>
            </div>
          </div>
        </div>

        {/* Right column: co-hosts + host details */}
        <div>
          <p className="mb-4 text-xl font-semibold">Co-Hosts</p>
          <div className="grid grid-cols-1 gap-x-16 gap-y-5 sm:grid-cols-2 lg:grid-cols-3 lg:[grid-auto-flow:column] lg:[grid-template-rows:repeat(3,auto)]">
            {hostDetail.coHosts.map((h) => (
              <CoHostAvatar key={h.name} h={h} />
            ))}
          </div>

          <p className="mb-2 mt-8 text-xl font-semibold">Host details</p>
          <p className="text-[15px]">Response rate: {hostDetail.responseRate}%</p>
          <p className="text-[15px]">{hostDetail.responseTime}</p>

          <button className="mt-6 rounded-lg bg-[var(--color-border-light)] px-6 py-3.5 text-[15px] font-semibold hover:opacity-80">
            Message host
          </button>

          <div className="mt-6 flex items-start gap-3 text-[15px] text-[var(--color-ink-light)]">
            <IconShield className="mt-0.5 h-5 w-5 shrink-0" />
            <p>To help protect your payment, always use Airbnb to send money and communicate with hosts.</p>
          </div>
        </div>
      </div>
    </div>
  );
}