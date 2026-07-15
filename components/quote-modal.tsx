"use client";

import { useRef, useState, type ChangeEvent, type FormEvent } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useQuoteModal } from "@/lib/quote-modal-context";
import { submitQuoteRequest, type QuoteRequestPayload } from "@/lib/quote-request";

type SubmitStatus = "idle" | "submitting" | "success";

export function QuoteModal() {
  const { isOpen, closeModal } = useQuoteModal();
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  function resetForm() {
    setStatus("idle");
    setPhotoPreview((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return null;
    });
    formRef.current?.reset();
  }

  function handleOpenChange(open: boolean) {
    if (open) return;
    closeModal();
    // Wait for the close animation before clearing form state.
    setTimeout(resetForm, 200);
  }

  function handlePhotoChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0] ?? null;
    setPhotoPreview((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return file ? URL.createObjectURL(file) : null;
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const photo = formData.get("photo");

    const payload: QuoteRequestPayload = {
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      zip: String(formData.get("zip") ?? ""),
      description: String(formData.get("description") ?? ""),
      photo: photo instanceof File && photo.size > 0 ? photo : null,
    };

    setStatus("submitting");
    await submitQuoteRequest(payload);
    setStatus("success");
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        {status === "success" ? (
          <div className="flex flex-col items-center gap-3 py-6 text-center">
            <DialogTitle>Request Received</DialogTitle>
            <DialogDescription>
              Thanks! We will text or call you shortly with your free quote.
            </DialogDescription>
            <Button
              onClick={() => handleOpenChange(false)}
              className="mt-2 font-heading uppercase tracking-wide"
            >
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Get Your Free Quote</DialogTitle>
              <DialogDescription>
                Tell us what you need gone. No obligation, no hidden fees.
              </DialogDescription>
            </DialogHeader>

            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="quote-name">Name</Label>
                <Input id="quote-name" name="name" required autoComplete="name" />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="quote-phone">Phone</Label>
                <Input id="quote-phone" name="phone" type="tel" required autoComplete="tel" />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="quote-zip">Zip Code</Label>
                <Input
                  id="quote-zip"
                  name="zip"
                  inputMode="numeric"
                  required
                  autoComplete="postal-code"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="quote-description">What needs to go?</Label>
                <textarea
                  id="quote-description"
                  name="description"
                  rows={3}
                  placeholder="Old couch, yard debris, garage cleanout..."
                  className="w-full rounded-lg border border-input bg-transparent px-2.5 py-1.5 text-base outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 md:text-sm"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="quote-photo">Photo (optional)</Label>
                <Input
                  id="quote-photo"
                  name="photo"
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handlePhotoChange}
                />
                {photoPreview && (
                  // eslint-disable-next-line @next/next/no-img-element -- object URL preview, not an optimizable asset
                  <img
                    src={photoPreview}
                    alt="Selected item preview"
                    className="mt-1 h-24 w-24 rounded-lg border border-border object-cover"
                  />
                )}
              </div>

              <DialogFooter className="mt-2">
                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  className="font-heading uppercase tracking-wide"
                >
                  {status === "submitting" ? "Sending..." : "Request Quote"}
                </Button>
              </DialogFooter>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
