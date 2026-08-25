
import {
  Brain,
  Heart,
  Lightbulb,
} from "lucide-react";

interface StudentDevelopmentProps {
  eyebrow: string;
  title: string;
  items: {
    title: string;
    description: string;
    type: "academic" | "creative" | "personal";
  }[];
}

const icons = {
  academic: Brain,
  creative: Lightbulb,
  personal: Heart,
};

export default function StudentDevelopment({
  eyebrow,
  title,
  items,
}: StudentDevelopmentProps) {
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

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((item) => {
            const Icon = icons[item.type];

            return (
              <article
                key={item.title}
                className="rounded-xl border border-[var(--border)] bg-white p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-100 text-[var(--primary)]">
                  <Icon size={21} />
                </div>

                <h3 className="mt-5 font-bold text-[var(--foreground)]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}