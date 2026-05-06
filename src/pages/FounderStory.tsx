import { Link } from "react-router-dom";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Seo } from "@/components/site/Seo";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Quote, ArrowRight, Sparkles, Mail, Linkedin, PlayCircle } from "lucide-react";

const narenMilestones = [
  {
    year: "Origins",
    label: "From India, with chemistry",
    body:
      "Naren grew up and trained in India, where the foundation for the rest of his career was built quietly: chemistry, physical sciences, and the kind of laboratory discipline that rewards patience over cleverness.",
  },
  {
    year: "Jan 1997",
    label: "Research Asst Professor, University of Pennsylvania",
    body:
      "His first U.S. faculty role: the University of Pennsylvania School of Medicine, working on the kind of biomaterials questions that would anchor the next thirty years.",
  },
  {
    year: "1999",
    label: "Also at the University of Michigan",
    body:
      "A research assistant professorship at Michigan added a second institutional perspective before he settled on the lab he&rsquo;d build for the long haul.",
  },
  {
    year: "Nov 1999",
    label: "Joins Clemson University",
    body:
      "Naren joins Clemson, the institution he&rsquo;s been at ever since. He becomes Hunter Endowed Chair and Professor of Bioengineering, and starts the lab program that produces TxGuard®&rsquo;s scientific foundation.",
  },
  {
    year: "Across two decades",
    label: "150+ papers, 15+ patents, dozens of students",
    body:
      "Out of the lab come 150+ peer-reviewed journal publications, 6 book chapters, 15+ international and U.S. patents, and 15 PhD and 21 MS students graduated as their major advisor. He directs the NIH-funded SC BioCRAFT center.",
  },
  {
    year: "Recognition",
    label: "AIMBE Fellow and Clemson honors",
    body:
      "Elected a Fellow of the American Institute of Medical and Biological Engineering. Clemson recognizes him with the McQueen Quattlebaum Faculty Excellence Award and an Alumni Award for outstanding achievement in research.",
  },
  {
    year: "Dec 2016",
    label: "Co-founds Elastrin Therapeutics",
    body:
      "His first translational venture, focused on targeting elastin-degrading diseases like vascular calcification.",
  },
  {
    year: "May 2018",
    label: "Co-founds Annoviant",
    body:
      "With Ajay Houde. The company that takes his lab&rsquo;s heart-valve biomaterials toward the clinic.",
  },
  {
    year: "Sep 2018",
    label: "Co-founds Elastintech",
    body:
      "A third company, on the same scientific through-line: extracellular-matrix preservation, applied wherever the body needs it most.",
  },
  {
    year: "Today",
    label: "Still teaching, still publishing, still building",
    body:
      "Twenty-six years at Clemson. Three companies he co-founded. An NIH-funded center he directs. The next generation of bioengineers in his lab. He shows no signs of slowing.",
  },
];

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
  const ld = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://annoviant.com/founder-story#ajay",
      name: "Ajay Houde",
      jobTitle: "Co-founder & CEO, Annoviant",
      worksFor: { "@type": "Organization", name: "Annoviant, Inc." },
      description:
        "Ajay Houde is the co-founder and CEO of Annoviant, a regenerative medicine company developing TxGuard®. Over 25+ years he has been named on 60+ U.S. patents and led product development at Kimberly-Clark Health Care.",
      email: "ahoude@annoviant.com",
      image: "https://annoviant.com/team/ajay-houde.jpg",
      sameAs: ["https://www.linkedin.com/in/ajayhoude/"],
      award: [
        "Medical Design Excellence Award (2008, InteguSEAL Microbial Sealant)",
        "Kimberly-Clark Innovation Operational Excellence Award (2012)",
        "Kimberly-Clark Corporation Legacy Award (2010)",
        "Kimberly-Clark New Product Launch Awards (2006, 2007, 2009, 2010, 2014)",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://annoviant.com/founder-story#naren",
      name: "Narendra Vyavahare",
      alternateName: "Naren Vyavahare",
      jobTitle: "Co-founder & CTO, Annoviant; Hunter Endowed Chair and Professor of Bioengineering, Clemson University",
      worksFor: [
        { "@type": "Organization", name: "Annoviant, Inc." },
        { "@type": "EducationalOrganization", name: "Clemson University" },
      ],
      description:
        "Narendra (Naren) Vyavahare, PhD, is the co-founder and CTO of Annoviant and the Hunter Endowed Chair and Professor of Bioengineering at Clemson University. With more than 150 publications, 15+ international and U.S. patents, and Director of NIH-funded SC BioCRAFT, his research focuses on heart-valve biomaterials and extracellular-matrix remodeling for tissue regeneration.",
      image: "https://annoviant.com/team/naren-vyavahare.jpg",
      sameAs: [
        "https://www.linkedin.com/in/narendra-vyavahare-147a4213/",
        "https://www.youtube.com/watch?v=h8u6cgM4toE",
      ],
      award: [
        "Fellow of the American Institute of Medical and Biological Engineering (AIMBE)",
        "McQueen Quattlebaum Faculty Excellence Award, Clemson University",
        "Alumni Award for Outstanding Achievement in Research, Clemson University",
      ],
      knowsAbout: [
        "Heart valve biomaterials",
        "Extracellular matrix remodeling",
        "Tissue regeneration",
        "Site-specific therapies",
        "Vascular calcification",
      ],
    },
  ];

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
                Three decades of patents and product launches, all in service of one stubborn idea: <span className="text-gradient">hearts can heal themselves</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 medical-body">
                Ajay spent more than two decades shipping medical devices at scale, long
                enough to notice the same uncomfortable pattern. Bioprosthetics weren&rsquo;t
                built to last. Annoviant is the company he started to do something about it.
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

      {/* Ajay's editorial body */}
      <article id="ajay" className="py-20 md:py-28">
        <div className="container mx-auto max-w-3xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-4">
              Chapter one · Origins
            </p>
            <h2 className="mb-8">A scientist before he was a founder</h2>
            <p className="text-lg text-foreground/85 leading-relaxed mb-6">
              <span className="float-left font-bold text-6xl md:text-7xl leading-[0.85] mr-3 mt-1 text-primary">A</span>
              jay grew up in India, in a household where Hindi, Marathi, and Kannada all carried
              the weight of family. He came to the United States with the kind of curiosity that
              doesn&rsquo;t announce itself, and one quiet conviction: the most ambitious work in
              medicine rarely shows up on schedule, but it shows up for the people who refuse to
              let it go.
            </p>
            <p className="text-lg text-foreground/85 leading-relaxed mb-6">
              He studied. He earned the credentials. And then he did the unglamorous thing that
              separates most great founders from most great ideas, he went to work inside the
              industry, for a long time, before he ever tried to remake it.
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
              Ajay&rsquo;s first U.S. patent was granted in 1997. By the time another three decades
              had gone by, his name would be on more than sixty issued patents, spread across
              surgical sealants, infection control, sterilization systems, and regenerative
              medicine. Most founders measure their portfolio by the slide deck they raised on.
              Ajay measured his by the products that actually reached patients.
            </p>
            <p className="text-lg text-foreground/85 leading-relaxed mb-6">
              The most public chapter was Kimberly-Clark Health Care, where he led R&amp;D
              programs that earned five separate New Product Launch Awards between 2006 and 2014.
              In 2008, a product he helped bring to market, InteguSEAL® Microbial Sealant, was
              named one of only 33 winners of the Medical Design Excellence Awards. It reduced
              surgical-site infections. The lesson stuck: <em>what gets implanted matters every
              bit as much as how.</em>
            </p>
            <p className="text-lg text-foreground/85 leading-relaxed">
              He had ideas about regenerative tissue the whole time. He kept them on a back burner
              on purpose, because biology rewards patience, and because he wanted to learn how to
              ship before he tried to revolutionize anything.
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
              The premise sounded almost too simple to be true. What if the implant didn&rsquo;t
              have to be a permanent foreign object at all? What if it could be a scaffold the
              body recognized as its own, moved its cells into, and remade into living tissue?
              And in a child, what if that tissue could grow?
            </p>
            <p className="text-lg text-foreground/85 leading-relaxed mb-6">
              Most of the established players had tried versions of regeneration and moved on.
              The biology was hard. The regulatory path was long. The economics looked
              uncertain. None of those were reasons to walk away. They were the reasons the
              problem still existed.
            </p>
            <p className="text-lg text-foreground/85 leading-relaxed">
              Annoviant was founded in 2018 in the Atlanta metro, alongside co-founder Naren
              Vyavahare, PhD, whose academic program had been laying the scientific foundation
              for years. There were no shortcuts. They ran ISO 5840 and ISO 10993 studies. They
              worked through aggressive lamb-to-sheep models. They published. They patented.
              They listened to surgeons. They answered every hard question, including the ones
              that didn&rsquo;t have easy answers yet.
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
              In 2020, the FDA granted the Pulmonary Valved Graft a Humanitarian Use Device
              designation. In 2024, the NIH awarded a $2.99M grant for the pediatric program,
              bringing cumulative NIH backing of the platform to $5.7M. Manufacturing readiness
              landed at an ISO 13485&ndash;certified facility, a milestone many platforms never
              reach. None of it happened quickly. All of it happened.
            </p>
            <p className="text-lg text-foreground/85 leading-relaxed mb-6">
              Around 40,000 newborns are diagnosed with congenital heart disease in the United
              States every year. For the most fragile of them, today&rsquo;s bioprosthetic options
              can&rsquo;t grow, which means a lifetime of repeat surgeries. The team Ajay built,
              executives, clinical advisors, scientific collaborators, and partner hospitals,
              didn&rsquo;t come together for a startup. They came together for those children.
            </p>
            <p className="text-lg text-foreground/85 leading-relaxed">
              The work is investigational. Pre-clinical animal data may not predict outcomes in
              humans. We say so plainly because being honest is part of the product. The
              direction, though, is unmistakable: a regenerative tissue platform that integrates,
              adapts, and lasts, for adults, and for the children who deserve a chance to grow
              with their own hearts.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="my-16 rounded-2xl border border-border bg-card p-8 md:p-10 shadow-card">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-4">
                A letter from Ajay
              </p>
              <p className="text-foreground/85 leading-relaxed mb-4">
                If you&rsquo;re a surgeon, I want to know what would actually change your practice.
                If you&rsquo;re an investor, I want you to scrutinize the science as hard as we
                have. If you&rsquo;re the parent of a child with congenital heart disease, I want
                you to know that the people inside this company think about your child more than
                is reasonable, and we&rsquo;ll keep doing so until the standard of care is no
                longer something you have to dread.
              </p>
              <p className="text-foreground/85 leading-relaxed mb-6">
                We&rsquo;re early. We&rsquo;re honest about that. We&rsquo;re also all in.
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

      {/* Ajay's milestone timeline */}
      <section className="py-20 md:py-28 bg-muted/40" aria-labelledby="journey-heading">
        <div className="container mx-auto max-w-4xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-4">
              Ajay&rsquo;s journey
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

      {/* Naren's editorial section */}
      <section
        id="naren"
        className="relative pt-24 md:pt-32 pb-20 md:pb-28 gradient-hero text-white overflow-hidden"
        aria-labelledby="naren-heading"
      >
        <img
          src="/hero/microscope.jpg"
          alt=""
          aria-hidden
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface-deep/95 via-surface-deep/85 to-surface-deep" />
        <div aria-hidden className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/30 blur-[140px]" />
        <div aria-hidden className="absolute -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-secondary/25 blur-[140px]" />

        <div className="container mx-auto relative">
          <Reveal>
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-7 order-2 lg:order-1">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-5">
                  And his co-founder · Narendra Vyavahare, PhD
                </p>
                <h2 id="naren-heading" className="text-white mb-6 text-balance leading-[1.05]">
                  The scientist who&rsquo;s spent <span className="text-gradient">25 years on the biology</span> behind TxGuard®
                </h2>
                <p className="text-lg md:text-xl text-white/80 medical-body">
                  Naren has been a Hunter Endowed Chair and Professor of Bioengineering at
                  Clemson University since 1999. The science under TxGuard® didn&rsquo;t arrive
                  overnight, it came out of his lab.
                </p>

                <div className="mt-10 flex flex-wrap gap-3">
                  <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent min-h-[44px]">
                    <a
                      href="https://www.linkedin.com/in/narendra-vyavahare-147a4213/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="mr-1.5 h-4 w-4" /> Connect on LinkedIn
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="ghost" className="text-white hover:bg-white/10 hover:text-white min-h-[44px]">
                    <a href="#tedx">
                      <PlayCircle className="mr-1.5 h-4 w-4" /> Watch his TEDx talk
                    </a>
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5 order-1 lg:order-2 relative">
                <div aria-hidden className="absolute -inset-6 rounded-[2rem] gradient-primary blur-2xl opacity-50" />
                <figure className="relative rounded-[1.5rem] overflow-hidden border border-white/20 shadow-elegant">
                  <img
                    src="/team/naren-vyavahare.jpg"
                    alt="Narendra (Naren) Vyavahare, PhD, Co-founder and CTO of Annoviant; Hunter Endowed Chair and Professor of Bioengineering, Clemson University"
                    width={640}
                    height={800}
                    loading="lazy"
                    className="w-full aspect-[4/5] object-cover"
                  />
                  <figcaption className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-surface-deep/95 via-surface-deep/60 to-transparent">
                    <div className="text-xs uppercase tracking-widest text-secondary font-semibold">Naren Vyavahare</div>
                    <div className="text-sm text-white/85">Co-founder & CTO, Annoviant</div>
                  </figcaption>
                </figure>
              </div>
            </div>

            {/* Verified record stats */}
            <dl className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl">
              {[
                ["150+", "peer-reviewed papers and conference proceedings"],
                ["15+", "U.S. and international patents"],
                ["26+", "years at Clemson as a Hunter Endowed Chair"],
                ["AIMBE", "Fellow, with NIH-funded SC BioCRAFT"],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className="sr-only">{l}</dt>
                  <dd>
                    <span className="text-2xl md:text-3xl font-bold text-white">{n}</span>
                    <span className="block text-xs text-white/60 mt-1">{l}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Naren's narrative + TEDx video */}
      <article className="py-20 md:py-28">
        <div className="container mx-auto max-w-3xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-4">
              Chapter one · The scientist
            </p>
            <h2 className="mb-8">From a high-school classroom in India to a Clemson endowed chair</h2>
            <p className="text-lg text-foreground/85 leading-relaxed mb-6">
              <span className="float-left font-bold text-6xl md:text-7xl leading-[0.85] mr-3 mt-1 text-primary">N</span>
              aren grew up in India and trained in chemistry before crossing the Atlantic to do
              the work that has defined his career. He came to the United States as a Research
              Assistant Professor at the University of Pennsylvania School of Medicine, with a
              stop at the University of Michigan along the way. In November 1999, he joined
              Clemson University, where he&rsquo;s been ever since.
            </p>
            <p className="text-lg text-foreground/85 leading-relaxed mb-6">
              At Clemson, his lab focuses on heart-valve biomaterials, site-specific therapies,
              and the slow, painstaking science of extracellular-matrix remodeling, the biology
              that lets a tissue scaffold actually become living tissue. The lab&rsquo;s work has
              produced 150+ journal publications, 15+ international and U.S. patents, and trained
              the next generation: 15 PhDs and 21 MS students graduated as their major advisor.
            </p>
            <p className="text-lg text-foreground/85 leading-relaxed">
              He directs the NIH-funded South Carolina Bioengineering Center of Regeneration and
              Formation of Tissues (SC BioCRAFT). He&rsquo;s a Fellow of the American Institute of
              Medical and Biological Engineering (AIMBE). Clemson has recognized him with the
              McQueen Quattlebaum Faculty Excellence Award and an Alumni Award for outstanding
              achievement in research. None of those titles tell you what he&rsquo;s really like in
              a meeting, which is patient, exact, and absolutely committed to the next experiment.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <figure className="my-12 border-l-4 border-secondary pl-6 md:pl-8 py-2">
              <Quote className="h-6 w-6 text-secondary mb-4" aria-hidden />
              <blockquote className="font-handwritten text-3xl md:text-5xl text-foreground leading-tight">
                &ldquo;Elastin is the rubber band of life. Once you understand how to preserve it,
                you understand how to keep tissue alive.&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-sm text-muted-foreground uppercase tracking-widest font-semibold">
                Naren Vyavahare · TEDxGreenville
              </figcaption>
            </figure>
          </Reveal>

          {/* TEDx video */}
          <Reveal>
            <div id="tedx" className="my-12">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-4">
                Watch · TEDxGreenville
              </p>
              <h3 className="mb-5">Elastin: the rubber band of life</h3>
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-elegant border border-border bg-surface-deep">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/h8u6cgM4toE?rel=0"
                  title="Naren Vyavahare, TEDxGreenville, Elastin: the rubber band of life"
                  loading="lazy"
                  allow="accelerated-2d-canvas; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                In about twelve minutes, Naren explains why elastin, the protein that gives your
                skin and your heart valves their resilience, is one of biology&rsquo;s most
                underappreciated heroes, and why preserving it is at the core of how Annoviant
                builds tissue that lasts.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-4 mt-8">
              Chapter two · From bench to bedside
            </p>
            <h2 className="mb-8">Three companies, one through-line</h2>
            <p className="text-lg text-foreground/85 leading-relaxed mb-6">
              Most of Naren&rsquo;s career has been academic. The translational chapter began in
              2016 with Elastrin Therapeutics, where he&rsquo;s Co-Founder and CSO, focused on
              targeting elastin-degrading diseases like vascular calcification. In 2018 he and
              Ajay co-founded Annoviant to bring decades of his lab&rsquo;s heart-valve biomaterials
              work toward patients. Later that same year, he co-founded Elastintech as well.
            </p>
            <p className="text-lg text-foreground/85 leading-relaxed">
              The three companies share a thread, the patient, slow, careful preservation of the
              extracellular matrix that lets tissue function and heal. Naren is the reason that
              science exists, decades before anyone tried to commercialize it.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <figure className="my-12 border-l-4 border-[hsl(var(--empathy))] pl-6 md:pl-8 py-2 bg-accent-soft/40 rounded-r-xl pr-6 md:pr-8 -mx-2">
              <Sparkles className="h-6 w-6 text-[hsl(var(--empathy))] mb-4" aria-hidden />
              <blockquote className="font-handwritten text-2xl md:text-4xl text-foreground leading-tight">
                &ldquo;You don&rsquo;t replace tissue. You give the body what it needs to remake
                itself. Then you wait.&rdquo;
              </blockquote>
            </figure>
          </Reveal>

          <Reveal delay={120}>
            <div className="my-16 rounded-2xl border border-border bg-card p-8 md:p-10 shadow-card">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-4">
                Connect with Naren
              </p>
              <p className="text-foreground/85 leading-relaxed mb-6">
                If you&rsquo;re a researcher, surgeon, or grad student interested in elastin, ECM
                preservation, or regenerative biomaterials, the easiest way to start a conversation
                is on LinkedIn or through Clemson Bioengineering.
              </p>
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-4">
                  <img
                    src="/team/naren-vyavahare.jpg"
                    alt=""
                    aria-hidden
                    loading="lazy"
                    className="h-14 w-14 rounded-full object-cover border-2 border-border"
                  />
                  <div>
                    <div className="font-semibold text-foreground">Narendra Vyavahare, PhD</div>
                    <div className="text-sm text-muted-foreground">Co-founder & CTO, Annoviant · Hunter Endowed Chair, Clemson</div>
                  </div>
                </div>
                <a
                  href="https://www.linkedin.com/in/narendra-vyavahare-147a4213/"
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

      {/* Naren's milestone timeline */}
      <section className="py-20 md:py-28 bg-muted/40" aria-labelledby="naren-journey-heading">
        <div className="container mx-auto max-w-4xl">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-4">
              Naren&rsquo;s journey
            </p>
            <h2 id="naren-journey-heading" className="mb-12">From a chemistry lab in India to a Clemson endowed chair</h2>
          </Reveal>

          <ol className="relative border-l-2 border-border pl-8 md:pl-12 space-y-10">
            {narenMilestones.map((m, i) => (
              <Reveal as="li" key={m.year + m.label} delay={i * 80} className="relative">
                <span aria-hidden className="absolute -left-[39px] md:-left-[55px] top-1.5 h-5 w-5 rounded-full gradient-primary shadow-glow ring-4 ring-muted/40" />
                <div className="text-sm font-bold uppercase tracking-widest text-secondary mb-1">{m.year}</div>
                <h3 className="mb-2 text-lg" dangerouslySetInnerHTML={{ __html: m.label }} />
                <p className="text-sm text-muted-foreground max-w-2xl" dangerouslySetInnerHTML={{ __html: m.body }} />
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
              Surgeons, investors, partners, families, every meaningful chapter of this story has
              begun with someone reaching out. The next one might be yours.
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
