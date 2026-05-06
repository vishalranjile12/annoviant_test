import { Link, useParams } from "react-router-dom";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Seo } from "@/components/site/Seo";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Calendar, Quote } from "lucide-react";
import { articleBySlug, articles } from "@/data/news";

const NewsArticlePage = () => {
  const { slug = "" } = useParams();
  const article = articleBySlug(slug);

  // Show a friendly fallback rather than a 404 if the slug doesn't match
  if (!article) {
    return (
      <main id="main">
        <Seo
          title="Article not found, Annoviant News"
          description="The news article you were looking for could not be found."
        />
        <Nav />
        <section className="container mx-auto py-32 md:py-40">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-4">
            News
          </p>
          <h1 className="mb-6">We couldn&rsquo;t find that article</h1>
          <p className="text-muted-foreground medical-body mb-8">
            The link may have changed. Browse the full news index instead.
          </p>
          <Button asChild size="lg" className="gradient-primary border-0">
            <Link to="/news">Back to all news <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </section>
        <Footer />
      </main>
    );
  }

  // Find a "Read next" suggestion: the next-most-recent article that isn't this one.
  const sorted = [...articles].sort((a, b) => (a.isoDate < b.isoDate ? 1 : -1));
  const idx = sorted.findIndex((a) => a.slug === slug);
  const next = sorted[idx + 1] ?? sorted.find((a) => a.slug !== slug);

  const ld = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    datePublished: article.isoDate,
    dateModified: article.isoDate,
    image: article.image ? `https://annoviant.com${article.image}` : undefined,
    publisher: {
      "@type": "Organization",
      name: "Annoviant, Inc.",
      logo: {
        "@type": "ImageObject",
        url: "https://annoviant.com/brand/annoviant-logo-color.png",
      },
    },
    author: { "@type": "Organization", name: "Annoviant, Inc." },
    description: article.excerpt.replace(/&[a-z]+;/g, ""),
  };

  return (
    <main id="main">
      <Seo
        title={`${article.title}, Annoviant News`}
        description={article.excerpt.replace(/&[a-z]+;/g, "")}
        jsonLd={ld}
      />
      <Nav />

      {/* Article header */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-20 gradient-hero text-white overflow-hidden">
        {article.image && (
          <img
            src={article.image}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen"
            width={1920}
            height={1080}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-surface-deep/95 via-surface-deep/85 to-surface-deep" />
        <div aria-hidden className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-secondary/25 blur-[140px]" />
        <div className="container mx-auto relative max-w-4xl">
          <Link
            to="/news"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-secondary mb-6 hover:text-white transition-smooth"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All news
          </Link>
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest font-semibold mb-4">
            <span className="px-2.5 py-1 rounded-full bg-secondary/15 border border-secondary/30 text-secondary">
              {article.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-white/70">
              <Calendar className="h-3 w-3" />
              <time dateTime={article.isoDate}>{article.date}</time>
            </span>
          </div>
          <h1 className="text-white max-w-3xl mb-6 animate-fade-up">{article.title}</h1>
          <p
            className="text-lg text-white/80 medical-body max-w-3xl"
            dangerouslySetInnerHTML={{ __html: article.excerpt }}
          />
          {article.source && (
            <p className="mt-6 text-xs text-white/55 uppercase tracking-widest">{article.source}</p>
          )}
        </div>
      </section>

      {/* Article body */}
      <article className="py-16 md:py-24">
        <div className="container mx-auto max-w-3xl">
          <Reveal>
            <div className="space-y-6 text-lg text-foreground/85 leading-relaxed">
              {article.paragraphs.map((block, i) => {
                if ("quote" in block) {
                  return (
                    <figure
                      key={i}
                      className="my-10 border-l-4 border-secondary pl-6 md:pl-8 py-2"
                    >
                      <Quote className="h-6 w-6 text-secondary mb-4" aria-hidden />
                      <blockquote className="font-handwritten text-2xl md:text-4xl text-foreground leading-tight">
                        &ldquo;{block.quote}&rdquo;
                      </blockquote>
                      {block.cite && (
                        <figcaption className="mt-5 text-sm text-muted-foreground uppercase tracking-widest font-semibold">
                          {block.cite}
                        </figcaption>
                      )}
                    </figure>
                  );
                }
                return (
                  <p key={i} className="medical-body">
                    {block.p}
                  </p>
                );
              })}
            </div>
          </Reveal>

          <div className="mt-12 pt-8 border-t border-border text-xs text-muted-foreground">
            Press inquiries:{" "}
            <a
              href="mailto:partnerships@annoviant.com"
              className="text-primary hover:text-secondary transition-smooth"
            >
              partnerships@annoviant.com
            </a>
            .
          </div>
        </div>
      </article>

      {/* Read next suggestion + back-to-index */}
      <section className="py-16 md:py-20 bg-muted/40">
        <div className="container mx-auto max-w-4xl grid md:grid-cols-2 gap-8 items-start">
          {next && (
            <Link
              to={`/news/${next.slug}`}
              className="group block rounded-2xl border border-border bg-card p-7 md:p-8 hover:shadow-elegant transition-smooth"
            >
              <p className="text-[11px] uppercase tracking-widest text-secondary font-semibold mb-3">
                Read next
              </p>
              <h3 className="text-lg md:text-xl mb-3 group-hover:text-primary transition-smooth">
                {next.title}
              </h3>
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                {next.date} &middot; {next.category}
              </p>
            </Link>
          )}
          <div className="md:text-right">
            <p className="text-sm text-muted-foreground mb-4">
              Want the full picture? Browse every press release, advisor announcement, and media
              mention.
            </p>
            <Button asChild className="gradient-primary border-0">
              <Link to="/news">All news &amp; press <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default NewsArticlePage;
