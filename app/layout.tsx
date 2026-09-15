import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "مکتب رسالت ۲",
    template: "%s | مکتب رسالت ۲",
  },
  description:
    "وب‌سایت مکتب رسالت ۲؛ جایی برای یادگیری، رشد و ساختن آینده.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatn.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}