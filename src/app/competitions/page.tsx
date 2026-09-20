import type { Metadata } from "next";
import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import { T } from "@/components/T";
import { CtaSection, PageBanner } from "@/components/sections";

export const metadata: Metadata = {
  title: "Competitions",
  description:
    "AMC 8, AMC 10, AMC 12, UKMT SMC, UKMT JMC and SASMO — math competitions EduStar prepares students for.",
};

const competitions: { name: string; bodyEn: ReactNode; bodyZh: ReactNode; href: string }[] = [
  {
    name: "AMC 8",
    bodyEn: (
      <>
        The <strong>AMC 8 (American Mathematics Competition 8)</strong> is a mathematics contest for
        middle school students, typically in grades 8 and below. It aims to promote the development
        of problem-solving skills and foster an interest in mathematics. The competition consists of
        25 multiple-choice questions to be completed in 40 minutes. The problems range in
        difficulty, challenging students’ logical reasoning and creative thinking. The AMC 8 is an
        excellent opportunity for students to gain experience in competitive math and prepare for
        more advanced contests like the AMC 10 and AMC 12.
      </>
    ),
    bodyZh: (
      <>
        <strong>AMC 8（美国数学竞赛 8）</strong>
        面向初中生，通常为八年级及以下学生。它旨在促进学生解决问题能力的发展，并培养对数学的兴趣。竞赛包含
        25 道选择题，需在 40 分钟内完成。题目难度不一，考验学生的逻辑推理与创造性思维。AMC 8
        是学生积累竞赛数学经验、为 AMC 10 与 AMC 12 等更高阶竞赛做准备的绝佳机会。
      </>
    ),
    href: "https://artofproblemsolving.com/wiki/index.php/AMC_8_Problems_and_Solutions",
  },
  {
    name: "AMC 10",
    bodyEn: (
      <>
        The <strong>AMC 10 (American Mathematics Competition 10)</strong> is a prestigious math
        contest for high school students in grade 10 or below and under 17.5 years of age. It
        consists of 25 multiple-choice questions to be completed in 75 minutes, covering topics such
        as algebra, geometry, number theory, and probability. The problems vary in difficulty,
        aiming to challenge students’ problem-solving and analytical skills. The AMC 10 serves as a
        stepping stone for students aspiring to participate in more advanced competitions, like the
        AIME (American Invitational Mathematics Examination) and the USA Mathematical Olympiad.
      </>
    ),
    bodyZh: (
      <>
        <strong>AMC 10（美国数学竞赛 10）</strong>
        是面向十年级及以下、年龄未满 17.5 岁高中生的知名数学竞赛。竞赛包含 25
        道选择题，需在 75 分钟内完成，涵盖代数、几何、数论与概率等主题。题目难度各异，旨在考验学生的问题解决与分析能力。AMC
        10 是志在参加更高阶竞赛（如 AIME 美国数学邀请赛与美国数学奥林匹克）的学生的进阶踏板。
      </>
    ),
    href: "https://artofproblemsolving.com/wiki/index.php/AMC_10_Problems_and_Solutions",
  },
  {
    name: "AMC 12",
    bodyEn: (
      <>
        The <strong>AMC 12 (American Mathematics Competition 12)</strong> is a math contest designed
        for high school students in grade 12 or below and under 19.5 years of age. It features 25
        multiple-choice questions, to be completed in 75 minutes, covering advanced topics in high
        school mathematics, including algebra, geometry, trigonometry, and precalculus. The AMC 12
        challenges students’ critical thinking and problem-solving skills. High scorers on the AMC 12
        may qualify for the AIME (American Invitational Mathematics Examination) and progress
        further in the path toward the prestigious USA Mathematical Olympiad (USAMO).
      </>
    ),
    bodyZh: (
      <>
        <strong>AMC 12（美国数学竞赛 12）</strong>
        面向十二年级及以下、年龄未满 19.5 岁的高中生。竞赛包含 25
        道选择题，需在 75 分钟内完成，涵盖高中数学的进阶主题，包括代数、几何、三角与微积分预备。AMC
        12 考验学生的批判性思维与问题解决能力。成绩优异者有机会晋级 AIME（美国数学邀请赛），并进一步迈向享誉盛名的美国数学奥林匹克（USAMO）。
      </>
    ),
    href: "https://artofproblemsolving.com/wiki/index.php/AMC_12_Problems_and_Solutions",
  },
  {
    name: "UKMT SMC",
    bodyEn: (
      <>
        The <strong>UKMT Senior Mathematical Challenge (SMC)</strong> is a nationwide math
        competition in the UK, organized by the United Kingdom Mathematics Trust (UKMT). Aimed at
        students aged 16-19, the SMC consists of 25 multiple-choice questions to be completed in 90
        minutes. The problems cover a range of mathematical topics, including algebra, geometry, and
        number theory, designed to test students’ problem-solving and logical thinking skills.
        High-performing students in the SMC may qualify for follow-up rounds, such as the British
        Mathematical Olympiad (BMO) and other prestigious international competitions.
      </>
    ),
    bodyZh: (
      <>
        <strong>UKMT 高级数学挑战赛（SMC）</strong>
        是英国全国性的数学竞赛，由英国数学信托（UKMT）主办。面向 16–19 岁的学生，SMC 包含 25
        道选择题，需在 90
        分钟内完成。题目涵盖代数、几何与数论等多类数学主题，旨在检验学生的问题解决与逻辑思维能力。表现优异者可晋级后续轮次，如英国数学奥林匹克（BMO）及其他知名国际竞赛。
      </>
    ),
    href: "https://ukmt.org.uk/wp-content/uploads/2024/10/SMC_Solutions_and_Investigations_2024_web_version__final_.pdf",
  },
  {
    name: "UKMT JMC",
    bodyEn: (
      <>
        The <strong>UKMT Junior Mathematical Challenge (JMC)</strong> is a math competition organized
        by the United Kingdom Mathematics Trust (UKMT) for students aged 11-13, typically in Years 7
        and 8. The JMC consists of 25 multiple-choice questions to be answered within 60 minutes,
        covering a range of mathematical topics including number theory, geometry, and logic.
        Designed to promote problem-solving skills and a love for mathematics, the challenge
        encourages students to think creatively and apply their knowledge in novel ways. High scorers
        may be invited to participate in the subsequent rounds, such as the Junior Mathematical
        Olympiad (JMO).
      </>
    ),
    bodyZh: (
      <>
        <strong>UKMT 初级数学挑战赛（JMC）</strong>
        由英国数学信托（UKMT）主办，面向 11–13 岁、通常为七至八年级的学生。JMC 包含 25
        道选择题，需在 60
        分钟内作答，涵盖数论、几何与逻辑等多类数学主题。该挑战赛旨在提升问题解决能力并激发对数学的热爱，鼓励学生创造性地思考，并以新颖的方式运用所学。高分者可能受邀参加后续轮次，如初级数学奥林匹克（JMO）。
      </>
    ),
    href: "https://ukmt.org.uk/wp-content/uploads/2024/04/JMC-2024-Extended-Solutions-1.pdf",
  },
  {
    name: "SASMO",
    bodyEn: (
      <>
        The <strong>Singapore and Asian Schools Math Olympiad (SASMO)</strong> is an annual math
        competition designed for students from Grade 1 to Grade 12. SASMO aims to stretch students’
        mathematical skills by presenting challenging problems that require creative problem-solving
        and analytical thinking. The competition covers various math topics, including arithmetic,
        geometry, number theory, and algebra, tailored to different age groups. SASMO encourages
        students to explore beyond the typical school curriculum, promoting an appreciation for math
        and preparing them for more advanced international competitions.
      </>
    ),
    bodyZh: (
      <>
        <strong>新加坡与亚洲学校数学奥林匹克（SASMO）</strong>
        是一年一度的数学竞赛，面向一至十二年级学生。SASMO
        通过提出需要创造性解题与分析性思考的挑战性题目，拓展学生的数学能力。竞赛针对不同年龄段，涵盖算术、几何、数论与代数等多类主题。SASMO
        鼓励学生跳出常规课程进行探索，培养对数学的欣赏，并为更高阶的国际竞赛做好准备。
      </>
    ),
    href: "https://sasmo.sg/",
  },
];

