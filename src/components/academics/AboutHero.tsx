import { Building2 } from "lucide-react";

interface AboutHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function AboutHero({
  eyebrow,
  title,
  description,
}: AboutHeroProps) {
  return (
    <section className="border-b border-[var(--border)] bg-slate-50">
      <div className="container py-20 lg:py-28">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-4 py-2 text-sm font-medium text-[var(--primary)]">
            <Building2 size={16} />
            {eyebrow}
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}