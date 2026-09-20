import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
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
    quote:
      "Edu Star transformed my academic journey. The personalized attention and expert guidance helped me excel in my A Level exams and secure a spot at my dream university. The supportive environment and dedicated teachers made all the difference. I highly recommend Edu Star to anyone aiming for academic success!",
    name: "Kiera Huang",
    meta: "HCI",
  },
  {
    quote: "Edu Star helped me achieve my dream of getting into my top-choice university!",
    name: "Diana Zhang",
    meta: "CIS",
  },
  {
    quote:
      "The personalized support at Edu Star made all the difference in my A-Level success.",
    name: "Kyle He",
    meta: "UWCSEA Dover",
  },
  {
    quote:
      "Edu Star transformed my academic journey, providing personalized guidance that helped me excel in my A-Levels and secure university admission.",
    name: "Ethen Teo",
    meta: "ACS",
  },
  {
    quote:
      "With Edu Star’s guidance, I not only excelled in the IB program but also gained the skills needed for lifelong learning.",
    name: "Aria Walker",
    meta: "Dunman High",
  },
  {
    quote:
      "Edu Star’s unique blend of personalized teaching and up-to-date curriculum prepared me thoroughly for the A-Levels and beyond.",
    name: "Thomas Doe",
    meta: "NJC",
  },
  {
    quote:
      "Edu Star’s supportive environment and expert coaching helped me overcome challenges and excel in my IGCSE exams, paving the way for future success.",
    name: "Joan Elizabeth",
    meta: "ACIS",
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
                What They Say About Us
              </h1>
              <p className="mt-6 text-base text-navy-2/90 sm:text-lg">
                Testimonials build trust and credibility by showcasing real success stories,
                helping prospective students feel confident in choosing Edu Star.
              </p>
              <div className="mt-6 flex flex-col items-center gap-1">
                <div className="flex items-center gap-1.5">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FaStar key={index} className="h-5 w-5 text-accent" aria-hidden />
                  ))}
                  <span className="ml-2 text-lg font-bold text-navy">4.8/5</span>
                </div>
                <p className="text-sm font-semibold uppercase tracking-wide text-tertiary">
                  Costumer’s Rating
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <Reveal key={item.name} delay={(index % 3) * 90}>
                <div className="flex h-full flex-col">
                  <TestimonialCard quote={item.quote} name={item.name} meta={item.meta} />
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
        <Image
          src="/images/classroom.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/80" aria-hidden />
        <div className="container-x relative py-24 text-center text-white">
          <Reveal>
            <h2 className="text-3xl font-bold text-white sm:text-[2.4rem]">BOOK A TRIAL LESSON</h2>
            <p className="mx-auto mt-6 max-w-3xl text-white/90">
              Experience our personalized education with a trial lesson. Explore how Edu Star, an
              MOE-registered center, can help you excel in IB, A-Level, or secure admission to your
              dream university. Tailored teaching for every student’s success. Book your trial today
              and start your journey to academic excellence!
            </p>
            <Link
              href="/contact"
              className="btn-shine mt-8 inline-flex rounded-pill bg-gradient-to-br from-accent to-accent-bright px-8 py-4 text-lg font-bold text-white shadow-[0_8px_24px_rgba(249,167,30,0.4)] transition-transform hover:-translate-y-0.5"
            >
              Book A Trial Lesson Now
            </Link>
            <p className="mt-6 text-sm uppercase tracking-[0.2em] text-white/70">
              wechat/whatsapp
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
