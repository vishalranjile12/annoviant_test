import { useQuery } from '@tanstack/react-query';
import { getNewsArticles } from '@/lib/strapi';

export function useNewsArticles() {
  return useQuery({
    queryKey: ['news-articles'],
    queryFn: getNewsArticles,
    staleTime: 5 * 60 * 1000,
  });
}
