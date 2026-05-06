import { Link } from "react-router-dom";
import { PageShell } from "@/components/site/PageShell";
import { Seo } from "@/components/site/Seo";
import { Reveal } from "@/components/site/Reveal";
import {
  Heart,
  Activity,
  Droplet,
  Bandage,
  Stethoscope,
  Baby,
  ArrowRight,
  ShieldCheck,
  Layers,
  Eye,
  Network,
  Shield,
  Sparkles,
  Wind,
} from "lucide-react";

// 8 soft-tissue surgical applications, ported verbatim from the
// original https://annoviant.com/txguard-applications/ page.
const softTissue = [
  { icon: Layers, name: "Bridging of fascial defects", body: "Self-healing patch for skin repair." },
  { icon: Heart, name: "Cardiovascular devices", body: "Nonthrombogenic and calcification-resistant." },
  { icon: Stethoscope, name: "Duodenal injury patch", body: "Decellularized small intestinal submucosa." },
  { icon: Shield, name: "Passive biological membrane", body: "Surgical adhesion prevention during surgery, dura mater, peritoneum." },
  { icon: Droplet, name: "Bladder tissue", body: "Elastic tissue graft." },
  { icon: Bandage, name: "Hernia repair patch", body: "Inguinal herniorrhaphy, regenerative pericardium patch." },
  { icon: Eye, name: "Wound healing", body: "Infection-resistant elastic patch." },
  { icon: Network, name: "Venous valve graft", body: "Nonthrombogenic graft." },
];

const productAttributes = [
  { icon: Sparkles, label: "Regenerative", image: "/hero/attributes/regenerative.jpg" },
  { icon: Droplet, label: "Thrombo-resistant", image: "/hero/attributes/thrombo-resistant.jpg" },
  { icon: ShieldCheck, label: "Calcification-resistant", image: "/hero/attributes/calcification.jpg" },
  { icon: Wind, label: "Pliable", image: "/hero/attributes/pliable.jpg" },
];

const pediatric = {
  icon: Baby,
  name: "Pediatric Pulmonary Valve",
  status: "Lead indication · FDA HUD designation (2020)",
  body: "The pulmonary valved graft we built first, designed to grow with children whose hearts won't stop changing on us. The reason we say one surgery should mean one surgery.",
  href: "/solutions/pediatric",
  highlights: [
    { label: "FDA HUD", desc: "designated 2020" },
    { label: "$5.7M", desc: "in NIH funding" },
    { label: "ISO 5840", desc: "and 10993 studies" },
  ],
};

const mids = [
  {
    icon: Heart,
    name: "Adult Cardiovascular",
    status: "Pre-clinical · advancing",
    body: "Aortic, mitral, tricuspid, and adult pulmonary valves, the indications where bioprosthetic failures hurt the most.",
    href: "/solutions/cardiovascular",
  },
  {
    icon: Activity,
    name: "Vascular Grafts",
    status: "Expanded potential",
    body: "A regenerative conduit for bypass and reconstruction, with the potential to remodel into living vessel rather than sit inert.",
  },
];

