import type { Metadata } from "next";

import { AboutHero } from "@/components/about/about-hero";
import { SchoolStory } from "@/components/about/school-story";
import { MissionValues } from "@/components/about/mission-values";
import { DirectorMessage } from "@/components/about/director-message";

export const metadata: Metadata = {
  title: "درباره مکتب",
  description:
    "آشنایی با مکتب رسالت ۲، فلسفه آموزشی، ارزش‌ها و مسیر رشد آن.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <SchoolStory />
      <MissionValues />
      <DirectorMessage />
    </>
  );
}