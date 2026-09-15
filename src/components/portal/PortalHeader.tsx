"use client";

import { Bell, Menu } from "lucide-react";

export function PortalHeader() {
  return (
    <header
      dir="rtl"
      className="sticky top-0 z-30 border-b border-[#e5e8e4] bg-white"
    >
      <div className="flex h-[72px] items-center justify-between px-5 sm:px-7 lg:px-10">

        {/* Mobile Menu */}

        <button
          type="button"
          aria-label="باز کردن منو"
          className="flex size-10 items-center justify-center text-[#59615b] transition-colors hover:bg-[#f4f6f3] hover:text-[#243b5b] lg:hidden"
        >
          <Menu
            size={21}
            strokeWidth={1.7}
          />
        </button>

        {/* Page Title */}

        <div className="flex-1">

          <p className="text-[10px] font-medium text-[#969d97]">
            سامانه آموزشی
          </p>

          <h1 className="mt-1 text-[17px] font-bold tracking-tight text-[#243b5b]">
            داشبورد
          </h1>

        </div>

        {/* Right Actions */}

        <div className="flex items-center gap-4">

          {/* Notifications */}

          <button
            type="button"
            aria-label="اعلان‌ها"
            className="relative flex size-10 items-center justify-center text-[#69716b] transition-colors hover:bg-[#f4f6f3] hover:text-[#243b5b]"
          >
            <Bell
              size={19}
              strokeWidth={1.7}
            />

            <span className="absolute right-[11px] top-[9px] size-[6px] rounded-full bg-[#96d04f]" />
          </button>

          {/* Divider */}

          <span className="hidden h-7 w-px bg-[#e5e8e4] sm:block" />

          {/* User */}

          <div className="hidden items-center gap-3 sm:flex">

            <div className="text-left">

              <p className="text-[12px] font-semibold text-[#243b5b]">
                محمد احمدی
              </p>

              <p className="mt-0.5 text-[10px] text-[#929892]">
                دانش‌آموز
              </p>

            </div>

            <div className="flex size-9 items-center justify-center bg-[#243b5b] text-[12px] font-bold text-white">
              م
            </div>

          </div>

        </div>

      </div>
    </header>
  );
}