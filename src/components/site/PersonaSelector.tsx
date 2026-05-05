import { Link } from "react-router-dom";
import { Microscope, Heart, ArrowRight, TrendingUp } from "lucide-react";
import { Reveal } from "./Reveal";

const paths = [
  {
    icon: Microscope,
    eyebrow: "For Clinicians & Researchers",
    title: "Overcoming 50 years of bioprosthetic stagnation",
    body: "Pre-clinical data, mechanism of action, ISO-compliant safety studies, and ongoing clinical collaborations.",
    cta: "View Clinical Evidence",
    href: "/clinical-evidence",
    tone: "clinical",
  },
  {
    icon: TrendingUp,
    eyebrow: "For Investors",
    title: "A de-risked, multi-indication platform",
    body: "$5.7M NIH backing, FDA HUD designation, broad IP, and strategic-aligned commercialization pathway.",
    cta: "Investor Inquiry",
    href: "/contact?role=investor",
    tone: "clinical",
  },
  {
    icon: Heart,
    eyebrow: "For Patients & Families",
    title: "Working toward a heart that grows with your child",
    body: "Plain-language explanations of how regenerative tissue technology aims to reduce the cycle of repeat surgeries.",
    cta: "Learn About Pediatric Care",
    href: "/solutions/pediatric",
    tone: "empathy",
  },
];

export const PersonaSelector = () => (
  <section id="audiences" className="py-20 md:py-28" aria-labelledby="persona-heading">
    <div className="container mx-auto">
      <Reveal>
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
            Choose your path
          </p>
          <h2 id="persona-heading" className="mb-4">Built for the people who move medicine forward</h2>
          <p className="text-muted-foreground medical-body">
            Whether you're evaluating clinical evidence, weighing an investment, or learning about
            your child's care, start where it's most relevant to you.
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6">
        {paths.map(({ icon: Icon, eyebrow, title, body, cta, href, tone }, i) => (
          <Reveal key={eyebrow} delay={i * 100}>
            <Link
              to={href}
              className={`group rounded-2xl border p-7 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-smooth flex flex-col h-full min-h-[44px] ${
                tone === "empathy"
                  ? "bg-accent-soft border-empathy/30"
                  : "bg-card border-border"
              }`}
            >
              <div
                className={`h-12 w-12 rounded-xl grid place-items-center mb-5 ${
                  tone === "empathy" ? "gradient-empathy text-white" : "gradient-primary text-primary-foreground shadow-glow"
                }`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">
                {eyebrow}
              </p>
              <h3 className="mb-3">{title}</h3>
              <p className="text-sm text-muted-foreground mb-6 flex-1">{body}</p>
              <span
                className={`inline-flex items-center gap-2 text-sm font-semibold transition-smooth ${
                  tone === "empathy" ? "text-[hsl(var(--empathy))]" : "text-primary group-hover:text-secondary"
                }`}
              >
                {cta} <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-smooth" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
