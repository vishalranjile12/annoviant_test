import { AlertTriangle, RefreshCw, Baby, HeartPulse } from "lucide-react";
import { Reveal } from "./Reveal";

const stats = [
  { value: "127M+", label: "U.S. adults with cardiovascular disease", source: "AHA" },
  { value: "40,000", label: "Newborns diagnosed with CHD each year", source: "CDC" },
  { value: "~1M", label: "Cardiovascular surgeries per year (U.S.)", source: "CDC" },
  { value: "$418B", label: "Annual U.S. cost of CVD", source: "AHA" },
];

const items = [
  {
    icon: AlertTriangle,
    title: "Bioprosthetic valves degenerate",
    body: "Glutaraldehyde-treated bioprosthetics are vulnerable to calcification, thrombosis, and accelerated structural degeneration, driving sub-optimal long-term outcomes.",
  },
  {
    icon: RefreshCw,
    title: "Repeat surgery is the norm",
    body: "Device failure forces complex, costly re-interventions over a patient's lifetime, increasing hospitalization costs and patient burden.",
  },
  {
    icon: Baby,
    title: "Children outgrow their valves",
    body: "Pediatric patients need devices that grow with them. Today's bioprosthetics cannot, leaving the youngest patients with the most challenging options.",
  },
  {
    icon: HeartPulse,
    title: "Disparities compound the problem",
    body: "CVD disproportionately affects geriatric and historically underserved racial groups. Better, more durable implants are a global health-equity priority.",
  },
];

export const Problem = () => (
  <section className="py-24 md:py-32 bg-muted/40" aria-labelledby="problem-heading">
    <div className="container mx-auto">
      <Reveal>
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
            The clinical gap
          </p>
          <h2 id="problem-heading" className="mb-5">
            Cardiac patients deserve devices that <span className="text-gradient">don't fail them</span>
          </h2>
          <p className="text-muted-foreground medical-body">
            Despite decades of incremental improvement, dominant categories of prosthetic
            valves still force surgeons into the same compromises.
          </p>
        </div>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 80}>
            <div className="rounded-xl bg-card border border-border p-6 shadow-card h-full">
              <div className="text-3xl font-bold text-primary">{s.value}</div>
              <div className="text-sm text-foreground mt-2 leading-snug">{s.label}</div>
              <div className="text-[11px] text-muted-foreground mt-2">Source: {s.source}</div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map(({ icon: Icon, title, body }, i) => (
          <Reveal key={title} delay={i * 80}>
            <div className="bg-card rounded-xl p-6 border border-border shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-1 h-full">
              <div className="h-11 w-11 rounded-lg gradient-primary flex items-center justify-center mb-5 shadow-glow">
                <Icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="mb-3 text-base">{title}</h3>
              <p className="text-sm text-muted-foreground">{body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
