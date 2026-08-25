
import type { Metadata } from "next";

import { AcademicsHero } from "@/components/academics/academics-hero";
import { Subjects } from "@/components/academics/Subjects";
import { Classes } from "@/components/academics/classes";
import { LearningMethod } from "@/components/academics/learning-method";

export const metadata: Metadata = {
  title: "آموزش",
  description:
    "آشنایی با حوزه‌های آموزشی، مضامین و روش یادگیری در مکتب رسالت ۲.",
};

export default function AcademicsPage() {
  return (
    <>
      <AcademicsHero />
      <Subjects />
      <Classes />
      <LearningMethod />
    </>
  );
}