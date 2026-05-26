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
  Calendar,
  Lock,
  ExternalLink,
} from "lucide-react";
import { articles } from "@/data/news";

const SITE = "https://annoviant.com";

const publicCredentials = [
  {
    icon: ShieldCheck,
    metric: "FDA HUD",
    label: "Humanitarian Use Device designation, 2020 (pediatric pulmonary valved graft)",
  },
  {
    icon: Award,
    metric: "$5.7M",
    label: "NIH grants to date (most recent: $2.99M, 2024)",
  },
  {
    icon: Scale,
    metric: "4 + 2",
    label: "Issued U.S. patents and pending PCT applications",
  },
  {
    icon: Factory,
    metric: "ISO 13485",
    label: "Manufacturing readiness designed to scale",
  },
  {
    icon: FlaskConical,
    metric: "14",
    label: "Peer-reviewed papers across seven years",
  },
];

const pipelineOverview = [
  {
    name: "Pediatric Pulmonary Valved Conduit",
    tier: "Lead",
  },
  {
    name: "Adult Cardiovascular & Vascular Grafts",
    tier: "Adjacent",
  },
  {
    name: "Soft-Tissue Applications",
    tier: "Platform expansion",
  },
];

const publicMilestones = [
  { date: "2018", label: "Annoviant founded" },
  { date: "2020", label: "FDA HUD designation" },
  { date: "2024", label: "$2.99M NIH grant awarded" },
];

const Investors = () => {
  const recentPress = articles.slice(0, 3);

  const ld = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Investors & Strategic Partners | Annoviant",
      description:
        "Public overview for investors and strategic partners. FDA HUD designation, $5.7M in NIH funding, 4 U.S. patents, ISO 13485 manufacturing readiness. Diligence materials available by invitation.",
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
      intro="Annoviant develops TxGuard®, a regenerative tissue platform for pediatric and cardiovascular repair. This page summarizes the publicly disclosable credentials. Detailed diligence materials are shared by invitation."
    >
      <Seo
        title="Investors | Annoviant TxGuard® Regenerative Tissue Platform"
        description="Public investor overview for Annoviant. FDA Humanitarian Use Device designation, $5.7M cumulative NIH funding, 4 issued U.S. patents and 2 pending PCT applications, ISO 13485 manufacturing readiness, 14 peer-reviewed papers. Detailed diligence materials available by invitation."
        canonical={`${SITE}/investors`}
        jsonLd={ld}
      />

      {/* Public credentials */}
      <section className="py-20 md:py-28" aria-labelledby="credentials-heading">
        <div className="container mx-auto">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
                Public record
              </p>
              <h2 id="credentials-heading" className="mb-5">
                Where the work <span className="text-gradient">stands today</span>
              </h2>
              <p className="text-muted-foreground medical-body">
                These are the milestones we can talk about in public. The strategic context,
                pre-clinical detail, financials, and use of funds sit behind an invitation in the
                briefing room.
              </p>
            </div>
          </Reveal>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {publicCredentials.map(({ icon: Icon, metric, label }, i) => (
              <Reveal as="li" key={metric} delay={i * 50}>
                <article className="h-full rounded-2xl border border-border bg-card p-5">
                  <span className="inline-flex h-9 w-9 rounded-md bg-primary/10 items-center justify-center mb-4">
                    <Icon className="h-4 w-4 text-primary" aria-hidden />
                  </span>
                  <div className="text-xl md:text-2xl font-bold text-foreground tabular-nums leading-tight mb-2">
                    {metric}
                  </div>
                  <p className="text-xs text-muted-foreground leading-snug">{label}</p>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Pipeline overview, names only */}
      <section className="py-20 md:py-28 bg-muted/40" aria-labelledby="pipeline-heading">
        <div className="container mx-auto">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
                Pipeline
              </p>
              <h2 id="pipeline-heading" className="mb-5">
                One platform, <span className="text-gradient">three tiers</span>
              </h2>
              <p className="text-muted-foreground medical-body">
                Program-by-program detail, status, and timelines are part of the qualified-investor
                briefing.
              </p>
            </div>
          </Reveal>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pipelineOverview.map((p, i) => (
              <Reveal as="li" key={p.name} delay={i * 60}>
                <article className="h-full rounded-2xl border border-border bg-card p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-3">
                    {p.tier}
                  </p>
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Milestones, dates + labels only */}
      <section className="py-20 md:py-28" aria-labelledby="milestones-heading">
        <div className="container mx-auto">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
                Key milestones
              </p>
              <h2 id="milestones-heading" className="mb-5">
                A record you can <span className="text-gradient">verify</span>
              </h2>
            </div>
          </Reveal>
          <ol className="space-y-5 max-w-3xl">
            {publicMilestones.map((m, i) => (
              <Reveal as="li" key={m.label} delay={i * 60}>
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 py-4 border-t border-border first:border-t-0">
                  <div className="sm:col-span-2 text-2xl font-bold text-primary tabular-nums">
                    {m.date}
                  </div>
                  <div className="sm:col-span-10">
                    <h3 className="text-base font-semibold">{m.label}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Recent press */}
      {recentPress.length > 0 && (
        <section className="py-20 md:py-28 bg-muted/40" aria-labelledby="press-heading">
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

      {/* Briefing CTA — primary path off this page */}
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
                  By invitation
                </p>
                <h2 id="briefing-cta-heading" className="text-2xl md:text-3xl font-semibold text-white mb-3">
                  The qualified-investor briefing
                </h2>
              </div>
            </div>
            <p className="text-white/80 medical-body mb-8 max-w-2xl">
              The full investment thesis, detailed milestones, program-by-program pipeline status,
              market positioning, pre-clinical study summaries, IP detail, and financials sit
              behind an invitation. Request access below and we&rsquo;ll respond within two
              business days.
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
