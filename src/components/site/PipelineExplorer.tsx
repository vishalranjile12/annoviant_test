import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "./Reveal";
import { Heart, Activity, Droplet, Baby, Bandage, Stethoscope, ArrowRight, ShieldCheck } from "lucide-react";

// Interactive pipeline explorer (replaces the static pipeline table + the
// stacked program-card tiers). Filter by area, pick a program, and see where it
// sits on the development track with its status and detail — exploration in
// place of a wall of cards.

const STAGES = ["Discovery", "Pre-clinical", "IND-enabling", "First-in-human", "Pivotal"];

type Area = "Cardiac valve" | "Vascular" | "Soft tissue";

type Program = {
  id: string;
  name: string;
  area: Area;
  icon: typeof Heart;
  stage: number; // 0-4 index into STAGES
  status: string;
  body: string;
  href?: string;
  highlights?: { label: string; desc: string }[];
};

const PROGRAMS: Program[] = [
  {
    id: "ped-pulm",
    name: "Pediatric Pulmonary Valved Graft",
    area: "Cardiac valve",
    icon: Baby,
    stage: 2,
    status: "Lead · FDA HUD designation (2020)",
    body: "The valved graft we built first, designed to grow with children whose hearts won't stop changing. The reason we say one surgery should mean one surgery.",
    href: "/solutions/pediatric",
    highlights: [
      { label: "FDA HUD", desc: "designated 2020" },
      { label: "$5.7M", desc: "NIH funding" },
      { label: "ISO 5840", desc: "& 10993 studies" },
    ],
  },
  {
    id: "aortic",
    name: "Aortic Heart Valve",
    area: "Cardiac valve",
    icon: Heart,
    stage: 1,
    status: "Pre-clinical · advancing",
    body: "The adult indication where bioprosthetic failure hurts most — a regenerative valve engineered against calcification and structural degeneration.",
    href: "/solutions/cardiovascular",
  },
  {
    id: "mitral",
    name: "Mitral / Tricuspid Valve",
    area: "Cardiac valve",
    icon: Heart,
    stage: 0,
    status: "Exploring",
    body: "Extending the platform to the atrioventricular valves, where durable, remodeling tissue could change the calculus for younger patients.",
    href: "/solutions/cardiovascular",
  },
  {
    id: "patch",
    name: "Cardiac Patch",
    area: "Cardiac valve",
    icon: Activity,
    stage: 1,
    status: "Exploring",
    body: "A regenerative patch for congenital and structural repair that the body remodels into living myocardial support tissue rather than inert material.",
  },
  {
    id: "vascular",
    name: "Vascular Graft",
    area: "Vascular",
    icon: Activity,
    stage: 1,
    status: "Expanded potential",
    body: "A regenerative conduit for bypass and reconstruction, with the potential to remodel into living vessel rather than sit inert.",
  },
  {
    id: "urology",
    name: "Urological Reconstruction",
    area: "Soft tissue",
    icon: Droplet,
    stage: 0,
    status: "Exploratory",
    body: "Tissue scaffolds for urological reconstruction, where the body needs to heal in, not around, the implant.",
  },
  {
    id: "gi",
    name: "Gastrointestinal",
    area: "Soft tissue",
    icon: Stethoscope,
    stage: 0,
    status: "Exploratory",
    body: "Soft-tissue applications across the GI tract — places where regenerating the tissue beats replacing it.",
  },
  {
    id: "wound",
    name: "Wound & Soft Tissue",
    area: "Soft tissue",
    icon: Bandage,
    stage: 0,
    status: "Exploratory",
    body: "Regenerative scaffolds for the complex wound, hernia, and soft-tissue cases that don't fit a standard solution.",
  },
];

const AREAS: ("All" | Area)[] = ["All", "Cardiac valve", "Vascular", "Soft tissue"];

const StageTrack = ({ stage }: { stage: number }) => (
  <ol className="flex items-center gap-1.5" aria-label={`Development stage: ${STAGES[stage]}`}>
    {STAGES.map((s, i) => (
      <li key={s} className="flex-1">
        <div
          className={`h-1.5 rounded-full transition-smooth ${i <= stage ? "gradient-primary" : "bg-muted"}`}
        />
        <span
          className={`mt-2 block text-[10px] leading-tight ${
            i === stage ? "font-semibold text-foreground" : "text-muted-foreground"
          }`}
        >
          {s}
        </span>
      </li>
    ))}
  </ol>
);

