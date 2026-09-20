import Link from "next/link";
import { T } from "@/components/T";

export default function NotFound() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-6xl font-extrabold text-accent">404</p>
          <h1 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">
            <T en="Page not found" zh="页面未找到" />
          </h1>
          <p className="mt-3 text-navy-2/85">
            <T
              en="The page you are looking for may have moved or no longer exists."
              zh="你访问的页面可能已被移动或不存在。"
            />
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="rounded-pill bg-accent px-6 py-3 text-sm font-bold text-navy transition hover:bg-[#e6950c] hover:text-white"
            >
              <T en="Back to Home" zh="返回首页" />
            </Link>
            <Link
              href="/contact"
              className="rounded-pill border-2 border-accent px-6 py-3 text-sm font-bold text-accent transition hover:bg-accent/10"
            >
              <T en="Contact Us" zh="联系我们" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
