"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type Slide = { src: string; alt: string };

export default function Carousel({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);

  const go = (direction: number) =>
    setIndex((current) => (current + direction + slides.length) % slides.length);

  return (
    <div className="relative overflow-hidden rounded-[20px] shadow-[0_18px_45px_rgba(26,29,79,0.16)]">
      <div className="relative aspect-[16/10] w-full">
        {slides.map((slide, slideIndex) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 560px"
            className={`object-cover transition-opacity duration-500 ${
              slideIndex === index ? "opacity-100" : "opacity-0"
            }`}
            priority={slideIndex === 0}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={() => go(-1)}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-navy shadow-md transition hover:bg-white"
      >
        <FaChevronLeft className="h-4 w-4" aria-hidden />
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-navy shadow-md transition hover:bg-white"
      >
        <FaChevronRight className="h-4 w-4" aria-hidden />
      </button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((slide, slideIndex) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Go to slide ${slideIndex + 1}`}
            onClick={() => setIndex(slideIndex)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              slideIndex === index ? "bg-accent" : "bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
