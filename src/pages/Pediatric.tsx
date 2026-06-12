import { Link } from "react-router-dom";
import { PageShell } from "@/components/site/PageShell";
import { Seo } from "@/components/site/Seo";
import { Reveal } from "@/components/site/Reveal";
import { CountUp } from "@/components/site/CountUp";
import { Button } from "@/components/ui/button";
import { Baby, HeartPulse, Sparkles, ShieldCheck, ArrowRight, FileText, CheckCircle2 } from "lucide-react";

// CHD scope, ported from the original TxGuard Pediatric page
const chdScope = [
  { value: "1.3M", label: "newborns diagnosed with CHD globally each year" },
  { value: "40,000", label: "new U.S. CHD patients annually, primarily conotruncal anomalies" },
  { value: "2,500", label: "U.S. CHD newborns each year who need substitute conduit arteries" },
];

// The seven technology benefits from the original page, in their published order.
const technologyBenefits = [
  "Decellularized tissue can be physically stabilized for two-year storage.",
  "Immunogenic cellular materials are removed to reduce immunogenicity.",
  "An antioxidant in the tissue prevents oxidative damage during remodeling.",
  "No in-vitro bioreactor or stem-cell manipulation is required, simplifying the regulatory path.",
  "Scaffold is designed to resist calcification and thrombosis.",
  "Promotes remodeling while reducing the inflammatory response.",
  "Holds remodeling and growth potential, especially for juvenile patients.",
];

const benefits = [
  {
    icon: Sparkles,
    title: "Built to grow up with the child",
    body: "In animal studies, the scaffold remodels into the host's own tissue and appears to adapt with growth. That's the trait fixed bioprosthetics can't offer, and the reason pediatric patients keep coming back to surgery.",
  },
  {
    icon: ShieldCheck,
    title: "Engineered against calcification",
    body: "Calcification is what fails most pediatric heart valves earliest. We've designed TxGuard® to resist it, and the pre-clinical data so far is consistent with that.",
  },
  {
    icon: HeartPulse,
    title: "Already on the FDA's radar",
    body: "The Pulmonary Valved Graft holds an FDA Humanitarian Use Device designation since 2020, an early regulatory step that opens a faster path for pediatric congenital heart disease.",
  },
];