const compacts = [
  {
    icon: Droplet,
    name: "Urology",
    status: "Exploratory",
    body: "Tissue scaffolds for urological reconstruction, where the body needs to heal in, not around, the implant.",
  },
  {
    icon: Stethoscope,
    name: "Gastrointestinal",
    status: "Exploratory",
    body: "Soft-tissue applications across the GI tract, places where regenerating the tissue beats replacing it.",
  },
  {
    icon: Bandage,
    name: "Wound & Soft Tissue",
    status: "Exploratory",
    body: "Regenerative scaffolds for the complex wound, hernia, and soft-tissue cases that don't fit a standard solution.",
  },
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
      <div className="container mx-auto space-y-6">
        {/* Tier 1, lead indication, full-width hero card */}
        <Reveal>
          <Link
            to={pediatric.href}
            className="group relative block rounded-3xl overflow-hidden gradient-deep text-white shadow-elegant border border-white/10 hover:shadow-glow transition-smooth"
          >
            <div aria-hidden className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-secondary/30 blur-[160px]" />
            <div aria-hidden className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-primary/40 blur-[140px]" />
            <img
              src="/hero/baby-doctor.jpg"
              alt=""
              aria-hidden
              className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-screen"
              loading="lazy"
            />

            <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-12 p-8 md:p-12 lg:p-14">
              <div className="lg:col-span-7 flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-12 w-12 rounded-xl bg-white/10 backdrop-blur grid place-items-center">
                    <pediatric.icon className="h-5 w-5 text-white" aria-hidden />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-secondary border border-white/20 bg-white/10 px-3 py-1.5 rounded-full">
                    {pediatric.status}
                  </span>
                </div>
                <h2 className="text-white mb-4 text-3xl md:text-4xl">{pediatric.name}</h2>
                <p className="text-white/80 medical-body text-base md:text-lg mb-8">
                  {pediatric.body}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-secondary group-hover:gap-3 transition-smooth">
                  Read the pediatric program <ArrowRight className="h-4 w-4" />
                </span>
              </div>

              <aside className="lg:col-span-5 lg:border-l lg:border-white/15 lg:pl-12 grid grid-cols-3 lg:grid-cols-1 gap-6 lg:gap-8 content-center">
                {pediatric.highlights.map((h) => (
                  <div key={h.label} className="flex lg:items-baseline lg:gap-4 flex-col lg:flex-row">
                    <ShieldCheck className="hidden lg:block h-5 w-5 text-secondary flex-shrink-0 lg:mt-1" aria-hidden />
                    <div>
                      <div className="text-xl md:text-2xl font-bold text-white tabular-nums">{h.label}</div>
                      <div className="text-xs text-white/70 mt-0.5">{h.desc}</div>
                    </div>
                  </div>
                ))}
              </aside>
            </div>
          </Link>
        </Reveal>

        {/* Tier 2, mid indications, two equal cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {mids.map(({ icon: Icon, name, status, body, href }, i) => {
            const Card = href ? Link : "div";
            const cardProps = href ? { to: href } : {};
            return (
              <Reveal key={name} delay={i * 80}>
                <Card
                  {...cardProps}
                  className={`group block h-full rounded-2xl border border-border bg-card p-7 md:p-8 shadow-card hover:shadow-elegant transition-smooth ${href ? "hover:-translate-y-1" : ""}`}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="h-11 w-11 rounded-lg gradient-primary grid place-items-center shadow-glow">
                      <Icon className="h-5 w-5 text-primary-foreground" aria-hidden />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-secondary bg-secondary/10 px-2.5 py-1 rounded-full">
                      {status}
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl">{name}</h3>
                  <p className="text-sm text-muted-foreground">{body}</p>
                  {href && (
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-secondary transition-smooth">
                      Learn more <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                    </span>
                  )}
                </Card>
              </Reveal>
            );
          })}
        </div>

        {/* Tier 3, exploratory indications, three compact cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {compacts.map(({ icon: Icon, name, status, body }, i) => (
            <Reveal key={name} delay={i * 60}>
              <div className="h-full rounded-2xl border border-border bg-muted/40 p-6 md:p-7 hover:bg-card hover:shadow-card transition-smooth">
                <div className="flex items-start justify-between mb-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 grid place-items-center">
                    <Icon className="h-5 w-5 text-primary" aria-hidden />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {status}
                  </span>
                </div>
                <h3 className="mb-2 text-base">{name}</h3>
                <p className="text-sm text-muted-foreground">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="container mx-auto mt-10">
        <p className="text-xs text-muted-foreground max-w-3xl">
          Everything except the pediatric Pulmonary Valved Graft (FDA HUD designation, 2020) is
          investigational. None of them are approved for use in people, and we won&rsquo;t pretend
          otherwise.
        </p>
      </div>
    </section>

    {/* Eight soft-tissue surgical applications, ported from the original
        TxGuard Applications page, presented as a stripe with internal separators. */}
    <section className="py-16 md:py-24 bg-muted/40" aria-labelledby="soft-tissue-heading">
      <div className="container mx-auto">
        <Reveal>
          <div className="max-w-2xl mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-3">
              Soft tissue, beyond the heart
            </p>
            <h2 id="soft-tissue-heading" className="mb-4">
              Eight surgical applications where regeneration matters
            </h2>
            <p className="text-muted-foreground medical-body">
              Wherever a surgeon needs tissue to heal in rather than be replaced, the same
              TxGuard® process can help. These are the eight specific soft-tissue applications
              where the platform has been investigated.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {softTissue.map(({ icon: Icon, name, body }, i) => (
            <Reveal key={name} delay={i * 40}>
              <article className="group h-full bg-background hover:bg-card transition-smooth px-5 md:px-6 py-6">
                <div className="flex items-start gap-3 mb-2">
                  <span className="text-[11px] font-bold tabular-nums text-primary/40 mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon className="h-5 w-5 text-primary mt-0.5" aria-hidden />
                </div>
                <h3 className="text-base mb-1.5">{name}</h3>
                <p className="text-xs text-muted-foreground leading-snug">{body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Four product attribute cards, with the original AdobeStock visuals */}
        <ul className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-px bg-border" aria-label="TxGuard product attributes">
          {productAttributes.map(({ icon: Icon, label, image }) => (
            <li key={label} className="bg-background overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={image}
                  alt={`${label} attribute`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-4 py-3 flex items-center gap-2.5">
                <Icon className="h-4 w-4 text-primary flex-shrink-0" aria-hidden />
                <span className="text-sm font-semibold text-foreground">{label}</span>
              </div>
            </li>
          ))}
        </ul>

        <p className="text-[11px] text-muted-foreground mt-6">
          Investigational across these applications. Annoviant&rsquo;s primary focus today is the
          cardiovascular indications above; soft-tissue applications listed here reflect the
          breadth of the platform&rsquo;s scientific potential.
        </p>
      </div>
    </section>
  </PageShell>
);

export default ApplicationsPage;
