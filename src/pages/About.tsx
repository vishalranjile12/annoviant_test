import { Link } from "react-router-dom";
import { PageShell } from "@/components/site/PageShell";
import { Seo } from "@/components/site/Seo";
import { Target, Users, Award, Eye, Heart, Lightbulb, ArrowRight } from "lucide-react";

const values = [
  { icon: Heart, title: "Customer focus", body: "We listen, engage, and deliver meaningful solutions for clinicians, patients, and partners." },
  { icon: Lightbulb, title: "Creativity", body: "We think creatively to solve critical healthcare challenges where incremental improvement has fallen short." },
  { icon: Users, title: "Collaboration", body: "We work together, across hospitals, consortia, and investors, to achieve greater impact." },
  { icon: Award, title: "Confidence", body: "We act with trust, accountability, and conviction, grounded in rigorous science." },
];

const AboutPage = () => {
  const ld = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Annoviant, Inc.",
    foundingDate: "2018",
    description: "Regenerative medicine company developing TxGuard®, a patented regenerative tissue platform for cardiovascular and soft-tissue applications.",
    url: "https://annoviant.com/",
    knowsAbout: ["Regenerative medicine", "Decellularized tissue", "Pediatric cardiac surgery", "Bioprosthetic alternatives"],
  };

  return (
    <PageShell
      eyebrow="About Annoviant"
      title={<>Innovations for <span className="text-gradient">healthier lives</span></>}
      intro="Annoviant is a regenerative medicine company developing TxGuard®, a patented tissue platform engineered to address the failure modes of today's bioprosthetics and improve outcomes for patients of every age."
      heroImage="/hero/heart-stock.jpg"
    >
      <Seo
        title="About Annoviant, Regenerative Medicine for Cardiovascular Surgery"
        description="Founded in 2018, Annoviant develops TxGuard®, a patented regenerative tissue platform, backed by $5.7M in NIH funding and a deep ecosystem of clinical, manufacturing, and academic partners."
        jsonLd={ld}
      />

      <section className="py-20 md:py-28">
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <Target className="h-7 w-7 text-primary mb-4" />
            <h3 className="mb-3">Our Mission</h3>
            <p className="text-muted-foreground text-sm">
              Redefining cardiovascular surgery through regenerative biomaterials that
              integrate, adapt, and endure, delivering durable outcomes for patients of every
              age.
            </p>
          </div>
          <div>
            <Eye className="h-7 w-7 text-primary mb-4" />
            <h3 className="mb-3">Our Vision</h3>
            <p className="text-muted-foreground text-sm">
              A world where heart surgery aims to require fewer repeat interventions,
              enabled by living, regenerative implants.
            </p>
          </div>
          <div>
            <Award className="h-7 w-7 text-primary mb-4" />
            <h3 className="mb-3">Recognition</h3>
            <p className="text-muted-foreground text-sm">
              Awarded $5.7M cumulative NIH funding, including $2.99M to advance the TxGuard®
              pulmonary-valved conduit for pediatric heart disease, alongside a portfolio of
              issued IP and pending applications.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/40">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
              Our values
            </p>
            <h2 className="mb-4">How we work</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-xl bg-card border border-border p-7 shadow-card">
                <Icon className="h-7 w-7 text-primary mb-4" />
                <h3 className="mb-2 text-base">{title}</h3>
                <p className="text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
              The journey
            </p>
            <h2 className="mb-5">Founded in 2018. Built on 25+ years of science</h2>
            <p className="text-muted-foreground medical-body mb-4">
              Annoviant was founded in 2018 to bring 25+ years of academic regenerative-tissue
              research, supported by more than $20M in cumulative grants, into a
              commercializable, multi-indication platform.
            </p>
            <p className="text-muted-foreground medical-body">
              Today, the company operates with manufacturing readiness at an ISO 13485
              facility, a rare milestone at this stage, and continues to advance the
              TxGuard® platform across cardiovascular and soft-tissue indications with input
              from leading clinical and scientific collaborators.
            </p>
          </div>
          <blockquote className="rounded-2xl bg-card border border-border p-9 shadow-card">
            <p className="font-handwritten text-3xl md:text-4xl text-foreground leading-tight">
              &ldquo;Our work is grounded in a simple goal: cardiovascular implants that
              integrate, adapt, and endure, for adults and for the children who deserve a
              chance to grow with their hearts.&rdquo;
            </p>
            <footer className="mt-6 flex items-center justify-between gap-3 flex-wrap">
              <span className="text-sm uppercase tracking-widest text-muted-foreground">
                Ajay Houde, Co-founder &amp; CEO
              </span>
              <Link
                to="/founder-story"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-secondary transition-smooth"
              >
                Read the founder story <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </footer>
          </blockquote>
        </div>
      </section>
    </PageShell>
  );
};
export default AboutPage;
