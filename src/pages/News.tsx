import { PageShell } from "@/components/site/PageShell";
import { Seo } from "@/components/site/Seo";
import { Reveal } from "@/components/site/Reveal";
import { Calendar, ShieldCheck } from "lucide-react";

type Category = "Media" | "Press Release" | "Announcement" | "Regulatory";
type Post = {
  date: string;
  category: Category;
  title: string;
  excerpt?: string;
  image?: string;
};

const featured: Post = {
  date: "Apr 16, 2024",
  category: "Press Release",
  title: "Annoviant Awarded $2.99M NIH Grant for Pediatric TxGuard® Pulmonary-Valved Conduit",
  excerpt:
    "A multi-year NIH award to accelerate the TxGuard® Pulmonary Valved Graft toward congenital heart disease patients. Cumulative NIH backing of the platform: $5.7M.",
  image: "/news/nih-grant-2024.jpg",
};

const sidePosts: Post[] = [
  {
    date: "Aug 6, 2024",
    category: "Media",
    title: "Alpharetta startup's technology could revolutionize cardiac surgeries",
    excerpt: "A local-paper deep dive on what TxGuard® is, why it&rsquo;s different, and the team behind it.",
    image: "/news/cardio-2024.png",
  },
  {
    date: "Apr 25, 2023",
    category: "Media",
    title: "Alpharetta-Based Annoviant: a Medical Device Startup That Aims to Grow With Patients",
    excerpt: "An early profile on how Annoviant is approaching the hardest pediatric problem in heart surgery.",
    image: "/news/grows-patients-2023.jpg",
  },
];

const sbir: Post = {
  date: "Oct 2021",
  category: "Press Release",
  title: "Annoviant awarded $1.85M SBIR Phase II grant from the National Institutes of Health",
  excerpt:
    "An earlier NIH SBIR Phase II grant that helped take TxGuard® from the lab toward IND-enabling work, building the foundation for the 2024 award.",
};

const regulatory: Post = {
  date: "2020",
  category: "Regulatory",
  title: "TxGuard® Pulmonary Valved Graft receives FDA Humanitarian Use Device designation",
  excerpt:
    "An early regulatory milestone, opening a fast-track path for the pediatric pulmonary valved graft and signaling FDA recognition of the unmet need in pediatric congenital heart disease.",
};

// Smaller mentions, advisor announcements, and earlier coverage, presented as a stripe.
const items: Post[] = [
  {
    date: "Feb 21, 2023",
    category: "Announcement",
    title: "Gregg Tobin joins the Annoviant team as Business Advisor",
  },
  {
    date: "Dec 2022",
    category: "Announcement",
    title: "Bob Storey joins the Annoviant team as Business Advisor",
  },
  {
    date: "Dec 2022",
    category: "Media",
    title: "Annoviant among 17 startups joining ATL accelerator for life-science and medical-device founders",
  },
  {
    date: "Nov 2022",
    category: "Announcement",
    title: "Kevin Maher, MD joins the Annoviant team as Scientific Advisor",
  },
  {
    date: "Oct 2022",
    category: "Media",
    title: "TxGuard®, a platform technology for cardiovascular devices in the pediatric patient",
  },
];

