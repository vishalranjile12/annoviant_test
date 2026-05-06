import { Link } from "react-router-dom";
import { PageShell } from "@/components/site/PageShell";
import { Seo } from "@/components/site/Seo";
import { Button } from "@/components/ui/button";
import { StorytellerTable, type StorytellerColumn, type StorytellerRow } from "@/components/site/StorytellerTable";
import { Reveal } from "@/components/site/Reveal";
import { CountUp } from "@/components/site/CountUp";
import { Award, FileText, Microscope, ShieldCheck, FlaskConical, ArrowRight, Check, Beaker, GitBranch, Calendar } from "lucide-react";

const columns: StorytellerColumn[] = [
  { key: "tx", label: "TxGuard®", sublabel: "Annoviant", highlight: true },
  { key: "legacy", label: "Legacy bioprosthetic", sublabel: "Glutaraldehyde-treated" },
  { key: "synergraft", label: "SynerGraft", sublabel: "Frozen allograft" },
  { key: "ecm", label: "ECM", sublabel: "Porcine SIS-ECM" },
  { key: "etr", label: "ETR", sublabel: "Biodegradable polymer" },
];

const rows: StorytellerRow[] = [
  {
    attribute: "Resistance to calcification",
    story: "Calcification is the dominant failure mode of bioprosthetic valves. TxGuard® is engineered to mitigate it; legacy glutaraldehyde fixation is reported to drive it.",
    values: {
      tx: { verdict: "strong", note: "No calcification observed" },
      legacy: { verdict: "weak", note: "Vulnerable" },
      synergraft: { verdict: "weak", note: "Limited" },
      ecm: { verdict: "varies", note: "Variable" },
      etr: { verdict: "varies", note: "Variable" },
    },
  },
  {
    attribute: "In-situ remodeling (living tissue)",
    story: "The implant becomes living, host-derived tissue rather than remaining a permanent foreign material, characterized in pre-clinical models for TxGuard®.",
    values: {
      tx: { verdict: "strong", note: "Confirmed in animal models" },
      legacy: { verdict: "weak", note: "None" },
      synergraft: { verdict: "varies" },
      ecm: { verdict: "varies" },
      etr: { verdict: "varies" },
    },
  },
  {
    attribute: "Pediatric growth potential",
    story: "Children outgrow fixed implants. A regenerative scaffold is designed to support somatic adaptation, observed pre-clinically with TxGuard®.",
    values: {
      tx: { verdict: "strong", note: "Designed for growth" },
      legacy: { verdict: "weak", note: "None" },
      synergraft: { verdict: "varies" },
      ecm: { verdict: "varies", note: "Limited" },
      etr: { verdict: "varies" },
    },
  },
  {
    attribute: "Risk of repeat surgery",
    story: "Re-intervention is the costliest, riskiest piece of valve replacement over a patient's lifetime, the design goal is to reduce its frequency.",
    values: {
      tx: { verdict: "ok", note: "Engineered to reduce" },
      legacy: { verdict: "weak", note: "Frequently required" },
      synergraft: { verdict: "varies" },
      ecm: { verdict: "varies" },
      etr: { verdict: "varies" },
    },
  },
  {
    attribute: "Manufacturing scalability",
    story: "A platform must be reproducible at scale, not just in the lab. TxGuard® is manufactured in an ISO 13485-certified facility, a rare milestone at this stage.",
    values: {
      tx: { verdict: "strong", note: "ISO 13485" },
      legacy: { verdict: "strong", note: "Mature" },
      synergraft: { verdict: "varies", note: "Donor-limited" },
      ecm: { verdict: "ok", note: "Established" },
      etr: { verdict: "ok", note: "Polymer-based" },
    },
  },
];

const milestones = [
  { icon: Award, value: "$5.7M", label: "NIH grant funding awarded to advance the platform" },
  { icon: ShieldCheck, value: "FDA HUD", label: "Humanitarian Use Device designation (2020) for the PVG" },
  { icon: FileText, value: "14", label: "Peer-reviewed scientific publications" },
  { icon: FlaskConical, value: "ISO 5840 / 10993", label: "Pre-clinical guidance followed in animal studies" },
  { icon: Microscope, value: "GLP", label: "Independent studies at reputable institutions" },
  { icon: Beaker, value: "ISO 13485", label: "Manufacturing readiness at a certified facility" },
  { icon: GitBranch, value: "4", label: "Issued U.S. patents on the TxGuard® platform" },
  { icon: FileText, value: "2", label: "U.S. and PCT applications currently pending" },
  { icon: Calendar, value: "25+", label: "Years of regenerative-tissue research behind the science" },
];

