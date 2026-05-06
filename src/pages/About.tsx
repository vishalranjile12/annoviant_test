import { Link } from "react-router-dom";
import { PageShell } from "@/components/site/PageShell";
import { Seo } from "@/components/site/Seo";
import { Target, Users, Award, Eye, Heart, Lightbulb, ArrowRight } from "lucide-react";

const values = [
  { icon: Heart, title: "We listen first", body: "Surgeons, patients, partners, the people doing the work and the people receiving it. They tell us what matters. We try to listen before we ship." },
  { icon: Lightbulb, title: "Stubborn creativity", body: "Most of the easy wins in heart-valve replacement have been taken. We work on the hard ones, the ones where incremental improvement won't get there." },
  { icon: Users, title: "Better together", body: "We've never built any of this alone. Hospitals, consortia, investors, advisors, every meaningful step has had a co-author." },
  { icon: Award, title: "Quiet conviction", body: "We don't oversell. We let the evidence carry the weight. When we're sure, we're sure, and when we're not, we say so." },
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
      title={<>We&rsquo;re building <span className="text-gradient">healthier lives</span>, one surgery at a time</>}
      intro="Annoviant is a regenerative-medicine company. We&rsquo;re building TxGuard®, a tissue platform meant to outlast today&rsquo;s bioprosthetics and to keep up with patients of every age, especially the youngest ones."
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
            <h3 className="mb-3">Why we exist</h3>
            <p className="text-muted-foreground text-sm">
              To change what cardiovascular implants can be, biomaterials that the body remakes
              as living tissue, so that one surgery has a chance of being enough.
            </p>
          </div>
          <div>
            <Eye className="h-7 w-7 text-primary mb-4" />
            <h3 className="mb-3">Where we&rsquo;re headed</h3>
            <p className="text-muted-foreground text-sm">
              A future where children with congenital heart disease aren&rsquo;t scheduled for their
              fourth surgery before high school, because the implant grew up with them.
            </p>
          </div>
          <div>
            <Award className="h-7 w-7 text-primary mb-4" />
            <h3 className="mb-3">What we&rsquo;ve earned</h3>
            <p className="text-muted-foreground text-sm">
              $5.7M in NIH funding (including a $2.99M grant for the pediatric program), an FDA
              HUD designation already in hand, four issued U.S. patents, ISO 13485 manufacturing
              readiness, and the kind of strategic interest that comes with operating in a market
              Edwards, Medtronic, and J&amp;J actively watch.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/40">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
              How we work
            </p>
            <h2 className="mb-4">Four habits, none of them flashy</h2>
          </div>

          {/* Magazine-style numbered editorial. Big oversized numerals, alternating column placement. */}
          <ol className="space-y-12 md:space-y-16 max-w-5xl">
            {values.map(({ icon: Icon, title, body }, i) => (
              <li
                key={title}
                className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start ${
                  i % 2 === 1 ? "md:[&>*:first-child]:md:order-2 md:[&>*:nth-child(2)]:md:order-1" : ""
                }`}
              >
                <div className="md:col-span-4 flex md:flex-col items-baseline md:items-start gap-4">
                  <span className="font-handwritten text-6xl md:text-7xl leading-none text-primary/30 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon className="h-7 w-7 text-primary md:mt-2" aria-hidden />
                </div>
                <div className="md:col-span-8 md:border-l md:border-border md:pl-8">
                  <h3 className="text-xl md:text-2xl mb-3">{title}</h3>
                  <p className="text-base text-muted-foreground medical-body">{body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
              How we got here
            </p>
            <h2 className="mb-5">Founded in 2018. Twenty-five years in the making</h2>
            <p className="text-muted-foreground medical-body mb-4">
              The company is young. The science behind it isn&rsquo;t. Annoviant was founded in 2018
              to take twenty-five-plus years of academic regenerative-tissue research, more than
              $20M in cumulative grants behind it, and turn it into something a surgeon could
              actually pick up off a shelf.
            </p>
            <p className="text-muted-foreground medical-body">
              Today we&rsquo;re manufacturing-ready at an ISO 13485 facility, a rare milestone at our
              stage. And we keep moving the platform forward, one indication at a time, with input
              from clinicians and scientists we trust.
            </p>
          </div>
          <blockquote className="rounded-2xl bg-card border border-border p-9 shadow-card">
            <p className="font-handwritten text-3xl md:text-4xl text-foreground leading-tight">
              &ldquo;Our goal is simple: cardiovascular implants that integrate, adapt, and last,
              for adults, and for the children who deserve a chance to grow with their hearts.&rdquo;
            </p>
            <footer className="mt-6 flex items-center justify-between gap-3 flex-wrap">
              <span className="text-sm uppercase tracking-widest text-muted-foreground">
                Ajay Houde, Co-founder &amp; CEO
              </span>
              <Link
                to="/founder-story"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-secondary transition-smooth"
              >
                Read his story <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </footer>
          </blockquote>
        </div>
      </section>
    </PageShell>
  );
};
export default AboutPage;
