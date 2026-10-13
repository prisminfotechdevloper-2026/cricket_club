"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronRight, ChevronLeft, BookOpen, Compass, Trophy, Flame } from "lucide-react";
import { Container } from "../common/Container";

export type HistoryRoadmapTab =
  | "our-story"
  | "our-vision"
  | "milestones"
  | "present-motive";

/* ------------------------------------------------------------------ */
/* Roadmap Pointers Data (4 Interactive Steps)                        */
/* ------------------------------------------------------------------ */
export interface RoadmapPointer {
  id: HistoryRoadmapTab;
  stepNumber: number;
  titleLines: string[];
  tabLabel: string;
  subtitle: string;
  descriptionLines: string[];
  Icon: React.ElementType;
}

const ROADMAP_POINTERS: RoadmapPointer[] = [
  {
    id: "our-story",
    stepNumber: 1,
    titleLines: ["1 – Our Story"],
    tabLabel: "Our Story",
    subtitle: "The Origin & Conversation",
    descriptionLines: [
      "Two friends from Devpur Gaam",
      "imagined a team of their own.",
    ],
    Icon: BookOpen,
  },
  {
    id: "our-vision",
    stepNumber: 2,
    titleLines: ["2 – Our Vision"],
    tabLabel: "Our Vision",
    subtitle: "Cricket as Our Medium",
    descriptionLines: [
      "Uniting 52–42 KVO gaams,",
      "aligning generations & values.",
    ],
    Icon: Compass,
  },
  {
    id: "milestones",
    stepNumber: 3,
    titleLines: ["3 – Milestones"],
    tabLabel: "Milestones",
    subtitle: "Tournament Silverware",
    descriptionLines: [
      "Inspiration League, KVO Navneet",
      "& Sportobuddy 5× Finalists.",
    ],
    Icon: Trophy,
  },
  {
    id: "present-motive",
    stepNumber: 4,
    titleLines: ["4 – Present Motive"],
    tabLabel: "Present Motive",
    subtitle: "Lifting the Trophy",
    descriptionLines: [
      "5× Runners-Up fueled to win",
      "the final championship trophy.",
    ],
    Icon: Flame,
  },
];

/* Dot offsets (from the start of each column's content) */
const DOT1 = "calc(var(--pl)_+_10px)";
const DOT2 = "calc(var(--pl)_+_120px)";

interface HistoryJourneyTimelineSectionProps {
  activeTab?: HistoryRoadmapTab;
  onSelectTab?: (tab: HistoryRoadmapTab) => void;
}

