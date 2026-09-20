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
import { FaBookOpen, FaComments, FaFileAlt, FaLaptop, FaSchool, FaUserGraduate } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Primary/Secondary School Admission",
  description:
    "Expert P1 registration guidance, AEIS/S-AEIS preparation, school shortlisting, and interview coaching for Singapore schools.",
};

const services = [
  {
    icon: <FaUserGraduate aria-hidden />,
    titleEn: "Primary 1 Registration Guidance",
    titleZh: "小一（P1）注册指导",
    descriptionEn:
      "Expert support navigating Singapore’s P1 registration phases, balloting procedures, and school selection based on home address, affiliation, and strategic planning.",
    descriptionZh:
      "专业协助你应对新加坡 P1 注册各阶段、抽签流程，并根据住址、关联关系与策略规划进行择校。",
  },
  {
    icon: <FaBookOpen aria-hidden />,
    titleEn: "AEIS / S-AEIS Preparation",
    titleZh: "AEIS / S-AEIS 备考",
    descriptionEn:
      "Comprehensive coaching for international students aiming to enter Singapore government schools through AEIS (Admissions Exercise for International Students) or S-AEIS exams.",
    descriptionZh:
      "为希望通过 AEIS（国际学生入学考试）或 S-AEIS 考试进入新加坡政府学校的国际学生提供全面辅导。",
  },
  {
    icon: <FaLaptop aria-hidden />,
    titleEn: "English & Math Mastery",
    titleZh: "英语与数学精进",
    descriptionEn:
      "MOE-aligned tuition in English and Mathematics to build strong foundations and excel in admission tests, with focus on PSLE-format questions and critical thinking.",
    descriptionZh:
      "紧扣 MOE 大纲的英语与数学辅导，夯实基础并在入学考试中脱颖而出，注重 PSLE 题型与批判性思维。",
  },
  {
    icon: <FaSchool aria-hidden />,
    titleEn: "School Shortlisting & Strategy",
    titleZh: "择校与策略",
    descriptionEn:
      "Personalized advice on choosing the right primary or secondary school based on academic fit, CCAs, location, cut-off points (COPs), and future pathways (e.g., IP, Express).",
    descriptionZh:
      "根据学术匹配度、课外活动（CCA）、位置、录取分数线（COP）与未来路径（如 IP、快捷课程），提供个性化的中小学择校建议。",
  },
  {
    icon: <FaComments aria-hidden />,
    titleEn: "Interview & Assessment Prep",
    titleZh: "面试与评估准备",
    descriptionEn:
      "Mock interviews, group activity simulations, and portfolio guidance for schools that require interviews or supplementary assessments (e.g., SAP schools, niche programs).",
    descriptionZh:
      "针对需要面试或补充评估的学校（如特选学校、特色项目），提供模拟面试、小组活动演练与作品集指导。",
  },
  {
    icon: <FaFileAlt aria-hidden />,
    titleEn: "Document & Application Support",
    titleZh: "材料与申请支持",
    descriptionEn:
      "End-to-end assistance with application forms, document verification, eligibility checks, and submission deadlines for both local and international students.",
    descriptionZh:
      "为本地与国际学生提供全程协助，包括申请表格、材料核验、资格审核与提交截止日期管理。",
  },
];

const feedback = [
  {
    name: "Mrs. Lim",
    metaEn: "Parent of P1 Student | 2024",
    metaZh: "P1 学生家长 | 2024",
    quoteEn:
      "Edu Star guided us through the confusing P1 registration process. Their phase-by-phase strategy helped us secure a place in our ideal neighborhood school!",
    quoteZh:
      "Edu Star 指导我们走过了令人困惑的 P1 注册流程。他们分阶段的策略帮助我们在理想的邻里学校获得了学位！",
  },
  {
    name: "Mrs. Chen",
    metaEn: "AEIS 2023 | Placed in Dunman High",
    metaZh: "AEIS 2023 | 入读德明政府中学",
    quoteEn:
      "My son passed AEIS on his first attempt after 3 months of focused prep. The mock interviews and math drills made all the difference.",
    quoteZh:
      "我的儿子在三个月集中备考后首次参加 AEIS 就通过了。模拟面试与数学专项训练带来了关键的不同。",
  },
  {
    name: "Mr. Zhang",
    metaEn: "Parent of Sec 1 Student | 2024",
    metaZh: "中一学生家长 | 2024",
    quoteEn:
      "We were overwhelmed by secondary school options. Edu Star helped us shortlist 5 perfect-fit schools — and my daughter got into her first choice!",
    quoteZh:
      "中学选择让我们不知所措。Edu Star 帮我们筛选出 5 所高度匹配的学校 —— 我的女儿进入了第一志愿！",
  },
];

export default function PrimarySecondaryAdmissionPage() {
  return (
    <div>
      <PageBanner
        kicker={<T en="School Admissions" zh="学校入学" />}
        title={
          <T
            en="Primary & Secondary School Admission Services"
            zh="中小学入学服务"
          />
        }
        intro={
          <T
            en="Trusted, personalised admission support for P1 registration, AEIS, and secondary school entry in Singapore."
            zh="为新加坡的 P1 注册、AEIS 与中学入学提供值得信赖的个性化支持。"
          />
        }
      />

      <section className="section-pad">
        <div className="container-x grid gap-7 md:grid-cols-2 lg:grid-cols-3">
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
      </section>

      <StatBanner
        title={<T en="Our Admission Success" zh="我们的入学成果" />}
        stats={[
          { value: "92%", label: <T en="AEIS Pass Rate (2023–2024)" zh="AEIS 通过率（2023–2024）" /> },
          {
            value: "40+",
            label: <T en="Students into Top Primary Schools" zh="学生进入顶尖小学" />,
          },
          { value: "30+", label: <T en="Into Elite Secondary Schools" zh="进入精英中学" /> },
          {
            value: "100%",
            label: <T en="P1 Registration Completed On Time" zh="P1 注册按时完成" />,
          },
        ]}
      />

      <section className="section-pad bg-mist">
        <div className="container-x">
          <Reveal>
            <SectionHeading title={<T en="Parent & Student Feedback" zh="家长与学员反馈" />} />
          </Reveal>
          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {feedback.map((item, index) => (
              <Reveal key={item.name} delay={index * 90}>
                <TestimonialCard
                  quote={<T en={item.quoteEn} zh={item.quoteZh} />}
                  name={item.name}
                  meta={<T en={item.metaEn} zh={item.metaZh} />}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title={<T en="Secure Your Child’s Place in a Top School" zh="为孩子锁定名校学位" />}
        description={
          <T
            en="As an MOE-registered education centre, Edu Star offers trusted, personalized admission support for Primary 1 registration, AEIS, and secondary school entry in Singapore."
            zh="作为 MOE 注册教育中心，Edu Star 为新加坡的小一注册、AEIS 与中学入学提供值得信赖的个性化支持。"
          />
        }
        buttonLabel={<T en="Book a Free Consultation" zh="预约免费咨询" />}
        buttonHref="https://wa.me/6588582378"
      />
    </div>
  );
}
