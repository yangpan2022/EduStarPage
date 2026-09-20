import type { Metadata } from "next";
import Link from "next/link";
import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";
import SchoolComparison from "@/components/SchoolComparison";
import { T } from "@/components/T";
import { CtaSection, PageBanner, SectionHeading } from "@/components/sections";

export const metadata: Metadata = {
  title: "Singapore International School",
  description:
    "Compare fees, curricula and governance for 13 leading international schools in Singapore — an AY2026/27 guide from EduStar Academic Centre.",
};

const stats = [
  { value: 13, en: "Schools profiled", zh: "收录学校" },
  { value: 5, en: "Curriculum pathways", zh: "课程体系" },
  { value: 1925, en: "Oldest school founded", zh: "最早学校创办于" },
  { value: "$19k–69k", en: "First-year cost range (SGD)", zh: "首年费用区间（新元）" },
];

const pathways = [
  {
    titleEn: "IB-First / IB-Only",
    titleZh: "IB 为主 / 纯 IB",
    bodyEn:
      "UWCSEA, ISS and CIS run deep IB-only continuums; Stamford blends IB with AP and BTEC. Hwa Chong International School pairs a bespoke Year 1–4 foundation with a full IB Diploma and strong English-Chinese bilingual emphasis. Best for globally-mobile families targeting worldwide university admission.",
    bodyZh:
      "UWCSEA、ISS 与 CIS 采用纯 IB 的一贯制课程；Stamford 则将 IB 与 AP、BTEC 结合。华侨中学国际学校将定制的一至四年级基础课程与完整的 IB 文凭相结合，并高度重视英中双语。最适合目标为全球大学、经常跨国流动的家庭。",
  },
  {
    titleEn: "British / A-Level",
    titleZh: "英式 / A-Level",
    bodyEn:
      "Tanglin Trust is the only school offering both A-Level and IB DP side by side at Sixth Form. Dulwich and Dover Court run IGCSE through to IB. Best for UK-bound families.",
    bodyZh:
      "Tanglin Trust 是唯一在高中阶段同时提供 A-Level 与 IB DP 的学校。Dulwich 与 Dover Court 则从 IGCSE 一路衔接至 IB。最适合目标为英国的家庭。",
  },
  {
    titleEn: "American / AP",
    titleZh: "美式 / AP",
    bodyEn:
      "Singapore American School is the largest single-campus international school in the world, with a strong AP programme. Stamford pairs AP with IB and BTEC. Best for US-bound transcripts.",
    bodyZh:
      "Singapore American School 是全球最大的单校区国际学校，拥有强大的 AP 课程。Stamford 将 AP 与 IB、BTEC 结合。最适合面向美国升学的成绩单。",
  },
  {
    titleEn: "Australian Curriculum",
    titleZh: "澳式课程",
    bodyEn:
      "Australian International School is Singapore’s only school offering a genuine pathway to the Australian HSC, alongside IB PYP/DP and Cambridge IGCSE.",
    bodyZh:
      "Australian International School 是新加坡唯一提供通往澳大利亚 HSC 正式路径的学校，同时开设 IB PYP/DP 与剑桥 IGCSE。",
  },
];

const bars = [
  { name: "Dulwich College", value: 59220 },
  { name: "Tanglin Trust", value: 58080 },
  { name: "Stamford American", value: 56110 },
  { name: "ISS International", value: 54430 },
  { name: "Canadian Intl", value: 53500 },
  { name: "Australian Intl", value: 53148 },
  { name: "Nexus Intl", value: 50800 },
  { name: "UWCSEA", value: 49926 },
  { name: "SJI International", value: 49284 },
  { name: "Dover Court Intl", value: 47982 },
  { name: "Overseas Family", value: 44800 },
  { name: "Singapore American", value: 43780 },
  { name: "Hwa Chong Intl", value: 39240 },
];

const maxBar = Math.max(...bars.map((bar) => bar.value));

