# Content & engagement audit — Annoviant vs. Magenta Med

**Brief from client:** *"Less information on the web, more engaging content."*
**Reference site:** https://magentamed.com (Magenta Medical — Elevate™ pLVAD)
**Date:** 2026-06-02

This audit measures both sites on the same axes (word count, headings, scroll
depth, media, page count) so the gap is concrete, not vibes. Numbers below are
from the live reference site and our current `dist` build.

---

## 1. The headline gap, quantified

| Metric | Magenta Med | Annoviant (current) | Ratio |
|---|---|---|---|
| Words on the **homepage** | **39** | **653** | **16.7×** |
| Words on the **deepest** content page | 304 (Product) | 2,358 (Founder Story) | 7.8× |
| Homepage scroll height | ~1 viewport | 4,479px (~3 screens) | — |
| Founder Story scroll height | n/a | **13,079px (~10 screens)** | — |
| Total pages in the site | **6** | **27** | 4.5× |
| Top-level nav items | 6 flat links | 5 dropdowns → ~22 destinations | — |
| Homepage CTAs/buttons competing | 2 | 6+ (2 hero, nav button, sticky, briefing card, section links) | — |

**Read:** even after the team's first trim (11→5 home sections, 9→5 nav
groups), the homepage still carries **17× the reference's text**, the site has
**4.5× the pages**, and the Founder Story alone is a ~10-screen scroll. The
client's instinct is correct and the gap is large.

---

## 2. What Magenta does (the reference playbook)

Magenta is not "engaging" because it's flashy — it has **no video and no
animation**. It's engaging because of *restraint*:

