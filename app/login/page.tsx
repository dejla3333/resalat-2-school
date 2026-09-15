"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  Eye,
  EyeOff,
  GraduationCap,
  LockKeyhole,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

type Role = "student" | "parent" | "teacher";

const roles = [
  {
    value: "student" as Role,
    label: "دانش‌آموز",
    icon: GraduationCap,
  },
  {
    value: "parent" as Role,
    label: "والد",
    icon: UsersRound,
  },
  {
    value: "teacher" as Role,
    label: "معلم",
    icon: BookOpen,
  },
];

export default function LoginPage() {
  const [role, setRole] = useState<Role>("student");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const routes: Record<Role, string> = {
      student: "/portal/student",
      parent: "/portal/Parent",
      teacher: "/portal/teacher",
    };

    setTimeout(() => {
      window.location.href = routes[role];
    }, 500);
  };

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-white text-[#202020]"
    >
      {/* Header */}

      <header className="border-b border-[#e8e9e7]">
        <div className="mx-auto flex h-[74px] max-w-[1500px] items-center justify-between px-6 sm:px-10 lg:px-14">
          <Link
            href="/6064654879390634451_121.jpg"
            className="flex items-center gap-3"
          >
            <div className="flex h-9 w-9 items-center justify-center bg-[#243b5b] text-[12px] font-bold text-white">
              ر۲
            </div>

            <span className="text-sm font-semibold text-[#243b5b]">
              مکتب رسالت ۲
            </span>
          </Link>

          <Link
            href="/"
            className="group flex items-center gap-2 text-[13px] text-[#737873] transition-colors hover:text-[#243b5b]"
          >
            سایت مکتب

            <ArrowLeft
              size={15}
              strokeWidth={1.6}
              className="transition-transform group-hover:-translate-x-1"
            />
          </Link>
        </div>
      </header>

      {/* Main */}

      <div className="mx-auto grid min-h-[calc(100vh-74px)] max-w-[1500px] lg:grid-cols-[0.95fr_1.05fr]">

        {/* --------------------------------
            BRAND SIDE
        -------------------------------- */}

        <section className="relative hidden bg-[#243b5b] lg:block">

          {/* Small architectural accent */}

          <div className="absolute bottom-0 left-0 h-2 w-28 bg-[#96d04f]" />

          <div className="flex h-full flex-col justify-between p-14 xl:p-20">

            <div>

              <p className="text-[11px] font-medium tracking-[0.18em] text-[#96d04f]">
                RESALAT 2
              </p>

              <div className="mt-16 max-w-[560px]">

                <h1 className="text-[46px] font-bold leading-[1.5] tracking-[-0.03em] text-white xl:text-[58px]">
                  جایی برای
                  <br />
                  <span className="text-[#96d04f]">
                    یادگیری
                  </span>
                  ، رشد و
                  <br />
                  آینده.
                </h1>

                <p className="mt-8 max-w-[470px] text-[15px] leading-8 text-white/55">
                  سامانه آموزشی مکتب رسالت ۲ برای دسترسی
                  دانش‌آموزان، والدین و معلمان به خدمات و
                  اطلاعات آموزشی طراحی شده است.
                </p>

              </div>
            </div>

            <div className="flex items-end justify-between">

              <p className="max-w-[240px] text-[11px] leading-6 text-white/35">
                آموزش تنها انتقال دانش نیست؛
                ساختن فرصت برای رشد و اندیشیدن است.
              </p>

              <span className="text-[11px] text-white/30">
                ۱۴۰۵
              </span>

            </div>

          </div>
        </section>

        {/* --------------------------------
            LOGIN SIDE
        -------------------------------- */}

        <section className="flex items-center px-6 py-14 sm:px-10 lg:px-16 xl:px-24">

          <div className="w-full max-w-[470px]">

            {/* Heading */}

            <div className="mb-10">

              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-7 bg-[#96d04f]" />

                <span className="text-[11px] font-semibold text-[#6a9d2d]">
                  سامانه آموزشی
                </span>
              </div>

              <h2 className="text-[32px] font-bold tracking-[-0.02em] text-[#243b5b] sm:text-[38px]">
                ورود به حساب
              </h2>

              <p className="mt-3 text-[13px] leading-7 text-[#737873]">
                برای ادامه، اطلاعات حساب خود را وارد کنید.
              </p>

            </div>

            {/* Role */}

            <div className="mb-8">

              <label className="mb-3 block text-[12px] font-semibold text-[#243b5b]">
                نوع حساب
              </label>

              <div className="flex border-b border-[#dfe2df]">

                {roles.map((item) => {
                  const active = role === item.value;
                  const Icon = item.icon;

                  return (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() => setRole(item.value)}
                      className={[
                        "relative flex flex-1 items-center justify-center gap-2 pb-3 pt-2 text-[12px] font-medium transition-colors",
                        active
                          ? "text-[#243b5b]"
                          : "text-[#8b908b] hover:text-[#243b5b]",
                      ].join(" ")}
                    >
                      <Icon
                        size={16}
                        strokeWidth={1.7}
                      />

                      {item.label}

                      {active && (
                        <span className="absolute bottom-[-1px] right-0 left-0 h-[2px] bg-[#96d04f]" />
                      )}
                    </button>
                  );
                })}

              </div>

            </div>

            {/* Form */}

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* Username */}

              <div>

                <label
                  htmlFor="username"
                  className="mb-2 block text-[12px] font-semibold text-[#243b5b]"
                >
                  شماره تماس یا شناسه کاربری
                </label>

                <div className="relative">

                  <UserIcon />

                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    autoComplete="username"
                    placeholder="شناسه کاربری"
                    className="h-[52px] w-full border-b border-[#d9ddd9] bg-transparent px-9 text-[13px] text-[#202020] outline-none transition-colors placeholder:text-[#a4a9a4] focus:border-[#243b5b]"
                  />

                </div>

              </div>

              {/* Password */}

              <div>

                <div className="mb-2 flex items-center justify-between">

                  <label
                    htmlFor="password"
                    className="text-[12px] font-semibold text-[#243b5b]"
                  >
                    رمز عبور
                  </label>

                  <button
                    type="button"
                    className="text-[11px] text-[#558ec8] hover:text-[#243b5b]"
                  >
                    فراموشی رمز
                  </button>

                </div>

                <div className="relative">

                  <LockKeyhole
                    size={17}
                    strokeWidth={1.6}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-[#9da39d]"
                  />

                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    autoComplete="current-password"
                    placeholder="رمز عبور"
                    className="h-[52px] w-full border-b border-[#d9ddd9] bg-transparent px-9 pl-9 text-[13px] outline-none transition-colors placeholder:text-[#a4a9a4] focus:border-[#243b5b]"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((value) => !value)
                    }
                    aria-label={
                      showPassword
                        ? "مخفی کردن رمز عبور"
                        : "نمایش رمز عبور"
                    }
                    className="absolute left-0 top-1/2 -translate-y-1/2 text-[#9da39d] hover:text-[#243b5b]"
                  >
                    {showPassword ? (
                      <EyeOff size={17} />
                    ) : (
                      <Eye size={17} />
                    )}
                  </button>

                </div>

              </div>

              {/* Remember */}

              <label className="flex items-center gap-2 text-[11px] text-[#737873]">

                <input
                  type="checkbox"
                  className="size-3.5 accent-[#96d04f]"
                />

                مرا به خاطر بسپار

              </label>

              {/* Submit */}

              <button
                type="submit"
                disabled={loading}
                className="group mt-2 flex h-[52px] w-full items-center justify-center gap-3 bg-[#243b5b] text-[13px] font-semibold text-white transition-colors hover:bg-[#558ec8] disabled:opacity-60"
              >
                {loading
                  ? "در حال ورود..."
                  : "ورود به سامانه"}

                {!loading && (
                  <ArrowLeft
                    size={16}
                    strokeWidth={1.7}
                    className="transition-transform group-hover:-translate-x-1"
                  />
                )}
              </button>

            </form>

            {/* Security */}

            <div className="mt-8 flex gap-2 border-t border-[#e8e9e7] pt-5">

              <ShieldCheck
                size={14}
                strokeWidth={1.6}
                className="mt-0.5 shrink-0 text-[#6a9d2d]"
              />

              <p className="text-[10px] leading-6 text-[#9da39d]">
                اطلاعات ورود شما محرمانه نگهداری می‌شود.
              </p>

            </div>

          </div>

        </section>
      </div>
    </main>
  );
}

/* --------------------------------
   Small username icon
-------------------------------- */

function UserIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="absolute right-0 top-1/2 -translate-y-1/2 text-[#9da39d]"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c.7-3.4 3.2-5.5 7-5.5s6.3 2.1 7 5.5" />
    </svg>
  );
}