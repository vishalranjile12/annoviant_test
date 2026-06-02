# Redesign plan — "less info, more engaging" (Magenta-inspired)

Decision (2026-06-02): **Full scope (Tier A+B+C)**, engagement = **restraint as
the base + genuine motion where it earns its place**. Reference:
https://magentamed.com. Rationale and metrics in `CONTENT_AUDIT.md`.

Working branch: `redesign/magenta-inspired`.

## Principles
1. One idea per screen. Cap body copy ~120 words per section.
2. Show, don't tell — lead each section with a visual/diagram/animation.
3. Flat navigation. Depth is available, not pushed.
4. Reuse existing modules (`RegenerationTimeline`, `Reveal`, `CountUp`,
   `Marquee`, `TiltCard`, `Pipeline`) rather than adding new prose.
5. Motion respects `prefers-reduced-motion` (already wired in `index.css`).

## Phases

### Phase 1 — Homepage vertical slice (proves the language) ← current
- [ ] Restrained Hero: 1 headline, 1 sentence, 1 primary CTA. Remove the
      4-stat `<dl>` and the disclaimer from the hero.
- [ ] Signature "Show" section: scaffold → living tissue regeneration visual
      (motion centerpiece, C1).
- [ ] Keep Explainer video (strongest existing asset).
- [ ] Trim CredentialsStrip 5 → 3 tiles; link out for the rest.
- [ ] Routing section: Clinician / Investor / Patient chooser.
- [ ] Target: homepage ~150 words (from 653), one primary CTA (from 6).
- [ ] Verify in browser at 1440 + 390 widths.

### Phase 2 — Flatten navigation (B1)
- [ ] 5 dropdowns → ~5 flat links (Technology · Pipeline · Evidence ·
      Company · Contact). Audience routing demoted to footer / chooser.

### Phase 3 — Convert essays to visual modules (B2)
- [ ] Technology (1,107w) → capped sections led by diagrams + RegenerationTimeline.
- [ ] Founder Story (2,358w / 10 screens) → visual ~400w version; long-form
      kept as optional deep-read (pending client call, audit Q4).

### Phase 4 — Page consolidation (B3)
- [ ] 27 → ~12–14 pages. Candidate merges: evidence+publications;
      about+team+founder-story; for-* + investors cluster. Add redirects.

### Phase 5 — Signature interactive pieces (C2, C3)
- [ ] Interactive pipeline / indication explorer (replaces /applications prose).
- [ ] Scrollytelling pass on Technology.

Each phase verified in-browser and committed atomically.
