import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import type { NewsItem } from "@/data/news";

type FeaturedNewsProps = {
  news: NewsItem;
};

export function FeaturedNews({ news }: FeaturedNewsProps) {
  return (
    <Section spacing="large">
      <Container>
        <Link
          href={`/news/${news.slug}`}
          className="group grid overflow-hidden rounded-[20px] bg-primary text-white lg:grid-cols-2"
        >
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[440px]">
            <Image
              src={news.image}
              alt={news.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>

          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <span className="text-sm text-white/60">
              خبر منتخب
            </span>

            <div className="mt-5 flex items-center gap-3 text-xs text-white/50">
              <span>{news.category}</span>
              <span>•</span>
              <time>{news.date}</time>
            </div>

            <h2 className="mt-5 text-3xl font-bold leading-[1.5] sm:text-4xl">
              {news.title}
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-8 text-white/70">
              {news.description}
            </p>

            <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">
              مطالعه خبر
              <ArrowLeft size={17} aria-hidden="true" />
            </span>
          </div>
        </Link>
      </Container>
    </Section>
  );
}