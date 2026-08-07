import { SITE, absoluteUrl } from "./site";

type SeoInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
};

export function buildPageSeo({
  title,
  description,
  path,
  keywords = [...SITE.keywords],
  image = "/og-icon.png",
  type = "website",
}: SeoInput) {
  const url = absoluteUrl(path);
  const imageUrl = image.startsWith("http") ? image : absoluteUrl(image);

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: keywords.join(", ") },
      { name: "author", content: SITE.name },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:type", content: type },
      { property: "og:site_name", content: SITE.name },
      { property: "og:locale", content: SITE.locale },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: imageUrl },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: imageUrl },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
