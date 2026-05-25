/**
 * Strapi v5 API client.
 *
 * Reads VITE_STRAPI_URL at build time. The `strapiConfigured` flag and the
 * `safe*` helpers return null/[] when the env var is unset or the request
 * fails, so frontend pages can fall back to bundled data in src/data/*.ts.
 *
 * The `submitContactForm` helper and the legacy `getNewsArticles` throw on
 * failure to keep their existing call-site contracts.
 */

const env = import.meta.env as Record<string, string | undefined>;
const STRAPI_URL = (env.VITE_STRAPI_URL ?? "http://localhost:1337").replace(/\/+$/, "");
const STRAPI_TOKEN = env.VITE_STRAPI_TOKEN;

export const strapiConfigured = Boolean(env.VITE_STRAPI_URL);

type StrapiResponse<T> = {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export type NewsArticle = {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  category: "Media" | "Press Release" | "Milestone" | "Event";
  publishedDate: string;
  externalUrl?: string | null;
  excerpt?: string | null;
  content?: string | null;
};

export type ContactSubmissionInput = {
  name: string;
  email: string;
  organization?: string;
  inquiryType: "investor" | "clinician" | "patient" | "other";
  message?: string;
};

export type StrapiBlogPost = {
  id: number | string;
  documentId?: string;
  title: string;
  slug: string;
  excerpt?: string | null;
  body?: string | null;
  publishedDate: string;
  author?: string | null;
  authorRole?: string | null;
  category: "Science" | "Company" | "Regulatory" | "Perspective" | "Update";
  heroImage?: string | null;
  seoTitle?: string | null;
  seoDescription?: string | null;
};

export type StrapiAnswer = {
  id: number | string;
  documentId?: string;
  question: string;
  slug: string;
  shortAnswer: string;
  metaTitle?: string | null;
  metaDescription?: string | null;
  keywords?: string[] | null;
  updated?: string | null;
  sections?: Array<{ heading?: string; paragraphs: string[]; list?: string[] }> | null;
  faqs?: Array<{ q: string; a: string }> | null;
  citations?: Array<{ label: string; href?: string }> | null;
  related?: string[] | null;
  ctaLabel?: string | null;
  ctaHref?: string | null;
};

async function strapiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${STRAPI_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {}),
      ...init?.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`Strapi request failed: ${response.status} ${response.statusText}`);
  }

  return response.json() as Promise<T>;
}

async function safeFetch<T>(path: string): Promise<T | null> {
  if (!strapiConfigured) return null;
  try {
    return await strapiFetch<T>(path);
  } catch (err) {
    console.warn("[strapi]", err);
    return null;
  }
}

/* ---------- News ---------- */

export async function getNewsArticles(): Promise<NewsArticle[]> {
  const params = new URLSearchParams({
    sort: "publishedDate:desc",
    "pagination[pageSize]": "50",
  });
  const result = await strapiFetch<StrapiResponse<NewsArticle[]>>(
    `/api/news-articles?${params.toString()}`,
  );
  return result.data ?? [];
}

export async function safeGetNewsArticles(): Promise<NewsArticle[]> {
  const params = new URLSearchParams({
    sort: "publishedDate:desc",
    "pagination[pageSize]": "100",
  });
  const res = await safeFetch<StrapiResponse<NewsArticle[]>>(
    `/api/news-articles?${params.toString()}`,
  );
  return res?.data ?? [];
}

export async function getNewsArticleBySlug(slug: string): Promise<NewsArticle | null> {
  const params = new URLSearchParams({ "filters[slug][$eq]": slug });
  const res = await safeFetch<StrapiResponse<NewsArticle[]>>(
    `/api/news-articles?${params.toString()}`,
  );
  return res?.data?.[0] ?? null;
}

/* ---------- Blog posts ---------- */

export async function getBlogPosts(): Promise<StrapiBlogPost[]> {
  const params = new URLSearchParams({
    sort: "publishedDate:desc",
    "pagination[pageSize]": "50",
  });
  const res = await safeFetch<StrapiResponse<StrapiBlogPost[]>>(
    `/api/blog-posts?${params.toString()}`,
  );
  return res?.data ?? [];
}

export async function getBlogPostBySlug(slug: string): Promise<StrapiBlogPost | null> {
  const params = new URLSearchParams({ "filters[slug][$eq]": slug });
  const res = await safeFetch<StrapiResponse<StrapiBlogPost[]>>(
    `/api/blog-posts?${params.toString()}`,
  );
  return res?.data?.[0] ?? null;
}

/* ---------- Answers ---------- */

export async function getStrapiAnswers(): Promise<StrapiAnswer[]> {
  const params = new URLSearchParams({ "pagination[pageSize]": "100" });
  const res = await safeFetch<StrapiResponse<StrapiAnswer[]>>(
    `/api/answers?${params.toString()}`,
  );
  return res?.data ?? [];
}

export async function getStrapiAnswerBySlug(slug: string): Promise<StrapiAnswer | null> {
  const params = new URLSearchParams({ "filters[slug][$eq]": slug });
  const res = await safeFetch<StrapiResponse<StrapiAnswer[]>>(
    `/api/answers?${params.toString()}`,
  );
  return res?.data?.[0] ?? null;
}

/* ---------- Contact form ---------- */

export async function submitContactForm(data: ContactSubmissionInput): Promise<void> {
  await strapiFetch("/api/contact-submissions", {
    method: "POST",
    body: JSON.stringify({ data }),
  });
}

/* ---------- Helpers ---------- */

export function formatNewsDate(date: string): string {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) {
    return date;
  }
  return parsed.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}
