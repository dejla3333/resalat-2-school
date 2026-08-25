import type { Metadata } from "next";

import { CalendarHero } from "@/components/calendar/calendar-hero";
import { CalendarView } from "@/components/calendar/calendar-view";

export const metadata: Metadata = {
  title: "تقویم مکتب",
  description:
    "تقویم رویدادها و برنامه‌های مکتب رسالت ۲.",
};

export default function CalendarPage() {
  return (
    <>
      <CalendarHero />
      <CalendarView />
    </>
  );
}