const ClinicalEvidencePage = () => {
  const ld = {
    "@context": "https://schema.org",
    "@type": "MedicalScholarlyArticle",
    name: "TxGuard® Clinical Evidence Hub",
    description: "Pre-clinical evidence, NIH-funded research, comparative analysis, and IP foundation for the TxGuard® regenerative tissue platform.",
  };

  return (
    <PageShell
      eyebrow="Clinical Evidence"
      title={<>The <span className="text-gradient">science</span>, the data, and how we stack up</>}
      intro="Regenerative medicine attracts a lot of bold claims. We'd rather show our work, NIH-funded research, peer-reviewed papers, ISO-standard pre-clinical studies, and an honest comparison against the technologies we're trying to replace."
      heroImage="/hero/microscope.jpg"
    >
      <Seo
        title="Clinical Evidence, TxGuard® Pre-clinical Data | Annoviant"
        description="Pre-clinical data, peer-reviewed publications, NIH grants, and comparative analysis for the TxGuard® regenerative tissue platform vs. legacy bioprosthetics."
        jsonLd={ld}
      />

      {/* 3x3 evidence table, no card chrome, just shared dividing rules */}
      <section className="py-12 md:py-16" aria-labelledby="evidence-table-heading">
        <div className="container mx-auto">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-2">
              The receipts at a glance
            </p>
            <h2 id="evidence-table-heading" className="mb-8 max-w-3xl text-xl md:text-2xl">
              Nine numbers that tell the story
            </h2>
          </Reveal>

          {/* Clean inner-only separators via a 1px-gap on a colored grid container. The
              gap shows the parent's bg-border color where children don't cover it,
              giving us perfect dividers between every cell without per-cell border math. */}
          <div
            role="table"
            aria-labelledby="evidence-table-heading"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border"
          >
            {milestones.map(({ icon: Icon, value, label }, i) => (
              <Reveal as="div" key={label} delay={i * 40} role="cell">
                <div className="group relative h-full px-5 md:px-6 py-5 md:py-6 bg-background hover:bg-muted/40 transition-smooth">
                  <Icon className="h-4 w-4 text-primary mb-3" aria-hidden />
                  <CountUp
                    value={value}
                    className="block text-xl md:text-2xl font-bold text-foreground mb-1.5 tabular-nums"
                  />
                  <p className="text-xs text-muted-foreground leading-snug">{label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/40">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
              How we stack up
            </p>
            <h2 className="mb-4">TxGuard® vs. the alternatives</h2>
            <p className="text-muted-foreground medical-body">
              An honest, side-by-side look at how our platform compares to glutaraldehyde-treated
              bioprosthetics and other emerging regenerative approaches. The &ldquo;why it
              matters&rdquo; column is the part most spec sheets leave out, so we put it first.
              Information about other technologies comes from their public reports.
            </p>
          </div>

          <StorytellerTable
            caption="Comparison of TxGuard against legacy and emerging tissue technologies"
            columns={columns}
            rows={rows}
          />

          <p className="text-xs text-muted-foreground mt-5 max-w-3xl">
            Animal data only takes us so far, human results may differ. The comparator entries
            reflect what&rsquo;s been published publicly, read through our team&rsquo;s lens.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
              How we tested it
            </p>
            <h2 className="mb-5">An aggressive sheep model, run by the book</h2>
            <p className="text-muted-foreground medical-body mb-5">
              We followed ISO 5840 (the standard for cardiovascular heart-valve implants) and
              ISO 10993 (biological evaluation of medical devices). Independent labs at reputable
              institutions ran the work, in N=3, N=6, and N=10 GLP cohorts that pushed the
              platform across long durations.
            </p>
            <p className="text-muted-foreground medical-body mb-8">
              Across those studies, the scaffold resisted calcification, remodeled in place into
              host tissue, and held up mechanically. Animal data, of course, is animal data,
              human results may differ.
            </p>
            <Button asChild size="lg" className="gradient-primary border-0">
              <Link to="/publications">Browse the publications <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
            <h3 className="mb-5">What we&rsquo;ve seen so far</h3>
            <ul className="space-y-4">
              {[
                "No calcification observed across study durations",
                "Remodeling consistent with the body laying down its own tissue",
                "Mechanical performance, tensile and elastic, held up over time",
                "Nothing inconsistent with ISO 10993 biocompatibility criteria",
              ].map((b) => (
                <li key={b} className="flex gap-3">
                  <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{b}</span>
                </li>
              ))}
            </ul>
            <p className="text-[11px] text-muted-foreground mt-6">
              Pre-clinical animal data. The full studies and protocols are available to qualified
              clinical and investor partners, just ask.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
};
export default ClinicalEvidencePage;
