"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim() || !phone.trim() || !message.trim()) {
      setStatus("error");
      return;
    }

    setStatus("loading");

    setTimeout(() => {
      setStatus("success");
    }, 1000);
  }

  if (status === "success") {
    return (
      <div className="rounded-[20px] border border-border bg-white p-8 sm:p-10">
        <CheckCircle2
          size={28}
          className="text-primary"
        />

        <h2 className="mt-5 text-2xl font-bold">
          پیام شما دریافت شد.
        </h2>

        <p className="mt-3 text-sm leading-8 text-muted">
          از تماس شما سپاسگزاریم. پیام شما برای بررسی دریافت شد.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[20px] border border-border bg-white p-6 sm:p-8 lg:p-10"
    >
      <div>
        <p className="text-sm font-semibold text-primary">
          پیام بفرستید
        </p>

        <h2 className="mt-3 text-2xl font-bold">
          چگونه می‌توانیم کمک کنیم؟
        </h2>
      </div>

      <div className="mt-8 space-y-6">
        <div>
          <label
            htmlFor="contact-name"
            className="text-sm font-medium"
          >
            نام
          </label>

          <input
            id="contact-name"
            value={name}
            onChange={(event) =>
              setName(event.target.value)
            }
            className="mt-2 h-12 w-full rounded-xl border border-border px-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
            placeholder="نام خود را وارد کنید"
          />
        </div>

        <div>
          <label
            htmlFor="contact-phone"
            className="text-sm font-medium"
          >
            شماره تماس
          </label>

          <input
            id="contact-phone"
            type="tel"
            value={phone}
            onChange={(event) =>
              setPhone(event.target.value)
            }
            className="mt-2 h-12 w-full rounded-xl border border-border px-4 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
            placeholder="شماره تماس"
          />
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="text-sm font-medium"
          >
            پیام
          </label>

          <textarea
            id="contact-message"
            rows={6}
            value={message}
            onChange={(event) =>
              setMessage(event.target.value)
            }
            className="mt-2 w-full resize-none rounded-xl border border-border px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
            placeholder="پیام خود را بنویسید..."
          />
        </div>
      </div>

      {status === "error" && (
        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          لطفاً تمام فیلدهای ضروری را تکمیل کنید.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <Loader2
              size={17}
              className="animate-spin"
            />
            در حال ارسال...
          </>
        ) : (
          "ارسال پیام"
        )}
      </button>
    </form>
  );
}