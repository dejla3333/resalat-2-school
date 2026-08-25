import type { Metadata } from "next";

import { NewsHero } from "@/components/news/news-hero";
import { FeaturedNews } from "@/components/news/featured-news";
import { NewsList } from "@/components/news/news-list";
import { newsItems } from "@/data/news";

export const metadata: Metadata = {
  title: "اخبار",
  description:
    "آخرین اخبار، فعالیت‌ها و دستاوردهای مکتب رسالت ۲.",
};

export default function NewsPage() {
  const featured = newsItems[0];

  return (
    <>
      <NewsHero />

      <FeaturedNews news={featured} />

      <NewsList news={newsItems.slice(1)} />
    </>
  );
}