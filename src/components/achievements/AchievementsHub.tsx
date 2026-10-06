"use client";

import React, { useState } from "react";
import { Achievement, AchievementCategory } from "@/lib/types/content";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";
import { Trophy, Star, Flame } from "lucide-react";

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
    <div className="py-10 sm:py-16 bg-background min-h-screen">
      <Container>
        <SectionHeading
          eyebrow="Trophy Shelf & Honors"
          title="Club Achievements & Milestone Feats"
          description="Celebrating the trophies lifted by Devpur Cricket Club and the heroic individual performances of our players on the pitch. Recognized for grit, leadership, and match-winning craft."
        />

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 mb-10 overflow-x-auto pb-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
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
          {filteredAchievements.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-3xl bg-surface border border-border flex flex-col justify-between sports-card"
            >
              <div className="space-y-4">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-surface-soft border border-border text-brand-copper">
                    {item.badgeText}
                  </span>
                  <div className="w-9 h-9 rounded-full bg-amber-50 text-brand-copper flex items-center justify-center">
                    {item.category === "trophy" ? (
                      <Trophy className="w-4 h-4 text-brand-copper" />
                    ) : item.category === "player-award" ? (
                      <Star className="w-4 h-4 fill-current text-brand-copper" />
                    ) : (
                      <Flame className="w-4 h-4 text-brand-copper" />
                    )}
                  </div>
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
  );
}
