import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { CtaSection, PageBanner } from "@/components/sections";

export const metadata: Metadata = {
  title: "Competitions",
  description:
    "AMC 8, AMC 10, AMC 12, UKMT SMC, UKMT JMC and SASMO — math competitions EduStar prepares students for.",
};

const competitions = [
  {
    name: "AMC 8",
    body: (
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
    href: "https://artofproblemsolving.com/wiki/index.php/AMC_8_Problems_and_Solutions",
  },
  {
    name: "AMC 10",
    body: (
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
    href: "https://artofproblemsolving.com/wiki/index.php/AMC_10_Problems_and_Solutions",
  },
  {
    name: "AMC 12",
    body: (
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
    href: "https://artofproblemsolving.com/wiki/index.php/AMC_12_Problems_and_Solutions",
  },
  {
    name: "UKMT SMC",
    body: (
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
    href: "https://ukmt.org.uk/wp-content/uploads/2024/10/SMC_Solutions_and_Investigations_2024_web_version__final_.pdf",
  },
  {
    name: "UKMT JMC",
    body: (
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
    href: "https://ukmt.org.uk/wp-content/uploads/2024/04/JMC-2024-Extended-Solutions-1.pdf",
  },
  {
    name: "SASMO",
    body: (
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
    href: "https://sasmo.sg/",
  },
];

export default function CompetitionsPage() {
  return (
    <div>
      <PageBanner
        kicker="Challenge Yourself"
        title="Competitions"
        intro="Competitive mathematics programmes that build problem-solving skills and prepare students for the world stage."
      />

      <section className="section-pad">
        <div className="container-x grid gap-7 md:grid-cols-2">
          {competitions.map((competition, index) => (
            <Reveal key={competition.name} delay={(index % 2) * 90}>
              <article className="flex h-full flex-col rounded-[18px] border-t-4 border-accent bg-white p-8 shadow-[0_10px_30px_rgba(26,29,79,0.07)]">
                <h2 className="text-2xl font-bold text-navy">{competition.name}</h2>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-navy-2/90">
                  <strong className="text-navy">Brief introduction: </strong>
                  {competition.body}
                </p>
                <a
                  href={competition.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex w-fit rounded-pill bg-accent px-6 py-3 text-sm font-bold text-navy transition-all hover:scale-[1.04] hover:bg-[#e6950c] hover:text-white"
                >
                  Learn More
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection
        title="Train with EduStar"
        description="Our in-house Singapore Math programme and international league deliver world-class training, competitions, and curriculum innovation."
        buttonLabel="Book a Free Trial"
        buttonHref="/contact"
      />
    </div>
  );
}
