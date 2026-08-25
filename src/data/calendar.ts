export type CalendarEvent = {
  id: number;
  day: string;
  month: string;
  title: string;
  type: string;
  description: string;
};

export const calendarEvents: CalendarEvent[] = [
  {
    id: 1,
    day: "۱۰",
    month: "حمل",
    title: "آغاز برنامه آموزشی",
    type: "آموزشی",
    description:
      "جزئیات این برنامه پس از تأیید اطلاعات رسمی مکتب اضافه خواهد شد.",
  },
  {
    id: 2,
    day: "6",
    month: "جوزا",
    title: "جلسه والدین و معلمان",
    type: "جلسه",
    description:
      "اطلاعات مربوط به زمان و محل برگزاری جلسه در این بخش قرار می‌گیرد.",
  },
  {
    id: 3,
    day: "۲۵",
    month: "سرطان",
    title: "مسابقات رباتیک",
    type: "مسابقه",
    description:
      "برنامه‌ای برای مشارکت دانش‌آموزان در فعالیت‌های علمی.",
  },
  {
    id: 4,
    day: "۰۳",
    month: "میزان",
    title: "برنامه فرهنگی مکتب",
    type: "فرهنگی",
    description:
      "اطلاعات کامل این رویداد بعداً اضافه خواهد شد.",
  },
];