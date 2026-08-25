"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import {
  galleryCategories,
  galleryItems,
} from "@/data/gallery";
import { GalleryLightbox } from "./gallery-lightbox";

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("همه");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(
    null
  );

  const filteredItems = useMemo(() => {
    if (activeCategory === "همه") {
      return galleryItems;
    }

    return galleryItems.filter(
      (item) => item.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <Section spacing="large">
      <Container>
        {/* Filters */}
        <div className="mb-10 flex gap-2 overflow-x-auto pb-2">
          {galleryCategories.map((category) => {
            const active = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setActiveCategory(category);
                  setSelectedIndex(null);
                }}
                className={[
                  "shrink-0 rounded-full px-4 py-2 text-sm transition-all",
                  active
                    ? "bg-primary text-white"
                    : "bg-[#f3f2ef] text-muted hover:bg-neutral-200",
                ].join(" ")}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {filteredItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className={[
                "group relative overflow-hidden rounded-[16px] bg-neutral-200 text-right",
                index === 0
                  ? "col-span-2 row-span-2 aspect-square"
                  : "aspect-[4/5]",
              ].join(" ")}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 pt-16 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-sm font-semibold text-white">
                  {item.title}
                </p>

                <p className="mt-1 text-xs text-white/70">
                  {item.category}
                </p>
              </div>
            </button>
          ))}
        </div>
      </Container>

      {selectedIndex !== null && (
        <GalleryLightbox
          items={filteredItems}
          selectedIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onPrevious={() =>
            setSelectedIndex((current) =>
              current === null
                ? null
                : current === 0
                  ? filteredItems.length - 1
                  : current - 1
            )
          }
          onNext={() =>
            setSelectedIndex((current) =>
              current === null
                ? null
                : current === filteredItems.length - 1
                  ? 0
                  : current + 1
            )
          }
        />
      )}
    </Section>
  );
}