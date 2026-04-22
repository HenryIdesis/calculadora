import type { Metadata } from "next";
import { site } from "@/lib/site";

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
};

export function buildMetadata({ title, description, path }: BuildMetadataInput): Metadata {
  const url = new URL(site.url);
  const canonical = path ? new URL(path, url).toString() : url.toString();
  const imageUrl = new URL("/opengraph-image", url).toString();

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: site.locale,
      url: canonical,
      siteName: site.name,
      title,
      description,
      images: [{ url: imageUrl, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [new URL("/twitter-image", url).toString()],
    },
  };
}

