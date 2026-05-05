import { Link } from "react-router-dom";
import { FileText, Award, Microscope, Shield, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { icon: Award, label: "NIH grant funding", value: "$5.7M", href: "/publications" },
  { icon: Microscope, label: "Pre-clinical studies", value: "ISO 5840 / 10993", href: "/clinical-evidence" },
  { icon: FileText, label: "Peer-reviewed publications", value: "14 papers", href: "/publications" },
  { icon: Shield, label: "Regulatory milestone", value: "FDA HUD (2020)", href: "/clinical-evidence" },
];

export const Evidence = () => (
  <section id="evidence" className="py-24 md:py-32" aria-labelledby="evidence-heading">
    <div className="container mx-auto">
      <Reveal>
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
            Clinical &amp; scientific foundation
          </p>
          <h2 id="evidence-heading" className="mb-5">Built on rigorous science</h2>
          <p className="text-muted-foreground medical-body">
            Annoviant's research program is anchored in NIH-funded research, peer-reviewed
            publications, ISO-guided pre-clinical studies, and a growing IP portfolio.
          </p>
        </div>
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map(({ icon: Icon, label, value, href }, i) => (
          <Reveal key={label} delay={i * 80}>
            <Link
              to={href}
              className="group rounded-xl border border-border p-6 bg-card shadow-card hover:border-primary/40 hover:shadow-elegant transition-smooth flex flex-col h-full min-h-[44px]"
            >
              <Icon className="h-6 w-6 text-primary mb-4" />
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{label}</div>
              <div className="text-lg font-semibold text-foreground">{value}</div>
              <span className="mt-4 text-xs font-semibold text-primary inline-flex items-center gap-1 group-hover:text-secondary transition-smooth">
                Details <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-smooth" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
      <p className="text-xs text-muted-foreground mt-6">
        Detailed publications and regulatory documentation are available on request to qualified
        clinical and investor partners. Pre-clinical animal data may not predict outcomes in humans.
      </p>
    </div>
  </section>
);
