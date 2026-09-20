import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import { T } from "@/components/T";
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
  title: ReactNode;
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
        <div
          className={`overflow-hidden rounded-[16px] shadow-[0_18px_45px_rgba(26,29,79,0.15)] ${
            reverse ? "lg:order-1" : ""
          }`}
        >
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
        kicker={<T en="Global Pathways" zh="全球升学路径" />}
        title={<T en="International Courses" zh="国际课程" />}
        intro={
          <T
            en="Edu Star offers world-class programmes in IBDP, IGCSE, IB MYP/PYP, and International A-Levels — designed to prepare students for global universities and lifelong success."
            zh="Edu Star 提供 IBDP、IGCSE、IB MYP/PYP 与国际 A-Level 等世界一流课程，帮助学生升入全球名校并实现终身成功。"
          />
        }
      />

      <section className="section-pad">
        <div className="container-x space-y-20">
          <CourseBlock
            title={<T en="IBDP Programme" zh="IBDP 课程" />}
            image="/images/course-ibdp.jpg"
            alt="IBDP Programme"
          >
            <p>
              <T
                en="Edu Star’s IBDP programme is designed to help students excel in the rigorous IB curriculum. We provide comprehensive support across all subjects, focusing on critical thinking, research skills, and in-depth understanding."
                zh="Edu Star 的 IBDP 课程旨在帮助学生在严谨的 IB 课程中脱颖而出。我们为各学科提供全面支持，注重批判性思维、研究能力与深入理解。"
              />
            </p>
            <p>
              <T
                en="Our experienced educators guide students through internal assessments, extended essays, and exam preparation, ensuring they achieve top scores and secure university placements worldwide."
                zh="经验丰富的教师全程指导学生完成内部评估、拓展论文与考试准备，帮助他们取得优异成绩并进入世界各地的理想大学。"
              />
            </p>
          </CourseBlock>

          <CourseBlock
            title={<T en="International A-Level Course" zh="国际 A-Level 课程" />}
            image="/images/course-alevel.webp"
            alt="International A-Level"
            reverse
          >
            <p>
              <T
                en="We believe every student has the potential to achieve greatness. Our International A-Level programme delivers in-depth subject mastery, exam strategy, and critical analysis skills."
                zh="我们相信每位学生都有成就卓越的潜力。我们的国际 A-Level 课程提供深入的学科掌握、应试策略与批判性分析能力训练。"
              />
            </p>
            <p>
              <T
                en="With personalized tutoring and a focus on university readiness, we empower students to excel in globally recognized qualifications and gain admission to top institutions worldwide."
                zh="通过个性化辅导与以升学为导向的培养，我们帮助学生在全球认可的资格中表现出色，进入世界顶尖院校。"
              />
            </p>
          </CourseBlock>

          <CourseBlock
            title={<T en="IB MYP Course" zh="IB MYP 课程" />}
            image="/images/course-myp.jpg"
            alt="IB MYP"
          >
            <p>
              <T
                en="Edu Star’s MYP course provides a comprehensive curriculum that emphasizes critical thinking, inquiry-based learning, and interdisciplinary connections."
                zh="Edu Star 的 MYP 课程提供全面的课程体系，强调批判性思维、探究式学习与跨学科联系。"
              />
            </p>
            <p>
              <T
                en="We prepare students for higher-level studies by nurturing intellectual curiosity and academic skills, ensuring they are well-equipped for the challenges of the IB Diploma Programme and other advanced educational pathways."
                zh="我们通过培养求知欲与学术能力，为学生的高阶学习做好准备，使他们能够从容应对 IB 文凭课程及其他进阶学习路径的挑战。"
              />
            </p>
          </CourseBlock>

          <div>
            <Reveal>
              <SectionHeading
                title={<T en="IB PYP & IGCSE Programmes" zh="IB PYP 与 IGCSE 课程" />}
              />
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
                    <h3 className="text-xl font-bold text-navy">
                      <T en="IB PYP Course" zh="IB PYP 课程" />
                    </h3>
                    <p className="mt-3 flex-1 text-[15px] leading-relaxed text-navy-2/85">
                      <T
                        en="Edu Star’s IB PYP course fosters inquiry-based learning for young students, focusing on developing critical thinking, creativity, and a global mindset. Our program nurtures holistic growth, encouraging curiosity and a love for learning, ensuring students build a strong foundation for future academic success in the IB continuum and beyond."
                        zh="Edu Star 的 IB PYP 课程面向低龄学生，培养探究式学习，注重发展批判性思维、创造力与全球视野。课程促进全面发展，激发好奇心与学习热情，为学生未来在 IB 体系及更广阔领域的学业成功打下坚实基础。"
                      />
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
                    <h3 className="text-xl font-bold text-navy">
                      <T en="IGCSE Course" zh="IGCSE 课程" />
                    </h3>
                    <p className="mt-3 flex-1 text-[15px] leading-relaxed text-navy-2/85">
                      <T
                        en="Edu Star’s IGCSE course offers a rigorous and internationally recognized curriculum that prepares students for global academic success. With a focus on developing strong foundational knowledge, critical thinking, and problem-solving skills, our program ensures students are well-prepared for A-Level, IB, and other advanced studies, paving the way for university admissions worldwide."
                        zh="Edu Star 的 IGCSE 课程采用严谨且国际认可的课程体系，为学生取得全球化学业成功做准备。课程注重夯实基础知识、培养批判性思维与问题解决能力，确保学生为 A-Level、IB 及其他高阶学习做好充分准备，为全球大学申请铺平道路。"
                      />
                    </p>
                  </div>
                </article>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title={<T en="Book a Trial Lesson" zh="预约试听课" />}
        description={
          <T
            en="Experience Edu Star’s world-class international curriculum with a personalized trial lesson. Whether you’re starting PYP, preparing for IGCSE, or aiming for IBDP excellence — we’re here to guide your journey to global success."
            zh="通过个性化试听课，体验 Edu Star 世界一流的国际课程。无论你正要开始 PYP、备考 IGCSE，还是志在 IBDP 卓越 —— 我们都会陪伴你走向全球化的成功。"
          />
        }
        buttonLabel={<T en="WhatsApp Us" zh="WhatsApp 联系我们" />}
        buttonHref="https://wa.me/6588582378"
      />
    </div>
  );
}
