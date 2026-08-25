"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { MobileMenu } from "./mobile-menu";

const navigation = [
  { label: "خانه", href: "/" },
  { label: "درباره مکتب", href: "/about" },
  { label: "آموزش", href: "/academics" },
  { label: "اخبار", href: "/news" },
  { label: "گالری", href: "/gallery" },
  { label: "تقویم", href: "/calendar" },
  { label: "ثبت‌نام", href: "/admission" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-50",
          "transition-all duration-300",
          scrolled
            ? "border-b border-primary/15 bg-white/95 shadow-sm backdrop-blur-md"
            : "bg-transparent",
        ].join(" ")}
      >
        {/* Brand accent line */}
        {scrolled && (
          <div className="absolute inset-x-0 bottom-0 h-[2px] bg-primary" />
        )}

        <nav
          aria-label="ناوبری اصلی"
          className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-5 sm:px-8 lg:px-10"
        >
          {/* Logo */}
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-2"
          >
            <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white transition-transform duration-200 group-hover:scale-105">
              ر
            </span>

            <span className="text-xl font-bold tracking-tight text-secondary-dark">
              رسالت ۲
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative py-2 text-sm font-medium text-foreground/75 transition-colors duration-200 hover:text-primary-dark"
              >
                {item.label}

                <span className="absolute inset-x-0 -bottom-0.5 mx-auto h-0.5 w-0 rounded-full bg-primary transition-all duration-200 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] bg-secondary px-5 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-secondary-dark hover:shadow-md"
            >
              تماس با ما
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={menuOpen ? "بستن منو" : "باز کردن منو"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className={[
              "inline-flex size-11 items-center justify-center",
              "rounded-[var(--radius-md)]",
              "border transition-all duration-200",
              "lg:hidden",
              menuOpen
                ? "border-primary bg-primary text-white"
                : "border-border bg-white/90 text-secondary-dark hover:border-primary/40 hover:bg-background-soft",
            ].join(" ")}
          >
            {menuOpen ? (
              <X size={21} aria-hidden="true" />
            ) : (
              <Menu size={21} aria-hidden="true" />
            )}
          </button>
        </nav>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        navigation={navigation}
      />
    </>
  );
}