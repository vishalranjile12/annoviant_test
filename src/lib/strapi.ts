const STRAPI_URL = import.meta.env.VITE_STRAPI_URL ?? 'http://localhost:1337';

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
  category: 'Media' | 'Press Release' | 'Milestone' | 'Event';
  publishedDate: string;
  externalUrl?: string | null;
  excerpt?: string | null;
  content?: string | null;
};

export type ContactSubmissionInput = {
  name: string;
  email: string;
  organization?: string;
  inquiryType: 'investor' | 'clinician' | 'patient' | 'other';
  message?: string;
};

async function strapiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${STRAPI_URL}${path}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...init?.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`Strapi request failed: ${response.status} ${response.statusText}`);
  }

  return response.json() as Promise<T>;
}

export async function getNewsArticles(): Promise<NewsArticle[]> {
  const params = new URLSearchParams({
    sort: 'publishedDate:desc',
    'pagination[pageSize]': '50',
  });

  const result = await strapiFetch<StrapiResponse<NewsArticle[]>>(
    `/api/news-articles?${params.toString()}`,
  );

  return result.data ?? [];
}

export async function submitContactForm(data: ContactSubmissionInput): Promise<void> {
  await strapiFetch('/api/contact-submissions', {
    method: 'POST',
    body: JSON.stringify({ data }),
  });
}

export function formatNewsDate(date: string): string {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) {
    return date;
  }

  return parsed.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}
