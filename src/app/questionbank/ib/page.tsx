import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { FaLock, FaSyncAlt, FaWifi } from "react-icons/fa";
import { PageBanner, SectionHeading } from "@/components/sections";
import { T } from "@/components/T";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "IB Questionbank (Campus Network Only)",
  description:
    "The EduStar IB question bank runs on an internal site that is only reachable from the campus network.",
  robots: { index: false, follow: false },
};

const steps: {
  icon: ReactNode;
  titleEn: string;
  titleZh: string;
  bodyEn: string;
  bodyZh: string;
}[] = [
  {
    icon: <FaWifi aria-hidden />,
    titleEn: "Join the campus network",
    titleZh: "连接校园内网",
    bodyEn:
      "Connect to the EduStar campus Wi-Fi, or plug into the school network from a classroom device.",
    bodyZh: "连接 EduStar 校园 Wi-Fi，或从教室内设备接入学校网络。",
  },
  {
    icon: <FaSyncAlt aria-hidden />,
    titleEn: "Open it from the campus network",
    titleZh: "在校园内网打开",
    bodyEn:
      "After joining the EduStar campus network, click Enter Questionbank above. No DNS changes are needed on your device.",
    bodyZh:
      "连接 EduStar 校园网络后，点击上方“进入题库”按钮。无需修改设备的 DNS 设置。",
  },
  {
    icon: <FaLock aria-hidden />,
    titleEn: "Still blocked?",
    titleZh: "仍然打不开？",
    bodyEn:
      "The question bank is deliberately not published to the public internet, so it cannot be opened from home or on mobile data.",
    bodyZh: "题库站点刻意不对公网开放，因此在家庭网络或移动数据下无法打开。",
  },
];

export default function IbQuestionbankPage() {
  return (
    <div>
      <PageBanner
        kicker={<T en="IB Questionbank" zh="IB 题库" />}
        title={<T en="Campus Network Only" zh="仅限校园内网访问" />}
        intro={
          <T
            en="The IB question bank is available on the EduStar campus network. Connect to the campus Wi-Fi, then click Enter Questionbank below."
            zh="IB 题库仅在 EduStar 校园网络内开放。请先连接校园 Wi-Fi，再点击下方“进入题库”按钮。"
          />
        }
      >
        <a
          href={site.learnUrl}
          className="btn-shine inline-flex items-center gap-3 whitespace-nowrap rounded-pill bg-gradient-to-br from-accent to-accent-bright px-6 py-3 text-base font-bold text-white shadow-[0_8px_24px_rgba(249,167,30,0.4)] transition-transform hover:-translate-y-0.5"
        >
          <T en="Enter Questionbank" zh="进入题库" />
        </a>
        <Link
          href="/contact"
          className="whitespace-nowrap rounded-pill border-2 border-white/70 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
        >
          <T en="Contact Us" zh="联系我们" />
        </Link>
      </PageBanner>

      <section className="section-pad">
        <div className="container-x">
          <SectionHeading
            title={<T en="How To Get In" zh="如何进入" />}
            subtitle={
              <T
                en="Three quick checks before you give up on the link."
                zh="在放弃这个链接之前，先做三步检查。"
              />
            }
          />
          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {steps.map((step) => (
              <article
                key={step.titleEn}
                className="flex h-full flex-col rounded-[18px] border-t-4 border-accent bg-white p-8 shadow-[0_10px_30px_rgba(26,29,79,0.07)]"
              >
                <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-mist text-2xl text-accent">
                  {step.icon}
                </span>
                <h3 className="text-xl font-bold text-navy">
                  <T en={step.titleEn} zh={step.titleZh} />
                </h3>
                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-navy-2/85">
                  <T en={step.bodyEn} zh={step.bodyZh} />
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x pb-16 sm:pb-20">
        <div className="rounded-[20px] bg-mist p-8 sm:p-10">
          <p className="text-sm leading-relaxed text-navy-2/85">
            <T
              en={`Internal address: ${site.learnUrl} — available only on the EduStar campus network. Use the Enter Questionbank button above.`}
              zh={`内部地址：${site.learnUrl} —— 仅限 EduStar 校园网络访问。请点击上方“进入题库”按钮。`}
            />
          </p>
        </div>
      </section>
    </div>
  );
}
