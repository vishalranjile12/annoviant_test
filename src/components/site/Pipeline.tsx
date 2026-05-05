const stages = ["Discovery", "Pre-clinical", "IND-enabling", "First-in-human", "Pivotal"];
const programs = [
  { name: "TxGuard™ Heart Valve — Adult", stage: 2 },
  { name: "TxGuard™ Heart Valve — Pediatric", stage: 1 },
  { name: "TxGuard™ Soft-Tissue Repair", stage: 2 },
  { name: "Vascular Graft Program", stage: 1 },
];

export const Pipeline = () => (
  <section id="pipeline" className="py-24 md:py-32">
    <div className="container mx-auto">
      <div className="max-w-2xl mb-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
          Pipeline
        </p>
        <h2 className="mb-5">A platform — not a single product.</h2>
        <p className="text-muted-foreground medical-body">
          The TxGuard™ technology underpins multiple programs across cardiovascular and
          soft-tissue indications.
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-card shadow-card overflow-hidden">
        <div className="hidden md:grid grid-cols-[2fr_repeat(5,1fr)] gap-2 px-6 py-4 bg-muted/60 border-b border-border text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <div>Program</div>
          {stages.map((s) => <div key={s} className="text-center">{s}</div>)}
        </div>
        {programs.map((p, idx) => (
          <div
            key={p.name}
            className={`md:grid md:grid-cols-[2fr_repeat(5,1fr)] gap-2 items-center px-6 py-5 ${idx !== programs.length - 1 ? "border-b border-border" : ""}`}
          >
            <div className="font-semibold text-foreground mb-3 md:mb-0">{p.name}</div>
            <div className="md:col-span-5 relative">
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full gradient-primary transition-smooth"
                  style={{ width: `${((p.stage + 1) / stages.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
