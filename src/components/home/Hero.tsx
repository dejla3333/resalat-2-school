import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f3f2ef] pt-20">
      <Container>
        <div className="grid min-h-[680px] items-center gap-12 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-20">
          <div className="max-w-2xl">
            <p className="mb-6 text-sm font-semibold text-primary">
              مکتب رسالت ۲
            </p>

            <h1 className="text-4xl font-bold leading-[1.35] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              جایی برای یادگیری،
              <br />
              رشد و ساختن آینده.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-muted sm:text-lg">
              محیطی برای آموزش، رشد فکری و پرورش استعدادهایی که آینده را
              می‌سازند.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/admission"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[var(--radius-md)] bg-primary px-6 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
              >
                درخواست ثبت‌نام
                <ArrowLeft size={17} aria-hidden="true" />
              </Link>

              <Link
                href="/about"
                className="inline-flex min-h-12 items-center justify-center rounded-[var(--radius-md)] border border-border bg-white px-6 text-sm font-medium text-foreground transition-colors hover:border-border-strong"
              >
                درباره مکتب
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-neutral-200">
              <Image
                src="/hero-school.jpg"
                alt="محیط آموزشی مکتب رسالت ۲"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-5 right-5 max-w-[230px] rounded-[var(--radius-lg)] border border-white/60 bg-white/95 p-5 shadow-lg backdrop-blur-sm">
              <p className="text-2xl font-bold text-primary">
                یادگیری
              </p>

              <p className="mt-1 text-sm leading-7 text-muted">
                فراتر از کتاب و کلاس
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}