const features = [
  {
    titleEn: "Non-Profit Governance",
    titleZh: "非营利办学",
    bodyEn:
      "UWCSEA, SAS, Tanglin Trust, ISS and SJI International reinvest fees rather than distribute profit — often positioned as premium, community-oriented institutions.",
    bodyZh:
      "UWCSEA、SAS、Tanglin Trust、ISS 与 SJI International 将学费再投资而非分配利润 —— 通常定位为优质、面向社区的学府。",
  },
  {
    titleEn: "Global Group Ownership",
    titleZh: "全球集团办学",
    bodyEn:
      "Dulwich, Stamford & AIS (Cognita), Dover Court (Nord Anglia) and Nexus (Taylor’s) give access to shared curricula and cross-campus transfer, with commercially-driven fee growth.",
    bodyZh:
      "Dulwich、Stamford 与 AIS（Cognita）、Dover Court（Nord Anglia）及 Nexus（Taylor’s）可共享课程体系并支持跨校转学，但学费增长更具商业化导向。",
  },
  {
    titleEn: "On-Campus Boarding",
    titleZh: "校内寄宿",
    bodyEn:
      "UWCSEA (Grades 8–12), Dulwich (via Oldham Hall) and Hwa Chong International (full-time Residence Mentors) offer on-campus or affiliated boarding — most others are day-school only.",
    bodyZh:
      "UWCSEA（8–12 年级）、Dulwich（通过 Oldham Hall）与华侨中学国际学校（全职住宿导师）提供校内或合作寄宿 —— 其余多数学校仅提供走读。",
  },
  {
    titleEn: "Language Immersion",
    titleZh: "语言沉浸",
    bodyEn:
      "Canadian International (Chinese-English & French-English streams), SJI International (English-Chinese, Prep 1–Grade 5) and Hwa Chong International (bilingual English-Chinese throughout) are the strongest dedicated bilingual tracks.",
    bodyZh:
      "Canadian International（英中与英法双语方向）、SJI International（英中双语，Prep 1–5 年级）与华侨中学国际学校（全程英中双语）是最强的专门双语课程。",
  },
  {
    titleEn: "SEN / EAL Support",
    titleZh: "特殊教育与英语支持",
    bodyEn:
      "Nearly every school charges learning support as an add-on ($3,000–$8,300+/semester). UWCSEA, Dulwich, Dover Court and ISS are noted for especially developed frameworks.",
    bodyZh:
      "几乎所有学校的学习支持都需额外收费（每学期 3,000–8,300+ 新元）。UWCSEA、Dulwich、Dover Court 与 ISS 以尤为完善的体系著称。",
  },
  {
    titleEn: "Sibling Discounts Vary",
    titleZh: "兄弟姐妹折扣各异",
    bodyEn:
      "Nexus offers 3/15/25% for 2nd/3rd/4th child; AIS 5/10/10%; Dulwich a flat 5% from the 3rd child; SAS offers none on tuition, only scaled registration-fee discounts.",
    bodyZh:
      "Nexus 对第二/三/四个孩子提供 3/15/25% 优惠；AIS 为 5/10/10%；Dulwich 从第三个孩子起统一 5%；SAS 学费无折扣，仅在注册费上提供分级优惠。",
  },
];

