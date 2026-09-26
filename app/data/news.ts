export type NewsCategory =
  | "Institucional"
  | "Fiesta"
  | "Formación"
  | "Actividades"
  | "Historia"
  | "Comunicados";

export type NewsArticle = {
  slug: string;
  title: string;
  date: string;
  category: NewsCategory;
  summary: string;
  image?: string;
  content: string[];
};

export const newsArticles: NewsArticle[] = [];

export const getNewsArticle = (slug: string) =>
  newsArticles.find((article) => article.slug === slug);
