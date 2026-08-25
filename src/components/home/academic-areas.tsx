import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { academicAreas } from "@/data/home";

export function AcademicAreas() {
  return (
    <Section className="bg-[#f3f2ef]">
      <Container>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-semibold text-primary">
              حوزه‌های آموزشی
            </p>

            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              یادگیری برای فهمیدن،
              <br />
              نه فقط حفظ کردن.
            </h2>
          </div>

          <Link
            href="/academics"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            مشاهده برنامه آموزشی
            <ArrowLeft size={17} aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {academicAreas.map((area, index) => (
            <article
              key={area.title}
              className="bg-white p-7 transition-colors duration-300 hover:bg-[#fafaf9]"
            >
              <span className="text-sm text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-10 text-xl font-bold">
                {area.title}
              </h3>

              <p className="mt-4 text-sm leading-8 text-muted">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}