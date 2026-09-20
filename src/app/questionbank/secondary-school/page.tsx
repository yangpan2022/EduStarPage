import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Secondary School Questionbank",
  description: "Secondary school question bank — launching soon from EduStar Academic Centre.",
};

export default function SecondarySchoolQuestionbankPage() {
  return (
    <ComingSoon
      kicker="Questionbank"
      title="Secondary School"
      description="O-Level and IP practice questions with exam-style drills and detailed explanations."
    />
  );
}
