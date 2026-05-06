import { Link } from "react-router-dom";
import { PageShell } from "@/components/site/PageShell";
import { Seo } from "@/components/site/Seo";
import { Button } from "@/components/ui/button";
import { Heart, Activity, ShieldCheck, ArrowRight, GitBranch, Stethoscope } from "lucide-react";

const indications = [
  {
    icon: Heart,
    title: "Pulmonary Valved Graft for adults",
    stage: "Pre-clinical · advancing",
    body: "The same platform that anchors our pediatric program, scaled for adult right ventricular outflow tract reconstruction.",
  },
  {
    icon: Heart,
    title: "Aortic Valve",
    stage: "Exploring",
    body: "The biggest single segment in the heart-valve market, and one where calcification still drives most of the failures. We're investigating TxGuard® as the regenerative alternative.",
  },
  {
    icon: Heart,
    title: "Mitral & Tricuspid Valves",
    stage: "Potential",
    body: "Together these are the highest-volume valve replacements in the U.S. We're at early platform investigation here, more to come.",
  },
  {
    icon: GitBranch,
    title: "Vascular Grafts",
    stage: "Expanded potential",
    body: "A regenerative conduit for bypass and reconstruction work that, if the biology holds, could remodel into living vessel.",
  },
  {
    icon: Activity,
    title: "Cardiac Patch",
    stage: "Exploring",
    body: "A soft-tissue patch for septal-defect closure and cardiac reconstruction, built on the same platform as the valves.",
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
      title={<>The <span className="text-gradient">$8B heart-valve market</span> needs something better than glutaraldehyde</>}
      intro="Adult cardiovascular surgery has been working around the same set of bioprosthetic problems for decades. We're building TxGuard® for the indications where those compromises hurt the most."
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
              The opportunity, in plain terms
            </p>
            <h2 className="mb-5">$3.6B today. $8B+ by 2035</h2>
            <p className="text-muted-foreground medical-body mb-5">
              The U.S. heart-valve market is on a 7–9% growth trajectory through 2035, and most of
              that growth comes from a hard problem: bioprosthetics fail, and patients come back
              for surgery. A platform that addresses that, even modestly, has room to grow with
              the demand.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Surgeons use the same technique they use today, no relearning",
                "Off-the-shelf logistics, with living-tissue behavior once implanted",
                "Designed to lower lifetime cost of care by reducing re-operations",
              ].map((f) => (
                <li key={f} className="flex gap-3"><ShieldCheck className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" /><span className="text-sm">{f}</span></li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="gradient-primary border-0">
                <Link to="/clinical-evidence">Compare TxGuard® to today's options <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact?role=investor">Talk to us</Link>
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
            <h3 className="mb-4">The numbers we keep on the wall</h3>
            <dl className="space-y-4">
              {[
                ["8–10K", "Pulmonary Valved Grafts a year, our entry indication"],
                ["90–100K+", "aortic valves placed in the U.S. each year"],
                ["180K+", "mitral and tricuspid valves placed in the U.S. each year"],
                ["7–9%", "annual heart-valve market growth through 2035"],
              ].map(([n, l]) => (
                <div key={l} className="flex items-baseline justify-between gap-4 border-b border-border last:border-0 pb-3 last:pb-0">
                  <dt className="text-sm text-muted-foreground">{l}</dt>
                  <dd className="text-2xl font-bold text-primary">{n}</dd>
                </div>
              ))}
            </dl>
            <p className="text-[11px] text-muted-foreground mt-5">
              Numbers from published market reports. Forecasts are forecasts, not promises.
            </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/40">
        <div className="container mx-auto">
          <h2 className="mb-12 max-w-2xl">Where we're headed next</h2>
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
            Every indication on this page except the pediatric Pulmonary Valved Graft (FDA HUD
            designation, 2020) is still investigational. None of them are available for human
            use yet, and we won't pretend otherwise.
          </p>
        </div>
      </section>
    </PageShell>
  );
};
export default CardiovascularPage;
