import { SiteShell } from "@/components/layout/site-shell";

import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/stats";
import { AboutPreview } from "@/components/home/AboutPreview";
import { AcademicAreas } from "@/components/home/academic-areas";
import { FeaturedNews } from "@/components/home/featured-news";
import { UpcomingEvents } from "@/components/home/upcoming-events";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { FinalCTA } from "@/components/home/final-cta";

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <Stats />
      <AboutPreview />
      <AcademicAreas />
      <FeaturedNews />
      <UpcomingEvents />
      <GalleryPreview />
      <FinalCTA />
    </SiteShell>
  );
}