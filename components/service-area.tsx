"use client";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { EMAIL_DISPLAY, EMAIL_HREF, PHONE_DISPLAY, PHONE_HREF, SERVICE_AREA_TOWNS } from "@/lib/site-config";

export function ServiceArea() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <section id="service-area" className="scroll-mt-28 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col items-center gap-2 text-center">
          <h2 className="font-heading text-3xl uppercase tracking-tight text-foreground sm:text-4xl">
            Service Area
          </h2>
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

        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <p className="max-w-md text-balance text-sm text-muted-foreground">
            Don&apos;t see your location? We proudly serve Oxford and the surrounding areas.
            Contact us to see if we service your location.
          </p>
          <Button
            onClick={() => setContactOpen(true)}
            className="font-heading uppercase tracking-wide"
          >
            Contact Us
          </Button>
        </div>
      </div>

      <Dialog open={contactOpen} onOpenChange={setContactOpen}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Contact Us</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col items-center gap-4 py-2 text-center">
            <Button
              render={<a href={PHONE_HREF} />}
              className="font-heading uppercase tracking-wide"
            >
              <Phone className="size-4" aria-hidden="true" />
              Call {PHONE_DISPLAY}
            </Button>

            <a
              href={EMAIL_HREF}
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="size-4" aria-hidden="true" />
              {EMAIL_DISPLAY}
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
