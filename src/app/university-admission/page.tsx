import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { T } from "@/components/T";
import {
  CtaSection,
  PageBanner,
  SectionHeading,
  ServiceCard,
  StatBanner,
  TestimonialCard,
} from "@/components/sections";
import {
  FaChartLine,
  FaComments,
  FaFileAlt,
  FaGlobeAsia,
  FaGraduationCap,
  FaUniversity,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "University Admission",
  description:
    "End-to-end university admissions consulting — strategy, personal statements, interview prep, and scholarship support.",
};

const services = [
  {
    icon: <FaUniversity aria-hidden />,
    titleEn: "University Strategy & Shortlisting",
    titleZh: "大学策略与选校",
    descriptionEn:
      "We help students identify the right-fit universities based on academic profile, interests, career goals, and location preferences — both in Singapore and globally.",
    descriptionZh:
      "我们根据学生的学术背景、兴趣、职业目标与地域偏好，帮助其筛选出最匹配的大学 —— 覆盖新加坡与全球。",
  },
  {
    icon: <FaFileAlt aria-hidden />,
    titleEn: "Personal Statement & Essays",
    titleZh: "个人陈述与文书",
    descriptionEn:
      "Expert guidance in crafting compelling, authentic personal statements and supplemental essays that reflect your unique voice and strengths.",
    descriptionZh:
      "专业指导撰写有说服力、真实的个人陈述与补充文书，展现你独特的声音与优势。",
  },
  {
    icon: <FaComments aria-hidden />,
    titleEn: "Interview Preparation",
    titleZh: "面试准备",
    descriptionEn:
      "Mock interviews with real-time feedback for top universities, including Oxbridge, Ivy League, NUS, NTU, and more — tailored to your chosen course.",
    descriptionZh:
      "针对牛津剑桥、常春藤、NUS、NTU 等顶尖大学的模拟面试与即时反馈，并根据你的目标专业量身定制。",
  },
  {
    icon: <FaGraduationCap aria-hidden />,
    titleEn: "Application Timeline Management",
    titleZh: "申请时间线管理",
    descriptionEn:
      "Structured roadmap with deadlines, document checklists, and milestone tracking to ensure a seamless and stress-free application process.",
    descriptionZh:
      "提供包含截止日期、材料清单与节点跟踪的结构化路线图，确保申请过程顺畅、无压力。",
  },
  {
    icon: <FaGlobeAsia aria-hidden />,
    titleEn: "Overseas & Scholarship Support",
    titleZh: "海外与奖学金支持",
    descriptionEn:
      "Comprehensive guidance for international applications, including visa advice, scholarship applications, and country-specific requirements.",
    descriptionZh:
      "为国际申请提供全面指导，包括签证建议、奖学金申请与各国具体要求。",
  },
  {
    icon: <FaChartLine aria-hidden />,
    titleEn: "Academic Profile Enhancement",
    titleZh: "学术背景提升",
    descriptionEn:
      "Recommendations for ECAs, projects, and courses to strengthen your profile before and during the application cycle.",
    descriptionZh: "就课外活动、项目与课程提供建议，在申请前后强化你的个人背景。",
  },
];

const successStories = [
  {
    name: "Jasmine T.",
    metaEn: "HCI | Offer: NTU",
    metaZh: "HCI | 录取：NTU",
    quoteEn:
      "Edu Star helped me craft a personal statement that truly reflected my passion for biomedical engineering. I was accepted to NTU with a scholarship!",
    quoteZh: "Edu Star 帮我写出了一篇真正体现我热忱的个人陈述。我拿到了 NTU 的录取和奖学金！",
  },
  {
    name: "Ryan L.",
    metaEn: "RI | Offer: SMU",
    metaZh: "RI | 录取：SMU",
    quoteEn:
      "Their interview prep was intense but incredibly effective. I walked into my SMU interview feeling confident — and got the offer!",
    quoteZh: "他们的面试辅导强度很高但非常有效。我自信地走进 SMU 面试，并拿到了录取！",
  },
  {
    name: "Mei Ling C.",
    metaEn: "ASRJC | Offer: NUS Yong Loo Lin School of Medicine",
    metaZh: "ASRJC | 录取：NUS 杨潞龄医学院",
    quoteEn:
      "I was unsure about my university choices, but my consultant helped me shortlist 8 perfect-fit schools. Got into 6, including NUS Medicine!",
    quoteZh:
      "我原本对选校十分迷茫，顾问帮我筛选出 8 所高度匹配的学校。我拿到了 6 所录取，包括 NUS 医学！",
  },
];

export default function UniversityAdmissionPage() {
  return (
    <div>
      <PageBanner
        kicker={<T en="Admissions Consulting" zh="申请咨询" />}
        title={<T en="Our Consulting Services" zh="我们的咨询服务" />}
        intro={
          <T
            en="From profile building to interview success — end-to-end guidance for Singapore and overseas university applications."
            zh="从背景提升到面试成功 —— 为新加坡及海外大学申请提供全程指导。"
          />
        }
      />

      <section className="section-pad">
        <div className="container-x">
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.titleEn} delay={(index % 3) * 90}>
                <ServiceCard
                  icon={service.icon}
                  title={<T en={service.titleEn} zh={service.titleZh} />}
                  description={<T en={service.descriptionEn} zh={service.descriptionZh} />}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <StatBanner
        title={<T en="Proven Results" zh="卓著成果" />}
        stats={[
          {
            value: "94%",
            label: <T en="Accepted to Top-Tier Universities" zh="进入顶尖大学" />,
          },
          {
            value: "50+",
            label: <T en="Students into NUS/NTU/SMU" zh="学生进入 NUS/NTU/SMU" />,
          },
          {
            value: "35+",
            label: <T en="Into Global Top 50 Universities" zh="进入全球前 50 大学" />,
          },
          {
            value: "100%",
            label: <T en="On-Time Application Submission" zh="按时提交申请" />,
          },
        ]}
      />

      <section className="section-pad bg-mist">
        <div className="container-x">
          <Reveal>
            <SectionHeading title={<T en="Student Success Stories" zh="学员成功故事" />} />
          </Reveal>
          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {successStories.map((story, index) => (
              <Reveal key={story.name} delay={index * 90}>
                <TestimonialCard
                  quote={<T en={story.quoteEn} zh={story.quoteZh} />}
                  name={story.name}
                  meta={<T en={story.metaEn} zh={story.metaZh} />}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title={<T en="Start Your University Journey Today" zh="今天开启你的大学之旅" />}
        description={
          <T
            en="Whether you’re aiming for NUS, NTU, Ivy League, Oxbridge, or top global universities — our MOE-registered team is here to guide you every step of the way."
            zh="无论你的目标是 NUS、NTU、常春藤、牛津剑桥，还是全球顶尖大学 —— 我们 MOE 注册团队都会一路为你引路。"
          />
        }
        buttonLabel={<T en="Book a Free Consultation" zh="预约免费咨询" />}
        buttonHref="https://wa.me/6588582378"
      />
    </div>
  );
}
