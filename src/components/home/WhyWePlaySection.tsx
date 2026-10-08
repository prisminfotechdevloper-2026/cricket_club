"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../common/Container";
import {
  Users,
  Calendar,
  Heart,
  Activity,
  Briefcase,
  TrendingUp,
  ArrowUpRight,
  Shield,
  Quote,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";

interface PillarData {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tag: string;
  quote: string;
  description: string;
  image: string;
  imagePosition: string; // Tailored object position so no heads or faces are cut off
  metrics: { value: string; label: string }[];
  bulletPoints: string[];
  badgeColor: string;
}

const PILLARS: PillarData[] = [
  {
    id: "community",
    number: "01",
    title: "Community & Gaam Heritage",
    subtitle: "Rallying Behind Devpur Gaam",
    tag: "Devpur Gaam Pride",
    quote: "Wearing the Devpur crest isn't just about cricket — it connects us to our gaam, our elders, and our shared roots.",
    description:
      "We wear the Devpur crest with deep pride, uniting our village community across Mumbai. Cricket is our medium to celebrate identity, tradition, and mutual belonging within the 10,000+ KVO community cricket network.",
    image: "/images/team_group_11.png",
    imagePosition: "object-[center_top]",
    metrics: [
      { value: "Est. 2013", label: "Club Inception" },
      { value: "10,000+", label: "KVO Community Network" },
      { value: "Devpur", label: "Apex Gaam Representation" },
    ],
    bulletPoints: [
      "Representing Devpur Gaam with sporting dignity",
      "Bridging rural heritage with modern Mumbai sports life",
      "Uniting senior patrons, youth, and families under one banner",
    ],
    badgeColor: "from-[#EA6E18] to-[#F89928]",
  },
  {
    id: "discipline",
    number: "02",
    title: "Discipline & Routine",
    subtitle: "3 Days a Week at Matunga Ground",
    tag: "Matunga Turf Nets",
    quote: "True sporting form isn't accidental luck. It is forged in 6:30 AM net sessions three days a week.",
    description:
      "Scheduled practice on Mondays, Wednesdays, and Fridays at Matunga Ground under Head Coach Mr. Aditya Koli (Kanga B Division player) instills work ethic, punctuality, and sportsmanship across our 50+ members.",
    image: "/images/training_team.png",
    imagePosition: "object-[center_top]",
    metrics: [
      { value: "3 Days/Wk", label: "Mon • Wed • Fri Rhythm" },
      { value: "5–6 Months", label: "Annual Training Cycle" },
      { value: "Coach A. Koli", label: "Kanga B Div Supervision" },
    ],
    bulletPoints: [
      "High-volume batting throwdowns & seam bowling biomechanics",
      "Workload management and match situation simulations",
      "Punctuality, dress code, and commitment across seasons",
    ],
    badgeColor: "from-[#EA6E18] to-[#F89928]",
  },
  {
    id: "brotherhood",
    number: "03",
    title: "Lifelong Brotherhood",
    subtitle: "Beyond the 22 Yards",
    tag: "Match Days to Life Days",
    quote: "Teammates for 20 overs under scoreboard pressure. Brothers for life through every celebration.",
    description:
      "From tense match chases to shared post-session cutting chai, Mumbai Western Railway local train journeys with heavy kit bags, and dancing at teammates' weddings in traditional kurtas — our fraternity is for life.",
    image: "/images/5year_age_memories.png",
    imagePosition: "object-[center_28%]",
    metrics: [
      { value: "50+", label: "Active Brothers" },
      { value: "100%", label: "Fraternity Loyalty" },
      { value: "Unbroken", label: "Off-Pitch Camaraderie" },
    ],
    bulletPoints: [
      "Standing by teammates in weddings, milestones & hardships",
      "Annual club dinners, get-togethers & victory parties",
      "Western Railway train commute camaraderie across tours",
    ],
    badgeColor: "from-[#8B111B] to-[#EA6E18]",
  },
  {
    id: "fitness",
    number: "04",
    title: "Athletic Conditioning",
    subtitle: "Year-Round Movement & Health",
    tag: "Stamina & Agility",
    quote: "Cricket gives 50+ working men a reason to sprint, stay agile, and defy sedentary city lifestyles.",
    description:
      "Facing genuine leather-ball pace, high-repetition sprint intervals between wickets, and dynamic slip-reflex catching drills keep our 50+ members physically sharp, energized, and injury-resilient year after year.",
    image: "/images/exersise.png",
    imagePosition: "object-[center_20%]",
    metrics: [
      { value: "22 Yards", label: "High-Rep Sprint Intervals" },
      { value: "Pre-Net", label: "Dynamic Mobility Protocol" },
      { value: "50+ Members", label: "Staying Active & Fit" },
    ],
    bulletPoints: [
      "Cricket-specific sprint stamina and cardiovascular health",
      "Rotational core power for clean strokeplay and bowling pace",
      "Injury prevention and recovery routines for working adults",
    ],
    badgeColor: "from-[#EA6E18] to-[#F89928]",
  },
  {
    id: "network",
    number: "05",
    title: "Network & Social Capital",
    subtitle: "Cross-Generational Trust",
    tag: "Community Collaboration",
    quote: "When you sweat and battle together on the pitch, mutual business and social trust naturally follows.",
    description:
      "The cricket field serves as a natural catalyst for professional collaboration, business partnerships, and career mentorship. Senior community entrepreneurs and young players share dressing room conversations that turn into lasting opportunities.",
    image: "/images/team_members.png",
    imagePosition: "object-[center_top]",
    metrics: [
      { value: "Generational", label: "Youth & Veteran Bond" },
      { value: "High Trust", label: "Community Collaborations" },
      { value: "Mumbai-Wide", label: "Professional Networks" },
    ],
    bulletPoints: [
      "Mentorship from established community entrepreneurs",
      "Career guidance and internship leads for younger players",
      "Shared business ethics founded on pitch sportsmanship",
    ],
    badgeColor: "from-[#1B1D22] to-[#CF7647]",
  },
  {
    id: "growth",
    number: "06",
    title: "Growth & Higher Doors",
    subtitle: "A Launchpad to Bigger Stages",
    tag: "Sporting Progression",
    quote: "DCC is not the finish line — it is the launchpad for cricketers who dare to test their boundaries.",
    description:
      "For dedicated members, DCC provides a competitive tournament platform of 25+ seasonal leather-ball fixtures. Without making false state-selection promises, we deliver real cricket infrastructure that develops match temperament and opens doors to elite community leagues.",
    image: "/images/achivement_winning.png",
    imagePosition: "object-[center_top]",
    metrics: [
      { value: "25+ Matches", label: "Leather-Ball Fixtures/Yr" },
      { value: "Rank #10", label: "Stated KVO Circuit Rank" },
      { value: "2× Silver", label: "KVO Runners-Up Trophies" },
    ],
    bulletPoints: [
      "Orange & Purple Cap individual honorees within squad",
      "Progression opportunities into prestigious KVO tournaments",
      "Technical batting and bowling evolution under pressure",
    ],
    badgeColor: "from-[#EA6E18] to-[#8B111B]",
  },
];

export function WhyWePlaySection() {
  const [activePillarId, setActivePillarId] = useState<string>("community");
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [manualPaused, setManualPaused] = useState<boolean>(false);

  // Effective pause state: either mouse is hovering or user manually toggled pause
  const isEffectivelyPaused = isHovered || manualPaused;

  const activePillarIndex = PILLARS.findIndex((p) => p.id === activePillarId);
  const activePillar =
    PILLARS[activePillarIndex !== -1 ? activePillarIndex : 0];

  // Navigate to previous pillar
  const handlePrev = useCallback(() => {
    setActivePillarId((currentId) => {
      const idx = PILLARS.findIndex((p) => p.id === currentId);
      const prevIdx = (idx - 1 + PILLARS.length) % PILLARS.length;
      return PILLARS[prevIdx].id;
    });
  }, []);

  // Navigate to next pillar
  const handleNext = useCallback(() => {
    setActivePillarId((currentId) => {
      const idx = PILLARS.findIndex((p) => p.id === currentId);
      const nextIdx = (idx + 1) % PILLARS.length;
      return PILLARS[nextIdx].id;
    });
  }, []);

  // 3-Second Automatic Rotation Timer
  useEffect(() => {
    if (isEffectivelyPaused) return;

    const timer = setInterval(() => {
      setActivePillarId((currentId) => {
        const idx = PILLARS.findIndex((p) => p.id === currentId);
        const nextIdx = (idx + 1) % PILLARS.length;
        return PILLARS[nextIdx].id;
      });
    }, 3000);

    return () => clearInterval(timer);
  }, [isEffectivelyPaused, activePillarId]);

  return (
    <section
      id="why-we-play"
      aria-labelledby="why-we-play-title"
      className="py-16 sm:py-24 bg-background border-b border-border/80 relative overflow-hidden"
    >
      {/* Dynamic Keyframes for the 3-Second Auto-Rotation Progress Bar */}
      <style>{`
        @keyframes dccPillarProgress {
          from { width: 0%; }
          to { width: 100%; }
        }
        .pillar-progress-track {
          animation: dccPillarProgress 3000ms linear forwards;
        }
        .pillar-progress-paused {
          animation-play-state: paused !important;
        }
      `}</style>

      {/* Subtle stadium daylight background accents */}
      <div className="absolute top-0 right-10 w-[600px] h-[600px] rounded-full bg-brand-orange/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full bg-brand-gold/5 blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* =========================================================================
            HEADER: ATHLETIC CLUB IDENTITY & PHILOSOPHY
            ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-charcoal text-white text-[11px] font-bold uppercase tracking-widest shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span>COMMUNITY VALUE</span>
              <span className="text-stone-500">•</span>
              <span className="text-brand-peach">DEVPUR GAAM</span>
            </div>

            <h2
              id="why-we-play-title"
              className="font-headline text-3xl sm:text-5xl lg:text-6xl font-black text-brand-black tracking-tight leading-[0.98] uppercase"
            >
              Why Members <span className="text-brand-copper">Choose Club Life</span>
            </h2>

            <p className="text-sm sm:text-base text-foreground-soft leading-relaxed font-medium">
              Cricket is our medium — but our club life encompasses fitness, routine, lasting friendship, community connection, and personal growth for our 50+ members.
            </p>
          </div>

          {/* Quick Autoplay & Interaction Status Pill */}
          <div className="shrink-0 flex items-center gap-3 bg-surface border border-border p-3 rounded-2xl shadow-xs">
            <button
              type="button"
              onClick={() => setManualPaused((prev) => !prev)}
              className="w-10 h-10 rounded-xl bg-stone-900 text-white hover:bg-black transition-colors flex items-center justify-center shrink-0 cursor-pointer group"
              title={isEffectivelyPaused ? "Resume Auto-Play" : "Pause Auto-Play"}
              aria-label={isEffectivelyPaused ? "Resume Auto-Play" : "Pause Auto-Play"}
            >
              {isEffectivelyPaused ? (
                <Play className="w-4 h-4 text-brand-orange fill-brand-orange ml-0.5 group-hover:scale-110 transition-transform" />
              ) : (
                <Pause className="w-4 h-4 text-brand-orange fill-brand-orange group-hover:scale-110 transition-transform" />
              )}
            </button>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-headline text-base sm:text-lg font-black text-brand-black block leading-none">
                  {isEffectivelyPaused ? "Paused" : "Auto-Cycling"}
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-brand-orange/15 text-brand-copper-dark font-bold">
                  3s Loop
                </span>
              </div>
              <span className="text-[10px] font-mono text-muted block mt-0.5">
                {isHovered
                  ? "Hovering (Timer Paused)"
                  : manualPaused
                  ? "Click play to resume"
                  : "Hover/click to hold"}
              </span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            INTERACTIVE PILLAR NAVIGATOR (WITH REAL-TIME 3S PROGRESS BARS)
            Hovering or clicking pauses auto-rotation and immediately selects pillar
            ========================================================================= */}
        <div
          className="mb-8 overflow-x-auto pb-2 scrollbar-none"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            role="tablist"
            aria-label="Club Pillars"
            className="flex items-center gap-2 min-w-max p-1.5 rounded-2xl bg-surface border border-border shadow-xs"
          >
            {PILLARS.map((p) => {
              const isActive = p.id === activePillarId;
              return (
                <button
                  key={p.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`pillar-panel-${p.id}`}
                  onClick={() => {
                    setActivePillarId(p.id);
                  }}
                  className={`relative overflow-hidden flex flex-col justify-center px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? "bg-stone-950 text-white shadow-md scale-[1.01]"
                      : "text-foreground-soft hover:text-brand-black hover:bg-stone-100/80"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`font-mono text-xs ${
                        isActive ? "text-brand-orange font-black" : "text-stone-400"
                      }`}
                    >
                      {p.number}
                    </span>
                    <span>{p.title.split("&")[0].trim()}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-ping" />
                    )}
                  </div>

                  {/* 3-Second Active Progress Indicator under the Active Tab */}
                  {isActive && (
                    <div className="absolute inset-x-0 bottom-0 h-[2.5px] bg-white/20 overflow-hidden">
                      <div
                        key={`tab-progress-${p.id}`}
                        className={`h-full bg-gradient-to-r from-brand-orange to-brand-gold pillar-progress-track ${
                          isEffectivelyPaused ? "pillar-progress-paused" : ""
                        }`}
                      />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            STAGE 1: DYNAMIC SPOTLIGHT HERO CARD (CRYSTAL CLEAR PHOTOGRAPHY)
            ZERO BLACK OVERLAYS: Photos are 100% natural, crisp, bright daylight!
            HEADROOM ANCHOR: object-[center_top] guarantees full heads/faces are visible.
            ========================================================================= */}
        <div
          id={`pillar-panel-${activePillar.id}`}
          role="tabpanel"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="mb-12 rounded-3xl overflow-hidden border border-border/80 shadow-2xl bg-stone-950 text-white relative group transition-[box-shadow,border-color] duration-300"
        >
          {/* Top Edge Real-Time Countdown Progress Bar */}
          <div className="absolute inset-x-0 top-0 h-1 bg-white/10 z-30 overflow-hidden">
            <div
              key={`hero-progress-${activePillar.id}`}
              className={`h-full bg-gradient-to-r from-brand-orange via-brand-gold to-brand-copper pillar-progress-track ${
                isEffectivelyPaused ? "pillar-progress-paused" : ""
              }`}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px] lg:min-h-[500px]">
            {/* Left Column: Framed Daylight Photography Stage (100% Natural, NO Black Wash) */}
            <div className="lg:col-span-7 p-3 sm:p-4 lg:p-5 flex flex-col justify-center bg-stone-900/60">
              <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[470px] rounded-2xl overflow-hidden bg-stone-900 border border-white/10 shadow-lg group">
                <Image
                  key={activePillar.image}
                  src={activePillar.image}
                  alt={activePillar.title}
                  fill
                  priority
                  className={`object-cover ${activePillar.imagePosition} transition-transform duration-700 ease-out group-hover:scale-102`}
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />

                {/* Subtle protective border ring (NO black gradient covering people) */}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 pointer-events-none z-10" />

                {/* Top-Left Floating Pillar Badge */}
                <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-20 flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[11px] font-mono font-bold uppercase tracking-wider text-brand-peach flex items-center gap-2 shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                    <span>PILLAR {activePillar.number}</span>
                    <span className="text-white/40">•</span>
                    <span className="text-white">{activePillar.tag}</span>
                  </span>

                  {/* Micro Pause Status Pill on Image */}
                  {isEffectivelyPaused && (
                    <span className="px-2.5 py-0.5 rounded-full bg-brand-orange/95 text-stone-950 text-[10px] font-mono font-bold uppercase tracking-wider shadow-md">
                      PAUSED
                    </span>
                  )}
                </div>

                {/* Top-Right Left/Right Interactive Arrow Controls */}
                <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-20 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="w-9 h-9 rounded-full bg-black/80 hover:bg-brand-orange hover:text-stone-950 text-white border border-white/25 flex items-center justify-center transition-colors cursor-pointer backdrop-blur-md shadow-md"
                    aria-label="Previous pillar"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-9 h-9 rounded-full bg-black/80 hover:bg-brand-orange hover:text-stone-950 text-white border border-white/25 flex items-center justify-center transition-colors cursor-pointer backdrop-blur-md shadow-md"
                    aria-label="Next pillar"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Deep Narrative & Telemetry Details */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-9 flex flex-col justify-between bg-stone-950 space-y-6 border-t lg:border-t-0 lg:border-l border-white/10">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="font-mono text-xs uppercase font-bold text-brand-orange tracking-widest">
                    {activePillar.subtitle}
                  </span>
                  <span className="font-mono text-xs text-stone-500 font-bold">
                    {activePillar.number} / 06
                  </span>
                </div>

                <div>
                  <h3 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-[0.98]">
                    {activePillar.title}
                  </h3>
                </div>

                {/* Quote Card */}
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-neutral-300">
                  <Quote className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <p className="italic leading-relaxed">
                    &ldquo;{activePillar.quote}&rdquo;
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-medium">
                  {activePillar.description}
                </p>

                {/* Bullet Points */}
                <div className="space-y-2 pt-1">
                  {activePillar.bulletPoints.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-2.5 text-xs text-neutral-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                      <span className="leading-snug">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom 3-Metric Telemetry Strip */}
              <div className="pt-5 border-t border-white/10 grid grid-cols-3 gap-3">
                {activePillar.metrics.map((m) => (
                  <div key={m.label} className="space-y-0.5">
                    <span className="font-headline text-lg sm:text-xl font-black text-white block leading-none">
                      {m.value}
                    </span>
                    <span className="text-[10px] font-mono uppercase text-stone-400 block leading-tight">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            STAGE 2: ASYMMETRICAL 6-CARD BENTO ARCHITECTURE
            Hovering over any card pauses the timer; clicking jumps to that pillar
            ========================================================================= */}
        <div
          className="space-y-6"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/80 pb-3">
            <h3 className="font-headline text-xl sm:text-2xl font-bold uppercase tracking-tight text-brand-black">
              Explore All 6 Pillars of Club Life
            </h3>
            <span className="text-xs font-mono text-muted uppercase">
              Hover to hold • Click any card to spotlight
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6">
            {/* Card 1: Community Heritage Bento (Lg: Col-span-4) */}
            <button
              type="button"
              onClick={() => setActivePillarId("community")}
              className={`lg:col-span-4 rounded-3xl p-6 sm:p-7 flex flex-col justify-between cursor-pointer w-full text-left transition-[border-color,box-shadow,background-color] duration-300 sports-card group ${
                activePillarId === "community"
                  ? "ring-2 ring-brand-copper border-brand-copper shadow-lg bg-amber-50/20"
                  : "bg-surface border border-border"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-brand-orange/15 flex items-center justify-center text-brand-orange">
                    <Users className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-stone-400">
                    01 // COMMUNITY
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="font-headline text-2xl font-black text-brand-black uppercase group-hover:text-brand-copper transition-colors">
                    Devpur Gaam Heritage
                  </h4>
                  <p className="text-xs font-bold text-brand-copper uppercase">
                    One Gaam • One Brotherhood
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-foreground-soft leading-relaxed">
                  We unite 50+ members under the Devpur crest, representing our village across premier KVO tournaments and Mumbai community cricket.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-border flex items-center justify-between text-xs font-mono font-bold text-brand-black">
                <span className="text-stone-500">10,000+ KVO REACH</span>
                <span className="group-hover:translate-x-1 transition-transform text-brand-copper">
                  {activePillarId === "community" ? "ACTIVE NOW ●" : "SPOTLIGHT →"}
                </span>
              </div>
            </button>

            {/* Card 2: 3-Day Matunga Nets Schedule Bento (Lg: Col-span-4) */}
            <button
              type="button"
              onClick={() => setActivePillarId("discipline")}
              className={`lg:col-span-4 rounded-3xl p-6 sm:p-7 flex flex-col justify-between cursor-pointer w-full text-left transition-[border-color,box-shadow,background-color] duration-300 sports-card group ${
                activePillarId === "discipline"
                  ? "ring-2 ring-brand-copper border-brand-copper shadow-lg bg-amber-50/20"
                  : "bg-surface border border-border"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-amber-500/15 flex items-center justify-center text-[#F89928]">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-stone-400">
                    02 // DISCIPLINE
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="font-headline text-2xl font-black text-brand-black uppercase group-hover:text-brand-copper transition-colors">
                    The 3-Day Net Rhythm
                  </h4>
                  <p className="text-xs font-bold text-[#EA6E18] uppercase">
                    Matunga Ground Turf Nets
                  </p>
                </div>

                {/* Day Chips */}
                <div className="grid grid-cols-3 gap-1.5 pt-1">
                  <div className="p-2 rounded-xl bg-stone-50 border border-stone-200/80 text-center">
                    <span className="font-headline text-sm font-black text-brand-black block">MON</span>
                    <span className="text-[9px] font-mono text-stone-500">Net Reps</span>
                  </div>
                  <div className="p-2 rounded-xl bg-stone-50 border border-stone-200/80 text-center">
                    <span className="font-headline text-sm font-black text-brand-black block">WED</span>
                    <span className="text-[9px] font-mono text-stone-500">Tactical</span>
                  </div>
                  <div className="p-2 rounded-xl bg-stone-50 border border-stone-200/80 text-center">
                    <span className="font-headline text-sm font-black text-brand-black block">FRI</span>
                    <span className="text-[9px] font-mono text-stone-500">Match Sim</span>
                  </div>
                </div>

                <p className="text-xs text-foreground-soft leading-relaxed">
                  Supervised by Head Coach Mr. Aditya Koli (Kanga B Division player) for technical mastery.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-border flex items-center justify-between text-xs font-mono font-bold text-brand-black">
                <span className="text-stone-500">COACH ADITYA KOLI</span>
                <span className="group-hover:translate-x-1 transition-transform text-brand-copper">
                  {activePillarId === "discipline" ? "ACTIVE NOW ●" : "SPOTLIGHT →"}
                </span>
              </div>
            </button>

            {/* Card 3: Brotherhood & Family Bento (Lg: Col-span-4) */}
            <button
              type="button"
              onClick={() => setActivePillarId("brotherhood")}
              className={`lg:col-span-4 rounded-3xl p-6 sm:p-7 flex flex-col justify-between cursor-pointer w-full text-left transition-[border-color,box-shadow,background-color] duration-300 sports-card group ${
                activePillarId === "brotherhood"
                  ? "ring-2 ring-brand-copper border-brand-copper shadow-lg bg-amber-50/20"
                  : "bg-surface border border-border"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-rose-500/15 flex items-center justify-center text-rose-600">
                    <Heart className="w-5 h-5 fill-rose-600" />
                  </div>
                  <span className="font-mono text-xs font-bold text-stone-400">
                    03 // BROTHERHOOD
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="font-headline text-2xl font-black text-brand-black uppercase group-hover:text-brand-copper transition-colors">
                    Beyond the 22 Yards
                  </h4>
                  <p className="text-xs font-bold text-rose-600 uppercase">
                    From Match Kits to Wedding Kurtas
                  </p>
                </div>

                {/* High-Resolution Celebration Photo with Teammates Clear & Front-Facing */}
                <div className="relative h-36 sm:h-40 rounded-2xl overflow-hidden border border-border bg-stone-100 shadow-2xs group/img">
                  <Image
                    src="/images/5year_age_memories.png"
                    alt="Camaraderie and brotherhood of teammates"
                    fill
                    className="object-cover object-[center_28%] group-hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 100vw, 360px"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 pointer-events-none" />
                  <div className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-lg bg-black/65 backdrop-blur-md border border-white/20 text-[10px] font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                    <span>Squad Brotherhood</span>
                  </div>
                </div>

                <p className="text-xs text-foreground-soft leading-relaxed">
                  Post-session cutting chai, train trips across Western Railway, and standing by each other in life milestones.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-border flex items-center justify-between text-xs font-mono font-bold text-brand-black">
                <span className="text-stone-500">LIFELONG FAMILY</span>
                <span className="group-hover:translate-x-1 transition-transform text-brand-copper">
                  {activePillarId === "brotherhood" ? "ACTIVE NOW ●" : "SPOTLIGHT →"}
                </span>
              </div>
            </button>

            {/* Card 4: Athletic Conditioning & Stamina Bento (Lg: Col-span-4) */}
            <button
              type="button"
              onClick={() => setActivePillarId("fitness")}
              className={`lg:col-span-4 rounded-3xl p-6 sm:p-7 flex flex-col justify-between cursor-pointer w-full text-left transition-[border-color,box-shadow,background-color] duration-300 sports-card group ${
                activePillarId === "fitness"
                  ? "ring-2 ring-brand-copper border-brand-copper shadow-lg bg-amber-50/20"
                  : "bg-surface border border-border"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-orange-500/15 flex items-center justify-center text-brand-orange">
                    <Activity className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-stone-400">
                    04 // ATHLETIC FITNESS
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="font-headline text-2xl font-black text-brand-black uppercase group-hover:text-brand-copper transition-colors">
                    Athletic Stamina
                  </h4>
                  <p className="text-xs font-bold text-brand-orange uppercase">
                    5–6 Month Training Engine
                  </p>
                </div>

                <div className="space-y-2 pt-1 text-xs text-foreground-soft font-medium">
                  <div className="flex items-center justify-between p-2 rounded-xl bg-stone-50 border border-stone-200/80">
                    <span>22-Yard Sprint Repetitions</span>
                    <span className="font-mono font-bold text-brand-black">Intervals</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-xl bg-stone-50 border border-stone-200/80">
                    <span>Slip Reflex Reaction Drills</span>
                    <span className="font-mono font-bold text-brand-black">Daily</span>
                  </div>
                </div>

                <p className="text-xs text-foreground-soft leading-relaxed">
                  Keeping 50+ working members healthy, active, and battle-ready under the Mumbai sun.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-border flex items-center justify-between text-xs font-mono font-bold text-brand-black">
                <span className="text-stone-500">FITNESS &amp; HEALTH</span>
                <span className="group-hover:translate-x-1 transition-transform text-brand-copper">
                  {activePillarId === "fitness" ? "ACTIVE NOW ●" : "SPOTLIGHT →"}
                </span>
              </div>
            </button>

            {/* Card 5: Network & Mentorship Bento (Lg: Col-span-4) */}
            <button
              type="button"
              onClick={() => setActivePillarId("network")}
              className={`lg:col-span-4 rounded-3xl p-6 sm:p-7 flex flex-col justify-between cursor-pointer w-full text-left transition-[border-color,box-shadow,background-color] duration-300 sports-card group ${
                activePillarId === "network"
                  ? "ring-2 ring-brand-copper border-brand-copper shadow-lg bg-amber-50/20"
                  : "bg-surface border border-border"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-stone-900/10 flex items-center justify-center text-stone-900">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-stone-400">
                    05 // NETWORK
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="font-headline text-2xl font-black text-brand-black uppercase group-hover:text-brand-copper transition-colors">
                    Community Capital
                  </h4>
                  <p className="text-xs font-bold text-stone-700 uppercase">
                    Cross-Generational Trust
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-foreground-soft leading-relaxed">
                  Entrepreneurs, professionals, and young students share the same dugout — building mutual trust on the field that translates into career leads and community initiatives.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-border flex items-center justify-between text-xs font-mono font-bold text-brand-black">
                <span className="text-stone-500">SOCIAL CAPITAL</span>
                <span className="group-hover:translate-x-1 transition-transform text-brand-copper">
                  {activePillarId === "network" ? "ACTIVE NOW ●" : "SPOTLIGHT →"}
                </span>
              </div>
            </button>

            {/* Card 6: Growth & Pathways Bento (Lg: Col-span-4) */}
            <button
              type="button"
              onClick={() => setActivePillarId("growth")}
              className={`lg:col-span-4 rounded-3xl p-6 sm:p-7 flex flex-col justify-between cursor-pointer w-full text-left transition-[border-color,box-shadow,background-color] duration-300 sports-card group ${
                activePillarId === "growth"
                  ? "ring-2 ring-brand-copper border-brand-copper shadow-lg bg-amber-50/20"
                  : "bg-surface border border-border"
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-[#EA6E18]/15 flex items-center justify-center text-[#EA6E18]">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-stone-400">
                    06 // GROWTH
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="font-headline text-2xl font-black text-brand-black uppercase group-hover:text-brand-copper transition-colors">
                    Higher Doors
                  </h4>
                  <p className="text-xs font-bold text-[#EA6E18] uppercase">
                    25+ Tournament Fixtures
                  </p>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-2xl bg-stone-50 border border-stone-200/80">
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-border bg-stone-100">
                    <Image
                      src="/images/achivement_winning.png"
                      alt="Player achievement and trophies"
                      fill
                      className="object-cover object-top"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <span className="font-headline text-sm font-bold text-brand-black block">
                      Orange &amp; Purple Cap
                    </span>
                    <span className="text-[10px] text-muted font-mono block">
                      Member Highlights &amp; Honors
                    </span>
                  </div>
                </div>

                <p className="text-xs text-foreground-soft leading-relaxed">
                  A real stage to test skills against top Mumbai teams and progress toward higher-level cricket without false promises.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-border flex items-center justify-between text-xs font-mono font-bold text-brand-black">
                <span className="text-stone-500">KVO RANK #10</span>
                <span className="group-hover:translate-x-1 transition-transform text-brand-copper">
                  {activePillarId === "growth" ? "ACTIVE NOW ●" : "SPOTLIGHT →"}
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* =========================================================================
            BOTTOM CREED BANNER: THE DEVPUR CRICKET CLUB MOTTO
            ========================================================================= */}
        <div className="mt-12 rounded-2xl bg-stone-900 border border-stone-800 p-6 sm:p-7 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-brand-orange block">
              A COMMUNITY-SUPPORTED CLUB
            </span>
            <p className="text-sm sm:text-base font-semibold text-neutral-200">
              Member contributions and sponsor support help sustain practice, coaching, equipment, match participation and club activities.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Link
              href="/about"
              className="px-5 py-2.5 rounded-xl bg-white hover:bg-stone-100 text-stone-950 font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-xs inline-flex items-center gap-1.5"
            >
              <span>Our Heritage</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/club-life"
              className="px-5 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors border border-stone-700"
            >
              Practice Schedule
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}