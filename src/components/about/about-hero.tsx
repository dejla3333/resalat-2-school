import Image from "next/image";
import { Container } from "@/components/ui/container";

export function AboutHero() {
  return (
    <section className="border-b border-border bg-[#f3f2ef] pt-20">
      <Container>
        <div className="grid min-h-[520px] items-center gap-12 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-20">
          <div>
            <p className="text-sm font-semibold text-primary">
              درباره مکتب
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-[1.45] tracking-tight sm:text-5xl lg:text-6xl">
              آموزش برای امروز،
              <br />
              آماده‌سازی برای فردا.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-9 text-muted sm:text-lg">
              مکتب رسالت ۲ تلاش می‌کند محیطی فراهم کند که دانش‌آموزان در آن
              علاوه بر یادگیری، فرصت رشد، پرسش و کشف استعدادهای خود را داشته
              باشند.
            </p>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] bg-neutral-200">
            <Image
              src="/6079984974879724270_120.jpg"
              alt="محیط آموزشی مکتب رسالت ۲"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}