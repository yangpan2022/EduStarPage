import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Student Registration",
  description: "Student registration — launching soon from EduStar Academic Centre.",
};

export default function StudentRegistrationPage() {
  return (
    <ComingSoon
      kicker="Student Portal"
      title="Student Registration"
      description="Create your EduStar student account to enrol in courses and track your learning."
    />
  );
}
