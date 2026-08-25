import type { Metadata } from "next";

import { AdmissionHero } from "@/components/admission/admission-hero";
import { AdmissionForm } from "@/components/admission/admission-form";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "ثبت‌نام",
  description:
    "درخواست ثبت‌نام در مکتب رسالت ۲.",
};

export default function AdmissionPage() {
  return (
    <>
      <AdmissionHero />

      <section className="bg-[#f3f2ef] py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <AdmissionForm />
          </div>
        </Container>
      </section>
    </>
  );
}