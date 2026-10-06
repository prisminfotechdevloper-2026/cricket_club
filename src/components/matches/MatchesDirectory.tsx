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
  Filter,
  CheckCircle2,
} from "lucide-react";

interface MatchesDirectoryProps {
  initialMatches: Match[];
}

export function MatchesDirectory({ initialMatches }: MatchesDirectoryProps) {
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [tournamentFilter, setTournamentFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredMatches = initialMatches.filter((match) => {
    // Status filter
    if (statusFilter !== "all" && match.status !== statusFilter) {
      return false;
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
    <div className="py-10 sm:py-16 bg-background min-h-screen">
      <Container>
        <SectionHeading
          eyebrow="Fixtures & Results"
          title="Matches & Tournament Campaigns"
          description="Track Devpur Cricket Club's match campaign across regional leagues. View upcoming fixtures, completed scorecards, and live match updates."
        />

        {/* Filter Controls Bar */}
        <div className="p-5 sm:p-6 rounded-3xl bg-surface border border-border shadow-sm mb-10 space-y-4">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            {/* Status Tabs */}
            <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-surface-soft border border-border/80 overflow-x-auto">
              {[
                { id: "all", label: "All Matches", count: initialMatches.length },
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
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-1.5 ${
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
            <Filter className="w-10 h-10 text-muted mx-auto mb-3" />
            <h3 className="font-headline text-2xl font-bold text-brand-black">No matches found</h3>
            <p className="text-xs sm:text-sm text-muted mt-1 max-w-sm mx-auto">
              No fixtures match the selected filter criteria. Try resetting your search or tournament selection.
            </p>
            <button
              onClick={() => {
                setStatusFilter("all");
                setTournamentFilter("all");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-brand-charcoal text-white text-xs font-bold uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredMatches.map((match) => (
              <div
                key={match.id}
                className="group rounded-3xl bg-surface border border-border p-6 sm:p-7 shadow-xs hover:shadow-md transition-all sports-card"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  {/* Left: Tournament & Status */}
                  <div className="space-y-2 lg:w-1/3">
                    <div className="flex items-center gap-2">
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
                      <div className="text-xs font-bold text-emerald-700 pt-1 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{match.result}</span>
                      </div>
                    )}
                  </div>

                  {/* Right: Action CTA */}
                  <div className="lg:w-1/4 flex lg:justify-end items-center">
                    {match.status === "live" ? (
                      <Link
                        href={`/matches/${match.slug}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-charcoal text-white hover:bg-black font-bold text-xs uppercase tracking-wider transition-all shadow-sm group/btn"
                      >
                        <span>View Live Score</span>
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
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
