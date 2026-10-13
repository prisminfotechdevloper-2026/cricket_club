"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "../common/Container";

/* ------------------------------------------------------------------ */
/* Custom Golden Icons matching the 6 Vision Cards                    */
/* ------------------------------------------------------------------ */

function YouthGaamsIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function HandshakeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.3-4.3a1 1 0 0 0 0-1.4l-1.5-1.5a1 1 0 0 0-1.4 0l-1.8 1.8" />
      <path d="m18 11 3.3-3.3a1 1 0 0 0 0-1.4l-2.6-2.6a1 1 0 0 0-1.4 0L14 7" />
      <path d="m2 14 3.3 3.3a1 1 0 0 0 1.4 0L11 13" />
      <path d="m6 10 4-4a1 1 0 0 1 1.4 0l2.6 2.6a1 1 0 0 1 0 1.4L10 14" />
    </svg>
  );
}

function PitchHeartIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function UpliftmentChartIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="14" width="4" height="7" rx="1" />
      <rect x="10" y="10" width="4" height="11" rx="1" />
      <rect x="17" y="6" width="4" height="15" rx="1" />
      <path d="m14 4 6-1v6" />
      <path d="m8 10 12-7" />
    </svg>
  );
}

function NetworkingNodesIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="5" r="2.5" />
      <circle cx="5" cy="18" r="2.5" />
      <circle cx="19" cy="18" r="2.5" />
      <path d="m6.8 16 3.6-8.5" />
      <path d="m17.2 16-3.6-8.5" />
      <path d="M7.5 18h9" />
    </svg>
  );
}

function LotusValuesIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 4c-2 4-2 8 0 12 2-4 2-8 0-12z" />
      <path d="M10 16c-4-1-7-4-8-7 3-1 7 1 8 7z" />
      <path d="M14 16c4-1 7-4 8-7-3-1-7 1-8 7z" />
      <path d="M5 19c3.5 1.5 10.5 1.5 14 0" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* The 6 Vision Points Data                                            */
/* ------------------------------------------------------------------ */
const VISION_CARDS = [
  {
    id: "connecting-youth",
    title: "Connecting Youth & Gaams",
    description:
      "Using cricket tournaments and fixtures as a bridge to help Devpur youth connect with all 52–42 gaams of the KVO community.",
    Icon: YouthGaamsIcon,
  },
  {
    id: "aligning-generations",
    title: "Aligning Generations",
    description:
      "Bringing different age groups together on the cricket field, aligning veterans and youth around a common motive.",
    Icon: HandshakeIcon,
  },
  {
    id: "pitch-to-family",
    title: "From Pitch to Family",
    description:
      "Transforming on-field match connections into deep friendships, and those friendships into an extended family.",
    Icon: PitchHeartIcon,
  },
  {
    id: "community-upliftment",
    title: "Community Upliftment",
    description:
      "Leveraging our collective cricketing journey and club spirit to drive the overall growth and upliftment of the Devpur community.",
    Icon: UpliftmentChartIcon,
  },
  {
    id: "business-networking",
    title: "Business & Career Networking",
    description:
      "Creating organic networking channels for more business and career opportunities amongst the gaam and the wider KVO community.",
    Icon: NetworkingNodesIcon,
  },
  {
    id: "cultural-sharing",
    title: "Cultural Sharing & Values",
    description:
      "Infusing our game with Jain principles, embedding ethics, mutual respect, and cultural sharing into every practice session and match.",
    Icon: LotusValuesIcon,
  },
];

