import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { schoolValues } from "@/data/about";

export function MissionValues() {
  return (
    <Section className="bg-[#f3f2ef]">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold text-primary">
              مأموریت و ارزش‌ها
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-[1.5] tracking-tight sm:text-4xl">
              ارزش‌هایی که
              <br />
              مسیر ما را مشخص می‌کنند.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-8 text-muted">
              این بخش باید در نسخه نهایی با مأموریت و ارزش‌های رسمی مکتب
              تکمیل شود.
            </p>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {schoolValues.map((value) => (
              <article
                key={value.number}
                className="grid gap-4 py-7 sm:grid-cols-[70px_1fr]"
              >
                <span className="text-sm text-muted">
                  {value.number}
                </span>

                <div>
                  <h3 className="text-xl font-bold">
                    {value.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-8 text-muted">
                    {value.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}