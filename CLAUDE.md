# Rebel Removal — Project Memory

## What this is
Frontend-only prototype website for "Rebel Removal," a junk hauling / cleanout /
moving-help company in Oxford, MS. Single-scroll marketing site. No backend yet —
forms are stubbed, not wired to a real submission endpoint.

## Stack
- Next.js (App Router, TypeScript, Tailwind v4, no src/ dir)
- shadcn/ui (Base preset) — components: button, card, input, dialog, accordion, label
- lucide-react for icons
- Fonts via next/font/google: Archivo Black (headlines), Kaushan Script (accent only)

## Design system — DO NOT DEVIATE
- Colors: pure black, white, and grays ONLY. No color accents anywhere,
  including CTA buttons, links, or hover states. This is a strict grayscale build.
- Primary CTA: solid black fill, white text
- Secondary CTA / ghost button: black outline, transparent fill
- Archivo Black: headlines, section titles, nav, buttons
- Kaushan Script: accent use ONLY — max 1 word per section header (e.g. the
  word "Rebel" inside a headline). NEVER use for body copy or full headlines.
- No em dashes in any copy, anywhere.
- Single-CTA principle: "Get Free Quote" is the only primary action on the
  entire page. Phone number is a secondary, passive tap-to-call link — never
  styled as a competing button.

## Architecture
- Single scroll page, no separate routes for main content
- Shared React Context (QuoteModalContext) controls the quote request modal.
  Every CTA across the page (header, hero, mid-page, final CTA, sticky mobile
  bar) triggers the SAME modal instance via context — no prop-drilling.
- z-index token scale needed for: header, sticky mobile CTA bar, modal overlay,
  modal content. Define as constants.
- Sticky bottom CTA bar: mobile only (hidden md+), tap-to-call left side,
  "Get Free Quote" button right side, pinned to bottom of viewport.

## Section order (locked)
1. Header — logo, nav, CTA button
2. Hero — pain/speed headline, subhead, dual CTA
3. Trust bar — Same-Day Available / No Hidden Fees / Eco-Friendly Disposal / Locally Owned
4. What We Take — visual grid, junk categories
5. How It Works — 3 steps
6. Before/After gallery — placeholder images
7. Testimonials — card layout, placeholder content
8. Service Area — real town names near Oxford, MS (placeholder: Oxford, Taylor, Water Valley, Abbeville)
9. FAQ — accordion, objection-focused questions
10. Final CTA — repeat quote modal trigger, no fake urgency

## Quote modal form
Fields: name, phone, zip code, service type (dropdown), item description
(textarea), photo upload (camera capture support + preview).
No backend yet. Stub the submit handler: show success state in modal, console.log payload.
Structure submit as isolated async function for easy backend swap later.

## Logo
Black and white logo (script "Rebel" + bold blocky "Removal" + recycle-icon
delivery truck). Logo file provided separately — use placeholder box with
company name if not yet in /public.

## Known constraints
- Target customer: both residential AND commercial
- Pricing: "Free quote" only — NEVER display prices anywhere
- Lead capture: form + visible phone number combo
- Frontend only — no API routes, no real form submission, no auth/database

## Process notes
- Verify each phase works (dev server runs, no console errors, responsive at
  mobile + desktop) before moving to next phase
- Flag anything ambiguous instead of guessing silently
