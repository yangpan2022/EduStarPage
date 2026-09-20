import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaLinkedinIn,
  FaRegStickyNote,
  FaWhatsapp,
} from "react-icons/fa";
import { site } from "@/lib/site";

const footerLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Meet Our Team", href: "/meet-our-team" },
  { label: "Services", href: "/services" },
  { label: "Testimonial", href: "/testimonial" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "Rednotes", href: site.xiaohongshu, Icon: FaRegStickyNote },
  { label: "Instagram", href: site.instagram, Icon: FaInstagram },
  { label: "Linkedin", href: site.linkedin, Icon: FaLinkedinIn },
  { label: "WhatsApp", href: site.whatsapp, Icon: FaWhatsapp },
];

export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="footer-gradient text-white">
        <div className="container-x grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Image
              src="/images/logo-full.png"
              alt={site.name}
              width={220}
              height={88}
              className="mb-5 h-auto w-[200px]"
            />
            <p className="max-w-sm text-[15px] leading-relaxed text-white/85">
              {site.tagline}
            </p>
          </div>

          <nav aria-label="Footer">
            <h3 className="mb-5 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-white/85 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">Stay Connected</h3>
            <Link
              href="/contact"
              className="btn-shine mb-6 inline-flex w-fit whitespace-nowrap rounded-pill bg-gradient-to-br from-accent to-accent-bright px-7 py-3 text-base font-bold text-white shadow-[0_6px_20px_rgba(249,167,30,0.4)] transition-transform hover:-translate-y-0.5"
            >
              Ask Us ...
            </Link>
            <ul className="flex flex-wrap gap-x-5 gap-y-3">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-white/85 transition-colors hover:text-accent"
                  >
                    <Icon className="h-4 w-4 text-accent" aria-hidden />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-navy py-4 text-center">
        <p className="text-sm text-accent-bright">
          Copyright © 2026 | Powered by{" "}
          <a
            href="https://wpastra.com"
            target="_blank"
            rel="noreferrer"
            className="underline-offset-2 hover:underline"
          >
            Astra WordPress Theme
          </a>
        </p>
      </div>
    </footer>
  );
}
