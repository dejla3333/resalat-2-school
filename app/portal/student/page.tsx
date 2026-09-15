export default function StudentDashboard() {
  return (
    <main dir="rtl" className="min-h-screen p-6">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm text-neutral-400">
          سامانه آموزشی مکتب رسالت ۲
        </p>

        <h1 className="mt-2 text-4xl font-bold">
          داشبورد دانش‌آموز
        </h1>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <Card title="میانگین" value="۱۸.۲" />
          <Card title="حضور" value="۹۵٪" />
          <Card title="تکالیف باقی‌مانده" value="۳" />
        </div>
      </div>
    </main>
  );
}

function Card({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-3xl border border-black/5 bg-white p-6">
      <p className="text-sm text-neutral-400">{title}</p>
      <p className="mt-3 text-3xl font-bold">{value}</p>
    </div>
  );
}