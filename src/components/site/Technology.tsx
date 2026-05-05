import { CheckCircle2 } from "lucide-react";
import scaffold from "@/assets/tissue-scaffold.jpg";

const features = [
  "Proprietary decellularization preserves the native extracellular matrix",
  "Engineered to resist calcification and immune rejection",
  "Promotes host-cell repopulation and tissue regeneration in vivo",
  "Scalable across cardiovascular and soft-tissue indications",
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
            alt="Microscopic view of TxGuard regenerative tissue scaffold"
            width={1280}
            height={960}
            loading="lazy"
            className="relative rounded-2xl border border-white/10 shadow-elegant"
          />
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
            The TxGuard™ platform
          </p>
          <h2 className="mb-6 text-white">
            A regenerative scaffold the body recognizes as its own.
          </h2>
          <p className="text-white/75 medical-body mb-8">
            TxGuard™ is built on a proprietary tissue-processing platform that removes
            immunogenic cellular material while preserving the structural and biochemical
            integrity of the extracellular matrix — giving the body the blueprint it needs
            to regenerate functional, durable tissue.
          </p>
          <ul className="space-y-3.5">
            {features.map((f) => (
              <li key={f} className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-white/85">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);
