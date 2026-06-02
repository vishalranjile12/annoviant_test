import { useEffect, useMemo, useRef, useState } from "react";

// Signature "show, don't tell" section: a fibrous scaffold that is repopulated
// by the patient's own cells and remodels into organized living tissue as you
// scroll. The visual emulates real tissue, not an abstract diagram:
//   Stage 1 — a cool, porous ECM fiber mesh (cf. decellularized-scaffold SEM)
//   Stage 2 — rounded cells with nuclei migrate into the pores
//   Stage 3 — warm, aligned muscle fibers with oval nuclei + cross-striations
//             (cf. cardiac-muscle histology)
//
// Three layers cross-fade as the active stage advances (fill 0 → 0.5 → 1), so
// the motion is smooth and cheap. prefers-reduced-motion jumps to the final
// living-tissue state.

type Stage = { kicker: string; title: string; caption: string };

const STAGES: Stage[] = [
  {
    kicker: "Step 01",
    title: "A scaffold, implanted",
    caption:
      "The acellular TxGuard® scaffold — a fibrous extracellular-matrix mesh — is placed using the technique surgeons already use.",
  },
  {
    kicker: "Step 02",
    title: "The body moves in",
    caption:
      "Recognizing familiar matrix cues, the patient's own cells migrate into the scaffold's pores and repopulate it.",
  },
  {
    kicker: "Step 03",
    title: "It becomes living tissue",
    caption:
      "The cells organize and the matrix remodels into aligned, living tissue — the patient's own, and in young animals, able to grow.",
  },
];

// Deterministic PRNG so geometry is stable across renders.
function seeded(n: number) {
  let s = n;
  return () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s / 0x7fffffff;
  };
}

