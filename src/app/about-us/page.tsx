import type { Metadata } from "next";
import Carousel from "@/components/Carousel";
import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";
import Accordion, { type AccordionItem } from "@/components/Accordion";
import { T, TBlock } from "@/components/T";
import { CtaSection, PageBanner, SectionHeading } from "@/components/sections";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "EduStar was founded in 2015 in Singapore, combining academic excellence, global educational perspectives, and results-driven teaching methods.",
};

const slides = [
  { src: "/images/about-1.png", alt: "5245" },
  { src: "/images/about-2.png", alt: "Image_20260128154137_88_258" },
  { src: "/images/about-3.png", alt: "Image_20260128154013_87_258" },
  { src: "/images/about-4.png", alt: "5250" },
  { src: "/images/about-5.png", alt: "Image_20260128154614_89_258" },
];

const pillars = [
  {
    titleEn: "The Philosophy",
    titleZh: "教学理念",
    bodyEn:
      "We believe that every student learns differently. EduStar’s teaching philosophy is built on personalised learning, global perspectives, and future-focused guidance.",
    bodyZh:
      "我们相信每位学生的学习方式都不同。EduStar 的教学理念建立在个性化学习、全球视野与面向未来的指导之上。",
  },
  {
    titleEn: "The Mission",
    titleZh: "我们的使命",
    bodyEn:
      "To give students a clear, step-by-step academic and admissions roadmap that prepares them for success in every stage of their future.",
    bodyZh: "为学生提供清晰、循序渐进的学业与升学路线图，帮助他们在未来的每个阶段都能成功。",
  },
  {
    titleEn: "The Vision",
    titleZh: "我们的愿景",
    bodyEn:
      "To become a leading cross-border education technology enterprise that transforms learning through personalized guidance, future-oriented insights, and global opportunities.",
    bodyZh:
      "成为领先的跨境教育科技企业，通过个性化指导、面向未来的洞察与全球机会变革学习方式。",
  },
];

const stats = [
  { value: 10, en: "Years of Experience", zh: "从业年限" },
  { value: 5000, en: "Students Trained", zh: "培养学员" },
  { value: 15, en: "Teaching Experts", zh: "教学专家" },
  { value: 95, en: "% Satisfaction Rate", zh: "满意度", suffix: "%" },
];

const faqs: AccordionItem[] = [
  {
    question: "What services does EduStar provide? / EduStar 提供哪些服务？",
    answer: (
      <TBlock
        en={
          <>
            <p>
              We specialise in both international curricula (IB/A-Level/IGCSE) and Singapore’s
              rigorous local system (PSLE/O-Level/IP/JC), giving students seamless support across
              pathways.
            </p>
            <p>
              We also provide university admissions consulting and long-term academic planning,
              supporting students through their full educational journey.
            </p>
          </>
        }
        zh={
          <>
            <p>
              我们专注于国际课程（IB / A-Level / IGCSE）以及新加坡严谨的本地体系（PSLE / O-Level /
              IP / JC），为学生提供跨路径的无缝支持。
            </p>
            <p>同时提供大学申请咨询与长期学业规划，陪伴学生走完完整的求学旅程。</p>
          </>
        }
      />
    ),
  },
  {
    question: "What is special about EduStar? / EduStar 有什么特别之处？",
    answer: (
      <TBlock
        en={
          <>
            <p>
              We provide structured, year-by-year academic and university planning so every student
              knows exactly what to do at every stage of their journey.
            </p>
            <p>
              Every student receives a customised learning plan tailored to their strengths,
              weaknesses, and goals—not a one-size-fits-all class.
            </p>
            <p>
              We integrate innovative tools, intelligent systems, and digital resources to make
              learning more efficient, visual, and adaptive.
            </p>
            <p>
              With branches in Singapore, Canada, and China, we offer students global learning
              exposure and international opportunities unavailable in typical tuition centres.
            </p>
            <p>
              Our in-house Singapore Math programme and international league deliver world-class
              training, competitions, and curriculum innovation.
            </p>
            <p>
              We focus on measurable progress—academic improvement, admissions outcomes, and
              long-term growth—rather than simply covering more content.
            </p>
          </>
        }
        zh={
          <>
            <p>我们提供结构化的、逐年推进的学业与升学规划，让每位学生都清楚在每个阶段该做什么。</p>
            <p>
              每位学生都会获得根据其优势、薄弱环节与目标量身定制的学习计划，而非千篇一律的课堂。
            </p>
            <p>我们融合创新工具、智能系统与数字化资源，让学习更高效、更直观、更具适应性。</p>
            <p>
              凭借在新加坡、加拿大与中国的分支，我们为学生提供普通补习中心难以企及的全球学习体验与国际机会。
            </p>
            <p>我们自研的新加坡数学课程与国际联盟，提供世界一流的培训、竞赛与课程创新。</p>
            <p>
              我们关注可衡量的进步——学业提升、申请成果与长期成长——而非单纯地赶进度。
            </p>
          </>
        }
      />
    ),
  },
  {
    question: "How do we book a trial lesson? / 如何预约试听课？",
    answer: (
      <T
        en={
          <p>
            Simply click on the “Book Trial” button on the top-right corner of the website, we will
            contact you soon upon receiving the form!
          </p>
        }
        zh={<p>只需点击网站右上角的「预约试听」按钮，我们在收到表单后会尽快与你联系！</p>}
      />
    ),
  },
  {
    question:
      "I’m interested in a course that’s not listed on the website, is it provided? / 我对网站上未列出的课程感兴趣，能提供吗？",
    answer: (
      <T
        en={
          <p>
            Simply send us an inquiry over WhatsApp (8858 2378) or email ({site.emailAlt}), we
            provide a quality learning experience tailored to your needs.
          </p>
        }
        zh={
          <p>
            只需通过 WhatsApp（8858 2378）或邮箱（{site.emailAlt}）咨询我们，我们会根据你的需求量身提供优质的学习体验。
          </p>
        }
      />
    ),
  },
  {
    question: "Where is the centre located? / 中心在哪里？",
    answer: (
      <TBlock
        en={
          <>
            <p>
              We are conveniently located at the 15th floor of Fortune Centre, a 7 minute walk away
              from (EW12/DT14) Bugis MRT station.
            </p>
            <p>Address: 190 Middle Road, #15-06 Fortune Centre, Singapore 188979.</p>
          </>
        }
        zh={
          <>
            <p>
              我们位于 Fortune Centre 15 楼，距（EW12/DT14）武吉士地铁站步行约 7 分钟，交通便利。
            </p>
            <p>地址：190 Middle Road, #15-06 Fortune Centre, Singapore 188979。</p>
          </>
        }
      />
    ),
  },
];

