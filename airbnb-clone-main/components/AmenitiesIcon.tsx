import { LucideIcon } from "lucide-react";

interface AmenityIconProps {
  icon: LucideIcon;
  available: boolean;
}

export default function AmenityIcon({ icon: Icon, available }: AmenityIconProps) {
  return (
    <span className="relative inline-flex h-6 w-6 shrink-0 items-center justify-center">
      <Icon
        className={`h-6 w-6 ${available ? "text-[color:var(--color-ink)]" : "text-[color:var(--color-muted)]"}`}
        strokeWidth={1.5}
      />
      {!available && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rotate-45 border-t border-[color:var(--color-muted)]"
          style={{ top: "50%" }}
        />
      )}
    </span>
  );
}