// ---- Scaffold mesh: a dense, triangulated wire-mesh draped with layered
//      waves — like a real surgical scaffold sheet (cf. reference image),
//      rendered light-on-dark. Vertices are displaced by summed sines so the
//      sheet undulates; triangle edges form the porous lattice; two crest
//      lines read as the bold folds. ----
function buildScaffold() {
  const rand = seeded(11);
  const cols = 30;
  const rows = 11;
  // vertex grid with wave displacement + slight per-vertex jitter
  const wave = (c: number, r: number) => {
    const u = c / (cols - 1);
    const v = r / (rows - 1);
    return (
      Math.sin(u * 7.5 + v * 1.6) * 4.5 +
      Math.sin(u * 3.1 - 0.6) * 5 +
      Math.sin(u * 13 + v * 4) * 1.2
    );
  };
  const pts: { x: number; y: number }[][] = [];
  for (let r = 0; r < rows; r++) {
    const row: { x: number; y: number }[] = [];
    for (let c = 0; c < cols; c++) {
      const x = (c / (cols - 1)) * 104 - 2 + (rand() - 0.5) * 1.4;
      const baseY = 24 + (r / (rows - 1)) * 52;
      row.push({ x, y: baseY + wave(c, r) + (rand() - 0.5) * 1.2 });
    }
    pts.push(row);
  }
  // triangulated edges -> one path string
  let mesh = "";
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const p = pts[r][c];
      if (c < cols - 1) mesh += `M${p.x.toFixed(1)} ${p.y.toFixed(1)}L${pts[r][c + 1].x.toFixed(1)} ${pts[r][c + 1].y.toFixed(1)}`;
      if (r < rows - 1) mesh += `M${p.x.toFixed(1)} ${p.y.toFixed(1)}L${pts[r + 1][c].x.toFixed(1)} ${pts[r + 1][c].y.toFixed(1)}`;
      if (r < rows - 1 && c < cols - 1) mesh += `M${p.x.toFixed(1)} ${p.y.toFixed(1)}L${pts[r + 1][c + 1].x.toFixed(1)} ${pts[r + 1][c + 1].y.toFixed(1)}`;
    }
  }
  // a couple of bold crest lines along rows for the "fold" emphasis
  const ridge = (r: number) =>
    pts[r].map((p, c) => `${c === 0 ? "M" : "L"}${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(" ");
  const ridges = [ridge(3), ridge(7)];
  return { mesh, ridges };
}

// ---- Migrating cells: rounded bodies with a darker nucleus ----
function buildCells() {
  const rand = seeded(29);
  return Array.from({ length: 30 }, () => ({
    x: 8 + rand() * 84,
    y: 8 + rand() * 84,
    rx: 2 + rand() * 1.2,
    ry: 1.5 + rand() * 0.9,
    rot: rand() * 180,
    delay: rand() * 240,
  }));
}

// ---- Organized fibers: aligned muscle bands with nuclei + striations ----
function buildFibers() {
  const rand = seeded(47);
  const angle = -15;
  return Array.from({ length: 6 }, (_, i) => {
    const y = 12 + i * 14.5 + (rand() - 0.5) * 4;
    return {
      y,
      angle: angle + (rand() - 0.5) * 6,
      h: 8.5 + rand() * 2,
      nuclei: [-26 + rand() * 6, 2 + rand() * 6, 26 + rand() * 6],
      striations: Array.from({ length: 13 }, (_, k) => -42 + k * 7),
      delay: i * 90,
    };
  });
}

export const Regeneration = () => {
  const [stage, setStage] = useState(0);
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const scaffold = useMemo(buildScaffold, []);
  const cells = useMemo(buildCells, []);
  const fibers = useMemo(buildFibers, []);
  const markers = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (reduced) {
      setStage(2);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setStage(Number((e.target as HTMLElement).dataset.idx));
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    markers.current.forEach((m) => m && obs.observe(m));
    return () => obs.disconnect();
  }, [reduced]);

  const fill = stage / (STAGES.length - 1); // 0, 0.5, 1
  const clamp = (n: number) => Math.max(0, Math.min(1, n));
  // Layer opacities as smooth functions of fill.
  const scaffoldOpacity = clamp(0.9 - 0.78 * fill);
  const cellsOpacity = fill < 0.5 ? clamp(fill * 2) : clamp(1 - (fill - 0.5) * 1.3);
  const tissueOpacity = clamp((fill - 0.4) / 0.6);

  return (
    <section
      id="regeneration"
      className="relative bg-surface-deep text-white"
      aria-labelledby="regeneration-heading"
    >
      <div className="container mx-auto py-20 md:py-28">
        <div className="max-w-2xl mb-6 md:mb-2">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
            How it works
          </p>
          <h2 id="regeneration-heading" className="text-white">
            From scaffold to <span className="text-gradient">living tissue</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Sticky visual */}
          <div className="lg:sticky lg:top-24 order-1">
            <div className="relative aspect-square w-full max-w-xl mx-auto rounded-3xl border border-white/10 bg-[hsl(220_45%_7%)] overflow-hidden shadow-elegant">
              {/* ambient glow shifts cool -> warm as tissue forms */}
              <div
                aria-hidden
                className="absolute left-1/2 top-1/2 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/20 blur-3xl transition-opacity duration-700"
                style={{ opacity: 0.6 * (1 - fill) }}
              />
              <div
                aria-hidden
                className="absolute left-1/2 top-1/2 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl transition-opacity duration-700"
                style={{ opacity: 0.45 * fill, background: "radial-gradient(circle, hsl(345 60% 55% / 0.5), transparent 70%)" }}
              />

              <svg viewBox="0 0 100 100" className="relative w-full h-full" role="img"
                aria-label={`Regeneration stage ${stage + 1} of 3: ${STAGES[stage].title}`}>
                <defs>
                  <linearGradient id="fiberFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="hsl(350 55% 68%)" />
                    <stop offset="0.5" stopColor="hsl(345 52% 58%)" />
                    <stop offset="1" stopColor="hsl(338 48% 47%)" />
                  </linearGradient>
                </defs>

                {/* Layer 1 — triangulated scaffold wire-mesh (light on dark) */}
                <g style={{ opacity: scaffoldOpacity, transition: "opacity 600ms ease" }}>
                  <path d={scaffold.mesh} fill="none" stroke="hsl(222 55% 80%)" strokeWidth={0.18}
                    strokeLinejoin="round" opacity={0.5} />
                  {scaffold.ridges.map((d, i) => (
                    <path key={i} d={d} fill="none" stroke="hsl(210 80% 86%)" strokeWidth={0.5}
                      strokeLinecap="round" strokeLinejoin="round" opacity={0.85} />
                  ))}
                </g>

                {/* Layer 2 — migrating cells with nuclei */}
                <g style={{ opacity: cellsOpacity, transition: "opacity 600ms ease" }}>
                  {cells.map((c, i) => (
                    <g key={i} transform={`translate(${c.x} ${c.y}) rotate(${c.rot})`}
                      style={{ transition: `opacity 500ms ${c.delay}ms` }}>
                      <ellipse rx={c.rx} ry={c.ry} fill="hsl(348 45% 62%)" opacity={0.85} />
                      <ellipse rx={c.rx * 0.5} ry={c.ry * 0.5} fill="hsl(290 35% 24%)" />
                    </g>
                  ))}
                </g>

                {/* Layer 3 — organized cardiac fibers (aligned, striated, nucleated) */}
                <g style={{ opacity: tissueOpacity, transition: "opacity 700ms ease" }}>
                  {fibers.map((f, i) => (
                    <g key={i} transform={`translate(50 ${f.y}) rotate(${f.angle})`}>
                      <rect x={-48} y={-f.h / 2} width={96} height={f.h} rx={f.h / 2}
                        fill="url(#fiberFill)" opacity={0.92} />
                      {/* cross-striations */}
                      {f.striations.map((sx, k) => (
                        <line key={k} x1={sx} y1={-f.h / 2 + 1} x2={sx} y2={f.h / 2 - 1}
                          stroke="hsl(338 55% 38%)" strokeWidth={0.45} opacity={0.55} />
                      ))}
                      {/* oval nuclei along the fiber */}
                      {f.nuclei.map((nx, k) => (
                        <ellipse key={k} cx={nx} cy={0} rx={2.6} ry={1.5}
                          fill="hsl(288 40% 22%)" />
                      ))}
                    </g>
                  ))}
                </g>
              </svg>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] uppercase tracking-widest text-white/50">
                <span>Scaffold</span>
                <span className="flex-1 mx-3 h-px bg-white/10 relative">
                  <span className="absolute inset-y-0 left-0 bg-secondary transition-all duration-700"
                    style={{ width: `${fill * 100}%` }} />
                </span>
                <span>Living tissue</span>
              </div>
            </div>
          </div>

          {/* Scrolling stages */}
          <ol className="order-2">
            {STAGES.map((s, i) => (
              <li
                key={s.title}
                ref={(el) => (markers.current[i] = el)}
                data-idx={i}
                className="min-h-[58vh] flex flex-col justify-center"
              >
                <div
                  className="transition-all duration-500"
                  style={{
                    opacity: reduced || stage === i ? 1 : 0.35,
                    transform: reduced || stage === i ? "none" : "translateY(8px)",
                  }}
                >
                  <p className="text-xs font-bold uppercase tracking-widest text-secondary mb-3">
                    {s.kicker}
                  </p>
                  <h3 className="text-white text-2xl md:text-3xl mb-4">{s.title}</h3>
                  <p className="text-white/70 medical-body text-lg">{s.caption}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <p className="text-[11px] text-white/40 mt-4 max-w-3xl">
          Illustrative. Based on pre-clinical animal studies (lamb-to-sheep models, ISO 5840 / 10993);
          human results may differ. TxGuard® is investigational; the Pulmonary Valved Graft holds FDA
          Humanitarian Use Device designation (2020).
        </p>
      </div>
    </section>
  );
};
