import { useEffect, useMemo, useRef, useState } from "react";

// Signature "show, don't tell" section: a scaffold that fills with the
// patient's own cells and comes alive as you scroll. Three stages, three
// short captions. The visual carries the meaning; copy only labels it.
//
// Motion: a sticky SVG lattice. Each cell has a deterministic threshold; as
// the active stage advances 0 → 1 → 2 the "fill" rises and more cells turn
// from hollow scaffold rings into living (cyan) cells, with a final pulse.
// prefers-reduced-motion collapses to the final, living state with no scrub.

type Stage = {
  kicker: string;
  title: string;
  caption: string;
};

const STAGES: Stage[] = [
  {
    kicker: "Step 01",
    title: "A scaffold, implanted",
    caption:
      "The acellular TxGuard® scaffold is placed using the same technique surgeons already use — no new instruments.",
  },
  {
    kicker: "Step 02",
    title: "The body moves in",
    caption:
      "Recognizing familiar tissue cues, the patient's own cells migrate into the scaffold and repopulate it.",
  },
  {
    kicker: "Step 03",
    title: "It becomes living tissue",
    caption:
      "Over time the scaffold remodels into the patient's own tissue — and in young animals, it has grown with them.",
  },
];

// Deterministic pseudo-random so the lattice is stable across renders.
function seeded(n: number) {
  let s = n;
  return () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s / 0x7fffffff;
  };
}

type Cell = { x: number; y: number; r: number; threshold: number; delay: number };

function buildCells(): Cell[] {
  const rand = seeded(7);
  const cols = 14;
  const rows = 10;
  const cells: Cell[] = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const jx = (rand() - 0.5) * 5;
      const jy = (rand() - 0.5) * 5;
      const x = 8 + (col / (cols - 1)) * 84 + jx;
      const y = 8 + (row / (rows - 1)) * 84 + jy;
      cells.push({
        x,
        y,
        r: 1.6 + rand() * 0.9,
        threshold: rand(),
        delay: rand() * 220,
      });
    }
  }
  return cells;
}

export const Regeneration = () => {
  const [stage, setStage] = useState(0);
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const cells = useMemo(buildCells, []);
  const markers = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (reduced) {
      setStage(2);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number((e.target as HTMLElement).dataset.idx);
            setStage(idx);
          }
        });
      },
      // Fire when a stage marker reaches the vertical middle of the viewport.
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    markers.current.forEach((m) => m && obs.observe(m));
    return () => obs.disconnect();
  }, [reduced]);

  // Fill level: how much of the scaffold is "alive" at the current stage.
  const fill = stage / (STAGES.length - 1); // 0, 0.5, 1

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
            <div className="relative aspect-square w-full max-w-xl mx-auto rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden shadow-elegant">
              <div
                aria-hidden
                className="absolute inset-0 transition-opacity duration-700"
                style={{ opacity: 0.25 + fill * 0.55 }}
              >
                <div className="absolute left-1/2 top-1/2 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/25 blur-3xl" />
              </div>

              <svg
                viewBox="0 0 100 100"
                className={`relative w-full h-full ${stage === 2 && !reduced ? "heartbeat" : ""}`}
                role="img"
                aria-label={`Regeneration stage ${stage + 1} of 3: ${STAGES[stage].title}`}
              >
                {cells.map((c, i) => {
                  const alive = c.threshold <= fill + 0.001;
                  return (
                    <g key={i}>
                      {/* scaffold ring — always present, faint */}
                      <circle
                        cx={c.x}
                        cy={c.y}
                        r={c.r}
                        fill="none"
                        stroke="hsl(197 100% 70%)"
                        strokeWidth={0.35}
                        opacity={alive ? 0.25 : 0.4}
                        style={{ transition: `opacity 600ms ${c.delay}ms` }}
                      />
                      {/* living cell — fades/scales in when reached */}
                      <circle
                        cx={c.x}
                        cy={c.y}
                        r={c.r * 0.78}
                        fill="hsl(197 100% 50%)"
                        opacity={alive ? 0.9 : 0}
                        style={{
                          transformOrigin: `${c.x}px ${c.y}px`,
                          transform: alive ? "scale(1)" : "scale(0.2)",
                          transition: `opacity 600ms ${c.delay}ms, transform 600ms ${c.delay}ms`,
                        }}
                      />
                    </g>
                  );
                })}
              </svg>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] uppercase tracking-widest text-white/50">
                <span>Scaffold</span>
                <span className="flex-1 mx-3 h-px bg-white/10 relative">
                  <span
                    className="absolute inset-y-0 left-0 bg-secondary transition-all duration-700"
                    style={{ width: `${fill * 100}%` }}
                  />
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
          Based on pre-clinical animal studies (lamb-to-sheep models, ISO 5840 / 10993).
          Human results may differ. TxGuard® is investigational; the Pulmonary Valved Graft
          holds FDA Humanitarian Use Device designation (2020).
        </p>
      </div>
    </section>
  );
};
