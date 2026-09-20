import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { CtaSection, PageBanner, ServiceCard } from "@/components/sections";
import {
  FaGlobeAsia,
  FaGraduationCap,
  FaSchool,
  FaUserGraduate,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Services",
  description:
    "International and Singapore government course tuition, university admission consulting, and primary/secondary school admission support.",
};

const services = [
  {
    icon: <FaGlobeAsia aria-hidden />,
    title: "International Courses",
    description:
      "IBDP, IGCSE, IB MYP/PYP & International A-Levels — globally recognized programmes with expert tuition and university pathway support.",
    href: "/internationalcourse",
  },
  {
    icon: <FaSchool aria-hidden />,
    title: "Singapore Government Courses",
    description:
      "MOE-aligned PSLE, O-Level & A-Level tuition with proven exam strategies and personalized academic support.",
    href: "/singaporegovernmentcourses",
  },
  {
    icon: <FaGraduationCap aria-hidden />,
    title: "University Admission Consulting",
    description:
      "End-to-end guidance for Singapore & overseas universities — from profile building to interview success.",
    href: "/university-admission",
  },
  {
    icon: <FaUserGraduate aria-hidden />,
    title: "Primary & Secondary School Admission",
    description:
      "Expert P1 registration, AEIS prep, school shortlisting & interview coaching for Singapore schools.",
    href: "/primary-secondary-school-admission",
  },
];

export default function ServicesPage() {
  return (
    <div>
      <PageBanner
        kicker="What We Offer"
        title="Our Educational Services"
        intro="Personalised programmes and admissions guidance across international and Singapore local pathways."
      />

      <section className="section-pad">
        <div className="container-x grid gap-7 sm:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 90}>
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection
        title="Not sure where to start?"
        description="Tell us your goals and we’ll recommend the right programme and study plan for your child."
        buttonLabel="Book a Free Trial"
        buttonHref="/contact"
      />
    </div>
  );
}
