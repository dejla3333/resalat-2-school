import { CalendarDays } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { events } from "@/data/news";

export function EventsList() {
  return (
    <Section className="bg-[#f3f2ef]">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary">
              <CalendarDays size={20} aria-hidden="true" />
            </div>

            <p className="mt-6 text-sm font-semibold text-primary">
              رویدادها
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              برنامه‌های پیش‌رو
            </h2>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {events.map((event) => (
              <article
                key={`${event.date}-${event.title}`}
                className="grid gap-5 py-7 sm:grid-cols-[100px_1fr_auto] sm:items-center"
              >
                <div>
                  <span className="text-3xl font-bold">
                    {event.date}
                  </span>

                  <span className="mr-2 text-sm text-muted">
                    {event.month}
                  </span>
                </div>

                <div>
                  <span className="text-xs text-muted">
                    {event.type}
                  </span>

                  <h3 className="mt-2 text-lg font-bold">
                    {event.title}
                  </h3>
                </div>

                <span className="hidden text-sm text-muted sm:block">
                  مکتب رسالت ۲
                </span>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}