import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactInfo } from "@/components/contact/contact-info";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "تماس با ما",
  description:
    "راه‌های ارتباطی و فرم تماس با مکتب رسالت ۲.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
            <ContactInfo />
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}