import { useState } from "react";
import { Layers, Sparkles, HeartPulse, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const stages = [
  {
    step: "01",
    icon: Layers,
    title: "Implantation",
    technical: "An acellular extracellular-matrix (ECM) scaffold derived from xenogeneic tissue is processed through Annoviant's proprietary stabilization platform and surgically implanted using standard technique.",
    layman: "A specially engineered tissue scaffold is implanted using the same surgical technique your team already knows.",
  },
  {
    step: "02",
    icon: Sparkles,
    title: "Host-Cell Repopulation",
    technical: "The host immune system recognizes the preserved ECM cues. Endogenous cells migrate, repopulate, and remodel the scaffold, engaging endothelialization and tissue ingrowth pathways.",
    layman: "The body recognizes the scaffold as 'self,' moves its own cells into it, and begins remodeling it from within.",
  },
  {
    step: "03",
    icon: HeartPulse,
    title: "Living Tissue",
    technical: "Pre-clinical data demonstrate progressive remodeling toward a host-derived, living tissue construct that, in animal models, has shown resistance to calcification and the capacity to adapt with somatic growth.",
    layman: "Over time, the scaffold has been observed to become a living, integrated tissue, and in young patients, to grow with them.",
  },
];

export const RegenerationTimeline = () => {
  const [mode, setMode] = useState<"technical" | "layman">("technical");
  return (
    <section id="mechanism" className="py-24 md:py-32 bg-muted/30" aria-labelledby="mechanism-heading">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
              Mechanism of Action
            </p>
            <h2 id="mechanism-heading" className="mb-4">
              From engineered scaffold to <span className="text-gradient">living tissue</span>
            </h2>
            <p className="text-muted-foreground medical-body">
              The TxGuard® platform follows a simple three-step regenerative journey, a process
              characterized in pre-clinical models and supported by 14 peer-reviewed publications.
            </p>
          </div>
          <div
            role="group"
            aria-label="Toggle technical detail level"
            className="inline-flex p-1 rounded-full bg-card border border-border shadow-card self-start"
          >
            <button
              onClick={() => setMode("technical")}
              aria-pressed={mode === "technical"}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-smooth ${
                mode === "technical" ? "gradient-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              Clinical
            </button>
            <button
              onClick={() => setMode("layman")}
              aria-pressed={mode === "layman"}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-smooth ${
                mode === "layman" ? "gradient-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              Plain language
            </button>
          </div>
        </div>

        <ol className="grid md:grid-cols-3 gap-5 relative" aria-label="Regeneration timeline">
          {stages.map(({ step, icon: Icon, title, technical, layman }, idx) => (
            <Reveal as="li" key={step} delay={idx * 120} className="relative">
              <div className="bg-card rounded-2xl border border-border p-7 h-full shadow-card hover:shadow-elegant transition-smooth">
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-12 w-12 rounded-xl gradient-primary grid place-items-center shadow-glow">
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="text-xs font-bold tracking-widest text-secondary">STEP {step}</span>
                </div>
                <h3 className="mb-3">{title}</h3>
                <p className="text-sm text-muted-foreground" aria-live="polite">
                  {mode === "technical" ? technical : layman}
                </p>
              </div>
              {idx < stages.length - 1 && (
                <ArrowRight aria-hidden className="hidden md:block absolute top-1/2 -right-4 h-6 w-6 text-secondary/60 -translate-y-1/2" />
              )}
            </Reveal>
          ))}
        </ol>

        <p className="text-xs text-muted-foreground mt-8 max-w-3xl">
          Pre-clinical animal data (lamb-to-sheep models, ISO 5840 / 10993 guidelines). Human
          clinical results may vary. The TxGuard® Pulmonary Valved Graft holds an FDA Humanitarian
          Use Device designation (2020); other indications remain investigational.
        </p>
      </div>
    </section>
  );
};
