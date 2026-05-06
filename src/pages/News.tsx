import { PageShell } from "@/components/site/PageShell";
import { Seo } from "@/components/site/Seo";
import { Reveal } from "@/components/site/Reveal";
import { Calendar, ArrowUpRight, ShieldCheck } from "lucide-react";

type Post = {
  date: string;
  category: "Media" | "Press Release" | "Regulatory";
  title: string;
  excerpt: string;
  href?: string;
  image?: string;
};

const featured: Post = {
  date: "Apr 2024",
  category: "Press Release",
  title: "Annoviant Awarded $2.99M NIH Grant for Pediatric TxGuard® Pulmonary-Valved Conduit",
  excerpt:
    "A multi-year NIH award to accelerate the TxGuard® Pulmonary Valved Graft toward congenital heart disease patients. Cumulative NIH backing of the platform: $5.7M.",
  href: "https://annoviant.com/2024/04/annoviant-awarded-2-99-million-nih-grant-to-advance-txguard-pulmonary-valved-conduit-for-pediatric-heart-disease/",
  image: "/hero/microscope.jpg",
};

const sidePosts: Post[] = [
  {
    date: "Aug 2024",
    category: "Media",
    title: "Alpharetta startup's technology could revolutionize cardiac surgeries",
    excerpt: "A local-paper deep dive on what TxGuard® is, why it&rsquo;s different, and the team behind it.",
    href: "https://annoviant.com/2024/08/alpharetta-startups-technology-could-revolutionize-cardiac-surgeries/",
    image: "/hero/cardio-stock.jpg",
  },
  {
    date: "Apr 2023",
    category: "Media",
    title: "Alpharetta-Based Annoviant: a Medical Device Startup That Aims to Grow With Patients",
    excerpt: "An early profile on how Annoviant is approaching the hardest pediatric problem in heart surgery.",
    href: "https://annoviant.com/2023/04/alpharetta-based-annoviant-is-a-medical-device-startup-that-truly-grows-with-patients/",
    image: "/hero/father-son.jpg",
  },
];

const regulatory: Post = {
  date: "2020",
  category: "Regulatory",
  title: "TxGuard® Pulmonary Valved Graft receives FDA Humanitarian Use Device designation",
  excerpt:
    "An early regulatory milestone, opening a fast-track path for the pediatric pulmonary valved graft and signaling FDA recognition of the unmet need in pediatric congenital heart disease.",
};

const NewsPage = () => (
  <PageShell
    eyebrow="News &amp; Press"
    title={<>What we&rsquo;ve been up to, <span className="text-gradient">on the record</span></>}
    intro="Press coverage, grants, and the milestones along the way. If you want to follow what&rsquo;s actually happening at Annoviant, this is where to start."
    heroImage="/hero/heart-bg.jpg"
  >
    <Seo
      title="News &amp; Press, Annoviant"
      description="Press coverage, NIH grants, FDA milestones, and clinical updates from Annoviant and the TxGuard® regenerative tissue platform."
    />

    <section className="py-16 md:py-24">
      <div className="container mx-auto">
        {/* Magazine collage, 12-col grid with asymmetric tiles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6">
          {/* Featured, 7 cols, image-led, hero treatment */}
          <Reveal className="lg:col-span-7" delay={0}>
            <a
              href={featured.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-2xl overflow-hidden h-full min-h-[420px] md:min-h-[480px] shadow-card hover:shadow-elegant transition-smooth"
            >
              <img
                src={featured.image}
                alt=""
                aria-hidden
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-deep via-surface-deep/70 to-surface-deep/10" />
              <div className="relative h-full flex flex-col justify-end p-7 md:p-10 text-white">
                <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-secondary font-semibold mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-secondary/15 border border-secondary/30">{featured.category}</span>
                  <span className="inline-flex items-center gap-1.5 text-white/70">
                    <Calendar className="h-3 w-3" /> {featured.date}
                  </span>
                </div>
                <h2 className="text-white text-2xl md:text-3xl lg:text-4xl mb-3 max-w-2xl leading-tight">
                  {featured.title}
                </h2>
                <p className="text-white/80 medical-body max-w-2xl text-sm md:text-base mb-5">{featured.excerpt}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary group-hover:gap-3 transition-smooth">
                  Read the release <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </a>
          </Reveal>

          {/* Right column, two stacked image cards (each 5 cols, half-height) */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-5 md:gap-6">
            {sidePosts.map((p, i) => (
              <Reveal key={p.title} delay={(i + 1) * 80}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block rounded-2xl overflow-hidden h-full min-h-[200px] md:min-h-[228px] shadow-card hover:shadow-elegant transition-smooth"
                >
                  <img
                    src={p.image}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-deep via-surface-deep/65 to-transparent" />
                  <div className="relative h-full flex flex-col justify-end p-5 md:p-6 text-white">
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-secondary font-semibold mb-2">
                      <span className="px-2 py-0.5 rounded-full bg-white/10 border border-white/20">{p.category}</span>
                      <span className="text-white/70">{p.date}</span>
                    </div>
                    <h3 className="text-white text-base md:text-lg leading-snug mb-2">{p.title}</h3>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-secondary group-hover:gap-3 transition-smooth">
                      Read article <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          {/* Editorial regulatory banner, full-width, text-only, contrast block */}
          <Reveal className="lg:col-span-12" delay={300}>
            <article className="relative rounded-2xl border border-border bg-muted/40 p-7 md:p-10 lg:p-12 overflow-hidden">
              <div aria-hidden className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-secondary/10 blur-[140px]" />
              <div className="relative grid lg:grid-cols-12 gap-6 lg:gap-10 items-start lg:items-end">
                <div className="lg:col-span-2 flex lg:flex-col gap-3 lg:gap-2">
                  <ShieldCheck className="h-7 w-7 md:h-9 md:w-9 text-secondary" aria-hidden />
                  <div className="flex flex-col">
                    <span className="text-[11px] uppercase tracking-widest text-secondary font-semibold">
                      {regulatory.category}
                    </span>
                    <span className="text-2xl md:text-3xl font-bold text-foreground tabular-nums leading-none mt-1">
                      {regulatory.date}
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <h3 className="text-xl md:text-2xl text-foreground mb-3 leading-snug">
                    {regulatory.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground medical-body">
                    {regulatory.excerpt}
                  </p>
                </div>
                <div className="lg:col-span-3 lg:text-right">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    On the record
                  </span>
                </div>
              </div>
            </article>
          </Reveal>
        </div>

        <p className="text-xs text-muted-foreground mt-12 max-w-3xl">
          Press inquiries: <a href="mailto:partnerships@annoviant.com" className="text-primary hover:text-secondary transition-smooth">partnerships@annoviant.com</a>.
        </p>
      </div>
    </section>
  </PageShell>
);

export default NewsPage;
