# Roadmap — staging, email capture, A/B testing

These three workstreams each need a vendor or platform decision before
implementation. This doc captures the recommended approach for each so the
client can pick a direction and we can wire it up cleanly.

---

## 1. Staging environment on Railway

**Why:** Today, every push to `develop` deploys straight to the public site. A
typo on the homepage = a typo on annoviant.com. A staging environment lets
content edits and design tweaks be previewed before going live.

**Recommended setup:**

1. In the same Railway project, create two new services that mirror the
   existing ones, suffixed `-staging`:
   - `annoviant-web-staging` pointing at the `staging` branch
   - `annoviant-cms-staging` pointing at the `staging` branch, with its own
     Postgres database
2. Create a long-lived `staging` branch in the repo: `git checkout -b staging
   && git push -u origin staging`.
3. The workflow becomes: feature branches → PR to `staging` → review on the
   `*-staging.up.railway.app` domains → merge to `develop` for production.
4. Use Strapi's `Settings → Transfers` to seed staging CMS content from prod
   when needed (or just re-run the bootstrap seeder).

**Cost:** ~$10/mo extra on Railway for the two services + the second Postgres
(low traffic = low spend).

**To kick off:** create the services, the branch, and a CONTRIBUTING.md note
about the workflow. ~30 min of work.

---

## 2. Email-capture / mailing-list integration

**Why:** Right now the only data capture is the contact form. A newsletter
list lets you nurture investors and clinicians who aren't ready to talk yet.

**The decision the client owns:** which provider. The three reasonable picks:

| Provider | Strengths | Tradeoffs |
| --- | --- | --- |
| **ConvertKit (Kit)** | Built for founders/creators, simple visual automations, $0 up to 1K subs | Less "enterprise" feel; some clients prefer a brandier suite |
| **Mailchimp** | Familiar, generous free tier, lots of templates | UI overhead, tagging is fiddly |
| **HubSpot Marketing Hub** | If they already use HubSpot CRM, this folds in cleanly | Heavier, paid plan jumps quickly past free |

**Recommended:** ConvertKit/Kit if no existing CRM, HubSpot if they're already
on it.

**Implementation once the provider is picked:**

1. Add a `<NewsletterSignup />` component (email + role select + submit).
2. Submit to the provider's hosted form endpoint (no API key needed for any
   of the above), or proxy through a tiny Railway function if we want
   server-side validation.
3. Place in the footer, on `/news`, and on `/for-patients` (the "follow along"
   panel that's already there).

**Time once picked:** ~2 hours including QA.

---

## 3. A/B testing the briefing prompt card

**Why:** We added a scroll/exit-intent triggered briefing prompt on the home.
We don't know yet whether the conversion rate to `/investor-briefing` and
`/for-clinicians` justifies the interruption.

**The two cheapest options:**

| Tool | When it makes sense |
| --- | --- |
| **GA4 events + manual control** | If we just want to measure dismiss-rate vs. click-rate, no need for a full A/B tool. Add `gtag('event', 'briefing_prompt_shown' \| 'briefing_prompt_click' \| 'briefing_prompt_dismiss')` and read it in GA4. |
| **PostHog (free tier)** | If we want to A/B test variants (different copy, different trigger thresholds, different audiences) without writing infrastructure. Free up to 1M events/month. |

**Recommended:** start with GA4 events (free, already integrated) for two
weeks. If the data shows the prompt is performing but not great, add PostHog
for variant testing.

**Implementation for the GA4-events approach (~15 min):**

```tsx
// inside BriefingPromptCard.tsx, when the card shows:
window.gtag?.("event", "briefing_prompt_shown");

// in the dismiss handler:
window.gtag?.("event", "briefing_prompt_dismiss");

// in each link's onClick:
window.gtag?.("event", "briefing_prompt_click", { target: "clinicians" });
window.gtag?.("event", "briefing_prompt_click", { target: "investor_briefing" });
```

Then in GA4 → Reports → Engagement → Events, you can see the funnel.

---

## What lands without these decisions

The site keeps working. The new pages (`/technology`, `/applications`,
`/pediatric`, `/cardiovascular`) have the storytelling anchors. The cookie
consent banner is live. The SEO metadata on `/investors`, `/for-*`, and
`/blog` is improved. GA4 starts tracking the moment a measurement ID is set
AND the visitor accepts cookies.
