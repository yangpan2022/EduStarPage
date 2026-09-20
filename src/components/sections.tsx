import Link from "next/link";
import type { ReactNode } from "react";
import { FaWhatsapp } from "react-icons/fa";

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className = "",
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  const alignment = align === "center" ? "text-center mx-auto items-center" : "text-left";
  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignment} ${className}`}>
      <h2
        className={`heading-underline text-3xl font-bold text-navy sm:text-[2.4rem] ${
          align === "left" ? "heading-underline-left" : ""
        }`}
      >
        {title}
      </h2>
      {subtitle && <p className="text-base text-navy-2/90 sm:text-lg">{subtitle}</p>}
    </div>
  );
}

export function PageBanner({
  kicker,
  title,
  intro,
  children,
}: {
  kicker?: ReactNode;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="container-x pt-10 sm:pt-14">
      <div className="hero-gradient relative overflow-hidden rounded-[22px] px-6 py-14 text-white sm:px-12 sm:py-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-white/10 blur-3xl"
        />
        <div className="relative max-w-3xl">
          {kicker && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
              {kicker}
            </p>
          )}
          <h1 className="text-3xl font-bold text-white sm:text-[2.6rem] sm:leading-tight">
            {title}
          </h1>
          {intro && <p className="mt-5 text-base text-white/85 sm:text-lg">{intro}</p>}
          {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
        </div>
      </div>
    </section>
  );
}

export function CtaSection({
  title,
  description,
  buttonLabel,
  buttonHref,
  buttonIcon,
}: {
  title: ReactNode;
  description: ReactNode;
  buttonLabel: ReactNode;
  buttonHref: string;
  buttonIcon?: ReactNode;
}) {
  return (
    <section className="container-x pb-16 sm:pb-20">
      <div className="hero-gradient relative overflow-hidden rounded-[22px] px-6 py-14 text-center text-white sm:px-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/25 blur-3xl"
        />
        <div className="relative mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/85">{description}</p>
          <Link
            href={buttonHref}
            {...(buttonHref.startsWith("http")
              ? { target: "_blank", rel: "noreferrer" }
              : {})}
            className="btn-shine mt-8 inline-flex items-center gap-3 whitespace-nowrap rounded-pill bg-gradient-to-br from-accent to-accent-bright px-7 py-3.5 text-base font-bold text-white shadow-[0_8px_24px_rgba(249,167,30,0.4)] transition-transform hover:-translate-y-0.5"
          >
            {buttonIcon ?? <FaWhatsapp className="h-5 w-5" aria-hidden />}
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ServiceCard({
  icon,
  title,
  description,
  href,
  linkLabel = "Learn More",
}: {
  icon: ReactNode;
  title: ReactNode;
  description: ReactNode;
  href?: string;
  linkLabel?: ReactNode;
}) {
  return (
    <article className="group flex h-full flex-col rounded-[18px] border-t-4 border-accent bg-white p-8 shadow-[0_10px_30px_rgba(26,29,79,0.07)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(26,29,79,0.14)]">
      <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-mist text-2xl text-accent transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110">
        {icon}
      </span>
      <h3 className="text-xl font-bold text-navy">{title}</h3>
      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-navy-2/85">{description}</p>
      {href && (
        <Link
          href={href}
          className="mt-6 inline-flex w-fit whitespace-nowrap rounded-pill bg-accent px-6 py-3 text-sm font-bold text-navy transition-all duration-300 hover:scale-[1.04] hover:bg-[#e6950c] hover:text-white"
        >
          {linkLabel}
        </Link>
      )}
    </article>
  );
}

export function StatBanner({
  title,
  stats,
}: {
  title?: ReactNode;
  stats: { value: ReactNode; label: ReactNode }[];
}) {
  return (
    <section className="container-x pb-16 sm:pb-20">
      <div className="rounded-[20px] bg-gradient-to-r from-navy-2 to-navy px-6 py-12 text-white sm:px-12">
        {title && (
          <h2 className="mb-8 text-center text-2xl font-bold text-white sm:text-3xl">
            {title}
          </h2>
        )}
        <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-4xl font-extrabold text-accent sm:text-5xl">
                  {stat.value}
                </span>
                <span className="mt-2 block text-sm text-white/85">{stat.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function TestimonialCard({
  quote,
  name,
  meta,
}: {
  quote: ReactNode;
  name: ReactNode;
  meta: ReactNode;
}) {
  return (
    <figure className="flex h-full flex-col rounded-[18px] bg-white p-7 shadow-[0_10px_30px_rgba(26,29,79,0.08)]">
      <blockquote className="flex-1 font-serif text-[15px] leading-relaxed text-navy-2">
        {quote}
      </blockquote>
      <figcaption className="mt-6 border-t border-black/5 pt-4">
        <span className="block font-bold text-navy">{name}</span>
        <span className="block text-sm text-tertiary">{meta}</span>
      </figcaption>
    </figure>
  );
}
