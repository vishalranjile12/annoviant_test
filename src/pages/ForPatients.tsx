import { Link } from "react-router-dom";
import { PageShell } from "@/components/site/PageShell";
import { Seo } from "@/components/site/Seo";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, HelpCircle, Baby, Heart, BookOpen, Mail } from "lucide-react";

const SITE = "https://annoviant.com";

const paths = [
  {
    icon: HelpCircle,
    title: "Plain-language answers",
    body: "What TxGuard® is, what it&rsquo;s for, what we know today and what we don&rsquo;t. Written for families, not specialists.",
    href: "/answers",
    cta: "Read the answers",
  },
  {
    icon: Baby,
    title: "Children & congenital heart disease",
    body: "The lead program. Why children with heart defects often need multiple surgeries, and how regenerative tissue is designed to change that.",
    href: "/solutions/pediatric",
    cta: "Pediatric program",
  },
  {
    icon: Heart,
    title: "Adult heart valve disease",
    body: "How current bioprosthetic valves wear down, what re-operations look like, and what we&rsquo;re working on for adult patients.",
    href: "/solutions/cardiovascular",
    cta: "Adult heart program",
  },
  {
    icon: BookOpen,
    title: "Our story",
    body: "Why a corporate executive and a research scientist left their careers to start Annoviant, and what the team is working toward.",
    href: "/founder-story",
    cta: "Founder story",
  },
];

const ForPatients = () => (
  <PageShell
    eyebrow="For patients & families"
    title={
      <>
        If you&rsquo;re here because a heart condition is{" "}
        <span className="text-gradient">part of your family</span>
      </>
    }
    intro="Most of our website is written for surgeons and investors. This page is written for you. Here is what Annoviant is, what we are working on, and what it might mean for patients."
    heroImage="/hero/heart-bg.jpg"
  >
    <Seo
      title="For Patients & Families | Annoviant"
      description="Plain-language explanations of TxGuard®, pediatric congenital heart disease, adult heart valve disease, and what regenerative tissue means for patients."
      canonical={`${SITE}/for-patients`}
    />

    {/* Honest framing */}
    <section className="py-16 md:py-20" aria-labelledby="honest-heading">
      <div className="container mx-auto max-w-3xl">
        <Reveal>
          <div className="rounded-2xl border border-border bg-muted/40 p-6 md:p-8">
            <h2 id="honest-heading" className="text-lg font-semibold mb-3">
              A note up front
            </h2>
            <p className="text-muted-foreground medical-body mb-3">
              Annoviant&rsquo;s TxGuard® technology is <strong>investigational</strong>. That means
              it is still being developed and tested. It is not yet FDA-approved for routine use in
              humans. We hold an FDA Humanitarian Use Device designation for one pediatric
              application. That is an early step in the regulatory pathway, not a final approval.
            </p>
            <p className="text-muted-foreground medical-body">
              If you or a loved one is facing surgery, please talk to your cardiologist or
              cardiothoracic surgeon. We cannot give medical advice or make treatment promises. What
              we can do is share what we are working on.
            </p>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="py-12 md:py-16" aria-labelledby="paths-heading">
      <div className="container mx-auto">
        <Reveal>
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3">
              Where to start
            </p>
            <h2 id="paths-heading" className="mb-5">
              Pick what matters <span className="text-gradient">to you</span>
            </h2>
          </div>
        </Reveal>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {paths.map(({ icon: Icon, title, body, href, cta }, i) => (
            <Reveal as="li" key={title} delay={i * 60}>
              <Link
                to={href}
                className="group block h-full rounded-2xl border border-border bg-card p-6 hover:shadow-elegant transition-smooth"
              >
                <span className="inline-flex h-10 w-10 rounded-lg gradient-primary items-center justify-center shadow-glow mb-4">
                  <Icon className="h-5 w-5 text-primary-foreground" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground medical-body mb-5" dangerouslySetInnerHTML={{ __html: body }} />
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-smooth">
                  {cta} <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <div className="mt-16 rounded-2xl border border-border bg-muted/40 p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-10 w-10 rounded-lg bg-primary/10 items-center justify-center flex-shrink-0">
                <Mail className="h-5 w-5 text-primary" aria-hidden />
              </span>
              <div>
                <h3 className="text-lg font-semibold mb-1">Want to follow along?</h3>
                <p className="text-sm text-muted-foreground">
                  We do not send spam. We post updates when there is real news. Milestones,
                  publications, regulatory progress.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="gradient-primary text-primary-foreground border-0">
                <Link to="/contact?role=patient">Get in touch</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/news">Read the news</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  </PageShell>
);

export default ForPatients;
