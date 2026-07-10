"use client";

import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Z_INDEX } from "@/lib/constants";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site-config";
import { useQuoteModal } from "@/lib/quote-modal-context";

export function StickyMobileCTA() {
  const { openModal } = useQuoteModal();

  return (
    <div
      className="fixed inset-x-0 bottom-0 flex items-center justify-between gap-3 border-t border-border bg-background px-4 py-3 md:hidden"
      style={{ zIndex: Z_INDEX.stickyCta }}
    >
      <a href={PHONE_HREF} className="flex items-center gap-2 font-heading text-sm text-foreground">
        <Phone className="size-4" aria-hidden="true" />
        {PHONE_DISPLAY}
      </a>
      <Button onClick={openModal} className="font-heading uppercase tracking-wide">
        Get Free Quote
      </Button>
    </div>
  );
}
