import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import {
  CtaSection,
  PageBanner,
  SectionHeading,
  ServiceCard,
  StatBanner,
  TestimonialCard,
} from "@/components/sections";
import {
  FaChartLine,
  FaComments,
  FaFileAlt,
  FaGlobeAsia,
  FaGraduationCap,
  FaUniversity,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "University Admission",
  description:
    "End-to-end university admissions consulting — strategy, personal statements, interview prep, and scholarship support.",
};

const services = [
  {
    icon: <FaUniversity aria-hidden />,
    title: "University Strategy & Shortlisting",
    description:
      "We help students identify the right-fit universities based on academic profile, interests, career goals, and location preferences — both in Singapore and globally.",
  },
  {
    icon: <FaFileAlt aria-hidden />,
    title: "Personal Statement & Essays",
    description:
      "Expert guidance in crafting compelling, authentic personal statements and supplemental essays that reflect your unique voice and strengths.",
  },
  {
    icon: <FaComments aria-hidden />,
    title: "Interview Preparation",
    description:
      "Mock interviews with real-time feedback for top universities, including Oxbridge, Ivy League, NUS, NTU, and more — tailored to your chosen course.",
  },
  {
    icon: <FaGraduationCap aria-hidden />,
    title: "Application Timeline Management",
    description:
      "Structured roadmap with deadlines, document checklists, and milestone tracking to ensure a seamless and stress-free application process.",
  },
  {
    icon: <FaGlobeAsia aria-hidden />,
    title: "Overseas & Scholarship Support",
    description:
      "Comprehensive guidance for international applications, including visa advice, scholarship applications, and country-specific requirements.",
  },
  {
    icon: <FaChartLine aria-hidden />,
    title: "Academic Profile Enhancement",
    description:
      "Recommendations for ECAs, projects, and courses to strengthen your profile before and during the application cycle.",
  },
];

const successStories = [
  {
    quote:
      "Edu Star helped me craft a personal statement that truly reflected my passion for biomedical engineering. I was accepted to NTU with a scholarship!",
    name: "Jasmine T.",
    meta: "HCI | Offer: NTU",
  },
  {
    quote:
      "Their interview prep was intense but incredibly effective. I walked into my SMU interview feeling confident — and got the offer!",
    name: "Ryan L.",
    meta: "RI | Offer: SMU",
  },
  {
    quote:
      "I was unsure about my university choices, but my consultant helped me shortlist 8 perfect-fit schools. Got into 6, including NUS Medicine!",
    name: "Mei Ling C.",
    meta: "ASRJC | Offer: NUS Yong Loo Lin School of Medicine",
  },
];

export default function UniversityAdmissionPage() {
  return (
    <div>
      <PageBanner
        kicker="Admissions Consulting"
        title="Our Consulting Services"
        intro="From profile building to interview success — end-to-end guidance for Singapore and overseas university applications."
      />

      <section className="section-pad">
        <div className="container-x">
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={(index % 3) * 90}>
                <ServiceCard {...service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <StatBanner
        title="Proven Results"
        stats={[
          { value: "94%", label: "Accepted to Top-Tier Universities" },
          { value: "50+", label: "Students into NUS/NTU/SMU" },
          { value: "35+", label: "Into Global Top 50 Universities" },
          { value: "100%", label: "On-Time Application Submission" },
        ]}
      />

      <section className="section-pad bg-mist">
        <div className="container-x">
          <Reveal>
            <SectionHeading title="Student Success Stories" />
          </Reveal>
          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {successStories.map((story, index) => (
              <Reveal key={story.name} delay={index * 90}>
                <TestimonialCard {...story} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Start Your University Journey Today"
        description="Whether you’re aiming for NUS, NTU, Ivy League, Oxbridge, or top global universities — our MOE-registered team is here to guide you every step of the way."
        buttonLabel="Book a Free Consultation"
        buttonHref="https://wa.me/6588582378"
      />
    </div>
  );
}
