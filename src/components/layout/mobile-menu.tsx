
"use client";

import Link from "next/link";
import { useEffect } from "react";
import { ArrowLeft, Send } from "lucide-react";

interface NavigationItem {
  label: string;
  href: string;
}

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  navigation: NavigationItem[];
}

export function MobileMenu({
  open,
  onClose,
  navigation,
}: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-40 bg-secondary-dark/20 backdrop-blur-[2px] lg:hidden"
      onClick={onClose}
    >
      <div
        className="absolute inset-x-0 top-20 border-t border-border bg-white shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <nav
          aria-label="منوی موبایل"
          className="mx-auto max-w-[1280px] px-5 pb-6 sm:px-8"
        >
          {/* Navigation */}
          <div className="divide-y divide-border">
            {navigation.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="group flex min-h-14 items-center justify-between py-3 text-[15px] font-medium text-foreground transition-colors duration-200 hover:text-primary-dark"
              >
                <span>{item.label}</span>

                <ArrowLeft
                  size={17}
                  strokeWidth={1.8}
                  className="text-muted transition-all duration-200 group-hover:-translate-x-1 group-hover:text-primary"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Link
              href="/contact"
              onClick={onClose}
              className="flex min-h-12 items-center justify-center bg-secondary-dark px-5 text-sm font-medium text-white transition-colors duration-200 hover:bg-secondary"
            >
              تماس با مکتب
            </Link>

            <a
              href="https://t.me/your_channel"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex min-h-12 items-center justify-center gap-2 border border-border bg-white px-5 text-sm font-medium text-secondary-dark transition-colors duration-200 hover:border-primary/40 hover:bg-background-soft"
            >
              <Send
                size={16}
                strokeWidth={1.8}
                aria-hidden="true"
              />

              کانال تلگرام
            </a>
          </div>

          {/* Small brand line */}
          <div className="mt-6 flex items-center gap-3">
            <span className="h-px flex-1 bg-border" />

            <span className="text-[11px] font-medium tracking-wide text-muted">
              مکتب رسالت ۲
            </span>

            <span className="h-px flex-1 bg-border" />
          </div>
        </nav>
      </div>
    </div>
  );
}