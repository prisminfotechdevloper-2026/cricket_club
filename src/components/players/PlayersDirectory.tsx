"use client";

import React, { useState } from "react";
import { Player, PlayerRole } from "@/lib/types/cricket";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";
import { PlayerCard } from "./PlayerCard";
import { Search, X, Users, Award, Shield } from "lucide-react";

interface PlayersDirectoryProps {
  initialPlayers: Player[];
}

const ROLES: (PlayerRole | "All")[] = [
  "All",
  "Opening Batter",
  "Middle Order Batter",
  "All-Rounder",
  "Fast Bowler",
  "Spin Bowler",
  "Wicketkeeper Batter",
];

export function PlayersDirectory({ initialPlayers }: PlayersDirectoryProps) {
  const [selectedRole, setSelectedRole] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPlayers = initialPlayers.filter((player) => {
    // Role filter
    if (selectedRole !== "All" && player.role !== selectedRole) {
      return false;
    }
    // Search query
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      const matchText = `${player.name} ${player.role} ${player.battingStyle} ${player.bowlingStyle || ""}`.toLowerCase();
      if (!matchText.includes(q)) return false;
    }
    return true;
  });

  return (
    <div className="bg-background min-h-screen">
      {/* =========================================================================
          HERO BANNER: LIGHT THEME SQUAD SHOWCASE & ROSTER ATMOSPHERE
          ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-stone-100 via-stone-50 to-white text-stone-900 border-b border-stone-200 py-12 sm:py-16 lg:py-20">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Squad Mission & Identity */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F0A04B]/10 text-[#F0A04B] border border-[#C16A35]/20 text-[11px] font-mono font-bold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F0A04B] animate-pulse" />
                <span>OFFICIAL SQUAD ROSTER // 2026–27 CAMPAIGN</span>
              </div>

              <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-stone-900 leading-[0.98]">
                Our Members
                <span className="bg-gradient-to-r from-[#F0A04B] via-[#F0A04B] to-[#D7833D] bg-clip-text text-transparent block mt-1">
                  The People Behind The Crest.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl">
                A community of members connected through cricket, practice, competition, friendship and shared experiences representing Devpur Gaam.
              </p>

              {/* Action Badges */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-stone-200 text-xs font-mono text-stone-800 shadow-2xs">
                  <Users className="w-3.5 h-3.5 text-[#F0A04B]" />
                  <span>50+ ACTIVE SQUAD MEMBERS</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-stone-200 text-xs font-mono text-stone-800 shadow-2xs">
                  <Award className="w-3.5 h-3.5 text-[#EAA05E]" />
                  <span>ORANGE &amp; PURPLE CAP HONOREES</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-stone-200 text-xs font-mono text-stone-800 shadow-2xs">
                  <Shield className="w-3.5 h-3.5 text-emerald-600" />
                  <span>EST. 2013 HERITAGE</span>
                </div>
              </div>
            </div>

            {/* Right Column: Squad Metrics Card (Light Theme) */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-white border border-stone-200 p-6 sm:p-7 shadow-md relative overflow-hidden">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-100">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#F0A04B] font-bold">
                    ROSTER BREAKDOWN
                  </span>
                  <span className="text-xs font-mono text-stone-500 font-medium">
                    SEASON 2026–27
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-stone-500 text-[10px] block uppercase font-bold">Batters</span>
                    <span className="font-headline font-black text-2xl text-stone-900 mt-0.5 block">
                      {initialPlayers.filter((p) => p.role.includes("Batter")).length}
                    </span>
                    <span className="text-[10px] text-stone-500">Top-order &amp; Finishers</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-stone-500 text-[10px] block uppercase font-bold">Bowlers</span>
                    <span className="font-headline font-black text-2xl text-stone-900 mt-0.5 block">
                      {initialPlayers.filter((p) => p.role.includes("Bowler")).length}
                    </span>
                    <span className="text-[10px] text-stone-500">Pace &amp; Mystery Spin</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-stone-500 text-[10px] block uppercase font-bold">All-Rounders</span>
                    <span className="font-headline font-black text-2xl text-stone-900 mt-0.5 block">
                      {initialPlayers.filter((p) => p.role.includes("All-Rounder")).length}
                    </span>
                    <span className="text-[10px] text-stone-500">Dual-impact balance</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200">
                    <span className="text-stone-500 text-[10px] block uppercase font-bold">Keepers</span>
                    <span className="font-headline font-black text-2xl text-stone-900 mt-0.5 block">
                      {initialPlayers.filter((p) => p.role.includes("Wicketkeeper")).length}
                    </span>
                    <span className="text-[10px] text-stone-500">Glovework &amp; Vocals</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-600 font-mono">
                  <span>Net Practice: Matunga Ground</span>
                  <span className="text-emerald-600 font-bold">100% Match Ready</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content Area */}
      <div className="py-10 sm:py-14">
        <Container>

        {/* Search & Filter Toolbar */}
        <div className="p-5 sm:p-6 rounded-3xl bg-surface border border-border shadow-sm mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                aria-label="Search players by name, batting or bowling style"
                placeholder="Search player by name, batting or bowling style..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs sm:text-sm rounded-xl border border-border bg-surface pl-9 pr-9 py-2.5 text-brand-black placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-copper"
              />
              {searchQuery && (
                <button
                  type="button"
                  aria-label="Clear player search"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-brand-black"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Total Players Counter */}
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-foreground-soft px-3 py-1.5 rounded-xl bg-surface-soft border border-border self-start md:self-auto">
              <span className="w-2 h-2 rounded-full bg-brand-orange" />
              <span>
                OFFICIAL SQUAD ROSTER ({filteredPlayers.length} Members)
              </span>
            </div>
          </div>

          {/* Role Filter Pills */}
          <div className="flex items-center gap-1.5 pt-2 border-t border-border/60 overflow-x-auto pb-1 scrollbar-none">
            {ROLES.map((role) => (
              <button
                key={role}
                onClick={() => setSelectedRole(role)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedRole === role
                    ? "bg-brand-charcoal text-white shadow-xs"
                    : "bg-surface-soft text-foreground-soft hover:bg-stone-100 hover:text-brand-black"
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        {/* Players Grid */}
        {filteredPlayers.length === 0 ? (
          <div className="text-center py-16 px-4 rounded-3xl bg-surface border border-border">
            <div className="inline-block px-3 py-1 rounded-md bg-stone-900 text-stone-300 font-mono text-xs font-bold uppercase tracking-wider mb-3">
              [ NO MEMBER MATCHED ]
            </div>
            <h3 className="font-headline text-2xl font-bold text-brand-black">No squad members found</h3>
            <p className="text-xs sm:text-sm text-muted mt-1 max-w-sm mx-auto">
              No squad member matched &quot;{searchQuery}&quot; under the &quot;{selectedRole}&quot; filter.
            </p>
            <button
              onClick={() => {
                setSelectedRole("All");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-brand-charcoal text-white text-xs font-bold uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPlayers.map((player) => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
        )}
      </Container>
      </div>
    </div>
  );
}
