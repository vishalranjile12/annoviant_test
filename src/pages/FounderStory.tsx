import { Link } from "react-router-dom";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Seo } from "@/components/site/Seo";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Quote, ArrowRight, Sparkles, Mail } from "lucide-react";

const milestones = [
  { year: "1990s", label: "A first chapter in science", body: "A young researcher arrives in the U.S. with little more than curiosity and the conviction that biology, given the right cues, could be guided toward repair rather than replacement." },
  { year: "2000s", label: "Two decades inside the industry", body: "More than 25 years across global medical-device companies. Roles spanning R&D, product development, and commercial leadership. Every program reinforced one truth: bioprosthetic devices were not designed to last a lifetime, and patients paid the price." },
  { year: "2018", label: "Annoviant is founded", body: "Co-founded with Naren Vyavahare, PhD, in Alpharetta, Georgia. The premise is simple and audacious: build a tissue platform that the body recognizes as its own, and engineer it to grow with the patient." },
  { year: "2020", label: "First regulatory milestone", body: "TxGuard® Pulmonary Valved Graft receives FDA Humanitarian Use Device designation, validating the approach for pediatric congenital heart disease." },
  { year: "2024", label: "$2.99M NIH grant awarded", body: "An NIH grant accelerates pediatric pulmonary-valved conduit development, bringing total NIH backing of the platform program to $5.7M." },
  { year: "Today", label: "A multi-indication platform", body: "Four issued U.S. patents. Two PCT applications. Fourteen peer-reviewed publications. ISO 13485-certified manufacturing readiness. A robust ecosystem of pediatric hospitals, FDA-funded device consortia, and clinical advisors. The work is just getting started." },
];

