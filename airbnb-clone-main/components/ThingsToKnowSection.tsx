import { thingsToKnow } from "@/lib/listing-data";
import { IconCalendarX, IconSearch, IconShield } from "./icons";

export default function ThingsToKnowSection() {
  return (
    <div className="border-b border-[color:var(--color-border-light)] py-6">
      <h2 className="mb-6 text-xl font-semibold">Things to know</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        <div>
          <IconCalendarX className="mb-4 h-6 w-6" />
          <h3 className="mb-3 text-[15px] font-semibold">{thingsToKnow.cancellation.title}</h3>
          <p className="text-[15px] leading-6 text-[var(--color-ink-light)]">{thingsToKnow.cancellation.body}</p>
          <p className="mt-2 text-[15px] leading-6 text-[var(--color-ink-light)]">{thingsToKnow.cancellation.footnote}</p>
          <a href="#" className="mt-3 inline-block text-[15px] font-semibold underline">
            Learn more
          </a>
        </div>
        <div>
          <IconSearch className="mb-4 h-6 w-6" />
          <h3 className="mb-3 text-[15px] font-semibold">{thingsToKnow.houseRules.title}</h3>
          <ul className="space-y-2 text-[15px] leading-6 text-[var(--color-ink-light)]">
            {thingsToKnow.houseRules.rules.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
          <a href="#" className="mt-3 inline-block text-[15px] font-semibold underline">
            Learn more
          </a>
        </div>
        <div>
          <IconShield className="mb-4 h-6 w-6" />
          <h3 className="mb-3 text-[15px] font-semibold">{thingsToKnow.safety.title}</h3>
          <ul className="space-y-2 text-[15px] leading-6 text-[var(--color-ink-light)]">
            {thingsToKnow.safety.items.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
          <a href="#" className="mt-3 inline-block text-[15px] font-semibold underline">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}
