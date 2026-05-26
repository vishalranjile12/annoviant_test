# Client questions and clarifications

Open questions for the Annoviant team based on the changes shipped in this
phase of work. Organized by the kind of answer needed.

---

## 1. Sign-off on the new structure

Does this match the team's intent, or did we go further than expected?

- **Nav consolidation.** We collapsed nine top-level items down to five plus
  the Investor Briefing button: For… / Technology / Pipeline / Evidence /
  Company. Is that the right hierarchy, or do you want anything restored to
  top-level?
- **Homepage trim.** The home went from eleven scrollable sections to five
  (Hero → Explainer → Credentials → Partners → Contact). Did we over-trim?
  Should anything come back, e.g. a Pipeline summary?
- **Public `/investors` vs. gated `/investor-briefing` split.** Public keeps
  FDA HUD, NIH total, paper and patent counts, ISO 13485 readiness, pipeline
  tier names, and three key dates. Gated keeps the thesis breakdown, market
  sizing ($8B+ by 2035), Edwards/Medtronic/Abbott/BSX/JNJ positioning, full
  milestones with bodies, and pipeline status badges. Is that the right line?
- **Typewriter words in the Hero.** Currently: Cardio / Vascular / Urology /
  Gastro / Graft / Wound applications. "Urology" and "Gastro" are terse but
  slightly off-register clinically — should they be "Urological" and
  "Gastrointestinal" or stay as is?
- **Hero body copy.** The simplified version drops the "calcification,
  thrombosis, infection, repeat surgery" list. Those failure modes still
  appear on the CredentialsStrip and `/technology`. Comfortable with that, or
  should the hero carry them too?
- **Storytelling anchors on the four detail pages.** Each opens with a
  human-stakes paragraph. Are they on-brand and on-message?

---

## 2. Concrete inputs we need from the team

These are the unknowns blocking full activation:

- **`VITE_GA4_MEASUREMENT_ID`** — Google Analytics 4 measurement ID
  (`G-XXXXXXXXXX`). Until set, analytics is off.
- **`VITE_BRIEFING_CODE`** — the literal invitation code investors type to
  unlock `/investor-briefing`. Without it, the gate refuses all codes.
- **`VITE_INVESTOR_DATAROOM_URL`** — the secure link the unlocked briefing
  routes to (DocSend / Notion / Drive / Foundersuite / etc.).
- **Strapi admin user(s)** — who on the team will own content updates? Do
  we need to set up additional editor accounts?
- **Confirm contact info** on `/contact`:
  - Email: `contact@annoviant.com`, `partnerships@annoviant.com`
  - Phone: `(678) 357-3812`
  - Georgia office: `2972 Webb Bridge Road, Alpharetta, GA 30009`
  - South Carolina office: `200 Patewood Dr, Building C, Greenville, SC 29615`
  - All current and correct?
- **Custom domain.** Do we point `annoviant.com` at this new site, or run it
  as a parallel project on `*.up.railway.app` until ready to switch?
- **Press logos.** The Partners strip on the home features Boston Children's,
  CHOP, Clemson, Georgia Tech, CHOA, UCSF, U Minnesota, PPDC, CTIP. All
  current and authorized?
- **News content.** The nine imported news articles were lightly rewritten /
  condensed during the migration. Should comms or legal sign off on the new
  bodies before they replace what's on `annoviant.com` today?

---

## 3. Strategic / scope decisions

- **Replacement vs. parallel.** Are we replacing `annoviant.com` with this
  build, or running it parallel for a window? Affects URL/slug compatibility
  and redirect mapping.
- **`/answers` migration.** Like the news migration, should the AEO
  knowledge-base move from bundled data to Strapi so non-engineers can edit?
- **`/news` source of truth.** Frontend currently reads from Strapi with a
  local fallback. Switch the primary read to local for safety, or keep Strapi
  primary?
- **Briefing card aggressiveness.** Triggers after eight seconds on page AND
  (55% scroll OR exit-intent). Once dismissed, stays dismissed for the
  session. Too soon? Too late? Should it re-prompt after N days?
- **Diligence depth under the gate.** Currently shows thesis, milestones,
  pipeline status, market positioning. Add use of funds, cap structure, team
  bios in-page — or keep those for the data room only?
- **Blog scope.** Strapi has a `blog-post` collection ready. Do we plan a
  real editorial calendar, or is the news collection enough for now?
- **Patient-facing disclaimers.** `/for-patients` uses an "investigational"
  disclaimer block. Is the language verbatim correct for your regulatory
  team, or does it need specific wording?

---

## 4. Compliance and regulatory (lawyer's eyes recommended)

- **Forward-looking statements.** Some milestones imply timelines ("Pipeline
  advancing to IND-enabling studies", "$8B+ U.S. market by 2035"). The 2035
  figure is now gated. Other timeline language should be reviewed for
  safe-harbor implications if a raise is active.
- **Investor-page general solicitation rules.** `/investors` is publicly
  indexed. Compatible with Reg D 506(b) if you're running a 506(b) raise?
  Some private companies put a sophisticated-investor attestation in front
  of investor content.
- **Medical-claims language.** "Designed to reduce calcification, thrombosis,
  infection" — for an investigational device, the FDA promotional-statements
  guidance is specific. Has regulatory counsel reviewed the rewritten copy?
- **Tissue-source disclosure.** `/technology` says "bovine and porcine." Is
  that comprehensive for all current studies, and is the language the
  regulatory team wants patients to see?
- **GA4 and privacy.** A cookie consent banner ships in this commit. Is the
  current language sufficient for EU and CA visitors, or does the privacy
  policy at `/legal/privacy` need to be updated to match?

---

## 5. Future priorities — validate before more work

Rough order of impact, all currently deferred:

1. **Same copy + UX pass on `/technology`, `/applications`, `/pediatric`,
   `/cardiovascular`.** Light storytelling anchors are now there; deeper
   rewrites still pending.
2. **Railway staging environment** so content edits can be previewed.
3. **Email-capture / mailing-list integration.** Needs a provider choice
   (ConvertKit, Mailchimp, HubSpot).
4. **A/B testing the briefing prompt.** Start with GA4 events; upgrade to
   PostHog if data justifies.
5. **SEO sitemap refresh.** Submit updated sitemap to Search Console once
   the new pages are confirmed final.
6. **Strapi page-level content** for the marketing pages so non-engineers
   can edit Technology, Applications, About copy without a code release.

See `docs/ROADMAP.md` for the implementation detail on items 2, 3, and 4.
