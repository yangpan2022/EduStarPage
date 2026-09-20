import type { Metadata } from "next";
import Link from "next/link";
import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";
import SchoolComparison from "@/components/SchoolComparison";
import { CtaSection, PageBanner, SectionHeading } from "@/components/sections";

export const metadata: Metadata = {
  title: "Singapore International School",
  description:
    "Compare fees, curricula and governance for 13 leading international schools in Singapore — an AY2026/27 guide from EduStar Academic Centre.",
};

const stats = [
  { value: 13, label: "Schools profiled", suffix: "" },
  { value: 5, label: "Curriculum pathways", suffix: "" },
  { value: 1925, label: "Oldest school founded", suffix: "" },
  { value: "$19k–69k", label: "First-year cost range (SGD)", suffix: "" },
];

const pathways = [
  {
    title: "IB-First / IB-Only",
    body: "UWCSEA, ISS and CIS run deep IB-only continuums; Stamford blends IB with AP and BTEC. Hwa Chong International School pairs a bespoke Year 1–4 foundation with a full IB Diploma and strong English-Chinese bilingual emphasis. Best for globally-mobile families targeting worldwide university admission.",
  },
  {
    title: "British / A-Level",
    body: "Tanglin Trust is the only school offering both A-Level and IB DP side by side at Sixth Form. Dulwich and Dover Court run IGCSE through to IB. Best for UK-bound families.",
  },
  {
    title: "American / AP",
    body: "Singapore American School is the largest single-campus international school in the world, with a strong AP programme. Stamford pairs AP with IB and BTEC. Best for US-bound transcripts.",
  },
  {
    title: "Australian Curriculum",
    body: "Australian International School is Singapore’s only school offering a genuine pathway to the Australian HSC, alongside IB PYP/DP and Cambridge IGCSE.",
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
    title: "Non-Profit Governance",
    body: "UWCSEA, SAS, Tanglin Trust, ISS and SJI International reinvest fees rather than distribute profit — often positioned as premium, community-oriented institutions.",
  },
  {
    title: "Global Group Ownership",
    body: "Dulwich, Stamford & AIS (Cognita), Dover Court (Nord Anglia) and Nexus (Taylor’s) give access to shared curricula and cross-campus transfer, with commercially-driven fee growth.",
  },
  {
    title: "On-Campus Boarding",
    body: "UWCSEA (Grades 8–12), Dulwich (via Oldham Hall) and Hwa Chong International (full-time Residence Mentors) offer on-campus or affiliated boarding — most others are day-school only.",
  },
  {
    title: "Language Immersion",
    body: "Canadian International (Chinese-English & French-English streams), SJI International (English-Chinese, Prep 1–Grade 5) and Hwa Chong International (bilingual English-Chinese throughout) are the strongest dedicated bilingual tracks.",
  },
  {
    title: "SEN / EAL Support",
    body: "Nearly every school charges learning support as an add-on ($3,000–$8,300+/semester). UWCSEA, Dulwich, Dover Court and ISS are noted for especially developed frameworks.",
  },
  {
    title: "Sibling Discounts Vary",
    body: "Nexus offers 3/15/25% for 2nd/3rd/4th child; AIS 5/10/10%; Dulwich a flat 5% from the 3rd child; SAS offers none on tuition, only scaled registration-fee discounts.",
  },
];

