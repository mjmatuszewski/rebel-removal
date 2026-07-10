import { CheckCircle2, ClipboardCheck, Truck } from "lucide-react";

const STEPS = [
  {
    icon: ClipboardCheck,
    title: "Book Your Free Quote",
    description: "Tell us what needs to go, online or by phone. Get a free quote in minutes.",
  },
  {
    icon: Truck,
    title: "We Show Up & Haul",
    description: "Our crew arrives on time, loads everything, and does all the heavy lifting.",
  },
  {
    icon: CheckCircle2,
    title: "You're Done",
    description: "We sweep up and dispose of it responsibly. No hidden fees, ever.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-16 bg-muted/30 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col items-center gap-2 text-center">
          <h2 className="font-heading text-3xl uppercase tracking-tight text-foreground sm:text-4xl">
            How It Works
          </h2>
          <p className="max-w-md text-balance text-muted-foreground">
            Three steps. That&apos;s it.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {STEPS.map(({ icon: Icon, title, description }, index) => (
            <div key={title} className="flex flex-col items-center gap-3 text-center">
              <div className="relative flex size-16 items-center justify-center rounded-full border border-border bg-card">
                <Icon className="size-7 text-foreground" aria-hidden="true" />
                <span className="absolute -top-2 -right-2 flex size-6 items-center justify-center rounded-full bg-primary font-heading text-xs text-primary-foreground">
                  {index + 1}
                </span>
              </div>
              <h3 className="font-heading text-sm uppercase tracking-wide text-foreground">
                {title}
              </h3>
              <p className="max-w-xs text-balance text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
