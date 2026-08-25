"use client";

import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import type { GalleryItem } from "@/data/gallery";

type GalleryLightboxProps = {
  items: GalleryItem[];
  selectedIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
};

export function GalleryLightbox({
  items,
  selectedIndex,
  onClose,
  onPrevious,
  onNext,
}: GalleryLightboxProps) {
  const item = items[selectedIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="نمایش تصویر"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="بستن"
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
      >
        <X size={22} />
      </button>

      <button
        type="button"
        onClick={onPrevious}
        aria-label="تصویر قبلی"
        className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-8"
      >
        <ChevronRight size={22} />
      </button>

      <button
        type="button"
        onClick={onNext}
        aria-label="تصویر بعدی"
        className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-8"
      >
        <ChevronLeft size={22} />
      </button>

      <div className="relative h-[75vh] w-full max-w-5xl">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="100vw"
          className="object-contain"
        />
      </div>

      <div className="absolute bottom-5 right-5 left-5 text-center text-white">
        <p className="font-semibold">{item.title}</p>

        <p className="mt-1 text-sm text-white/60">
          {item.category}
        </p>
      </div>
    </div>
  );
}