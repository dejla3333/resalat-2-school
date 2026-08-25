import { Quote } from "lucide-react";

interface PrincipalMessageProps {
  eyebrow: string;
  title: string;
  message: string;
  name: string;
  role: string;
}

export default function PrincipalMessage({
  eyebrow,
  title,
  message,
  name,
  role,
}: PrincipalMessageProps) {
  return (
    <section className="container py-20 lg:py-24">
      <div className="mx-auto max-w-4xl rounded-2xl border border-[var(--border)] bg-white p-8 sm:p-10 lg:p-12">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-[var(--primary)]">
          <Quote size={22} />
        </div>

        <p className="mt-6 text-sm font-semibold text-[var(--accent)]">
          {eyebrow}
        </p>

        <h2 className="mt-2 text-3xl font-bold text-[var(--foreground)]">
          {title}
        </h2>

        <blockquote className="mt-6 text-base leading-9 text-[var(--muted)] sm:text-lg">
          {message}
        </blockquote>

        <div className="mt-8 border-t border-[var(--border)] pt-6">
          <p className="font-bold text-[var(--foreground)]">
            {name}
          </p>

          <p className="mt-1 text-sm text-[var(--muted)]">
            {role}
          </p>
        </div>

      </div>
    </section>
  );
}