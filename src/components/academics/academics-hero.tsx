import { Container } from "@/components/ui/container";

export function AcademicsHero() {
  return (
    <section className="border-b border-border bg-primary pt-20 text-white">
      <Container>
        <div className="max-w-4xl py-24 sm:py-28 lg:py-32">
          <p className="text-sm font-medium text-white/60">
            آموزش
          </p>

          <h1 className="mt-5 text-4xl font-bold leading-[1.45] tracking-tight sm:text-5xl lg:text-6xl">
            یادگیری عمیق،
            <br />
            برای آینده‌ای بهتر.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-9 text-white/70 sm:text-lg">
            برنامه آموزشی باید به دانش‌آموز کمک کند مفاهیم را درک کند،
            پرسش بپرسد و آموخته‌های خود را در موقعیت‌های واقعی به کار ببرد.
          </p>
        </div>
      </Container>
    </section>
  );
}