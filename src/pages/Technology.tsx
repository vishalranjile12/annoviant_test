import { useEffect } from "react";
import { PageShell } from "@/components/site/PageShell";
import { CheckCircle2, Beaker, Layers, Activity, ShieldCheck } from "lucide-react";
import scaffold from "@/assets/tissue-scaffold.jpg";

const pillars = [
  { icon: Layers, title: "Decellularized ECM scaffold", body: "Proprietary processing removes immunogenic cellular material while preserving the native extracellular matrix architecture and signaling cues." },
  { icon: Activity, title: "Host-cell repopulation", body: "Once implanted, the scaffold is recognized as native, recruiting the patient's own cells to remodel and regenerate functional tissue." },
  { icon: ShieldCheck, title: "Calcification & thrombo resistant", body: "Engineered to overcome the dominant failure modes of conventional bioprosthetics — calcification, thrombosis, and accelerated degeneration." },
  { icon: Beaker, title: "Pliable & durable", body: "Mechanical performance is preserved across the processing pipeline, delivering tissue that handles like native and lasts." },
];

const TechnologyPage = () => {
  useEffect(() => { document.title = "TxGuard™ Technology — Annoviant"; }, []);
  return (
    <PageShell
      eyebrow="The TxGuard™ Platform"
      title={<>A regenerative tissue platform — engineered to <span className="text-gradient">grow with the patient</span>.</>}
      intro="TxGuard™ is a patented breakthrough in regenerative tissue. Unlike fixed bioprosthetics, it is designed to integrate with host tissue, resist the failure modes of today's devices, and last."
    >
      <section className="py-20 md:py-28">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <img src={scaffold} alt="Microscopic view of TxGuard regenerative tissue scaffold" loading="lazy" className="rounded-2xl shadow-elegant border border-border" />
          <div>
            <h2 className="mb-5">How it works</h2>
            <p className="text-muted-foreground medical-body mb-6">
              The TxGuard™ process gently removes cellular content while protecting the
              biochemical and structural integrity of the extracellular matrix. The result
              is an acellular scaffold that the body recognizes as its own — a blueprint
              for regeneration, not a foreign implant.
            </p>
            <ul className="space-y-3">
              {["Preserves native ECM architecture","Eliminates immunogenic cellular debris","Maintains tensile and elastic mechanics","Compatible with cardiac and soft-tissue indications"].map(f => (
                <li key={f} className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-secondary mt-0.5" /><span>{f}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="py-20 md:py-28 bg-muted/40">
        <div className="container mx-auto">
          <h2 className="mb-12 max-w-2xl">Four pillars of the TxGuard™ advantage</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {pillars.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-card rounded-xl p-7 border border-border shadow-card">
                <div className="h-11 w-11 rounded-lg gradient-primary flex items-center justify-center mb-5 shadow-glow">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="mb-3">{title}</h3>
                <p className="text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
};
export default TechnologyPage;