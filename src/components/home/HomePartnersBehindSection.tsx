"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { Container } from "../common/Container";

/* =====================================================================
   ALL 7 OFFICIAL CLUB & COMMUNITY SPONSORS OF DEVPUR CRICKET CLUB
   ===================================================================== */
const SPONSORS_LIST = [
  {
    id: "gala-diamond",
    name: "Gala Diamond",
    logo: "/sponsors/gala-diamond-hd.png",
  },
  {
    id: "lc-anchor",
    name: "Lakhmidas Gokaldas (LC Anchor)",
    logo: "/sponsors/lc-anchor-hd.png",
  },
  {
    id: "metro",
    name: "Metro Groups",
    logo: "/sponsors/metro-hd.png",
  },
  {
    id: "ratna",
    name: "Ratna's",
    logo: "/sponsors/ratna-hd.png",
  },
  {
    id: "nanonine",
    name: "NanoNine",
    logo: "/sponsors/nanonine-hd.png",
  },
  {
    id: "kp-technotrade",
    name: "K.P. Technotrade",
    logo: "/sponsors/kp-technotrade-hd.png",
  },
  {
    id: "devpur-mahajan",
    name: "Devpur Mahajan",
    logo: "/sponsors/devpur-mahajan-hd.png",
  },
];

// Repeat 3 times to create a continuous, infinite looping scroll experience
const CAROUSEL_ITEMS = [...SPONSORS_LIST, ...SPONSORS_LIST, ...SPONSORS_LIST];

