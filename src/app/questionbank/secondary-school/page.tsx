import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";
import { T } from "@/components/T";

export const metadata: Metadata = {
  title: "Secondary School Questionbank",
  description: "Secondary school question bank — launching soon from EduStar Academic Centre.",
};

export default function SecondarySchoolQuestionbankPage() {
  return (
    <ComingSoon
      kicker={<T en="Questionbank" zh="题库" />}
      title={<T en="Secondary School" zh="中学" />}
      description={
        <T
          en="O-Level and IP practice questions with exam-style drills and detailed explanations."
          zh="O-Level 与 IP 练习题，含考试题型训练与详细解析。"
        />
      }
    />
  );
}
