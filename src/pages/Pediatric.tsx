import { Link } from "react-router-dom";
import { PageShell } from "@/components/site/PageShell";
import { Seo } from "@/components/site/Seo";
import { Button } from "@/components/ui/button";
import { Baby, HeartPulse, Sparkles, ShieldCheck, ArrowRight, FileText } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Designed to grow with the patient",
    body: "TxGuard® is engineered to support host-mediated remodeling, observed in pre-clinical models to adapt with somatic growth, addressing a critical limitation of fixed bioprosthetic conduits.",
  },
  {
    icon: ShieldCheck,
    title: "Engineered to resist calcification",
    body: "Calcification is a primary driver of bioprosthetic failure in pediatric patients. The TxGuard® platform is designed to mitigate this dominant mode of degeneration.",
  },
  {
    icon: HeartPulse,
    title: "FDA Humanitarian Use Device designation",
    body: "The TxGuard® Pulmonary Valved Graft received FDA HUD designation in 2020, a regulatory milestone advancing access for pediatric congenital heart disease.",
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
      title={<>For the <span className="text-gradient">youngest patients</span>, a conduit designed to adapt</>}
      intro="The TxGuard® Pulmonary Valved Graft is a regenerative-tissue conduit being developed for the right ventricular outflow tract, designed for children whose hearts are still growing."
      heroImage="/hero/baby-doctor.jpg"
    >
      <Seo
        title="Pediatric Pulmonary Valved Graft, TxGuard® | Annoviant"
        description="The TxGuard® Pulmonary Valved Graft is being developed for pediatric congenital heart disease, designed to support host-mediated remodeling and reduce repeat interventions. FDA HUD designation, NIH-funded."
        jsonLd={ld}
      />

      <section className="py-20 md:py-28">
        <div className="container mx-auto grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3">
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
              The pediatric reality
            </p>
            <h2 className="mb-5">40,000 newborns. One urgent gap</h2>
            <p className="text-muted-foreground medical-body mb-5">
              Roughly 40,000 newborns in the U.S. are diagnosed with congenital heart disease
              each year. For those who need pulmonary valve replacement, today&rsquo;s
              bioprosthetic options cannot grow with the patient, meaning multiple
              high-risk re-interventions over a child&rsquo;s lifetime.
            </p>
            <p className="text-muted-foreground medical-body mb-8">
              The TxGuard® Pulmonary Valved Graft is being developed to address this gap.
              Backed by $5.7M in NIH funding and supported by a robust ecosystem of pediatric
              hospitals, FDA-funded device consortia, and key opinion leaders, it is
              engineered to integrate with host tissue and adapt with the patient.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="gradient-primary border-0">
                <Link to="/clinical-evidence">View pre-clinical data <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact?role=clinician">Request clinician briefing</Link>
              </Button>
            </div>
          </div>

          <aside className="lg:col-span-2 rounded-2xl bg-accent-soft border border-empathy/30 overflow-hidden">
            <img
              src="/hero/father-son.jpg"
              alt="A parent and child, Annoviant develops technology aimed at reducing the cycle of repeat heart surgeries for pediatric patients"
              loading="lazy"
              className="w-full h-48 object-cover"
            />
            <div className="p-7">
            <Baby className="h-7 w-7 text-[hsl(var(--empathy))] mb-4" />
            <h3 className="mb-3">For families</h3>
            <p className="text-sm text-foreground/80 mb-4">
              We know the weight of hearing your child needs heart surgery, and the deeper
              fear of being told it will need to happen again. Our work is grounded in a
              simple goal: a heart valve that can grow with your child, so that one surgery
              can mean one surgery.
            </p>
            <p className="text-sm text-foreground/80 mb-5">
              The technology is investigational. We share what we know, and what we don&rsquo;t
              yet, clearly.
            </p>
            <Button asChild variant="secondary" className="w-full">
              <Link to="/contact?role=patient">Sign up for updates</Link>
            </Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/40">
        <div className="container mx-auto">
          <h2 className="mb-12 max-w-2xl">Why TxGuard® for pediatric patients</h2>
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
              <h3 className="mb-2">Pre-clinical animal data</h3>
              <p className="text-sm text-muted-foreground">
                Performance has been characterized in aggressive lamb-to-sheep models under
                ISO 5840 and ISO 10993 guidance, with independent studies at reputable
                institutions. Pre-clinical animal results may not predict outcomes in humans.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
};
export default PediatricPage;
