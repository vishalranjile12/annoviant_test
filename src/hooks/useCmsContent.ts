import { useQuery } from "@tanstack/react-query";
import {
  getBlogPosts,
  getBlogPostBySlug,
  safeGetNewsArticles,
  getNewsArticleBySlug,
  strapiConfigured,
  type StrapiBlogPost,
  type NewsArticle as StrapiNewsArticle,
} from "@/lib/strapi";
import {
  articles as localArticles,
  type NewsArticle as LocalNewsArticle,
  type NewsCategory,
} from "@/data/news";

// Strapi v5 returns the type alias I previously named NewsArticle. Re-export
// here so existing imports compile.
export type NewsArticle = StrapiNewsArticle;

const FIVE_MIN = 5 * 60 * 1000;

export const useBlogPosts = () =>
  useQuery<StrapiBlogPost[]>({
    queryKey: ["blog-posts"],
    queryFn: getBlogPosts,
    enabled: strapiConfigured,
    staleTime: FIVE_MIN,
  });

export const useBlogPost = (slug: string | undefined) =>
  useQuery<StrapiBlogPost | null>({
    queryKey: ["blog-post", slug],
    queryFn: () => (slug ? getBlogPostBySlug(slug) : Promise.resolve(null)),
    enabled: Boolean(slug) && strapiConfigured,
    staleTime: FIVE_MIN,
  });

export const useStrapiNews = () =>
  useQuery<StrapiNewsArticle[]>({
    queryKey: ["news-articles"],
    queryFn: safeGetNewsArticles,
    enabled: strapiConfigured,
    staleTime: FIVE_MIN,
  });

export const useStrapiNewsArticle = (slug: string | undefined) =>
  useQuery<StrapiNewsArticle | null>({
    queryKey: ["news-article", slug],
    queryFn: () => (slug ? getNewsArticleBySlug(slug) : Promise.resolve(null)),
    enabled: Boolean(slug) && strapiConfigured,
    staleTime: FIVE_MIN,
  });

/**
 * Map a Strapi news-article row into the local NewsArticle shape, so the
 * rest of the app doesn't need to know where data came from.
 */
function strapiToLocalNews(s: StrapiNewsArticle): LocalNewsArticle {
  const fallbackDate = (() => {
    try {
      return new Date(s.publishedDate).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return s.publishedDate;
    }
  })();

  return {
    slug: s.slug,
    date: s.displayDate ?? fallbackDate,
    isoDate: s.publishedDate,
    category: (s.category as NewsCategory) ?? "Media",
    title: s.title,
    excerpt: s.excerpt ?? "",
    source: s.source ?? undefined,
    image: s.image ?? undefined,
    imagePosition: s.imagePosition ?? undefined,
    paragraphs: s.paragraphs ?? [],
  };
}

/**
 * Returns the unified articles list. Reads from Strapi when configured and
 * non-empty; falls back to the bundled local data otherwise so the page
 * always renders something even on a cold CMS or network failure.
 *
 * Local fallback is a feature, not a bug: it keeps the public site online
 * if the CMS is briefly unreachable or the Strapi seed has not run yet.
 */
export const useUnifiedNews = () => {
  const { data: strapiArticles, isSuccess, isLoading } = useStrapiNews();

  const useStrapi = isSuccess && (strapiArticles?.length ?? 0) > 0;
  const articles: LocalNewsArticle[] = useStrapi
    ? strapiArticles!
        .map(strapiToLocalNews)
        .sort((a, b) => (a.isoDate < b.isoDate ? 1 : -1))
    : localArticles;

  const articleBySlug = (slug: string) => articles.find((a) => a.slug === slug);

  return {
    articles,
    articleBySlug,
    isLoading,
    source: useStrapi ? ("strapi" as const) : ("local" as const),
  };
};
