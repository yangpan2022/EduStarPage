"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useLang } from "@/components/LanguageProvider";

type Lang = "en" | "zh";
type Curric = "IB" | "AL" | "IGCSE" | "OTHER";
type Cca = "none" | "light" | "moderate" | "strong";
type Dest = "any" | "UK" | "US" | "SG" | "AU" | "HK";
type Tier = "top10" | "top50" | "top100";

const CCA_VALUES: Record<Cca, number> = { none: 0, light: 15, moderate: 35, strong: 60 };

const GRADE_CONTENT: Record<
  Curric,
  Record<Lang, { title: string; sub: string; meta?: string; pills?: string[] }>
> = {
  IB: {
    en: {
      title: "What is your predicted IB score?",
      sub: "The maximum IB Diploma score is 45 points.",
      meta: "24 (minimum pass) — 45 (perfect score)",
    },
    zh: {
      title: "您的 IB 预测分数是多少？",
      sub: "IB 文凭满分为 45 分。",
      meta: "24 分（最低通过分）— 45 分（满分）",
    },
  },
  AL: {
    en: {
      title: "What is your expected A-Level result?",
      sub: "Select the grade profile that best describes your predicted performance.",
      pills: ["Straight A* (4 subjects)", "A*A*A or A*A*A*", "AAA or A*AB", "ABB or BBB", "BBC or lower"],
    },
    zh: {
      title: "您预期的 A-Level 成绩如何？",
      sub: "请选择最接近您预期成绩的选项。",
      pills: ["四科全 A*", "A*A*A 或 A*A*A*", "AAA 或 A*AB", "ABB 或 BBB", "BBC 或以下"],
    },
  },
  IGCSE: {
    en: {
      title: "What is your current IGCSE performance?",
      sub: "Select the grade range that best reflects your results.",
      pills: ["Mostly A* (7–9 subjects)", "Mix of A* and A", "Mostly A and B", "B–C range"],
    },
    zh: {
      title: "您目前的 IGCSE 成绩如何？",
      sub: "请选择最能反映您成绩的选项。",
      pills: ["大部分 A*（7–9 科）", "A* 与 A 的组合", "大部分 A 和 B", "B–C 区间"],
    },
  },
  OTHER: {
    en: {
      title: "What is your estimated GPA or academic standing?",
      sub: "Use a 4.0 scale or choose the level closest to your performance.",
      pills: ["4.0 / Top 5% of class", "3.7–3.9 / Top 15%", "3.3–3.6 / Top 30%", "Below 3.3"],
    },
    zh: {
      title: "您的 GPA 或学业排名大概在哪个区间？",
      sub: "请参照 4.0 制，或选择最接近您实际情况的选项。",
      pills: ["4.0 / 全班前 5%", "3.7–3.9 / 全班前 15%", "3.3–3.6 / 全班前 30%", "3.3 以下"],
    },
  },
};

const PILL_VALUES: Record<Curric, number[]> = {
  IB: [],
  AL: [100, 88, 78, 65, 50],
  IGCSE: [95, 80, 65, 50],
  OTHER: [100, 85, 72, 58],
};

