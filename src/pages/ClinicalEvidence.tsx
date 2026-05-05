import { Link } from "react-router-dom";
import { PageShell } from "@/components/site/PageShell";
import { Seo } from "@/components/site/Seo";
import { Button } from "@/components/ui/button";
import { StorytellerTable, type StorytellerColumn, type StorytellerRow } from "@/components/site/StorytellerTable";
import { Award, FileText, Microscope, ShieldCheck, FlaskConical, ArrowRight, Check } from "lucide-react";

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
  { icon: Award, value: "ISO 13485", label: "Manufacturing readiness at certified facility" },
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
      title={<>Built on <span className="text-gradient">rigorous science</span></>}
      intro="The TxGuard® program is anchored in NIH-funded research, peer-reviewed publications, ISO-guided pre-clinical studies, and comparative analysis against legacy and emerging technologies."
      heroImage="/hero/microscope.jpg"
    >
      <Seo
        title="Clinical Evidence, TxGuard® Pre-clinical Data | Annoviant"
        description="Pre-clinical data, peer-reviewed publications, NIH grants, and comparative analysis for the TxGuard® regenerative tissue platform vs. legacy bioprosthetics."
        jsonLd={ld}
      />

      <section className="py-20 md:py-28">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {milestones.map(({ icon: Icon, value, label }) => (
              <div key={label} className="rounded-xl border border-border bg-card p-7 shadow-card">
                <Icon className="h-6 w-6 text-primary mb-4" />
                <div className="text-2xl font-bold text-foreground mb-1">{value}</div>
                <p className="text-sm text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/40">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
              Comparative analysis
            </p>
            <h2 className="mb-4">TxGuard® vs. legacy &amp; emerging technologies</h2>
            <p className="text-muted-foreground medical-body">
              An at-a-glance look at how the TxGuard® platform is positioned against
              glutaraldehyde-treated bioprosthetics and emerging regenerative approaches,
              with the &ldquo;why it matters&rdquo; on every row. Comparator information based on
              reported public information.
            </p>
          </div>

          <StorytellerTable
            caption="Comparison of TxGuard against legacy and emerging tissue technologies"
            columns={columns}
            rows={rows}
          />

          <p className="text-xs text-muted-foreground mt-5 max-w-3xl">
            Pre-clinical animal data may not predict outcomes in humans. Comparator status
            described per published reports and reflects Annoviant&rsquo;s reading of available
            literature.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
              Pre-clinical results
            </p>
            <h2 className="mb-5">Aggressive lamb-to-sheep model under ISO guidance</h2>
            <p className="text-muted-foreground medical-body mb-5">
              In-vivo studies followed strict ISO 5840 (cardiovascular implants, heart valve
              substitutes) and ISO 10993 (biological evaluation of medical devices) guidelines.
              Independent pre-clinical work has been performed at reputable institutions, with
              N=3, N=6, and N=10 GLP cohorts characterizing safety and durability over
              extended periods.
            </p>
            <p className="text-muted-foreground medical-body mb-8">
              In these animal models, the platform has been characterized as resistant to
              calcification, supportive of in-situ remodeling, and capable of integrating as
              living tissue. Human clinical results may differ.
            </p>
            <Button asChild size="lg" className="gradient-primary border-0">
              <Link to="/publications">View Publications &amp; Patents <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
            <h3 className="mb-5">What we&rsquo;ve confirmed in pre-clinical work</h3>
            <ul className="space-y-4">
              {[
                "No calcification observed across study durations",
                "In-situ remodeling consistent with host-mediated tissue formation",
                "Maintained tensile and elastic mechanical performance",
                "No findings inconsistent with ISO 10993 biocompatibility criteria",
              ].map((b) => (
                <li key={b} className="flex gap-3">
                  <Check className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{b}</span>
                </li>
              ))}
            </ul>
            <p className="text-[11px] text-muted-foreground mt-6">
              Pre-clinical animal data. Detailed publications and study protocols available to
              qualified clinical and investor partners on request.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
};
export default ClinicalEvidencePage;
