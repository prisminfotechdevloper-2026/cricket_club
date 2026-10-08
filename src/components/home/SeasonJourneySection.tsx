"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "../common/Container";
import { seasons } from "@/lib/data/seasons";
import {
  Calendar,
  Clock,
  MapPin,
  Trophy,
  ArrowRight,
  Shield,
  Activity,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Users,
} from "lucide-react";

interface JourneyStage {
  month: string;
  monthFullName: string;
  step: string;
  stageTitle: string;
  phaseCategory: string;
  phaseBadgeColor: string;
  intensity: string;
  practiceRhythm: string;
  description: string;
  keyObjectives: string[];
  milestoneHighlight: string;
}

const SEASON_STAGES: JourneyStage[] = [
  {
    month: "OCT",
    monthFullName: "October",
    step: "01",
    stageTitle: "Season Kickoff & Net Practice",
    phaseCategory: "Pre-Season Foundation",
    phaseBadgeColor: "bg-amber-500/15 text-amber-700 border-amber-500/30",
    intensity: "3 Days/Week (High Volume)",
    practiceRhythm: "Mon • Wed • Fri (Matunga Ground)",
    description:
      "Squad reporting, physical conditioning assessment, professional gear checks, and launch of 3-days-a-week net sessions at Matunga Ground under Head Coach Mr. Aditya Koli.",
    keyObjectives: [
      "50+ squad assembly & personal fitness benchmarks",
      "Turf net batting repetitions & bowling load conditioning",
      "Establishing club discipline and punctuality standards",
    ],
    milestoneHighlight: "Camp launch with 50+ members at Matunga Ground",
  },
  {
    month: "NOV",
    monthFullName: "November",
    step: "02",
    stageTitle: "Coach-Led Drills & Practice Matches",
    phaseCategory: "Technical Mastery",
    phaseBadgeColor: "bg-orange-500/15 text-orange-700 border-orange-500/30",
    intensity: "Nets + Weekend 20/40 Overs",
    practiceRhythm: "Weekday Nets + Weekend Friendlies",
    description:
      "Intensive technical skill development with Coach Aditya Koli (Kanga B Division player) — repeatable bowling run-ups, strike rotation, slip reflexes, and full-length weekend friendly fixtures.",
    keyObjectives: [
      "Specialized batsman and bowler biomechanics review",
      "Slip catching reflexes and boundary riding drills",
      "Full 20-over and 40-over weekend friendly simulations",
    ],
    milestoneHighlight: "Weekend friendly fixtures to calibrate match readiness",
  },
  {
    month: "DEC",
    monthFullName: "December",
    step: "03",
    stageTitle: "Community Tournament Participation",
    phaseCategory: "Tournament Debut",
    phaseBadgeColor: "bg-rose-500/15 text-rose-700 border-rose-500/30",
    intensity: "Competitive League Fixtures",
    practiceRhythm: "Mid-week Prep + Tournament Matchdays",
    description:
      "Opening rounds across premier KVO community tournaments with official leather-ball match jerseys and sponsor branding, facing respected community club opponents.",
    keyObjectives: [
      "Debut of 2026–2029 official sponsor match kits",
      "White-ball powerplay tactical execution",
      "First competitive scoreboard pressure encounters",
    ],
    milestoneHighlight: "Kickoff of 25+ seasonal competitive tournament matches",
  },
  {
    month: "JAN",
    monthFullName: "January",
    step: "04",
    stageTitle: "Competitive Leather-Ball Phase",
    phaseCategory: "League Crucible",
    phaseBadgeColor: "bg-purple-500/15 text-purple-700 border-purple-500/30",
    intensity: "Peak Competitive Density",
    practiceRhythm: "High-Pressure Mid-Season Circuit",
    description:
      "Grueling mid-season league clashes, tense run chases, death-overs bowling execution under floodlights, and strong brotherhood bonding during post-match dinners.",
    keyObjectives: [
      "Clutch death bowling and middle-order partnerships",
      "Overcoming top community teams to secure knockout slots",
      "Western Railway team travel and brotherhood get-togethers",
    ],
    milestoneHighlight: "Securing playoff positions through resolute squad depth",
  },
  {
    month: "FEB",
    monthFullName: "February",
    step: "05",
    stageTitle: "Major Matches & Knockouts",
    phaseCategory: "Championship Showdowns",
    phaseBadgeColor: "bg-red-500/15 text-red-700 border-red-500/30",
    intensity: "High-Stakes Knockout Cricket",
    practiceRhythm: "Tactical Scenarios & Matchday Command",
    description:
      "High-stakes quarter-finals and semi-finals with live match scoring updates, enthusiastic Devpur Gaam supporters in the stands, and unwavering club brotherhood.",
    keyObjectives: [
      "Quarter-final and semi-final knockout battles",
      "Simulated live scoring on Cric Club for community followers",
      "Aiming to improve stated KVO ranking towards glory",
    ],
    milestoneHighlight: "2× Runners-Up history with relentless target for top silverware",
  },
  {
    month: "MAR / MAY",
    monthFullName: "March to May",
    step: "06",
    stageTitle: "Season Wrap, Celebrations & Memories",
    phaseCategory: "Legacy & Brotherhood",
    phaseBadgeColor: "bg-emerald-500/15 text-emerald-700 border-emerald-500/30",
    intensity: "Celebration & Archival Review",
    practiceRhythm: "Annual Gathering & Memory Preservation",
    description:
      "Annual club felicitation dinner, honoring top performers (Orange/Purple caps), archiving memories in the DCC photo documentary, and renewing brotherhood bonds.",
    keyObjectives: [
      "Honoring season Orange & Purple cap achievers",
      "Annual team get-together and community feast",
      "Documenting season memories into official club archives",
    ],
    milestoneHighlight: "50+ brothers celebrating lifelong community ties",
  },
];