const TIER_DATA: Record<Tier, { label: Record<Lang, string>; headline: Record<Lang, string>; blurb: Record<Lang, string> }> = {
  top10: {
    label: { en: "QS Top 10", zh: "QS 全球前 10" },
    headline: {
      en: "You can aim for the world’s most elite universities.",
      zh: "您有实力冲击全球顶尖名校。",
    },
    blurb: {
      en: "Your academic profile is highly competitive for universities ranked in the global top 10. Pair this with compelling personal statements and a strategic application approach.",
      zh: "您的学术成绩在全球排名前十的大学申请中极具竞争力。配合精彩的个人陈述和有针对性的申请策略，成功可期。",
    },
  },
  top50: {
    label: { en: "QS Top 50", zh: "QS 全球前 50" },
    headline: {
      en: "You are a strong candidate for top 50 global universities.",
      zh: "您是全球前 50 名校的有力申请者。",
    },
    blurb: {
      en: "Your profile is well-suited for highly selective universities in the QS top 50. A strong personal statement and careful school selection will maximise your chances.",
      zh: "您的综合条件非常适合 QS 前 50 的高选择性院校。出色的个人陈述与精准的择校将大大提升录取机会。",
    },
  },
  top100: {
    label: { en: "QS Top 100", zh: "QS 全球前 100" },
    headline: {
      en: "You are competitive for top 100 universities worldwide.",
      zh: "您在全球前 100 大学中具备竞争力。",
    },
    blurb: {
      en: "With the right strategy and polished applications, you can secure admission to excellent universities in the QS top 100. Consider building your profile further for stretch goals.",
      zh: "通过合理的申请策略和精心打磨的申请材料，您可以进入 QS 前 100 的优秀大学。若想冲击更高目标，可继续丰富个人背景。",
    },
  },
};

type CountryData = {
  name: Record<Lang, string>;
  flag: string;
  why: Record<`en_${"weak" | "str"}` | `zh_${"weak" | "str"}`, string>;
  unis: Record<Tier, string[]>;
};

const COUNTRY_MAP: Record<Exclude<Dest, "any">, CountryData> = {
  UK: {
    name: { en: "United Kingdom", zh: "英国" },
    flag: "🇬🇧",
    why: {
      en_weak: "UK universities heavily weight academic results — an ideal system for academically focused students.",
      en_str: "Strong academics combined with extracurriculars will help distinguish you at competitive UK institutions.",
      zh_weak: "英国大学以学术成绩为主要录取标准，非常适合专注于学业的学生。",
      zh_str: "优异的成绩配合丰富的课外活动，将使您在英国顶尖院校的竞争中脱颖而出。",
    },
    unis: {
      top10: ["Oxford", "Cambridge", "Imperial College", "LSE", "UCL"],
      top50: ["Edinburgh", "Manchester", "King’s College", "Warwick", "Bristol"],
      top100: ["Leeds", "Birmingham", "Sheffield", "Bath", "Exeter"],
    },
  },
  US: {
    name: { en: "United States", zh: "美国" },
    flag: "🇺🇸",
    why: {
      en_weak: "US admissions use holistic review — extracurriculars, essays, and leadership are weighted alongside grades. A strong fit for well-rounded profiles.",
      en_str: "US admissions use holistic review — extracurriculars, essays, and leadership are weighted alongside grades. A strong fit for well-rounded profiles.",
      zh_weak: "美国大学采用综合评审制度，课外活动、文书和领导力与成绩同等重要，非常适合综合发展的学生。",
      zh_str: "美国大学采用综合评审制度，课外活动、文书和领导力与成绩同等重要，非常适合综合发展的学生。",
    },
    unis: {
      top10: ["MIT", "Stanford", "Harvard", "Princeton", "Yale"],
      top50: ["NYU", "UC Berkeley", "UCLA", "Georgetown", "Vanderbilt"],
      top100: ["Purdue", "UMass Amherst", "UC Davis", "Indiana University", "Ohio State"],
    },
  },
  SG: {
    name: { en: "Singapore", zh: "新加坡" },
    flag: "🇸🇬",
    why: {
      en_weak: "NUS and NTU are among Asia’s top universities and are highly accessible for students with strong IB or A-Level results.",
      en_str: "NUS and NTU are among Asia’s top universities and are highly accessible for students with strong IB or A-Level results.",
      zh_weak: "南洋理工大学和新加坡国立大学是亚洲顶尖高校，对 IB 或 A-Level 成绩优秀的学生非常友好。",
      zh_str: "南洋理工大学和新加坡国立大学是亚洲顶尖高校，对 IB 或 A-Level 成绩优秀的学生非常友好。",
    },
    unis: {
      top10: ["NUS", "NTU"],
      top50: ["NUS", "NTU", "SMU"],
      top100: ["NUS", "NTU", "SMU", "SUTD"],
    },
  },
  AU: {
    name: { en: "Australia", zh: "澳大利亚" },
    flag: "🇦🇺",
    why: {
      en_weak: "Australia’s Group of Eight universities offer excellent programmes and are accessible for international students with solid academics.",
      en_str: "Australia’s Group of Eight universities offer excellent programmes and are accessible for international students with solid academics.",
      zh_weak: "澳大利亚八校联盟提供一流的学术项目，对学术成绩良好的国际学生较为友好。",
      zh_str: "澳大利亚八校联盟提供一流的学术项目，对学术成绩良好的国际学生较为友好。",
    },
    unis: {
      top10: ["University of Melbourne", "ANU"],
      top50: ["University of Sydney", "UNSW", "University of Queensland"],
      top100: ["Monash University", "University of Adelaide", "UWA"],
    },
  },
  HK: {
    name: { en: "Hong Kong", zh: "香港" },
    flag: "🇭🇰",
    why: {
      en_weak: "HKU and HKUST are world-class institutions with strong regional recognition and merit-based admissions processes.",
      en_str: "HKU and HKUST are world-class institutions with strong regional recognition and merit-based admissions processes.",
      zh_weak: "香港大学和香港科技大学是享誉全球的顶尖院校，在亚太地区具有极高的认可度，录取以成绩为主要标准。",
      zh_str: "香港大学和香港科技大学是享誉全球的顶尖院校，在亚太地区具有极高的认可度，录取以成绩为主要标准。",
    },
    unis: {
      top10: ["HKU", "HKUST"],
      top50: ["HKU", "HKUST", "CUHK"],
      top100: ["HKU", "HKUST", "CUHK", "CityU HK"],
    },
  },
};

