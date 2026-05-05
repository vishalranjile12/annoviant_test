import { useEffect } from "react";
import { PageShell } from "@/components/site/PageShell";
import { Target, Users, Award } from "lucide-react";

const AboutPage = () => {
  useEffect(() => { document.title = "About — Annoviant"; }, []);
  return (
    <PageShell
      eyebrow="About Annoviant"
      title={<>Innovations for <span className="text-gradient">Healthier Lives</span>.</>}
      intro="Annoviant is a regenerative medicine company developing TxGuard™ — a patented tissue platform engineered to outlast today's bioprosthetics and improve outcomes for patients of every age."
    >
      <section className="py-20 md:py-28">
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <Target className="h-7 w-7 text-primary mb-4" />
            <h3 className="mb-3">Our Mission</h3>
            <p className="text-muted-foreground text-sm">To eliminate suffering from life-threatening cardiovascular and soft-tissue disease through regenerative innovation that grows with patients.</p>
          </div>
          <div>
            <Users className="h-7 w-7 text-primary mb-4" />
            <h3 className="mb-3">Who We Serve</h3>
            <p className="text-muted-foreground text-sm">Surgeons, healthcare organizations, and the patients — adult and pediatric — who deserve devices that don't fail them.</p>
          </div>
          <div>
            <Award className="h-7 w-7 text-primary mb-4" />
            <h3 className="mb-3">Recognition</h3>
            <p className="text-muted-foreground text-sm">Awarded a $2.99M NIH grant to advance the TxGuard™ pulmonary-valved conduit for pediatric heart disease, alongside a growing portfolio of issued IP.</p>
          </div>
        </div>
      </section>
      <section className="py-20 md:py-28 bg-muted/40">
        <div className="container mx-auto max-w-3xl text-center">
          <blockquote className="text-2xl md:text-3xl font-medium text-foreground leading-snug">
            "What is now proved was once only imagined."
          </blockquote>
          <p className="mt-4 text-sm uppercase tracking-widest text-muted-foreground">— William Blake</p>
        </div>
      </section>
    </PageShell>
  );
};
export default AboutPage;