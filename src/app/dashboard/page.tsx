import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Student dashboard — launching soon from EduStar Academic Centre.",
};

export default function DashboardPage() {
  return (
    <ComingSoon
      kicker="Student Portal"
      title="Dashboard"
      description="Track your courses, progress, and assignments in one place."
    />
  );
}
