import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { WhatWeTake } from "@/components/what-we-take";
import { HowItWorks } from "@/components/how-it-works";
import { BeforeAfterGallery } from "@/components/before-after-gallery";
import { Testimonials } from "@/components/testimonials";
import { ServiceArea } from "@/components/service-area";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { StickyMobileCTA } from "@/components/sticky-mobile-cta";
import { QuoteModal } from "@/components/quote-modal";
import { Reveal } from "@/components/reveal";

export default function Home() {
  return (
    <div id="top" className="flex flex-1 flex-col">
      <Header />

      <main className="flex flex-1 flex-col">
        <Hero />
        <TrustBar />
        <Reveal>
          <WhatWeTake />
        </Reveal>
        <Reveal>
          <HowItWorks />
        </Reveal>
        <Reveal>
          <BeforeAfterGallery />
        </Reveal>
        <Reveal>
          <Testimonials />
        </Reveal>
        <Reveal>
          <ServiceArea />
        </Reveal>
        <Reveal>
          <Faq />
        </Reveal>
        <Reveal>
          <FinalCta />
        </Reveal>
      </main>

      <Footer />
      <StickyMobileCTA />
      <QuoteModal />
    </div>
  );
}
