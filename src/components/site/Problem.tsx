import { AlertTriangle, RefreshCw, Baby, HeartPulse } from "lucide-react";
import { Reveal } from "./Reveal";
import { CountUp } from "./CountUp";

type Issue = {
  icon: typeof AlertTriangle;
  title: string;
  body: string;
  stat: { value: string; label: string; source: string };
};

const issues: Issue[] = [
  {
    icon: HeartPulse,
    title: "Heart disease is the largest health problem we have",
    body: "More than half of American adults are living with cardiovascular disease in some form. The number keeps climbing. Surgery is part of how we treat it.",
    stat: { value: "127M+", label: "U.S. adults living with CVD", source: "American Heart Association" },
  },
  {
    icon: AlertTriangle,
    title: "The valves we have today break down",
    body: "Bioprosthetics fixed with glutaraldehyde calcify, clot, and lose their structure over time. We've been working around that for fifty years. The patient pays the price.",
    stat: { value: "$418B", label: "what CVD costs the U.S. each year", source: "AHA" },
  },
  {
    icon: RefreshCw,
    title: "Patients come back for surgery",
    body: "When a valve fails, the patient is back in the OR. Re-operations are riskier, more expensive, and harder on families than the first surgery was.",
    stat: { value: "~1M", label: "cardiovascular surgeries each year", source: "CDC" },
  },
  {
    icon: Baby,
    title: "Children outgrow what we put inside them",
    body: "A child's heart keeps growing. The implant doesn't. So pediatric patients can face four, five, even six open-chest surgeries before adulthood. The burden is unequal too, falling hardest on older adults and historically underserved communities.",
    stat: { value: "40,000", label: "newborns with congenital heart disease, every year", source: "CDC" },
  },
];

export const Problem = () => (
  <section id="clinical-need" className="py-24 md:py-32 bg-muted/40 scroll-mt-24" aria-labelledby="problem-heading">
    <div className="container mx-auto">
      <Reveal>
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
            The clinical need &amp; the market
          </p>
          <h2 id="problem-heading" className="mb-5">
            Heart patients deserve implants that <span className="text-gradient">don't fail them</span>
          </h2>
          <p className="text-muted-foreground medical-body">
            Bioprosthetic valves have improved a lot in fifty years. They still ask surgeons to make
            the same uncomfortable trade-offs they always have. Here's what that looks like, in
            people, in dollars, and in repeat surgeries, a multi-billion-dollar problem the largest
            device companies are actively trying to solve.
          </p>
        </div>
      </Reveal>

      <ol className="space-y-8 md:space-y-10">
        {issues.map(({ icon: Icon, title, body, stat }, i) => (
          <Reveal as="li" key={title} delay={i * 80}>
            <article
              className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start py-6 md:py-8 border-t border-border ${
                i === issues.length - 1 ? "border-b" : ""
              } ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="lg:col-span-1 flex lg:block items-center gap-4">
                <span className="text-4xl md:text-5xl font-bold text-primary/30 leading-none tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="lg:col-span-7">
                <div className="flex items-start gap-4 mb-3">
                  <div className="h-10 w-10 rounded-lg gradient-primary grid place-items-center shadow-glow flex-shrink-0">
                    <Icon className="h-5 w-5 text-primary-foreground" aria-hidden />
                  </div>
                  <h3 className="text-lg md:text-xl flex-1">{title}</h3>
                </div>
                <p className="text-base text-muted-foreground medical-body lg:ml-14">{body}</p>
              </div>

              <aside className="lg:col-span-4 lg:pl-6 lg:border-l lg:border-border">
                <CountUp
                  value={stat.value}
                  className="block text-3xl md:text-4xl font-bold text-foreground tabular-nums"
                />
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                <p className="text-[11px] text-muted-foreground mt-2 uppercase tracking-wider">
                  Source: {stat.source}
                </p>
              </aside>
            </article>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);