export default function CompetitionsPage() {
  return (
    <div>
      <PageBanner
        kicker={<T en="Challenge Yourself" zh="挑战自我" />}
        title={<T en="Competitions" zh="竞赛" />}
        intro={
          <T
            en="Competitive mathematics programmes that build problem-solving skills and prepare students for the world stage."
            zh="培养问题解决能力、助力学生登上世界舞台的竞赛数学项目。"
          />
        }
      />

      <section className="section-pad">
        <div className="container-x grid gap-7 md:grid-cols-2">
          {competitions.map((competition, index) => (
            <Reveal key={competition.name} delay={(index % 2) * 90}>
              <article className="flex h-full flex-col rounded-[18px] border-t-4 border-accent bg-white p-8 shadow-[0_10px_30px_rgba(26,29,79,0.07)]">
                <h2 className="text-2xl font-bold text-navy">{competition.name}</h2>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-navy-2/90">
                  <strong className="text-navy">
                    <T en="Brief introduction: " zh="简介：" />
                  </strong>
                  <T en={competition.bodyEn} zh={competition.bodyZh} />
                </p>
                <a
                  href={competition.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-fit rounded-pill bg-accent px-6 py-3 text-sm font-bold text-navy transition-all hover:scale-[1.04] hover:bg-[#e6950c] hover:text-white"
                >
                  <T en="Learn More" zh="了解更多" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection
        title={<T en="Train with EduStar" zh="与 EduStar 一起训练" />}
        description={
          <T
            en="Our in-house Singapore Math programme and international league deliver world-class training, competitions, and curriculum innovation."
            zh="我们自研的新加坡数学课程与国际联盟，提供世界一流的培训、竞赛与课程创新。"
          />
        }
        buttonLabel={<T en="Book a Free Trial" zh="预约免费试听" />}
        buttonHref="/contact"
      />
    </div>
  );
}
