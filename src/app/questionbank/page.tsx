import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";
import { T } from "@/components/T";

export const metadata: Metadata = {
  title: "Questionbank",
  description:
    "Curated question banks for primary, secondary, and IB students — launching soon from EduStar Academic Centre.",
};

export default function QuestionbankPage() {
  return (
    <ComingSoon
      kicker={<T en="Practice Makes Progress" zh="勤练出真知" />}
      title={<T en="Questionbank" zh="题库" />}
      description={
        <T
          en="Curated practice questions across primary, secondary, and IB levels — designed to build mastery step by step."
          zh="涵盖小学、中学与 IB 的精选练习题，帮助你循序渐进地掌握知识。"
        />
      }
    />
  );
}
