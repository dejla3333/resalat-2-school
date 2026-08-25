import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const classes = [
  "صنف‌های ابتدایی",
  "صنف‌های متوسطه",
  "صنف‌های لیسه",
];

export function Classes() {
  return (
    <Section className="bg-[#f3f2ef]">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold text-primary">
              صنف‌ها
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              مسیر آموزشی
            </h2>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {classes.map((item, index) => (
              <div
                key={item}
                className="flex items-center justify-between gap-5 py-7"
              >
                <div className="flex items-center gap-5">
                  <span className="text-sm text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="font-semibold">
                    {item}
                  </h3>
                </div>

                <ArrowLeft
                  size={18}
                  className="text-muted"
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-left">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            اطلاعات بیشتر
            <ArrowLeft size={17} aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}