
import Link from "next/link";
import { ArrowUpLeft, MapPin, Phone, Mail, Send } from "lucide-react";
import { Container } from "@/components/ui/container";

const quickLinks = [
  { label: "خانه", href: "/" },
  { label: "درباره مکتب", href: "/about" },
  { label: "آموزش", href: "/academics" },
  { label: "اخبار", href: "/news" },
];

const schoolLinks = [
  { label: "برنامه آموزشی", href: "/academics" },
  { label: "تقویم آموزشی", href: "/calendar" },
  { label: "ثبت‌نام", href: "/admission" },
  { label: "گالری", href: "/gallery" },
];

export function Footer() {
  return (
    <footer className="bg-secondary-dark text-white">
      <Container>
        {/* Main footer */}
        <div className="grid gap-12 py-16 lg:grid-cols-[1.8fr_1fr_1fr_1.2fr] lg:gap-20 lg:py-20">
          
          {/* Brand */}
          <div className="max-w-md">
            <Link
              href="/6064654879390634451_121.jpg"              className="inline-flex items-center gap-3"
            >
              <span className="flex size-10 items-center justify-center bg-primary text-lg font-bold text-white">
                ر
              </span>

              <div>
                <div className="text-lg font-bold tracking-tight">
                  مکتب رسالت ۲
                </div>

                <div className="mt-1 text-[11px] tracking-wide text-white/45">
                  RESALAT 2 SCHOOL
                </div>
              </div>
            </Link>

            <p className="mt-7 max-w-sm text-sm leading-8 text-white/55">
              محیطی برای یادگیری، رشد فکری و پرورش استعدادهای
              دانش‌آموزان؛ با تمرکز بر آموزش باکیفیت و ساختن آینده‌ای بهتر.
            </p>

            {/* Telegram */}
            <a
              href="https://t.me/resalat_2_wd"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-white/75 transition-colors hover:text-primary"
            >
              <Send size={16} strokeWidth={1.8} />
              <span>کانال تلگرام مکتب</span>
              <ArrowUpLeft size={14} strokeWidth={1.8} />
            </a>
          </div>

          {/* Navigation */}
          <FooterColumn
            title="دسترسی سریع"
            links={quickLinks}
          />

          {/* School */}
          <FooterColumn
            title="مکتب"
            links={schoolLinks}
          />

          {/* Contact */}
          <div>
            <h2 className="text-sm font-semibold text-white">
              ارتباط با ما
            </h2>

            <div className="mt-6 space-y-5">
              <ContactItem
                icon={<Phone size={16} strokeWidth={1.8} />}
                text="079315200"
              />

              <ContactItem
                icon={<Mail size={16} strokeWidth={1.8} />}
                text="resalat2school@gmail.com"
              />

              <ContactItem
                icon={<MapPin size={16} strokeWidth={1.8} />}
                text="دولتخانه، کنار زیارت، هرات، افغانستان"
              />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} مکتب رسالت ۲. تمامی حقوق محفوظ است.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-xs text-white/45 transition-colors hover:text-primary"
          >
            ارتباط با مکتب
            <ArrowUpLeft size={14} strokeWidth={1.8} />
          </Link>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-white">
        {title}
      </h2>

      <nav className="mt-6 flex flex-col gap-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="w-fit text-sm text-white/50 transition-colors duration-200 hover:text-primary"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}

function ContactItem({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-start gap-3 text-sm text-white/50">
      <span className="mt-0.5 shrink-0 text-primary">
        {icon}
      </span>

      <span className="leading-6">
        {text}
      </span>
    </div>
  );
}