export function HistoryVisionMediumSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Synchronize scroll state with mobile pagination dots & buttons
  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = scrollWidth - clientWidth;

    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft < maxScroll - 15);

    if (maxScroll > 0) {
      const index = Math.round(scrollLeft / clientWidth);
      setActiveIndex(Math.min(VISION_CARDS.length - 1, Math.max(0, index)));
    }
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section
      id="our-vision-medium"
      aria-label="Our Vision: Cricket as Our Medium"
      className="relative w-full overflow-hidden bg-[#0A0E15] py-4 sm:py-5 md:py-6 border-b border-white/5"
    >
      {/* =====================================================================
          BACKGROUND IMAGE: Cricket stadium night ambiance
          Floodlights, green pitch, and stadium atmosphere clearly visible!
          ===================================================================== */}
      <div
        className="absolute inset-0 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <Image
          src="/history/journey_stadium_dark_bg.jpg"
          alt="Cricket stadium night floodlights background"
          fill
          priority
          className="object-cover object-center opacity-75 sm:opacity-80"
        />
        {/* Minimal dark overlay to ensure stadium details, floodlights & green pitch show clearly */}
        <div className="absolute inset-0 bg-[#0A0E15]/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E15]/60 via-transparent to-[#0A0E15]/70" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-start w-full">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-2.5 sm:mb-3">
            <span className="font-body font-bold text-xs sm:text-[13px] tracking-[0.24em] uppercase text-[#F0A04B]">
              OUR VISION
            </span>
          </div>

          {/* Heading with horizontal golden accent line */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <h2 className="font-serif text-[26px] sm:text-[34px] md:text-[40px] lg:text-[44px] font-bold tracking-tight text-white leading-[1.18]">
              Our Vision: Cricket as Our Medium
            </h2>
            <span
              className="inline-block w-14 sm:w-20 h-[3px] bg-[#F0A04B] rounded-full self-center mt-1"
              aria-hidden="true"
            />
          </div>

          {/* Subtitle */}
          <p className="font-body text-[#CBD5E1] text-xs sm:text-sm md:text-[15px] leading-[1.7] max-w-4xl mb-8 sm:mb-11">
            For us, cricket has never been just about the score — it is the
            powerful medium through which we bring our community together:
          </p>

          {/* =====================================================================
              CARDS CONTAINER:
              - Mobile & Tablet: Exactly 1 card takes FULL WIDTH (100%), 0 peek
              - Desktop (lg+): 3x2 Grid (3 columns, 2 rows)
              ===================================================================== */}
          <div
            ref={scrollRef}
            className="w-full flex lg:grid lg:grid-cols-3 gap-0 lg:gap-6 overflow-x-auto lg:overflow-x-visible scroll-smooth snap-x snap-mandatory no-scrollbar pb-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            tabIndex={0}
            role="region"
            aria-label="Vision Cards Carousel"
          >
            {VISION_CARDS.map(({ id, title, description, Icon }) => (
              <div
                key={id}
                className="relative snap-start shrink-0 w-full min-w-full lg:min-w-0 lg:w-auto"
              >
                <div className="w-full h-full rounded-2xl bg-[#0F1626]/60 backdrop-blur-md border border-white/12 hover:border-[#F0A04B]/60 transition-all duration-300 p-5 sm:p-6 shadow-xl flex flex-col justify-start group">
                  <div className="flex items-start gap-4">
                    {/* Golden Circular Badge with SVG Icon */}
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#182133] border border-[#F0A04B]/35 flex items-center justify-center text-[#F0A04B] shrink-0 shadow-[0_0_14px_rgba(240,160,75,0.2)] group-hover:scale-105 group-hover:border-[#F0A04B]/70 transition-all duration-300">
                      <Icon className="w-6 h-6 stroke-[1.9]" />
                    </div>

                    {/* Title & Description */}
                    <div className="flex flex-col text-left">
                      <h3 className="font-serif font-bold text-white text-[15px] sm:text-base md:text-[17px] leading-snug group-hover:text-[#F0A04B] transition-colors">
                        {title}
                      </h3>
                      <p className="font-body text-[#94A3B8] text-xs sm:text-[13px] leading-[1.65] mt-2">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* =====================================================================
              MOBILE / TABLET CONTROLS:
              - Left: Interactive Dots Indicator (active pill + dots)
              - Right: Pill Buttons (< PREV / NEXT >)
              ===================================================================== */}
          <div className="flex items-center justify-between w-full pt-6 lg:hidden min-h-[44px]">
            {/* Dots indicator */}
            <div className="flex items-center gap-1.5">
              {VISION_CARDS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    const el = scrollRef.current;
                    if (!el) return;
                    el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
                  }}
                  aria-label={`Jump to vision card ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === i ? "w-6 bg-[#F0A04B]" : "w-1.5 bg-neutral-700"
                  }`}
                />
              ))}
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-2">
              {canScrollLeft && (
                <button
                  type="button"
                  onClick={() => scrollByCard(-1)}
                  aria-label="Previous card"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#0D121F]/90 border border-[#C16A35]/60 text-[#F0A04B] hover:bg-[#D7833D] hover:text-white active:scale-95 transition-all text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  <ChevronLeft className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>PREV</span>
                </button>
              )}

              {canScrollRight && (
                <button
                  type="button"
                  onClick={() => scrollByCard(1)}
                  aria-label="Next card"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#0D121F]/90 border border-[#C16A35]/60 text-[#F0A04B] hover:bg-[#D7833D] hover:text-white active:scale-95 transition-all text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  <span>NEXT</span>
                  <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
