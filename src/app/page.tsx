import Image from "next/image";
import Link from "next/link";
import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";
import TrialForm from "@/components/TrialForm";
import { SectionHeading, ServiceCard } from "@/components/sections";
import {
  FaClock,
  FaEnvelope,
  FaGlobeAsia,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaSchool,
  FaUserGraduate,
} from "react-icons/fa";
import { site } from "@/lib/site";

const services = [
  {
    icon: <FaGlobeAsia aria-hidden />,
    title: "International Courses",
    description:
      "IBDP, IGCSE, IB MYP/PYP & International A-Levels — globally recognized programmes with expert tuition and university pathway support.",
    href: "/internationalcourse",
  },
  {
    icon: <FaSchool aria-hidden />,
    title: "Singapore Government Courses",
    description:
      "MOE-aligned PSLE, O-Level & A-Level tuition with proven exam strategies and personalized academic support.",
    href: "/singaporegovernmentcourses",
  },
  {
    icon: <FaGraduationCap aria-hidden />,
    title: "University Admission Consulting",
    description:
      "End-to-end guidance for Singapore & overseas universities — from profile building to interview success.",
    href: "/university-admission",
  },
  {
    icon: <FaUserGraduate aria-hidden />,
    title: "Primary & Secondary School Admission",
    description:
      "Expert P1 registration, AEIS prep, school shortlisting & interview coaching for Singapore schools.",
    href: "/primary-secondary-school-admission",
  },
];

const stats = [
  { value: 10, label: "Years of Expertise" },
  { value: 300, label: "Active Student Enrollment" },
  { value: 95, label: "% Student Satisfaction Rate", suffix: "%" },
];

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative bg-mist">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 top-0 h-[520px] w-[520px] rounded-full bg-accent/10 blur-3xl"
        />
        <div className="container-x relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <Reveal>
              <span className="inline-flex items-center rounded-pill border border-accent/40 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                MOE Registered Education Centre
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 text-4xl font-bold leading-[1.15] text-navy sm:text-5xl lg:text-[3.35rem]">
                Shaping Futures,{" "}
                <span className="text-accent">One Student at a Time</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-2/85 sm:text-lg">
                Our mission is to be a leading provider of educational services in Singapore and
                beyond. We are dedicated to helping students achieve their academic goals through
                personalized guidance and innovative teaching approaches, preparing them for future
                educational and career success.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="btn-shine whitespace-nowrap rounded-lg bg-accent px-6 py-3.5 text-lg font-semibold text-white shadow-[0_4px_14px_rgba(249,167,30,0.35)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(249,167,30,0.45)]"
                >
                  Book A Free Trial
                </Link>
                <Link
                  href="/services"
                  className="whitespace-nowrap rounded-lg border-2 border-accent px-6 py-3.5 text-lg font-semibold text-accent transition-colors hover:bg-accent/10"
                >
                  Explore Courses
                </Link>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd>
                      <Counter
                        value={stat.value}
                        suffix={stat.suffix ?? ""}
                        className="block text-3xl font-extrabold text-navy sm:text-4xl"
                      />
                      <span className="mt-1 block text-xs font-medium text-tertiary sm:text-sm">
                        {stat.label}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative">
            <div className="relative overflow-hidden rounded-[24px] shadow-[0_25px_60px_rgba(26,29,79,0.22)]">
              <Image
                src="/images/hero-students.png"
                alt="Students learning in classroom"
                width={1024}
                height={571}
                priority
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-5 shadow-xl sm:block">
              <p className="text-2xl font-extrabold text-navy">15+</p>
              <p className="text-xs font-medium text-tertiary">Teaching Experts</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              title="Our Educational Services"
              subtitle="Personalised programmes and admissions guidance across international and Singapore local pathways."
            />
          </Reveal>
          <div className="mt-14 grid gap-7 sm:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 90}>
                <ServiceCard {...service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-pad bg-mist">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              title="Get In Touch With Us"
              subtitle="Ready to start your academic journey? Contact us today to book your free trial lesson."
            />
          </Reveal>

          <div className="mt-14 grid gap-10 lg:grid-cols-2">
            <Reveal>
              <div className="grid gap-6 rounded-[18px] bg-navy px-8 py-10 text-white sm:grid-cols-2 lg:grid-cols-1">
                <div className="flex gap-4">
                  <FaMapMarkerAlt className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden />
                  <div>
                    <p className="font-semibold text-accent">Location</p>
                    {site.addressLines.map((line) => (
                      <p key={line} className="text-sm text-white/85">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <FaPhoneAlt className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden />
                  <div>
                    <p className="font-semibold text-accent">Phone</p>
                    <p className="text-sm text-white/85">{site.phone}</p>
                    <p className="text-sm text-white/70">WhatsApp / WeChat available</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <FaEnvelope className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden />
                  <div>
                    <p className="font-semibold text-accent">Email</p>
                    <a
                      href={`mailto:${site.email}`}
                      className="text-sm text-white/85 hover:text-accent"
                    >
                      {site.email}
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <FaClock className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden />
                  <div>
                    <p className="font-semibold text-accent">Operating Hours</p>
                    <p className="text-sm text-white/85">Monday - Sunday: 9:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <h3 className="mb-6 text-center text-2xl font-bold text-navy lg:text-left">
                Book A Free Trial Lesson
              </h3>
              <TrialForm />
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