export function HistoryJourneyTimelineSection({
  activeTab = "our-story",
  onSelectTab,
}: HistoryJourneyTimelineSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollIndex, setScrollIndex] = useState(0);

  const checkScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;

    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft < maxScroll - 15);

    if (maxScroll > 0) {
      const index = Math.round(
        (scrollLeft / maxScroll) * (ROADMAP_POINTERS.length - 1)
      );
      setScrollIndex(
        Math.min(ROADMAP_POINTERS.length - 1, Math.max(0, index))
      );
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

  const handlePointerClick = (tabId: HistoryRoadmapTab) => {
    if (onSelectTab) {
      onSelectTab(tabId);
    }
  };

  return (
    <section
      id="history-journey"
      aria-label="The Journey Roadmap of Devpur Cricket Club"
      className="relative w-full overflow-hidden bg-[#0E131B] py-5 sm:py-7 border-b border-white/10"
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E131B] via-[#0E131B]/90 to-[#0E131B]/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E131B]/80 via-transparent to-[#0E131B]/80" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-start w-full">
          {/* Eyebrow + Subtitle */}
          <div className="flex flex-wrap items-center justify-between w-full gap-2 mb-2">
            <div className="inline-flex items-center gap-2">
              <span className="font-body font-bold text-xs sm:text-[13px] tracking-[0.24em] uppercase text-[#f39a3b]">
                THE JOURNEY ROADMAP
              </span>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#f39a3b]" />
              <span className="hidden sm:inline-block font-mono text-xs text-[#94A3B8]">
                Interactive Club Navigation
              </span>
            </div>

            <div className="text-right">
              <span className="text-[11px] font-mono text-[#f39a3b] uppercase tracking-wider bg-[#f39a3b]/10 px-2.5 py-1 rounded-full border border-[#f39a3b]/20">
                Click Pointers to Explore
              </span>
            </div>
          </div>

          <h2 className="font-headline font-extrabold uppercase text-[22px] sm:text-[30px] lg:text-[38px] leading-tight tracking-tight mb-6 sm:mb-8 max-w-5xl text-left">
            <span className="text-white">A Journey Shaped by </span>
            <span className="text-[#f39a3b]">Passion &amp; Pride.</span>
          </h2>

          {/* Quick Tab Selector for Mobile / Compact Screens */}
          <div className="flex lg:hidden items-center gap-1.5 overflow-x-auto w-full pb-3 mb-2 no-scrollbar">
            {ROADMAP_POINTERS.map((ptr) => {
              const isActive = activeTab === ptr.id;
              return (
                <button
                  key={ptr.id}
                  type="button"
                  onClick={() => handlePointerClick(ptr.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? "bg-[#f39a3b] text-[#0A0E15] shadow-md scale-102"
                      : "bg-[#182133] text-[#CBD5E1] border border-white/10 hover:text-white"
                  }`}
                >
                  {ptr.tabLabel}
                </button>
              );
            })}
          </div>

          {/* Timeline track (Roadmap Pointers) */}
          <div
            ref={scrollRef}
            className="w-full flex lg:grid lg:grid-cols-4 lg:-ml-6 lg:w-[calc(100%+1.5rem)] overflow-x-auto lg:overflow-x-visible scroll-smooth snap-x snap-mandatory no-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            tabIndex={0}
            role="region"
            aria-label="The Journey Roadmap Steps"
          >
            {ROADMAP_POINTERS.map(
              ({ id, titleLines, descriptionLines, Icon, tabLabel }, idx) => {
                const isFirst = idx === 0;
                const isLast = idx === ROADMAP_POINTERS.length - 1;
                const isActive = activeTab === id;

                return (
                  <div
                    key={id}
                    onClick={() => handlePointerClick(id)}
                    className={`relative snap-start shrink-0 min-w-[260px] sm:min-w-[280px] lg:min-w-0 [--pl:1.25rem] lg:[--pl:1.75rem] group cursor-pointer transition-all duration-300 rounded-xl p-2 sm:p-2.5 ${
                      isActive
                        ? "bg-white/[0.04] lg:bg-transparent"
                        : "hover:bg-white/[0.02]"
                    }`}
                  >
                    {/* ---- Dot row: continuous horizontal line + 2 glowing amber dots ---- */}
                    <div className="relative h-5" aria-hidden="true">
                      {/* line segment */}
                      <div
                        className="absolute top-1/2 h-px -translate-y-1/2 bg-[#f39a3b]/35 group-hover:bg-[#f39a3b]/60 transition-colors"
                        style={{
                          left: isFirst ? DOT1.replace(/_/g, " ") : 0,
                          right: isLast ? undefined : 0,
                          width: isLast ? DOT2.replace(/_/g, " ") : undefined,
                        }}
                      />

                      {/* big dot */}
                      <span
                        className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ${
                          isActive
                            ? "w-[16px] h-[16px] bg-[#f39a3b] shadow-[0_0_16px_rgba(243, 154, 59,0.9)] ring-4 ring-[#f39a3b]/35 scale-110"
                            : "w-[14px] h-[14px] bg-[#f39a3b]/75 shadow-[0_0_10px_rgba(243, 154, 59,0.45)] group-hover:bg-[#f39a3b] group-hover:scale-110"
                        }`}
                        style={{ left: DOT1.replace(/_/g, " ") }}
                      />

                      {/* small dot */}
                      <span
                        className={`absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ${
                          isActive
                            ? "w-[12px] h-[12px] bg-[#f39a3b] shadow-[0_0_10px_rgba(243, 154, 59,0.6)]"
                            : "w-[10px] h-[10px] bg-[#f39a3b]/60 shadow-[0_0_6px_rgba(243, 154, 59,0.3)] group-hover:bg-[#f39a3b]/80"
                        }`}
                        style={{ left: DOT2.replace(/_/g, " ") }}
                      />
                    </div>

                    {/* ---- Body: divider + golden icon + title & description ---- */}
                    <div className="relative mt-7 sm:mt-8 pl-[var(--pl)] pr-2 text-left">
                      {/* short vertical divider between items */}
                      {!isFirst && (
                        <span
                          className={`absolute left-0 top-0 h-[88px] w-px transition-colors ${
                            isActive
                              ? "bg-[#f39a3b]/40"
                              : "bg-[#f39a3b]/20 group-hover:bg-[#f39a3b]/35"
                          }`}
                          aria-hidden="true"
                        />
                      )}

                      <div className="flex items-start gap-3">
                        <div
                          className={`shrink-0 -mt-0.5 p-2 rounded-xl transition-all duration-300 ${
                            isActive
                              ? "bg-[#f39a3b] text-[#0E131B] shadow-[0_0_14px_rgba(243, 154, 59,0.5)] scale-105"
                              : "bg-[#182133] text-[#f39a3b] border border-[#f39a3b]/30 group-hover:border-[#f39a3b] group-hover:scale-105"
                          }`}
                        >
                          <Icon className="w-5 h-5 stroke-[2]" />
                        </div>

                        <div className="flex flex-col text-left">
                          {/* Active view indicator badge */}
                          {isActive && (
                            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#f39a3b] mb-0.5 inline-flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#f39a3b] animate-pulse" />
                              <span>CURRENT VIEW</span>
                            </span>
                          )}

                          <h3
                            className={`font-body font-bold text-[14px] sm:text-[14.5px] leading-snug transition-colors ${
                              isActive
                                ? "text-[#f39a3b]"
                                : "text-white group-hover:text-[#f39a3b]"
                            }`}
                          >
                            {titleLines.map((line) => (
                              <span key={line} className="block whitespace-nowrap">
                                {line}
                              </span>
                            ))}
                          </h3>

                          <p className="font-body text-[#94A3B8] group-hover:text-[#CBD5E1] text-[12px] sm:text-[12.5px] leading-[1.55] mt-1 transition-colors">
                            {descriptionLines.map((line) => (
                              <span key={line} className="block whitespace-nowrap">
                                {line}
                              </span>
                            ))}
                          </p>
                        </div>
                      </div>

                      {/* Active bottom line indicator on desktop */}
                      <div
                        className={`hidden lg:block h-[2px] rounded-full mt-4 transition-all duration-300 ${
                          isActive
                            ? "bg-[#f39a3b] w-full shadow-[0_0_8px_rgba(243, 154, 59,0.6)]"
                            : "bg-transparent w-0 group-hover:bg-white/20 group-hover:w-1/2"
                        }`}
                      />
                    </div>
                  </div>
                );
              }
            )}
          </div>

          {/* Mobile / tablet controls: Dots indicator on left, PREV / NEXT on right */}
          <div className="flex items-center justify-between w-full pt-4 lg:hidden min-h-[44px]">
            {/* Dots indicator */}
            <div className="flex items-center gap-1.5">
              {ROADMAP_POINTERS.map((step, i) => (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => {
                    const el = scrollRef.current;
                    if (!el) return;
                    const card = el.firstElementChild as HTMLElement | null;
                    const amount = card ? card.offsetWidth : 270;
                    el.scrollTo({ left: i * amount, behavior: "smooth" });
                    handlePointerClick(step.id);
                  }}
                  aria-label={`Go to step ${i + 1}`}
                  className={`h-1.5 rounded-full transition-[width,background-color] duration-300 cursor-pointer ${
                    scrollIndex === i
                      ? "w-6 bg-[#f39a3b]"
                      : "w-1.5 bg-neutral-700"
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
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#0D121F]/90 border border-[#f39a3b]/60 text-[#f39a3b] hover:bg-[#f39a3b] hover:text-white active:scale-95 transition-[background-color,color,transform] text-xs font-bold uppercase tracking-wider cursor-pointer"
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
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#0D121F]/90 border border-[#f39a3b]/60 text-[#f39a3b] hover:bg-[#f39a3b] hover:text-white active:scale-95 transition-[background-color,color,transform] text-xs font-bold uppercase tracking-wider cursor-pointer"
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
