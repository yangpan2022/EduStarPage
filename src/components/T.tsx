import type { ReactNode } from "react";

/** Inline bilingual text: renders both languages, CSS shows the active one. */
export function T({ en, zh }: { en: ReactNode; zh: ReactNode }) {
  return (
    <>
      <span data-lang="en">{en}</span>
      <span data-lang="zh">{zh}</span>
    </>
  );
}

/** Block-level bilingual content (e.g. multiple paragraphs). */
export function TBlock({
  en,
  zh,
  className,
}: {
  en: ReactNode;
  zh: ReactNode;
  className?: string;
}) {
  return (
    <>
      <div data-lang="en" className={className}>
        {en}
      </div>
      <div data-lang="zh" className={className}>
        {zh}
      </div>
    </>
  );
}