export function SeasonJourneySection() {
  const currentSeason = seasons.find((s) => s.isCurrent) || seasons[0];
  const [activeStageIdx, setActiveStageIdx] = useState<number>(0);

  const activeStage = SEASON_STAGES[activeStageIdx];

  const handlePrevStage = () => {
    setActiveStageIdx((prev) => (prev > 0 ? prev - 1 : SEASON_STAGES.length - 1));
  };

  const handleNextStage = () => {
    setActiveStageIdx((prev) => (prev < SEASON_STAGES.length - 1 ? prev + 1 : 0));
  };

  return (
    <section
      id="season-journey"
      aria-labelledby="season-journey-heading"
      className="py-16 sm:py-24 bg-background border-b border-border/80 relative overflow-hidden"
    >
      {/* Ambient background stadium glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-brand-orange/5 blur-3xl rounded-full pointer-events-none" />

      <Container className="relative z-10">
        {/* =========================================================================
            HEADER: ANNUAL CYCLE CONTEXT & ARCHIVE LINK
            ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex flex-wrap items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-charcoal text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-widest shadow-2xs max-w-full">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse shrink-0" />
              <span className="whitespace-nowrap">ANNUAL CAMPAIGN // 5–6 MONTH CYCLE</span>
              <span className="text-stone-500 hidden sm:inline">•</span>
              <span className="text-brand-peach hidden sm:inline">OCT TO MARCH/MAY</span>
            </div>

            <h2
              id="season-journey-heading"
              className="font-headline text-3xl sm:text-5xl lg:text-6xl font-black text-brand-black tracking-tight leading-[0.98] uppercase"
            >
              The Season <span className="text-brand-copper">Roadmap</span>
            </h2>

            <p className="text-sm sm:text-base text-foreground-soft leading-relaxed font-medium">
              Every season represents 5–6 months of disciplined commitment. We do not sell short courses; we live an annual athletic journey — from pre-season conditioning at Matunga Ground to high-stakes tournament finals.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <Link
              href="/seasons"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-surface hover:bg-surface-soft border border-border text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-black transition-colors shadow-2xs group"
            >
              <span>Explore Multi-Season Archive</span>
              <ArrowRight className="w-4 h-4 text-brand-copper transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* =========================================================================
            INTERACTIVE STEPPER PATHWAY (6 MONTH PROGRESSION TRACK)
            Connected roadmap with milestone nodes and live phase selection
            ========================================================================= */}
        <div className="mb-10 bg-surface rounded-3xl p-4 sm:p-6 border border-border/80 shadow-xs">
          <div className="flex items-center justify-between mb-4 px-2">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-muted">
              Select Month to Explore Phase Details
            </span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handlePrevStage}
                className="p-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-brand-black transition-colors"
                aria-label="Previous Season Stage"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono font-bold text-stone-600 px-2">
                {activeStage.step} / 06
              </span>
              <button
                type="button"
                onClick={handleNextStage}
                className="p-1.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-brand-black transition-colors"
                aria-label="Next Season Stage"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Stepper Node Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3">
            {SEASON_STAGES.map((s, idx) => {
              const isActive = idx === activeStageIdx;
              return (
                <button
                  key={s.step}
                  type="button"
                  onClick={() => setActiveStageIdx(idx)}
                  className={`relative p-3.5 sm:p-4 rounded-2xl text-left transition-all duration-200 cursor-pointer flex flex-col justify-between min-h-[92px] ${
                    isActive
                      ? "bg-stone-950 text-white shadow-md scale-[1.02] ring-2 ring-brand-copper"
                      : "bg-surface-soft hover:bg-stone-100 border border-border/70 text-brand-black"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span
                      className={`font-headline text-2xl font-black ${
                        isActive ? "text-brand-orange" : "text-brand-black"
                      }`}
                    >
                      {s.month}
                    </span>
                    <span
                      className={`text-[10px] font-mono font-bold ${
                        isActive ? "text-stone-400" : "text-muted"
                      }`}
                    >
                      STEP {s.step}
                    </span>
                  </div>

                  <div>
                    <span
                      className={`text-[11px] font-bold block leading-tight line-clamp-1 ${
                        isActive ? "text-white" : "text-stone-800"
                      }`}
                    >
                      {s.stageTitle.split("&")[0].trim()}
                    </span>
                    <span
                      className={`text-[9.5px] font-mono uppercase block mt-0.5 ${
                        isActive ? "text-brand-peach" : "text-muted"
                      }`}
                    >
                      {s.phaseCategory.split(" ")[0]}
                    </span>
                  </div>

                  {/* Active Indicator Bar */}
                  {isActive && (
                    <div className="absolute inset-x-3 bottom-0 h-1 bg-gradient-to-r from-brand-orange to-brand-gold rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            STAGE SPOTLIGHT CONSOLE: DEEP DIVE INTO THE SELECTED MONTH
            Customer-friendly athletic card with rich telemetry, practice rhythm & objectives
            ========================================================================= */}
        <div className="mb-12 rounded-3xl bg-surface border border-border/90 shadow-md p-6 sm:p-8 lg:p-10 relative overflow-hidden sports-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left 7 Columns: Stage Narrative & Objectives */}
            <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                {/* Stage Badges */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full bg-stone-900 text-white font-mono text-xs font-bold uppercase tracking-wider">
                    MONTH {activeStage.step} • {activeStage.monthFullName}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${activeStage.phaseBadgeColor}`}
                  >
                    {activeStage.phaseCategory}
                  </span>
                </div>

                {/* Big Title */}
                <div>
                  <h3 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black text-brand-black uppercase tracking-tight leading-none">
                    {activeStage.stageTitle}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-brand-copper uppercase tracking-wider mt-1.5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                    <span>{activeStage.milestoneHighlight}</span>
                  </p>
                </div>

                {/* Narrative Paragraph */}
                <p className="text-sm sm:text-base text-foreground-soft leading-relaxed font-medium">
                  {activeStage.description}
                </p>

                {/* Key Objectives Checklist */}
                <div className="pt-2 space-y-2.5">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-muted block">
                    Core Phase Objectives &amp; Commitment:
                  </span>
                  <div className="grid grid-cols-1 gap-2">
                    {activeStage.keyObjectives.map((obj) => (
                      <div
                        key={obj}
                        className="p-3 rounded-xl bg-surface-soft border border-border/80 flex items-start gap-3 text-xs sm:text-sm text-stone-800 font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                        <span className="leading-snug">{obj}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Navigation Action */}
              <div className="pt-4 border-t border-border flex items-center justify-between text-xs font-mono text-muted">
                <span>DEV-PUR CC // ANNUAL CYCLE</span>
                <span className="text-brand-copper font-bold uppercase">
                  50+ MEMBERS COMMITTED
                </span>
              </div>
            </div>

            {/* Right 5 Columns: Athletic Rhythm & Operational Telemetry Box */}
            <div className="lg:col-span-5 rounded-2xl bg-stone-950 text-white p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl border border-stone-800">
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="font-mono text-xs uppercase font-bold text-brand-orange tracking-widest">
                    RHYTHM &amp; OPERATIONS
                  </span>
                  <span className="text-xs font-mono text-stone-400">
                    PHASE {activeStage.step}/06
                  </span>
                </div>

                <div className="space-y-3.5">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <span className="text-[10px] font-mono uppercase text-brand-peach font-bold block">
                      WEEKLY PRACTICE CADENCE
                    </span>
                    <p className="text-sm font-bold text-white flex items-center gap-2">
                      <Clock className="w-4 h-4 text-brand-orange" />
                      <span>{activeStage.practiceRhythm}</span>
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <span className="text-[10px] font-mono uppercase text-brand-peach font-bold block">
                      OPERATIONAL INTENSITY
                    </span>
                    <p className="text-sm font-bold text-white flex items-center gap-2">
                      <Activity className="w-4 h-4 text-brand-orange" />
                      <span>{activeStage.intensity}</span>
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                    <span className="text-[10px] font-mono uppercase text-brand-peach font-bold block">
                      TRAINING VENUE &amp; OVERSIGHT
                    </span>
                    <p className="text-sm font-bold text-white flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-brand-orange" />
                      <span>Matunga Ground • Coach Aditya Koli</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Controls */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={handlePrevStage}
                  className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-mono font-bold uppercase transition-colors"
                >
                  ← {SEASON_STAGES[(activeStageIdx - 1 + SEASON_STAGES.length) % SEASON_STAGES.length].month}
                </button>

                <button
                  type="button"
                  onClick={handleNextStage}
                  className="px-3.5 py-2 rounded-xl bg-brand-orange hover:bg-brand-copper text-stone-950 text-xs font-mono font-bold uppercase transition-colors"
                >
                  {SEASON_STAGES[(activeStageIdx + 1) % SEASON_STAGES.length].month} →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            BOTTOM TELEMETRY STRIP: CURRENT 2026–27 STATUS & FACTS
            ========================================================================= */}
        <div className="rounded-2xl dark-sports-card p-6 sm:p-7 text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
          <div className="space-y-1.5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-white/10 text-brand-peach text-[11px] font-mono font-bold uppercase">
              <Trophy className="w-3.5 h-3.5 text-brand-orange" />
              <span>STATED KVO ECOSYSTEM RANK: #10</span>
            </div>
            <p className="text-sm font-semibold text-neutral-200">
              Active {currentSeason.name} campaign under Captain {currentSeason.captain} — targeting tournament championship progression.
            </p>
          </div>

          {/* 4 Performance Metric Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center shrink-0 w-full lg:w-auto">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="font-headline text-2xl sm:text-3xl font-black text-brand-orange block leading-none">
                25+
              </span>
              <span className="text-[10px] font-mono uppercase text-neutral-400 mt-1 block">
                Matches / Season
              </span>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="font-headline text-2xl sm:text-3xl font-black text-white block leading-none">
                5–6 Mos
              </span>
              <span className="text-[10px] font-mono uppercase text-neutral-400 mt-1 block">
                Structured Training
              </span>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="font-headline text-2xl sm:text-3xl font-black text-brand-peach block leading-none">
                3 Days/Wk
              </span>
              <span className="text-[10px] font-mono uppercase text-neutral-400 mt-1 block">
                Matunga Nets
              </span>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <span className="font-headline text-2xl sm:text-3xl font-black text-[#F89928] block leading-none">
                2× Silver
              </span>
              <span className="text-[10px] font-mono uppercase text-neutral-400 mt-1 block">
                KVO Runners-Up
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
