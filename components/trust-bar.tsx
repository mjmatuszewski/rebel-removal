import { MapPin, ShieldCheck, Zap } from "lucide-react";

const TRUST_POINTS = [
  { icon: Zap, label: "Same-Day Available" },
  { icon: ShieldCheck, label: "No Hidden Fees" },
  { icon: MapPin, label: "Locally Owned" },
];

export function TrustBar() {
  return (
    <section aria-label="Why choose Rebel Removal" className="border-y border-border bg-muted/30">
      <div className="mx-auto grid max-w-6xl grid-cols-3 gap-6 px-4 py-8 sm:px-6">
        {TRUST_POINTS.map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-2 text-center">
            <Icon className="size-6 text-foreground" aria-hidden="true" />
            <span className="font-heading text-xs uppercase tracking-wide text-foreground">
              {label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
