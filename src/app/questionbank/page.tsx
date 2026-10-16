import type { Metadata } from "next";
import Link from "next/link";
import type { IconType } from "react-icons";
import { FaChild, FaFlask, FaGraduationCap } from "react-icons/fa";
import { PageBanner, SectionHeading } from "@/components/sections";
import { T } from "@/components/T";

export const metadata: Metadata = {
  title: "Questionbank",
  description:
    "Choose from EduStar question banks for primary, secondary, and IB students.",
};

const questionbanks: {
  titleEn: string;
  titleZh: string;
  descriptionEn: string;
  descriptionZh: string;
  Icon: IconType;
  href?: string;
}[] = [
  {
    titleEn: "Primary School",
    titleZh: "小学题库",
    descriptionEn:
      "PSLE-format practice questions and worked solutions for primary school students.",
    descriptionZh: "面向小学生的 PSLE 题型练习与详细解答。",
    Icon: FaChild,
  },
  {
    titleEn: "Secondary School",
    titleZh: "中学题库",
    descriptionEn:
      "O-Level and IP practice questions with exam-style drills and detailed explanations.",
    descriptionZh: "O-Level 与 IP 练习题，含考试题型训练与详细解析。",
    Icon: FaGraduationCap,
  },
  {
    titleEn: "IB Questionbank",
    titleZh: "IB 题库",
    descriptionEn:
      "Open the IB question bank from the EduStar campus network. Off-campus visitors will see access guidance.",
    descriptionZh: "从 EduStar 校园内网进入 IB 题库；非局域网用户将看到访问说明。",
    Icon: FaFlask,
    href: "/questionbank/ib",
  },
];

export default function QuestionbankPage() {
  return (
    <div>
      <PageBanner
        kicker={<T en="Practice Makes Progress" zh="勤练出真知" />}
        title={<T en="Choose a Questionbank" zh="选择题库" />}
        intro={
          <T
            en="Choose a study level below. The IB question bank is available now on the EduStar campus network; more question banks are being prepared."
            zh="请在下方选择学习阶段。IB 题库现已在 EduStar 校园内网开放，其他题库正在筹备中。"
          />
        }
      />

      <section className="section-pad">
        <div className="container-x">
          <SectionHeading
            title={<T en="Questionbanks" zh="题库分类" />}
            subtitle={
              <T
                en="The choices match the Questionbank menu in the site navigation."
                zh="以下选项与网站导航栏中的题库菜单保持一致。"
              />
            }
          />

          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {questionbanks.map((questionbank) => (
              <article
                key={questionbank.titleEn}
                className="group flex h-full flex-col rounded-[18px] border-t-4 border-accent bg-white p-8 shadow-[0_10px_30px_rgba(26,29,79,0.07)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(26,29,79,0.14)]"
              >
                <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-mist text-2xl text-accent transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110">
                  <questionbank.Icon aria-hidden />
                </span>
                <h2 className="text-xl font-bold text-navy">
                  <T en={questionbank.titleEn} zh={questionbank.titleZh} />
                </h2>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-navy-2/85">
                  <T en={questionbank.descriptionEn} zh={questionbank.descriptionZh} />
                </p>

                {questionbank.href ? (
                  <Link
                    href={questionbank.href}
                    className="btn-shine mt-7 inline-flex w-fit items-center rounded-pill bg-gradient-to-br from-accent to-accent-bright px-6 py-3 text-sm font-bold text-white shadow-[0_8px_24px_rgba(249,167,30,0.3)] transition-transform hover:-translate-y-0.5"
                  >
                    <T en="Open IB Questionbank" zh="进入 IB 题库" />
                  </Link>
                ) : (
                  <p className="mt-7 w-fit rounded-pill bg-accent/15 px-4 py-2 text-sm font-bold text-accent">
                    <T en="Coming Soon" zh="即将上线" />
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