const NewsPage = () => (
  <PageShell
    eyebrow="News &amp; Press"
    title={<>What we&rsquo;ve been up to, <span className="text-gradient">on the record</span></>}
    intro="Press coverage, grants, and the milestones along the way. If you want to follow what&rsquo;s actually happening at Annoviant, this is where to start."
    heroImage="/hero/heart-bg.jpg"
  >
    <Seo
      title="News &amp; Press, Annoviant"
      description="Press coverage, NIH grants, FDA milestones, advisor announcements, and clinical updates from Annoviant and the TxGuard® regenerative tissue platform."
    />

    <section className="py-16 md:py-24">
      <div className="container mx-auto">
        {/* Top, magazine collage with the featured story + two image tiles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6">
          <Reveal className="lg:col-span-7" delay={0}>
            <article className="relative block rounded-2xl overflow-hidden h-full min-h-[420px] md:min-h-[480px] shadow-card">
              <img
                src={featured.image}
                alt=""
                aria-hidden
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
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
                <p className="text-white/80 medical-body max-w-2xl text-sm md:text-base">{featured.excerpt}</p>
              </div>
            </article>
          </Reveal>

          <div className="lg:col-span-5 grid grid-cols-1 gap-5 md:gap-6">
            {sidePosts.map((p, i) => (
              <Reveal key={p.title} delay={(i + 1) * 80}>
                <article className="relative block rounded-2xl overflow-hidden h-full min-h-[200px] md:min-h-[228px] shadow-card">
                  <img
                    src={p.image}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-deep via-surface-deep/65 to-transparent" />
                  <div className="relative h-full flex flex-col justify-end p-5 md:p-6 text-white">
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-secondary font-semibold mb-2">
                      <span className="px-2 py-0.5 rounded-full bg-white/10 border border-white/20">{p.category}</span>
                      <span className="text-white/70">{p.date}</span>
                    </div>
                    <h3 className="text-white text-base md:text-lg leading-snug mb-1.5">{p.title}</h3>
                    {p.excerpt && (
                      <p
                        className="text-white/75 text-xs"
                        dangerouslySetInnerHTML={{ __html: p.excerpt }}
                      />
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Editorial bands: FDA HUD + earlier SBIR press release, side by side */}
        <div className="grid lg:grid-cols-2 gap-5 md:gap-6 mt-5 md:mt-6">
          <Reveal>
            <article className="relative h-full rounded-2xl border border-border bg-muted/40 p-7 md:p-8 overflow-hidden">
              <div aria-hidden className="absolute -top-32 -right-32 h-[420px] w-[420px] rounded-full bg-secondary/10 blur-[140px]" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="h-6 w-6 text-secondary" aria-hidden />
                  <span className="text-[11px] uppercase tracking-widest text-secondary font-semibold">
                    {regulatory.category}
                  </span>
                  <span className="text-2xl font-bold text-foreground tabular-nums leading-none ml-auto">
                    {regulatory.date}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl text-foreground mb-3 leading-snug">{regulatory.title}</h3>
                <p className="text-sm text-muted-foreground medical-body">{regulatory.excerpt}</p>
              </div>
            </article>
          </Reveal>

          <Reveal delay={120}>
            <article className="relative h-full rounded-2xl border border-border bg-card p-7 md:p-8 overflow-hidden">
              <div aria-hidden className="absolute -bottom-32 -left-32 h-[360px] w-[360px] rounded-full bg-primary/10 blur-[140px]" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-secondary/10 text-secondary text-[11px] uppercase tracking-widest font-semibold">
                    {sbir.category}
                  </span>
                  <span className="text-sm font-semibold text-muted-foreground tabular-nums ml-auto">{sbir.date}</span>
                </div>
                <h3 className="text-lg md:text-xl text-foreground mb-3 leading-snug">{sbir.title}</h3>
                <p className="text-sm text-muted-foreground medical-body">{sbir.excerpt}</p>
              </div>
            </article>
          </Reveal>
        </div>

        {/* Earlier mentions and announcements, flat stripe with separators */}
        <Reveal delay={200}>
          <div className="mt-12 md:mt-16">
            <div className="mb-5 flex items-center justify-between gap-4 flex-wrap">
              <h3 className="text-base md:text-lg text-foreground">Earlier mentions</h3>
              <span className="text-[11px] uppercase tracking-widest text-muted-foreground font-semibold">
                Advisors, accelerators, &amp; coverage
              </span>
            </div>
            <ul aria-live="polite">
              {items.map((p, idx) => (
                <li
                  key={p.title}
                  className={`flex items-center gap-4 md:gap-6 py-4 md:py-5 ${idx < items.length - 1 ? "border-b border-border" : ""}`}
                >
                  <span className="hidden sm:block text-sm font-semibold text-muted-foreground tabular-nums w-28 flex-shrink-0">
                    {p.date}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-secondary w-28 flex-shrink-0">
                    {p.category}
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="text-sm md:text-base font-semibold text-foreground leading-snug block">
                      {p.title}
                    </span>
                    <span className="sm:hidden text-[11px] uppercase tracking-wider text-muted-foreground mt-1 font-semibold block">
                      {p.date}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <p className="text-xs text-muted-foreground mt-12 max-w-3xl">
          Press inquiries:{" "}
          <a href="mailto:partnerships@annoviant.com" className="text-primary hover:text-secondary transition-smooth">
            partnerships@annoviant.com
          </a>
          .
        </p>
      </div>
    </section>
  </PageShell>
);

export default NewsPage;
