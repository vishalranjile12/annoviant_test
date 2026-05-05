import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";
import hero from "@/assets/hero-txguard.jpg";

export const Hero = () => (
  <section className="relative min-h-[100svh] flex items-center overflow-hidden gradient-hero">
    <img
      src={hero}
      alt="Glowing regenerative human heart visualization representing TxGuard tissue technology"
      width={1920}
      height={1080}
      className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-surface-deep/95 via-surface-deep/70 to-transparent" />
    <div
      aria-hidden
      className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-secondary/30 blur-[120px]"
    />

    <div className="relative container mx-auto py-32 md:py-40">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur px-3 py-1.5 text-xs font-medium text-white/85 mb-6">
          <ShieldCheck className="h-3.5 w-3.5 text-secondary" />
          Patented · Pre-clinical validated · Pediatric-ready
        </div>
        <h1 className="text-white mb-6">
          Regenerative tissue,<br />
          engineered to <span className="text-gradient">last a lifetime</span>.
        </h1>
        <p className="text-lg md:text-xl text-white/75 medical-body mb-10">
          TxGuard™ is a patented regenerative tissue platform for cardiovascular and soft-tissue
          repair — designed to resist calcification, integrate with host tissue, and grow with
          pediatric patients.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg" className="gradient-primary text-primary-foreground shadow-glow border-0">
            <a href="#technology">
              Explore the Technology <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent">
            <a href="#contact">Partner with Us</a>
          </Button>
        </div>

        <dl className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
          {[
            ["1", "Patented platform"],
            ["2+", "Indications in development"],
            ["100%", "Decellularized scaffold"],
            ["0", "Calcium binding sites*"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="text-2xl md:text-3xl font-bold text-white">{n}</div>
              <div className="text-xs text-white/60 mt-1">{l}</div>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </section>
);