export default function AboutPage() {
  return (
    <div>
      <PageBanner
        kicker={<T en="Who We Are" zh="关于我们" />}
        title={<T en="About EduStar" zh="关于 EduStar" />}
        intro={
          <T
            en="A MOE-registered education centre built on academic excellence, global perspectives, and a genuine commitment to every student’s success."
            zh="一所 MOE 注册教育中心，以学术卓越、全球视野与对每位学生成功的真挚承诺为根基。"
          />
        }
      />

      {/* Our Story */}
      <section className="section-pad">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              align="left"
              title={<T en="Our Story" zh="我们的故事" />}
              subtitle={
                <T
                  en="From a shared vision among educators to a trusted cross-border education network."
                  zh="从教育者的共同愿景，成长为值得信赖的跨境教育网络。"
                />
              }
            />
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-navy-2/90 sm:text-base">
              <p>
                <T
                  en={
                    <>
                      EduStar was founded in <strong>2015 in Singapore</strong>, born from a shared
                      vision among a group of educators from{" "}
                      <strong>NUS, NTU, MOE-registered teachers, and IB-certified instructors</strong>
                      .
                    </>
                  }
                  zh={
                    <>
                      EduStar 于 <strong>2015 年在新加坡</strong>创立，源自一群来自{" "}
                      <strong>NUS、NTU 的教育工作者、MOE 注册教师与 IB 认证教师</strong>的共同愿景。
                    </>
                  }
                />
              </p>
              <p>
                <T
                  en={
                    <>
                      At the time, the founders noticed a growing gap in support for students
                      navigating both{" "}
                      <strong>international curricula (IB, IGCSE, A-Level)</strong> and{" "}
                      <strong>Singapore’s rigorous local system (PSLE, O-Level, IP, JC)</strong>.
                      Many families struggled with academic planning, study strategies, and pathway
                      decisions, and high-quality, personalised guidance was scarce.
                    </>
                  }
                  zh={
                    <>
                      当时，创始团队发现，无论选择{" "}
                      <strong>国际课程（IB、IGCSE、A-Level）</strong>还是{" "}
                      <strong>新加坡严谨的本地体系（PSLE、O-Level、IP、JC）</strong>
                      ，学生所获得的支持都存在明显缺口。许多家庭在学业规划、学习策略与升学路径选择上感到困惑，而高质量、个性化的指导十分稀缺。
                    </>
                  }
                />
              </p>
              <p>
                <T
                  en={
                    <>
                      To address this need, they established EduStar as a centre that combines{" "}
                      <strong>
                        academic excellence, global educational perspectives, and results-driven
                        teaching methods
                      </strong>
                      .
                    </>
                  }
                  zh={
                    <>
                      为回应这一需求，他们创办了 EduStar —— 一所融合{" "}
                      <strong>学术卓越、全球教育视野与以成果为导向的教学方法</strong>的中心。
                    </>
                  }
                />
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Carousel slides={slides} />
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-mist py-14">
        <div className="container-x">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.en} className="text-center">
                <Counter
                  value={stat.value}
                  suffix={stat.suffix ?? ""}
                  className="block text-4xl font-extrabold text-navy"
                />
                <span className="mt-2 block text-sm font-medium text-tertiary">
                  <T en={stat.en} zh={stat.zh} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy / Mission / Vision */}
      <section className="section-pad">
        <div className="container-x grid gap-7 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.titleEn} delay={index * 90}>
              <article className="h-full rounded-[18px] border-t-4 border-accent bg-white p-8 shadow-[0_10px_30px_rgba(26,29,79,0.07)]">
                <h3 className="text-xl font-bold text-navy">
                  <T en={pillar.titleEn} zh={pillar.titleZh} />
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-navy-2/85">
                  <T en={pillar.bodyEn} zh={pillar.bodyZh} />
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Our Growth */}
      <section className="bg-mist section-pad">
        <div className="container-x">
          <Reveal>
            <SectionHeading title={<T en="Our Growth" zh="我们的发展" />} />
          </Reveal>
          <div className="mx-auto mt-8 max-w-3xl space-y-4 text-[15px] leading-relaxed text-navy-2/90 sm:text-base">
            <p>
              <T
                en={
                  <>
                    What began as a small team teaching just a few dozen students has, over the past
                    ten years, grown into a trusted education brand with three international branches
                    in <strong>Toronto (Canada), Shanghai (China), and Dalian (China)</strong>.
                  </>
                }
                zh={
                  <>
                    从最初只教授几十名学生的几人小团队，到如今，EduStar
                    已走过十年，成长为值得信赖的教育品牌，并在
                    <strong>多伦多（加拿大）、上海（中国）与大连（中国）</strong>设有三个海外分支。
                  </>
                }
              />
            </p>
            <p>
              <T
                en={
                  <>
                    In addition to academic programmes, EduStar expanded into{" "}
                    <strong>university admissions consulting and long-term academic planning</strong>,
                    supporting students through their full educational journey.
                  </>
                }
                zh={
                  <>
                    除学术课程外，EduStar 还将业务拓展至
                    <strong>大学申请咨询与长期学业规划</strong>，陪伴学生走完完整的求学旅程。
                  </>
                }
              />
            </p>
            <p>
              <T
                en={
                  <>
                    EduStar also founded the{" "}
                    <strong>Singapore Mathematics International League (SMIL)</strong>, promoting
                    Singapore Mathematics excellence globally through competitions, teaching
                    resources, and specialised training programmes.
                  </>
                }
                zh={
                  <>
                    EduStar 还创办了
                    <strong>新加坡数学国际联盟（SMIL）</strong>
                    ，通过竞赛、教学资源与专项培训，在全球推广新加坡数学的卓越成果。
                  </>
                }
              />
            </p>
            <p>
              <T
                en={
                  <>
                    Today, EduStar stands as a <strong>cross-border education network</strong>,
                    bridging East and West, and shaping future-ready learners through professional
                    teaching, personalised support, and an unwavering commitment to student success.
                  </>
                }
                zh={
                  <>
                    如今，EduStar 已成为<strong>连接东西方的跨境教育网络</strong>
                    ，凭借专业教学、个性化支持与对学员成功始终如一的承诺，培养面向未来的学习者。
                  </>
                }
              />
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-pad">
        <div className="container-x">
          <Reveal>
            <SectionHeading title={<T en="Common FAQs" zh="常见问题" />} />
          </Reveal>
          <div className="mt-12">
            <Accordion items={faqs} />
          </div>
        </div>
      </section>

      <CtaSection
        title={<T en="Still have questions?" zh="还有疑问？" />}
        description={
          <T
            en="Talk to our team and find the right pathway for your child — book a free trial lesson today."
            zh="与我们的团队聊聊，为你的孩子找到合适的升学路径 —— 现在就预约免费试听课。"
          />
        }
        buttonLabel={<T en="Book a Free Trial" zh="预约免费试听" />}
        buttonHref="/contact"
      />
    </div>
  );
}