const T = {
  en: {
    step: (n: number) => `Step ${n} of 5`,
    continue: "Continue →",
    seeResult: "See my result →",
    gradeTitle: "What grade are you currently in?",
    gradeSub:
      "This helps us understand where you are in your academic journey and your timeline for university applications.",
    grades: ["Grade 9", "Grade 10", "Grade 11", "Grade 12"],
    curricTitle: "Which curriculum are you following?",
    curricSub:
      "Different programmes have different grading scales and are recognised differently by universities worldwide.",
    currics: [
      "IB (International Baccalaureate)",
      "A-Levels",
      "IGCSE / O-Levels",
      "Other (AP / Local / etc.)",
    ],
    ccaTitle: "How active are you in extracurricular activities?",
    ccaSub:
      "Think about CCAs, clubs, sports, competitions, volunteering, leadership roles, and personal projects outside of class.",
    cca: [
      { title: "Minimal", desc: "Little to no extracurricular involvement. Focus has been primarily on academics." },
      { title: "Light", desc: "1–2 activities with some participation but no major leadership roles or awards." },
      { title: "Moderate", desc: "2–4 activities with some leadership, competition experience, or community work." },
      { title: "Strong", desc: "4+ activities with leadership positions, awards, and meaningful community impact." },
    ],
    destTitle: "Any preferred study destination?",
    destSub:
      "Optional — if you have a region in mind, we’ll factor that into your recommendations. Otherwise, we’ll suggest the best fit based on your profile.",
    dests: ["No preference", "UK", "US", "Singapore", "Australia", "Hong Kong"],
    destLabel: "Recommended study destinations",
    topRec: "★ Top recommendation",
    also: "Also consider",
    exampleUnis: (name: string) => `Example universities — ${name}`,
    ctaTitle: "Want a personalised university plan?",
    ctaSub:
      "Our consultants can review your full profile — grades, CCAs, and target universities — and map out a step-by-step application strategy tailored to you.",
    whatsapp: "WhatsApp us",
    instagram: "DM on Instagram",
    wechatTitle: "Or add us on WeChat (企业微信)",
    wechatSub: "Scan the QR code below to connect with our team directly on WeChat.",
    wechatHint: "WeChat · 企业微信",
    restart: "Start over",
    footer: "Built by EduStar · University Admissions Consulting · Singapore",
    quizTitle: "EduStar University Quiz",
  },
  zh: {
    step: (n: number) => `第 ${n} 步，共 5 步`,
    continue: "继续 →",
    seeResult: "查看我的结果 →",
    gradeTitle: "您目前就读几年级？",
    gradeSub: "这有助于我们了解您目前的学习阶段，以及申请大学的时间规划。",
    grades: ["九年级", "十年级", "十一年级", "十二年级"],
    curricTitle: "您目前就读的课程是？",
    curricSub: "不同课程的评分标准不同，各国大学对其认可程度也有所差异。",
    currics: ["IB（国际文凭）", "A-Level 课程", "IGCSE / O-Level", "其他（AP / 本地课程等）"],
    ccaTitle: "您参与课外活动的程度如何？",
    ccaSub:
      "请考虑课外活动（CCA）、社团、体育运动、比赛、志愿服务、领导岗位及课余个人项目等。",
    cca: [
      { title: "极少参与", desc: "几乎没有参与课外活动，主要专注于学业。" },
      { title: "较少参与", desc: "参与 1–2 项活动，但无重要领导职务或奖项。" },
      { title: "适度参与", desc: "参与 2–4 项活动，具备一定领导经验、比赛经历或社区服务。" },
      { title: "积极参与", desc: "参与 4 项及以上活动，担任领导职务、获得奖项，并对社区有实质性贡献。" },
    ],
    destTitle: "您有意向的留学目的地吗？",
    destSub:
      "可选填 — 若您心仪某个地区，我们将结合该偏好为您推荐。否则我们将根据您的综合情况给出最适合的建议。",
    dests: ["无偏好", "英国", "美国", "新加坡", "澳大利亚", "香港"],
    destLabel: "推荐留学目的地",
    topRec: "★ 首选推荐",
    also: "也可考虑",
    exampleUnis: (name: string) => `参考院校 — ${name}`,
    ctaTitle: "想获得专属大学申请规划？",
    ctaSub:
      "我们的顾问将全面评估您的成绩、课外活动及目标院校，为您量身定制详细的申请策略。",
    whatsapp: "WhatsApp 联系我们",
    instagram: "Instagram 私信",
    wechatTitle: "或扫码添加企业微信",
    wechatSub: "扫描下方二维码，直接与我们的顾问团队微信联系。",
    wechatHint: "企业微信",
    restart: "重新开始",
    footer: "由 EduStar 出品 · 大学申请顾问 · 新加坡",
    quizTitle: "EduStar 升学测评",
  },
};

