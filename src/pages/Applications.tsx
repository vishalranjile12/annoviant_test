import { Link } from "react-router-dom";
import { PageShell } from "@/components/site/PageShell";
import { Seo } from "@/components/site/Seo";
import { Heart, Activity, Droplet, Bandage, Stethoscope, Baby, ArrowRight } from "lucide-react";

type App = {
  icon: typeof Heart;
  name: string;
  body: string;
  status: string;
  href?: string;
};

const apps: App[] = [
  { icon: Baby, name: "Pediatric Pulmonary Valve", status: "Lead indication · FDA HUD", body: "The pulmonary valved graft we built first, designed to grow with children whose hearts won't stop changing on us.", href: "/solutions/pediatric" },
  { icon: Heart, name: "Adult Cardiovascular", status: "Pre-clinical · advancing", body: "Aortic, mitral, tricuspid, and adult pulmonary valves, the indications where bioprosthetic failures hurt the most.", href: "/solutions/cardiovascular" },
  { icon: Activity, name: "Vascular Grafts", status: "Expanded potential", body: "A regenerative conduit for bypass and reconstruction, with the potential to remodel into living vessel rather than sit inert." },
  { icon: Droplet, name: "Urology", status: "Exploratory", body: "Tissue scaffolds for urological reconstruction, where the body needs to heal in, not around, the implant." },
  { icon: Stethoscope, name: "Gastrointestinal", status: "Exploratory", body: "Soft-tissue applications across the GI tract, places where regenerating the tissue beats replacing it." },
  { icon: Bandage, name: "Wound &amp; Soft Tissue", status: "Exploratory", body: "Regenerative scaffolds for the complex wound, hernia, and soft-tissue cases that don't fit a standard solution." },
];

const ApplicationsPage = () => (
  <PageShell
    eyebrow="Applications"
    title={<>One platform, <span className="text-gradient">a lot of places it can help</span></>}
    intro="TxGuard® started as a pediatric heart valve, but it&rsquo;s a platform, not a single product. Anywhere conventional materials fall short of the patient, we&rsquo;re asking whether regenerative tissue can do better."
    heroImage="/hero/heart-stock.jpg"
  >
    <Seo
      title="Applications, TxGuard® Regenerative Tissue Platform | Annoviant"
      description="TxGuard® applications include pediatric pulmonary valves, adult cardiovascular indications, vascular grafts, urology, GI, and wound/soft-tissue repair."
    />

    <section className="py-20 md:py-28">
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {apps.map(({ icon: Icon, name, body, status, href }) => {
          const cardClass = "rounded-xl border border-border bg-card p-7 shadow-card hover:shadow-elegant transition-smooth hover:-translate-y-1 flex flex-col h-full";
          const inner = (
            <>
              <div className="flex items-start justify-between mb-5">
                <div className="h-11 w-11 rounded-lg gradient-primary grid place-items-center shadow-glow">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-secondary bg-secondary/10 px-2 py-1 rounded">
                  {status}
                </span>
              </div>
              <h3 className="mb-3" dangerouslySetInnerHTML={{ __html: name }} />
              <p className="text-sm text-muted-foreground flex-1">{body}</p>
              {href && (
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              )}
            </>
          );
          return href ? (
            <Link key={name} to={href} className={cardClass + " group"}>{inner}</Link>
          ) : (
            <div key={name} className={cardClass}>{inner}</div>
          );
        })}
      </div>
      <p className="text-xs text-muted-foreground mt-8 max-w-3xl">
        Everything except the pediatric Pulmonary Valved Graft (FDA HUD designation, 2020) is
        investigational. None of them are approved for use in people, and we won&rsquo;t pretend
        otherwise.
      </p>
    </section>
  </PageShell>
);

export default ApplicationsPage;
