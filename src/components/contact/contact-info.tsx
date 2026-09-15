import { Mail, MapPin, Phone } from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    title: "شماره تماس رسمی مکتب",
    value: "079315200",
    href: "tel:079315200",
  },
  {
    icon: Mail,
    title: "ایمیل",
    value: "resalat2school@example.com",
    href: "mailto:resalat2school@example.com",
  },
  {
    icon: MapPin,
    title: "آدرس",
    value: "دولتخانه، کنار زیارت، هرات، افغانستان",
  },
];

export function ContactInfo() {
  return (
    <div>
      <h2 className="text-2xl font-bold">
        راه‌های ارتباطی
      </h2>

      <div className="mt-8 divide-y divide-border border-y border-border">
        {contactItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex gap-5 py-6"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f3f2ef] text-primary">
                <Icon size={19} />
              </div>

              <div>
                <p className="text-sm text-muted">
                  {item.title}
                </p>

                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-1 block font-semibold transition-colors hover:text-primary"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-1 font-semibold">
                    {item.value}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 overflow-hidden rounded-[20px] bg-neutral-200">
        <div className="flex aspect-[16/10] items-center justify-center">
          <div className="text-center">
            <MapPin
              size={30}
              className="mx-auto text-primary"
            />

            <p className="mt-3 text-sm font-medium">
              محل نقشه مکتب
            </p>

            <p className="mt-1 text-xs text-muted">
              پس از مشخص شدن آدرس رسمی اضافه می‌شود.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}