import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/tissue-scaffold.jpg";

// Restrained hero — one idea, one sentence, one primary action.
// Credentials, stats, and disclaimers live further down the page and on
// /investors, so the first screen stays about the product, not the fact sheet.
export const Hero = () => (
  <section
    className="relative min-h-[100svh] flex items-center overflow-hidden gradient-hero"
    aria-label="Introduction to TxGuard"
  >
    <img
      src={heroImage}
      alt="Microscopic view of the TxGuard regenerative tissue scaffold"
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
        <h1 className="text-white mb-6 text-balance">
          Tissue the body rebuilds <span className="text-gradient">as its own.</span>
        </h1>
        <p className="text-lg md:text-xl text-white/80 medical-body mb-10">
          TxGuard® is a patented regenerative scaffold. Implanted like a conventional graft,
          it&rsquo;s remodeled into the patient&rsquo;s own living tissue&nbsp;&mdash; designed to last,
          and in children, to grow.
        </p>
        <Button
          asChild
          size="lg"
          className="gradient-primary text-primary-foreground shadow-glow border-0 min-h-[48px] px-7 text-base"
        >
          <a href="#regeneration">
            See how it works <ArrowDown className="ml-1.5 h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>

    <Link
      to="/technology"
      aria-hidden
      tabIndex={-1}
      className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-smooth"
    >
      <span className="text-[11px] uppercase tracking-widest">Scroll</span>
      <ArrowDown className="h-4 w-4 animate-bounce" />
    </Link>
  </section>
);
