import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export default function Card({
  hover = false,
  className = "",
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={[
        "rounded-[var(--radius-lg)]",
        "border border-[var(--border)]",
        "bg-white",
        "p-6",
        "shadow-[var(--shadow-sm)]",
        hover
          ? "transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
          : "",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}