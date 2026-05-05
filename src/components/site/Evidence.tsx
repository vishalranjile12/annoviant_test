import { FileText, Award, Microscope, Shield } from "lucide-react";

const items = [
  { icon: Award, label: "Patents granted", value: "Issued IP" },
  { icon: Microscope, label: "Pre-clinical studies", value: "Multi-model" },
  { icon: FileText, label: "Peer-reviewed data", value: "Published" },
  { icon: Shield, label: "Regulatory pathway", value: "FDA-aligned" },
];

export const Evidence = () => (
  <section id="evidence" className="py-24 md:py-32">
    <div className="container mx-auto">
      <div className="max-w-2xl mb-14">
        <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
          Clinical & scientific foundation
        </p>
        <h2 className="mb-5">Built on rigorous science.</h2>
        <p className="text-muted-foreground medical-body">
          Annoviant's research program is anchored in patented technology, peer-reviewed
          publications, and ongoing pre-clinical validation across cardiovascular and
          soft-tissue applications.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="rounded-xl border border-border p-6 bg-card shadow-card hover:border-primary/40 hover:shadow-elegant transition-smooth"
          >
            <Icon className="h-6 w-6 text-primary mb-4" />
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{label}</div>
            <div className="text-lg font-semibold text-foreground">{value}</div>
          </div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground mt-6">
        Detailed publications and regulatory documentation available on request to qualified
        clinical and investor partners.
      </p>
    </div>
  </section>
);
