import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { site } from "@/lib/site";

const staticRoutes = ["/", "/ferramenta", "/guia", "/sobre", "/contato", "/privacidade", "/termos", "/faq"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = staticRoutes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  })) satisfies MetadataRoute.Sitemap;

  const articleEntries = articles.map((article) => ({
    url: `${site.url}/guia/${article.slug}`,
    lastModified: new Date(article.updatedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  })) satisfies MetadataRoute.Sitemap;

  return [...staticEntries, ...articleEntries];
}

