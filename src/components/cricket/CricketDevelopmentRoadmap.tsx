"use client";

import React, { useState } from "react";
import { Container } from "../common/Container";
import {
  Target,
  Zap,
  Shield,
  Activity,
  Trophy,
  BarChart3,
  CheckCircle2,
  ArrowDown,
  TrendingUp,
  Compass,
  FileCheck,
  Flame,
  Layers,
  ChevronDown,
} from "lucide-react";

export function CricketDevelopmentRoadmap() {
  const [activeTrinityTab, setActiveTrinityTab] = useState<"all" | "batting" | "bowling" | "fielding">("all");

  const skillTrinity = [
    {
      id: "batting",
      title: "Batting Discipline",
      badge: "Skill Pillar 01",
      icon: Target,
      color: "from-amber-500/10 to-orange-500/10 border-orange-500/30",
      accent: "text-brand-orange",
      points: [
        { label: "Technical Fundamentals", desc: "Stance balance, head position, front & back foot triggers." },
        { label: "Shot Selection", desc: "Judgement of length, leaving outside off, scoring rotation." },
        { label: "Pace & Spin Adaptation", desc: "Playing express pace with soft hands & tracking spin off pitch." },
        { label: "Power Hitting", desc: "Body leverage, clean bat swing, clearing the 30-yard circle." },
        { label: "Pressure Handling", desc: "Chasing targets, composure in collapses & dot-ball resets." },
      ],
    },
    {
      id: "bowling",
      title: "Bowling Mastery",
      badge: "Skill Pillar 02",
      icon: Zap,
      color: "from-blue-500/10 to-indigo-500/10 border-blue-500/30",
      accent: "text-blue-600 dark:text-blue-400",
      points: [
        { label: "Run-up & Action", desc: "Rhythm consistency, gather balance, repeatable delivery stride." },
        { label: "Line & Length Accuracy", desc: "Targeting the 4th stump channel & discipline across spells." },
        { label: "Variations & Deception", desc: "In-swing, out-swing, seam movement, cutters & slower balls." },
        { label: "Tactical Execution", desc: "Setting fields to match plans, bowling to batter weaknesses." },
        { label: "Workload & Stamina", desc: "Over-spell capacity, bowling with intensity in late sessions." },
      ],
    },
    {
      id: "fielding",
      title: "Fielding & Reflexes",
      badge: "Skill Pillar 03",
      icon: Shield,
      color: "from-emerald-500/10 to-teal-500/10 border-emerald-500/30",
      accent: "text-emerald-600 dark:text-emerald-400",
      points: [
        { label: "Catching Precision", desc: "Slip cordon soft hands, high swirling catches & flat drives." },
        { label: "Rapid Release & Throwing", desc: "Clean pick-ups, direct hit accuracy & flat boundary throws." },
        { label: "Boundary Cutoffs", desc: "Sliding on turf, parrying boundary hits & relay throws." },
        { label: "Agility & Anticipation", desc: "Quick first step, ring-field pressure & backing-up habits." },
        { label: "Specialist Wicketkeeping", desc: "Footwork along the bounce, standing up to spin & leg-side stumping." },
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-background border-b border-border/80 relative overflow-hidden">
      {/* Background Subtle Cricket Turf Blueprint Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange font-mono text-xs font-bold uppercase tracking-wider">
             <span>Official Coaching Doctrine &bull; Player Development Flow</span>
          </div>

          <h2 className="font-headline text-3xl sm:text-5xl font-black uppercase tracking-tight text-foreground leading-[1.05]">
            From Net Drills to <span className="text-brand-orange">Match Mastery.</span>
          </h2>

          <p className="text-foreground-soft text-sm sm:text-base lg:text-lg font-body leading-relaxed">
            At Devpur Cricket Club, coaching follows a continuous, structured progression.
            Players advance from fundamental turf net drills at Matunga Ground to specialized skill
            discipline, fitness conditioning, tactical simulations, and iterative performance reviews.
          </p>
        </div>

        {/* =====================================================================
            FLOWCHART CONTAINER: Tactical Club Progression
            ===================================================================== */}
        <div className="space-y-10 sm:space-y-12">
          {/* STEP 1: DCC COACHING -> SYSTEMATIC PLAYER DEVELOPMENT -> NETS & TRAINING */}
          <div className="relative">
            <div className="max-w-3xl mx-auto rounded-3xl bg-surface border border-border shadow-sm p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-brand-orange" />
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/70 pb-5">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-copper">
                    Stage 01 &bull; The Core Mandate
                  </span>
                  <h3 className="font-headline text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground mt-0.5">
                    DCC Professional Coaching
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-brand-orange/10 border border-brand-orange/25 font-mono text-xs font-bold text-brand-orange self-start sm:self-auto">
                  <span>Head Coach: Aditya Koli</span>
                </div>
              </div>

              {/* Step progression pill row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5">
                <div className="p-4 rounded-2xl bg-surface-soft border border-border/70 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-foreground">
                    <Layers className="w-3.5 h-3.5 text-brand-orange" />
                    <span>Systematic Player Development</span>
                  </div>
                  <p className="text-xs text-foreground-soft leading-relaxed font-body">
                    A long-term technical approach designed to build sound cricket fundamentals rather than temporary fixes.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-surface-soft border border-border/70 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-foreground">
                    <Target className="w-3.5 h-3.5 text-brand-orange" />
                    <span>Nets &amp; Training Protocol</span>
                  </div>
                  <p className="text-xs text-foreground-soft leading-relaxed font-body">
                    3 weekly net sessions at Matunga Ground on turf and clay wickets with dedicated leather-ball intensity.
                  </p>
                </div>
              </div>
            </div>

            {/* Connecting Vertical Arrow */}
            <div className="flex justify-center my-4 sm:my-6">
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-6 sm:h-8 bg-brand-orange/40" />
                <div className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-md">
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </div>
                <div className="w-0.5 h-6 sm:h-8 bg-brand-orange/40" />
              </div>
            </div>
          </div>

          {/* STEP 2: THE SKILL TRINITY (BATTING | BOWLING | FIELDING) */}
          <div className="space-y-6">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange">
                Stage 02 &bull; Three Specialized Disciplines
              </span>
              <h3 className="font-headline text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground">
                Batting &bull; Bowling &bull; Fielding
              </h3>
              <p className="text-xs sm:text-sm text-foreground-soft font-body">
                Structured technical development broken down into distinct player skill modules.
              </p>
            </div>

            {/* Mobile Filter Tabs for Trinity */}
            <div className="flex sm:hidden items-center justify-center gap-2">
              {(["all", "batting", "bowling", "fielding"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTrinityTab(tab)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-colors ${
                    activeTrinityTab === tab
                      ? "bg-brand-orange text-white"
                      : "bg-surface border border-border text-foreground-soft"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* 3 Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skillTrinity
                .filter((item) => activeTrinityTab === "all" || activeTrinityTab === item.id)
                .map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={pillar.id}
                      className="rounded-3xl bg-surface border border-border/90 hover:border-brand-orange/60 transition-all duration-200 overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md group"
                    >
                      {/* Card Header */}
                      <div className="p-5 sm:p-6 border-b border-border/70 space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-muted-foreground">
                            {pillar.badge}
                          </span>
                          <div className="w-8 h-8 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center group-hover:bg-brand-orange group-hover:text-white transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                        </div>

                        <h4 className="font-headline text-xl sm:text-2xl font-black uppercase tracking-wide text-foreground">
                          {pillar.title}
                        </h4>
                      </div>

                      {/* Technical Points Breakdown */}
                      <div className="p-5 sm:p-6 space-y-3 flex-1 bg-surface-soft/40">
                        {pillar.points.map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0" />
                            <div className="space-y-0.5">
                              <span className="text-xs font-mono font-bold text-foreground block">
                                {pt.label}
                              </span>
                              <p className="text-[11.5px] text-foreground-soft leading-snug font-body">
                                {pt.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Card Footer Tag */}
                      <div className="px-5 py-3 border-t border-border/70 bg-surface flex items-center justify-between text-[11px] font-mono font-bold text-brand-copper">
                        <span>Matunga Turf Drills</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange" />
                      </div>
                    </div>
                  );
                })}
            </div>

            {/* Connecting Vertical Arrow */}
            <div className="flex justify-center my-4 sm:my-6">
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-6 sm:h-8 bg-brand-orange/40" />
                <div className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-md">
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </div>
                <div className="w-0.5 h-6 sm:h-8 bg-brand-orange/40" />
              </div>
            </div>
          </div>

          {/* STEP 3: FITNESS & STAMINA */}
          <div className="max-w-3xl mx-auto rounded-3xl bg-surface border border-border shadow-sm p-6 sm:p-8 space-y-5 relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/70 pb-4">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-copper">
                  Stage 03 &bull; Physical Conditioning
                </span>
                <h3 className="font-headline text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground">
                  Fitness &amp; Athletic Stamina
                </h3>
              </div>
              <div className="w-9 h-9 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0">
                <Activity className="w-5 h-5" />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-foreground-soft font-body leading-relaxed">
              Cricket requires multidirectional bursts, sustained concentration across 40–50 overs,
              and physical resilience. Our conditioning sessions build match fitness to prevent injuries and maintain sharpness.
            </p>

            {/* Conditioning Pillars Pills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 text-xs font-mono">
              {[
                { title: "Sprint Speed", desc: "Between-wickets acceleration" },
                { title: "Fielding Agility", desc: "Short-range reaction drills" },
                { title: "Endurance", desc: "Sustained spell stamina" },
                { title: "Core Strength", desc: "Torso rotation & balance" },
                { title: "Mobility", desc: "Joint health & flex" },
                { title: "Active Recovery", desc: "Post-match cool downs" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-surface-soft border border-border/80 flex flex-col justify-between"
                >
                  <span className="font-bold text-foreground">{item.title}</span>
                  <span className="text-[10.5px] text-muted-foreground mt-0.5">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Connecting Vertical Arrow */}
          <div className="flex justify-center my-4 sm:my-6">
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-6 sm:h-8 bg-brand-orange/40" />
              <div className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-md">
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </div>
              <div className="w-0.5 h-6 sm:h-8 bg-brand-orange/40" />
            </div>
          </div>

          {/* STEP 4: MATCH PREPARATION -> SITUATION PRACTICE -> SIMULATIONS */}
          <div className="max-w-3xl mx-auto rounded-3xl bg-surface border border-border shadow-sm p-6 sm:p-8 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/70 pb-4">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-copper">
                  Stage 04 &bull; Tactical Readiness
                </span>
                <h3 className="font-headline text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground">
                  Match Preparation &amp; Simulations
                </h3>
              </div>
              <div className="w-9 h-9 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0">
                <Compass className="w-5 h-5" />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-foreground-soft font-body leading-relaxed">
              Practicing shots in the nets is only effective when applied under real match situations.
              We bridge the gap between practice and competition through situational simulations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="p-4 rounded-2xl bg-surface-soft border border-border/80 space-y-1">
                <span className="text-xs font-mono font-bold uppercase text-brand-orange block">
                  01 &bull; Tactical Guidance
                </span>
                <h5 className="font-headline text-sm font-bold text-foreground">Field &amp; Game Awareness</h5>
                <p className="text-[11.5px] text-foreground-soft leading-snug">
                  Analyzing field placements, identifying bowling patterns &amp; captaincy communication.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-surface-soft border border-border/80 space-y-1">
                <span className="text-xs font-mono font-bold uppercase text-brand-orange block">
                  02 &bull; Match Situations
                </span>
                <h5 className="font-headline text-sm font-bold text-foreground">Live Scenario Practice</h5>
                <p className="text-[11.5px] text-foreground-soft leading-snug">
                  Simulating powerplay constraints, middle-over rebuilding &amp; death-over acceleration.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-surface-soft border border-border/80 space-y-1">
                <span className="text-xs font-mono font-bold uppercase text-brand-orange block">
                  03 &bull; Simulation Drills
                </span>
                <h5 className="font-headline text-sm font-bold text-foreground">Target Defense &amp; Chase</h5>
                <p className="text-[11.5px] text-foreground-soft leading-snug">
                  Defending 12 runs in the final over, batting with last pair &amp; pressure boundary hits.
                </p>
              </div>
            </div>
          </div>

          {/* Connecting Vertical Arrow */}
          <div className="flex justify-center my-4 sm:my-6">
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-6 sm:h-8 bg-brand-orange/40" />
              <div className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-md">
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </div>
              <div className="w-0.5 h-6 sm:h-8 bg-brand-orange/40" />
            </div>
          </div>

          {/* STEP 5: ACTUAL MATCHES -> PERFORMANCE REVIEW -> INDIVIDUAL PLAN -> LONG-TERM DEVELOPMENT */}
          <div className="max-w-4xl mx-auto rounded-3xl bg-stone-950 text-white p-6 sm:p-10 border border-white/10 shadow-xl space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange">
                  Stage 05 &bull; The Growth Loop
                </span>
                <h3 className="font-headline text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">
                  Match Execution &bull; Review &bull; Evolution
                </h3>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-xs font-mono font-bold text-white self-start sm:self-auto">
                <Trophy className="w-4 h-4 text-brand-orange" />
                <span>Tournament Cycle</span>
              </div>
            </div>

            {/* 4-Step Continuous Progress Loop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Box 1 */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <span className="text-[10.5px] font-mono font-bold uppercase text-brand-orange block">
                  Execution
                </span>
                <h5 className="font-headline text-base font-bold text-white">Actual Matches</h5>
                <p className="text-xs text-stone-400 leading-relaxed font-body">
                  Competing in leather-ball league fixtures, knockout trophies &amp; inter-club fixtures.
                </p>
              </div>

              {/* Box 2 */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <span className="text-[10.5px] font-mono font-bold uppercase text-brand-orange block">
                  Assessment
                </span>
                <h5 className="font-headline text-base font-bold text-white">Performance Review</h5>
                <p className="text-xs text-stone-400 leading-relaxed font-body">
                  Analyzing match decisions, shot dismissals, bowling spells, and tactical mistakes.
                </p>
              </div>

              {/* Box 3 */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <span className="text-[10.5px] font-mono font-bold uppercase text-brand-orange block">
                  Correction
                </span>
                <h5 className="font-headline text-base font-bold text-white">Individual Plan</h5>
                <p className="text-xs text-stone-400 leading-relaxed font-body">
                  Coach Aditya Koli prescribes targeted 1-on-1 drills to fix technical flaws before next game.
                </p>
              </div>

              {/* Box 4 */}
              <div className="p-4 rounded-2xl bg-brand-orange/20 border border-brand-orange/40 space-y-2">
                <span className="text-[10.5px] font-mono font-bold uppercase text-brand-orange block">
                  Ultimate Goal
                </span>
                <h5 className="font-headline text-base font-bold text-white">Long-Term Mastery</h5>
                <p className="text-xs text-stone-300 leading-relaxed font-body">
                  Cumulative player maturity, self-confidence, leadership and lifelong DCC club brotherhood.
                </p>
              </div>
            </div>

            {/* Bottom Summary Bar */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-stone-400 text-center sm:text-left">
              <span>Iterative Coaching Cycle &bull; Practiced Weekly @ Matunga Ground</span>
              <span className="text-brand-orange font-bold">Devpur Cricket Club Season 2026–27</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
