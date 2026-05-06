import { PageShell } from "@/components/site/PageShell";
import { Seo } from "@/components/site/Seo";
import { RegenerationTimeline } from "@/components/site/RegenerationTimeline";
import { Reveal } from "@/components/site/Reveal";
import { CheckCircle2, Beaker, Layers, Activity, ShieldCheck, Info } from "lucide-react";
import scaffold from "@/assets/tissue-scaffold.jpg";

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

      <section className="py-20 md:py-28">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <img
            src={scaffold}
            alt="Microscopic illustration of the TxGuard regenerative tissue scaffold showing extracellular matrix architecture"
            width={1280}
            height={960}
            loading="lazy"
            className="rounded-2xl shadow-elegant border border-border"
          />
          <div>
            <h2 className="mb-5">How it works</h2>
            <p className="text-muted-foreground medical-body mb-6">
              The TxGuard® process gently removes cellular content while protecting the
              biochemical and structural integrity of the extracellular matrix. The result is
              an acellular scaffold designed to be recognized by the body as its own, a
              blueprint for regeneration, not a foreign implant.
            </p>
            <ul className="space-y-3" aria-label="Key technical features">
              {[
                "Designed to preserve native ECM architecture",
                "Engineered to remove immunogenic cellular debris",
                "Maintains tensile and elastic mechanics",
                "Compatible with cardiac and soft-tissue indications",
              ].map((f) => (
                <li key={f} className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" /><span>{f}</span></li>
              ))}
            </ul>

            <div className="mt-8 rounded-xl border border-border bg-muted/40 p-5 flex gap-3">
              <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold text-foreground mb-1">Tissue source disclosure</p>
                <p className="text-muted-foreground">
                  TxGuard® scaffolds are produced from xenogeneic (bovine and porcine) tissue
                  decellularized through Annoviant&rsquo;s proprietary platform. We disclose
                  source materials transparently to support informed clinical, ethical, and
                  religious decision-making.
                </p>
              </div>
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
