import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import TrialForm from "@/components/TrialForm";
import { PageBanner, SectionHeading } from "@/components/sections";
import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact EduStar Academic Centre at 190 Middle Road, #15-06 Fortune Centre, Singapore 188979. Book your free trial lesson today.",
};

const details = [
  {
    Icon: FaMapMarkerAlt,
    label: "Location",
    lines: site.addressLines,
  },
  {
    Icon: FaPhoneAlt,
    label: "Phone",
    lines: [site.phone, "WhatsApp / WeChat available"],
  },
  {
    Icon: FaEnvelope,
    label: "Email",
    lines: [site.emailAlt],
  },
  {
    Icon: FaClock,
    label: "Operating Hours",
    lines: ["Monday - Sunday: 9:00 AM - 9:00 PM"],
  },
];

export default function ContactPage() {
  return (
    <div>
      <PageBanner
        kicker="Contact"
        title="Get In Touch With Us"
        intro="Ready to start your academic journey? Contact us today to book your free trial lesson."
      />

      <section className="section-pad">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="grid h-full gap-6 rounded-[18px] bg-navy px-8 py-10 text-white sm:grid-cols-2 lg:grid-cols-1">
              {details.map(({ Icon, label, lines }) => (
                <div key={label} className="flex gap-4">
                  <Icon className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden />
                  <div>
                    <p className="font-semibold text-accent">{label}</p>
                    {lines.map((line) => (
                      <p key={line} className="text-sm text-white/85">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="mb-6 text-center text-2xl font-bold text-navy lg:text-left">
              Book A Free Trial Lesson
            </h2>
            <TrialForm />
          </Reveal>
        </div>
      </section>

      {/* Location */}
      <section className="section-pad bg-mist">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              title="Our Location"
              subtitle="190 Middle Road, #15-06 Fortune Centre Singapore 188979"
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-10 grid items-center gap-8 lg:grid-cols-[1fr_1.4fr]">
              <div className="text-center lg:text-left">
                <p className="text-2xl font-bold text-navy">7 Minutes Walk from Bugis MRT</p>
                <p className="mt-2 text-tertiary">(East-West &amp; Downtown Line)</p>
                <a
                  href="https://maps.google.com/?q=190+Middle+Road+Fortune+Centre+Singapore+188979"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex rounded-pill bg-accent px-6 py-3 text-sm font-bold text-navy transition hover:bg-[#e6950c] hover:text-white"
                >
                  Open in Google Maps
                </a>
              </div>
              <div className="overflow-hidden rounded-[18px] shadow-[0_18px_45px_rgba(26,29,79,0.14)]">
                <iframe
                  title="EduStar Academic Centre location map"
                  src={site.mapEmbed}
                  className="h-[360px] w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Decorative banner */}
      <section className="relative h-56 overflow-hidden">
        <Image src="/images/campus.jpg" alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-navy/60" aria-hidden />
      </section>
    </div>
  );
}
