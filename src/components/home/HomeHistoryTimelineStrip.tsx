"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "../common/Container";

/* ------------------------------------------------------------------ */
/* Solid (filled) golden icons                                         */
/* ------------------------------------------------------------------ */
const ICON_CLASS = "w-[42px] h-[42px]";

function UsersFilledIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 40" fill="currentColor" className={className} aria-hidden="true">
      {/* center person */}
      <circle cx="24" cy="11" r="6.5" />
      <path d="M11.5 36a12.5 12.5 0 0 1 25 0v1a2 2 0 0 1-2 2h-21a2 2 0 0 1-2-2z" />
      {/* left person */}
      <circle cx="8.5" cy="17" r="5" />
      <path d="M0 36.5a8.5 8.5 0 0 1 8.5-8.5c1.4 0 2.7.3 3.9.9A14.6 14.6 0 0 0 9.5 37v2H2a2 2 0 0 1-2-2z" />
      {/* right person (mirrored) */}
      <g transform="translate(48 0) scale(-1 1)">
        <circle cx="8.5" cy="17" r="5" />
        <path d="M0 36.5a8.5 8.5 0 0 1 8.5-8.5c1.4 0 2.7.3 3.9.9A14.6 14.6 0 0 0 9.5 37v2H2a2 2 0 0 1-2-2z" />
      </g>
    </svg>
  );
}

function RisingBarChartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
      <rect x="3" y="18" width="6" height="12" rx="1.2" />
      <rect x="11" y="12" width="6" height="18" rx="1.2" />
      <rect x="19" y="6" width="6" height="24" rx="1.2" />
      <path
        d="M22 2.5h7v7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TrophyFilledIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
      <path d="M8.5 3h15v9.5a7.5 7.5 0 0 1-15 0z" />
      <path
        d="M8.5 5.5H4v3a5.5 5.5 0 0 0 5.5 5.5M23.5 5.5H28v3a5.5 5.5 0 0 1-5.5 5.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <rect x="14.5" y="19.5" width="3" height="5" />
      <rect x="9.5" y="24.5" width="13" height="4" rx="1.2" />
    </svg>
  );
}

function StarFilledIcon({ className }: { className?: string }) {
  return (
    <Star
      className={className}
      fill="currentColor"
      strokeWidth={1.5}
      strokeLinejoin="round"
      aria-hidden="true"
    />
  );
}

/* ------------------------------------------------------------------ */
/* Data — line breaks match the design exactly                         */
/* ------------------------------------------------------------------ */
const MILESTONES = [
  {
    year: "2013",
    titleLines: ["2013 – Our Beginning"],
    descriptionLines: ["Friendly matches bring", "Devpur Gaam families", "together."],
    Icon: UsersFilledIcon,
  },
  {
    year: "2017",
    titleLines: ["2017 – Growing Community"],
    descriptionLines: ["A growing community", "creates a dependable", "rhythm of play."],
    Icon: RisingBarChartIcon,
  },
  {
    year: "2020",
    titleLines: ["2020 – Building Stronger", "Players"],
    descriptionLines: ["Players gain the support", "to develop with confidence."],
    Icon: TrophyFilledIcon,
  },
  {
    year: "2025",
    titleLines: ["2025 – The Next", "Generation"],
    descriptionLines: ["A new chapter carries the", "club forward."],
    Icon: StarFilledIcon,
  },
];

/* Dot offsets (from the start of a column's content) */
const DOT1 = "calc(var(--pl)_+_10px)";
const DOT2 = "calc(var(--pl)_+_137px)";

