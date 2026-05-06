import { useState } from "react";
import { Layers, Sparkles, HeartPulse, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const stages = [
  {
    step: "01",
    icon: Layers,
    title: "We implant the scaffold",
    technical: "The TxGuard® scaffold, an acellular extracellular matrix processed through our proprietary stabilization platform, is implanted using the same surgical technique a surgeon already uses for a conventional bioprosthetic.",
    layman: "Surgeons place the scaffold the same way they place a regular heart valve. No new instruments. No new technique to learn.",
  },
  {
    step: "02",
    icon: Sparkles,
    title: "The body moves in",
    technical: "The host's immune system recognizes the preserved ECM cues. Endogenous cells migrate into the scaffold, repopulate it, and engage endothelialization and tissue-ingrowth pathways.",
    layman: "The body sees the scaffold as familiar territory and starts moving its own cells into it, the way it would heal any tissue.",
  },
  {
    step: "03",
    icon: HeartPulse,
    title: "It becomes living tissue",
    technical: "In pre-clinical animal models, the scaffold has progressively remodeled into a host-derived living tissue, with no calcification observed and the apparent capacity to adapt with somatic growth.",
    layman: "Over time, the scaffold becomes the patient's own tissue. In young animals, it has grown with them. We're working to confirm the same in humans.",
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
              How it actually works
            </p>
            <h2 id="mechanism-heading" className="mb-4">
              From scaffold to <span className="text-gradient">living tissue</span>, in three steps
            </h2>
            <p className="text-muted-foreground medical-body">
              The biology behind TxGuard® is straightforward. Most of what we've spent years on is
              making sure each step works the way it's supposed to, in real animals, under the kind
              of stress a heart actually sees. Here's the story in plain language, with a toggle
              if you want the clinical version.
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
          What we describe here is what we've seen in pre-clinical animal studies (lamb-to-sheep
          models, run under ISO 5840 and 10993 guidelines). Human results may differ. The TxGuard®
          Pulmonary Valved Graft has FDA Humanitarian Use Device designation (2020); the rest of
          the platform is still investigational.
        </p>
      </div>
    </section>
  );
};
