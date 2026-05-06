import { PageShell } from "@/components/site/PageShell";
import { Seo } from "@/components/site/Seo";
import { RegenerationTimeline } from "@/components/site/RegenerationTimeline";
import { Reveal } from "@/components/site/Reveal";
import { CountUp } from "@/components/site/CountUp";
import { CheckCircle2, Beaker, Layers, Activity, ShieldCheck, Info, Sparkles, Wind, Droplet } from "lucide-react";
import scaffold from "@/assets/tissue-scaffold.jpg";

const productAttributes = [
  { icon: Sparkles, label: "Regenerative", note: "Host cells repopulate the scaffold", image: "/hero/attributes/regenerative.jpg" },
  { icon: Droplet, label: "Thrombo-resistant", note: "Designed against clot formation", image: "/hero/attributes/thrombo-resistant.jpg" },
  { icon: ShieldCheck, label: "Calcification-resistant", note: "Engineered against the dominant failure mode", image: "/hero/attributes/calcification.jpg" },
  { icon: Wind, label: "Pliable", note: "Handles like native tissue", image: "/hero/attributes/pliable.jpg" },
];

const cvdStats = [
  { value: "48%", label: "of U.S. adults are affected by cardiovascular disease (CVD)" },
  { value: "120M", label: "CVD cases per year in the U.S., projected to reach 184M by 2050" },
  { value: "580K", label: "valve-replacement and CABG surgeries every year in the U.S." },
  { value: "~25%", label: "of CVD patients face combined heart valve and coronary artery disease" },
];

const pillars = [
  { icon: Layers, title: "Decellularized ECM scaffold", body: "A proprietary process removes immunogenic cellular material while aiming to preserve the native extracellular matrix architecture and biochemical signaling cues." },
  { icon: Activity, title: "Host-cell repopulation", body: "Once implanted, the scaffold is designed to be recognized as native tissue, recruiting the patient's own cells to remodel and regenerate functional tissue." },
  { icon: ShieldCheck, title: "Calcification-resistant by design", body: "Engineered to address the dominant failure modes of conventional bioprosthetics, calcification, thrombosis, and accelerated structural degeneration." },
  { icon: Beaker, title: "Pliable & durable", body: "Mechanical performance is maintained across the processing pipeline, supporting tissue that handles like native and is engineered to last." },
];

