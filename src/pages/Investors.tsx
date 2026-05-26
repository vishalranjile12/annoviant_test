import { useState } from "react";
import { Link } from "react-router-dom";
import { PageShell } from "@/components/site/PageShell";
import { Seo } from "@/components/site/Seo";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ShieldCheck,
  Award,
  FlaskConical,
  Scale,
  Factory,
  Layers,
  TrendingUp,
  Lock,
  Calendar,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { articles } from "@/data/news";

const SITE = "https://annoviant.com";

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

const milestones = [
  { date: "2018", label: "Annoviant founded", body: "Spun out of Clemson University research. Platform stabilization chemistry developed." },
  { date: "2020", label: "FDA HUD designation", body: "The pediatric pulmonary valved graft receives Humanitarian Use Device designation." },
  { date: "2024", label: "$2.99M NIH grant", body: "The largest single award to date. Supports the pediatric pulmonary valved conduit pathway." },
  { date: "2022", label: "$1.85M SBIR Phase II", body: "Federal funding accelerates the pre-clinical program." },
  { date: "Next", label: "IND-enabling studies", body: "The path to first-in-human studies for the pediatric program. Adjacent indications follow." },
];

const pipeline = [
  {
    tier: "Tier 1 · Lead",
    name: "Pediatric Pulmonary Valved Conduit",
    status: "FDA HUD · IND-enabling",
    body: "The lead indication and regulatory anchor. A child's heart grows. Today's implants don't. TxGuard® is designed to be remodeled into living tissue that grows with the patient.",
    href: "/solutions/pediatric",
  },
  {
    tier: "Tier 2 · Adjacent",
    name: "Adult Cardiovascular & Vascular Grafts",
    status: "Pre-clinical",
    body: "Adult heart-valve replacement and vascular bypass grafts. Same platform chemistry, larger addressable market.",
    href: "/solutions/cardiovascular",
  },
  {
    tier: "Tier 3 · Platform expansion",
    name: "Soft-Tissue Applications",
    status: "Exploratory",
    body: "Urology, gastrointestinal, wound and soft-tissue repair. Additional indications the same science can support.",
    href: "/applications",
  },
];

