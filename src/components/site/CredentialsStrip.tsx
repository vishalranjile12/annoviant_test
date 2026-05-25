import { Link } from "react-router-dom";
import { ShieldCheck, Award, Scale, Factory, BookOpen, ArrowRight } from "lucide-react";

type Credential = {
  icon: typeof ShieldCheck;
  metric: string;
  label: string;
  detail: string;
};

const credentials: Credential[] = [
  {
    icon: ShieldCheck,
    metric: "FDA HUD",
    label: "Humanitarian Use Device",
    detail: "Pediatric pulmonary valved graft, 2020",
  },
  {
    icon: Award,
    metric: "$5.7M",
    label: "NIH grants to date",
    detail: "Including $2.99M awarded in 2024",
  },
  {
    icon: Scale,
    metric: "4 + 2",
    label: "Issued U.S. patents + pending PCT",
    detail: "TxGuard® platform IP portfolio",
  },
  {
    icon: Factory,
    metric: "ISO 13485",
    label: "Manufacturing readiness",
    detail: "Quality system designed to scale",
  },
  {
    icon: BookOpen,
    metric: "14",
    label: "Peer-reviewed papers",
    detail: "7+ years of pre-clinical record",
  },
];

export const CredentialsStrip = () => (
  <section
    className="relative py-12 md:py-16 bg-surface-deep text-white border-y border-white/10 overflow-hidden"
    aria-labelledby="credentials-heading"
  >
    <div aria-hidden className="absolute -top-24 left-1/2 -translate-x-1/2 h-[360px] w-[720px] rounded-full bg-primary/15 blur-[120px]" />
    <div className="container mx-auto relative">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-2">
            Where regulators, scientists, and capital have already weighed in
          </p>
          <h2 id="credentials-heading" className="text-xl md:text-2xl font-semibold text-white max-w-2xl">
            Credentials, not aspirations.
          </h2>
        </div>
        <Link
          to="/investors"
          className="inline-flex items-center gap-1 text-sm font-semibold text-secondary hover:text-white transition-smooth"
        >
          See the full investor view <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <ul className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
        {credentials.map(({ icon: Icon, metric, label, detail }) => (
          <li
            key={label}
            className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4 md:p-5 hover:border-white/25 transition-smooth"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="h-8 w-8 rounded-md bg-secondary/20 grid place-items-center">
                <Icon className="h-4 w-4 text-secondary" aria-hidden />
              </span>
            </div>
            <div className="text-xl md:text-2xl font-bold text-white tabular-nums leading-tight">
              {metric}
            </div>
            <div className="text-xs md:text-sm font-medium text-white/85 mt-1">{label}</div>
            <div className="text-[11px] text-white/55 mt-1.5">{detail}</div>
          </li>
        ))}
      </ul>

      <p className="text-[11px] text-white/45 mt-6 max-w-3xl">
        TxGuard® is investigational. FDA HUD designation does not equal FDA approval; it permits a
        pathway for devices intended for rare-disease populations. Pre-clinical data may not predict
        outcomes in humans.
      </p>
    </div>
  </section>
);