const TechnologyPage = () => {
  const ld = {
    "@context": "https://schema.org",
    "@type": "MedicalDevice",
    name: "TxGuard®",
    manufacturer: { "@type": "Organization", name: "Annoviant, Inc." },
    description: "TxGuard® is a patented regenerative tissue platform engineered to integrate, adapt, and endure for cardiovascular and soft-tissue applications.",
    purpose: "Regenerative tissue scaffold for cardiovascular and soft-tissue indications",
    medicalSpecialty: ["Cardiology", "Pediatrics", "CardiothoracicSurgery"],
  };

  return (
    <PageShell
      eyebrow="The TxGuard® Platform"
      title={<>A regenerative tissue platform, engineered to <span className="text-gradient">grow with the patient</span></>}
      intro="TxGuard® is a patented breakthrough in regenerative tissue. Unlike fixed bioprosthetics, it is designed to integrate with host tissue, address the failure modes of today's devices, and last."
      heroImage="/hero/heart-matrix.jpg"
    >
      <Seo
        title="TxGuard® Technology, Regenerative Tissue Platform | Annoviant"
        description="How the patented TxGuard® regenerative tissue platform works: decellularized ECM scaffold, host-mediated remodeling, and calcification resistance, backed by 14 peer-reviewed publications."
        jsonLd={ld}
      />

      {/* The CVD problem stripe, ported from the original About TxGuard page */}
      <section className="py-16 md:py-20 bg-muted/40" aria-labelledby="cvd-heading">
        <div className="container mx-auto">
          <Reveal>
            <div className="max-w-2xl mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-3">
                Why this matters
              </p>
              <h2 id="cvd-heading" className="mb-4">The problem we set out to solve</h2>
              <p className="text-muted-foreground medical-body">
                Cardiovascular disease is the leading cause of death in the United States.
                Around one in four CVD patients face combined heart valve disease and coronary
                artery disease, and surgeons are still working with materials that have been
                largely unchanged for fifty years.
              </p>
            </div>
          </Reveal>
          {/* gap-px stripe pattern, no outer frame */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {cvdStats.map((s) => (
              <div key={s.label} className="bg-background px-5 md:px-6 py-6">
                <CountUp value={s.value} className="block text-2xl md:text-3xl font-bold text-primary tabular-nums" />
                <p className="text-xs text-muted-foreground mt-2 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-muted-foreground mt-4">
            Sources: AHA, CDC. Projections per published reports.
          </p>
        </div>
      </section>

      {/* Cell-matrix animation, the iconic TxGuard visual from the original site */}
      <section className="py-20 md:py-28" aria-labelledby="matrix-heading">
        <div className="container mx-auto">
          <Reveal>
            <figure className="mb-14 md:mb-16">
              <img
                src="/hero/cell-matrix-stages.gif"
                alt="Animated illustration of host cells repopulating the TxGuard scaffold over time, the implanted scaffold is gradually remodeled into living tissue"
                width={1600}
                height={1600}
                loading="lazy"
                className="w-full h-auto"
              />
              <figcaption className="mt-3 text-[11px] text-muted-foreground text-center">
                Pre-clinical animation. Host cells repopulating the scaffold and remodeling
                it into living tissue.
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={120}>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-3">
                What TxGuard® is
              </p>
              <h2 id="matrix-heading" className="mb-5">
                Decellularized scaffold &middot; patented stabilization &middot; living tissue
              </h2>
              <p className="text-muted-foreground medical-body mb-5">
                Annoviant&rsquo;s TxGuard® process decellularizes biological tissue, stabilizes
                it with patented chemistry, and applies a proprietary sterilization. The result
                is an off-the-shelf scaffold that the body recognizes as native: cells migrate
                in, the matrix is gradually remodeled, and the implant becomes the patient&rsquo;s
                own tissue.
              </p>
              <p className="text-muted-foreground medical-body">
                In pre-clinical sheep models studied to roughly five human-equivalent years,
                TxGuard® showed normal clinical function with no calcification, thrombosis,
                infection, or tissue overgrowth, plus successful host cell&ndash;mediated
                remodeling.
              </p>
            </div>

            {/* The four product attributes, image-led cards from the original site */}
            <ul className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4" aria-label="TxGuard product attributes">
              {productAttributes.map(({ icon: Icon, label, note, image }) => (
                <li key={label} className="rounded-xl border border-border bg-card overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={image}
                      alt={`${label} attribute`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <Icon className="h-4 w-4 text-primary" aria-hidden />
                      <span className="text-sm font-semibold text-foreground">{label}</span>
                    </div>
                    <p className="text-[11px] text-muted-foreground leading-snug">{note}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/40">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <img
            src={scaffold}
            alt="Microscopic illustration of the TxGuard regenerative tissue scaffold showing extracellular matrix architecture"
            width={1280}
            height={960}
            loading="lazy"
            className="w-full h-auto"
          />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-3">
              The process
            </p>
            <h2 className="mb-5">How it works</h2>
            <p className="text-muted-foreground medical-body mb-6">
              The TxGuard® process gently removes cellular content while protecting the
              biochemical and structural integrity of the extracellular matrix. The result is
              an acellular scaffold designed to be recognized by the body as its own, a
              blueprint for regeneration, not a foreign implant.
            </p>
            <ul className="space-y-3 mb-8" aria-label="Key technical features">
              {[
                "Designed to preserve native ECM architecture",
                "Engineered to remove immunogenic cellular debris",
                "Maintains tensile and elastic mechanics",
                "Compatible with cardiac and soft-tissue indications",
              ].map((f) => (
                <li key={f} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="border-l-2 border-primary/30 pl-5">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-2">
                <Info className="h-4 w-4" aria-hidden /> Tissue source disclosure
              </p>
              <p className="text-sm text-muted-foreground">
                TxGuard® scaffolds are produced from xenogeneic (bovine and porcine) tissue
                decellularized through Annoviant&rsquo;s proprietary platform. We disclose
                source materials transparently to support informed clinical, ethical, and
                religious decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      <RegenerationTimeline />

      <section className="py-20 md:py-28">
        <div className="container mx-auto">
          <Reveal>
            <div className="max-w-2xl mb-14">
              <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
                What sets it apart
              </p>
              <h2 className="mb-4">Four pillars of the TxGuard® approach</h2>
              <p className="text-muted-foreground medical-body">
                The science is best understood in plain terms. Here's the four ideas that, taken
                together, define how the platform works.
              </p>
            </div>
          </Reveal>

          <ol className="space-y-12 md:space-y-16 max-w-5xl">
            {pillars.map(({ icon: Icon, title, body }, i) => (
              <Reveal as="li" key={title} delay={i * 80}>
                <article
                  className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start ${
                    i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="md:col-span-4 flex md:flex-col items-baseline md:items-start gap-4">
                    <span className="text-5xl md:text-6xl font-bold text-primary/25 leading-none tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="h-12 w-12 rounded-xl gradient-primary grid place-items-center shadow-glow md:mt-2">
                      <Icon className="h-5 w-5 text-primary-foreground" aria-hidden />
                    </div>
                  </div>
                  <div className="md:col-span-8 md:border-l md:border-border md:pl-8">
                    <h3 className="mb-3 text-xl">{title}</h3>
                    <p className="text-base text-muted-foreground medical-body">{body}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </PageShell>
  );
};
export default TechnologyPage;