const Investors = () => {
  const [showAllThesis, setShowAllThesis] = useState(false);
  const [showFullHistory, setShowFullHistory] = useState(false);
  const recentPress = articles.slice(0, 3);

  const visibleThesis = showAllThesis ? thesis : thesis.slice(0, 3);
  const visibleMilestones = showFullHistory ? milestones : milestones.slice(0, 3);

  const ld = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Investors & Strategic Partners | Annoviant",
      description:
        "Annoviant develops TxGuard®, a regenerative tissue platform for pediatric and cardiovascular repair. FDA HUD designation, $5.7M in NIH grants, 4 U.S. patents, ISO 13485 manufacturing readiness.",
      url: `${SITE}/investors`,
    },
  ];

  return (
    <PageShell
      eyebrow="Investors & Strategic Partners"
      title={
        <>
          A regenerative tissue platform <span className="text-gradient">built for cardiovascular surgery</span>
        </>
      }
      intro="Annoviant develops TxGuard®, a regenerative tissue platform for pediatric and cardiovascular repair. The clinical need is well-documented, the regulatory pathway is open, the science is peer-reviewed, and manufacturing is built to scale."
    >
      <Seo
        title="Investors & Strategic Partners | Annoviant"
        description="Annoviant TxGuard® regenerative tissue platform. FDA HUD designation, $5.7M NIH funding, 4 U.S. patents, ISO 13485 manufacturing-ready. Investor overview, pipeline, milestones."
        canonical={`${SITE}/investors`}
        jsonLd={ld}
      />

      {/* Investment thesis */}
      <section className="py-20 md:py-28" aria-labelledby="thesis-heading">
        <div className="container mx-auto">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
                Why now
              </p>
              <h2 id="thesis-heading" className="mb-5">
                What grounds the <span className="text-gradient">opportunity</span>
              </h2>
              <p className="text-muted-foreground medical-body">
                Most cardiovascular implants rely on chemistry developed fifty years ago. TxGuard®
                is designed to be remodeled into the patient&rsquo;s own tissue. The regulatory,
                intellectual property, and manufacturing foundation is in place.
              </p>
            </div>
          </Reveal>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {visibleThesis.map(({ icon: Icon, headline, body }, i) => (
              <Reveal as="li" key={headline} delay={i * 60}>
                <article className="h-full rounded-2xl border border-border bg-card p-6 hover:shadow-elegant transition-smooth">
                  <span className="inline-flex h-10 w-10 rounded-lg gradient-primary items-center justify-center shadow-glow mb-4">
                    <Icon className="h-5 w-5 text-primary-foreground" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold mb-2">{headline}</h3>
                  <p className="text-sm text-muted-foreground medical-body">{body}</p>
                </article>
              </Reveal>
            ))}
          </ul>

          {thesis.length > 3 && (
            <div className="flex justify-center mt-8">
              <Button
                variant="outline"
                onClick={() => setShowAllThesis(!showAllThesis)}
                aria-expanded={showAllThesis}
              >
                {showAllThesis ? (
                  <>
                    Show fewer <ChevronUp className="ml-1 h-4 w-4" />
                  </>
                ) : (
                  <>
                    Show all {thesis.length} reasons <ChevronDown className="ml-1 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Milestones timeline */}
      <section className="py-20 md:py-28 bg-muted/40" aria-labelledby="milestones-heading">
        <div className="container mx-auto">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
                Milestones
              </p>
              <h2 id="milestones-heading" className="mb-5">
                Where we&rsquo;ve <span className="text-gradient">been</span>
              </h2>
            </div>
          </Reveal>
          <ol className="space-y-6 max-w-3xl">
            {visibleMilestones.map((m, i) => (
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
          {milestones.length > 3 && (
            <div className="flex justify-center mt-8 max-w-3xl">
              <Button
                variant="outline"
                onClick={() => setShowFullHistory(!showFullHistory)}
                aria-expanded={showFullHistory}
              >
                {showFullHistory ? (
                  <>
                    Show recent only <ChevronUp className="ml-1 h-4 w-4" />
                  </>
                ) : (
                  <>
                    Show full history <ChevronDown className="ml-1 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Pipeline */}
      <section className="py-20 md:py-28" aria-labelledby="pipeline-heading">
        <div className="container mx-auto">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
                Pipeline
              </p>
              <h2 id="pipeline-heading" className="mb-5">
                One platform, <span className="text-gradient">three tiers</span>
              </h2>
            </div>
          </Reveal>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pipeline.map((p, i) => (
              <Reveal as="li" key={p.name} delay={i * 60}>
                <Link
                  to={p.href}
                  className="group block h-full rounded-2xl border border-border bg-card p-6 hover:shadow-elegant transition-smooth"
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-3">
                    {p.tier}
                  </p>
                  <h3 className="text-lg font-semibold mb-2">{p.name}</h3>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary mb-3">
                    {p.status}
                  </span>
                  <p className="text-sm text-muted-foreground medical-body mb-4">{p.body}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-smooth">
                    Explore <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* IP & evidence */}
      <section className="py-20 md:py-28 bg-muted/40" aria-labelledby="ip-heading">
        <div className="container mx-auto">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
                IP &amp; evidence
              </p>
              <h2 id="ip-heading" className="mb-5">
                Published, patented, <span className="text-gradient">on file</span>
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold mb-3">Intellectual property</h3>
              <ul className="space-y-2 text-sm text-muted-foreground medical-body">
                <li>· 4 issued U.S. patents on the TxGuard® stabilization platform</li>
                <li>· 2 pending PCT applications for adjacent indications</li>
                <li>· Full patent portfolio available under NDA in the qualified-party briefing</li>
              </ul>
              <Button asChild variant="outline" className="mt-5">
                <Link to="/publications">
                  Patents &amp; publications <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </article>

            <article className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold mb-3">Pre-clinical evidence</h3>
              <ul className="space-y-2 text-sm text-muted-foreground medical-body">
                <li>· 14 peer-reviewed papers across seven years</li>
                <li>· Comparative data versus legacy bioprosthetic tissue</li>
                <li>· ISO-standard study summaries available to qualified parties</li>
              </ul>
              <Button asChild variant="outline" className="mt-5">
                <Link to="/clinical-evidence">
                  Clinical evidence hub <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </article>
          </div>
        </div>
      </section>

      {/* Recent press */}
      {recentPress.length > 0 && (
        <section className="py-20 md:py-28" aria-labelledby="press-heading">
          <div className="container mx-auto">
            <Reveal>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
                <div className="max-w-2xl">
                  <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
                    Press
                  </p>
                  <h2 id="press-heading" className="mb-2">
                    Recent <span className="text-gradient">coverage</span>
                  </h2>
                </div>
                <Link
                  to="/news"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-smooth"
                >
                  All news <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {recentPress.map((a, i) => (
                <Reveal as="li" key={a.slug} delay={i * 60}>
                  <Link
                    to={`/news/${a.slug}`}
                    className="group block h-full rounded-2xl border border-border bg-card p-6 hover:shadow-elegant transition-smooth"
                  >
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{a.date}</span>
                      <span className="text-secondary">·</span>
                      <span>{a.category}</span>
                    </div>
                    <h3 className="text-base font-semibold mb-2 group-hover:text-primary transition-smooth">
                      {a.title}
                    </h3>
                    <p className="text-sm text-muted-foreground medical-body line-clamp-3">
                      {a.excerpt}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Briefing CTA */}
      <section className="py-20 md:py-28 gradient-deep text-white relative overflow-hidden" aria-labelledby="briefing-cta-heading">
        <div aria-hidden className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-secondary/20 blur-[140px]" />
        <div aria-hidden className="absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-primary/30 blur-[140px]" />
        <div className="container mx-auto relative max-w-4xl">
          <div className="rounded-3xl border border-white/15 bg-white/5 backdrop-blur p-8 md:p-12">
            <div className="flex items-start gap-4 mb-5">
              <span className="inline-flex h-12 w-12 rounded-xl bg-secondary/20 items-center justify-center">
                <Lock className="h-5 w-5 text-secondary" aria-hidden />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-2">
                  Diligence materials
                </p>
                <h2 id="briefing-cta-heading" className="text-2xl md:text-3xl font-semibold text-white mb-3">
                  The qualified-investor briefing
                </h2>
              </div>
            </div>
            <p className="text-white/80 medical-body mb-8 max-w-2xl">
              Pre-clinical study packages, regulatory strategy, IP detail, financials, and the data
              room sit behind NDA. Briefing access is by invitation. Request one below and we&rsquo;ll
              respond within two business days.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="gradient-primary text-primary-foreground border-0">
                <Link to="/investor-briefing">
                  Enter the briefing <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent">
                <Link to="/contact?role=investor">
                  Request an invitation
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-white hover:bg-white/10 hover:text-white">
                <a href="mailto:partnerships@annoviant.com">
                  partnerships@annoviant.com <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default Investors;