export default function SingaporeInternationalSchoolPage() {
  return (
    <div>
      <PageBanner
        kicker={<T en="EduStar Academic Centre · AY2026/27 Guide" zh="EduStar 学术中心 · 2026/27 学年指南" />}
        title={<T en="Singapore’s International Schools, Compared" zh="新加坡国际学校对比" />}
        intro={
          <T
            en="Fees, curricula and governance for 13 leading international schools — so families can shortlist with confidence before applying."
            zh="13 所领先国际学校的费用、课程与办学模式 —— 帮助家庭在申请前更有把握地筛选。"
          />
        }
      >
        <Link
          href="/contact"
          className="btn-shine rounded-pill bg-gradient-to-br from-accent to-accent-bright px-6 py-3 text-base font-bold text-white shadow-[0_8px_24px_rgba(249,167,30,0.4)] transition-transform hover:-translate-y-0.5"
        >
          <T en="Book a School-Fit Consultation" zh="预约择校咨询" />
        </Link>
        <a
          href="#edu-table"
          className="rounded-pill border-2 border-white/70 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
        >
          <T en="View the Comparison Table" zh="查看对比表格" />
        </a>
      </PageBanner>

      {/* Stats */}
      <section className="container-x py-14">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.en} className="text-center">
              {typeof stat.value === "string" ? (
                <span className="block text-4xl font-extrabold text-navy">{stat.value}</span>
              ) : (
                <Counter
                  value={stat.value}
                  className="block text-4xl font-extrabold text-navy"
                />
              )}
              <span className="mt-2 block text-sm font-medium text-tertiary">
                <T en={stat.en} zh={stat.zh} />
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Master comparison */}
      <section id="edu-table" className="section-pad bg-mist">
        <div className="container-x">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              <T en="Master Comparison" zh="综合对比" />
            </span>
            <SectionHeading
              align="left"
              className="mt-3"
              title={<T en="Fees & Profile at a Glance" zh="费用与概况一览" />}
              subtitle={
                <T
                  en="All figures in SGD. First-year totals combine one year of tuition with one-time application, enrolment and capital/facility fees — they exclude uniforms, buses, lunch and exam fees. Hwa Chong International School has no Primary tier; its programme runs Year 1 through IB2 only."
                  zh="所有金额均以新元计。首年总额包含一年学费与一次性申请费、注册费及基本建设/设施费 —— 不含校服、校车、午餐与考试费用。华侨中学国际学校没有小学部，其课程从一年级（Year 1）开设至 IB2。"
                />
              }
            />
          </Reveal>
          <div className="mt-10">
            <SchoolComparison />
          </div>
          <p className="mt-5 text-xs leading-relaxed text-tertiary">
            <T
              en="All 13 schools verified against official fee documents, including Dover Court International School (Mainstream Pathway 1), Overseas Family School, and Hwa Chong International School (2027 Fee Structure, last updated 31 May 2026). HCIS has no Primary tier — its programme runs Year 1 through IB2 only. Fees are reviewed annually by every school — always confirm the live fee schedule before budgeting or applying."
              zh="全部 13 所学校均已对照官方费用文件核实，包括 Dover Court 国际学校（主流 Pathway 1）、Overseas Family School 与华侨中学国际学校（2027 学费方案，最后更新于 2026 年 5 月 31 日）。HCIS 没有小学部 —— 其课程从一年级开设至 IB2。各校每年都会复核学费 —— 制定预算或申请前，请务必确认最新费用表。"
            />
          </p>
        </div>
      </section>

      {/* Pathway */}
      <section className="section-pad">
        <div className="container-x">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              <T en="Choosing a Direction" zh="选择方向" />
            </span>
            <SectionHeading
              align="left"
              className="mt-3"
              title={<T en="Best School by Academic Pathway" zh="按课程路径推荐学校" />}
              subtitle={
                <T
                  en="Curriculum is usually the first decision — it shapes exams, transcripts and which universities your child applies to."
                  zh="课程体系通常是最先要做的决定 —— 它决定考试、成绩单以及你的孩子未来申请的大学。"
                />
              }
            />
          </Reveal>
          <div className="mt-10 grid gap-7 md:grid-cols-2">
            {pathways.map((path, index) => (
              <Reveal key={path.titleEn} delay={(index % 2) * 90}>
                <article className="h-full rounded-[18px] border-t-4 border-accent bg-white p-7 shadow-[0_10px_30px_rgba(26,29,79,0.07)]">
                  <h3 className="text-xl font-bold text-navy">
                    <T en={path.titleEn} zh={path.titleZh} />
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-navy-2/85">
                    <T en={path.bodyEn} zh={path.bodyZh} />
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Fee tiering */}
      <section className="section-pad bg-mist">
        <div className="container-x">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              <T en="Fee Tiering" zh="费用分层" />
            </span>
            <SectionHeading
              align="left"
              className="mt-3"
              title={<T en="Secondary Tuition, Top of Range" zh="中学学费（区间上限）" />}
              subtitle={
                <T
                  en="Secondary fees show the steepest spread — most schools sit 25–40% above their own primary tuition once a child reaches Year 7 / Grade 6. Hwa Chong International School has no separate primary stage to compare against."
                  zh="中学学费的差距最大 —— 多数学校在孩子升入七年级 / 六年级后，学费比其小学阶段高出 25–40%。华侨中学国际学校没有独立的小学阶段可供对比。"
                />
              }
            />
          </Reveal>
          <div className="mt-10 space-y-3">
            {bars.map((bar, index) => (
              <Reveal key={bar.name} delay={Math.min(index * 40, 240)}>
                <div className="flex items-center gap-4">
                  <span className="w-40 shrink-0 text-right text-sm font-medium text-navy-2">
                    {bar.name}
                  </span>
                  <span className="relative h-7 flex-1 overflow-hidden rounded-full bg-white">
                    <span
                      className="block h-full rounded-full bg-gradient-to-r from-accent to-accent-bright"
                      style={{ width: `${(bar.value / maxBar) * 100}%` }}
                    />
                  </span>
                  <span className="w-24 shrink-0 text-sm font-semibold text-navy">
                    ${bar.value.toLocaleString()}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-5 text-xs text-tertiary">
            <T
              en="Bars show each school’s top secondary/IB tuition band (SGD/year), now covering all 13 profiled schools."
              zh="柱状图显示各校中学 / IB 学费的最高区间（新元 / 年），现已涵盖全部 13 所收录学校。"
            />
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="section-pad">
        <div className="container-x">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              <T en="Beyond the Fee Table" zh="费用表之外" />
            </span>
            <SectionHeading
              align="left"
              className="mt-3"
              title={<T en="Features Worth Weighing" zh="值得权衡的特色" />}
              subtitle={
                <T
                  en="Governance model, boarding, language tracks and support fees often matter as much as the sticker price."
                  zh="办学模式、寄宿、语言课程与支持费用，往往与学费数字同样重要。"
                />
              }
            />
          </Reveal>
          <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Reveal key={feature.titleEn} delay={(index % 3) * 80}>
                <article className="h-full rounded-[18px] bg-white p-7 shadow-[0_10px_30px_rgba(26,29,79,0.07)]">
                  <h3 className="text-lg font-bold text-navy">
                    <T en={feature.titleEn} zh={feature.titleZh} />
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-navy-2/85">
                    <T en={feature.bodyEn} zh={feature.bodyZh} />
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title={<T en="Not sure which school fits your child?" zh="不确定哪所学校适合你的孩子？" />}
        description={
          <T
            en="EduStar’s admissions counsellors help families shortlist, prepare applications and plan the transition — for Singapore and overseas schools alike."
            zh="EduStar 的升学顾问帮助家庭筛选学校、准备申请并规划过渡 —— 无论新加坡本地还是海外学校。"
          />
        }
        buttonLabel={<T en="Book a Free Consultation" zh="预约免费咨询" />}
        buttonHref="/contact"
      />

      <section className="container-x pb-16">
        <p className="text-xs leading-relaxed text-tertiary">
          <T
            en="Compiled by EduStar Academic Centre from official fee schedules and school admissions pages, July 2026, with all 13 schools verified against primary sources (most AY2026/27; Hwa Chong International School’s 2027 Fee Structure, last updated 31 May 2026). Fees are reviewed annually by every school — always confirm the live fee schedule before budgeting or applying."
            zh="由 EduStar 学术中心根据官方费用表与学校招生页面整理，2026 年 7 月，全部 13 所学校均对照一手资料核实（多数为 2026/27 学年；华侨中学国际学校为 2027 学费方案，最后更新于 2026 年 5 月 31 日）。各校每年都会复核学费 —— 制定预算或申请前，请务必确认最新费用表。"
          />
        </p>
      </section>
    </div>
  );
}
