import type { Metadata } from "next";

import { GalleryHero } from "@/components/gallery/gallery-hero";
import { GalleryGrid } from "@/components/gallery/gallery-grid";

export const metadata: Metadata = {
  title: "گالری",
  description:
    "تصاویر فعالیت‌ها، برنامه‌ها و رویدادهای مکتب رسالت ۲.",
};

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <GalleryGrid />
    </>
  );
}