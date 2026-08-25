import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

import { Container } from "@/components/ui/container";
import { newsItems } from "@/data/news";

type NewsDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return newsItems.map((news) => ({
    slug: news.slug,
  }));
}

export async function generateMetadata({
  params,
}: NewsDetailPageProps): Promise<Metadata> {
  const { slug } = await params;

  const news = newsItems.find((item) => item.slug === slug);

  if (!news) {
    return {
      title: "خبر پیدا نشد",
    };
  }

  return {
    title: news.title,
    description: news.description,
  };
}

export default async function NewsDetailPage({
  params,
}: NewsDetailPageProps) {
  const { slug } = await params;

  const news = newsItems.find((item) => item.slug === slug);

  if (!news) {
    notFound();
  }

  return (
    <main>
      <section className="border-b border-border bg-[#f3f2ef]">
        <Container>
          <div className="mx-auto max-w-4xl py-16 sm:py-20 lg:py-24">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
            >
              <ArrowRight size={17} aria-hidden="true" />
              بازگشت به اخبار
            </Link>

            <div className="mt-10 flex items-center gap-3 text-sm text-muted">
              <span>{news.category}</span>
              <span>•</span>
              <time>{news.date}</time>
            </div>

            <h1 className="mt-5 text-4xl font-bold leading-[1.5] tracking-tight sm:text-5xl">
              {news.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-9 text-muted sm:text-lg">
              {news.description}
            </p>
          </div>
        </Container>
      </section>

      <Container>
        <article className="mx-auto max-w-4xl py-12 sm:py-16">
          <div className="relative aspect-[16/9] overflow-hidden rounded-[20px] bg-neutral-200">
            <Image
              src={news.image}
              alt={news.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-7 text-base leading-9 text-foreground">
            {news.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      </Container>
    </main>
  );
}