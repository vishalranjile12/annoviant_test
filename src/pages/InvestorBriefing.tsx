import { useState } from "react";
import { Link } from "react-router-dom";
import { PageShell } from "@/components/site/PageShell";
import { Seo } from "@/components/site/Seo";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import {
  Lock,
  ShieldCheck,
  FileText,
  FlaskConical,
  Landmark,
  Scale,
  Layers,
  Users,
  Award,
  Factory,
  TrendingUp,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";

const env = import.meta.env as Record<string, string | undefined>;
const EXPECTED_CODE = env.VITE_BRIEFING_CODE;
const DATAROOM_URL = env.VITE_INVESTOR_DATAROOM_URL;
const BRIEFING_EMAIL = "partnerships@annoviant.com";

// High-level categories shown before unlock — discloses nothing confidential.
const materials = [
  { icon: FileText, title: "Company overview & deck", body: "The investor narrative: positioning, problem, platform, and the ask." },
  { icon: FlaskConical, title: "Pre-clinical data package", body: "Study summaries run to ISO standards, available under NDA to qualified parties." },
  { icon: ShieldCheck, title: "Regulatory status & strategy", body: "FDA HUD designation, pathway, and the milestones ahead." },
  { icon: Scale, title: "IP & patent portfolio", body: "Issued U.S. patents and pending PCT applications covering the TxGuard® platform." },
  { icon: Layers, title: "Pipeline & platform expansion", body: "Program-by-program detail from pulmonary valved conduit to adjacent indications." },
  { icon: Landmark, title: "Financials & use of funds", body: "Round structure, allocation, and runway, shared with qualified investors." },
  { icon: Users, title: "Team, advisors & collaborators", body: "Leadership, scientific advisors, and the institutions behind the work." },
];

// Detailed thesis — shown only after unlock.
const thesis = [
  {
    icon: ShieldCheck,
    headline: "FDA milestone already in hand",
    body: "FDA Humanitarian Use Device designation, granted in 2020, for the pediatric Pulmonary Valved Graft. A regulatory pathway most regenerative-medicine platforms are still working toward.",
  },
  {
    icon: Award,
    headline: "$5.7M in NIH funding",
    body: "Four NIH grants to date, including a $2.99M award in 2024. Public funding represents independent scientific review.",
  },
  {
    icon: Layers,
    headline: "One platform, multiple indications",
    body: "Pediatric and adult heart valves, vascular grafts, and soft-tissue repair, all from the same stabilization platform.",
  },
  {
    icon: FlaskConical,
    headline: "14 peer-reviewed papers",
    body: "Plus 4 issued U.S. patents and 2 pending PCT applications covering the TxGuard® platform. The science is published and documented.",
  },
  {
    icon: Factory,
    headline: "ISO 13485 manufacturing-ready",
    body: "Quality system designed to scale. A milestone many regenerative-medicine platforms never reach.",
  },
  {
    icon: TrendingUp,
    headline: "$8B+ U.S. market by 2035",
    body: "A 7 to 9 percent annual growth space where Edwards, Medtronic, Abbott, Boston Scientific, and Johnson & Johnson all operate today.",
  },
];

const fullMilestones = [
  { date: "2018", label: "Annoviant founded", body: "Spun out of Clemson University research. Platform stabilization chemistry developed." },
  { date: "2020", label: "FDA HUD designation", body: "The pediatric pulmonary valved graft receives Humanitarian Use Device designation." },
  { date: "2021", label: "$1.85M SBIR Phase II", body: "First major federal funding round accelerating the pre-clinical program." },
  { date: "2024", label: "$2.99M NIH grant", body: "The largest single award to date. Supports the pediatric pulmonary valved conduit pathway." },
  { date: "Next", label: "IND-enabling studies", body: "The path to first-in-human studies for the pediatric program. Adjacent indications follow on the same platform." },
];

const pipelineDetail = [
  {
    tier: "Tier 1 · Lead",
    name: "Pediatric Pulmonary Valved Conduit",
    status: "FDA HUD · IND-enabling",
    body: "The lead indication and regulatory anchor. A child's heart grows. Today's implants don't. TxGuard® is designed to be remodeled into living tissue that grows with the patient.",
  },
  {
    tier: "Tier 2 · Adjacent",
    name: "Adult Cardiovascular & Vascular Grafts",
    status: "Pre-clinical",
    body: "Adult heart-valve replacement and vascular bypass grafts. Same platform chemistry, larger addressable market.",
  },
  {
    tier: "Tier 3 · Platform expansion",
    name: "Soft-Tissue Applications",
    status: "Exploratory",
    body: "Urology, gastrointestinal, wound and soft-tissue repair. Additional indications the same science can support.",
  },
];

const InvestorBriefing = () => {
  const [code, setCode] = useState("");
  const [granted, setGranted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (EXPECTED_CODE && code.trim() === EXPECTED_CODE) {
      setGranted(true);
      return;
    }
    setError(
      EXPECTED_CODE
        ? "That invitation code wasn't recognized. Check the invite we sent, or request access below."
        : "Briefing access isn't open yet. Request an invitation below and we'll be in touch."
    );
  };

  const ld = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Investor Briefing | Annoviant",
    description:
      "An invite-only briefing room for qualified investors and strategic partners evaluating Annoviant's TxGuard® regenerative tissue platform.",
    isAccessibleForFree: false,
  };

  return (
    <PageShell
      eyebrow="Investor Briefing · By invitation"
      title={
        <>
          The Annoviant <span className="text-gradient">investor &amp; partner</span> briefing
        </>
      }
      intro={
        granted
          ? "Access granted. The thesis, detailed milestones, pipeline status, and market positioning are below. Pre-clinical packages and financials are in the data room linked at the bottom."
          : "A private briefing room for qualified investors and strategic partners. Diligence materials, pipeline detail, market positioning, and the technical data room are shared by invitation, not published here."
      }
    >
      <Seo
        title="Investor Briefing | Annoviant"
        description="Invite-only briefing room for qualified investors and strategic partners evaluating Annoviant's TxGuard® regenerative tissue platform."
        jsonLd={ld}
      />

      {/* PRE-UNLOCK: What's inside + code form */}
      {!granted && (
        <>
          {/* What's inside */}
          <section className="py-16 md:py-24" aria-labelledby="materials-heading">
            <div className="container mx-auto">
              <div className="max-w-2xl mb-12">
                <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
                  What&rsquo;s inside
                </p>
                <h2 id="materials-heading" className="mb-4">
                  The diligence package, at a glance
                </h2>
                <p className="text-muted-foreground medical-body">
                  We keep the detail behind an invitation so it reaches the right audience. Here is
                  the shape of what qualified investors and strategic partners receive once access
                  is granted.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
                {materials.map(({ icon: Icon, title, body }) => (
                  <article key={title} className="bg-background px-6 py-7">
                    <Icon className="h-5 w-5 text-primary mb-3" aria-hidden />
                    <h3 className="text-base md:text-lg mb-1.5">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Access gate */}
          <section className="py-16 md:py-24 gradient-deep text-white relative overflow-hidden" aria-labelledby="access-heading">
            <div aria-hidden className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-secondary/25 blur-[160px]" />
            <div aria-hidden className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-primary/40 blur-[140px]" />

            <div className="container mx-auto relative">
              <div className="max-w-xl mx-auto">
                <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="h-10 w-10 rounded-xl grid place-items-center gradient-primary text-primary-foreground shadow-glow">
                      <Lock className="h-5 w-5" />
                    </span>
                    <h2 id="access-heading" className="text-white">Enter your invitation code</h2>
                  </div>
                  <form onSubmit={onSubmit} className="flex flex-col gap-3">
                    <label htmlFor="briefing-code" className="sr-only">Invitation code</label>
                    <input
                      id="briefing-code"
                      type="text"
                      autoComplete="off"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      placeholder="Invitation code"
                      className="w-full rounded-md border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-secondary min-h-[44px]"
                    />
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-md gradient-primary text-primary-foreground px-6 py-3 text-sm font-semibold shadow-glow min-h-[44px]"
                    >
                      Unlock the briefing <ArrowRight className="h-4 w-4" />
                    </button>
                  </form>
                  {error && (
                    <p className="text-sm text-empathy mt-3" role="alert">{error}</p>
                  )}

                  <div className="mt-8 pt-6 border-t border-white/10 text-center">
                    <p className="text-sm text-white/70 mb-3">Don&rsquo;t have an invitation?</p>
                    <Link
                      to="/contact?role=investor"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-white transition-smooth"
                    >
                      Request access to the briefing <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>

                <p className="text-xs text-white/50 mt-6 text-center max-w-md mx-auto">
                  Access is limited to qualified investors and strategic partners. Materials are
                  confidential and shared under NDA. TxGuard® is investigational.
                </p>
              </div>
            </div>
          </section>
        </>
      )}

      {/* POST-UNLOCK: Full diligence content rendered in-page */}
      {granted && (
        <>
          {/* Welcome strip */}
          <section className="py-10 bg-success/5 border-y border-success/20" aria-label="Access confirmation">
            <div className="container mx-auto flex flex-wrap items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-success" aria-hidden />
              <p className="text-sm text-foreground">
                You&rsquo;re in. The full diligence overview is below. The technical data room link is at the bottom of the page.
              </p>
            </div>
          </section>

          {/* Investment thesis */}
          <section className="py-20 md:py-28" aria-labelledby="thesis-heading">
            <div className="container mx-auto">
              <Reveal>
                <div className="max-w-2xl mb-12">
                  <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
                    The thesis
                  </p>
                  <h2 id="thesis-heading" className="mb-5">
                    Six things that <span className="text-gradient">ground the opportunity</span>
                  </h2>
                  <p className="text-muted-foreground medical-body">
                    Most cardiovascular implants rely on chemistry developed fifty years ago.
                    TxGuard® is designed to be remodeled into the patient&rsquo;s own tissue.
                    Regulatory, intellectual property, and manufacturing foundations are in place.
                  </p>
                </div>
              </Reveal>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {thesis.map(({ icon: Icon, headline, body }, i) => (
                  <Reveal as="li" key={headline} delay={i * 60}>
                    <article className="h-full rounded-2xl border border-border bg-card p-6">
                      <span className="inline-flex h-10 w-10 rounded-lg gradient-primary items-center justify-center shadow-glow mb-4">
                        <Icon className="h-5 w-5 text-primary-foreground" aria-hidden />
                      </span>
                      <h3 className="text-lg font-semibold mb-2">{headline}</h3>
                      <p className="text-sm text-muted-foreground medical-body">{body}</p>
                    </article>
                  </Reveal>
                ))}
              </ul>
            </div>
          </section>

          {/* Detailed milestones */}
          <section className="py-20 md:py-28 bg-muted/40" aria-labelledby="milestones-heading">
            <div className="container mx-auto">
              <Reveal>
                <div className="max-w-2xl mb-12">
                  <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
                    Milestones
                  </p>
                  <h2 id="milestones-heading" className="mb-5">
                    The full <span className="text-gradient">record</span>
                  </h2>
                </div>
              </Reveal>
              <ol className="space-y-6 max-w-3xl">
                {fullMilestones.map((m, i) => (
                  <Reveal as="li" key={m.label} delay={i * 60}>
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 py-5 border-t border-border first:border-t-0">
                      <div className="sm:col-span-2 text-2xl font-bold text-primary tabular-nums">
                        {m.date}
                      </div>
                      <div className="sm:col-span-10">
                        <h3 className="text-base font-semibold mb-1">{m.label}</h3>
                        <p className="text-sm text-muted-foreground medical-body">{m.body}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>
          </section>

          {/* Pipeline detail */}
          <section className="py-20 md:py-28" aria-labelledby="pipeline-heading">
            <div className="container mx-auto">
              <Reveal>
                <div className="max-w-2xl mb-12">
                  <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
                    Pipeline
                  </p>
                  <h2 id="pipeline-heading" className="mb-5">
                    Program <span className="text-gradient">status</span>
                  </h2>
                </div>
              </Reveal>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {pipelineDetail.map((p, i) => (
                  <Reveal as="li" key={p.name} delay={i * 60}>
                    <article className="h-full rounded-2xl border border-border bg-card p-6">
                      <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-3">
                        {p.tier}
                      </p>
                      <h3 className="text-lg font-semibold mb-2">{p.name}</h3>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary mb-3">
                        {p.status}
                      </span>
                      <p className="text-sm text-muted-foreground medical-body">{p.body}</p>
                    </article>
                  </Reveal>
                ))}
              </ul>
            </div>
          </section>

          {/* Data room access */}
          <section className="py-20 md:py-28 gradient-deep text-white relative overflow-hidden" aria-labelledby="dataroom-heading">
            <div aria-hidden className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-secondary/25 blur-[160px]" />
            <div className="container mx-auto relative max-w-3xl">
              <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur p-8 md:p-10 text-center">
                <ShieldCheck className="h-8 w-8 text-secondary mx-auto mb-4" aria-hidden />
                <h2 id="dataroom-heading" className="text-white mb-3">The technical data room</h2>
                <p className="text-white/80 medical-body mb-8 max-w-xl mx-auto">
                  Pre-clinical study packages, financials, use of funds, IP filings, and the full
                  team dossier live in the data room. Open it below, or reply to your invitation
                  email and we&rsquo;ll walk you through it.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  {DATAROOM_URL ? (
                    <a
                      href={DATAROOM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-md gradient-primary text-primary-foreground px-6 py-3 text-sm font-semibold shadow-glow min-h-[44px]"
                    >
                      Open the data room <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : (
                    <a
                      href={`mailto:${BRIEFING_EMAIL}?subject=Investor%20briefing%20access`}
                      className="inline-flex items-center justify-center gap-2 rounded-md gradient-primary text-primary-foreground px-6 py-3 text-sm font-semibold shadow-glow min-h-[44px]"
                    >
                      Email us for the materials <ArrowRight className="h-4 w-4" />
                    </a>
                  )}
                  <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent">
                    <a href={`mailto:${BRIEFING_EMAIL}`}>{BRIEFING_EMAIL}</a>
                  </Button>
                </div>
                <p className="text-xs text-white/50 mt-8">
                  Materials are confidential and shared under NDA. TxGuard® is investigational.
                </p>
              </div>
            </div>
          </section>
        </>
      )}
    </PageShell>
  );
};

export default InvestorBriefing;
