"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../common/Container";
import { players } from "@/lib/data/players";
import {
  ArrowRight,
  Shield,
  Trophy,
  Award,
  Zap,
  Target,
  ArrowUpRight,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

export function FeaturedPlayersSection() {
  const featuredSquad = players.filter((p) => p.featured).slice(0, 4);
  const [selectedPlayerId, setSelectedPlayerId] = useState<string>(
    featuredSquad[0]?.id || "p-1"
  );
  const [activeRoleFilter, setActiveRoleFilter] = useState<string>("all");

  const selectedPlayer =
    featuredSquad.find((p) => p.id === selectedPlayerId) || featuredSquad[0];

  const filteredSquad = featuredSquad.filter((player) => {
    if (activeRoleFilter === "all") return true;
    if (activeRoleFilter === "batter") return player.role.toLowerCase().includes("batter");
    if (activeRoleFilter === "bowler") return player.role.toLowerCase().includes("bowler");
    if (activeRoleFilter === "wicketkeeper") return player.role.toLowerCase().includes("wicketkeeper");
    if (activeRoleFilter === "all-rounder") return player.role.toLowerCase().includes("all-rounder");
    return true;
  });

  const isBowler =
    selectedPlayer.role === "Fast Bowler" || selectedPlayer.role === "Spin Bowler";
  const isKeeper = selectedPlayer.role.includes("Wicketkeeper");

  return (
    <section
      id="featured-squad"
      aria-labelledby="featured-squad-title"
      className="py-16 sm:py-24 border-b border-border/80 bg-background relative overflow-hidden"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-orange/5 blur-3xl rounded-full pointer-events-none" />

      <Container className="relative z-10">
        {/* =========================================================================
            HEADER: SQUAD CONTEXT & DIRECTORY CTA
            ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex flex-wrap items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-900 text-stone-200 font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-widest border border-stone-800 shadow-2xs max-w-full">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse shrink-0" />
              <span className="whitespace-nowrap">FEATURED SQUAD MEMBERS // 2026–27</span>
              <span className="text-stone-600 hidden sm:inline">•</span>
              <span className="text-brand-peach hidden sm:inline">DEVPUR GAAM</span>
            </div>

            <h2
              id="featured-squad-title"
              className="font-headline text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-brand-black uppercase leading-[0.98]"
            >
              Our Members <span className="text-brand-copper block text-2xl sm:text-4xl mt-1">The People Behind The Crest.</span>
            </h2>

            <p className="text-sm sm:text-base text-foreground-soft leading-relaxed font-medium">
              A community of members connected through cricket, regular practice, tournament competition, friendship and shared experiences representing Devpur Gaam.
            </p>
          </div>

          <div className="w-full sm:w-auto shrink-0 flex items-center gap-3">
            <Link
              href="/players"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-stone-900 hover:bg-black text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-sm group"
            >
              <span>View All 50+ Members →</span>
            </Link>
          </div>
        </div>

        {/* =========================================================================
            ROLE FILTER SEGMENTED BUTTONS
            Quick scannability without duplicate or repeated UI elements
            ========================================================================= */}
        <div className="mb-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
          {[
            { id: "all", label: "All Featured Members" },
            { id: "batter", label: "Batters" },
            { id: "bowler", label: "Bowlers" },
            { id: "wicketkeeper", label: "Wicketkeeper" },
            { id: "all-rounder", label: "All-Rounders" },
          ].map((tab) => {
            const isActive = activeRoleFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveRoleFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 ${
                  isActive
                    ? "bg-brand-charcoal text-white shadow-xs scale-[1.01]"
                    : "bg-surface hover:bg-stone-100 text-foreground-soft border border-border"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* =========================================================================
            DUAL-ZONE ATHLETE COMMAND CONSOLE:
            Zone 1: Active Player Spotlight Hero Card (Role-Specific Deep Dive)
            Zone 2: Interactive Differentiated Roster Cards
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* -------------------------------------------------------------------
              ZONE 1: LEAD ATHLETE SPOTLIGHT CONSOLE (5 COLS)
              Dedicated hero showcase for the selected player with custom telemetry
              ------------------------------------------------------------------- */}
          <div className="lg:col-span-5 rounded-3xl bg-surface border border-border/90 shadow-lg p-5 sm:p-7 flex flex-col justify-between sports-card relative overflow-hidden">
            <div className="space-y-5">
              {/* Photo Viewport (Full daylight, object-top, zero head cut) */}
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-stone-900 border border-border shadow-xs group">
                <Image
                  key={selectedPlayer.photo}
                  src={selectedPlayer.photo}
                  alt={selectedPlayer.name}
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-104"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />

                {/* Jersey Number Watermark Badge */}
                <div className="absolute top-3 right-3 font-mono text-sm font-bold text-white bg-black/75 backdrop-blur-md px-3 py-1 rounded-xl border border-white/20 tracking-wider shadow-md">
                  #{selectedPlayer.jerseyNumber}
                </div>

                {/* Player Tag Pill */}
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-lg bg-black/80 backdrop-blur-md text-[11px] font-mono font-bold uppercase tracking-wider text-brand-peach border border-white/15">
                    {selectedPlayer.role}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-brand-orange text-stone-950 text-[10px] font-mono font-black uppercase tracking-wider shadow-xs">
                    ACTIVE SPOTLIGHT
                  </span>
                </div>
              </div>

              {/* Player Identity Information */}
              <div>
                <div className="flex items-center justify-between text-xs font-mono font-bold text-brand-copper uppercase mb-1">
                  <span>DEVPUR CRICKET CLUB</span>
                  <span className="text-stone-400">JOINED {selectedPlayer.joiningYear}</span>
                </div>
                <h3 className="font-headline text-3xl sm:text-4xl font-black text-brand-black tracking-tight uppercase leading-tight">
                  {selectedPlayer.name}
                </h3>
                <p className="text-xs text-muted font-medium mt-1">
                  {selectedPlayer.battingStyle}{" "}
                  {selectedPlayer.bowlingStyle ? `• ${selectedPlayer.bowlingStyle}` : ""}
                </p>
              </div>

              {/* Highlight Quote Box */}
              {selectedPlayer.seasonHighlight && (
                <div className="p-3.5 rounded-2xl bg-surface-soft border border-border/80 text-xs text-foreground-soft space-y-1">
                  <span className="text-[10px] font-mono uppercase font-bold text-brand-copper block">
                    SEASON 2026–27 HIGHLIGHT:
                  </span>
                  <p className="font-semibold leading-relaxed text-stone-800">
                    &ldquo;{selectedPlayer.seasonHighlight}&rdquo;
                  </p>
                </div>
              )}

              {/* Differentiated Role-Specific Telemetry Numbers */}
              <div className="grid grid-cols-4 gap-2 text-center pt-1">
                <div className="p-2.5 rounded-xl bg-surface-soft border border-border/80">
                  <span className="text-[9.5px] uppercase font-mono font-bold text-muted block">
                    MATCHES
                  </span>
                  <span className="font-headline text-xl sm:text-2xl font-black text-brand-black block mt-0.5">
                    {selectedPlayer.currentSeasonStats.matches}
                  </span>
                </div>

                {isBowler ? (
                  <>
                    <div className="p-2.5 rounded-xl bg-brand-orange/10 border border-brand-orange/20">
                      <span className="text-[9.5px] uppercase font-mono font-bold text-brand-copper block">
                        WICKETS
                      </span>
                      <span className="font-headline text-xl sm:text-2xl font-black text-brand-copper block mt-0.5">
                        {selectedPlayer.currentSeasonStats.wickets}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-surface-soft border border-border/80">
                      <span className="text-[9.5px] uppercase font-mono font-bold text-muted block">
                        ECONOMY
                      </span>
                      <span className="font-headline text-xl sm:text-2xl font-black text-brand-black block mt-0.5">
                        {selectedPlayer.currentSeasonStats.economy || "6.45"}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-surface-soft border border-border/80">
                      <span className="text-[9.5px] uppercase font-mono font-bold text-muted block">
                        BEST
                      </span>
                      <span className="font-headline text-lg sm:text-xl font-black text-brand-black block mt-0.5">
                        {selectedPlayer.careerStats.bestBowling || "5/18"}
                      </span>
                    </div>
                  </>
                ) : isKeeper ? (
                  <>
                    <div className="p-2.5 rounded-xl bg-brand-orange/10 border border-brand-orange/20">
                      <span className="text-[9.5px] uppercase font-mono font-bold text-brand-copper block">
                        RUNS
                      </span>
                      <span className="font-headline text-xl sm:text-2xl font-black text-brand-copper block mt-0.5">
                        {selectedPlayer.currentSeasonStats.runs}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-surface-soft border border-border/80">
                      <span className="text-[9.5px] uppercase font-mono font-bold text-muted block">
                        CATCHES
                      </span>
                      <span className="font-headline text-xl sm:text-2xl font-black text-brand-black block mt-0.5">
                        {selectedPlayer.currentSeasonStats.catches}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-surface-soft border border-border/80">
                      <span className="text-[9.5px] uppercase font-mono font-bold text-muted block">
                        S/RATE
                      </span>
                      <span className="font-headline text-xl sm:text-2xl font-black text-brand-black block mt-0.5">
                        {selectedPlayer.currentSeasonStats.strikeRate}
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="p-2.5 rounded-xl bg-brand-orange/10 border border-brand-orange/20">
                      <span className="text-[9.5px] uppercase font-mono font-bold text-brand-copper block">
                        RUNS
                      </span>
                      <span className="font-headline text-xl sm:text-2xl font-black text-brand-copper block mt-0.5">
                        {selectedPlayer.currentSeasonStats.runs}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-surface-soft border border-border/80">
                      <span className="text-[9.5px] uppercase font-mono font-bold text-muted block">
                        AVERAGE
                      </span>
                      <span className="font-headline text-xl sm:text-2xl font-black text-brand-black block mt-0.5">
                        {selectedPlayer.currentSeasonStats.average}
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-surface-soft border border-border/80">
                      <span className="text-[9.5px] uppercase font-mono font-bold text-muted block">
                        HIGH SCORE
                      </span>
                      <span className="font-headline text-xl sm:text-2xl font-black text-brand-black block mt-0.5">
                        {selectedPlayer.currentSeasonStats.highestScore}
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Profile CTA */}
            <div className="pt-5 mt-5 border-t border-border">
              <Link
                href={`/players/${selectedPlayer.slug}`}
                className="w-full py-3 px-4 rounded-xl bg-stone-900 hover:bg-black text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors flex items-center justify-between shadow-xs group/btn"
              >
                <span>View Full Career Profile &amp; Logs</span>
                <ArrowRight className="w-4 h-4 text-brand-orange transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* -------------------------------------------------------------------
              ZONE 2: DIFFERENTIATED SQUAD ROSTER DECK (7 COLS)
              Non-repetitive, modern interactive cards with individual strengths
              ------------------------------------------------------------------- */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between border-b border-border pb-2 px-1">
              <span className="font-mono text-xs uppercase font-bold text-muted">
                Select Athlete to Spotlight:
              </span>
              <span className="text-xs font-mono text-brand-copper font-bold">
                {filteredSquad.length} ATHLETES IN VIEW
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
              {filteredSquad.map((player) => {
                const isSelected = player.id === selectedPlayerId;
                const playerIsBowler =
                  player.role === "Fast Bowler" || player.role === "Spin Bowler";
                const playerIsKeeper = player.role.includes("Wicketkeeper");

                return (
                  <button
                    type="button"
                    key={player.id}
                    onClick={() => setSelectedPlayerId(player.id)}
                    className={`rounded-2xl p-4 sm:p-5 flex flex-col justify-between cursor-pointer text-left w-full transition-[border-color,box-shadow,transform,background-color] duration-300 sports-card ${
                      isSelected
                        ? "bg-amber-50/30 border-brand-copper ring-2 ring-brand-copper shadow-md scale-[1.01]"
                        : "bg-surface hover:bg-surface-soft border border-border"
                    }`}
                  >
                    <div className="space-y-3.5">
                      {/* Top Header Row: Mini Avatar + Jersey + Status */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-stone-900 border border-border shrink-0 shadow-xs">
                            <Image
                              src={player.photo}
                              alt={player.name}
                              fill
                              className="object-cover object-top"
                              sizes="48px"
                            />
                          </div>
                          <div>
                            <span className="font-mono text-xs font-black text-brand-copper block">
                              #{player.jerseyNumber}
                            </span>
                            <h4 className="font-headline text-lg sm:text-xl font-bold text-brand-black leading-tight">
                              {player.name}
                            </h4>
                          </div>
                        </div>

                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider ${
                            isSelected
                              ? "bg-brand-orange text-stone-950 font-black"
                              : "bg-stone-100 text-stone-600"
                          }`}
                        >
                          {isSelected ? "ACTIVE" : "SELECT"}
                        </span>
                      </div>

                      {/* Role Pill */}
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-stone-100 text-stone-700 border border-stone-200">
                          {player.role}
                        </span>
                        <span className="text-[11px] text-muted font-medium">
                          {player.battingStyle}
                        </span>
                      </div>

                      {/* Primary Signature Stat Badge */}
                      <div className="p-3 rounded-xl bg-surface-soft border border-border/80 flex items-center justify-between text-xs">
                        {playerIsBowler ? (
                          <>
                            <span className="font-mono text-muted uppercase text-[10px]">
                              Season Wickets:
                            </span>
                            <span className="font-headline text-base font-black text-brand-copper">
                              {player.currentSeasonStats.wickets} Wkts (Econ: {player.currentSeasonStats.economy})
                            </span>
                          </>
                        ) : playerIsKeeper ? (
                          <>
                            <span className="font-mono text-muted uppercase text-[10px]">
                              Dismissals &amp; Runs:
                            </span>
                            <span className="font-headline text-base font-black text-brand-copper">
                              {player.currentSeasonStats.catches} Catches • {player.currentSeasonStats.runs} Runs
                            </span>
                          </>
                        ) : (
                          <>
                            <span className="font-mono text-muted uppercase text-[10px]">
                              Season Runs:
                            </span>
                            <span className="font-headline text-base font-black text-brand-copper">
                              {player.currentSeasonStats.runs} Runs (Avg: {player.currentSeasonStats.average})
                            </span>
                          </>
                        )}
                      </div>

                      {/* Micro Bio */}
                      <p className="text-xs text-foreground-soft line-clamp-2 leading-relaxed font-normal">
                        {player.bio}
                      </p>
                    </div>

                    {/* Bottom Link Action */}
                    <div className="pt-3 mt-3 border-t border-border flex items-center justify-between text-[11px] font-mono font-bold">
                      <span className="text-muted uppercase">DCC MEMBER</span>
                      <span className="text-brand-black hover:text-brand-copper transition-colors flex items-center gap-1">
                        <span>PROFILE</span>
                        <ChevronRight className="w-3.5 h-3.5 text-brand-copper" />
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Quick Helper Banner */}
            <div className="p-4 rounded-2xl bg-surface border border-border flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-muted">
              <span className="font-bold text-brand-black">50+ ACTIVE CLUB MEMBERS</span>
              <span>25+ ANNUAL FIXTURES</span>
              <Link
                href="/players"
                className="text-brand-copper font-bold hover:underline flex items-center gap-1"
              >
                <span>FULL DIRECTORY</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