const GRADE_VALUES = [9, 10, 11, 12];
const CURRIC_VALUES: Curric[] = ["IB", "AL", "IGCSE", "OTHER"];
const CCA_KEYS: Cca[] = ["none", "light", "moderate", "strong"];
const DEST_VALUES: Dest[] = ["any", "UK", "US", "SG", "AU", "HK"];

function calcTier(curric: Curric | null, score: number | null, cca: Cca | null): Tier {
  let gradeScore = 0;
  if (curric === "IB") {
    const s = score ?? 36;
    if (s >= 42) gradeScore = 100;
    else if (s >= 38) gradeScore = 82;
    else if (s >= 34) gradeScore = 65;
    else if (s >= 30) gradeScore = 48;
    else gradeScore = 30;
  } else {
    gradeScore = score ?? 50;
  }
  const ccaScore = cca ? CCA_VALUES[cca] : 0;
  const total = gradeScore * 0.65 + ccaScore * 0.35;
  if (total >= 80) return "top10";
  if (total >= 60) return "top50";
  return "top100";
}

type Rec = { name: string; flag: string; why: string; unis: string[]; primary: boolean };

function countryRec(dest: Exclude<Dest, "any">, tier: Tier, lang: Lang, strong: boolean): Rec {
  const d = COUNTRY_MAP[dest];
  const why = strong ? d.why[`${lang}_str`] : d.why[`${lang}_weak`];
  return { name: d.name[lang], flag: d.flag, why, unis: d.unis[tier], primary: false };
}

