import { Eye, Target } from "lucide-react";

interface MissionVisionProps {
  mission: {
    title: string;
    description: string;
  };
  vision: {
    title: string;
    description: string;
  };
}

export default function MissionVision({
  mission,
  vision,
}: MissionVisionProps) {
  return (
    <section className="container py-20 lg:py-24">
      <div className="grid gap-6 md:grid-cols-2">

        <article className="rounded-2xl border border-[var(--border)] bg-white p-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-[var(--primary)]">
            <Target size={23} />
          </div>

          <h2 className="mt-6 text-2xl font-bold text-[var(--foreground)]">
            {mission.title}
          </h2>

          <p className="mt-4 text-sm leading-8 text-[var(--muted)]">
            {mission.description}
          </p>
        </article>

        <article className="rounded-2xl border border-[var(--border)] bg-white p-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-[var(--primary)]">
            <Eye size={23} />
          </div>

          <h2 className="mt-6 text-2xl font-bold text-[var(--foreground)]">
            {vision.title}
          </h2>

          <p className="mt-4 text-sm leading-8 text-[var(--muted)]">
            {vision.description}
          </p>
        </article>

      </div>
    </section>
  );
}