export function HomePartnersBehindSection() {
  const [activeDot, setActiveDot] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);
  const isUserScrollingRef = useRef(false);
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize scroll position to the middle loop set
  useEffect(() => {
    const container = trackRef.current;
    if (!container) return;
    const card = container.firstElementChild as HTMLElement | null;
    if (!card) return;
    const cardWidth = card.offsetWidth;
    if (cardWidth > 0) {
      container.scrollLeft = cardWidth * SPONSORS_LIST.length;
    }
  }, []);

  // Sync active dot and handle infinite seamless wrap on scroll
  const handleScroll = useCallback(() => {
    const container = trackRef.current;
    if (!container) return;
    const card = container.firstElementChild as HTMLElement | null;
    if (!card) return;
    const cardWidth = card.offsetWidth;
    if (cardWidth <= 0) return;

    const singleSetWidth = cardWidth * SPONSORS_LIST.length;

    // Infinite loop normalization
    if (container.scrollLeft >= singleSetWidth * 2) {
      container.scrollLeft -= singleSetWidth;
    } else if (container.scrollLeft <= 0) {
      container.scrollLeft += singleSetWidth;
    }

    const currentCardIdx = Math.round(container.scrollLeft / cardWidth);
    const normalizedIndex =
      ((currentCardIdx % SPONSORS_LIST.length) + SPONSORS_LIST.length) %
      SPONSORS_LIST.length;
    setActiveDot(normalizedIndex);
  }, []);

  // Advance carousel by 1 card smoothly
  const advance = useCallback(() => {
    if (isPausedRef.current || isUserScrollingRef.current) return;
    const container = trackRef.current;
    if (!container) return;
    const card = container.firstElementChild as HTMLElement | null;
    if (!card) return;
    const cardWidth = card.offsetWidth;
    container.scrollBy({ left: cardWidth, behavior: "smooth" });
  }, []);

  // Automatic moving interval (moves every 3 seconds across all devices)
  useEffect(() => {
    const timer = setInterval(() => {
      advance();
    }, 3000);

    return () => clearInterval(timer);
  }, [advance]);

  // Pause on user interaction and resume after delay
  const handleInteractionStart = () => {
    isPausedRef.current = true;
    isUserScrollingRef.current = true;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  };

  const handleInteractionEnd = () => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      isPausedRef.current = false;
      isUserScrollingRef.current = false;
    }, 2500);
  };

  // Scroll directly to a sponsor by clicking its dot indicator
  const scrollToSponsor = (index: number) => {
    const container = trackRef.current;
    if (!container) return;
    const card = container.firstElementChild as HTMLElement | null;
    if (!card) return;
    const cardWidth = card.offsetWidth;
    const singleSetWidth = cardWidth * SPONSORS_LIST.length;

    handleInteractionStart();
    container.scrollTo({
      left: singleSetWidth + index * cardWidth,
      behavior: "smooth",
    });
    setActiveDot(index);
    handleInteractionEnd();
  };

  return (
    <section
      id="partners-behind-dcc"
      aria-label="Partners Behind DCC"
      className="relative w-full overflow-hidden bg-[#FAF8F5] py-9 sm:py-12 border-b border-[#EAE4DC]"
    >
      <Container>
        <div className="flex flex-col items-start text-left w-full">
          {/* =====================================================================
              EYEBROW / OVERLINE: — SUPPORTED BY OUR COMMUNITY —
              ===================================================================== */}
          <div className="inline-flex items-center gap-3 mb-2 sm:mb-2.5">
            <span className="w-8 sm:w-10 h-px bg-[#C16A35]" aria-hidden="true" />
            <span className="font-body text-[#F0A04B] font-bold text-xs sm:text-[13px] tracking-[0.2em] uppercase">
              SUPPORTED BY OUR COMMUNITY
            </span>
            <span className="w-8 sm:w-10 h-px bg-[#C16A35]" aria-hidden="true" />
          </div>

          {/* =====================================================================
              MAIN HEADLINE: PARTNERS BEHIND DCC
              ===================================================================== */}
          <h2 className="font-display-serif font-black uppercase text-2xl sm:text-3xl md:text-[36px] tracking-wide text-[#111827] leading-tight mb-2">
            PARTNERS BEHIND DCC
          </h2>

          {/* =====================================================================
              SUBTITLE NARRATIVE
              ===================================================================== */}
          <p className="font-body text-[#52525B] text-xs sm:text-sm md:text-[15px] font-normal max-w-xl mb-7 sm:mb-9 leading-relaxed">
            The people and businesses helping local cricket keep moving.
          </p>

          {/* =====================================================================
              RESPONSIVE CONTINUOUS MOVING SPONSORS CAROUSEL TRACK
              - Mobile (< 640px): 1 sponsor per view (100% full width)
              - Tablet (sm: 640px): 2 sponsors per view
              - Medium (md: 768px): 5 sponsors per view
              - Large / XL (lg: 1024px+): 6 sponsors per view
              - Smooth auto-moving + swipe / mouse scroll enabled!
              ===================================================================== */}
          <div
            className="w-full mb-6 relative group"
            onMouseEnter={handleInteractionStart}
            onMouseLeave={handleInteractionEnd}
            onTouchStart={handleInteractionStart}
            onTouchEnd={handleInteractionEnd}
          >
            <div
              ref={trackRef}
              onScroll={handleScroll}
              className="flex w-full overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar select-none py-1"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
              tabIndex={0}
              role="region"
              aria-label="Official Sponsors Carousel"
            >
              {CAROUSEL_ITEMS.map((sponsor, index) => (
                <div
                  key={`${sponsor.id}-${index}`}
                  className="shrink-0 snap-start w-full sm:w-1/2 md:w-1/5 lg:w-1/6 px-1.5 sm:px-2 md:px-2.5"
                >
                  <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-xs hover:shadow-md hover:border-[#C16A35]/50 transition-all duration-300 h-28 sm:h-32 lg:h-32 flex items-center justify-center p-3.5 sm:p-4 group/card">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        fill
                        sizes="(max-width: 640px) 340px, (max-width: 768px) 240px, 180px"
                        priority={index < 7}
                        className="object-contain p-2 transition-transform duration-300 group-hover/card:scale-105"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* =====================================================================
              7-DOT PAGINATION INDICATOR (All 7 Sponsors Interactive Dots)
              ===================================================================== */}
          <div
            className="flex items-center justify-center gap-2 mt-1"
            aria-label="Sponsors Carousel Pagination"
          >
            {SPONSORS_LIST.map((sponsor, i) => (
              <button
                key={sponsor.id}
                type="button"
                onClick={() => scrollToSponsor(i)}
                aria-label={`View sponsor ${i + 1}: ${sponsor.name}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeDot === i
                    ? "w-6 bg-[#F0A04B] shadow-xs"
                    : "w-2 bg-[#E5E7EB] hover:bg-[#D7833D]/60"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