export function HomeHistoryTimelineStrip() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;

    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft < maxScroll - 15);

    if (maxScroll > 0) {
      const index = Math.round((scrollLeft / maxScroll) * (MILESTONES.length - 1));
      setActiveIndex(Math.min(MILESTONES.length - 1, Math.max(0, index)));
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
    const card = el.firstElementChild as HTMLElement | null;
    const amount = card ? card.offsetWidth : 260;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section
      id="history-timeline"
      aria-label="A History Shaped by the People Who Play It"
      className="relative w-full overflow-hidden bg-[#0E131B] py-10 sm:py-12"
    >
      {/* Background: faint grayscale cricketer on the right, fading to the left */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <Image
          src="/images/timeline_stadium_bg.png"
          alt=""
          fill
          priority
          className="object-cover object-right opacity-30 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E131B] via-[#0E131B]/85 to-[#0E131B]/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E131B]/60 via-transparent to-[#0E131B]/60" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-start w-full">
          {/* Heading */}
          <h2 className="font-display-serif font-bold uppercase text-[22px] sm:text-[28px] lg:text-[35px] leading-tight tracking-normal mb-8 sm:mb-9 max-w-5xl">
            <span className="text-white">A History Shaped by the </span>
            <span className="text-[#F0A04B]">People Who Play It.</span>
          </h2>

          {/* Timeline track */}
          <div
            ref={scrollRef}
            className="w-full flex lg:grid lg:grid-cols-4 lg:-ml-11 lg:w-[calc(100%+2.75rem)] overflow-x-auto lg:overflow-x-visible scroll-smooth snap-x snap-mandatory no-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            tabIndex={0}
            role="region"
            aria-label="DCC Milestones Timeline"
          >
            {MILESTONES.map(({ year, titleLines, descriptionLines, Icon }, idx) => {
              const isFirst = idx === 0;
              const isLast = idx === MILESTONES.length - 1;

              return (
                <div
                  key={year}
                  className="relative snap-start shrink-0 min-w-[270px] sm:min-w-[300px] lg:min-w-0 [--pl:1.5rem] lg:[--pl:2.75rem]"
                >
                  {/* ---- Dot row: one continuous line + 2 dots per column ---- */}
                  <div className="relative h-4" aria-hidden="true">
                    {/* line segment (first starts at dot 1, last ends at dot 2) */}
                    <div
                      className="absolute top-1/2 h-px -translate-y-1/2 bg-[#C16A35]/35"
                      style={{
                        left: isFirst ? DOT1.replace(/_/g, " ") : 0,
                        right: isLast ? undefined : 0,
                        width: isLast ? DOT2.replace(/_/g, " ") : undefined,
                      }}
                    />
                    {/* big dot */}
                    <span
                      className="absolute top-1/2 w-[14px] h-[14px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F0A04B] shadow-[0_0_10px_rgba(240,160,75,0.55)]"
                      style={{ left: DOT1.replace(/_/g, " ") }}
                    />
                    {/* small dot */}
                    <span
                      className="absolute top-1/2 w-[11px] h-[11px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F0A04B] shadow-[0_0_8px_rgba(240,160,75,0.45)]"
                      style={{ left: DOT2.replace(/_/g, " ") }}
                    />
                  </div>

                  {/* ---- Body: divider + icon + text ---- */}
                  <div className="relative mt-9 pl-[var(--pl)] pr-3">
                    {/* short vertical divider */}
                    {!isFirst && (
                      <span
                        className="absolute left-0 top-0 h-[92px] w-px bg-[#C16A35]/25"
                        aria-hidden="true"
                      />
                    )}

                    <div className="flex items-start gap-3">
                      <div className="text-[#F0A04B] shrink-0 -mt-0.5">
                        <Icon className={ICON_CLASS} />
                      </div>

                      <div className="flex flex-col text-left">
                        <h3 className="font-body text-[#F0A04B] font-semibold text-[13.5px] sm:text-[14px] leading-[1.55]">
                          {titleLines.map((line, i) => (
                            <span key={i} className="block whitespace-nowrap">
                              {line}
                            </span>
                          ))}
                        </h3>
                        <p className="font-body text-[#E5E7EB]/85 text-[12.5px] sm:text-[13px] leading-[1.6] mt-1">
                          {descriptionLines.map((line, i) => (
                            <span key={i} className="block whitespace-nowrap">
                              {line}
                            </span>
                          ))}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile / tablet controls */}
          <div className="flex items-center justify-between w-full pt-4 lg:hidden min-h-[44px]">
            <div className="w-24 flex items-center justify-start">
              {canScrollLeft && (
                <button
                  type="button"
                  onClick={() => scrollByCard(-1)}
                  aria-label="Previous milestone"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0D121F]/90 border border-[#C16A35]/60 text-[#F0A04B] hover:bg-[#D7833D] hover:text-white active:scale-95 transition-all text-[11px] font-bold uppercase tracking-wider"
                >
                  <ChevronLeft className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>Prev</span>
                </button>
              )}
            </div>

            <div className="flex items-center gap-1.5">
              {MILESTONES.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === i ? "w-6 bg-[#F0A04B]" : "w-1.5 bg-neutral-700"
                  }`}
                  aria-hidden="true"
                />
              ))}
            </div>

            <div className="w-24 flex items-center justify-end">
              {canScrollRight && (
                <button
                  type="button"
                  onClick={() => scrollByCard(1)}
                  aria-label="Next milestone"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0D121F]/90 border border-[#C16A35]/60 text-[#F0A04B] hover:bg-[#D7833D] hover:text-white active:scale-95 transition-all text-[11px] font-bold uppercase tracking-wider"
                >
                  <span>Next</span>
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