import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "IB Questionbank",
  description: "IB question bank — launching soon from EduStar Academic Centre.",
};

export default function IbQuestionbankPage() {
  return (
    <ComingSoon
      kicker="Questionbank"
      title="IB Questionbank"
      description="IB MYP and DP practice questions across subjects, aligned to the IB assessment style."
    />
  );
}
