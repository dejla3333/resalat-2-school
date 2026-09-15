import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface AdmissionCTAProps {
  title: string;
  description: string;
  button: string;
  locale: string;
}

export default function AdmissionCTA({
  title,
  description,
  button,
  locale,
}: AdmissionCTAProps) {
  const isEnglish = locale === "en";

  return (
    <section className="container pb-20 lg:pb-24">
      <div className="overflow-hidden rounded-2xl bg-[var(--primary)] px-6 py-14 text-center text-white sm:px-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
          {description}
        </p>

        <Link
          href="/admission"
          className="mt-8 inline-flex h-12 items-center gap-2 rounded-[var(--radius-md)] bg-white px-6 text-sm font-semibold text-[var(--primary)] transition-transform hover:-translate-y-0.5"
        >
          {button}

          {isEnglish ? (
            <ArrowRight size={18} />
          ) : (
            <ArrowLeft size={18} />
          )}
        </Link>
      </div>
    </section>
  );
}