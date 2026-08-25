import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({
  label,
  error,
  id,
  className = "",
  ...props
}: InputProps) {
  const inputId = id ?? props.name;

  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-[var(--foreground)]"
        >
          {label}
        </label>
      )}

      <input
        id={inputId}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={[
          "w-full rounded-[var(--radius-md)]",
          "border border-[var(--border)]",
          "bg-white px-4 py-3",
          "text-sm text-[var(--foreground)]",
          "placeholder:text-slate-400",
          "transition-colors",
          "focus:border-[var(--accent)]",
          "focus:outline-none",
          "focus:ring-2 focus:ring-blue-100",
          error ? "border-red-400" : "",
          className,
        ].join(" ")}
        {...props}
      />

      {error && (
        <p
          id={`${inputId}-error`}
          className="text-sm text-[var(--error)]"
        >
          {error}
        </p>
      )}
    </div>
  );
}