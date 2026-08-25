"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

type FormData = {
  studentName: string;
  guardianName: string;
  birthDate: string;
  currentGrade: string;
  desiredGrade: string;
  phone: string;
  email: string;
  address: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialForm: FormData = {
  studentName: "",
  guardianName: "",
  birthDate: "",
  currentGrade: "",
  desiredGrade: "",
  phone: "",
  email: "",
  address: "",
  message: "",
};

export function AdmissionForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  function updateField(
    field: keyof FormData,
    value: string
  ) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    setErrors((current) => ({
      ...current,
      [field]: undefined,
    }));
  }

  function validate() {
    const nextErrors: FormErrors = {};

    if (!form.studentName.trim()) {
      nextErrors.studentName = "نام دانش‌آموز را وارد کنید.";
    }

    if (!form.guardianName.trim()) {
      nextErrors.guardianName = "نام پدر یا سرپرست را وارد کنید.";
    }

    if (!form.birthDate) {
      nextErrors.birthDate = "تاریخ تولد را وارد کنید.";
    }

    if (!form.desiredGrade) {
      nextErrors.desiredGrade = "صنف مورد نظر را انتخاب کنید.";
    }

    if (!form.phone.trim()) {
      nextErrors.phone = "شماره تماس را وارد کنید.";
    }

    if (
      form.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      nextErrors.email = "ایمیل واردشده معتبر نیست.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validate()) {
      setStatus("idle");
      return;
    }

    setStatus("loading");

    try {
      /*
       * در آینده این قسمت به API یا Backend متصل می‌شود.
       * فعلاً برای طراحی UI شبیه‌سازی شده است.
       */
      await new Promise((resolve) =>
        setTimeout(resolve, 1200)
      );

      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[20px] border border-border bg-white p-8 text-center sm:p-12">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
          <CheckCircle2 size={26} />
        </div>

        <h2 className="mt-6 text-2xl font-bold">
          درخواست شما دریافت شد.
        </h2>

        <p className="mx-auto mt-4 max-w-md text-sm leading-8 text-muted">
          درخواست ثبت‌نام شما با موفقیت ثبت شد. پس از بررسی اطلاعات،
          برای ادامه مراحل با شما تماس گرفته خواهد شد.
        </p>

        <button
          type="button"
          onClick={() => {
            setForm(initialForm);
            setStatus("idle");
          }}
          className="mt-8 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
        >
          ارسال درخواست جدید
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-[20px] border border-border bg-white p-6 sm:p-8 lg:p-10"
    >
      <div className="grid gap-7 sm:grid-cols-2">
        <Field
          label="نام دانش‌آموز"
          name="studentName"
          value={form.studentName}
          error={errors.studentName}
          onChange={(value) =>
            updateField("studentName", value)
          }
          required
        />

        <Field
          label="نام پدر / سرپرست"
          name="guardianName"
          value={form.guardianName}
          error={errors.guardianName}
          onChange={(value) =>
            updateField("guardianName", value)
          }
          required
        />

        <Field
          label="تاریخ تولد"
          name="birthDate"
          type="text"
          placeholder="مثلاً ۱۳۹۰/۰۵/۱۲"
          value={form.birthDate}
          error={errors.birthDate}
          onChange={(value) =>
            updateField("birthDate", value)
          }
          required
        />

        <SelectField
          label="صنف فعلی"
          name="currentGrade"
          value={form.currentGrade}
          onChange={(value) =>
            updateField("currentGrade", value)
          }
          options={[
            "صنف اول",
            "صنف دوم",
            "صنف سوم",
            "صنف چهارم",
            "صنف پنجم",
            "صنف ششم",
            "صنف هفتم",
            "صنف هشتم",
            "صنف نهم",
            "صنف دهم",
            "صنف یازدهم",
            "صنف دوازدهم",
          ]}
        />

        <SelectField
          label="صنف مورد نظر"
          name="desiredGrade"
          value={form.desiredGrade}
          error={errors.desiredGrade}
          onChange={(value) =>
            updateField("desiredGrade", value)
          }
          options={[
            "صنف اول",
            "صنف دوم",
            "صنف سوم",
            "صنف چهارم",
            "صنف پنجم",
            "صنف ششم",
            "صنف هفتم",
            "صنف هشتم",
            "صنف نهم",
            "صنف دهم",
            "صنف یازدهم",
            "صنف دوازدهم",
          ]}
          required
        />

        <Field
          label="شماره تماس"
          name="phone"
          type="tel"
          value={form.phone}
          error={errors.phone}
          onChange={(value) =>
            updateField("phone", value)
          }
          required
        />

        <Field
          label="ایمیل"
          name="email"
          type="email"
          value={form.email}
          error={errors.email}
          onChange={(value) =>
            updateField("email", value)
          }
        />

        <div className="sm:col-span-2">
          <Field
            label="آدرس"
            name="address"
            value={form.address}
            onChange={(value) =>
              updateField("address", value)
            }
          />
        </div>

        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="text-sm font-medium"
          >
            توضیحات
          </label>

          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={(event) =>
              updateField("message", event.target.value)
            }
            className="mt-2 w-full resize-none rounded-xl border border-border bg-transparent px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
            placeholder="اگر توضیحی دارید اینجا بنویسید..."
          />
        </div>
      </div>

      {status === "error" && (
        <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          در ارسال درخواست مشکلی پیش آمد. لطفاً دوباره تلاش کنید.
        </div>
      )}

      <div className="mt-8 flex flex-col gap-4 border-t border-border pt-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-6 text-muted">
          اطلاعات شما فقط برای بررسی درخواست ثبت‌نام استفاده خواهد شد.
        </p>

        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
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
            "ارسال درخواست"
          )}
        </button>
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  value: string;
  type?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
  onChange: (value: string) => void;
};

function Field({
  label,
  name,
  value,
  type = "text",
  placeholder,
  error,
  required,
  onChange,
}: FieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-sm font-medium"
      >
        {label}
        {required && (
          <span className="mr-1 text-primary">*</span>
        )}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) =>
          onChange(event.target.value)
        }
        aria-invalid={Boolean(error)}
        aria-describedby={
          error ? `${name}-error` : undefined
        }
        className={[
          "mt-2 h-12 w-full rounded-xl border bg-transparent px-4 text-sm outline-none transition",
          error
            ? "border-red-400 focus:border-red-500"
            : "border-border focus:border-primary focus:ring-2 focus:ring-primary/10",
        ].join(" ")}
      />

      {error && (
        <p
          id={`${name}-error`}
          className="mt-2 text-xs text-red-600"
        >
          {error}
        </p>
      )}
    </div>
  );
}

type SelectFieldProps = {
  label: string;
  name: string;
  value: string;
  options: string[];
  error?: string;
  required?: boolean;
  onChange: (value: string) => void;
};

function SelectField({
  label,
  name,
  value,
  options,
  error,
  required,
  onChange,
}: SelectFieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-sm font-medium"
      >
        {label}
        {required && (
          <span className="mr-1 text-primary">*</span>
        )}
      </label>

      <select
        id={name}
        name={name}
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        aria-invalid={Boolean(error)}
        className={[
          "mt-2 h-12 w-full rounded-xl border bg-white px-4 text-sm outline-none transition",
          error
            ? "border-red-400"
            : "border-border focus:border-primary focus:ring-2 focus:ring-primary/10",
        ].join(" ")}
      >
        <option value="">انتخاب کنید</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {error && (
        <p className="mt-2 text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}