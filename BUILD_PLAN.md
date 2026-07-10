# Rebel Removal — Build Plan

Work through phases in order. After each phase: run npm run dev, check for
console errors, check mobile width (375px) and desktop width, THEN move to
next phase.

## Phase 1 — Foundation
- Set up next/font/google in app/layout.tsx: Archivo Black + Kaushan Script
- Define z-index constants (lib/constants.ts): header, sticky-cta, modal-overlay, modal-content
- Create QuoteModalContext (lib/quote-modal-context.tsx) — isOpen state, openModal(), closeModal()
- Wrap app in provider in app/layout.tsx
- Set base layout metadata (title: "Rebel Removal | Junk Hauling & Cleanouts | Oxford, MS")
- Confirm: dev server runs clean, fonts visibly applied

## Phase 2 — Conversion Shell
- Header: logo placeholder, nav links (smooth scroll anchors), CTA button calling openModal()
- QuoteModal using shadcn Dialog: all fields per CLAUDE.md, stubbed submit, success state
- StickyMobileCTA: fixed bottom bar, mobile-only (md:hidden), tap-to-call + Get Quote button
- Footer: logo, service area summary, phone, copyright
- Confirm: modal opens from header CTA and sticky bar, closes properly

## Phase 3 — Hero + Trust Bar
- Hero: headline (pain/speed focused), subhead, primary CTA + passive phone link
- Trust bar below hero: 4 trust points, icon + label, responsive
- Confirm: hero CTA opens modal, phone link is tel: link, trust bar responsive

## Phase 4 — Content Sections
- What We Take: grid of 5-6 categories, icon + label cards
- How It Works: 3-step visual sequence, numbered
- Before/After: gallery with placeholder image blocks, structured for real photos later
- Confirm: all sections responsive, grid reflows on mobile

## Phase 5 — Testimonials / Service Area / FAQ / Final CTA
- Testimonials: card layout, 2-3 placeholder testimonials
- Service Area: town list (placeholder: Oxford, Taylor, Water Valley, Abbeville)
- FAQ: shadcn Accordion, 4 questions minimum
- Final CTA: repeat primary CTA, no urgency language
- Confirm: accordion works, final CTA opens same modal instance

## Phase 6 — Polish Pass
- Scroll-reveal animations (restrained, optional)
- Reduced-motion support
- Check every CTA opens same modal instance
- Full responsive pass: 375px, 768px, 1024px, 1440px
- Check no em dashes, no color except black/white/gray
- Check Kaushan Script only as accent words

## Phase 7 — SEO / Metadata
- OG image / favicon (placeholder acceptable)
- Meta description, title tag
- Basic LocalBusiness schema placeholder

## Open items to confirm with Michael before Phase 5/7 lock in
- Real service area town list
- Final hero headline wording
- Whether logo file is ready to drop into /public
