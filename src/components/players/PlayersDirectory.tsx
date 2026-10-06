"use client";

import React, { useState } from "react";
import { Player, PlayerRole } from "@/lib/types/cricket";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";
import { PlayerCard } from "./PlayerCard";
import { Search, Filter, Users, X } from "lucide-react";

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
    <div className="py-10 sm:py-16 bg-background min-h-screen">
      <Container>
        <SectionHeading
          eyebrow="Club Roster"
          title="Squad Players & Athlete Profiles"
          description="Explore the registered squad of Devpur Cricket Club for Season 2026–27. Search by role, inspect individual strike rates, bowling figures, and recent match feats."
        />

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
            <div className="flex items-center gap-2 text-xs font-bold text-foreground-soft px-3 py-1.5 rounded-xl bg-surface-soft border border-border self-start md:self-auto">
              <Users className="w-4 h-4 text-brand-copper" />
              <span>
                Showing {filteredPlayers.length} of {initialPlayers.length} Players
              </span>
            </div>
          </div>

          {/* Role Filter Pills */}
          <div className="flex items-center gap-1.5 pt-2 border-t border-border/60 overflow-x-auto pb-1">
            {ROLES.map((role) => (
              <button
                key={role}
                onClick={() => setSelectedRole(role)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
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
            <Filter className="w-10 h-10 text-muted mx-auto mb-3" />
            <h3 className="font-headline text-2xl font-bold text-brand-black">No players found</h3>
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
  );
}
