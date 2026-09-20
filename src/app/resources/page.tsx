import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { T } from "@/components/T";
import { PageBanner } from "@/components/sections";
import { FaBook, FaCalendarAlt, FaChevronRight, FaClipboardCheck, FaTrophy } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "University fit test, question banks, competitions, and academic calendar — tools to support every student’s journey.",
};

const resources = [
  {
    titleEn: "University Fit Test",
    titleZh: "升学匹配测评",
    descriptionEn:
      "Answer five quick questions to see which study destinations match your academic profile.",
    descriptionZh: "回答五个快速问题，看看哪些留学目的地与你的学术背景匹配。",
    href: "/university-test",
    Icon: FaClipboardCheck,
    available: true,
  },
  {
    titleEn: "Question Banks",
    titleZh: "题库",
    descriptionEn: "Curated question banks for primary, secondary, and IB students — coming soon.",
    descriptionZh: "面向小学、中学与 IB 学生的精选题库 —— 即将上线。",
    href: "/questionbank",
    Icon: FaBook,
    available: false,
  },
  {
    titleEn: "Competition",
    titleZh: "竞赛",
    descriptionEn: "AMC, UKMT, SASMO and more — explore the competitions we prepare students for.",
    descriptionZh: "AMC、UKMT、SASMO 等 —— 了解我们为学生准备的竞赛。",
    href: "/competitions",
    Icon: FaTrophy,
    available: true,
  },
  {
    titleEn: "Calendar",
    titleZh: "学术日历",
    descriptionEn:
      "Key academic dates, exam windows, and registration deadlines — coming soon.",
    descriptionZh: "重要学术日期、考试时间与报名截止 —— 即将上线。",
    href: "#",
    Icon: FaCalendarAlt,
    available: false,
  },
];

export default function ResourcesPage() {
  return (
    <div>
      <PageBanner
        kicker={<T en="Tools & Insights" zh="工具与洞察" />}
        title={<T en="Resources" zh="学习资源" />}
        intro={
          <T
            en="Practical tools and curated material to help students plan, practise, and progress."
            zh="帮助学生规划、练习与进步的实用工具与精选资料。"
          />
        }
      />

      <section className="section-pad">
        <div className="container-x grid gap-7 sm:grid-cols-2">
          {resources.map((resource, index) => (
            <Reveal key={resource.titleEn} delay={index * 80}>
              <Link
                href={resource.href}
                className="group flex h-full items-start gap-5 rounded-[18px] border-t-4 border-accent bg-white p-7 shadow-[0_10px_30px_rgba(26,29,79,0.07)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(26,29,79,0.14)]"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-mist text-2xl text-accent transition-transform duration-300 group-hover:scale-110">
                  <resource.Icon aria-hidden />
                </span>
                <span className="flex-1">
                  <span className="flex items-center gap-2">
                    <span className="text-xl font-bold text-navy">
                      <T en={resource.titleEn} zh={resource.titleZh} />
                    </span>
                    {!resource.available && (
                      <span className="rounded-pill bg-accent/15 px-2.5 py-0.5 text-xs font-semibold text-accent">
                        <T en="Soon" zh="即将上线" />
                      </span>
                    )}
                  </span>
                  <span className="mt-2 block text-[15px] leading-relaxed text-navy-2/85">
                    <T en={resource.descriptionEn} zh={resource.descriptionZh} />
                  </span>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                    <T en="Explore" zh="查看" /> <FaChevronRight className="h-2.5 w-2.5" aria-hidden />
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
