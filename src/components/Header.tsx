"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  FaBars,
  FaChevronDown,
  FaChevronRight,
  FaEnvelope,
  FaInstagram,
  FaPhoneAlt,
  FaTimes,
} from "react-icons/fa";
import { nav, site, type NavItem } from "@/lib/site";

function isActive(pathname: string, item: NavItem): boolean {
  if (pathname === item.href) return true;
  if (item.children) return item.children.some((child) => isActive(pathname, child));
  return false;
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <header className="relative z-50 bg-white">
      {/* Top utility bar */}
      <div className="header-gradient text-white">
        <div className="container-x flex min-h-[44px] items-center gap-6 py-1.5 text-sm">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 transition-colors hover:text-accent"
          >
            <FaPhoneAlt className="h-3.5 w-3.5" aria-hidden />
            <span>8858 2378</span>
          </a>
          <a
            href={`mailto:${site.email}`}
            className="hidden items-center gap-2 transition-colors hover:text-accent sm:flex"
          >
            <FaEnvelope className="h-3.5 w-3.5" aria-hidden />
            <span>{site.email}</span>
          </a>
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 transition-colors hover:text-accent md:flex"
          >
            <FaInstagram className="h-3.5 w-3.5" aria-hidden />
            <span>@edustar_sg</span>
          </a>
        </div>
      </div>

      {/* Primary header */}
      <div className="border-b border-tertiary/40 bg-white shadow-[0_1px_12px_rgba(26,29,79,0.06)]">
        <div className="container-x flex min-h-[84px] items-center justify-between gap-4 lg:gap-6">
          <Link href="/" aria-label={site.name} className="shrink-0">
            <Image
              src="/images/logo-full.png"
              alt={site.name}
              width={160}
              height={64}
              priority
              className="h-auto w-[120px] sm:w-[135px] lg:w-[150px]"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden min-w-0 flex-1 lg:block" aria-label="Main">
            <ul className="flex items-center justify-center gap-1 xl:gap-1.5">
              {nav.map((item) => {
                const active = isActive(pathname, item);
                return (
                  <li key={item.label} className="group relative">
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1.5 whitespace-nowrap rounded-lg px-2 py-2.5 text-[13px] font-medium transition-colors lg:px-2.5 lg:text-[14px] xl:px-3 xl:text-[15px] ${
                        active
                          ? "text-accent"
                          : "text-navy hover:text-accent"
                      }`}
                    >
                      {item.label}
                      {item.children && (
                        <FaChevronDown className="h-2.5 w-2.5 opacity-70" aria-hidden />
                      )}
                    </Link>

                    {item.children && (
                      <ul className="invisible absolute left-0 top-full z-40 min-w-[250px] translate-y-2 rounded-xl border border-black/5 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                        {item.children.map((child) => (
                          <li key={child.label} className="group/sub relative">
                            <Link
                              href={child.href}
                              className={`flex items-center justify-between gap-3 whitespace-nowrap rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-mist hover:text-accent ${
                                isActive(pathname, child) ? "text-accent" : "text-navy"
                              }`}
                            >
                              {child.label}
                              {child.children && (
                                <FaChevronRight className="h-2.5 w-2.5 opacity-60" aria-hidden />
                              )}
                            </Link>

                            {child.children && (
                              <ul className="invisible absolute left-full top-0 z-40 min-w-[200px] translate-x-2 rounded-xl border border-black/5 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover/sub:visible group-hover/sub:translate-x-0 group-hover/sub:opacity-100">
                                {child.children.map((leaf) => (
                                  <li key={leaf.label}>
                                    <Link
                                      href={leaf.href}
                                      className={`block whitespace-nowrap rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-mist hover:text-accent ${
                                        isActive(pathname, leaf) ? "text-accent" : "text-navy"
                                      }`}
                                    >
                                      {leaf.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right cluster */}
          <div className="flex shrink-0 items-center gap-3 sm:gap-5">
            <div className="hidden flex-col items-end leading-tight xl:flex">
              <span className="text-xs font-medium uppercase tracking-wide text-tertiary">
                Opening Hours
              </span>
              <span className="text-sm font-semibold text-navy">{site.hours}</span>
            </div>
            <Link
              href="/contact"
              className="btn-shine inline-flex shrink-0 whitespace-nowrap rounded-pill bg-gradient-to-br from-accent to-accent-bright px-3 py-2 text-xs font-bold text-white shadow-[0_6px_20px_rgba(249,167,30,0.4)] transition-transform duration-200 hover:-translate-y-0.5 sm:px-5 sm:py-2.5 sm:text-sm lg:px-6 lg:py-3 lg:text-base"
            >
              Book Trial
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-xl text-accent-bright lg:hidden"
            >
              {mobileOpen ? <FaTimes aria-hidden /> : <FaBars aria-hidden />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-b border-black/5 bg-white shadow-lg transition-[max-height] duration-300 lg:hidden ${
          mobileOpen ? "max-h-[80vh] overflow-y-auto" : "max-h-0"
        }`}
      >
        <nav className="container-x py-4" aria-label="Mobile">
          <ul className="flex flex-col divide-y divide-black/5">
            {nav.map((item, index) => {
              const expanded = openIndex === index;
              return (
                <li key={item.label} className="py-1">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex-1 py-3 text-base font-semibold ${
                        isActive(pathname, item) ? "text-accent" : "text-navy"
                      }`}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        type="button"
                        aria-label={`Toggle ${item.label}`}
                        onClick={() => setOpenIndex(expanded ? null : index)}
                        className="flex h-9 w-9 items-center justify-center text-navy"
                      >
                        <FaChevronDown
                          className={`h-3 w-3 transition-transform ${expanded ? "rotate-180" : ""}`}
                          aria-hidden
                        />
                      </button>
                    )}
                  </div>

                  {item.children && expanded && (
                    <ul className="ml-3 border-l border-black/10 pl-3">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-2.5 text-sm text-navy-2"
                          >
                            {child.label}
                          </Link>
                          {child.children && (
                            <ul className="ml-3 border-l border-black/10 pl-3">
                              {child.children.map((leaf) => (
                                <li key={leaf.label}>
                                  <Link
                                    href={leaf.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block py-2 text-sm text-tertiary"
                                  >
                                    {leaf.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 block whitespace-nowrap rounded-pill bg-gradient-to-br from-accent to-accent-bright px-6 py-3 text-center text-base font-bold text-white"
          >
            Book Trial
          </Link>
        </nav>
      </div>
    </header>
  );
}
