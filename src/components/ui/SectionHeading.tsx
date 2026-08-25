interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div
      className={[
        "max-w-2xl",
        centered ? "mx-auto text-center" : "",
      ].join(" ")}
    >
      {eyebrow && (
        <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
          {eyebrow}
        </span>
      )}

      <h2 className="text-heading-2 text-[var(--foreground)]">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-body text-[var(--muted)]">
          {description}
        </p>
      )}
    </div>
  );
}