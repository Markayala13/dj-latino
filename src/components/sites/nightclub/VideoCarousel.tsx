"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { VIDEOS } from "./data";

export function VideoCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {VIDEOS.map((v) => (
          <div
            key={v.src}
            className="w-[78%] shrink-0 snap-center sm:w-[46%] lg:w-[31%] xl:w-[23.5%]"
          >
            <div className="overflow-hidden rounded-lg border border-white/10 bg-[#0d0d0d]">
              <video
                className="aspect-[9/16] w-full object-cover"
                src={v.src}
                poster={v.poster}
                controls
                preload="none"
                playsInline
              />
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scroll(-1)}
        aria-label="Anterior"
        className="absolute -left-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/80 text-white backdrop-blur transition-colors hover:bg-[var(--color-club-green)] hover:text-white lg:-left-5"
      >
        <ChevronLeft className="size-6" />
      </button>
      <button
        type="button"
        onClick={() => scroll(1)}
        aria-label="Siguiente"
        className="absolute -right-3 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/80 text-white backdrop-blur transition-colors hover:bg-[var(--color-club-green)] hover:text-white lg:-right-5"
      >
        <ChevronRight className="size-6" />
      </button>
    </div>
  );
}