const FounderStoryPage = () => {
  const ld = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ajay Houde",
    jobTitle: "Co-founder & CEO, Annoviant",
    worksFor: { "@type": "Organization", name: "Annoviant, Inc." },
    description:
      "Ajay Houde is the co-founder and CEO of Annoviant, a regenerative medicine company developing TxGuard®. He has more than 25 years of experience in healthcare innovation.",
    email: "ahoude@annoviant.com",
    image: "https://annoviant.com/wp-content/uploads/2022/05/headshot_ajay-houde-1.jpg",
    sameAs: ["https://www.linkedin.com/company/annoviant"],
    alumniOf: "PhD, MBA",
  };

  return (
    <main id="main">
      <Seo
        title="Founder Story · Ajay Houde, Annoviant"
        description="The story behind Annoviant, audacious vision, two decades of patience, and a co-founder's drive to give every patient, especially children, a heart that grows with them."
        jsonLd={ld}
      />
      <Nav />

      {/* Editorial hero */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 gradient-hero text-white overflow-hidden">
        <img
          src="/hero/heart-bg.jpg"
          alt=""
          aria-hidden
          width={1920}
          height={1080}
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-deep/95 via-surface-deep/85 to-surface-deep" />
        <div aria-hidden className="absolute -bottom-40 -right-40 h-[520px] w-[520px] rounded-full bg-secondary/30 blur-[140px]" />
        <div aria-hidden className="absolute -top-32 -left-32 h-[400px] w-[400px] rounded-full bg-[hsl(var(--empathy))] blur-[160px] opacity-30" />

        <div className="container mx-auto relative">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1 animate-fade-up">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-5">
                Founder Story · Ajay Houde, PhD, MBA
              </p>
              <h1 className="text-white mb-6 text-balance leading-[1.05]">
                Patience, perseverance, and a stubborn belief that <span className="text-gradient">hearts can heal themselves</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 medical-body">
                For more than two decades, Ajay Houde watched patients return to the
                operating room because their implants were never designed to last. Annoviant
                is his answer.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Button asChild size="lg" className="gradient-primary border-0 shadow-glow min-h-[44px]">
                  <a href="#story">Read the story <ArrowRight className="ml-1 h-4 w-4" /></a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent min-h-[44px]">
                  <a href="mailto:ahoude@annoviant.com">
                    <Mail className="mr-1.5 h-4 w-4" /> ahoude@annoviant.com
                  </a>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 relative">
              <div aria-hidden className="absolute -inset-6 rounded-[2rem] gradient-primary blur-2xl opacity-50" />
              <figure className="relative rounded-[1.5rem] overflow-hidden border border-white/20 shadow-elegant">
                <img
                  src="/team/ajay-houde.jpg"
                  alt="Ajay Houde, PhD, MBA, Co-founder and CEO of Annoviant"
                  width={640}
                  height={800}
                  className="w-full aspect-[4/5] object-cover"
                />
                <figcaption className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-surface-deep/95 via-surface-deep/60 to-transparent">
                  <div className="text-xs uppercase tracking-widest text-secondary font-semibold">Ajay Houde</div>
                  <div className="text-sm text-white/85">Co-founder & CEO, Annoviant</div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Origins, the editorial body */}
      <article id="story" className="py-20 md:py-28">
        <div className="container mx-auto max-w-3xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-4">
              Chapter one · Origins
            </p>
            <h2 className="mb-8">A scientist before he was a founder</h2>
            <p className="text-lg text-foreground/85 leading-relaxed mb-6">
              <span className="float-left font-bold text-6xl md:text-7xl leading-[0.85] mr-3 mt-1 text-primary">A</span>
              jay Houde did not grow up in boardrooms. He grew up in laboratories, the
              kind that rewarded patience over polish. The kind where a single clean result
              after months of iteration felt like a small miracle. By the time he had
              completed a PhD and an MBA, he had absorbed a quiet truth that would shape
              the rest of his career: the most ambitious ideas in medicine almost never
              arrive on schedule, but they do arrive, eventually, for those who refuse to
              let them go.
            </p>
            <p className="text-lg text-foreground/85 leading-relaxed mb-6">
              He spent the next 25 years inside the medical-device industry, working
              alongside surgeons, regulators, and engineers across some of the field's
              largest companies. He shipped products. He led teams. He sat in operating
              rooms. And every year, the same uncomfortable question kept returning:
              <em className="text-foreground"> why are we still implanting devices that we know will fail?</em>
            </p>
          </Reveal>

          <Reveal delay={120}>
            <figure className="my-12 border-l-4 border-secondary pl-6 md:pl-8 py-2">
              <Quote className="h-6 w-6 text-secondary mb-4" aria-hidden />
              <blockquote className="text-2xl md:text-3xl font-medium text-foreground leading-snug tracking-tight">
                &ldquo;A child should not need their fourth heart surgery before they need
                their first car. That is the problem we get up for.&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-sm text-muted-foreground uppercase tracking-widest font-semibold">
                Ajay Houde · Co-founder, Annoviant
              </figcaption>
            </figure>
          </Reveal>

          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-4 mt-8">
              Chapter two · Vision
            </p>
            <h2 className="mb-8">The audacious idea</h2>
            <p className="text-lg text-foreground/85 leading-relaxed mb-6">
              The premise sounded almost too simple to be possible. What if the implant
              were not a permanent foreign object at all, but a scaffold the body could
              recognize as its own, repopulate with its own cells, and remodel into living
              tissue? What if, in a child, that tissue could grow?
            </p>
            <p className="text-lg text-foreground/85 leading-relaxed">
              Most established players had tried versions of regeneration and moved on.
              The biology was hard. The regulatory path was long. The economics were
              uncertain. To Ajay, those were not reasons to walk away. They were the
              reasons the problem still existed.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <figure className="my-12 border-l-4 border-[hsl(var(--empathy))] pl-6 md:pl-8 py-2 bg-accent-soft/40 rounded-r-xl pr-6 md:pr-8 -mx-2">
              <Sparkles className="h-6 w-6 text-[hsl(var(--empathy))] mb-4" aria-hidden />
              <blockquote className="text-xl md:text-2xl text-foreground leading-snug">
                &ldquo;If the biology was easy, someone else would have already solved it.
                That is exactly why we had to be the ones to try.&rdquo;
              </blockquote>
            </figure>
          </Reveal>

          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-4 mt-8">
              Chapter three · Patience
            </p>
            <h2 className="mb-8">A decade does not feel long until you live it</h2>
            <p className="text-lg text-foreground/85 leading-relaxed mb-6">
              Annoviant was founded in 2018 in Alpharetta, Georgia, with a co-founder,
              Naren Vyavahare, PhD, whose academic program had been laying the
              scientific foundation for years. There was no shortcut. The team ran ISO
              5840 and ISO 10993 studies. They worked through aggressive lamb-to-sheep
              models. They published. They patented. They listened to surgeons. They
              answered every hard question, including the ones that did not have easy
              answers yet.
            </p>
            <p className="text-lg text-foreground/85 leading-relaxed">
              In 2020, the FDA granted the TxGuard® Pulmonary Valved Graft a Humanitarian
              Use Device designation. In 2024, the NIH awarded a $2.99M grant for the
              pediatric program, bringing cumulative NIH backing of the platform to $5.7M.
              Manufacturing readiness was reached at an ISO 13485-certified facility,
              a milestone many platforms never reach. None of it happened quickly. All
              of it happened.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <figure className="my-12 border-l-4 border-secondary pl-6 md:pl-8 py-2">
              <Quote className="h-6 w-6 text-secondary mb-4" aria-hidden />
              <blockquote className="text-2xl md:text-3xl font-medium text-foreground leading-snug tracking-tight">
                &ldquo;Building a platform like this is not a sprint and it is not a
                marathon. It is a relay, and the next runner is always a child.&rdquo;
              </blockquote>
            </figure>
          </Reveal>

          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-4 mt-8">
              Chapter four · Impact
            </p>
            <h2 className="mb-8">Why the work continues</h2>
            <p className="text-lg text-foreground/85 leading-relaxed mb-6">
              Roughly 40,000 newborns are diagnosed with congenital heart disease in the
              United States every year. For the most fragile of them, today's
              bioprosthetic options cannot grow, which means a lifetime of repeat surgeries.
              The team Ajay built, executives, clinical advisors, scientific
              collaborators, and partner hospitals, did not come together for a startup.
              They came together for those children.
            </p>
            <p className="text-lg text-foreground/85 leading-relaxed">
              The work is investigational. Pre-clinical animal data may not predict
              outcomes in humans. Annoviant says these things plainly because the team's
              integrity is part of the product. But the direction is unmistakable: a
              regenerative tissue platform that integrates, adapts, and endures, for
              adults, and for the children who deserve a chance to grow with their hearts.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="my-16 rounded-2xl border border-border bg-card p-8 md:p-10 shadow-card">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-4">
                A letter from Ajay
              </p>
              <p className="text-foreground/85 leading-relaxed mb-4">
                If you are a surgeon, I want to know what would change your practice. If
                you are an investor, I want you to scrutinize the science as hard as we
                have. If you are a parent of a child with congenital heart disease, I want
                you to know that the people inside this company think about your child
                more than is reasonable, and we will keep doing so until the standard of
                care is no longer something you have to dread.
              </p>
              <p className="text-foreground/85 leading-relaxed mb-6">
                We are early. We are honest about that. We are also entirely committed.
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="/team/ajay-houde.jpg"
                  alt=""
                  aria-hidden
                  className="h-14 w-14 rounded-full object-cover border-2 border-border"
                  loading="lazy"
                />
                <div>
                  <div className="font-semibold text-foreground">Ajay Houde, PhD, MBA</div>
                  <div className="text-sm text-muted-foreground">Co-founder & CEO, Annoviant</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </article>

      {/* Milestone timeline */}
      <section className="py-20 md:py-28 bg-muted/40" aria-labelledby="journey-heading">
        <div className="container mx-auto max-w-4xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-4">
              The journey
            </p>
            <h2 id="journey-heading" className="mb-12">A quarter century in motion</h2>
          </Reveal>

          <ol className="relative border-l-2 border-border pl-8 md:pl-12 space-y-10">
            {milestones.map((m, i) => (
              <Reveal as="li" key={m.year + m.label} delay={i * 80} className="relative">
                <span aria-hidden className="absolute -left-[39px] md:-left-[55px] top-1.5 h-5 w-5 rounded-full gradient-primary shadow-glow ring-4 ring-muted/40" />
                <div className="text-sm font-bold uppercase tracking-widest text-secondary mb-1">{m.year}</div>
                <h3 className="mb-2 text-lg">{m.label}</h3>
                <p className="text-sm text-muted-foreground max-w-2xl">{m.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 md:py-28 gradient-deep text-white relative overflow-hidden">
        <div aria-hidden className="absolute -top-40 -left-40 h-[400px] w-[400px] rounded-full bg-secondary/25 blur-[140px]" />
        <div className="container mx-auto relative max-w-3xl text-center">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-4">
              Continue the conversation
            </p>
            <h2 className="text-white mb-5">If this work matters to you, it matters to us</h2>
            <p className="text-white/80 medical-body mx-auto mb-8">
              Surgeons, investors, partners, and families: every meaningful chapter of this
              story has begun with someone reaching out. The next one might be yours.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="gradient-primary border-0 shadow-glow min-h-[44px]">
                <Link to="/contact">Request a briefing <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent min-h-[44px]">
                <Link to="/team">Meet the team</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default FounderStoryPage;
