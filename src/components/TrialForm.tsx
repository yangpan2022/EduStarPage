"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { useLang } from "@/components/LanguageProvider";

const courses = [
  { value: "IBDP (Diploma Programme)", en: "IBDP (Diploma Programme)", zh: "IBDP（文凭课程）" },
  { value: "A Level", en: "A Level", zh: "A Level" },
  { value: "Other Courses", en: "Other Courses", zh: "其他课程" },
];

type Status = "idle" | "submitting" | "success" | "error";

export default function TrialForm({
  compact = false,
  title,
}: {
  compact?: boolean;
  title?: ReactNode;
}) {
  const { t } = useLang();
  const [status, setStatus] = useState<Status>("idle");
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (!endpoint) {
      const subject = encodeURIComponent("Free Trial Lesson Request");
      const body = encodeURIComponent(
        `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone")}\nCourse: ${data.get("course")}`,
      );
      window.location.href = `mailto:ops@edustarcorp.com?subject=${subject}&body=${body}`;
      return;
    }

    try {
      setStatus("submitting");
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!response.ok) throw new Error("Request failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-lg border border-[#ddd] bg-white px-4 py-3 text-[15px] text-navy outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/15";

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex h-full flex-col rounded-[18px] bg-white shadow-[0_18px_45px_rgba(26,29,79,0.14)] ${
        compact ? "p-6" : "p-8"
      }`}
    >
      {title && (
        <h3 className="mb-5 text-center text-xl font-bold text-navy">{title}</h3>
      )}
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          className={inputClass}
          type="text"
          name="name"
          placeholder={t("Full Name", "姓名")}
          required
          maxLength={400}
        />
        <input
          className={inputClass}
          type="email"
          name="email"
          placeholder={t("Email", "邮箱")}
          required
          maxLength={400}
        />
        <input
          className={inputClass}
          type="tel"
          name="phone"
          placeholder={t("Phone", "电话")}
          required
          maxLength={400}
        />
        <select className={inputClass} name="course" defaultValue={courses[0].value} required>
          {courses.map((course) => (
            <option key={course.value} value={course.value}>
              {t(course.en, course.zh)}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-5 w-full rounded-lg bg-[#F5A623] px-4 py-3.5 text-base font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#e59613] disabled:opacity-60"
      >
        {status === "submitting" ? t("Sending...", "提交中...") : t("Book Free Trial", "预约免费试听")}
      </button>

      <p aria-live="polite" className="mt-3 text-center text-sm">
        {status === "success" && (
          <span className="text-[#2e7d32]">
            {t(
              "Thank you! We have received your request and will contact you soon.",
              "感谢您！我们已收到您的申请，将尽快与您联系。",
            )}
          </span>
        )}
        {status === "error" && (
          <span className="text-[#c62828]">
            {t(
              "Something went wrong. Please try again or email us directly.",
              "提交失败，请重试或直接发送邮件给我们。",
            )}
          </span>
        )}
      </p>
    </form>
  );
}
