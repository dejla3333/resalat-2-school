"use client";

import Link from "next/link";
import {
  Bell,
  BookOpen,
  CalendarDays,
  ClipboardList,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  Send,
  UserRound,
} from "lucide-react";

const navigation = [
  {
    title: "داشبورد",
    href: "/portal/student",
    icon: LayoutDashboard,
  },
  {
    title: "نمرات",
    href: "/portal/student/grades",
    icon: GraduationCap,
  },
  {
    title: "حضور و غیاب",
    href: "/portal/student/attendance",
    icon: CalendarDays,
  },
  {
    title: "تکالیف",
    href: "/portal/student/assignments",
    icon: ClipboardList,
  },
  {
    title: "برنامه هفتگی",
    href: "/portal/student/schedule",
    icon: BookOpen,
  },
  {
    title: "اعلان‌ها",
    href: "/portal/student/notifications",
    icon: Bell,
  },
];

export function PortalSidebar() {
  return (
    <aside
      dir="rtl"
      className="fixed right-0 top-0 z-40 hidden h-screen w-[270px] border-l border-[#e5e8e4] bg-white lg:block"
    >
      <div className="flex h-full flex-col">

        {/* =================================
            BRAND
        ================================= */}

        <div className="border-b border-[#edf0ec] px-6 py-6">

          <Link
            href="/portal/student"
            className="flex items-center gap-3"
          >
            <div className="flex size-10 items-center justify-center bg-[#243b5b] text-[13px] font-bold text-white">
              ر۲
            </div>

            <div>
              <p className="text-[13px] font-bold text-[#243b5b]">
                مکتب رسالت ۲
              </p>

              <p className="mt-1 text-[10px] text-[#929892]">
                سامانه آموزشی
              </p>
            </div>
          </Link>

        </div>

        {/* =================================
            NAVIGATION
        ================================= */}

        <div className="px-4 pt-8">

          <p className="mb-3 px-3 text-[10px] font-semibold text-[#9aa09a]">
            منوی اصلی
          </p>

          <nav className="space-y-1">

            {navigation.map((item, index) => {
              const Icon = item.icon;
              const active = index === 0;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "group relative flex h-11 items-center gap-3 px-3 text-[13px] font-medium transition-colors",
                    active
                      ? "bg-[#f1f7e9] text-[#243b5b]"
                      : "text-[#69716b] hover:bg-[#f7f9f6] hover:text-[#243b5b]",
                  ].join(" ")}
                >

                  {active && (
                    <span className="absolute right-0 top-0 h-full w-[3px] bg-[#96d04f]" />
                  )}

                  <Icon
                    size={18}
                    strokeWidth={1.7}
                    className={
                      active
                        ? "text-[#6a9d2d]"
                        : "text-[#929a93] group-hover:text-[#558ec8]"
                    }
                  />

                  <span>{item.title}</span>

                </Link>
              );
            })}

          </nav>

        </div>

        {/* =================================
            BOTTOM
        ================================= */}

        <div className="mt-auto">

          {/* Student */}

          <div className="mx-4 border-t border-[#edf0ec] px-3 py-5">

            <div className="flex items-center gap-3">

              <div className="flex size-9 items-center justify-center bg-[#f1f4f1] text-[#243b5b]">
                <UserRound
                  size={17}
                  strokeWidth={1.7}
                />
              </div>

              <div className="min-w-0">

                <p className="truncate text-[12px] font-semibold text-[#243b5b]">
                  محمد احمدی
                </p>

                <p className="mt-1 text-[10px] text-[#929892]">
                  دانش‌آموز · صنف هشتم
                </p>

              </div>

            </div>

          </div>

          {/* Telegram */}

          <div className="border-t border-[#edf0ec] px-4 py-4">

            <a
              href="https://t.me/your_channel"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 items-center gap-3 px-3 text-[12px] font-medium text-[#69716b] transition-colors hover:bg-[#f7f9f6] hover:text-[#243b5b]"
            >
              <Send
                size={17}
                strokeWidth={1.7}
              />

              کانال تلگرام

            </a>

            <button
              type="button"
              className="mt-1 flex h-10 w-full items-center gap-3 px-3 text-[12px] font-medium text-[#69716b] transition-colors hover:bg-[#fff7f7] hover:text-[#b84a4a]"
            >
              <LogOut
                size={17}
                strokeWidth={1.7}
              />

              خروج از حساب

            </button>

          </div>

        </div>

      </div>
    </aside>
  );
}