import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Questionbank",
  description:
    "Curated question banks for primary, secondary, and IB students — launching soon from EduStar Academic Centre.",
};

export default function QuestionbankPage() {
  return (
    <ComingSoon
      kicker="Practice Makes Progress"
      title="Questionbank"
      description="Curated practice questions across primary, secondary, and IB levels — designed to build mastery step by step."
    />
  );
}
