import Image from "next/image";
import Link from "next/link";
import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";
import { T } from "@/components/T";
import TrialForm from "@/components/TrialForm";
import { SectionHeading, ServiceCard } from "@/components/sections";
import {
  FaClock,
  FaEnvelope,
  FaGlobeAsia,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaSchool,
  FaUserGraduate,
} from "react-icons/fa";
import { site } from "@/lib/site";

const services = [
  {
    icon: <FaGlobeAsia aria-hidden />,
    title: "International Courses",
    titleZh: "国际课程",
    description:
      "IBDP, IGCSE, IB MYP/PYP & International A-Levels — globally recognized programmes with expert tuition and university pathway support.",
    descriptionZh:
      "IBDP、IGCSE、IB MYP/PYP 与国际 A-Level —— 全球认可的课程，配备专业教学与升学路径支持。",
    href: "/internationalcourse",
  },
  {
    icon: <FaSchool aria-hidden />,
    title: "Singapore Government Courses",
    titleZh: "新加坡政府学校课程",
    description:
      "MOE-aligned PSLE, O-Level & A-Level tuition with proven exam strategies and personalized academic support.",
    descriptionZh:
      "紧扣 MOE 大纲的 PSLE、O-Level 与 A-Level 辅导，提供经检验的应试策略与个性化支持。",
    href: "/singaporegovernmentcourses",
  },
  {
    icon: <FaGraduationCap aria-hidden />,
    title: "University Admission Consulting",
    titleZh: "大学申请咨询",
    description:
      "End-to-end guidance for Singapore & overseas universities — from profile building to interview success.",
    descriptionZh: "面向新加坡及海外大学的全程指导 —— 从背景提升到面试成功。",
    href: "/university-admission",
  },
  {
    icon: <FaUserGraduate aria-hidden />,
    title: "Primary & Secondary School Admission",
    titleZh: "中小学入学",
    description:
      "Expert P1 registration, AEIS prep, school shortlisting & interview coaching for Singapore schools.",
    descriptionZh: "专业的 P1 注册、AEIS 备考、择校与面试辅导，助你入读新加坡学校。",
    href: "/primary-secondary-school-admission",
  },
];

const stats = [
  { value: 10, en: "Years of Expertise", zh: "行业经验（年）" },
  { value: 300, en: "Active Student Enrollment", zh: "在读学生" },
  { value: 95, en: "Student Satisfaction Rate", zh: "学生满意度", suffix: "%" },
  { value: 15, en: "Teaching Experts", zh: "教学专家" },
];

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative bg-mist">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 top-0 h-[520px] w-[520px] rounded-full bg-accent/10 blur-3xl"
        />
        <div className="container-x relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <Reveal>
              <span className="inline-flex items-center rounded-pill border border-accent/40 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                <T en="MOE Registered Education Centre" zh="MOE 注册教育中心" />
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-4xl font-bold leading-[1.15] text-navy sm:text-5xl lg:text-[3.35rem]">
                <T
                  en={
                    <>
                      Shaping Futures, <span className="text-accent">One Student at a Time</span>
                    </>
                  }
                  zh={
                    <>
                      塑造未来，<span className="text-accent">从每一位学生开始</span>
                    </>
                  }
                />
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-2/85 sm:text-lg">
                <T
                  en="Our mission is to be a leading provider of educational services in Singapore and beyond. We are dedicated to helping students achieve their academic goals through personalized guidance and innovative teaching approaches, preparing them for future educational and career success."
                  zh="我们的使命是成为新加坡及海外领先的教育服务机构。我们通过个性化指导与创新的教学方法，帮助学生实现学业目标，为未来的学业与职业成功做好准备。"
                />
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="btn-shine whitespace-nowrap rounded-lg bg-accent px-6 py-3.5 text-lg font-semibold text-white shadow-[0_4px_14px_rgba(249,167,30,0.35)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(249,167,30,0.45)]"
                >
                  <T en="Book A Free Trial" zh="预约免费试听" />
                </Link>
                <Link
                  href="/services"
                  className="whitespace-nowrap rounded-lg border-2 border-accent px-6 py-3.5 text-lg font-semibold text-accent transition-colors hover:bg-accent/10"
                >
                  <T en="Explore Courses" zh="浏览课程" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <dl className="mt-12 grid max-w-xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.en}>
                    <dt className="sr-only">{stat.en}</dt>
                    <dd>
                      <Counter
                        value={stat.value}
                        suffix={stat.suffix ?? ""}
                        className="block text-3xl font-extrabold text-navy sm:text-4xl"
                      />
                      <span className="mt-1 block text-xs font-medium text-tertiary sm:text-sm">
                        <T en={stat.en} zh={stat.zh} />
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative">
            <div className="relative overflow-hidden rounded-[24px] shadow-[0_25px_60px_rgba(26,29,79,0.22)]">
              <Image
                src="/images/hero-students.png"
                alt="Students learning in classroom"
                width={1024}
                height={571}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              title={<T en="Our Educational Services" zh="我们的教育服务" />}
              subtitle={
                <T
                  en="Personalised programmes and admissions guidance across international and Singapore local pathways."
                  zh="提供国际课程与新加坡本地升学路径的个性化课程与申请指导。"
                />
              }
            />
          </Reveal>
          <div className="mt-14 grid gap-7 sm:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 90}>
                <ServiceCard
                  icon={service.icon}
                  href={service.href}
                  title={<T en={service.title} zh={service.titleZh} />}
                  description={<T en={service.description} zh={service.descriptionZh} />}
                  linkLabel={<T en="Learn More" zh="了解更多" />}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-pad bg-mist">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              title={<T en="Get In Touch With Us" zh="联系我们" />}
              subtitle={
                <T
                  en="Ready to start your academic journey? Contact us today to book your free trial lesson."
                  zh="准备好开启学业旅程了吗？立即联系我们，预约免费试听课。"
                />
              }
            />
          </Reveal>

          <div className="mt-14 grid items-stretch gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="grid h-full content-start gap-6 rounded-[18px] bg-navy px-8 py-10 text-white sm:grid-cols-2 lg:grid-cols-1">
                <div className="flex gap-4">
                  <FaMapMarkerAlt className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden />
                  <div>
                    <p className="font-semibold text-accent">
                      <T en="Location" zh="地址" />
                    </p>
                    {site.addressLines.map((line) => (
                      <p key={line} className="text-sm text-white/85">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <FaPhoneAlt className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden />
                  <div>
                    <p className="font-semibold text-accent">
                      <T en="Phone" zh="电话" />
                    </p>
                    <p className="text-sm text-white/85">{site.phone}</p>
                    <p className="text-sm text-white/70">
                      <T en="WhatsApp / WeChat available" zh="支持 WhatsApp / 微信" />
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <FaEnvelope className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden />
                  <div>
                    <p className="font-semibold text-accent">
                      <T en="Email" zh="邮箱" />
                    </p>
                    <a
                      href={`mailto:${site.email}`}
                      className="text-sm text-white/85 hover:text-accent"
                    >
                      {site.email}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <FaClock className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden />
                  <div>
                    <p className="font-semibold text-accent">
                      <T en="Operating Hours" zh="营业时间" />
                    </p>
                    <p className="text-sm text-white/85">
                      <T en="Monday - Sunday: 9:00 AM - 9:00 PM" zh="周一至周日：上午 9:00 - 晚上 9:00" />
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <TrialForm
                title={<T en="Book A Free Trial Lesson" zh="预约免费试听课" />}
              />
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