function getCountryRecs(dest: Dest, tier: Tier, lang: Lang, cca: Cca | null): Rec[] {
  const strong = cca === "strong" || cca === "moderate";
  const order: Exclude<Dest, "any">[] = ["UK", "US", "SG", "AU", "HK"];
  if (dest !== "any") {
    const forced = countryRec(dest, tier, lang, strong);
    forced.primary = true;
    const others = order
      .filter((d) => d !== dest)
      .slice(0, 2)
      .map((d) => countryRec(d, tier, lang, strong));
    return [forced, ...others];
  }
  const list = strong ? (["US", "UK", "AU"] as const) : (["UK", "SG", "HK"] as const);
  return list.map((d, index) => {
    const rec = countryRec(d, tier, lang, strong);
    if (index === 0) rec.primary = true;
    return rec;
  });
}

export default function UniversityQuiz() {
  const { lang, setLang } = useLang();
  const [step, setStep] = useState(1);
  const [showResult, setShowResult] = useState(false);
  const [grade, setGrade] = useState<number | null>(null);
  const [curric, setCurric] = useState<Curric | null>(null);
  const [score, setScore] = useState<number | null>(null);
  const [cca, setCca] = useState<Cca | null>(null);
  const [dest, setDest] = useState<Dest>("any");

  const t = T[lang];
  const progress = showResult ? 100 : Math.round((step / 5) * 100);

  const result = useMemo(() => {
    const tier = calcTier(curric, score, cca);
    return { tier, recs: getCountryRecs(dest, tier, lang, cca) };
  }, [curric, score, cca, dest, lang]);

  function goTo(n: number) {
    setShowResult(false);
    setStep(n);
    if (typeof document !== "undefined") {
      document.getElementById("eq-quiz")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function reset() {
    setGrade(null);
    setCurric(null);
    setScore(null);
    setCca(null);
    setDest("any");
    setShowResult(false);
    setStep(1);
  }

  const pillBase =
    "cursor-pointer rounded-xl border px-5 py-3 text-sm font-medium transition-all duration-200";
  const pillOn = "border-accent bg-accent text-navy shadow-[0_6px_18px_rgba(249,167,30,0.35)]";
  const pillOff = "border-black/10 bg-white text-navy-2 hover:border-accent hover:text-accent";

  const nextBtn = (disabled: boolean) =>
    `mt-8 w-full rounded-xl px-6 py-3.5 text-base font-bold text-white transition-all sm:w-auto ${
      disabled
        ? "cursor-not-allowed bg-navy/25"
        : "btn-shine bg-gradient-to-br from-accent to-accent-bright shadow-[0_8px_24px_rgba(249,167,30,0.4)] hover:-translate-y-0.5"
    }`;

  return (
    <div
      id="eq-quiz"
      className="mx-auto max-w-3xl rounded-[24px] bg-white p-6 shadow-[0_25px_60px_rgba(26,29,79,0.14)] sm:p-10"
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between gap-4">
        <div className="text-lg font-extrabold text-navy sm:text-xl">
          EduStar <span className="text-accent">University Quiz</span>
        </div>
        <div className="flex rounded-full border border-black/10 p-1">
          {(["en", "zh"] as Lang[]).map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setLang(option)}
              className={`rounded-full px-3.5 py-1.5 text-sm font-semibold transition ${
                lang === option ? "bg-navy text-white" : "text-navy-2"
              }`}
            >
              {option === "en" ? "EN" : "中文"}
            </button>
          ))}
        </div>
      </div>

      {/* Progress */}
      <div className="mb-8 h-2 w-full overflow-hidden rounded-full bg-mist">
        <div
          className="h-full rounded-full bg-gradient-to-r from-accent to-accent-bright transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {!showResult ? (
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {t.step(step)}
          </span>

          {/* Step 1: Grade */}
          {step === 1 && (
            <>
              <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">{t.gradeTitle}</h2>
              <p className="mt-2 text-sm text-navy-2/85 sm:text-base">{t.gradeSub}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {GRADE_VALUES.map((value, index) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setGrade(value)}
                    className={`${pillBase} ${grade === value ? pillOn : pillOff}`}
                  >
                    {t.grades[index]}
                  </button>
                ))}
              </div>
              <button type="button" disabled={grade === null} onClick={() => goTo(2)} className={nextBtn(grade === null)}>
                {t.continue}
              </button>
            </>
          )}

          {/* Step 2: Curriculum */}
          {step === 2 && (
            <>
              <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">{t.curricTitle}</h2>
              <p className="mt-2 text-sm text-navy-2/85 sm:text-base">{t.curricSub}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {CURRIC_VALUES.map((value, index) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => {
                      setCurric(value);
                      setScore(value === "IB" ? 36 : null);
                    }}
                    className={`${pillBase} ${curric === value ? pillOn : pillOff}`}
                  >
                    {t.currics[index]}
                  </button>
                ))}
              </div>
              <button type="button" disabled={curric === null} onClick={() => goTo(3)} className={nextBtn(curric === null)}>
                {t.continue}
              </button>
            </>
          )}

          {/* Step 3: Grades (dynamic) */}
          {step === 3 && curric && (
            <>
              <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">
                {GRADE_CONTENT[curric][lang].title}
              </h2>
              <p className="mt-2 text-sm text-navy-2/85 sm:text-base">
                {GRADE_CONTENT[curric][lang].sub}
              </p>

              {curric === "IB" ? (
                <div className="mt-8">
                  <div className="flex items-center gap-5">
                    <input
                      type="range"
                      min={24}
                      max={45}
                      step={1}
                      value={score ?? 36}
                      onChange={(event) => setScore(Number(event.target.value))}
                      className="h-2 flex-1 cursor-pointer appearance-none rounded-full bg-mist accent-accent"
                      aria-label="IB predicted score"
                    />
                    <span className="flex h-11 w-14 items-center justify-center rounded-xl bg-navy text-lg font-bold text-accent">
                      {score ?? 36}
                    </span>
                  </div>
                  <p className="mt-3 text-xs text-tertiary">{GRADE_CONTENT.IB[lang].meta}</p>
                </div>
              ) : (
                <div className="mt-6 flex flex-wrap gap-3">
                  {GRADE_CONTENT[curric][lang].pills?.map((label, index) => {
                    const value = PILL_VALUES[curric][index];
                    return (
                      <button
                        key={label}
                        type="button"
                        onClick={() => setScore(value)}
                        className={`${pillBase} ${score === value ? pillOn : pillOff}`}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              )}
              <button type="button" onClick={() => goTo(4)} className={nextBtn(false)}>
                {t.continue}
              </button>
            </>
          )}

          {/* Step 4: CCA */}
          {step === 4 && (
            <>
              <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">{t.ccaTitle}</h2>
              <p className="mt-2 text-sm text-navy-2/85 sm:text-base">{t.ccaSub}</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {CCA_KEYS.map((value, index) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setCca(value)}
                    className={`rounded-2xl border p-5 text-left transition-all duration-200 ${
                      cca === value
                        ? "border-accent bg-accent/10 shadow-[0_10px_26px_rgba(249,167,30,0.25)]"
                        : "border-black/10 bg-white hover:border-accent"
                    }`}
                  >
                    <span className="block font-bold text-navy">{t.cca[index].title}</span>
                    <span className="mt-1 block text-sm text-navy-2/80">{t.cca[index].desc}</span>
                  </button>
                ))}
              </div>
              <button type="button" disabled={cca === null} onClick={() => goTo(5)} className={nextBtn(cca === null)}>
                {t.continue}
              </button>
            </>
          )}

          {/* Step 5: Destination */}
          {step === 5 && (
            <>
              <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">{t.destTitle}</h2>
              <p className="mt-2 text-sm text-navy-2/85 sm:text-base">{t.destSub}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {DEST_VALUES.map((value, index) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setDest(value)}
                    className={`${pillBase} ${dest === value ? pillOn : pillOff}`}
                  >
                    {t.dests[index]}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => {
                  setShowResult(true);
                  document
                    .getElementById("eq-quiz")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={nextBtn(false)}
              >
                {t.seeResult}
              </button>
            </>
          )}
        </div>
      ) : (
        /* Result */
        <div>
          <div className="rounded-[18px] bg-mist p-6 text-center sm:p-8">
            <span className="inline-flex rounded-pill bg-navy px-4 py-1.5 text-sm font-bold text-accent">
              {TIER_DATA[result.tier].label[lang]}
            </span>
            <h2 className="mt-4 text-2xl font-bold text-navy sm:text-3xl">
              {TIER_DATA[result.tier].headline[lang]}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-navy-2/85 sm:text-base">
              {TIER_DATA[result.tier].blurb[lang]}
            </p>
          </div>

          <hr className="my-8 border-black/10" />
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {t.destLabel}
          </p>

          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {result.recs.map((rec) => (
              <div
                key={rec.name}
                className={`rounded-2xl border p-5 ${
                  rec.primary ? "border-accent bg-accent/5" : "border-black/10 bg-white"
                }`}
              >
                <span className="text-xs font-semibold text-accent">
                  {rec.primary ? t.topRec : t.also}
                </span>
                <p className="mt-2 text-lg font-bold text-navy">
                  {rec.flag} {rec.name}
                </p>
                <p className="mt-2 text-sm text-navy-2/80">{rec.why}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl bg-navy p-6">
            <p className="text-sm font-semibold text-accent">
              {t.exampleUnis(result.recs[0].name)}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {result.recs[0].unis.map((uni) => (
                <span
                  key={uni}
                  className="rounded-pill bg-white/10 px-3.5 py-1.5 text-sm text-white"
                >
                  {uni}
                </span>
              ))}
            </div>
          </div>

          <hr className="my-8 border-black/10" />

          <div className="rounded-[18px] bg-mist p-6 text-center sm:p-8">
            <h3 className="text-xl font-bold text-navy sm:text-2xl">{t.ctaTitle}</h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-navy-2/85 sm:text-base">{t.ctaSub}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a
                href="https://wa.me/6588582378"
                target="_blank"
                rel="noreferrer"
                className="rounded-pill bg-accent px-6 py-3 text-sm font-bold text-navy transition hover:bg-[#e6950c] hover:text-white"
              >
                {t.whatsapp}
              </a>
              <a
                href="https://www.instagram.com/edustar_sg/"
                target="_blank"
                rel="noreferrer"
                className="rounded-pill border-2 border-accent px-6 py-3 text-sm font-bold text-accent transition hover:bg-accent/10"
              >
                {t.instagram}
              </a>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center gap-3 rounded-[18px] border border-black/10 p-6 text-center sm:flex-row sm:text-left">
            <Image
              src="/images/wechat-qr.jpeg"
              alt="EduStar WeChat QR Code"
              width={120}
              height={120}
              className="h-28 w-28 rounded-xl object-contain"
            />
            <div>
              <p className="font-semibold text-navy">{t.wechatTitle}</p>
              <p className="mt-1 text-sm text-navy-2/80">{t.wechatSub}</p>
              <p className="mt-2 text-xs uppercase tracking-wide text-tertiary">{t.wechatHint}</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={reset}
              className="rounded-pill border border-navy/20 px-6 py-2.5 text-sm font-semibold text-navy transition hover:border-accent hover:text-accent"
            >
              ↺ {t.restart}
            </button>
          </div>
        </div>
      )}

      <p className="mt-6 text-center text-xs text-tertiary">
        {lang === "en"
          ? "Built by EduStar · University Admissions Consulting · Singapore"
          : T.zh.footer}
      </p>
    </div>
  );
}
