import { AlertTriangle, RefreshCw, Baby } from "lucide-react";

const items = [
  {
    icon: AlertTriangle,
    title: "Bioprosthetic valves fail",
    body: "Today's biological prosthetic heart valves suffer from calcification, thrombosis, infection, and accelerated structural degeneration — compromising long-term outcomes.",
  },
  {
    icon: RefreshCw,
    title: "Repeat surgery is the norm",
    body: "Device failure forces multiple high-risk re-interventions over a patient's lifetime, driving hospitalization costs and patient suffering.",
  },
  {
    icon: Baby,
    title: "Children outgrow their valves",
    body: "Pediatric patients require devices that grow with them. Current bioprosthetics cannot — leaving the youngest patients with the worst options.",
  },
];

export const Problem = () => (
  <section className="py-24 md:py-32 bg-muted/40">
    <div className="container mx-auto">
      <div className="max-w-2xl mb-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
          The clinical gap
        </p>
        <h2 className="mb-5">
          Cardiac patients deserve devices that <span className="text-gradient">don't fail them</span>.
        </h2>
        <p className="text-muted-foreground medical-body">
          Despite decades of incremental improvement, the dominant categories of prosthetic
          valves still force surgeons into the same compromises.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map(({ icon: Icon, title, body }) => (
          <div
            key={title}
            className="bg-card rounded-xl p-7 border border-border shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-1"
          >
            <div className="h-11 w-11 rounded-lg gradient-primary flex items-center justify-center mb-5 shadow-glow">
              <Icon className="h-5 w-5 text-primary-foreground" />
            </div>
            <h3 className="mb-3">{title}</h3>
            <p className="text-sm text-muted-foreground">{body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
