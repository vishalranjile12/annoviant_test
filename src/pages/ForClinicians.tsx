import { useState } from "react";
import { Link } from "react-router-dom";
import { PageShell } from "@/components/site/PageShell";
import { Seo } from "@/components/site/Seo";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Microscope,
  FlaskConical,
  FileText,
  HelpCircle,
  HeartPulse,
  Stethoscope,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const SITE = "https://annoviant.com";

const paths = [
  {
    icon: Microscope,
    title: "Mechanism of action",
    body: "How TxGuard® is processed, what it does in vivo, and why decellularized and stabilized ECM behaves differently than glutaraldehyde-fixed tissue.",
    href: "/technology",
    cta: "Technology page",
  },
  {
    icon: FlaskConical,
    title: "Clinical evidence",
    body: "Comparative pre-clinical data versus legacy bioprosthetic tissue. Calcification resistance, in-situ remodeling, and pediatric growth observations.",
    href: "/clinical-evidence",
    cta: "Evidence hub",
  },
  {
    icon: FileText,
    title: "Publications & patents",
    body: "14 peer-reviewed papers across seven years. 4 issued U.S. patents and 2 pending PCT applications.",
    href: "/publications",
    cta: "Read the literature",
  },
  {
    icon: HelpCircle,
    title: "Clinical FAQ",
    body: "Questions surgeons ask most. Thrombo-resistance, suture handling, sizing, and how TxGuard® differs from SynerGraft and standard pericardial tissue.",
    href: "/faq",
    cta: "Surgeon FAQ",
  },
  {
    icon: HeartPulse,
    title: "Pediatric pulmonary",
    body: "The lead indication. FDA HUD designation, indications for use, clinical rationale, and trial-readiness status.",
    href: "/solutions/pediatric",
    cta: "Pediatric program",
  },
  {
    icon: Stethoscope,
    title: "Adult cardiovascular",
    body: "Adult heart valve replacement and vascular grafts. Same platform chemistry, pre-clinical staging.",
    href: "/solutions/cardiovascular",
    cta: "Adult CV program",
  },
];

const ForClinicians = () => {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? paths : paths.slice(0, 4);

  return (
    <PageShell
      eyebrow="For clinicians, surgeons & researchers"
      title={
        <>
          Mechanism, evidence, <span className="text-gradient">and access</span>
        </>
      }
      intro="If you're a cardiothoracic or vascular surgeon, an interventional cardiologist, a research clinician, or a trial PI, these paths get you to mechanism, data, and access fastest."
    >
      <Seo
        title="For Clinicians & Surgeons | Annoviant"
        description="Annoviant clinician entry. Mechanism of action, comparative pre-clinical evidence, publications and patents, surgeon FAQ, pediatric and adult programs."
        canonical={`${SITE}/for-clinicians`}
      />

      <section className="py-20 md:py-28" aria-labelledby="paths-heading">
        <div className="container mx-auto">
          <Reveal>
            <div className="max-w-2xl mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
                The short version
              </p>
              <h2 id="paths-heading" className="mb-5">
                A decellularized, stabilized ECM scaffold designed to be{" "}
                <span className="text-gradient">remodeled into host tissue</span>
              </h2>
              <p className="text-muted-foreground medical-body">
                TxGuard® is a regenerative tissue platform. The processing chemistry is designed to
                resist calcification, support host-mediated remodeling, and avoid the
                thrombo-inflammatory tradeoffs of glutaraldehyde-fixed bioprosthetic tissue. The
                pediatric pulmonary valved graft holds FDA HUD designation.
              </p>
            </div>
          </Reveal>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {visible.map(({ icon: Icon, title, body, href, cta }, i) => (
              <Reveal as="li" key={title} delay={i * 60}>
                <Link
                  to={href}
                  className="group block h-full rounded-2xl border border-border bg-card p-6 hover:shadow-elegant transition-smooth"
                >
                  <span className="inline-flex h-10 w-10 rounded-lg gradient-primary items-center justify-center shadow-glow mb-4">
                    <Icon className="h-5 w-5 text-primary-foreground" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground medical-body mb-5">{body}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-smooth">
                    {cta} <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>

          {paths.length > 4 && (
            <div className="flex justify-center mt-8">
              <Button
                variant="outline"
                onClick={() => setShowAll(!showAll)}
                aria-expanded={showAll}
              >
                {showAll ? (
                  <>
                    Show fewer <ChevronUp className="ml-1 h-4 w-4" />
                  </>
                ) : (
                  <>
                    Show all {paths.length} paths <ChevronDown className="ml-1 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          )}

          <Reveal>
            <div className="mt-16 rounded-2xl border border-border bg-muted/40 p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-1">Considering a research collaboration?</h3>
                <p className="text-sm text-muted-foreground">
                  We work with academic centers, trial sponsors, and surgical PIs. Reach out for
                  pre-clinical samples, study collaboration, or trial planning.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="gradient-primary text-primary-foreground border-0">
                  <Link to="/contact?role=clinician">Start a conversation</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/answers">Plain-language answers</Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
};

export default ForClinicians;
