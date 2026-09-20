import type { Metadata } from "next";
import UniversityQuiz from "@/components/UniversityQuiz";
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
        kicker="Resources"
        title="University Readiness Quiz"
        intro="Answer five quick questions to see which study destinations best match your academic profile and goals."
      />
      <section className="section-pad">
        <div className="container-x">
          <UniversityQuiz />
        </div>
      </section>
    </div>
  );
}
