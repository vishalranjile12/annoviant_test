import { AlertTriangle, RefreshCw, Baby, HeartPulse } from "lucide-react";
import { Reveal } from "./Reveal";

const stats = [
  { value: "127M+", label: "U.S. adults living with cardiovascular disease", source: "American Heart Association" },
  { value: "40,000", label: "newborns diagnosed with congenital heart disease every year", source: "CDC" },
  { value: "~1M", label: "cardiovascular surgeries every year in the U.S.", source: "CDC" },
  { value: "$418B", label: "what cardiovascular disease costs the U.S. annually", source: "AHA" },
];

const items = [
  {
    icon: AlertTriangle,
    title: "The valves we have today break down",
    body: "Bioprosthetics fixed with glutaraldehyde calcify, clot, and lose their structure over time. We've been working around that since the 1970s.",
  },
  {
    icon: RefreshCw,
    title: "Patients come back for surgery",
    body: "When a valve fails, the patient is back in the OR. Re-operations are riskier, more expensive, and harder on families than the first surgery.",
  },
  {
    icon: Baby,
    title: "Children outgrow what we put inside them",
    body: "A child's heart keeps growing. The implant doesn't. So pediatric patients can face four, five, even six open-chest surgeries before adulthood.",
  },
  {
    icon: HeartPulse,
    title: "And the burden isn't shared evenly",
    body: "Heart disease falls hardest on older adults and on historically underserved communities. Better, more durable implants are a public-health priority, not just a medical one.",
  },
];

export const Problem = () => (
  <section className="py-24 md:py-32 bg-muted/40" aria-labelledby="problem-heading">
    <div className="container mx-auto">
      <Reveal>
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
            The problem we keep coming back to
          </p>
          <h2 id="problem-heading" className="mb-5">
            Heart patients deserve implants that <span className="text-gradient">don't fail them</span>
          </h2>
          <p className="text-muted-foreground medical-body">
            Bioprosthetic valves have improved a lot in fifty years. They still ask surgeons to make
            the same uncomfortable trade-offs they always have. Here's what that looks like in numbers.
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
