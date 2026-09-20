import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";
import { T } from "@/components/T";

export const metadata: Metadata = {
  title: "Student Registration",
  description: "Student registration — launching soon from EduStar Academic Centre.",
};

export default function StudentRegistrationPage() {
  return (
    <ComingSoon
      kicker={<T en="Student Portal" zh="学生中心" />}
      title={<T en="Student Registration" zh="学生注册" />}
      description={
        <T
          en="Create your EduStar student account to enrol in courses and track your learning."
          zh="创建 EduStar 学生账号，报名课程并跟踪学习进度。"
        />
      }
    />
  );
}
