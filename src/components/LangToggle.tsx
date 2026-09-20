"use client";

import { useLang } from "./LanguageProvider";

export default function LangToggle() {
  const { lang, setLang } = useLang();

  const base = "rounded-full px-2.5 py-1 text-xs font-semibold transition-colors";
  const on = "bg-white text-navy";
  const off = "text-white/90 hover:text-accent";

  return (
    <div
      className="flex shrink-0 items-center rounded-full border border-white/40 p-0.5"
      role="group"
      aria-label="Language / 语言"
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`${base} ${lang === "en" ? on : off}`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("zh")}
        aria-pressed={lang === "zh"}
        className={`${base} ${lang === "zh" ? on : off}`}
      >
        中文
      </button>
    </div>
  );
}
