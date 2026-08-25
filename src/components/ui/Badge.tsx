import type { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning" | "error";
}

const variants = {
  default:
    "bg-[var(--primary-light)] text-[var(--primary)]",
  success:
    "bg-green-50 text-green-700",
  warning:
    "bg-amber-50 text-amber-700",
  error:
    "bg-red-50 text-red-700",
};

export default function Badge({
  variant = "default",
  className = "",
  ...props
}: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center",
        "rounded-full",
        "px-3 py-1",
        "text-xs font-medium",
        variants[variant],
        className,
      ].join(" ")}
      {...props}
    />
  );
}