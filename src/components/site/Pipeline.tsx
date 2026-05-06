const stages = ["Discovery", "Pre-clinical", "IND-enabling", "First-in-human", "Pivotal"];
const programs = [
  { name: "TxGuard® Pulmonary Valved Graft (Pediatric CHD)", stage: 2, badge: "FDA HUD designation (2020)" },
  { name: "TxGuard® Heart Valve, Aortic", stage: 1, badge: "Exploring" },
  { name: "TxGuard® Heart Valve, Mitral / Tricuspid", stage: 0, badge: "Potential" },
  { name: "TxGuard® Vascular Graft", stage: 1, badge: "Expanded potential" },
  { name: "TxGuard® Cardiac Patch", stage: 1, badge: "Exploring" },
];

export const Pipeline = () => (
  <section id="pipeline" className="py-24 md:py-32" aria-labelledby="pipeline-heading">
    <div className="container mx-auto">
      <div className="max-w-2xl mb-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
          What we're working on
        </p>
        <h2 id="pipeline-heading" className="mb-5">One platform. A handful of programs</h2>
        <p className="text-muted-foreground medical-body">
          We started with the Pulmonary Valved Graft because pediatric patients have the worst
          options today. The same platform can go further, though, and we're opening adjacent
          programs as the data earns it.
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-card shadow-card overflow-hidden">
        <div
          className="hidden md:grid grid-cols-[2.4fr_repeat(5,1fr)] gap-2 px-6 py-4 bg-muted/60 border-b border-border text-xs font-semibold uppercase tracking-wider text-muted-foreground"
          role="row"
        >
          <div role="columnheader">Program</div>
          {stages.map((s) => (
            <div key={s} role="columnheader" className="text-center">{s}</div>
          ))}
        </div>
        {programs.map((p, idx) => (
          <div
            key={p.name}
            role="row"
            className={`md:grid md:grid-cols-[2.4fr_repeat(5,1fr)] md:gap-2 md:items-center px-6 py-5 ${idx !== programs.length - 1 ? "border-b border-border" : ""}`}
          >
            <div className="mb-3 md:mb-0">
              <div className="font-semibold text-foreground">{p.name}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{p.badge}</div>
            </div>
            <div className="md:col-span-5 relative">
              <div className="h-2 rounded-full bg-muted overflow-hidden" aria-label={`Stage progress: ${stages[p.stage]}`}>
                <div
                  className="h-full gradient-primary transition-smooth"
                  style={{ width: `${((p.stage + 1) / stages.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground mt-5 max-w-3xl">
        Pipeline as of 2026. The Pulmonary Valved Graft holds an FDA Humanitarian Use Device
        designation (2020). Everything else is investigational and not yet approved for use in people.
      </p>
    </div>
  </section>
);
