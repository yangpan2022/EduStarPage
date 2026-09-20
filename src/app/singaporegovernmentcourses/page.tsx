import type { Metadata } from "next";
import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import { T } from "@/components/T";
import { CtaSection, PageBanner } from "@/components/sections";

export const metadata: Metadata = {
  title: "Singapore Government Courses",
  description:
    "MOE-aligned PSLE, O-Level and A-Level tuition that supports students at every stage of Singapore’s local education pathway.",
};

const stages: {
  titleEn: string;
  titleZh: string;
  bodyEn: ReactNode;
  bodyZh: ReactNode;
  supportEn: string;
  supportZh: string;
}[] = [
  {
    titleEn: "Primary School (P1–P6)",
    titleZh: "小学（P1–P6）",
    bodyEn: (
      <p>
        Students build foundational skills in English, Mathematics, Science, and Mother Tongue. At
        the end of Primary 6, they sit for the{" "}
        <strong>Primary School Leaving Examination (PSLE)</strong>, which determines their placement
        into secondary school streams.
      </p>
    ),
    bodyZh: (
      <p>
        学生在英语、数学、科学与母语方面打下基础。小学六年级结束时参加
        <strong>小学离校考试（PSLE）</strong>，该成绩决定其升入中学的课程分流。
      </p>
    ),
    supportEn:
      "MOE-aligned PSLE tuition with targeted practice, exam strategies, and confidence-building for all core subjects.",
    supportZh: "紧扣 MOE 大纲的 PSLE 辅导，针对核心科目提供专项练习、应试策略与信心培养。",
  },
  {
    titleEn: "Secondary School – Express Stream",
    titleZh: "中学 —— 快捷课程",
    bodyEn: (
      <p>
        Based on PSLE results, students enter the <strong>Express stream</strong>, a 4-year programme
        leading to the <strong>Singapore-Cambridge GCE O-Level</strong> examinations. The curriculum
        emphasizes academic rigor across English, Mathematics, Sciences, and Humanities.
      </p>
    ),
    bodyZh: (
      <p>
        根据 PSLE 成绩，学生进入<strong>快捷课程</strong>，这是为期四年的课程，最终参加
        <strong>新加坡剑桥 GCE O-Level</strong>
        考试。课程强调英语、数学、科学与人文等学科的学术严谨性。
      </p>
    ),
    supportEn:
      "Subject mastery and exam-focused strategies to help students excel in O-Level subjects and build strong academic foundations.",
    supportZh:
      "注重学科掌握与应试策略，帮助学生在 O-Level 各科取得优异成绩，并打下扎实的学术基础。",
  },
  {
    titleEn: "Singapore GCE O-Level",
    titleZh: "新加坡 GCE O-Level",
    bodyEn: (
      <p>
        Taken at the end of Secondary 4, the O-Level exams determine eligibility for post-secondary
        institutions such as Junior Colleges (JC), Polytechnics, or ITE. Strong performance opens
        pathways to university through the A-Level route or direct Polytechnic diplomas.
      </p>
    ),
    bodyZh: (
      <p>
        O-Level 考试在中学四年级末举行，决定学生能否进入初级学院（JC）、理工学院或 ITE
        等后中学学府。成绩优异者可通过 A-Level 路径或理工学院文凭升入大学。
      </p>
    ),
    supportEn:
      "Comprehensive O-Level preparation with past-year paper drills, key concept reinforcement, and exam technique training.",
    supportZh: "全面的 O-Level 备考，包括历年真题训练、核心概念巩固与应试技巧培训。",
  },
  {
    titleEn: "Singapore GCE A-Level",
    titleZh: "新加坡 GCE A-Level",
    bodyEn: (
      <p>
        A 2-year pre-university programme taken in Junior Colleges, the{" "}
        <strong>Singapore-Cambridge GCE A-Level</strong> is highly regarded by local and
        international universities. Students typically take 3–4 H2 subjects, 1 H1 subject, General
        Paper (GP), and Project Work (PW).
      </p>
    ),
    bodyZh: (
      <p>
        这是初级学院为期两年的大学预备课程，<strong>新加坡剑桥 GCE A-Level</strong>
        深受本地与国际大学认可。学生通常修读 3–4 门 H2 科目、1 门 H1 科目、通用论文（GP）与专题作业（PW）。
      </p>
    ),
    supportEn:
      "Expert A-Level tuition with in-depth content coverage, critical thinking development, and rigorous exam preparation to achieve top grades.",
    supportZh:
      "专业的 A-Level 辅导，深入覆盖课程内容，培养批判性思维，并提供严谨的备考训练以取得优异成绩。",
  },
];

export default function SingaporeGovernmentCoursesPage() {
  return (
    <div>
      <PageBanner
        kicker={<T en="Local Pathways" zh="本地升学路径" />}
        title={<T en="Singapore’s Local Educational Pathway" zh="新加坡本地教育路径" />}
        intro={
          <T
            en="From PSLE to A-Levels — structured, exam-focused support at every milestone of the MOE system."
            zh="从 PSLE 到 A-Level —— 在 MOE 体系的每个里程碑提供结构化、以考试为重点的支持。"
          />
        }
      />

      <section className="section-pad">
        <div className="container-x space-y-7">
          {stages.map((stage, index) => (
            <Reveal key={stage.titleEn} delay={index * 80}>
              <article className="relative rounded-[16px] border-l-4 border-accent bg-white py-8 pl-20 pr-8 shadow-[0_12px_32px_rgba(26,29,79,0.08)] sm:pl-24">
                <span className="absolute left-6 top-8 flex h-11 w-11 items-center justify-center rounded-full bg-accent text-lg font-extrabold text-navy">
                  {index + 1}
                </span>
                <h3 className="text-xl font-bold text-navy sm:text-2xl">
                  <T en={stage.titleEn} zh={stage.titleZh} />
                </h3>
                <div className="mt-3 text-[15px] leading-relaxed text-navy-2/90">
                  <T en={stage.bodyEn} zh={stage.bodyZh} />
                </div>
                <p className="mt-5 rounded-xl bg-mist px-5 py-4 text-[15px] text-navy-2">
                  <strong className="text-navy">
                    <T en="Edu Star Support: " zh="Edu Star 支持：" />
                  </strong>
                  <T en={stage.supportEn} zh={stage.supportZh} />
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection
        title={<T en="Master Each Stage with Edu Star" zh="与 Edu Star 一起攻克每个阶段" />}
        description={
          <T
            en="As an MOE-registered education centre, we provide personalized, exam-focused tuition for PSLE, O-Level, and A-Level — helping students build strong foundations and achieve top results at every milestone."
            zh="作为 MOE 注册教育中心，我们为 PSLE、O-Level 与 A-Level 提供个性化、以考试为重点的辅导，帮助学生在每个里程碑打好基础并取得优异成绩。"
          />
        }
        buttonLabel={<T en="WhatsApp Us" zh="WhatsApp 联系我们" />}
        buttonHref="https://wa.me/6588582378"
      />
    </div>
  );
}
