import { Container } from "@/components/ui/container";

export function ContactHero() {
  return (
    <section className="border-b border-border bg-[#f3f2ef]">
      <Container>
        <div className="py-20 sm:py-24 lg:py-28">
          <p className="text-sm font-semibold text-primary">
            تماس با ما
          </p>

          <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.45] tracking-tight sm:text-5xl lg:text-6xl">
            در ارتباط
            <br />
            بمانید.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-9 text-muted sm:text-lg">
            برای پرسش، دریافت اطلاعات بیشتر یا ارتباط با مکتب می‌توانید
            از راه‌های زیر با ما در تماس باشید.
          </p>
        </div>
      </Container>
    </section>
  );
}