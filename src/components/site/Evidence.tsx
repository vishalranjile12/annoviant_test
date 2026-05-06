import { Link } from "react-router-dom";
import { FileText, Award, Microscope, Shield, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { icon: Award, label: "Raised in NIH grants to date", value: "$5.7M", href: "/publications" },
  { icon: Microscope, label: "Pre-clinical studies, run to ISO standards", value: "ISO 5840 / 10993", href: "/clinical-evidence" },
  { icon: FileText, label: "Peer-reviewed papers from the program", value: "14 papers", href: "/publications" },
  { icon: Shield, label: "Pediatric pulmonary valved graft, FDA milestone", value: "HUD designation, 2020", href: "/clinical-evidence" },
];

export const Evidence = () => (
  <section id="evidence" className="py-24 md:py-32" aria-labelledby="evidence-heading">
    <div className="container mx-auto">
      <Reveal>
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
            The receipts
          </p>
          <h2 id="evidence-heading" className="mb-5">We've done the science. Here's the paperwork</h2>
          <p className="text-muted-foreground medical-body">
            Regenerative medicine attracts a lot of bold claims. We'd rather show our work,
            grants we've earned, papers we've published, animal studies we've run to standard,
            and an FDA milestone we hold today.
          </p>
        </div>
      </Reveal>

      {/* Stripe with internal separators only. The 1px grid gap on a colored container
          paints clean dividers between cells and never around the outside. */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
        {items.map(({ icon: Icon, label, value, href }, i) => (
          <Reveal key={label} delay={i * 80}>
            <Link
              to={href}
              className="group block h-full bg-background hover:bg-muted/40 transition-smooth px-5 md:px-6 py-6 md:py-7"
            >
              <Icon className="h-5 w-5 text-primary mb-3" aria-hidden />
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1.5 leading-snug">
                {label}
              </div>
              <div className="text-base md:text-lg font-semibold text-foreground">{value}</div>
              <span className="mt-4 text-[11px] font-semibold text-primary inline-flex items-center gap-1 group-hover:text-secondary transition-smooth">
                Details <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-smooth" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>

      <p className="text-xs text-muted-foreground mt-6">
        We share full publications and regulatory documents with qualified clinical and investor
        partners on request. Pre-clinical animal data won't tell you everything about human outcomes,
        and we don't pretend it will.
      </p>
    </div>
  </section>
);
