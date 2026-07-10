import { Star } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const TESTIMONIALS = [
  {
    quote:
      "They showed up on time and had my garage cleared out in under an hour. Easiest part of my whole move.",
    name: "Sarah T.",
    location: "Oxford, MS",
  },
  {
    quote:
      "Called for a same day pickup after a tenant moved out and left everything behind. Rebel Removal had it handled by that afternoon.",
    name: "Mark D.",
    location: "Property Manager",
  },
  {
    quote: "Friendly crew, fair price, no surprises. Would call them again in a heartbeat.",
    name: "Jenny R.",
    location: "Taylor, MS",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-16 bg-muted/30 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col items-center gap-2 text-center">
          <h2 className="font-heading text-3xl uppercase tracking-tight text-foreground sm:text-4xl">
            What Neighbors Are Saying
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <Card key={testimonial.name}>
              <CardContent className="flex flex-col gap-3">
                <div className="flex gap-0.5" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-foreground text-foreground" />
                  ))}
                </div>
                <p className="text-sm text-foreground">&ldquo;{testimonial.quote}&rdquo;</p>
                <p className="font-heading text-xs uppercase tracking-wide text-muted-foreground">
                  {testimonial.name} &middot; {testimonial.location}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