export default function SingaporeInternationalSchoolPage() {
  return (
    <div>
      <PageBanner
        kicker="EduStar Academic Centre · AY2026/27 Guide"
        title="Singapore’s International Schools, Compared"
        intro="Fees, curricula and governance for 13 leading international schools — so families can shortlist with confidence before applying."
      >
        <Link
          href="/contact"
          className="btn-shine rounded-pill bg-gradient-to-br from-accent to-accent-bright px-6 py-3 text-base font-bold text-white shadow-[0_8px_24px_rgba(249,167,30,0.4)] transition-transform hover:-translate-y-0.5"
        >
          Book a School-Fit Consultation
        </Link>
        <a
          href="#edu-table"
          className="rounded-pill border-2 border-white/70 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
        >
          View the Comparison Table
        </a>
      </PageBanner>

      {/* Stats */}
      <section className="container-x py-14">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              {stat.value === "$19k–69k" ? (
                <span className="block text-4xl font-extrabold text-navy">{stat.value}</span>
              ) : (
                <Counter
                  value={stat.value as number}
                  suffix={stat.suffix}
                  className="block text-4xl font-extrabold text-navy"
                />
              )}
              <span className="mt-2 block text-sm font-medium text-tertiary">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Master comparison */}
      <section id="edu-table" className="section-pad bg-mist">
        <div className="container-x">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Master Comparison
            </span>
            <SectionHeading
              align="left"
              className="mt-3"
              title="Fees & Profile at a Glance"
              subtitle="All figures in SGD. First-year totals combine one year of tuition with one-time application, enrolment and capital/facility fees — they exclude uniforms, buses, lunch and exam fees. Hwa Chong International School has no Primary tier; its programme runs Year 1 through IB2 only."
            />
          </Reveal>
          <div className="mt-10">
            <SchoolComparison />
          </div>
          <p className="mt-5 text-xs leading-relaxed text-tertiary">
            All 13 schools verified against official fee documents, including Dover Court International
            School (Mainstream Pathway 1), Overseas Family School, and Hwa Chong International School
            (2027 Fee Structure, last updated 31 May 2026). HCIS has no Primary tier — its programme
            runs Year 1 through IB2 only. Fees are reviewed annually by every school — always confirm
            the live fee schedule before budgeting or applying.
          </p>
        </div>
      </section>

      {/* Pathway */}
      <section className="section-pad">
        <div className="container-x">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Choosing a Direction
            </span>
            <SectionHeading
              align="left"
              className="mt-3"
              title="Best School by Academic Pathway"
              subtitle="Curriculum is usually the first decision — it shapes exams, transcripts and which universities your child applies to."
            />
          </Reveal>
          <div className="mt-10 grid gap-7 md:grid-cols-2">
            {pathways.map((path, index) => (
              <Reveal key={path.title} delay={(index % 2) * 90}>
                <article className="h-full rounded-[18px] border-t-4 border-accent bg-white p-7 shadow-[0_10px_30px_rgba(26,29,79,0.07)]">
                  <h3 className="text-xl font-bold text-navy">{path.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-navy-2/85">{path.body}</p>
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
              Fee Tiering
            </span>
            <SectionHeading
              align="left"
              className="mt-3"
              title="Secondary Tuition, Top of Range"
              subtitle="Secondary fees show the steepest spread — most schools sit 25–40% above their own primary tuition once a child reaches Year 7 / Grade 6. Hwa Chong International School has no separate primary stage to compare against."
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
            Bars show each school’s top secondary/IB tuition band (SGD/year), now covering all 13
            profiled schools.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="section-pad">
        <div className="container-x">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Beyond the Fee Table
            </span>
            <SectionHeading
              align="left"
              className="mt-3"
              title="Features Worth Weighing"
              subtitle="Governance model, boarding, language tracks and support fees often matter as much as the sticker price."
            />
          </Reveal>
          <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Reveal key={feature.title} delay={(index % 3) * 80}>
                <article className="h-full rounded-[18px] bg-white p-7 shadow-[0_10px_30px_rgba(26,29,79,0.07)]">
                  <h3 className="text-lg font-bold text-navy">{feature.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-navy-2/85">{feature.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Not sure which school fits your child?"
        description="EduStar’s admissions counsellors help families shortlist, prepare applications and plan the transition — for Singapore and overseas schools alike."
        buttonLabel="Book a Free Consultation"
        buttonHref="/contact"
      />

      <section className="container-x pb-16">
        <p className="text-xs leading-relaxed text-tertiary">
          Compiled by EduStar Academic Centre from official fee schedules and school admissions
          pages, July 2026, with all 13 schools verified against primary sources (most AY2026/27; Hwa
          Chong International School’s 2027 Fee Structure, last updated 31 May 2026). Fees are
          reviewed annually by every school — always confirm the live fee schedule before budgeting or
          applying.
        </p>
      </section>
    </div>
  );
}
