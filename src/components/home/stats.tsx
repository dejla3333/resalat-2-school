import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { schoolStats } from "@/data/home";

export function Stats() {
  return (
    <Section className="border-b border-border bg-white">
      <Container>
        <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4 lg:divide-x lg:divide-border lg:divide-x-reverse">
          {schoolStats.map((stat) => (
            <div
              key={stat.label}
              className="px-4 text-center first:lg:pr-0 last:lg:pl-0"
            >
              <p className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                {stat.value}
              </p>

              <p className="mt-2 text-sm text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}