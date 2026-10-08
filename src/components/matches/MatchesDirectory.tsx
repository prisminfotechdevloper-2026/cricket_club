"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Match } from "@/lib/types/cricket";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";
import { LiveBadge } from "../common/LiveBadge";
import {
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  Search,
  Trophy,
} from "lucide-react";

interface MatchesDirectoryProps {
  initialMatches: Match[];
}

export function MatchesDirectory({ initialMatches }: MatchesDirectoryProps) {
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<"all" | "tournament" | "practice">("all");
  const [tournamentFilter, setTournamentFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const liveMatch = initialMatches.find((m) => m.status === "live") || initialMatches[0];

  const filteredMatches = initialMatches.filter((match) => {
    // Status filter
    if (statusFilter !== "all" && match.status !== statusFilter) {
      return false;
    }
    // Match Type filter (Practice vs Tournament per Section 16)
    if (typeFilter !== "all") {
      const isPractice =
        match.competitionType === "Practice Match" ||
        match.matchType.toLowerCase().includes("practice");
      if (typeFilter === "practice" && !isPractice) return false;
      if (typeFilter === "tournament" && isPractice) return false;
    }
    // Tournament filter
    if (tournamentFilter !== "all" && match.tournamentSlug !== tournamentFilter) {
      return false;
    }
    // Search query
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      const matchText = `${match.opponent} ${match.tournament} ${match.venue}`.toLowerCase();
      if (!matchText.includes(q)) return false;
    }
    return true;
  });

  const tournamentsList = Array.from(
    new Set(initialMatches.map((m) => JSON.stringify({ slug: m.tournamentSlug, name: m.tournament })))
  ).map((str) => JSON.parse(str) as { slug: string; name: string });

  return (
    <div className="bg-background min-h-screen">
      {/* =========================================================================
          HERO BANNER: LIGHT THEME ATHLETIC MATCHDAY ATMOSPHERE
          ========================================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-stone-100 via-stone-50 to-white text-stone-900 border-b border-stone-200 py-12 sm:py-16 lg:py-20">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Matchday Typography & Campaign Info */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EA6E18]/10 text-[#EA6E18] border border-[#EA6E18]/20 text-[11px] font-mono font-bold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EA6E18] animate-ping" />
                <span>DCC MATCHDAY // 2026–27 COMPETITIVE CAMPAIGN</span>
              </div>

              <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-stone-900 leading-[0.98]">
                MATCHES WE PLAY
                <span className="bg-gradient-to-r from-[#E66212] via-[#EA6E18] to-[#F89928] bg-clip-text text-transparent block mt-1">
                  Season Fixtures &amp; Scorecards.
                </span>
              </h1>

              <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl">
                Follow Devpur Cricket Club&apos;s practice matches and community tournament fixtures across each season.
              </p>

              {/* Action Badges */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                {[
                  { icon: <Trophy className="w-3.5 h-3.5 text-[#EA6E18]" />, text: "2× KVO RUNNERS-UP" },
                  { icon: <span className="w-2 h-2 rounded-full bg-emerald-500" />, text: "RANK #10 KVO CIRCUIT" },
                  { icon: <Calendar className="w-3.5 h-3.5 text-[#F89928]" />, text: "25+ FIXTURES / YEAR" },
                ].map((badge) => (
                  <div key={badge.text} className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-stone-200 text-xs font-mono text-stone-800 shadow-2xs">
                    {badge.icon}
                    <span>{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Live Match / Match Spotlight Card */}
            <div className="lg:col-span-5">
              {liveMatch && (
                <div className="rounded-3xl bg-white border border-stone-200/90 p-6 sm:p-7 shadow-lg relative overflow-hidden group">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-red-50 text-red-600 border border-red-200 text-[10px] font-mono font-bold uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                      LIVE MATCHDAY ACTION
                    </span>
                    <span className="text-[11px] font-mono text-stone-500 font-medium">
                      {liveMatch.tournament}
                    </span>
                  </div>

                  {/* Opponents & Live Scores */}
                  <div className="space-y-3 pb-4 border-b border-stone-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="w-3 h-3 rounded-full bg-[#EA6E18]" />
                        <span className="font-headline font-black text-xl text-stone-900">
                          Devpur CC
                        </span>
                      </div>
                      <span className="font-mono text-2xl font-black text-[#EA6E18]">
                        {liveMatch.dccScore || "146/4"}
                        <span className="text-xs font-normal text-stone-500 ml-1.5">(17.2 ov)</span>
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-stone-600">
                      <div className="flex items-center gap-2.5">
                        <span className="w-3 h-3 rounded-full bg-stone-400" />
                        <span className="font-headline font-bold text-base text-stone-700">
                          {liveMatch.opponent}
                        </span>
                      </div>
                      <span className="font-mono text-lg font-bold text-stone-700">
                        {liveMatch.opponentScore || "162/8"}
                        <span className="text-xs font-normal text-stone-400 ml-1.5">(20 ov)</span>
                      </span>
                    </div>
                  </div>

                  {/* Match Situation & CTA */}
                  <div className="pt-4 flex items-center justify-between gap-3">
                    <div className="text-xs text-stone-700 font-mono">
                      <span className="text-emerald-600 font-bold block">Need 17 runs from 16 balls</span>
                      <span className="text-stone-500 text-[11px]">Venue: {liveMatch.venue}</span>
                    </div>
                    <Link
                      href={`/matches/${liveMatch.slug}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#EA6E18] to-[#F89928] hover:from-[#D45508] hover:to-[#EA6E18] text-white text-xs font-mono font-bold uppercase tracking-wider transition-[background-image,box-shadow] shadow-sm shrink-0"
                    >
                      <span>Scorecard</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content Area */}
      <div className="py-10 sm:py-14">
        <Container>

        {/* Filter Controls Bar */}
        <div className="p-5 sm:p-6 rounded-3xl bg-surface border border-border shadow-sm mb-10 space-y-4">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            {/* Status & Type Tabs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-surface-soft border border-border/80 overflow-x-auto scrollbar-none">
                {[
                  { id: "all", label: "All Status", count: initialMatches.length },
                  {
                    id: "live",
                    label: "Live Now",
                    count: initialMatches.filter((m) => m.status === "live").length,
                  },
                  {
                    id: "upcoming",
                    label: "Upcoming",
                    count: initialMatches.filter((m) => m.status === "upcoming").length,
                  },
                  {
                    id: "completed",
                    label: "Results",
                    count: initialMatches.filter((m) => m.status === "completed").length,
                  },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setStatusFilter(tab.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5 ${
                      statusFilter === tab.id
                        ? "bg-brand-charcoal text-white shadow-xs"
                        : "text-foreground-soft hover:text-brand-black"
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                        statusFilter === tab.id ? "bg-white/20 text-white" : "bg-stone-200 text-stone-700"
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* Match Category Tabs: Tournament vs Practice */}
              <div className="flex items-center gap-1 p-1 rounded-2xl bg-surface-soft border border-border/80 overflow-x-auto scrollbar-none">
                {[
                  { id: "all", label: "All Fixtures" },
                  { id: "tournament", label: "Tournament" },
                  { id: "practice", label: "Practice" },
                ].map((typeTab) => (
                  <button
                    key={typeTab.id}
                    onClick={() => setTypeFilter(typeTab.id as "all" | "tournament" | "practice")}
                    className={`px-2.5 py-1.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                      typeFilter === typeTab.id
                        ? "bg-[#EA6E18] text-white shadow-2xs"
                        : "text-stone-600 hover:text-stone-900"
                    }`}
                  >
                    {typeTab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Search & Tournament Dropdown */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* Tournament Select */}
              <div className="relative">
                <select
                  aria-label="Filter matches by tournament"
                  value={tournamentFilter}
                  onChange={(e) => setTournamentFilter(e.target.value)}
                  className="w-full sm:w-auto text-xs sm:text-sm font-semibold rounded-xl border border-border bg-surface px-3.5 py-2.5 text-brand-black focus:outline-none focus:ring-2 focus:ring-brand-copper"
                >
                  <option value="all">All Tournaments</option>
                  {tournamentsList.map((t) => (
                    <option key={t.slug} value={t.slug}>
                      {t.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Search Input */}
              <div className="relative flex-1 sm:w-64">
                <Search className="w-4 h-4 text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  aria-label="Search matches by opponent or venue"
                  placeholder="Search opponent or venue..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs sm:text-sm rounded-xl border border-border bg-surface pl-9 pr-3.5 py-2.5 text-brand-black placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand-copper"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Matches Grid / List */}
        {filteredMatches.length === 0 ? (
          <div className="text-center py-16 px-4 rounded-3xl bg-surface border border-border">
            <div className="inline-block px-3 py-1 rounded-md bg-stone-900 text-stone-300 font-mono text-xs font-bold uppercase tracking-wider mb-3">
              [ NO FIXTURE MATCHED ]
            </div>
            <h3 className="font-headline text-2xl font-bold text-brand-black">No matches found</h3>
            <p className="text-xs sm:text-sm text-muted mt-1 max-w-sm mx-auto">
              No fixtures match the selected filter criteria. Try resetting your search or tournament selection.
            </p>
            <button
              onClick={() => {
                setStatusFilter("all");
                setTypeFilter("all");
                setTournamentFilter("all");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-brand-charcoal text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredMatches.map((match) => {
              const isPracticeMatch =
                match.competitionType === "Practice Match" ||
                match.matchType.toLowerCase().includes("practice");

              return (
              <div
                key={match.id}
                className="group rounded-3xl bg-surface border border-border p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow sports-card"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  {/* Left: Tournament, Category & Status */}
                  <div className="space-y-2 lg:w-1/3">
                    <div className="flex flex-wrap items-center gap-2">
                      {match.status === "live" ? (
                        <LiveBadge text="LIVE NOW" size="sm" />
                      ) : match.status === "upcoming" ? (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-200">
                          UPCOMING
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-stone-100 text-stone-700">
                          COMPLETED
                        </span>
                      )}

                      {/* Section 16: Strict Practice Match vs Tournament Match distinction */}
                      <span
                        className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider ${
                          isPracticeMatch
                            ? "bg-sky-50 text-sky-700 border border-sky-200"
                            : "bg-amber-50 text-[#EA6E18] border border-[#EA6E18]/30"
                        }`}
                      >
                        {isPracticeMatch ? "PRACTICE MATCH" : "TOURNAMENT MATCH"}
                      </span>

                      <span className="text-xs font-bold uppercase tracking-wider text-brand-copper">
                        {match.tournament}
                      </span>
                    </div>

                    <div className="text-xs text-muted flex flex-wrap items-center gap-2 font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-brand-copper" />
                        {match.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-brand-copper" />
                        {match.time}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-brand-copper" />
                        {match.venue}
                      </span>
                    </div>
                  </div>

                  {/* Middle: Teams & Score */}
                  <div className="lg:w-1/3 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-headline text-2xl font-bold text-brand-black">
                        DCC
                      </span>
                      <span className="font-headline text-2xl font-bold text-brand-black">
                        {match.dccScore || "—"}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-foreground-soft">
                      <span className="font-headline text-xl font-bold">
                        {match.opponent}
                      </span>
                      <span className="font-headline text-xl font-bold">
                        {match.opponentScore || "—"}
                      </span>
                    </div>

                    {match.result && (
                      <div className="text-xs font-mono font-bold text-brand-copper pt-1 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-copper shrink-0" />
                        <span>{match.result}</span>
                      </div>
                    )}
                  </div>

                  {/* Right: Action CTA */}
                  <div className="lg:w-1/4 flex lg:justify-end items-center">
                    {match.status === "live" ? (
                      <Link
                        href={`/matches/${match.slug}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-charcoal text-white hover:bg-black font-bold text-xs uppercase tracking-wider transition-colors shadow-sm group/btn"
                      >
                        <span className="text-white font-bold">View Live Score</span>
                        <ArrowRight className="w-4 h-4 text-brand-peach transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    ) : match.status === "completed" ? (
                      <Link
                        href={`/matches/${match.slug}`}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-soft hover:bg-stone-100 border border-border text-xs font-bold uppercase tracking-wider text-brand-black transition-colors"
                      >
                        <span>View Match Summary</span>
                        <ArrowRight className="w-3.5 h-3.5 text-brand-copper" />
                      </Link>
                    ) : (
                      <Link
                        href={`/matches/${match.slug}`}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-soft hover:bg-stone-100 border border-border text-xs font-bold uppercase tracking-wider text-brand-black transition-colors"
                      >
                        <span>Match Preview</span>
                        <ArrowRight className="w-3.5 h-3.5 text-brand-copper" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        )}
      </Container>
      </div>
    </div>
  );
}
