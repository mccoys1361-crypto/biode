import { Metadata } from "next";

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    image = "/og-image.jpg",
    url = "",
    type = "website",
    publishedTime,
    modifiedTime,
    author = "BIODE",
  } = config;

  const fullUrl = url
    ? `https://www.biode.com${url}`
    : "https://www.biode.com";

  return {
    title: {
      default: title,
      template: "%s | BIODE",
    },
    description,
    keywords,
    authors: [{ name: author }],
    creator: author,
    publisher: author,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL("https://www.biode.com"),
    alternates: {
      canonical: url || "/",
    },
    openGraph: {
      type,
      locale: "ko_KR",
      url: fullUrl,
      title,
      description,
      siteName: "BIODE",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function generateArticleMetadata(article: {
  title: string;
  description: string;
  content: string;
  publishedAt: string;
  updatedAt?: string;
  author?: string;
  image?: string;
  url: string;
}): Metadata {
  return generateMetadata({
    title: article.title,
    description: article.description,
    image: article.image,
    url: article.url,
    type: "article",
    publishedTime: article.publishedAt,
    modifiedTime: article.updatedAt,
    author: article.author,
  });
}

export function generateBIODEMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    image = "/biode-og.jpg",
    url = "",
    type = "website",
  } = config;

  const fullUrl = url
    ? `https://www.biode.com${url}`
    : "https://www.biode.com";

  return {
    title: {
      default: title,
      template: "%s | BIODE",
    },
    description,
    keywords: [...keywords, "친환경 비닐", "농업", "지속가능"],
    authors: [{ name: "BIODE" }],
    creator: "BIODE",
    publisher: "BIODE",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL("https://www.biode.com"),
    alternates: {
      canonical: url || "/",
    },
    openGraph: {
      type,
      locale: "ko_KR",
      url: fullUrl,
      title,
      description,
      siteName: "BIODE",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
