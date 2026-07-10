"use client";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { Z_INDEX } from "@/lib/constants";
import { NAV_LINKS } from "@/lib/site-config";
import { useQuoteModal } from "@/lib/quote-modal-context";

export function Header() {
  const { openModal } = useQuoteModal();

  return (
    <header
      className="sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80"
      style={{ zIndex: Z_INDEX.header }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" aria-label="Rebel Removal home" className="shrink-0">
          <Logo priority imageClassName="h-12 w-12" />
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-heading text-xs uppercase tracking-wide text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button onClick={openModal} className="font-heading uppercase tracking-wide">
          Get Free Quote
        </Button>
      </div>
    </header>
  );
}
