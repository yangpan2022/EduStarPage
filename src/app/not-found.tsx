import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-6xl font-extrabold text-accent">404</p>
          <h1 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">Page not found</h1>
          <p className="mt-3 text-navy-2/85">
            The page you are looking for may have moved or no longer exists.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="rounded-pill bg-accent px-6 py-3 text-sm font-bold text-navy transition hover:bg-[#e6950c] hover:text-white"
            >
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="rounded-pill border-2 border-accent px-6 py-3 text-sm font-bold text-accent transition hover:bg-accent/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
