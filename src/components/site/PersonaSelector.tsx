import { Link } from "react-router-dom";
import { Microscope, Heart, ArrowRight, TrendingUp } from "lucide-react";
import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";

const paths = [
  {
    icon: Microscope,
    eyebrow: "Surgeons & researchers",
    title: "Want the data behind the story?",
    body: "Pre-clinical results, the mechanism of action, ISO-standard safety studies, and where we are with clinical collaborations.",
    cta: "See the evidence",
    href: "/clinical-evidence",
    tone: "clinical",
  },
  {
    icon: TrendingUp,
    eyebrow: "Investors",
    title: "Looking at a de-risked, multi-indication platform?",
    body: "Most regen-med startups ship one product. We have an FDA milestone in hand, $5.7M in NIH validation, ISO 13485 manufacturing readiness, and a multi-indication scope in a market Edwards, Medtronic, and J&J actively operate in.",
    cta: "Start the conversation",
    href: "/contact?role=investor",
    tone: "clinical",
  },
  {
    icon: Heart,
    eyebrow: "Patients & families",
    title: "Hoping for a heart that can grow with your child?",
    body: "Plain-language explanations of what we're working on, what's still investigational, and how to stay updated.",
    cta: "Read the parent guide",
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
            Pick the door that fits
          </p>
          <h2 id="persona-heading" className="mb-4">What brought you here?</h2>
          <p className="text-muted-foreground medical-body">
            We talk to surgeons differently than we talk to investors, and to families differently
            than we talk to either. Pick the path that fits, and we'll meet you there.
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6">
        {paths.map(({ icon: Icon, eyebrow, title, body, cta, href, tone }, i) => (
          <Reveal key={eyebrow} delay={i * 100} className="h-full">
            <TiltCard className="h-full">
              <Link
                to={href}
                className={`group rounded-2xl border p-7 shadow-card hover:shadow-elegant transition-smooth flex flex-col h-full min-h-[44px] ${
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
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
