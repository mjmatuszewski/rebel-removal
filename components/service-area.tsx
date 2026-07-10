import { MapPin } from "lucide-react";

import { SERVICE_AREA_TOWNS } from "@/lib/site-config";

export function ServiceArea() {
  return (
    <section id="service-area" className="scroll-mt-16 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col items-center gap-2 text-center">
          <h2 className="font-heading text-3xl uppercase tracking-tight text-foreground sm:text-4xl">
            Service Area
          </h2>
          <p className="max-w-md text-balance text-muted-foreground">
            Proudly serving Oxford, MS and the surrounding communities.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {SERVICE_AREA_TOWNS.map((town) => (
            <span
              key={town}
              className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 font-heading text-xs uppercase tracking-wide text-foreground"
            >
              <MapPin className="size-3.5" aria-hidden="true" />
              {town}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
