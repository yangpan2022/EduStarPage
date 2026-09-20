import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import { CtaSection, PageBanner, SectionHeading } from "@/components/sections";

export const metadata: Metadata = {
  title: "International Course",
  description:
    "IBDP, IGCSE, IB MYP/PYP and International A-Levels — world-class tuition that prepares students for global universities.",
};

function CourseBlock({
  title,
  image,
  alt,
  reverse = false,
  children,
}: {
  title: string;
  image: string;
  alt: string;
  reverse?: boolean;
  children: ReactNode;
}) {
  return (
    <Reveal>
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className={reverse ? "lg:order-2" : ""}>
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">{title}</h2>
          <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-navy-2/90 sm:text-base">
            {children}
          </div>
        </div>
        <div className={`overflow-hidden rounded-[16px] shadow-[0_18px_45px_rgba(26,29,79,0.15)] ${reverse ? "lg:order-1" : ""}`}>
          <Image
            src={image}
            alt={alt}
            width={800}
            height={533}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </Reveal>
  );
}

export default function InternationalCoursePage() {
  return (
    <div>
      <PageBanner
        kicker="Global Pathways"
        title="International Courses"
        intro="Edu Star offers world-class programmes in IBDP, IGCSE, IB MYP/PYP, and International A-Levels — designed to prepare students for global universities and lifelong success."
      />

      <section className="section-pad">
        <div className="container-x space-y-20">
          <CourseBlock title="IBDP Programme" image="/images/course-ibdp.jpg" alt="IBDP Programme">
            <p>
              Edu Star’s IBDP programme is designed to help students excel in the rigorous IB
              curriculum. We provide comprehensive support across all subjects, focusing on critical
              thinking, research skills, and in-depth understanding.
            </p>
            <p>
              Our experienced educators guide students through internal assessments, extended
              essays, and exam preparation, ensuring they achieve top scores and secure university
              placements worldwide.
            </p>
          </CourseBlock>

          <CourseBlock
            title="International A-Level Course"
            image="/images/course-alevel.webp"
            alt="International A-Level"
            reverse
          >
            <p>
              We believe every student has the potential to achieve greatness. Our International
              A-Level programme delivers in-depth subject mastery, exam strategy, and critical
              analysis skills.
            </p>
            <p>
              With personalized tutoring and a focus on university readiness, we empower students to
              excel in globally recognized qualifications and gain admission to top institutions
              worldwide.
            </p>
          </CourseBlock>

          <CourseBlock title="IB MYP Course" image="/images/course-myp.jpg" alt="IB MYP">
            <p>
              Edu Star’s MYP course provides a comprehensive curriculum that emphasizes critical
              thinking, inquiry-based learning, and interdisciplinary connections.
            </p>
            <p>
              We prepare students for higher-level studies by nurturing intellectual curiosity and
              academic skills, ensuring they are well-equipped for the challenges of the IB Diploma
              Programme and other advanced educational pathways.
            </p>
          </CourseBlock>

          <div>
            <Reveal>
              <SectionHeading title="IB PYP & IGCSE Programmes" />
            </Reveal>
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <Reveal>
                <article className="flex h-full flex-col overflow-hidden rounded-[16px] bg-white shadow-[0_14px_35px_rgba(26,29,79,0.1)]">
                  <Image
                    src="/images/classroom.jpg"
                    alt="IB PYP"
                    width={800}
                    height={533}
                    className="h-56 w-full object-cover"
                  />
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="text-xl font-bold text-navy">IB PYP Course</h3>
                    <p className="mt-3 flex-1 text-[15px] leading-relaxed text-navy-2/85">
                      Edu Star’s IB PYP course fosters inquiry-based learning for young students,
                      focusing on developing critical thinking, creativity, and a global mindset. Our
                      program nurtures holistic growth, encouraging curiosity and a love for
                      learning, ensuring students build a strong foundation for future academic
                      success in the IB continuum and beyond.
                    </p>
                  </div>
                </article>
              </Reveal>
              <Reveal delay={120}>
                <article className="flex h-full flex-col overflow-hidden rounded-[16px] bg-white shadow-[0_14px_35px_rgba(26,29,79,0.1)]">
                  <Image
                    src="/images/course-igcse.jpg"
                    alt="IGCSE"
                    width={800}
                    height={533}
                    className="h-56 w-full object-cover"
                  />
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="text-xl font-bold text-navy">IGCSE Course</h3>
                    <p className="mt-3 flex-1 text-[15px] leading-relaxed text-navy-2/85">
                      Edu Star’s IGCSE course offers a rigorous and internationally recognized
                      curriculum that prepares students for global academic success. With a focus on
                      developing strong foundational knowledge, critical thinking, and
                      problem-solving skills, our program ensures students are well-prepared for
                      A-Level, IB, and other advanced studies, paving the way for university
                      admissions worldwide.
                    </p>
                  </div>
                </article>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Book a Trial Lesson"
        description="Experience Edu Star’s world-class international curriculum with a personalized trial lesson. Whether you’re starting PYP, preparing for IGCSE, or aiming for IBDP excellence — we’re here to guide your journey to global success."
        buttonLabel="WhatsApp Us"
        buttonHref="https://wa.me/6588582378"
      />
    </div>
  );
}
