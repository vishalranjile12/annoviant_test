import { Link } from "react-router-dom";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Seo } from "@/components/site/Seo";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Quote, ArrowRight, Sparkles, Mail, Linkedin } from "lucide-react";

const milestones = [
  {
    year: "Origins",
    label: "Three languages, one curiosity",
    body:
      "Born and raised in India, Ajay grew up speaking Hindi, Marathi, and Kannada. He arrived in the United States with the conviction that the most ambitious work in medicine demanded patience, and that biology, given the right cues, could be guided toward repair rather than replacement.",
  },
  {
    year: "1997",
    label: "First patent issued",
    body:
      "Ajay's first U.S. patent is granted, opening a chapter that has not closed since. Over the next 28 years he is named on more than 60 issued patents spanning surgical sealants, infection-control technology, sterilization, and regenerative medicine.",
  },
  {
    year: "2006–2014",
    label: "Building products at Kimberly-Clark Health Care",
    body:
      "As an R&D leader, Ajay earns five separate New Product Launch Awards (2006, 2007, 2009, 2010, 2014), the Innovation Operational Excellence Award (2012), and a Kimberly-Clark Corporation Legacy Award (2010). He learns what it takes to ship a real medical device at scale.",
  },
  {
    year: "2008",
    label: "Medical Design Excellence Award",
    body:
      "InteguSEAL® Microbial Sealant, a product Ajay helped bring to market, is named one of just 33 winners of the 2008 Medical Design Excellence Awards. The product reduces the risk of surgical-site infections, an early proof of his thesis that what gets implanted matters as much as how.",
  },
  {
    year: "2018",
    label: "Annoviant is founded",
    body:
      "Co-founded with Naren Vyavahare, PhD, in the Atlanta metro. The premise is simple and audacious: build a tissue platform that the body recognizes as its own, and engineer it to grow with the patient.",
  },
  {
    year: "2020",
    label: "FDA Humanitarian Use Device designation",
    body:
      "TxGuard® Pulmonary Valved Graft receives FDA HUD designation, validating the approach for pediatric congenital heart disease and unlocking a fast-track path forward.",
  },
  {
    year: "2024",
    label: "$2.99M NIH grant",
    body:
      "An NIH grant accelerates pediatric pulmonary-valved conduit development, bringing total NIH backing of the platform to $5.7M.",
  },
  {
    year: "Today",
    label: "A multi-indication platform",
    body:
      "Four issued U.S. patents on the TxGuard® platform. Two PCT applications. Fourteen peer-reviewed publications. ISO 13485-certified manufacturing readiness. A robust ecosystem of pediatric hospitals, FDA-funded device consortia, and clinical advisors. The work is just getting started.",
  },
];

