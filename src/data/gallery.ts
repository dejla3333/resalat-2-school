export type GalleryItem = {
  id: number;
  title: string;
  category: string;
  image: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "فعالیت‌های آموزشی",
    category: "فعالیت‌های مکتب",
    image: "/6086863287694855856_121.jpg",
  },
  {
    id: 2,
    title: "برنامه فرهنگی",
    category: "مراسم‌ها",
    image: "/6066783606916452849_119.jpg",
  },
  {
    id: 3,
    title: "مسابقات دانش‌آموزی",
    category: "مسابقات",
    image: "/6066783606916452857_119.jpg",
  },
  {
    id: 4,
    title: "پروژه دانش‌آموزی",
    category: "پروژه‌های دانش‌آموزی",
    image: "/6064654879390634451_121.jpg",
  },
  {
    id: 5,
    title: "محیط آموزشی",
    category: "فعالیت‌های مکتب",
    image: "/6064654879390634370_121.jpg",
  },
  {
    id: 6,
    title: "فعالیت گروهی",
    category: "پروژه‌های دانش‌آموزی",
    image: "/images/gallery/gallery-06.jpg",
  },
];

export const galleryCategories = [
  "همه",
  "فعالیت‌های مکتب",
  "مراسم‌ها",
  "مسابقات",
  "پروژه‌های دانش‌آموزی",
];