import { Link } from "react-router-dom";
import { PageShell } from "@/components/site/PageShell";
import { Seo } from "@/components/site/Seo";
import { Button } from "@/components/ui/button";
import { Heart, Activity, ShieldCheck, ArrowRight, GitBranch, Stethoscope } from "lucide-react";

const indications = [
  {
    icon: Heart,
    title: "Pulmonary Valved Graft (Adult)",
    stage: "Pre-clinical · advancing",
    body: "Building on the lead pediatric program, the platform is being explored for adult right ventricular outflow tract reconstruction.",
  },
  {
    icon: Heart,
    title: "Aortic Valve",
    stage: "Exploring",
    body: "An $8B+ projected market by 2035. The TxGuard® platform is being investigated as a regenerative-tissue alternative to glutaraldehyde-treated bioprosthetics.",
  },
  {
    icon: Heart,
    title: "Mitral & Tricuspid Valves",
    stage: "Potential",
    body: "Regenerative-tissue solutions for the largest valve replacement segments, preliminary platform investigation underway.",
  },
  {
    icon: GitBranch,
    title: "Vascular Grafts",
    stage: "Expanded potential",
    body: "Regenerative vascular conduits for bypass and reconstruction with the potential to remodel into living vessel.",
  },
  {
    icon: Activity,
    title: "Cardiac Patch",
    stage: "Exploring",
    body: "Soft-tissue patch for septal-defect closure and cardiac reconstruction, leveraging the same regenerative-tissue platform.",
  },
];

const CardiovascularPage = () => {
  const ld = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "TxGuard® for Adult Cardiovascular Surgery",
    about: { "@type": "MedicalCondition", name: "Cardiovascular Disease" },
    audience: {
      "@type": "MedicalAudience",
      audienceType: ["Cardiologist", "Cardiothoracic Surgeon", "Interventional Cardiologist"],
    },
  };

  return (
    <PageShell
      eyebrow="Solutions · Cardiovascular"
      title={<>A regenerative platform for the <span className="text-gradient">$8B+ heart-valve market</span></>}
      intro="The TxGuard® regenerative tissue platform is being developed across adult cardiovascular indications, engineered to address the calcification and re-intervention burden of today's bioprosthetics."
      heroImage="/hero/cardio-stock.jpg"
    >
      <Seo
        title="Cardiovascular Applications, TxGuard® | Annoviant"
        description="TxGuard® regenerative tissue platform for adult cardiovascular surgery, pulmonary, aortic, mitral, vascular, and patch applications. Pre-clinical and IND-enabling programs."
        jsonLd={ld}
      />

      <section className="py-20 md:py-28">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
              The market opportunity
            </p>
            <h2 className="mb-5">$3.6B today. $8B+ by 2035</h2>
            <p className="text-muted-foreground medical-body mb-5">
              The U.S. heart valve market is projected to grow at 7–9% CAGR, driven by
              demographic shifts and the persistent re-intervention burden of current
              bioprosthetics. Annoviant&rsquo;s multi-indication TxGuard® platform is
              positioned to address this growing demand with regenerative-tissue solutions.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Seamless surgical integration, no change in current technique",
                "Engineered as a durable, off-the-shelf device with living-tissue properties",
                "Designed to deliver cost-savings vs. current standard of care",
              ].map((f) => (
                <li key={f} className="flex gap-3"><ShieldCheck className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" /><span className="text-sm">{f}</span></li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="gradient-primary border-0">
                <Link to="/clinical-evidence">Comparative evidence <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact?role=investor">Investor briefing</Link>
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card shadow-card overflow-hidden">
            <img
              src="/hero/cardio-stock.jpg"
              alt="Cardiac surgery imagery, adult cardiovascular indications under development with the TxGuard platform"
              loading="lazy"
              className="w-full h-48 object-cover"
            />
            <div className="p-8">
            <Stethoscope className="h-7 w-7 text-primary mb-4" />
            <h3 className="mb-4">By the numbers</h3>
            <dl className="space-y-4">
              {[
                ["8–10K", "TxGuard® PVG units / year (target indication)"],
                ["90–100K+", "Aortic valve units / year (U.S.)"],
                ["180K+", "Mitral & Tricuspid units / year (U.S.)"],
                ["7–9%", "CAGR (heart valve market, 2024–2035)"],
              ].map(([n, l]) => (
                <div key={l} className="flex items-baseline justify-between gap-4 border-b border-border last:border-0 pb-3 last:pb-0">
                  <dt className="text-sm text-muted-foreground">{l}</dt>
                  <dd className="text-2xl font-bold text-primary">{n}</dd>
                </div>
              ))}
            </dl>
            <p className="text-[11px] text-muted-foreground mt-5">
              Sources: published market reports. Forecasts not guaranteed.
            </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/40">
        <div className="container mx-auto">
          <h2 className="mb-12 max-w-2xl">Indications under development</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {indications.map(({ icon: Icon, title, stage, body }) => (
              <div key={title} className="bg-card rounded-xl p-7 border border-border shadow-card hover:shadow-elegant transition-smooth">
                <div className="flex items-start justify-between mb-5">
                  <div className="h-11 w-11 rounded-lg gradient-primary grid place-items-center shadow-glow">
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-secondary bg-secondary/10 px-2 py-1 rounded">
                    {stage}
                  </span>
                </div>
                <h3 className="mb-3 text-base">{title}</h3>
                <p className="text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-8 max-w-3xl">
            All indications are investigational. The TxGuard® Pulmonary Valved Graft for
            pediatric CHD holds an FDA Humanitarian Use Device designation (2020). Other
            indications have not received FDA approval and are not available for human use.
          </p>
        </div>
      </section>
    </PageShell>
  );
};
export default CardiovascularPage;
