import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { T } from "@/components/T";
import { CtaSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Meet Our Team",
  description:
    "Meet the EduStar teaching team — NUS, NTU, SMU and IB-certified educators with global academic experience.",
};

const team = [
  {
    name: "Alex",
    credentialsEn:
      "Founder · NUS Graduate · MOE Registered · IB Educator Certificate (University of Toronto)",
    credentialsZh: "创始人 · NUS 毕业 · MOE 注册 · IB 教育者证书（多伦多大学）",
    specEn: "Mathematics and Science",
    specZh: "数学与科学",
  },
  {
    name: "Chloe",
    credentialsEn:
      "Founder · NTU Graduate · Advanced studies at Stanford · MOE Registered · IB Educator Certificate (University of Toronto)",
    credentialsZh: "创始人 · NTU 毕业 · 曾于斯坦福深造 · MOE 注册 · IB 教育者证书（多伦多大学）",
    specEn: "English and Economics",
    specZh: "英语与经济",
  },
  {
    name: "Lau Liyang",
    credentialsEn:
      "Honours Degree in Economics and Statistics from NUS · Advanced studies at UCLA · ASEAN Scholarship recipient",
    credentialsZh: "NUS 经济与统计荣誉学位 · 曾于 UCLA 深造 · 东盟奖学金获得者",
    specEn: "Mathematics and Science",
    specZh: "数学与科学",
  },
  {
    name: "Joel",
    credentialsEn: "NUS Graduate · Head Teacher at SMIL",
    credentialsZh: "NUS 毕业 · SMIL 首席教师",
    specEn: "International Mathematics Education System",
    specZh: "国际数学教育体系",
  },
  {
    name: "Shiyun",
    credentialsEn: "SMU Law Graduate · AEIS Program Specialist",
    credentialsZh: "SMU 法学毕业 · AEIS 项目专家",
    specEn: "English",
    specZh: "英语",
  },
  {
    name: "Yang Pan",
    credentialsEn:
      "Master degree in Signal Processing at NTU · Top-tier Chinese university degree in Computer Science/AI · Extensive industry experience",
    credentialsZh:
      "NTU 信号处理硕士 · 中国顶尖高校计算机科学 / 人工智能学位 · 丰富行业经验",
    specEn: "IB Computer Science, Programming, AI and LLM integration",
    specZh: "IB 计算机科学、编程、AI 与大模型集成",
  },
  {
    name: "Lok",
    credentialsEn: "Honours Degree in Psychology from NUS · Minor in Communication and New Media",
    credentialsZh: "NUS 心理学荣誉学位 · 传播与新媒体辅修",
    specEn: "Psychology, University Admission Consulting",
    specZh: "心理学、大学申请咨询",
  },
  {
    name: "Yueying",
    credentialsEn:
      "PhD in Food Science and Human Nutrition (First Class) from NUS · NUS MSc in Food Science and Human Nutrition · BSc in Food Science and Technology from Hong Kong Baptist University",
    credentialsZh:
      "NUS 食品科学与人类营养学博士（一等荣誉）· NUS 食品科学与人类营养学硕士 · 香港浸会大学食品科学与技术学士",
    specEn: "Chemistry, Biology",
    specZh: "化学、生物",
  },
];

export default function TeamPage() {
  return (
    <div>
      <section className="section-pad">
        <div className="container-x">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="heading-underline text-3xl font-bold text-navy sm:text-[2.4rem]">
                <T en="Meet Our Expert Team" zh="认识我们的专业团队" />
              </h1>
              <p className="mt-6 text-base text-navy-2/90 sm:text-lg">
                <T
                  en="Accomplished educators from Singapore’s leading universities and international programmes, dedicated to every student’s progress."
                  zh="来自新加坡顶尖学府与国际课程的优秀教育者，致力于每一位学生的成长。"
                />
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <Reveal key={member.name} delay={(index % 3) * 90}>
                <article className="mx-auto flex h-full max-w-[460px] flex-col overflow-hidden rounded-[16px] border-t-4 border-accent bg-white text-center shadow-[0_14px_35px_rgba(26,29,79,0.1)] transition-transform duration-300 hover:-translate-y-2">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-mist">
                    <Image
                      src="/images/team-placeholder.png"
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 360px"
                      className="object-contain p-10"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="text-xl font-bold text-navy">{member.name}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-2/80">
                      <T en={member.credentialsEn} zh={member.credentialsZh} />
                    </p>
                    <p className="mt-4 rounded-xl bg-mist px-4 py-3 text-sm font-semibold text-navy">
                      <span className="text-tertiary">
                        <T en="Specialisation: " zh="专业方向：" />
                      </span>
                      <T en={member.specEn} zh={member.specZh} />
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title={<T en="Learn from Singapore’s top educators" zh="跟随新加坡顶尖教育者学习" />}
        description={
          <T
            en="Book a free trial lesson and experience our personalised teaching approach first-hand."
            zh="预约免费试听课，亲身体验我们的个性化教学方式。"
          />
        }
        buttonLabel={<T en="Book a Free Trial" zh="预约免费试听" />}
        buttonHref="/contact"
      />
    </div>
  );
}
