import type { Metadata } from "next";
import UniversityQuiz from "@/components/UniversityQuiz";
import { T } from "@/components/T";
import { PageBanner } from "@/components/sections";

export const metadata: Metadata = {
  title: "University Test",
  description:
    "Take the EduStar University Readiness Quiz to discover which study destinations match your academic profile.",
};

export default function UniversityTestPage() {
  return (
    <div>
      <PageBanner
        kicker={<T en="Resources" zh="学习资源" />}
        title={<T en="University Readiness Quiz" zh="升学准备测评" />}
        intro={
          <T
            en="Answer five quick questions to see which study destinations best match your academic profile and goals."
            zh="回答五个快速问题，看看哪些留学目的地最符合你的学术背景与目标。"
          />
        }
      />
      <section className="section-pad">
        <div className="container-x">
          <UniversityQuiz />
        </div>
      </section>
    </div>
  );
}
