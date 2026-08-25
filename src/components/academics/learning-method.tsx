import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { learningPrinciples } from "@/data/academics";

export function LearningMethod() {
  return (
    <Section spacing="large">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold text-primary">
              روش آموزشی
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-[1.5] tracking-tight sm:text-4xl">
              چگونه یاد می‌گیریم؟
            </h2>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {learningPrinciples.map((item) => (
              <article
                key={item.number}
                className="grid gap-4 py-8 sm:grid-cols-[70px_1fr]"
              >
                <span className="text-sm text-muted">
                  {item.number}
                </span>

                <div>
                  <h3 className="text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-8 text-muted">
                    {item.description}
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