const PediatricPage = () => {
  const ld = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "TxGuard® for Pediatric Congenital Heart Disease",
    about: {
      "@type": "MedicalCondition",
      name: "Congenital Heart Disease",
    },
    audience: {
      "@type": "MedicalAudience",
      audienceType: ["Pediatric Cardiologist", "Cardiothoracic Surgeon", "Patient"],
    },
  };

  return (
    <PageShell
      eyebrow="Solutions · Pediatric"
      title={<>A heart valve that <span className="text-gradient">grows up with the child</span></>}
      intro="Children with congenital heart disease shouldn't need four open-chest surgeries before adulthood. The TxGuard® Pulmonary Valved Graft is our attempt to change that."
      heroImage="/hero/baby-doctor.jpg"
    >
      <Seo
        title="Pediatric Pulmonary Valved Graft, TxGuard® | Annoviant"
        description="The TxGuard® Pulmonary Valved Graft is being developed for pediatric congenital heart disease, designed to support host-mediated remodeling and reduce repeat interventions. FDA HUD designation, NIH-funded."
        jsonLd={ld}
      />

      {/* Storytelling anchor — what surgeons and parents already know but rarely say. */}
      <section className="py-16 md:py-20" aria-labelledby="story-heading">
        <div className="container mx-auto max-w-3xl">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
              The number nobody likes to say out loud
            </p>
            <h2 id="story-heading" className="text-2xl md:text-3xl mb-5 leading-snug">
              By the time a child with a complex congenital defect reaches adulthood, they have
              usually been on the operating table four to six times.
            </h2>
            <p className="text-muted-foreground medical-body text-lg">
              Each procedure carries real risk. Each one is harder than the last. Pediatric
              cardiothoracic surgeons know this number. So do the parents who have lived through
              it. We built TxGuard® because the implant that does not grow with the child is what
              keeps bringing them back.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/40">
        <div className="container mx-auto grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3">
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
              Why pediatrics first
            </p>
            <h2 className="mb-5">40,000 newborns. The same impossible problem.</h2>
            <p className="text-muted-foreground medical-body mb-5">
              Around 40,000 newborns in the U.S. are diagnosed with congenital heart disease every
              year. The ones who need a pulmonary valve replacement face a quiet but brutal cycle:
              the valve doesn&rsquo;t grow, the child does, so the surgery comes around again. And again.
            </p>
            <p className="text-muted-foreground medical-body mb-8">
              The Pulmonary Valved Graft is the program closest to our hearts, and the first one
              we&rsquo;re bringing forward. With $5.7M in NIH funding behind it, and partnerships with
              pediatric hospitals and FDA-funded device consortia, it&rsquo;s designed to integrate with
              the child&rsquo;s own tissue rather than be replaced by it.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="gradient-primary border-0">
                <Link to="/clinical-evidence">See the pre-clinical data <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact?role=clinician">Talk to our clinical team</Link>
              </Button>
            </div>
          </div>

          <aside className="lg:col-span-2 rounded-2xl bg-accent-soft border border-empathy/30 overflow-hidden">
            <img
              src="/hero/father-son.jpg"
              alt="A father holding his young son, the people this work is for"
              loading="lazy"
              className="w-full h-48 object-cover"
            />
            <div className="p-7">
              <Baby className="h-7 w-7 text-[hsl(var(--empathy))] mb-4" />
              <h3 className="mb-3">If you're a parent reading this</h3>
              <p className="text-sm text-foreground/80 mb-4">
                We know what it's like to hear that your child needs heart surgery, and how much
                worse it sounds when you're told they'll need it again. We're working toward the
                opposite outcome: one surgery that lasts.
              </p>
              <p className="text-sm text-foreground/80 mb-5">
                We're not there yet. The technology is still investigational. We'll tell you what
                we know, and where we're still working, as honestly as we can.
              </p>
              <Button asChild variant="secondary" className="w-full">
                <Link to="/contact?role=patient">Keep me posted</Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>

      {/* CHD scope stripe, ported from the original TxGuard Pediatric page */}
      <section className="py-12 md:py-16" aria-labelledby="chd-scope-heading">
        <div className="container mx-auto">
          <Reveal>
            <div className="max-w-2xl mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-3">
                The numbers behind congenital heart disease
              </p>
              <h2 id="chd-scope-heading" className="mb-3 text-xl md:text-2xl">Why pediatric, and why now</h2>
              <p className="text-muted-foreground medical-body">
                Most of the conotruncal anomalies and right-ventricular outflow conditions
                require pulmonary-circulation conduit or patch augmentation. The materials in
                use today are still the limiting factor.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border">
            {chdScope.map((s) => (
              <div key={s.label} className="bg-background px-5 md:px-6 py-6">
                <CountUp value={s.value} className="block text-2xl md:text-3xl font-bold text-primary tabular-nums" />
                <p className="text-xs text-muted-foreground mt-2 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TxGuard technology benefits + cell matrix animation, ported from original */}
      <section className="py-20 md:py-28 bg-muted/40" aria-labelledby="benefits-heading">
        <div className="container mx-auto">
          <Reveal>
            <figure className="mb-14 md:mb-16">
              <img
                src="/hero/cell-matrix-stages.gif"
                alt="Animation of host cells repopulating the TxGuard scaffold over time, the implanted scaffold is gradually remodeled into living tissue and grows with the patient"
                width={1600}
                height={1600}
                loading="lazy"
                className="w-full h-auto"
              />
              <figcaption className="mt-3 text-[11px] text-muted-foreground text-center">
                Pre-clinical animation. Host cells repopulating the scaffold and remodeling it
                into living tissue.
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={120}>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-3">
                Why TxGuard® for pediatric patients
              </p>
              <h2 id="benefits-heading" className="mb-5">
                Seven properties that matter when the patient is still growing
              </h2>
              <p className="text-muted-foreground medical-body mb-6">
                Today&rsquo;s replacement materials have significant limitations, thrombogenicity,
                durability issues, infection susceptibility, and no growth potential, so
                pediatric patients face multiple re-interventions. TxGuard® is engineered against
                each of those failure modes.
              </p>
              <ul className="space-y-3" aria-label="TxGuard benefits for pediatric patients">
                {technologyBenefits.map((b) => (
                  <li key={b} className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" aria-hidden />
                    <span className="text-sm text-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto">
          <h2 className="mb-12 max-w-2xl">Three reasons we're starting here</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-card rounded-xl p-7 border border-border shadow-card">
                <div className="h-11 w-11 rounded-lg gradient-primary grid place-items-center mb-5 shadow-glow">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="mb-3">{title}</h3>
                <p className="text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-border bg-card p-7 md:p-9 grid md:grid-cols-[auto_1fr] gap-6 items-center">
            <FileText className="h-12 w-12 text-primary md:mr-4" />
            <div>
              <h3 className="mb-2">A note on what we know, and don't</h3>
              <p className="text-sm text-muted-foreground">
                What we've shown to date comes from aggressive lamb-to-sheep models, run under
                ISO 5840 and ISO 10993, with independent studies at reputable institutions.
                That's a high bar, but it's not human data. Translation to people is what we're
                working on next.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
};
export default PediatricPage;
