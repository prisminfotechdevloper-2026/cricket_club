"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../common/Container";
import { sponsors } from "@/lib/data/sponsors";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Cloned arrays for seamless infinite looping
const DESKTOP_ITEMS = [...sponsors, ...sponsors];
const MOBILE_ITEMS = [
  sponsors[sponsors.length - 1],
  ...sponsors,
  sponsors[0],
];

export function HomeSponsorsSection() {
  return (
    <section className="py-12 sm:py-16 bg-surface border-y border-border/80 overflow-hidden">
      <Container>
        {/* Simple Sponsors Heading */}
        <div className="text-center mb-8 sm:mb-12">
         
          <h2 className="font-headline text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-foreground">
            Our Sponsors
          </h2>
        </div>

        {/* =========================================================================
            DESKTOP VIEW (md and above): 5 Sponsors visible at a time, 2.5s auto-slide
            ========================================================================= */}
        <div className="hidden md:block">
          <DesktopSponsorsSlider />
        </div>

        {/* =========================================================================
            MOBILE VIEW (< md): Single sponsor visible at a time, 2.5s auto-slide
            ========================================================================= */}
        <div className="block md:hidden">
          <MobileSponsorsSlider />
        </div>
      </Container>
    </section>
  );
}

/* =============================================================================
   DESKTOP SLIDER: 5 Logos visible at a time, auto-sliding one-by-one every 2.5s
   ============================================================================= */
function DesktopSponsorsSlider() {
  const [trackIdx, setTrackIdx] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const total = sponsors.length; // 7 sponsors

  const next = () => {
    setEnableTransition(true);
    setTrackIdx((prev) => prev + 1);
  };

  const prev = () => {
    setEnableTransition(true);
    if (trackIdx === 0) {
      setEnableTransition(false);
      setTrackIdx(total);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEnableTransition(true);
          setTrackIdx(total - 1);
        });
      });
    } else {
      setTrackIdx((prev) => prev - 1);
    }
  };

  // Auto-slide every 2.5 seconds (2500ms)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setEnableTransition(true);
      setTrackIdx((prev) => prev + 1);
    }, 2500);
    return () => clearInterval(timer);
  }, [isPaused]);

  // Seamless infinite loop jump when track reaches end of first clone set
  const handleTransitionEnd = () => {
    if (trackIdx >= total) {
      setEnableTransition(false);
      setTrackIdx(trackIdx % total);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEnableTransition(true);
        });
      });
    }
  };

  return (
    <div
      className="relative w-full flex items-center gap-4 lg:gap-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Left Arrow Button */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous Sponsor"
        className="w-10 h-10 shrink-0 rounded-full bg-white text-foreground hover:bg-brand-orange hover:text-white shadow-md border border-border flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Outer Slider Window showing exactly 5 items */}
      <div className="overflow-hidden flex-1 py-2">
        <div
          className="flex will-change-transform"
          style={{
            transform: `translate3d(-${trackIdx * 20}%, 0, 0)`,
            transition: enableTransition
              ? "transform 600ms cubic-bezier(0.22, 1, 0.36, 1)"
              : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {DESKTOP_ITEMS.map((sponsor, idx) => (
            <div
              key={`${sponsor.id}-${idx}`}
              className="w-1/5 shrink-0 px-2.5 flex items-center justify-center"
            >
              <Link
                href={`/sponsors#${sponsor.slug}`}
                className="w-full h-24 bg-white rounded-2xl border border-border/80 hover:border-brand-orange/60 hover:shadow-lg transition-all duration-200 flex items-center justify-center p-3 relative group"
              >
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  fill
                  className="object-contain p-2.5 transition-transform duration-200 group-hover:scale-105"
                  sizes="180px"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow Button */}
      <button
        type="button"
        onClick={next}
        aria-label="Next Sponsor"
        className="w-10 h-10 shrink-0 rounded-full bg-white text-foreground hover:bg-brand-orange hover:text-white shadow-md border border-border flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}

/* =============================================================================
   MOBILE SLIDER: Single Logo visible at a time, auto-sliding every 2.5s
   ============================================================================= */
function MobileSponsorsSlider() {
  const [trackIdx, setTrackIdx] = useState(1); // 1 = first real slide
  const [enableTransition, setEnableTransition] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const total = sponsors.length; // 7

  const next = () => {
    setEnableTransition(true);
    setTrackIdx((prev) => prev + 1);
  };

  const prev = () => {
    setEnableTransition(true);
    setTrackIdx((prev) => prev - 1);
  };

  // Auto-slide every 2.5 seconds (2500ms)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setEnableTransition(true);
      setTrackIdx((prev) => prev + 1);
    }, 2500);
    return () => clearInterval(timer);
  }, [isPaused]);

  // Handle loop jump when reaching clones
  const handleTransitionEnd = () => {
    if (trackIdx === total + 1) {
      setEnableTransition(false);
      setTrackIdx(1);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEnableTransition(true);
        });
      });
    } else if (trackIdx === 0) {
      setEnableTransition(false);
      setTrackIdx(total);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEnableTransition(true);
        });
      });
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsPaused(false);
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) {
      next();
    } else if (diff < -40) {
      prev();
    }
    touchStartX.current = null;
  };

  const activeRealIdx =
    trackIdx === 0
      ? total - 1
      : trackIdx === total + 1
      ? 0
      : trackIdx - 1;

  return (
    <div
      className="relative w-full max-w-sm mx-auto px-2 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slider Frame with Clean Gap / Breathing Space */}
      <div className="flex items-center justify-center gap-3 sm:gap-5">
        {/* Left Arrow Button */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous Sponsor"
          className="w-10 h-10 shrink-0 rounded-full bg-white text-foreground hover:bg-brand-orange hover:text-white shadow-md border border-border flex items-center justify-center transition-all cursor-pointer active:scale-95"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Center Sliding Window (1 Logo at a time) */}
        <div className="w-56 sm:w-64 h-28 bg-white rounded-2xl border border-border/80 shadow-md overflow-hidden relative shrink-0">
          <div
            className="flex w-full h-full will-change-transform"
            style={{
              transform: `translate3d(-${trackIdx * 100}%, 0, 0)`,
              transition: enableTransition
                ? "transform 600ms cubic-bezier(0.22, 1, 0.36, 1)"
                : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {MOBILE_ITEMS.map((sponsor, idx) => (
              <div
                key={`${sponsor.id}-${idx}`}
                className="w-full h-full shrink-0 flex items-center justify-center p-3 relative"
              >
                <Link
                  href={`/sponsors#${sponsor.slug}`}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    fill
                    className="object-contain p-2"
                    sizes="256px"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow Button */}
        <button
          type="button"
          onClick={next}
          aria-label="Next Sponsor"
          className="w-10 h-10 shrink-0 rounded-full bg-white text-foreground hover:bg-brand-orange hover:text-white shadow-md border border-border flex items-center justify-center transition-all cursor-pointer active:scale-95"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex items-center justify-center gap-1.5 mt-4">
        {sponsors.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => {
              setEnableTransition(true);
              setTrackIdx(idx + 1);
            }}
            aria-label={`Go to ${s.name}`}
            className={`transition-[width,background-color] duration-300 rounded-full cursor-pointer ${
              activeRealIdx === idx
                ? "w-6 h-2 bg-brand-orange"
                : "w-2 h-2 bg-muted/40 hover:bg-muted"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
