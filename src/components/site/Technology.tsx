import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const scaffold = "/hero/heart-matrix.jpg";

const features = [
  "Decellularization that preserves the native tissue's structure and biochemical signals",
  "Designed to resist calcification, the leading cause of bioprosthetic failure",
  "In animal models, the body's own cells move in and remodel the scaffold",
  "One platform, many applications, from heart valves to vascular and soft-tissue repair",
];

export const Technology = () => (
  <section id="technology" className="py-24 md:py-32 gradient-deep text-white relative overflow-hidden">
    <div aria-hidden className="absolute -top-20 -left-20 h-[400px] w-[400px] rounded-full bg-primary/40 blur-[140px]" />
    <div className="container mx-auto relative">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="absolute inset-4 rounded-3xl gradient-primary blur-3xl opacity-40" />
          <img
            src={scaffold}
            alt="A microscope view of the TxGuard scaffold, the architecture the body recognizes as its own"
            width={1280}
            height={960}
            loading="lazy"
            className="relative rounded-2xl border border-white/10 shadow-elegant"
          />
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
            The TxGuard® platform
          </p>
          <h2 className="mb-6 text-white">
            A scaffold the body sees as its own
          </h2>
          <p className="text-white/75 medical-body mb-8">
            TxGuard® starts with tissue and ends with tissue. Our process gently strips out the
            cells that would trigger an immune response, while keeping the scaffold's structure and
            biochemical cues intact. What's left is a blueprint the body can read, and remake into
            living tissue of its own.
          </p>
          <ul className="space-y-3.5">
            {features.map((f) => (
              <li key={f} className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-white/85">{f}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="gradient-primary border-0">
              <Link to="/technology">How it works <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent">
              <Link to="/clinical-evidence">See the evidence</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);
