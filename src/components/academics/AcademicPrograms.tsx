import {
  Atom,
  BookOpen,
  Calculator,
  Languages,
} from "lucide-react";

interface Program {
  title: string;
  description: string;
  type: "science" | "languages" | "math" | "general";
}

interface AcademicProgramsProps {
  eyebrow: string;
  title: string;
  programs: Program[];
}

const icons = {
  science: Atom,
  languages: Languages,
  math: Calculator,
  general: BookOpen,
};

export default function AcademicPrograms({
  eyebrow,
  title,
  programs,
}: AcademicProgramsProps) {
  return (
    <section className="container py-20 lg:py-24">

      <div>
        <p className="text-sm font-semibold text-[var(--accent)]">
          {eyebrow}
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
          {title}
        </h2>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {programs.map((program) => {
          const Icon = icons[program.type];

          return (
            <article
              key={program.title}
              className="rounded-xl border border-[var(--border)] bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-[var(--primary)]">
                <Icon size={22} />
              </div>

              <h3 className="mt-5 font-bold text-[var(--foreground)]">
                {program.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                {program.description}
              </p>
            </article>
          );
        })}
      </div>

    </section>
  );
}