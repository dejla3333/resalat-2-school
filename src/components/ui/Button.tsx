import { type ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-dark",
  secondary:
    "border border-border bg-white text-foreground hover:border-border-strong",
  ghost:
    "text-foreground hover:bg-black/5",
};

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        "inline-flex min-h-12 items-center justify-center gap-2",
        "rounded-[var(--radius-md)] px-5",
        "text-sm font-medium",
        "transition-colors duration-200",
        "focus-visible:outline-2 focus-visible:outline-offset-2",
        "focus-visible:outline-primary",
        variants[variant],
        className,
      ].join(" ")}
      {...props}
    />
  );
}