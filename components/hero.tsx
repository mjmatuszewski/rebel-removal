"use client";

import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/site-config";
import { useQuoteModal } from "@/lib/quote-modal-context";

export function Hero() {
  const { openModal } = useQuoteModal();

  return (
    <section id="hero" className="flex flex-col items-center gap-6 px-4 py-20 text-center sm:py-28">
      <Logo />

      <h1 className="max-w-2xl text-balance font-heading text-4xl uppercase leading-tight tracking-tight text-foreground sm:text-5xl">
        Get Your Junk Gone Today
      </h1>

      <p className="max-w-xl text-balance text-base text-muted-foreground sm:text-lg">
        Fast, no-hassle junk removal, cleanouts, and moving help for Oxford, MS homes and
        businesses. Free quotes, no hidden fees.
      </p>

      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <Button size="lg" onClick={openModal} className="font-heading uppercase tracking-wide">
          Get Free Quote
        </Button>
        <a
          href={PHONE_HREF}
          className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <Phone className="size-4" aria-hidden="true" />
          {PHONE_DISPLAY}
        </a>
      </div>
    </section>
  );
}
