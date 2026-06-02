import { Link } from "react-router-dom";
import { Stethoscope, TrendingUp, Building2, ArrowRight } from "lucide-react";
const heart = "/hero/txguard-bg.png";

const cards = [
  {
    icon: Stethoscope,
    title: "Clinicians",
    body: "Mechanism, pre-clinical data, and publications.",
    cta: "Clinical materials",
    href: "/for-clinicians",
  },
  {
    icon: TrendingUp,
    title: "Investors",
    body: "Market, IP, regulatory roadmap, and milestones.",
    cta: "Investor briefing",
    href: "/for-investors",
  },
  {
    icon: Building2,
    title: "Patients & families",
    body: "Plain-language answers about what we’re building.",
    cta: "For patients",
    href: "/for-patients",
  },
];

export const Audiences = () => (
  <section id="audiences" className="py-24 md:py-32 bg-muted/40 relative overflow-hidden">
    <img src={heart} alt="" aria-hidden width={1280} height={960} loading="lazy" className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] opacity-[0.06] pointer-events-none" />
    <div className="container mx-auto relative">
      <div className="max-w-2xl mb-14">
        <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
          Built for the people who move medicine forward
        </p>
        <h2 className="mb-5">Choose your path</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map(({ icon: Icon, title, body, cta, href }) => (
          <Link
            key={title}
            to={href}
            className="group rounded-xl bg-card border border-border p-7 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-smooth flex flex-col"
          >
            <Icon className="h-7 w-7 text-primary mb-5" />
            <h3 className="mb-3">{title}</h3>
            <p className="text-sm text-muted-foreground mb-6 flex-1">{body}</p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-secondary transition-smooth">
              {cta} <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-smooth" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);
