import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { upcomingEvents } from "@/data/home";

export function UpcomingEvents() {
  return (
    <Section className="bg-primary text-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-medium text-white/60">
              تقویم مکتب
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-[1.5] sm:text-4xl">
              رویدادهای پیش‌رو
            </h2>

            <Link
              href="/calendar"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white"
            >
              مشاهده تقویم
              <ArrowLeft size={17} aria-hidden="true" />
            </Link>
          </div>

          <div className="divide-y divide-white/15">
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className="flex items-center gap-5 py-6 first:pt-0 last:pb-0 sm:gap-8"
              >
                <div className="w-16 shrink-0 text-center">
                  <div className="text-3xl font-bold">
                    {event.date}
                  </div>

                  <div className="mt-1 text-xs text-white/60">
                    {event.month}
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <span className="text-xs text-white/50">
                    {event.type}
                  </span>

                  <h3 className="mt-1 text-lg font-semibold">
                    {event.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}