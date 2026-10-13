"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Container } from "../common/Container";

/* ------------------------------------------------------------------ */
/* Solid (filled) golden icons for The Journey                        */
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

function ConversationFilledIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 40" fill="currentColor" className={className} aria-hidden="true">
      {/* main front speech bubble */}
      <path d="M4 16c0-6.6 6.3-12 14-12s14 5.4 14 12c0 6.6-6.3 12-14 12-2.2 0-4.3-.4-6.1-1.3L5 29.5a1 1 0 0 1-1.5-.9v-5.2C5 21.2 4 18.7 4 16z" />
      {/* secondary speech bubble in background */}
      <path
        d="M36 12c4.4 1.2 7 4.5 7 8.5 0 2.2-.9 4.3-2.5 5.8v3.9a.8.8 0 0 1-1.2.7l-3.5-1.5c-1.4.5-2.9.7-4.4.7-3.2 0-6.1-1.1-7.9-2.9 4.4-.3 8.3-2.8 10.3-6.6.9-1.7 1.4-3.6 1.4-5.6 0-1.1-.1-2-.3-3z"
        opacity="0.8"
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

/* ------------------------------------------------------------------ */
/* Journey steps data — descriptions broken into 2 clean lines        */
/* ------------------------------------------------------------------ */
const JOURNEY_STEPS = [
  {
    step: 1,
    titleLines: ["1 – A Shared Passion"],
    descriptionLines: [
      "The KVO cricket tournaments",
      "brought the community together.",
    ],
    Icon: UsersFilledIcon,
  },
  {
    step: 2,
    titleLines: ["2 – A Conversation"],
    descriptionLines: [
      "Two friends from Devpur Gaam",
      "imagined a team of their own.",
    ],
    Icon: ConversationFilledIcon,
  },
  {
    step: 3,
    titleLines: ["3 – Devpur Cricket Club"],
    descriptionLines: [
      "A shared identity rooted in people",
      "and the pride of Devpur Gaam.",
    ],
    Icon: TrophyFilledIcon,
  },
];

/* Dot offsets (from the start of each column's content) */
const DOT1 = "calc(var(--pl)_+_10px)";
const DOT2 = "calc(var(--pl)_+_137px)";

