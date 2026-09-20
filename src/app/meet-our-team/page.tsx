import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { CtaSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Meet Our Team",
  description:
    "Meet the EduStar teaching team — NUS, NTU, SMU and IB-certified educators with global academic experience.",
};

const team = [
  {
    name: "Alex",
    credentials:
      "Founder · NUS Graduate · MOE Registered · IB Educator Certificate (University of Toronto)",
    specialisation: "Mathematics and Science",
  },
  {
    name: "Chloe",
    credentials:
      "Founder · NTU Graduate · Advanced studies at Stanford · MOE Registered · IB Educator Certificate (University of Toronto)",
    specialisation: "English and Economics",
  },
  {
    name: "Lau Liyang",
    credentials:
      "Honours Degree in Economics and Statistics from NUS · Advanced studies at UCLA · ASEAN Scholarship recipient",
    specialisation: "Mathematics and Science",
  },
  {
    name: "Joel",
    credentials: "NUS Graduate · Head Teacher at SMIL",
    specialisation: "International Mathematics Education System",
  },
  {
    name: "Shiyun",
    credentials: "SMU Law Graduate · AEIS Program Specialist",
    specialisation: "English",
  },
  {
    name: "Yang Pan",
    credentials:
      "Master degree in Signal Processing at NTU · Top-tier Chinese university degree in Computer Science/AI · Extensive industry experience",
    specialisation: "IB Computer Science, Programming, AI and LLM integration",
  },
  {
    name: "Lok",
    credentials: "Honours Degree in Psychology from NUS · Minor in Communication and New Media",
    specialisation: "Psychology, University Admission Consulting",
  },
  {
    name: "Yueying",
    credentials:
      "PhD in Food Science and Human Nutrition (First Class) from NUS · NUS MSc in Food Science and Human Nutrition · BSc in Food Science and Technology from Hong Kong Baptist University",
    specialisation: "Chemistry, Biology",
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
                Meet Our Expert Team
              </h1>
              <p className="mt-6 text-base text-navy-2/90 sm:text-lg">
                Accomplished educators from Singapore’s leading universities and international
                programmes, dedicated to every student’s progress.
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
                      {member.credentials}
                    </p>
                    <p className="mt-4 rounded-xl bg-mist px-4 py-3 text-sm font-semibold text-navy">
                      <span className="text-tertiary">Specialisation: </span>
                      {member.specialisation}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Learn from Singapore’s top educators"
        description="Book a free trial lesson and experience our personalised teaching approach first-hand."
        buttonLabel="Book a Free Trial"
        buttonHref="/contact"
      />
    </div>
  );
}
