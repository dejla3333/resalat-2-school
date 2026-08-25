import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Container } from "@/components/ui/container";

export function FinalCTA() {
  return (
    <section className="border-t border-border bg-[#f3f2ef]">
      <Container>
        <div className="py-20 text-center sm:py-24 lg:py-32">
          <p className="text-sm font-semibold text-primary">
            مکتب رسالت ۲
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold leading-[1.5] tracking-tight sm:text-4xl lg:text-5xl">
            آینده از همین‌جا آغاز می‌شود.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-muted">
            برای آشنایی بیشتر با برنامه آموزشی و روند ثبت‌نام با ما همراه
            شوید.
          </p>

          <Link
            href="/admission"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-[var(--radius-md)] bg-primary px-6 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
          >
            درخواست ثبت‌نام
            <ArrowLeft size={17} aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}