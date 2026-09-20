import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import TrialForm from "@/components/TrialForm";
import { T } from "@/components/T";
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
    labelEn: "Location",
    labelZh: "地址",
    lines: site.addressLines,
  },
  {
    Icon: FaPhoneAlt,
    labelEn: "Phone",
    labelZh: "电话",
    lines: [site.phone],
    linesZh: ["支持 WhatsApp / 微信"],
  },
  {
    Icon: FaEnvelope,
    labelEn: "Email",
    labelZh: "邮箱",
    lines: [site.emailAlt],
  },
  {
    Icon: FaClock,
    labelEn: "Operating Hours",
    labelZh: "营业时间",
    lines: ["Monday - Sunday: 9:00 AM - 9:00 PM"],
    linesZh: ["周一至周日：上午 9:00 - 晚上 9:00"],
  },
];

export default function ContactPage() {
  return (
    <div>
      <PageBanner
        kicker={<T en="Contact" zh="联系我们" />}
        title={<T en="Get In Touch With Us" zh="联系我们" />}
        intro={
          <T
            en="Ready to start your academic journey? Contact us today to book your free trial lesson."
            zh="准备好开启学业旅程了吗？立即联系我们，预约免费试听课。"
          />
        }
      />

      <section className="section-pad">
        <div className="container-x grid items-stretch gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="grid h-full content-start gap-6 rounded-[18px] bg-navy px-8 py-10 text-white sm:grid-cols-2 lg:grid-cols-1">
              {details.map(({ Icon, labelEn, labelZh, lines, linesZh }) => (
                <div key={labelEn} className="flex gap-4">
                  <Icon className="mt-1 h-5 w-5 shrink-0 text-accent" aria-hidden />
                  <div>
                    <p className="font-semibold text-accent">
                      <T en={labelEn} zh={labelZh} />
                    </p>
                    {lines.map((line) => (
                      <p key={line} className="text-sm text-white/85">
                        {line}
                      </p>
                    ))}
                    {linesZh &&
                      linesZh.map((line) => (
                        <span key={line} data-lang="zh" className="block text-sm text-white/85">
                          {line}
                        </span>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <TrialForm
              title={<T en="Book A Free Trial Lesson" zh="预约免费试听课" />}
            />
          </Reveal>
        </div>
      </section>

      {/* Location */}
      <section className="section-pad bg-mist">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              title={<T en="Our Location" zh="我们的位置" />}
              subtitle="190 Middle Road, #15-06 Fortune Centre Singapore 188979"
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-10 grid items-center gap-8 lg:grid-cols-[1fr_1.4fr]">
              <div className="text-center lg:text-left">
                <p className="text-2xl font-bold text-navy">
                  <T en="7 Minutes Walk from Bugis MRT" zh="距武吉士地铁站步行 7 分钟" />
                </p>
                <p className="mt-2 text-tertiary">
                  <T en="(East-West & Downtown Line)" zh="（东西线与滨海市区线）" />
                </p>
                <a
                  href="https://maps.google.com/?q=190+Middle+Road+Fortune+Centre+Singapore+188979"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex rounded-pill bg-accent px-6 py-3 text-sm font-bold text-navy transition hover:bg-[#e6950c] hover:text-white"
                >
                  <T en="Open in Google Maps" zh="在 Google 地图中打开" />
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
