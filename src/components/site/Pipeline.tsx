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
          Pipeline
        </p>
        <h2 id="pipeline-heading" className="mb-5">A platform, not a single product</h2>
        <p className="text-muted-foreground medical-body">
          The TxGuard® regenerative tissue platform underpins multiple programs across cardiovascular
          and soft-tissue indications, led by the Pulmonary Valved Graft for pediatric congenital
          heart disease.
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
        Pipeline status as of 2026. All programs except the Pulmonary Valved Graft (FDA HUD
        designation, 2020) are investigational and not approved for human use.
      </p>
    </div>
  </section>
);
