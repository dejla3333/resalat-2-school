import { CalendarDays, Clock } from "lucide-react";

interface EventItem {
  title: string;
  date: string;
  time: string;
  description: string;
}

interface UpcomingEventsProps {
  eyebrow: string;
  title: string;
  events: EventItem[];
}

export default function UpcomingEvents({
  eyebrow,
  title,
  events,
}: UpcomingEventsProps) {
  return (
    <section className="bg-slate-50">
      <div className="container py-20 lg:py-24">

        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-[var(--accent)]">
            {eyebrow}
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            {title}
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {events.map((event) => (
            <article
              key={event.title}
              className="rounded-xl border border-[var(--border)] bg-white p-6"
            >
              <div className="flex items-center gap-2 text-sm font-medium text-[var(--primary)]">
                <CalendarDays size={17} />
                {event.date}
              </div>

              <div className="mt-2 flex items-center gap-2 text-xs text-[var(--muted)]">
                <Clock size={15} />
                {event.time}
              </div>

              <h3 className="mt-5 font-bold text-[var(--foreground)]">
                {event.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                {event.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}