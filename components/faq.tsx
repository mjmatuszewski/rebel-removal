import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "Do you offer same day service?",
    answer:
      "Yes, in most cases we can get to you the same day you call. Availability depends on your location and our current schedule.",
  },
  {
    question: "How much does junk removal cost?",
    answer:
      "Every job is different, so we give free, no obligation quotes based on volume and item type. You will always know the price before we start.",
  },
  {
    question: "Do I need to be home during the pickup?",
    answer:
      "Not necessarily. As long as the items are accessible and details are confirmed ahead of time, we can often complete the job without you present.",
  },
  {
    question: "What items can't you take?",
    answer:
      "We are unable to take hazardous materials like paint, chemicals, or asbestos. If you are unsure about an item, just ask when you request your quote.",
  },
  {
    question: "Do you serve businesses as well as homeowners?",
    answer:
      "Yes. We handle both residential cleanouts and commercial pickups, including offices, rentals, and construction sites.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-16 bg-muted/30 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-2xl">
        <div className="mb-10 flex flex-col items-center gap-2 text-center">
          <h2 className="font-heading text-3xl uppercase tracking-tight text-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion>
          {FAQS.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger className="font-heading text-sm uppercase tracking-wide">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
