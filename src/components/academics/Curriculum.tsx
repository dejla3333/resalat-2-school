import { CheckCircle2 } from "lucide-react";

interface CurriculumProps {
  eyebrow: string;
  title: string;
  description: string;
  items: string[];
}

export default function Curriculum({
  eyebrow,
  title,
  description,
  items,
}: CurriculumProps) {
  return (
    <section className="container py-20 lg:py-24">

      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

        <div>
          <p className="text-sm font-semibold text-[var(--accent)]">
            {eyebrow}
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
            {title}
          </h2>

          <p className="mt-5 text-base leading-8 text-[var(--muted)]">
            {description}
          </p>
        </div>

        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item}
              className="flex gap-3 rounded-xl border border-[var(--border)] bg-white p-5"
            >
              <CheckCircle2
                size={21}
                className="mt-0.5 shrink-0 text-[var(--accent)]"
              />

              <p className="text-sm font-medium leading-7 text-[var(--foreground)]">
                {item}
              </p>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}