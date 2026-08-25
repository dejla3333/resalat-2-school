import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function DirectorMessage() {
  return (
    <Section spacing="large">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold text-primary">
            پیام مدیر
          </p>

          <blockquote className="mt-6 text-2xl font-semibold leading-[1.8] tracking-tight sm:text-3xl">
            «هدف آموزش، تنها دانستن بیشتر نیست؛
            بلکه بهتر فکر کردن و بهتر ساختن است.»
          </blockquote>

          <div className="mt-8">
            <p className="font-semibold">
          +
            </p>

            <p className="mt-1 text-sm text-muted">
              مدیر مکتب رسالت ۲
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}