import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Instructor Registration",
  description: "Instructor registration — launching soon from EduStar Academic Centre.",
};

export default function InstructorRegistrationPage() {
  return (
    <ComingSoon
      kicker="Teaching Team"
      title="Instructor Registration"
      description="Join EduStar as an instructor and share your expertise with students worldwide."
    />
  );
}
