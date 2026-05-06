import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, PlayCircle } from "lucide-react";

const hero = "/hero/heart-bg.jpg";

export const Hero = () => (
  <section className="relative min-h-[100svh] flex items-center overflow-hidden gradient-hero" aria-label="Introduction to TxGuard">
    <img
      src={hero}
      alt="A glowing heart, the visual metaphor for TxGuard, a tissue platform that the body remakes into living tissue"
      width={1920}
      height={1080}
      fetchPriority="high"
      className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-surface-deep/95 via-surface-deep/70 to-transparent" />
    <div
      aria-hidden
      className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-secondary/30 blur-[120px]"
    />

    <div className="relative container mx-auto py-32 md:py-40">
      <div className="max-w-3xl animate-fade-up">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur px-3 py-1.5 text-xs font-medium text-white/85 mb-6">
          <ShieldCheck className="h-3.5 w-3.5 text-secondary" />
          $5.7M in NIH funding · FDA HUD designation · 14 peer-reviewed papers
        </div>
        <h1 className="text-white mb-6">
          A heart implant that <span className="text-gradient">grows with the patient</span>
        </h1>
        <p className="text-lg md:text-xl text-white/80 medical-body mb-10">
          For decades, heart surgery has forced the same trade-off: an implant that lasts, or
          an implant that fits. TxGuard® is our attempt to give surgeons both. It's a
          regenerative tissue platform that the body remakes into its own living tissue,
          engineered to resist calcification and to keep up with a child as they grow.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg" className="gradient-primary text-primary-foreground shadow-glow border-0 min-h-[44px]">
            <Link to="/clinical-evidence">
              See the evidence <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent min-h-[44px]">
            <Link to="/contact">Talk to our team</Link>
          </Button>
          <Button asChild size="lg" variant="ghost" className="text-white hover:bg-white/10 hover:text-white min-h-[44px]">
            <a href="#explainer">
              <PlayCircle className="mr-1.5 h-4 w-4" /> Watch the 2-min overview
            </a>
          </Button>
        </div>

        <dl className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
          {[
            ["$5.7M", "raised in NIH grants"],
            ["4", "U.S. patents on the platform"],
            ["14", "peer-reviewed papers"],
            ["7+", "years of pre-clinical data"],
          ].map(([n, l]) => (
            <div key={l}>
              <dt className="sr-only">{l}</dt>
              <dd>
                <span className="text-2xl md:text-3xl font-bold text-white">{n}</span>
                <span className="block text-xs text-white/60 mt-1">{l}</span>
              </dd>
            </div>
          ))}
        </dl>
        <p className="text-[11px] text-white/50 mt-4 max-w-2xl">
          Counts current as of 2026. Funding figures include grants to Annoviant and the founding
          research program. The work is investigational; pre-clinical animal data may not predict
          outcomes in humans.
        </p>
      </div>
    </div>
  </section>
);
