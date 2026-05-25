import { Link, useParams } from "react-router-dom";
import { PageShell } from "@/components/site/PageShell";
import { Seo } from "@/components/site/Seo";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import { useBlogPost } from "@/hooks/useCmsContent";
import { strapiConfigured } from "@/lib/strapi";
import NotFound from "./NotFound";

const SITE = "https://annoviant.com";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading, isError } = useBlogPost(slug);

  if (!strapiConfigured) return <NotFound />;
  if (isLoading) {
    return (
      <PageShell eyebrow="Blog" title={<>Loading&hellip;</>}>
        <div className="container mx-auto py-20" />
      </PageShell>
    );
  }
  if (isError || !post) return <NotFound />;

  const formattedDate = new Date(post.publishedDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const ld = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.publishedDate,
    author: post.author ? { "@type": "Person", name: post.author } : undefined,
    publisher: { "@type": "Organization", name: "Annoviant" },
    description: post.seoDescription ?? post.excerpt,
    url: `${SITE}/blog/${post.slug}`,
  };

  return (
    <PageShell
      eyebrow={`${post.category} · ${formattedDate}`}
      title={post.title}
      intro={post.excerpt}
      heroImage={post.heroImage ?? "/hero/heart-bg.jpg"}
    >
      <Seo
        title={post.seoTitle ?? `${post.title} | Annoviant Blog`}
        description={post.seoDescription ?? post.excerpt ?? ""}
        canonical={`${SITE}/blog/${post.slug}`}
        jsonLd={ld}
      />

      <article className="py-16 md:py-20">
        <div className="container mx-auto max-w-3xl">
          <Reveal>
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-8">
              <Calendar className="h-4 w-4" />
              <span>{formattedDate}</span>
              {post.author && (
                <>
                  <span className="text-secondary">·</span>
                  <span>
                    {post.author}
                    {post.authorRole && <span className="text-muted-foreground/70">, {post.authorRole}</span>}
                  </span>
                </>
              )}
            </div>
          </Reveal>

          {post.body && (
            <Reveal>
              <div
                className="prose prose-neutral max-w-none medical-body"
                dangerouslySetInnerHTML={{ __html: post.body }}
              />
            </Reveal>
          )}

          <div className="mt-16 pt-8 border-t border-border">
            <Button asChild variant="outline">
              <Link to="/blog">
                <ArrowLeft className="mr-1 h-4 w-4" /> All posts
              </Link>
            </Button>
          </div>
        </div>
      </article>
    </PageShell>
  );
};

export default BlogPost;
