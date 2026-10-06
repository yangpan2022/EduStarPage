import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { FaLock, FaSyncAlt, FaWifi } from "react-icons/fa";
import LanProbeRedirect from "@/components/LanProbeRedirect";
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
      "On campus Wi-Fi the button above opens the question bank every time. This page also forwards you automatically whenever the browser allows the check.",
    bodyZh:
      "在校园 Wi-Fi 下，点上方按钮即可进入题库；当浏览器允许检测时，本页面也会自动跳转。",
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
      <LanProbeRedirect />

      <PageBanner
        kicker={<T en="IB Questionbank" zh="IB 题库" />}
        title={<T en="Campus Network Only" zh="仅限校园内网访问" />}
        intro={
          <T
            en="The IB question bank runs on a private internal site (learn.edustarcorp.com) that is not published to the public internet. Connect to the EduStar campus network, then use the button below — this page also forwards you automatically when it can."
            zh="IB 题库运行在不对公网开放的内部站点（learn.edustarcorp.com）上。请先连接 EduStar 校园内网，再点下方按钮进入；检测得到时本页面也会自动跳转。"
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
              en="Internal address: https://learn.edustarcorp.com — reachable only from the EduStar campus network. If the automatic check is blocked by your browser (Chrome may ask for permission to reach the local network), the button above still works."
              zh="内部地址：https://learn.edustarcorp.com —— 仅在 EduStar 校园内网可访问。若浏览器拦截了自动检测（Chrome 可能询问是否允许访问本地网络），点上方按钮照样可以进入。"
            />
          </p>
        </div>
      </section>
    </div>
  );
}
