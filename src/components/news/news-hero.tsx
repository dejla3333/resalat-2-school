import { Container } from "@/components/ui/container";

export function NewsHero() {
  return (
    <section className="border-b border-border bg-[#f3f2ef]">
      <Container>
        <div className="py-20 sm:py-24 lg:py-28">
          <p className="text-sm font-semibold text-primary">
            اخبار و رویدادها
          </p>

          <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.45] tracking-tight sm:text-5xl lg:text-6xl">
            آنچه در مکتب
            <br />
            می‌گذرد.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-9 text-muted sm:text-lg">
            تازه‌ترین خبرها، فعالیت‌ها، دستاوردها و برنامه‌های مکتب رسالت ۲.
          </p>
        </div>
      </Container>
    </section>
  );
}