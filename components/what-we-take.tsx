import { HardHat, Refrigerator, Sofa, Trash2, Trees, Tv } from "lucide-react";

const CATEGORIES = [
  { icon: Sofa, label: "Furniture" },
  { icon: Refrigerator, label: "Appliances" },
  { icon: Tv, label: "Electronics" },
  { icon: Trees, label: "Yard Debris" },
  { icon: HardHat, label: "Construction Debris" },
  { icon: Trash2, label: "General Junk" },
];

export function WhatWeTake() {
  return (
    <section id="what-we-take" className="scroll-mt-16 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col items-center gap-2 text-center">
          <h2 className="font-heading text-3xl uppercase tracking-tight text-foreground sm:text-4xl">
            What We Take
          </h2>
          <p className="max-w-md text-balance text-muted-foreground">
            If it&apos;s taking up space, we&apos;ll haul it. Residential and commercial.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {CATEGORIES.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6 text-center"
            >
              <Icon className="size-8 text-foreground" aria-hidden="true" />
              <span className="font-heading text-xs uppercase tracking-wide text-foreground">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
