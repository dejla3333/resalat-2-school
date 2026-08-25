import { ArrowUpLeft, CalendarDays } from "lucide-react";
import { Link } from "@/i18n/navigation";

interface NewsItem {
  title: string;
  description: string;
  date: string;
  category: string;
}

interface LatestNewsProps {
  eyebrow: string;
  title: string;
  items: NewsItem[];
  button: string;
}

export default function LatestNews({
  eyebrow,
  title,
  items,
  button,
}: LatestNewsProps) {
  return (
    <section className="container py-20 lg:py-24">

      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-semibold text-[var(--accent)]">
            {eyebrow}
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            {title}
          </h2>
        </div>

        <Link
          href="/news"
          className="text-sm font-semibold text-[var(--primary)] hover:underline"
        >
          {button}
        </Link>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.title}
            className="group overflow-hidden rounded-xl border border-[var(--border)] bg-white"
          >
            <div className="aspect-[16/9] bg-slate-100" />

            <div className="p-6">
              <div className="flex items-center gap-3 text-xs text-[var(--muted)]">
                <span className="rounded-full bg-slate-100 px-3 py-1 font-medium">
                  {item.category}
                </span>

                <span className="flex items-center gap-1">
                  <CalendarDays size={14} />
                  {item.date}
                </span>
              </div>

              <h3 className="mt-4 font-bold leading-7 text-[var(--foreground)]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                {item.description}
              </p>

              <button
                type="button"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)]"
              >
                {button}

                <ArrowUpLeft
                  size={16}
                  className="transition-transform group-hover:-translate-y-0.5"
                />
              </button>
            </div>
          </article>
        ))}
      </div>

    </section>
  );
}