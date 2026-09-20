import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";
import { T } from "@/components/T";

export const metadata: Metadata = {
  title: "IB Questionbank",
  description: "IB question bank — launching soon from EduStar Academic Centre.",
};

export default function IbQuestionbankPage() {
  return (
    <ComingSoon
      kicker={<T en="Questionbank" zh="题库" />}
      title={<T en="IB Questionbank" zh="IB 题库" />}
      description={
        <T
          en="IB MYP and DP practice questions across subjects, aligned to the IB assessment style."
          zh="涵盖 IB MYP 与 DP 各学科的练习题，贴合 IB 评估风格。"
        />
      }
    />
  );
}