export const PipelineExplorer = () => {
  const [area, setArea] = useState<"All" | Area>("All");
  const [selectedId, setSelectedId] = useState("ped-pulm");

  const visible = useMemo(
    () => (area === "All" ? PROGRAMS : PROGRAMS.filter((p) => p.area === area)),
    [area],
  );
  const selected = PROGRAMS.find((p) => p.id === selectedId) ?? visible[0];

  return (
    <section id="pipeline" className="py-24 md:py-32 bg-muted/30" aria-labelledby="pipeline-heading">
      <div className="container mx-auto">
        <Reveal>
          <div className="max-w-2xl mb-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
              What we're working on
            </p>
            <h2 id="pipeline-heading" className="mb-4">One platform. A pipeline you can explore</h2>
            <p className="text-muted-foreground medical-body">
              We started with the pediatric pulmonary valve because those patients have the worst
              options today. The same platform reaches further — pick a program to see where it
              stands.
            </p>
          </div>
        </Reveal>

        {/* Area filter */}
        <div className="flex flex-wrap gap-2 mb-6" role="group" aria-label="Filter by area">
          {AREAS.map((a) => (
            <button
              key={a}
              onClick={() => setArea(a)}
              aria-pressed={area === a}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-smooth border ${
                area === a
                  ? "gradient-primary text-primary-foreground border-transparent"
                  : "bg-card text-muted-foreground border-border hover:text-foreground"
              }`}
            >
              {a}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1fr_1.35fr] gap-5 lg:gap-8 items-start">
          {/* Program list */}
          <ul className="space-y-2" aria-label="Programs">
            {visible.map((p) => {
              const active = p.id === selected?.id;
              return (
                <li key={p.id}>
                  <button
                    onClick={() => setSelectedId(p.id)}
                    aria-pressed={active}
                    className={`w-full text-left rounded-xl border p-4 transition-smooth flex items-center gap-3 ${
                      active
                        ? "border-primary/50 bg-card shadow-card"
                        : "border-border bg-card/60 hover:bg-card hover:border-border"
                    }`}
                  >
                    <span
                      className={`h-9 w-9 rounded-lg grid place-items-center flex-shrink-0 ${
                        active ? "gradient-primary shadow-glow" : "bg-primary/10"
                      }`}
                    >
                      <p.icon className={`h-4 w-4 ${active ? "text-primary-foreground" : "text-primary"}`} aria-hidden />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-foreground truncate">{p.name}</span>
                      <span className="block text-xs text-muted-foreground truncate">{p.status}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Detail panel */}
          {selected && (
            <div
              className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-card lg:sticky lg:top-24"
              aria-live="polite"
            >
              <div className="flex items-center justify-between gap-3 mb-5">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-secondary bg-secondary/10 px-2.5 py-1 rounded-full">
                  {selected.area}
                </span>
                <span className="text-xs font-medium text-muted-foreground">{selected.status}</span>
              </div>

              <h3 className="text-2xl md:text-3xl mb-4">{selected.name}</h3>
              <p className="text-muted-foreground medical-body mb-7">{selected.body}</p>

              <div className="mb-7">
                <StageTrack stage={selected.stage} />
              </div>

              {selected.highlights && (
                <ul className="grid grid-cols-3 gap-4 mb-7">
                  {selected.highlights.map((h) => (
                    <li key={h.label} className="flex flex-col">
                      <ShieldCheck className="h-4 w-4 text-secondary mb-1.5" aria-hidden />
                      <span className="text-lg font-bold text-foreground tabular-nums leading-tight">{h.label}</span>
                      <span className="text-[11px] text-muted-foreground">{h.desc}</span>
                    </li>
                  ))}
                </ul>
              )}

              {selected.href && (
                <Link
                  to={selected.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition-smooth"
                >
                  Explore this program <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          )}
        </div>

        <p className="text-xs text-muted-foreground mt-8 max-w-3xl">
          Pipeline as of 2026. The pediatric Pulmonary Valved Graft holds an FDA Humanitarian Use
          Device designation (2020). Everything else is investigational and not yet approved for use
          in people.
        </p>
      </div>
    </section>
  );
};
