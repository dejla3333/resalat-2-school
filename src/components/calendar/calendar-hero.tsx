import { Container } from "@/components/ui/container";

export function CalendarHero() {
  return (
    <section className="border-b border-border bg-[#f3f2ef]">
      <Container>
        <div className="py-20 sm:py-24 lg:py-28">
          <p className="text-sm font-semibold text-primary">
            تقویم مکتب
          </p>

          <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.45] tracking-tight sm:text-5xl lg:text-6xl">
            برنامه‌ها را
            <br />
            از دست ندهید.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-9 text-muted sm:text-lg">
            زمان‌بندی رویدادها، برنامه‌های آموزشی، جلسات و فعالیت‌های مهم
            مکتب.
          </p>
        </div>
      </Container>
    </section>
  );
}