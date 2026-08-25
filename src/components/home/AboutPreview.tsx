import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function AboutPreview() {
  return (
    <Section spacing="large">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-[20px] bg-neutral-200">
              <Image
                src="/6320805449023821171_121.jpg"
                alt="محیط آموزشی مکتب"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-primary">
              درباره مکتب
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-[1.5] tracking-tight sm:text-4xl">
              آموزش فقط انتقال دانش نیست؛
              <br />
              ساختن انسان است.
            </h2>

            <p className="mt-6 text-base leading-9 text-muted">
              مکتب رسالت ۲ تلاش می‌کند محیطی فراهم کند که دانش‌آموزان در کنار
              یادگیری دروس، فرصت رشد فکری، خلاقیت، مسئولیت‌پذیری و کشف
              استعدادهای خود را داشته باشند.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
            >
              بیشتر درباره مکتب
              <ArrowLeft size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}