const FounderStoryPage = () => {
  const ld = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ajay Houde",
    jobTitle: "Co-founder & CEO, Annoviant",
    worksFor: { "@type": "Organization", name: "Annoviant, Inc." },
    description:
      "Ajay Houde is the co-founder and CEO of Annoviant, a regenerative medicine company developing TxGuard®. Over 25+ years he has been named on 60+ U.S. patents and led product development at Kimberly-Clark Health Care.",
    email: "ahoude@annoviant.com",
    image: "https://annoviant.com/wp-content/uploads/2022/05/headshot_ajay-houde-1.jpg",
    sameAs: ["https://www.linkedin.com/in/ajayhoude/"],
    award: [
      "Medical Design Excellence Award (2008, InteguSEAL Microbial Sealant)",
      "Kimberly-Clark Innovation Operational Excellence Award (2012)",
      "Kimberly-Clark Corporation Legacy Award (2010)",
      "Kimberly-Clark New Product Launch Awards (2006, 2007, 2009, 2010, 2014)",
    ],
  };

  return (
    <main id="main">
      <Seo
        title="Founder Story · Ajay Houde, Annoviant"
        description="60+ U.S. patents over nearly three decades. Five product-launch awards at Kimberly-Clark Health Care. One audacious bet on regenerative medicine. The story behind Annoviant and Ajay Houde's drive to give every patient, especially children, a heart that grows with them."
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
                60+ patents. Five product-launch awards. One stubborn belief that <span className="text-gradient">hearts can heal themselves</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 medical-body">
                Ajay Houde spent more than two decades shipping medical devices at scale,
                long enough to see the same uncomfortable pattern: bioprosthetics were
                never designed to last. Annoviant is his answer.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Button asChild size="lg" className="gradient-primary border-0 shadow-glow min-h-[44px]">
                  <a href="#story">Read the story <ArrowRight className="ml-1 h-4 w-4" /></a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent min-h-[44px]">
                  <a href="https://www.linkedin.com/in/ajayhoude/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-1.5 h-4 w-4" /> Connect on LinkedIn
                  </a>
                </Button>
                <Button asChild size="lg" variant="ghost" className="text-white hover:bg-white/10 hover:text-white min-h-[44px]">
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

          {/* Stats strip from verified record */}
          <dl className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl">
            {[
              ["60+", "U.S. patents issued (1997–2025)"],
              ["25+", "Years in medical-device innovation"],
              ["5", "New Product Launch Awards (Kimberly-Clark)"],
              ["1", "Medical Design Excellence Award (2008)"],
            ].map(([n, l]) => (
              <div key={l} className="animate-fade-up" style={{ animationDelay: "240ms" }}>
                <dt className="sr-only">{l}</dt>
                <dd>
                  <span className="text-2xl md:text-3xl font-bold text-white">{n}</span>
                  <span className="block text-xs text-white/60 mt-1">{l}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Editorial body */}
      <article id="story" className="py-20 md:py-28">
        <div className="container mx-auto max-w-3xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-4">
              Chapter one · Origins
            </p>
            <h2 className="mb-8">A scientist before he was a founder</h2>
            <p className="text-lg text-foreground/85 leading-relaxed mb-6">
              <span className="float-left font-bold text-6xl md:text-7xl leading-[0.85] mr-3 mt-1 text-primary">A</span>
              jay Houde grew up in India, in a household where Hindi, Marathi, and Kannada
              all carried the weight of family. He arrived in the United States with the
              kind of curiosity that does not announce itself, only the conviction that the
              most ambitious work in medicine almost never arrives on schedule, but it does
              arrive, eventually, for those who refuse to let it go.
            </p>
            <p className="text-lg text-foreground/85 leading-relaxed mb-6">
              He studied. He earned credentials. And then he did the unglamorous thing
              that distinguishes most great founders from most great ideas: he went to
              work, inside the industry, for a long time, before he ever tried to remake
              it.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <figure className="my-12 border-l-4 border-secondary pl-6 md:pl-8 py-2">
              <Quote className="h-6 w-6 text-secondary mb-4" aria-hidden />
              <blockquote className="font-handwritten text-3xl md:text-5xl text-foreground leading-tight">
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
              Chapter two · The 60-patent decade
            </p>
            <h2 className="mb-8">Two decades inside the industry</h2>
            <p className="text-lg text-foreground/85 leading-relaxed mb-6">
              Ajay's first U.S. patent was granted in 1997. By the time the next thirty
              years had passed, his name would be on more than sixty issued patents
              spanning surgical sealants, infection control, sterilization systems, and
              regenerative medicine. Most founders measure their portfolio by the
              hundreds of pages they have raised on. Ajay measured his by the products
              that actually reached patients.
            </p>
            <p className="text-lg text-foreground/85 leading-relaxed mb-6">
              The most public chapter of that work was Kimberly-Clark Health Care, where
              he led R&D programs that earned five separate New Product Launch Awards
              between 2006 and 2014. In 2008, InteguSEAL® Microbial Sealant, a product
              he helped bring to market, was named one of only 33 winners of the Medical
              Design Excellence Awards. The product reduced surgical-site infections.
              The lesson, for him, was permanent: <em>what gets implanted matters as much
              as how.</em>
            </p>
            <p className="text-lg text-foreground/85 leading-relaxed">
              He had ideas all along about regenerative tissue. He kept them
              intentionally on the back burner, because biology is patient, and because
              he wanted to learn how to ship before he tried to revolutionize.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <figure className="my-12 border-l-4 border-[hsl(var(--empathy))] pl-6 md:pl-8 py-2 bg-accent-soft/40 rounded-r-xl pr-6 md:pr-8 -mx-2">
              <Sparkles className="h-6 w-6 text-[hsl(var(--empathy))] mb-4" aria-hidden />
              <blockquote className="font-handwritten text-2xl md:text-4xl text-foreground leading-tight">
                &ldquo;If the biology was easy, someone else would have already solved it.
                That is exactly why we had to be the ones to try.&rdquo;
              </blockquote>
            </figure>
          </Reveal>

          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-4 mt-8">
              Chapter three · Patience
            </p>
            <h2 className="mb-8">The audacious idea, finally</h2>
            <p className="text-lg text-foreground/85 leading-relaxed mb-6">
              The premise sounded almost too simple to be possible. What if the implant
              were not a permanent foreign object at all, but a scaffold the body could
              recognize as its own, repopulate with its own cells, and remodel into
              living tissue? What if, in a child, that tissue could grow?
            </p>
            <p className="text-lg text-foreground/85 leading-relaxed mb-6">
              Most established players had tried versions of regeneration and moved on.
              The biology was hard. The regulatory path was long. The economics were
              uncertain. To Ajay, those were not reasons to walk away. They were the
              reasons the problem still existed.
            </p>
            <p className="text-lg text-foreground/85 leading-relaxed">
              Annoviant was founded in 2018 in the Atlanta metro, alongside co-founder
              Naren Vyavahare, PhD, whose academic program had been laying the
              scientific foundation for years. There was no shortcut. The team ran
              ISO 5840 and ISO 10993 studies. They worked through aggressive
              lamb-to-sheep models. They published. They patented. They listened to
              surgeons. They answered every hard question, including the ones that did
              not have easy answers yet.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <figure className="my-12 border-l-4 border-secondary pl-6 md:pl-8 py-2">
              <Quote className="h-6 w-6 text-secondary mb-4" aria-hidden />
              <blockquote className="font-handwritten text-3xl md:text-5xl text-foreground leading-tight">
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
              In 2020, the FDA granted the TxGuard® Pulmonary Valved Graft a
              Humanitarian Use Device designation. In 2024, the NIH awarded a $2.99M
              grant for the pediatric program, bringing cumulative NIH backing of the
              platform to $5.7M. Manufacturing readiness was reached at an ISO 13485
              certified facility, a milestone many platforms never reach. None of it
              happened quickly. All of it happened.
            </p>
            <p className="text-lg text-foreground/85 leading-relaxed mb-6">
              Roughly 40,000 newborns are diagnosed with congenital heart disease in the
              United States every year. For the most fragile of them, today's
              bioprosthetic options cannot grow, which means a lifetime of repeat
              surgeries. The team Ajay built, executives, clinical advisors, scientific
              collaborators, and partner hospitals, did not come together for a
              startup. They came together for those children.
            </p>
            <p className="text-lg text-foreground/85 leading-relaxed">
              The work is investigational. Pre-clinical animal data may not predict
              outcomes in humans. Annoviant says these things plainly because the team's
              integrity is part of the product. But the direction is unmistakable: a
              regenerative tissue platform that integrates, adapts, and endures, for
              adults, and for the children who deserve a chance to grow with their
              hearts.
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
                have. If you are a parent of a child with congenital heart disease, I
                want you to know that the people inside this company think about your
                child more than is reasonable, and we will keep doing so until the
                standard of care is no longer something you have to dread.
              </p>
              <p className="text-foreground/85 leading-relaxed mb-6">
                We are early. We are honest about that. We are also entirely committed.
              </p>
              <div className="flex items-center justify-between gap-4 flex-wrap">
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
                <a
                  href="https://www.linkedin.com/in/ajayhoude/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-secondary transition-smooth"
                >
                  <Linkedin className="h-4 w-4" /> Connect on LinkedIn
                </a>
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
            <h2 id="journey-heading" className="mb-12">Three decades in motion</h2>
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
              Surgeons, investors, partners, and families: every meaningful chapter of
              this story has begun with someone reaching out. The next one might be
              yours.
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
