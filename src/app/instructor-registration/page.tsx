import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";
import { T } from "@/components/T";

export const metadata: Metadata = {
  title: "Instructor Registration",
  description: "Instructor registration — launching soon from EduStar Academic Centre.",
};

export default function InstructorRegistrationPage() {
  return (
    <ComingSoon
      kicker={<T en="Teaching Team" zh="教师团队" />}
      title={<T en="Instructor Registration" zh="教师注册" />}
      description={
        <T
          en="Join EduStar as an instructor and share your expertise with students worldwide."
          zh="加入 EduStar 成为讲师，与全球学生分享你的专业所长。"
        />
      }
    />
  );
}
