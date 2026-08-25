import {
  Award,
  BookOpen,
  HeartHandshake,
  Lightbulb,
} from "lucide-react";

interface Value {
  title: string;
  description: string;
}

interface ValuesProps {
  eyebrow: string;
  title: string;
  values: Value[];
}

const icons = [
  BookOpen,
  HeartHandshake,
  Lightbulb,
  Award,
];

export default function Values({
  eyebrow,
  title,
  values,
}: ValuesProps) {
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

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => {
            const Icon = icons[index % icons.length];

            return (
              <article
                key={value.title}
                className="rounded-xl border border-[var(--border)] bg-white p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-100 text-[var(--primary)]">
                  <Icon size={21} />
                </div>

                <h3 className="mt-5 font-bold text-[var(--foreground)]">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {value.description}
                </p>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}