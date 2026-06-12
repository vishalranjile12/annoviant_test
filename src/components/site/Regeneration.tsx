import { Reveal } from "./Reveal";

// "From scaffold to living tissue" — the home's mechanism section.
// The visual is the real animated illustration (cell-matrix-stages.gif: the
// scaffold mesh repopulating into living tissue). The GIF ships on a white
// background, so we render it in dark mode — invert white→dark and screen-blend
// it onto the dark panel so the mesh reads as light lines, then tint to brand.
const STEPS = [
  {
    n: "01",
    title: "A scaffold, implanted",
    caption: "The acellular TxGuard® scaffold is placed using the technique surgeons already use.",
  },
  {
    n: "02",
    title: "The body moves in",
    caption: "The patient's own cells migrate into the scaffold's pores and repopulate it.",
  },
  {
    n: "03",
    title: "It becomes living tissue",
    caption: "The matrix remodels into aligned, living tissue — the patient's own, and in children, able to grow.",
  },
];

export const Regeneration = () => (
  <section
    id="regeneration"
    className="relative bg-surface-deep text-white py-20 md:py-28"
    aria-labelledby="regeneration-heading"
  >
    <div className="container mx-auto">
      <Reveal>
        <div className="max-w-2xl mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
            How it works
          </p>
          <h2 id="regeneration-heading" className="text-white">
            From scaffold to <span className="text-gradient">living tissue</span>
          </h2>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <figure className="relative rounded-3xl border border-white/10 bg-[hsl(220_45%_7%)] overflow-hidden shadow-elegant">
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/15 blur-3xl"
          />
          <img
            src="/hero/cell-matrix-stages.gif"
            alt="Animated illustration of host cells repopulating the TxGuard scaffold and remodeling it into living tissue"
            width={1600}
            height={520}
            loading="lazy"
            className="relative w-full h-auto"
            style={{ filter: "invert(1) hue-rotate(180deg) brightness(1.05)", mixBlendMode: "screen" }}
          />
        </figure>
      </Reveal>

      <ol className="mt-10 grid md:grid-cols-3 gap-6 md:gap-8">
        {STEPS.map((s, i) => (
          <Reveal as="li" key={s.n} delay={i * 100}>
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-2xl font-bold text-secondary tabular-nums">{s.n}</span>
              <h3 className="text-white text-lg md:text-xl">{s.title}</h3>
            </div>
            <p className="text-white/70 medical-body">{s.caption}</p>
          </Reveal>
        ))}
      </ol>

      <p className="text-[11px] text-white/40 mt-10 max-w-3xl">
        Illustrative. Based on pre-clinical animal studies (lamb-to-sheep models, ISO 5840 / 10993);
        human results may differ. TxGuard® is investigational; the Pulmonary Valved Graft holds FDA
        Humanitarian Use Device designation (2020).
      </p>
    </div>
  </section>
);
