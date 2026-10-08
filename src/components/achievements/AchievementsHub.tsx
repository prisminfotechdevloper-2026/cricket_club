"use client";

import React, { useState } from "react";
import { Achievement, AchievementCategory } from "@/lib/types/content";
import { Container } from "../common/Container";
import { Trophy, Award, Shield } from "lucide-react";

interface AchievementsHubProps {
  achievements: Achievement[];
}

const CATEGORIES: { id: AchievementCategory | "all"; label: string }[] = [
  { id: "all", label: "All Honors & Feats" },
  { id: "trophy", label: "Club Trophies" },
  { id: "player-award", label: "Player Awards" },
  { id: "record", label: "Club Records" },
];

export function AchievementsHub({ achievements }: AchievementsHubProps) {
  const [selectedCategory, setSelectedCategory] = useState<AchievementCategory | "all">("all");

  const filteredAchievements = achievements.filter((a) => {
    if (selectedCategory === "all") return true;
    return a.category === selectedCategory;
  });

  return (
    <div className="bg-background min-h-screen">
      {/* =========================================================================
          HERO BANNER: LIGHT THEME SILVERWARE & HONORS ATMOSPHERE
          ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-stone-100 via-stone-50 to-white text-stone-900 border-b border-stone-200 py-12 sm:py-16 lg:py-20">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Narrative */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EA6E18]/10 text-[#EA6E18] border border-[#EA6E18]/20 text-[11px] font-mono font-bold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EA6E18] animate-pulse" />
                <span>SILVERWARE VAULT // CLUB HONORS &amp; INDIVIDUAL CAPS</span>
              </div>

              <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-stone-900 leading-[0.98]">
                Silverware &amp; Glory.
                <span className="bg-gradient-to-r from-[#E66212] via-[#EA6E18] to-[#F89928] bg-clip-text text-transparent block mt-1">
                  Honoring Sporting Grit.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl">
                Celebrating the trophies lifted by Devpur Cricket Club, our 2× KVO tournament finals, Orange and Purple
                Cap individual honorees, and milestone match-winning records forged under pressure.
              </p>

              {/* Action Badges */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-stone-200 text-xs font-mono text-stone-800 shadow-2xs">
                  <Trophy className="w-3.5 h-3.5 text-[#EA6E18]" />
                  <span>2× RUNNERS-UP CUPS</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-stone-200 text-xs font-mono text-stone-800 shadow-2xs">
                  <Award className="w-3.5 h-3.5 text-[#F89928]" />
                  <span>ORANGE &amp; PURPLE CAPS</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-stone-200 text-xs font-mono text-stone-800 shadow-2xs">
                  <Shield className="w-3.5 h-3.5 text-emerald-600" />
                  <span>EST. 2013 HERITAGE</span>
                </div>
              </div>
            </div>

            {/* Right Column: Telemetry Cards (Light Theme) */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-3.5 font-mono text-xs">
                {[
                  { label: "TROPHIES", val: "2× Silver", sub: "KVO Circuit Finals", color: "text-[#EA6E18]" },
                  { label: "CAP HONORS", val: "Orange & Purple", sub: "Batter & Bowler", color: "text-[#EA6E18]" },
                  { label: "CIRCUIT RANK", val: "Top #10", sub: "Community Leagues", color: "text-[#EA6E18]" },
                  { label: "SQUAD", val: "50+ Men", sub: "United Brotherhood", color: "text-emerald-600" },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-1">
                    <span className={`text-[10px] uppercase font-bold tracking-wider block ${stat.color}`}>
                      {stat.label}
                    </span>
                    <span className="font-headline text-2xl font-black text-stone-900 block">
                      {stat.val}
                    </span>
                    <span className="text-[11px] text-stone-500 font-body block">
                      {stat.sub}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content Area */}
      <div className="py-10 sm:py-14">
        <Container>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-bold uppercase tracking-wider transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-brand-charcoal text-white shadow-xs"
                  : "bg-surface text-foreground-soft border border-border hover:bg-stone-50 hover:text-brand-black"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Achievements Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {filteredAchievements.map((item, idx) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-3xl bg-surface border border-border/80 flex flex-col justify-between sports-card hover:border-brand-copper/60 hover:shadow-xl transition-[border-color,box-shadow] duration-300"
            >
              <div className="space-y-4">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-stone-900 text-stone-200 border border-stone-800">
                    {item.badgeText}
                  </span>
                  <span className="font-mono text-xs font-bold text-brand-copper">
                    #{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>
                </div>

                {/* Recipient & Feat */}
                <div>
                  <span className="text-xs uppercase font-extrabold tracking-widest text-muted block mb-1">
                    {item.recipient}
                  </span>
                  <h3 className="font-headline text-2xl font-bold text-brand-black leading-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-foreground-soft leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Tournament Tag & Year */}
              <div className="pt-5 mt-4 border-t border-border/80 flex items-center justify-between text-xs text-muted font-medium">
                <span>{item.tournamentName || "Club Championship"}</span>
                <span className="font-headline text-lg font-bold text-brand-black">
                  {item.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
      </div>
    </div>
  );
}
