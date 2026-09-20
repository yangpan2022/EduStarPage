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
  FaBookOpen,
  FaComments,
  FaFileAlt,
  FaLaptop,
  FaSchool,
  FaUserGraduate,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Primary/Secondary School Admission",
  description:
    "Expert P1 registration guidance, AEIS/S-AEIS preparation, school shortlisting, and interview coaching for Singapore schools.",
};

const services = [
  {
    icon: <FaUserGraduate aria-hidden />,
    title: "Primary 1 Registration Guidance",
    description:
      "Expert support navigating Singapore’s P1 registration phases, balloting procedures, and school selection based on home address, affiliation, and strategic planning.",
  },
  {
    icon: <FaBookOpen aria-hidden />,
    title: "AEIS / S-AEIS Preparation",
    description:
      "Comprehensive coaching for international students aiming to enter Singapore government schools through AEIS (Admissions Exercise for International Students) or S-AEIS exams.",
  },
  {
    icon: <FaLaptop aria-hidden />,
    title: "English & Math Mastery",
    description:
      "MOE-aligned tuition in English and Mathematics to build strong foundations and excel in admission tests, with focus on PSLE-format questions and critical thinking.",
  },
  {
    icon: <FaSchool aria-hidden />,
    title: "School Shortlisting & Strategy",
    description:
      "Personalized advice on choosing the right primary or secondary school based on academic fit, CCAs, location, cut-off points (COPs), and future pathways (e.g., IP, Express).",
  },
  {
    icon: <FaComments aria-hidden />,
    title: "Interview & Assessment Prep",
    description:
      "Mock interviews, group activity simulations, and portfolio guidance for schools that require interviews or supplementary assessments (e.g., SAP schools, niche programs).",
  },
  {
    icon: <FaFileAlt aria-hidden />,
    title: "Document & Application Support",
    description:
      "End-to-end assistance with application forms, document verification, eligibility checks, and submission deadlines for both local and international students.",
  },
];

const feedback = [
  {
    quote:
      "Edu Star guided us through the confusing P1 registration process. Their phase-by-phase strategy helped us secure a place in our ideal neighborhood school!",
    name: "Mrs. Lim",
    meta: "Parent of P1 Student | 2024",
  },
  {
    quote:
      "My son passed AEIS on his first attempt after 3 months of focused prep. The mock interviews and math drills made all the difference.",
    name: "Mrs. Chen",
    meta: "AEIS 2023 | Placed in Dunman High",
  },
  {
    quote:
      "We were overwhelmed by secondary school options. Edu Star helped us shortlist 5 perfect-fit schools — and my daughter got into her first choice!",
    name: "Mr. Zhang",
    meta: "Parent of Sec 1 Student | 2024",
  },
];

export default function PrimarySecondaryAdmissionPage() {
  return (
    <div>
      <PageBanner
        kicker="School Admissions"
        title="Primary & Secondary School Admission Services"
        intro="Trusted, personalised admission support for P1 registration, AEIS, and secondary school entry in Singapore."
      />

      <section className="section-pad">
        <div className="container-x grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={(index % 3) * 90}>
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </section>

      <StatBanner
        title="Our Admission Success"
        stats={[
          { value: "92%", label: "AEIS Pass Rate (2023–2024)" },
          { value: "40+", label: "Students into Top Primary Schools" },
          { value: "30+", label: "Into Elite Secondary Schools" },
          { value: "100%", label: "P1 Registration Completed On Time" },
        ]}
      />

      <section className="section-pad bg-mist">
        <div className="container-x">
          <Reveal>
            <SectionHeading title="Parent & Student Feedback" />
          </Reveal>
          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {feedback.map((item, index) => (
              <Reveal key={item.name} delay={index * 90}>
                <TestimonialCard {...item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Secure Your Child’s Place in a Top School"
        description="As an MOE-registered education centre, Edu Star offers trusted, personalized admission support for Primary 1 registration, AEIS, and secondary school entry in Singapore."
        buttonLabel="Book a Free Consultation"
        buttonHref="https://wa.me/6588582378"
      />
    </div>
  );
}
