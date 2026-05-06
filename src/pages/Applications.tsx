import { Link } from "react-router-dom";
import { PageShell } from "@/components/site/PageShell";
import { Seo } from "@/components/site/Seo";
import { Reveal } from "@/components/site/Reveal";
import { Heart, Activity, Droplet, Bandage, Stethoscope, Baby, ArrowRight } from "lucide-react";

type App = {
  icon: typeof Heart;
  name: string;
  body: string;
  status: string;
  href?: string;
  /** Bento span: "lead" (large hero), "feature" (medium), or "compact" (small). */
  size: "lead" | "feature" | "compact";
};

const apps: App[] = [
  { icon: Baby, name: "Pediatric Pulmonary Valve", status: "Lead indication · FDA HUD", body: "The pulmonary valved graft we built first, designed to grow with children whose hearts won't stop changing on us. The reason we say one surgery should mean one surgery.", href: "/solutions/pediatric", size: "lead" },
  { icon: Heart, name: "Adult Cardiovascular", status: "Pre-clinical · advancing", body: "Aortic, mitral, tricuspid, and adult pulmonary valves, the indications where bioprosthetic failures hurt the most.", href: "/solutions/cardiovascular", size: "feature" },
  { icon: Activity, name: "Vascular Grafts", status: "Expanded potential", body: "A regenerative conduit for bypass and reconstruction, with the potential to remodel into living vessel.", size: "feature" },
  { icon: Droplet, name: "Urology", status: "Exploratory", body: "Tissue scaffolds for urological reconstruction, where the body needs to heal in, not around, the implant.", size: "compact" },
  { icon: Stethoscope, name: "Gastrointestinal", status: "Exploratory", body: "Soft-tissue applications across the GI tract.", size: "compact" },
  { icon: Bandage, name: "Wound & Soft Tissue", status: "Exploratory", body: "Regenerative scaffolds for the complex wound, hernia, and soft-tissue cases that don't fit a standard solution.", size: "compact" },
];

const sizeClass: Record<App["size"], string> = {
  lead: "lg:col-span-3 lg:row-span-2 min-h-[420px] gradient-deep text-white border-transparent",
  feature: "lg:col-span-3 min-h-[260px] bg-card",
  compact: "lg:col-span-2 min-h-[220px] bg-card",
};

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
      <div className="container mx-auto">
        {/* Bento grid: 6 columns desktop, 1 column mobile.
            Lead = 3-cols × 2-rows, features = 3-cols × 1-row, compacts = 2-cols × 1-row. */}
        <div className="grid grid-cols-1 lg:grid-cols-6 lg:auto-rows-[minmax(220px,_1fr)] gap-5">
          {apps.map(({ icon: Icon, name, body, status, href, size }, i) => {
            const isLead = size === "lead";
            const cardClass = `relative rounded-2xl border border-border p-7 md:p-8 shadow-card hover:shadow-elegant transition-smooth overflow-hidden flex flex-col h-full ${sizeClass[size]} ${href ? "hover:-translate-y-1 group cursor-pointer" : ""}`;

            const inner = (
              <>
                {isLead && (
                  <div aria-hidden className="absolute -bottom-32 -right-32 h-[420px] w-[420px] rounded-full bg-secondary/30 blur-[140px]" />
                )}
                <div className="relative flex items-start justify-between mb-5">
                  <div className={`h-12 w-12 rounded-xl grid place-items-center ${isLead ? "bg-white/10 backdrop-blur" : "gradient-primary shadow-glow"}`}>
                    <Icon className={`h-5 w-5 ${isLead ? "text-white" : "text-primary-foreground"}`} aria-hidden />
                  </div>
                  <span className={`text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${isLead ? "bg-white/10 text-secondary border border-white/20" : "bg-secondary/10 text-secondary"}`}>
                    {status}
                  </span>
                </div>
                <h3 className={`relative mb-3 ${isLead ? "text-white text-2xl md:text-3xl" : ""}`}>
                  {name}
                </h3>
                <p className={`relative text-sm flex-1 ${isLead ? "text-white/85 text-base md:text-lg medical-body" : "text-muted-foreground"}`}>
                  {body}
                </p>
                {href && (
                  <span className={`relative mt-5 inline-flex items-center gap-2 text-sm font-semibold transition-smooth ${isLead ? "text-secondary" : "text-primary group-hover:text-secondary"}`}>
                    {isLead ? "Read the full program" : "Learn more"}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                  </span>
                )}
              </>
            );

            return (
              <Reveal key={name} delay={i * 60}>
                {href ? (
                  <Link to={href} className={cardClass}>{inner}</Link>
                ) : (
                  <div className={cardClass}>{inner}</div>
                )}
              </Reveal>
            );
          })}
        </div>

        <p className="text-xs text-muted-foreground mt-10 max-w-3xl">
          Everything except the pediatric Pulmonary Valved Graft (FDA HUD designation, 2020) is
          investigational. None of them are approved for use in people, and we won&rsquo;t pretend
          otherwise.
        </p>
      </div>
    </section>
  </PageShell>
);

export default ApplicationsPage;