1. **One idea per screen.** Homepage = one H1 ("Self-Expanding Percutaneous
   Mechanical Circulatory Support"), one 39-word paragraph, one hero image of
   the device/heart. That's the entire page.
2. **Visual-first detail pages.** Their deepest page (Product & Indications) is
   still only ~300 words — but **12 images / diagrams** broken into small
   captioned chunks. They *show* the device; they don't describe it.
3. **Flat, 6-item navigation.** Home · Product · About · News · Careers ·
   Contact. No dropdowns, no "For… / Evidence / Pipeline" taxonomy to decode.
4. **Confident whitespace + dark aesthetic.** The product is the hero. Copy
   exists only to caption the visual.
5. **One job per page.** No page is trying to convert investors, educate
   clinicians, and reassure patients simultaneously.

---

## 3. Where Annoviant diverges (the findings)

### F1 — Homepage is a brochure, not a hook *(highest impact)*
653 words, 4,479px, 22 images, **6 competing CTAs**, two disclaimer blocks, a
4-stat `<dl>` in the hero, plus a 5-tile CredentialsStrip. A first-time visitor
hits funding figures, patent counts, ISO readiness, and an "investigational"
legal disclaimer **before** they understand what TxGuard *is*. Magenta makes you
understand the product in one sentence; we ask you to read a fact sheet.

### F2 — Detail pages are essays *(high impact)*
- Founder Story: **2,358 words / ~10 screens.** `FounderStory.tsx` is 41KB of
  hand-authored prose.
- Technology: **1,107 words / 7,093px.**
- Most detail pages run 650–900 words of body text with only 3–5 images.

The ratio is inverted vs. the reference: we lead with **prose and footnote with
images**; Magenta leads with **images and footnotes with prose**.

### F3 — Navigation asks the visitor to do taxonomy
Five dropdowns (For… / Technology / Pipeline / Evidence / Company) fan out to
~22 destinations. It's well-organized for an *insider*, but it front-loads the
cognitive cost. Magenta's 6 flat links never make you choose a "lane."

### F4 — 27 pages is a maintenance and focus tax
Many pages overlap (`/technology`, `/applications`, `/solutions/*`,
`/clinical-evidence`, `/publications`; `/about`, `/team`, `/founder-story`;
`/for-patients`, `/for-clinicians`, `/for-investors`, `/investors`,
`/investor-briefing`). Each is a surface to keep current and a place for the
visitor to get lost.

### F5 — "Engaging" assets exist but are under-used
The codebase already has the right building blocks that are **not** on the
homepage: `RegenerationTimeline`, `Reveal` (scroll animation), `CountUp`,
`TiltCard`, `Marquee`, `Pipeline`, `Differentiation`. The Explainer (YouTube,
autoplay-on-scroll) is the single strongest engagement asset and it's good.
The opportunity is to **replace paragraphs with these visual/interactive
modules**, not add them on top of the prose.

---

## 4. Synthesis — resolving "less info AND more engaging"

Those two requests are the same request: **stop explaining in text, start
showing.** Every wall of copy that becomes a diagram, an animated
scaffold→tissue sequence, a captioned device visual, or a 20-second loop is
simultaneously *less information to read* and *more engaging to experience.*

The target is not "Magenta with our logo." Annoviant genuinely has more to say
(pediatric + cardiovascular + platform pipeline, real clinical/IP credibility).
The goal is **Magenta's discipline applied to our substance**: one idea per
screen, visual-first, flat navigation, and the depth available for those who go
looking — not pushed at everyone.

---

## 5. Recommendations (tiered)

### Tier A — Quick wins (low risk, high signal)
- **A1. Cut the homepage to ~150 words.** Hero: one headline + one sentence +
  one primary CTA. Move the 4-stat `<dl>` and disclaimers off the hero.
- **A2. Collapse the two hero CTAs to one** ("See how TxGuard works"). Demote
  "For investors" to the nav.
- **A3. Make the Explainer video the second screen** and let it carry the
  "what/why" instead of body copy.
- **A4. Reduce CredentialsStrip from 5 tiles to 3** and move the rest to
  `/investors`.

### Tier B — Structural (the real lever)
- **B1. Flatten the nav** from 5 dropdowns to ~5 flat links
  (Technology · Pipeline · Evidence · Company · Contact), with audience routing
  demoted to the footer or a single "Who are you?" chooser.
- **B2. Convert Founder Story + Technology from essays to visual modules.**
  Lead each section with a diagram/animation; cap body copy at ~120 words per
  section. Reuse `RegenerationTimeline`, `Reveal`, `Pipeline`.
- **B3. Consolidate overlapping pages** (e.g. fold `/clinical-evidence` +
  `/publications`; `/about` + `/team` + `/founder-story`; the `/for-*` +
  `/investors` cluster). Target ~12–14 pages from 27.

### Tier C — Ambitious (signature engagement)
- **C1. A signature "scaffold → living tissue" animation** as the centerpiece
  visual (scroll-driven or looping) — the one thing a visitor remembers.
- **C2. Interactive pipeline / indication explorer** replacing the
  `/applications` prose.
- **C3. One-line-per-screen scrollytelling** on the Technology page.

---

## 6. Suggested target end-state (home)

```
Screen 1  Hero      — 1 headline, 1 sentence, 1 CTA, device/scaffold visual
Screen 2  Show      — the regeneration animation (scaffold → living tissue)
Screen 3  Explainer — founders' video
Screen 4  Proof     — 3 credibility tiles + 1 link to the full investor view
Screen 5  Routing   — "Clinician / Investor / Patient?" → deeper paths
Footer    Contact + legal
```
~150 words total, vs. 653 today.

---

---

## 7. Decisions needed from the client

1. **How far to go?** Quick wins only (Tier A), or the structural rework
   (A+B), or commit to the signature engagement work (A+B+C)?
2. **Page consolidation appetite.** Are they comfortable retiring/merging
   pages (and adding redirects), or must all 27 URLs survive?
3. **The "more engaging" definition.** Magenta achieves it with *restraint and
   imagery, no motion*. Do they want that, or genuine motion/interactivity
   (animation, scrollytelling)? This drives the build cost.
4. **Founder Story.** It's the biggest single block (2,358 words). Trim to a
   visual ~400-word version, or keep the long-form as an optional deep-read?