export function HistoryJourneyTimelineSection() {
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
      const index = Math.round((scrollLeft / maxScroll) * (JOURNEY_STEPS.length - 1));
      setActiveIndex(Math.min(JOURNEY_STEPS.length - 1, Math.max(0, index)));
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
    const amount = card ? card.offsetWidth : 270;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section
      id="history-journey"
      aria-label="The Journey of Devpur Cricket Club"
      className="relative w-full overflow-hidden bg-[#0E131B] py-4 sm:py-5 border-b border-white/5"
    >
      {/* Background: atmospheric stadium floodlights with deep dark gradients */}
      <div
        className="absolute inset-0 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <Image
          src="/history/journey_stadium_dark_bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right opacity-25 grayscale sm:opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E131B] via-[#0E131B]/85 to-[#0E131B]/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E131B]/70 via-transparent to-[#0E131B]/70" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-start w-full">
          {/* Eyebrow + Headline */}
          <div className="inline-flex items-center gap-2 mb-2 sm:mb-2.5">
            <span className="font-body font-bold text-xs sm:text-[13px] tracking-[0.24em] uppercase text-[#F0A04B]">
              THE JOURNEY
            </span>
          </div>

          <h2 className="font-headline font-extrabold uppercase text-[22px] sm:text-[28px] lg:text-[35px] leading-tight tracking-tight mb-8 sm:mb-9 max-w-5xl">
            <span className="text-white">A Journey Shaped by </span>
            <span className="text-[#F0A04B]">Passion & Pride.</span>
          </h2>

          {/* Timeline track */}
          <div
            ref={scrollRef}
            className="w-full flex md:grid md:grid-cols-3 md:-ml-8 md:w-[calc(100%+2rem)] overflow-x-auto md:overflow-x-visible scroll-smooth snap-x snap-mandatory no-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            tabIndex={0}
            role="region"
            aria-label="The Journey Steps Timeline"
          >
            {JOURNEY_STEPS.map(({ step, titleLines, descriptionLines, Icon }, idx) => {
              const isFirst = idx === 0;
              const isLast = idx === JOURNEY_STEPS.length - 1;

              return (
                <div
                  key={step}
                  className="relative snap-start shrink-0 min-w-[270px] sm:min-w-[300px] md:min-w-0 [--pl:1.5rem] md:[--pl:2.25rem]"
                >
                  {/* ---- Dot row: continuous horizontal line + 2 glowing amber dots ---- */}
                  <div className="relative h-4" aria-hidden="true">
                    {/* line segment */}
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

                  {/* ---- Body: divider + golden icon + title & 2-line description ---- */}
                  <div className="relative mt-8 sm:mt-9 pl-[var(--pl)] pr-3">
                    {/* short vertical divider between items */}
                    {!isFirst && (
                      <span
                        className="absolute left-0 top-0 h-[92px] w-px bg-[#C16A35]/25"
                        aria-hidden="true"
                      />
                    )}

                    <div className="flex items-start gap-3 sm:gap-3.5">
                      <div className="text-[#F0A04B] shrink-0 -mt-0.5">
                        <Icon className={ICON_CLASS} />
                      </div>

                      <div className="flex flex-col text-left">
                        <h3 className="font-body text-[#F0A04B] font-semibold text-[13.5px] sm:text-[14px] leading-[1.55]">
                          {titleLines.map((line) => (
                            <span key={line} className="block whitespace-nowrap">
                              {line}
                            </span>
                          ))}
                        </h3>
                        <p className="font-body text-[#E5E7EB]/85 text-[12.5px] sm:text-[13px] leading-[1.6] mt-1">
                          {descriptionLines.map((line) => (
                            <span key={line} className="block whitespace-nowrap">
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

          {/* Mobile / tablet controls: Dots indicator on left, PREV / NEXT on right */}
          <div className="flex items-center justify-between w-full pt-5 md:hidden min-h-[44px]">
            {/* Dots indicator */}
            <div className="flex items-center gap-1.5">
              {JOURNEY_STEPS.map((step, i) => (
                <button
                  key={step.step}
                  type="button"
                  onClick={() => {
                    const el = scrollRef.current;
                    if (!el) return;
                    const card = el.firstElementChild as HTMLElement | null;
                    const amount = card ? card.offsetWidth : 270;
                    el.scrollTo({ left: i * amount, behavior: "smooth" });
                  }}
                  aria-label={`Go to step ${i + 1}`}
                  className={`h-1.5 rounded-full transition-[width,background-color] duration-300 cursor-pointer ${
                    activeIndex === i ? "w-6 bg-[#F0A04B]" : "w-1.5 bg-neutral-700"
                  }`}
                />
              ))}
            </div>

            {/* Prev / Next buttons */}
            <div className="flex items-center gap-2">
              {canScrollLeft && (
                <button
                  type="button"
                  onClick={() => scrollByCard(-1)}
                  aria-label="Previous step"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#0D121F]/90 border border-[#C16A35]/60 text-[#F0A04B] hover:bg-[#D7833D] hover:text-white active:scale-95 transition-[background-color,color,transform] text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  <ChevronLeft className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>PREV</span>
                </button>
              )}

              {canScrollRight && (
                <button
                  type="button"
                  onClick={() => scrollByCard(1)}
                  aria-label="Next step"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#0D121F]/90 border border-[#C16A35]/60 text-[#F0A04B] hover:bg-[#D7833D] hover:text-white active:scale-95 transition-[background-color,color,transform] text-xs font-bold uppercase tracking-wider cursor-pointer"
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
