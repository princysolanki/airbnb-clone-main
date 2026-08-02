import Image from "next/image";
import { sleepSpaces } from "@/lib/listing-data";

export default function SleepSection() {
  return (
    <div className="border-b border-[color:var(--color-border-light)] py-6">
      <h2 className="mb-4 text-xl font-semibold">Where you&apos;ll sleep</h2>
      <div className="grid grid-cols-2 gap-4">
        {sleepSpaces.map((space) => (
          <div key={space.name} className="overflow-hidden rounded-xl border border-[color:var(--color-border-light)]">
            <div className="relative h-40 w-full">
              <Image src={space.image} alt={space.name} fill sizes="280px" className="object-cover" />
            </div>
            <div className="p-4">
              <p className="font-semibold">{space.name}</p>
              <p className="text-sm text-[var(--color-ink-light)]">{space.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
