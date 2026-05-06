import { Link } from "react-router-dom";
import { PageShell } from "@/components/site/PageShell";
import { Seo } from "@/components/site/Seo";
import { Reveal } from "@/components/site/Reveal";
import { Calendar, ArrowUpRight, ShieldCheck } from "lucide-react";
import { articles, articleBySlug } from "@/data/news";

// Featured = the NIH 2024 grant. Side tiles = the next two image-led stories.
const featured = articleBySlug("annoviant-awarded-2-99-million-nih-grant-pediatric-pulmonary-valved-conduit");
const sideSlugs = [
  "alpharetta-startups-technology-could-revolutionize-cardiac-surgeries",
  "alpharetta-based-annoviant-medical-device-startup-grows-with-patients",
];

// Earlier press release that gets the editorial-band treatment alongside FDA HUD.
const sbir = articleBySlug("annoviant-awarded-1-85m-sbir-phase-ii-grant");

// Standalone milestone, not on the legacy /news index, kept on this page.
const regulatory = {
  date: "2020",
  category: "Regulatory" as const,
  title: "TxGuard® Pulmonary Valved Graft receives FDA Humanitarian Use Device designation",
  excerpt:
    "An early regulatory milestone, opening a fast-track path for the pediatric pulmonary valved graft and signaling FDA recognition of the unmet need in pediatric congenital heart disease.",
};

const NewsPage = () => {
  if (!featured) return null;

  const sidePosts = sideSlugs
    .map((slug) => articleBySlug(slug))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  // Earlier mentions = everything else not in the hero or editorial bands
  const surfacedSlugs = new Set([
    featured.slug,
    sbir?.slug,
    ...sideSlugs,
  ]);
  const earlier = articles.filter((a) => !surfacedSlugs.has(a.slug));

  return (
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
              <Link
                to={`/news/${featured.slug}`}
                className="group relative block rounded-2xl overflow-hidden h-full min-h-[420px] md:min-h-[480px] shadow-card hover:shadow-elegant transition-smooth"
              >
                {featured.image && (
                  <img
                    src={featured.image}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                )}
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
                  <p
                    className="text-white/80 medical-body max-w-2xl text-sm md:text-base mb-5"
                    dangerouslySetInnerHTML={{ __html: featured.excerpt }}
                  />
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-secondary group-hover:gap-3 transition-smooth">
                    Read the release <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>

            <div className="lg:col-span-5 grid grid-cols-1 gap-5 md:gap-6">
              {sidePosts.map((p, i) => (
                <Reveal key={p.slug} delay={(i + 1) * 80}>
                  <Link
                    to={`/news/${p.slug}`}
                    className="group relative block rounded-2xl overflow-hidden h-full min-h-[200px] md:min-h-[228px] shadow-card hover:shadow-elegant transition-smooth"
                  >
                    {p.image && (
                      <img
                        src={p.image}
                        alt=""
                        aria-hidden
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    )}
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
                  </Link>
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

            {sbir && (
              <Reveal delay={120}>
                <Link
                  to={`/news/${sbir.slug}`}
                  className="group relative block h-full rounded-2xl border border-border bg-card p-7 md:p-8 hover:shadow-elegant transition-smooth overflow-hidden"
                >
                  <div aria-hidden className="absolute -bottom-32 -left-32 h-[360px] w-[360px] rounded-full bg-primary/10 blur-[140px]" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-2.5 py-1 rounded-full bg-secondary/10 text-secondary text-[11px] uppercase tracking-widest font-semibold">
                        {sbir.category}
                      </span>
                      <span className="text-sm font-semibold text-muted-foreground tabular-nums ml-auto">{sbir.date}</span>
                    </div>
                    <h3 className="text-lg md:text-xl text-foreground mb-3 leading-snug group-hover:text-primary transition-smooth">
                      {sbir.title}
                    </h3>
                    <p className="text-sm text-muted-foreground medical-body mb-4">{sbir.excerpt}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2 transition-smooth">
                      Read the release <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            )}
          </div>

          {/* Earlier mentions, flat stripe with separators, each row links locally */}
          <Reveal delay={200}>
            <div className="mt-12 md:mt-16">
              <div className="mb-5 flex items-center justify-between gap-4 flex-wrap">
                <h3 className="text-base md:text-lg text-foreground">Earlier mentions</h3>
                <span className="text-[11px] uppercase tracking-widest text-muted-foreground font-semibold">
                  Advisors, accelerators, &amp; coverage
                </span>
              </div>
              <ul aria-live="polite">
                {earlier.map((p, idx) => (
                  <li
                    key={p.slug}
                    className={idx < earlier.length - 1 ? "border-b border-border" : ""}
                  >
                    <Link
                      to={`/news/${p.slug}`}
                      className="group flex items-center gap-4 md:gap-5 py-4 md:py-5 hover:bg-muted/40 transition-smooth -mx-4 px-4 md:-mx-6 md:px-6 rounded-md"
                    >
                      {p.image ? (
                        <img
                          src={p.image}
                          alt=""
                          aria-hidden
                          loading="lazy"
                          width={64}
                          height={64}
                          className="h-12 w-12 md:h-14 md:w-14 rounded-lg object-cover flex-shrink-0 border border-border"
                        />
                      ) : (
                        <div aria-hidden className="h-12 w-12 md:h-14 md:w-14 rounded-lg bg-primary/10 flex-shrink-0" />
                      )}
                      <span className="hidden sm:block text-sm font-semibold text-muted-foreground tabular-nums w-24 flex-shrink-0">
                        {p.date}
                      </span>
                      <span className="hidden md:block text-[10px] font-bold uppercase tracking-widest text-secondary w-28 flex-shrink-0">
                        {p.category}
                      </span>
                      <span className="flex-1 min-w-0">
                        <span className="text-sm md:text-base font-semibold text-foreground group-hover:text-primary transition-smooth leading-snug block">
                          {p.title}
                        </span>
                        <span className="md:hidden text-[11px] uppercase tracking-wider text-muted-foreground mt-1 font-semibold block">
                          {p.date} &middot; {p.category}
                        </span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary flex-shrink-0" aria-hidden />
                    </Link>
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
};

export default NewsPage;
