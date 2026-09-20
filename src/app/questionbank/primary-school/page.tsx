import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";
import { T } from "@/components/T";

export const metadata: Metadata = {
  title: "Primary School Questionbank",
  description: "Primary school question bank — launching soon from EduStar Academic Centre.",
};

export default function PrimarySchoolQuestionbankPage() {
  return (
    <ComingSoon
      kicker={<T en="Questionbank" zh="题库" />}
      title={<T en="Primary School" zh="小学" />}
      description={
        <T
          en="PSLE-format practice questions and worked solutions for primary school students."
          zh="面向小学生的 PSLE 题型练习与详细解答。"
        />
      }
    />
  );
}
