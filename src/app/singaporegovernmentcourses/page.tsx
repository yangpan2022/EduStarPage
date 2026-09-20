import type { Metadata } from "next";
import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import { CtaSection, PageBanner } from "@/components/sections";

export const metadata: Metadata = {
  title: "Singapore Government Courses",
  description:
    "MOE-aligned PSLE, O-Level and A-Level tuition that supports students at every stage of Singapore’s local education pathway.",
};

const stages: { title: string; body: ReactNode; support: string }[] = [
  {
    title: "Primary School (P1–P6)",
    body: (
      <p>
        Students build foundational skills in English, Mathematics, Science, and Mother Tongue. At
        the end of Primary 6, they sit for the{" "}
        <strong>Primary School Leaving Examination (PSLE)</strong>, which determines their placement
        into secondary school streams.
      </p>
    ),
    support:
      "MOE-aligned PSLE tuition with targeted practice, exam strategies, and confidence-building for all core subjects.",
  },
  {
    title: "Secondary School – Express Stream",
    body: (
      <p>
        Based on PSLE results, students enter the <strong>Express stream</strong>, a 4-year programme
        leading to the <strong>Singapore-Cambridge GCE O-Level</strong> examinations. The curriculum
        emphasizes academic rigor across English, Mathematics, Sciences, and Humanities.
      </p>
    ),
    support:
      "Subject mastery and exam-focused strategies to help students excel in O-Level subjects and build strong academic foundations.",
  },
  {
    title: "Singapore GCE O-Level",
    body: (
      <p>
        Taken at the end of Secondary 4, the O-Level exams determine eligibility for post-secondary
        institutions such as Junior Colleges (JC), Polytechnics, or ITE. Strong performance opens
        pathways to university through the A-Level route or direct Polytechnic diplomas.
      </p>
    ),
    support:
      "Comprehensive O-Level preparation with past-year paper drills, key concept reinforcement, and exam technique training.",
  },
  {
    title: "Singapore GCE A-Level",
    body: (
      <p>
        A 2-year pre-university programme taken in Junior Colleges, the{" "}
        <strong>Singapore-Cambridge GCE A-Level</strong> is highly regarded by local and
        international universities. Students typically take 3–4 H2 subjects, 1 H1 subject, General
        Paper (GP), and Project Work (PW).
      </p>
    ),
    support:
      "Expert A-Level tuition with in-depth content coverage, critical thinking development, and rigorous exam preparation to achieve top grades.",
  },
];

export default function SingaporeGovernmentCoursesPage() {
  return (
    <div>
      <PageBanner
        kicker="Local Pathways"
        title="Singapore’s Local Educational Pathway"
        intro="From PSLE to A-Levels — structured, exam-focused support at every milestone of the MOE system."
      />

      <section className="section-pad">
        <div className="container-x space-y-7">
          {stages.map((stage, index) => (
            <Reveal key={stage.title} delay={index * 80}>
              <article className="relative rounded-[16px] border-l-4 border-accent bg-white py-8 pl-20 pr-8 shadow-[0_12px_32px_rgba(26,29,79,0.08)] sm:pl-24">
                <span className="absolute left-6 top-8 flex h-11 w-11 items-center justify-center rounded-full bg-accent text-lg font-extrabold text-navy">
                  {index + 1}
                </span>
                <h3 className="text-xl font-bold text-navy sm:text-2xl">{stage.title}</h3>
                <div className="mt-3 text-[15px] leading-relaxed text-navy-2/90">{stage.body}</div>
                <p className="mt-5 rounded-xl bg-mist px-5 py-4 text-[15px] text-navy-2">
                  <strong className="text-navy">Edu Star Support: </strong>
                  {stage.support}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection
        title="Master Each Stage with Edu Star"
        description="As an MOE-registered education centre, we provide personalized, exam-focused tuition for PSLE, O-Level, and A-Level — helping students build strong foundations and achieve top results at every milestone."
        buttonLabel="WhatsApp Us"
        buttonHref="https://wa.me/6588582378"
      />
    </div>
  );
}
