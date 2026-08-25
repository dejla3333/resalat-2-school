"use client";

import { useState } from "react";
import { CalendarDays, ChevronDown } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { calendarEvents } from "@/data/calendar";

export function CalendarView() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <Section spacing="large">
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 flex items-center justify-between gap-5">
            <div>
              <p className="text-sm text-muted">
                برنامه‌های پیش‌رو
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                رویدادهای مکتب
              </h2>
            </div>

            <div className="hidden items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted sm:flex">
              <CalendarDays size={17} />
              <span>۱۴۰۵</span>
            </div>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {calendarEvents.map((event) => {
              const isOpen = selectedId === event.id;

              return (
                <div key={event.id}>
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedId(isOpen ? null : event.id)
                    }
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-5 py-7 text-right"
                  >
                    <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-[#f3f2ef]">
                      <span className="text-xl font-bold">
                        {event.day}
                      </span>

                      <span className="text-xs text-muted">
                        {event.month}
                      </span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <span className="text-xs text-primary">
                        {event.type}
                      </span>

                      <h3 className="mt-1 text-base font-bold sm:text-lg">
                        {event.title}
                      </h3>
                    </div>

                    <ChevronDown
                      size={19}
                      className={[
                        "shrink-0 text-muted transition-transform",
                        isOpen ? "rotate-180" : "",
                      ].join(" ")}
                    />
                  </button>

                  {isOpen && (
                    <div className="pb-7 pr-[84px]">
                      <p className="text-sm leading-8 text-muted">
                        {event.description}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}