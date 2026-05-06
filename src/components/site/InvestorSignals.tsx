import { Link } from "react-router-dom";
import { ShieldCheck, FlaskConical, Award, Factory, TrendingUp, Layers, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

type Signal = {
  icon: typeof ShieldCheck;
  headline: string;
  body: string;
};

const signals: Signal[] = [
  {
    icon: ShieldCheck,
    headline: "FDA milestone, already in hand",
    body: "Humanitarian Use Device designation since 2020 for the pediatric Pulmonary Valved Graft. Other regen-med platforms are still chasing it.",
  },
  {
    icon: Award,
    headline: "$5.7M in NIH validation to date",
    body: "Including a $2.99M grant in 2024. Public funding is third-party validation that the science holds up under scrutiny.",
  },
  {
    icon: FlaskConical,
    headline: "14 peer-reviewed papers",
    body: "Plus 4 issued U.S. patents and 2 pending PCT applications. The science is documented, not hand-wavy.",
  },
  {
    icon: Factory,
    headline: "ISO 13485 manufacturing-ready",
    body: "A milestone many regen-med platforms never reach. Off-the-shelf logistics are already in the design.",
  },
  {
    icon: Layers,
    headline: "A platform, not one product",
    body: "Pediatric and adult heart valves, vascular grafts, soft-tissue repair, all from the same TxGuard® process. One de-risked science, many shots on goal.",
  },
  {
    icon: TrendingUp,
    headline: "$8B+ U.S. market by 2035",
    body: "A 7–9% CAGR space where Edwards, Medtronic, J&J, and Boston Scientific actively operate. Strategic interest is part of the territory.",
  },
];

export const InvestorSignals = () => (
  <section
    id="investors"
    className="py-24 md:py-32 gradient-deep text-white relative overflow-hidden"
    aria-labelledby="investor-signals-heading"
  >
    <div aria-hidden className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-secondary/25 blur-[160px]" />
    <div aria-hidden className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-primary/40 blur-[140px]" />

    <div className="container mx-auto relative">
      <Reveal>
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-3">
            For investors
          </p>
          <h2 id="investor-signals-heading" className="text-white mb-5">
            What strategics are <span className="text-gradient">paying attention to</span>
          </h2>
          <p className="text-white/80 medical-body">
            Most early-stage regenerative-medicine companies are chasing the validation we
            already have. Some signals worth knowing, before you ask for the rest.
          </p>
        </div>
      </Reveal>

      {/* Stripe pattern, gap-px on a translucent border, sits cleanly on the dark gradient */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
        {signals.map(({ icon: Icon, headline, body }, i) => (
          <Reveal as="div" key={headline} delay={i * 50}>
            <article className="group relative h-full bg-surface-deep px-6 md:px-7 py-7 md:py-8 hover:bg-white/5 transition-smooth">
              <Icon className="h-5 w-5 text-secondary mb-4" aria-hidden />
              <h3 className="text-white text-base md:text-lg leading-snug mb-2">{headline}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{body}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={300}>
        <div className="mt-12 md:mt-14 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <p className="text-sm text-white/75 max-w-xl">
            Series A in motion. Diligence materials, technical data room, and pipeline detail
            available on request to qualified investors.
          </p>
          <Link
            to="/contact?role=investor"
            className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-white transition-smooth"
          >
            Open the conversation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Reveal>
    </div>
  </section>
);
