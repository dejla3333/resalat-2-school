import {
  ArrowLeft,
  BarChart3,
  BookOpen,
  ClipboardCheck,
  Users,
} from "lucide-react";

export default function TeacherDashboard() {
  return (
    <div className="mx-auto max-w-7xl">
      {/* Header */}
      <div className="mb-8">
        <p className="text-sm text-muted">
          خوش آمدید 👋
        </p>

        <h1 className="mt-2 text-3xl font-bold text-secondary-dark">
          داشبورد معلم
        </h1>

        <p className="mt-2 text-sm leading-7 text-muted">
          کلاس‌ها، دانش‌آموزان و فعالیت‌های آموزشی خود را مدیریت کنید.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="دانش‌آموزان"
          value="۱۲۴"
          icon={<Users size={20} />}
        />

        <StatCard
          title="کلاس‌ها"
          value="۵"
          icon={<BookOpen size={20} />}
        />

        <StatCard
          title="نمرات ثبت‌شده"
          value="۳۴۲"
          icon={<BarChart3 size={20} />}
        />

        <StatCard
          title="حضور امروز"
          value="۹۳٪"
          icon={<ClipboardCheck size={20} />}
        />
      </div>

      {/* Classes */}
      <section className="mt-8 rounded-2xl border border-border bg-white">
        <div className="flex items-center justify-between border-b border-border p-6">
          <div>
            <h2 className="font-bold text-secondary-dark">
              کلاس‌های من
            </h2>

            <p className="mt-1 text-xs text-muted">
              کلاس‌هایی که شما تدریس می‌کنید
            </p>
          </div>

          <button className="flex items-center gap-2 text-sm font-medium text-primary-dark">
            مشاهده همه
            <ArrowLeft size={16} />
          </button>
        </div>

        <div className="grid gap-4 p-5 sm:grid-cols-2">
          <ClassCard
            title="ریاضی"
            classNameName="صنف نهم"
            students="۳۲ دانش‌آموز"
          />

          <ClassCard
            title="ریاضی"
            classNameName="صنف هشتم"
            students="۲۹ دانش‌آموز"
          />

          <ClassCard
            title="کمپیوتر"
            classNameName="صنف دهم"
            students="۲۶ دانش‌آموز"
          />

          <ClassCard
            title="ریاضی"
            classNameName="صنف هفتم"
            students="۳۷ دانش‌آموز"
          />
        </div>
      </section>

      {/* Quick Actions */}
      <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <ActionCard
          title="ثبت نمره"
          description="نمرات دانش‌آموزان را ثبت کنید."
        />

        <ActionCard
          title="حضور و غیاب"
          description="حضور امروز دانش‌آموزان را ثبت کنید."
        />

        <ActionCard
          title="تکلیف جدید"
          description="برای کلاس خود تکلیف ایجاد کنید."
        />
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

function ClassCard({
  title,
  classNameName,
  students,
}: {
  title: string;
  classNameName: string;
  students: string;
}) {
  return (
    <div className="rounded-xl border border-border p-5 transition hover:border-primary/40 hover:bg-background-soft">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-bold text-secondary-dark">
            {title}
          </h3>

          <p className="mt-1 text-sm text-muted">
            {classNameName}
          </p>
        </div>

        <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary-dark">
          <BookOpen size={19} />
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <span className="text-xs text-muted">
          {students}
        </span>

        <button className="text-sm font-medium text-primary-dark">
          مدیریت
        </button>
      </div>
    </div>
  );
}

function ActionCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <button className="rounded-2xl border border-border bg-white p-5 text-right transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md">
      <h3 className="font-bold text-secondary-dark">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-muted">
        {description}
      </p>
    </button>
  );
}