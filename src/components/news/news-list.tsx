"use client";

import { useMemo, useState } from "react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { NewsCard } from "./news-card";
import type { NewsItem } from "@/data/news";
import { newsCategories } from "@/data/news";

type NewsListProps = {
  news: NewsItem[];
};

export function NewsList({ news }: NewsListProps) {
  const [activeCategory, setActiveCategory] = useState("همه");

  const filteredNews = useMemo(() => {
    if (activeCategory === "همه") {
      return news;
    }

    return news.filter(
      (item) => item.category === activeCategory
    );
  }, [activeCategory, news]);

  return (
    <Section>
      <Container>
        <div className="flex gap-2 overflow-x-auto border-b border-border pb-4">
          {newsCategories.map((category) => {
            const active = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={[
                  "shrink-0 rounded-full px-4 py-2 text-sm transition-colors",
                  active
                    ? "bg-primary text-white"
                    : "bg-[#f3f2ef] text-muted hover:bg-neutral-200",
                ].join(" ")}
              >
                {category}
              </button>
            );
          })}
        </div>

        {filteredNews.length > 0 ? (
          <div className="mt-10 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {filteredNews.map((item) => (
              <NewsCard key={item.slug} news={item} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-muted">
              خبری در این دسته‌بندی وجود ندارد.
            </p>
          </div>
        )}
      </Container>
    </Section>
  );
}