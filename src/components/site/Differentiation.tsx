import { Link } from "react-router-dom";
import { X, Check, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const conventional = [
  "Synthetic, mechanical, donor-derived, or glutaraldehyde-fixed animal tissue",
  "Calcifies, clots, and degenerates over time",
  "Fixed size, so a growing child outgrows it",
  "Foreign material the body never makes its own",
  "Repeat interventions, sometimes lifelong anticoagulation",
];

const txguard = [
  "A decellularized biological scaffold the body recognizes as its own",
  "Designed to resist calcification and thrombosis",
  "Intended to grow with the patient",
  "Host cells move in and remodel it into living tissue",
  "One platform across heart valves, vascular grafts, and soft-tissue repair",
];

export const Differentiation = () => (
  <section id="differentiation" className="py-24 md:py-32 bg-muted/40 scroll-mt-24" aria-labelledby="diff-heading">
    <div className="container mx-auto">
      <Reveal>
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
            Why it&rsquo;s different
          </p>
          <h2 id="diff-heading" className="mb-5">
            Regenerative biological tissue that <span className="text-gradient">grows with the patient</span>
          </h2>
          <p className="text-muted-foreground medical-body">
            Mechanical, donor-derived, and glutaraldehyde-fixed animal-tissue implants share the same
            ceiling: they are fixed, foreign, and finite. TxGuard® is designed to be different, a
            biological scaffold the body repopulates with its own cells and remodels into living tissue.
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6">
        <Reveal>
          <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-card">
            <h3 className="text-lg md:text-xl mb-5 text-muted-foreground">Conventional prosthetics</h3>
            <ul className="space-y-3">
              {conventional.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <X className="h-4 w-4 mt-0.5 flex-shrink-0 text-destructive/70" aria-hidden />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="h-full rounded-2xl border border-primary/30 bg-card p-7 shadow-elegant relative overflow-hidden">
            <div aria-hidden className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-secondary/15 blur-3xl" />
            <h3 className="text-lg md:text-xl mb-5 text-primary relative">The TxGuard® platform</h3>
            <ul className="space-y-3 relative">
              {txguard.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-foreground">
                  <Check className="h-4 w-4 mt-0.5 flex-shrink-0 text-success" aria-hidden />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/technology"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition-smooth relative"
            >
              How the mechanism works <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>

      <p className="text-xs text-muted-foreground mt-6 max-w-3xl">
        TxGuard® is investigational. These statements describe design intent and pre-clinical
        findings, not proven clinical benefit. Pre-clinical animal data may not predict human outcomes.
      </p>
    </div>
  </section>
);
