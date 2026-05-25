import { Link } from "react-router-dom";
import { PageShell } from "@/components/site/PageShell";
import { Seo } from "@/components/site/Seo";
import { Reveal } from "@/components/site/Reveal";
import { Calendar, ArrowRight } from "lucide-react";
import { useBlogPosts } from "@/hooks/useCmsContent";
import { strapiConfigured } from "@/lib/strapi";

const SITE = "https://annoviant.com";

const Blog = () => {
  const { data: posts = [], isLoading, isError } = useBlogPosts();

  const ld = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Annoviant Blog",
    url: `${SITE}/blog`,
    description:
      "Long-form posts and updates from the Annoviant team on regenerative tissue, regulatory progress, and the people behind TxGuard®.",
  };

  return (
    <PageShell
      eyebrow="Annoviant blog"
      title={
        <>
          Long-form, <span className="text-gradient">from the team</span>
        </>
      }
      intro="Perspectives, scientific updates, and the longer story behind milestones we cover in the news. Posts are written by Annoviant team members, not ghost-written."
    >
      <Seo
        title="Blog | Annoviant"
        description="Long-form posts and updates from the Annoviant team on regenerative tissue, regulatory progress, and the people behind TxGuard®."
        canonical={`${SITE}/blog`}
        jsonLd={ld}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          {!strapiConfigured && (
            <Reveal>
              <div className="rounded-2xl border border-border bg-muted/40 p-8 text-center max-w-2xl mx-auto">
                <h2 className="text-lg font-semibold mb-2">Blog launching soon</h2>
                <p className="text-sm text-muted-foreground medical-body">
                  Long-form posts will appear here as we publish them. In the meantime, see{" "}
                  <Link to="/news" className="text-primary underline-offset-4 hover:underline">
                    news &amp; press
                  </Link>{" "}
                  for milestones and coverage.
                </p>
              </div>
            </Reveal>
          )}

          {strapiConfigured && isLoading && (
            <p className="text-sm text-muted-foreground">Loading posts&hellip;</p>
          )}

          {strapiConfigured && isError && (
            <div className="rounded-2xl border border-destructive/30 bg-destructive/5 p-6 max-w-2xl">
              <p className="text-sm text-muted-foreground">
                We couldn&rsquo;t reach the content service right now. Please try again in a moment.
              </p>
            </div>
          )}

          {strapiConfigured && !isLoading && !isError && posts.length === 0 && (
            <Reveal>
              <div className="rounded-2xl border border-border bg-muted/40 p-8 text-center max-w-2xl mx-auto">
                <h2 className="text-lg font-semibold mb-2">No posts yet</h2>
                <p className="text-sm text-muted-foreground medical-body">
                  We&rsquo;re lining up our first posts. Check back, or follow milestones on{" "}
                  <Link to="/news" className="text-primary underline-offset-4 hover:underline">
                    news &amp; press
                  </Link>
                  .
                </p>
              </div>
            </Reveal>
          )}

          {posts.length > 0 && (
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, i) => (
                <Reveal as="li" key={post.id} delay={i * 60}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group block h-full rounded-2xl border border-border bg-card overflow-hidden hover:shadow-elegant transition-smooth"
                  >
                    {post.heroImage && (
                      <div className="aspect-[16/9] overflow-hidden bg-muted">
                        <img
                          src={post.heroImage}
                          alt=""
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>
                          {new Date(post.publishedDate).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                        <span className="text-secondary">·</span>
                        <span>{post.category}</span>
                      </div>
                      <h2 className="text-lg font-semibold mb-2 group-hover:text-primary transition-smooth">
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p className="text-sm text-muted-foreground medical-body line-clamp-3 mb-4">
                          {post.excerpt}
                        </p>
                      )}
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-smooth">
                        Read post <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </ul>
          )}
        </div>
      </section>
    </PageShell>
  );
};

export default Blog;
