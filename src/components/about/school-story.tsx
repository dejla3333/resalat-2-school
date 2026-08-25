import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

export function SchoolStory() {
  return (
    <Section spacing="large">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold text-primary">
              داستان مکتب
            </p>
          </div>

          <div>
            <h2 className="max-w-3xl text-3xl font-bold leading-[1.6] tracking-tight sm:text-4xl">
              یک محیط آموزشی خوب، فقط یک ساختمان و چند صنف نیست.
            </h2>

            <div className="mt-8 max-w-3xl space-y-6 text-base leading-9 text-muted">
              <p>
                مکتب محیطی است که دانش‌آموز بخش مهمی از سال‌های رشد خود را در
                آن سپری می‌کند. به همین دلیل کیفیت آموزش، ارتباط میان معلم و
                دانش‌آموز و فضای حاکم بر مکتب اهمیت زیادی دارد.
              </p>

              <p>
                رسالت ۲ می‌تواند محیطی باشد که در آن دانش‌آموز تنها برای
                امتحان آماده نمی‌شود، بلکه فرصت پیدا می‌کند سؤال بپرسد،
                تجربه کند، همکاری کند و توانایی‌های خود را بهتر بشناسد.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}