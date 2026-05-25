import { useQuery } from "@tanstack/react-query";
import {
  getBlogPosts,
  getBlogPostBySlug,
  safeGetNewsArticles,
  getNewsArticleBySlug,
  strapiConfigured,
  type StrapiBlogPost,
  type NewsArticle,
} from "@/lib/strapi";

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
  useQuery<NewsArticle[]>({
    queryKey: ["news-articles"],
    queryFn: safeGetNewsArticles,
    enabled: strapiConfigured,
    staleTime: FIVE_MIN,
  });

export const useStrapiNewsArticle = (slug: string | undefined) =>
  useQuery<NewsArticle | null>({
    queryKey: ["news-article", slug],
    queryFn: () => (slug ? getNewsArticleBySlug(slug) : Promise.resolve(null)),
    enabled: Boolean(slug) && strapiConfigured,
    staleTime: FIVE_MIN,
  });
