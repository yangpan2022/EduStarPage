import type { Metadata } from "next";
import Carousel from "@/components/Carousel";
import Counter from "@/components/Counter";
import Reveal from "@/components/Reveal";
import Accordion, { type AccordionItem } from "@/components/Accordion";
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
    title: "The Philosophy",
    body: "We believe that every student learns differently. EduStar’s teaching philosophy is built on personalised learning, global perspectives, and future-focused guidance.",
  },
  {
    title: "The Mission",
    body: "To give students a clear, step-by-step academic and admissions roadmap that prepares them for success in every stage of their future.",
  },
  {
    title: "The Vision",
    body: "To become a leading cross-border education technology enterprise that transforms learning through personalized guidance, future-oriented insights, and global opportunities.",
  },
];

const stats = [
  { value: 10, label: "Years of Experience" },
  { value: 5000, label: "Students Trained" },
  { value: 15, label: "Teaching Experts" },
  { value: 95, label: "% Satisfaction Rate", suffix: "%" },
];

const faqs: AccordionItem[] = [
  {
    question: "What services does EduStar provide?",
    answer: (
      <>
        <p>
          We specialise in both international curricula (IB/A-Level/IGCSE) and Singapore’s rigorous
          local system (PSLE/O-Level/IP/JC), giving students seamless support across pathways.
        </p>
        <p>
          We also provide university admissions consulting and long-term academic planning,
          supporting students through their full educational journey.
        </p>
      </>
    ),
  },
  {
    question: "What is special about EduStar?",
    answer: (
      <>
        <p>
          We provide structured, year-by-year academic and university planning so every student
          knows exactly what to do at every stage of their journey.
        </p>
        <p>
          Every student receives a customised learning plan tailored to their strengths, weaknesses,
          and goals—not a one-size-fits-all class.
        </p>
        <p>
          We integrate innovative tools, intelligent systems, and digital resources to make learning
          more efficient, visual, and adaptive.
        </p>
        <p>
          With branches in Singapore, Canada, and China, we offer students global learning exposure
          and international opportunities unavailable in typical tuition centres.
        </p>
        <p>
          Our in-house Singapore Math programme and international league deliver world-class
          training, competitions, and curriculum innovation.
        </p>
        <p>
          We focus on measurable progress—academic improvement, admissions outcomes, and long-term
          growth—rather than simply covering more content.
        </p>
      </>
    ),
  },
  {
    question: "How do we book a trial lesson?",
    answer: (
      <p>
        Simply click on the “Book Trial” button on the top-right corner of the website, we will
        contact you soon upon receiving the form!
      </p>
    ),
  },
  {
    question: "I’m interested in a course that’s not listed on the website, is it provided?",
    answer: (
      <p>
        Simply send us an inquiry over WhatsApp (8858 2378) or email ({site.emailAlt}), we provide a
        quality learning experience tailored to your needs.
      </p>
    ),
  },
  {
    question: "Where is the centre located?",
    answer: (
      <>
        <p>
          We are conveniently located at the 15th floor of Fortune Centre, a 7 minute walk away from
          (EW12/DT14) Bugis MRT station.
        </p>
        <p>Address: 190 Middle Road, #15-06 Fortune Centre, Singapore 188979.</p>
      </>
    ),
  },
];

export default function AboutPage() {
  return (
    <div>
      <PageBanner
        kicker="Who We Are"
        title="About EduStar"
        intro="A MOE-registered education centre built on academic excellence, global perspectives, and a genuine commitment to every student’s success."
      />

      {/* Our Story */}
      <section className="section-pad">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              align="left"
              title="Our Story"
              subtitle="From a shared vision among educators to a trusted cross-border education network."
            />
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-navy-2/90 sm:text-base">
              <p>
                EduStar was founded in <strong>2015 in Singapore</strong>, born from a shared vision
                among a group of educators from{" "}
                <strong>NUS, NTU, MOE-registered teachers, and IB-certified instructors</strong>.
              </p>
              <p>
                At the time, the founders noticed a growing gap in support for students navigating
                both <strong>international curricula (IB, IGCSE, A-Level)</strong> and{" "}
                <strong>Singapore’s rigorous local system (PSLE, O-Level, IP, JC)</strong>. Many
                families struggled with academic planning, study strategies, and pathway decisions,
                and high-quality, personalised guidance was scarce.
              </p>
              <p>
                To address this need, they established EduStar as a centre that combines{" "}
                <strong>
                  academic excellence, global educational perspectives, and results-driven teaching
                  methods
                </strong>
                .
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
              <div key={stat.label} className="text-center">
                <Counter
                  value={stat.value}
                  suffix={stat.suffix ?? ""}
                  className="block text-4xl font-extrabold text-navy"
                />
                <span className="mt-2 block text-sm font-medium text-tertiary">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy / Mission / Vision */}
      <section className="section-pad">
        <div className="container-x grid gap-7 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 90}>
              <article className="h-full rounded-[18px] border-t-4 border-accent bg-white p-8 shadow-[0_10px_30px_rgba(26,29,79,0.07)]">
                <h3 className="text-xl font-bold text-navy">{pillar.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-navy-2/85">{pillar.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Our Growth */}
      <section className="bg-mist section-pad">
        <div className="container-x">
          <Reveal>
            <SectionHeading title="Our Growth" />
          </Reveal>
          <div className="mx-auto mt-8 max-w-3xl space-y-4 text-[15px] leading-relaxed text-navy-2/90 sm:text-base">
            <p>
              What began as a small team teaching just a few dozen students has, over the past ten
              years, grown into a trusted education brand with three international branches in{" "}
              <strong>Toronto (Canada), Shanghai (China), and Dalian (China)</strong>.
            </p>
            <p>
              In addition to academic programmes, EduStar expanded into{" "}
              <strong>university admissions consulting and long-term academic planning</strong>,
              supporting students through their full educational journey.
            </p>
            <p>
              EduStar also founded the{" "}
              <strong>Singapore Mathematics International League (SMIL)</strong>, promoting Singapore
              Mathematics excellence globally through competitions, teaching resources, and
              specialised training programmes.
            </p>
            <p>
              Today, EduStar stands as a <strong>cross-border education network</strong>, bridging
              East and West, and shaping future-ready learners through professional teaching,
              personalised support, and an unwavering commitment to student success.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-pad">
        <div className="container-x">
          <Reveal>
            <SectionHeading title="Common FAQs" />
          </Reveal>
          <div className="mt-12">
            <Accordion items={faqs} />
          </div>
        </div>
      </section>

      <CtaSection
        title="Still have questions?"
        description="Talk to our team and find the right pathway for your child — book a free trial lesson today."
        buttonLabel="Book a Free Trial"
        buttonHref="/contact"
      />
    </div>
  );
}
