import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { T } from "@/components/T";
import { CtaSection, PageBanner, ServiceCard } from "@/components/sections";
import { FaGlobeAsia, FaGraduationCap, FaSchool, FaUserGraduate } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Services",
  description:
    "International and Singapore government course tuition, university admission consulting, and primary/secondary school admission support.",
};

const services = [
  {
    icon: <FaGlobeAsia aria-hidden />,
    titleEn: "International Courses",
    titleZh: "国际课程",
    descriptionEn:
      "IBDP, IGCSE, IB MYP/PYP & International A-Levels — globally recognized programmes with expert tuition and university pathway support.",
    descriptionZh:
      "IBDP、IGCSE、IB MYP/PYP 与国际 A-Level —— 全球认可的课程，配备专业教学与升学路径支持。",
    href: "/internationalcourse",
  },
  {
    icon: <FaSchool aria-hidden />,
    titleEn: "Singapore Government Courses",
    titleZh: "新加坡政府学校课程",
    descriptionEn:
      "MOE-aligned PSLE, O-Level & A-Level tuition with proven exam strategies and personalized academic support.",
    descriptionZh:
      "紧扣 MOE 大纲的 PSLE、O-Level 与 A-Level 辅导，提供经检验的应试策略与个性化支持。",
    href: "/singaporegovernmentcourses",
  },
  {
    icon: <FaGraduationCap aria-hidden />,
    titleEn: "University Admission Consulting",
    titleZh: "大学申请咨询",
    descriptionEn:
      "End-to-end guidance for Singapore & overseas universities — from profile building to interview success.",
    descriptionZh: "面向新加坡及海外大学的全程指导 —— 从背景提升到面试成功。",
    href: "/university-admission",
  },
  {
    icon: <FaUserGraduate aria-hidden />,
    titleEn: "Primary & Secondary School Admission",
    titleZh: "中小学入学",
    descriptionEn:
      "Expert P1 registration, AEIS prep, school shortlisting & interview coaching for Singapore schools.",
    descriptionZh: "专业的 P1 注册、AEIS 备考、择校与面试辅导，助你入读新加坡学校。",
    href: "/primary-secondary-school-admission",
  },
];

export default function ServicesPage() {
  return (
    <div>
      <PageBanner
        kicker={<T en="What We Offer" zh="我们的服务" />}
        title={<T en="Our Educational Services" zh="我们的教育服务" />}
        intro={
          <T
            en="Personalised programmes and admissions guidance across international and Singapore local pathways."
            zh="提供国际课程与新加坡本地升学路径的个性化课程与申请指导。"
          />
        }
      />

      <section className="section-pad">
        <div className="container-x grid gap-7 sm:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.titleEn} delay={index * 90}>
              <ServiceCard
                icon={service.icon}
                href={service.href}
                title={<T en={service.titleEn} zh={service.titleZh} />}
                description={<T en={service.descriptionEn} zh={service.descriptionZh} />}
                linkLabel={<T en="Learn More" zh="了解更多" />}
              />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection
        title={<T en="Not sure where to start?" zh="不知从何开始？" />}
        description={
          <T
            en="Tell us your goals and we’ll recommend the right programme and study plan for your child."
            zh="告诉我们你的目标，我们会为你的孩子推荐合适的课程与学习计划。"
          />
        }
        buttonLabel={<T en="Book a Free Trial" zh="预约免费试听" />}
        buttonHref="/contact"
      />
    </div>
  );
}
