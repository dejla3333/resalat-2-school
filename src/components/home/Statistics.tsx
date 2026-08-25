interface Statistic {
  value: string;
  label: string;
}

interface StatisticsProps {
  title: string;
  items: Statistic[];
}

export default function Statistics({
  title,
  items,
}: StatisticsProps) {
  return (
    <section className="border-b border-[var(--border)] bg-slate-50">
      <div className="container py-14">

        <div className="mb-8">
          <p className="text-sm font-semibold text-[var(--accent)]">
            {title}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--border)] md:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="bg-white p-6 text-center"
            >
              <div className="text-3xl font-bold tracking-tight text-[var(--primary)]">
                {item.value}
              </div>

              <div className="mt-2 text-sm text-[var(--muted)]">
                {item.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}