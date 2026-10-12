# Nightclub clone — page brief

**Source:** https://templatekit.tokomoo.com/nightclubkit/ ("Swagger – Night Club & DJ" Elementor template kit)
**Scope:** Homepage only (single-page). Other nav pages (events, about, tickets, crew, faq, careers, reservation, contact) are **out of scope** and their links point back to the source.

## Route map
| Source | Local |
| --- | --- |
| `/nightclubkit/` (homepage) | `/` (`src/app/page.tsx`) |

## Design tokens
- **Background:** `#000000` (black); section cards `#0d0d0d`
- **Accent green:** `#1dbf6a` (`--color-club-green`)
- **Body text:** `rgba(255,255,255,0.75)`
- **Container:** max-width `1140px`, centered
- **Fonts (Google):**
  - Body / nav → **Encode Sans** (`--font-encode-sans`)
  - Headings → **Encode Sans Expanded** 700/800, uppercase (`--font-heading`)
  - Script "+" accents → **Caveat** (`--font-script`)
- **Buttons:** square (no radius), 2px green border, Encode Sans Expanded 700, 16px, `15px 30px` padding; invert on hover.

## Notable details
- **Layered outline text** (`-webkit-text-stroke`, transparent fill) is used ONLY on: the hero `LET'S DANCE AND PARTY` (2px echo) and `EVERYONE HAPPY PARTYING ON SWAGGER`. Line-up DJ *first* names are outlined; *last* names solid. All other section titles are plain solid white.
- **Line-up:** 3 DJ photos with name overlay — Liam Guetta, Jennifer Zendaya, Kyle Gryffin.
- **Deep Night Light:** radial green glow background (`bg-cta.jpg`) + media band (two photos, one with play button).
- Stats numbers 56px with green Caveat `+`.

## Section order
Header (sticky) → Hero → Stats → Today Lines Up → What We Offer → Upcoming Events → Additional Service → Deep Night Light (CTA + media) → Everyone Happy Partying → What They Say → Partners strip → Footer.

## Assets
All downloaded to `public/sites/nightclub/` from `.../wp-content/uploads/sites/70/2022/02/` (25 files: logo, hero/dj/event/team photos, service & play icons, partner logos, section backgrounds).

## Components
`src/components/sites/nightclub/`: `Header.tsx`, `Footer.tsx`, `shared.tsx` (ClubButton, GreenRule, SectionTitle, LayeredHeading), `data.ts` (all content).

## Checks run
- `npm run check` (lint + typecheck + build) — passes.
- Browser compare at 1440px + 390px vs source; 0 horizontal overflow; all images 200.

## Known gaps / interpretation
- Hero uses one DJ image (`hero-image-1`); source loads a second near-duplicate (`hero-image-2`) not visibly distinct.
- Interactive controls (Buy Ticket, Reservation, play button, socials) are visual/anchor only — no ticketing/video backend in scope.
- Partner logos are intentionally faint (grayscale, 50% opacity on black), matching the source.
