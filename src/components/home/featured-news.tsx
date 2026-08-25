import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { newsItems } from "@/data/home";

export function FeaturedNews() {
  const [featured, ...rest] = newsItems;

  return (
    <Section spacing="large">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold text-primary">
              اخبار مکتب
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              تازه‌ترین خبرها
            </h2>
          </div>

          <Link
            href="/news"
            className="hidden items-center gap-2 text-sm font-semibold text-primary sm:inline-flex"
          >
            مشاهده همه
            <ArrowLeft size={17} aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.35fr_1fr]">
          <article>
            <Link href={featured.href} className="group block">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-lg)] bg-neutral-200">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              <div className="mt-6">
                <div className="flex items-center gap-3 text-xs text-muted">
                  <span>{featured.category}</span>
                  <span>•</span>
                  <time>{featured.date}</time>
                </div>

                <h3 className="mt-3 text-2xl font-bold leading-[1.5]">
                  {featured.title}
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-8 text-muted">
                  {featured.description}
                </p>
              </div>
            </Link>
          </article>

          <div className="divide-y divide-border">
            {rest.map((news) => (
              <article key={news.href} className="py-6 first:pt-0">
                <Link href={news.href} className="group block">
                  <div className="flex gap-5">
                    <div className="relative h-24 w-28 shrink-0 overflow-hidden rounded-[var(--radius-md)] bg-neutral-200">
                      <Image
                        src={news.image}
                        alt={news.title}
                        fill
                        sizes="112px"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    </div>

                    <div>
                      <div className="text-xs text-muted">
                        {news.date}
                      </div>

                      <h3 className="mt-2 text-base font-bold leading-7">
                        {news.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}