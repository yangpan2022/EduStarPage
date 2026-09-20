import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { T } from "@/components/T";
import { TestimonialCard } from "@/components/sections";
import { FaStar } from "react-icons/fa";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Testimonial",
  description:
    "Real success stories from EduStar students across A-Levels, IB, and IGCSE — and the universities they reached.",
};

const testimonials = [
  {
    name: "Kiera Huang",
    meta: "HCI",
    quoteEn:
      "Edu Star transformed my academic journey. The personalized attention and expert guidance helped me excel in my A Level exams and secure a spot at my dream university. The supportive environment and dedicated teachers made all the difference. I highly recommend Edu Star to anyone aiming for academic success!",
    quoteZh:
      "Edu Star 改变了我的学业轨迹。个性化的关注与专业的指导，帮助我在 A Level 考试中脱颖而出，并拿到理想大学的录取。充满支持的氛围与尽职尽责的老师，带来了关键的不同。我强烈推荐给所有追求学业成功的同学！",
  },
  {
    name: "Diana Zhang",
    meta: "CIS",
    quoteEn: "Edu Star helped me achieve my dream of getting into my top-choice university!",
    quoteZh: "Edu Star 帮我实现了进入第一志愿大学的梦想！",
  },
  {
    name: "Kyle He",
    meta: "UWCSEA Dover",
    quoteEn: "The personalized support at Edu Star made all the difference in my A-Level success.",
    quoteZh: "Edu Star 的个性化支持，是我 A-Level 取得成功的关键。",
  },
  {
    name: "Ethen Teo",
    meta: "ACS",
    quoteEn:
      "Edu Star transformed my academic journey, providing personalized guidance that helped me excel in my A-Levels and secure university admission.",
    quoteZh:
      "Edu Star 改变了我的学业轨迹，个性化的指导帮助我在 A-Level 中表现出色，并顺利获得大学录取。",
  },
  {
    name: "Aria Walker",
    meta: "Dunman High",
    quoteEn:
      "With Edu Star’s guidance, I not only excelled in the IB program but also gained the skills needed for lifelong learning.",
    quoteZh:
      "在 Edu Star 的指导下，我不仅在 IB 课程中表现出色，也收获了终身学习所需的能力。",
  },
  {
    name: "Thomas Doe",
    meta: "NJC",
    quoteEn:
      "Edu Star’s unique blend of personalized teaching and up-to-date curriculum prepared me thoroughly for the A-Levels and beyond.",
    quoteZh:
      "Edu Star 将个性化教学与前沿课程独特结合，让我为 A-Level 及未来做好了充分准备。",
  },
  {
    name: "Joan Elizabeth",
    meta: "ACIS",
    quoteEn:
      "Edu Star’s supportive environment and expert coaching helped me overcome challenges and excel in my IGCSE exams, paving the way for future success.",
    quoteZh:
      "Edu Star 的支持性环境与专业辅导，帮助我克服困难并在 IGCSE 考试中取得优异成绩，为未来的成功铺平了道路。",
  },
];

export default function TestimonialPage() {
  return (
    <div>
      <section className="section-pad">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="heading-underline text-3xl font-bold text-navy sm:text-[2.4rem]">
                <T en="What They Say About Us" zh="学员怎么说" />
              </h1>
              <p className="mt-6 text-base text-navy-2/90 sm:text-lg">
                <T
                  en="Testimonials build trust and credibility by showcasing real success stories, helping prospective students feel confident in choosing Edu Star."
                  zh="真实的成功故事建立起信任与口碑，让未来的学生更有信心选择 Edu Star。"
                />
              </p>
              <div className="mt-6 flex flex-col items-center gap-1">
                <div className="flex items-center gap-1.5">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FaStar key={index} className="h-5 w-5 text-accent" aria-hidden />
                  ))}
                  <span className="ml-2 text-lg font-bold text-navy">4.8/5</span>
                </div>
                <p className="text-sm font-semibold uppercase tracking-wide text-tertiary">
                  <T en="Costumer’s Rating" zh="学员评分" />
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <Reveal key={item.name} delay={(index % 3) * 90}>
                <div className="flex h-full flex-col">
                  <TestimonialCard
                    quote={<T en={item.quoteEn} zh={item.quoteZh} />}
                    name={item.name}
                    meta={item.meta}
                  />
                  <Image
                    src="/images/avatar.png"
                    alt=""
                    width={72}
                    height={72}
                    className="-mt-8 ml-7 h-16 w-16 rounded-full border-4 border-white object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Book a trial CTA */}
      <section className="relative overflow-hidden">
        <Image src="/images/classroom.jpg" alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-navy/80" aria-hidden />
        <div className="container-x relative py-24 text-center text-white">
          <Reveal>
            <h2 className="text-3xl font-bold text-white sm:text-[2.4rem]">
              <T en="BOOK A TRIAL LESSON" zh="预约试听课" />
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-white/90">
              <T
                en="Experience our personalized education with a trial lesson. Explore how Edu Star, an MOE-registered center, can help you excel in IB, A-Level, or secure admission to your dream university. Tailored teaching for every student’s success. Book your trial today and start your journey to academic excellence!"
                zh="通过一节试听课，体验我们的个性化教学。了解作为 MOE 注册中心的 Edu Star，如何帮助你在 IB、A-Level 中脱颖而出，或进入理想的大学。为每位学生的成功量身定制教学。今天就预约试听，开启你的学术卓越之旅！"
              />
            </p>
            <Link
              href="/contact"
              className="btn-shine mt-8 inline-flex rounded-pill bg-gradient-to-br from-accent to-accent-bright px-8 py-4 text-lg font-bold text-white shadow-[0_8px_24px_rgba(249,167,30,0.4)] transition-transform hover:-translate-y-0.5"
            >
              <T en="Book A Trial Lesson Now" zh="立即预约试听课" />
            </Link>
            <p className="mt-6 text-sm uppercase tracking-[0.2em] text-white/70">
              <T en="wechat/whatsapp" zh="微信 / WhatsApp" />
            </p>
            <a
              href={site.phoneHref}
              className="mt-2 block text-2xl font-bold text-accent sm:text-3xl"
            >
              {site.phone}
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
