import { useState } from "react";
import { Link } from "react-router-dom";
import { PageShell } from "@/components/site/PageShell";
import { Seo } from "@/components/site/Seo";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ShieldCheck,
  FileText,
  Lock,
  BookOpen,
  Scale,
  TrendingUp,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const SITE = "https://annoviant.com";

const paths = [
  {
    icon: TrendingUp,
    title: "Investor overview",
    body: "Thesis, milestones, pipeline, and the IP and evidence footprint at a glance.",
    href: "/investors",
    cta: "Open investor view",
  },
  {
    icon: Lock,
    title: "Qualified briefing",
    body: "Diligence-grade materials, pre-clinical packages, regulatory strategy, financials. By invitation, under NDA.",
    href: "/investor-briefing",
    cta: "Enter the briefing",
  },
  {
    icon: ShieldCheck,
    title: "Regulatory & pipeline",
    body: "FDA HUD pathway for the pediatric program. Adult cardiovascular and soft-tissue platform expansion.",
    href: "/applications",
    cta: "See the pipeline",
  },
  {
    icon: Scale,
    title: "IP & publications",
    body: "Issued U.S. patents, pending PCT applications, and 14 peer-reviewed papers across seven years.",
    href: "/publications",
    cta: "Patents & papers",
  },
  {
    icon: BookOpen,
    title: "Pre-clinical evidence",
    body: "Comparative data versus legacy bioprosthetic tissue. ISO-standard study summaries.",
    href: "/clinical-evidence",
    cta: "Evidence hub",
  },
  {
    icon: FileText,
    title: "News & milestones",
    body: "Grants, press coverage, and regulatory milestones, on the record.",
    href: "/news",
    cta: "Read the press",
  },
];

const ForInvestors = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? paths : paths.slice(0, 4);

  return (
    <PageShell
      eyebrow="For investors & strategic partners"
      title={
        <>
          Where to <span className="text-gradient">start</span>
        </>
      }
      intro="If you're an investor, corporate development analyst, or strategic partner, here are the paths that answer your questions fastest. Pick where you want to start."
    >
      <Seo
        title="For Investors & Strategic Partners | TxGuard® Regenerative Tissue Platform"
        description="Annoviant develops TxGuard®, a regenerative tissue platform for pediatric and cardiovascular surgery. FDA HUD designation, $5.7M NIH funding, 4 U.S. patents, ISO 13485 manufacturing-ready. Investor overview and qualified-party briefing."
        canonical={`${SITE}/for-investors`}
      />

      <section className="py-20 md:py-28" aria-labelledby="paths-heading">
        <div className="container mx-auto">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
                In one paragraph
              </p>
              <h2 id="paths-heading" className="mb-5">
                FDA HUD designation. $5.7M NIH-funded. 4 U.S. patents. ISO 13485-ready.{" "}
                <span className="text-gradient">One platform, three tiers of pipeline.</span>
              </h2>
              <p className="text-muted-foreground medical-body">
                Annoviant develops TxGuard®, a regenerative tissue platform for pediatric and
                cardiovascular repair. The lead indication has its FDA pathway open. Adult
                cardiovascular and soft-tissue programs follow on the same platform.
              </p>
            </div>
          </Reveal>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {visible.map(({ icon: Icon, title, body, href, cta }, i) => (
              <Reveal as="li" key={title} delay={i * 60}>
                <Link
                  to={href}
                  className="group block h-full rounded-2xl border border-border bg-card p-6 hover:shadow-elegant transition-smooth"
                >
                  <span className="inline-flex h-10 w-10 rounded-lg gradient-primary items-center justify-center shadow-glow mb-4">
                    <Icon className="h-5 w-5 text-primary-foreground" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground medical-body mb-5">{body}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-smooth">
                    {cta} <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>

          {paths.length > 4 && (
            <div className="flex justify-center mt-8">
              <Button
                variant="outline"
                onClick={() => setShowAll(!showAll)}
                aria-expanded={showAll}
              >
                {showAll ? (
                  <>
                    Show fewer <ChevronUp className="ml-1 h-4 w-4" />
                  </>
                ) : (
                  <>
                    Show all {paths.length} paths <ChevronDown className="ml-1 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          )}

          <Reveal>
            <div className="mt-16 rounded-2xl border border-border bg-muted/40 p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-1">Talk to us directly</h3>
                <p className="text-sm text-muted-foreground">
                  We respond to qualified-party introductions within two business days.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="gradient-primary text-primary-foreground border-0">
                  <Link to="/contact?role=investor">Request an introduction</Link>
                </Button>
                <Button asChild variant="outline">
                  <a href="mailto:partnerships@annoviant.com">partnerships@annoviant.com</a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
};

export default ForInvestors;
