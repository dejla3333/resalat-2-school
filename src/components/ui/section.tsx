import { type HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  spacing?: "default" | "large";
}

export function Section({
  spacing = "default",
  className = "",
  ...props
}: SectionProps) {
  const spacingClass =
    spacing === "large"
      ? "py-24 sm:py-28 lg:py-32"
      : "py-16 sm:py-20 lg:py-24";

  return (
    <section
      className={[spacingClass, className].join(" ")}
      {...props}
    />
  );
}