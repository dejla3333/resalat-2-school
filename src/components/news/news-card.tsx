import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import type { NewsItem } from "@/data/news";

type NewsCardProps = {
  news: NewsItem;
};

export function NewsCard({ news }: NewsCardProps) {
  return (
    <article>
      <Link href={`/news/${news.slug}`} className="group block">
        <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-lg)] bg-neutral-200">
          <Image
            src={news.image}
            alt={news.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

        <div className="mt-5">
          <div className="flex items-center gap-3 text-xs text-muted">
            <span>{news.category}</span>
            <span>•</span>
            <time>{news.date}</time>
          </div>

          <h2 className="mt-3 text-xl font-bold leading-8 transition-colors group-hover:text-primary">
            {news.title}
          </h2>

          <p className="mt-2 text-sm leading-8 text-muted">
            {news.description}
          </p>

          <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
            ادامه مطلب
            <ArrowLeft size={16} aria-hidden="true" />
          </span>
        </div>
      </Link>
    </article>
  );
}