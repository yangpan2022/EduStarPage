import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { PageBanner } from "@/components/sections";
import {
  FaBook,
  FaCalendarAlt,
  FaChevronRight,
  FaClipboardCheck,
  FaTrophy,
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "University fit test, question banks, competitions, and academic calendar — tools to support every student’s journey.",
};

const resources = [
  {
    title: "University Fit Test",
    description:
      "Answer five quick questions to see which study destinations match your academic profile.",
    href: "/university-test",
    Icon: FaClipboardCheck,
    available: true,
  },
  {
    title: "Question Banks",
    description:
      "Curated question banks for primary, secondary, and IB students — coming soon.",
    href: "/questionbank",
    Icon: FaBook,
    available: false,
  },
  {
    title: "Competition",
    description:
      "AMC, UKMT, SASMO and more — explore the competitions we prepare students for.",
    href: "/competitions",
    Icon: FaTrophy,
    available: true,
  },
  {
    title: "Calendar",
    description:
      "Key academic dates, exam windows, and registration deadlines — coming soon.",
    href: "#",
    Icon: FaCalendarAlt,
    available: false,
  },
];

export default function ResourcesPage() {
  return (
    <div>
      <PageBanner
        kicker="Tools & Insights"
        title="Resources"
        intro="Practical tools and curated material to help students plan, practise, and progress."
      />

      <section className="section-pad">
        <div className="container-x grid gap-7 sm:grid-cols-2">
          {resources.map((resource, index) => (
            <Reveal key={resource.title} delay={index * 80}>
              <Link
                href={resource.href}
                className="group flex h-full items-start gap-5 rounded-[18px] border-t-4 border-accent bg-white p-7 shadow-[0_10px_30px_rgba(26,29,79,0.07)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(26,29,79,0.14)]"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-mist text-2xl text-accent transition-transform duration-300 group-hover:scale-110">
                  <resource.Icon aria-hidden />
                </span>
                <span className="flex-1">
                  <span className="flex items-center gap-2">
                    <span className="text-xl font-bold text-navy">{resource.title}</span>
                    {!resource.available && (
                      <span className="rounded-pill bg-accent/15 px-2.5 py-0.5 text-xs font-semibold text-accent">
                        Soon
                      </span>
                    )}
                  </span>
                  <span className="mt-2 block text-[15px] leading-relaxed text-navy-2/85">
                    {resource.description}
                  </span>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                    Explore <FaChevronRight className="h-2.5 w-2.5" aria-hidden />
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
