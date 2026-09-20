import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Primary School Questionbank",
  description: "Primary school question bank — launching soon from EduStar Academic Centre.",
};

export default function PrimarySchoolQuestionbankPage() {
  return (
    <ComingSoon
      kicker="Questionbank"
      title="Primary School"
      description="PSLE-format practice questions and worked solutions for primary school students."
    />
  );
}
