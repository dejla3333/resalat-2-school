import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { subjects } from "@/data/academics";

export function Subjects() {
  return (
    <Section spacing="large">
      <Container>
        <div className="mb-12 max-w-2xl">
          <p className="text-sm font-semibold text-primary">
            مضامین
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            حوزه‌های اصلی یادگیری
          </h2>
        </div>

        <div className="grid gap-x-10 gap-y-0 md:grid-cols-2">
          {subjects.map((subject, index) => (
            <article
              key={subject.title}
              className="border-t border-border py-8"
            >
              <span className="text-sm text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-5 text-xl font-bold">
                {subject.title}
              </h3>

              <p className="mt-3 max-w-md text-sm leading-8 text-muted">
                {subject.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}