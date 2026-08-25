import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const galleryImages = [
  {
    src: "/6059841599736319793_119.jpg",
    alt: "فعالیت دانش‌آموزان",
  },
  {
    src: "/6339050049190433082_121.jpg",
    alt: "فعالیت آموزشی",
  },
  {
    src: "/6325858293363970282_119.jpg",
    alt: "فعالیت مکتب",
  },
];

export function GalleryPreview() {
  return (
    <Section spacing="large">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold text-primary">
              گالری
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              لحظه‌های مکتب
            </h2>
          </div>

          <Link
            href="/gallery"
            className="hidden items-center gap-2 text-sm font-semibold text-primary sm:inline-flex"
          >
            مشاهده گالری
            <ArrowLeft size={17} aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div
              key={image.src}
              className={[
                "relative overflow-hidden rounded-[var(--radius-lg)] bg-neutral-200",
                index === 0
                  ? "aspect-[4/5] md:row-span-2"
                  : "aspect-[4/3]",
              ].join(" ")}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}