"use client";

import { Button } from "@/components/ui/button";
import { useQuoteModal } from "@/lib/quote-modal-context";

export function FinalCta() {
  const { openModal } = useQuoteModal();

  return (
    <section className="px-4 py-20 text-center sm:py-28">
      <div className="mx-auto flex max-w-xl flex-col items-center gap-4">
        <h2 className="text-balance font-heading text-3xl uppercase tracking-tight text-foreground sm:text-4xl">
          Ready to Clear the Clutter?
        </h2>
        <p className="max-w-md text-balance text-muted-foreground">
          Get a free, no obligation quote and let Rebel Removal handle the heavy lifting.
        </p>
        <Button size="lg" onClick={openModal} className="font-heading uppercase tracking-wide">
          Get Free Quote
        </Button>
      </div>
    </section>
  );
}
