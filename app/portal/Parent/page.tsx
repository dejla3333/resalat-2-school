import {
  ArrowLeft,
  BarChart3,
  CalendarDays,
  ClipboardCheck,
  UserRound,
} from "lucide-react";

export default function ParentDashboard() {
  return (
    <div className="mx-auto max-w-7xl">
      {/* Header */}
      <div className="mb-8">
        <p className="text-sm text-muted">
          خوش آمدید 👋
        </p>

        <h1 className="mt-2 text-3xl font-bold text-secondary-dark">
          داشبورد والدین
        </h1>

        <p className="mt-2 text-sm leading-7 text-muted">
          وضعیت آموزشی فرزند خود را از اینجا دنبال کنید.
        </p>
      </div>

      {/* Student */}
      <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-border bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary-dark">
            <UserRound size={22} />
          </div>

          <div>
            <p className="font-bold text-secondary-dark">
              احمد محمدی
            </p>

            <p className="mt-1 text-xs text-muted">
              صنف نهم • شماره دانش‌آموزی: 1024
            </p>
          </div>
        </div>

        <button className="flex items-center gap-2 text-sm font-medium text-primary-dark">
          مشاهده پروفایل
          <ArrowLeft size={16} />
        </button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="میانگین نمرات"
          value="۱۸.۲"
          icon={<BarChart3 size={20} />}
        />

        <StatCard
          title="حضور و غیاب"
          value="۹۵٪"
          icon={<ClipboardCheck size={20} />}
        />

        <StatCard
          title="روزهای غیبت"
          value="۳"
          icon={<CalendarDays size={20} />}
        />

        <StatCard
          title="وضعیت آموزشی"
          value="خوب"
          icon={<UserRound size={20} />}
        />
      </div>

      {/* Grades */}
      <section className="mt-8 rounded-2xl border border-border bg-white">
        <div className="flex items-center justify-between border-b border-border p-6">
          <div>
            <h2 className="font-bold text-secondary-dark">
              آخرین نمرات
            </h2>

            <p className="mt-1 text-xs text-muted">
              آخرین ارزیابی‌های فرزند شما
            </p>
          </div>

          <button className="flex items-center gap-2 text-sm font-medium text-primary-dark">
            همه نمرات
            <ArrowLeft size={16} />
          </button>
        </div>

        <div className="divide-y divide-border">
          <Grade subject="ریاضی" score="۱۹" />
          <Grade subject="علوم" score="۱۸" />
          <Grade subject="کمپیوتر" score="۲۰" />
          <Grade subject="ادبیات" score="۱۷" />
        </div>
      </section>
    </div>
  );
}

function StatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary-dark">
          {icon}
        </div>

        <span className="text-2xl font-bold text-secondary-dark">
          {value}
        </span>
      </div>

      <p className="mt-4 text-sm text-muted">
        {title}
      </p>
    </div>
  );
}

function Grade({
  subject,
  score,
}: {
  subject: string;
  score: string;
}) {
  return (
    <div className="flex items-center justify-between p-5">
      <span className="text-sm font-medium text-secondary-dark">
        {subject}
      </span>

      <span className="text-lg font-bold text-primary-dark">
        {score}
      </span>
    </div>
  );
}