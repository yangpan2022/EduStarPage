"use client";

import { useState, type ReactNode } from "react";
import { FaChevronDown } from "react-icons/fa";

export type AccordionItem = {
  question: string;
  answer: ReactNode;
};

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-4">
      {items.map((item, index) => {
        const expanded = open === index;
        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-[14px] bg-white shadow-[0_8px_24px_rgba(26,29,79,0.08)]"
          >
            <button
              type="button"
              onClick={() => setOpen(expanded ? null : index)}
              aria-expanded={expanded}
              className="flex w-full items-center justify-between gap-4 bg-accent px-6 py-4 text-left font-semibold text-navy"
            >
              <span>{item.question}</span>
              <FaChevronDown
                className={`h-4 w-4 shrink-0 transition-transform ${expanded ? "rotate-180" : ""}`}
                aria-hidden
              />
            </button>
            <div
              className={`grid transition-all duration-300 ${
                expanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="space-y-3 px-6 py-5 text-[15px] leading-relaxed text-navy-2/90">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
