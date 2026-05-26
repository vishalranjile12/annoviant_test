import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { CountUp } from "./CountUp";
import { Typewriter } from "./Typewriter";

const hero = "/hero/heart-bg.jpg";

const applicationWords = ["Cardio", "Vascular", "Urology", "Gastro", "Graft", "Wound"];

export const Hero = () => (
  <section className="relative min-h-[100svh] flex items-center overflow-hidden gradient-hero" aria-label="Introduction to TxGuard">
    <img
      src={hero}
      alt="A glowing heart, the visual metaphor for TxGuard, a tissue platform that the body remakes into living tissue"
      width={1920}
      height={1080}
      // @ts-expect-error, React 18 emits a warning for camelCase, lowercase is the canonical HTML attr
      fetchpriority="high"
      className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-surface-deep/95 via-surface-deep/70 to-transparent" />
    <div
      aria-hidden
      className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-secondary/30 blur-[120px]"
    />

    <div className="relative container mx-auto py-32 md:py-40">
      <div className="max-w-3xl animate-fade-up">
        <h1 className="text-white mb-6">
          Regenerative tissue technology for <Typewriter words={applicationWords} /> applications.
        </h1>
        <p className="text-lg md:text-xl text-white/80 medical-body mb-10">
          TxGuard® is a patented biological tissue platform designed to reduce calcification,
          thrombosis, infection, and the need for repeat surgery in heart-valve and soft-tissue
          applications. The scaffold is built to be remodeled by the body into the patient&rsquo;s
          own living tissue, so it can grow with them.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg" className="gradient-primary text-primary-foreground shadow-glow border-0 min-h-[44px]">
            <Link to="/technology">
              Explore the technology <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent min-h-[44px]">
            <Link to="/for-investors">For investors &amp; partners</Link>
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
                <CountUp value={n} className="text-2xl md:text-3xl font-bold text-white tabular-nums" />
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
