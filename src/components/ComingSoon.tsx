import Link from "next/link";
import { FaHourglassHalf } from "react-icons/fa";
import { PageBanner } from "@/components/sections";

export default function ComingSoon({
  kicker,
  title,
  description,
}: {
  kicker?: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <PageBanner kicker={kicker} title={title} intro={description} />
      <section className="section-pad">
        <div className="container-x">
          <div className="mx-auto flex max-w-xl flex-col items-center rounded-[20px] bg-mist px-8 py-16 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl text-accent shadow-md">
              <FaHourglassHalf aria-hidden />
            </span>
            <h2 className="mt-6 text-2xl font-bold text-navy">Coming Soon</h2>
            <p className="mt-3 text-navy-2/85">
              This section is currently being prepared. Please check back later, or contact us to
              find out more.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-pill bg-accent px-6 py-3 text-sm font-bold text-navy transition hover:bg-[#e6950c] hover:text-white"
              >
                Contact Us
              </Link>
              <Link
                href="/resources"
                className="rounded-pill border-2 border-accent px-6 py-3 text-sm font-bold text-accent transition hover:bg-accent/10"
              >
                Back to Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
