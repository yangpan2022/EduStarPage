import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";
import { T } from "@/components/T";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Student dashboard — launching soon from EduStar Academic Centre.",
};

export default function DashboardPage() {
  return (
    <ComingSoon
      kicker={<T en="Student Portal" zh="学生中心" />}
      title={<T en="Dashboard" zh="学习控制台" />}
      description={
        <T
          en="Track your courses, progress, and assignments in one place."
          zh="在一处查看课程、学习进度与作业。"
        />
      }
    />
  );
}
