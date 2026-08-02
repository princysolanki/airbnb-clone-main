@AGENTS.md

# Airbnb Listing Page Clone

A pixel-fidelity clone of a single Airbnb listing page (desktop only), built for a take-home
assignment. Next.js App Router + TypeScript + Tailwind CSS v4 + GSAP (ScrollTrigger).

## Why this exists / constraints that shaped it

- The reference (`https://airbnb-clone-umber-two.vercel.app`) sits behind a Vercel bot-detection
  checkpoint that blocks headless browser access, so there was no way to inspect it live with
  browser automation. Instead, a full saved copy of the rendered page (`Ctrl+S` "Webpage,
  Complete") was used as the ground truth for content, and its assets were copied in.
- The assignment explicitly penalizes direct lift-and-shift of the reference's code. So the saved
  HTML/CSS was mined only for **values** (copy, prices, image files, ARIA labels, category
  groupings) via a one-off Node/cheerio extraction script — see `lib/listing-data.ts` for the
  resulting typed content module. All markup, component structure, styling, and interaction code
  here is an original implementation.
- Desktop only — no responsive/mobile work was scoped (per the assignment).

## Structure

- `app/page.tsx` → `components/ListingPage.tsx` — the single client component that owns overlay
  state (Photo Tour open/closed, Lightbox index) and composes every section.
- `lib/listing-data.ts` — all copy/content as typed exports. If content looks wrong, fix it here,
  not by hardcoding strings in components.
- `lib/useDialog.ts` — shared hook for the three overlay dialogs (`AmenitiesModal`, `PhotoTour`,
  `Lightbox`): focus trap, `Escape` to close, body scroll lock, focus restore on close. Any new
  overlay should reuse this rather than reimplementing dialog semantics.
- `components/icons.tsx` — hand-written inline SVG icon set (not a copied icon library).

## The two GSAP behaviors (the reason ScrollTrigger is a dependency)

1. **Booking column pin** (`components/ListingPage.tsx`): the discount banner + reservation card
   pin in place while the left content column scrolls past, releasing once the left column's
   content ends (`ScrollTrigger` with `pin: rightColRef`, `end: "bottom bottom"`, `pinSpacing:
   false`, trigger = the left column).
2. **Photo Tour hero pin** (`components/PhotoTour.tsx`): inside the full-screen Photo Tour, each
   room category's first/hero photo pins in place while that category's remaining thumbnails
   scroll past, releasing exactly when the *next* category's heading reaches the top of the
   overlay's own scroll container (`end: "bottom top+=<header offset>"` relative to the category
   container as trigger — this is what makes it release right as the next heading arrives).

Both use `ScrollTrigger.create` inside a `useEffect`, cleaned up on unmount/close. The Photo Tour
instance passes `scroller: <its own internal scroll div>` since it scrolls independently of the
window.

## Sub-agents in `.claude/agents/`

- `pixel-parity-reviewer.md` — checks a changed section's content/structure against
  `lib/listing-data.ts` (the only source of truth available, since the live reference can't be
  browsed). Run after touching any listing-page section.
- `a11y-auditor.md` — checks keyboard nav, focus trap/restore, ARIA roles/labels on the three
  overlays and general interactive elements. Run after touching anything interactive.

Both are read-only reviewers (no Edit/Write) — they report findings for a human or the main
session to act on, they don't apply fixes themselves.

## Commands

- `npm run dev` — dev server
- `npm run build` — production build (must stay clean; this is checked before considering any
  section done)
- `npm run lint` — ESLint

## Deliverables outside `airbnb-clone/`

- `architecture/architecture-diagram.svg` (+ rendered `.png`) — production-scale marketplace
  architecture (frontend/backend/storage/search/deployment scaling strategy), per the assignment.
